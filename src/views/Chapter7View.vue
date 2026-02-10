<template>
  <ChapterLayout
    title="第7章：案例研究與故障排除"
    :prev="{ to: '/chapter/6', label: '第6章：分析方法' }"
    :next="{ to: '/chapter/8', label: '第8章：進階主題' }"
    :sections="sections"
    :active-section="activeSection"
    @update:activeSection="activeSection = $event"
  >
    <div class="chapter-sections">
      <section v-show="activeSection === 'sec-7-1'" class="chapter-section">
        <h2 id="sec-7-1">案例1：修復「前調衝、基調弱」的配方</h2>
        <h3>問題描述</h3>
        <pre><code>"一噴就很香，但20分鐘後就聞不太到了，
而且一開始有點刺鼻。"</code></pre>

        <h3>原配方</h3>
        <pre><code>乙醇 (90%) 檸檬醛 (3%) 芳樟醇 (4%) 檀香醇 (2%) Iso E Super (1%)</code></pre>

        <h3>診斷流程</h3>
        <h4>步驟1：GC-MS分析</h4>
        <pre><code>取樣於 0, 15, 30, 60, 120分鐘：
檸檬醛：0→100%  15→35%  30→8%  60→<1%
芳樟醇：0→100%  60→45%  120→18%
檀香醇 & Iso E：變化極慢

關鍵問題：
0-30 min：過於強烈（檸檬醛主導）
30 min-2h：斷層（中香不足）
>2h：基香太弱</code></pre>

        <h3>解決方案</h3>
        <h4>改良配方</h4>
        <pre><code>乙醇 (87%)
檸檬醛 (1.5%) ← 減半
乙酸苄酯 (2%) ← 新增 buffer
芳樟醇 (3%)
香葉醇 (1.5%) ← 新增中香
乙酸苯乙酯 (1.5%) ← 新增 buffer
檀香醇 (2%)
Iso E Super (1.5%) ← 增加
BHT (0.05%) ← 抗氧化</code></pre>

        <h4>實驗驗證</h4>
        <table>
          <thead><tr><th>時間</th><th>頂香%</th><th>中香%</th><th>基香%</th><th>總強度</th></tr></thead>
          <tbody>
            <tr><td>0 min</td><td>70</td><td>25</td><td>5</td><td>100</td></tr>
            <tr><td>30 min</td><td>40</td><td>50</td><td>10</td><td>95</td></tr>
            <tr><td>2h</td><td>10</td><td>60</td><td>30</td><td>85</td></tr>
            <tr><td>4h</td><td>0</td><td>40</td><td>60</td><td>75</td></tr>
            <tr><td>8h</td><td>0</td><td>10</td><td>90</td><td>60</td></tr>
          </tbody>
        </table>
        <p>✅ 無斷層 ✅ 平滑過渡</p>
        <pre><code>20位受試者感官評測：
"更柔和"：18人 "留香更久"：17人 "喜歡新版"：16人
統計顯著性：p < 0.01</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-2'" class="chapter-section">
        <h2 id="sec-7-2">案例2：降低成本同時維持性能</h2>
        <h3>背景</h3>
        <pre><code>原配方：
天然玫瑰精油 (5%) - $800/kg
檀香精油 (3%) - $1200/kg
茉莉原精 (2%) - $3000/kg
龍涎香酊 (1%) - $50,000/kg
總成本：~$150/kg</code></pre>

        <h3>逆向工程</h3>
        <table>
          <thead><tr><th>原料</th><th>原成本</th><th>替代品</th><th>新成本</th><th>節省</th></tr></thead>
          <tbody>
            <tr><td>玫瑰精油</td><td>$40/kg配方</td><td>合成玫瑰</td><td>$8/kg</td><td>80%</td></tr>
            <tr><td>檀香精油</td><td>$36/kg</td><td>Javanol</td><td>$12/kg</td><td>67%</td></tr>
            <tr><td>茉莉原精</td><td>$60/kg</td><td>合成茉莉基料</td><td>$15/kg</td><td>75%</td></tr>
            <tr><td>橡苔</td><td>$6/kg</td><td>Evernyl</td><td>$2/kg</td><td>67%</td></tr>
            <tr><td>龍涎香</td><td>$500/kg</td><td>Ambroxide</td><td>$40/kg</td><td>92%</td></tr>
          </tbody>
        </table>
        <pre><code>新配方總成本：~$75/kg（節省50%）

感官驗證（40位專業評香師）：
能區分兩者：24人 (60%)
相似度評分：88.5% (目標 >85%) ✓ 成功</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-3'" class="chapter-section">
        <h2 id="sec-7-3">案例3：IFRA合規的配方改良</h2>
        <h3>問題</h3>
        <pre><code>受限成分：
橡苔萃取 (2%) - IFRA限制：0.1%
佛手柑精油 (3%) - 光毒性，限制15 ppm bergapten
肉桂醛 (1%) - 致敏，限制因應用而異</code></pre>

        <h3>解決策略</h3>
        <pre><code>替代1：橡苔 → Evernyl (1.2%) + Veramoss (1.4%) → IFRA合規
替代2：佛手柑 → FCF版本（Bergapten <1 ppm）
替代3：肉桂醛 → 降至0.15% + α-戊基肉桂醛(0.3%) + 苯甲醛(0.05%)

IFRA致敏物質總和計算：
香葉醇 2.5% + 香茅醇 3.2% + 芳樟醇 1.8% + 檸檬醛 0.8% + 苯甲醇 0.5%
= 8.8% (類別4限制 <10%) ✓ 合規</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-4'" class="chapter-section">
        <h2 id="sec-7-4">案例4：氧化穩定性問題診斷</h2>
        <h3>問題描述</h3>
        <pre><code>"產品剛做好很香，但兩個月後變得刺鼻，
顏色也從淡黃變深黃。"</code></pre>

        <h3>診斷</h3>
        <pre><code>GC-MS對比：
新鮮：檸檬醛 2.8%, 芳樟醇 3.5%, 雜質 <0.1%
老化：檸檬醛 1.9%↓, 檸檬酸 0.7%↑, 芳樟醇 2.8%↓, 過氧化物檢出

氧化路徑：
檸檬醛 → 檸檬酸 → 刺鼻味
芳樟醇 → 芳樟醇氫過氧化物 → 6,7-環氧芳樟醇（強致敏！）</code></pre>

        <h3>解決方案</h3>
        <pre><code>方案1 - 抗氧化劑系統：BHT 0.05% + 生育酚 0.1% + EDTA 0.02% + 檸檬酸 0.01%
方案2 - 包裝優化：鋁瓶 + 氮氣封裝 + 降低頂空（<5%）
方案3 - 配方重組：部分替代為穩定衍生物

結果：
無抗氧化劑：檸檬醛損失35%
有抗氧化劑系統：檸檬醛損失5% ✓
貨架期：18個月 → 36個月</code></pre>
      </section>

      <section v-show="activeSection === 'sec-7-5'" class="chapter-section">
        <h2 id="sec-7-5">案例5：複製競品配方的逆向工程</h2>
        <pre><code>GC-MS全譜分析：檢出87個峰，鑑定62個化合物 (71%)

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

        <h2>通用故障排除檢查表</h2>
        <h3>氣味問題</h3>
        <table>
          <thead><tr><th>症狀</th><th>可能原因</th><th>解決方案</th></tr></thead>
          <tbody>
            <tr><td>一噴即衝</td><td>頂香過多</td><td>降低低MW成分，加buffer</td></tr>
            <tr><td>留香差</td><td>基香不足</td><td>增加高MW成分，提高Log P</td></tr>
            <tr><td>中段斷層</td><td>缺中香層</td><td>加入150-200 Da酯類</td></tr>
            <tr><td>變刺鼻</td><td>氧化</td><td>加抗氧化劑，改包裝</td></tr>
            <tr><td>金屬味</td><td>金屬污染</td><td>EDTA螯合，換容器</td></tr>
            <tr><td>太弱</td><td>閾值高</td><td>增加總濃度或換低閾值成分</td></tr>
          </tbody>
        </table>

        <h3>穩定性問題</h3>
        <table>
          <thead><tr><th>症狀</th><th>可能原因</th><th>解決方案</th></tr></thead>
          <tbody>
            <tr><td>變色</td><td>氧化、光照</td><td>抗氧化劑、遮光瓶</td></tr>
            <tr><td>沉澱</td><td>過飽和</td><td>調整溶劑、加增溶劑</td></tr>
            <tr><td>分層</td><td>不互溶</td><td>增加共溶劑</td></tr>
            <tr><td>變酸</td><td>酯水解</td><td>pH調節、低溫儲存</td></tr>
          </tbody>
        </table>

        <h2>本章總結</h2>
        <p><strong>關鍵技能：</strong></p>
        <ol>
          <li>系統診斷：GC-MS + 感官評測</li>
          <li>數據驅動：揮發曲線、優化算法</li>
          <li>創造性解決：替代、重組、協同</li>
          <li>商業意識：成本、法規、市場</li>
        </ol>
        <p><strong>實戰心得：</strong> 問題往往是多因素的。數據分析 + 經驗判斷，持續迭代改進，記錄每一個決策。</p>
      </section>
    </div>
  </ChapterLayout>
</template>

<script>
import ChapterLayout from '../components/ChapterLayout.vue'

export default {
  name: 'Chapter7View',
  components: { ChapterLayout },
  data() {
    return {
      sections: [
        { id: 'sec-7-1', label: '案例1' },
        { id: 'sec-7-2', label: '案例2' },
        { id: 'sec-7-3', label: '案例3' },
        { id: 'sec-7-4', label: '案例4' },
        { id: 'sec-7-5', label: '案例5' }
      ],
      activeSection: 'sec-7-1'
    }
  }
}
</script>
