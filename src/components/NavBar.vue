<template>
  <nav class="nav-rail" :class="{ collapsed }">
    <button class="collapse-toggle" @click="$emit('toggle')" :title="collapsed ? '展開側邊欄' : '收合側邊欄'">
      <span class="toggle-icon">{{ collapsed ? '▸' : '◂' }}</span>
    </button>
    <div class="nav-brand">
      <div class="brand-title">{{ collapsed ? 'S·S' : 'SYLVAN SANCTUM' }}</div>
      <div v-if="!collapsed" class="brand-sub">香料化學課程</div>
    </div>
    <div class="nav-group">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="nav-item"
        :class="{ active: $route.path === item.to }"
        :title="collapsed ? item.label : ''"
      >
        <span class="nav-ornament">{{ item.icon }}</span>
        <span v-if="!collapsed" class="nav-label">{{ item.label }}</span>
      </router-link>
    </div>
    <div v-if="!collapsed" class="nav-foot">
      <span class="nav-foot-line">Forest Lab Edition</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    collapsed: { type: Boolean, default: false }
  },
  emits: ['toggle'],
  data() {
    return {
      navItems: [
        { to: '/', label: '首頁 · Realm Overview', icon: '🏠' },
        { to: '/chapter/1', label: '第1章 · 量子化學', icon: '⚛️' },
        { to: '/chapter/2', label: '第2章 · 熱力學', icon: '🔥' },
        { to: '/chapter/3', label: '第3章 · SAR', icon: '🔗' },
        { to: '/chapter/4', label: '第4章 · 合成', icon: '⚗️' },
        { to: '/chapter/5', label: '第5章 · 配方', icon: '📋' },
        { to: '/chapter/6', label: '第6章 · 分析', icon: '📊' },
        { to: '/chapter/7', label: '第7章 · 案例', icon: '🌹' },
        { to: '/chapter/8', label: '第8章 · 進階', icon: '🧬' },
        { to: '/chapter/9', label: '第9章 · 分子圖鑑', icon: '📖' }
      ]
    }
  }
}
</script>

<style scoped>
.nav-rail {
  position: relative;
  height: 100%;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--glass-panel);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-md);
  overflow-y: auto;
  overflow-x: hidden;
  transition: padding 0.3s ease;
}

.nav-rail.collapsed {
  padding: 1.2rem 0.5rem;
  align-items: center;
}

/* ── 收合按鈕 ── */
.collapse-toggle {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(255, 215, 0, 0.3);
  background: rgba(12, 30, 18, 0.5);
  color: var(--gold-glow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  z-index: 2;
  transition: all 0.25s ease;
  padding: 0;
}

.collapse-toggle:hover {
  background: rgba(255, 215, 0, 0.2);
  border-color: var(--gold-glow);
  transform: scale(1.1);
}

.collapsed .collapse-toggle {
  position: static;
  margin-bottom: 0.2rem;
}

.nav-brand {
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 215, 0, 0.25);
  transition: all 0.3s ease;
}

.collapsed .nav-brand {
  padding-bottom: 0.5rem;
}

.brand-title {
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: var(--leaf-light);
  text-shadow: 0 0 18px rgba(168, 230, 207, 0.5);
  transition: font-size 0.3s ease, letter-spacing 0.3s ease;
}

.collapsed .brand-title {
  font-size: 1rem;
  letter-spacing: 1px;
}

.brand-sub {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.4rem;
}

.nav-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  transition: all 0.35s ease;
  border: 1px solid transparent;
  background: rgba(15, 35, 20, 0.18);
  white-space: nowrap;
  overflow: hidden;
}

.collapsed .nav-item {
  justify-content: center;
  padding: 0.55rem;
}

.nav-item::after {
  display: none;
}

.nav-ornament {
  font-size: 1rem;
  opacity: 0.75;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.collapsed .nav-ornament {
  font-size: 1.15rem;
  opacity: 1;
}

.nav-item:hover {
  color: #ffffff;
  border-color: rgba(255, 215, 0, 0.4);
  background: linear-gradient(90deg, rgba(255, 215, 0, 0.18), rgba(20, 50, 25, 0.2));
  transform: translateX(4px);
}

.collapsed .nav-item:hover {
  transform: scale(1.08);
}

.nav-item:hover .nav-ornament {
  opacity: 1;
  transform: scale(1.1);
}

.nav-item.active,
.nav-item.router-link-exact-active {
  color: #ffffff;
  border-color: rgba(168, 230, 207, 0.6);
  background: linear-gradient(90deg, rgba(168, 230, 207, 0.25), rgba(20, 45, 25, 0.2));
  box-shadow: 0 8px 18px rgba(10, 25, 10, 0.2);
}

.nav-foot {
  margin-top: auto;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  letter-spacing: 1px;
}

@media (max-width: 980px) {
  .collapse-toggle { display: none; }

  .nav-rail {
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
    height: auto;
  }

  .nav-brand {
    border-bottom: none;
    border-right: 1px solid rgba(255, 215, 0, 0.25);
    padding-right: 1rem;
  }

  .nav-group {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .nav-item {
    white-space: nowrap;
  }

  .nav-foot {
    display: none;
  }
}
</style>
