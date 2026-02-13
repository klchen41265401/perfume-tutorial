<template>
  <div class="encyclopedia">
    <div class="enc-header">
      <h1>{{ t('ch9.title') }}</h1>
      <p class="enc-subtitle">{{ t('ch9.subtitle') }}</p>
    </div>

    <!-- 搜尋與篩選 -->
    <div class="filter-bar">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="t('ch9.searchPlaceholder')"
          class="search-input"
        />
        <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''">✕</button>
      </div>
      <div class="search-hint">
        {{ t('ch9.searchHint') }}
      </div>

      <div class="filter-section">
        <div class="filter-label">{{ t('ch9.olfactoryFamily') }}</div>
        <div class="chip-group">
          <button
            v-for="cat in categoryOptions"
            :key="cat.id"
            class="chip"
            :class="{ active: selectedCategories.has(cat.id) }"
            :style="selectedCategories.has(cat.id) ? { background: cat.color + '22', borderColor: cat.color, color: cat.color } : {}"
            @click="toggleCategory(cat.id)"
          >
            <span class="chip-icon">{{ cat.icon }}</span>
            <span>{{ getLabel(cat) }}</span>
          </button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-label">{{ t('ch9.chemicalStructure') }}</div>
        <div class="chip-group">
          <button
            v-for="fg in functionalGroupOptions"
            :key="fg.id"
            class="chip"
            :class="{ active: selectedFunctionalGroups.has(fg.id) }"
            :style="selectedFunctionalGroups.has(fg.id) ? { background: fg.color + '22', borderColor: fg.color, color: fg.color } : {}"
            @click="toggleFunctionalGroup(fg.id)"
          >
            <span class="chip-chem">⬡</span>
            <span>{{ getLabel(fg) }}</span>
          </button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-label">{{ t('ch9.moleculeFamily') }}</div>
        <div class="chip-group">
          <button
            v-for="mf in moleculeFamilyOptions"
            :key="mf.id"
            class="chip"
            :class="{ active: selectedMoleculeFamilies.has(mf.id) }"
            :style="selectedMoleculeFamilies.has(mf.id) ? { background: mf.color + '22', borderColor: mf.color, color: mf.color } : {}"
            @click="toggleMoleculeFamily(mf.id)"
          >
            <span class="chip-icon">{{ mf.icon }}</span>
            <span>{{ getLabel(mf) }}</span>
          </button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-label">{{ t('ch9.notePosition') }}</div>
        <div class="chip-group">
          <button
            v-for="note in noteOptions"
            :key="note.id"
            class="chip"
            :class="{ active: selectedNotes.has(note.id) }"
            :style="selectedNotes.has(note.id) ? { background: note.color + '22', borderColor: note.color, color: note.color } : {}"
            @click="toggleNote(note.id)"
          >
            {{ getLabel(note) }}
          </button>
        </div>
      </div>

      <!-- 物化性質範圍篩選 -->
      <div class="filter-section">
        <div class="filter-label">{{ t('ch9.physicalProperties') }}</div>
        <div class="range-filters">
          <div class="range-row">
            <span class="range-name">{{ t('ch9.boilingPoint') }}</span>
            <input type="number" v-model.number="bpMin" :placeholder="bpBounds.min + ''" class="range-input" />
            <span class="range-sep">~</span>
            <input type="number" v-model.number="bpMax" :placeholder="bpBounds.max + ''" class="range-input" />
          </div>
          <div class="range-row">
            <span class="range-name">{{ t('ch9.molecularWeight') }}</span>
            <input type="number" v-model.number="mwMin" :placeholder="mwBounds.min + ''" class="range-input" />
            <span class="range-sep">~</span>
            <input type="number" v-model.number="mwMax" :placeholder="mwBounds.max + ''" class="range-input" />
          </div>
          <div class="range-row">
            <span class="range-name">Log P</span>
            <input type="number" v-model.number="logPMin" step="0.1" :placeholder="logPBounds.min + ''" class="range-input" />
            <span class="range-sep">~</span>
            <input type="number" v-model.number="logPMax" step="0.1" :placeholder="logPBounds.max + ''" class="range-input" />
          </div>
        </div>
      </div>

      <div class="filter-meta">
        <span>{{ t('ch9.showing') }} <strong>{{ filteredMolecules.length }}</strong> / {{ allMolecules.length }} {{ t('ch9.molecules') }}</span>
        <button v-if="hasActiveFilters" class="reset-btn" @click="resetFilters">{{ t('ch9.clearFilters') }}</button>
      </div>
    </div>

    <!-- 分子卡片網格 -->
    <div class="molecule-grid">
      <div
        v-for="mol in filteredMolecules"
        :key="mol.id"
        class="mol-card"
        @click="selectMolecule(mol)"
      >
        <!-- 分子結構預覽 -->
        <div class="mol-card-preview">
          <MoleculeRenderer
            :smiles="mol.smiles"
            :name="''"
            :width="180"
            :height="110"
            :show-smiles="false"
          />
        </div>
        <div class="mol-card-body">
          <div class="mol-card-top">
            <span
              class="mol-category-badge"
              :style="{ background: getCategoryColor(mol.category) + '22', color: getCategoryColor(mol.category) }"
            >
              {{ getCategoryIcon(mol.category) }} {{ getCategoryLabel(mol.category) }}
            </span>
            <span
              class="mol-note-badge"
              :style="{ background: getNoteColor(mol.notePosition) + '22', color: getNoteColor(mol.notePosition) }"
            >
              {{ getNoteLabel(mol.notePosition) }}
            </span>
            <span
              class="mol-fg-badge"
              :style="{ background: getFgColor(mol.functionalGroup) + '18', color: getFgColor(mol.functionalGroup) }"
            >
              {{ getFgLabel(mol.functionalGroup) }}
            </span>
            <span
              v-if="mol.moleculeFamily"
              class="mol-family-badge"
              :style="{ background: getMfColor(mol.moleculeFamily) + '18', color: getMfColor(mol.moleculeFamily) }"
            >
              {{ getMfIcon(mol.moleculeFamily) }} {{ getMfLabel(mol.moleculeFamily) }}
            </span>
          </div>
          <div class="mol-card-name">{{ isZh ? mol.name : mol.nameEn }}</div>
          <div class="mol-card-name-en">{{ isZh ? mol.nameEn : mol.name }}</div>
          <div class="mol-card-keywords">
            <span v-for="kw in mol.scentProfile.keywords" :key="kw" class="kw-tag">{{ kw }}</span>
          </div>
          <div class="mol-card-bars">
            <div class="mini-bar" :title="t('ch9.odorIntensity')">
              <span class="mini-label">{{ t('ch9.intensity') }}</span>
              <div class="mini-track"><div class="mini-fill" :style="{ width: (mol.scentProfile.intensity / 5 * 100) + '%', background: '#f59e0b' }"></div></div>
            </div>
            <div class="mini-bar" :title="t('ch9.tenacity')">
              <span class="mini-label">{{ t('ch9.tenacity') }}</span>
              <div class="mini-track"><div class="mini-fill" :style="{ width: (mol.scentProfile.tenacity / 5 * 100) + '%', background: '#8b5cf6' }"></div></div>
            </div>
            <div class="mini-bar" :title="t('ch9.diffusion')">
              <span class="mini-label">{{ t('ch9.diffusion') }}</span>
              <div class="mini-track"><div class="mini-fill" :style="{ width: (mol.scentProfile.diffusion / 5 * 100) + '%', background: '#06b6d4' }"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 空狀態 -->
    <div v-if="filteredMolecules.length === 0" class="empty-state">
      <div class="empty-icon">🧪</div>
      <p>{{ t('ch9.emptyState') }}</p>
      <button class="reset-btn" @click="resetFilters">{{ t('ch9.clearAll') }}</button>
    </div>

    <!-- 分子詳情 Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedMol" class="detail-overlay" @click.self="selectedMol = null">
          <div class="detail-panel">
            <button class="detail-close" @click="selectedMol = null">✕</button>

            <div class="detail-header">
              <div>
                <h2 class="detail-name">{{ isZh ? selectedMol.name : selectedMol.nameEn }}</h2>
                <div class="detail-name-en">{{ isZh ? selectedMol.nameEn : selectedMol.name }}</div>
                <div class="detail-badges">
                  <span class="mol-category-badge" :style="{ background: getCategoryColor(selectedMol.category) + '22', color: getCategoryColor(selectedMol.category) }">
                    {{ getCategoryIcon(selectedMol.category) }} {{ getCategoryLabel(selectedMol.category) }}
                  </span>
                  <span class="mol-note-badge" :style="{ background: getNoteColor(selectedMol.notePosition) + '22', color: getNoteColor(selectedMol.notePosition) }">
                    {{ getNoteLabel(selectedMol.notePosition) }}
                  </span>
                  <span class="mol-fg-badge" :style="{ background: getFgColor(selectedMol.functionalGroup) + '18', color: getFgColor(selectedMol.functionalGroup) }">
                    ⬡ {{ getFgLabel(selectedMol.functionalGroup) }}
                  </span>
                  <span v-if="selectedMol.moleculeFamily" class="mol-family-badge" :style="{ background: getMfColor(selectedMol.moleculeFamily) + '18', color: getMfColor(selectedMol.moleculeFamily) }">
                    {{ getMfIcon(selectedMol.moleculeFamily) }} {{ getMfLabel(selectedMol.moleculeFamily) }} ({{ getMfLabelEn(selectedMol.moleculeFamily) }})
                  </span>
                  <span v-if="selectedMol.cas" class="cas-badge">CAS: {{ selectedMol.cas }}</span>
                </div>
              </div>
            </div>

            <!-- 分子結構 -->
            <div class="detail-structure">
              <MoleculeRenderer
                :smiles="selectedMol.smiles"
                :name="''"
                :width="360"
                :height="220"
                :show-smiles="true"
              />
            </div>

            <!-- 感性描述 -->
            <div class="detail-section">
              <h3>🌬️ {{ t('ch9.odorDescription') }}</h3>
              <p class="scent-description">{{ selectedMol.scentProfile.description }}</p>
              <div class="scent-bars">
                <div class="scent-bar-row">
                  <span class="bar-label">{{ t('ch9.odorIntensity') }}</span>
                  <div class="bar-track"><div class="bar-fill" :style="{ width: (selectedMol.scentProfile.intensity / 5 * 100) + '%', background: 'linear-gradient(90deg, #fbbf24, #f59e0b)' }"></div></div>
                  <span class="bar-value">{{ selectedMol.scentProfile.intensity }}/5</span>
                </div>
                <div class="scent-bar-row">
                  <span class="bar-label">{{ t('ch9.tenacity') }}</span>
                  <div class="bar-track"><div class="bar-fill" :style="{ width: (selectedMol.scentProfile.tenacity / 5 * 100) + '%', background: 'linear-gradient(90deg, #c084fc, #8b5cf6)' }"></div></div>
                  <span class="bar-value">{{ selectedMol.scentProfile.tenacity }}/5</span>
                </div>
                <div class="scent-bar-row">
                  <span class="bar-label">{{ t('ch9.diffusion') }}</span>
                  <div class="bar-track"><div class="bar-fill" :style="{ width: (selectedMol.scentProfile.diffusion / 5 * 100) + '%', background: 'linear-gradient(90deg, #67e8f9, #06b6d4)' }"></div></div>
                  <span class="bar-value">{{ selectedMol.scentProfile.diffusion }}/5</span>
                </div>
              </div>
              <div class="kw-group">
                <span v-for="kw in selectedMol.scentProfile.keywords" :key="kw" class="kw-tag lg">{{ kw }}</span>
              </div>
            </div>

            <!-- 物化性質 -->
            <div class="detail-section">
              <h3>⚗️ {{ t('ch9.physicalProps') }}</h3>
              <table class="prop-table">
                <tbody>
                  <tr v-if="selectedMol.properties.mw"><td>{{ t('ch9.molecularWeightFull') }}</td><td>{{ selectedMol.properties.mw }} g/mol</td></tr>
                  <tr v-if="selectedMol.properties.bp"><td>{{ t('ch9.boilingPointFull') }}</td><td>{{ selectedMol.properties.bp }} °C</td></tr>
                  <tr v-if="selectedMol.properties.logP"><td>Log P</td><td>{{ selectedMol.properties.logP }}</td></tr>
                  <tr v-if="selectedMol.properties.density"><td>{{ t('ch9.density') }}</td><td>{{ selectedMol.properties.density }} g/mL</td></tr>
                  <tr v-if="selectedMol.properties.vaporPressure"><td>{{ t('ch9.vaporPressure') }}</td><td>{{ selectedMol.properties.vaporPressure }} Pa</td></tr>
                  <tr v-if="selectedMol.properties.appearance"><td>{{ t('ch9.appearance') }}</td><td>{{ selectedMol.properties.appearance }}</td></tr>
                  <tr><td>{{ t('ch9.chemicalClass') }}</td><td>{{ getFgLabel(selectedMol.functionalGroup) }} ({{ getFgLabelEn(selectedMol.functionalGroup) }})</td></tr>
                  <tr v-if="selectedMol.moleculeFamily"><td>{{ t('ch9.moleculeFamilyLabel') }}</td><td>{{ getMfIcon(selectedMol.moleculeFamily) }} {{ getMfLabel(selectedMol.moleculeFamily) }} ({{ getMfLabelEn(selectedMol.moleculeFamily) }})</td></tr>
                </tbody>
              </table>
            </div>

            <!-- 天然來源 -->
            <div class="detail-section" v-if="selectedMol.naturalSources && selectedMol.naturalSources.length">
              <h3>🌿 {{ t('ch9.naturalSources') }}</h3>
              <div class="source-tags">
                <span v-for="src in selectedMol.naturalSources" :key="src" class="source-tag">{{ src }}</span>
              </div>
            </div>

            <!-- 調香使用 -->
            <div class="detail-section">
              <h3>🧴 {{ t('ch9.perfumeryUse') }}</h3>
              <table class="prop-table">
                <tbody>
                  <tr><td>{{ t('ch9.typicalDosage') }}</td><td>{{ selectedMol.usage.concentration }}</td></tr>
                  <tr><td>{{ t('ch9.commonPairings') }}</td><td>{{ selectedMol.usage.pairings.join('、') }}</td></tr>
                  <tr><td>{{ t('ch9.classicPerfumes') }}</td><td>{{ selectedMol.usage.perfumes.join('、') }}</td></tr>
                  <tr><td>{{ t('ch9.applicationFields') }}</td><td>{{ selectedMol.usage.applications.join('、') }}</td></tr>
                </tbody>
              </table>
            </div>

            <!-- 安全資訊 -->
            <div class="detail-section" v-if="selectedMol.safety">
              <h3>⚠️ {{ t('ch9.safetyInfo') }}</h3>
              <table class="prop-table">
                <tbody>
                  <tr><td>{{ t('ch9.ifraLimit') }}</td><td>{{ selectedMol.safety.ifra }}</td></tr>
                  <tr><td>{{ t('ch9.euAllergen') }}</td><td>{{ selectedMol.safety.allergen ? t('ch9.yes') : t('ch9.no') }}</td></tr>
                  <tr v-if="selectedMol.safety.note"><td>{{ t('ch9.notes') }}</td><td>{{ selectedMol.safety.note }}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- 底部導航 -->
    <div class="enc-footer-nav">
      <router-link to="/chapter/8" class="nav-btn">{{ t('ch9.prevChapter8') }}</router-link>
      <router-link to="/chapter/10" class="nav-btn">{{ t('ch9.nextChapter10') }}</router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import MoleculeRenderer from '../components/MoleculeRenderer.vue'
import { ENCYCLOPEDIA, CATEGORY_OPTIONS, NOTE_OPTIONS, FUNCTIONAL_GROUP_OPTIONS, MOLECULE_FAMILY_OPTIONS, OLFACTORY_FAMILIES, NOTE_POSITIONS, FUNCTIONAL_GROUPS, MOLECULE_FAMILIES } from '../data/encyclopedia.js'
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'Chapter9View',
  components: { MoleculeRenderer },
  setup() {
    const { getLabel, t, isZh } = useLanguage()
    
    const searchQuery = ref('')
    const selectedCategories = ref(new Set())
    const selectedNotes = ref(new Set())
    const selectedFunctionalGroups = ref(new Set())
    const selectedMoleculeFamilies = ref(new Set())
    const selectedMol = ref(null)

    // Property range filters
    const bpMin = ref(null)
    const bpMax = ref(null)
    const mwMin = ref(null)
    const mwMax = ref(null)
    const logPMin = ref(null)
    const logPMax = ref(null)

    const allMolecules = ENCYCLOPEDIA
    const categoryOptions = CATEGORY_OPTIONS
    const noteOptions = NOTE_OPTIONS
    const functionalGroupOptions = FUNCTIONAL_GROUP_OPTIONS
    const moleculeFamilyOptions = MOLECULE_FAMILY_OPTIONS

    // Compute data bounds for placeholder hints
    const bpBounds = computed(() => {
      const vals = allMolecules.map(m => m.properties.bp).filter(v => v != null)
      return { min: Math.floor(Math.min(...vals)), max: Math.ceil(Math.max(...vals)) }
    })
    const mwBounds = computed(() => {
      const vals = allMolecules.map(m => m.properties.mw).filter(v => v != null)
      return { min: Math.floor(Math.min(...vals)), max: Math.ceil(Math.max(...vals)) }
    })
    const logPBounds = computed(() => {
      const vals = allMolecules.map(m => m.properties.logP).filter(v => v != null)
      return { min: Math.floor(Math.min(...vals) * 10) / 10, max: Math.ceil(Math.max(...vals) * 10) / 10 }
    })

    const hasActiveFilters = computed(() =>
      searchQuery.value ||
      selectedCategories.value.size > 0 ||
      selectedNotes.value.size > 0 ||
      selectedFunctionalGroups.value.size > 0 ||
      selectedMoleculeFamilies.value.size > 0 ||
      bpMin.value != null || bpMax.value != null ||
      mwMin.value != null || mwMax.value != null ||
      logPMin.value != null || logPMax.value != null
    )

    const filteredMolecules = computed(() => {
      let result = allMolecules

      if (searchQuery.value) {
        const q = searchQuery.value.toLowerCase()
        result = result.filter(m => {
          // 基本資訊
          if (m.name.toLowerCase().includes(q)) return true
          if (m.nameEn.toLowerCase().includes(q)) return true
          if (m.cas && m.cas.includes(q)) return true
          
          // 氣味描述
          if (m.scentProfile.keywords.some(k => k.toLowerCase().includes(q))) return true
          if (m.scentProfile.description.toLowerCase().includes(q)) return true
          
          // 標籤
          if (m.tags && m.tags.some(t => t.toLowerCase().includes(q))) return true
          
          // 官能基分類
          if (getFgLabel(m.functionalGroup).toLowerCase().includes(q)) return true
          
          // 嗅覺家族
          if (getCategoryLabel(m.category).toLowerCase().includes(q)) return true
          
          // 香調位置
          if (getNoteLabel(m.notePosition).toLowerCase().includes(q)) return true
          
          // 分子家族
          if (m.moleculeFamily && getMfLabel(m.moleculeFamily).toLowerCase().includes(q)) return true
          
          // 天然來源
          if (m.naturalSources && m.naturalSources.some(s => s.toLowerCase().includes(q))) return true
          
          // 應用範例
          if (m.applications && m.applications.some(a => a.toLowerCase().includes(q))) return true
          
          // 物理性質（數值轉文字搜尋）
          if (m.properties.bp && m.properties.bp.toString().includes(q)) return true
          if (m.properties.mw && m.properties.mw.toString().includes(q)) return true
          if (m.properties.logP && m.properties.logP.toString().includes(q)) return true
          if (m.properties.vp && m.properties.vp.toString().includes(q)) return true
          
          // 氣味閾值
          if (m.scentProfile.threshold && m.scentProfile.threshold.toLowerCase().includes(q)) return true
          
          // 氣味強度
          if (m.scentProfile.intensity && m.scentProfile.intensity.toString().includes(q)) return true
          
          return false
        })
      }

      if (selectedCategories.value.size > 0) {
        result = result.filter(m => selectedCategories.value.has(m.category))
      }

      if (selectedNotes.value.size > 0) {
        result = result.filter(m => selectedNotes.value.has(m.notePosition))
      }

      if (selectedFunctionalGroups.value.size > 0) {
        result = result.filter(m => selectedFunctionalGroups.value.has(m.functionalGroup))
      }

      if (selectedMoleculeFamilies.value.size > 0) {
        result = result.filter(m => m.moleculeFamily && selectedMoleculeFamilies.value.has(m.moleculeFamily))
      }

      // Property range filters
      if (bpMin.value != null) result = result.filter(m => m.properties.bp != null && m.properties.bp >= bpMin.value)
      if (bpMax.value != null) result = result.filter(m => m.properties.bp != null && m.properties.bp <= bpMax.value)
      if (mwMin.value != null) result = result.filter(m => m.properties.mw != null && m.properties.mw >= mwMin.value)
      if (mwMax.value != null) result = result.filter(m => m.properties.mw != null && m.properties.mw <= mwMax.value)
      if (logPMin.value != null) result = result.filter(m => m.properties.logP != null && m.properties.logP >= logPMin.value)
      if (logPMax.value != null) result = result.filter(m => m.properties.logP != null && m.properties.logP <= logPMax.value)

      return result
    })

    function toggleCategory(id) {
      const s = new Set(selectedCategories.value)
      if (s.has(id)) s.delete(id); else s.add(id)
      selectedCategories.value = s
    }
    function toggleNote(id) {
      const s = new Set(selectedNotes.value)
      if (s.has(id)) s.delete(id); else s.add(id)
      selectedNotes.value = s
    }
    function toggleFunctionalGroup(id) {
      const s = new Set(selectedFunctionalGroups.value)
      if (s.has(id)) s.delete(id); else s.add(id)
      selectedFunctionalGroups.value = s
    }
    function toggleMoleculeFamily(id) {
      const s = new Set(selectedMoleculeFamilies.value)
      if (s.has(id)) s.delete(id); else s.add(id)
      selectedMoleculeFamilies.value = s
    }

    function resetFilters() {
      searchQuery.value = ''
      selectedCategories.value = new Set()
      selectedNotes.value = new Set()
      selectedFunctionalGroups.value = new Set()
      selectedMoleculeFamilies.value = new Set()
      bpMin.value = null; bpMax.value = null
      mwMin.value = null; mwMax.value = null
      logPMin.value = null; logPMax.value = null
    }

    function selectMolecule(mol) { selectedMol.value = mol }

    function getCategoryColor(id) { return OLFACTORY_FAMILIES[id]?.color || '#888' }
    function getCategoryIcon(id) { return OLFACTORY_FAMILIES[id]?.icon || '·' }
    function getCategoryLabel(id) { return isZh.value ? (OLFACTORY_FAMILIES[id]?.label || id) : (OLFACTORY_FAMILIES[id]?.labelEn || id) }
    function getNoteColor(id) { return NOTE_POSITIONS[id]?.color || '#888' }
    function getNoteLabel(id) { return isZh.value ? (NOTE_POSITIONS[id]?.label || id) : (NOTE_POSITIONS[id]?.labelEn || id) }
    function getFgColor(id) { return FUNCTIONAL_GROUPS[id]?.color || '#888' }
    function getFgLabel(id) { return isZh.value ? (FUNCTIONAL_GROUPS[id]?.label || id) : (FUNCTIONAL_GROUPS[id]?.labelEn || id) }
    function getFgLabelEn(id) { return FUNCTIONAL_GROUPS[id]?.labelEn || id }
    function getMfColor(id) { return MOLECULE_FAMILIES[id]?.color || '#888' }
    function getMfIcon(id) { return MOLECULE_FAMILIES[id]?.icon || '·' }
    function getMfLabel(id) { return isZh.value ? (MOLECULE_FAMILIES[id]?.label || id) : (MOLECULE_FAMILIES[id]?.labelEn || id) }
    function getMfLabelEn(id) { return MOLECULE_FAMILIES[id]?.labelEn || id }

    return {
      searchQuery, selectedCategories, selectedNotes, selectedFunctionalGroups, selectedMoleculeFamilies, selectedMol,
      allMolecules, categoryOptions, noteOptions, functionalGroupOptions, moleculeFamilyOptions,
      bpMin, bpMax, mwMin, mwMax, logPMin, logPMax,
      bpBounds, mwBounds, logPBounds,
      hasActiveFilters, filteredMolecules,
      toggleCategory, toggleNote, toggleFunctionalGroup, toggleMoleculeFamily, resetFilters, selectMolecule,
      getCategoryColor, getCategoryIcon, getCategoryLabel,
      getNoteColor, getNoteLabel,
      getFgColor, getFgLabel, getFgLabelEn,
      getMfColor, getMfIcon, getMfLabel, getMfLabelEn,
      getLabel, t,
    }
  }
}
</script>

<style scoped>
.encyclopedia {
  max-width: 100%;
}

.enc-header {
  margin-bottom: 1.5rem;
}

.enc-header h1 {
  margin-bottom: 0.5rem;
}

.enc-subtitle {
  color: var(--text-muted);
  font-size: 1.05rem;
}

/* ── 篩選欄 ── */
.filter-bar {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.search-box {
  position: relative;
  margin-bottom: 0.5rem;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1rem;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 2.8rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background: rgba(255,255,255,0.9);
  color: var(--text-primary);
  transition: border var(--transition-fast);
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-gold);
  box-shadow: 0 0 0 3px rgba(202,164,66,0.15);
}

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
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--text-muted);
  padding: 4px 8px;
  border-radius: 50%;
}

.clear-btn:hover { color: var(--text-primary); }

.filter-section {
  margin-bottom: 0.8rem;
}

.filter-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  background: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  font-family: inherit;
  cursor: pointer;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.chip:hover { border-color: var(--accent-gold); transform: translateY(-1px); }
.chip.active { font-weight: 600; border-width: 2px; }
.chip-icon { font-size: 0.95rem; }
.chip-chem { font-size: 0.75rem; opacity: 0.7; }

/* ── 範圍篩選 ── */
.range-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.range-row {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 0.35rem 0.6rem;
}

.range-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
  min-width: 55px;
}

.range-input {
  width: 72px;
  padding: 0.3rem 0.4rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.82rem;
  font-family: inherit;
  text-align: center;
  background: #fff;
  color: var(--text-primary);
}

.range-input:focus {
  outline: none;
  border-color: var(--accent-gold);
}

.range-sep {
  color: var(--text-muted);
  font-size: 0.82rem;
}

.filter-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.88rem;
  color: var(--text-muted);
  padding-top: 0.5rem;
  border-top: 1px solid var(--border-color);
}

.reset-btn {
  background: none;
  border: 1px solid var(--accent-blue);
  color: var(--accent-blue);
  padding: 0.3rem 0.8rem;
  border-radius: 8px;
  font-size: 0.82rem;
  cursor: pointer;
  font-family: inherit;
  transition: all var(--transition-fast);
}

.reset-btn:hover { background: var(--accent-blue); color: #fff; }

/* ── 卡片網格 ── */
.molecule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.mol-card {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.mol-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(245,211,106,0.6);
}

.mol-card-preview {
  background: rgba(248,250,248,0.95);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  padding: 0.4rem;
  overflow: hidden;
}

.mol-card-preview :deep(.molecule-renderer) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.mol-card-preview :deep(img),
.mol-card-preview :deep(canvas) {
  max-width: 100%;
  max-height: 100px;
  object-fit: contain;
}

.mol-card-body {
  padding: 0.8rem 1rem;
}

.mol-card-top {
  display: flex;
  gap: 0.35rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.mol-category-badge,
.mol-note-badge,
.mol-fg-badge,
.mol-family-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.18rem 0.55rem;
  border-radius: 10px;
  white-space: nowrap;
}

.mol-card-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.1rem;
}

.mol-card-name-en {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.mol-card-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.6rem;
}

.kw-tag {
  font-size: 0.72rem;
  padding: 0.12rem 0.45rem;
  border-radius: 7px;
  background: rgba(168,230,207,0.2);
  color: var(--accent-green);
  border: 1px solid rgba(168,230,207,0.4);
}

.kw-tag.lg {
  font-size: 0.88rem;
  padding: 0.3rem 0.7rem;
}

.mol-card-bars {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mini-bar {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.mini-label {
  font-size: 0.68rem;
  color: var(--text-muted);
  min-width: 26px;
}

.mini-track {
  flex: 1;
  height: 4px;
  background: rgba(0,0,0,0.06);
  border-radius: 3px;
  overflow: hidden;
}

.mini-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s;
}

/* ── 空狀態 ── */
.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-muted);
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

/* ── 詳情 Modal ── */
.detail-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem;
  overflow-y: auto;
}

.detail-panel {
  position: relative;
  background: var(--bg-primary);
  border-radius: 20px;
  max-width: 720px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 25px 60px rgba(0,0,0,0.25);
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.detail-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0,0,0,0.06);
  border: none;
  font-size: 1.3rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.detail-close:hover { background: rgba(0,0,0,0.12); color: var(--text-primary); }

.detail-header { margin-bottom: 1rem; }

.detail-name {
  font-size: 1.8rem;
  margin-bottom: 0.2rem !important;
  border-left: none !important;
  padding-left: 0 !important;
}

.detail-name-en {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}

.detail-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.cas-badge {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  background: rgba(0,0,0,0.06);
  color: var(--text-muted);
  font-family: monospace;
}

.detail-structure {
  background: rgba(255,255,255,0.9);
  border-radius: 14px;
  padding: 1rem;
  margin-bottom: 1.2rem;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
}

.detail-section {
  margin-bottom: 1.5rem;
}

.detail-section h3 {
  font-size: 1.15rem;
  color: var(--accent-purple);
  margin-bottom: 0.6rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--border-color);
}

.scent-description {
  font-size: 1rem;
  line-height: 1.9;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  padding: 0.8rem;
  background: rgba(255,255,255,0.7);
  border-radius: 10px;
  border-left: 3px solid var(--accent-gold);
}

.scent-bars {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}

.scent-bar-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.bar-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  min-width: 65px;
}

.bar-track {
  flex: 1;
  height: 8px;
  background: rgba(0,0,0,0.06);
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.bar-value {
  font-size: 0.82rem;
  color: var(--text-secondary);
  font-weight: 600;
  min-width: 28px;
}

.kw-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.prop-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: none;
  border: 1px solid var(--border-color);
  font-size: 0.92rem;
}

.prop-table td {
  padding: 0.6rem 0.8rem;
  border-top: 1px solid var(--border-color);
}

.prop-table tr td:first-child {
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  width: 120px;
  background: rgba(255,255,255,0.5);
}

.prop-table tr td:last-child {
  color: var(--text-secondary);
}

.prop-table tr:first-child td {
  border-top: none;
}

.source-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.source-tag {
  font-size: 0.88rem;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  background: rgba(34,197,94,0.1);
  color: #16a34a;
  border: 1px solid rgba(34,197,94,0.25);
}

/* Modal 動畫 */
.modal-enter-active { transition: all 0.25s ease; }
.modal-leave-active { transition: all 0.2s ease; }
.modal-enter-from { opacity: 0; }
.modal-enter-from .detail-panel { transform: translateY(30px) scale(0.97); }
.modal-leave-to { opacity: 0; }
.modal-leave-to .detail-panel { transform: translateY(20px) scale(0.98); }

/* 底部導航 */
.enc-footer-nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: 2px solid var(--border-color);
  gap: 0.5rem;
  flex-wrap: wrap;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(245,211,106,0.85), rgba(168,230,207,0.85));
  color: var(--text-primary) !important;
  font-weight: 600;
  text-decoration: none !important;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.nav-btn::after { display: none !important; }

.nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* 響應式 */
@media (max-width: 1199px) {
  .molecule-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
}

@media (max-width: 991px) {
  .molecule-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 0.8rem;
  }
  .detail-panel {
    max-width: 90vw;
    padding: 1.5rem;
  }
  .range-filters {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .molecule-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.6rem;
  }

  .detail-overlay {
    padding: 0.75rem;
  }

  .detail-panel {
    padding: 1.25rem;
    max-width: 100%;
    border-radius: 16px;
  }

  .detail-name {
    font-size: 1.4rem;
  }

  .filter-bar {
    padding: 0.9rem;
    border-radius: 12px;
  }

  .chip {
    font-size: 0.78rem;
    padding: 0.28rem 0.6rem;
  }

  .search-input {
    font-size: 0.9rem;
    padding: 0.6rem 2.2rem 0.6rem 2.5rem;
  }

  .mol-card-body {
    padding: 0.6rem 0.8rem;
  }

  .mol-card-name { font-size: 0.95rem; }
  .mol-card-name-en { font-size: 0.72rem; }
  .prop-table { font-size: 0.85rem; }
  .prop-table td { padding: 0.45rem 0.6rem; }
  .prop-table tr td:first-child { width: 100px; }
}

@media (max-width: 479px) {
  .molecule-grid {
    grid-template-columns: 1fr;
  }

  .detail-overlay {
    padding: 0.5rem;
    align-items: flex-start;
  }

  .detail-panel {
    padding: 1rem;
    border-radius: 14px;
  }

  .detail-name {
    font-size: 1.2rem;
  }

  .detail-name-en {
    font-size: 0.85rem;
  }

  .detail-badges {
    gap: 0.25rem;
  }

  .filter-bar {
    padding: 0.75rem;
  }

  .chip-group {
    gap: 0.3rem;
  }

  .chip {
    font-size: 0.72rem;
    padding: 0.22rem 0.5rem;
  }

  .enc-header h1 {
    font-size: 1.4rem;
  }

  .enc-subtitle {
    font-size: 0.88rem;
  }

  .scent-description {
    font-size: 0.88rem;
    padding: 0.6rem;
  }

  .scent-bar-row {
    gap: 0.4rem;
  }

  .bar-label {
    font-size: 0.78rem;
    min-width: 50px;
  }

  .detail-structure {
    padding: 0.5rem;
  }
}
</style>
