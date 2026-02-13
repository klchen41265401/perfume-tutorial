<template>
  <ChapterLayout
    :title="t('ch2.title')"
    :prev="{ to: '/chapter/1', label: t('ch2.prev') }"
    :next="{ to: '/chapter/3', label: t('ch2.next') }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-2-1'" class="chapter-section">
        <h2 id="sec-2-1">2.1 {{ t('ch2.sec2_1') }}</h2>
        <h3>2.1.1 {{ t('ch2.sec2_1_1') }}</h3>
        <pre v-if="isZh"><code>ln(P₂/P₁) = (ΔH_vap/R)(1/T₁ - 1/T₂)
P: 蒸氣壓 (Pa), ΔH_vap: 蒸發焗, R: 8.314 J/(mol·K)</code></pre>
        <pre v-else><code>ln(P₂/P₁) = (ΔH_vap/R)(1/T₁ - 1/T₂)
P: Vapor pressure (Pa), ΔH_vap: Enthalpy of vaporization, R: 8.314 J/(mol·K)</code></pre>
        <table>
          <thead><tr><th>{{ t('ch2.compound') }}</th><th>{{ t('ch2.vaporPressure') }}</th><th>{{ t('ch2.evaporationEnthalpy') }}</th><th>{{ t('ch2.noteType') }}</th></tr></thead>
          <tbody>
            <tr><td>Limonene</td><td>190</td><td>42.8</td><td>{{ t('ch2.topNote') }}</td></tr>
            <tr><td>Linalool</td><td>21</td><td>54.2</td><td>{{ t('ch2.middleNote') }}</td></tr>
            <tr><td>Vanillin</td><td>0.0026</td><td>76.1</td><td>{{ t('ch2.baseNote') }}</td></tr>
            <tr><td>Musk ketone</td><td>0.00001</td><td>95.3</td><td>{{ t('ch2.baseNote') }}</td></tr>
          </tbody>
        </table>
      </section>

      <section v-show="activeSection === 'sec-2-2'" class="chapter-section">
        <h2 id="sec-2-2">2.2 {{ t('ch2.sec2_2') }}</h2>
        <pre v-if="isZh"><code>理想：P_i = x_i · P_i*
非理想：P_i = γ_i · x_i · P_i*
γ > 1: 正偏差（揮發加速）
γ < 1: 負偏差（揮發減慢）</code></pre>
        <pre v-else><code>Ideal: P_i = x_i · P_i*
Non-ideal: P_i = γ_i · x_i · P_i*
γ > 1: Positive deviation (evaporation accelerated)
γ < 1: Negative deviation (evaporation slowed)</code></pre>
        <table>
          <thead><tr><th>{{ t('ch2.solvent') }}</th><th>γ_Linalool (25°C)</th><th>{{ t('ch2.effect') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '乙醇' : 'Ethanol' }}</td><td>1.05</td><td>{{ t('ch2.nearIdeal') }}</td></tr>
            <tr><td>DPG</td><td>2.30</td><td>{{ t('ch2.promoteEvaporation') }}</td></tr>
            <tr><td>{{ isZh ? '水' : 'Water' }}</td><td>85.0</td><td>{{ t('ch2.extremelyPromote') }}</td></tr>
          </tbody>
        </table>
      </section>

      <section v-show="activeSection === 'sec-2-3'" class="chapter-section">
        <h2 id="sec-2-3">2.3 {{ t('ch2.sec2_3') }}</h2>
        <pre v-if="isZh"><code>ln(γ_i) = ln(γ_i_C) + ln(γ_i_R)
Linalool 基團拆分：2×CH₃ + 1×CH₂ + 1×CH + 1×C= + 1×CH₂= + 1×OH</code></pre>
        <pre v-else><code>ln(γ_i) = ln(γ_i_C) + ln(γ_i_R)
Linalool group decomposition: 2×CH₃ + 1×CH₂ + 1×CH + 1×C= + 1×CH₂= + 1×OH</code></pre>
      </section>

      <section v-show="activeSection === 'sec-2-4'" class="chapter-section">
        <h2 id="sec-2-4">2.4 {{ t('ch2.sec2_4') }}</h2>
        <pre v-if="isZh"><code>J = -D · (dC/dx)
∂C/∂t = D · (∂²C/∂x²)

Wilke-Chang 估算 D (空氣中, 25°C)：
Limonene: 6.2×10⁻⁶ m²/s
Linalool: 5.1×10⁻⁶ m²/s
Vanillin: 3.8×10⁻⁶ m²/s</code></pre>
        <pre v-else><code>J = -D · (dC/dx)
∂C/∂t = D · (∂²C/∂x²)

Wilke-Chang estimate D (in air, 25°C):
Limonene: 6.2×10⁻⁶ m²/s
Linalool: 5.1×10⁻⁶ m²/s
Vanillin: 3.8×10⁻⁶ m²/s</code></pre>
      </section>

      <section v-show="activeSection === 'sec-2-5'" class="chapter-section">
        <h2 id="sec-2-5">2.5 {{ t('ch2.sec2_5') }}</h2>
        <pre v-if="isZh"><code>K_skin/air = C_skin / C_air
dC/dt = -(k_evap + k_abs) · C
Log P 影響皮脂親和力 → 高 Log P 持香更久</code></pre>
        <pre v-else><code>K_skin/air = C_skin / C_air
dC/dt = -(k_evap + k_abs) · C
Log P affects sebum affinity → higher Log P = longer lasting</code></pre>
      </section>

      <section v-show="activeSection === 'sec-2-6'" class="chapter-section">
        <h2 id="sec-2-6">2.6 {{ t('ch2.sec2_6') }}</h2>
        <p>{{ isZh ? '蒸氣壓不僅取決於分子量，更受' : 'Vapor pressure depends not just on molecular weight, but is deeply influenced by ' }}<strong>{{ isZh ? '結構細節' : 'structural details' }}</strong>{{ isZh ? '深度影響。' : '.' }}</p>

        <h3>2.6.1 {{ t('ch2.sec2_6_1') }}</h3>
        <table class="structure-table">
          <thead>
            <tr><th>{{ t('ch2.compound') }}</th><th>{{ t('ch2.molecularWeight') }}</th><th>{{ t('ch2.vaporPressure') }} (25°C)</th><th>Log(VP)</th><th>{{ t('ch2.remarks') }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '乙醇' : 'Ethanol' }}</td><td>46</td><td>5900</td><td>3.77</td><td>{{ isZh ? '小分子、高VP' : 'Small molecule, high VP' }}</td></tr>
            <tr><td>{{ isZh ? '己醛' : 'Hexanal' }}</td><td>100</td><td>1200</td><td>3.08</td><td>{{ isZh ? '前調標準' : 'Top note standard' }}</td></tr>
            <tr><td>{{ isZh ? '檸檬烯' : 'Limonene' }}</td><td>136</td><td>190</td><td>2.28</td><td>{{ isZh ? '萜烯、中等VP' : 'Terpene, moderate VP' }}</td></tr>
            <tr><td>{{ isZh ? '芳樟醇' : 'Linalool' }}</td><td>154</td><td>21</td><td>1.32</td><td>{{ isZh ? '醇↓VP' : 'Alcohol ↓VP' }}</td></tr>
            <tr><td>{{ isZh ? '香草醛' : 'Vanillin' }}</td><td>152</td><td>0.0026</td><td>-2.59</td><td><strong>{{ isZh ? '氫鍵網絡極低VP' : 'H-bond network, extremely low VP' }}</strong></td></tr>
            <tr><td>{{ isZh ? '香葉醇' : 'Geraniol' }}</td><td>154</td><td>12</td><td>1.08</td><td>{{ isZh ? '與芳樟醇異構、VP相近' : 'Linalool isomer, similar VP' }}</td></tr>
            <tr><td>{{ isZh ? '環十五酮' : 'Cyclopentadecanone' }}</td><td>238</td><td>0.008</td><td>-2.10</td><td>{{ isZh ? '大環、低VP' : 'Macrocyclic, low VP' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '關鍵發現：' : 'Key finding: ' }}</strong>{{ isZh ? '香草醛與芳樟醇MW相近（152 vs 154），但VP相差' : 'Vanillin and linalool have similar MW (152 vs 154), but VP differs by ' }}<span class="highlight">{{ isZh ? '8000倍' : '8000×' }}</span>{{ isZh ? '！原因：香草醛有' : '! Reason: vanillin has ' }}<strong>{{ isZh ? '分子間氫鍵' : 'intermolecular H-bonds' }}</strong>{{ isZh ? '（醛+酚oH+醚O）。' : ' (aldehyde + phenol OH + ether O).' }}</p>

        <h3>2.6.2 {{ t('ch2.sec2_6_2') }}</h3>
        <table class="structure-table">
          <thead>
            <tr><th>{{ t('ch2.compound') }}</th><th>{{ t('ch2.structuralFeature') }}</th><th>{{ t('ch2.evaporationEnthalpy') }}</th><th>{{ t('ch2.vaporPressure') }}</th><th>{{ t('ch2.hBondsPerMolecule') }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '己烷' : 'Hexane' }}</td><td>{{ isZh ? '純烷烴' : 'Pure alkane' }}</td><td>31.6</td><td>16000</td><td>0</td></tr>
            <tr><td>{{ isZh ? '己醛' : 'Hexanal' }}</td><td>{{ isZh ? '醛C=O（弱H鍵）' : 'Aldehyde C=O (weak H-bond)' }}</td><td>36.2</td><td>1200</td><td>{{ isZh ? '0.5（微弱）' : '0.5 (very weak)' }}</td></tr>
            <tr><td>{{ isZh ? '己醇' : 'Hexanol' }}</td><td>{{ isZh ? '伯醇-OH' : 'Primary alcohol -OH' }}</td><td>52.4</td><td>110</td><td>2-3</td></tr>
            <tr><td>{{ isZh ? '己二醇' : 'Hexanediol' }}</td><td>{{ isZh ? '雙-OH' : 'Dual -OH' }}</td><td>71.8</td><td>0.05</td><td>4-6</td></tr>
            <tr><td>{{ isZh ? '香草醛' : 'Vanillin' }}</td><td>{{ isZh ? '醛+酚OH+醚' : 'Aldehyde + phenol OH + ether' }}</td><td>76.1</td><td>0.0026</td><td>{{ isZh ? '3-4（強網絡）' : '3-4 (strong network)' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '氫鍵效應定量：' : 'H-bond effect (quantitative):' }}</strong></p>
        <pre v-if="isZh"><code>每增加1個有效氫鍵 → ΔHᵥₐₚ ↑ 15-25 kJ/mol
                    → VP ↓ 約10-50倍（25°C）

酚OH > 醇OH > 羧酸COOH（二聚體）> 醛C=O > 醚O
（氫鍵強度排序）</code></pre>
        <pre v-else><code>Each additional effective H-bond → ΔHᵥₐₚ ↑ 15-25 kJ/mol
                                  → VP ↓ ~10-50× (25°C)

Phenol OH > Alcohol OH > Carboxylic COOH (dimer) > Aldehyde C=O > Ether O
(H-bond strength ranking)</code></pre>

        <h3>2.6.3 {{ t('ch2.sec2_6_3') }}</h3>
        <table class="structure-table">
          <thead>
            <tr><th>{{ t('ch2.compound') }}</th><th>{{ t('ch2.molecularWeight') }}</th><th>{{ t('ch2.vaporPressure') }}</th><th>{{ t('ch2.structure') }}</th><th>{{ t('ch2.piStacking') }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '己醛' : 'Hexanal' }}</td><td>100</td><td>1200</td><td>{{ isZh ? '鏈狀' : 'Chain' }}</td><td>{{ t('ch2.none') }}</td></tr>
            <tr><td>{{ isZh ? '苯甲醛' : 'Benzaldehyde' }}</td><td>106</td><td>130</td><td>{{ isZh ? '單苯環' : 'Monocyclic' }}</td><td>{{ t('ch2.weak') }}</td></tr>
            <tr><td>{{ isZh ? '萃甲醛' : 'Naphthaldehyde' }}</td><td>156</td><td>0.8</td><td>{{ isZh ? '雙環' : 'Bicyclic' }}</td><td><strong>{{ t('ch2.strong') }}</strong></td></tr>
            <tr><td>{{ isZh ? '蒽甲醛' : 'Anthraldehyde' }}</td><td>206</td><td>0.002</td><td>{{ isZh ? '三環' : 'Tricyclic' }}</td><td><strong>{{ t('ch2.veryStrong') }}</strong></td></tr>
          </tbody>
        </table>
        <p><strong>π-π{{ isZh ? '堆疊能量：' : ' stacking energy: ' }}</strong>{{ isZh ? '單苯環 ~5 kJ/mol，萃 ~12 kJ/mol，蒽 ~20 kJ/mol → ' : 'Monocyclic ~5 kJ/mol, naphthalene ~12 kJ/mol, anthracene ~20 kJ/mol → ' }}<span class="highlight">{{ isZh ? '多環芳香烴難揮發' : 'Polycyclic aromatics are difficult to volatilize' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h3>2.6.4 {{ t('ch2.sec2_6_4') }}</h3>
        <p>{{ isZh ? '同MW下，分子形狀影響揮發性。' : 'At the same MW, molecular shape affects volatility.' }}</p>

        <h4>🔹 {{ isZh ? '球形 vs 線形' : 'Spherical vs Linear' }}</h4>
        <table class="structure-table">
          <thead>
            <tr><th>{{ t('ch2.compound') }}</th><th>{{ t('ch2.molecularWeight') }}</th><th>{{ t('ch2.shape') }}</th><th>{{ t('ch2.surfaceArea') }}</th><th>{{ t('ch2.vaporPressure') }}</th><th>{{ t('ch2.ratio') }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '新戊烷' : 'Neopentane' }}</td><td>72</td><td>{{ isZh ? '球形、緊密' : 'Spherical, compact' }}</td><td>180</td><td>85000</td><td>1.0×</td></tr>
            <tr><td>{{ isZh ? '正戊烷' : 'n-Pentane' }}</td><td>72</td><td>{{ isZh ? '線形、延展' : 'Linear, extended' }}</td><td>220</td><td>57000</td><td>0.67×</td></tr>
            <tr><td>{{ isZh ? '環戊烷' : 'Cyclopentane' }}</td><td>70</td><td>{{ isZh ? '環形、緊密' : 'Cyclic, compact' }}</td><td>175</td><td>42000</td><td>0.49×</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '規律：' : 'Rule: ' }}</strong>{{ isZh ? '表面積↑ → 分子間作用力↑ → VP↓。線形>環形在揮發性上，但' : 'Surface area↑ → Intermolecular forces↑ → VP↓. Linear > cyclic in volatility, but ' }}<span class="highlight">{{ isZh ? '球形最高（表面積/體積比小）' : 'spherical is highest (low surface area/volume ratio)' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h4>🔹 {{ isZh ? '支鏈化的影響' : 'Effect of Branching' }}</h4>
        <table class="structure-table">
          <thead>
            <tr><th>{{ t('ch2.compound') }}</th><th>{{ t('ch2.structure') }}</th><th>{{ t('ch2.vaporPressure') }} (25°C)</th><th>{{ t('ch2.evaporationEnthalpy') }}</th><th>{{ t('ch2.explanation') }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '正辛醇' : 'n-Octanol' }}</td><td>CH₃(CH₂)₇OH</td><td>0.93</td><td>66.8</td><td>{{ isZh ? '長鏈、緊密堆積' : 'Long chain, tight packing' }}</td></tr>
            <tr><td>{{ isZh ? '2-乙基己醇' : '2-Ethylhexanol' }}</td><td>{{ isZh ? '支鏈C₈醇' : 'Branched C₈ alcohol' }}</td><td>2.0</td><td>59.2</td><td>{{ isZh ? '支鏈破壞堆積' : 'Branching disrupts packing' }}</td></tr>
            <tr><td>{{ isZh ? '3,5-二甲基己醇' : '3,5-Dimethylhexanol' }}</td><td>{{ isZh ? '雙支鏈C₈醇' : 'Doubly-branched C₈ alcohol' }}</td><td>5.8</td><td>53.1</td><td><strong>{{ isZh ? '高度支鏈、鬆散' : 'Highly branched, loose' }}</strong></td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '支鏈規則：' : 'Branching rule: ' }}</strong>{{ isZh ? '支鏈↑ → 堆積效率↓ → 分子間作用力↓ → ' : 'Branching↑ → Packing efficiency↓ → Intermolecular forces↓ → ' }}<span class="highlight">{{ isZh ? 'VP↑（揮發加速）' : 'VP↑ (evaporation accelerated)' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h3>2.6.5 {{ t('ch2.sec2_6_5') }}</h3>
        <table class="structure-table">
          <thead>
            <tr><th>{{ t('ch2.ringSize') }}</th><th>{{ t('ch2.representative') }}</th><th>{{ t('ch2.ringStrain') }}</th><th>{{ t('ch2.vaporPressure') }}</th><th>{{ t('ch2.impact') }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '3元環' : '3-membered' }}</td><td>{{ isZh ? '環丙烷' : 'Cyclopropane' }}</td><td>115</td><td>{{ isZh ? '極高' : 'Very high' }}</td><td>{{ isZh ? '張力大、分子不穩定、易揮發' : 'High strain, unstable, volatile' }}</td></tr>
            <tr><td>{{ isZh ? '4元環' : '4-membered' }}</td><td>{{ isZh ? '環丁烷' : 'Cyclobutane' }}</td><td>110</td><td>{{ isZh ? '高' : 'High' }}</td><td>{{ isZh ? '中等張力' : 'Moderate strain' }}</td></tr>
            <tr><td>{{ isZh ? '5元環' : '5-membered' }}</td><td>{{ isZh ? '環戊烷' : 'Cyclopentane' }}</td><td>6.5</td><td>{{ isZh ? '中' : 'Medium' }}</td><td>{{ isZh ? '接近無張力' : 'Nearly strain-free' }}</td></tr>
            <tr><td>{{ isZh ? '6元環' : '6-membered' }}</td><td>{{ isZh ? '環己烷' : 'Cyclohexane' }}</td><td>0</td><td>{{ isZh ? '中' : 'Medium' }}</td><td><strong>{{ isZh ? '無張力、最穩定' : 'No strain, most stable' }}</strong></td></tr>
            <tr><td>{{ isZh ? '15元環' : '15-membered' }}</td><td>{{ isZh ? '環十五酮' : 'Cyclopentadecanone' }}</td><td>{{ isZh ? '低' : 'Low' }}</td><td>0.008</td><td>{{ isZh ? '大環柔性、疏水強' : 'Macrocycle, highly hydrophobic' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '環張力悖論：' : 'Ring strain paradox: ' }}</strong>{{ isZh ? '小環（3-4元）張力高但' : 'Small rings (3-4) have high strain but are ' }}<strong>{{ isZh ? '緊密' : 'compact' }}</strong>{{ isZh ? ' → VP高；大環（>12元）張力低但' : ' → high VP; macrocycles (>12) have low strain but ' }}<strong>{{ isZh ? '疏水性極強' : 'extremely hydrophobic' }}</strong>{{ isZh ? ' → VP極低。' : ' → very low VP.' }}</p>

        <h3>2.6.6 {{ t('ch2.sec2_6_6') }}</h3>
        <p>{{ isZh ? 'π電子離域增強分子間作用力。' : 'π-electron delocalization enhances intermolecular forces.' }}</p>
        <table class="structure-table">
          <thead>
            <tr><th>{{ t('ch2.compound') }}</th><th>{{ t('ch2.conjugationDegree') }}</th><th>{{ t('ch2.molecularWeight') }}</th><th>{{ t('ch2.vaporPressure') }}</th><th>{{ t('ch2.evaporationEnthalpy') }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '己醛' : 'Hexanal' }}</td><td>{{ t('ch2.noConjugation') }}</td><td>100</td><td>1200</td><td>36.2</td></tr>
            <tr><td>{{ isZh ? '肉桂醛' : 'Cinnamaldehyde' }}</td><td>Ph-C=C-CHO</td><td>132</td><td>8.5</td><td>58.7</td></tr>
            <tr><td>{{ isZh ? 'β-紫羅蘭酮' : 'β-Ionone' }}</td><td>{{ isZh ? '環+雙鍵+酮共軛' : 'Ring + C=C + ketone conjugation' }}</td><td>192</td><td>0.12</td><td>71.3</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '共軛效應：' : 'Conjugation effect: ' }}</strong>{{ isZh ? '延展共軛系統 → π電子雲擴大 → ' : 'Extended conjugation → larger π-electron cloud → ' }}<span class="highlight">{{ isZh ? '色散力增強' : 'enhanced dispersion forces' }}</span>{{ isZh ? ' → ΔHᵥₐₚ↑ → VP↓。' : ' → ΔHᵥₐₚ↑ → VP↓.' }}</p>

        <h3>2.6.7 {{ t('ch2.sec2_6_7') }}</h3>
        <table class="structure-table">
          <thead>
            <tr><th>{{ t('ch2.compound') }}</th><th>{{ t('ch2.dipoleMoment') }}</th><th>{{ t('ch2.molecularWeight') }}</th><th>{{ t('ch2.vaporPressure') }}</th><th>{{ t('ch2.polarityImpact') }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '己烷' : 'Hexane' }}</td><td>0</td><td>86</td><td>16000</td><td>{{ isZh ? '無極性、僅色散力' : 'Non-polar, dispersion only' }}</td></tr>
            <tr><td>{{ isZh ? '己醛' : 'Hexanal' }}</td><td>2.7</td><td>100</td><td>1200</td><td>{{ isZh ? 'C=O偶極、VP↓' : 'C=O dipole, VP↓' }}</td></tr>
            <tr><td>{{ isZh ? '硝基苯' : 'Nitrobenzene' }}</td><td>4.2</td><td>123</td><td>24</td><td>{{ isZh ? '強偶極、VP極低' : 'Strong dipole, very low VP' }}</td></tr>
            <tr><td>{{ isZh ? '二甲亞碸' : 'DMSO' }}</td><td>3.9</td><td>78</td><td>65</td><td>{{ isZh ? 'S=O強極性' : 'S=O strong polarity' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '偶極規律：' : 'Dipole rule: ' }}</strong>μ > 3 Debye → {{ isZh ? '偶極-偶極作用顯著 → ' : 'dipole-dipole interactions significant → ' }}<span class="highlight">{{ isZh ? 'VP降低50-200倍' : 'VP reduced 50-200×' }}</span>{{ isZh ? '（相對非極性同MW分子）。' : ' (vs non-polar molecules of same MW).' }}</p>

        <h3>2.6.8 {{ t('ch2.sec2_6_8') }}</h3>
        <pre v-if="isZh"><code>龍涎香醇 (Ambroxide)：
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
        <pre v-else><code>Ambroxide:
  - MW: 236 (medium-large)
  - Log P: 5.7 (highly hydrophobic)
  - No strong H-bond donor (only ether O)
  - Rigid tricyclic structure
  - VP (25°C): 0.0003 Pa (extremely low!)

Longevity from multiple factors:
  1. Large MW → inherently slow evaporation
  2. High Log P → extreme sebum affinity (K_skin/air > 1000)
  3. Rigid tricyclic → efficient packing, strong dispersion
  4. Ether O weak H-bond → slight ΔHᵥₐₚ increase
  
→ <span class="highlight">Structural template for base notes</span>: MW 200-300, Log P > 4, cyclic rigid, weakly polar</code></pre>

        <h2>{{ t('ch2.sectionSummary') }}</h2>
        <div class="summary-box">
          <p>1. <strong>{{ isZh ? '氫鍵主導ΔHᵥₐₚ' : 'H-bonds dominate ΔHᵥₐₚ' }}</strong>{{ isZh ? '：每個氫鍵+15-25 kJ/mol，VP降10-50倍' : ': each H-bond +15-25 kJ/mol, VP reduced 10-50×' }}</p>
          <p>2. <strong>{{ isZh ? '芳香環π-π堆疊' : 'Aromatic π-π stacking' }}</strong>{{ isZh ? '：多環芳烴難揮發（π堆疊能量~5-20 kJ/mol）' : ': polycyclic aromatics hard to volatilize (π-stacking ~5-20 kJ/mol)' }}</p>
          <p>3. <strong>{{ isZh ? '分子形狀影響' : 'Molecular shape effect' }}</strong>{{ isZh ? '：球形>線形>環形（揮發性）' : ': spherical > linear > cyclic (volatility)' }}</p>
          <p>4. <strong>{{ isZh ? '支鏈破壞堆積' : 'Branching disrupts packing' }}</strong>{{ isZh ? '：支鏈↑ → VP↑' : ': branching↑ → VP↑' }}</p>
          <p>5. <strong>{{ isZh ? '共軛降低VP' : 'Conjugation lowers VP' }}</strong>{{ isZh ? '：延展共軛 → 色散力↑' : ': extended conjugation → dispersion forces↑' }}</p>
          <p>6. <strong>{{ isZh ? '極性雙刃劍' : 'Polarity double-edged sword' }}</strong>{{ isZh ? '：偶極矩>3D → VP顯著降低' : ': dipole > 3D → VP significantly reduced' }}</p>
          <p>7. <strong>{{ isZh ? '持久香料設計' : 'Lasting fragrance design' }}</strong>{{ isZh ? '：MW 200-300 + Log P>4 + 環狀剛性 + 弱極性' : ': MW 200-300 + Log P>4 + cyclic rigid + weakly polar' }}</p>
        </div>
      </section>

      <section v-show="activeSection === 'sec-2-7'" class="chapter-section">
        <h2>{{ t('ch2.chapterSummary') }}</h2>
        <p>1. ✅ <strong>{{ isZh ? '蒸氣壓決定揮發速度' : 'Vapor pressure determines evaporation rate' }}</strong>{{ isZh ? '：VP 高→前調，VP 低→基調' : ': high VP → top note, low VP → base note' }}</p>
        <p>2. ✅ <strong>{{ isZh ? '非理想溶液是常態' : 'Non-ideal solutions are the norm' }}</strong>{{ isZh ? '：活度係數 γ ≠ 1' : ': activity coefficient γ ≠ 1' }}</p>
        <p>3. ✅ <strong>{{ isZh ? '擴散控制傳輸' : 'Diffusion controls transport' }}</strong>{{ isZh ? '：Fick\'s Law' : ': Fick\'s Law' }}</p>
        <p>4. ✅ <strong>{{ isZh ? '皮脂分配影響持香' : 'Skin partitioning affects longevity' }}</strong></p>
        <p>5. ✅ <strong>{{ isZh ? '結構細節主導揮發性' : 'Structural details dominate volatility' }}</strong>{{ isZh ? '：氫鍵、π堆疊、形狀、支鏈、共軛、極性全方位影響' : ': H-bonds, π-stacking, shape, branching, conjugation, polarity all contribute' }}</p>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import { computed, ref } from 'vue'
import ChapterLayout from '../components/ChapterLayout.vue'
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'Chapter2View',
  components: { ChapterLayout },
  setup() {
    const { isZh, isEn, getLabel, t } = useLanguage()
    const sections = computed(() => [
      { id: 'sec-2-1', label: '2.1' },
      { id: 'sec-2-2', label: '2.2' },
      { id: 'sec-2-3', label: '2.3' },
      { id: 'sec-2-4', label: '2.4' },
      { id: 'sec-2-5', label: '2.5' },
      { id: 'sec-2-6', label: '2.6' },
      { id: 'sec-2-7', label: isZh.value ? '總結' : 'Summary' }
    ])
    const activeSection = ref('sec-2-1')
    return { isZh, isEn, getLabel, t, sections, activeSection }
  }
}
</script>
