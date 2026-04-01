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
