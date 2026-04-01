# 香水化學教學網站 Perfume Chemistry Tutorial

[![Deploy to GitHub Pages](https://github.com/klchen41265401/perfume-tutorial/actions/workflows/deploy.yml/badge.svg)](https://github.com/klchen41265401/perfume-tutorial/actions/workflows/deploy.yml)

> 線上展示：<https://klchen41265401.github.io/perfume-tutorial/>

以 Vue 3 + Vite 建構的互動式香水化學教學網站，涵蓋香水科學各章節知識以及可搜尋的商用香水配方資料庫。

---

## 專案結構

```
perfume-tutorial/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自動部署至 GitHub Pages
├── reports/                    # 審計與分析報告
│   └── 2025-06-18T_rwd-audit-report.md
├── src/
│   ├── assets/                 # 靜態資源
│   ├── components/             # 共用元件
│   ├── composables/            # Vue Composable（useLanguage 等）
│   ├── data/
│   │   ├── perfumeFormulas.js  # 380 種商用香水配方資料庫
│   │   ├── perfumeTranslations.js
│   │   ├── encyclopedia.js
│   │   ├── molecules.js
│   │   └── translations.js
│   ├── locales/                # i18n 語系檔
│   ├── router/                 # Vue Router 路由設定
│   ├── views/                  # 各章節頁面
│   │   ├── HomeView.vue
│   │   ├── Chapter1View.vue … Chapter10View.vue
│   │   └── …
│   ├── App.vue
│   └── main.js
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 開發環境

| 需求    | 版本               |
| ------- | ------------------ |
| Node.js | ≥ 20.19 或 ≥ 22.12 |
| npm     | ≥ 10               |

```bash
# 安裝相依套件
npm ci

# 啟動開發伺服器
npm run dev

# 打包生產版本
npm run build
```

## 部署

推送至 `main` 分支後，GitHub Actions 自動執行 `npm run build` 並佈署至 GitHub Pages。

---

## 報告

| 日期       | 報告                                                    | 說明                                                              |
| ---------- | ------------------------------------------------------- | ----------------------------------------------------------------- |
| 2025-06-18 | [RWD 審計報告](reports/2025-06-18T_rwd-audit-report.md) | 全面盤點所有響應式 CSS，針對 WebView（360–414px）元素過大問題分析 |

---

## 變更紀錄

### 2026-04-01T00:00:00+08:00 — Bug Fix

**修復 Chapter 10 `TypeError: Can't access property "length", t.ingredients is undefined`**

`src/views/Chapter10View.vue` 修正內容：

| #   | 問題                                  | 根本原因                                                                                                                                                 | 修正方式                                                                                                                                |
| --- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `t.ingredients is undefined`          | `perfumeFormulas.js` 中第 261–380 筆資料（共 120 筆）採用舊格式：`topNotes/heartNotes/baseNotes` 為物件陣列 `{name, pct, role}`，且無 `ingredients` 欄位 | 新增 `getIngredients(p)` helper：若有 `ingredients` 直接回傳；否則從 note 物件陣列重建；所有使用 `.ingredients` 的計算屬性改用此 helper |
| 2   | `p.perfumer.toLowerCase()` TypeError  | 第 321–380 筆資料無 `perfumer` 欄位                                                                                                                      | 加入 null guard：`p.perfumer && p.perfumer.toLowerCase()`                                                                               |
| 3   | `n.toLowerCase()` TypeError in search | 搜尋過濾器對 note 調用 `.toLowerCase()`，但 note 可能為物件                                                                                              | 新增 `getNoteText(n)` helper 相容字串與物件格式                                                                                         |
| 4   | 性別篩選器失效                        | Format A 使用 `'feminine'/'masculine'`，Format B 使用 `'female'/'male'`，與 `GENDER_OPTIONS` ID 不一致                                                   | 新增 `normalizeGender()` 正規化；更新 `getGenderIcon`/`getGenderLabel` 相容兩種格式                                                     |

### 2026-04-01T01:00:00+08:00 — Mobile Scroll Fix

**修復行動裝置無法向下捲動（特別是 Chapter 9 / Chapter 10）**

| 檔案                          | 修正內容                                                                                                                                                  |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/assets/style.css`        | 三段行動裝置 breakpoint 加入 `html/body { overflow-y:auto; height:auto }` 與 `#app { height:auto }`，解除 `overflow:hidden` + `#app { height:100% }` 鎖定 |
| `src/views/Chapter9View.vue`  | `.detail-overlay` 加入 `-webkit-overflow-scrolling:touch` 與 `overscroll-behavior:contain`                                                                |
| `src/views/Chapter10View.vue` | 同上                                                                                                                                                      |
| `src/App.vue`                 | route watcher `scrollTo` 自動偵測捲動容器（desktop → main-panel / mobile → window）                                                                       |

### 2026-04-01T02:00:00+08:00 — RWD NavBar Fix

**修復部分 WebView 下 NavBar 最右側 icon 無法點擊**

| 檔案                        | 修正內容                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.html`                | `<meta viewport>` 加入 `viewport-fit=cover`，啟用 safe area insets 支援                                                                                                                                                                                                                                                                 |
| `src/components/NavBar.vue` | 水平捲動 `.nav-rail` 加入 `::after` 空白偽元素，修正 flex scrollable container 尾端 padding 在部分 WebView 被吞掉的問題；所有行動裝置 breakpoint 加入 `env(safe-area-inset-right/left)` padding；`nav-item` 與 `lang-toggle` 加入 `flex-shrink:0` 防止被壓縮；移除 tablet 下 `lang-toggle` 的 `margin-left:auto` 使其隨水平捲動自然排列 |
| `src/assets/style.css`      | 三段行動裝置 breakpoint 的 `.layout` 加入 `env(safe-area-inset-right/left)` padding                                                                                                                                                                                                                                                     |

### 2026-04-02T00:00:00+08:00 — WebView 全面 RWD 版面精修

**修正 WebView（LINE/FB/IG 內建瀏覽器 360-414px）版面過大問題，涵蓋所有章節**

| 類別                       | 修正內容                                                                                                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **根字體縮放**             | `html font-size` 改為 `clamp(12.5px, 2.5vw + 4px, 16px)` 漸進式縮放，取代各斷點硬切 16→15→14→13，確保 WebView 下比例自然                                       |
| **全域元素** (`style.css`) | Mobile (480-767px) 與 Small Mobile (<480px) 的 h1-h4、p、card、table、chart-container、chapter-section、pre、blockquote、btn 全面縮小 padding/margin/font-size |
| **Canvas 圖表**            | 新增 `.chart-container canvas { max-height }` 規則覆蓋 inline `style="max-height:320px"`，Mobile→240px / Small Mobile→200px                                    |
| **Tablet** (768-991px)     | heading、card、chart-container、table cell 均微調縮小                                                                                                          |
| **FooterBar**              | 新增兩段 RWD breakpoint：767px (`margin-top:2rem; padding:1.25rem`) / 479px (`margin-top:1.5rem; padding:1rem`)                                                |
| **ChapterNav**             | 767px / 479px 斷點 page-btn 與 page-num 進一步縮小                                                                                                             |
| **Chapter 9**              | 基底 grid minmax 300→280px；767px grid 200→160px；479px 所有元素進一步精縮；detail-panel `max-width: min(720px, 95vw)`                                         |
| **Chapter 10**             | 基底 grid minmax 320→300px；767px 直接 1fr 單欄；brand-dropdown `max-height: min(400px, 60vh)`；detail-panel `max-width: min(820px, 95vw)`；479px 全面精縮     |
