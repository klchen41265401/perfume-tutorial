<template>
  <div class="chapter-layout">
    <h1>{{ title }}</h1>
    <ChapterNav
      :prev="prev"
      :next="next"
      :sections="sections"
      :active-section="activeSection"
      @update:activeSection="$emit('update:activeSection', $event)"
    />
    <div class="chapter-body">
      <slot />
    </div>
  </div>
</template>

<script>
import ChapterNav from './ChapterNav.vue'

export default {
  name: 'ChapterLayout',
  components: { ChapterNav },
  props: {
    title: { type: String, required: true },
    prev: { type: Object, default: null },
    next: { type: Object, default: null },
    sections: { type: Array, default: () => [] },
    activeSection: { type: String, default: '' }
  },
  emits: ['update:activeSection']
}
</script>
