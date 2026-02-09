<template>
  <div>
    <h1>第3章：SAR 深度解析</h1>
    <ChapterNav :prev="{ to: '/chapter/2', label: '第2章：熱力學' }" :next="{ to: '/chapter/4', label: '第4章：合成' }" />
    <MoleculeGallery title="🧪 本章關鍵分子" :molecules="molecules" />
    <hr>
    <h2>3.1 Topliss 決策樹</h2>
    <p>系統性地決定下一步結構修飾方向：</p>
    <pre><code>起始化合物 → 測試活性
  活性↑ → 增加疏水性（加 -Cl, -CH₃）
  活性↓ → 增加親水性（加 -OH, -NH₂）
  活性不變 → 改變電子效應（加 -NO₂, -OCH₃）</code></pre>
    <hr>
    <h2>3.2 Hansch 分析</h2>
    <pre><code>log(1/C) = a·log P - b·(log P)² + c·σ + d·Es + e
C: 等效濃度, log P: 疏水性
σ: Hammett 常數, Es: Taft 立體參數

關鍵發現：最適 log P ≈ 3.5（拋物線頂點）</code></pre>
    <div class="chart-container"><canvas ref="hanschChart" style="max-height: 400px;"></canvas></div>
    <hr>
    <h2>3.3 分子描述子計算</h2>
    <pre><code class="language-python">from rdkit import Chem
from rdkit.Chem import Descriptors

mol = Chem.MolFromSmiles('CC(=CCCC(=CCO)C)C')  # Geraniol
print(f"MW: {Descriptors.MolWt(mol):.1f}")
print(f"LogP: {Descriptors.MolLogP(mol):.2f}")
print(f"TPSA: {Descriptors.TPSA(mol):.1f}")
print(f"HBD: {Descriptors.NumHDonors(mol)}")
print(f"HBA: {Descriptors.NumHAcceptors(mol)}")</code></pre>
    <hr>
    <h2>3.4 3D-QSAR 模型</h2>
    <pre><code>CoMFA (Comparative Molecular Field Analysis):
1. 分子疊合（共同骨架）
2. 計算立體場和靜電場
3. PLS回歸建模
4. 等值面可視化

預測能力：q² > 0.5 → 有意義的模型</code></pre>
    <hr>
    <h2>3.5 藥效團建模</h2>
    <pre><code>麝香藥效團：
[Hydrophobic] ─ 5.2 Å ─ [H-bond Acceptor]
       ↓
     10.8 Å
       ↓
[Hydrophobic]

匹配度 > 0.85 → 預測為麝香氣味</code></pre>
    <hr>
    <h2>本章總結</h2>
    <p>1. ✅ <strong>Topliss 樹</strong>：系統化結構修飾</p>
    <p>2. ✅ <strong>Hansch 分析</strong>：定量疏水性-活性關係</p>
    <p>3. ✅ <strong>3D-QSAR</strong>：三維空間結構-活性</p>
    <p>4. ✅ <strong>藥效團</strong>：必要空間特徵提取</p>
    <ChapterNav :prev="{ to: '/chapter/2', label: '第2章：熱力學' }" :next="{ to: '/chapter/4', label: '第4章：合成' }" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterNav from '../components/ChapterNav.vue'
import MoleculeGallery from '../components/MoleculeGallery.vue'
export default {
  name: 'Chapter3View',
  components: { ChapterNav, MoleculeGallery },
  setup() {
    const hanschChart = ref(null)
    let chart = null
    const molecules = [
      { name: '香葉醇 (Geraniol)', smiles: 'CC(=CCCC(=CCO)C)C' },
      { name: '麝香酮 (Muscone)', smiles: 'O=C1CCCCCCCCCCCCC1' },
      { name: '芳樟醇 (Linalool)', smiles: 'CC(=CCCC(C)(O)C=C)C' },
      { name: '肉桂醛', smiles: 'O=C/C=C/c1ccccc1' },
      { name: '苯甲醛', smiles: 'O=Cc1ccccc1' }
    ]
    onMounted(() => {
      if (!hanschChart.value) return
      chart = new Chart(hanschChart.value, {
        type: 'scatter',
        data: {
          datasets: [
            { label: '實際活性', data: [{x:2.5,y:1.8},{x:3.0,y:1.95},{x:3.5,y:2.1},{x:4.0,y:2.05},{x:4.5,y:1.9},{x:5.0,y:1.7}], backgroundColor: '#f472b6', borderColor: '#f472b6', pointRadius: 8, pointHoverRadius: 12 },
            { label: '預測曲線', data: [{x:2.0,y:1.6},{x:2.5,y:1.82},{x:3.0,y:1.98},{x:3.5,y:2.08},{x:4.0,y:2.1},{x:4.5,y:2.0},{x:5.0,y:1.78},{x:5.5,y:1.5}], type: 'line', borderColor: '#a78bfa', backgroundColor: 'rgba(167,139,250,0.1)', borderWidth: 3, tension: 0.4, fill: true, pointRadius: 0 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: 'Hansch分析：Log P vs 氣味強度', color: '#d4af37', font: { size: 18 } } },
          scales: {
            y: { title: { display: true, text: 'log(活性)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } },
            x: { title: { display: true, text: 'Log P (疏水性)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }
          }
        }
      })
    })
    onUnmounted(() => { if (chart) chart.destroy() })
    return { hanschChart, molecules }
  }
}
</script>
