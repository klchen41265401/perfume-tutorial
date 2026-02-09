<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
    <router-link to="/" :class="{ active: $route.path === '/' }">🏠 首頁</router-link>
    <router-link to="/chapter/1" :class="{ active: $route.path === '/chapter/1' }">第1章 量子化學</router-link>
    <router-link to="/chapter/2" :class="{ active: $route.path === '/chapter/2' }">第2章 熱力學</router-link>
    <router-link to="/chapter/3" :class="{ active: $route.path === '/chapter/3' }">第3章 SAR</router-link>
    <router-link to="/chapter/4" :class="{ active: $route.path === '/chapter/4' }">第4章 合成</router-link>
    <router-link to="/chapter/5" :class="{ active: $route.path === '/chapter/5' }">第5章 配方</router-link>
    <router-link to="/chapter/6" :class="{ active: $route.path === '/chapter/6' }">第6章 分析</router-link>
    <router-link to="/chapter/7" :class="{ active: $route.path === '/chapter/7' }">第7章 案例</router-link>
    <router-link to="/chapter/8" :class="{ active: $route.path === '/chapter/8' }">第8章 進階</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return { isScrolled: false }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  padding: 0.8rem 2rem;
  margin: -2rem -2rem 2rem -2rem;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1000;
  border-bottom: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.nav.scrolled {
  padding: 0.5rem 2rem;
  border-radius: 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.nav a {
  color: #475569;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.88rem;
  transition: all 0.25s ease;
  position: relative;
  border: 1px solid transparent;
}

.nav a::before {
  display: none;
}

.nav a:hover {
  color: #2563eb;
  background: #eef2ff;
  border-color: #c7d2fe;
  transform: translateY(-1px);
}

.nav a::after {
  display: none;
}

.nav a.active,
.nav a.router-link-exact-active {
  background: var(--gradient-primary);
  color: #ffffff;
  font-weight: 600;
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .nav {
    padding: 0.6rem 0.8rem;
    gap: 0.25rem;
  }
  .nav a {
    font-size: 0.72rem;
    padding: 0.35rem 0.5rem;
  }
}
</style>
