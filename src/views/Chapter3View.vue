<template>
  <ChapterLayout
    title="第3章：SAR 深度解析"
    :prev="{ to: '/chapter/2', label: '第2章：熱力學' }"
    :next="{ to: '/chapter/4', label: '第4章：合成' }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-3-1'" class="chapter-section">
        <h2 id="sec-3-1">3.1 Topliss 決策樹</h2>
        <p>系統性地決定下一步結構修飾方向：</p>
        <pre><code>起始化合物 → 測試活性
  活性↑ → 增加疏水性（加 -Cl, -CH₃）
  活性↓ → 增加親水性（加 -OH, -NH₂）
  活性不變 → 改變電子效應（加 -NO₂, -OCH₃）</code></pre>
      </section>

      <section v-show="activeSection === 'sec-3-2'" class="chapter-section">
        <h2 id="sec-3-2">3.2 Hansch 分析</h2>
        <pre><code>log(1/C) = a·log P - b·(log P)² + c·σ + d·Es + e
C: 等效濃度, log P: 疏水性
σ: Hammett 常數, Es: Taft 立體參數

關鍵發現：最適 log P ≈ 3.5（拋物線頂點）</code></pre>
        <div class="chart-container"><canvas ref="hanschChart" style="max-height: 320px;"></canvas></div>
      </section>

      <section v-show="activeSection === 'sec-3-3'" class="chapter-section">
        <h2 id="sec-3-3">3.3 分子描述子計算</h2>
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
        <h2 id="sec-3-4">3.4 3D-QSAR 模型</h2>
        <pre><code>CoMFA (Comparative Molecular Field Analysis):
1. 分子疊合（共同骨架）
2. 計算立體場和靜電場
3. PLS回歸建模
4. 等值面可視化

預測能力：q² > 0.5 → 有意義的模型</code></pre>
      </section>

      <section v-show="activeSection === 'sec-3-5'" class="chapter-section">
        <h2 id="sec-3-5">3.5 藥效團建模</h2>
        <pre><code>麝香藥效團：
[Hydrophobic] ─ 5.2 Å ─ [H-bond Acceptor]
       ↓
     10.8 Å
       ↓
[Hydrophobic]

匹配度 > 0.85 → 預測為麝香氣味</code></pre>
      </section>

      <section v-show="activeSection === 'sec-3-6'" class="chapter-section">
        <h2 id="sec-3-6">3.6 經典案例深度解析</h2>

        <h3>3.6.1 案例一：香豆素系列 - 取代基位置與氣味強度</h3>
        <p>香豆素骨架 (2H-chromen-2-one) 是典型的花香/香草香基底，但取代基位置和類型導致氣味變化極大。</p>
        <table class="structure-table">
          <thead>
            <tr>
              <th>化合物</th>
              <th>取代位置</th>
              <th>取代基</th>
              <th>Log P</th>
              <th>氣味強度</th>
              <th>氣味描述</th>
              <th>SAR解釋</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>香豆素</td>
              <td>-</td>
              <td>未取代</td>
              <td>1.39</td>
              <td>中</td>
              <td>新鮮乾草、香草</td>
              <td>基本藥效團</td>
            </tr>
            <tr>
              <td>7-羥基香豆素</td>
              <td>7位</td>
              <td>-OH</td>
              <td>1.08</td>
              <td>弱</td>
              <td>微弱花香</td>
              <td>OH增加極性、降低揮發</td>
            </tr>
            <tr>
              <td>7-甲氧基香豆素</td>
              <td>7位</td>
              <td>-OCH₃</td>
              <td>1.92</td>
              <td><strong>強</strong></td>
              <td>椰子、香草、甜</td>
              <td>OCH₃在7位最佳平衡</td>
            </tr>
            <tr>
              <td>6-甲基香豆素</td>
              <td>6位</td>
              <td>-CH₃</td>
              <td>1.89</td>
              <td>中</td>
              <td>甜、乾草</td>
              <td>甲基增加疏水性</td>
            </tr>
            <tr>
              <td>6,7-二羥基香豆素</td>
              <td>6,7位</td>
              <td>-OH×2</td>
              <td>0.31</td>
              <td>極弱</td>
              <td>幾乎無味</td>
              <td>雙OH過度親水、不揮發</td>
            </tr>
            <tr>
              <td>7-乙氧基-4-甲基香豆素</td>
              <td>7位+4位</td>
              <td>-OC₂H₅, -CH₃</td>
              <td>2.51</td>
              <td><strong>極強</strong></td>
              <td>濃烈椰子、甜</td>
              <td>雙取代協同、達最佳Log P</td>
            </tr>
          </tbody>
        </table>
        <p><strong>SAR總結：</strong></p>
        <ul>
          <li>7位取代最有效（接近內酯羰基，影響電子分佈）</li>
          <li>-OCH₃ > -CH₃ > -OH（疏水性與揮發性平衡）</li>
          <li>雙取代可達協同效應，但需避免過度極性</li>
          <li><span class="highlight">最佳Log P窗口：1.8-2.8</span></li>
        </ul>

        <h3>3.6.2 案例二：麝香系列 - 大環vs硝基麝香</h3>
        <p>麝香氣味可由截然不同的結構產生，展示「多條路徑達同一終點」的SAR現象。</p>
        
        <h4>🔹 天然麝香 (Macrocyclic Musks)</h4>
        <table class="structure-table">
          <thead>
            <tr><th>化合物</th><th>環大小</th><th>官能團</th><th>Log P</th><th>閾值 (ng/L)</th><th>氣味質量</th></tr>
          </thead>
          <tbody>
            <tr><td>環十五酮 (Muscone)</td><td>15元環</td><td>酮</td><td>5.7</td><td>0.1</td><td><strong>純麝香、動物性</strong></td></tr>
            <tr><td>環十五內酯 (Exaltolide)</td><td>15元環</td><td>內酯</td><td>5.3</td><td>1.2</td><td>麝香、粉質</td></tr>
            <tr><td>環十六內酯</td><td>16元環</td><td>內酯</td><td>5.9</td><td>8.0</td><td>麝香、細膩</td></tr>
          </tbody>
        </table>

        <h4>🔹 合成麝香 (Nitro/Polycyclic Musks)</h4>
        <table class="structure-table">
          <thead>
            <tr><th>化合物</th><th>結構類型</th><th>Log P</th><th>閾值 (ng/L)</th><th>氣味質量</th><th>環境問題</th></tr>
          </thead>
          <tbody>
            <tr><td>麝香酮 (Musk Ketone)</td><td>硝基麝香</td><td>4.3</td><td>50</td><td>麝香、粉質</td><td>持久性有機污染物</td></tr>
            <tr><td>佳樂麝香 (Galaxolide)</td><td>多環麝香</td><td>5.9</td><td>2.5</td><td>麝香、清爽</td><td>生物蓄積性</td></tr>
            <tr><td>Helvetolide</td><td>多環麝香</td><td>6.2</td><td>0.8</td><td>麝香、木質</td><td>較安全</td></tr>
          </tbody>
        </table>

        <p><strong>結構多樣性解釋：</strong></p>
        <ul>
          <li>大環麝香：靠<span class="highlight">柔性構象適配受體口袋</span>（直徑10-12 Å）</li>
          <li>硝基麝香：靠<span class="highlight">苯環剛性+硝基極性定位</span>模擬同樣空間</li>
          <li>多環麝香：靠<span class="highlight">多環骨架+甲基填充疏水袋</span></li>
          <li>共同點：分子體積250-350 Ų、Log P > 4、疏水為主+極性錨點</li>
        </ul>

        <h3>3.6.3 案例三：薄荷醇立體異構 - 8種可能性的氣味地圖</h3>
        <p>薄荷醇有3個手性中心 → 2³ = 8種立體異構體，氣味完全不同。</p>
        <table class="structure-table">
          <thead>
            <tr>
              <th>異構體</th>
              <th>C1-C2-C5構型</th>
              <th>氣味</th>
              <th>清涼感強度</th>
              <th>閾值 (ppm)</th>
              <th>受體親和力</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>(-)-薄荷醇</td>
              <td>1R,2S,5R</td>
              <td><strong>強烈薄荷、清涼</strong></td>
              <td>100%（基準）</td>
              <td>0.4</td>
              <td>極高（Ki=4nM）</td>
            </tr>
            <tr>
              <td>(+)-薄荷醇</td>
              <td>1S,2R,5S</td>
              <td>微弱薄荷</td>
              <td>~5%</td>
              <td>25</td>
              <td>低</td>
            </tr>
            <tr>
              <td>(-)-新薄荷醇</td>
              <td>1S,2S,5R</td>
              <td>樟腦、藥用</td>
              <td>~2%</td>
              <td>60</td>
              <td>極低</td>
            </tr>
            <tr>
              <td>(+)-新薄荷醇</td>
              <td>1R,2R,5S</td>
              <td>木質、辛辣</td>
              <td><1%</td>
              <td>>100</td>
              <td>幾乎無</td>
            </tr>
            <tr>
              <td>(-)-異薄荷醇</td>
              <td>1R,2R,5R</td>
              <td>草本、輕微清涼</td>
              <td>~20%</td>
              <td>8</td>
              <td>中等</td>
            </tr>
            <tr>
              <td>(+)-異薄荷醇</td>
              <td>1S,2S,5S</td>
              <td>草本</td>
              <td><5%</td>
              <td>40</td>
              <td>低</td>
            </tr>
            <tr>
              <td>新異薄荷醇（兩種）</td>
              <td>其他組合</td>
              <td>木質、無清涼</td>
              <td>0%</td>
              <td>>100</td>
              <td>無</td>
            </tr>
          </tbody>
        </table>
        <p><strong>分子對接分析：</strong></p>
        <pre><code>TRPM8受體（冷感受體）結合模式：
(-)-薄荷醇：
  - 異丙基：插入疏水袋（Val846, Leu843）
  - 羥基：與Tyr745形成氫鍵
  - 環己烷椅式：完美貼合受體腔
  → ΔG_bind = -9.2 kcal/mol

(+)-薄荷醇（鏡像）：
  - 異丙基方向錯誤、無法深入疏水袋
  - 羥基距離Tyr745過遠（5.2 Å vs 最佳2.8 Å）
  → ΔG_bind = -4.1 kcal/mol（親和力降100倍）</code></pre>
        <p><strong>關鍵洞察：</strong><span class="highlight">0.5 Å的空間差異 = 清涼感100倍差距</span> → 受體極度敏感於立體化學。</p>

        <h3>3.6.4 案例四：玫瑰香的多樣性 - 不同骨架達同一氣味</h3>
        <p>「玫瑰香」可由至少5類結構產生，展示嗅覺受體的廣譜識別能力。</p>
        <table class="structure-table">
          <thead>
            <tr>
              <th>化合物</th>
              <th>結構類型</th>
              <th>式</th>
              <th>Log P</th>
              <th>閾值</th>
              <th>玫瑰香細節</th>
              <th>共同特徵</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>苯乙醇</td>
              <td>芳香醇</td>
              <td>C₆H₅CH₂CH₂OH</td>
              <td>1.36</td>
              <td>1 ppm</td>
              <td>玫瑰、蜂蜜</td>
              <td>芳香環+OH（5-6 Å）</td>
            </tr>
            <tr>
              <td>香茅醇</td>
              <td>萜烯醇</td>
              <td>C₁₀H₂₀O</td>
              <td>3.4</td>
              <td>0.08 ppm</td>
              <td>玫瑰、柑橘</td>
              <td>疏水鏈+末端OH</td>
            </tr>
            <tr>
              <td>香葉醇</td>
              <td>萜烯醇</td>
              <td>C₁₀H₁₈O</td>
              <td>3.28</td>
              <td>0.04 ppm</td>
              <td>玫瑰、甜</td>
              <td>反式C=C+OH</td>
            </tr>
            <tr>
              <td>玫瑰醚</td>
              <td>不飽和醚</td>
              <td>C₁₀H₁₈O</td>
              <td>3.9</td>
              <td>0.005 ppm</td>
              <td><strong>極強玫瑰</strong></td>
              <td>環+醚+甲基</td>
            </tr>
            <tr>
              <td>玫瑰酮</td>
              <td>酮</td>
              <td>C₁₃H₂₂O</td>
              <td>4.1</td>
              <td>0.1 ppm</td>
              <td>玫瑰、果香</td>
              <td>酮+疏水尾</td>
            </tr>
            <tr>
              <td>玫瑰呋喃</td>
              <td>呋喃衍生物</td>
              <td>C₉H₁₆O₂</td>
              <td>2.8</td>
              <td>0.02 ppm</td>
              <td>玫瑰、草莓</td>
              <td>呋喃環+烷基</td>
            </tr>
          </tbody>
        </table>
        <p><strong>藥效團分析：</strong></p>
        <pre><code>玫瑰香受體OR識別關鍵：
[疏水區域] ───── 6-8 Å ───── [極性錨點 (OH/O/C=O)]
    ↑                              ↑
  苯環/碳鏈                      氫鍵受體
    |
  體積150-250 Ų
    |
  Log P 範圍：1.3-4.5（中等疏水）</code></pre>
        <p><strong>結論：</strong>嗅覺受體並非「鎖鑰」嚴格匹配，而是<span class="highlight">「毛刷-毛氈」式廣譜識別</span>——只要滿足空間藥效團+物化性質窗口，不同骨架也能觸發相同氣味。</p>

        <h3>3.6.5 案例五：苯甲醛衍生物 - Hammett方程實戰</h3>
        <p>用Hammett σ常數預測取代苯甲醛的氣味強度。</p>
        <table class="structure-table">
          <thead>
            <tr>
              <th>化合物</th>
              <th>取代基</th>
              <th>Hammett σ</th>
              <th>HOMO (eV)</th>
              <th>氣味強度</th>
              <th>閾值 (ppb)</th>
              <th>氣味描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>對甲氧基苯甲醛</td>
              <td>4-OCH₃</td>
              <td>-0.27</td>
              <td>-8.6</td>
              <td><strong>極強</strong></td>
              <td>15</td>
              <td>甜茴香、山楂</td>
            </tr>
            <tr>
              <td>對甲基苯甲醛</td>
              <td>4-CH₃</td>
              <td>-0.17</td>
              <td>-9.0</td>
              <td>強</td>
              <td>50</td>
              <td>櫻桃、杏仁</td>
            </tr>
            <tr>
              <td>苯甲醛</td>
              <td>H</td>
              <td>0.00</td>
              <td>-9.2</td>
              <td>中</td>
              <td>350</td>
              <td>杏仁、櫻桃</td>
            </tr>
            <tr>
              <td>對氯苯甲醛</td>
              <td>4-Cl</td>
              <td>+0.23</td>
              <td>-9.5</td>
              <td>弱</td>
              <td>890</td>
              <td>化學味</td>
            </tr>
            <tr>
              <td>對硝基苯甲醛</td>
              <td>4-NO₂</td>
              <td>+0.78</td>
              <td>-10.1</td>
              <td>極弱</td>
              <td>4500</td>
              <td>苦、刺激</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Hammett SAR：</strong></p>
        <pre><code>log(氣味強度) = -2.3σ + 1.5
R² = 0.91

解釋：
σ < 0（給電子）→ HOMO能量↑ → 親核性↑ → 與受體結合強
σ > 0（拉電子）→ HOMO能量↓ → 親核性↓ → 與受體結合弱

<span class="highlight">給電子基團使醛更「活躍」，提升氣味強度</span></code></pre>

        <h3>3.6.6 案例六：順反異構的氣味鴻溝</h3>
        <table class="structure-table">
          <thead>
            <tr>
              <th>化合物</th>
              <th>順式 (Cis)</th>
              <th>反式 (Trans)</th>
              <th>差異倍數</th>
              <th>原因</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>茉莉酮</td>
              <td>濃郁茉莉香（閾值 0.007 ppb）</td>
              <td>木質茉莉（閾值 0.5 ppb）</td>
              <td>70倍</td>
              <td>順式構象符合茉莉受體口袋彎曲形狀</td>
            </tr>
            <tr>
              <td>玫瑰醚</td>
              <td>弱玫瑰（閾值 50 ppb）</td>
              <td><strong>強烈玫瑰</strong>（閾值 0.005 ppb）</td>
              <td>10000倍！</td>
              <td>反式延展構象與受體疏水溝槽完美匹配</td>
            </tr>
            <tr>
              <td>2-己烯醛</td>
              <td>青蘋果（閾值 17 ppb）</td>
              <td>辛辣綠葉（閾值 17 ppb）</td>
              <td>相近</td>
              <td>氣味質量不同但強度相似</td>
            </tr>
          </tbody>
        </table>
        <p><strong>順反規律：</strong>沒有普遍規則！順式玫瑰醚弱、反式強；順式茉莉酮強、反式弱。<span class="highlight">必須針對具體受體進行分子對接預測</span>。</p>

        <h3>3.6.7 混合效應與協同作用 - 1 + 1 ≠ 2</h3>
        <p>多種香料混合時，氣味強度<strong>非線性疊加</strong>，存在協同、拮抗、遮蔽效應。</p>

        <h4>🔹 協同增強 (Synergism)</h4>
        <table class="structure-table">
          <thead><tr><th>組合</th><th>A單獨</th><th>B單獨</th><th>A+B混合</th><th>協同倍數</th><th>機制</th></tr></thead>
          <tbody>
            <tr>
              <td>香草醛+乙基香草醛</td>
              <td>100</td>
              <td>80</td>
              <td>350</td>
              <td>1.9×</td>
              <td>雙重占據受體不同亞位點</td>
            </tr>
            <tr>
              <td>檸檬烯+芳樟醇</td>
              <td>100</td>
              <td>70</td>
              <td>280</td>
              <td>1.6×</td>
              <td>萜烯+萜醇協同活化OR</td>
            </tr>
            <tr>
              <td>吲哚+茉莉酮</td>
              <td>5（稀釋）</td>
              <td>90</td>
              <td>200</td>
              <td>2.1×</td>
              <td>吲哚低濃度激活茉莉受體</td>
            </tr>
            <tr>
              <td>麝香+龍涎香醇</td>
              <td>40</td>
              <td>60</td>
              <td>180</td>
              <td>1.8×</td>
              <td>大分子協同、受體別構調節</td>
            </tr>
          </tbody>
        </table>

        <h4>🔹 拮抗遮蔽 (Antagonism)</h4>
        <table class="structure-table">
          <thead><tr><th>組合</th><th>A單獨</th><th>B單獨</th><th>A+B混合</th><th>抑制效應</th><th>機制</th></tr></thead>
          <tbody>
            <tr>
              <td>薄荷醇+香草醛</td>
              <td>100</td>
              <td>100</td>
              <td>120</td>
              <td>-40%</td>
              <td>競爭性結合、受體飽和</td>
            </tr>
            <tr>
              <td>硫醇+醛類</td>
              <td>極強臭</td>
              <td>果香</td>
              <td>硫臭主導</td>
              <td>醛香被遮蔽</td>
              <td>硫醇閾值超低、受體優先結合</td>
            </tr>
            <tr>
              <td>乙酸+酯類</td>
              <td>刺激酸</td>
              <td>果香</td>
              <td>酸味主導</td>
              <td>酯香消失</td>
              <td>三叉神經刺激壓過嗅覺</td>
            </tr>
          </tbody>
        </table>

        <h4>🔹 分子間氫鍵改變氣味</h4>
        <pre><code>香草醛+丁香酚混合物：
香草醛-OH ··· O-丁香酚（分子間氫鍵）
→ 降低揮發性、改變電子分佈
→ 氣味從「分立的香草+丁香」變成「融合的甜辣香」

測量證據：
混合物沸點升高 12°C
紅外光譜 O-H 伸縮紅移 85 cm⁻¹
氣味閾值提高 3倍（揮發性降低）</code></pre>

        <h3>3.6.8 失敗案例分析 - SAR的陷阱</h3>
        <p>並非所有結構修飾都成功——失敗案例揭示SAR的複雜性。</p>

        <h4>❌ 案例一：苯環縮環失敗</h4>
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

        <h4>❌ 案例二：延長麝香失敗</h4>
        <table class="structure-table">
          <thead><tr><th>環大小</th><th>氣味強度</th><th>氣味質量</th><th>失敗原因</th></tr></thead>
          <tbody>
            <tr><td>15元環</td><td>100%（基準）</td><td>純麝香</td><td>-</td></tr>
            <tr><td>16元環</td><td>40%</td><td>麝香、細膩</td><td>略大但可接受</td></tr>
            <tr><td>17元環</td><td>8%</td><td>微弱麝香</td><td><strong>超出受體口袋尺寸</strong></td></tr>
            <tr><td>18元環</td><td><1%</td><td>蠟質、幾乎無味</td><td><strong>完全失配</strong></td></tr>
          </tbody>
        </table>
        <p><strong>教訓：</strong><span class="highlight">受體口袋尺寸嚴格限制</span>，超過1-2 Å即失效。15元環直徑≈10.5 Å，18元環≈12.8 Å，差異僅2.3 Å但氣味消失。</p>

        <h4>❌ 案例三：雙官能團過度極性</h4>
        <pre><code>設計思路：香草醛很香 → 加更多-OH應該更香？

香草醛：4-OH-3-OCH₃-Ph-CHO → 閾值 20 ppb
  ↓ 加2-OH
2,4-二羥基-3-甲氧基苯甲醛 → 閾值 >5000 ppb（250倍惡化！）

失敗原因：
  ✗ 雙OH氫鍵網絡 → 極性過高（Log P從1.9降至0.3）
  ✗ 揮發性暴跌 → 無法到達嗅覺上皮
  ✗ 受體疏水袋排斥極性分子
  
<span class="highlight">SAR陷阱：好東西加倍 ≠ 更好</span></code></pre>

        <h4>❌ 案例四：立體障礙導致活性喪失</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>取代模式</th><th>氣味強度</th><th>失敗原因</th></tr></thead>
          <tbody>
            <tr><td>苯乙醇</td><td>Ph-CH₂CH₂OH</td><td>100%（玫瑰香）</td><td>-</td></tr>
            <tr><td>α,α-二甲基苯乙醇</td><td>Ph-C(CH₃)₂CH₂OH</td><td>12%</td><td>α位雙甲基立體擁擠</td></tr>
            <tr><td>α-苯基苯乙醇</td><td>(Ph)₂CHCH₂OH</td><td><5%</td><td><strong>極大立體障礙</strong></td></tr>
          </tbody>
        </table>

        <h3>3.6.9 計算預測工具實戰</h3>
        <p>現代SAR不再純靠實驗——電腦輔助預測加速研發。</p>

        <h4>🔸 工具對比</h4>
        <table class="structure-table">
          <thead><tr><th>軟體/平台</th><th>方法</th><th>預測準確度</th><th>速度</th><th>成本</th><th>適用場景</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Pyrfume AI</strong></td>
              <td>深度學習（GNN）</td>
              <td>~72%</td>
              <td>秒級</td>
              <td>免費</td>
              <td>快速篩選、氣味描述預測</td>
            </tr>
            <tr>
              <td><strong>Odor Descriptor Database</strong></td>
              <td>機器學習（RF）</td>
              <td>~65%</td>
              <td>秒級</td>
              <td>免費</td>
              <td>已知分子氣味查詢</td>
            </tr>
            <tr>
              <td><strong>AutoDock Vina</strong></td>
              <td>分子對接</td>
              <td>~80%（需知OR）</td>
              <td>分鐘級</td>
              <td>免費</td>
              <td>特定受體親和力</td>
            </tr>
            <tr>
              <td><strong>Schrödinger Glide</strong></td>
              <td>高精度對接</td>
              <td>~85%</td>
              <td>小時級</td>
              <td>昂貴</td>
              <td>精確SAR優化</td>
            </tr>
            <tr>
              <td><strong>QSAR Toolbox</strong></td>
              <td>經典QSAR</td>
              <td>~60%</td>
              <td>秒級</td>
              <td>免費</td>
              <td>Log P、MW等物化預測</td>
            </tr>
          </tbody>
        </table>

        <h4>🔸 實戰流程：設計新玫瑰香分子</h4>
        <pre><code><strong>Step 1: 虛擬篩選</strong>
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

        <h3>3.6.10 受體適應與嗅覺疲勞 - 時間維度的SAR</h3>
        <p>同一分子的氣味強度隨<strong>暴露時間</strong>動態變化。</p>

        <h4>🔹 受體脫敏化動力學</h4>
        <table class="structure-table">
          <thead><tr><th>化合物</th><th>初始強度</th><th>30秒後</th><th>5分鐘後</th><th>恢復時間</th><th>機制</th></tr></thead>
          <tbody>
            <tr>
              <td>己醛（C₆）</td>
              <td>100%</td>
              <td>35%</td>
              <td>8%</td>
              <td>15分鐘</td>
              <td>快速脫敏（受體磷酸化）</td>
            </tr>
            <tr>
              <td>香葉醇</td>
              <td>100%</td>
              <td>60%</td>
              <td>30%</td>
              <td>45分鐘</td>
              <td>中速脫敏</td>
            </tr>
            <tr>
              <td>麝香酮</td>
              <td>100%</td>
              <td>85%</td>
              <td>70%</td><td>>2小時</td>
              <td><strong>抗脫敏</strong>（慢解離）</td>
            </tr>
            <tr>
              <td>薄荷醇</td>
              <td>100%</td>
              <td>20%</td>
              <td>5%</td>
              <td>30分鐘</td>
              <td>TRPM8快速失活</td>
            </tr>
          </tbody>
        </table>

        <h4>🔹 結構與脫敏速率的關係</h4>
        <pre><code>快速脫敏（<1分鐘）：
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

        <h4>🔹 交叉適應 - 相似結構的干擾</h4>
        <table class="structure-table">
          <thead><tr><th>先暴露A</th><th>後測試B</th><th>B的感知強度</th><th>交叉適應%</th><th>結構相似度</th></tr></thead>
          <tbody>
            <tr><td>檸檬烯</td><td>檸檬烯</td><td>10%（自身適應）</td><td>90%</td><td>100%</td></tr>
            <tr><td>檸檬烯</td><td>α-蒎烯</td><td>45%</td><td>55%</td><td>高（同為萜烯）</td></tr>
            <tr><td>檸檬烯</td><td>香葉醇</td><td>75%</td><td>25%</td><td>中（萜醇vs萜烯）</td></tr>
            <tr><td>檸檬烯</td><td>香草醛</td><td>98%</td><td>2%</td><td>極低</td></tr>
          </tbody>
        </table>
        <p><strong>SAR應用：</strong>設計香水時，<span class="highlight">相似結構分子避免同時使用</span>，否則互相干擾、降低辨識度。</p>

        <h2>3.6節總結</h2>
        <div class="summary-box">
          <p><strong>SAR不是簡單規則，而是複雜的多維度優化問題：</strong></p>
          <p>1. <strong>取代基位置 > 取代基類型</strong>：香豆素7位取代最優</p>
          <p>2. <strong>Log P窗口理論</strong>：大多數香料分子最佳範圍1.5-4.5</p>
          <p>3. <strong>立體化學絕對關鍵</strong>：薄荷醇8種異構體氣味差100倍</p>
          <p>4. <strong>多條路徑達同一終點</strong>：玫瑰香可由5類結構產生</p>
          <p>5. <strong>電子效應量化</strong>：Hammett方程可預測氣味強度</p>
          <p>6. <strong>順反異構無通則</strong>：需個案分析受體匹配</p>
          <p>7. <strong>混合非線性</strong>：協同增強可達2×、拮抗可完全遮蔽</p>
          <p>8. <strong>失敗案例寶貴</strong>：過度極性、立體障礙、超出受體尺寸都會失敗</p>
          <p>9. <strong>計算預測加速</strong>：AI+對接可達75%成功率</p>
          <p>10. <strong>時間維度</strong>：受體適應導致氣味隨時間衰減、結構影響脫敏速率</p>
        </div>
      </section>

      <section v-show="activeSection === 'sec-3-7'" class="chapter-section">
        <h2>本章總結</h2>
        <p>1. ✅ <strong>Topliss 樹</strong>：系統化結構修飾</p>
        <p>2. ✅ <strong>Hansch 分析</strong>：定量疏水性-活性關係</p>
        <p>3. ✅ <strong>3D-QSAR</strong>：三維空間結構-活性</p>
        <p>4. ✅ <strong>藥效團</strong>：必要空間特徵提取</p>
        <p>5. ✅ <strong>經典案例</strong>：香豆素、麝香、薄荷醇、玫瑰香、苯甲醛、順反異構的深度SAR解析</p>
        <p>6. ✅ <strong>混合效應</strong>：協同、拮抗、分子間作用的非線性行為</p>
        <p>7. ✅ <strong>失敗與成功</strong>：SAR陷阱與計算預測工具的實戰應用</p>
        <p>8. ✅ <strong>動態SAR</strong>：受體適應、嗅覺疲勞的時間依賴性</p>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Chart } from 'chart.js/auto'
import ChapterLayout from '../components/ChapterLayout.vue'
export default {
  name: 'Chapter3View',
  components: { ChapterLayout },
  setup() {
    const hanschChart = ref(null)
    let chart = null
    const sections = [
      { id: 'sec-3-1', label: '3.1' },
      { id: 'sec-3-2', label: '3.2' },
      { id: 'sec-3-3', label: '3.3' },
      { id: 'sec-3-4', label: '3.4' },
      { id: 'sec-3-5', label: '3.5' },
      { id: 'sec-3-6', label: '3.6' },
      { id: 'sec-3-7', label: '總結' }
    ]
    const activeSection = ref(sections[0].id)
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
    watch(activeSection, async () => {
      await nextTick()
      if (chart) chart.resize()
    })
    onUnmounted(() => { if (chart) chart.destroy() })
    return { hanschChart, sections, activeSection }
  }
}
</script>
