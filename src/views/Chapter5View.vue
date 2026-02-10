<template>
  <ChapterLayout
    title="第5章：配方工程"
    :prev="{ to: '/chapter/4', label: '第4章：合成' }"
    :next="{ to: '/chapter/6', label: '第6章：分析方法' }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-5-1'" class="chapter-section">
        <h2 id="sec-5-1">5.1 揮發曲線的微分方程</h2>
        <h3>5.1.1 單組分揮發模型</h3>
        <p>香料分子的揮發過程受 Fick 第二定律支配：</p>
        <pre><code>∂C/∂t = D·∂²C/∂x² - v·∂C/∂x - k·C

C(x,t): 濃度分佈 (mol/m³)
D: 擴散係數 (m²/s), v: 對流速度 (m/s), k: 揮發速率常數 (s⁻¹)

邊界條件：
C(0,t) = C₀, C(∞,t) = 0, C(x,0) = 0

穩態近似解：
C(x,t) = C₀·exp(-√(k/D)·x)·[1 - erf(x/√(4Dt))]</code></pre>

        <h3>5.1.2 多組分競爭揮發</h3>
        <div class="chart-container"><canvas ref="evaporationChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-5-2'" class="chapter-section">
        <h2 id="sec-5-2">5.2 多組分擴散模型</h2>
        <h3>5.2.1 Maxwell-Stefan方程</h3>
        <p>對於濃縮香精，組分間相互作用不可忽略：</p>
        <pre><code>∇(μᵢ) = RT·∑ⱼ (xⱼNᵢ - xᵢNⱼ) / (cₜ·Ðᵢⱼ)

簡化為Fick型：Nᵢ = -cₜ·∑ⱼ Dᵢⱼ·∇xⱼ
[D] = [Γ]·[Ð]·[Γ]⁻¹
Γᵢⱼ = δᵢⱼ + xᵢ·(∂ln(γᵢ)/∂xⱼ)</code></pre>

        <h3>5.2.2 活度係數計算：UNIFAC模型</h3>
        <pre><code>ln(γ_i) = ln(γ_i_C) + ln(γ_i_R)
組合項：Staverman-Guggenheim
殘餘項：官能團交互作用

UNIFAC官能團參數：
CH₃: R=0.9011, Q=0.848
CH₂: R=0.6744, Q=0.540
OH:  R=1.0000, Q=1.200
CHO: R=0.9980, Q=0.948</code></pre>
      </section>

      <section v-show="activeSection === 'sec-5-3'" class="chapter-section">
        <h2 id="sec-5-3">5.3 優化算法：配方自動設計</h2>
        <h3>5.3.1 目標函數定義</h3>
        <pre><code>目標1：揮發曲線匹配  f₁(x) = ∑ᵢ ∑ₜ [Cᵢ(t;x) - Cᵢ,target(t)]²
目標2：成本最小化    f₂(x) = ∑ᵢ xᵢ · priceᵢ
目標3：穩定性        f₃(x) = -min(shelf_life(x))

約束：∑xᵢ = 1, xᵢ ≥ 0, safety_indexᵢ ≤ threshold</code></pre>
        <div class="chart-container"><canvas ref="paretoChart" style="max-height: 320px;"></canvas></div>

        <h3>5.3.2 遺傳算法實現</h3>
        <pre><code>NSGA-II 多目標遺傳算法：
1. 初始化種群 (200個體)
2. 交叉概率 0.7 (Blend)
3. 突變概率 0.3 (Gaussian σ=0.1)
4. 選擇：非支配排序 + 擁擠距離
5. 迭代 100 代
→ 輸出 Pareto 前沿解集</code></pre>
      </section>

      <section v-show="activeSection === 'sec-5-4'" class="chapter-section">
        <h2 id="sec-5-4">5.4 互動式配方計算器</h2>
        <div class="attention-box">
          <h4>🧪 實時配方設計工具</h4>
          <p>調整各成分比例，查看預測的揮發曲線：</p>
          <div class="slider-group">
            <label>Citrus oil: <strong>{{ citrus }}%</strong></label>
            <input type="range" min="0" max="30" v-model.number="citrus" />
          </div>
          <div class="slider-group">
            <label>Linalool: <strong>{{ linalool }}%</strong></label>
            <input type="range" min="0" max="40" v-model.number="linalool" />
          </div>
          <div class="slider-group">
            <label>Rose oxide: <strong>{{ rose }}%</strong></label>
            <input type="range" min="0" max="30" v-model.number="rose" />
          </div>
          <div class="slider-group">
            <label>Sandalwood: <strong>{{ sandalwood }}%</strong></label>
            <input type="range" min="0" max="40" v-model.number="sandalwood" />
          </div>
          <div class="slider-group">
            <label>Musk: <strong>{{ musk }}%</strong></label>
            <input type="range" min="0" max="30" v-model.number="musk" />
          </div>
          <p>總計：<strong :style="{ color: Math.abs(totalPct - 100) > 5 ? '#ef4444' : '#4ade80' }">{{ totalPct }}%</strong>
            <span v-if="Math.abs(totalPct - 100) > 5" style="color: #ef4444;"> ⚠️ 總計應接近100%</span>
          </p>
          <button class="btn-primary" @click="updateFormulation">計算揮發曲線</button>
        </div>
        <div class="chart-container"><canvas ref="customFormulaChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-5-5'" class="chapter-section">
        <h2 id="sec-5-5">5.5 成本-效能權衡分析</h2>
        <h3>5.5.1 價值工程矩陣</h3>
        <pre><code>Value Index = Performance Score / Cost
Performance Score = w₁·Longevity + w₂·Intensity + w₃·Complexity

奢侈品牌: VI < 0.5
輕奢品牌: 0.5 ≤ VI ≤ 2.0
大眾品牌: VI > 2.0</code></pre>
        <div class="chart-container"><canvas ref="valueChart" style="max-height: 320px;"></canvas></div>

        <h2>📚 延伸閱讀</h2>
        <ul>
          <li>Taylor, R. & Krishna, R. (1993). <em>Multicomponent Mass Transfer</em>. Wiley.</li>
          <li>Deb, K. et al. (2002). "NSGA-II". <em>IEEE Trans. Evol. Comput.</em> 6, 182-197.</li>
          <li>Fredenslund, A. et al. (1975). "UNIFAC". <em>AIChE J.</em> 21, 1086-1099.</li>
        </ul>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterLayout from '../components/ChapterLayout.vue'

export default {
  name: 'Chapter5View',
  components: { ChapterLayout },
  setup() {
    const evaporationChart = ref(null)
    const paretoChart = ref(null)
    const customFormulaChart = ref(null)
    const valueChart = ref(null)
    let charts = []
    let formulaChart = null

    const citrus = ref(15)
    const linalool = ref(25)
    const rose = ref(20)
    const sandalwood = ref(25)
    const musk = ref(15)
    const totalPct = computed(() => citrus.value + linalool.value + rose.value + sandalwood.value + musk.value)

    const sections = [
      { id: 'sec-5-1', label: '5.1' },
      { id: 'sec-5-2', label: '5.2' },
      { id: 'sec-5-3', label: '5.3' },
      { id: 'sec-5-4', label: '5.4' },
      { id: 'sec-5-5', label: '5.5' }
    ]
    const activeSection = ref(sections[0].id)

    function updateFormulation() {
      if (!customFormulaChart.value) return
      const times = []
      for (let t = 0; t <= 12; t += 0.1) times.push(t)
      const data = times.map(t => {
        return (citrus.value / 100) * 9 * Math.exp(-0.30 * t) +
               (linalool.value / 100) * 7 * Math.exp(-0.15 * t) +
               (rose.value / 100) * 8 * Math.exp(-0.10 * t) +
               (sandalwood.value / 100) * 6 * Math.exp(-0.03 * t) +
               (musk.value / 100) * 5 * Math.exp(-0.005 * t)
      })
      if (formulaChart) {
        formulaChart.data.labels = times.map(t => t.toFixed(1))
        formulaChart.data.datasets[0].data = data
        formulaChart.update()
      } else {
        formulaChart = new Chart(customFormulaChart.value, {
          type: 'line',
          data: {
            labels: times.map(t => t.toFixed(1)),
            datasets: [{ label: '總體香氣強度', data, borderColor: 'rgb(255,99,132)', backgroundColor: 'rgba(255,99,132,0.1)', fill: true, tension: 0.3, borderWidth: 2, pointRadius: 0 }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: '自定義配方揮發曲線預測', color: '#d4af37', font: { size: 18 } } },
            scales: {
              y: { min: 0, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: '香氣強度', color: '#cbd5e1' } },
              x: { max: 12, ticks: { color: '#94a3b8', maxTicksLimit: 13 }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: '時間 (小時)', color: '#cbd5e1' } }
            }
          }
        })
      }
    }

    onMounted(() => {
      // Evaporation chart
      if (evaporationChart.value) {
        const times = []; for (let t = 0; t <= 12; t += 0.1) times.push(t)
        const mkData = (k, s) => times.map(t => s * Math.exp(-k * t))
        charts.push(new Chart(evaporationChart.value, {
          type: 'line',
          data: {
            labels: times.map(t => t.toFixed(1)),
            datasets: [
              { label: 'Limonene (前調)', data: mkData(0.32, 10), borderColor: 'rgb(255,206,86)', borderWidth: 2, pointRadius: 0, tension: 0.3 },
              { label: 'Linalool (中調)', data: mkData(0.15, 8), borderColor: 'rgb(75,192,192)', borderWidth: 2, pointRadius: 0, tension: 0.3 },
              { label: 'Coumarin (基調)', data: mkData(0.02, 6), borderColor: 'rgb(153,102,255)', borderWidth: 2, pointRadius: 0, tension: 0.3 },
              { label: 'Musk (基調)', data: mkData(0.001, 5), borderColor: 'rgb(255,99,132)', borderWidth: 2, pointRadius: 0, tension: 0.3 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: '多組分香水揮發動力學曲線', color: '#d4af37', font: { size: 18 } } },
            scales: {
              y: { min: 0, max: 11, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: '相對強度', color: '#cbd5e1' } },
              x: { ticks: { color: '#94a3b8', maxTicksLimit: 13 }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: '時間 (小時)', color: '#cbd5e1' } }
            }
          }
        }))
      }
      // Pareto chart
      if (paretoChart.value) {
        charts.push(new Chart(paretoChart.value, {
          type: 'scatter',
          data: {
            datasets: [{ label: 'Pareto最優解', data: [{x:0.5,y:120},{x:0.8,y:95},{x:1.2,y:75},{x:1.8,y:55},{x:2.5,y:40},{x:3.2,y:32},{x:4.0,y:28}], backgroundColor: 'rgb(75,192,192)', borderColor: 'rgb(75,192,192)', pointRadius: 8, pointHoverRadius: 12 }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: '成本 vs 輪廓誤差 Pareto前沿', color: '#d4af37', font: { size: 18 } } },
            scales: {
              x: { min: 0, max: 5, title: { display: true, text: '輪廓誤差 (RMSE)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } },
              y: { min: 0, max: 150, title: { display: true, text: '成本 ($/100g)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }
            }
          }
        }))
      }
      // Value chart
      if (valueChart.value) {
        charts.push(new Chart(valueChart.value, {
          type: 'scatter',
          data: {
            datasets: [
              { label: '奢侈品牌', data: [{x:8.5,y:180},{x:9.0,y:250},{x:8.8,y:320}], backgroundColor: 'rgb(255,206,86)', pointRadius: 10 },
              { label: '輕奢品牌', data: [{x:7.5,y:85},{x:8.0,y:110},{x:7.8,y:95}], backgroundColor: 'rgb(75,192,192)', pointRadius: 10 },
              { label: '大眾品牌', data: [{x:6.0,y:25},{x:6.5,y:35},{x:5.8,y:30}], backgroundColor: 'rgb(153,102,255)', pointRadius: 10 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: '市場定位：性能 vs 成本分析', color: '#d4af37', font: { size: 18 } } },
            scales: {
              x: { min: 5, max: 10, title: { display: true, text: '性能評分 (0-10)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } },
              y: { min: 0, max: 350, title: { display: true, text: '成本 ($/100ml)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }
            }
          }
        }))
      }
      // Init custom formula chart
      updateFormulation()
    })
    watch(activeSection, async () => {
      await nextTick()
      charts.forEach(chart => chart.resize())
      if (formulaChart) formulaChart.resize()
    })
    onUnmounted(() => { charts.forEach(c => c.destroy()); if (formulaChart) formulaChart.destroy() })

    return { evaporationChart, paretoChart, customFormulaChart, valueChart, citrus, linalool, rose, sandalwood, musk, totalPct, updateFormulation, sections, activeSection }
  }
}
</script>
