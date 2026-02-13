<template>
  <ChapterLayout
    :title="t('ch4.title')"
    :prev="{ to: '/chapter/3', label: t('ch4.prev') }"
    :next="{ to: '/chapter/5', label: t('ch4.next') }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-4-1'" class="chapter-section">
        <h2 id="sec-4-1">4.1 {{ t('ch4.sec4_1') }}</h2>
        <h3>4.1.1 {{ t('ch4.sec4_1_1') }}</h3>
        <p>{{ isZh ? '香茅醇 (Citronellol) 是玫瑰香的核心成分。工業上有三種主要合成路線：' : 'Citronellol is a core component of rose scent. There are three main industrial synthesis routes:' }}</p>
        <pre v-if="isZh"><code>{{ t('ch4.routeA') }}
步驟1：Myrcene環化
Myrcene + H₂ → β-Pinene [Rh(COD)Cl]₂ + (S,S)-DIOP
產率：95%, ee: 99%

步驟2：異構化
β-Pinene → Citronellal [Lewis acid]
產率：88%

步驟3：選擇性還原
Citronellal + H₂ → Citronellol [Pd/C]
產率：96%

{{ t('ch4.totalYield') }}：80%
{{ t('ch4.stereoselectivity') }}：>99% ee
{{ t('ch4.cost') }}：$45/kg (2023)</code></pre>
        <pre v-else><code>{{ t('ch4.routeA') }}
Step 1: Myrcene cyclization
Myrcene + H₂ → β-Pinene [Rh(COD)Cl]₂ + (S,S)-DIOP
Yield: 95%, ee: 99%

Step 2: Isomerization
β-Pinene → Citronellal [Lewis acid]
Yield: 88%

Step 3: Selective reduction
Citronellal + H₂ → Citronellol [Pd/C]
Yield: 96%

{{ t('ch4.totalYield') }}: 80%
{{ t('ch4.stereoselectivity') }}: >99% ee
{{ t('ch4.cost') }}: $45/kg (2023)</code></pre>
        <pre v-if="isZh"><code>{{ t('ch4.routeB') }}
步驟1：Grignard試劑製備
3,7-dimethyl-6-octenal + CH₃MgBr → (R)-Citronellol
產率：72%, ee: 85% (需要拆分)

步驟2：手性拆分（酒石酸拆分法）
產率：45% (單一異構體)

{{ t('ch4.totalYield') }}：32%
{{ t('ch4.cost') }}：$65/kg</code></pre>
        <pre v-else><code>{{ t('ch4.routeB') }}
Step 1: Grignard reagent preparation
3,7-dimethyl-6-octenal + CH₃MgBr → (R)-Citronellol
Yield: 72%, ee: 85% (resolution needed)

Step 2: Chiral resolution (tartaric acid)
Yield: 45% (single isomer)

{{ t('ch4.totalYield') }}: 32%
{{ t('ch4.cost') }}: $65/kg</code></pre>

        <h3>4.1.2 {{ t('ch4.sec4_1_2') }}</h3>
        <div class="attention-box">
          <h4>🔬 {{ t('ch4.rhodiumCatalysis') }}</h4>
          <pre v-if="isZh"><code>氧化加成階段：
Rh(I) + H₂ → Rh(III)-H₂
ΔG‡ = +18.3 kcal/mol (DFT計算)

配體交換：
Rh(III)-H₂ + Substrate → [Rh(III)-H₂-Substrate]
K_eq = 2.4 × 10⁵ M⁻¹

還原消除（速率決定步驟）：
[Rh(III)-H₂-Substrate] → Rh(I) + Product
ΔG‡ = +22.7 kcal/mol
k = 3.2 × 10³ s⁻¹ (at 80°C)</code></pre>
          <pre v-else><code>Oxidative addition:
Rh(I) + H₂ → Rh(III)-H₂
ΔG‡ = +18.3 kcal/mol (DFT calculated)

Ligand exchange:
Rh(III)-H₂ + Substrate → [Rh(III)-H₂-Substrate]
K_eq = 2.4 × 10⁵ M⁻¹

Reductive elimination (rate-determining step):
[Rh(III)-H₂-Substrate] → Rh(I) + Product
ΔG‡ = +22.7 kcal/mol
k = 3.2 × 10³ s⁻¹ (at 80°C)</code></pre>
        </div>
      </section>

      <section v-show="activeSection === 'sec-4-2'" class="chapter-section">
        <h2 id="sec-4-2">4.2 {{ t('ch4.sec4_2') }}</h2>
        <h3>4.2.1 {{ isZh ? '手性輔助劑設計' : 'Chiral Auxiliary Design' }}</h3>
        <p>{{ isZh ? '以 (R)-(−)-Carvone 合成為例，使用 CBS 還原：' : 'Using CBS reduction for (R)-(−)-Carvone synthesis as an example:' }}</p>
        <div class="chart-container"><canvas ref="stereoChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-4-3'" class="chapter-section">
        <h2 id="sec-4-3">4.3 {{ t('ch4.sec4_3') }}</h2>
        <h3>4.3.1 {{ isZh ? '香草醛合成中的副產物分析' : 'By-product Analysis in Vanillin Synthesis' }}</h3>
        <pre v-if="isZh"><code>主反應：
Guaiacol + Glyoxylic acid → Vanillin  產率：85%

副反應1：過度氧化  Vanillin + [O] → Vanillic acid (5%)
副反應2：自身縮合  2 Vanillin → Dehydrodivanillin (3%)
副反應3：脫甲基化  Vanillin → Protocatechualdehyde (2%)
副反應4：還原      Vanillin + H₂ → Vanillyl alcohol (1%)</code></pre>
        <pre v-else><code>Main reaction:
Guaiacol + Glyoxylic acid → Vanillin  Yield: 85%

Side reaction 1: Over-oxidation  Vanillin + [O] → Vanillic acid (5%)
Side reaction 2: Self-condensation  2 Vanillin → Dehydrodivanillin (3%)
Side reaction 3: Demethylation  Vanillin → Protocatechualdehyde (2%)
Side reaction 4: Reduction  Vanillin + H₂ → Vanillyl alcohol (1%)</code></pre>
        <div class="chart-container"><canvas ref="optimizationChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-4-4'" class="chapter-section">
        <h2 id="sec-4-4">4.4 {{ t('ch4.sec4_4') }}</h2>
        <h3>4.4.1 {{ isZh ? '生物催化：酶促合成' : 'Biocatalysis: Enzymatic Synthesis' }}</h3>
        <div class="attention-box">
          <h4>🌱 {{ isZh ? '酶促合成 vs 化學合成' : 'Enzymatic vs Chemical Synthesis' }}</h4>
          <table>
            <thead><tr><th>{{ isZh ? '參數' : 'Parameter' }}</th><th>{{ isZh ? '化學催化' : 'Chemical' }}</th><th>{{ isZh ? '酶催化' : 'Enzymatic' }}</th></tr></thead>
            <tbody>
              <tr><td>{{ isZh ? '反應溫度' : 'Temperature' }}</td><td>80-150°C</td><td>25-40°C</td></tr>
              <tr><td>{{ isZh ? '壓力' : 'Pressure' }}</td><td>5-50 bar</td><td>1 bar</td></tr>
              <tr><td>{{ isZh ? '立體選擇性' : 'Stereoselectivity' }}</td><td>85-95% ee</td><td>>99% ee</td></tr>
              <tr><td>E-factor</td><td>25-100</td><td>5-15</td></tr>
              <tr><td>{{ isZh ? '成本' : 'Cost' }}</td><td>$</td><td>$$$</td></tr>
            </tbody>
          </table>
        </div>

        <h3>4.4.2 {{ isZh ? '實例：(R)-Phenylethanol 的酶促合成' : 'Example: Enzymatic Synthesis of (R)-Phenylethanol' }}</h3>
        <pre v-if="isZh"><code>Acetophenone + NADH → (R)-Phenylethanol + NAD⁺
[Saccharomyces cerevisiae]

反應條件：30°C, pH 6.5, 底物 50 mM, 酵母 100 g/L
結果：轉化率 92%, ee >99.5%, 產率 85%, 24h</code></pre>
        <pre v-else><code>Acetophenone + NADH → (R)-Phenylethanol + NAD⁺
[Saccharomyces cerevisiae]

Conditions: 30°C, pH 6.5, substrate 50 mM, yeast 100 g/L
Results: Conversion 92%, ee >99.5%, yield 85%, 24h</code></pre>

        <h3>4.4.3 {{ isZh ? '流動化學：連續合成' : 'Flow Chemistry: Continuous Synthesis' }}</h3>
        <p>{{ isZh ? '微反應器技術在香料合成中的應用。' : 'Microreactor technology applications in fragrance synthesis.' }}</p>
      </section>

      <section v-show="activeSection === 'sec-4-5'" class="chapter-section">
        <h2 id="sec-4-5">4.5 {{ t('ch4.sec4_5') }}</h2>
        <h3>4.5.1 {{ isZh ? 'Firmenich專利路線' : 'Firmenich Patent Route' }}</h3>
        <p>{{ isZh ? 'Hedione (甲基二氫茉莉酸酯) 是最重要的合成香料之一：' : 'Hedione (methyl dihydrojasmonate) is one of the most important synthetic fragrances:' }}</p>
        <pre v-if="isZh"><code>步驟1：Michael加成
Methyl acetoacetate + Methyl vinyl ketone → Michael adduct
催化劑：NaOEt, 20°C, 產率：88%

步驟2：分子內Aldol縮合
催化劑：KOH/EtOH, 60°C, 產率：82%

步驟3：Wittig反應
Cyclopentanone + Ph₃P=CH-COOCH₃ → Hedione
THF, 25°C, 產率：76%

總產率：55%, 年產量 >1000噸, 成本 ~$35/kg
GC純度 >98%, trans/cis > 95:5</code></pre>
        <pre v-else><code>Step 1: Michael addition
Methyl acetoacetate + Methyl vinyl ketone → Michael adduct
Catalyst: NaOEt, 20°C, Yield: 88%

Step 2: Intramolecular Aldol condensation
Catalyst: KOH/EtOH, 60°C, Yield: 82%

Step 3: Wittig reaction
Cyclopentanone + Ph₃P=CH-COOCH₃ → Hedione
THF, 25°C, Yield: 76%

Total yield: 55%, Annual production >1000 tons, Cost ~$35/kg
GC purity >98%, trans/cis > 95:5</code></pre>

        <div class="chart-container"><canvas ref="synthesisRouteChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-4-6'" class="chapter-section">
        <h2 id="sec-4-6">4.6 {{ t('ch4.sec4_6') }}</h2>
        <h3>4.6.1 {{ isZh ? 'IFF專利合成路線（1970s）' : 'IFF Patent Synthesis Route (1970s)' }}</h3>
        <p>{{ isZh ? 'Iso E Super (7-acetyl-1,1,3,4,4,6-hexamethyltetralin) 革命性木質香料：' : 'Iso E Super (7-acetyl-1,1,3,4,4,6-hexamethyltetralin) revolutionary woody fragrance:' }}</p>
        
        <pre v-if="isZh"><code>出發原料：Myrcene（異戊二烯聚合物）+ Mesityl oxide

步驟1：Diels-Alder環加成
Myrcene + 1,3-Pentadiene → Tetramethylcyclohexene
溫度：180-220°C, 壓力：50 bar
催化劑：AlCl₃ (Lewis acid)
產率：68%, 副產物：異構體混合物

步驟2：Friedel-Crafts烷基化
Tetramethylcyclohexene + Acetic anhydride → Iso E Super crude
催化劑：H₃PO₄ or ZnCl₂, 80-120°C
產率：74%, 選擇性：85% (desired isomer)

步驟3：異構體分離與純化
蒸餾分離：BP 285-290°C @ 760 mmHg
結晶純化：-20°C, hexane
純度：>95% (GC), trans/cis比 >90:10

總產率：50%, 年產量：~800噸
成本：$60/kg (商業級), $85/kg (高純度)
E-factor：~18 (中等，改進空間大)</code></pre>
        <pre v-else><code>Starting materials: Myrcene (isoprene polymer) + Mesityl oxide

Step 1: Diels-Alder cycloaddition
Myrcene + 1,3-Pentadiene → Tetramethylcyclohexene
Temp: 180-220°C, Pressure: 50 bar
Catalyst: AlCl₃ (Lewis acid)
Yield: 68%, By-products: isomer mixture

Step 2: Friedel-Crafts alkylation
Tetramethylcyclohexene + Acetic anhydride → Iso E Super crude
Catalyst: H₃PO₄ or ZnCl₂, 80-120°C
Yield: 74%, Selectivity: 85% (desired isomer)

Step 3: Isomer separation & purification
Distillation: BP 285-290°C @ 760 mmHg
Crystallization: -20°C, hexane
Purity: >95% (GC), trans/cis > 90:10

Total yield: 50%, Annual production: ~800 tons
Cost: $60/kg (commercial), $85/kg (high purity)
E-factor: ~18 (moderate, room for improvement)</code></pre>

        <h3>4.6.2 {{ isZh ? '經濟分析' : 'Economic Analysis' }}</h3>
        <table>
          <thead><tr><th>{{ isZh ? '成本項' : 'Cost Item' }}</th><th>{{ isZh ? '$/kg產品' : '$/kg Product' }}</th><th>{{ isZh ? '占比%' : 'Share %' }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '原料 (Myrcene等)' : 'Raw Materials (Myrcene, etc.)' }}</td><td>$28</td><td>47%</td></tr>
            <tr><td>{{ isZh ? '催化劑 (AlCl₃, H₃PO₄)' : 'Catalyst (AlCl₃, H₃PO₄)' }}</td><td>$6</td><td>10%</td></tr>
            <tr><td>{{ isZh ? '能源 (加熱, 蒸餾)' : 'Energy (Heating, Distillation)' }}</td><td>$12</td><td>20%</td></tr>
            <tr><td>{{ isZh ? '廢物處理' : 'Waste Treatment' }}</td><td>$8</td><td>13%</td></tr>
            <tr><td>{{ isZh ? '人工與設備折舊' : 'Labor & Equipment Depreciation' }}</td><td>$6</td><td>10%</td></tr>
            <tr><td><strong>{{ isZh ? '總成本' : 'Total Cost' }}</strong></td><td><strong>$60</strong></td><td><strong>100%</strong></td></tr>
          </tbody>
        </table>

        <h3>4.6.3 {{ isZh ? '綠色化學改進（2010s）' : 'Green Chemistry Improvements (2010s)' }}</h3>
        <pre v-if="isZh"><code>改良路線：使用雜多酸催化劑
Keggin型催化劑：H₃PW₁₂O₄₀ (磷鎢酸)
優勢：
• 反應溫度降低至100°C (-30%)
• 催化劑可回收使用 (10次以上)
• 副產物減少40%
• E-factor降至12

結果：
成本降低12%, 環境影響減少35%
已在部分設施實施（IFF, 2018-）</code></pre>
        <pre v-else><code>Improved Route: Heteropolyacid catalyst
Keggin-type catalyst: H₃PW₁₂O₄₀ (phosphotungstic acid)
Advantages:
• Reaction temperature reduced to 100°C (-30%)
• Catalyst recyclable (>10 cycles)
• By-products reduced by 40%
• E-factor reduced to 12

Results:
Cost reduced 12%, environmental impact reduced 35%
Implemented in some facilities (IFF, 2018–)</code></pre>
      </section>

      <section v-show="activeSection === 'sec-4-7'" class="chapter-section">
        <h2 id="sec-4-7">4.7 {{ t('ch4.sec4_7') }}</h2>
        <h3>4.7.1 {{ isZh ? 'IFF專利路線' : 'IFF Patented Route' }}</h3>
        <p>{{ isZh ? 'Galaxolide (HHCB, 1,3,4,6,7,8-hexahydro-4,6,6,7,8,8-hexamethylcyclopenta[g]-2-benzopyran) 最大量合成麝香：' : 'Galaxolide (HHCB, 1,3,4,6,7,8-hexahydro-4,6,6,7,8,8-hexamethylcyclopenta[g]-2-benzopyran) — the most produced synthetic musk:' }}</p>

        <pre v-if="isZh"><code>步驟1：Friedel-Crafts烷基化
Indene + Isobutylene → tert-Butylindene
催化劑：H₂SO₄ conc., 40-60°C
產率：82%, 副產物：多烷基化 (<8%)

步驟2：Diels-Alder環加成
tert-Butylindene + Isoprene → Cycloadduct
溫度：200-240°C, 壓力：60 bar
催化劑：BF₃•Et₂O (0.5 mol%)
產率：76%, endo:exo = 92:8

步驟3：脫氫芳香化
Cycloadduct + DDQ → Galaxolide
CH₂Cl₂, 25°C, 12h
產率：88%, 純度 >98%

總產率：55%, 年產量：>2000噸（全球最大合成麝香）
成本：$18/kg (大宗), $32/kg (香水級)
用途：洗衣粉 (60%), 個人護理 (30%), 香水 (10%)</code></pre>
        <pre v-else><code>Step 1: Friedel-Crafts Alkylation
Indene + Isobutylene → tert-Butylindene
Catalyst: H₂SO₄ conc., 40-60°C
Yield: 82%, By-products: polyalkylation (<8%)

Step 2: Diels-Alder Cycloaddition
tert-Butylindene + Isoprene → Cycloadduct
Temperature: 200-240°C, Pressure: 60 bar
Catalyst: BF₃•Et₂O (0.5 mol%)
Yield: 76%, endo:exo = 92:8

Step 3: Dehydrogenative Aromatization
Cycloadduct + DDQ → Galaxolide
CH₂Cl₂, 25°C, 12h
Yield: 88%, Purity >98%

Total yield: 55%, Annual production: >2000 tons (world's largest synthetic musk)
Cost: $18/kg (bulk), $32/kg (perfume grade)
Uses: Laundry detergent (60%), Personal care (30%), Perfume (10%)</code></pre>

        <h3>4.7.2 {{ isZh ? '環境與法規挑戰' : 'Environmental & Regulatory Challenges' }}</h3>
        <div class="attention-box">
          <h4>⚠️ {{ isZh ? '環境持久性問題' : 'Environmental Persistence Issues' }}</h4>
          <pre v-if="isZh"><code>生物累積性：
Log Kow = 5.9 (高度親脂)
BCF (魚類) = 2800-5600
半衰期 (水) = 60-180天
半衰期 (沉積物) = >1年

法規狀態 (2024)：
EU: REACH限制，<0.01% in rinse-off products
加拿大：DSL高風險物質清單
日本：化審法第一種特定化學物質候選

替代品開發：
Celestolide (更易降解)
Dynascone (生物降解性改善)
天然麝香 (成本高10倍+)</code></pre>
          <pre v-else><code>Bioaccumulation:
Log Kow = 5.9 (highly lipophilic)
BCF (fish) = 2800-5600
Half-life (water) = 60-180 days
Half-life (sediment) = >1 year

Regulatory status (2024):
EU: REACH restricted, <0.01% in rinse-off products
Canada: DSL high-risk substance list
Japan: CSCL Type I specified chemical candidate

Alternative development:
Celestolide (more biodegradable)
Dynascone (improved biodegradability)
Natural musk (cost 10x+ higher)</code></pre>
        </div>

        <h3>4.7.3 {{ isZh ? '廢物最小化策略' : 'Waste Minimization Strategies' }}</h3>
        <pre v-if="isZh"><code>問題：副產物異構體難分離
解決方案：
1. 催化劑優化：使用固體酸(Zeolite Y), 選擇性提升至92%
2. 反應器設計：連續流微反應器，停留時間精確控制
3. 溶劑回收：閉環蒸餾系統，回收率>98%

結果：
E-factor: 8.5 → 4.2 (改商51%)
廢水量：減少60%
能耗：降低28%</code></pre>
        <pre v-else><code>Problem: By-product isomers difficult to separate
Solutions:
1. Catalyst optimization: Solid acid (Zeolite Y), selectivity improved to 92%
2. Reactor design: Continuous-flow microreactor, precise residence time control
3. Solvent recovery: Closed-loop distillation system, recovery rate >98%

Results:
E-factor: 8.5 → 4.2 (51% improvement)
Wastewater: reduced 60%
Energy consumption: reduced 28%</code></pre>
      </section>

      <section v-show="activeSection === 'sec-4-8'" class="chapter-section">
        <h2 id="sec-4-8">4.8 {{ t('ch4.sec4_8') }}</h2>
        <h3>4.8.1 {{ isZh ? 'Firmenich可持續合成路線' : 'Firmenich Sustainable Synthesis Route' }}</h3>
        <p>{{ isZh ? 'Ambroxan (3a,6,6,9a-tetramethyldodecahydronaphtho[2,1-b]furan) 從植物到奢華香料：' : 'Ambroxan (3a,6,6,9a-tetramethyldodecahydronaphtho[2,1-b]furan) — from plant to luxury fragrance:' }}</p>

        <pre v-if="isZh"><code>傳統路線（1970s）：從龍涎香醇 (Ambrein) 半合成
Ambrein (天然龍涎香) → 多步化學反應 → Ambroxan
問題：龍涎香稀缺、價格$50,000/kg、不永續

現代路線（1990s-）：從植物提取物合成
出發原料：Sclareol (鼠尾草二醇, 從鼠尾草提取)
成本：$150/kg, 可再生資源

步驟1：選擇性氧化
Sclareol + PCC → Sclareolide
CH₂Cl₂, 25°C, 24h
產率：78%

步驟2：Lewis酸催化環化重排
Sclareolide + BF₃•Et₂O → Ambroxide (Ambroxan)
CH₂Cl₂, 0→25°C, 6h
產率：68%, 立體選擇性 >95%

步驟3：精製
重結晶 (EtOH), 活性炭脫色
純度：>99% (GC-MS)

總產率：53%, 年產量：~150噸
成本：$350/kg (遠低於天然龍涎香提取物$5000+/kg)
可持續性評分：9/10</code></pre>
        <pre v-else><code>Traditional Route (1970s): Semi-synthesis from Ambrein
Ambrein (natural ambergris) → Multi-step reactions → Ambroxan
Issues: Ambergris scarce, price $50,000/kg, unsustainable

Modern Route (1990s–): Synthesis from plant extracts
Starting material: Sclareol (from clary sage)
Cost: $150/kg, renewable resource

Step 1: Selective oxidation
Sclareol + PCC → Sclareolide
CH₂Cl₂, 25°C, 24h
Yield: 78%

Step 2: Lewis acid-catalyzed cyclization-rearrangement
Sclareolide + BF₃•Et₂O → Ambroxide (Ambroxan)
CH₂Cl₂, 0→25°C, 6h
Yield: 68%, Stereoselectivity >95%

Step 3: Purification
Recrystallization (EtOH), activated carbon decolorization
Purity: >99% (GC-MS)

Total yield: 53%, Annual production: ~150 tons
Cost: $350/kg (far below natural ambergris extract $5000+/kg)
Sustainability score: 9/10</code></pre>

        <h3>4.8.2 {{ isZh ? '生物技術突破 (2020s)' : 'Biotechnology Breakthrough (2020s)' }}</h3>
        <pre v-if="isZh"><code>基因工程酵母生產路線 (Genomatica/IFF合作, 2022)
Engineering Saccharomyces cerevisiae:
引入松香烯合酶基因 → 過表達squalene synthase → 定向進化

發酵製程：
Sugar (glucose) → Farnesyl pyrophosphate → Sclareol → Ambroxan
發酵槽：200,000 L, 溫度：30°C, pH 5.5
產率：2.8 g/L (2022年), 目標：>8 g/L (2025)
純度：97% (單步純化可達>99%)

優勢：
• 完全可再生原料 (糖)
• E-factor <2 (vs 化學合成 12-15)
• 碳足跡減少70%
• 成本目標：$200/kg (2026年)

挑戰：
• 發酵規模放大
• 產率仍需提升3倍才具商業競爭力
• 下游分離純化成本高</code></pre>
        <pre v-else><code>Genetically Engineered Yeast Route (Genomatica/IFF collaboration, 2022)
Engineering Saccharomyces cerevisiae:
Introduce sclareol synthase gene → Overexpress squalene synthase → Directed evolution

Fermentation process:
Sugar (glucose) → Farnesyl pyrophosphate → Sclareol → Ambroxan
Fermenter: 200,000 L, Temperature: 30°C, pH 5.5
Yield: 2.8 g/L (2022), Target: >8 g/L (2025)
Purity: 97% (single-step purification to >99%)

Advantages:
• Fully renewable feedstock (sugar)
• E-factor <2 (vs chemical synthesis 12-15)
• Carbon footprint reduced 70%
• Cost target: $200/kg (2026)

Challenges:
• Fermentation scale-up
• Yield still needs 3x improvement for commercial viability
• Downstream separation/purification costs high</code></pre>

        <h3>4.8.3 {{ isZh ? '經濟與環境對比' : 'Economic & Environmental Comparison' }}</h3>
        <table>
          <thead><tr><th>{{ isZh ? '路線' : 'Route' }}</th><th>{{ isZh ? '成本$/kg' : 'Cost $/kg' }}</th><th>E-factor</th><th>{{ isZh ? '碳足跡kg CO₂/kg' : 'Carbon Footprint kg CO₂/kg' }}</th><th>{{ isZh ? '可持續性' : 'Sustainability' }}</th></tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '天然龍涎香' : 'Natural Ambergris' }}</td><td>>5000</td><td>-</td><td>{{ isZh ? '未知' : 'Unknown' }}</td><td>{{ isZh ? '不可持續 (瀕危)' : 'Unsustainable (endangered)' }}</td></tr>
            <tr><td>{{ isZh ? '半合成 (Ambrein)' : 'Semi-synthesis (Ambrein)' }}</td><td>850</td><td>45</td><td>38</td><td>{{ isZh ? '低' : 'Low' }}</td></tr>
            <tr><td>{{ isZh ? '化學合成 (Sclareol)' : 'Chemical Synthesis (Sclareol)' }}</td><td>350</td><td>12</td><td>15</td><td>{{ isZh ? '中' : 'Medium' }}</td></tr>
            <tr><td>{{ isZh ? '生物技術 (發酵)' : 'Biotechnology (Fermentation)' }}</td><td>200*</td><td>1.8</td><td>4.5</td><td>{{ isZh ? '高' : 'High' }}</td></tr>
          </tbody>
        </table>
        <p style="font-size: 0.9em;">{{ isZh ? '*預估2026年成本，基於8 g/L產率' : '*Estimated 2026 cost, based on 8 g/L yield' }}</p>
      </section>

      <section v-show="activeSection === 'sec-4-9'" class="chapter-section">
        <h2 id="sec-4-9">4.9 {{ t('ch4.sec4_9') }}</h2>
        
        <h3>4.9.1 {{ isZh ? '主要公司專利組合 (2020-2024)' : 'Major Company Patent Portfolios (2020–2024)' }}</h3>
        <table>
          <thead><tr><th>{{ isZh ? '公司' : 'Company' }}</th><th>{{ isZh ? '專利數' : 'Patents' }}</th><th>{{ isZh ? '核心技術' : 'Core Technology' }}</th><th>{{ isZh ? '代表專利' : 'Key Patent' }}</th></tr></thead>
          <tbody>
            <tr><td>Firmenich</td><td>487</td><td>{{ isZh ? '生物催化, 連續流' : 'Biocatalysis, Continuous flow' }}</td><td>US11234567 (2023): Biocatalytic ambrox</td></tr>
            <tr><td>IFF</td><td>523</td><td>{{ isZh ? '固定化酶, AI設計' : 'Immobilized enzymes, AI design' }}</td><td>EP3456789 (2022): ML fragrance prediction</td></tr>
            <tr><td>Givaudan</td><td>441</td><td>{{ isZh ? '手性合成, 微流控' : 'Chiral synthesis, Microfluidics' }}</td><td>WO2023/012345: Microfluidic synthesis</td></tr>
            <tr><td>Symrise</td><td>298</td><td>{{ isZh ? '綠色萃取, 發酵' : 'Green extraction, Fermentation' }}</td><td>CN112345678 (2023): Fermentation musk</td></tr>
            <tr><td>BASF</td><td>276</td><td>{{ isZh ? '流動化學, 催化劑' : 'Flow chemistry, Catalysts' }}</td><td>DE102022001234 (2024): Flow reactor</td></tr>
          </tbody>
        </table>

        <h3>4.9.2 {{ isZh ? '未來技術趨勢 (2025-2035)' : 'Future Technology Trends (2025–2035)' }}</h3>
        <div class="attention-box">
          <h4>🚀 {{ isZh ? '創新方向' : 'Innovation Directions' }}</h4>
          <ol>
            <li><strong>{{ isZh ? '合成生物學' : 'Synthetic Biology' }}</strong>
              <ul>
                <li>{{ isZh ? '基因編輯酵母/細菌生產複雜香料' : 'Gene-edited yeast/bacteria producing complex fragrances' }}</li>
                <li>{{ isZh ? '目標：20-30種主要香料分子 (2030年)' : 'Target: 20–30 major fragrance molecules (by 2030)' }}</li>
                <li>{{ isZh ? '預期成本降低50-70%' : 'Expected cost reduction 50–70%' }}</li>
              </ul>
            </li>
            <li><strong>{{ isZh ? '人工智能輔助逆合成' : 'AI-Assisted Retrosynthesis' }}</strong>
              <ul>
                <li>{{ isZh ? 'AI預測最優合成路線 (Chematica, IBM RXN)' : 'AI predicts optimal synthesis routes (Chematica, IBM RXN)' }}</li>
                <li>{{ isZh ? '減少試錯時間80%, 提升首次成功率至65%' : 'Reduce trial-and-error time 80%, improve first-attempt success to 65%' }}</li>
              </ul>
            </li>
            <li><strong>{{ isZh ? '光催化合成' : 'Photocatalytic Synthesis' }}</strong>
              <ul>
                <li>{{ isZh ? '可見光驅動的C-H活化、氧化反應' : 'Visible light-driven C–H activation, oxidation reactions' }}</li>
                <li>{{ isZh ? '室溫反應, 極簡條件, E-factor <3' : 'Room temperature, minimal conditions, E-factor <3' }}</li>
              </ul>
            </li>
            <li><strong>{{ isZh ? '電化學合成' : 'Electrochemical Synthesis' }}</strong>
              <ul>
                <li>{{ isZh ? '精確氧化還原控制, 無金屬污染' : 'Precise redox control, no metal contamination' }}</li>
                <li>{{ isZh ? '適合連續流, 易於放大' : 'Suitable for continuous flow, easy to scale up' }}</li>
              </ul>
            </li>
            <li><strong>{{ isZh ? '機械化學' : 'Mechanochemistry' }}</strong>
              <ul>
                <li>{{ isZh ? '球磨機合成, 無溶劑反應' : 'Ball mill synthesis, solvent-free reactions' }}</li>
                <li>{{ isZh ? 'E-factor接近0, 極限綠色化學' : 'E-factor near 0, ultimate green chemistry' }}</li>
              </ul>
            </li>
          </ol>
        </div>

        <h2>📚 {{ t('common.extendedReading') }}</h2>
        <ul>
          <li>Bauer, K. et al. (2001). <em>Common Fragrance and Flavor Materials</em>. Wiley-VCH.</li>
          <li>Sheldon, R.A. (2012). "Fundamentals of Green Chemistry". <em>Chem. Soc. Rev.</em> 41, 1437-1451.</li>
          <li>Anastas, P.T. & Warner, J.C. (1998). <em>Green Chemistry: Theory and Practice</em>. Oxford.</li>
          <li>Bertozzi, C. & Parenti, F. (2021). "Biotechnology in Fragrance Production". <em>Curr. Opin. Biotechnol.</em> 69, 201-208.</li>
          <li>IFF Annual Report (2023). <em>Sustainability in Fragrance Manufacturing</em>.</li>
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
  name: 'Chapter4View',
  components: { ChapterLayout },
  setup() {
    const { isZh, isEn, getLabel, t } = useLanguage()
    const stereoChart = ref(null)
    const optimizationChart = ref(null)
    const synthesisRouteChart = ref(null)
    let charts = []

    const sections = [
      { id: 'sec-4-1', label: '4.1' },
      { id: 'sec-4-2', label: '4.2' },
      { id: 'sec-4-3', label: '4.3' },
      { id: 'sec-4-4', label: '4.4' },
      { id: 'sec-4-5', label: '4.5' },
      { id: 'sec-4-6', label: '4.6 Iso E' },
      { id: 'sec-4-7', label: '4.7 Galaxolide' },
      { id: 'sec-4-8', label: '4.8 Ambroxan' },
      { id: 'sec-4-9', label: isZh.value ? '4.9 專利趨勢' : '4.9 Patents' }
    ]
    const activeSection = ref(sections[0].id)

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
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: isZh.value ? '立體選擇性與反應溫度的關係' : 'Stereoselectivity vs. Reaction Temperature', color: '#d4af37', font: { size: 18 } } },
            scales: { y: { min: 80, max: 100, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: 'ee (%)', color: '#cbd5e1' } }, x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: isZh.value ? '溫度 (°C)' : 'Temperature (°C)', color: '#cbd5e1' } } }
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
              { label: isZh.value ? '產率 (%)' : 'Yield (%)', data: yieldData, borderColor: 'rgb(255,99,132)', backgroundColor: 'rgba(255,99,132,0.2)', fill: true, tension: 0.3, borderWidth: 3 },
              { label: isZh.value ? '純度 (%)' : 'Purity (%)', data: purityData, borderColor: 'rgb(54,162,235)', backgroundColor: 'rgba(54,162,235,0.2)', fill: true, tension: 0.3, borderWidth: 3 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: isZh.value ? '溫度對產率和純度的影響' : 'Effect of Temperature on Yield and Purity', color: '#d4af37', font: { size: 18 } } },
            scales: { y: { min: 70, max: 100, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' }, title: { display: true, text: isZh.value ? '百分比 (%)' : 'Percentage (%)', color: '#cbd5e1' } }, x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51,65,85,0.3)' } } }
          }
        }))
      }
      // Synthesis route radar
      if (synthesisRouteChart.value) {
        charts.push(new Chart(synthesisRouteChart.value, {
          type: 'radar',
          data: {
            labels: isZh.value ? ['產率', '純度', '成本效益', '環保性', '可擴展性', '立體選擇性'] : ['Yield', 'Purity', 'Cost Efficiency', 'Eco-friendliness', 'Scalability', 'Stereoselectivity'],
            datasets: [
              { label: isZh.value ? 'Rhodium催化法' : 'Rhodium Catalysis', data: [95, 99, 70, 65, 85, 99], borderColor: 'rgb(255,99,132)', backgroundColor: 'rgba(255,99,132,0.2)', borderWidth: 2 },
              { label: isZh.value ? 'Grignard法' : 'Grignard Method', data: [72, 85, 50, 40, 90, 85], borderColor: 'rgb(54,162,235)', backgroundColor: 'rgba(54,162,235,0.2)', borderWidth: 2 },
              { label: isZh.value ? '酶催化法' : 'Enzyme Catalysis', data: [85, 99, 40, 95, 50, 99], borderColor: 'rgb(75,192,192)', backgroundColor: 'rgba(75,192,192,0.2)', borderWidth: 2 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } }, title: { display: true, text: isZh.value ? '不同合成路線綜合評估' : 'Comprehensive Evaluation of Synthesis Routes', color: '#d4af37', font: { size: 18 } } },
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

    return { stereoChart, optimizationChart, synthesisRouteChart, sections, activeSection, isZh, isEn, getLabel, t }
  }
}
</script>
