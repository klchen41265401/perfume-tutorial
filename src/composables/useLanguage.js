// ============================================================
// 全域語言切換系統
// Global Language Toggle System
// ============================================================

import { ref, computed } from 'vue'
import { t as translate } from '../locales/translations.js'

// 支援的語言
const LANGUAGES = {
  zh: { id: 'zh', label: '中文', labelEn: 'Chinese', icon: '🇨🇳' },
  en: { id: 'en', label: 'English', labelEn: 'English', icon: '🇬🇧' }
}

// 從 localStorage 讀取或預設為中文 (驗證有效性)
const savedLang = localStorage.getItem('app-language')
const currentLang = ref((savedLang && LANGUAGES[savedLang]) ? savedLang : 'zh')

/**
 * 語言切換 Composable
 */
export function useLanguage() {
  // 切換語言
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh'
    localStorage.setItem('app-language', currentLang.value)
  }

  // 設定特定語言
  const setLanguage = (lang) => {
    if (LANGUAGES[lang]) {
      currentLang.value = lang
      localStorage.setItem('app-language', lang)
    }
  }

  // 當前語言資訊 (確保總是返回有效對象)
  const language = computed(() => LANGUAGES[currentLang.value] || LANGUAGES.zh)

  // 是否為中文
  const isZh = computed(() => currentLang.value === 'zh')

  // 是否為英文
  const isEn = computed(() => currentLang.value === 'en')

  // 獲取標籤（根據當前語言）
  const getLabel = (item) => {
    if (!item) return ''
    return currentLang.value === 'zh' ? (item.label || item.labelEn || '') : (item.labelEn || item.label || '')
  }

  // 翻译函数
  const t = (key) => {
    return translate(key, currentLang.value)
  }

  return {
    currentLang,
    language,
    isZh,
    isEn,
    toggleLanguage,
    setLanguage,
    getLabel,
    t,
    LANGUAGES
  }
}
