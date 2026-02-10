<template>
  <ChapterLayout
    title="第6章：分析方法與儀器"
    :prev="{ to: '/chapter/5', label: '第5章：配方工程' }"
    :next="{ to: '/chapter/7', label: '第7章：案例研究' }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-6-1'" class="chapter-section">
        <h2 id="sec-6-1">6.1 GC-MS：香料分析的黃金標準</h2>
        <h3>6.1.1 方法開發原理</h3>
        <p>氣相色譜-質譜聯用 (GC-MS) 是香料分析最重要的技術：</p>
        <pre><code>儀器配置：
- GC: Agilent 7890B, MS: 5977A MSD (EI源, 70 eV)
- 進樣口: Split/Splitless, 250°C
- 分流比: 20:1 (>1%) 或 1:1 (痕量)

色譜柱選擇：
1. HP-5MS (通用) - 5% Phenyl, 30m×0.25mm×0.25μm
2. DB-WAX (極性) - PEG, 醇/酯/酸
3. Chirasil-Dex (手性) - β-Cyclodextrin

溫度程序：50°C(2min) → 5°C/min → 280°C(5min)
載氣：He 1.2 mL/min, 掃描 m/z 35-550</code></pre>

        <div class="chart-container"><canvas ref="chromatogramChart" style="max-height: 320px;"></canvas></div>

        <h3>6.1.2 定量分析策略</h3>
        <div class="attention-box">
          <h4>📐 內標法 vs 外標法</h4>
          <pre><code>RF = (A_standard / C_standard) / (A_IS / C_IS)
常用內標：Dodecane (C12), Hexadecane (C16)
定量公式：Cx = (Ax/AIS) × (CIS/RF)</code></pre>
        </div>
      </section>

      <section v-show="activeSection === 'sec-6-2'" class="chapter-section">
        <h2 id="sec-6-2">6.2 Headspace動態取樣</h2>
        <h3>6.2.1 SPME (固相微萃取)</h3>
        <pre><code>纖維選擇：
1. PDMS (100μm) - 非極性 - 萜烯
2. PDMS/DVB (65μm) - 中極性 - 醇/酯/醛
3. CAR/PDMS (75μm) - 極性 - 小分子

萃取條件：40-60°C, 30-60 min, 500 rpm
鹽析：NaCl 0-30%
K_fiber/headspace = C_fiber / C_headspace</code></pre>

        <h3>6.2.2 動態頂空 (Purge &amp; Trap)</h3>
        <div class="chart-container"><canvas ref="headspaceChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-6-3'" class="chapter-section">
        <h2 id="sec-6-3">6.3 HPLC方法驗證</h2>
        <h3>6.3.1 分析方法驗證參數</h3>
        <div class="attention-box">
          <h4>📋 ICH Q2(R1) 驗證標準</h4>
          <table>
            <thead><tr><th>參數</th><th>定義</th><th>接受標準</th></tr></thead>
            <tbody>
              <tr><td>特異性</td><td>區分目標物與雜質</td><td>R > 2.0</td></tr>
              <tr><td>線性</td><td>響應與濃度線性</td><td>r² > 0.999</td></tr>
              <tr><td>範圍</td><td>線性範圍</td><td>80-120%</td></tr>
              <tr><td>準確度</td><td>測量值接近真值</td><td>回收率 98-102%</td></tr>
              <tr><td>精密度</td><td>重複測量一致性</td><td>RSD < 2%</td></tr>
              <tr><td>LOD</td><td>最低檢測濃度</td><td>S/N > 3</td></tr>
              <tr><td>LOQ</td><td>最低定量濃度</td><td>S/N > 10</td></tr>
            </tbody>
          </table>
        </div>
        <div class="chart-container"><canvas ref="calibrationChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-6-4'" class="chapter-section">
        <h2 id="sec-6-4">6.4 NMR結構鑑定</h2>
        <h3>6.4.1 一維NMR解析</h3>
        <pre><code>Linalool ¹H-NMR (400 MHz, CDCl₃):
δ 5.88 (dd, J=17.2,10.8 Hz, 1H) C2-H
δ 5.17 (d, J=17.2 Hz, 1H) C1-H(trans)
δ 5.12 (t, J=7.2 Hz, 1H) C6-H
δ 5.04 (d, J=10.8 Hz, 1H) C1-H(cis)
δ 2.04 (m, 2H) C4-H₂
δ 1.98 (m, 2H) C5-H₂
δ 1.68 (s, 3H) C10-H₃
δ 1.60 (s, 3H) C9-H₃
δ 1.29 (s, 6H) C7,8-H₆</code></pre>
        <div class="chart-container"><canvas ref="nmrChart" style="max-height: 320px;"></canvas></div>

        <h3>6.4.2 二維NMR技術</h3>
        <div class="attention-box">
          <h4>🔍 2D-NMR實驗類型</h4>
          <pre><code>COSY: ¹H-¹H 相關（鄰近質子偶合）
HSQC: ¹H-¹³C 直接鍵結
HMBC: ¹H-¹³C 遠程相關（2-3鍵）
NOESY: 空間鄰近（<5Å，立體化學）</code></pre>
        </div>

        <h2>📚 延伸閱讀</h2>
        <ul>
          <li>Sparkman, O.D. et al. (2011). <em>GC and MS: A Practical Guide</em>. Academic Press.</li>
          <li>Snyder, L.R. et al. (2010). <em>Introduction to Modern LC</em>. Wiley.</li>
          <li>Claridge, T.D.W. (2016). <em>High-Resolution NMR Techniques</em>. Elsevier.</li>
          <li>ICH Q2(R1) (2005). Validation of Analytical Procedures.</li>
        </ul>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterLayout from '../components/ChapterLayout.vue'

export default {
  name: 'Chapter6View',
  components: { ChapterLayout },
  setup() {
    const chromatogramChart = ref(null)
    const headspaceChart = ref(null)
    const calibrationChart = ref(null)
    const nmrChart = ref(null)
    let charts = []

    const sections = [
      { id: 'sec-6-1', label: '6.1' },
      { id: 'sec-6-2', label: '6.2' },
      { id: 'sec-6-3', label: '6.3' },
      { id: 'sec-6-4', label: '6.4' }
    ]
    const activeSection = ref(sections[0].id)

    onMounted(() => {
      // Chromatogram - Gaussian peaks
      if (chromatogramChart.value) {
        const time = Array.from({ length: 1000 }, (_, i) => i * 0.05)
        const peaks = [
          { rt: 8.5, height: 15000, width: 0.15 },
          { rt: 12.3, height: 25000, width: 0.18 },
          { rt: 15.2, height: 100000, width: 0.20 },
          { rt: 18.7, height: 18000, width: 0.16 },
          { rt: 22.4, height: 30000, width: 0.19 },
          { rt: 28.9, height: 12000, width: 0.21 },
          { rt: 35.1, height: 8000, width: 0.23 }
        ]
        const tic = time.map(t => {
          let val = 500 + Math.random() * 200
          peaks.forEach(p => {
            const sigma = p.width / 2.355
            val += p.height * Math.exp(-0.5 * Math.pow((t - p.rt) / sigma, 2))
          })
          return val
        })
        charts.push(new Chart(chromatogramChart.value, {
          type: 'line',
          data: { labels: time.map(t => t.toFixed(1)), datasets: [{ label: 'TIC', data: tic, borderColor: 'rgb(75,192,192)', backgroundColor: 'rgba(75,192,192,0.1)', borderWidth: 1.5, pointRadius: 0, fill: true }] },
          options: {
            responsive: true, maintainAspectRatio: false, animation: { duration: 2000 },
            plugins: { title: { display: true, text: 'GC-MS色譜圖 (薰衣草精油)', color: '#d4af37', font: { size: 16 } }, legend: { labels: { color: '#cbd5e1' } } },
            scales: { x: { title: { display: true, text: '保留時間 (min)', color: '#cbd5e1' }, ticks: { color: '#94a3b8', maxTicksLimit: 20 }, grid: { color: 'rgba(51,65,85,0.3)' } }, y: { title: { display: true, text: '強度', color: '#cbd5e1' }, min: 0, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } } }
          }
        }))
      }

      // Headspace kinetics
      if (headspaceChart.value) {
        const t = Array.from({ length: 61 }, (_, i) => i)
        const kin = (Ceq, k) => t.map(ti => Ceq * (1 - Math.exp(-k * ti)))
        charts.push(new Chart(headspaceChart.value, {
          type: 'line',
          data: {
            labels: t,
            datasets: [
              { label: 'Limonene', data: kin(25.5, 0.15), borderColor: 'rgb(255,206,86)', tension: 0.4, borderWidth: 2, pointRadius: 0 },
              { label: 'Linalool', data: kin(0.6, 0.12), borderColor: 'rgb(75,192,192)', tension: 0.4, borderWidth: 2, pointRadius: 0 },
              { label: 'Eugenol', data: kin(2.4, 0.08), borderColor: 'rgb(153,102,255)', tension: 0.4, borderWidth: 2, pointRadius: 0 },
              { label: 'Vanillin', data: kin(0.05, 0.05), borderColor: 'rgb(255,99,132)', tension: 0.4, borderWidth: 2, pointRadius: 0 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { title: { display: true, text: '頂空濃度動態平衡過程 (40°C)', color: '#d4af37', font: { size: 16 } }, legend: { labels: { color: '#cbd5e1' } } },
            scales: { x: { title: { display: true, text: '時間 (min)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }, y: { title: { display: true, text: '頂空濃度 (μg/mL)', color: '#cbd5e1' }, min: 0, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } } }
          }
        }))
      }

      // Calibration
      if (calibrationChart.value) {
        charts.push(new Chart(calibrationChart.value, {
          type: 'scatter',
          data: {
            datasets: [
              { label: '實驗數據', data: [{ x: 1, y: 12500 }, { x: 5, y: 62300 }, { x: 10, y: 124800 }, { x: 50, y: 623500 }, { x: 100, y: 1247000 }, { x: 200, y: 2494500 }, { x: 500, y: 6236000 }], backgroundColor: 'rgb(75,192,192)', pointRadius: 8 },
              { label: '線性擬合 (y=12470x)', data: [{ x: 1, y: 12470 }, { x: 500, y: 6235000 }], type: 'line', borderColor: 'rgb(255,99,132)', borderWidth: 2, borderDash: [5, 5], pointRadius: 0, fill: false }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { title: { display: true, text: 'HPLC校準曲線 (Vanillin) - r² = 0.999998', color: '#d4af37', font: { size: 16 } }, legend: { labels: { color: '#cbd5e1' } } },
            scales: { x: { title: { display: true, text: '濃度 (μg/mL)', color: '#cbd5e1' }, type: 'linear', ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }, y: { title: { display: true, text: '峰面積 (mAU·s)', color: '#cbd5e1' }, min: 0, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } } }
          }
        }))
      }

      // NMR - Lorentzian peaks
      if (nmrChart.value) {
        const ppm = Array.from({ length: 1000 }, (_, i) => 10 - i * 0.01)
        const shifts = [
          { x: 5.88, height: 1.0 }, { x: 5.17, height: 1.0 }, { x: 5.12, height: 1.0 }, { x: 5.04, height: 1.0 },
          { x: 2.04, height: 2.0 }, { x: 1.98, height: 2.0 }, { x: 1.68, height: 3.0 }, { x: 1.60, height: 3.0 }, { x: 1.29, height: 6.0 }
        ]
        const spectrum = ppm.map(p => {
          let val = 0
          shifts.forEach(s => { val += s.height / (1 + Math.pow((p - s.x) / 0.02, 2)) })
          return val
        })
        charts.push(new Chart(nmrChart.value, {
          type: 'line',
          data: { labels: ppm.map(p => p.toFixed(2)), datasets: [{ label: '¹H-NMR (400 MHz, CDCl₃)', data: spectrum, borderColor: 'rgb(54,162,235)', backgroundColor: 'rgba(54,162,235,0.1)', borderWidth: 1.5, pointRadius: 0, fill: true }] },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { title: { display: true, text: 'Linalool ¹H-NMR譜圖', color: '#d4af37', font: { size: 16 } }, legend: { labels: { color: '#cbd5e1' } } },
            scales: { x: { reverse: true, min: 0, max: 7, title: { display: true, text: 'δ (ppm)', color: '#cbd5e1' }, ticks: { color: '#94a3b8', maxTicksLimit: 15 }, grid: { color: 'rgba(51,65,85,0.3)' } }, y: { title: { display: true, text: '相對強度', color: '#cbd5e1' }, min: 0, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } } }
          }
        }))
      }
    })
    watch(activeSection, async () => {
      await nextTick()
      charts.forEach(chart => chart.resize())
    })
    onUnmounted(() => charts.forEach(c => c.destroy()))

    return { chromatogramChart, headspaceChart, calibrationChart, nmrChart, sections, activeSection }
  }
}
</script>
