<template>
  <div>
    <h1>香料化學：從分子到配方的完整科學體系</h1>
    <blockquote>
      <strong>工業配方者專用：分子級深度教學</strong><br>
      不談文學，只談化學。不講故事，只講數據。
    </blockquote>

    <hr>

    <h2>課程理念</h2>
    <p>這不是香水愛好者的感性指南，而是為<strong>真正想理解香料化學本質</strong>的研發者準備的技術文件。</p>
    <p>你將學會：</p>
    <ul>
      <li>從分子結構預測氣味</li>
      <li>設計可控的揮發曲線</li>
      <li>診斷配方問題並精確調整</li>
      <li>使用量化工具進行配方優化</li>
    </ul>

    <!-- 首頁分子展示 -->
    <MoleculeGallery
      title="🧪 香料化學核心分子一覽"
      :molecules="keyMolecules"
    />

    <hr>

    <h2>課程結構</h2>

    <h3>第一部分：分子基礎 (Molecular Foundations)</h3>
    <div class="card">
      <router-link to="/chapter/1" class="chapter-link">第1章：量子化學與嗅覺受體</router-link>
      <ul>
        <li>嗅覺受體的結構生物學</li>
        <li>配體-受體對接（Docking）</li>
        <li>分子軌域理論與氣味</li>
        <li>HOMO-LUMO gap 與嗅覺強度</li>
        <li>立體化學的絕對重要性</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/2" class="chapter-link">第2章：熱力學與揮發動力學</router-link>
      <ul>
        <li>Clausius-Clapeyron 方程</li>
        <li>活度係數與非理想溶液</li>
        <li>Raoult's Law 深度應用</li>
        <li>擴散係數計算</li>
        <li>皮脂分配模型</li>
      </ul>
    </div>

    <h3>第二部分：結構-活性關係 (Structure-Activity Relationships)</h3>
    <div class="card">
      <router-link to="/chapter/3" class="chapter-link">第3章：SAR 深度解析</router-link>
      <ul>
        <li>Topliss 決策樹</li>
        <li>Hansch 分析</li>
        <li>3D-QSAR 模型</li>
        <li>分子描述子計算</li>
        <li>藥效團 (Pharmacophore) 建模</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/4" class="chapter-link">第4章：合成化學與反應機制</router-link>
      <ul>
        <li>關鍵香料分子的工業合成路線</li>
        <li>立體選擇性合成策略</li>
        <li>副反應與雜質控制</li>
        <li>綠色化學替代方案</li>
        <li>生物合成工程</li>
      </ul>
    </div>

    <h3>第三部分：配方工程 (Formulation Engineering)</h3>
    <div class="card">
      <router-link to="/chapter/5" class="chapter-link">第5章：配方設計的數學模型</router-link>
      <ul>
        <li>揮發曲線的微分方程</li>
        <li>多組分擴散模型</li>
        <li>優化算法（遺傳算法、梯度下降）</li>
        <li>穩定性預測模型</li>
        <li>成本-效能權衡分析</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/6" class="chapter-link">第6章：分析方法與儀器</router-link>
      <ul>
        <li>GC-MS 方法開發</li>
        <li>Headspace 動態取樣</li>
        <li>HPLC 方法驗證</li>
        <li>NMR 結構鑑定</li>
        <li>感官分析的統計設計</li>
      </ul>
    </div>

    <h3>第四部分：實戰應用 (Practical Applications)</h3>
    <div class="card">
      <router-link to="/chapter/7" class="chapter-link">第7章：案例研究與故障排除</router-link>
      <ul>
        <li>案例1：修復「前調衝、基調弱」的配方</li>
        <li>案例2：降低成本同時維持性能</li>
        <li>案例3：IFRA 合規的配方改良</li>
        <li>案例4：氧化穩定性問題診斷</li>
        <li>案例5：複製競品配方的逆向工程</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/8" class="chapter-link">第8章：進階主題</router-link>
      <ul>
        <li>機器學習預測模型</li>
        <li>微流控高通量篩選</li>
        <li>智能微膠囊設計</li>
        <li>納米材料在香料中的應用</li>
        <li>個性化香水的演算法</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/9" class="chapter-link">第9章：香料分子圖鑑 🧪</router-link>
      <ul>
        <li>70+ 市售主要香料分子百科</li>
        <li>嗅覺家族分類與篩選</li>
        <li>感性氣味描述 × 物化數據</li>
        <li>典型用量與經典香水搭配</li>
        <li>安全法規與 IFRA 限制</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/10" class="chapter-link">第10章：市售香水配方解析 🧴</router-link>
      <ul>
        <li>20+ 經典香水完整配方拆解</li>
        <li>品牌、香調家族、濃度多維篩選</li>
        <li>前/中/基調金字塔視覺化</li>
        <li>成分佔比分析與性能指標</li>
        <li>成分名稱、CAS 編號檢索</li>
      </ul>
    </div>

    <hr>

    <h2>使用說明</h2>
    <h3>閱讀順序</h3>
    <ul>
      <li><strong>初學者</strong>：按順序從第1章讀起</li>
      <li><strong>有化學背景</strong>：可直接從第3章開始</li>
      <li><strong>實務導向</strong>：直接跳到第5、7章</li>
    </ul>

    <h3>前置知識要求</h3>
    <ul>
      <li>有機化學（大學程度）</li>
      <li>基礎物理化學（熱力學、動力學）</li>
      <li>微積分與線性代數</li>
      <li>程式基礎（Python建議）</li>
    </ul>

    <h3>配套工具</h3>
    <ul>
      <li><strong>分子模擬</strong>：Avogadro, PyMOL, Chimera</li>
      <li><strong>計算化學</strong>：Gaussian, ORCA, MOPAC</li>
      <li><strong>數據分析</strong>：Python (NumPy, Pandas, SciPy)</li>
      <li><strong>機器學習</strong>：scikit-learn, TensorFlow</li>
    </ul>

    <hr>

    <h2>符號與術語約定</h2>
    <h3>化學符號</h3>
    <ul>
      <li><strong>MW</strong>: 分子量 (g/mol)</li>
      <li><strong>BP</strong>: 沸點 (°C)</li>
      <li><strong>MP</strong>: 熔點 (°C)</li>
      <li><strong>Log P</strong>: 辛醇-水分配係數</li>
      <li><strong>VP</strong>: 蒸氣壓 (Pa)</li>
    </ul>

    <h3>數學符號</h3>
    <ul>
      <li><strong>D</strong>: 擴散係數 (cm²/s)</li>
      <li><strong>k</strong>: 揮發速率常數 (s⁻¹)</li>
      <li><strong>γ</strong>: 活度係數</li>
      <li><strong>φ</strong>: 逸散度係數</li>
      <li><strong>μ</strong>: 化學勢 (J/mol)</li>
    </ul>

    <hr>

    <h2>數據來源與參考資料</h2>
    <p>所有數據均來自：</p>
    <ol>
      <li><strong>學術文獻</strong>：Flavour and Fragrance Journal, J. Agric. Food Chem.</li>
      <li><strong>專利資料庫</strong>：USPTO, EPO, WIPO</li>
      <li><strong>IFRA 標準</strong>：International Fragrance Association Standards</li>
      <li><strong>物性數據庫</strong>：PubChem, ChemSpider, NIST WebBook</li>
    </ol>

    <hr>

    <h2>開始學習</h2>
    <p>準備好深入香料化學的核心了嗎？</p>
    <p>
      👉 <router-link to="/chapter/1"><strong>從第1章開始：量子化學與嗅覺受體</strong></router-link>
    </p>
    <p>或直接跳到你感興趣的章節。</p>

    <hr>
    <p><em>最後更新：2024年12月</em></p>
    <p><em>作者：為真正想理解分子的研發者準備</em></p>
  </div>
</template>

<script>
import MoleculeGallery from '../components/MoleculeGallery.vue'
import { HOME_MOLECULES } from '../data/molecules.js'

export default {
  name: 'HomeView',
  components: { MoleculeGallery },
  data() {
    return {
      keyMolecules: HOME_MOLECULES
    }
  }
}
</script>
