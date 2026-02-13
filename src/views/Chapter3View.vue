<template>
  <ChapterLayout
    :title="t('ch3.title')"
    :prev="{ to: '/chapter/2', label: t('ch3.prev') }"
    :next="{ to: '/chapter/4', label: t('ch3.next') }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-3-1'" class="chapter-section">
        <h2 id="sec-3-1">3.1 {{ t('ch3.sec3_1') }}</h2>
        <p>{{ isZh ? '系統性地決定下一步結構修飾方向：' : 'Systematically determine the next structural modification direction:' }}</p>
        <pre v-if="isZh"><code>起始化合物 → 測試活性
  活性↑ → 增加疏水性（加 -Cl, -CH₃）
  活性↓ → 增加親水性（加 -OH, -NH₂）
  活性不變 → 改變電子效應（加 -NO₂, -OCH₃）</code></pre>
        <pre v-else><code>Starting compound → Test activity
  Activity↑ → Increase hydrophobicity (add -Cl, -CH₃)
  Activity↓ → Increase hydrophilicity (add -OH, -NH₂)
  Activity unchanged → Change electronic effects (add -NO₂, -OCH₃)</code></pre>
      </section>

      <section v-show="activeSection === 'sec-3-2'" class="chapter-section">
        <h2 id="sec-3-2">3.2 {{ t('ch3.sec3_2') }}</h2>
        <pre v-if="isZh"><code>log(1/C) = a·log P - b·(log P)² + c·σ + d·Es + e
C: 等效濃度, log P: 疏水性
σ: Hammett 常數, Es: Taft 立體參數

關鍵發現：最適 log P ≈ 3.5（拋物線頂點）</code></pre>
        <pre v-else><code>log(1/C) = a·log P - b·(log P)² + c·σ + d·Es + e
C: Equieffective concentration, log P: Lipophilicity
σ: Hammett constant, Es: Taft steric parameter

Key finding: Optimal log P ≈ 3.5 (parabola vertex)</code></pre>
        <div class="chart-container"><canvas ref="hanschChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-3-3'" class="chapter-section">
        <h2 id="sec-3-3">3.3 {{ t('ch3.sec3_3') }}</h2>
        <pre><code class="language-python">from rdkit import Chem
from rdkit.Chem import Descriptors

mol = Chem.MolFromSmiles('CC(=CCCC(=CCO)C)C')  # Geraniol
print(f"MW: {Descriptors.MolWt(mol):.1f}")
print(f"LogP: {Descriptors.MolLogP(mol):.2f}")
print(f"TPSA: {Descriptors.TPSA(mol):.1f}")
print(f"HBD: {Descriptors.NumHDonors(mol)}")
print(f"HBA: {Descriptors.NumHAcceptors(mol)}")</code></pre>
      </section>

      <section v-show="activeSection === 'sec-3-4'" class="chapter-section">
        <h2 id="sec-3-4">3.4 {{ t('ch3.sec3_4') }}</h2>
        <pre v-if="isZh"><code>CoMFA (Comparative Molecular Field Analysis):
1. 分子疊合（共同骨架）
2. 計算立體場和靜電場
3. PLS回歸建模
4. 等值面可視化

預測能力：q² > 0.5 → 有意義的模型</code></pre>
        <pre v-else><code>CoMFA (Comparative Molecular Field Analysis):
1. Molecular alignment (common scaffold)
2. Calculate steric and electrostatic fields
3. PLS regression modeling
4. Isosurface visualization

Predictive power: q² > 0.5 → Meaningful model</code></pre>
      </section>

      <section v-show="activeSection === 'sec-3-5'" class="chapter-section">
        <h2 id="sec-3-5">3.5 {{ t('ch3.sec3_5') }}</h2>
        <pre v-if="isZh"><code>麝香藥效團：
[Hydrophobic] ─ 5.2 Å ─ [H-bond Acceptor]
       ↓
     10.8 Å
       ↓
[Hydrophobic]

匹配度 > 0.85 → 預測為麝香氣味</code></pre>
        <pre v-else><code>Musk Pharmacophore:
[Hydrophobic] ─ 5.2 Å ─ [H-bond Acceptor]
       ↓
     10.8 Å
       ↓
[Hydrophobic]

Fit score > 0.85 → Predicted as musk odor</code></pre>
      </section>

      <section v-show="activeSection === 'sec-3-6'" class="chapter-section">
        <h2 id="sec-3-6">3.6 {{ t('ch3.sec3_6') }}</h2>

        <h3>3.6.1 {{ t('ch3.sec3_6_1') }}</h3>
        <p>{{ isZh ? '香豆素骨架 (2H-chromen-2-one) 是典型的花香/香草香基底，但取代基位置和類型導致氣味變化極大。' : 'The coumarin scaffold (2H-chromen-2-one) is a classic floral/vanilla base, but substitution position and type cause dramatic odor changes.' }}</p>
        <table class="structure-table">
          <thead>
            <tr>
              <th>{{ t('ch3.compound') }}</th>
              <th>{{ t('ch3.substitutionPosition') }}</th>
              <th>{{ t('ch3.substituent') }}</th>
              <th>Log P</th>
              <th>{{ t('common.odorIntensity') }}</th>
              <th>{{ t('ch3.odorDescription') }}</th>
              <th>{{ t('ch3.sarExplanation') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ isZh ? '香豆素' : 'Coumarin' }}</td>
              <td>-</td>
              <td>{{ isZh ? '未取代' : 'Unsubstituted' }}</td>
              <td>1.39</td>
              <td>{{ isZh ? '中' : 'Medium' }}</td>
              <td>{{ isZh ? '新鮮乾草、香草' : 'Fresh hay, vanilla' }}</td>
              <td>{{ isZh ? '基本藥效團' : 'Basic pharmacophore' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '7-羥基香豆素' : '7-Hydroxycoumarin' }}</td>
              <td>{{ isZh ? '7位' : 'C-7' }}</td>
              <td>-OH</td>
              <td>1.08</td>
              <td>{{ isZh ? '弱' : 'Weak' }}</td>
              <td>{{ isZh ? '微弱花香' : 'Faint floral' }}</td>
              <td>{{ isZh ? 'OH增加極性、降低揮發' : 'OH increases polarity, reduces volatility' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '7-甲氧基香豆素' : '7-Methoxycoumarin' }}</td>
              <td>{{ isZh ? '7位' : 'C-7' }}</td>
              <td>-OCH₃</td>
              <td>1.92</td>
              <td><strong>{{ isZh ? '強' : 'Strong' }}</strong></td>
              <td>{{ isZh ? '椰子、香草、甜' : 'Coconut, vanilla, sweet' }}</td>
              <td>{{ isZh ? 'OCH₃在7位最佳平衡' : 'OCH₃ at C-7 optimal balance' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '6-甲基香豆素' : '6-Methylcoumarin' }}</td>
              <td>{{ isZh ? '6位' : 'C-6' }}</td>
              <td>-CH₃</td>
              <td>1.89</td>
              <td>{{ isZh ? '中' : 'Medium' }}</td>
              <td>{{ isZh ? '甜、乾草' : 'Sweet, hay' }}</td>
              <td>{{ isZh ? '甲基增加疏水性' : 'Methyl increases hydrophobicity' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '6,7-二羥基香豆素' : '6,7-Dihydroxycoumarin' }}</td>
              <td>{{ isZh ? '6,7位' : 'C-6,7' }}</td>
              <td>-OH×2</td>
              <td>0.31</td>
              <td>{{ isZh ? '極弱' : 'Very weak' }}</td>
              <td>{{ isZh ? '幾乎無味' : 'Nearly odorless' }}</td>
              <td>{{ isZh ? '雙OH過度親水、不揮發' : 'Dual OH overly hydrophilic, non-volatile' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '7-乙氧基-4-甲基香豆素' : '7-Ethoxy-4-methylcoumarin' }}</td>
              <td>{{ isZh ? '7位+4位' : 'C-7+C-4' }}</td>
              <td>-OC₂H₅, -CH₃</td>
              <td>2.51</td>
              <td><strong>{{ isZh ? '極強' : 'Very strong' }}</strong></td>
              <td>{{ isZh ? '濃烈椰子、甜' : 'Intense coconut, sweet' }}</td>
              <td>{{ isZh ? '雙取代協同、達最佳Log P' : 'Dual substitution synergy, optimal Log P' }}</td>
            </tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? 'SAR總結：' : 'SAR Summary:' }}</strong></p>
        <ul>
          <li>{{ isZh ? '7位取代最有效（接近內酯羰基，影響電子分佈）' : 'C-7 substitution most effective (near lactone carbonyl, affects electron distribution)' }}</li>
          <li>{{ isZh ? '-OCH₃ > -CH₃ > -OH（疏水性與揮發性平衡）' : '-OCH₃ > -CH₃ > -OH (hydrophobicity-volatility balance)' }}</li>
          <li>{{ isZh ? '雙取代可達協同效應，但需避免過度極性' : 'Dual substitution achieves synergy, but avoid excessive polarity' }}</li>
          <li><span class="highlight">{{ isZh ? '最佳Log P窗口：1.8-2.8' : 'Optimal Log P window: 1.8-2.8' }}</span></li>
        </ul>

        <h3>{{ isZh ? '3.6.2 案例二：麝香系列 - 大環vs硝基麝香' : '3.6.2 Case 2: Musk Series - Macrocyclic vs Nitro Musks' }}</h3>
        <p>{{ isZh ? '麝香氣味可由截然不同的結構產生，展示「多條路徑達同一終點」的SAR現象。' : 'Musk odor can arise from vastly different structures, demonstrating the SAR phenomenon of "multiple paths to the same endpoint."' }}</p>
        
        <h4>{{ isZh ? '🔹 天然麝香 (Macrocyclic Musks)' : '🔹 Natural Musks (Macrocyclic Musks)' }}</h4>
        <table class="structure-table">
          <thead>
            <tr><th>{{ isZh ? '化合物' : 'Compound' }}</th><th>{{ isZh ? '環大小' : 'Ring Size' }}</th><th>{{ isZh ? '官能團' : 'Functional Group' }}</th><th>Log P</th><th>{{ isZh ? '閾值 (ng/L)' : 'Threshold (ng/L)' }}</th><th>{{ isZh ? '氣味質量' : 'Odor Quality' }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '環十五酮 (Muscone)' : 'Muscone (C15 ketone)' }}</td><td>{{ isZh ? '15元環' : '15-membered' }}</td><td>{{ isZh ? '酮' : 'Ketone' }}</td><td>5.7</td><td>0.1</td><td><strong>{{ isZh ? '純麝香、動物性' : 'Pure musk, animalic' }}</strong></td></tr>
            <tr><td>{{ isZh ? '環十五內酯 (Exaltolide)' : 'Exaltolide (C15 lactone)' }}</td><td>{{ isZh ? '15元環' : '15-membered' }}</td><td>{{ isZh ? '內酯' : 'Lactone' }}</td><td>5.3</td><td>1.2</td><td>{{ isZh ? '麝香、粉質' : 'Musk, powdery' }}</td></tr>
            <tr><td>{{ isZh ? '環十六內酯' : 'C16 Lactone' }}</td><td>{{ isZh ? '16元環' : '16-membered' }}</td><td>{{ isZh ? '內酯' : 'Lactone' }}</td><td>5.9</td><td>8.0</td><td>{{ isZh ? '麝香、細膩' : 'Musk, delicate' }}</td></tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '🔹 合成麝香 (Nitro/Polycyclic Musks)' : '🔹 Synthetic Musks (Nitro/Polycyclic Musks)' }}</h4>
        <table class="structure-table">
          <thead>
            <tr><th>{{ isZh ? '化合物' : 'Compound' }}</th><th>{{ isZh ? '結構類型' : 'Structure Type' }}</th><th>Log P</th><th>{{ isZh ? '閾值 (ng/L)' : 'Threshold (ng/L)' }}</th><th>{{ isZh ? '氣味質量' : 'Odor Quality' }}</th><th>{{ isZh ? '環境問題' : 'Environmental Issue' }}</th></tr>
          </thead>
          <tbody>
            <tr><td>{{ isZh ? '麝香酮 (Musk Ketone)' : 'Musk Ketone' }}</td><td>{{ isZh ? '硝基麝香' : 'Nitro musk' }}</td><td>4.3</td><td>50</td><td>{{ isZh ? '麝香、粉質' : 'Musk, powdery' }}</td><td>{{ isZh ? '持久性有機污染物' : 'Persistent organic pollutant' }}</td></tr>
            <tr><td>{{ isZh ? '佳樂麝香 (Galaxolide)' : 'Galaxolide' }}</td><td>{{ isZh ? '多環麝香' : 'Polycyclic musk' }}</td><td>5.9</td><td>2.5</td><td>{{ isZh ? '麝香、清爽' : 'Musk, fresh' }}</td><td>{{ isZh ? '生物蓄積性' : 'Bioaccumulative' }}</td></tr>
            <tr><td>Helvetolide</td><td>{{ isZh ? '多環麝香' : 'Polycyclic musk' }}</td><td>6.2</td><td>0.8</td><td>{{ isZh ? '麝香、木質' : 'Musk, woody' }}</td><td>{{ isZh ? '較安全' : 'Safer' }}</td></tr>
          </tbody>
        </table>

        <p><strong>{{ isZh ? '結構多樣性解釋：' : 'Structural Diversity Explanation:' }}</strong></p>
        <ul>
          <li>{{ isZh ? '大環麝香：靠' : 'Macrocyclic musks: rely on ' }}<span class="highlight">{{ isZh ? '柔性構象適配受體口袋' : 'flexible conformation fitting receptor pocket' }}</span>{{ isZh ? '（直徑10-12 Å）' : ' (diameter 10-12 Å)' }}</li>
          <li>{{ isZh ? '硝基麝香：靠' : 'Nitro musks: rely on ' }}<span class="highlight">{{ isZh ? '苯環剛性+硝基極性定位' : 'benzene ring rigidity + nitro polar positioning' }}</span>{{ isZh ? '模擬同樣空間' : ' to mimic the same space' }}</li>
          <li>{{ isZh ? '多環麝香：靠' : 'Polycyclic musks: rely on ' }}<span class="highlight">{{ isZh ? '多環骨架+甲基填充疏水袋' : 'polycyclic scaffold + methyl filling hydrophobic pocket' }}</span></li>
          <li>{{ isZh ? '共同點：分子體積250-350 Ų、Log P > 4、疏水為主+極性錨點' : 'Common: molecular volume 250-350 Ų, Log P > 4, mainly hydrophobic + polar anchor' }}</li>
        </ul>

        <h3>{{ isZh ? '3.6.3 案例三：薄荷醇立體異構 - 8種可能性的氣味地圖' : '3.6.3 Case 3: Menthol Stereoisomers - Odor Map of 8 Possibilities' }}</h3>
        <p>{{ isZh ? '薄荷醇有3個手性中心 → 2³ = 8種立體異構體，氣味完全不同。' : 'Menthol has 3 chiral centers → 2³ = 8 stereoisomers with completely different odors.' }}</p>
        <table class="structure-table">
          <thead>
            <tr>
              <th>{{ isZh ? '異構體' : 'Isomer' }}</th>
              <th>{{ isZh ? 'C1-C2-C5構型' : 'C1-C2-C5 Config' }}</th>
              <th>{{ isZh ? '氣味' : 'Odor' }}</th>
              <th>{{ isZh ? '清涼感強度' : 'Cooling Intensity' }}</th>
              <th>{{ isZh ? '閾值 (ppm)' : 'Threshold (ppm)' }}</th>
              <th>{{ isZh ? '受體親和力' : 'Receptor Affinity' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ isZh ? '(-)-薄荷醇' : '(-)-Menthol' }}</td>
              <td>1R,2S,5R</td>
              <td><strong>{{ isZh ? '強烈薄荷、清涼' : 'Intense mint, cooling' }}</strong></td>
              <td>{{ isZh ? '100%（基準）' : '100% (baseline)' }}</td>
              <td>0.4</td>
              <td>{{ isZh ? '極高（Ki=4nM）' : 'Very high (Ki=4nM)' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '(+)-薄荷醇' : '(+)-Menthol' }}</td>
              <td>1S,2R,5S</td>
              <td>{{ isZh ? '微弱薄荷' : 'Faint mint' }}</td>
              <td>~5%</td>
              <td>25</td>
              <td>{{ isZh ? '低' : 'Low' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '(-)-新薄荷醇' : '(-)-Neomenthol' }}</td>
              <td>1S,2S,5R</td>
              <td>{{ isZh ? '樟腦、藥用' : 'Camphor, medicinal' }}</td>
              <td>~2%</td>
              <td>60</td>
              <td>{{ isZh ? '極低' : 'Very low' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '(+)-新薄荷醇' : '(+)-Neomenthol' }}</td>
              <td>1R,2R,5S</td>
              <td>{{ isZh ? '木質、辛辣' : 'Woody, spicy' }}</td>
              <td><1%</td>
              <td>>100</td>
              <td>{{ isZh ? '幾乎無' : 'Almost none' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '(-)-異薄荷醇' : '(-)-Isomenthol' }}</td>
              <td>1R,2R,5R</td>
              <td>{{ isZh ? '草本、輕微清涼' : 'Herbal, mild cooling' }}</td>
              <td>~20%</td>
              <td>8</td>
              <td>{{ isZh ? '中等' : 'Moderate' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '(+)-異薄荷醇' : '(+)-Isomenthol' }}</td>
              <td>1S,2S,5S</td>
              <td>{{ isZh ? '草本' : 'Herbal' }}</td>
              <td><5%</td>
              <td>40</td>
              <td>{{ isZh ? '低' : 'Low' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '新異薄荷醇（兩種）' : 'Neoisomenthol (two forms)' }}</td>
              <td>{{ isZh ? '其他組合' : 'Other combos' }}</td>
              <td>{{ isZh ? '木質、無清涼' : 'Woody, no cooling' }}</td>
              <td>0%</td>
              <td>>100</td>
              <td>{{ isZh ? '無' : 'None' }}</td>
            </tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '分子對接分析：' : 'Molecular Docking Analysis:' }}</strong></p>
        <pre v-if="isZh"><code>TRPM8受體（冷感受體）結合模式：
(-)-薄荷醇：
  - 異丙基：插入疏水袋（Val846, Leu843）
  - 羥基：與Tyr745形成氫鍵
  - 環己烷椅式：完美貼合受體腔
  → ΔG_bind = -9.2 kcal/mol

(+)-薄荷醇（鏡像）：
  - 異丙基方向錯誤、無法深入疏水袋
  - 羥基距離Tyr745過遠（5.2 Å vs 最佳2.8 Å）
  → ΔG_bind = -4.1 kcal/mol（親和力降100倍）</code></pre>
        <pre v-else><code>TRPM8 receptor (cold receptor) binding mode:
(-)-Menthol:
  - Isopropyl: inserts into hydrophobic pocket (Val846, Leu843)
  - Hydroxyl: forms H-bond with Tyr745
  - Cyclohexane chair: perfectly fits receptor cavity
  → ΔG_bind = -9.2 kcal/mol

(+)-Menthol (mirror image):
  - Isopropyl direction wrong, cannot reach hydrophobic pocket
  - Hydroxyl too far from Tyr745 (5.2 Å vs optimal 2.8 Å)
  → ΔG_bind = -4.1 kcal/mol (100-fold affinity drop)</code></pre>
        <p><strong>{{ isZh ? '關鍵洞察：' : 'Key Insight: ' }}</strong><span class="highlight">{{ isZh ? '0.5 Å的空間差異 = 清涼感100倍差距' : '0.5 Å spatial difference = 100-fold cooling sensation gap' }}</span> → {{ isZh ? '受體極度敏感於立體化學。' : 'receptors are extremely sensitive to stereochemistry.' }}</p>

        <h3>{{ isZh ? '3.6.4 案例四：玫瑰香的多樣性 - 不同骨架達同一氣味' : '3.6.4 Case 4: Rose Fragrance Diversity - Different Scaffolds, Same Odor' }}</h3>
        <p>{{ isZh ? '「玫瑰香」可由至少5類結構產生，展示嗅覺受體的廣譜識別能力。' : '"Rose fragrance" can be produced by at least 5 structural classes, demonstrating the broad-spectrum recognition of olfactory receptors.' }}</p>
        <table class="structure-table">
          <thead>
            <tr>
              <th>{{ isZh ? '化合物' : 'Compound' }}</th>
              <th>{{ isZh ? '結構類型' : 'Structure Type' }}</th>
              <th>{{ isZh ? '式' : 'Formula' }}</th>
              <th>Log P</th>
              <th>{{ isZh ? '閾值' : 'Threshold' }}</th>
              <th>{{ isZh ? '玫瑰香細節' : 'Rose Detail' }}</th>
              <th>{{ isZh ? '共同特徵' : 'Common Feature' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ isZh ? '苯乙醇' : 'Phenylethanol' }}</td>
              <td>{{ isZh ? '芳香醇' : 'Aromatic alcohol' }}</td>
              <td>C₆H₅CH₂CH₂OH</td>
              <td>1.36</td>
              <td>1 ppm</td>
              <td>{{ isZh ? '玫瑰、蜂蜜' : 'Rose, honey' }}</td>
              <td>{{ isZh ? '芳香環+OH（5-6 Å）' : 'Aromatic ring+OH (5-6 Å)' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '香茅醇' : 'Citronellol' }}</td>
              <td>{{ isZh ? '萜烯醇' : 'Terpenol' }}</td>
              <td>C₁₀H₂₀O</td>
              <td>3.4</td>
              <td>0.08 ppm</td>
              <td>{{ isZh ? '玫瑰、柑橘' : 'Rose, citrus' }}</td>
              <td>{{ isZh ? '疏水鏈+末端OH' : 'Hydrophobic chain+terminal OH' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '香葉醇' : 'Geraniol' }}</td>
              <td>{{ isZh ? '萜烯醇' : 'Terpenol' }}</td>
              <td>C₁₀H₁₈O</td>
              <td>3.28</td>
              <td>0.04 ppm</td>
              <td>{{ isZh ? '玫瑰、甜' : 'Rose, sweet' }}</td>
              <td>{{ isZh ? '反式C=C+OH' : 'Trans C=C+OH' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '玫瑰醚' : 'Rose oxide' }}</td>
              <td>{{ isZh ? '不飽和醚' : 'Unsaturated ether' }}</td>
              <td>C₁₀H₁₈O</td>
              <td>3.9</td>
              <td>0.005 ppm</td>
              <td><strong>{{ isZh ? '極強玫瑰' : 'Very strong rose' }}</strong></td>
              <td>{{ isZh ? '環+醚+甲基' : 'Ring+ether+methyl' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '玫瑰酮' : 'Rose ketone' }}</td>
              <td>{{ isZh ? '酮' : 'Ketone' }}</td>
              <td>C₁₃H₂₂O</td>
              <td>4.1</td>
              <td>0.1 ppm</td>
              <td>{{ isZh ? '玫瑰、果香' : 'Rose, fruity' }}</td>
              <td>{{ isZh ? '酮+疏水尾' : 'Ketone+hydrophobic tail' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '玫瑰呋喃' : 'Rose furanone' }}</td>
              <td>{{ isZh ? '呋喃衍生物' : 'Furan derivative' }}</td>
              <td>C₉H₁₆O₂</td>
              <td>2.8</td>
              <td>0.02 ppm</td>
              <td>{{ isZh ? '玫瑰、草莓' : 'Rose, strawberry' }}</td>
              <td>{{ isZh ? '呋喃環+烷基' : 'Furan ring+alkyl' }}</td>
            </tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '藥效團分析：' : 'Pharmacophore Analysis:' }}</strong></p>
        <pre v-if="isZh"><code>玫瑰香受體OR識別關鍵：
[疏水區域] ───── 6-8 Å ───── [極性錨點 (OH/O/C=O)]
    ↑                              ↑
  苯環/碳鏈                      氫鍵受體
    |
  體積150-250 Ų
    |
  Log P 範圍：1.3-4.5（中等疏水）</code></pre>
        <pre v-else><code>Rose odor receptor OR recognition key:
[Hydrophobic region] ───── 6-8 Å ───── [Polar anchor (OH/O/C=O)]
    ↑                              ↑
  Benzene ring/carbon chain      H-bond acceptor
    |
  Volume 150-250 Ų
    |
  Log P range: 1.3-4.5 (moderate hydrophobicity)</code></pre>
        <p><strong>{{ isZh ? '結論：' : 'Conclusion: ' }}</strong>{{ isZh ? '嗅覺受體並非「鎖鑰」嚴格匹配，而是' : 'Olfactory receptors do not use strict "lock-and-key" matching, but rather ' }}<span class="highlight">{{ isZh ? '「毛刷-毛氈」式廣譜識別' : '"brush-felt" broad-spectrum recognition' }}</span>{{ isZh ? '——只要滿足空間藥效團+物化性質窗口，不同骨架也能觸發相同氣味。' : '—as long as the spatial pharmacophore + physicochemical property window is met, different scaffolds can trigger the same odor.' }}</p>

        <h3>{{ isZh ? '3.6.5 案例五：苯甲醛衍生物 - Hammett方程實戰' : '3.6.5 Case 5: Benzaldehyde Derivatives - Hammett Equation in Practice' }}</h3>
        <p>{{ isZh ? '用Hammett σ常數預測取代苯甲醛的氣味強度。' : 'Using the Hammett σ constant to predict odor intensity of substituted benzaldehydes.' }}</p>
        <table class="structure-table">
          <thead>
            <tr>
              <th>{{ isZh ? '化合物' : 'Compound' }}</th>
              <th>{{ isZh ? '取代基' : 'Substituent' }}</th>
              <th>Hammett σ</th>
              <th>HOMO (eV)</th>
              <th>{{ isZh ? '氣味強度' : 'Odor Intensity' }}</th>
              <th>{{ isZh ? '閾值 (ppb)' : 'Threshold (ppb)' }}</th>
              <th>{{ isZh ? '氣味描述' : 'Odor Description' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ isZh ? '對甲氧基苯甲醛' : 'p-Methoxybenzaldehyde' }}</td>
              <td>4-OCH₃</td>
              <td>-0.27</td>
              <td>-8.6</td>
              <td><strong>{{ isZh ? '極強' : 'Very strong' }}</strong></td>
              <td>15</td>
              <td>{{ isZh ? '甜茴香、山楂' : 'Sweet anise, hawthorn' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '對甲基苯甲醛' : 'p-Methylbenzaldehyde' }}</td>
              <td>4-CH₃</td>
              <td>-0.17</td>
              <td>-9.0</td>
              <td>{{ isZh ? '強' : 'Strong' }}</td>
              <td>50</td>
              <td>{{ isZh ? '櫻桃、杏仁' : 'Cherry, almond' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '苯甲醛' : 'Benzaldehyde' }}</td>
              <td>H</td>
              <td>0.00</td>
              <td>-9.2</td>
              <td>{{ isZh ? '中' : 'Medium' }}</td>
              <td>350</td>
              <td>{{ isZh ? '杏仁、櫻桃' : 'Almond, cherry' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '對氯苯甲醛' : 'p-Chlorobenzaldehyde' }}</td>
              <td>4-Cl</td>
              <td>+0.23</td>
              <td>-9.5</td>
              <td>{{ isZh ? '弱' : 'Weak' }}</td>
              <td>890</td>
              <td>{{ isZh ? '化學味' : 'Chemical odor' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '對硝基苯甲醛' : 'p-Nitrobenzaldehyde' }}</td>
              <td>4-NO₂</td>
              <td>+0.78</td>
              <td>-10.1</td>
              <td>{{ isZh ? '極弱' : 'Very weak' }}</td>
              <td>4500</td>
              <td>{{ isZh ? '苦、刺激' : 'Bitter, pungent' }}</td>
            </tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? 'Hammett SAR：' : 'Hammett SAR:' }}</strong></p>
        <pre v-if="isZh"><code>log(氣味強度) = -2.3σ + 1.5
R² = 0.91

解釋：
σ < 0（給電子）→ HOMO能量↑ → 親核性↑ → 與受體結合強
σ > 0（拉電子）→ HOMO能量↓ → 親核性↓ → 與受體結合弱

<span class="highlight">給電子基團使醛更「活躍」，提升氣味強度</span></code></pre>
        <pre v-else><code>log(Odor Intensity) = -2.3σ + 1.5
R² = 0.91

Explanation:
σ < 0 (electron-donating) → HOMO energy↑ → nucleophilicity↑ → stronger receptor binding
σ > 0 (electron-withdrawing) → HOMO energy↓ → nucleophilicity↓ → weaker receptor binding

<span class="highlight">Electron-donating groups make aldehydes more "active", enhancing odor intensity</span></code></pre>

        <h3>{{ isZh ? '3.6.6 案例六：順反異構的氣味鴻溝' : '3.6.6 Case 6: Cis/Trans Isomers - The Odor Divide' }}</h3>
        <table class="structure-table">
          <thead>
            <tr>
              <th>{{ isZh ? '化合物' : 'Compound' }}</th>
              <th>{{ isZh ? '順式 (Cis)' : 'Cis' }}</th>
              <th>{{ isZh ? '反式 (Trans)' : 'Trans' }}</th>
              <th>{{ isZh ? '差異倍數' : 'Fold Difference' }}</th>
              <th>{{ isZh ? '原因' : 'Reason' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ isZh ? '茉莉酮' : 'Jasmone' }}</td>
              <td>{{ isZh ? '濃郁茉莉香（閾值 0.007 ppb）' : 'Rich jasmine (threshold 0.007 ppb)' }}</td>
              <td>{{ isZh ? '木質茉莉（閾值 0.5 ppb）' : 'Woody jasmine (threshold 0.5 ppb)' }}</td>
              <td>{{ isZh ? '70倍' : '70×' }}</td>
              <td>{{ isZh ? '順式構象符合茉莉受體口袋彎曲形狀' : 'Cis conformation fits jasmine receptor pocket curvature' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '玫瑰醚' : 'Rose oxide' }}</td>
              <td>{{ isZh ? '弱玫瑰（閾值 50 ppb）' : 'Weak rose (threshold 50 ppb)' }}</td>
              <td><strong>{{ isZh ? '強烈玫瑰' : 'Intense rose' }}</strong>{{ isZh ? '（閾值 0.005 ppb）' : ' (threshold 0.005 ppb)' }}</td>
              <td>{{ isZh ? '10000倍！' : '10000×!' }}</td>
              <td>{{ isZh ? '反式延展構象與受體疏水溝槽完美匹配' : 'Trans extended conformation perfectly matches receptor hydrophobic groove' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '2-己烯醛' : '2-Hexenal' }}</td>
              <td>{{ isZh ? '青蘋果（閾值 17 ppb）' : 'Green apple (threshold 17 ppb)' }}</td>
              <td>{{ isZh ? '辛辣綠葉（閾值 17 ppb）' : 'Spicy green leaf (threshold 17 ppb)' }}</td>
              <td>{{ isZh ? '相近' : 'Similar' }}</td>
              <td>{{ isZh ? '氣味質量不同但強度相似' : 'Odor quality differs but intensity similar' }}</td>
            </tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '順反規律：' : 'Cis/Trans Rules: ' }}</strong>{{ isZh ? '沒有普遍規則！順式玫瑰醚弱、反式強；順式茉莉酮強、反式弱。' : 'No universal rule! Cis rose oxide is weak, trans strong; cis jasmone is strong, trans weak.' }}<span class="highlight">{{ isZh ? '必須針對具體受體進行分子對接預測' : 'Molecular docking prediction is required for each specific receptor' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h3>{{ isZh ? '3.6.7 混合效應與協同作用 - 1 + 1 ≠ 2' : '3.6.7 Mixing Effects & Synergy - 1 + 1 ≠ 2' }}</h3>
        <p>{{ isZh ? '多種香料混合時，氣味強度' : 'When multiple fragrances are mixed, odor intensity is ' }}<strong>{{ isZh ? '非線性疊加' : 'non-linearly additive' }}</strong>{{ isZh ? '，存在協同、拮抗、遮蔽效應。' : ', with synergy, antagonism, and masking effects.' }}</p>

        <h4>{{ isZh ? '🔹 協同增強 (Synergism)' : '🔹 Synergistic Enhancement' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ isZh ? '組合' : 'Combination' }}</th><th>{{ isZh ? 'A單獨' : 'A Alone' }}</th><th>{{ isZh ? 'B單獨' : 'B Alone' }}</th><th>{{ isZh ? 'A+B混合' : 'A+B Mixed' }}</th><th>{{ isZh ? '協同倍數' : 'Synergy Factor' }}</th><th>{{ isZh ? '機制' : 'Mechanism' }}</th></tr></thead>
          <tbody>
            <tr>
              <td>{{ isZh ? '香草醛+乙基香草醛' : 'Vanillin + Ethylvanillin' }}</td>
              <td>100</td>
              <td>80</td>
              <td>350</td>
              <td>1.9×</td>
              <td>{{ isZh ? '雙重占據受體不同亞位點' : 'Dual occupancy of different receptor sub-sites' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '檸檬烯+芳樟醇' : 'Limonene + Linalool' }}</td>
              <td>100</td>
              <td>70</td>
              <td>280</td>
              <td>1.6×</td>
              <td>{{ isZh ? '萜烯+萜醇協同活化OR' : 'Terpene + terpenol co-activate OR' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '吲哚+茉莉酮' : 'Indole + Jasmone' }}</td>
              <td>{{ isZh ? '5（稀釋）' : '5 (diluted)' }}</td>
              <td>90</td>
              <td>200</td>
              <td>2.1×</td>
              <td>{{ isZh ? '吲哚低濃度激活茉莉受體' : 'Indole at low conc. activates jasmine receptor' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '麝香+龍涎香醇' : 'Musk + Ambroxide' }}</td>
              <td>40</td>
              <td>60</td>
              <td>180</td>
              <td>1.8×</td>
              <td>{{ isZh ? '大分子協同、受體別構調節' : 'Large molecule synergy, allosteric modulation' }}</td>
            </tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '🔹 拮抗遮蔽 (Antagonism)' : '🔹 Antagonistic Masking' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ isZh ? '組合' : 'Combination' }}</th><th>{{ isZh ? 'A單獨' : 'A Alone' }}</th><th>{{ isZh ? 'B單獨' : 'B Alone' }}</th><th>{{ isZh ? 'A+B混合' : 'A+B Mixed' }}</th><th>{{ isZh ? '抑制效應' : 'Inhibition' }}</th><th>{{ isZh ? '機制' : 'Mechanism' }}</th></tr></thead>
          <tbody>
            <tr>
              <td>{{ isZh ? '薄荷醇+香草醛' : 'Menthol + Vanillin' }}</td>
              <td>100</td>
              <td>100</td>
              <td>120</td>
              <td>-40%</td>
              <td>{{ isZh ? '競爭性結合、受體飽和' : 'Competitive binding, receptor saturation' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '硫醇+醛類' : 'Thiols + Aldehydes' }}</td>
              <td>{{ isZh ? '極強臭' : 'Very strong stench' }}</td>
              <td>{{ isZh ? '果香' : 'Fruity' }}</td>
              <td>{{ isZh ? '硫臭主導' : 'Sulfur odor dominant' }}</td>
              <td>{{ isZh ? '醛香被遮蔽' : 'Aldehyde masked' }}</td>
              <td>{{ isZh ? '硫醇閾值超低、受體優先結合' : 'Ultra-low thiol threshold, preferential binding' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '乙酸+酯類' : 'Acetic acid + Esters' }}</td>
              <td>{{ isZh ? '刺激酸' : 'Irritating acid' }}</td>
              <td>{{ isZh ? '果香' : 'Fruity' }}</td>
              <td>{{ isZh ? '酸味主導' : 'Acid dominant' }}</td>
              <td>{{ isZh ? '酯香消失' : 'Ester aroma gone' }}</td>
              <td>{{ isZh ? '三叉神經刺激壓過嗅覺' : 'Trigeminal irritation overrides olfaction' }}</td>
            </tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '🔹 分子間氫鍵改變氣味' : '🔹 Intermolecular H-bonds Alter Odor' }}</h4>
        <pre v-if="isZh"><code>香草醛+丁香酚混合物：
香草醛-OH ··· O-丁香酚（分子間氫鍵）
→ 降低揮發性、改變電子分佈
→ 氣味從「分立的香草+丁香」變成「融合的甜辣香」

測量證據：
混合物沸點升高 12°C
紅外光譜 O-H 伸縮紅移 85 cm⁻¹
氣味閾值提高 3倍（揮發性降低）</code></pre>
        <pre v-else><code>Vanillin + Eugenol mixture:
Vanillin-OH ··· O-Eugenol (intermolecular H-bond)
→ Reduced volatility, altered electron distribution
→ Odor changes from "separate vanilla + clove" to "fused sweet-spicy"

Measured evidence:
Mixture boiling point rises 12°C
IR spectrum O-H stretch red-shifted 85 cm⁻¹
Odor threshold increases 3× (reduced volatility)</code></pre>

        <h3>{{ isZh ? '3.6.8 失敗案例分析 - SAR的陷阱' : '3.6.8 Failure Case Analysis - SAR Pitfalls' }}</h3>
        <p>{{ isZh ? '並非所有結構修飾都成功——失敗案例揭示SAR的複雜性。' : 'Not all structural modifications succeed—failure cases reveal the complexity of SAR.' }}</p>

        <h4>{{ isZh ? '❌ 案例一：苯環縮環失敗' : '❌ Case 1: Ring Contraction Failure' }}</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>結構</th><th>預期</th><th>實際</th><th>失敗原因</th></tr></thead>
          <tbody>
            <tr>
              <td>苯甲醛</td>
              <td>Ph-CHO</td>
              <td>-</td>
              <td>杏仁香（強）</td>
              <td>基準</td>
            </tr>
            <tr>
              <td>環戊二烯甲醛</td>
              <td>5元環-CHO</td>
              <td>類似杏仁香</td>
              <td><strong>刺激、化學味</strong></td>
              <td>5元環非芳香、電子分佈完全不同</td>
            </tr>
            <tr>
              <td>呋喃甲醛</td>
              <td>呋喃-CHO</td>
              <td>保持芳香性</td>
              <td>麵包、焦糖（質量變）</td>
              <td>O雜原子改變親核性</td>
            </tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '❌ 案例二：延長麝香失敗' : '❌ Case 2: Macrocyclic Musk Extension Failure' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ isZh ? '環大小' : 'Ring Size' }}</th><th>{{ isZh ? '氣味強度' : 'Odor Intensity' }}</th><th>{{ isZh ? '氣味質量' : 'Odor Quality' }}</th><th>{{ isZh ? '失敗原因' : 'Failure Reason' }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '15元環' : '15-ring' }}</td><td>{{ isZh ? '100%（基準）' : '100% (baseline)' }}</td><td>{{ isZh ? '純麝香' : 'Pure musk' }}</td><td>-</td></tr>
            <tr><td>{{ isZh ? '16元環' : '16-ring' }}</td><td>40%</td><td>{{ isZh ? '麝香、細臻' : 'Musk, delicate' }}</td><td>{{ isZh ? '略大但可接受' : 'Slightly large but acceptable' }}</td></tr>
            <tr><td>{{ isZh ? '17元環' : '17-ring' }}</td><td>8%</td><td>{{ isZh ? '微弱麝香' : 'Faint musk' }}</td><td><strong>{{ isZh ? '超出受體口袋尺寸' : 'Exceeds receptor pocket size' }}</strong></td></tr>
            <tr><td>{{ isZh ? '18元環' : '18-ring' }}</td><td><1%</td><td>{{ isZh ? '蠟質、幾乎無味' : 'Waxy, nearly odorless' }}</td><td><strong>{{ isZh ? '完全失配' : 'Complete mismatch' }}</strong></td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '教訓：' : 'Lesson: ' }}</strong><span class="highlight">{{ isZh ? '受體口袋尺寸嚴格限制' : 'Receptor pocket size is strictly constrained' }}</span>{{ isZh ? '，超過1-2 Å即失效。15元環直徑≈10.5 Å，18元環≈12.8 Å，差異僅2.3 Å但氣味消失。' : ', exceeding by 1–2 Å causes failure. 15-ring diameter ≈10.5 Å, 18-ring ≈12.8 Å—only 2.3 Å difference but odor vanishes.' }}</p>

        <h4>{{ isZh ? '❌ 案例三：雙官能團過度極性' : '❌ Case 3: Excessive Polarity from Dual Functional Groups' }}</h4>
        <pre v-if="isZh"><code>設計思路：香草醛很香 → 加更多-OH應該更香？

香草醛：4-OH-3-OCH₃-Ph-CHO → 閾值 20 ppb
  ↓ 加2-OH
2,4-二美基-3-甲氧基苯甲醛 → 閾值 >5000 ppb（250倍惡化！）

失敗原因：
  ✗ 雙OH氫鍵網絡 → 極性過高（Log P從1.9降至0.3）
  ✗ 揮發性暴跌 → 無法到達嗅覺上皮
  ✗ 受體疏水袋排斥極性分子
  
<span class="highlight">SAR陷阱：好東西加倍 ≠ 更好</span></code></pre>
        <pre v-else><code>Design logic: Vanillin smells great → more -OH should smell better?

Vanillin: 4-OH-3-OCH₃-Ph-CHO → threshold 20 ppb
  ↓ add 2-OH
2,4-Dihydroxy-3-methoxybenzaldehyde → threshold >5000 ppb (250× worse!)

Failure reasons:
  ✗ Dual OH H-bond network → excessive polarity (Log P drops from 1.9 to 0.3)
  ✗ Volatility plummets → cannot reach olfactory epithelium
  ✗ Receptor hydrophobic pocket repels polar molecules
  
<span class="highlight">SAR trap: doubling a good thing ≠ better</span></code></pre>

        <h4>{{ isZh ? '❌ 案例四：立體障礙導致活性喪失' : '❌ Case 4: Steric Hindrance Causing Activity Loss' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ isZh ? '化合物' : 'Compound' }}</th><th>{{ isZh ? '取代模式' : 'Substitution' }}</th><th>{{ isZh ? '氣味強度' : 'Odor Intensity' }}</th><th>{{ isZh ? '失敗原因' : 'Failure Reason' }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '苯乙醇' : 'Phenethyl alcohol' }}</td><td>Ph-CH₂CH₂OH</td><td>{{ isZh ? '100%（玫瑰香）' : '100% (rose)' }}</td><td>-</td></tr>
            <tr><td>{{ isZh ? 'α,α-二甲基苯乙醇' : 'α,α-Dimethylphenethyl alcohol' }}</td><td>Ph-C(CH₃)₂CH₂OH</td><td>12%</td><td>{{ isZh ? 'α位雙甲基立體擁擠' : 'α-position dimethyl steric crowding' }}</td></tr>
            <tr><td>{{ isZh ? 'α-苯基苯乙醇' : 'α-Phenylphenethyl alcohol' }}</td><td>(Ph)₂CHCH₂OH</td><td><5%</td><td><strong>{{ isZh ? '極大立體障礙' : 'Extreme steric hindrance' }}</strong></td></tr>
          </tbody>
        </table>

        <h3>{{ isZh ? '3.6.9 計算預測工具實戰' : '3.6.9 Computational Prediction Tools in Practice' }}</h3>
        <p>{{ isZh ? '現代SAR不再純靠實驗——電腦輔助預測加速研發。' : 'Modern SAR no longer relies solely on experiments—computer-aided prediction accelerates R&D.' }}</p>

        <h4>{{ isZh ? '🔸 工具對比' : '🔸 Tool Comparison' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ isZh ? '軟體/平台' : 'Software/Platform' }}</th><th>{{ isZh ? '方法' : 'Method' }}</th><th>{{ isZh ? '預測準確度' : 'Prediction Accuracy' }}</th><th>{{ isZh ? '速度' : 'Speed' }}</th><th>{{ isZh ? '成本' : 'Cost' }}</th><th>{{ isZh ? '適用場景' : 'Use Case' }}</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Pyrfume AI</strong></td>
              <td>{{ isZh ? '深度學習（GNN）' : 'Deep learning (GNN)' }}</td>
              <td>~72%</td>
              <td>{{ isZh ? '秒級' : 'Seconds' }}</td>
              <td>{{ isZh ? '免費' : 'Free' }}</td>
              <td>{{ isZh ? '快速篩選、氣味描述預測' : 'Rapid screening, odor descriptor prediction' }}</td>
            </tr>
            <tr>
              <td><strong>Odor Descriptor Database</strong></td>
              <td>{{ isZh ? '機器學習（RF）' : 'Machine learning (RF)' }}</td>
              <td>~65%</td>
              <td>{{ isZh ? '秒級' : 'Seconds' }}</td>
              <td>{{ isZh ? '免費' : 'Free' }}</td>
              <td>{{ isZh ? '已知分子氣味查詢' : 'Known molecule odor query' }}</td>
            </tr>
            <tr>
              <td><strong>AutoDock Vina</strong></td>
              <td>{{ isZh ? '分子對接' : 'Molecular docking' }}</td>
              <td>{{ isZh ? '~80%（需知OR）' : '~80% (requires OR)' }}</td>
              <td>{{ isZh ? '分鐘級' : 'Minutes' }}</td>
              <td>{{ isZh ? '免費' : 'Free' }}</td>
              <td>{{ isZh ? '特定受體親和力' : 'Specific receptor affinity' }}</td>
            </tr>
            <tr>
              <td><strong>Schrödinger Glide</strong></td>
              <td>{{ isZh ? '高精度對接' : 'High-precision docking' }}</td>
              <td>~85%</td>
              <td>{{ isZh ? '小時級' : 'Hours' }}</td>
              <td>{{ isZh ? '昂貴' : 'Expensive' }}</td>
              <td>{{ isZh ? '精確SAR優化' : 'Precise SAR optimization' }}</td>
            </tr>
            <tr>
              <td><strong>QSAR Toolbox</strong></td>
              <td>{{ isZh ? '經典QSAR' : 'Classical QSAR' }}</td>
              <td>~60%</td>
              <td>{{ isZh ? '秒級' : 'Seconds' }}</td>
              <td>{{ isZh ? '免費' : 'Free' }}</td>
              <td>{{ isZh ? 'Log P、MW等物化預測' : 'Log P, MW and physicochemical prediction' }}</td>
            </tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '🔸 實戰流程：設計新玫瑰香分子' : '🔸 Practical Workflow: Designing a New Rose Odorant' }}</h4>
        <pre v-if="isZh"><code><strong>Step 1: 虛擬篩選</strong>
起始：苯乙醇（玫瑰香、閾值1000 ppb）
目標：降低閾值、增強持久性

Pyrfume預測：
  - 加4-OCH₃ → 氣味保持「玫瑰」，預測閾值↓
  - 加3-CH₃ → 氣味轉「木質」，放棄
  - 改CH₂CH₂為CH=CH → 氣味轉「茴香」，放棄
  
→ 選擇：4-甲氧基苯乙醇

<strong>Step 2: 分子對接</strong>
使用AutoDock對接至OR受體同源模型：
  4-OCH₃-Ph-CH₂CH₂OH:
    ΔG_bind = -8.7 kcal/mol（vs -7.2原型）
    關鍵氫鍵：OH ··· Tyr252
    疏水接觸：OCH₃ ↔ Val98, Leu102
    
→ 預測閾值降低5-10倍

<strong>Step 3: 物化性質驗證</strong>
RDKit計算：
  MW: 152 → ✓（100-250窗口）
  Log P: 1.92 → ✓（2-4窗口）
  TPSA: 29.5 Ų → ✓（<60良好穿透）
  VP（估算）: 8 Pa → ✓（適中揮發）
  
<strong>Step 4: 合成驗證</strong>
實際合成測試：
  氣味：玫瑰、蜂蜜、甜（✓預測正確）
  閾值：180 ppb（✓比原型低5.5倍）
  持久性：+40%（✓OCH₃降低揮發）

<span class="highlight">計算預測成功率：75%</span>（遠高於隨機篩選的5%）</code></pre>
        <pre v-else><code><strong>Step 1: Virtual Screening</strong>
Start: Phenethyl alcohol (rose, threshold 1000 ppb)
Goal: Lower threshold, enhance longevity

Pyrfume prediction:
  - Add 4-OCH₃ → odor stays "rose", predicted threshold↓
  - Add 3-CH₃ → odor shifts to "woody", abandon
  - Change CH₂CH₂ to CH=CH → odor shifts to "anise", abandon
  
→ Select: 4-methoxyphenethyl alcohol

<strong>Step 2: Molecular Docking</strong>
Dock to OR receptor homology model via AutoDock:
  4-OCH₃-Ph-CH₂CH₂OH:
    ΔG_bind = -8.7 kcal/mol (vs -7.2 parent)
    Key H-bond: OH ··· Tyr252
    Hydrophobic contacts: OCH₃ ↔ Val98, Leu102
    
→ Predicted threshold reduction 5–10×

<strong>Step 3: Physicochemical Validation</strong>
RDKit calculations:
  MW: 152 → ✓ (100–250 window)
  Log P: 1.92 → ✓ (2–4 window)
  TPSA: 29.5 Ų → ✓ (<60 good penetration)
  VP (est.): 8 Pa → ✓ (moderate volatility)
  
<strong>Step 4: Synthesis Verification</strong>
Actual synthesis test:
  Odor: rose, honey, sweet (✓ prediction correct)
  Threshold: 180 ppb (✓ 5.5× lower than parent)
  Longevity: +40% (✓ OCH₃ reduces volatility)

<span class="highlight">Computational prediction success rate: 75%</span> (far above 5% for random screening)</code></pre>

        <h3>{{ isZh ? '3.6.10 受體適應與嗅覺疲勞 - 時間維度的SAR' : '3.6.10 Receptor Adaptation & Olfactory Fatigue - The Time Dimension of SAR' }}</h3>
        <p>{{ isZh ? '同一分子的氣味強度隨' : 'The odor intensity of the same molecule changes dynamically with ' }}<strong>{{ isZh ? '暴露時間' : 'exposure time' }}</strong>{{ isZh ? '動態變化。' : '.' }}</p>

        <h4>{{ isZh ? '🔹 受體脫敏化動力學' : '🔹 Receptor Desensitization Kinetics' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ isZh ? '化合物' : 'Compound' }}</th><th>{{ isZh ? '初始強度' : 'Initial Intensity' }}</th><th>{{ isZh ? '30秒後' : 'After 30s' }}</th><th>{{ isZh ? '5分鐘後' : 'After 5 min' }}</th><th>{{ isZh ? '恢復時間' : 'Recovery Time' }}</th><th>{{ isZh ? '機制' : 'Mechanism' }}</th></tr></thead>
          <tbody>
            <tr>
              <td>{{ isZh ? '己醛（C₆）' : 'Hexanal (C₆)' }}</td>
              <td>100%</td>
              <td>35%</td>
              <td>8%</td>
              <td>{{ isZh ? '15分鐘' : '15 min' }}</td>
              <td>{{ isZh ? '快速脫敏（受體磷酸化）' : 'Rapid desensitization (receptor phosphorylation)' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '香葉醇' : 'Geraniol' }}</td>
              <td>100%</td>
              <td>60%</td>
              <td>30%</td>
              <td>{{ isZh ? '45分鐘' : '45 min' }}</td>
              <td>{{ isZh ? '中速脫敏' : 'Medium-rate desensitization' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '麝香酮' : 'Muscone' }}</td>
              <td>100%</td>
              <td>85%</td>
              <td>70%</td><td>{{ isZh ? '>2小時' : '>2 hours' }}</td>
              <td><strong>{{ isZh ? '抗脫敏' : 'Desensitization-resistant' }}</strong>{{ isZh ? '（慢解離）' : ' (slow dissociation)' }}</td>
            </tr>
            <tr>
              <td>{{ isZh ? '薄荷醇' : 'Menthol' }}</td>
              <td>100%</td>
              <td>20%</td>
              <td>5%</td>
              <td>{{ isZh ? '30分鐘' : '30 min' }}</td>
              <td>{{ isZh ? 'TRPM8快速失活' : 'TRPM8 rapid inactivation' }}</td>
            </tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '🔹 結構與脫敏速率的關係' : '🔹 Structure vs. Desensitization Rate' }}</h4>
        <pre v-if="isZh"><code>快速脫敏（<1分鐘）：
  - 小分子醛類（MW<150）
  - 高揮發性（VP>50 Pa）
  - 弱結合（Kd > 10⁻⁶ M）
  
中速脫敏（5-15分鐘）：
  - 中等分子量（MW 150-250）
  - 中等親和力（Kd 10⁻⁷ ~ 10⁻⁸ M）
  
抗脫敏（>30分鐘）：
  - 大分子（MW>250）
  - 強結合、慢解離（Kd < 10⁻⁸ M）
  - 脂溶性高（Log P>5）
  
<span class="highlight">調香啟示：頂調用快脫敏、基調用抗脫敏</span></code></pre>
        <pre v-else><code>Rapid desensitization (<1 min):
  - Small aldehydes (MW<150)
  - High volatility (VP>50 Pa)
  - Weak binding (Kd > 10⁻⁶ M)
  
Medium desensitization (5–15 min):
  - Medium MW (150–250)
  - Moderate affinity (Kd 10⁻⁷ ~ 10⁻⁸ M)
  
Desensitization-resistant (>30 min):
  - Large molecules (MW>250)
  - Strong binding, slow dissociation (Kd < 10⁻⁸ M)
  - High lipophilicity (Log P>5)
  
<span class="highlight">Perfumery insight: use fast-desensitizing for top notes, resistant for base notes</span></code></pre>

        <h4>{{ isZh ? '🔹 交叉適應 - 相似結構的干擾' : '🔹 Cross-Adaptation - Interference of Similar Structures' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ isZh ? '先暴露A' : 'Pre-exposed A' }}</th><th>{{ isZh ? '後測試B' : 'Then test B' }}</th><th>{{ isZh ? 'B的感知強度' : 'Perceived intensity of B' }}</th><th>{{ isZh ? '交叉適應%' : 'Cross-adapt. %' }}</th><th>{{ isZh ? '結構相似度' : 'Structural Similarity' }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '檸檬烯' : 'Limonene' }}</td><td>{{ isZh ? '檸檬烯' : 'Limonene' }}</td><td>{{ isZh ? '10%（自身適應）' : '10% (self-adaptation)' }}</td><td>90%</td><td>100%</td></tr>
            <tr><td>{{ isZh ? '檸檬烯' : 'Limonene' }}</td><td>{{ isZh ? 'α-蓎烯' : 'α-Pinene' }}</td><td>45%</td><td>55%</td><td>{{ isZh ? '高（同為萜烯）' : 'High (both terpenes)' }}</td></tr>
            <tr><td>{{ isZh ? '檸檬烯' : 'Limonene' }}</td><td>{{ isZh ? '香葉醇' : 'Geraniol' }}</td><td>75%</td><td>25%</td><td>{{ isZh ? '中（萜醇vs萜烯）' : 'Medium (terpenol vs terpene)' }}</td></tr>
            <tr><td>{{ isZh ? '檸檬烯' : 'Limonene' }}</td><td>{{ isZh ? '香草醛' : 'Vanillin' }}</td><td>98%</td><td>2%</td><td>{{ isZh ? '極低' : 'Very low' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? 'SAR應用：' : 'SAR Application: ' }}</strong>{{ isZh ? '設計香水時，' : 'When designing perfumes, ' }}<span class="highlight">{{ isZh ? '相似結構分子避免同時使用' : 'avoid using structurally similar molecules together' }}</span>{{ isZh ? '，否則互相干擾、降低辨識度。' : ', otherwise they interfere with each other and reduce distinctiveness.' }}</p>

        <h2>{{ isZh ? '3.6節總結' : 'Section 3.6 Summary' }}</h2>
        <div class="summary-box">
          <p><strong>{{ isZh ? 'SAR不是簡單規則，而是複雜的多維度優化問題：' : 'SAR is not a simple rule but a complex multi-dimensional optimization problem:' }}</strong></p>
          <p>1. <strong>{{ isZh ? '取代基位置 > 取代基類型' : 'Substituent position > substituent type' }}</strong>{{ isZh ? '：香豆素7位取代最優' : ': Coumarin 7-position substitution is optimal' }}</p>
          <p>2. <strong>{{ isZh ? 'Log P窗口理論' : 'Log P Window Theory' }}</strong>{{ isZh ? '：大多數香料分子最佳範圍1.5-4.5' : ': Most fragrance molecules have optimal range 1.5–4.5' }}</p>
          <p>3. <strong>{{ isZh ? '立體化學絕對關鍵' : 'Stereochemistry is absolutely critical' }}</strong>{{ isZh ? '：薄荷醇8種異構體氣味差100倍' : ': Menthol’s 8 stereoisomers differ 100-fold in odor' }}</p>
          <p>4. <strong>{{ isZh ? '多條路徑達同一終點' : 'Multiple pathways to the same endpoint' }}</strong>{{ isZh ? '：玫瑰香可由5類結構產生' : ': Rose scent can arise from 5 structural classes' }}</p>
          <p>5. <strong>{{ isZh ? '電子效應量化' : 'Electronic effects quantified' }}</strong>{{ isZh ? '：Hammett方程可預測氣味強度' : ': Hammett equation can predict odor intensity' }}</p>
          <p>6. <strong>{{ isZh ? '順反異構無通則' : 'No universal cis/trans rule' }}</strong>{{ isZh ? '：需個案分析受體匹配' : ': Case-by-case receptor matching analysis required' }}</p>
          <p>7. <strong>{{ isZh ? '混合非線性' : 'Mixing is non-linear' }}</strong>{{ isZh ? '：協同增強可達2×、拮抗可完全遮蔽' : ': Synergy can reach 2×, antagonism can completely mask' }}</p>
          <p>8. <strong>{{ isZh ? '失敗案例寶貴' : 'Failure cases are invaluable' }}</strong>{{ isZh ? '：過度極性、立體障礙、超出受體尺寸都會失敗' : ': Excessive polarity, steric hindrance, exceeding receptor size all cause failure' }}</p>
          <p>9. <strong>{{ isZh ? '計算預測加速' : 'Computational prediction accelerates' }}</strong>{{ isZh ? '：AI+對接可遠75%成功率' : ': AI + docking can achieve 75% success rate' }}</p>
          <p>10. <strong>{{ isZh ? '時間維度' : 'Time dimension' }}</strong>{{ isZh ? '：受體適應導致氣味隨時間衰減、結構影響脫敏速率' : ': Receptor adaptation causes odor decay over time; structure affects desensitization rate' }}</p>
        </div>
      </section>

      <section v-show="activeSection === 'sec-3-7'" class="chapter-section">
        <h2>💡 {{ t('ch3.chapterSummary') }}</h2>
        <p>1. ✅ <strong>{{ isZh ? 'Topliss 樹' : 'Topliss Tree' }}</strong>{{ isZh ? '：系統化結構修飾' : ': Systematic structural modification' }}</p>
        <p>2. ✅ <strong>{{ isZh ? 'Hansch 分析' : 'Hansch Analysis' }}</strong>{{ isZh ? '：定量疏水性-活性關係' : ': Quantitative lipophilicity–activity relationship' }}</p>
        <p>3. ✅ <strong>3D-QSAR</strong>{{ isZh ? '：三維空間結構-活性' : ': 3D spatial structure–activity' }}</p>
        <p>4. ✅ <strong>{{ isZh ? '藥效團' : 'Pharmacophore' }}</strong>{{ isZh ? '：必要空間特徵提取' : ': Essential spatial feature extraction' }}</p>
        <p>5. ✅ <strong>{{ isZh ? '經典案例' : 'Classic Cases' }}</strong>{{ isZh ? '：香豆素、麝香、薄荷醇、玫瑰香、苯甲醛、順反異構的深度SAR解析' : ': In-depth SAR analysis of coumarin, musk, menthol, rose, benzaldehyde, and cis/trans isomers' }}</p>
        <p>6. ✅ <strong>{{ isZh ? '混合效應' : 'Mixing Effects' }}</strong>{{ isZh ? '：協同、拮抗、分子間作用的非線性行為' : ': Non-linear behavior of synergy, antagonism, and intermolecular interactions' }}</p>
        <p>7. ✅ <strong>{{ isZh ? '失敗與成功' : 'Failures & Successes' }}</strong>{{ isZh ? '：SAR陷阱與計算預測工具的實戰應用' : ': SAR pitfalls and practical applications of computational prediction tools' }}</p>
        <p>8. ✅ <strong>{{ isZh ? '動態SAR' : 'Dynamic SAR' }}</strong>{{ isZh ? '：受體適應、嗅覺疲勞的時間依賴性' : ': Time dependence of receptor adaptation and olfactory fatigue' }}</p>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterLayout from '../components/ChapterLayout.vue'
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'Chapter3View',
  components: { ChapterLayout },
  setup() {
    const { isZh, isEn, getLabel, t } = useLanguage()
    const hanschChart = ref(null)
    let chart = null
    const sections = computed(() => [
      { id: 'sec-3-1', label: '3.1' },
      { id: 'sec-3-2', label: '3.2' },
      { id: 'sec-3-3', label: '3.3' },
      { id: 'sec-3-4', label: '3.4' },
      { id: 'sec-3-5', label: '3.5' },
      { id: 'sec-3-6', label: '3.6' },
      { id: 'sec-3-7', label: isZh.value ? '總結' : 'Summary' }
    ])
    const activeSection = ref('sec-3-1')
    onMounted(() => {
      if (!hanschChart.value) return
      chart = new Chart(hanschChart.value, {
        type: 'scatter',
        data: {
          datasets: [
            { label: isZh.value ? '實際活性' : 'Actual Activity', data: [{x:2.5,y:1.8},{x:3.0,y:1.95},{x:3.5,y:2.1},{x:4.0,y:2.05},{x:4.5,y:1.9},{x:5.0,y:1.7}], backgroundColor: '#f472b6', borderColor: '#f472b6', pointRadius: 8, pointHoverRadius: 12 },
            { label: isZh.value ? '預測曲線' : 'Prediction Curve', data: [{x:2.0,y:1.6},{x:2.5,y:1.82},{x:3.0,y:1.98},{x:3.5,y:2.08},{x:4.0,y:2.1},{x:4.5,y:2.0},{x:5.0,y:1.78},{x:5.5,y:1.5}], type: 'line', borderColor: '#a78bfa', backgroundColor: 'rgba(167,139,250,0.1)', borderWidth: 3, tension: 0.4, fill: true, pointRadius: 0 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: isZh.value ? 'Hansch分析：Log P vs 氣味強度' : 'Hansch Analysis: Log P vs Odor Intensity', color: '#d4af37', font: { size: 18 } } },
          scales: {
            y: { title: { display: true, text: isZh.value ? 'log(活性)' : 'log(Activity)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } },
            x: { title: { display: true, text: isZh.value ? 'Log P (疏水性)' : 'Log P (Lipophilicity)', color: '#cbd5e1' }, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }
          }
        }
      })
    })
    watch(activeSection, async () => {
      await nextTick()
      if (chart) chart.resize()
    })
    watch(isZh, () => {
      if (!chart) return
      chart.data.datasets[0].label = isZh.value ? '實際活性' : 'Actual Activity'
      chart.data.datasets[1].label = isZh.value ? '預測曲線' : 'Prediction Curve'
      chart.options.plugins.title.text = isZh.value ? 'Hansch分析：Log P vs 氣味強度' : 'Hansch Analysis: Log P vs Odor Intensity'
      chart.options.scales.y.title.text = isZh.value ? 'log(活性)' : 'log(Activity)'
      chart.options.scales.x.title.text = isZh.value ? 'Log P (疏水性)' : 'Log P (Lipophilicity)'
      chart.update()
    })
    onUnmounted(() => { if (chart) chart.destroy() })
    return { hanschChart, sections, activeSection, isZh, isEn, getLabel, t }
  }
}
</script>
