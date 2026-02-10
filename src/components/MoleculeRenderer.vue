<template>
  <div class="molecule-card" ref="rootEl">
    <div class="molecule-label" v-if="name">{{ name }}</div>
    <div class="molecule-image-wrapper" :style="{ width: width + 'px', minHeight: height + 'px' }">
      <!-- 載入中 shimmer -->
      <div v-if="!imgSrc && !useFallback" class="molecule-placeholder"></div>
      <!-- PubChem 圖片（由排程佇列提供 blob URL） -->
      <img
        v-if="imgSrc && !useFallback"
        :src="imgSrc"
        :alt="name || smiles"
        class="molecule-img"
      />
      <!-- smiles-drawer fallback -->
      <canvas
        v-if="useFallback"
        :ref="setCanvasRef"
        :width="width"
        :height="height"
      ></canvas>
    </div>
    <div class="molecule-smiles" v-if="showSmiles">{{ smiles }}</div>
  </div>
</template>

<script>
import SmilesDrawer from 'smiles-drawer'
import { pubchemQueue } from '../composables/pubchemQueue.js'

// Shared drawer instance per dimension — one for all components
const drawerCache = new Map()

function getSharedDrawer(w, h) {
  const key = `${w}x${h}`
  if (drawerCache.has(key)) return drawerCache.get(key)
  const drawer = new SmilesDrawer.Drawer({
    width: w, height: h,
    bondThickness: 1.5, bondLength: 15,
    shortBondLength: 0.85, bondSpacing: 0.18 * 15,
    atomVisualization: 'default', isomeric: true,
    debug: false, terminalCarbons: true, explicitHydrogens: true,
    overlapSensitivity: 0.42, overlapResolutionIterations: 1,
    compactDrawing: true,
    fontSizeLarge: 6, fontSizeSmall: 4, padding: 20,
    themes: {
      light: {
        C: '#374151', O: '#dc2626', N: '#2563eb', S: '#ca8a04',
        F: '#16a34a', Cl: '#16a34a', Br: '#7c3aed', I: '#7c3aed',
        H: '#6b7280', BACKGROUND: '#ffffff'
      }
    }
  })
  drawerCache.set(key, drawer)
  return drawer
}

export default {
  name: 'MoleculeRenderer',
  props: {
    smiles: { type: String, required: true },
    name: { type: String, default: '' },
    width: { type: Number, default: 300 },
    height: { type: Number, default: 200 },
    showSmiles: { type: Boolean, default: false },
    theme: { type: String, default: 'light' }
  },
  data() {
    return {
      canvas: null,
      imgSrc: null,       // blob URL from queue
      useFallback: false,  // true → show smiles-drawer canvas
      unregisterQueue: null,
      observer: null
    }
  },
  methods: {
    setCanvasRef(el) {
      this.canvas = el
    },
    /** Register with PubChem queue for rate-limited fetching */
    registerFetch() {
      this.cleanup()
      this.imgSrc = null
      this.useFallback = false

      this.unregisterQueue = pubchemQueue.register(
        this.smiles,
        this.width,
        this.height,
        (blobUrl, error) => {
          if (blobUrl) {
            this.imgSrc = blobUrl
          } else {
            // PubChem failed → fallback to local smiles-drawer
            this.useFallback = true
            this.$nextTick(() => this.drawCanvas())
          }
        }
      )
    },
    /** Draw molecule locally via smiles-drawer (fallback) */
    drawCanvas() {
      if (!this.canvas || !this.smiles) return
      try {
        const drawer = getSharedDrawer(this.width, this.height)
        SmilesDrawer.parse(this.smiles, (tree) => {
          drawer.draw(tree, this.canvas, 'light')
        }, (err) => {
          console.warn('SMILES parse error:', this.smiles, err)
        })
      } catch (e) {
        console.warn('SmilesDrawer error:', e)
      }
    },
    /** IntersectionObserver: when visible, bump priority in queue */
    setupObserver() {
      const scrollRoot = this.$refs.rootEl?.closest('.main-panel') || null
      this.observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            pubchemQueue.prioritizeOne(this.smiles)
            // Once prioritized once, disconnect — no need to keep watching
            this.observer?.disconnect()
            this.observer = null
            break
          }
        }
      }, {
        root: scrollRoot,
        rootMargin: '300px 0px'
      })
      if (this.$refs.rootEl) {
        this.observer.observe(this.$refs.rootEl)
      }
    },
    cleanup() {
      if (this.unregisterQueue) {
        this.unregisterQueue()
        this.unregisterQueue = null
      }
      this.observer?.disconnect()
      this.observer = null
    }
  },
  mounted() {
    this.registerFetch()
    this.setupObserver()
  },
  beforeUnmount() {
    this.cleanup()
  },
  watch: {
    smiles() {
      this.registerFetch()
      this.setupObserver()
    }
  }
}
</script>

<style scoped>
.molecule-card {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 0.75rem;
  margin: 0.25rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.molecule-card:hover {
  border-color: var(--accent-purple);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.12);
  transform: translateY(-2px);
}

.molecule-label {
  font-weight: 600;
  color: var(--accent-purple);
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
}

.molecule-image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.molecule-img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  background: #ffffff;
}

.molecule-placeholder {
  width: 100%;
  height: 100%;
  min-height: inherit;
  background: linear-gradient(135deg, #f8faf8 25%, #eef3ee 50%, #f8faf8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.molecule-smiles {
  font-family: 'Consolas', monospace;
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-top: 0.35rem;
  word-break: break-all;
  max-width: 220px;
  text-align: center;
}

canvas {
  border-radius: 8px;
}
</style>
