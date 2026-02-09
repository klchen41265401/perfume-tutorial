import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Chart } from 'chart.js/auto'

export function useChart(canvasRef, configFn) {
  const chart = ref(null)

  const createChart = () => {
    if (!canvasRef.value) return
    if (chart.value) chart.value.destroy()
    const config = typeof configFn === 'function' ? configFn() : configFn
    chart.value = new Chart(canvasRef.value, config)
  }

  const updateChart = (newConfig) => {
    if (chart.value) chart.value.destroy()
    if (!canvasRef.value) return
    const config = typeof newConfig === 'function' ? newConfig() : newConfig
    chart.value = new Chart(canvasRef.value, config)
  }

  onMounted(() => createChart())
  onUnmounted(() => {
    if (chart.value) chart.value.destroy()
  })

  return { chart, createChart, updateChart }
}
