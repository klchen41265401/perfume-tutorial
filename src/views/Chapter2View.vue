<template>
  <ChapterLayout
    title="第2章：熱力學與揮發動力學"
    :prev="{ to: '/chapter/1', label: '第1章：量子化學' }"
    :next="{ to: '/chapter/3', label: '第3章：SAR' }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-2-1'" class="chapter-section">
        <h2 id="sec-2-1">2.1 蒸氣壓：香水揮發的驅動力</h2>
        <h3>2.1.1 Clausius-Clapeyron 方程</h3>
        <pre><code>ln(P₂/P₁) = (ΔH_vap/R)(1/T₁ - 1/T₂)
P: 蒸氣壓 (Pa), ΔH_vap: 蒸發焓, R: 8.314 J/(mol·K)</code></pre>
        <table>
          <thead><tr><th>化合物</th><th>VP (Pa)</th><th>ΔH_vap (kJ/mol)</th><th>調性</th></tr></thead>
          <tbody>
            <tr><td>Limonene</td><td>190</td><td>42.8</td><td>前調</td></tr>
            <tr><td>Linalool</td><td>21</td><td>54.2</td><td>中調</td></tr>
            <tr><td>Vanillin</td><td>0.0026</td><td>76.1</td><td>基調</td></tr>
            <tr><td>Musk ketone</td><td>0.00001</td><td>95.3</td><td>基調</td></tr>
          </tbody>
        </table>
      </section>

      <section v-show="activeSection === 'sec-2-2'" class="chapter-section">
        <h2 id="sec-2-2">2.2 Raoult's Law 與混合物揮發</h2>
        <pre><code>理想：P_i = x_i · P_i*
非理想：P_i = γ_i · x_i · P_i*
γ > 1: 正偏差（揮發加速）
γ < 1: 負偏差（揮發減慢）</code></pre>
        <table>
          <thead><tr><th>溶劑</th><th>γ_Linalool (25°C)</th><th>效果</th></tr></thead>
          <tbody>
            <tr><td>乙醇</td><td>1.05</td><td>近理想</td></tr>
            <tr><td>DPG</td><td>2.30</td><td>促進揮發</td></tr>
            <tr><td>水</td><td>85.0</td><td>極度促進</td></tr>
          </tbody>
        </table>
      </section>

      <section v-show="activeSection === 'sec-2-3'" class="chapter-section">
        <h2 id="sec-2-3">2.3 活度係數計算：UNIFAC</h2>
        <pre><code>ln(γ_i) = ln(γ_i_C) + ln(γ_i_R)
Linalool 基團拆分：2×CH₃ + 1×CH₂ + 1×CH + 1×C= + 1×CH₂= + 1×OH</code></pre>
      </section>

      <section v-show="activeSection === 'sec-2-4'" class="chapter-section">
        <h2 id="sec-2-4">2.4 擴散模型：Fick's Law</h2>
        <pre><code>J = -D · (dC/dx)
∂C/∂t = D · (∂²C/∂x²)

Wilke-Chang 估算 D (空氣中, 25°C)：
Limonene: 6.2×10⁻⁶ m²/s
Linalool: 5.1×10⁻⁶ m²/s
Vanillin: 3.8×10⁻⁶ m²/s</code></pre>
      </section>

      <section v-show="activeSection === 'sec-2-5'" class="chapter-section">
        <h2 id="sec-2-5">2.5 皮脂分配模型</h2>
        <pre><code>K_skin/air = C_skin / C_air
dC/dt = -(k_evap + k_abs) · C
Log P 影響皮脂親和力 → 高 Log P 持香更久</code></pre>

        <h2>本章總結</h2>
        <p>1. ✅ <strong>蒸氣壓決定揮發速度</strong>：VP 高→前調，VP 低→基調</p>
        <p>2. ✅ <strong>非理想溶液是常態</strong>：活度係數 γ ≠ 1</p>
        <p>3. ✅ <strong>擴散控制傳輸</strong>：Fick's Law</p>
        <p>4. ✅ <strong>皮脂分配影響持香</strong></p>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import ChapterLayout from '../components/ChapterLayout.vue'
export default {
  name: 'Chapter2View',
  components: { ChapterLayout },
  data() {
    return {
      sections: [
        { id: 'sec-2-1', label: '2.1' },
        { id: 'sec-2-2', label: '2.2' },
        { id: 'sec-2-3', label: '2.3' },
        { id: 'sec-2-4', label: '2.4' },
        { id: 'sec-2-5', label: '2.5' }
      ],
      activeSection: 'sec-2-1'
    }
  }
}
</script>
