import { createApp } from 'vue'
import { Chart } from 'chart.js/auto'
import App from './App.vue'
import router from './router'
import './assets/style.css'

/* Chart.js 亮色主題全域插件 */
Chart.register({
  id: 'lightThemeOverride',
  beforeInit(chart) {
    const opts = chart.options
    // 圖例文字
    if (opts.plugins?.legend?.labels) {
      opts.plugins.legend.labels.color = '#374151'
    }
    // 標題
    if (opts.plugins?.title) {
      opts.plugins.title.color = '#1e293b'
    }
    // 座標軸
    const scales = opts.scales || {}
    for (const key of Object.keys(scales)) {
      if (scales[key].ticks) scales[key].ticks.color = '#6b7280'
      if (scales[key].grid) scales[key].grid.color = 'rgba(0,0,0,0.06)'
      if (scales[key].title) scales[key].title.color = '#374151'
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
