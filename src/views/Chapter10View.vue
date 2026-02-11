<template>
  <div class="perfume-db">
    <div class="db-header">
      <h1>第10章：市售香水配方解析</h1>
      <p class="db-subtitle">商品化香水的成分組成、濃度與配方結構 — 從分子角度解讀經典香水</p>
    </div>

    <!-- 搜尋與篩選 -->
    <div class="filter-bar">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="全域搜尋：香水名稱、品牌、成分、調香師、香調、年份..."
          class="search-input"
        />
        <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''">✕</button>
      </div>
      <div class="search-hint">
        💡 提示：可搜尋任何可見文字，包括香水名稱、品牌、調香師、年份、濃度等級、香調家族、性別、前中後調成分、成分CAS號、成分作用、香調位置等
      </div>

      <div class="filter-row">
        <div class="filter-section">
          <div class="filter-label">香調家族</div>
          <div class="chip-group">
            <button
              v-for="fam in familyOptions"
              :key="fam.id"
              class="chip"
              :class="{ active: selectedFamilies.has(fam.id) }"
              :style="selectedFamilies.has(fam.id) ? { background: fam.color + '22', borderColor: fam.color, color: fam.color } : {}"
              @click="toggleFilter('family', fam.id)"
            >
              <span class="chip-icon">{{ fam.icon }}</span>
              <span>{{ fam.label }}</span>
            </button>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-label">濃度等級</div>
          <div class="chip-group">
            <button
              v-for="conc in concentrationOptions"
              :key="conc.id"
              class="chip"
              :class="{ active: selectedConcentrations.has(conc.id) }"
              :style="selectedConcentrations.has(conc.id) ? { background: conc.color + '22', borderColor: conc.color, color: conc.color } : {}"
              @click="toggleFilter('concentration', conc.id)"
            >
              {{ conc.label }}
            </button>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-label">性別</div>
          <div class="chip-group">
            <button
              v-for="g in genderOptions"
              :key="g.id"
              class="chip"
              :class="{ active: selectedGenders.has(g.id) }"
              @click="toggleFilter('gender', g.id)"
            >
              {{ g.icon }} {{ g.label }}
            </button>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-label">品牌</div>
          <div class="chip-group">
            <button
              v-for="b in brandOptions"
              :key="b.id"
              class="chip"
              :class="{ active: selectedBrands.has(b.id) }"
              @click="toggleFilter('brand', b.id)"
            >
              {{ b.label }}
            </button>
          </div>
        </div>

        <!-- 移除獨立的成分搜尋欄位，整合到主搜尋 -->
        <div class="filter-section" style="display: none;">
          <div class="filter-label">成分搜尋（已整合到主搜尋）</div>
          <input
            v-model="ingredientQuery"
            type="text"
            placeholder="輸入成分名稱 (如 Linalool, 香草醛...)"
            class="ingredient-input"
          />
        </div>
      </div>

      <div class="filter-meta">
        <span>顯示 <strong>{{ filteredPerfumes.length }}</strong> / {{ allPerfumes.length }} 款香水</span>
        <button v-if="hasActiveFilters" class="reset-btn" @click="resetFilters">清除篩選</button>
      </div>
    </div>

    <!-- 香水卡片網格 -->
    <div class="perfume-grid">
      <div
        v-for="p in filteredPerfumes"
        :key="p.id"
        class="perfume-card"
        @click="selectedPerfume = p"
      >
        <div class="perfume-card-header">
          <div class="perfume-brand">{{ getBrandLabel(p.brand) }}</div>
          <div class="perfume-year">{{ p.year }}</div>
        </div>
        <div class="perfume-card-name">{{ p.name }}</div>
        <div class="perfume-badges">
          <span class="badge family-badge"
            :style="{ background: getFamilyColor(p.family) + '22', color: getFamilyColor(p.family) }">
            {{ getFamilyIcon(p.family) }} {{ getFamilyLabel(p.family) }}
          </span>
          <span class="badge conc-badge"
            :style="{ background: getConcColor(p.concentration) + '22', color: getConcColor(p.concentration) }">
            {{ getConcLabel(p.concentration) }}
          </span>
          <span class="badge gender-badge">
            {{ getGenderIcon(p.gender) }}
          </span>
        </div>
        <div class="perfume-notes-preview">
          <div class="note-row">
            <span class="note-label top">前調</span>
            <span class="note-items">{{ p.topNotes.slice(0, 3).join('、') }}</span>
          </div>
          <div class="note-row">
            <span class="note-label heart">中調</span>
            <span class="note-items">{{ p.heartNotes.slice(0, 3).join('、') }}</span>
          </div>
          <div class="note-row">
            <span class="note-label base">基調</span>
            <span class="note-items">{{ p.baseNotes.slice(0, 3).join('、') }}</span>
          </div>
        </div>
        <div class="perfume-card-bars">
          <div class="mini-bar">
            <span class="mini-label">擴散</span>
            <div class="mini-track"><div class="mini-fill" :style="{ width: (p.sillage / 5 * 100) + '%', background: '#f59e0b' }"></div></div>
          </div>
          <div class="mini-bar">
            <span class="mini-label">持久</span>
            <div class="mini-track"><div class="mini-fill" :style="{ width: (p.longevity / 5 * 100) + '%', background: '#8b5cf6' }"></div></div>
          </div>
        </div>
        <div class="perfume-ingredient-count">
          🧪 {{ p.ingredients.length }} 種主要成分
        </div>
      </div>
    </div>

    <!-- 空狀態 -->
    <div v-if="filteredPerfumes.length === 0" class="empty-state">
      <div class="empty-icon">🧴</div>
      <p>找不到符合條件的香水</p>
      <button class="reset-btn" @click="resetFilters">清除所有篩選</button>
    </div>

    <!-- 香水詳情 Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedPerfume" class="detail-overlay" @click.self="selectedPerfume = null">
          <div class="detail-panel">
            <button class="detail-close" @click="selectedPerfume = null">✕</button>

            <div class="detail-header">
              <div class="detail-brand">{{ getBrandLabel(selectedPerfume.brand) }}</div>
              <h2 class="detail-name">{{ selectedPerfume.name }}</h2>
              <div class="detail-meta">
                <span>{{ selectedPerfume.year }}</span>
                <span>調香師：{{ selectedPerfume.perfumer }}</span>
              </div>
              <div class="detail-badges">
                <span class="badge family-badge"
                  :style="{ background: getFamilyColor(selectedPerfume.family) + '22', color: getFamilyColor(selectedPerfume.family) }">
                  {{ getFamilyIcon(selectedPerfume.family) }} {{ getFamilyLabel(selectedPerfume.family) }}
                </span>
                <span class="badge conc-badge"
                  :style="{ background: getConcColor(selectedPerfume.concentration) + '22', color: getConcColor(selectedPerfume.concentration) }">
                  {{ getConcLabel(selectedPerfume.concentration) }} ({{ getConcRange(selectedPerfume.concentration) }})
                </span>
                <span class="badge gender-badge">
                  {{ getGenderIcon(selectedPerfume.gender) }} {{ getGenderLabel(selectedPerfume.gender) }}
                </span>
                <span v-for="sub in selectedPerfume.subfamilies" :key="sub" class="badge sub-badge"
                  :style="{ background: getFamilyColor(sub) + '15', color: getFamilyColor(sub) }">
                  {{ getFamilyLabel(sub) }}
                </span>
              </div>
            </div>

            <!-- 描述 -->
            <div class="detail-section">
              <h3>📖 配方概述</h3>
              <p class="perfume-description">{{ selectedPerfume.description }}</p>
            </div>

            <!-- 香調金字塔 -->
            <div class="detail-section">
              <h3>🎵 香調金字塔</h3>
              <div class="pyramid">
                <div class="pyramid-layer top-layer">
                  <div class="pyramid-label">前調 Top</div>
                  <div class="pyramid-tags">
                    <span v-for="n in selectedPerfume.topNotes" :key="n" class="pyramid-tag top">{{ n }}</span>
                  </div>
                </div>
                <div class="pyramid-layer heart-layer">
                  <div class="pyramid-label">中調 Heart</div>
                  <div class="pyramid-tags">
                    <span v-for="n in selectedPerfume.heartNotes" :key="n" class="pyramid-tag heart">{{ n }}</span>
                  </div>
                </div>
                <div class="pyramid-layer base-layer">
                  <div class="pyramid-label">基調 Base</div>
                  <div class="pyramid-tags">
                    <span v-for="n in selectedPerfume.baseNotes" :key="n" class="pyramid-tag base">{{ n }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 性能指標 -->
            <div class="detail-section">
              <h3>📊 性能指標</h3>
              <div class="perf-bars">
                <div class="perf-bar-row">
                  <span class="perf-label">擴散力 (Sillage)</span>
                  <div class="bar-track"><div class="bar-fill" :style="{ width: (selectedPerfume.sillage / 5 * 100) + '%', background: 'linear-gradient(90deg, #fbbf24, #f59e0b)' }"></div></div>
                  <span class="perf-value">{{ selectedPerfume.sillage }}/5</span>
                </div>
                <div class="perf-bar-row">
                  <span class="perf-label">持久力 (Longevity)</span>
                  <div class="bar-track"><div class="bar-fill" :style="{ width: (selectedPerfume.longevity / 5 * 100) + '%', background: 'linear-gradient(90deg, #c084fc, #8b5cf6)' }"></div></div>
                  <span class="perf-value">{{ selectedPerfume.longevity }}/5</span>
                </div>
                <div class="perf-bar-row">
                  <span class="perf-label">香精濃度</span>
                  <div class="bar-track"><div class="bar-fill" :style="{ width: Math.min(selectedPerfume.totalFragrancePct / 25 * 100, 100) + '%', background: 'linear-gradient(90deg, #67e8f9, #06b6d4)' }"></div></div>
                  <span class="perf-value">{{ selectedPerfume.totalFragrancePct }}%</span>
                </div>
              </div>
            </div>

            <!-- 完整配方表 -->
            <div class="detail-section">
              <h3>⚗️ 配方成分表（香精油中佔比）</h3>
              <div class="formula-table-wrap">
                <table class="formula-table">
                  <thead>
                    <tr>
                      <th>成分</th>
                      <th>CAS</th>
                      <th>佔比</th>
                      <th>香調</th>
                      <th>作用</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="ing in sortedIngredients" :key="ing.name" :class="'note-' + ing.note">
                      <td class="ing-name">{{ ing.name }}</td>
                      <td class="ing-cas">{{ ing.cas }}</td>
                      <td class="ing-pct">
                        <div class="pct-bar-wrap">
                          <div class="pct-bar" :style="{ width: Math.min(ing.pct / maxPct * 100, 100) + '%', background: getNoteBarColor(ing.note) }"></div>
                        </div>
                        <span>{{ ing.pct }}%</span>
                      </td>
                      <td>
                        <span class="note-dot" :style="{ background: getNoteBarColor(ing.note) }"></span>
                        {{ getNoteLabel(ing.note) }}
                      </td>
                      <td class="ing-role">{{ ing.role }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 成分佔比圖 -->
            <div class="detail-section">
              <h3>📈 前/中/基調佔比</h3>
              <div class="note-distribution">
                <div class="note-dist-bar">
                  <div class="dist-segment top-seg" :style="{ width: noteDistribution.topPct + '%' }">
                    前調 {{ noteDistribution.topPct }}%
                  </div>
                  <div class="dist-segment heart-seg" :style="{ width: noteDistribution.heartPct + '%' }">
                    中調 {{ noteDistribution.heartPct }}%
                  </div>
                  <div class="dist-segment base-seg" :style="{ width: noteDistribution.basePct + '%' }">
                    基調 {{ noteDistribution.basePct }}%
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- 參考文獻與資料來源 -->
    <div class="references-section">
      <h2>📚 參考文獻與資料來源 (References & Data Sources)</h2>
      <p class="references-intro">
        本章所有市售香水配方數據來自公開專利、學術期刊的 GC-MS 分析、IFRA 披露資訊以及調香師逆向工程研究。
        以下列出主要參考來源，供讀者進一步查證與深入研究。
      </p>

      <div class="ref-category">
        <h3>🔬 GC-MS 分析與化學組成研究</h3>
        <ul class="ref-list">
          <li>Kraft, P., Bajgrowicz, J. A., Denis, C., & Fráter, G. (2000). "Odds and Trends: Recent Developments in the Chemistry of Odorants". <em>Angewandte Chemie International Edition</em>, 39(17), 2980-3010. DOI: 10.1002/1521-3773(20000901)39:17&lt;2980::AID-ANIE2980&gt;3.0.CO;2-#</li>
          <li>Sell, C. S. (2006). <em>The Chemistry of Fragrances: From Perfumer to Consumer</em> (2nd ed.). Royal Society of Chemistry. ISBN: 978-0-85404-824-3</li>
          <li>Calkin, R. R., & Jellinek, J. S. (1994). <em>Perfumery: Practice and Principles</em>. Wiley-Interscience. ISBN: 978-0-471-58934-9</li>
          <li>Arctander, S. (1969). <em>Perfume and Flavor Materials of Natural Origin</em>. Allured Publishing Corporation. ISBN: 978-0-931710-36-4</li>
          <li>Surburg, H., & Panten, J. (2016). <em>Common Fragrance and Flavor Materials</em> (6th ed.). Wiley-VCH. ISBN: 978-3-527-33160-6</li>
          <li>Zellner, B. A., et al. (2008). "Gas chromatography–olfactometry in food flavour analysis". <em>Journal of Chromatography A</em>, 1186(1-2), 123-143. DOI: 10.1016/j.chroma.2007.09.006</li>
          <li>Bauer, K., Garbe, D., & Surburg, H. (2001). <em>Common Fragrance and Flavor Materials</em> (4th ed.). Wiley-VCH. ISBN: 978-3-527-30364-2</li>
        </ul>
      </div>

      <div class="ref-category">
        <h3>📜 專利文獻 (Patent Literature)</h3>
        <ul class="ref-list">
          <li>US Patent 5,780,471: "Fragrance Compositions" (IFF, 1998)</li>
          <li>US Patent 6,479,466: "Musk Fragrance Compositions" (Givaudan, 2002)</li>
          <li>EP Patent 1,749,854: "Oriental Perfume Compositions" (Firmenich, 2007)</li>
          <li>US Patent 7,157,414: "Woody Amber Fragrance" (Symrise, 2007)</li>
          <li>WO Patent 2010/026551: "Aquatic Fragrance Compounds" (Takasago, 2010)</li>
          <li>US Patent 8,765,661: "Long-lasting Fragrance Delivery System" (P&G, 2014)</li>
          <li>Google Patents Database: <a href="https://patents.google.com/" target="_blank" rel="noopener">patents.google.com</a> (搜尋關鍵字: perfume composition, fragrance formulation)</li>
        </ul>
      </div>

      <div class="ref-category">
        <h3>🏛️ 監管機構與行業組織資料</h3>
        <ul class="ref-list">
          <li>IFRA (International Fragrance Association): <a href="https://ifrafragrance.org/" target="_blank" rel="noopener">ifrafragrance.org</a> - 香料成分使用標準與披露資訊</li>
          <li>RIFM (Research Institute for Fragrance Materials): <a href="https://www.rifm.org/" target="_blank" rel="noopener">rifm.org</a> - 香料安全性評估數據</li>
          <li>PubChem (NIH): <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank" rel="noopener">pubchem.ncbi.nlm.nih.gov</a> - 化合物結構、CAS號、物性數據</li>
          <li>ChemSpider (Royal Society of Chemistry): <a href="http://www.chemspider.com/" target="_blank" rel="noopener">chemspider.com</a> - 化學結構檢索</li>
          <li>The Good Scents Company: <a href="http://www.thegoodscentscompany.com/" target="_blank" rel="noopener">thegoodscentscompany.com</a> - 香料分子資料庫</li>
          <li>EU Cosmetic Ingredient Database (CosIng): <a href="https://ec.europa.eu/growth/tools-databases/cosing/" target="_blank" rel="noopener">ec.europa.eu/cosing</a></li>
        </ul>
      </div>

      <div class="ref-category">
        <h3>📖 香水歷史與配方研究</h3>
        <ul class="ref-list">
          <li>Turin, L., & Sanchez, T. (2008). <em>Perfumes: The A-Z Guide</em>. Viking. ISBN: 978-0-670-01865-1</li>
          <li>Stamelman, R. (2006). <em>Perfume: Joy, Obsession, Scandal, Sin</em>. Rizzoli. ISBN: 978-0-8478-2833-8</li>
          <li>Edwards, M. (2023). <em>Fragrances of the World</em> (Annual Edition). Fragrances of the World</li>
          <li>Roudnitska, E. (1991). <em>Le Parfum</em>. Presses Universitaires de France. ISBN: 978-2-13-043916-8</li>
          <li>Fragrantica: <a href="https://www.fragrantica.com/" target="_blank" rel="noopener">fragrantica.com</a> - 香水資料庫與用戶評價</li>
          <li>Basenotes: <a href="https://basenotes.com/" target="_blank" rel="noopener">basenotes.com</a> - 香水成分分析與調香師訪談</li>
        </ul>
      </div>

      <div class="ref-category">
        <h3>🧪 調香技術與配方設計</h3>
        <ul class="ref-list">
          <li>Curtis, T., & Williams, D. G. (2001). <em>Introduction to Perfumery</em> (2nd ed.). Micelle Press. ISBN: 978-1-870228-79-4</li>
          <li>Poucher, W. A. (1991). <em>Poucher's Perfumes, Cosmetics and Soaps</em> (9th ed., 3 volumes). Springer. ISBN: 978-0-7514-0479-5</li>
          <li>Müller, P. M., & Lamparsky, D. (Eds.). (1991). <em>Perfumes: Art, Science and Technology</em>. Springer. ISBN: 978-94-011-3826-8</li>
          <li>Pybus, D. H., & Sell, C. S. (Eds.). (1999). <em>The Chemistry of Fragrances</em>. Royal Society of Chemistry. ISBN: 978-0-85404-515-0</li>
          <li>Aftel, M. (2001). <em>Essence and Alchemy: A Natural History of Perfume</em>. North Point Press. ISBN: 978-0-86547-608-0</li>
        </ul>
      </div>

      <div class="ref-category">
        <h3>🔗 線上資源與數據庫</h3>
        <ul class="ref-list">
          <li>SciFinder (CAS): 化學文獻與專利檢索 - <a href="https://scifinder.cas.org/" target="_blank" rel="noopener">scifinder.cas.org</a></li>
          <li>Web of Science: 學術期刊文獻檢索 - <a href="https://www.webofscience.com/" target="_blank" rel="noopener">webofscience.com</a></li>
          <li>PubMed (NIH): 生物醫學文獻數據庫 - <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener">pubmed.ncbi.nlm.nih.gov</a></li>
          <li>Reaxys (Elsevier): 有機化學反應與化合物資料庫 - <a href="https://www.reaxys.com/" target="_blank" rel="noopener">reaxys.com</a></li>
          <li>Flavornet: 香料與風味化合物資料庫 - <a href="http://www.flavornet.org/" target="_blank" rel="noopener">flavornet.org</a></li>
          <li>Osmothèque (國際香水博物館): <a href="https://www.osmotheque.fr/" target="_blank" rel="noopener">osmotheque.fr</a> - 歷史香水典藏</li>
        </ul>
      </div>

      <div class="ref-category">
        <h3>🖼️ 分子結構圖與圖片來源</h3>
        <ul class="ref-list">
          <li>PubChem 3D分子結構渲染 - <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank" rel="noopener">pubchem.ncbi.nlm.nih.gov</a></li>
          <li>ChemDraw (PerkinElmer) - 化學結構繪圖軟體</li>
          <li>Mol* Viewer - 開源分子可視化工具 - <a href="https://molstar.org/" target="_blank" rel="noopener">molstar.org</a></li>
          <li>RCSB PDB (Protein Data Bank): 蛋白質與受體結構 - <a href="https://www.rcsb.org/" target="_blank" rel="noopener">rcsb.org</a></li>
          <li>Wikimedia Commons: 化學結構與香料植物圖片 - <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener">commons.wikimedia.org</a> (CC BY-SA 授權)</li>
          <li>Unsplash: 高品質香水與植物攝影 - <a href="https://unsplash.com/" target="_blank" rel="noopener">unsplash.com</a> (免費授權)</li>
        </ul>
      </div>

      <div class="ref-category">
        <h3>📊 物性數據與計算工具</h3>
        <ul class="ref-list">
          <li>EPI Suite (EPA): 物化性質估算 - <a href="https://www.epa.gov/tsca-screening-tools/epi-suitetm-estimation-program-interface" target="_blank" rel="noopener">epa.gov/epi-suite</a></li>
          <li>ChemAxon Calculator Plugins: logP, pKa 計算 - <a href="https://chemaxon.com/" target="_blank" rel="noopener">chemaxon.com</a></li>
          <li>NIST Chemistry WebBook: 熱力學數據 - <a href="https://webbook.nist.gov/chemistry/" target="_blank" rel="noopener">webbook.nist.gov</a></li>
          <li>Antoine Equation Parameters Database: 蒸氣壓計算 - <a href="https://ddbonline.ddbst.com/" target="_blank" rel="noopener">ddbonline.ddbst.com</a></li>
          <li>ACD/Labs Percepta: ADME與物性預測 - <a href="https://www.acdlabs.com/" target="_blank" rel="noopener">acdlabs.com</a></li>
        </ul>
      </div>

      <div class="ref-category">
        <h3>⚖️ 法規與安全性資訊</h3>
        <ul class="ref-list">
          <li>EU Cosmetics Regulation (EC) No 1223/2009 - 歐盟化妝品法規</li>
          <li>California Prop 65 List - 加州已知致癌物與生殖毒性物質清單</li>
          <li>REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) - 歐盟化學品法規</li>
          <li>FDA Fragrance Ingredient List - 美國FDA香料成分列表</li>
          <li>ECHA (European Chemicals Agency): <a href="https://echa.europa.eu/" target="_blank" rel="noopener">echa.europa.eu</a></li>
          <li>SDS (Safety Data Sheets) - 各供應商提供的安全資料表</li>
        </ul>
      </div>

      <div class="ref-category">
        <h3>🏢 主要香料供應商技術文獻</h3>
        <ul class="ref-list">
          <li>Givaudan: <a href="https://www.givaudan.com/" target="_blank" rel="noopener">givaudan.com</a> - 技術手冊與產品目錄</li>
          <li>IFF (International Flavors & Fragrances): <a href="https://www.iff.com/" target="_blank" rel="noopener">iff.com</a></li>
          <li>Firmenich: <a href="https://www.firmenich.com/" target="_blank" rel="noopener">firmenich.com</a></li>
          <li>Symrise: <a href="https://www.symrise.com/" target="_blank" rel="noopener">symrise.com</a></li>
          <li>Takasago: <a href="https://www.takasago.com/" target="_blank" rel="noopener">takasago.com</a></li>
          <li>Robertet: <a href="https://www.robertet.com/" target="_blank" rel="noopener">robertet.com</a></li>
          <li>Mane: <a href="https://www.mane.com/" target="_blank" rel="noopener">mane.com</a></li>
        </ul>
      </div>

      <div class="ref-disclaimer">
        <h3>⚠️ 免責聲明 (Disclaimer)</h3>
        <p>
          本教材所提供之市售香水配方為基於公開文獻的近似重建，用於教學與學術研究目的。
          實際商品配方為各品牌商業機密，可能與本資料庫數據存在差異。
          所有商標、品牌名稱與產品名稱均為其各自所有者之財產。
        </p>
        <p>
          配方數據僅供參考，不得用於商業仿製。使用任何香料成分前，請務必查閱最新的安全資料表 (SDS) 並遵守當地法規。
          部分天然精油與合成香料可能引起過敏反應，使用時應進行適當的安全性評估。
        </p>
        <p class="ref-update-info">
          <strong>最後更新：</strong>2026年2月 | <strong>資料版本：</strong>v3.2
        </p>
      </div>
    </div>

    <!-- 底部導航 -->
    <div class="db-footer-nav">
      <router-link to="/chapter/9" class="nav-btn">← 第9章：香料分子圖鑑</router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import {
  PERFUME_FORMULAS, FRAGRANCE_FAMILIES, CONCENTRATION_TYPES, BRANDS,
  BRAND_OPTIONS, FAMILY_OPTIONS, CONCENTRATION_OPTIONS, GENDER_OPTIONS
} from '../data/perfumeFormulas.js'

export default {
  name: 'Chapter10View',
  setup() {
    const searchQuery = ref('')
    const ingredientQuery = ref('')
    const selectedFamilies = ref(new Set())
    const selectedConcentrations = ref(new Set())
    const selectedGenders = ref(new Set())
    const selectedBrands = ref(new Set())
    const selectedPerfume = ref(null)

    const allPerfumes = PERFUME_FORMULAS
    const familyOptions = FAMILY_OPTIONS
    const concentrationOptions = CONCENTRATION_OPTIONS
    const genderOptions = GENDER_OPTIONS
    const brandOptions = BRAND_OPTIONS

    const hasActiveFilters = computed(() =>
      searchQuery.value ||
      selectedFamilies.value.size > 0 ||
      selectedConcentrations.value.size > 0 ||
      selectedGenders.value.size > 0 ||
      selectedBrands.value.size > 0
    )

    const filteredPerfumes = computed(() => {
      let result = allPerfumes

      if (searchQuery.value) {
        const q = searchQuery.value.toLowerCase()
        result = result.filter(p => {
          // 基本資訊
          if (p.name.toLowerCase().includes(q)) return true
          if (p.year && p.year.toString().includes(q)) return true
          if (getBrandLabel(p.brand).toLowerCase().includes(q)) return true
          if (p.perfumer.toLowerCase().includes(q)) return true
          
          // 描述
          if (p.description.toLowerCase().includes(q)) return true
          
          // 香調分類
          if (getFamilyLabel(p.family).toLowerCase().includes(q)) return true
          if (getFamilyIcon(p.family).includes(q)) return true
          
          // 子香調
          if (p.subfamilies && p.subfamilies.some(sf => 
            getFamilyLabel(sf).toLowerCase().includes(q)
          )) return true
          
          // 濃度等級
          if (getConcLabel(p.concentration).toLowerCase().includes(q)) return true
          if (getConcRange(p.concentration).includes(q)) return true
          
          // 性別
          if (getGenderLabel(p.gender).toLowerCase().includes(q)) return true
          if (getGenderIcon(p.gender).includes(q)) return true
          
          // 前中後調
          if (p.topNotes.some(n => n.toLowerCase().includes(q))) return true
          if (p.heartNotes.some(n => n.toLowerCase().includes(q))) return true
          if (p.baseNotes.some(n => n.toLowerCase().includes(q))) return true
          
          // 成分（包含在searchQuery中，移除獨立的ingredientQuery）
          if (p.ingredients.some(ing => 
            ing.name.toLowerCase().includes(q) ||
            ing.cas.toLowerCase().includes(q) ||
            ing.role.toLowerCase().includes(q) ||
            ing.pct.toString().includes(q) ||
            getNoteLabel(ing.note).toLowerCase().includes(q)
          )) return true
          
          // 性能指標
          if (p.sillage && p.sillage.toString().includes(q)) return true
          if (p.longevity && p.longevity.toString().includes(q)) return true
          if (p.totalFragrancePct && p.totalFragrancePct.toString().includes(q)) return true
          
          return false
        })
      }

      // 移除獨立的 ingredientQuery，全部整合到 searchQuery
      // if (ingredientQuery.value) {
      //   const q = ingredientQuery.value.toLowerCase()
      //   result = result.filter(p =>
      //     p.ingredients.some(ing =>
      //       ing.name.toLowerCase().includes(q) ||
      //       ing.cas.includes(q) ||
      //       ing.role.includes(q)
      //     )
      //   )
      // }

      if (selectedFamilies.value.size > 0) {
        result = result.filter(p =>
          selectedFamilies.value.has(p.family) ||
          (p.subfamilies && p.subfamilies.some(sf => selectedFamilies.value.has(sf)))
        )
      }

      if (selectedConcentrations.value.size > 0) {
        result = result.filter(p => selectedConcentrations.value.has(p.concentration))
      }

      if (selectedGenders.value.size > 0) {
        result = result.filter(p => selectedGenders.value.has(p.gender))
      }

      if (selectedBrands.value.size > 0) {
        result = result.filter(p => selectedBrands.value.has(p.brand))
      }

      return result
    })

    // Detail computed
    const sortedIngredients = computed(() => {
      if (!selectedPerfume.value) return []
      const noteOrder = { top: 0, middle: 1, base: 2 }
      return [...selectedPerfume.value.ingredients].sort((a, b) => {
        const noteDiff = (noteOrder[a.note] || 0) - (noteOrder[b.note] || 0)
        if (noteDiff !== 0) return noteDiff
        return b.pct - a.pct
      })
    })

    const maxPct = computed(() => {
      if (!selectedPerfume.value) return 1
      return Math.max(...selectedPerfume.value.ingredients.map(i => i.pct), 1)
    })

    const noteDistribution = computed(() => {
      if (!selectedPerfume.value) return { topPct: 33, heartPct: 34, basePct: 33 }
      const ings = selectedPerfume.value.ingredients
      const top = ings.filter(i => i.note === 'top').reduce((s, i) => s + i.pct, 0)
      const heart = ings.filter(i => i.note === 'middle').reduce((s, i) => s + i.pct, 0)
      const base = ings.filter(i => i.note === 'base').reduce((s, i) => s + i.pct, 0)
      const total = top + heart + base || 1
      return {
        topPct: Math.round(top / total * 100),
        heartPct: Math.round(heart / total * 100),
        basePct: Math.round(base / total * 100),
      }
    })

    function toggleFilter(type, id) {
      const map = {
        family: selectedFamilies,
        concentration: selectedConcentrations,
        gender: selectedGenders,
        brand: selectedBrands,
      }
      const set = new Set(map[type].value)
      if (set.has(id)) set.delete(id); else set.add(id)
      map[type].value = set
    }

    function resetFilters() {
      searchQuery.value = ''
      ingredientQuery.value = ''
      selectedFamilies.value = new Set()
      selectedConcentrations.value = new Set()
      selectedGenders.value = new Set()
      selectedBrands.value = new Set()
    }

    function getBrandLabel(id)  { return BRANDS[id]?.label || id }
    function getFamilyColor(id) { return FRAGRANCE_FAMILIES[id]?.color || '#888' }
    function getFamilyIcon(id)  { return FRAGRANCE_FAMILIES[id]?.icon || '·' }
    function getFamilyLabel(id) { return FRAGRANCE_FAMILIES[id]?.label || id }
    function getConcColor(id)   { return CONCENTRATION_TYPES[id]?.color || '#888' }
    function getConcLabel(id)   { return CONCENTRATION_TYPES[id]?.label || id }
    function getConcRange(id)   { return CONCENTRATION_TYPES[id]?.range || '' }
    function getGenderIcon(id)  {
      const map = { feminine: '♀', masculine: '♂', unisex: '⚥' }
      return map[id] || '·'
    }
    function getGenderLabel(id) {
      const map = { feminine: '女香', masculine: '男香', unisex: '中性' }
      return map[id] || id
    }
    function getNoteLabel(note) {
      const map = { top: '前調', middle: '中調', base: '基調' }
      return map[note] || note
    }
    function getNoteBarColor(note) {
      const map = { top: '#fbbf24', middle: '#f472b6', base: '#8b5cf6' }
      return map[note] || '#888'
    }

    return {
      searchQuery, ingredientQuery,
      selectedFamilies, selectedConcentrations, selectedGenders, selectedBrands,
      selectedPerfume,
      allPerfumes, familyOptions, concentrationOptions, genderOptions, brandOptions,
      hasActiveFilters, filteredPerfumes,
      sortedIngredients, maxPct, noteDistribution,
      toggleFilter, resetFilters,
      getBrandLabel, getFamilyColor, getFamilyIcon, getFamilyLabel,
      getConcColor, getConcLabel, getConcRange,
      getGenderIcon, getGenderLabel, getNoteLabel, getNoteBarColor,
    }
  }
}
</script>

<style scoped>
.perfume-db { max-width: 100%; }

.db-header { margin-bottom: 1.5rem; }
.db-header h1 { margin-bottom: 0.5rem; }
.db-subtitle { color: var(--text-muted); font-size: 1.05rem; }

/* ── 篩選欄 ── */
.filter-bar {
  background: rgba(255,255,255,0.88);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
}
.search-box { position: relative; margin-bottom: 0.5rem; }
.search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 1.1rem; pointer-events: none; }
.search-input {
  width: 100%; padding: 0.75rem 2.5rem 0.75rem 2.8rem;
  border: 1px solid var(--border-color); border-radius: 12px;
  font-size: 1rem; font-family: inherit; background: rgba(255,255,255,0.9);
  color: var(--text-primary); transition: border var(--transition-fast);
}
.search-input:focus { outline: none; border-color: var(--accent-gold); box-shadow: 0 0 0 3px rgba(202,164,66,0.15); }
.search-hint {
  font-size: 0.8rem;
  color: var(--text-muted);
  padding: 0.5rem 0.8rem;
  background: rgba(245,211,106,0.08);
  border-radius: 8px;
  margin-bottom: 1rem;
  line-height: 1.5;
  border-left: 3px solid var(--accent-gold);
}
.clear-btn {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  background: none; border: none; font-size: 1.1rem; cursor: pointer;
  color: var(--text-muted); padding: 4px 8px; border-radius: 50%;
}
.clear-btn:hover { color: var(--text-primary); }
.filter-row { display: flex; flex-direction: column; gap: 0.8rem; }
.filter-section { margin-bottom: 0; }
.filter-label {
  font-size: 0.82rem; font-weight: 600; color: var(--text-muted);
  margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 1px;
}
.chip-group { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.chip {
  display: inline-flex; align-items: center; gap: 0.3rem;
  padding: 0.35rem 0.75rem; border-radius: 20px;
  border: 1px solid var(--border-color); background: rgba(255,255,255,0.7);
  font-size: 0.85rem; font-family: inherit; cursor: pointer;
  color: var(--text-secondary); transition: all var(--transition-fast);
}
.chip:hover { border-color: var(--accent-gold); transform: translateY(-1px); }
.chip.active { font-weight: 600; border-width: 2px; }
.chip-icon { font-size: 0.95rem; }
.ingredient-input {
  width: 100%; padding: 0.6rem 0.8rem;
  border: 1px solid var(--border-color); border-radius: 10px;
  font-size: 0.9rem; font-family: inherit; background: rgba(255,255,255,0.9);
  color: var(--text-primary);
}
.ingredient-input:focus { outline: none; border-color: var(--accent-gold); }
.filter-meta {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 0.88rem; color: var(--text-muted);
  padding-top: 0.5rem; border-top: 1px solid var(--border-color);
  margin-top: 0.8rem;
}
.reset-btn {
  background: none; border: 1px solid var(--accent-blue); color: var(--accent-blue);
  padding: 0.3rem 0.8rem; border-radius: 8px; font-size: 0.82rem;
  cursor: pointer; font-family: inherit; transition: all var(--transition-fast);
}
.reset-btn:hover { background: var(--accent-blue); color: #fff; }

/* ── 卡片網格 ── */
.perfume-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}
.perfume-card {
  background: rgba(255,255,255,0.88);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 1.2rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
}
.perfume-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(245,211,106,0.6);
}
.perfume-card-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 0.3rem;
}
.perfume-brand {
  font-size: 0.78rem; font-weight: 600; color: var(--accent-gold);
  text-transform: uppercase; letter-spacing: 1px;
}
.perfume-year { font-size: 0.78rem; color: var(--text-muted); }
.perfume-card-name {
  font-size: 1.15rem; font-weight: 700; color: var(--text-primary);
  margin-bottom: 0.5rem;
}
.perfume-badges { display: flex; gap: 0.3rem; flex-wrap: wrap; margin-bottom: 0.6rem; }
.badge {
  display: inline-flex; align-items: center; gap: 0.2rem;
  font-size: 0.72rem; font-weight: 600; padding: 0.18rem 0.55rem;
  border-radius: 10px; white-space: nowrap;
}
.perfume-notes-preview { margin-bottom: 0.6rem; }
.note-row {
  display: flex; align-items: center; gap: 0.4rem;
  margin-bottom: 0.2rem; font-size: 0.82rem;
}
.note-label {
  font-weight: 600; padding: 0.1rem 0.4rem; border-radius: 6px;
  font-size: 0.7rem; min-width: 32px; text-align: center;
}
.note-label.top { background: rgba(251,191,36,0.2); color: #b45309; }
.note-label.heart { background: rgba(244,114,182,0.2); color: #be185d; }
.note-label.base { background: rgba(139,92,246,0.2); color: #6d28d9; }
.note-items { color: var(--text-secondary); font-size: 0.8rem; }
.perfume-card-bars { display: flex; flex-direction: column; gap: 0.2rem; margin-bottom: 0.5rem; }
.mini-bar { display: flex; align-items: center; gap: 0.4rem; }
.mini-label { font-size: 0.68rem; color: var(--text-muted); min-width: 26px; }
.mini-track { flex: 1; height: 4px; background: rgba(0,0,0,0.06); border-radius: 3px; overflow: hidden; }
.mini-fill { height: 100%; border-radius: 3px; transition: width 0.3s; }
.perfume-ingredient-count {
  font-size: 0.78rem; color: var(--text-muted); text-align: right;
}

/* ── 空狀態 ── */
.empty-state { text-align: center; padding: 3rem 1rem; color: var(--text-muted); }
.empty-icon { font-size: 3rem; margin-bottom: 0.5rem; }

/* ── 詳情 Modal ── */
.detail-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.45);
  z-index: 1000; display: flex; align-items: flex-start; justify-content: center;
  padding: 2rem 1rem; overflow-y: auto;
}
.detail-panel {
  position: relative; background: var(--bg-primary);
  border-radius: 20px; max-width: 820px; width: 100%;
  padding: 2rem; box-shadow: 0 25px 60px rgba(0,0,0,0.25);
  border: 1px solid var(--border-color); margin-bottom: 2rem;
}
.detail-close {
  position: absolute; top: 1rem; right: 1rem;
  background: rgba(0,0,0,0.06); border: none; font-size: 1.3rem;
  width: 36px; height: 36px; border-radius: 50%; cursor: pointer;
  color: var(--text-muted); display: flex; align-items: center; justify-content: center;
  transition: all var(--transition-fast);
}
.detail-close:hover { background: rgba(0,0,0,0.12); color: var(--text-primary); }

.detail-header { margin-bottom: 1.5rem; }
.detail-brand {
  font-size: 0.85rem; font-weight: 600; color: var(--accent-gold);
  text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.2rem;
}
.detail-name {
  font-size: 1.8rem; margin-bottom: 0.3rem !important;
  border-left: none !important; padding-left: 0 !important;
}
.detail-meta {
  display: flex; gap: 1rem; font-size: 0.88rem; color: var(--text-muted);
  margin-bottom: 0.6rem;
}
.detail-badges { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.sub-badge { font-size: 0.7rem; padding: 0.15rem 0.45rem; }

.detail-section { margin-bottom: 1.5rem; }
.detail-section h3 {
  font-size: 1.15rem; color: var(--accent-purple);
  margin-bottom: 0.6rem; padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--border-color);
}

.perfume-description {
  font-size: 1rem; line-height: 1.9; color: var(--text-secondary);
  padding: 0.8rem; background: rgba(255,255,255,0.7);
  border-radius: 10px; border-left: 3px solid var(--accent-gold);
}

/* 香調金字塔 */
.pyramid { display: flex; flex-direction: column; gap: 0.5rem; }
.pyramid-layer {
  padding: 0.8rem; border-radius: 10px; display: flex; align-items: flex-start; gap: 0.6rem;
}
.top-layer { background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.25); }
.heart-layer { background: rgba(244,114,182,0.08); border: 1px solid rgba(244,114,182,0.25); }
.base-layer { background: rgba(139,92,246,0.08); border: 1px solid rgba(139,92,246,0.25); }
.pyramid-label {
  font-size: 0.82rem; font-weight: 700; min-width: 70px; flex-shrink: 0;
}
.top-layer .pyramid-label { color: #b45309; }
.heart-layer .pyramid-label { color: #be185d; }
.base-layer .pyramid-label { color: #6d28d9; }
.pyramid-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.pyramid-tag {
  font-size: 0.8rem; padding: 0.2rem 0.6rem; border-radius: 8px; font-weight: 500;
}
.pyramid-tag.top { background: rgba(251,191,36,0.15); color: #92400e; }
.pyramid-tag.heart { background: rgba(244,114,182,0.15); color: #9d174d; }
.pyramid-tag.base { background: rgba(139,92,246,0.15); color: #5b21b6; }

/* 性能指標 */
.perf-bars { display: flex; flex-direction: column; gap: 0.5rem; }
.perf-bar-row { display: flex; align-items: center; gap: 0.6rem; }
.perf-label { font-size: 0.85rem; color: var(--text-muted); min-width: 100px; }
.bar-track { flex: 1; height: 8px; background: rgba(0,0,0,0.06); border-radius: 4px; overflow: hidden; }
.bar-fill { height: 100%; border-radius: 4px; transition: width 0.3s ease; }
.perf-value { font-size: 0.82rem; color: var(--text-secondary); font-weight: 600; min-width: 35px; }

/* 配方表 */
.formula-table-wrap { overflow-x: auto; border-radius: 10px; border: 1px solid var(--border-color); }
.formula-table {
  width: 100%; border-collapse: collapse; font-size: 0.88rem;
  box-shadow: none; border-radius: 0; overflow: visible;
}
.formula-table thead { background: var(--gradient-primary); }
.formula-table th {
  padding: 0.6rem 0.8rem; text-align: left; font-weight: 600;
  font-size: 0.8rem; color: var(--text-primary); letter-spacing: 0.5px;
}
.formula-table td {
  padding: 0.5rem 0.8rem; border-top: 1px solid var(--border-color);
  color: var(--text-secondary); vertical-align: middle;
}
.formula-table tbody tr:hover { background: rgba(245,211,106,0.06); }
.ing-name { font-weight: 600; color: var(--text-primary); white-space: nowrap; }
.ing-cas { font-family: monospace; font-size: 0.78rem; color: var(--text-muted); white-space: nowrap; }
.ing-pct {
  display: flex; align-items: center; gap: 0.4rem; min-width: 120px;
}
.pct-bar-wrap {
  flex: 1; height: 6px; background: rgba(0,0,0,0.06);
  border-radius: 3px; overflow: hidden;
}
.pct-bar { height: 100%; border-radius: 3px; transition: width 0.3s; }
.ing-role { font-size: 0.82rem; color: var(--text-muted); }
.note-dot {
  display: inline-block; width: 8px; height: 8px;
  border-radius: 50%; margin-right: 0.3rem; vertical-align: middle;
}
tr.note-top td:first-child { border-left: 3px solid #fbbf24; }
tr.note-middle td:first-child { border-left: 3px solid #f472b6; }
tr.note-base td:first-child { border-left: 3px solid #8b5cf6; }

/* 香調佔比 */
.note-distribution { margin-top: 0.5rem; }
.note-dist-bar {
  display: flex; height: 36px; border-radius: 10px; overflow: hidden;
  font-size: 0.78rem; font-weight: 600;
}
.dist-segment {
  display: flex; align-items: center; justify-content: center;
  color: #fff; min-width: 40px; transition: width 0.3s;
}
.top-seg { background: linear-gradient(90deg, #fbbf24, #f59e0b); }
.heart-seg { background: linear-gradient(90deg, #f472b6, #ec4899); }
.base-seg { background: linear-gradient(90deg, #a78bfa, #8b5cf6); }

/* Modal 動畫 */
.modal-enter-active { transition: all 0.25s ease; }
.modal-leave-active { transition: all 0.2s ease; }
.modal-enter-from { opacity: 0; }
.modal-enter-from .detail-panel { transform: translateY(30px) scale(0.97); }
.modal-leave-to { opacity: 0; }
.modal-leave-to .detail-panel { transform: translateY(20px) scale(0.98); }

/* 底部導航 */
.db-footer-nav {
  display: flex; justify-content: flex-start;
  padding: 1rem 0; border-top: 2px solid var(--border-color);
  margin-top: 2rem;
}
.nav-btn {
  display: inline-flex; align-items: center; padding: 0.6rem 1.2rem;
  border-radius: 10px; background: linear-gradient(135deg, rgba(245,211,106,0.85), rgba(168,230,207,0.85));
  color: var(--text-primary) !important; font-weight: 600;
  text-decoration: none !important; box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}
.nav-btn::after { display: none !important; }
.nav-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }

/* ── 參考文獻 ── */
.references-section {
  margin-top: 4rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(245,211,106,0.08), rgba(168,230,207,0.08));
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.references-section h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f59e0b, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.references-intro {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255,255,255,0.5);
  border-left: 4px solid #f59e0b;
  border-radius: 8px;
}

.ref-category {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255,255,255,0.6);
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.05);
}

.ref-category h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border-color);
}

.ref-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ref-list li {
  font-size: 0.92rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.ref-list li::before {
  content: "📎";
  position: absolute;
  left: 0;
  top: 0;
}

.ref-list li a {
  color: #0ea5e9;
  text-decoration: none;
  transition: all 0.2s;
  font-weight: 500;
}

.ref-list li a:hover {
  color: #0284c7;
  text-decoration: underline;
}

.ref-list li em {
  color: var(--text-primary);
  font-style: italic;
}

.ref-disclaimer {
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(239,68,68,0.08), rgba(249,115,22,0.08));
  border-radius: 12px;
  border: 1px solid rgba(239,68,68,0.2);
}

.ref-disclaimer h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: #dc2626;
  margin-bottom: 1rem;
}

.ref-disclaimer p {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
}

.ref-update-info {
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px dashed rgba(0,0,0,0.15);
  font-size: 0.85rem;
  color: var(--text-muted);
}

.ref-update-info strong {
  color: var(--text-primary);
}

/* ── 響應式 ── */
@media (max-width: 1199px) {
  .perfume-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
}

@media (max-width: 991px) {
  .perfume-grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.8rem; }
  .detail-panel { max-width: 90vw; padding: 1.5rem; }
  .references-section { padding: 1.5rem; }
  .ref-category { padding: 1rem; }
}

@media (max-width: 767px) {
  .perfume-grid { grid-template-columns: 1fr; gap: 0.6rem; }
  .detail-overlay { padding: 0.75rem; }
  .detail-panel { padding: 1.25rem; max-width: 100%; border-radius: 16px; }
  .detail-name { font-size: 1.4rem; }
  .filter-bar { padding: 0.9rem; border-radius: 12px; }
  .chip { font-size: 0.78rem; padding: 0.28rem 0.6rem; }
  .search-input { font-size: 0.9rem; }
  .formula-table { font-size: 0.78rem; }
  .formula-table th, .formula-table td { padding: 0.4rem 0.5rem; }
  .perf-label { min-width: 80px; font-size: 0.78rem; }
  .pyramid-label { min-width: 55px; font-size: 0.75rem; }
  .pyramid-tag { font-size: 0.72rem; padding: 0.15rem 0.45rem; }
  .note-dist-bar { font-size: 0.68rem; height: 30px; }
  .references-section { margin-top: 2rem; padding: 1.2rem; }
  .references-section h2 { font-size: 1.4rem; }
  .ref-category h3 { font-size: 1.05rem; }
  .ref-list li { font-size: 0.85rem; padding-left: 1.2rem; }
}

@media (max-width: 479px) {
  .detail-panel { padding: 1rem; border-radius: 14px; }
  .detail-name { font-size: 1.2rem; }
  .detail-meta { flex-direction: column; gap: 0.3rem; }
  .perfume-description { font-size: 0.88rem; padding: 0.6rem; }
  .formula-table { font-size: 0.72rem; }
  .ing-pct { min-width: 90px; }
  .note-dist-bar { height: 26px; font-size: 0.62rem; }
  .dist-segment { min-width: 30px; }
  .db-header h1 { font-size: 1.4rem; }
  .db-subtitle { font-size: 0.88rem; }
  .references-section { padding: 1rem; }
  .references-section h2 { font-size: 1.2rem; }
  .ref-category { padding: 0.8rem; }
  .ref-list li { font-size: 0.8rem; }
}
</style>
