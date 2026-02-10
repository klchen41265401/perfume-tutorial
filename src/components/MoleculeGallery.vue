<template>
  <div class="molecule-gallery">
    <h4 v-if="title" class="gallery-title">{{ title }}</h4>
    <div class="gallery-grid">
      <MoleculeRenderer
        v-for="(mol, i) in molecules"
        :key="i"
        :smiles="mol.smiles"
        :name="mol.name"
        :width="itemWidth"
        :height="itemHeight"
        :show-smiles="showSmiles"
      />
    </div>
  </div>
</template>

<script>
import MoleculeRenderer from './MoleculeRenderer.vue'

export default {
  name: 'MoleculeGallery',
  components: { MoleculeRenderer },
  props: {
    title: { type: String, default: '' },
    molecules: { type: Array, required: true },
    itemWidth: { type: Number, default: 220 },
    itemHeight: { type: Number, default: 140 },
    showSmiles: { type: Boolean, default: true }
  }
}
</script>

<style scoped>
.molecule-gallery {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 1rem;
  margin: 1.2rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.gallery-title {
  color: var(--accent-purple);
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
