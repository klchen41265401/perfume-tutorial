<template>
  <div>
    <h1>第4章：合成化學與反應機制</h1>
    <ChapterNav :prev="{ to: '/chapter/3', label: '第3章：SAR' }" :next="{ to: '/chapter/5', label: '第5章：配方工程' }" />
    <MoleculeGallery title="🧪 本章關鍵分子" :molecules="molecules" />
    <hr>

    <h2>4.1 工業香料合成：從石化原料到精緻香氣</h2>
    <h3>4.1.1 香茅醇合成路線比較</h3>
    <p>香茅醇 (Citronellol) 是玫瑰香的核心成分。工業上有三種主要合成路線：</p>
    <pre><code>路線A：Rhodium催化氫化（Takasago法）
步驟1：Myrcene環化
Myrcene + H₂ → β-Pinene [Rh(COD)Cl]₂ + (S,S)-DIOP
產率：95%, ee: 99%

步驟2：異構化
β-Pinene → Citronellal [Lewis acid]
產率：88%

步驟3：選擇性還原
Citronellal + H₂ → Citronellol [Pd/C]
產率：96%

總產率：80%
立體選擇性：>99% ee
成本：$45/kg (2023)</code></pre>
    <pre><code>路線B：Grignard反應（BASF法）
步驟1：Grignard試劑製備
3,7-dimethyl-6-octenal + CH₃MgBr → (R)-Citronellol
產率：72%, ee: 85% (需要拆分)

步驟2：手性拆分（酒石酸拆分法）
產率：45% (單一異構體)

總產率：32%
成本：$65/kg</code></pre>

    <h3>4.1.2 反應機制深度解析</h3>
    <div class="attention-box">
      <h4>🔬 Rhodium催化循環機制</h4>
      <pre><code>氧化加成階段：
Rh(I) + H₂ → Rh(III)-H₂
ΔG‡ = +18.3 kcal/mol (DFT計算)

配體交換：
Rh(III)-H₂ + Substrate → [Rh(III)-H₂-Substrate]
K_eq = 2.4 × 10⁵ M⁻¹

還原消除（速率決定步驟）：
[Rh(III)-H₂-Substrate] → Rh(I) + Product
ΔG‡ = +22.7 kcal/mol
k = 3.2 × 10³ s⁻¹ (at 80°C)</code></pre>
    </div>

    <hr>
    <h2>4.2 立體選擇性合成策略</h2>
    <h3>4.2.1 手性輔助劑設計</h3>
    <p>以 (R)-(−)-Carvone 合成為例，使用 CBS 還原：</p>
    <div class="chart-container"><canvas ref="stereoChart" style="max-height: 400px;"></canvas></div>

    <hr>
    <h2>4.3 副反應與雜質控制</h2>
    <h3>4.3.1 香草醛合成中的副產物分析</h3>
    <pre><code>主反應：
Guaiacol + Glyoxylic acid → Vanillin  產率：85%

副反應1：過度氧化  Vanillin + [O] → Vanillic acid (5%)
副反應2：自身縮合  2 Vanillin → Dehydrodivanillin (3%)
副反應3：脫甲基化  Vanillin → Protocatechualdehyde (2%)
副反應4：還原      Vanillin + H₂ → Vanillyl alcohol (1%)</code></pre>
    <div class="chart-container"><canvas ref="optimizationChart" style="max-height: 400px;"></canvas></div>

    <hr>
    <h2>4.4 綠色化學替代方案</h2>
    <h3>4.4.1 生物催化：酶促合成</h3>
    <div class="attention-box">
      <h4>🌱 酶促合成 vs 化學合成</h4>
      <table>
        <thead><tr><th>參數</th><th>化學催化</th><th>酶催化</th></tr></thead>
        <tbody>
          <tr><td>反應溫度</td><td>80-150°C</td><td>25-40°C</td></tr>
          <tr><td>壓力</td><td>5-50 bar</td><td>1 bar</td></tr>
          <tr><td>立體選擇性</td><td>85-95% ee</td><td>>99% ee</td></tr>
          <tr><td>E-factor</td><td>25-100</td><td>5-15</td></tr>
          <tr><td>成本</td><td>$</td><td>$$$</td></tr>
        </tbody>
      </table>
    </div>

    <h3>4.4.2 實例：(R)-Phenylethanol 的酶促合成</h3>
    <pre><code>Acetophenone + NADH → (R)-Phenylethanol + NAD⁺
[Saccharomyces cerevisiae]

反應條件：30°C, pH 6.5, 底物 50 mM, 酵母 100 g/L
結果：轉化率 92%, ee >99.5%, 產率 85%, 24h</code></pre>

    <h3>4.4.3 流動化學：連續合成</h3>
    <p>微反應器技術在香料合成中的應用。</p>

    <hr>
    <h2>4.5 工業案例：Hedione® 合成</h2>
    <h3>4.5.1 Firmenich專利路線</h3>
    <p>Hedione (甲基二氫茉莉酸酯) 是最重要的合成香料之一：</p>
    <pre><code>步驟1：Michael加成
Methyl acetoacetate + Methyl vinyl ketone → Michael adduct
催化劑：NaOEt, 20°C, 產率：88%

步驟2：分子內Aldol縮合
催化劑：KOH/EtOH, 60°C, 產率：82%

步驟3：Wittig反應
Cyclopentanone + Ph₃P=CH-COOCH₃ → Hedione
THF, 25°C, 產率：76%

總產率：55%, 年產量 >1000噸, 成本 ~$35/kg
GC純度 >98%, trans/cis > 95:5</code></pre>

    <div class="chart-container"><canvas ref="synthesisRouteChart" style="max-height: 400px;"></canvas></div>

    <hr>
    <h2>📚 延伸閱讀</h2>
    <ul>
      <li>Bauer, K. et al. (2001). <em>Common Fragrance and Flavor Materials</em>. Wiley-VCH.</li>
      <li>Sheldon, R.A. (2012). "Fundamentals of Green Chemistry". <em>Chem. Soc. Rev.</em> 41, 1437-1451.</li>
      <li>Anastas, P.T. & Warner, J.C. (1998). <em>Green Chemistry: Theory and Practice</em>. Oxford.</li>
    </ul>

    <ChapterNav :prev="{ to: '/chapter/3', label: '第3章：SAR' }" :next="{ to: '/chapter/5', label: '第5章：配方工程' }" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterNav from '../components/ChapterNav.vue'
import MoleculeGallery from '../components/MoleculeGallery.vue'

export default {
  name: 'Chapter4View',
  components: { ChapterNav, MoleculeGallery },
  setup() {
    const stereoChart = ref(null)
    const optimizationChart = ref(null)
    const synthesisRouteChart = ref(null)
    let charts = []

    const molecules = [
      { name: '香茅醇 (Citronellol)', smiles: 'CC(CCO)CCC=C(C)C' },
      { name: '香草醛 (Vanillin)', smiles: 'O=Cc1ccc(O)c(OC)c1' },
      { name: 'Hedione', smiles: 'COC(=O)CC1CCC(=O)C1' },
      { name: '(R)-苯乙醇', smiles: 'OC(C)c1ccccc1' },
      { name: '月桂烯 (Myrcene)', smiles: 'CC(=C)CCC=C(C)C' }
    ]

    onMounted(() => {
      // Stereo chart — compute via Boltzmann
      if (stereoChart.value) {
        const temps = [-20, -10, 0, 10, 20, 25, 30, 40, 50]
        const R = 1.987e-3
        const dG = 2.15
        const eeData = temps.map(t => {
          const T = t + 273.15
          const ratio = Math.exp(-dG / (R * T))
          return Math.abs(100 * (ratio - 1) / (ratio + 1))
        })
        charts.push(new Chart(stereoChart.value, {
          type: 'line',
          data: {
            labels: temps.map(t => t + '°C'),
            datasets: [{ label: 'ee (%)', data: eeData, borderColor: 'rgb(75,192,192)', backgroundColor: 'rgba(75,192,192,0.2)', fill: true, tension: 0.3, borderWidth: 3, pointRadius: 5 }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: '立體選擇性與反應溫度的關係', color: '#d4af37', font: { size: 18 } } },
            scales: { y: { min: 80, max: 100, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: 'ee (%)', color: '#cbd5e1' } }, x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: '溫度 (°C)', color: '#cbd5e1' } } }
          }
        }))
      }
      // Optimization chart
      if (optimizationChart.value) {
        const temps2 = [60, 70, 80, 90, 100]
        const yieldData = temps2.map(t => { const k = 2.3e6 * Math.exp(-12000 / (8.314 * (t + 273.15))); return (1 - Math.exp(-k * 3 * 3600)) * 100 })
        const purityData = temps2.map((t, i) => { const imp = 0.3 * Math.exp((t - 80) / 15); return yieldData[i] / (yieldData[i] + imp) * 100 })
        charts.push(new Chart(optimizationChart.value, {
          type: 'line',
          data: {
            labels: temps2.map(t => t + '°C'),
            datasets: [
              { label: '產率 (%)', data: yieldData, borderColor: 'rgb(255,99,132)', backgroundColor: 'rgba(255,99,132,0.2)', fill: true, tension: 0.3, borderWidth: 3 },
              { label: '純度 (%)', data: purityData, borderColor: 'rgb(54,162,235)', backgroundColor: 'rgba(54,162,235,0.2)', fill: true, tension: 0.3, borderWidth: 3 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: '溫度對產率和純度的影響', color: '#d4af37', font: { size: 18 } } },
            scales: { y: { min: 70, max: 100, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: '百分比 (%)', color: '#cbd5e1' } }, x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } } }
          }
        }))
      }
      // Synthesis route radar
      if (synthesisRouteChart.value) {
        charts.push(new Chart(synthesisRouteChart.value, {
          type: 'radar',
          data: {
            labels: ['產率', '純度', '成本效益', '環保性', '可擴展性', '立體選擇性'],
            datasets: [
              { label: 'Rhodium催化法', data: [95, 99, 70, 65, 85, 99], borderColor: 'rgb(255,99,132)', backgroundColor: 'rgba(255,99,132,0.2)', borderWidth: 2 },
              { label: 'Grignard法', data: [72, 85, 50, 40, 90, 85], borderColor: 'rgb(54,162,235)', backgroundColor: 'rgba(54,162,235,0.2)', borderWidth: 2 },
              { label: '酶催化法', data: [85, 99, 40, 95, 50, 99], borderColor: 'rgb(75,192,192)', backgroundColor: 'rgba(75,192,192,0.2)', borderWidth: 2 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: '不同合成路線綜合評估', color: '#d4af37', font: { size: 18 } } },
            scales: { r: { min: 0, max: 100, ticks: { stepSize: 20, color: '#94a3b8', backdropColor: 'transparent' }, grid: { color: 'rgba(51,65,85,0.3)' }, pointLabels: { color: '#cbd5e1', font: { size: 12 } } } }
          }
        }))
      }
    })
    onUnmounted(() => charts.forEach(c => c.destroy()))

    return { stereoChart, optimizationChart, synthesisRouteChart, molecules }
  }
}
</script>
