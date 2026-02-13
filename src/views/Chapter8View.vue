<template>
  <ChapterLayout
    :title="t('ch8.title')"
    :prev="{ to: '/chapter/7', label: t('ch8.prev') }"
    :next="{ to: '/chapter/9', label: t('ch8.next') }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-8-1'" class="chapter-section">
        <h2 id="sec-8-1">8.1 {{ t('ch8.sec8_1') }}</h2>
        <h3>8.1.1 {{ t('ch8.sec8_1_1') }}</h3>
        <p>{{ isZh ? '使用機器學習預測分子的氣味特徵：' : 'Using machine learning to predict molecular odor profiles:' }}</p>
        <pre v-if="isZh"><code>模型架構（深度學習）：
輸入：分子描述子 (MW, LogP, TPSA, HBD, HBA, 旋轉鍵, 芳香環, Csp3比例) + Morgan指紋 (512-bit)
隱藏層：Dense(512,ReLU) → Dropout(0.3) → BN → Dense(256) → Dense(128) → Dense(64)
輸出：10類氣味概率 (floral, fruity, woody, musky, green, spicy, citrus, sweet, fresh, earthy)
損失函數：Binary Cross-Entropy, 優化器：Adam (lr=0.001)
訓練：EarlyStopping(patience=15), ReduceLROnPlateau</code></pre>
        <pre v-else><code>Model architecture (deep learning):
Input: Molecular descriptors (MW, LogP, TPSA, HBD, HBA, rotatable bonds, aromatic rings, Csp3 fraction) + Morgan fingerprint (512-bit)
Hidden layers: Dense(512,ReLU) → Dropout(0.3) → BN → Dense(256) → Dense(128) → Dense(64)
Output: 10 odor class probabilities (floral, fruity, woody, musky, green, spicy, citrus, sweet, fresh, earthy)
Loss: Binary Cross-Entropy, Optimizer: Adam (lr=0.001)
Training: EarlyStopping(patience=15), ReduceLROnPlateau</code></pre>
        <div class="chart-container"><canvas ref="mlPredictionChart" style="max-height: 320px;"></canvas></div>

        <h3>8.1.2 {{ t('ch8.sec8_1_2') }}</h3>
        <pre v-if="isZh"><code>變分自編碼器 (VAE) 生成新香料分子：
編碼器：Conv1D(32) → Conv1D(64) → Conv1D(128) → Dense(512) → z_mean, z_log_var
解碼器：Dense(512) → Conv1DTranspose → Softmax
損失：Reconstruction + KL Divergence
應用：在潛在空間中插值生成新分子</code></pre>
        <pre v-else><code>Variational Autoencoder (VAE) for novel fragrance molecule generation:
Encoder: Conv1D(32) → Conv1D(64) → Conv1D(128) → Dense(512) → z_mean, z_log_var
Decoder: Dense(512) → Conv1DTranspose → Softmax
Loss: Reconstruction + KL Divergence
Application: Interpolation in latent space to generate new molecules</code></pre>
      </section>

      <section v-show="activeSection === 'sec-8-2'" class="chapter-section">
        <h2 id="sec-8-2">8.2 {{ t('ch8.sec8_2') }}</h2>
        <h3>8.2.1 {{ t('ch8.sec8_2_1') }}</h3>
        <div class="attention-box">
          <h4>💧 {{ isZh ? '液滴微流控技術優勢' : 'Droplet Microfluidics Advantages' }}</h4>
          <ul>
            <li>{{ isZh ? '高通量：每秒生成1000-10000個液滴' : 'High throughput: 1000-10000 droplets per second' }}</li>
            <li>{{ isZh ? '微量樣品：每個液滴體積 pL-nL級' : 'Micro-volume: pL-nL scale per droplet' }}</li>
            <li>{{ isZh ? '快速混合：混合時間 < 1 ms' : 'Rapid mixing: mixing time < 1 ms' }}</li>
            <li>{{ isZh ? '精確控制：組分濃度變異係數 < 5%' : 'Precise control: component concentration CV < 5%' }}</li>
          </ul>
        </div>
        <div class="chart-container"><canvas ref="microfluidicsChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-8-3'" class="chapter-section">
        <h2 id="sec-8-3">8.3 {{ t('ch8.sec8_3') }}</h2>
        <h3>8.3.1 {{ t('ch8.sec8_3_1') }}</h3>
        <pre v-if="isZh"><code>釋放模型：
1. Fick擴散：k_release = D·K / (L·R)
2. Higuchi模型：M_t/M_∞ = k_H·√t
3. Korsmeyer-Peppas：M_t/M_∞ = k·t^n
   n=0.5 Fickian, 0.5&lt;n&lt;1 Non-Fickian, n=1 Case II

微膠囊參數：
半徑：50μm, 殼厚：5μm, 裝載率：60%
D = 1×10⁻¹² m²/s (Linalool)</code></pre>
        <pre v-else><code>Release models:
1. Fick diffusion: k_release = D·K / (L·R)
2. Higuchi model: M_t/M_∞ = k_H·√t
3. Korsmeyer-Peppas: M_t/M_∞ = k·t^n
   n=0.5 Fickian, 0.5&lt;n&lt;1 Non-Fickian, n=1 Case II

Microcapsule parameters:
Radius: 50μm, Shell thickness: 5μm, Loading: 60%
D = 1×10⁻¹² m²/s (Linalool)</code></pre>
        <div class="chart-container"><canvas ref="releaseChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-8-4'" class="chapter-section">
        <h2 id="sec-8-4">8.4 {{ t('ch8.sec8_4') }}</h2>
        <h3>8.4.1 {{ t('ch8.sec8_4_1') }}</h3>
        <div class="attention-box">
          <h4>🔬 {{ isZh ? 'MCM-41/SBA-15特性' : 'MCM-41/SBA-15 Properties' }}</h4>
          <table>
            <thead><tr><th>{{ isZh ? '參數' : 'Parameter' }}</th><th>MCM-41</th><th>SBA-15</th></tr></thead>
            <tbody>
              <tr><td>{{ isZh ? '孔徑' : 'Pore size' }}</td><td>2-10 nm</td><td>5-30 nm</td></tr>
              <tr><td>{{ isZh ? '比表面積' : 'Surface area' }}</td><td>700-1000 m²/g</td><td>600-1000 m²/g</td></tr>
              <tr><td>{{ isZh ? '孔容' : 'Pore volume' }}</td><td>0.7-1.0 cm³/g</td><td>0.8-1.3 cm³/g</td></tr>
              <tr><td>{{ isZh ? '裝載量' : 'Loading capacity' }}</td><td>30-50 wt%</td><td>40-60 wt%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section v-show="activeSection === 'sec-8-5'" class="chapter-section">
        <h2 id="sec-8-5">8.5 {{ t('ch8.sec8_5') }}</h2>
        <h3>8.5.1 {{ t('ch8.sec8_5_1') }}</h3>
        <pre v-if="isZh"><code>三種推薦模型：
1. 協同過濾：基於相似用戶的評分預測
2. 深度學習：神經網路學習用戶-香水交互
3. 混合模型：結合兩者優點

性能指標：準確率、召回率、F1-Score、覆蓋率、多樣性、新穎性</code></pre>
        <pre v-else><code>Three recommendation models:
1. Collaborative filtering: Predict ratings based on similar users
2. Deep learning: Neural network learns user-perfume interactions
3. Hybrid model: Combines advantages of both

Metrics: Accuracy, Recall, F1-Score, Coverage, Diversity, Novelty</code></pre>
        <div class="chart-container"><canvas ref="recommendationChart" style="max-height: 320px;"></canvas></div>

        <h2>🔮 {{ t('ch8.futureOutlook') }}</h2>
        <div class="attention-box">
          <h4>{{ isZh ? '香水科學的未來方向' : 'Future Directions in Perfume Science' }}</h4>
          <ol>
            <li><strong>{{ isZh ? '量子計算輔助分子設計' : 'Quantum computing-aided molecular design' }}</strong>：{{ isZh ? '精確模擬分子-受體相互作用' : 'Precise simulation of molecule-receptor interactions' }}</li>
            <li><strong>{{ isZh ? '合成生物學' : 'Synthetic biology' }}</strong>：{{ isZh ? '工程化微生物生產稀有天然香料' : 'Engineered microorganisms for rare natural fragrance production' }}</li>
            <li><strong>{{ isZh ? '神經科學整合' : 'Neuroscience integration' }}</strong>：{{ isZh ? 'fMRI指導的香氣設計' : 'fMRI-guided aroma design' }}</li>
            <li><strong>{{ isZh ? '可持續香料' : 'Sustainable fragrances' }}</strong>：{{ isZh ? 'CO₂超臨界萃取、生物轉化' : 'Supercritical CO₂ extraction, biotransformation' }}</li>
            <li><strong>{{ isZh ? '數位嗅覺' : 'Digital olfaction' }}</strong>：{{ isZh ? '電子鼻與AI融合實現氣味數字化' : 'E-nose & AI fusion for scent digitization' }}</li>
          </ol>
        </div>

        <p style="text-align: center; font-size: 1.2em; margin-top: 2rem;">
          🎓 <strong>{{ isZh ? '恭喜！您已完成香水深度教學全部8章' : 'Congratulations! You have completed all 8 chapters of the Advanced Perfumery Course' }}</strong> 🎓
        </p>

        <h2>📚 {{ t('ch8.extendedReading') }}</h2>
        <ul>
          <li>Sanchez-Lengeling, B. et al. (2019). "Machine Learning for Scent". <em>arXiv:1910.10685</em>.</li>
          <li>Gómez-Bombarelli, R. et al. (2018). "Automatic Chemical Design". <em>ACS Cent. Sci.</em> 4, 268-276.</li>
          <li>Anna, S.L. et al. (2003). "Formation of Dispersions Using Flow Focusing". <em>Appl. Phys. Lett.</em> 82, 364.</li>
          <li>Vallet-Regí, M. et al. (2007). "Mesoporous Materials for Drug Delivery". <em>Angew. Chem.</em> 46, 7548.</li>
        </ul>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterLayout from '../components/ChapterLayout.vue'
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'Chapter8View',
  components: { ChapterLayout },
  setup() {
    const { isZh, isEn, getLabel, t } = useLanguage()
    const mlPredictionChart = ref(null)
    const microfluidicsChart = ref(null)
    const releaseChart = ref(null)
    const recommendationChart = ref(null)
    let charts = []

    const sections = [
      { id: 'sec-8-1', label: '8.1' },
      { id: 'sec-8-2', label: '8.2' },
      { id: 'sec-8-3', label: '8.3' },
      { id: 'sec-8-4', label: '8.4' },
      { id: 'sec-8-5', label: '8.5' }
    ]
    const activeSection = ref(sections[0].id)

    onMounted(() => {
      // ML Prediction
      if (mlPredictionChart.value) {
        charts.push(new Chart(mlPredictionChart.value, {
          type: 'bar',
          data: {
            labels: ['Floral', 'Fruity', 'Woody', 'Musky', 'Green', 'Spicy', 'Citrus', 'Sweet'],
            datasets: [{ label: isZh.value ? '預測準確度 (%)' : 'Prediction Accuracy (%)', data: [87, 82, 91, 78, 85, 89, 93, 84], backgroundColor: 'rgba(75,192,192,0.6)', borderColor: 'rgb(75,192,192)', borderWidth: 2 }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { title: { display: true, text: isZh.value ? '深度學習氣味預測模型 - 各類別準確度' : 'Deep Learning Odor Prediction - Accuracy by Category', color: '#d4af37', font: { size: 16 } }, legend: { labels: { color: '#cbd5e1' } } },
            scales: { y: { title: { display: true, text: isZh.value ? '準確度 (%)' : 'Accuracy (%)', color: '#cbd5e1' }, min: 0, max: 100, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }, x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } } }
          }
        }))
      }

      // Microfluidics dual axis
      if (microfluidicsChart.value) {
        const flowRates = [10, 20, 50, 100, 200, 500]
        charts.push(new Chart(microfluidicsChart.value, {
          type: 'line',
          data: {
            labels: flowRates,
            datasets: [
              { label: isZh.value ? '液滴生成頻率 (Hz)' : 'Droplet Generation Freq. (Hz)', data: flowRates.map(q => q / 0.05), borderColor: 'rgb(255,99,132)', backgroundColor: 'rgba(255,99,132,0.1)', yAxisID: 'y', tension: 0.3, borderWidth: 2, pointRadius: 4 },
              { label: isZh.value ? '液滴直徑 (μm)' : 'Droplet Diameter (μm)', data: flowRates.map(q => 50 + q * 0.1), borderColor: 'rgb(54,162,235)', backgroundColor: 'rgba(54,162,235,0.1)', yAxisID: 'y1', tension: 0.3, borderWidth: 2, pointRadius: 4 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { title: { display: true, text: isZh.value ? '微流控參數優化' : 'Microfluidics Parameter Optimization', color: '#d4af37', font: { size: 16 } }, legend: { labels: { color: '#cbd5e1' } } },
            scales: {
              x: { title: { display: true, text: isZh.value ? '水相流速 (μL/min)' : 'Aqueous Flow Rate (μL/min)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } },
              y: { type: 'linear', position: 'left', title: { display: true, text: isZh.value ? '頻率 (Hz)' : 'Frequency (Hz)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } },
              y1: { type: 'linear', position: 'right', title: { display: true, text: isZh.value ? '直徑 (μm)' : 'Diameter (μm)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { drawOnChartArea: false } }
            }
          }
        }))
      }

      // Release chart
      if (releaseChart.value) {
        const days = Array.from({ length: 301 }, (_, i) => i / 10)
        const fickRelease = (t, D, L) => { const k = D / (L * L); return Math.min((1 - Math.exp(-k * t * 24 * 3600)) * 100, 100) }
        const higuchi = t => Math.min(15 * Math.sqrt(t), 100)
        charts.push(new Chart(releaseChart.value, {
          type: 'line',
          data: {
            labels: days.map(d => d.toFixed(1)),
            datasets: [
              { label: isZh.value ? 'Fick擴散 (殼厚5μm)' : 'Fick Diffusion (shell 5μm)', data: days.map(t => fickRelease(t, 1e-12, 5e-6)), borderColor: 'rgb(255,99,132)', tension: 0.4, borderWidth: 2, pointRadius: 0 },
              { label: isZh.value ? 'Fick擴散 (殼厚10μm)' : 'Fick Diffusion (shell 10μm)', data: days.map(t => fickRelease(t, 1e-12, 10e-6)), borderColor: 'rgb(54,162,235)', tension: 0.4, borderWidth: 2, pointRadius: 0 },
              { label: isZh.value ? 'Higuchi模型' : 'Higuchi Model', data: days.map(t => higuchi(t)), borderColor: 'rgb(75,192,192)', borderDash: [5, 5], tension: 0.4, borderWidth: 2, pointRadius: 0 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { title: { display: true, text: isZh.value ? '微膠囊緩釋動力學曲線' : 'Microcapsule Sustained-Release Kinetics', color: '#d4af37', font: { size: 16 } }, legend: { labels: { color: '#cbd5e1' } } },
            scales: {
              x: { title: { display: true, text: isZh.value ? '時間 (天)' : 'Time (days)', color: '#cbd5e1' }, max: 30, ticks: { color: '#94a3b8', maxTicksLimit: 16 }, grid: { color: 'rgba(51,65,85,0.3)' } },
              y: { title: { display: true, text: isZh.value ? '累積釋放率 (%)' : 'Cumulative Release (%)', color: '#cbd5e1' }, min: 0, max: 105, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }
            }
          }
        }))
      }

      // Recommendation radar
      if (recommendationChart.value) {
        charts.push(new Chart(recommendationChart.value, {
          type: 'radar',
          data: {
            labels: isZh.value ? ['準確率', '召回率', 'F1-Score', '覆蓋率', '多樣性', '新穎性'] : ['Accuracy', 'Recall', 'F1-Score', 'Coverage', 'Diversity', 'Novelty'],
            datasets: [
              { label: isZh.value ? '協同過濾' : 'Collaborative Filtering', data: [82, 78, 80, 65, 55, 60], borderColor: 'rgb(255,99,132)', backgroundColor: 'rgba(255,99,132,0.2)', borderWidth: 2 },
              { label: isZh.value ? '深度學習' : 'Deep Learning', data: [88, 85, 86, 75, 70, 72], borderColor: 'rgb(54,162,235)', backgroundColor: 'rgba(54,162,235,0.2)', borderWidth: 2 },
              { label: isZh.value ? '混合模型' : 'Hybrid Model', data: [91, 87, 89, 82, 78, 80], borderColor: 'rgb(75,192,192)', backgroundColor: 'rgba(75,192,192,0.2)', borderWidth: 2 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { title: { display: true, text: isZh.value ? '香水推薦系統性能比較' : 'Perfume Recommendation System Performance', color: '#d4af37', font: { size: 16 } }, legend: { labels: { color: '#cbd5e1' } } },
            scales: { r: { min: 0, max: 100, ticks: { stepSize: 20, color: '#94a3b8', backdropColor: 'transparent' }, grid: { color: 'rgba(51,65,85,0.3)' }, pointLabels: { color: '#cbd5e1', font: { size: 12 } } } }
          }
        }))
      }
    })
    watch(activeSection, async () => {
      await nextTick()
      charts.forEach(chart => chart.resize())
    })
    onUnmounted(() => charts.forEach(c => c.destroy()))

    return { mlPredictionChart, microfluidicsChart, releaseChart, recommendationChart, sections, activeSection, isZh, isEn, getLabel, t }
  }
}
</script>
