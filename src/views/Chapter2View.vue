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
      </section>

      <section v-show="activeSection === 'sec-2-6'" class="chapter-section">
        <h2 id="sec-2-6">2.6 結構特徵對揮發性的影響</h2>
        <p>蒸氣壓不僅取決於分子量，更受<strong>結構細節</strong>深度影響。</p>

        <h3>2.6.1 分子量 vs 蒸氣壓：非線性關係</h3>
        <table class="structure-table">
          <thead>
            <tr><th>化合物</th><th>MW</th><th>VP (Pa, 25°C)</th><th>Log(VP)</th><th>備註</th></tr>
          </thead>
          <tbody>
            <tr><td>乙醇</td><td>46</td><td>5900</td><td>3.77</td><td>小分子、高VP</td></tr>
            <tr><td>己醛</td><td>100</td><td>1200</td><td>3.08</td><td>前調標準</td></tr>
            <tr><td>檸檬烯</td><td>136</td><td>190</td><td>2.28</td><td>萜烯、中等VP</td></tr>
            <tr><td>芳樟醇</td><td>154</td><td>21</td><td>1.32</td><td>醇↓VP</td></tr>
            <tr><td>香草醛</td><td>152</td><td>0.0026</td><td>-2.59</td><td><strong>氫鍵網絡極低VP</strong></td></tr>
            <tr><td>香葉醇</td><td>154</td><td>12</td><td>1.08</td><td>與芳樟醇異構、VP相近</td></tr>
            <tr><td>環十五酮</td><td>238</td><td>0.008</td><td>-2.10</td><td>大環、低VP</td></tr>
          </tbody>
        </table>
        <p><strong>關鍵發現：</strong>香草醛與芳樟醇MW相近（152 vs 154），但VP相差<span class="highlight">8000倍</span>！原因：香草醛有<strong>分子間氫鍵</strong>（醛+酚OH+醚O）。</p>

        <h3>2.6.2 氫鍵對ΔHᵥₐₚ的巨大影響</h3>
        <table class="structure-table">
          <thead>
            <tr><th>化合物</th><th>結構特徵</th><th>ΔHᵥₐₚ (kJ/mol)</th><th>VP (Pa)</th><th>氫鍵數/分子</th></tr>
          </thead>
          <tbody>
            <tr><td>己烷</td><td>純烷烴</td><td>31.6</td><td>16000</td><td>0</td></tr>
            <tr><td>己醛</td><td>醛C=O（弱H鍵）</td><td>36.2</td><td>1200</td><td>0.5（微弱）</td></tr>
            <tr><td>己醇</td><td>伯醇-OH</td><td>52.4</td><td>110</td><td>2-3</td></tr>
            <tr><td>己二醇</td><td>雙-OH</td><td>71.8</td><td>0.05</td><td>4-6</td></tr>
            <tr><td>香草醛</td><td>醛+酚OH+醚</td><td>76.1</td><td>0.0026</td><td>3-4（強網絡）</td></tr>
          </tbody>
        </table>
        <p><strong>氫鍵效應定量：</strong></p>
        <pre><code>每增加1個有效氫鍵 → ΔHᵥₐₚ ↑ 15-25 kJ/mol
                    → VP ↓ 約10-50倍（25°C）

酚OH > 醇OH > 羧酸COOH（二聚體）> 醛C=O > 醚O
（氫鍵強度排序）</code></pre>

        <h3>2.6.3 芳香環的π-π堆疊效應</h3>
        <table class="structure-table">
          <thead>
            <tr><th>化合物</th><th>MW</th><th>VP (Pa)</th><th>結構</th><th>π-π堆疊</th></tr>
          </thead>
          <tbody>
            <tr><td>己醛</td><td>100</td><td>1200</td><td>鏈狀</td><td>無</td></tr>
            <tr><td>苯甲醛</td><td>106</td><td>130</td><td>單苯環</td><td>弱</td></tr>
            <tr><td>萘甲醛</td><td>156</td><td>0.8</td><td>雙環</td><td><strong>強</strong></td></tr>
            <tr><td>蒽甲醛</td><td>206</td><td>0.002</td><td>三環</td><td><strong>極強</strong></td></tr>
          </tbody>
        </table>
        <p><strong>π-π堆疊能量：</strong>單苯環 ~5 kJ/mol，萘 ~12 kJ/mol，蒽 ~20 kJ/mol → <span class="highlight">多環芳香烴難揮發</span>。</p>

        <h3>2.6.4 分子形狀與表面積</h3>
        <p>同MW下，分子形狀影響揮發性。</p>

        <h4>🔹 球形 vs 線形</h4>
        <table class="structure-table">
          <thead>
            <tr><th>化合物</th><th>MW</th><th>形狀</th><th>表面積 (Ų)</th><th>VP (Pa)</th><th>比例</th></tr>
          </thead>
          <tbody>
            <tr><td>新戊烷</td><td>72</td><td>球形、緊密</td><td>180</td><td>85000</td><td>1.0×</td></tr>
            <tr><td>正戊烷</td><td>72</td><td>線形、延展</td><td>220</td><td>57000</td><td>0.67×</td></tr>
            <tr><td>環戊烷</td><td>70</td><td>環形、緊密</td><td>175</td><td>42000</td><td>0.49×</td></tr>
          </tbody>
        </table>
        <p><strong>規律：</strong>表面積↑ → 分子間作用力↑ → VP↓。線形>環形在揮發性上，但<span class="highlight">球形最高（表面積/體積比小）</span>。</p>

        <h4>🔹 支鏈化的影響</h4>
        <table class="structure-table">
          <thead>
            <tr><th>化合物</th><th>結構</th><th>VP (Pa, 25°C)</th><th>ΔHᵥₐₚ (kJ/mol)</th><th>解釋</th></tr>
          </thead>
          <tbody>
            <tr><td>正辛醇</td><td>CH₃(CH₂)₇OH</td><td>0.93</td><td>66.8</td><td>長鏈、緊密堆積</td></tr>
            <tr><td>2-乙基己醇</td><td>支鏈C₈醇</td><td>2.0</td><td>59.2</td><td>支鏈破壞堆積</td></tr>
            <tr><td>3,5-二甲基己醇</td><td>雙支鏈C₈醇</td><td>5.8</td><td>53.1</td><td><strong>高度支鏈、鬆散</strong></td></tr>
          </tbody>
        </table>
        <p><strong>支鏈規則：</strong>支鏈↑ → 堆積效率↓ → 分子間作用力↓ → <span class="highlight">VP↑（揮發加速）</span>。</p>

        <h3>2.6.5 環張力與揮發性</h3>
        <table class="structure-table">
          <thead>
            <tr><th>環大小</th><th>代表物</th><th>環張力 (kJ/mol)</th><th>VP (Pa)</th><th>影響</th></tr>
          </thead>
          <tbody>
            <tr><td>3元環</td><td>環丙烷</td><td>115</td><td>極高</td><td>張力大、分子不穩定、易揮發</td></tr>
            <tr><td>4元環</td><td>環丁烷</td><td>110</td><td>高</td><td>中等張力</td></tr>
            <tr><td>5元環</td><td>環戊烷</td><td>6.5</td><td>中</td><td>接近無張力</td></tr>
            <tr><td>6元環</td><td>環己烷</td><td>0</td><td>中</td><td><strong>無張力、最穩定</strong></td></tr>
            <tr><td>15元環</td><td>環十五酮</td><td>低</td><td>0.008</td><td>大環柔性、疏水強</td></tr>
          </tbody>
        </table>
        <p><strong>環張力悖論：</strong>小環（3-4元）張力高但<strong>緊密</strong> → VP高；大環（>12元）張力低但<strong>疏水性極強</strong> → VP極低。</p>

        <h3>2.6.6 共軛系統降低揮發性</h3>
        <p>π電子離域增強分子間作用力。</p>
        <table class="structure-table">
          <thead>
            <tr><th>化合物</th><th>共軛程度</th><th>MW</th><th>VP (Pa)</th><th>ΔHᵥₐₚ (kJ/mol)</th></tr>
          </thead>
          <tbody>
            <tr><td>己醛</td><td>無共軛</td><td>100</td><td>1200</td><td>36.2</td></tr>
            <tr><td>肉桂醛</td><td>Ph-C=C-CHO</td><td>132</td><td>8.5</td><td>58.7</td></tr>
            <tr><td>β-紫羅蘭酮</td><td>環+雙鍵+酮共軛</td><td>192</td><td>0.12</td><td>71.3</td></tr>
          </tbody>
        </table>
        <p><strong>共軛效應：</strong>延展共軛系統 → π電子雲擴大 → <span class="highlight">色散力增強</span> → ΔHᵥₐₚ↑ → VP↓。</p>

        <h3>2.6.7 極性與偶極-偶極作用</h3>
        <table class="structure-table">
          <thead>
            <tr><th>化合物</th><th>偶極矩 (Debye)</th><th>MW</th><th>VP (Pa)</th><th>極性影響</th></tr>
          </thead>
          <tbody>
            <tr><td>己烷</td><td>0</td><td>86</td><td>16000</td><td>無極性、僅色散力</td></tr>
            <tr><td>己醛</td><td>2.7</td><td>100</td><td>1200</td><td>C=O偶極、VP↓</td></tr>
            <tr><td>硝基苯</td><td>4.2</td><td>123</td><td>24</td><td>強偶極、VP極低</td></tr>
            <tr><td>二甲亞碸</td><td>3.9</td><td>78</td><td>65</td><td>S=O強極性</td></tr>
          </tbody>
        </table>
        <p><strong>偶極規律：</strong>μ > 3 Debye → 偶極-偶極作用顯著 → <span class="highlight">VP降低50-200倍</span>（相對非極性同MW分子）。</p>

        <h3>2.6.8 實戰案例：為何龍涎香如此持久？</h3>
        <pre><code>龍涎香醇 (Ambroxide)：
  - MW: 236（中等偏大）
  - Log P: 5.7（極疏水）
  - 無強氫鍵供體（僅醚O）
  - 三環剛性結構
  - VP (25°C): 0.0003 Pa（極低！）

持久性來源多重因素：
  1. 大分子量 → 本體揮發慢
  2. 高Log P → 皮脂親和力極強（K_skin/air > 1000）
  3. 剛性三環 → 堆積效率高、色散力強
  4. 醚O微弱氫鍵 → 微增ΔHᵥₐₚ但不至於不揮發
  
→ <span class="highlight">基調香料的結構範本</span>：MW 200-300, Log P > 4, 環狀剛性, 弱極性</code></pre>

        <h2>本節總結</h2>
        <div class="summary-box">
          <p>1. <strong>氫鍵主導ΔHᵥₐₚ</strong>：每個氫鍵+15-25 kJ/mol，VP降10-50倍</p>
          <p>2. <strong>芳香環π-π堆疊</strong>：多環芳烴難揮發（π堆疊能量~5-20 kJ/mol）</p>
          <p>3. <strong>分子形狀影響</strong>：球形>線形>環形（揮發性）</p>
          <p>4. <strong>支鏈破壞堆積</strong>：支鏈↑ → VP↑</p>
          <p>5. <strong>共軛降低VP</strong>：延展共軛 → 色散力↑</p>
          <p>6. <strong>極性雙刃劍</strong>：偶極矩>3D → VP顯著降低</p>
          <p>7. <strong>持久香料設計</strong>：MW 200-300 + Log P>4 + 環狀剛性 + 弱極性</p>
        </div>
      </section>

      <section v-show="activeSection === 'sec-2-7'" class="chapter-section">
        <h2>本章總結</h2>
        <p>1. ✅ <strong>蒸氣壓決定揮發速度</strong>：VP 高→前調，VP 低→基調</p>
        <p>2. ✅ <strong>非理想溶液是常態</strong>：活度係數 γ ≠ 1</p>
        <p>3. ✅ <strong>擴散控制傳輸</strong>：Fick's Law</p>
        <p>4. ✅ <strong>皮脂分配影響持香</strong></p>
        <p>5. ✅ <strong>結構細節主導揮發性</strong>：氫鍵、π堆疊、形狀、支鏈、共軛、極性全方位影響</p>
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
        { id: 'sec-2-5', label: '2.5' },
        { id: 'sec-2-6', label: '2.6' },
        { id: 'sec-2-7', label: '總結' }
      ],
      activeSection: 'sec-2-1'
    }
  }
}
</script>
