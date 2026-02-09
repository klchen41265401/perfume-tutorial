<template>
  <div class="chapter-pagination">
    <router-link
      v-if="prev"
      :to="prev.to"
      class="page-btn"
    >
      ← {{ prev.label }}
    </router-link>
    <span v-else class="page-btn disabled">← 上一章</span>

    <div class="page-numbers">
      <router-link
        v-for="n in 8"
        :key="n"
        :to="`/chapter/${n}`"
        :class="['page-num', { active: currentChapter === n }]"
      >
        {{ n }}
      </router-link>
    </div>

    <router-link
      v-if="next"
      :to="next.to"
      class="page-btn"
    >
      {{ next.label }} →
    </router-link>
    <span v-else class="page-btn disabled">下一章 →</span>
  </div>
</template>

<script>
export default {
  name: 'ChapterNav',
  props: {
    prev: { type: Object, default: null },
    next: { type: Object, default: null }
  },
  computed: {
    currentChapter() {
      const match = this.$route.path.match(/\/chapter\/(\d+)/)
      return match ? parseInt(match[1]) : null
    }
  }
}
</script>

<style scoped>
.chapter-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 1.5rem 0 2rem;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
}

.page-btn {
  color: var(--accent-blue) !important;
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  transition: all 0.25s ease;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
}

.page-btn:hover {
  background: #eef2ff;
  border-color: #c7d2fe;
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
  width: 36px;
  height: 36px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-secondary) !important;
  text-decoration: none;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  transition: all 0.25s ease;
}

.page-num:hover {
  background: #eef2ff;
  color: var(--accent-blue) !important;
  border-color: #c7d2fe;
}

.page-num::after {
  display: none;
}

.page-num.active {
  background: var(--gradient-primary);
  color: #ffffff !important;
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .chapter-pagination {
    gap: 0.5rem;
    padding: 0.75rem;
  }
  .page-btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  .page-num {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
}
</style>
