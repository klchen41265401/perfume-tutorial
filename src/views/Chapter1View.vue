<template>
  <ChapterLayout
    title="第1章：量子化學與嗅覺受體"
    :prev="null"
    :next="{ to: '/chapter/2', label: '第2章：熱力學' }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-1-1'" class="chapter-section">
        <h2 id="sec-1-1">1.1 嗅覺受體：不是玄學，是蛋白質化學</h2>
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
        <MoleculeGallery title="🔬 手性異構體對比：香芹酮" :molecules="carvonePair" />
        <pre><code>(R)-Carvone: 葛縷子香（麵包香料）
(S)-Carvone: 薄荷香
分子式完全相同：C₁₀H₁₄O
差異僅在：C(6)的立體構型

對接分析：
(R)-Carvone: -8.2 kcal/mol → 強親和力
(S)-Carvone: -5.1 kcal/mol → 弱親和力</code></pre>
        <MoleculeGallery title="🔬 手性異構體對比：檸檬烯" :molecules="limonenePair" />
        <pre><code>(R)-Limonene: 柑橘香
(S)-Limonene: 松脂香
→ 同一分子式，手性決定氣味方向</code></pre>
        <MoleculeGallery title="🔬 手性異構體對比：薄荷醇" :molecules="mentholPair" />
        <pre><code>L-Menthol: 強烈清涼感，天然薄荷主成分
D-Menthol: 清涼感弱，帶苦味
→ 手性中心影響與冷覺受體 TRPM8 的結合</code></pre>
      </section>

      <section v-show="activeSection === 'sec-1-2'" class="chapter-section">
        <h2 id="sec-1-2">1.2 分子軌域理論與氣味</h2>
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
        <div class="chart-container"><canvas ref="homoLumoChart" style="max-height: 320px;"></canvas></div>
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
      </section>

      <section v-show="activeSection === 'sec-1-3'" class="chapter-section">
        <h2 id="sec-1-3">1.3 分子形狀與受體匹配</h2>
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
太小 (< 200 Ų)：結合不穩定
太大 (> 450 Ų)：無法進入</code></pre>
      </section>

      <section v-show="activeSection === 'sec-1-4'" class="chapter-section">
        <h2 id="sec-1-4">1.4 官能基電子效應</h2>
        <MoleculeGallery title="🧪 苯甲醛 vs 茴香醛" :molecules="resonancePair" />
        <pre><code>苯甲醛: HOMO -9.2 eV, 杏仁香
茴香醛: HOMO -8.6 eV, 甜茴香
→ -OCH₃ 通過 +M 效應提高 HOMO</code></pre>
      </section>

      <section v-show="activeSection === 'sec-1-5'" class="chapter-section">
        <h2 id="sec-1-5">1.5 量子化學計算實務</h2>
        <pre><code>推薦方法：B3LYP/6-31G*
適用於：C, H, O, N 香料分子
精度：±5 kJ/mol

使用 ORCA：
! B3LYP 6-31G* OPT FREQ
→ 提取 HOMO, LUMO, Dipole Moment</code></pre>
      </section>

      <section v-show="activeSection === 'sec-1-6'" class="chapter-section">
        <h2 id="sec-1-6">1.6 結構-氣味關係多維度解析</h2>
        
        <h3>1.6.1 芳香環：不只是「香香的」</h3>
        <p>常見誤解：有苯環就是香的。實際上芳香環的氣味特性受取代基類型、位置、數量深度影響。</p>
        
        <h4>🔹 單取代苯 - 取代基決定性格</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>結構</th><th>氣味</th><th>閾值 (ppb)</th><th>解釋</th></tr></thead>
          <tbody>
            <tr><td>苯 (Benzene)</td><td>C₆H₆</td><td>甜、汽油味</td><td>4700</td><td>純芳香性、無官能團</td></tr>
            <tr><td>苯甲醛 (Benzaldehyde)</td><td>Ph-CHO</td><td>杏仁、櫻桃</td><td>350</td><td>醛基：親核、反應性強</td></tr>
            <tr><td>苯乙酮 (Acetophenone)</td><td>Ph-COCH₃</td><td>橙花、山楂</td><td>390</td><td>酮基：較弱親核性</td></tr>
            <tr><td>苯甲醇 (Benzyl alcohol)</td><td>Ph-CH₂OH</td><td>微甜花香</td><td>10000</td><td>醇：極性高、揮發慢</td></tr>
            <tr><td>苯乙醇 (Phenethyl alcohol)</td><td>Ph-CH₂CH₂OH</td><td>玫瑰、蜂蜜</td><td>1000</td><td>碳鏈延長：更柔和</td></tr>
            <tr><td>苯甲酸 (Benzoic acid)</td><td>Ph-COOH</td><td>尿騷、辛辣</td><td>12000</td><td>酸基：強極性、刺激</td></tr>
            <tr><td>苯胺 (Aniline)</td><td>Ph-NH₂</td><td>腐臭、魚腥</td><td>2100</td><td>胺基：鹼性、電子給予</td></tr>
            <tr><td>苯硫酚 (Thiophenol)</td><td>Ph-SH</td><td>強烈腐臭</td><td>0.057</td><td>硫醇：超低閾值、極臭</td></tr>
            <tr><td>甲苯 (Toluene)</td><td>Ph-CH₃</td><td>甜、油漆味</td><td>330</td><td>甲基：+I效應、疏水增</td></tr>
            <tr><td>苯酚 (Phenol)</td><td>Ph-OH</td><td>消毒水、焦糊</td><td>5800</td><td>羥基：共振穩定、酸性</td></tr>
            <tr><td>硝基苯 (Nitrobenzene)</td><td>Ph-NO₂</td><td>苦杏仁、毒性</td><td>4700</td><td>硝基：強拉電子</td></tr>
          </tbody>
        </table>
        <p><strong>規律：</strong>芳香環提供剛性骨架，<span class="highlight">官能團決定氣味方向</span>。醛/酮→果香/花香，醇→柔和，酸/胺→刺激，硫→臭。</p>

        <h4>🔹 多取代苯 - 位置與對稱性的藝術</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>取代模式</th><th>氣味</th><th>關鍵結構因素</th></tr></thead>
          <tbody>
            <tr><td>鄰苯二甲醛 (o-Phthalaldehyde)</td><td>1,2-二CHO</td><td>刺鼻、青草</td><td>鄰位：立體擁擠、共軛受限</td></tr>
            <tr><td>間苯二甲醛 (m-Phthalaldehyde)</td><td>1,3-二CHO</td><td>較柔和花香</td><td>間位：平衡的偶極</td></tr>
            <tr><td>對苯二甲醛 (p-Phthalaldehyde)</td><td>1,4-二CHO</td><td>強烈花香</td><td>對位：最大共軛、對稱</td></tr>
            <tr><td>茴香醛 (p-Anisaldehyde)</td><td>4-OCH₃-Ph-CHO</td><td>甜茴香、山楂</td><td>對位給電子增強醛基反應性</td></tr>
            <tr><td>香草醛 (Vanillin)</td><td>3-OCH₃-4-OH-Ph-CHO</td><td>香草、奶油</td><td>鄰位雙取代：氫鍵穩定</td></tr>
            <tr><td>丁香酚 (Eugenol)</td><td>4-OH-3-OCH₃-Ph-烯丙基</td><td>丁香、辛辣</td><td>烯丙基延展共軛系統</td></tr>
            <tr><td>肉桂醛 (Cinnamaldehyde)</td><td>Ph-CH=CH-CHO</td><td>肉桂、溫暖</td><td>共軛雙鍵延長、剛性增</td></tr>
            <tr><td>對甲酚 (p-Cresol)</td><td>4-CH₃-Ph-OH</td><td>糞臭、馬廄</td><td>對位甲基增強酚的負面氣味</td></tr>
          </tbody>
        </table>
        <p><strong>位置效應：</strong>對位取代→對稱性高、共軛最強；鄰位→立體效應、氫鍵可能；間位→中間狀態。</p>

        <h4>🔹 稠環芳香烴 - 尺寸與揮發性</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>環數</th><th>MW</th><th>氣味</th><th>揮發性</th></tr></thead>
          <tbody>
            <tr><td>萘 (Naphthalene)</td><td>2環</td><td>128</td><td>樟腦、防蟲丸</td><td>高 (VP=10 Pa)</td></tr>
            <tr><td>蒽 (Anthracene)</td><td>3環</td><td>178</td><td>微弱、焦香</td><td>低 (VP=0.001 Pa)</td></tr>
            <tr><td>菲 (Phenanthrene)</td><td>3環</td><td>178</td><td>幾乎無味</td><td>極低</td></tr>
            <tr><td>芘 (Pyrene)</td><td>4環</td><td>202</td><td>無味</td><td>negligible</td></tr>
          </tbody>
        </table>
        <p><strong>規律：</strong>環數增加 → MW↑、VP↓、氣味消失。<span class="highlight">3環以上難以揮發至鼻腔</span>。</p>

        <h3>1.6.2 碳鏈長度的漸進效應</h3>
        <p>「碳鏈越長越油」——但真相更細微。</p>

        <h4>🔸 直鏈醛 (C₁-C₁₂)</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>式</th><th>氣味描述</th><th>嗅覺閾值</th><th>用途</th></tr></thead>
          <tbody>
            <tr><td>甲醛 C₁</td><td>HCHO</td><td>刺激、福馬林</td><td>500 ppb</td><td>防腐劑（非香料）</td></tr>
            <tr><td>乙醛 C₂</td><td>CH₃CHO</td><td>刺鼻、果香</td><td>1.5 ppb</td><td>合成中間體</td></tr>
            <tr><td>丙醛 C₃</td><td>C₂H₅CHO</td><td>酒精發酵、辛辣</td><td>1.0 ppb</td><td>食用香精</td></tr>
            <tr><td>丁醛 C₄</td><td>C₃H₇CHO</td><td>麥芽、可可</td><td>0.6 ppb</td><td>巧克力香</td></tr>
            <tr><td>戊醛 C₅</td><td>C₄H₉CHO</td><td>杏仁、麵包</td><td>12 ppb</td><td>烘焙香</td></tr>
            <tr><td>己醛 C₆</td><td>C₅H₁₁CHO</td><td>青草、蘋果</td><td>5 ppb</td><td>綠葉香、前調</td></tr>
            <tr><td>庚醛 C₇</td><td>C₆H₁₃CHO</td><td>柑橘皮、脂肪</td><td>3 ppb</td><td>柑橘調</td></tr>
            <tr><td>辛醛 C₈</td><td>C₇H₁₅CHO</td><td>柑橘、金屬</td><td>0.7 ppb</td><td>柑橘型香水</td></tr>
            <tr><td>壬醛 C₉</td><td>C₈H₁₇CHO</td><td>玫瑰、柑橘</td><td>1.0 ppb</td><td>調香主力</td></tr>
            <tr><td>癸醛 C₁₀</td><td>C₉H₁₉CHO</td><td>橙皮、肥皂</td><td>0.1 ppb</td><td>醛香調核心</td></tr>
            <tr><td>十一醛 C₁₁</td><td>C₁₀H₂₁CHO</td><td>蠟質、花香</td><td>2 ppb</td><td>粉質香</td></tr>
            <tr><td>十二醛 C₁₂</td><td>C₁₁H₂₃CHO</td><td>金屬、蠟</td><td>10 ppb</td><td>定香、基調</td></tr>
          </tbody>
        </table>
        <p><strong>趨勢分析：</strong></p>
        <ul>
          <li>C₁-C₃：刺激性強、閾值高、不適用</li>
          <li>C₄-C₆：果香、青草、閾值低（<strong>最香的區域</strong>）</li>
          <li>C₇-C₁₀：柑橘、花香、調香黃金段</li>
          <li>C₁₁-C₁₂：粉質、蠟質、揮發慢</li>
          <li>>C₁₂：幾乎無味、固體、無揮發性</li>
        </ul>
        <div class="chart-container"><canvas ref="chainLengthChart" style="max-height: 350px;"></canvas></div>

        <h4>🔸 直鏈醇 vs 醛 - 官能團拉鋸戰</h4>
        <table class="structure-table">
          <thead><tr><th>碳數</th><th>醛 (R-CHO)</th><th>醇 (R-CH₂OH)</th><th>氣味對比</th></tr></thead>
          <tbody>
            <tr><td>C₆</td><td>己醛：青草、蘋果</td><td>己醇：草本、青綠</td><td>醛更銳利、果香；醇更柔和</td></tr>
            <tr><td>C₈</td><td>辛醛：柑橘、金屬</td><td>辛醇：柑橘皮、脂肪</td><td>醛更亮、醇更圓潤</td></tr>
            <tr><td>C₁₀</td><td>癸醛：橙皮、肥皂</td><td>癸醇：脂肪、橙花</td><td>醛極強、醇溫和10倍</td></tr>
          </tbody>
        </table>
        <p><strong>關鍵：</strong>醛(-CHO)的親核性、反應性遠高於醇(-OH)，<span class="highlight">醛類閾值普遍低100-1000倍</span>。</p>

        <h4>🔸 支鏈醛 - 立體效應改變特性</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>結構</th><th>氣味</th><th>vs 直鏈</th></tr></thead>
          <tbody>
            <tr><td>正戊醛</td><td>CH₃(CH₂)₃CHO</td><td>杏仁、麵包</td><td>基準</td></tr>
            <tr><td>異戊醛</td><td>(CH₃)₂CHCH₂CHO</td><td>巧克力、青蘋果</td><td>更甜、更果香</td></tr>
            <tr><td>特戊醛</td><td>(CH₃)₃CCHO</td><td>強烈刺激</td><td>立體擁擠、揮發極快</td></tr>
            <tr><td>正辛醛</td><td>CH₃(CH₂)₆CHO</td><td>柑橘、金屬</td><td>基準</td></tr>
            <tr><td>3,5,5-三甲基己醛</td><td>(CH₃)₃CCH₂CH(CH₃)CH₂CHO</td><td>清新、水生（Calone類似）</td><td>多支鏈→特殊氣味</td></tr>
          </tbody>
        </table>
        <p><strong>支鏈效應：</strong>α位支鏈→立體擁擠、揮發加速；β/γ位支鏈→形狀改變、受體識別改變。</p>

        <h3>1.6.3 不飽和度：從單鍵到共軛</h3>
        
        <h4>🔹 C₆醛系列：飽和 vs 不飽和</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>結構</th><th>不飽和度</th><th>氣味</th><th>閾值</th></tr></thead>
          <tbody>
            <tr><td>正己醛</td><td>CH₃(CH₂)₄CHO</td><td>0（飽和）</td><td>青草、蘋果</td><td>5 ppb</td></tr>
            <tr><td>反-2-己烯醛</td><td>CH₃CH₂CH=CHCHO</td><td>1（C=C）</td><td>辛辣、綠葉</td><td>17 ppb</td></tr>
            <tr><td>2,4-己二烯醛</td><td>CH₃CH=CHCH=CHCHO</td><td>2（共軛）</td><td>油炸、堅果</td><td>78 ppb</td></tr>
          </tbody>
        </table>
        <p><strong>共軛效應：</strong>C=C-C=O共軛 → 電子離域 → HOMO↑、反應性↓ → <span class="highlight">氣味變辛辣、閾值提高</span>。</p>

        <h4>🔹 萜烯類：環+雙鍵的複雜性</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>結構特徵</th><th>氣味</th><th>應用</th></tr></thead>
          <tbody>
            <tr><td>α-蒎烯</td><td>雙環[3.1.1]、1個C=C</td><td>松木、清新</td><td>松針香、清潔劑</td></tr>
            <tr><td>β-蒎烯</td><td>雙環[3.1.1]、1個C=C</td><td>松木、乾燥</td><td>木香調</td></tr>
            <tr><td>檸檬烯</td><td>單環、2個C=C</td><td>柑橘、檸檬</td><td>柑橘型香水主力</td></tr>
            <tr><td>月桂烯</td><td>鏈狀、3個C=C</td><td>木質、草本</td><td>啤酒花香</td></tr>
            <tr><td>α-水芹烯</td><td>雙環[2.2.1]、2個C=C</td><td>檸檬、綠葉</td><td>清新柑橘</td></tr>
            <tr><td>γ-萜品烯</td><td>單環、2個C=C（共軛）</td><td>柑橘、松木</td><td>檸檬香</td></tr>
          </tbody>
        </table>
        <p><strong>萜烯規律：</strong>單環+2個C=C → 柑橘香；雙環+1個C=C → 松木香；<span class="highlight">環張力和雙鍵位置決定細微差異</span>。</p>

        <h3>1.6.4 官能團系統性分析</h3>

        <h4>🔸 含氧官能團階梯</h4>
        <table class="structure-table">
          <thead><tr><th>官能團</th><th>代表物</th><th>氧化態</th><th>氣味特徵</th><th>典型閾值</th></tr></thead>
          <tbody>
            <tr><td>醚 (-O-)</td><td>二乙醚</td><td>-2</td><td>甜、麻醉性</td><td>高（弱香）</td></tr>
            <tr><td>醇 (-OH)</td><td>乙醇</td><td>-2</td><td>酒精、刺激</td><td>中等</td></tr>
            <tr><td>醛 (-CHO)</td><td>己醛</td><td>0</td><td>果香、青草</td><td>低（強香）</td></tr>
            <tr><td>酮 (-CO-)</td><td>丙酮</td><td>0</td><td>溶劑、甜</td><td>中等</td></tr>
            <tr><td>羧酸 (-COOH)</td><td>丁酸</td><td>+2</td><td>酸臭、汗味</td><td>高（刺激）</td></tr>
            <tr><td>酯 (-COO-)</td><td>乙酸乙酯</td><td>+2（酯化）</td><td>果香、甜</td><td>低-中</td></tr>
          </tbody>
        </table>
        <p><strong>氧化態規律：</strong>醛（0價）最香；酸（+2價）刺激；醇（-2價）柔和；<span class="highlight">酯化=去酸性+增甜度</span>。</p>

        <h4>🔸 酯類：酸+醇的排列組合香氣圖譜</h4>
        <p>酯 = R-COO-R'，<strong>酸鏈長度</strong>和<strong>醇鏈長度</strong>雙重影響。</p>
        <table class="structure-table">
          <thead><tr><th>酯</th><th>酸部分</th><th>醇部分</th><th>氣味</th><th>用途</th></tr></thead>
          <tbody>
            <tr><td>甲酸乙酯</td><td>C₁酸</td><td>C₂醇</td><td>朗姆酒</td><td>食用香精</td></tr>
            <tr><td>乙酸乙酯</td><td>C₂酸</td><td>C₂醇</td><td>鳳梨、香蕉</td><td>果香調</td></tr>
            <tr><td>乙酸丁酯</td><td>C₂酸</td><td>C₄醇</td><td>蘋果、梨</td><td>果香調</td></tr>
            <tr><td>乙酸己酯</td><td>C₂酸</td><td>C₆醇</td><td>梨、香蕉</td><td>食用香精</td></tr>
            <tr><td>乙酸苯乙酯</td><td>C₂酸</td><td>Ph-C₂醇</td><td>蜂蜜、玫瑰</td><td>花香調核心</td></tr>
            <tr><td>丁酸乙酯</td><td>C₄酸</td><td>C₂醇</td><td>鳳梨、熱帶</td><td>果香調</td></tr>
            <tr><td>己酸烯丙酯</td><td>C₆酸</td><td>烯丙醇</td><td>鳳梨、甜</td><td>熱帶果香</td></tr>
            <tr><td>水楊酸甲酯</td><td>鄰羥基苯甲酸</td><td>甲醇</td><td>冬青、薄荷</td><td>清涼香</td></tr>
            <tr><td>苯甲酸苄酯</td><td>苯甲酸</td><td>苄醇</td><td>依蘭、茉莉</td><td>花香調、定香</td></tr>
          </tbody>
        </table>
        <p><strong>酯化規律：</strong>短鏈酯（C₂-C₄）→果香；中鏈酯（C₅-C₈）→花果；長鏈酯（>C₁₀）→蠟質、脂肪；<span class="highlight">芳香酯→花香+定香</span>。</p>

        <h4>🔸 含氮官能團：從花香到腐臭</h4>
        <table class="structure-table">
          <thead><tr><th>官能團</th><th>代表物</th><th>氣味</th><th>特性</th></tr></thead>
          <tbody>
            <tr><td>腈 (-C≡N)</td><td>苯乙腈</td><td>杏仁、苦</td><td>低毒性、穩定</td></tr>
            <tr><td>亞胺 (=N-)</td><td>苯甲醛肟</td><td>花香、化學</td><td>親核性強</td></tr>
            <tr><td>伯胺 (-NH₂)</td><td>苯胺</td><td>腐臭、魚腥</td><td>鹼性、極臭</td></tr>
            <tr><td>仲胺 (-NH-)</td><td>二甲胺</td><td>魚腥、尿騷</td><td>鹼性、揮發高</td></tr>
            <tr><td>叔胺 (-N<)</td><td>三甲胺</td><td>腐魚、極臭</td><td>鹼性最強</td></tr>
            <tr><td>吲哚 (雜環N)</td><td>吲哚</td><td>低濃度：花香<br>高濃度：糞臭</td><td><strong>濃度依賴性</strong></td></tr>
            <tr><td>吡啶 (雜環N)</td><td>吡啶</td><td>魚腥、刺激</td><td>芳香性、鹼性</td></tr>
            <tr><td>硝基 (-NO₂)</td><td>硝基苯</td><td>苦杏仁、毒性</td><td>強拉電子</td></tr>
          </tbody>
        </table>
        <p><strong>含氮規律：</strong>胺類普遍臭（鹼性+揮發性）；吲哚<span class="highlight">雙面性</span>（稀釋=花香、濃縮=糞臭）；腈類相對溫和。</p>

        <h4>🔸 含硫官能團：臭味的王者</h4>
        <table class="structure-table">
          <thead><tr><th>官能團</th><th>代表物</th><th>閾值</th><th>氣味</th><th>應用</th></tr></thead>
          <tbody>
            <tr><td>硫醇 (-SH)</td><td>乙硫醇</td><td>0.47 ppb</td><td>臭蛋、瓦斯</td><td>瓦斯警示劑</td></tr>
            <tr><td>硫醚 (-S-)</td><td>二甲硫</td><td>1.0 ppb</td><td>甘藍菜</td><td>蔬菜香精</td></tr>
            <tr><td>二硫化物 (-S-S-)</td><td>二烯丙基二硫</td><td>0.005 ppb</td><td>大蒜、洋蔥</td><td>食用香精</td></tr>
            <tr><td>三硫化物 (-S-S-S-)</td><td>二烯丙基三硫</td><td>0.0001 ppb</td><td>極強蒜味</td><td>食用香精</td></tr>
            <tr><td>噻吩 (雜環S)</td><td>2-甲基噻吩</td><td>0.007 ppb</td><td>洋蔥、肉香</td><td>熟肉香精</td></tr>
            <tr><td>亞碸 (-SO-)</td><td>大蒜素</td><td>0.1 ppb</td><td>大蒜</td><td>天然調味</td></tr>
          </tbody>
        </table>
        <p><strong>硫化物規律：</strong>閾值<span class="highlight">超低（ppb級以下）</span>；S-S鍵越多越強；但<strong>極稀釋時可產生肉香、烘焙香</strong>（濃度依賴）。</p>

        <h3>1.6.5 環狀結構 vs 鏈狀結構</h3>

        <h4>🔹 環大小的影響</h4>
        <table class="structure-table">
          <thead><tr><th>環大小</th><th>代表物</th><th>氣味</th><th>張力</th></tr></thead>
          <tbody>
            <tr><td>3元環</td><td>環氧乙烷</td><td>甜、醚味</td><td>極高（115 kJ/mol）</td></tr>
            <tr><td>4元環</td><td>環丁酮</td><td>刺激、甜</td><td>高（110 kJ/mol）</td></tr>
            <tr><td>5元環</td><td>環戊酮</td><td>薄荷、樟腦</td><td>低（6.5 kJ/mol）</td></tr>
            <tr><td>6元環（椅式）</td><td>環己醇</td><td>樟腦、藥用</td><td>無（0 kJ/mol）<strong>*最穩定</strong></td></tr>
            <tr><td>7元環</td><td>環庚酮</td><td>木質、辛辣</td><td>低（26 kJ/mol）</td></tr>
            <tr><td>8-11元環</td><td>環十酮</td><td>辛辣中帶花香</td><td>中等</td></tr>
            <tr><td>12-16元大環</td><td>環十五內酯</td><td>麝香</td><td>低（柔性）</td></tr>
            <tr><td>>17元環</td><td>巨環內酯</td><td>微弱、蠟質</td><td>熵效應主導</td></tr>
          </tbody>
        </table>
        <p><strong>環張力規律：</strong>5-6元環最穩定、氣味最溫和；3-4元環張力高、反應性強；<span class="highlight">12-16元大環柔性好、符合麝香藥效團</span>。</p>

        <h4>🔹 麝香家族：環大小決定氣味質量</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>環大小</th><th>結構</th><th>氣味強度</th><th>氣味質量</th></tr></thead>
          <tbody>
            <tr><td>環十二酮</td><td>12元</td><td>環+酮</td><td>弱</td><td>木質帶麝香</td></tr>
            <tr><td>環十三酮</td><td>13元</td><td>環+酮</td><td>中</td><td>麝香、粉質</td></tr>
            <tr><td>環十四酮</td><td>14元</td><td>環+酮</td><td>中</td><td>麝香</td></tr>
            <tr><td>環十五酮 (Muscone)</td><td>15元</td><td>環+酮+甲基</td><td><strong>強</strong></td><td><strong>純麝香、動物性</strong></td></tr>
            <tr><td>環十六酮</td><td>16元</td><td>環+酮</td><td>中</td><td>麝香、纖細</td></tr>
            <tr><td>環十七酮</td><td>17元</td><td>環+酮</td><td>弱</td><td>麝香漸失</td></tr>
          </tbody>
        </table>
        <p><strong>黃金環徑：</strong>15元環（環十五酮）= <span class="highlight">天然麝香主成分</span>，直徑10-12 Å，完美匹配受體口袋。</p>

        <h3>1.6.6 立體異構：不只是鏡像那麼簡單</h3>

        <h4>🔸 順反異構 (Cis/Trans)</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>異構體</th><th>氣味</th><th>差異原因</th></tr></thead>
          <tbody>
            <tr><td rowspan="2">玫瑰醚</td><td>順式-玫瑰醚</td><td>弱玫瑰香</td><td rowspan="2">C=C構型改變分子形狀<br>→ 受體匹配度變化</td></tr>
            <tr><td>反式-玫瑰醚</td><td><strong>強烈玫瑰香</strong></td></tr>
            <tr><td rowspan="2">茉莉酮</td><td>順式-茉莉酮</td><td>濃郁茉莉</td><td rowspan="2">反式張力大、<br>順式柔和自然</td></tr>
            <tr><td>反式-茉莉酮</td><td>木質茉莉</td></tr>
            <tr><td rowspan="2">2-己烯醛</td><td>順式</td><td>青蘋果</td><td rowspan="2">形狀差異影響<br>醛基接觸角度</td></tr>
            <tr><td><strong>反式</strong></td><td><strong>辛辣綠葉</strong></td></tr>
          </tbody>
        </table>

        <h4>🔸 對映異構 (R/S Enantiomers)</h4>
        <p>已在1.1.3討論過香芹酮、檸檬烯、薄荷醇，此處補充更多案例：</p>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>R-異構體</th><th>S-異構體</th><th>閾值對比</th></tr></thead>
          <tbody>
            <tr><td>α-松油醇</td><td>松木、乾燥</td><td>薰衣草、花香</td><td>閾值相近</td></tr>
            <tr><td>芳樟醇</td><td>薰衣草、花香</td><td>木質、辛辣</td><td>S型閾值高2倍</td></tr>
            <tr><td>檸檬醛</td><td>(R)-橘醛: 辛辣</td><td>(S)-檸檬醛: 甜檸檬</td><td>氣味完全不同</td></tr>
            <tr><td>玫瑰氧化物</td><td>玫瑰、金屬</td><td>天竺葵、綠葉</td><td>R型強度高10倍</td></tr>
          </tbody>
        </table>
        <p><strong>手性效應：</strong>鏡像異構體=<span class="highlight">分子形狀鏡射</span> → 受體口袋匹配度完全不同 → <strong>氣味可以天差地別</strong>。</p>

        <h3>1.6.7 極性與水溶性的影響</h3>
        <table class="structure-table">
          <thead><tr><th>Log P範圍</th><th>極性</th><th>揮發性</th><th>氣味特徵</th><th>代表物</th></tr></thead>
          <tbody>
            <tr><td><0</td><td>親水</td><td>低</td><td>難以揮發、弱香或無味</td><td>葡萄糖、胺基酸</td></tr>
            <tr><td>0-2</td><td>中等</td><td>高</td><td>刺激、酒精感</td><td>乙醇、丙酮</td></tr>
            <tr><td>2-4</td><td>疏水</td><td>中-高</td><td><strong>最佳香氣區</strong></td><td>檸檬烯、芳樟醇</td></tr>
            <tr><td>4-6</td><td>疏水</td><td>中</td><td>花香、木質</td><td>香豆素、香草醛</td></tr>
            <tr><td>>6</td><td>極疏水</td><td>低</td><td>油脂、蠟質</td><td>長鏈脂肪醇</td></tr>
          </tbody>
        </table>
        <p><strong>Log P甜蜜點：</strong>2-4 = <span class="highlight">平衡疏水性（過鼻黏液）與揮發性（達嗅覺上皮）</span>。</p>

        <h3>1.6.8 濃度依賴性氣味轉換</h3>
        <p>部分分子的氣味隨濃度劇烈改變（非線性關係）：</p>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>超低濃度（<1 ppm）</th><th>低濃度（1-100 ppm）</th><th>高濃度（>1000 ppm）</th></tr></thead>
          <tbody>
            <tr><td>吲哚</td><td>茉莉、橙花</td><td>花香明顯</td><td><strong>糞臭、難聞</strong></td></tr>
            <tr><td>糞臭素</td><td>花香、果香</td><td>茉莉、橙花</td><td><strong>糞便臭</strong></td></tr>
            <tr><td>硫醇</td><td>肉香、烘焙</td><td>洋蔥、蒜香</td><td><strong>腐臭、瓦斯</strong></td></tr>
            <tr><td>二甲基吲哚</td><td>無明顯</td><td>動物香、麝香</td><td><strong>糞臭</strong></td></tr>
          </tbody>
        </table>
        <p><strong>稀釋悖論：</strong><span class="highlight">臭味物質極稀釋後可變花香</span>（受體飽和度、閾值曲線非線性）。調香師利用此特性創造複雜香氣。</p>

        <h3>1.6.9 多官能團協同效應</h3>
        <p>真實香料分子往往含多個官能團，氣味=各官能團加權+協同效應。</p>
        
        <h4>案例：香草醛 (Vanillin)</h4>
        <pre><code>結構：4-羥基-3-甲氧基苯甲醛
    Ph-CHO: 提供杏仁香基底
  + 4-OH: 增加甜度、降低揮發性
  + 3-OCH₃: 給電子、增強醛的親核性
  + 鄰位雙取代: 分子內氫鍵穩定
  ────────────────────────
  = 香草、奶油、甜美、持久</code></pre>

        <h4>案例：丁香酚 (Eugenol)</h4>
        <pre><code>結構：4-羥基-3-甲氧基烯丙基苯
    Ph骨架: 剛性、芳香性
  + 4-OH: 酚香、刺激
  + 3-OCH₃: 甜度
  + 烯丙基: 延長共軛、增加辛辣
  ────────────────────────
  = 丁香、辛辣、藥用、溫暖</code></pre>

        <h4>案例：玫瑰醇 (Citronellol)</h4>
        <pre><code>結構：3,7-二甲基-6-辛烯-1-醇
    C₁₀鏈: 疏水骨架（Log P≈3.5）
  + 末端-OH: 親水頭、極性
  + C=C（非共軛）: 柔性、構象多樣
  + 兩個甲基: 支鏈、立體識別
  ────────────────────────
  = 玫瑰、柑橘、清新、優雅</code></pre>

        <h3>1.6.10 分子對稱性與氣味複雜度</h3>
        <table class="structure-table">
          <thead><tr><th>對稱性</th><th>代表物</th><th>氣味複雜度</th><th>描述</th></tr></thead>
          <tbody>
            <tr><td>高對稱（C₂ᵥ, D₆ₕ）</td><td>苯、萘</td><td>低</td><td>簡單、單一調性</td></tr>
            <tr><td>中對稱（Cs）</td><td>對甲酚</td><td>中</td><td>穩定、可預測</td></tr>
            <tr><td>低對稱/不對稱</td><td>香芹酮、檸檬烯</td><td>高</td><td><strong>複雜、層次豐富</strong></td></tr>
            <tr><td>完全不對稱（手性）</td><td>薄荷醇</td><td>極高</td><td>對映體氣味差異大</td></tr>
          </tbody>
        </table>
        <p><strong>對稱性悖論：</strong>分子越不對稱 → <span class="highlight">構象越多 → 受體識別更複雜 → 氣味層次更豐富</span>。</p>

        <h3>1.6.11 構象異構 - 旋轉的藝術</h3>
        <p>單鍵可自由旋轉產生不同構象（conformers），能量最低構象主導氣味。</p>

        <h4>🔹 丁香酚的構象分析</h4>
        <pre><code>丁香酚側鏈旋轉：
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

        <h4>🔹 正丁醇 vs 異丁醇 - 構象柔性差異</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>結構</th><th>可能構象數</th><th>氣味</th><th>閾值</th></tr></thead>
          <tbody>
            <tr><td>正丁醇</td><td>CH₃CH₂CH₂CH₂OH</td><td>9種（3³旋轉異構）</td><td>藥用、溶劑</td><td>500 ppb</td></tr>
            <tr><td>異丁醇</td><td>(CH₃)₂CHCH₂OH</td><td>3種（支鏈限制）</td><td>酒精、發酵</td><td>40 ppb</td></tr>
            <tr><td>特丁醇</td><td>(CH₃)₃COH</td><td>1種（完全剛性）</td><td>樟腦、藥用</td><td>350 ppb</td></tr>
          </tbody>
        </table>
        <p><strong>構象熵效應：</strong>柔性分子（多構象）結合受體時<span class="highlight">熵損失大</span>（ΔS < 0），降低親和力；剛性分子熵損失小，結合更有利（異丁醇閾值低於正丁醇）。</p>

        <h3>1.6.12 分子振動理論 - 嗅覺的量子假說</h3>
        <p>傳統「形狀理論」外，Luca Turin提出<strong>振動理論</strong>：受體通過<span class="highlight">非彈性電子隧穿</span>感測分子振動頻率。</p>

        <h4>證據：同位素效應</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>C-H振動</th><th>C-D振動</th><th>氣味差異</th><th>理論解釋</th></tr></thead>
          <tbody>
            <tr><td>乙腈 vs 氘代乙腈</td><td>2940 cm⁻¹</td><td>2140 cm⁻¹</td><td>有（部分人能分辨）</td><td>振動頻率差800 cm⁻¹</td></tr>
            <tr><td>環麝香 vs d15-環麝香</td><td>2900-3000 cm⁻¹</td><td>2100-2200 cm⁻¹</td><td>有（麝香感減弱）</td><td>C-D振動紅移</td></tr>
            <tr><td>苯 vs 全氘苯</td><td>3080 cm⁻¹</td><td>2292 cm⁻¹</td><td>微弱（爭議中）</td><td>芳香C-H伸縮</td></tr>
          </tbody>
        </table>

        <h4>振動理論關鍵波數範圍</h4>
        <table class="structure-table">
          <thead><tr><th>官能團</th><th>振動頻率 (cm⁻¹)</th><th>相關氣味</th><th>假說</th></tr></thead>
          <tbody>
            <tr><td>S-H伸縮</td><td>2550-2600</td><td>硫臭、洋蔥</td><td>低頻S-H與臭味受體共振</td></tr>
            <tr><td>C=O伸縮</td><td>1680-1750</td><td>果香、甜</td><td>羰基振動觸發甜感受體</td></tr>
            <tr><td>芳香C-H</td><td>3000-3100</td><td>芳香、苯味</td><td>高頻芳香振動特徵</td></tr>
            <tr><td>C≡N伸縮</td><td>2200-2260</td><td>杏仁、苦</td><td>腈基獨特頻率</td></tr>
            <tr><td>N-H伸縮</td><td>3300-3500</td><td>胺臭、魚腥</td><td>寬峰特徵</td></tr>
          </tbody>
        </table>
        <p><strong>爭議狀態：</strong>振動理論仍有爭議，但<span class="highlight">同位素效應確實存在</span>，說明嗅覺可能不僅僅依賴形狀，還涉及量子層面的電子-振動耦合。</p>

        <h3>1.6.13 互變異構 - 動態平衡的氣味</h3>
        <p>某些分子存在可互換的異構形式，<strong>平衡比例決定氣味</strong>。</p>

        <h4>🔸 酮-烯醇互變</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>酮型%</th><th>烯醇型%</th><th>氣味</th><th>關鍵因素</th></tr></thead>
          <tbody>
            <tr><td>丙酮</td><td>>99.99</td><td><0.01</td><td>純酮味、溶劑</td><td>無穩定烯醇</td></tr>
            <tr><td>乙醯乙酸乙酯</td><td>93</td><td>7</td><td>果香+溶劑</td><td>β-二羰基穩定烯醇</td></tr>
            <tr><td>2,4-戊二酮</td><td>15</td><td>85</td><td>甜、焦糖</td><td>烯醇內氫鍵極穩定</td></tr>
            <tr><td>香草醛</td><td>100</td><td>0</td><td>香草</td><td>醛-烯醇不存在</td></tr>
          </tbody>
        </table>
        <p><strong>規律：</strong>烯醇型帶<span class="highlight">羥基+C=C</span>，氣味通常更<strong>甜、柔和</strong>；酮型更<strong>銳利、辛辣</strong>。β-二羰基化合物烯醇比例高→甜度增加。</p>

        <h4>🔸 硫醇-硫醚平衡（罕見）</h4>
        <pre><code>大蒜素切割後：
烯丙基硫氰酸酯 ⇌ 烯丙基異硫氰酸酯
                ⇌ 二烯丙基硫化物
                ⇌ 二烯丙基二硫化物
切割後0分鐘：強烈刺激
       3分鐘：辛辣減弱
      10分鐘：甜蒜香出現
      
→ 動態平衡演變導致氣味時間演變</code></pre>

        <h3>1.6.14 pH與電荷狀態 - 質子化的氣味巨變</h3>
        <p>胺類、羧酸在不同pH下存在不同電荷形式，<strong>氣味完全不同</strong>。</p>

        <table class="structure-table">
          <thead><tr><th>化合物</th><th>酸性形式</th><th>鹼性形式</th><th>pKa</th><th>氣味對比</th></tr></thead>
          <tbody>
            <tr><td>三甲胺</td><td>(CH₃)₃NH⁺（鹽）</td><td>(CH₃)₃N（自由鹼）</td><td>9.8</td><td>鹽：幾乎無味<br><strong>鹼：強烈腐魚臭</strong></td></tr>
            <tr><td>丁酸</td><td>CH₃CH₂CH₂COOH</td><td>CH₃CH₂CH₂COO⁻</td><td>4.8</td><td>酸：<strong>汗臭、嘔吐物</strong><br>鹽：微弱乳酪味</td></tr>
            <tr><td>苯胺</td><td>PhNH₃⁺ Cl⁻</td><td>PhNH₂</td><td>4.6</td><td>鹽：魚腥減弱<br><strong>鹼：腐臭、魚腥</strong></td></tr>
            <tr><td>麩胺酸</td><td>H₃N⁺-CH(COOH)-...</td><td>NH₂-CH(COO⁻)-...</td><td>4.2 (COOH)</td><td>鮮味依賴離子狀態</td></tr>
          </tbody>
        </table>
        <p><strong>關鍵洞察：</strong></p>
        <ul>
          <li>胺類：自由鹼極臭（揮發性高）；鹽無味（不揮發、離子態）</li>
          <li>羧酸：質子化形式臭（揮發性高）；羧酸根無味（離子態）</li>
          <li>鼻黏液pH≈7.4 → <span class="highlight">pKa接近7.4的化合物氣味最敏感於pH變化</span></li>
          <li>調香師利用：加酸固定胺類、加鹼固定酸類</li>
        </ul>

        <h3>1.6.15 分子大小的邊界效應</h3>
        <p>太小或太大的分子都<strong>不香</strong>——存在明確的分子量窗口。</p>

        <table class="structure-table">
          <thead><tr><th>MW範圍</th><th>代表物</th><th>揮發性</th><th>受體結合</th><th>氣味強度</th></tr></thead>
          <tbody>
            <tr><td><50</td><td>甲烷 (16)<br>乙醇 (46)</td><td>極高</td><td>分子太小、無法有效結合</td><td>弱或刺激</td></tr>
            <tr><td>50-100</td><td>丙酮 (58)<br>己醛 (100)</td><td>高</td><td>尺寸適中、結合良好</td><td><strong>強</strong></td></tr>
            <tr><td>100-250</td><td>檸檬烯 (136)<br>香葉醇 (154)<br>香草醛 (152)</td><td>中-高</td><td><strong>最佳匹配</strong></td><td><strong>極強</strong></td></tr>
            <tr><td>250-400</td><td>環十五酮 (238)<br>龍涎香醇 (272)</td><td>中</td><td>大分子、需疏水驅動</td><td>中（但持久）</td></tr>
            <tr><td>>400</td><td>長鏈脂肪酸 (>300)<br>角鯊烯 (410)</td><td>極低</td><td>無法揮發至鼻腔</td><td>幾乎無味</td></tr>
          </tbody>
        </table>

        <h4>🔹 蒸氣壓與分子量的關聯</h4>
        <pre><code>Antoine方程簡化：
log₁₀(VP) ≈ A - B·MW^0.5 / T

典型數據（25°C）：
MW=100 → VP ≈ 100 Pa（易揮發）
MW=150 → VP ≈ 10 Pa（適中）
MW=200 → VP ≈ 1 Pa（緩慢）
MW=300 → VP ≈ 0.01 Pa（難揮發）
MW>400 → VP < 0.001 Pa（幾乎固體）

<span class="highlight">黃金MW窗口：100-250</span>（平衡揮發性與受體結合）</code></pre>

        <h3>1.6.16 受體多態性 - 為什麼有人覺得香菜像肥皂</h3>
        <p>人類OR基因存在<strong>單核苷酸多態性 (SNPs)</strong>，導致個體間氣味感知差異。</p>

        <h4>🔸 經典案例：OR6A2與醛類</h4>
        <table class="structure-table">
          <thead><tr><th>基因型</th><th>人群比例</th><th>對C₆-C₁₀醛的反應</th><th>香菜氣味</th><th>分子基礎</th></tr></thead>
          <tbody>
            <tr><td>OR6A2 野生型</td><td>~86%</td><td>敏感（閾值低）</td><td>清新、柑橘</td><td>受體正常結合反,2-癸烯醛</td></tr>
            <tr><td>OR6A2 突變型<br>(rs72921001)</td><td>~14%</td><td>不敏感（閾值高100倍）</td><td><strong>肥皂、金屬</strong></td><td>受體口袋變形、無法識別醛</td></tr>
          </tbody>
        </table>

        <h4>🔸 其他遺傳性氣味盲</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>相關OR</th><th>氣味盲人群%</th><th>正常人氣味</th><th>突變影響</th></tr></thead>
          <tbody>
            <tr><td>雄烯酮 (Androstenone)</td><td>OR7D4</td><td>~30%</td><td>尿騷/木質<br>（雙模態）</td><td>突變→完全無味</td></tr>
            <tr><td>異戊酸</td><td>OR51E2</td><td>~10%</td><td>汗臭、乳酪</td><td>突變→閾值升高50倍</td></tr>
            <tr><td>β-紫羅蘭酮</td><td>OR5A1</td><td>~25%</td><td>紫羅蘭、花香</td><td>突變→氣味盲</td></tr>
            <tr><td>麝香 (Galaxolide)</td><td>OR5AN1</td><td>~40%</td><td>麝香、粉質</td><td>突變→不敏感（爭議）</td></tr>
          </tbody>
        </table>

        <h4>🔸 雄烯酮的雙模態感知</h4>
        <pre><code>OR7D4基因（位於染色體19p13.2）：

RT/RT基因型（~50%）：
  雄烯酮 → 尿騷、不愉快（閾值 0.2 ppm）
  
RT/WM或WM/WM基因型（~45%）：
  雄烯酮 → 木質、麝香、愉快（閾值 0.5 ppm）
  
特殊突變型（~5%）：
  雄烯酮 → 完全無味（閾值 >100 ppm）

→ <span class="highlight">同一分子、不同基因型 = 完全相反的氣味感受</span></code></pre>

        <h4>地理與種族差異</h4>
        <table class="structure-table">
          <thead><tr><th>OR基因</th><th>歐洲人頻率</th><th>東亞人頻率</th><th>影響的氣味</th></tr></thead>
          <tbody>
            <tr><td>OR2J3 (腐臭素)</td><td>野生型 78%</td><td>野生型 92%</td><td>糞臭敏感性</td></tr>
            <tr><td>OR10G4 (香草醛)</td><td>突變 12%</td><td>突變 38%</td><td>香草氣味盲</td></tr>
            <tr><td>OR11H7P (汗味)</td><td>功能性 65%</td><td>功能性 22%</td><td>體味敏感性</td></tr>
          </tbody>
        </table>
        <p><strong>文化vs基因：</strong>氣味偏好部分來自<span class="highlight">遺傳多態性</span>（硬體不同），部分來自<span class="highlight">文化學習</span>（軟體不同）。</p>

        <h3>1.6.17 溫度效應 - 熱力學與動力學的雙重影響</h3>
        
        <h4>🔹 蒸氣壓的溫度依賴</h4>
        <pre><code>Clausius-Clapeyron方程：
ln(P₂/P₁) = -ΔHᵥₐₚ/R · (1/T₂ - 1/T₁)

實例：檸檬烯（MW=136, ΔHᵥₐₚ=45 kJ/mol）
  10°C: VP = 95 Pa → 氣味弱
  25°C: VP = 190 Pa → 氣味正常
  40°C: VP = 480 Pa → 氣味極強
  
溫度每升高10°C → 蒸氣壓約增加2倍</code></pre>

        <h4>🔹 溫度改變氣味質量（非僅強度）</h4>
        <table class="structure-table">
          <thead><tr><th>香料</th><th>低溫（<15°C）</th><th>室溫（20-25°C）</th><th>體溫（35-37°C）</th><th>原因</th></tr></thead>
          <tbody>
            <tr><td>茉莉精油</td><td>綠葉、青草</td><td>茉莉花香</td><td>濃郁、動物性</td><td>低沸點vs高沸點成分釋放速率差異</td></tr>
            <tr><td>薄荷醇</td><td>清涼感極強</td><td>清涼適中</td><td>清涼減弱</td><td>TRPM8受體溫度敏感性</td></tr>
            <tr><td>香草醛</td><td>冰淇淋甜</td><td>奶油甜</td><td>焦糖甜</td><td>嗅覺受體溫度敏感性改變</td></tr>
            <tr><td>麝香</td><td>幾乎無味</td><td>微弱麝香</td><td><strong>強烈麝香</strong></td><td>大分子低揮發性、需體溫加熱</td></tr>
          </tbody>
        </table>

        <h4>🔹 受體蛋白的溫度構象變化</h4>
        <pre><code>GPCR受體隨溫度變化：
低溫（<20°C）：受體剛性增加 → 結合選擇性提高
室溫（25°C）：受體柔性適中 → 平衡態
體溫（37°C）：受體柔性增加 → 結合廣譜性提高、敏感度增

→ <span class="highlight">同一分子在不同溫度下可結合不同受體構象</span> → 氣味質量改變</code></pre>

        <h2>本節總結</h2>
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
        <h2>本章總結</h2>
        <p>1. ✅ <strong>嗅覺是分子識別</strong>：受體-配體對接</p>
        <p>2. ✅ <strong>立體化學絕對關鍵</strong>：鏡像異構體完全不同氣味</p>
        <p>3. ✅ <strong>電子結構影響氣味</strong>：HOMO-LUMO gap</p>
        <p>4. ✅ <strong>分子形狀必須匹配</strong>：體積、柔性、藥效團</p>
        <p>5. ✅ <strong>量化工具可預測</strong>：DFT + 分子對接</p>
        <p>6. ✅ <strong>結構-氣味關係高度複雜</strong>：官能團、鏈長、環大小、立體化學、極性、濃度全面影響</p>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterLayout from '../components/ChapterLayout.vue'
import MoleculeGallery from '../components/MoleculeGallery.vue'
import { CH1_CARVONE_PAIR, CH1_THIOL_PAIR, CH1_ALDEHYDE_PAIR, CH1_MUSK_FAMILY, CH1_RESONANCE_PAIR, CH1_LIMONENE_PAIR, CH1_MENTHOL_PAIR } from '../data/molecules.js'

export default {
  name: 'Chapter1View',
  components: { ChapterLayout, MoleculeGallery },
  setup() {
    const homoLumoChart = ref(null)
    const chainLengthChart = ref(null)
    let chart = null
    let chainChart = null

    const sections = [
      { id: 'sec-1-1', label: '1.1' },
      { id: 'sec-1-2', label: '1.2' },
      { id: 'sec-1-3', label: '1.3' },
      { id: 'sec-1-4', label: '1.4' },
      { id: 'sec-1-5', label: '1.5' },
      { id: 'sec-1-6', label: '1.6' },
      { id: 'sec-1-7', label: '總結' },
    ]

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

      if (!chainLengthChart.value) return
      chainChart = new Chart(chainLengthChart.value, {
        type: 'line',
        data: {
          labels: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12'],
          datasets: [
            { 
              label: '嗅覺閾值 (ppb，對數)', 
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
            title: { display: true, text: '直鏈醛碳數與嗅覺閾值關係（值越低=越香）', color: '#22c55e', font: { size: 16, weight: 'bold' } },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const realValue = Math.pow(10, context.parsed.y).toFixed(2)
                  return `閾值: ${realValue} ppb`
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
              title: { display: true, text: '嗅覺閾值 (ppb)', color: '#cbd5e1' } 
            },
            x: { 
              ticks: { color: '#94a3b8' }, 
              grid: { color: 'rgba(51,65,85,0.3)' },
              title: { display: true, text: '碳鏈長度', color: '#cbd5e1' } 
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

    return { homoLumoChart, chainLengthChart, sections, activeSection, carvonePair, thiolPair, aldehydePair, muskFamily, resonancePair, limonenePair, mentholPair }
  }
}
</script>
