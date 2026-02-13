<template>
  <ChapterLayout
    :title="t('ch7.title')"
    :prev="{ to: '/chapter/6', label: t('ch7.prev') }"
    :next="{ to: '/chapter/8', label: t('ch7.next') }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-7-1'" class="chapter-section">
        <h2 id="sec-7-1">{{ t('ch7.sec7_1') }}</h2>
        <h3>{{ t('ch7.problemDescription') }}</h3>
        <pre v-if="isZh"><code>"一噴就很香，但20分鐘後就聞不太到了，
而且一開始有點刺鼻。"</code></pre>
        <pre v-else><code>"It smells great on first spray, but becomes barely noticeable after 20 minutes,
and it's a bit pungent at the beginning."</code></pre>

        <h3>{{ t('ch7.originalFormula') }}</h3>
        <pre v-if="isZh"><code>乙醇 (90%) 檸檬醛 (3%) 芳樟醇 (4%) 檀香醇 (2%) Iso E Super (1%)</code></pre>
        <pre v-else><code>Ethanol (90%) Citral (3%) Linalool (4%) Santalol (2%) Iso E Super (1%)</code></pre>

        <h3>{{ t('ch7.diagnosticProcess') }}</h3>
        <h4>{{ isZh ? '步驟1：GC-MS分析' : 'Step 1: GC-MS Analysis' }}</h4>
        <pre v-if="isZh"><code>取樣於 0, 15, 30, 60, 120分鐘：
檸檬醛：0→100%  15→35%  30→8%  60→&lt;1%
芳樟醇：0→100%  60→45%  120→18%
檀香醇 &amp; Iso E：變化極慢

關鍵問題：
0-30 min：過於強烈（檸檬醛主導）
30 min-2h：斷層（中香不足）
&gt;2h：基香太弱</code></pre>
        <pre v-else><code>Sampling at 0, 15, 30, 60, 120 minutes:
Citral: 0→100%  15→35%  30→8%  60→&lt;1%
Linalool: 0→100%  60→45%  120→18%
Santalol &amp; Iso E: Very slow change

Key Issues:
0-30 min: Too intense (Citral dominant)
30 min-2h: Gap (insufficient heart notes)
&gt;2h: Base too weak</code></pre>

        <h3>{{ isZh ? '解決方案' : 'Solution' }}</h3>
        <h4>{{ t('ch7.improvedFormula') }}</h4>
        <pre v-if="isZh"><code>乙醇 (87%)
檸檬醛 (1.5%) ← 減半
乙酸苄酯 (2%) ← 新增 buffer
芳樟醇 (3%)
香葉醇 (1.5%) ← 新增中香
乙酸苯乙酯 (1.5%) ← 新增 buffer
檀香醇 (2%)
Iso E Super (1.5%) ← 增加
BHT (0.05%) ← 抗氧化</code></pre>
        <pre v-else><code>Ethanol (87%)
Citral (1.5%) ← Halved
Benzyl acetate (2%) ← New buffer
Linalool (3%)
Geraniol (1.5%) ← New heart note
Phenylethyl acetate (1.5%) ← New buffer
Santalol (2%)
Iso E Super (1.5%) ← Increased
BHT (0.05%) ← Antioxidant</code></pre>

        <h4>{{ isZh ? '實驗驗證' : 'Experimental Verification' }}</h4>
        <table>
          <thead><tr>
            <th>{{ isZh ? '時間' : 'Time' }}</th>
            <th>{{ isZh ? '頂香%' : 'Top%' }}</th>
            <th>{{ isZh ? '中香%' : 'Heart%' }}</th>
            <th>{{ isZh ? '基香%' : 'Base%' }}</th>
            <th>{{ isZh ? '總強度' : 'Total Intensity' }}</th>
          </tr></thead>
          <tbody>
            <tr><td>0 min</td><td>70</td><td>25</td><td>5</td><td>100</td></tr>
            <tr><td>30 min</td><td>40</td><td>50</td><td>10</td><td>95</td></tr>
            <tr><td>2h</td><td>10</td><td>60</td><td>30</td><td>85</td></tr>
            <tr><td>4h</td><td>0</td><td>40</td><td>60</td><td>75</td></tr>
            <tr><td>8h</td><td>0</td><td>10</td><td>90</td><td>60</td></tr>
          </tbody>
        </table>
        <p>{{ isZh ? '✅ 無斷層 ✅ 平滑過渡' : '✅ No gaps ✅ Smooth transition' }}</p>
        <pre v-if="isZh"><code>20位受試者感官評測：
"更柔和"：18人 "留香更久"：17人 "喜歡新版"：16人
統計顯著性：p &lt; 0.01</code></pre>
        <pre v-else><code>Sensory evaluation with 20 subjects:
"Softer": 18 people  "Longer lasting": 17 people  "Prefer new version": 16 people
Statistical significance: p &lt; 0.01</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-2'" class="chapter-section">
        <h2 id="sec-7-2">{{ t('ch7.sec7_2') }}</h2>
        <h3>{{ t('ch7.background') }}</h3>
        <pre v-if="isZh"><code>原配方：
天然玫瑰精油 (5%) - $800/kg
檀香精油 (3%) - $1200/kg
茉莉原精 (2%) - $3000/kg
龍涎香酊 (1%) - $50,000/kg
總成本：~$150/kg</code></pre>
        <pre v-else><code>Original Formula:
Natural Rose Oil (5%) - $800/kg
Sandalwood Oil (3%) - $1200/kg
Jasmine Absolute (2%) - $3000/kg
Ambergris Tincture (1%) - $50,000/kg
Total Cost: ~$150/kg</code></pre>

        <h3>{{ t('ch7.reverseEngineering') }}</h3>
        <table>
          <thead><tr>
            <th>{{ isZh ? '原料' : 'Ingredient' }}</th>
            <th>{{ isZh ? '原成本' : 'Original Cost' }}</th>
            <th>{{ isZh ? '替代品' : 'Substitute' }}</th>
            <th>{{ isZh ? '新成本' : 'New Cost' }}</th>
            <th>{{ isZh ? '節省' : 'Savings' }}</th>
          </tr></thead>
          <tbody>
            <tr>
              <td>{{ isZh ? '玫瑰精油' : 'Rose Oil' }}</td>
              <td>$40/kg{{ isZh ? '配方' : ' formula' }}</td>
              <td>{{ isZh ? '合成玫瑰' : 'Synthetic Rose' }}</td>
              <td>$8/kg</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>{{ isZh ? '檀香精油' : 'Sandalwood Oil' }}</td>
              <td>$36/kg</td>
              <td>Javanol</td>
              <td>$12/kg</td>
              <td>67%</td>
            </tr>
            <tr>
              <td>{{ isZh ? '茉莉原精' : 'Jasmine Absolute' }}</td>
              <td>$60/kg</td>
              <td>{{ isZh ? '合成茉莉基料' : 'Synthetic Jasmine Base' }}</td>
              <td>$15/kg</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>{{ isZh ? '橡苔' : 'Oakmoss' }}</td>
              <td>$6/kg</td>
              <td>Evernyl</td>
              <td>$2/kg</td>
              <td>67%</td>
            </tr>
            <tr>
              <td>{{ isZh ? '龍涎香' : 'Ambergris' }}</td>
              <td>$500/kg</td>
              <td>Ambroxide</td>
              <td>$40/kg</td>
              <td>92%</td>
            </tr>
          </tbody>
        </table>
        <pre v-if="isZh"><code>新配方總成本：~$75/kg（節省50%）

感官驗證（40位專業評香師）：
能區分兩者：24人 (60%)
相似度評分：88.5% (目標 &gt;85%) ✓ 成功</code></pre>
        <pre v-else><code>New formula total cost: ~$75/kg (50% savings)

Sensory verification (40 professional evaluators):
Could distinguish both: 24 people (60%)
Similarity score: 88.5% (target &gt;85%) ✓ Success</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-3'" class="chapter-section">
        <h2 id="sec-7-3">{{ t('ch7.sec7_3') }}</h2>
        <h3>{{ t('ch7.problem') }}</h3>
        <pre v-if="isZh"><code>受限成分：
橡苔萃取 (2%) - IFRA限制：0.1%
佛手柑精油 (3%) - 光毒性，限制15 ppm bergapten
肉桂醛 (1%) - 致敏，限制因應用而異</code></pre>
        <pre v-else><code>Restricted ingredients:
Oakmoss extract (2%) - IFRA limit: 0.1%
Bergamot oil (3%) - Phototoxic, limit 15 ppm bergapten
Cinnamaldehyde (1%) - Sensitizer, limit varies by application</code></pre>

        <h3>{{ t('ch7.strategy') }}</h3>
        <pre v-if="isZh"><code>替代1：橡苔 → Evernyl (1.2%) + Veramoss (1.4%) → IFRA合規
替代2：佛手柑 → FCF版本（Bergapten &lt;1 ppm）
替代3：肉桂醛 → 降至0.15% + α-戊基肉桂醛(0.3%) + 苯甲醛(0.05%)

IFRA致敏物質總和計算：
香葉醇 2.5% + 香茅醇 3.2% + 芳樟醇 1.8% + 檸檬醛 0.8% + 苯甲醇 0.5%
= 8.8% (類別4限制 &lt;10%) ✓ 合規</code></pre>
        <pre v-else><code>Substitution 1: Oakmoss → Evernyl (1.2%) + Veramoss (1.4%) → IFRA compliant
Substitution 2: Bergamot → FCF version (Bergapten &lt;1 ppm)
Substitution 3: Cinnamaldehyde → Reduced to 0.15% + α-amyl cinnamaldehyde (0.3%) + benzaldehyde (0.05%)

IFRA allergen total calculation:
Geraniol 2.5% + Citronellol 3.2% + Linalool 1.8% + Citral 0.8% + Benzyl alcohol 0.5%
= 8.8% (Category 4 limit &lt;10%) ✓ Compliant</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-4'" class="chapter-section">
        <h2 id="sec-7-4">{{ t('ch7.sec7_4') }}</h2>
        <h3>{{ t('ch7.problemDescription') }}</h3>
        <pre v-if="isZh"><code>"產品剛做好很香，但兩個月後變得刺鼻，
顏色也從淡黃變深黃。"</code></pre>
        <pre v-else><code>"The product smells great when freshly made, but becomes pungent after two months,
and the color changed from light yellow to dark yellow."</code></pre>

        <h3>{{ t('ch7.diagnosis') }}</h3>
        <pre v-if="isZh"><code>GC-MS對比：
新鮮：檸檬醛 2.8%, 芳樟醇 3.5%, 雜質 &lt;0.1%
老化：檸檬醛 1.9%↓, 檸檬酸 0.7%↑, 芳樟醇 2.8%↓, 過氧化物檢出

氧化路徑：
檸檬醛 → 檸檬酸 → 刺鼻味
芳樟醇 → 芳樟醇氫過氧化物 → 6,7-環氧芳樟醇（強致敏！）</code></pre>
        <pre v-else><code>GC-MS comparison:
Fresh: Citral 2.8%, Linalool 3.5%, Impurities &lt;0.1%
Aged: Citral 1.9%↓, Citric acid 0.7%↑, Linalool 2.8%↓, Peroxides detected

Oxidation pathways:
Citral → Citric acid → Pungent odor
Linalool → Linalool hydroperoxide → 6,7-Epoxylinalool (strong sensitizer!)</code></pre>

        <h3>{{ isZh ? '解決方案' : 'Solution' }}</h3>
        <pre v-if="isZh"><code>方案1 - 抗氧化劑系統：BHT 0.05% + 生育酚 0.1% + EDTA 0.02% + 檸檬酸 0.01%
方案2 - 包裝優化：鋁瓶 + 氮氣封裝 + 降低頂空（&lt;5%）
方案3 - 配方重組：部分替代為穩定衍生物

結果：
無抗氧化劑：檸檬醛損失35%
有抗氧化劑系統：檸檬醛損失5% ✓
貨架期：18個月 → 36個月</code></pre>
        <pre v-else><code>Solution 1 - Antioxidant system: BHT 0.05% + Tocopherol 0.1% + EDTA 0.02% + Citric acid 0.01%
Solution 2 - Packaging optimization: Aluminum bottle + Nitrogen filling + Reduce headspace (&lt;5%)
Solution 3 - Formula restructuring: Partial substitution with stable derivatives

Results:
Without antioxidants: Citral loss 35%
With antioxidant system: Citral loss 5% ✓
Shelf life: 18 months → 36 months</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-5'" class="chapter-section">
        <h2 id="sec-7-5">{{ t('ch7.sec7_5') }}</h2>
        <pre v-if="isZh"><code>GC-MS全譜分析：檢出87個峰，鑑定62個化合物 (71%)

頂香：檸檬烯 2.5%, 薄荷腦 0.8%, 檸檬醛 1.2%
中香：芳樟醇 3.5%, 香葉醇 2.0%, 薰衣草醇 1.5%
基香：雪松醇 2.5%, Iso E Super 3.0%, 麝香酮 0.5%, Ambroxide 0.8%

初步配方：只達到75%相似度
+ Hedione 0.5% → +8%
+ Calone 0.05% → +5%
+ 法國薰衣草 0.3% → +6%
總相似度：94% ✓

雙盲測試（60位消費者）：
能區分：38人(63%), 無偏好：20人
相似度評分：91.5% → ✓ 成功複製</code></pre>
        <pre v-else><code>GC-MS full spectrum analysis: 87 peaks detected, 62 compounds identified (71%)

Top notes: Limonene 2.5%, Menthol 0.8%, Citral 1.2%
Heart notes: Linalool 3.5%, Geraniol 2.0%, Lavandulol 1.5%
Base notes: Cedrol 2.5%, Iso E Super 3.0%, Muscone 0.5%, Ambroxide 0.8%

Preliminary formula: Only achieved 75% similarity
+ Hedione 0.5% → +8%
+ Calone 0.05% → +5%
+ French Lavender 0.3% → +6%
Total similarity: 94% ✓

Double-blind test (60 consumers):
Could distinguish: 38 people (63%), No preference: 20 people
Similarity score: 91.5% → ✓ Successfully replicated</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-6'" class="chapter-section">
        <h2 id="sec-7-6">{{ t('ch7.sec7_6') }}</h2>
        
        <h3>{{ isZh ? 'IFRA標準概述' : 'IFRA Standards Overview' }}</h3>
        <pre v-if="isZh"><code>IFRA (International Fragrance Association) 國際香料協會
最新修訂版：第50次修訂案 (2023年)
法規基礎：RIFM (Research Institute for Fragrance Materials) 科學研究
目標：保護消費者與工作人員免受致敏、刺激與毒性</code></pre>
        <pre v-else><code>IFRA (International Fragrance Association)
Latest revision: 50th Amendment (2023)
Regulatory basis: RIFM (Research Institute for Fragrance Materials) scientific research
Goal: Protect consumers and workers from sensitization, irritation, and toxicity</code></pre>

        <h3>{{ isZh ? '產品分類系統（11個類別）' : 'Product Classification System (11 Categories)' }}</h3>
        <table>
          <thead><tr>
            <th>{{ isZh ? '類別' : 'Category' }}</th>
            <th>{{ isZh ? '產品類型' : 'Product Type' }}</th>
            <th>{{ isZh ? '皮膚接觸' : 'Skin Contact' }}</th>
            <th>{{ isZh ? '代表產品' : 'Representative Products' }}</th>
          </tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '類別1' : 'Cat. 1' }}</td><td>{{ isZh ? '唇部產品' : 'Lip Products' }}</td><td>{{ isZh ? '高接觸+口腔' : 'High contact + Oral' }}</td><td>{{ isZh ? '口紅、護唇膏' : 'Lipstick, Lip balm' }}</td></tr>
            <tr><td>{{ isZh ? '類別2' : 'Cat. 2' }}</td><td>{{ isZh ? '腋下產品' : 'Underarm Products' }}</td><td>{{ isZh ? '高接觸+敏感' : 'High contact + Sensitive' }}</td><td>{{ isZh ? '止汗劑、體香劑' : 'Antiperspirant, Deodorant' }}</td></tr>
            <tr><td>{{ isZh ? '類別3' : 'Cat. 3' }}</td><td>{{ isZh ? '眼部產品' : 'Eye Products' }}</td><td>{{ isZh ? '高接觸+黏膜' : 'High contact + Mucous membrane' }}</td><td>{{ isZh ? '眼霜、眼影' : 'Eye cream, Eye shadow' }}</td></tr>
            <tr><td>{{ isZh ? '類別4' : 'Cat. 4' }}</td><td>{{ isZh ? '駐留型香水' : 'Fine Fragrance' }}</td><td>{{ isZh ? '高濃度接觸' : 'High concentration contact' }}</td><td>EDP, Parfum</td></tr>
            <tr><td>{{ isZh ? '類別5A' : 'Cat. 5A' }}</td><td>{{ isZh ? '身體乳液' : 'Body Lotion' }}</td><td>{{ isZh ? '大面積+中等' : 'Large area + Medium' }}</td><td>{{ isZh ? '身體乳、面霜' : 'Body lotion, Face cream' }}</td></tr>
            <tr><td>{{ isZh ? '類別5B' : 'Cat. 5B' }}</td><td>{{ isZh ? '臉部乳液' : 'Facial Lotion' }}</td><td>{{ isZh ? '臉部中等' : 'Facial medium' }}</td><td>{{ isZh ? '防曬、BB霜' : 'Sunscreen, BB cream' }}</td></tr>
            <tr><td>{{ isZh ? '類別5C' : 'Cat. 5C' }}</td><td>{{ isZh ? '護手霜' : 'Hand Cream' }}</td><td>{{ isZh ? '手部中等' : 'Hand medium' }}</td><td>{{ isZh ? '護手霜' : 'Hand cream' }}</td></tr>
            <tr><td>{{ isZh ? '類別5D' : 'Cat. 5D' }}</td><td>{{ isZh ? '嬰兒產品' : 'Baby Products' }}</td><td>{{ isZh ? '敏感肌膚' : 'Sensitive skin' }}</td><td>{{ isZh ? '嬰兒油、濕巾' : 'Baby oil, Wipes' }}</td></tr>
            <tr><td>{{ isZh ? '類別6' : 'Cat. 6' }}</td><td>{{ isZh ? '淋洗產品' : 'Rinse-off Products' }}</td><td>{{ isZh ? '低接觸' : 'Low contact' }}</td><td>{{ isZh ? '洗髮精、沐浴露' : 'Shampoo, Shower gel' }}</td></tr>
            <tr><td>{{ isZh ? '類別7A' : 'Cat. 7A' }}</td><td>{{ isZh ? '口腔產品' : 'Oral Products' }}</td><td>{{ isZh ? '黏膜接觸' : 'Mucous membrane contact' }}</td><td>{{ isZh ? '牙膏、漱口水' : 'Toothpaste, Mouthwash' }}</td></tr>
            <tr><td>{{ isZh ? '類別8' : 'Cat. 8' }}</td><td>{{ isZh ? '工業應用' : 'Industrial Use' }}</td><td>{{ isZh ? '特殊環境' : 'Special environment' }}</td><td>{{ isZh ? '蠟燭、芳香劑' : 'Candles, Air fresheners' }}</td></tr>
          </tbody>
        </table>

        <h3>{{ isZh ? '26種必須標示過敏原 (EU化妝品法規1223/2009)' : '26 Mandatory Allergens for Labeling (EU Cosmetics Regulation 1223/2009)' }}</h3>
        <table>
          <thead>
            <tr>
              <th>{{ isZh ? '編號' : 'No.' }}</th>
              <th>{{ isZh ? '成分名稱' : 'Ingredient Name' }}</th>
              <th>CAS{{ isZh ? '號' : ' No.' }}</th>
              <th>INCI{{ isZh ? '名稱' : ' Name' }}</th>
              <th>{{ isZh ? '閾值' : 'Threshold' }}</th>
              <th>{{ isZh ? '常見來源' : 'Common Sources' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>{{ isZh ? '茴香醇' : 'Amyl cinnamal' }}<br>Amyl cinnamal</td><td>122-40-7</td><td>Amyl Cinnamal</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '茉莉、風信子配方' : 'Jasmine, Hyacinth formulas' }}</td></tr>
            <tr><td>2</td><td>{{ isZh ? '茴香醇' : 'Amylcinnamyl alcohol' }}<br>Amylcinnamyl alcohol</td><td>101-85-9</td><td>Amylcinnamyl Alcohol</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '茉莉香基' : 'Jasmine base' }}</td></tr>
            <tr><td>3</td><td>{{ isZh ? '茴香醛' : 'Anisyl alcohol' }}<br>Anisyl alcohol</td><td>105-13-5</td><td>Anise Alcohol</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '茴香、八角精油' : 'Anise, Star anise oil' }}</td></tr>
            <tr><td>4</td><td>{{ isZh ? '苯甲醇' : 'Benzyl alcohol' }}<br>Benzyl alcohol</td><td>100-51-6</td><td>Benzyl Alcohol</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '茉莉、晚香玉精油' : 'Jasmine, Tuberose oil' }}</td></tr>
            <tr><td>5</td><td>{{ isZh ? '苯甲酸苄酯' : 'Benzyl benzoate' }}<br>Benzyl benzoate</td><td>120-51-4</td><td>Benzyl Benzoate</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '秘魯香脂、安息香' : 'Peru balsam, Benzoin' }}</td></tr>
            <tr><td>6</td><td>{{ isZh ? '肉桂醛' : 'Cinnamal' }}<br>Cinnamal</td><td>104-55-2</td><td>Cinnamal</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '肉桂皮精油' : 'Cinnamon bark oil' }}</td></tr>
            <tr><td>7</td><td>{{ isZh ? '肉桂醇' : 'Cinnamyl alcohol' }}<br>Cinnamyl alcohol</td><td>104-54-1</td><td>Cinnamyl Alcohol</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '風信子、肉桂' : 'Hyacinth, Cinnamon' }}</td></tr>
            <tr><td>8</td><td>{{ isZh ? '香茅醇' : 'Citronellol' }}<br>Citronellol</td><td>106-22-9</td><td>Citronellol</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '玫瑰、天竺葵精油' : 'Rose, Geranium oil' }}</td></tr>
            <tr><td>9</td><td>{{ isZh ? '香豆素' : 'Coumarin' }}<br>Coumarin</td><td>91-64-5</td><td>Coumarin</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '零陵香豆、薰衣草' : 'Tonka bean, Lavender' }}</td></tr>
            <tr><td>10</td><td>{{ isZh ? '丁香酚' : 'Eugenol' }}<br>Eugenol</td><td>97-53-0</td><td>Eugenol</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '丁香、肉荳蔻精油' : 'Clove, Nutmeg oil' }}</td></tr>
            <tr><td>11</td><td>{{ isZh ? '香葉醇' : 'Geraniol' }}<br>Geraniol</td><td>106-24-1</td><td>Geraniol</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '玫瑰、香茅精油' : 'Rose, Citronella oil' }}</td></tr>
            <tr><td>12</td><td>{{ isZh ? '羥基香茅醛' : 'Hydroxycitronellal' }}<br>Hydroxycitronellal</td><td>107-75-5</td><td>Hydroxycitronellal</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '鈴蘭香基、合成' : 'Lily of the valley base, Synthetic' }}</td></tr>
            <tr><td>13</td><td>{{ isZh ? '異丁香酚' : 'Isoeugenol' }}<br>Isoeugenol</td><td>97-54-1</td><td>Isoeugenol</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '依蘭精油' : 'Ylang ylang oil' }}</td></tr>
            <tr><td>14</td><td>{{ isZh ? '檸檬醛' : 'Citral' }}<br>Citral</td><td>5392-40-5</td><td>Citral</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '檸檬、檸檬草精油' : 'Lemon, Lemongrass oil' }}</td></tr>
            <tr><td>15</td><td>{{ isZh ? '芳樟醇' : 'Linalool' }}<br>Linalool</td><td>78-70-6</td><td>Linalool</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '薰衣草、芫荽精油' : 'Lavender, Coriander oil' }}</td></tr>
            <tr><td>16</td><td>{{ isZh ? '苯甲酸苄酯' : 'Benzyl cinnamate' }}<br>Benzyl cinnamate</td><td>103-41-3</td><td>Benzyl Cinnamate</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '秘魯香脂' : 'Peru balsam' }}</td></tr>
            <tr><td>17</td><td>{{ isZh ? '水楊酸苄酯' : 'Benzyl salicylate' }}<br>Benzyl salicylate</td><td>118-58-1</td><td>Benzyl Salicylate</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '依蘭、康乃馨配方' : 'Ylang ylang, Carnation formulas' }}</td></tr>
            <tr><td>18</td><td>{{ isZh ? '法呢醇' : 'Farnesol' }}<br>Farnesol</td><td>4602-84-0</td><td>Farnesol</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '橙花、玫瑰精油' : 'Neroli, Rose oil' }}</td></tr>
            <tr><td>19</td><td>{{ isZh ? '己基肉桂醛' : 'Hexyl cinnamal' }}<br>Hexyl cinnamal</td><td>101-86-0</td><td>Hexyl Cinnamal</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '洋甘菊基料' : 'Chamomile base' }}</td></tr>
            <tr><td>20</td><td>{{ isZh ? '丁香花蕾提取物' : 'Oakmoss extract' }}<br>Evernia prunastri</td><td>90028-68-5</td><td>Evernia Prunastri Extract</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '橡木苔原精' : 'Oakmoss absolute' }}</td></tr>
            <tr><td>21</td><td>{{ isZh ? '樹苔提取物' : 'Treemoss extract' }}<br>Evernia furfuracea</td><td>90028-67-4</td><td>Evernia Furfuracea Extract</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '樹苔原精' : 'Treemoss absolute' }}</td></tr>
            <tr><td>22</td><td>{{ isZh ? '丁苯基甲基丙醛' : 'Butylphenyl methylpropional' }}<br>Butylphenyl methylpropional</td><td>80-54-6</td><td>Lilial ({{ isZh ? '已禁用' : 'Banned' }})</td><td>{{ isZh ? '禁用' : 'Banned' }}</td><td>{{ isZh ? '鈴蘭香型 (2022年禁用)' : 'Lily of the valley type (Banned 2022)' }}</td></tr>
            <tr><td>23</td><td>{{ isZh ? 'α-異甲基紫羅蘭酮' : 'Alpha-isomethyl ionone' }}<br>Alpha-isomethyl ionone</td><td>127-51-5</td><td>Alpha-Isomethyl Ionone</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '紫羅蘭、鳶尾香' : 'Violet, Iris fragrance' }}</td></tr>
            <tr><td>24</td><td>{{ isZh ? '檸檬烯' : 'Limonene' }}<br>Limonene</td><td>5989-27-5</td><td>Limonene</td><td>{{ isZh ? '駐留>0.001%' : 'Leave-on>0.001%' }}<br>{{ isZh ? '淋洗>0.01%' : 'Rinse-off>0.01%' }}</td><td>{{ isZh ? '柑橘精油（含量50-95%）' : 'Citrus oils (50-95% content)' }}</td></tr>
            <tr><td>25</td><td>{{ isZh ? '沉香醇' : 'Methyl 2-octynoate' }}<br>Methyl 2-octynoate</td><td>111-12-6</td><td>Methyl 2-Octynoate</td><td>{{ isZh ? '限制使用' : 'Restricted' }}</td><td>{{ isZh ? '紫羅蘭香基' : 'Violet base' }}</td></tr>
            <tr><td>26</td><td>{{ isZh ? '苔蘚萃取物' : 'Moss extracts' }}<br>Moss extracts</td><td>mixture</td><td>Oakmoss/Treemoss Extracts</td><td>{{ isZh ? '類別4限0.1%' : 'Cat. 4 limit 0.1%' }}</td><td>{{ isZh ? '柑苔調香水' : 'Chypre fragrances' }}</td></tr>
          </tbody>
        </table>

        <h3>{{ isZh ? '重點限制成分詳解' : 'Key Restricted Ingredients Details' }}</h3>
        
        <h4>{{ isZh ? '1. 橡木苔 (Oakmoss) - 最嚴格限制' : '1. Oakmoss - Most Strictly Restricted' }}</h4>
        <pre v-if="isZh"><code>IFRA第49修訂案 (2021):
• 類別4 (香水)：≤0.1%
• 其他類別：更低或禁用
• 原因：Atranol和Chloroatranol高致敏性

替代方案：
Evernyl (甲基橡苔醚) - 致敏風險&lt;10%
Veramoss - 合成橡苔基料
Clearwood - 廣藿香衍生物替代</code></pre>
        <pre v-else><code>IFRA 49th Amendment (2021):
• Category 4 (Fine fragrance): ≤0.1%
• Other categories: Lower or banned
• Reason: High sensitization from Atranol and Chloroatranol

Alternatives:
Evernyl (Methyl oakmoss ether) - Sensitization risk &lt;10%
Veramoss - Synthetic oakmoss base
Clearwood - Patchouli derivative substitute</code></pre>

        <h4>{{ isZh ? '2. 檸檬烯 (Limonene) - 氧化致敏' : '2. Limonene - Oxidation Sensitizer' }}</h4>
        <pre v-if="isZh"><code>問題：新鮮無問題，氧化後產生氫過氧化物高致敏
控制策略：
• 添加抗氧化劑 (BHT 0.05-0.1%)
• 氮氣填充包裝
• 使用穩定檸檬烯衍生物
• 縮短貨架期（&lt;24個月）</code></pre>
        <pre v-else><code>Problem: Safe when fresh, produces highly sensitizing hydroperoxides upon oxidation
Control strategies:
• Add antioxidants (BHT 0.05-0.1%)
• Nitrogen-filled packaging
• Use stabilized limonene derivatives
• Shorten shelf life (&lt;24 months)</code></pre>

        <h4>{{ isZh ? '3. 芳樟醇 (Linalool) - 氧化致敏' : '3. Linalool - Oxidation Sensitizer' }}</h4>
        <pre v-if="isZh"><code>氧化路徑：
芳樟醇 + O₂ → 芳樟醇氫過氧化物 (高致敏) 
           → 6,7-環氧芳樟醇 (強致敏！)

控制：
• 抗氧化劑組合：BHT + α-生育酚
• pH調節至弱酸性(pH 5-6)
• 避光包裝</code></pre>
        <pre v-else><code>Oxidation pathway:
Linalool + O₂ → Linalool hydroperoxide (high sensitizer) 
              → 6,7-Epoxylinalool (strong sensitizer!)

Control:
• Antioxidant combination: BHT + α-Tocopherol
• pH adjustment to slightly acidic (pH 5-6)
• Light-proof packaging</code></pre>

        <h4>{{ isZh ? '4. Lilial (BMHCA) - 2022年3月起禁用' : '4. Lilial (BMHCA) - Banned Since March 2022' }}</h4>
        <pre v-if="isZh"><code>危害：生殖毒性
替代方案：
• Florol (羥基香茅醛) - 鈴蘭香
• Majantol - 新型鈴蘭分子
• Muguesia - 鈴蘭基料組合</code></pre>
        <pre v-else><code>Hazard: Reproductive toxicity
Alternatives:
• Florol (Hydroxycitronellal) - Lily of the valley scent
• Majantol - New lily of the valley molecule
• Muguesia - Lily of the valley base combination</code></pre>

        <h3>{{ isZh ? 'IFRA合規計算實例' : 'IFRA Compliance Calculation Example' }}</h3>
        <pre v-if="isZh"><code>配方：女性EDP (屬於類別4)
乙醇 85%
香精 15% (含以下成分：)
  芳樟醇 25% → 最終 3.75%
  檸檬烯 18% → 最終 2.7%
  香葉醇 12% → 最終 1.8%
  香茅醇 10% → 最終 1.5%
  檸檬醛 8% → 最終 1.2%
  香豆素 6% → 最終 0.9%
  苯甲醇 5% → 最終 0.75%

26種過敏原總和：
3.75 + 2.7 + 1.8 + 1.5 + 1.2 + 0.9 + 0.75 = 12.6%

標籤要求 (EU規定)：
所有 &gt;0.001% 的過敏原必須標示
→ 需標示全部7種成分 ✓

IFRA總和限制 (類別4)：
通常無總和限制，但個別成分需符合各自限值
橡木苔 0% ✓ (限制0.1%)
所有成分單獨符合 ✓ 合規</code></pre>
        <pre v-else><code>Formula: Women's EDP (Category 4)
Ethanol 85%
Fragrance 15% (containing:)
  Linalool 25% → Final 3.75%
  Limonene 18% → Final 2.7%
  Geraniol 12% → Final 1.8%
  Citronellol 10% → Final 1.5%
  Citral 8% → Final 1.2%
  Coumarin 6% → Final 0.9%
  Benzyl alcohol 5% → Final 0.75%

26 allergens total:
3.75 + 2.7 + 1.8 + 1.5 + 1.2 + 0.9 + 0.75 = 12.6%

Labeling requirements (EU regulation):
All allergens &gt;0.001% must be declared
→ All 7 ingredients must be listed ✓

IFRA total limit (Category 4):
Generally no total limit, but individual ingredients must comply with respective limits
Oakmoss 0% ✓ (limit 0.1%)
All ingredients individually compliant ✓ Compliant</code></pre>

        <h3>{{ isZh ? '全球法規差異' : 'Global Regulatory Differences' }}</h3>
        <table>
          <thead><tr>
            <th>{{ isZh ? '地區' : 'Region' }}</th>
            <th>{{ isZh ? '法規基礎' : 'Regulatory Basis' }}</th>
            <th>{{ isZh ? '主要差異' : 'Key Differences' }}</th>
          </tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '歐盟EU' : 'EU' }}</td><td>{{ isZh ? '法規1223/2009' : 'Regulation 1223/2009' }}</td><td>{{ isZh ? '最嚴格，26種必標' : 'Strictest, 26 mandatory allergens' }}</td></tr>
            <tr><td>{{ isZh ? '美國FDA' : 'US FDA' }}</td><td>{{ isZh ? '聯邦法規' : 'Federal Regulations' }}</td><td>{{ isZh ? '無強制標示，自願遵循IFRA' : 'No mandatory labeling, voluntary IFRA compliance' }}</td></tr>
            <tr><td>{{ isZh ? '中國NMPA' : 'China NMPA' }}</td><td>{{ isZh ? '化妝品監督條例' : 'Cosmetics Supervision Regulation' }}</td><td>{{ isZh ? '參考EU，部分有差異' : 'References EU, some differences' }}</td></tr>
            <tr><td>{{ isZh ? '日本MHLW' : 'Japan MHLW' }}</td><td>{{ isZh ? '醫藥部外品' : 'Quasi-drugs' }}</td><td>{{ isZh ? '正面清單制度' : 'Positive list system' }}</td></tr>
            <tr><td>{{ isZh ? '韓國MFDS' : 'Korea MFDS' }}</td><td>{{ isZh ? '化妝品法' : 'Cosmetics Act' }}</td><td>{{ isZh ? '類似EU但濃度限制寬鬆' : 'Similar to EU but with looser limits' }}</td></tr>
          </tbody>
        </table>

        <h3>{{ isZh ? '調香師實務檢查清單' : 'Perfumer Practical Checklist' }}</h3>
        <pre v-if="isZh"><code>✓ 所有天然精油的過敏原含量資料（供應商COA）
✓ 合成材料的IFRA證書
✓ 配方中26種過敏原總量計算
✓ 目標產品類別的限量檢查
✓ 禁用成分排除 (Lilial, HICC, Atranol等)
✓ 光毒性材料的Bergapten含量 (&lt;15 ppm)
✓ 抗氧化劑系統是否足夠
✓ 包裝材料與內容物相容性
✓ 貨架壽命測試 (通常要求36個月)
✓ 安全評估報告 (CPSR for EU)</code></pre>
        <pre v-else><code>✓ Allergen content data for all natural essential oils (supplier COA)
✓ IFRA certificates for synthetic materials
✓ Total calculation of 26 allergens in formula
✓ Limit check for target product category
✓ Banned ingredient exclusion (Lilial, HICC, Atranol, etc.)
✓ Bergapten content of phototoxic materials (&lt;15 ppm)
✓ Adequate antioxidant system
✓ Packaging material compatibility with contents
✓ Shelf life testing (typically 36 months required)
✓ Safety assessment report (CPSR for EU)</code></pre>

        <h2>{{ isZh ? 'IFRA合規案例：Chypre香水改造' : 'IFRA Compliance Case: Chypre Fragrance Reformulation' }}</h2>
        <h3>{{ isZh ? '原配方（不合規）' : 'Original Formula (Non-compliant)' }}</h3>
        <pre v-if="isZh"><code>橡木苔原精 3% → 超標30倍！
佛手柑精油 4% → Bergapten 120 ppm (限15 ppm)
肉桂醛 2% → 類別4限制&lt;0.5%</code></pre>
        <pre v-else><code>Oakmoss absolute 3% → 30x over limit!
Bergamot oil 4% → Bergapten 120 ppm (limit 15 ppm)
Cinnamaldehyde 2% → Category 4 limit &lt;0.5%</code></pre>

        <h3>{{ isZh ? '改良配方（合規）' : 'Improved Formula (Compliant)' }}</h3>
        <pre v-if="isZh"><code>Evernyl 1% + Veramoss 1.5% + Clearwood 0.8% → 橡木苔替代 ✓
佛手柑FCF 4% (Bergapten &lt;1 ppm) ✓
肉桂醛 0.15% + α-戊基肉桂醛 0.8% → 降低致敏同時保留香氣 ✓

感官測試：相似度89% (原目標85%) ✓
IFRA合規性：全部通過 ✓
成本影響：+12% (可接受範圍)</code></pre>
        <pre v-else><code>Evernyl 1% + Veramoss 1.5% + Clearwood 0.8% → Oakmoss substitute ✓
Bergamot FCF 4% (Bergapten &lt;1 ppm) ✓
Cinnamaldehyde 0.15% + α-amyl cinnamaldehyde 0.8% → Reduced sensitization while preserving scent ✓

Sensory test: Similarity 89% (target 85%) ✓
IFRA compliance: All passed ✓
Cost impact: +12% (acceptable range)</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-7'" class="chapter-section">
        <h2>{{ isZh ? '通用故障排除檢查表' : 'General Troubleshooting Checklist' }}</h2>
        <h3>{{ isZh ? '氣味問題' : 'Odor Issues' }}</h3>
        <table>
          <thead><tr>
            <th>{{ isZh ? '症狀' : 'Symptom' }}</th>
            <th>{{ isZh ? '可能原因' : 'Possible Cause' }}</th>
            <th>{{ isZh ? '解決方案' : 'Solution' }}</th>
          </tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '一噴即衝' : 'Harsh on first spray' }}</td><td>{{ isZh ? '頂香過多' : 'Excess top notes' }}</td><td>{{ isZh ? '降低低MW成分，加buffer' : 'Reduce low MW components, add buffer' }}</td></tr>
            <tr><td>{{ isZh ? '留香差' : 'Poor longevity' }}</td><td>{{ isZh ? '基香不足' : 'Insufficient base' }}</td><td>{{ isZh ? '增加高MW成分，提高Log P' : 'Increase high MW components, raise Log P' }}</td></tr>
            <tr><td>{{ isZh ? '中段斷層' : 'Mid-stage gap' }}</td><td>{{ isZh ? '缺中香層' : 'Missing heart layer' }}</td><td>{{ isZh ? '加入150-200 Da酯類' : 'Add 150-200 Da esters' }}</td></tr>
            <tr><td>{{ isZh ? '變刺鼻' : 'Becomes pungent' }}</td><td>{{ isZh ? '氧化' : 'Oxidation' }}</td><td>{{ isZh ? '加抗氧化劑，改包裝' : 'Add antioxidants, change packaging' }}</td></tr>
            <tr><td>{{ isZh ? '金屬味' : 'Metallic taste' }}</td><td>{{ isZh ? '金屬污染' : 'Metal contamination' }}</td><td>{{ isZh ? 'EDTA螯合，換容器' : 'EDTA chelation, change container' }}</td></tr>
            <tr><td>{{ isZh ? '太弱' : 'Too weak' }}</td><td>{{ isZh ? '閾值高' : 'High threshold' }}</td><td>{{ isZh ? '增加總濃度或換低閾值成分' : 'Increase total concentration or use low-threshold ingredients' }}</td></tr>
          </tbody>
        </table>

        <h3>{{ isZh ? '穩定性問題' : 'Stability Issues' }}</h3>
        <table>
          <thead><tr>
            <th>{{ isZh ? '症狀' : 'Symptom' }}</th>
            <th>{{ isZh ? '可能原因' : 'Possible Cause' }}</th>
            <th>{{ isZh ? '解決方案' : 'Solution' }}</th>
          </tr></thead>
          <tbody>
            <tr><td>{{ isZh ? '變色' : 'Discoloration' }}</td><td>{{ isZh ? '氧化、光照' : 'Oxidation, Light' }}</td><td>{{ isZh ? '抗氧化劑、遮光瓶' : 'Antioxidants, Opaque bottle' }}</td></tr>
            <tr><td>{{ isZh ? '沉澱' : 'Precipitation' }}</td><td>{{ isZh ? '過飽和' : 'Supersaturation' }}</td><td>{{ isZh ? '調整溶劑、加增溶劑' : 'Adjust solvent, Add solubilizer' }}</td></tr>
            <tr><td>{{ isZh ? '分層' : 'Separation' }}</td><td>{{ isZh ? '不互溶' : 'Immiscibility' }}</td><td>{{ isZh ? '增加共溶劑' : 'Add co-solvent' }}</td></tr>
            <tr><td>{{ isZh ? '變酸' : 'Becomes acidic' }}</td><td>{{ isZh ? '酯水解' : 'Ester hydrolysis' }}</td><td>{{ isZh ? 'pH調節、低溫儲存' : 'pH adjustment, Low-temp storage' }}</td></tr>
          </tbody>
        </table>

        <h2>{{ isZh ? '本章總結' : 'Chapter Summary' }}</h2>
        <p><strong>{{ isZh ? '關鍵技能：' : 'Key Skills:' }}</strong></p>
        <ol>
          <li>{{ isZh ? '系統診斷：GC-MS + 感官評測' : 'Systematic diagnosis: GC-MS + Sensory evaluation' }}</li>
          <li>{{ isZh ? '數據驅動：揮發曲線、優化算法' : 'Data-driven: Volatility curves, Optimization algorithms' }}</li>
          <li>{{ isZh ? '創造性解決：替代、重組、協同' : 'Creative solutions: Substitution, Restructuring, Synergy' }}</li>
          <li>{{ isZh ? '商業意識：成本、法規、市場' : 'Business awareness: Cost, Regulations, Market' }}</li>
          <li>{{ isZh ? '法規遵循：IFRA標準、過敏原管理、全球合規' : 'Regulatory compliance: IFRA standards, Allergen management, Global compliance' }}</li>
        </ol>
        <p><strong>{{ isZh ? '實戰心得：' : 'Practical Insights:' }}</strong> {{ isZh ? '問題往往是多因素的。數據分析 + 經驗判斷，持續迭代改進，記錄每一個決策。IFRA合規不是限制，而是引導創新的框架。' : 'Problems are often multi-factorial. Data analysis + experience-based judgment, continuous iterative improvement, document every decision. IFRA compliance is not a constraint, but a framework guiding innovation.' }}</p>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import { ref, computed } from 'vue'
import ChapterLayout from '../components/ChapterLayout.vue'
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'Chapter7View',
  components: { ChapterLayout },
  setup() {
    const { isZh, isEn, getLabel, t } = useLanguage()

    const sections = computed(() => [
      { id: 'sec-7-1', label: isZh.value ? '案例1' : 'Case 1' },
      { id: 'sec-7-2', label: isZh.value ? '案例2' : 'Case 2' },
      { id: 'sec-7-3', label: isZh.value ? '案例3' : 'Case 3' },
      { id: 'sec-7-4', label: isZh.value ? '案例4' : 'Case 4' },
      { id: 'sec-7-5', label: isZh.value ? '案例5' : 'Case 5' },
      { id: 'sec-7-6', label: isZh.value ? 'IFRA法規' : 'IFRA Regulations' },
      { id: 'sec-7-7', label: isZh.value ? '故障排除' : 'Troubleshooting' }
    ])
    const activeSection = ref('sec-7-1')

    return { sections, activeSection, isZh, isEn, getLabel, t }
  }
}
</script>
