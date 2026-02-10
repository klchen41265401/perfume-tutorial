/**
 * PubChem 圖片排程載入器
 * 
 * 遵守 PubChem API 速率限制（~5 req/s），以固定節奏批次載入分子結構圖。
 * - 每秒最多發出 5 個請求
 * - 自動偵測可視區域，優先載入使用者看得到的分子
 * - 失敗不中斷，繼續載入佇列中的下一批
 * - 結果快取：相同 SMILES 只請求一次
 */

class PubChemQueue {
  constructor() {
    /** @type {Map<string, string>} smiles → blobUrl */
    this.cache = new Map()
    /** @type {Set<string>} failed SMILES */
    this.failed = new Set()
    /** @type {Map<string, { url: string, callbacks: Function[] }>} pending items */
    this.pending = new Map()
    /** @type {string[]} ordered queue of smiles keys waiting to fetch */
    this.queue = []
    this.processing = false
    this.batchSize = 5
    this.intervalMs = 1100  // slightly over 1s for safety margin
  }

  /**
   * Register a molecule for fetching.
   * @param {string} smiles 
   * @param {number} width 
   * @param {number} height 
   * @param {(blobUrl: string|null, error: any) => void} callback 
   * @returns {() => void} unregister function
   */
  register(smiles, width, height, callback) {
    const key = smiles

    // Already cached → immediate callback
    if (this.cache.has(key)) {
      queueMicrotask(() => callback(this.cache.get(key), null))
      return () => {}
    }

    // Already failed → immediate error callback
    if (this.failed.has(key)) {
      queueMicrotask(() => callback(null, 'previously-failed'))
      return () => {}
    }

    // Already in pending → add callback to existing entry
    if (this.pending.has(key)) {
      this.pending.get(key).callbacks.push(callback)
      return () => {
        const entry = this.pending.get(key)
        if (entry) {
          entry.callbacks = entry.callbacks.filter(cb => cb !== callback)
        }
      }
    }

    // New entry
    const url = this._buildUrl(smiles, width, height)
    this.pending.set(key, { url, callbacks: [callback] })
    this.queue.push(key)

    this._startProcessing()

    return () => {
      const entry = this.pending.get(key)
      if (entry) {
        entry.callbacks = entry.callbacks.filter(cb => cb !== callback)
      }
    }
  }

  /**
   * Prioritize a set of SMILES keys — move them to the front of the queue.
   * Called when molecules enter the viewport; user sees them first.
   * @param {string[]} smilesKeys 
   */
  prioritize(smilesKeys) {
    const inQueue = new Set(this.queue)
    const toBump = smilesKeys.filter(k => inQueue.has(k))
    if (toBump.length === 0) return

    const bumpSet = new Set(toBump)
    this.queue = [
      ...toBump,
      ...this.queue.filter(k => !bumpSet.has(k))
    ]
  }

  /**
   * Prioritize a single SMILES key.
   * @param {string} smiles 
   */
  prioritizeOne(smiles) {
    const idx = this.queue.indexOf(smiles)
    if (idx > 0) {
      this.queue.splice(idx, 1)
      this.queue.unshift(smiles)
    }
  }

  _buildUrl(smiles, w, h) {
    const encoded = encodeURIComponent(smiles)
    return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${encoded}/PNG?image_size=${w}x${h}`
  }

  _startProcessing() {
    if (this.processing) return
    this.processing = true
    this._processBatch()
  }

  async _processBatch() {
    while (this.queue.length > 0) {
      // Take next batch
      const batch = this.queue.splice(0, this.batchSize)

      const promises = batch.map(async (key) => {
        const entry = this.pending.get(key)
        if (!entry) return

        try {
          const resp = await fetch(entry.url)
          if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
          const blob = await resp.blob()
          if (blob.size < 100) throw new Error('Empty response')
          const blobUrl = URL.createObjectURL(blob)
          this.cache.set(key, blobUrl)
          entry.callbacks.forEach(cb => cb(blobUrl, null))
        } catch (e) {
          this.failed.add(key)
          entry.callbacks.forEach(cb => cb(null, e))
        } finally {
          this.pending.delete(key)
        }
      })

      await Promise.all(promises)

      // Wait before next batch (rate limiting)
      if (this.queue.length > 0) {
        await new Promise(r => setTimeout(r, this.intervalMs))
      }
    }

    this.processing = false
  }
}

/** Singleton instance */
export const pubchemQueue = new PubChemQueue()
