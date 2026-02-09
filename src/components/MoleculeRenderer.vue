<template>
  <div class="molecule-card">
    <div class="molecule-label" v-if="name">{{ name }}</div>
    <div class="molecule-image-wrapper" :style="{ width: width + 'px', minHeight: height + 'px' }">
      <img
        v-if="!imgError"
        :src="pubchemUrl"
        :alt="name || smiles"
        @error="onImgError"
        @load="imgLoaded = true"
        class="molecule-img"
        loading="lazy"
      />
      <div v-if="!imgLoaded && !imgError" class="molecule-loading">載入中...</div>
      <canvas
        v-if="imgError"
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
      imgError: false,
      imgLoaded: false
    }
  },
  computed: {
    pubchemUrl() {
      const encoded = encodeURIComponent(this.smiles)
      return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${encoded}/PNG?image_size=${this.width}x${this.height}`
    }
  },
  methods: {
    setCanvasRef(el) {
      this.canvas = el
    },
    onImgError() {
      this.imgError = true
      this.$nextTick(() => this.draw())
    },
    async draw() {
      if (!this.canvas || !this.smiles) return

      const options = {
        width: this.width,
        height: this.height,
        bondThickness: 1.5,
        bondLength: 15,
        shortBondLength: 0.85,
        bondSpacing: 0.18 * 15,
        atomVisualization: 'default',
        isomeric: true,
        debug: false,
        terminalCarbons: true,
        explicitHydrogens: true,
        overlapSensitivity: 0.42,
        overlapResolutionIterations: 1,
        compactDrawing: true,
        fontSizeLarge: 6,
        fontSizeSmall: 4,
        padding: 20,
        themes: {
          light: {
            C: '#374151',
            O: '#dc2626',
            N: '#2563eb',
            S: '#ca8a04',
            F: '#16a34a',
            Cl: '#16a34a',
            Br: '#7c3aed',
            I: '#7c3aed',
            H: '#6b7280',
            BACKGROUND: '#ffffff'
          }
        }
      }

      try {
        const drawer = new SmilesDrawer.Drawer(options)
        SmilesDrawer.parse(this.smiles, (tree) => {
          drawer.draw(tree, this.canvas, 'light')
        }, (err) => {
          console.warn('SMILES parse error:', this.smiles, err)
        })
      } catch (e) {
        console.warn('SmilesDrawer error:', e)
      }
    }
  },
  mounted() {
    // PubChem image loads first; canvas draws only on error
  },
  watch: {
    smiles() {
      this.imgError = false
      this.imgLoaded = false
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
  padding: 1rem;
  margin: 0.5rem;
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
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
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

.molecule-loading {
  position: absolute;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.molecule-smiles {
  font-family: 'Consolas', monospace;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
  word-break: break-all;
  max-width: 280px;
  text-align: center;
}

canvas {
  border-radius: 8px;
}
</style>
