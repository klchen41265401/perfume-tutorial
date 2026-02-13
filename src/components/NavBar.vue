<template>
  <nav class="nav-rail" :class="{ collapsed }">
    <button class="collapse-toggle" @click="$emit('toggle')" :title="collapsed ? t('common.expandSidebar') : t('common.collapseSidebar')">
      <span class="toggle-icon">{{ collapsed ? '▸' : '◂' }}</span>
    </button>
    <div class="nav-brand">
      <div class="brand-title">{{ collapsed ? 'S·S' : 'SYLVAN SANCTUM' }}</div>
      <div v-if="!collapsed" class="brand-sub">{{ t('common.subtitle') }}</div>
    </div>
    <div class="nav-group">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="nav-item"
        :class="{ active: $route.path === item.to }"
        :title="collapsed ? t(item.labelKey) : ''"
      >
        <span class="nav-ornament">{{ item.icon }}</span>
        <span v-if="!collapsed" class="nav-label">{{ t(item.labelKey) }}</span>
      </router-link>
    </div>

    <!-- 語言切換按鈕 -->
    <button class="lang-toggle" @click="toggleLanguage" :title="isZh ? t('common.switchToEnglish') : t('common.switchToChinese')">
      <span class="lang-icon">{{ language.icon }}</span>
      <span v-if="!collapsed" class="lang-label">{{ isZh ? '中文' : 'EN' }}</span>
    </button>

    <div v-if="!collapsed" class="nav-foot">
      <span class="nav-foot-line">Forest Lab Edition</span>
    </div>
  </nav>
</template>

<script>
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'NavBar',
  props: {
    collapsed: { type: Boolean, default: false }
  },
  emits: ['toggle'],
  setup() {
    const { language, isZh, isEn, toggleLanguage, t } = useLanguage()
    return { language, isZh, isEn, toggleLanguage, t }
  },
  data() {
    return {
      navItems: [
        { to: '/', labelKey: 'common.homeLabel', icon: '🏠' },
        { to: '/chapter/1', labelKey: 'common.chapter1Label', icon: '⚛️' },
        { to: '/chapter/2', labelKey: 'common.chapter2Label', icon: '🔥' },
        { to: '/chapter/3', labelKey: 'common.chapter3Label', icon: '🔗' },
        { to: '/chapter/4', labelKey: 'common.chapter4Label', icon: '⚗️' },
        { to: '/chapter/5', labelKey: 'common.chapter5Label', icon: '📋' },
        { to: '/chapter/6', labelKey: 'common.chapter6Label', icon: '📊' },
        { to: '/chapter/7', labelKey: 'common.chapter7Label', icon: '🌹' },
        { to: '/chapter/8', labelKey: 'common.chapter8Label', icon: '🧬' },
        { to: '/chapter/9', labelKey: 'common.chapter9Label', icon: '📖' },
        { to: '/chapter/10', labelKey: 'common.chapter10Label', icon: '🧴' }
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

/* ── 語言切換按鈕 ── */
.lang-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  margin-top: 0.5rem;
  border-radius: 12px;
  border: 1px solid rgba(168, 230, 207, 0.4);
  background: linear-gradient(135deg, rgba(168, 230, 207, 0.15), rgba(20, 45, 25, 0.2));
  color: var(--leaf-light);
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(168, 230, 207, 0.1);
}

.collapsed .lang-toggle {
  padding: 0.55rem;
}

.lang-toggle:hover {
  border-color: rgba(168, 230, 207, 0.7);
  background: linear-gradient(135deg, rgba(168, 230, 207, 0.25), rgba(20, 45, 25, 0.3));
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(168, 230, 207, 0.2);
}

.lang-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.lang-label {
  font-weight: 500;
  white-space: nowrap;
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

@media (max-width: 991px) {
  .collapse-toggle { display: none; }

  .nav-rail {
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    height: auto;
    padding: 0.75rem 1rem;
    gap: 0.75rem;
    border-radius: 14px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }

  .nav-brand {
    border-bottom: none;
    border-right: 1px solid rgba(255, 215, 0, 0.25);
    padding-right: 1rem;
    padding-bottom: 0;
    flex-shrink: 0;
  }

  .brand-title {
    font-size: 0.95rem;
    letter-spacing: 2px;
  }

  .brand-sub {
    font-size: 0.72rem;
    margin-top: 0.15rem;
  }

  .nav-group {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0.3rem;
  }

  .nav-item {
    white-space: nowrap;
    padding: 0.45rem 0.65rem;
    font-size: 0.82rem;
    border-radius: 10px;
  }

  .nav-item:hover {
    transform: translateY(-1px);
  }

  /* 語言切換按鈕 - 平板 */
  .lang-toggle {
    margin-top: 0;
    margin-left: auto;
    padding: 0.45rem 0.65rem;
    font-size: 0.82rem;
    flex-shrink: 0;
  }

  .nav-foot {
    display: none;
  }
}

@media (max-width: 767px) {
  .nav-rail {
    padding: 0.6rem 0.75rem;
    gap: 0.5rem;
    border-radius: 12px;
  }

  .brand-title {
    font-size: 0.85rem;
    letter-spacing: 1px;
  }

  .brand-sub {
    display: none;
  }

  .nav-item {
    padding: 0.4rem 0.55rem;
    font-size: 0.78rem;
  }

  .nav-label {
    display: none;
  }

  .nav-ornament {
    font-size: 1.1rem;
  }

  /* 語言切換按鈕 - 手機 */
  .lang-toggle {
    padding: 0.4rem 0.55rem;
    font-size: 0.78rem;
  }

  .lang-label {
    display: none;
  }

  .lang-icon {
    font-size: 1.2rem;
  }
}

@media (max-width: 479px) {
  .nav-rail {
    padding: 0.5rem 0.6rem;
    gap: 0.35rem;
    border-radius: 10px;
  }

  .nav-brand {
    padding-right: 0.6rem;
  }

  .brand-title {
    font-size: 0.75rem;
  }

  .nav-item {
    padding: 0.35rem 0.45rem;
    border-radius: 8px;
  }

  .nav-ornament {
    font-size: 1rem;
  }
}
</style>
