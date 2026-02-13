<template>
  <ChapterLayout
    :title="t('ch1.title')"
    :prev="null"
    :next="{ to: '/chapter/2', label: t('ch1.next') }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-1-1'" class="chapter-section">
        <h2 id="sec-1-1">1.1 {{ t('ch1.sec1_1') }}</h2>
        <h3>1.1.1 {{ t('ch1.sec1_1_1') }}</h3>
        <p>{{ isZh ? '人類嗅覺受體 (Olfactory Receptors, ORs) 屬於' : 'Human Olfactory Receptors (ORs) belong to the' }} <strong>{{ isZh ? 'G蛋白偶聯受體 (GPCR)' : 'G-Protein Coupled Receptor (GPCR)' }}</strong> {{ isZh ? '超家族。' : 'superfamily.' }}</p>
        <strong>{{ t('ch1.structuralFeatures') }}</strong>
        <ul>
          <li>{{ t('ch1.gpcr_tm7') }}</li>
          <li>{{ t('ch1.gpcr_extracellular') }}</li>
          <li>{{ t('ch1.gpcr_intracellular') }}</li>
        </ul>
        <strong>{{ t('ch1.keyData') }}</strong>
        <pre><code>{{ t('ch1.humanORGenes') }}
{{ t('ch1.mouseORGenes') }}
{{ t('ch1.bindingPocketVolume') }}
{{ t('ch1.affinityConstant') }}</code></pre>

        <h3>1.1.2 {{ t('ch1.sec1_1_2') }}</h3>
        <p>{{ t('ch1.docking_intro') }}</p>
        <pre><code>1. {{ t('ch1.docking_step1') }}
2. {{ t('ch1.docking_step2') }}
3. {{ t('ch1.docking_step3') }}
4. {{ t('ch1.docking_step4') }}
   - {{ t('ch1.docking_step4a') }}
   - {{ t('ch1.docking_step4b') }}
   - {{ t('ch1.docking_step4c') }}
5. {{ t('ch1.docking_step5') }}
6. {{ t('ch1.docking_step6') }}

{{ t('ch1.docking_energy') }}
{{ t('ch1.docking_typical') }}</code></pre>

        <h3>1.1.3 {{ t('ch1.sec1_1_3') }}</h3>
        <MoleculeGallery :title="t('ch1.carvoneComparison')" :molecules="carvonePair" />
        <pre v-if="isZh"><code>(R)-Carvone: 葛縷子香（麵包香料）
(S)-Carvone: 薄荷香
分子式完全相同：C₁₀H₁₄O
差異僅在：C(6)的立體構型

對接分析：
(R)-Carvone: -8.2 kcal/mol → 強親和力
(S)-Carvone: -5.1 kcal/mol → 弱親和力</code></pre>
        <pre v-else><code>(R)-Carvone: Caraway (bread spice aroma)
(S)-Carvone: Spearmint aroma
Identical molecular formula: C₁₀H₁₄O
Difference only in: C(6) stereoconfiguration

Docking analysis:
(R)-Carvone: -8.2 kcal/mol → Strong affinity
(S)-Carvone: -5.1 kcal/mol → Weak affinity</code></pre>
        <MoleculeGallery :title="t('ch1.limoneneComparison')" :molecules="limonenePair" />
        <pre v-if="isZh"><code>(R)-Limonene: 柑橘香
(S)-Limonene: 松脂香
→ 同一分子式，手性決定氣味方向</code></pre>
        <pre v-else><code>(R)-Limonene: Citrus aroma
(S)-Limonene: Pine resin aroma
→ Same molecular formula, chirality determines odor direction</code></pre>
        <MoleculeGallery :title="t('ch1.mentholComparison')" :molecules="mentholPair" />
        <pre v-if="isZh"><code>L-Menthol: 強烈清涼感，天然薄荷主成分
D-Menthol: 清涼感弱，帶苦味
→ 手性中心影響與冷覺受體 TRPM8 的結合</code></pre>
        <pre v-else><code>L-Menthol: Strong cooling sensation, main component of natural peppermint
D-Menthol: Weak cooling, bitter taste
→ Chiral center affects binding to cold receptor TRPM8</code></pre>
      </section>

      <section v-show="activeSection === 'sec-1-2'" class="chapter-section">
        <h2 id="sec-1-2">1.2 {{ t('ch1.sec1_2') }}</h2>
        <h3>1.2.1 {{ t('ch1.sec1_2_1') }}</h3>
        <MoleculeGallery :title="t('ch1.ethanolVsThiol')" :molecules="thiolPair" />
        <pre v-if="isZh"><code>C-O 鍵：鍵長 143 pm, 鍵能 358 kJ/mol, 極性高
C-S 鍵：鍵長 182 pm, 鍵能 272 kJ/mol, 極化性高

{{ t('ch1.thresholdDifference') }}
乙醇 (C₂H₅OH): ~1 ppm
乙硫醇 (C₂H₅SH): ~0.00047 ppm (低2000倍！)</code></pre>
        <pre v-else><code>C-O bond: length 143 pm, energy 358 kJ/mol, high polarity
C-S bond: length 182 pm, energy 272 kJ/mol, high polarizability

{{ t('ch1.thresholdDifference') }}
Ethanol (C₂H₅OH): ~1 ppm
Ethanethiol (C₂H₅SH): ~0.00047 ppm (2000x lower!)</code></pre>

        <h3>1.2.2 {{ t('ch1.sec1_2_2') }}</h3>
        <p>{{ isZh ? '氣味強度與分子的電子激發能有關：' : 'Odor intensity is related to molecular electronic excitation energy:' }}</p>
        <pre v-if="isZh"><code>較小的 HOMO-LUMO gap → 更容易電子轉移 → 更強受體活化
弱氣味：ΔE > 6 eV
強氣味：ΔE = 3-5 eV</code></pre>
        <pre v-else><code>Smaller HOMO-LUMO gap → Easier electron transfer → Stronger receptor activation
Weak odor: ΔE > 6 eV
Strong odor: ΔE = 3-5 eV</code></pre>
        <div class="chart-container"><canvas ref="homoLumoChart" style="max-height: 320px;"></canvas></div>
        <table>
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.homo') }}</th><th>{{ t('ch1.lumo') }}</th><th>{{ t('ch1.gap') }}</th><th>{{ t('ch1.odorIntensity') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '甲烷' : 'Methane' }}</td><td>-12.8</td><td>+3.2</td><td>16.0</td><td>{{ t('ch1.weak') }}</td></tr>
            <tr><td>{{ isZh ? '苯' : 'Benzene' }}</td><td>-9.3</td><td>-0.8</td><td>8.5</td><td>{{ t('ch1.mild') }}</td></tr>
            <tr><td>{{ isZh ? '檸檬醛' : 'Citral' }}</td><td>-6.2</td><td>-1.1</td><td>5.1</td><td>{{ t('ch1.strong') }}</td></tr>
            <tr><td>{{ isZh ? '硫醇' : 'Thiol' }}</td><td>-5.8</td><td>-0.4</td><td>5.4</td><td>{{ t('ch1.veryStrong') }}</td></tr>
          </tbody>
        </table>

        <h3>1.2.3 {{ t('ch1.sec1_2_3') }}</h3>
        <MoleculeGallery :title="t('ch1.saturatedVsUnsaturated')" :molecules="aldehydePair" />
        <pre v-if="isZh"><code>正己醛：無共軛，青草，閾值 5 ppb
反-2-己烯醛：共軛(C=C-C=O)，辛辣，閾值 17 ppb
→ 共軛增加剛性 → 受體匹配更嚴格</code></pre>
        <pre v-else><code>Hexanal: No conjugation, grassy, threshold 5 ppb
trans-2-Hexenal: Conjugated (C=C-C=O), pungent, threshold 17 ppb
→ Conjugation increases rigidity → Stricter receptor matching</code></pre>
      </section>

      <section v-show="activeSection === 'sec-1-3'" class="chapter-section">
        <h2 id="sec-1-3">1.3 {{ t('ch1.sec1_3') }}</h2>
        <h3>1.3.1 {{ t('ch1.sec1_3_1') }}</h3>
        <MoleculeGallery :title="t('ch1.muskFamily')" :molecules="muskFamily" />
        <pre v-if="isZh"><code>麝香藥效團共同特徵：
1. 大環結構（14-16元環）
2. 一個羰基 (C=O)
3. 環直徑：10-12 Å
4. 官能基到環中心：~5 Å</code></pre>
        <pre v-else><code>Common features of musk pharmacophore:
1. Macrocyclic structure (14-16 membered ring)
2. One carbonyl group (C=O)
3. Ring diameter: 10-12 Å
4. Functional group to ring center: ~5 Å</code></pre>

        <h3>1.3.2 {{ t('ch1.sec1_3_2') }}</h3>
        <pre v-if="isZh"><code>受體口袋：~400 Ų
最佳配體：250-350 Ų
太小 (< 200 Ų)：結合不穩定
太大 (> 450 Ų)：無法進入</code></pre>
        <pre v-else><code>Receptor pocket: ~400 Ų
Optimal ligand: 250-350 Ų
Too small (< 200 Ų): Unstable binding
Too large (> 450 Ų): Cannot enter</code></pre>
      </section>

      <section v-show="activeSection === 'sec-1-4'" class="chapter-section">
        <h2 id="sec-1-4">1.4 {{ t('ch1.sec1_4') }}</h2>
        <MoleculeGallery :title="t('ch1.benzaldehydeVsAnisaldehyde')" :molecules="resonancePair" />
        <pre v-if="isZh"><code>苯甲醛: HOMO -9.2 eV, 杏仁香
茴香醛: HOMO -8.6 eV, 甜茴香
→ -OCH₃ 通過 +M 效應提高 HOMO</code></pre>
        <pre v-else><code>Benzaldehyde: HOMO -9.2 eV, Almond aroma
Anisaldehyde: HOMO -8.6 eV, Sweet anise
→ -OCH₃ raises HOMO through +M effect</code></pre>
      </section>

      <section v-show="activeSection === 'sec-1-5'" class="chapter-section">
        <h2 id="sec-1-5">1.5 {{ t('ch1.sec1_5') }}</h2>
        <pre v-if="isZh"><code>推薦方法：B3LYP/6-31G*
適用於：C, H, O, N 香料分子
精度：±5 kJ/mol

使用 ORCA：
! B3LYP 6-31G* OPT FREQ
→ 提取 HOMO, LUMO, Dipole Moment</code></pre>
        <pre v-else><code>Recommended method: B3LYP/6-31G*
Applicable to: C, H, O, N fragrance molecules
Accuracy: ±5 kJ/mol

Using ORCA:
! B3LYP 6-31G* OPT FREQ
→ Extract HOMO, LUMO, Dipole Moment</code></pre>
      </section>

      <section v-show="activeSection === 'sec-1-6'" class="chapter-section">
        <h2 id="sec-1-6">1.6 {{ t('ch1.sec1_6') }}</h2>
        
        <h3>1.6.1 {{ t('ch1.sec1_6_1') }}</h3>
        <p>{{ isZh ? '常見誤解：有苯環就是香的。實際上芳香環的氣味特性受取代基類型、位置、數量深度影響。' : 'Common misconception: Having a benzene ring means fragrant. In reality, the odor characteristics of aromatic rings are deeply influenced by substituent type, position, and quantity.' }}</p>
        
        <h4>{{ isZh ? '🔹 單取代苯 - 取代基決定性格' : '🔹 Monosubstituted Benzene - Substituents Define Character' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.structure') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.threshold') }}</th><th>{{ t('ch1.explanation') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '苯 (Benzene)' : 'Benzene' }}</td><td>C₆H₆</td><td>{{ isZh ? '甜、汽油味' : 'Sweet, gasoline-like' }}</td><td>4700</td><td>{{ isZh ? '純芳香性、無官能團' : 'Pure aromaticity, no functional group' }}</td></tr>
            <tr><td>{{ isZh ? '苯甲醛 (Benzaldehyde)' : 'Benzaldehyde' }}</td><td>Ph-CHO</td><td>{{ isZh ? '杏仁、櫻桃' : 'Almond, cherry' }}</td><td>350</td><td>{{ isZh ? '醛基：親核、反應性強' : 'Aldehyde: nucleophilic, highly reactive' }}</td></tr>
            <tr><td>{{ isZh ? '苯乙酮 (Acetophenone)' : 'Acetophenone' }}</td><td>Ph-COCH₃</td><td>{{ isZh ? '橙花、山楂' : 'Orange blossom, hawthorn' }}</td><td>390</td><td>{{ isZh ? '酮基：較弱親核性' : 'Ketone: weaker nucleophilicity' }}</td></tr>
            <tr><td>{{ isZh ? '苯甲醇 (Benzyl alcohol)' : 'Benzyl Alcohol' }}</td><td>Ph-CH₂OH</td><td>{{ isZh ? '微甜花香' : 'Mildly sweet, floral' }}</td><td>10000</td><td>{{ isZh ? '醇：極性高、揮發慢' : 'Alcohol: high polarity, slow evaporation' }}</td></tr>
            <tr><td>{{ isZh ? '苯乙醇 (Phenethyl alcohol)' : 'Phenethyl Alcohol' }}</td><td>Ph-CH₂CH₂OH</td><td>{{ isZh ? '玫瑰、蜂蜜' : 'Rose, honey' }}</td><td>1000</td><td>{{ isZh ? '碳鏈延長：更柔和' : 'Extended chain: softer' }}</td></tr>
            <tr><td>{{ isZh ? '苯甲酸 (Benzoic acid)' : 'Benzoic Acid' }}</td><td>Ph-COOH</td><td>{{ isZh ? '尿騷、辛辣' : 'Urinous, pungent' }}</td><td>12000</td><td>{{ isZh ? '酸基：強極性、刺激' : 'Acid: strongly polar, irritating' }}</td></tr>
            <tr><td>{{ isZh ? '苯胺 (Aniline)' : 'Aniline' }}</td><td>Ph-NH₂</td><td>{{ isZh ? '腐臭、魚腥' : 'Putrid, fishy' }}</td><td>2100</td><td>{{ isZh ? '胺基：鹼性、電子給予' : 'Amine: basic, electron-donating' }}</td></tr>
            <tr><td>{{ isZh ? '苯硫酚 (Thiophenol)' : 'Thiophenol' }}</td><td>Ph-SH</td><td>{{ isZh ? '強烈腐臭' : 'Intensely putrid' }}</td><td>0.057</td><td>{{ isZh ? '硫醇：超低閾值、極臭' : 'Thiol: ultra-low threshold, extremely foul' }}</td></tr>
            <tr><td>{{ isZh ? '甲苯 (Toluene)' : 'Toluene' }}</td><td>Ph-CH₃</td><td>{{ isZh ? '甜、油漆味' : 'Sweet, paint-like' }}</td><td>330</td><td>{{ isZh ? '甲基：+I效應、疏水增' : 'Methyl: +I effect, increased hydrophobicity' }}</td></tr>
            <tr><td>{{ isZh ? '苯酚 (Phenol)' : 'Phenol' }}</td><td>Ph-OH</td><td>{{ isZh ? '消毒水、焦糊' : 'Antiseptic, smoky' }}</td><td>5800</td><td>{{ isZh ? '羥基：共振穩定、酸性' : 'Hydroxyl: resonance-stabilized, acidic' }}</td></tr>
            <tr><td>{{ isZh ? '硝基苯 (Nitrobenzene)' : 'Nitrobenzene' }}</td><td>Ph-NO₂</td><td>{{ isZh ? '苦杏仁、毒性' : 'Bitter almond, toxic' }}</td><td>4700</td><td>{{ isZh ? '硝基：強拉電子' : 'Nitro: strong electron-withdrawing' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '規律：' : 'Pattern:' }}</strong>{{ isZh ? '芳香環提供剛性骨架，' : 'Aromatic rings provide rigid scaffolds, ' }}<span class="highlight">{{ isZh ? '官能團決定氣味方向' : 'functional groups determine odor direction' }}</span>{{ isZh ? '。醛/酮→果香/花香，醇→柔和，酸/胺→刺激，硫→臭。' : '. Aldehyde/Ketone→fruity/floral, Alcohol→soft, Acid/Amine→irritating, Sulfur→foul.' }}</p>

        <h4>{{ isZh ? '🔹 多取代苯 - 位置與對稱性的藝術' : '🔹 Polysubstituted Benzene - The Art of Position & Symmetry' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.substitutionPattern') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.keyFactor') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '鄰苯二甲醛' : 'o-Phthalaldehyde' }} (o-Phthalaldehyde)</td><td>1,2-{{ isZh ? '二' : 'di-' }}CHO</td><td>{{ isZh ? '刺鼻、青草' : 'Pungent, grassy' }}</td><td>{{ isZh ? '鄰位：立體擁擠、共軛受限' : 'Ortho: steric crowding, limited conjugation' }}</td></tr>
            <tr><td>{{ isZh ? '間苯二甲醛' : 'm-Phthalaldehyde' }} (m-Phthalaldehyde)</td><td>1,3-{{ isZh ? '二' : 'di-' }}CHO</td><td>{{ isZh ? '較柔和花香' : 'Softer floral' }}</td><td>{{ isZh ? '間位：平衡的偶極' : 'Meta: balanced dipoles' }}</td></tr>
            <tr><td>{{ isZh ? '對苯二甲醛' : 'p-Phthalaldehyde' }} (p-Phthalaldehyde)</td><td>1,4-{{ isZh ? '二' : 'di-' }}CHO</td><td>{{ isZh ? '強烈花香' : 'Intense floral' }}</td><td>{{ isZh ? '對位：最大共軛、對稱' : 'Para: maximum conjugation, symmetry' }}</td></tr>
            <tr><td>{{ isZh ? '茴香醛' : 'Anisaldehyde' }} (p-Anisaldehyde)</td><td>4-OCH₃-Ph-CHO</td><td>{{ isZh ? '甜茴香、山楂' : 'Sweet anise, hawthorn' }}</td><td>{{ isZh ? '對位給電子增強醛基反應性' : 'Para electron-donation enhances aldehyde reactivity' }}</td></tr>
            <tr><td>{{ isZh ? '香草醛' : 'Vanillin' }} (Vanillin)</td><td>3-OCH₃-4-OH-Ph-CHO</td><td>{{ isZh ? '香草、奶油' : 'Vanilla, creamy' }}</td><td>{{ isZh ? '鄰位雙取代：氫鍵穩定' : 'Ortho disubstituted: H-bond stabilized' }}</td></tr>
            <tr><td>{{ isZh ? '丁香酚' : 'Eugenol' }} (Eugenol)</td><td>4-OH-3-OCH₃-Ph-{{ isZh ? '烯丙基' : 'allyl' }}</td><td>{{ isZh ? '丁香、辛辣' : 'Clove, spicy' }}</td><td>{{ isZh ? '烯丙基延展共軛系統' : 'Allyl extends conjugated system' }}</td></tr>
            <tr><td>{{ isZh ? '肉桂醛' : 'Cinnamaldehyde' }} (Cinnamaldehyde)</td><td>Ph-CH=CH-CHO</td><td>{{ isZh ? '肉桂、溫暖' : 'Cinnamon, warm' }}</td><td>{{ isZh ? '共軛雙鍵延長、剛性增' : 'Extended conjugated double bond, increased rigidity' }}</td></tr>
            <tr><td>{{ isZh ? '對甲酚' : 'p-Cresol' }} (p-Cresol)</td><td>4-CH₃-Ph-OH</td><td>{{ isZh ? '糞臭、馬廠' : 'Fecal, barnyard' }}</td><td>{{ isZh ? '對位甲基增強酚的負面氣味' : 'Para methyl enhances phenols negative odor' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '位置效應：' : 'Position Effect:' }}</strong>{{ isZh ? '對位取代→對稱性高、共軛最強；鄰位→立體效應、氫鍵可能；間位→中間狀態。' : 'Para→high symmetry, strongest conjugation; Ortho→steric effects, possible H-bonding; Meta→intermediate state.' }}</p>

        <h4>{{ isZh ? '🔹 稠環芳香烴 - 尺寸與揮發性' : '🔹 Fused Ring Aromatics - Size & Volatility' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.ringNumber') }}</th><th>{{ t('ch1.mw') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.volatility') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '萊' : 'Naphthalene' }} (Naphthalene)</td><td>{{ isZh ? '2環' : '2 rings' }}</td><td>128</td><td>{{ isZh ? '樟腦、防蟲丸' : 'Camphor, mothball' }}</td><td>{{ t('ch1.high') }} (VP=10 Pa)</td></tr>
            <tr><td>{{ isZh ? '蒸' : 'Anthracene' }} (Anthracene)</td><td>{{ isZh ? '3環' : '3 rings' }}</td><td>178</td><td>{{ isZh ? '微弱、焦香' : 'Faint, smoky' }}</td><td>{{ t('ch1.low') }} (VP=0.001 Pa)</td></tr>
            <tr><td>{{ isZh ? '菲' : 'Phenanthrene' }} (Phenanthrene)</td><td>{{ isZh ? '3環' : '3 rings' }}</td><td>178</td><td>{{ isZh ? '幾乎無味' : 'Nearly odorless' }}</td><td>{{ t('ch1.extremelyLow') }}</td></tr>
            <tr><td>{{ isZh ? '芸' : 'Pyrene' }} (Pyrene)</td><td>{{ isZh ? '4環' : '4 rings' }}</td><td>202</td><td>{{ isZh ? '無味' : 'Odorless' }}</td><td>{{ t('ch1.negligible') }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '規律：' : 'Pattern:' }}</strong>{{ isZh ? '環數增加 → MW↑、VP↓、氣味消失。' : 'Ring count increases → MW↑, VP↓, odor disappears.' }}<span class="highlight">{{ isZh ? '3環以上難以揮發至鼻腔' : '3+ rings are too heavy to reach the nasal cavity' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h3>1.6.2 {{ t('ch1.sec1_6_2') }}</h3>
        <p>{{ isZh ? '「碳鏈越長越油」——但真相更細微。' : '"The longer the chain, the more oily" — but the truth is more nuanced.' }}</p>

        <h4>{{ isZh ? '🔸 直鏈醛 (C₁-C₁₂)' : '🔸 Linear Aldehydes (C₁-C₁₂)' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.formula') }}</th><th>{{ t('ch1.odorDescription') }}</th><th>{{ t('ch1.threshold') }}</th><th>{{ t('ch1.usage') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '甲醛' : 'Formaldehyde' }} C₁</td><td>HCHO</td><td>{{ isZh ? '刺激、福馬林' : 'Pungent, formalin' }}</td><td>500 ppb</td><td>{{ isZh ? '防腐劑（非香料）' : 'Preservative (not fragrance)' }}</td></tr>
            <tr><td>{{ isZh ? '乙醛' : 'Acetaldehyde' }} C₂</td><td>CH₃CHO</td><td>{{ isZh ? '刺鼻、果香' : 'Pungent, fruity' }}</td><td>1.5 ppb</td><td>{{ isZh ? '合成中間體' : 'Synthesis intermediate' }}</td></tr>
            <tr><td>{{ isZh ? '丙醛' : 'Propanal' }} C₃</td><td>C₂H₅CHO</td><td>{{ isZh ? '酒精發酵、辛辣' : 'Fermented, pungent' }}</td><td>1.0 ppb</td><td>{{ isZh ? '食用香精' : 'Food flavoring' }}</td></tr>
            <tr><td>{{ isZh ? '丁醛' : 'Butanal' }} C₄</td><td>C₃H₇CHO</td><td>{{ isZh ? '麥芽、可可' : 'Malty, cocoa' }}</td><td>0.6 ppb</td><td>{{ isZh ? '巧克力香' : 'Chocolate aroma' }}</td></tr>
            <tr><td>{{ isZh ? '戊醛' : 'Pentanal' }} C₅</td><td>C₄H₉CHO</td><td>{{ isZh ? '杏仁、麵包' : 'Almond, bread' }}</td><td>12 ppb</td><td>{{ isZh ? '烘焙香' : 'Baked aroma' }}</td></tr>
            <tr><td>{{ isZh ? '己醛' : 'Hexanal' }} C₆</td><td>C₅H₁₁CHO</td><td>{{ isZh ? '青草、蘋果' : 'Grassy, apple' }}</td><td>5 ppb</td><td>{{ isZh ? '綠葉香、前調' : 'Green leaf, top note' }}</td></tr>
            <tr><td>{{ isZh ? '庚醛' : 'Heptanal' }} C₇</td><td>C₆H₁₃CHO</td><td>{{ isZh ? '柑橘皮、脂肪' : 'Citrus peel, fatty' }}</td><td>3 ppb</td><td>{{ isZh ? '柑橘調' : 'Citrus note' }}</td></tr>
            <tr><td>{{ isZh ? '辛醛' : 'Octanal' }} C₈</td><td>C₇H₁₅CHO</td><td>{{ isZh ? '柑橘、金屬' : 'Citrus, metallic' }}</td><td>0.7 ppb</td><td>{{ isZh ? '柑橘型香水' : 'Citrus perfume' }}</td></tr>
            <tr><td>{{ isZh ? '壬醛' : 'Nonanal' }} C₉</td><td>C₈H₁₇CHO</td><td>{{ isZh ? '玫瑰、柑橘' : 'Rose, citrus' }}</td><td>1.0 ppb</td><td>{{ isZh ? '調香主力' : 'Perfumery staple' }}</td></tr>
            <tr><td>{{ isZh ? '癸醛' : 'Decanal' }} C₁₀</td><td>C₉H₁₉CHO</td><td>{{ isZh ? '橙皮、肥皂' : 'Orange peel, soapy' }}</td><td>0.1 ppb</td><td>{{ isZh ? '醛香調核心' : 'Aldehydic core' }}</td></tr>
            <tr><td>{{ isZh ? '十一醛' : 'Undecanal' }} C₁₁</td><td>C₁₀H₂₁CHO</td><td>{{ isZh ? '蠟質、花香' : 'Waxy, floral' }}</td><td>2 ppb</td><td>{{ isZh ? '粉質香' : 'Powdery note' }}</td></tr>
            <tr><td>{{ isZh ? '十二醛' : 'Dodecanal' }} C₁₂</td><td>C₁₁H₂₃CHO</td><td>{{ isZh ? '金屬、蠟' : 'Metallic, waxy' }}</td><td>10 ppb</td><td>{{ isZh ? '定香、基調' : 'Fixative, base note' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '趨勢分析：' : 'Trend Analysis:' }}</strong></p>
        <ul>
          <li>{{ isZh ? 'C₁-C₃：刺激性強、閾值高、不適用' : 'C₁-C₃: Highly irritating, high threshold, not usable' }}</li>
          <li>{{ isZh ? 'C₄-C₆：果香、青草、閾值低' : 'C₄-C₆: Fruity, grassy, low threshold' }}（<strong>{{ isZh ? '最香的區域' : 'most fragrant range' }}</strong>）</li>
          <li>{{ isZh ? 'C₇-C₁₀：柑橘、花香、調香黃金段' : 'C₇-C₁₀: Citrus, floral, golden range for perfumery' }}</li>
          <li>{{ isZh ? 'C₁₁-C₁₂：粉質、蠟質、揮發慢' : 'C₁₁-C₁₂: Powdery, waxy, slow evaporation' }}</li>
          <li>{{ isZh ? '>C₁₂：幾乎無味、固體、無揮發性' : '>C₁₂: Nearly odorless, solid, non-volatile' }}</li>
        </ul>
        <div class="chart-container"><canvas ref="chainLengthChart" style="max-height: 350px;"></canvas></div>

        <h4>{{ isZh ? '🔸 直鏈醇 vs 醛 - 官能團拉鋸戰' : '🔸 Linear Alcohols vs Aldehydes - Functional Group Tug-of-War' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.carbonCount') }}</th><th>{{ isZh ? '醛 (R-CHO)' : 'Aldehyde (R-CHO)' }}</th><th>{{ isZh ? '醇 (R-CH₂OH)' : 'Alcohol (R-CH₂OH)' }}</th><th>{{ isZh ? '氣味對比' : 'Odor Comparison' }}</th></tr></thead>
          <tbody>
            <tr><td>C₆</td><td>{{ isZh ? '己醛：青草、蘋果' : 'Hexanal: grassy, apple' }}</td><td>{{ isZh ? '己醇：草本、青綠' : 'Hexanol: herbal, green' }}</td><td>{{ isZh ? '醛更銳利、果香；醇更柔和' : 'Aldehyde sharper, fruity; alcohol softer' }}</td></tr>
            <tr><td>C₈</td><td>{{ isZh ? '辛醛：柑橘、金屬' : 'Octanal: citrus, metallic' }}</td><td>{{ isZh ? '辛醇：柑橘皮、脂肪' : 'Octanol: citrus peel, fatty' }}</td><td>{{ isZh ? '醛更亮、醇更圓潤' : 'Aldehyde brighter; alcohol rounder' }}</td></tr>
            <tr><td>C₁₀</td><td>{{ isZh ? '癸醛：橙皮、肥皂' : 'Decanal: orange peel, soapy' }}</td><td>{{ isZh ? '癸醇：脂肪、橙花' : 'Decanol: fatty, orange blossom' }}</td><td>{{ isZh ? '醛極強、醇溫和10倍' : 'Aldehyde extremely strong; alcohol 10× milder' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '關鍵：' : 'Key Point:' }}</strong>{{ isZh ? '醛(-CHO)的親核性、反應性遠高於醇(-OH)，' : 'The nucleophilicity and reactivity of aldehydes (-CHO) far exceeds that of alcohols (-OH), ' }}<span class="highlight">{{ isZh ? '醛類閾值普遍低100-1000倍' : 'aldehyde thresholds are generally 100-1000× lower' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h4>{{ isZh ? '🔸 支鏈醛 - 立體效應改變特性' : '🔸 Branched Aldehydes - Steric Effects Alter Properties' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.structure') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.comparison') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '正戊醛' : 'n-Pentanal' }}</td><td>CH₃(CH₂)₃CHO</td><td>{{ isZh ? '杏仁、麵包' : 'Almond, bread' }}</td><td>{{ isZh ? '基準' : 'Baseline' }}</td></tr>
            <tr><td>{{ isZh ? '異戊醛' : 'Isovaleraldehyde' }}</td><td>(CH₃)₂CHCH₂CHO</td><td>{{ isZh ? '巧克力、青蘋果' : 'Chocolate, green apple' }}</td><td>{{ isZh ? '更甜、更果香' : 'Sweeter, more fruity' }}</td></tr>
            <tr><td>{{ isZh ? '特戊醛' : 'Pivaldehyde' }}</td><td>(CH₃)₃CCHO</td><td>{{ isZh ? '強烈刺激' : 'Intensely pungent' }}</td><td>{{ isZh ? '立體擁擠、揮發極快' : 'Steric crowding, extremely fast evaporation' }}</td></tr>
            <tr><td>{{ isZh ? '正辛醛' : 'n-Octanal' }}</td><td>CH₃(CH₂)₆CHO</td><td>{{ isZh ? '柑橘、金屬' : 'Citrus, metallic' }}</td><td>{{ isZh ? '基準' : 'Baseline' }}</td></tr>
            <tr><td>{{ isZh ? '3,5,5-三甲基己醛' : '3,5,5-Trimethylhexanal' }}</td><td>(CH₃)₃CCH₂CH(CH₃)CH₂CHO</td><td>{{ isZh ? '清新、水生（Calone類似）' : 'Fresh, aquatic (Calone-like)' }}</td><td>{{ isZh ? '多支鏈→特殊氣味' : 'Multiple branches → unique odor' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '支鏈效應：' : 'Branching Effect:' }}</strong>{{ isZh ? 'α位支鏈→立體擁擠、揮發加速；β/γ位支鏈→形狀改變、受體識別改變。' : 'α-branching → steric crowding, faster evaporation; β/γ-branching → shape change, altered receptor recognition.' }}</p>

        <h3>1.6.3 {{ t('ch1.sec1_6_3') }}</h3>
        
        <h4>{{ isZh ? '🔹 C₆醛系列：飽和 vs 不飽和' : '🔹 C₆ Aldehyde Series: Saturated vs Unsaturated' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.structure') }}</th><th>{{ t('ch1.unsaturation') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.threshold') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '正己醛' : 'Hexanal' }}</td><td>CH₃(CH₂)₄CHO</td><td>{{ isZh ? '0（飽和）' : '0 (saturated)' }}</td><td>{{ isZh ? '青草、蘋果' : 'Grassy, apple' }}</td><td>5 ppb</td></tr>
            <tr><td>{{ isZh ? '反-2-己烯醛' : 'trans-2-Hexenal' }}</td><td>CH₃CH₂CH=CHCHO</td><td>{{ isZh ? '1（C=C）' : '1 (C=C)' }}</td><td>{{ isZh ? '辛辣、綠葉' : 'Pungent, green leaf' }}</td><td>17 ppb</td></tr>
            <tr><td>{{ isZh ? '2,4-己二烯醛' : '2,4-Hexadienal' }}</td><td>CH₃CH=CHCH=CHCHO</td><td>{{ isZh ? '2（共軛）' : '2 (conjugated)' }}</td><td>{{ isZh ? '油炸、堅果' : 'Fried, nutty' }}</td><td>78 ppb</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '共軛效應：' : 'Conjugation Effect:' }}</strong>{{ isZh ? 'C=C-C=O共軛 → 電子離域 → HOMO↑、反應性↓ → ' : 'C=C-C=O conjugation → electron delocalization → HOMO↑, reactivity↓ → ' }}<span class="highlight">{{ isZh ? '氣味變辛辣、閾值提高' : 'odor becomes pungent, threshold increases' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h4>{{ isZh ? '🔹 萨烯類：環+雙鍵的複雜性' : '🔹 Terpenes: Ring + Double Bond Complexity' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.structuralFeature') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.application') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? 'α-蓎烯' : 'α-Pinene' }}</td><td>{{ isZh ? '雙環[3.1.1]、1個C=C' : 'Bicyclo[3.1.1], 1 C=C' }}</td><td>{{ isZh ? '松木、清新' : 'Pine, fresh' }}</td><td>{{ isZh ? '松針香、清潔劑' : 'Pine needle, cleaning agents' }}</td></tr>
            <tr><td>{{ isZh ? 'β-蓎烯' : 'β-Pinene' }}</td><td>{{ isZh ? '雙環[3.1.1]、1個C=C' : 'Bicyclo[3.1.1], 1 C=C' }}</td><td>{{ isZh ? '松木、乾燥' : 'Pine, dry' }}</td><td>{{ isZh ? '木香調' : 'Woody note' }}</td></tr>
            <tr><td>{{ isZh ? '檸檬烯' : 'Limonene' }}</td><td>{{ isZh ? '單環、2個C=C' : 'Monocyclic, 2 C=C' }}</td><td>{{ isZh ? '柑橘、檸檬' : 'Citrus, lemon' }}</td><td>{{ isZh ? '柑橘型香水主力' : 'Citrus perfume staple' }}</td></tr>
            <tr><td>{{ isZh ? '月桂烯' : 'Myrcene' }}</td><td>{{ isZh ? '鏈狀、3個C=C' : 'Acyclic, 3 C=C' }}</td><td>{{ isZh ? '木質、草本' : 'Woody, herbal' }}</td><td>{{ isZh ? '問酒花香' : 'Hop aroma' }}</td></tr>
            <tr><td>{{ isZh ? 'α-水芹烯' : 'α-Phellandrene' }}</td><td>{{ isZh ? '雙環[2.2.1]、2個C=C' : 'Bicyclo[2.2.1], 2 C=C' }}</td><td>{{ isZh ? '檸檬、綠葉' : 'Lemon, green leaf' }}</td><td>{{ isZh ? '清新柑橘' : 'Fresh citrus' }}</td></tr>
            <tr><td>{{ isZh ? 'γ-萨品烯' : 'γ-Terpinene' }}</td><td>{{ isZh ? '單環、2個C=C（共軛）' : 'Monocyclic, 2 C=C (conjugated)' }}</td><td>{{ isZh ? '柑橘、松木' : 'Citrus, pine' }}</td><td>{{ isZh ? '檸檬香' : 'Lemon scent' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '萨烯規律：' : 'Terpene Patterns:' }}</strong>{{ isZh ? '單環+2個C=C → 柑橘香；雙環+1個C=C → 松木香；' : 'Monocyclic + 2 C=C → citrus; bicyclic + 1 C=C → pine; ' }}<span class="highlight">{{ isZh ? '環張力和雙鍵位置決定細微差異' : 'ring strain and double bond position determine subtle differences' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h3>1.6.4 {{ t('ch1.sec1_6_4') }}</h3>

        <h4>{{ isZh ? '🔸 含氧官能團階梯' : '🔸 Oxygen Functional Group Ladder' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.functionalGroup') }}</th><th>{{ t('ch1.representative') }}</th><th>{{ t('ch1.oxidationState') }}</th><th>{{ t('ch1.odorCharacter') }}</th><th>{{ t('ch1.typicalThreshold') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '醚 (-O-)' : 'Ether (-O-)' }}</td><td>{{ isZh ? '二乙醚' : 'Diethyl ether' }}</td><td>-2</td><td>{{ isZh ? '甜、麻醉性' : 'Sweet, anesthetic' }}</td><td>{{ isZh ? '高（弱香）' : 'High (weak scent)' }}</td></tr>
            <tr><td>{{ isZh ? '醇 (-OH)' : 'Alcohol (-OH)' }}</td><td>{{ isZh ? '乙醇' : 'Ethanol' }}</td><td>-2</td><td>{{ isZh ? '酒精、刺激' : 'Alcoholic, irritating' }}</td><td>{{ isZh ? '中等' : 'Medium' }}</td></tr>
            <tr><td>{{ isZh ? '醛 (-CHO)' : 'Aldehyde (-CHO)' }}</td><td>{{ isZh ? '己醛' : 'Hexanal' }}</td><td>0</td><td>{{ isZh ? '果香、青草' : 'Fruity, grassy' }}</td><td>{{ isZh ? '低（強香）' : 'Low (strong scent)' }}</td></tr>
            <tr><td>{{ isZh ? '酮 (-CO-)' : 'Ketone (-CO-)' }}</td><td>{{ isZh ? '丙酮' : 'Acetone' }}</td><td>0</td><td>{{ isZh ? '溶劑、甜' : 'Solvent, sweet' }}</td><td>{{ isZh ? '中等' : 'Medium' }}</td></tr>
            <tr><td>{{ isZh ? '羧酸 (-COOH)' : 'Carboxylic acid (-COOH)' }}</td><td>{{ isZh ? '丁酸' : 'Butyric acid' }}</td><td>+2</td><td>{{ isZh ? '酸臭、汗味' : 'Sour, sweaty' }}</td><td>{{ isZh ? '高（刺激）' : 'High (irritating)' }}</td></tr>
            <tr><td>{{ isZh ? '酯 (-COO-)' : 'Ester (-COO-)' }}</td><td>{{ isZh ? '乙酸乙酯' : 'Ethyl acetate' }}</td><td>{{ isZh ? '+2（酯化）' : '+2 (esterified)' }}</td><td>{{ isZh ? '果香、甜' : 'Fruity, sweet' }}</td><td>{{ isZh ? '低-中' : 'Low-medium' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '氧化態規律：' : 'Oxidation State Pattern:' }}</strong>{{ isZh ? '醛（0價）最香；酸（+2價）刺激；醇（-2價）柔和；' : 'Aldehyde (0) most fragrant; acid (+2) irritating; alcohol (-2) soft; ' }}<span class="highlight">{{ isZh ? '酯化=去酸性+增甜度' : 'esterification = remove acidity + add sweetness' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h4>{{ isZh ? '🔸 酯類：酸+醇的排列組合香氣圖譜' : '🔸 Esters: Acid + Alcohol Combinatorial Odor Map' }}</h4>
        <p>{{ isZh ? '酯 = R-COO-R’，' : 'Ester = R-COO-R’, ' }}<strong>{{ isZh ? '酸鏈長度' : 'acid chain length' }}</strong>{{ isZh ? '和' : ' and ' }}<strong>{{ isZh ? '醇鏈長度' : 'alcohol chain length' }}</strong>{{ isZh ? '雙重影響。' : ' both influence the result.' }}</p>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.ester') }}</th><th>{{ t('ch1.acidPart') }}</th><th>{{ t('ch1.alcoholPart') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.usage') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '甲酸乙酯' : 'Ethyl formate' }}</td><td>{{ isZh ? 'C₁酸' : 'C₁ acid' }}</td><td>{{ isZh ? 'C₂醇' : 'C₂ alcohol' }}</td><td>{{ isZh ? '朗姆酒' : 'Rum' }}</td><td>{{ isZh ? '食用香精' : 'Food flavoring' }}</td></tr>
            <tr><td>{{ isZh ? '乙酸乙酯' : 'Ethyl acetate' }}</td><td>{{ isZh ? 'C₂酸' : 'C₂ acid' }}</td><td>{{ isZh ? 'C₂醇' : 'C₂ alcohol' }}</td><td>{{ isZh ? '鳳梨、香蕉' : 'Pineapple, banana' }}</td><td>{{ isZh ? '果香調' : 'Fruity note' }}</td></tr>
            <tr><td>{{ isZh ? '乙酸丁酯' : 'Butyl acetate' }}</td><td>{{ isZh ? 'C₂酸' : 'C₂ acid' }}</td><td>{{ isZh ? 'C₄醇' : 'C₄ alcohol' }}</td><td>{{ isZh ? '蘋果、梨' : 'Apple, pear' }}</td><td>{{ isZh ? '果香調' : 'Fruity note' }}</td></tr>
            <tr><td>{{ isZh ? '乙酸己酯' : 'Hexyl acetate' }}</td><td>{{ isZh ? 'C₂酸' : 'C₂ acid' }}</td><td>{{ isZh ? 'C₆醇' : 'C₆ alcohol' }}</td><td>{{ isZh ? '梨、香蕉' : 'Pear, banana' }}</td><td>{{ isZh ? '食用香精' : 'Food flavoring' }}</td></tr>
            <tr><td>{{ isZh ? '乙酸苯乙酯' : 'Phenethyl acetate' }}</td><td>{{ isZh ? 'C₂酸' : 'C₂ acid' }}</td><td>{{ isZh ? 'Ph-C₂醇' : 'Ph-C₂ alcohol' }}</td><td>{{ isZh ? '蜂蜜、玫瑰' : 'Honey, rose' }}</td><td>{{ isZh ? '花香調核心' : 'Floral core' }}</td></tr>
            <tr><td>{{ isZh ? '丁酸乙酯' : 'Ethyl butyrate' }}</td><td>{{ isZh ? 'C₄酸' : 'C₄ acid' }}</td><td>{{ isZh ? 'C₂醇' : 'C₂ alcohol' }}</td><td>{{ isZh ? '鳳梨、熱帶' : 'Pineapple, tropical' }}</td><td>{{ isZh ? '果香調' : 'Fruity note' }}</td></tr>
            <tr><td>{{ isZh ? '己酸烯丙酯' : 'Allyl hexanoate' }}</td><td>{{ isZh ? 'C₆酸' : 'C₆ acid' }}</td><td>{{ isZh ? '烯丙醇' : 'Allyl alcohol' }}</td><td>{{ isZh ? '鳳梨、甜' : 'Pineapple, sweet' }}</td><td>{{ isZh ? '熱帶果香' : 'Tropical fruity' }}</td></tr>
            <tr><td>{{ isZh ? '水楊酸甲酯' : 'Methyl salicylate' }}</td><td>{{ isZh ? '鄰羅基苯甲酸' : 'o-Hydroxybenzoic acid' }}</td><td>{{ isZh ? '甲醇' : 'Methanol' }}</td><td>{{ isZh ? '冬青、薄荷' : 'Wintergreen, minty' }}</td><td>{{ isZh ? '清涼香' : 'Cooling scent' }}</td></tr>
            <tr><td>{{ isZh ? '苯甲酸苄酯' : 'Benzyl benzoate' }}</td><td>{{ isZh ? '苯甲酸' : 'Benzoic acid' }}</td><td>{{ isZh ? '苄醇' : 'Benzyl alcohol' }}</td><td>{{ isZh ? '依蘭、茉莉' : 'Ylang, jasmine' }}</td><td>{{ isZh ? '花香調、定香' : 'Floral note, fixative' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '酯化規律：' : 'Esterification Pattern:' }}</strong>{{ isZh ? '短鏈酯（C₂-C₄）→果香；中鏈酯（C₅-C₈）→花果；長鏈酯（>C₁₀）→蠟質、脂肪；' : 'Short-chain esters (C₂-C₄) → fruity; mid-chain (C₅-C₈) → floral-fruity; long-chain (>C₁₀) → waxy, fatty; ' }}<span class="highlight">{{ isZh ? '芳香酯→花香+定香' : 'aromatic esters → floral + fixative' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h4>{{ isZh ? '🔸 含氮官能團：從花香到腐臭' : '🔸 Nitrogen Functional Groups: From Floral to Putrid' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.functionalGroup') }}</th><th>{{ t('ch1.representative') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.characteristics') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '腈 (-C≡N)' : 'Nitrile (-C≡N)' }}</td><td>{{ isZh ? '苯乙腈' : 'Phenylacetonitrile' }}</td><td>{{ isZh ? '杏仁、苦' : 'Almond, bitter' }}</td><td>{{ isZh ? '低毒性、穩定' : 'Low toxicity, stable' }}</td></tr>
            <tr><td>{{ isZh ? '亞胺 (=N-)' : 'Imine (=N-)' }}</td><td>{{ isZh ? '苯甲醛肟' : 'Benzaldehyde oxime' }}</td><td>{{ isZh ? '花香、化學' : 'Floral, chemical' }}</td><td>{{ isZh ? '親核性強' : 'Strongly nucleophilic' }}</td></tr>
            <tr><td>{{ isZh ? '伯胺 (-NH₂)' : 'Primary amine (-NH₂)' }}</td><td>{{ isZh ? '苯胺' : 'Aniline' }}</td><td>{{ isZh ? '腐臭、魚腥' : 'Putrid, fishy' }}</td><td>{{ isZh ? '鹼性、極臭' : 'Basic, extremely foul' }}</td></tr>
            <tr><td>{{ isZh ? '仲胺 (-NH-)' : 'Secondary amine (-NH-)' }}</td><td>{{ isZh ? '二甲胺' : 'Dimethylamine' }}</td><td>{{ isZh ? '魚腥、尿騷' : 'Fishy, urinous' }}</td><td>{{ isZh ? '鹼性、揮發高' : 'Basic, highly volatile' }}</td></tr>
            <tr><td>{{ isZh ? '叔胺 (-N<)' : 'Tertiary amine (-N<)' }}</td><td>{{ isZh ? '三甲胺' : 'Trimethylamine' }}</td><td>{{ isZh ? '腐魚、極臭' : 'Rotten fish, extremely foul' }}</td><td>{{ isZh ? '鹼性最強' : 'Strongest basicity' }}</td></tr>
            <tr><td>{{ isZh ? '吲哚 (雜環N)' : 'Indole (heterocyclic N)' }}</td><td>{{ isZh ? '吲哚' : 'Indole' }}</td><td>{{ isZh ? '低濃度：花香' : 'Low conc.: floral' }}<br>{{ isZh ? '高濃度：糞臭' : 'High conc.: fecal' }}</td><td><strong>{{ isZh ? '濃度依賴性' : 'Concentration-dependent' }}</strong></td></tr>
            <tr><td>{{ isZh ? '吡啶 (雜環N)' : 'Pyridine (heterocyclic N)' }}</td><td>{{ isZh ? '吡啶' : 'Pyridine' }}</td><td>{{ isZh ? '魚腥、刺激' : 'Fishy, irritating' }}</td><td>{{ isZh ? '芳香性、鹼性' : 'Aromatic, basic' }}</td></tr>
            <tr><td>{{ isZh ? '硝基 (-NO₂)' : 'Nitro (-NO₂)' }}</td><td>{{ isZh ? '硝基苯' : 'Nitrobenzene' }}</td><td>{{ isZh ? '苦杏仁、毒性' : 'Bitter almond, toxic' }}</td><td>{{ isZh ? '強拉電子' : 'Strong electron-withdrawing' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '含氮規律：' : 'Nitrogen Pattern:' }}</strong>{{ isZh ? '胺類普遍臭（鹼性+揮發性）；吲哚' : 'Amines are generally foul (basic + volatile); indole has ' }}<span class="highlight">{{ isZh ? '雙面性' : 'dual nature' }}</span>{{ isZh ? '（稀釋=花香、濃縮=糞臭）；腈類相對溫和。' : ' (diluted = floral, concentrated = fecal); nitriles are relatively mild.' }}</p>

        <h4>{{ isZh ? '🔸 含硫官能團：臭味的王者' : '🔸 Sulfur Functional Groups: Kings of Stench' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.functionalGroup') }}</th><th>{{ t('ch1.representative') }}</th><th>{{ t('ch1.threshold') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.application') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '硫醇 (-SH)' : 'Thiol (-SH)' }}</td><td>{{ isZh ? '乙硫醇' : 'Ethanethiol' }}</td><td>0.47 ppb</td><td>{{ isZh ? '臭蛋、瓦斯' : 'Rotten egg, gas' }}</td><td>{{ isZh ? '瓦斯警示劑' : 'Gas odorant' }}</td></tr>
            <tr><td>{{ isZh ? '硫醚 (-S-)' : 'Thioether (-S-)' }}</td><td>{{ isZh ? '二甲硫' : 'Dimethyl sulfide' }}</td><td>1.0 ppb</td><td>{{ isZh ? '甘藍菜' : 'Cabbage' }}</td><td>{{ isZh ? '蔬菜香精' : 'Vegetable flavoring' }}</td></tr>
            <tr><td>{{ isZh ? '二硫化物 (-S-S-)' : 'Disulfide (-S-S-)' }}</td><td>{{ isZh ? '二烯丙基二硫' : 'Diallyl disulfide' }}</td><td>0.005 ppb</td><td>{{ isZh ? '大蒜、洋蔥' : 'Garlic, onion' }}</td><td>{{ isZh ? '食用香精' : 'Food flavoring' }}</td></tr>
            <tr><td>{{ isZh ? '三硫化物 (-S-S-S-)' : 'Trisulfide (-S-S-S-)' }}</td><td>{{ isZh ? '二烯丙基三硫' : 'Diallyl trisulfide' }}</td><td>0.0001 ppb</td><td>{{ isZh ? '極強蒜味' : 'Extremely strong garlic' }}</td><td>{{ isZh ? '食用香精' : 'Food flavoring' }}</td></tr>
            <tr><td>{{ isZh ? '噻吩 (雜環S)' : 'Thiophene (heterocyclic S)' }}</td><td>{{ isZh ? '2-甲基噻吩' : '2-Methylthiophene' }}</td><td>0.007 ppb</td><td>{{ isZh ? '洋蔥、肉香' : 'Onion, meaty' }}</td><td>{{ isZh ? '熟肉香精' : 'Cooked meat flavoring' }}</td></tr>
            <tr><td>{{ isZh ? '亞碸 (-SO-)' : 'Sulfoxide (-SO-)' }}</td><td>{{ isZh ? '大蒜素' : 'Allicin' }}</td><td>0.1 ppb</td><td>{{ isZh ? '大蒜' : 'Garlic' }}</td><td>{{ isZh ? '天然調味' : 'Natural seasoning' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '硫化物規律：' : 'Sulfur Compound Pattern:' }}</strong>{{ isZh ? '閾值' : 'Thresholds are ' }}<span class="highlight">{{ isZh ? '超低（ppb級以下）' : 'ultra-low (sub-ppb)' }}</span>{{ isZh ? '；S-S鍵越多越強；但' : '; more S-S bonds = stronger; but ' }}<strong>{{ isZh ? '極稀釋時可產生肉香、烘焙香' : 'at extreme dilution can produce meaty, roasted aromas' }}</strong>{{ isZh ? '（濃度依賴）。' : ' (concentration-dependent).' }}</p>

        <h3>1.6.5 {{ t('ch1.sec1_6_5') }}</h3>

        <h4>🔹 {{ isZh ? '環大小的影響' : 'Ring Size Effects' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.ringSize') }}</th><th>{{ t('ch1.representative') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.strain') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '3元環' : '3-membered' }}</td><td>{{ isZh ? '環氧乙烷' : 'Ethylene oxide' }}</td><td>{{ isZh ? '甜、醚味' : 'Sweet, ethereal' }}</td><td>{{ isZh ? '極高（115 kJ/mol）' : 'Very high (115 kJ/mol)' }}</td></tr>
            <tr><td>{{ isZh ? '4元環' : '4-membered' }}</td><td>{{ isZh ? '環丁酮' : 'Cyclobutanone' }}</td><td>{{ isZh ? '刺激、甜' : 'Pungent, sweet' }}</td><td>{{ isZh ? '高（110 kJ/mol）' : 'High (110 kJ/mol)' }}</td></tr>
            <tr><td>{{ isZh ? '5元環' : '5-membered' }}</td><td>{{ isZh ? '環戊酮' : 'Cyclopentanone' }}</td><td>{{ isZh ? '薄荷、樟腦' : 'Mint, camphor' }}</td><td>{{ isZh ? '低（6.5 kJ/mol）' : 'Low (6.5 kJ/mol)' }}</td></tr>
            <tr><td>{{ isZh ? '6元環（椅式）' : '6-membered (chair)' }}</td><td>{{ isZh ? '環己醇' : 'Cyclohexanol' }}</td><td>{{ isZh ? '樟腦、藥用' : 'Camphor, medicinal' }}</td><td>{{ isZh ? '無（0 kJ/mol）' : 'None (0 kJ/mol)' }}<strong>{{ isZh ? '*最穩定' : '*most stable' }}</strong></td></tr>
            <tr><td>{{ isZh ? '7元環' : '7-membered' }}</td><td>{{ isZh ? '環庚酮' : 'Cycloheptanone' }}</td><td>{{ isZh ? '木質、辛辣' : 'Woody, spicy' }}</td><td>{{ isZh ? '低（26 kJ/mol）' : 'Low (26 kJ/mol)' }}</td></tr>
            <tr><td>{{ isZh ? '8-11元環' : '8–11-membered' }}</td><td>{{ isZh ? '環十酮' : 'Cyclodecanone' }}</td><td>{{ isZh ? '辛辣中帶花香' : 'Spicy with floral notes' }}</td><td>{{ isZh ? '中等' : 'Moderate' }}</td></tr>
            <tr><td>{{ isZh ? '12-16元大環' : '12–16 macrocycle' }}</td><td>{{ isZh ? '環十五內酯' : 'Cyclopentadecanolide' }}</td><td>{{ isZh ? '麝香' : 'Musk' }}</td><td>{{ isZh ? '低（柔性）' : 'Low (flexible)' }}</td></tr>
            <tr><td>{{ isZh ? '>17元環' : '>17-membered' }}</td><td>{{ isZh ? '巨環內酯' : 'Macrolide' }}</td><td>{{ isZh ? '微弱、蠟質' : 'Faint, waxy' }}</td><td>{{ isZh ? '熵效應主導' : 'Entropy-dominated' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '環張力規律：' : 'Ring Strain Pattern:' }}</strong>{{ isZh ? '5-6元環最穩定、氣味最溫和；3-4元環張力高、反應性強；' : '5–6-membered rings are most stable with the mildest odors; 3–4-membered rings have high strain and reactivity; ' }}<span class="highlight">{{ isZh ? '12-16元大環柔性好、符合麝香藥效團' : '12–16-membered macrocycles are flexible and match the musk pharmacophore' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h4>🔹 {{ isZh ? '麝香家族：環大小決定氣味質量' : 'Musk Family: Ring Size Determines Odor Quality' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.ringSize') }}</th><th>{{ t('ch1.structure') }}</th><th>{{ t('ch1.odorStrength') }}</th><th>{{ t('ch1.odorQuality') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '環十二酮' : 'Cyclododecanone' }}</td><td>{{ isZh ? '12元' : '12-mem.' }}</td><td>{{ isZh ? '環+酮' : 'Ring + ketone' }}</td><td>{{ isZh ? '弱' : 'Weak' }}</td><td>{{ isZh ? '木質帶麝香' : 'Woody with musk' }}</td></tr>
            <tr><td>{{ isZh ? '環十三酮' : 'Cyclotridecanone' }}</td><td>{{ isZh ? '13元' : '13-mem.' }}</td><td>{{ isZh ? '環+酮' : 'Ring + ketone' }}</td><td>{{ isZh ? '中' : 'Medium' }}</td><td>{{ isZh ? '麝香、粉質' : 'Musk, powdery' }}</td></tr>
            <tr><td>{{ isZh ? '環十四酮' : 'Cyclotetradecanone' }}</td><td>{{ isZh ? '14元' : '14-mem.' }}</td><td>{{ isZh ? '環+酮' : 'Ring + ketone' }}</td><td>{{ isZh ? '中' : 'Medium' }}</td><td>{{ isZh ? '麝香' : 'Musk' }}</td></tr>
            <tr><td>{{ isZh ? '環十五酮' : 'Cyclopentadecanone' }} (Muscone)</td><td>{{ isZh ? '15元' : '15-mem.' }}</td><td>{{ isZh ? '環+酮+甲基' : 'Ring + ketone + methyl' }}</td><td><strong>{{ isZh ? '強' : 'Strong' }}</strong></td><td><strong>{{ isZh ? '純麝香、動物性' : 'Pure musk, animalic' }}</strong></td></tr>
            <tr><td>{{ isZh ? '環十六酮' : 'Cyclohexadecanone' }}</td><td>{{ isZh ? '16元' : '16-mem.' }}</td><td>{{ isZh ? '環+酮' : 'Ring + ketone' }}</td><td>{{ isZh ? '中' : 'Medium' }}</td><td>{{ isZh ? '麝香、纖細' : 'Musk, delicate' }}</td></tr>
            <tr><td>{{ isZh ? '環十七酮' : 'Cycloheptadecanone' }}</td><td>{{ isZh ? '17元' : '17-mem.' }}</td><td>{{ isZh ? '環+酮' : 'Ring + ketone' }}</td><td>{{ isZh ? '弱' : 'Weak' }}</td><td>{{ isZh ? '麝香漸失' : 'Musk fading' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '黃金環徑：' : 'Golden Ring Size:' }}</strong>{{ isZh ? '15元環（環十五酮）= ' : '15-membered ring (cyclopentadecanone) = ' }}<span class="highlight">{{ isZh ? '天然麝香主成分' : 'main component of natural musk' }}</span>{{ isZh ? '，直徑10-12 Å，完美匹配受體口袋。' : ', diameter 10–12 Å, perfectly matches the receptor pocket.' }}</p>

        <h3>1.6.6 {{ t('ch1.sec1_6_6') }}</h3>

        <h4>🔸 {{ isZh ? '順反異構' : 'Geometric Isomerism' }} (Cis/Trans)</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.isomer') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.difference') }}</th></tr></thead>
          <tbody>
            <tr><td rowspan="2">{{ isZh ? '玫瑰醚' : 'Rose oxide' }}</td><td>{{ isZh ? '順式-玫瑰醚' : 'cis-Rose oxide' }}</td><td>{{ isZh ? '弱玫瑰香' : 'Weak rose' }}</td><td rowspan="2">{{ isZh ? 'C=C構型改變分子形狀' : 'C=C configuration changes molecular shape' }}<br>→ {{ isZh ? '受體匹配度變化' : 'receptor fit changes' }}</td></tr>
            <tr><td>{{ isZh ? '反式-玫瑰醚' : 'trans-Rose oxide' }}</td><td><strong>{{ isZh ? '強烈玫瑰香' : 'Intense rose' }}</strong></td></tr>
            <tr><td rowspan="2">{{ isZh ? '茉莉酮' : 'Jasmone' }}</td><td>{{ isZh ? '順式-茉莉酮' : 'cis-Jasmone' }}</td><td>{{ isZh ? '濃郁茉莉' : 'Rich jasmine' }}</td><td rowspan="2">{{ isZh ? '反式張力大、' : 'trans has higher strain,' }}<br>{{ isZh ? '順式柔和自然' : 'cis is softer and natural' }}</td></tr>
            <tr><td>{{ isZh ? '反式-茉莉酮' : 'trans-Jasmone' }}</td><td>{{ isZh ? '木質茉莉' : 'Woody jasmine' }}</td></tr>
            <tr><td rowspan="2">{{ isZh ? '2-己烯醛' : '2-Hexenal' }}</td><td>{{ isZh ? '順式' : 'cis' }}</td><td>{{ isZh ? '青蘋果' : 'Green apple' }}</td><td rowspan="2">{{ isZh ? '形狀差異影響' : 'Shape difference affects' }}<br>{{ isZh ? '醛基接觸角度' : 'aldehyde contact angle' }}</td></tr>
            <tr><td><strong>{{ isZh ? '反式' : 'trans' }}</strong></td><td><strong>{{ isZh ? '辛辣綠葉' : 'Spicy green leaf' }}</strong></td></tr>
          </tbody>
        </table>

        <h4>🔸 {{ isZh ? '對映異構' : 'Enantiomers' }} (R/S Enantiomers)</h4>
        <p>{{ isZh ? '已在1.1.3討論過香芹酮、檸檬烯、薄荷醇，此處補充更多案例：' : 'Carvone, limonene, and menthol were discussed in 1.1.3; here are additional examples:' }}</p>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.rIsomer') }}</th><th>{{ t('ch1.sIsomer') }}</th><th>{{ t('ch1.thresholdComparison') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? 'α-松油醇' : 'α-Terpineol' }}</td><td>{{ isZh ? '松木、乾燥' : 'Pine, dry' }}</td><td>{{ isZh ? '薰衣草、花香' : 'Lavender, floral' }}</td><td>{{ isZh ? '閾值相近' : 'Similar thresholds' }}</td></tr>
            <tr><td>{{ isZh ? '芳樟醇' : 'Linalool' }}</td><td>{{ isZh ? '薰衣草、花香' : 'Lavender, floral' }}</td><td>{{ isZh ? '木質、辛辣' : 'Woody, spicy' }}</td><td>{{ isZh ? 'S型閾值高2倍' : 'S-form threshold 2× higher' }}</td></tr>
            <tr><td>{{ isZh ? '檸檬醛' : 'Citral' }}</td><td>{{ isZh ? '(R)-橘醛: 辛辣' : '(R)-Neral: spicy' }}</td><td>{{ isZh ? '(S)-檸檬醛: 甜檸檬' : '(S)-Citral: sweet lemon' }}</td><td>{{ isZh ? '氣味完全不同' : 'Completely different odors' }}</td></tr>
            <tr><td>{{ isZh ? '玫瑰氧化物' : 'Rose oxide' }}</td><td>{{ isZh ? '玫瑰、金屬' : 'Rose, metallic' }}</td><td>{{ isZh ? '天竺葵、綠葉' : 'Geranium, green' }}</td><td>{{ isZh ? 'R型強度高10倍' : 'R-form 10× stronger' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '手性效應：' : 'Chirality Effect:' }}</strong>{{ isZh ? '鏡像異構體=' : 'Enantiomers = ' }}<span class="highlight">{{ isZh ? '分子形狀鏡射' : 'mirror-image molecular shapes' }}</span> → {{ isZh ? '受體口袋匹配度完全不同 → ' : 'completely different receptor pocket fit → ' }}<strong>{{ isZh ? '氣味可以天差地別' : 'odors can be vastly different' }}</strong>{{ isZh ? '。' : '.' }}</p>

        <h3>1.6.7 {{ t('ch1.sec1_6_7') }}</h3>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.logPRange') }}</th><th>{{ t('ch1.polarity') }}</th><th>{{ t('ch1.volatility') }}</th><th>{{ t('ch1.odorCharacter') }}</th><th>{{ t('ch1.representative') }}</th></tr></thead>
          <tbody>
            <tr><td><0</td><td>{{ isZh ? '親水' : 'Hydrophilic' }}</td><td>{{ isZh ? '低' : 'Low' }}</td><td>{{ isZh ? '難以揮發、弱香或無味' : 'Hard to volatilize, weak or odorless' }}</td><td>{{ isZh ? '葡萄糖、胺基酸' : 'Glucose, amino acids' }}</td></tr>
            <tr><td>0-2</td><td>{{ isZh ? '中等' : 'Moderate' }}</td><td>{{ isZh ? '高' : 'High' }}</td><td>{{ isZh ? '刺激、酒精感' : 'Pungent, alcoholic' }}</td><td>{{ isZh ? '乙醇、丙酮' : 'Ethanol, acetone' }}</td></tr>
            <tr><td>2-4</td><td>{{ isZh ? '疏水' : 'Hydrophobic' }}</td><td>{{ isZh ? '中-高' : 'Med–High' }}</td><td><strong>{{ isZh ? '最佳香氣區' : 'Optimal aroma zone' }}</strong></td><td>{{ isZh ? '檸檬烯、芳樟醇' : 'Limonene, linalool' }}</td></tr>
            <tr><td>4-6</td><td>{{ isZh ? '疏水' : 'Hydrophobic' }}</td><td>{{ isZh ? '中' : 'Medium' }}</td><td>{{ isZh ? '花香、木質' : 'Floral, woody' }}</td><td>{{ isZh ? '香豆素、香草醛' : 'Coumarin, vanillin' }}</td></tr>
            <tr><td>>6</td><td>{{ isZh ? '極疏水' : 'Very hydrophobic' }}</td><td>{{ isZh ? '低' : 'Low' }}</td><td>{{ isZh ? '油脂、蠟質' : 'Oily, waxy' }}</td><td>{{ isZh ? '長鏈脂肪醇' : 'Long-chain fatty alcohols' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? 'Log P甜蜜點：' : 'Log P Sweet Spot:' }}</strong>2-4 = <span class="highlight">{{ isZh ? '平衡疏水性（過鼻黏液）與揮發性（達嗅覺上皮）' : 'balances hydrophobicity (crossing nasal mucus) with volatility (reaching olfactory epithelium)' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h3>1.6.8 {{ t('ch1.sec1_6_8') }}</h3>
        <p>{{ isZh ? '部分分子的氣味隨濃度劇烈改變（非線性關係）：' : 'Some molecules undergo dramatic odor changes with concentration (nonlinear relationship):' }}</p>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.ultraLowConc') }}</th><th>{{ t('ch1.lowConc') }}</th><th>{{ t('ch1.highConc') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '吲哚' : 'Indole' }}</td><td>{{ isZh ? '茉莉、橙花' : 'Jasmine, neroli' }}</td><td>{{ isZh ? '花香明顯' : 'Distinctly floral' }}</td><td><strong>{{ isZh ? '糞臭、難聞' : 'Fecal, unpleasant' }}</strong></td></tr>
            <tr><td>{{ isZh ? '糞臭素' : 'Skatole' }}</td><td>{{ isZh ? '花香、果香' : 'Floral, fruity' }}</td><td>{{ isZh ? '茉莉、橙花' : 'Jasmine, neroli' }}</td><td><strong>{{ isZh ? '糞便臭' : 'Fecal stench' }}</strong></td></tr>
            <tr><td>{{ isZh ? '硫醇' : 'Thiol' }}</td><td>{{ isZh ? '肉香、烘焙' : 'Meaty, roasted' }}</td><td>{{ isZh ? '洋蔥、蒜香' : 'Onion, garlic' }}</td><td><strong>{{ isZh ? '腐臭、瓦斯' : 'Putrid, gas-like' }}</strong></td></tr>
            <tr><td>{{ isZh ? '二甲基吲哚' : 'Dimethylindole' }}</td><td>{{ isZh ? '無明顯' : 'Negligible' }}</td><td>{{ isZh ? '動物香、麝香' : 'Animalic, musky' }}</td><td><strong>{{ isZh ? '糞臭' : 'Fecal' }}</strong></td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '稀釋悖論：' : 'Dilution Paradox:' }}</strong><span class="highlight">{{ isZh ? '臭味物質極稀釋後可變花香' : 'Foul-smelling substances can become floral at extreme dilution' }}</span>{{ isZh ? '（受體飽和度、閾值曲線非線性）。調香師利用此特性創造複雜香氣。' : ' (receptor saturation, nonlinear threshold curves). Perfumers exploit this property to create complex fragrances.' }}</p>

        <h3>1.6.9 {{ t('ch1.sec1_6_9') }}</h3>
        <p>{{ isZh ? '真實香料分子往往含多個官能團，氣味=各官能團加權+協同效應。' : 'Real fragrance molecules typically contain multiple functional groups; odor = weighted contributions of each group + synergistic effects.' }}</p>
        
        <h4>{{ isZh ? '案例：香草醛' : 'Case Study: Vanillin' }} (Vanillin)</h4>
        <pre v-if="isZh"><code>結構：4-羟基-3-甲氧基苯甲醛
    Ph-CHO: 提供杏仁香基底
  + 4-OH: 增加甜度、降低揮發性
  + 3-OCH₃: 給電子、增強醛的親核性
  + 鄰位雙取代: 分子內氫鍵穩定
  ────────────────────────
  = 香草、奶油、甜美、持久</code></pre>
        <pre v-else><code>Structure: 4-Hydroxy-3-methoxybenzaldehyde
    Ph-CHO: Provides almond aroma base
  + 4-OH: Increases sweetness, lowers volatility
  + 3-OCH₃: Electron-donating, enhances aldehyde nucleophilicity
  + Ortho disubstitution: Intramolecular H-bond stabilization
  ────────────────────────
  = Vanilla, creamy, sweet, long-lasting</code></pre>

        <h4>{{ isZh ? '案例：丁香酚' : 'Case Study: Eugenol' }} (Eugenol)</h4>
        <pre v-if="isZh"><code>結構：4-羟基-3-甲氧基烯丙基苯
    Ph骨架: 剛性、芳香性
  + 4-OH: 酚香、刺激
  + 3-OCH₃: 甜度
  + 烯丙基: 延長共軛、增加辛辣
  ────────────────────────
  = 丁香、辛辣、藥用、溫暖</code></pre>
        <pre v-else><code>Structure: 4-Hydroxy-3-methoxyallylbenzene
    Ph skeleton: Rigid, aromatic
  + 4-OH: Phenolic, pungent
  + 3-OCH₃: Sweetness
  + Allyl group: Extended conjugation, adds spiciness
  ────────────────────────
  = Clove, spicy, medicinal, warm</code></pre>

        <h4>{{ isZh ? '案例：玫瑰醇' : 'Case Study: Citronellol' }} (Citronellol)</h4>
        <pre v-if="isZh"><code>結構：3,7-二甲基-6-辛烯-1-醇
    C₁₀鏈: 疏水骨架（Log P≈3.5）
  + 末端-OH: 親水頭、極性
  + C=C（非共軛）: 柔性、構象多樣
  + 兩個甲基: 支鏈、立體識別
  ────────────────────────
  = 玫瑰、柑橘、清新、優雅</code></pre>
        <pre v-else><code>Structure: 3,7-Dimethyl-6-octen-1-ol
    C₁₀ chain: Hydrophobic backbone (Log P≈3.5)
  + Terminal -OH: Hydrophilic head, polarity
  + C=C (non-conjugated): Flexibility, conformational diversity
  + Two methyl groups: Branching, steric recognition
  ────────────────────────
  = Rose, citrus, fresh, elegant</code></pre>

        <h3>1.6.10 {{ t('ch1.sec1_6_10') }}</h3>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.symmetry') }}</th><th>{{ t('ch1.representative') }}</th><th>{{ t('ch1.odorComplexity') }}</th><th>{{ t('ch1.description') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '高對稱' : 'High symmetry' }}（C₂ᵥ, D₆ₕ）</td><td>{{ isZh ? '苯、萸' : 'Benzene, naphthalene' }}</td><td>{{ isZh ? '低' : 'Low' }}</td><td>{{ isZh ? '簡單、單一調性' : 'Simple, monotone' }}</td></tr>
            <tr><td>{{ isZh ? '中對稱' : 'Medium symmetry' }}（Cs）</td><td>{{ isZh ? '對甲酚' : 'p-Cresol' }}</td><td>{{ isZh ? '中' : 'Medium' }}</td><td>{{ isZh ? '穩定、可預測' : 'Stable, predictable' }}</td></tr>
            <tr><td>{{ isZh ? '低對稱/不對稱' : 'Low / asymmetric' }}</td><td>{{ isZh ? '香芹酮、檸檬烯' : 'Carvone, limonene' }}</td><td>{{ isZh ? '高' : 'High' }}</td><td><strong>{{ isZh ? '複雜、層次豐富' : 'Complex, multi-layered' }}</strong></td></tr>
            <tr><td>{{ isZh ? '完全不對稱（手性）' : 'Fully asymmetric (chiral)' }}</td><td>{{ isZh ? '薄荷醇' : 'Menthol' }}</td><td>{{ isZh ? '極高' : 'Very high' }}</td><td>{{ isZh ? '對映體氣味差異大' : 'Large enantiomeric odor difference' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '對稱性悖論：' : 'Symmetry Paradox:' }}</strong>{{ isZh ? '分子越不對稱 → ' : 'The less symmetric the molecule → ' }}<span class="highlight">{{ isZh ? '構象越多 → 受體識別更複雜 → 氣味層次更豐富' : 'more conformations → more complex receptor recognition → richer odor layers' }}</span>{{ isZh ? '。' : '.' }}</p>

        <h3>1.6.11 {{ t('ch1.sec1_6_11') }}</h3>
        <p>{{ isZh ? '單鍵可自由旋轉產生不同構象（conformers），能量最低構象主導氣味。' : 'Single bonds can rotate freely to generate different conformations (conformers); the lowest-energy conformer dominates the odor.' }}</p>

        <h4>{{ isZh ? '🔹 丁香酚的構象分析' : '🔹 Conformational Analysis of Eugenol' }}</h4>
        <pre v-if="isZh"><code>丁香酚側鏈旋轉：
C-C單鍵旋轉可產生3個主要構象：
  ① 烯丙基順式（s-cis）：ΔE = 0 kJ/mol（最穩定）
  ② 烯丙基反式（s-trans）：ΔE = +3.2 kJ/mol
  ③ 垂直構象：ΔE = +8.5 kJ/mol（過渡態）

室溫下分布：
  s-cis: 82%（主導氣味）
  s-trans: 17%
  垂直: <1%

受體對接：
  s-cis構象與OR2W1受體匹配度：95%
  s-trans構象匹配度：62%
  
→ <span class="highlight">主要構象決定主要氣味</span></code></pre>
        <pre v-else><code>Eugenol side-chain rotation:
C-C single bond rotation produces 3 major conformers:
  ① Allyl s-cis: ΔE = 0 kJ/mol (most stable)
  ② Allyl s-trans: ΔE = +3.2 kJ/mol
  ③ Perpendicular: ΔE = +8.5 kJ/mol (transition state)

Room-temperature distribution:
  s-cis: 82% (dominates odor)
  s-trans: 17%
  Perpendicular: <1%

Receptor docking:
  s-cis conformer match with OR2W1: 95%
  s-trans conformer match: 62%
  
→ <span class="highlight">The dominant conformer determines the dominant odor</span></code></pre>

        <h4>{{ isZh ? '🔹 正丁醇 vs 異丁醇 - 構象柔性差異' : '🔹 n-Butanol vs Isobutanol — Conformational Flexibility Differences' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.structure') }}</th><th>{{ t('ch1.conformerCount') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.threshold') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '正丁醇' : 'n-Butanol' }}</td><td>CH₃CH₂CH₂CH₂OH</td><td>{{ isZh ? '9種（3³旋轉異構）' : '9 (3³ rotational isomers)' }}</td><td>{{ isZh ? '藥用、溶劑' : 'Medicinal, solvent' }}</td><td>500 ppb</td></tr>
            <tr><td>{{ isZh ? '異丁醇' : 'Isobutanol' }}</td><td>(CH₃)₂CHCH₂OH</td><td>{{ isZh ? '3種（支鏈限制）' : '3 (branching restricts)' }}</td><td>{{ isZh ? '酒精、發酵' : 'Alcoholic, fermented' }}</td><td>40 ppb</td></tr>
            <tr><td>{{ isZh ? '特丁醇' : 'tert-Butanol' }}</td><td>(CH₃)₃COH</td><td>{{ isZh ? '1種（完全剛性）' : '1 (fully rigid)' }}</td><td>{{ isZh ? '樟腦、藥用' : 'Camphor, medicinal' }}</td><td>350 ppb</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '構象熵效應：' : 'Conformational entropy effect: ' }}</strong>{{ isZh ? '柔性分子（多構象）結合受體時' : 'When flexible molecules (multiple conformers) bind receptors, ' }}<span class="highlight">{{ isZh ? '熵損失大' : 'entropy loss is large' }}</span>{{ isZh ? '（ΔS < 0），降低親和力；剛性分子熵損失小，結合更有利（異丁醇閾值低於正丁醇）。' : ' (ΔS < 0), reducing affinity; rigid molecules have smaller entropy loss, making binding more favorable (isobutanol threshold is lower than n-butanol).' }}</p>

        <h3>1.6.12 {{ t('ch1.sec1_6_12') }}</h3>
        <p>{{ isZh ? '傳統「形狀理論」外，Luca Turin提出' : 'Beyond the traditional "shape theory," Luca Turin proposed the ' }}<strong>{{ isZh ? '振動理論' : 'vibration theory' }}</strong>{{ isZh ? '：受體通過' : ': receptors detect molecular vibration frequencies via ' }}<span class="highlight">{{ isZh ? '非彈性電子隧穿' : 'inelastic electron tunneling' }}</span>{{ isZh ? '感測分子振動頻率。' : '.' }}</p>

        <h4>{{ isZh ? '證據：同位素效應' : 'Evidence: Isotope Effects' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ isZh ? 'C-H振動' : 'C-H Vibration' }}</th><th>{{ isZh ? 'C-D振動' : 'C-D Vibration' }}</th><th>{{ isZh ? '氣味差異' : 'Odor Difference' }}</th><th>{{ isZh ? '理論解釋' : 'Theoretical Explanation' }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '乙腈 vs 氘代乙腈' : 'Acetonitrile vs Deuterated acetonitrile' }}</td><td>2940 cm⁻¹</td><td>2140 cm⁻¹</td><td>{{ isZh ? '有（部分人能分辨）' : 'Yes (some can distinguish)' }}</td><td>{{ isZh ? '振動頻率差800 cm⁻¹' : 'Vibration freq. diff. 800 cm⁻¹' }}</td></tr>
            <tr><td>{{ isZh ? '環麝香 vs d15-環麝香' : 'Cyclic musk vs d15-cyclic musk' }}</td><td>2900-3000 cm⁻¹</td><td>2100-2200 cm⁻¹</td><td>{{ isZh ? '有（麝香感減弱）' : 'Yes (musk sensation weakened)' }}</td><td>{{ isZh ? 'C-D振動紅移' : 'C-D vibration red shift' }}</td></tr>
            <tr><td>{{ isZh ? '苯 vs 全氘苯' : 'Benzene vs Perdeuterobenzene' }}</td><td>3080 cm⁻¹</td><td>2292 cm⁻¹</td><td>{{ isZh ? '微弱（爭議中）' : 'Slight (debated)' }}</td><td>{{ isZh ? '芳香C-H伸縮' : 'Aromatic C-H stretching' }}</td></tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '振動理論關鍵波數範圍' : 'Key Wavenumber Ranges in Vibration Theory' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.functionalGroup') }}</th><th>{{ t('ch1.vibrationFreq') }}</th><th>{{ t('ch1.relatedOdor') }}</th><th>{{ t('ch1.hypothesis') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? 'S-H伸縮' : 'S-H stretch' }}</td><td>2550-2600</td><td>{{ isZh ? '硫臭、洋蔥' : 'Sulfurous, onion' }}</td><td>{{ isZh ? '低頻S-H與臭味受體共振' : 'Low-freq S-H resonates with malodor receptor' }}</td></tr>
            <tr><td>{{ isZh ? 'C=O伸縮' : 'C=O stretch' }}</td><td>1680-1750</td><td>{{ isZh ? '果香、甜' : 'Fruity, sweet' }}</td><td>{{ isZh ? '羰基振動觸發甜感受體' : 'Carbonyl vibration triggers sweet receptor' }}</td></tr>
            <tr><td>{{ isZh ? '芳香C-H' : 'Aromatic C-H' }}</td><td>3000-3100</td><td>{{ isZh ? '芳香、苯味' : 'Aromatic, benzene-like' }}</td><td>{{ isZh ? '高頻芳香振動特徵' : 'High-freq aromatic vibration signature' }}</td></tr>
            <tr><td>{{ isZh ? 'C≡N伸縮' : 'C≡N stretch' }}</td><td>2200-2260</td><td>{{ isZh ? '杏仁、苦' : 'Almond, bitter' }}</td><td>{{ isZh ? '腈基獨特頻率' : 'Unique nitrile frequency' }}</td></tr>
            <tr><td>{{ isZh ? 'N-H伸縮' : 'N-H stretch' }}</td><td>3300-3500</td><td>{{ isZh ? '胺臭、魚腥' : 'Amine, fishy' }}</td><td>{{ isZh ? '寬峰特徵' : 'Broad peak signature' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '爭議狀態：' : 'Controversy status: ' }}</strong>{{ isZh ? '振動理論仍有爭議，但' : 'The vibration theory remains controversial, but ' }}<span class="highlight">{{ isZh ? '同位素效應確實存在' : 'isotope effects do exist' }}</span>{{ isZh ? '，說明嗅覺可能不僅僅依賴形狀，還涉及量子層面的電子-振動耦合。' : ', suggesting that olfaction may not rely solely on shape but also involves quantum-level electron-vibration coupling.' }}</p>

        <h3>1.6.13 {{ t('ch1.sec1_6_13') }}</h3>
        <p>{{ isZh ? '某些分子存在可互換的異構形式，' : 'Some molecules exist in interconvertible isomeric forms; ' }}<strong>{{ isZh ? '平衡比例決定氣味' : 'the equilibrium ratio determines the odor' }}</strong>{{ isZh ? '。' : '.' }}</p>

        <h4>{{ isZh ? '🔸 酮-烯醇互變' : '🔸 Keto-Enol Tautomerism' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.ketoneForm') }}</th><th>{{ t('ch1.enolForm') }}</th><th>{{ t('ch1.odor') }}</th><th>{{ t('ch1.keyFactor2') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '丙酮' : 'Acetone' }}</td><td>>99.99</td><td><0.01</td><td>{{ isZh ? '純酮味、溶劑' : 'Pure ketone, solvent' }}</td><td>{{ isZh ? '無穩定烯醇' : 'No stable enol' }}</td></tr>
            <tr><td>{{ isZh ? '乙醛乙酸乙酯' : 'Ethyl acetoacetate' }}</td><td>93</td><td>7</td><td>{{ isZh ? '果香+溶劑' : 'Fruity + solvent' }}</td><td>{{ isZh ? 'β-二羰基穩定烯醇' : 'β-dicarbonyl stabilizes enol' }}</td></tr>
            <tr><td>{{ isZh ? '2,4-戊二酮' : '2,4-Pentanedione' }}</td><td>15</td><td>85</td><td>{{ isZh ? '甜、焦糖' : 'Sweet, caramel' }}</td><td>{{ isZh ? '烯醇內氫鍵極穩定' : 'Enol intramolecular H-bond very stable' }}</td></tr>
            <tr><td>{{ isZh ? '香草醛' : 'Vanillin' }}</td><td>100</td><td>0</td><td>{{ isZh ? '香草' : 'Vanilla' }}</td><td>{{ isZh ? '醛-烯醇不存在' : 'Aldehyde-enol does not exist' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '規律：' : 'Pattern: ' }}</strong>{{ isZh ? '烯醇型帶' : 'The enol form carries ' }}<span class="highlight">{{ isZh ? '羟基+C=C' : 'OH + C=C' }}</span>{{ isZh ? '，氣味通常更' : ', and typically smells more ' }}<strong>{{ isZh ? '甜、柔和' : 'sweet and soft' }}</strong>{{ isZh ? '；酮型更' : '; the keto form is more ' }}<strong>{{ isZh ? '銳利、辛辣' : 'sharp and pungent' }}</strong>{{ isZh ? '。β-二羰基化合物烯醇比例高→甜度增加。' : '. β-dicarbonyl compounds with high enol ratios → increased sweetness.' }}</p>

        <h4>{{ isZh ? '🔸 硫醇-硫醚平衡（罕見）' : '🔸 Thiol-Thioether Equilibrium (Rare)' }}</h4>
        <pre v-if="isZh"><code>大蒜素切割後：
烯丙基硫氰酸酯 ⇌ 烯丙基異硫氰酸酯
                ⇌ 二烯丙基硫化物
                ⇌ 二烯丙基二硫化物
切割後0分鐘：強烈刺激
       3分鐘：辛辣減弱
      10分鐘：甜蒜香出現
      
→ 動態平衡演變導致氣味時間演變</code></pre>
        <pre v-else><code>After cutting allicin:
Allyl thiocyanate ⇌ Allyl isothiocyanate
                  ⇌ Diallyl sulfide
                  ⇌ Diallyl disulfide
0 min after cutting: Intense pungency
       3 min: Pungency fades
      10 min: Sweet garlic aroma appears
      
→ Dynamic equilibrium evolution causes odor evolution over time</code></pre>

        <h3>1.6.14 {{ t('ch1.sec1_6_14') }}</h3>
        <p>{{ isZh ? '胺類、罧酸在不同pH下存在不同電荷形式，' : 'Amines and carboxylic acids exist in different charge states at different pH levels; ' }}<strong>{{ isZh ? '氣味完全不同' : 'the odors are completely different' }}</strong>{{ isZh ? '。' : '.' }}</p>

        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.acidForm') }}</th><th>{{ t('ch1.baseForm') }}</th><th>{{ t('ch1.pka') }}</th><th>{{ t('ch1.odorContrast') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '三甲胺' : 'Trimethylamine' }}</td><td>{{ isZh ? '(CH₃)₃NH⁺（鹽）' : '(CH₃)₃NH⁺ (salt)' }}</td><td>{{ isZh ? '(CH₃)₃N（自由鹼）' : '(CH₃)₃N (free base)' }}</td><td>9.8</td><td>{{ isZh ? '鹽：幾乎無味' : 'Salt: nearly odorless' }}<br><strong>{{ isZh ? '鹼：強烈腐魚臭' : 'Base: strong rotting fish odor' }}</strong></td></tr>
            <tr><td>{{ isZh ? '丁酸' : 'Butyric acid' }}</td><td>CH₃CH₂CH₂COOH</td><td>CH₃CH₂CH₂COO⁻</td><td>4.8</td><td>{{ isZh ? '酸：' : 'Acid: ' }}<strong>{{ isZh ? '汗臭、嘔吐物' : 'Sweat, vomit' }}</strong><br>{{ isZh ? '鹽：微弱乳酪味' : 'Salt: faint cheese' }}</td></tr>
            <tr><td>{{ isZh ? '苯胺' : 'Aniline' }}</td><td>PhNH₃⁺ Cl⁻</td><td>PhNH₂</td><td>4.6</td><td>{{ isZh ? '鹽：魚腥減弱' : 'Salt: fishy weakened' }}<br><strong>{{ isZh ? '鹼：腐臭、魚腥' : 'Base: putrid, fishy' }}</strong></td></tr>
            <tr><td>{{ isZh ? '麩胺酸' : 'Glutamic acid' }}</td><td>H₃N⁺-CH(COOH)-...</td><td>NH₂-CH(COO⁻)-...</td><td>4.2 (COOH)</td><td>{{ isZh ? '鮮味依賴離子狀態' : 'Umami depends on ionic state' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '關鍵洞察：' : 'Key insights:' }}</strong></p>
        <ul>
          <li>{{ isZh ? '胺類：自由鹼極臭（揮發性高）；鹽無味（不掮發、離子態）' : 'Amines: free base is extremely smelly (high volatility); salt form is odorless (non-volatile, ionic)' }}</li>
          <li>{{ isZh ? '罧酸：質子化形式臭（揮發性高）；罧酸根無味（離子態）' : 'Carboxylic acids: protonated form is smelly (high volatility); carboxylate is odorless (ionic)' }}</li>
          <li>{{ isZh ? '鼻黏液pH≈7.4 → ' : 'Nasal mucus pH ≈ 7.4 → ' }}<span class="highlight">{{ isZh ? 'pKa接近7.4的化合物氣味最敏感於pH變化' : 'compounds with pKa near 7.4 are most sensitive to pH changes in odor' }}</span></li>
          <li>{{ isZh ? '調香師利用：加酸固定胺類、加鹼固定酸類' : 'Perfumers exploit this: add acid to fix amines, add base to fix acids' }}</li>
        </ul>

        <h3>1.6.15 {{ t('ch1.sec1_6_15') }}</h3>
        <p>{{ isZh ? '太小或太大的分子都' : 'Molecules that are too small or too large are ' }}<strong>{{ isZh ? '不香' : 'not fragrant' }}</strong>{{ isZh ? '——存在明確的分子量窗口。' : ' — there is a clear molecular weight window.' }}</p>

        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.mwRange') }}</th><th>{{ t('ch1.representative') }}</th><th>{{ t('ch1.volatility') }}</th><th>{{ t('ch1.receptorBinding') }}</th><th>{{ t('ch1.odorStrength') }}</th></tr></thead>
          <tbody>
            <tr><td><50</td><td>{{ isZh ? '甲烷 (16)' : 'Methane (16)' }}<br>{{ isZh ? '乙醇 (46)' : 'Ethanol (46)' }}</td><td>{{ isZh ? '極高' : 'Very high' }}</td><td>{{ isZh ? '分子太小、無法有效結合' : 'Too small to bind effectively' }}</td><td>{{ isZh ? '弱或刺激' : 'Weak or irritating' }}</td></tr>
            <tr><td>50-100</td><td>{{ isZh ? '丙酮 (58)' : 'Acetone (58)' }}<br>{{ isZh ? '己醛 (100)' : 'Hexanal (100)' }}</td><td>{{ isZh ? '高' : 'High' }}</td><td>{{ isZh ? '尺寸適中、結合良好' : 'Moderate size, binds well' }}</td><td><strong>{{ isZh ? '強' : 'Strong' }}</strong></td></tr>
            <tr><td>100-250</td><td>{{ isZh ? '檸檬烯 (136)' : 'Limonene (136)' }}<br>{{ isZh ? '香葉醇 (154)' : 'Geraniol (154)' }}<br>{{ isZh ? '香草醛 (152)' : 'Vanillin (152)' }}</td><td>{{ isZh ? '中-高' : 'Med-high' }}</td><td><strong>{{ isZh ? '最佳匹配' : 'Best match' }}</strong></td><td><strong>{{ isZh ? '極強' : 'Very strong' }}</strong></td></tr>
            <tr><td>250-400</td><td>{{ isZh ? '環十五酮 (238)' : 'Cyclopentadecanone (238)' }}<br>{{ isZh ? '龍涎香醇 (272)' : 'Ambrein (272)' }}</td><td>{{ isZh ? '中' : 'Medium' }}</td><td>{{ isZh ? '大分子、需疏水驅動' : 'Large molecule, needs hydrophobic driving' }}</td><td>{{ isZh ? '中（但持久）' : 'Medium (but long-lasting)' }}</td></tr>
            <tr><td>>400</td><td>{{ isZh ? '長鏈脂肪酸 (>300)' : 'Long-chain fatty acids (>300)' }}<br>{{ isZh ? '角鯊烯 (410)' : 'Squalene (410)' }}</td><td>{{ isZh ? '極低' : 'Very low' }}</td><td>{{ isZh ? '無法掮發至鼻腔' : 'Cannot volatilize to nasal cavity' }}</td><td>{{ isZh ? '幾乎無味' : 'Nearly odorless' }}</td></tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '🔹 蒸氣壓與分子量的關聯' : '🔹 Vapor Pressure vs Molecular Weight Relationship' }}</h4>
        <pre v-if="isZh"><code>Antoine方程簡化：
log₁₀(VP) ≈ A - B·MW^0.5 / T

典型數據（25°C）：
MW=100 → VP ≈ 100 Pa（易掮發）
MW=150 → VP ≈ 10 Pa（適中）
MW=200 → VP ≈ 1 Pa（緩慢）
MW=300 → VP ≈ 0.01 Pa（難掮發）
MW>400 → VP < 0.001 Pa（幾乎固體）

<span class="highlight">黃金MW窗口：100-250</span>（平衡掮發性與受體結合）</code></pre>
        <pre v-else><code>Simplified Antoine equation:
log₁₀(VP) ≈ A - B·MW^0.5 / T

Typical data (25°C):
MW=100 → VP ≈ 100 Pa (easily volatile)
MW=150 → VP ≈ 10 Pa (moderate)
MW=200 → VP ≈ 1 Pa (slow)
MW=300 → VP ≈ 0.01 Pa (hard to volatilize)
MW>400 → VP < 0.001 Pa (nearly solid)

<span class="highlight">Golden MW window: 100-250</span> (balances volatility and receptor binding)</code></pre>

        <h3>1.6.16 {{ t('ch1.sec1_6_16') }}</h3>
        <p>{{ isZh ? '人類OR基因存在' : 'Human OR genes contain ' }}<strong>{{ isZh ? '單核苷酸多態性 (SNPs)' : 'single nucleotide polymorphisms (SNPs)' }}</strong>{{ isZh ? '，導致個體間氣味感知差異。' : ', causing inter-individual differences in odor perception.' }}</p>

        <h4>{{ isZh ? '🔸 經典案例：OR6A2與醛類' : '🔸 Classic Case: OR6A2 and Aldehydes' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.geneticType') }}</th><th>{{ t('ch1.populationFreq') }}</th><th>{{ t('ch1.responseToAldehyde') }}</th><th>{{ t('ch1.cilanderOdor') }}</th><th>{{ t('ch1.molecularBasis') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? 'OR6A2 野生型' : 'OR6A2 wild type' }}</td><td>~86%</td><td>{{ isZh ? '敏感（閾值低）' : 'Sensitive (low threshold)' }}</td><td>{{ isZh ? '清新、柑橘' : 'Fresh, citrusy' }}</td><td>{{ isZh ? '受體正常結合反,2-癶烯醛' : 'Receptor normally binds trans-2-decenal' }}</td></tr>
            <tr><td>{{ isZh ? 'OR6A2 突變型' : 'OR6A2 mutant' }}<br>(rs72921001)</td><td>~14%</td><td>{{ isZh ? '不敏感（閾值高100倍）' : 'Insensitive (threshold 100× higher)' }}</td><td><strong>{{ isZh ? '肥皂、金屬' : 'Soapy, metallic' }}</strong></td><td>{{ isZh ? '受體口袋變形、無法識別醛' : 'Receptor pocket deformed, cannot recognize aldehyde' }}</td></tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '🔸 其他遺傳性氣味盲' : '🔸 Other Genetic Anosmias' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.compound') }}</th><th>{{ t('ch1.relatedOR') }}</th><th>{{ t('ch1.anosmic') }}</th><th>{{ t('ch1.normalOdor') }}</th><th>{{ t('ch1.mutationEffect') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '雄烯酮' : 'Androstenone' }} (Androstenone)</td><td>OR7D4</td><td>~30%</td><td>{{ isZh ? '尿騷/木質' : 'Urinous/woody' }}<br>{{ isZh ? '（雙模態）' : '(bimodal)' }}</td><td>{{ isZh ? '突變→完全無味' : 'Mutation → completely odorless' }}</td></tr>
            <tr><td>{{ isZh ? '異戊酸' : 'Isovaleric acid' }}</td><td>OR51E2</td><td>~10%</td><td>{{ isZh ? '汗臭、乳酪' : 'Sweaty, cheesy' }}</td><td>{{ isZh ? '突變→閾值升高50倍' : 'Mutation → threshold 50× higher' }}</td></tr>
            <tr><td>{{ isZh ? 'β-紫羅蘭酮' : 'β-Ionone' }}</td><td>OR5A1</td><td>~25%</td><td>{{ isZh ? '紫羅蘭、花香' : 'Violet, floral' }}</td><td>{{ isZh ? '突變→氣味盲' : 'Mutation → anosmia' }}</td></tr>
            <tr><td>{{ isZh ? '麝香' : 'Musk' }} (Galaxolide)</td><td>OR5AN1</td><td>~40%</td><td>{{ isZh ? '麝香、粉質' : 'Musky, powdery' }}</td><td>{{ isZh ? '突變→不敏感（爭議）' : 'Mutation → insensitive (debated)' }}</td></tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '🔸 雄烯酮的雙模態感知' : '🔸 Bimodal Perception of Androstenone' }}</h4>
        <pre v-if="isZh"><code>OR7D4基因（位於染色體19p13.2）：

RT/RT基因型（~50%）：
  雄烯酮 → 尿騷、不愉快（閾值 0.2 ppm）
  
RT/WM或WM/WM基因型（~45%）：
  雄烯酮 → 木質、麝香、愉快（閾值 0.5 ppm）
  
特殊突變型（~5%）：
  雄烯酮 → 完全無味（閾值 >100 ppm）

→ <span class="highlight">同一分子、不同基因型 = 完全相反的氣味感受</span></code></pre>
        <pre v-else><code>OR7D4 gene (located at chromosome 19p13.2):

RT/RT genotype (~50%):
  Androstenone → Urinous, unpleasant (threshold 0.2 ppm)
  
RT/WM or WM/WM genotype (~45%):
  Androstenone → Woody, musky, pleasant (threshold 0.5 ppm)
  
Special mutation (~5%):
  Androstenone → Completely odorless (threshold >100 ppm)

→ <span class="highlight">Same molecule, different genotype = completely opposite odor perception</span></code></pre>

        <h4>{{ isZh ? '地理與種族差異' : 'Geographic and Ethnic Differences' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.orGene') }}</th><th>{{ t('ch1.europeanFreq') }}</th><th>{{ t('ch1.eastAsianFreq') }}</th><th>{{ t('ch1.affectedOdor') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? 'OR2J3 (腐臭素)' : 'OR2J3 (Skatole)' }}</td><td>{{ isZh ? '野生型 78%' : 'Wild type 78%' }}</td><td>{{ isZh ? '野生型 92%' : 'Wild type 92%' }}</td><td>{{ isZh ? '糞臭敏感性' : 'Fecal odor sensitivity' }}</td></tr>
            <tr><td>{{ isZh ? 'OR10G4 (香草醛)' : 'OR10G4 (Vanillin)' }}</td><td>{{ isZh ? '突變 12%' : 'Mutant 12%' }}</td><td>{{ isZh ? '突變 38%' : 'Mutant 38%' }}</td><td>{{ isZh ? '香草氣味盲' : 'Vanilla anosmia' }}</td></tr>
            <tr><td>{{ isZh ? 'OR11H7P (汗味)' : 'OR11H7P (Sweat odor)' }}</td><td>{{ isZh ? '功能性 65%' : 'Functional 65%' }}</td><td>{{ isZh ? '功能性 22%' : 'Functional 22%' }}</td><td>{{ isZh ? '體味敏感性' : 'Body odor sensitivity' }}</td></tr>
          </tbody>
        </table>
        <p><strong>{{ isZh ? '文化vs基因：' : 'Culture vs Genes: ' }}</strong>{{ isZh ? '氣味偏好部分來自' : 'Odor preferences partly come from ' }}<span class="highlight">{{ isZh ? '遺傳多態性' : 'genetic polymorphism' }}</span>{{ isZh ? '（硬體不同），部分來自' : ' (different hardware), and partly from ' }}<span class="highlight">{{ isZh ? '文化學習' : 'cultural learning' }}</span>{{ isZh ? '（軟體不同）。' : ' (different software).' }}</p>

        <h3>1.6.17 {{ t('ch1.sec1_6_17') }}</h3>
        
        <h4>{{ isZh ? '🔹 蒸氣壓的溫度依賴' : '🔹 Temperature Dependence of Vapor Pressure' }}</h4>
        <pre v-if="isZh"><code>Clausius-Clapeyron方程：
ln(P₂/P₁) = -ΔHᵥₐₚ/R · (1/T₂ - 1/T₁)

實例：檸檬烯（MW=136, ΔHᵥₐₚ=45 kJ/mol）
  10°C: VP = 95 Pa → 氣味弱
  25°C: VP = 190 Pa → 氣味正常
  40°C: VP = 480 Pa → 氣味極強
  
溫度每升高10°C → 蒸氣壓約增加2倍</code></pre>
        <pre v-else><code>Clausius-Clapeyron equation:
ln(P₂/P₁) = -ΔHᵥₐₚ/R · (1/T₂ - 1/T₁)

Example: Limonene (MW=136, ΔHᵥₐₚ=45 kJ/mol)
  10°C: VP = 95 Pa → Weak odor
  25°C: VP = 190 Pa → Normal odor
  40°C: VP = 480 Pa → Very strong odor
  
Every 10°C rise → vapor pressure roughly doubles</code></pre>

        <h4>{{ isZh ? '🔹 溫度改變氣味質量（非僅強度）' : '🔹 Temperature Changes Odor Quality (Not Just Intensity)' }}</h4>
        <table class="structure-table">
          <thead><tr><th>{{ t('ch1.perfume') }}</th><th>{{ t('ch1.lowTemp') }}</th><th>{{ t('ch1.roomTemp') }}</th><th>{{ t('ch1.bodyTemp') }}</th><th>{{ t('ch1.reason') }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '茉莉精油' : 'Jasmine oil' }}</td><td>{{ isZh ? '綠葉、青草' : 'Green leaf, grassy' }}</td><td>{{ isZh ? '茉莉花香' : 'Jasmine floral' }}</td><td>{{ isZh ? '濃郁、動物性' : 'Rich, animalic' }}</td><td>{{ isZh ? '低沸點vs高沸點成分釋放速率差異' : 'Differential release rates of low- vs high-boiling components' }}</td></tr>
            <tr><td>{{ isZh ? '薄荷醇' : 'Menthol' }}</td><td>{{ isZh ? '清涼感極強' : 'Very strong cooling' }}</td><td>{{ isZh ? '清涼適中' : 'Moderate cooling' }}</td><td>{{ isZh ? '清涼減弱' : 'Cooling weakened' }}</td><td>{{ isZh ? 'TRPM8受體溫度敏感性' : 'TRPM8 receptor temperature sensitivity' }}</td></tr>
            <tr><td>{{ isZh ? '香草醛' : 'Vanillin' }}</td><td>{{ isZh ? '冰淇淋甜' : 'Ice cream sweet' }}</td><td>{{ isZh ? '奶油甜' : 'Creamy sweet' }}</td><td>{{ isZh ? '焦糖甜' : 'Caramel sweet' }}</td><td>{{ isZh ? '嗅覺受體溫度敏感性改變' : 'Olfactory receptor temperature sensitivity change' }}</td></tr>
            <tr><td>{{ isZh ? '麝香' : 'Musk' }}</td><td>{{ isZh ? '幾乎無味' : 'Nearly odorless' }}</td><td>{{ isZh ? '微弱麝香' : 'Faint musk' }}</td><td><strong>{{ isZh ? '強烈麝香' : 'Strong musk' }}</strong></td><td>{{ isZh ? '大分子低掮發性、需體溫加熱' : 'Large molecule, low volatility, needs body heat' }}</td></tr>
          </tbody>
        </table>

        <h4>{{ isZh ? '🔹 受體蛋白的溫度構象變化' : '🔹 Temperature-Dependent Conformational Changes in Receptor Proteins' }}</h4>
        <pre v-if="isZh"><code>GPCR受體隨溫度變化：
低溫（<20°C）：受體剛性增加 → 結合選擇性提高
室溫（25°C）：受體柔性適中 → 平衡態
體溫（37°C）：受體柔性增加 → 結合廣譜性提高、敏感度增

→ <span class="highlight">同一分子在不同溫度下可結合不同受體構象</span> → 氣味質量改變</code></pre>
        <pre v-else><code>GPCR receptor changes with temperature:
Low temp (<20°C): Receptor rigidity increases → Binding selectivity improves
Room temp (25°C): Moderate receptor flexibility → Equilibrium state
Body temp (37°C): Receptor flexibility increases → Broader binding spectrum, increased sensitivity

→ <span class="highlight">The same molecule can bind different receptor conformations at different temperatures</span> → Odor quality changes</code></pre>

        <h2>{{ t('ch1.sectionSummary') }}</h2>
        <div class="summary-box">
          <p>1. <strong>芳香環≠香</strong>：取代基類型、位置、數量決定氣味方向（醛→果香、酚→焦糊、硫→臭）</p>
          <p>2. <strong>碳鏈長度漸變</strong>：C₄-C₁₀醛類為黃金段（果香、花香），>C₁₂無味</p>
          <p>3. <strong>不飽和度雙面性</strong>：共軛增加剛性、辛辣感，但降低閾值敏感性</p>
          <p>4. <strong>官能團階層</strong>：醛>酮>酯>醇>醚（氣味強度）；硫>氮>氧（閾值低）</p>
          <p>5. <strong>環張力效應</strong>：5-6元環穩定、12-16元大環=麝香藥效團</p>
          <p>6. <strong>立體異構關鍵</strong>：順反、對映、手性導致天差地別的氣味</p>
          <p>7. <strong>Log P甜蜜點</strong>：2-4範圍內揮發性與疏水性平衡最佳</p>
          <p>8. <strong>濃度依賴性</strong>：吲哚、硫醇稀釋後可從糞臭變花香</p>
          <p>9. <strong>多官能團協同</strong>：真實香料=各官能團加權+氫鍵+共振+立體效應</p>
          <p>10. <strong>對稱性與複雜度</strong>：不對稱分子氣味更豐富、層次更多</p>
          <p>11. <strong>構象異構</strong>：主要構象決定主要氣味；剛性分子熵損失小、親和力高</p>
          <p>12. <strong>振動理論</strong>：同位素效應暗示嗅覺可能涉及量子振動感測</p>
          <p>13. <strong>互變異構</strong>：酮-烯醇平衡影響甜度；動態平衡導致氣味時間演變</p>
          <p>14. <strong>pH效應</strong>：胺類鹼態極臭、鹽態無味；羧酸質子化形式臭、離子態無味</p>
          <p>15. <strong>分子量窗口</strong>：100-250為黃金範圍，平衡揮發性與受體結合</p>
          <p>16. <strong>受體多態性</strong>：基因突變導致氣味盲或感知差異（香菜肥皂味、雄烯酮雙模態）</p>
          <p>17. <strong>溫度效應</strong>：影響蒸氣壓（強度）和受體構象（質量）</p>
        </div>
      </section>

      <section v-show="activeSection === 'sec-1-7'" class="chapter-section">
        <h2>{{ t('ch1.chapterSummary') }}</h2>
        <p>1. ✅ <strong>{{ isZh ? '嗅覺是分子識別' : 'Olfaction is molecular recognition' }}</strong>{{ isZh ? '：受體-配體對接' : ': receptor-ligand docking' }}</p>
        <p>2. ✅ <strong>{{ isZh ? '立體化學絕對關鍵' : 'Stereochemistry is absolutely critical' }}</strong>{{ isZh ? '：鏡像異構體完全不同氣味' : ': mirror-image isomers have completely different odors' }}</p>
        <p>3. ✅ <strong>{{ isZh ? '電子結構影響氣味' : 'Electronic structure affects odor' }}</strong>{{ isZh ? '：HOMO-LUMO gap' : ': HOMO-LUMO gap' }}</p>
        <p>4. ✅ <strong>{{ isZh ? '分子形狀必須匹配' : 'Molecular shape must match' }}</strong>{{ isZh ? '：體積、柔性、藥效團' : ': volume, flexibility, pharmacophore' }}</p>
        <p>5. ✅ <strong>{{ isZh ? '量化工具可預測' : 'Computational tools can predict' }}</strong>{{ isZh ? '：DFT + 分子對接' : ': DFT + molecular docking' }}</p>
        <p>6. ✅ <strong>{{ isZh ? '結構-氣味關係高度複雜' : 'Structure-odor relationships are highly complex' }}</strong>{{ isZh ? '：官能團、鏈長、環大小、立體化學、極性、濃度全面影響' : ': functional groups, chain length, ring size, stereochemistry, polarity, and concentration all play a role' }}</p>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterLayout from '../components/ChapterLayout.vue'
import MoleculeGallery from '../components/MoleculeGallery.vue'
import { CH1_CARVONE_PAIR, CH1_THIOL_PAIR, CH1_ALDEHYDE_PAIR, CH1_MUSK_FAMILY, CH1_RESONANCE_PAIR, CH1_LIMONENE_PAIR, CH1_MENTHOL_PAIR } from '../data/molecules.js'
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'Chapter1View',
  components: { ChapterLayout, MoleculeGallery },
  setup() {
    const { isZh, isEn, getLabel, t } = useLanguage()
    const homoLumoChart = ref(null)
    const chainLengthChart = ref(null)
    let chart = null
    let chainChart = null

    const sections = computed(() => [
      { id: 'sec-1-1', label: '1.1' },
      { id: 'sec-1-2', label: '1.2' },
      { id: 'sec-1-3', label: '1.3' },
      { id: 'sec-1-4', label: '1.4' },
      { id: 'sec-1-5', label: '1.5' },
      { id: 'sec-1-6', label: '1.6' },
      { id: 'sec-1-7', label: isZh.value ? '總結' : 'Summary' },
    ])

    const carvonePair = CH1_CARVONE_PAIR
    const thiolPair = CH1_THIOL_PAIR
    const aldehydePair = CH1_ALDEHYDE_PAIR
    const muskFamily = CH1_MUSK_FAMILY
    const resonancePair = CH1_RESONANCE_PAIR
    const limonenePair = CH1_LIMONENE_PAIR
    const mentholPair = CH1_MENTHOL_PAIR
    const activeSection = ref(sections[0].id)

    onMounted(() => {
      if (!homoLumoChart.value) return
      chart = new Chart(homoLumoChart.value, {
        type: 'bar',
        data: {
          labels: isZh.value ? ['甲烷', '苯', '檸檬醛', '硫醇'] : ['Methane', 'Benzene', 'Citral', 'Thiol'],
          datasets: [
            { label: 'HOMO (eV)', data: [-12.8, -9.3, -6.2, -5.8], backgroundColor: 'rgba(244,114,182,0.6)', borderColor: '#f472b6', borderWidth: 2 },
            { label: 'LUMO (eV)', data: [3.2, -0.8, -1.1, -0.4], backgroundColor: 'rgba(167,139,250,0.6)', borderColor: '#a78bfa', borderWidth: 2 },
            { label: 'Energy Gap (eV)', data: [16.0, 8.5, 5.1, 5.4], backgroundColor: 'rgba(212,175,55,0.6)', borderColor: '#d4af37', borderWidth: 2, type: 'line', yAxisID: 'y1' }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: isZh.value ? 'HOMO-LUMO 能量與氣味強度關係' : 'HOMO-LUMO Energy & Odor Intensity Relationship', color: '#d4af37', font: { size: 18 } } },
          scales: {
            y: { beginAtZero: false, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: isZh.value ? '軌域能量 (eV)' : 'Orbital Energy (eV)', color: '#cbd5e1' } },
            y1: { position: 'right', beginAtZero: true, ticks: { color: '#94a3b8' }, grid: { drawOnChartArea: false }, title: { display: true, text: 'Energy Gap (eV)', color: '#d4af37' } },
            x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } }
          }
        }
      })

      if (!chainLengthChart.value) return
      chainChart = new Chart(chainLengthChart.value, {
        type: 'line',
        data: {
          labels: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12'],
          datasets: [
            { 
              label: isZh.value ? '嗅覺閾值 (ppb，對數)' : 'Olfactory Threshold (ppb, log)', 
              data: [500, 1.5, 1.0, 0.6, 12, 5, 3, 0.7, 1.0, 0.1, 2, 10].map(v => Math.log10(v)), 
              backgroundColor: 'rgba(34,197,94,0.2)', 
              borderColor: '#22c55e', 
              borderWidth: 3,
              tension: 0.3,
              fill: true,
              pointRadius: 5,
              pointHoverRadius: 8
            }
          ]
        },
        options: {
          responsive: true, 
          maintainAspectRatio: false,
          plugins: { 
            legend: { labels: { color: '#cbd5e1', font: { size: 14 } } }, 
            title: { display: true, text: isZh.value ? '直鏈醛碳數與嗅覺閾值關係（值越低=越香）' : 'Carbon Chain Length vs Olfactory Threshold (lower = more fragrant)', color: '#22c55e', font: { size: 16, weight: 'bold' } },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const realValue = Math.pow(10, context.parsed.y).toFixed(2)
                  return isZh.value ? `閾值: ${realValue} ppb` : `Threshold: ${realValue} ppb`
                }
              }
            }
          },
          scales: {
            y: { 
              beginAtZero: false, 
              ticks: { 
                color: '#94a3b8',
                callback: function(value) {
                  return Math.pow(10, value).toFixed(1) + ' ppb'
                }
              }, 
              grid: { color: 'rgba(51,65,85,0.3)' }, 
              title: { display: true, text: isZh.value ? '嗅覺閾值 (ppb)' : 'Olfactory Threshold (ppb)', color: '#cbd5e1' } 
            },
            x: { 
              ticks: { color: '#94a3b8' }, 
              grid: { color: 'rgba(51,65,85,0.3)' },
              title: { display: true, text: isZh.value ? '碳鏈長度' : 'Carbon Chain Length', color: '#cbd5e1' } 
            }
          }
        }
      })
    })
    watch(activeSection, async () => {
      await nextTick()
      if (chart) chart.resize()
      if (chainChart) chainChart.resize()
    })
    onUnmounted(() => { 
      if (chart) chart.destroy() 
      if (chainChart) chainChart.destroy()
    })

    return { homoLumoChart, chainLengthChart, sections, activeSection, carvonePair, thiolPair, aldehydePair, muskFamily, resonancePair, limonenePair, mentholPair, isZh, isEn, getLabel, t }
  }
}
</script>
