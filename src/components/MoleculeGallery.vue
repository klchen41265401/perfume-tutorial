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
    itemWidth: { type: Number, default: 260 },
    itemHeight: { type: Number, default: 180 },
    showSmiles: { type: Boolean, default: true }
  }
}
</script>

<style scoped>
.molecule-gallery {
  background: #f8f9fc;
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.gallery-title {
  color: var(--accent-purple);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
