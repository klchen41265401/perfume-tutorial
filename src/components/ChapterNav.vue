<template>
  <div class="chapter-pagination">
    <router-link
      v-if="prev"
      :to="prev.to"
      class="page-btn chapter-btn"
    >
      &larr; {{ prev.label }}
    </router-link>
    <span v-else class="page-btn chapter-btn disabled">&larr; {{ t('common.previousChapter') }}</span>

    <div class="page-numbers" v-if="sections && sections.length">
      <button
        v-for="sec in sections"
        :key="sec.id"
        :class="['page-num', 'section-btn', { active: activeSection === sec.id }]"
        @click="selectSection(sec.id)"
        :title="sec.label"
      >
        {{ sec.label }}
      </button>
    </div>

    <router-link
      v-if="next"
      :to="next.to"
      class="page-btn chapter-btn"
    >
      {{ next.label }} &rarr;
    </router-link>
    <span v-else class="page-btn chapter-btn disabled">{{ t('common.nextChapter') }} &rarr;</span>
  </div>
</template>

<script>
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'ChapterNav',
  props: {
    prev: { type: Object, default: null },
    next: { type: Object, default: null },
    sections: { type: Array, default: () => [] },
    activeSection: { type: String, default: '' }
  },
  emits: ['update:activeSection'],
  setup() {
    const { t } = useLanguage()
    return { t }
  },
  methods: {
    selectSection(id) {
      this.$emit('update:activeSection', id)
    }
  }
}
</script>

<style scoped>
.chapter-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0 1.5rem;
  padding: 0.75rem 0.9rem;
  background: rgba(18, 40, 22, 0.55);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(10px);
}

.page-btn {
  color: var(--leaf-light) !important;
  text-decoration: none;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  transition: all 0.25s ease;
  background: rgba(20, 45, 28, 0.6);
  border: 1px solid rgba(168, 230, 207, 0.25);
  font-weight: 500;
  font-size: 0.82rem;
  white-space: nowrap;
}

.page-btn:hover {
  background: rgba(255, 215, 0, 0.18);
  border-color: rgba(255, 215, 0, 0.4);
  transform: translateY(-1px);
}

.page-btn.disabled {
  color: var(--text-muted) !important;
  pointer-events: none;
  opacity: 0.5;
}

.page-btn::after {
  display: none;
}

.page-numbers {
  display: flex;
  gap: 0.35rem;
}

.page-num {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 30px;
  padding: 0 0.4rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.78rem;
  color: var(--text-secondary) !important;
  text-decoration: none;
  background: rgba(20, 45, 28, 0.6);
  border: 1px solid rgba(168, 230, 207, 0.25);
  transition: all 0.25s ease;
  cursor: pointer;
  font-family: inherit;
}

.page-num:hover {
  background: rgba(255, 215, 0, 0.18);
  color: var(--gold-glow) !important;
  border-color: rgba(255, 215, 0, 0.4);
}

.page-num::after {
  display: none;
}

.section-btn.active {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.7), rgba(168, 230, 207, 0.7));
  color: #0b1a10 !important;
  border-color: transparent;
  box-shadow: 0 8px 16px rgba(10, 25, 10, 0.25);
}

@media (max-width: 991px) {
  .chapter-pagination {
    gap: 0.5rem;
    padding: 0.7rem 0.8rem;
  }
  .page-btn {
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
  }
  .page-numbers {
    flex-wrap: wrap;
    justify-content: center;
  }
  .page-num {
    min-width: 30px;
    height: 30px;
    font-size: 0.75rem;
    padding: 0 0.3rem;
  }
}

@media (max-width: 767px) {
  .chapter-pagination {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.6rem;
    border-radius: 12px;
  }
  .page-btn {
    font-size: 0.78rem;
    padding: 0.35rem 0.7rem;
    width: 100%;
    text-align: center;
  }
  .page-numbers {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 479px) {
  .chapter-pagination {
    padding: 0.5rem;
    border-radius: 10px;
    margin: 0.75rem 0 1rem;
  }
  .page-btn {
    font-size: 0.72rem;
    padding: 0.3rem 0.5rem;
  }
  .page-num {
    min-width: 26px;
    height: 26px;
    font-size: 0.68rem;
  }
}
</style>
