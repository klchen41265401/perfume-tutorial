<template>
  <div>
    <h1>第1章：量子化學與嗅覺受體</h1>
    <ChapterNav :prev="null" :next="{ to: '/chapter/2', label: '第2章：熱力學' }" />
    <MoleculeGallery title="🧪 本章關鍵分子" :molecules="molecules" />
    <hr>
    <h2>1.1 嗅覺受體：不是玄學，是蛋白質化學</h2>
    <h3>1.1.1 GPCR 超家族</h3>
    <p>人類嗅覺受體 (Olfactory Receptors, ORs) 屬於 <strong>G蛋白偶聯受體 (GPCR)</strong> 超家族。</p>
    <strong>結構特徵：</strong>
    <ul><li>7個跨膜α螺旋 (TM1-TM7)</li><li>細胞外端有配體結合口袋</li><li>細胞內端與G蛋白偶聯</li></ul>
    <strong>關鍵數據：</strong>
    <pre><code>人類OR基因數：~400個功能性
小鼠OR基因數：~1000個功能性
結合口袋體積：~300-500 Ų
親和力常數 (Kd)：10⁻⁶ to 10⁻⁹ M</code></pre>

    <h3>1.1.2 配體-受體對接機制</h3>
    <p>氣味分子與受體的結合不是「聞到」，而是分子識別：</p>
    <pre><code>1. 氣味分子從氣相→水相（鼻黏液）
2. 通過黏液層擴散
3. 進入結合口袋（疏水性主導）
4. 與口袋內關鍵殘基形成：
   - 氫鍵 (H-bonds)
   - 範德華力 (van der Waals)
   - π-π 堆疊
5. 誘導受體構象變化
6. 觸發G蛋白級聯反應

結合自由能 ΔG_bind = ΔH - TΔS
典型ΔG_bind: -20 to -40 kJ/mol</code></pre>

    <h3>1.1.3 為什麼立體化學如此關鍵</h3>
    <MoleculeGallery title="🔬 手性異構體對比" :molecules="carvonePair" />
    <pre><code>(R)-Carvone: 葛縷子香（麵包香料）
(S)-Carvone: 薄荷香
分子式完全相同：C₁₀H₁₄O
差異僅在：C(6)的立體構型

對接分析：
(R)-Carvone: -8.2 kcal/mol → 強親和力
(S)-Carvone: -5.1 kcal/mol → 弱親和力</code></pre>

    <hr>
    <h2>1.2 分子軌域理論與氣味</h2>
    <h3>1.2.1 為什麼硫化物這麼臭？</h3>
    <MoleculeGallery title="🧪 乙醇 vs 乙硫醇" :molecules="thiolPair" />
    <pre><code>C-O 鍵：鍵長 143 pm, 鍵能 358 kJ/mol, 極性高
C-S 鍵：鍵長 182 pm, 鍵能 272 kJ/mol, 極化性高

閾值差異：
乙醇 (C₂H₅OH): ~1 ppm
乙硫醇 (C₂H₅SH): ~0.00047 ppm (低2000倍！)</code></pre>

    <h3>1.2.2 HOMO-LUMO Gap 與嗅覺強度</h3>
    <p>氣味強度與分子的電子激發能有關：</p>
    <pre><code>較小的 HOMO-LUMO gap → 更容易電子轉移 → 更強受體活化
弱氣味：ΔE > 6 eV
強氣味：ΔE = 3-5 eV</code></pre>
    <div class="chart-container"><canvas ref="homoLumoChart" style="max-height: 350px;"></canvas></div>
    <table>
      <thead><tr><th>化合物</th><th>HOMO (eV)</th><th>LUMO (eV)</th><th>Gap (eV)</th><th>氣味強度</th></tr></thead>
      <tbody>
        <tr><td>甲烷</td><td>-12.8</td><td>+3.2</td><td>16.0</td><td>無味</td></tr>
        <tr><td>苯</td><td>-9.3</td><td>-0.8</td><td>8.5</td><td>微弱</td></tr>
        <tr><td>檸檬醛</td><td>-6.2</td><td>-1.1</td><td>5.1</td><td>強</td></tr>
        <tr><td>硫醇</td><td>-5.8</td><td>-0.4</td><td>5.4</td><td>極強</td></tr>
      </tbody>
    </table>

    <h3>1.2.3 共軛系統與氣味特性</h3>
    <MoleculeGallery title="🧪 飽和醛 vs 不飽和醛" :molecules="aldehydePair" />
    <pre><code>正己醛：無共軛，青草，閾值 5 ppb
反-2-己烯醛：共軛(C=C-C=O)，辛辣，閾值 17 ppb
→ 共軛增加剛性 → 受體匹配更嚴格</code></pre>

    <hr>
    <h2>1.3 分子形狀與受體匹配</h2>
    <h3>1.3.1 藥效團模型</h3>
    <MoleculeGallery title="🧪 麝香家族" :molecules="muskFamily" />
    <pre><code>麝香藥效團共同特徵：
1. 大環結構（14-16元環）
2. 一個羰基 (C=O)
3. 環直徑：10-12 Å
4. 官能基到環中心：~5 Å</code></pre>

    <h3>1.3.2 分子體積匹配</h3>
    <pre><code>受體口袋：~400 Ų
最佳配體：250-350 Ų
太小 (&lt; 200 Ų)：結合不穩定
太大 (&gt; 450 Ų)：無法進入</code></pre>

    <hr>
    <h2>1.4 官能基電子效應</h2>
    <MoleculeGallery title="🧪 苯甲醛 vs 茴香醛" :molecules="resonancePair" />
    <pre><code>苯甲醛: HOMO -9.2 eV, 杏仁香
茴香醛: HOMO -8.6 eV, 甜茴香
→ -OCH₃ 通過 +M 效應提高 HOMO</code></pre>

    <hr>
    <h2>1.5 量子化學計算實務</h2>
    <pre><code>推薦方法：B3LYP/6-31G*
適用於：C, H, O, N 香料分子
精度：±5 kJ/mol

使用 ORCA：
! B3LYP 6-31G* OPT FREQ
→ 提取 HOMO, LUMO, Dipole Moment</code></pre>

    <hr>
    <h2>本章總結</h2>
    <p>1. ✅ <strong>嗅覺是分子識別</strong>：受體-配體對接</p>
    <p>2. ✅ <strong>立體化學絕對關鍵</strong>：鏡像異構體完全不同氣味</p>
    <p>3. ✅ <strong>電子結構影響氣味</strong>：HOMO-LUMO gap</p>
    <p>4. ✅ <strong>分子形狀必須匹配</strong>：體積、柔性、藥效團</p>
    <p>5. ✅ <strong>量化工具可預測</strong>：DFT + 分子對接</p>

    <ChapterNav :prev="null" :next="{ to: '/chapter/2', label: '第2章：熱力學' }" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterNav from '../components/ChapterNav.vue'
import MoleculeGallery from '../components/MoleculeGallery.vue'

export default {
  name: 'Chapter1View',
  components: { ChapterNav, MoleculeGallery },
  setup() {
    const homoLumoChart = ref(null)
    let chart = null

    const molecules = [
      { name: '檸檬醛 (Citral)', smiles: 'CC(=CC=O)CCC=C(C)C' },
      { name: '苯甲醛', smiles: 'O=Cc1ccccc1' },
      { name: '乙硫醇', smiles: 'CCS' },
      { name: '2-十一酮', smiles: 'CCCCCCCCCC(=O)C' }
    ]
    const carvonePair = [
      { name: '(R)-香芹酮 (葛縷子)', smiles: 'CC(=O)[C@H]1CC=C(C)CC1' },
      { name: '(S)-香芹酮 (薄荷)', smiles: 'CC(=O)[C@@H]1CC=C(C)CC1' }
    ]
    const thiolPair = [
      { name: '乙醇 (~1 ppm)', smiles: 'CCO' },
      { name: '乙硫醇 (~0.00047 ppm)', smiles: 'CCS' }
    ]
    const aldehydePair = [
      { name: '正己醛 (青草)', smiles: 'CCCCCC=O' },
      { name: '反-2-己烯醛', smiles: 'CCC/C=C/C=O' }
    ]
    const muskFamily = [
      { name: '麝香酮', smiles: 'O=C1CCCCCCCCCCCC(C)C1' },
      { name: '環十五酮', smiles: 'O=C1CCCCCCCCCCCCC1' }
    ]
    const resonancePair = [
      { name: '苯甲醛 (杏仁)', smiles: 'O=Cc1ccccc1' },
      { name: '茴香醛 (甜)', smiles: 'O=Cc1ccc(OC)cc1' }
    ]

    onMounted(() => {
      if (!homoLumoChart.value) return
      chart = new Chart(homoLumoChart.value, {
        type: 'bar',
        data: {
          labels: ['甲烷', '苯', '檸檬醛', '硫醇'],
          datasets: [
            { label: 'HOMO (eV)', data: [-12.8, -9.3, -6.2, -5.8], backgroundColor: 'rgba(244,114,182,0.6)', borderColor: '#f472b6', borderWidth: 2 },
            { label: 'LUMO (eV)', data: [3.2, -0.8, -1.1, -0.4], backgroundColor: 'rgba(167,139,250,0.6)', borderColor: '#a78bfa', borderWidth: 2 },
            { label: 'Energy Gap (eV)', data: [16.0, 8.5, 5.1, 5.4], backgroundColor: 'rgba(212,175,55,0.6)', borderColor: '#d4af37', borderWidth: 2, type: 'line', yAxisID: 'y1' }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: 'HOMO-LUMO 能量與氣味強度關係', color: '#d4af37', font: { size: 18 } } },
          scales: {
            y: { beginAtZero: false, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: '軌域能量 (eV)', color: '#cbd5e1' } },
            y1: { position: 'right', beginAtZero: true, ticks: { color: '#94a3b8' }, grid: { drawOnChartArea: false }, title: { display: true, text: 'Energy Gap (eV)', color: '#d4af37' } },
            x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }
          }
        }
      })
    })
    onUnmounted(() => { if (chart) chart.destroy() })

    return { homoLumoChart, molecules, carvonePair, thiolPair, aldehydePair, muskFamily, resonancePair }
  }
}
</script>
