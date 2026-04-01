# 響應式 CSS 全面審計報告

> **專案**: perfume-tutorial (Vue 3 + Vite)  
> **時間戳記**: 2025-06-18T  
> **報告目的**: 全面盤點所有 RWD/響應式 CSS，針對 WebView（LINE、Facebook、Instagram 內嵌瀏覽器，360-414px）元素過大的問題進行分析  
> **審計範圍**: 所有 `.css`、`.vue` 檔案中的樣式

---

## 一、全域斷點系統概覽

### 1.1 `src/assets/style.css` 全域斷點定義

| 代號 | 寬度範圍    | `html font-size` | 啟用方式                                  |
| ---- | ----------- | ---------------- | ----------------------------------------- |
| xl   | ≥1400px     | 16px (預設)      | `min-width: 1400px`                       |
| lg   | 1200–1399px | 16px             | `min-width: 1200px and max-width: 1399px` |
| md   | 992–1199px  | 16px             | `min-width: 992px and max-width: 1199px`  |
| sm   | 768–991px   | **15px**         | `min-width: 768px and max-width: 991px`   |
| xs   | 480–767px   | **14px**         | `min-width: 480px and max-width: 767px`   |
| xxs  | <480px      | **13px**         | `max-width: 479px`                        |

### 1.2 各元件斷點使用情況

| 檔案                     | 斷點                           | 格式                       |
| ------------------------ | ------------------------------ | -------------------------- |
| **style.css** (全域)     | 1400, 1200, 992, 768, 480, 479 | `min-width+max-width` 區間 |
| **NavBar.vue**           | 991, 767, 479                  | `max-width`                |
| **ChapterNav.vue**       | 991, 767, 479                  | `max-width`                |
| **MoleculeGallery.vue**  | 767, 479                       | `max-width`                |
| **MoleculeRenderer.vue** | 767, 479                       | `max-width`                |
| **Chapter9View.vue**     | 1199, 991, 767, 479            | `max-width`                |
| **Chapter10View.vue**    | 1199, 991, 767, 479            | `max-width`                |
| **FooterBar.vue**        | ❌ 無響應式                    | —                          |
| **ChapterLayout.vue**    | ❌ 無樣式                      | —                          |
| **HomeView.vue**         | ❌ 無 scoped 樣式              | —                          |
| **Chapter1~8View.vue**   | ❌ 無 scoped 樣式              | —                          |
| **App.vue**              | ❌ 僅過渡動畫                  | —                          |

### 1.3 斷點不一致問題

| 問題                                                | 說明                                                               |
| --------------------------------------------------- | ------------------------------------------------------------------ |
| ⚠️ 全域用 `min+max` 區間，元件用 `max-width`        | 邏輯不同，重疊可能產生衝突                                         |
| ⚠️ 全域 768px 啟動 vs NavBar 991px 啟動             | NavBar 在 768-991px 已水平化，但全域 layout 在此範圍仍為 grid 1fr  |
| ❌ **缺少 320px 斷點**                              | 部分 WebView（如舊款手機或畫面較小的內嵌瀏覽器）寬度可能低於 360px |
| ⚠️ `env(safe-area-inset-*)` 僅用於 layout 與 NavBar | 其他元素（modal、footer）未使用                                    |

---

## 二、逐檔審計

### 2.1 `src/assets/style.css`（全域樣式）

#### 基礎值（Desktop 預設）

| 屬性                            | 值                 | 備註                  |
| ------------------------------- | ------------------ | --------------------- |
| `html font-size`                | 16px               | 固定值，非 responsive |
| `.container max-width`          | 1200px             | —                     |
| `.container padding`            | 2rem (32px)        | —                     |
| `.layout grid-template-columns` | 260px 1fr          | 側欄 + 主內容         |
| `.layout gap`                   | 24px               | —                     |
| `.layout padding`               | 24px               | —                     |
| `.main-panel padding`           | 1.5rem 2rem 2.2rem | 24px 32px 35.2px      |
| `.main-panel border-radius`     | 24px               | —                     |
| `h1`                            | 2.5rem (40px)      | —                     |
| `h2`                            | 2rem (32px)        | —                     |
| `h3`                            | 1.5rem (24px)      | —                     |
| `h4`                            | 1.2rem (19.2px)    | —                     |
| `p line-height`                 | 1.8                | —                     |
| `th, td padding`                | 1rem (16px)        | —                     |
| `.card padding`                 | 1.5rem (24px)      | —                     |
| `.card border-radius`           | 15px               | —                     |
| `.molecule-viewer height`       | 400px              | 固定高度              |
| `pre padding`                   | 1.5rem             | —                     |
| `blockquote padding`            | 1.2rem             | —                     |
| `.btn padding`                  | 0.8rem 2rem        | —                     |
| `.slider-item flex-basis`       | 250px              | —                     |
| `ul, ol margin`                 | 1rem 0 1rem 2rem   | —                     |
| 滾動條寬度                      | 12px               | —                     |
| `.structure-table font-size`    | 0.9rem             | —                     |
| `.structure-table th padding`   | 1rem 0.8rem        | —                     |
| `.summary-box padding`          | 1.5rem             | —                     |

#### 斷點 xl（≥1400px）

| 屬性                            | 值                 |
| ------------------------------- | ------------------ |
| `.layout max-width`             | 1600px             |
| `.layout grid-template-columns` | 280px 1fr          |
| `.layout gap/padding`           | 28px               |
| `.main-panel padding`           | 2rem 2.5rem 2.5rem |
| `.container max-width`          | 1400px             |

#### 斷點 lg（1200–1399px）

| 屬性                            | 值        |
| ------------------------------- | --------- |
| `.layout grid-template-columns` | 260px 1fr |
| `.layout gap/padding`           | 24px      |

#### 斷點 md（992–1199px）

| 屬性                            | 值                  |
| ------------------------------- | ------------------- |
| `.layout grid-template-columns` | 220px 1fr           |
| `.layout gap/padding`           | 20px                |
| `.main-panel padding`           | 1.5rem 1.75rem 2rem |
| `h1`                            | 2.2rem              |
| `h2`                            | 1.75rem             |

#### 斷點 sm（768–991px）— Tablet

| 屬性                            | 值                 | 實際 px（15px base） |
| ------------------------------- | ------------------ | -------------------- |
| `html font-size`                | **15px**           | —                    |
| `.layout grid-template-columns` | **1fr**            | 移除側欄             |
| `.layout gap`                   | 16px               | —                    |
| `.layout padding`               | 16px + safe-area   | —                    |
| `.main-panel padding`           | 1.5rem 1.5rem 2rem | 22.5px 22.5px 30px   |
| `.main-panel border-radius`     | 20px               | —                    |
| `.main-panel overflow-y`        | **visible**        | 改為 body 捲動       |
| `h1`                            | 2rem               | 30px                 |
| `h2`                            | 1.6rem             | 24px                 |
| `h3`                            | 1.3rem             | 19.5px               |
| `.container padding`            | 1.25rem            | 18.75px              |
| `.molecule-viewer height`       | 320px              | —                    |
| `table font-size`               | 0.92rem            | 13.8px               |
| `th, td padding`                | 0.65rem            | 9.75px               |
| `.slider-item flex-basis`       | 200px              | —                    |

#### 斷點 xs（480–767px）— Mobile

| 屬性                           | 值                                 | 實際 px（14px base） |
| ------------------------------ | ---------------------------------- | -------------------- |
| `html font-size`               | **14px**                           | —                    |
| `.layout gap`                  | 12px                               | —                    |
| `.layout padding`              | 12px + safe-area                   | —                    |
| `.main-panel padding`          | 1.25rem 1rem 1.75rem               | 17.5px 14px 24.5px   |
| `.main-panel border-radius`    | 16px                               | —                    |
| `h1`                           | 1.75rem                            | 24.5px               |
| `h1::after`                    | width 70px, height 3px             | —                    |
| `h2`                           | 1.4rem                             | 19.6px               |
| `h3`                           | 1.2rem                             | 16.8px               |
| `h4`                           | 1.05rem                            | 14.7px               |
| `p font-size`                  | 0.95rem                            | 13.3px               |
| `.container padding`           | 1rem                               | 14px                 |
| `.molecule-viewer height`      | 260px                              | —                    |
| `table font-size`              | 0.85rem                            | 11.9px               |
| `table`                        | `display: block; overflow-x: auto` | 水平捲動             |
| `th, td padding`               | 0.5rem 0.6rem                      | 7px 8.4px            |
| `th, td white-space`           | nowrap                             | —                    |
| `.card padding`                | 1.1rem                             | 15.4px               |
| `.card border-radius`          | 12px                               | —                    |
| `pre padding`                  | 1rem                               | 14px                 |
| `pre font-size`                | 0.85em                             | —                    |
| `blockquote padding`           | 0.9rem                             | 12.6px               |
| `ul, ol margin`                | 0.8rem 0 0.8rem 1.5rem             | —                    |
| `.btn padding`                 | 0.6rem 1.2rem                      | 8.4px 16.8px         |
| `.slider-item label font-size` | 0.8rem                             | 11.2px               |

#### 斷點 xxs（<480px）— Small Mobile / WebView 核心

| 屬性                         | 值                     | 實際 px（13px base） |
| ---------------------------- | ---------------------- | -------------------- |
| `html font-size`             | **13px**               | —                    |
| `.layout gap`                | 8px                    | —                    |
| `.layout padding`            | 8px + safe-area        | —                    |
| `.main-panel padding`        | 1rem 0.75rem 1.5rem    | 13px 9.75px 19.5px   |
| `.main-panel border-radius`  | 14px                   | —                    |
| `h1`                         | 1.5rem                 | **19.5px**           |
| `h1::after`                  | width 60px, height 2px | —                    |
| `h2`                         | 1.25rem                | **16.25px**          |
| `h3`                         | 1.1rem                 | **14.3px**           |
| `h4`                         | 1rem                   | **13px**             |
| `p font-size`                | 0.9rem                 | **11.7px**           |
| `p line-height`              | 1.7                    | —                    |
| `.container padding`         | 0.75rem                | 9.75px               |
| `.molecule-viewer height`    | 220px                  | —                    |
| `table font-size`            | 0.8rem                 | 10.4px               |
| `th, td padding`             | 0.4rem 0.5rem          | 5.2px 6.5px          |
| `thead th font-size`         | 0.75em                 | —                    |
| `.card padding`              | 0.9rem                 | 11.7px               |
| `.card border-radius`        | 10px                   | —                    |
| `.card:hover transform`      | **none**               | 禁用 hover 效果 ✓    |
| `pre padding`                | 0.8rem                 | 10.4px               |
| `pre font-size`              | 0.8em                  | —                    |
| `blockquote padding`         | 0.7rem                 | 9.1px                |
| `ul, ol margin`              | 0.6rem 0 0.6rem 1.2rem | —                    |
| `li font-size`               | 0.9rem                 | 11.7px               |
| `.btn padding`               | 0.5rem 1rem            | 6.5px 13px           |
| `.btn:hover transform`       | **none**               | ✓                    |
| `code padding`               | 0.15rem 0.35rem        | —                    |
| `.structure-table font-size` | 0.75rem                | 9.75px               |
| `.summary-box padding`       | 0.8rem                 | —                    |
| 滾動條                       | 6px                    | ✓ 已縮小             |

---

### 2.2 `src/components/NavBar.vue`（Scoped）

#### 基礎值（Desktop — 垂直側欄）

| 屬性               | 值                           |
| ------------------ | ---------------------------- |
| 寬度               | 260px（由 layout grid 決定） |
| padding            | —                            |
| brand-title        | —                            |
| nav-item font-size | —                            |

#### ≤991px — 水平導航列

| 屬性                  | 值                                  |
| --------------------- | ----------------------------------- |
| 方向                  | 垂直→水平（flex-direction: row）    |
| padding               | 0.75rem 1rem                        |
| gap                   | 0.75rem                             |
| brand-title font-size | 0.95rem                             |
| nav-item font-size    | 0.82rem                             |
| nav-item padding      | 0.4rem 0.6rem                       |
| safe-area             | ✓ `env(safe-area-inset-right/left)` |

#### ≤767px

| 屬性                  | 值                      |
| --------------------- | ----------------------- |
| padding               | 0.6rem 0.75rem          |
| gap                   | 0.5rem                  |
| brand-title font-size | 0.85rem                 |
| nav-item font-size    | 0.78rem                 |
| nav-item padding      | 0.4rem 0.55rem          |
| nav-label             | **隱藏**（僅顯示 icon） |
| brand-sub             | **隱藏**                |

#### ≤479px

| 屬性                   | 值              |
| ---------------------- | --------------- |
| padding                | 0.5rem 0.6rem   |
| gap                    | 0.35rem         |
| brand-title font-size  | 0.75rem         |
| nav-item padding       | 0.35rem 0.45rem |
| nav-ornament font-size | 1rem            |

---

### 2.3 `src/components/ChapterNav.vue`（Scoped）

#### 基礎值

| 屬性               | 值             |
| ------------------ | -------------- |
| padding            | 0.75rem 0.9rem |
| gap                | 0.5rem         |
| page-btn font-size | 0.82rem        |
| page-btn padding   | 0.4rem 0.9rem  |
| page-num min-width | 32px           |
| page-num height    | 30px           |
| page-num font-size | 0.78rem        |

#### ≤991px

| 屬性               | 值              |
| ------------------ | --------------- |
| padding            | 0.7rem 0.8rem   |
| page-btn font-size | 0.8rem          |
| page-btn padding   | 0.35rem 0.75rem |
| page-num min-width | 30px            |
| page-num font-size | 0.75rem         |
| page-numbers       | flex-wrap: wrap |

#### ≤767px

| 屬性               | 值                              |
| ------------------ | ------------------------------- |
| flex-direction     | **column**                      |
| padding            | 0.6rem                          |
| border-radius      | 12px                            |
| page-btn           | width: 100%, text-align: center |
| page-btn font-size | 0.78rem                         |
| page-btn padding   | 0.35rem 0.7rem                  |

#### ≤479px

| 屬性               | 值             |
| ------------------ | -------------- |
| padding            | 0.5rem         |
| border-radius      | 10px           |
| margin             | 0.75rem 0 1rem |
| page-btn font-size | 0.72rem        |
| page-btn padding   | 0.3rem 0.5rem  |
| page-num min-width | 26px           |
| page-num height    | 26px           |
| page-num font-size | 0.68rem        |

---

### 2.4 `src/components/FooterBar.vue`（Scoped）

#### ❌ 無任何響應式斷點

| 屬性                    | 值      | 問題             |
| ----------------------- | ------- | ---------------- |
| `margin-top`            | 4rem    | **在小螢幕過大** |
| `padding`               | 2rem    | **在小螢幕過大** |
| `font-size`             | 0.9rem  | OK               |
| `.footer-sub font-size` | 0.85rem | OK               |

---

### 2.5 `src/components/MoleculeGallery.vue`（Scoped）

#### 基礎值

| 屬性                    | 值       |
| ----------------------- | -------- |
| padding                 | 1rem     |
| border-radius           | 15px     |
| margin                  | 1.2rem 0 |
| gallery-grid gap        | 0.6rem   |
| gallery-title font-size | 1rem     |

#### ≤767px

| 屬性            | 值      |
| --------------- | ------- |
| padding         | 0.75rem |
| border-radius   | 12px    |
| gap             | 0.4rem  |
| title font-size | 0.9rem  |
| justify-content | center  |

#### ≤479px

| 屬性          | 值       |
| ------------- | -------- |
| padding       | 0.5rem   |
| border-radius | 10px     |
| margin        | 0.8rem 0 |
| gap           | 0.3rem   |

---

### 2.6 `src/components/MoleculeRenderer.vue`（Scoped）

#### 基礎值

| 屬性             | 值      |
| ---------------- | ------- |
| padding          | 0.75rem |
| border-radius    | 12px    |
| label font-size  | 0.8rem  |
| smiles font-size | 0.7rem  |
| smiles max-width | 220px   |

#### ≤767px

| 屬性          | 值                       |
| ------------- | ------------------------ |
| padding       | 0.5rem                   |
| border-radius | 10px                     |
| label         | 0.72rem                  |
| smiles        | 0.62rem, max-width 160px |

#### ≤479px

| 屬性            | 值                       |
| --------------- | ------------------------ |
| padding         | 0.4rem                   |
| border-radius   | 8px                      |
| hover transform | **none** ✓               |
| label           | 0.68rem                  |
| smiles          | 0.58rem, max-width 130px |

---

### 2.7 `src/views/Chapter9View.vue`（Scoped — 分子百科）

#### 基礎值

| 屬性                      | 值                                      |
| ------------------------- | --------------------------------------- |
| `.molecule-grid`          | `repeat(auto-fill, minmax(300px, 1fr))` |
| `.filter-bar padding`     | 1.25rem                                 |
| `.search-input font-size` | 1rem                                    |
| `.chip font-size`         | 0.85rem                                 |
| `.detail-panel max-width` | 720px                                   |
| `.detail-panel padding`   | 2rem                                    |
| `.detail-name font-size`  | 1.8rem                                  |

#### ≤1199px

| 屬性             | 值                   |
| ---------------- | -------------------- |
| `.molecule-grid` | `minmax(260px, 1fr)` |

#### ≤991px

| 屬性             | 值                               |
| ---------------- | -------------------------------- |
| `.molecule-grid` | `minmax(240px, 1fr)`, gap 0.8rem |
| `.detail-panel`  | max-width 90vw, padding 1.5rem   |
| `.range-filters` | flex-direction: column           |

#### ≤767px

| 屬性                      | 值                               |
| ------------------------- | -------------------------------- |
| `.molecule-grid`          | `minmax(200px, 1fr)`, gap 0.6rem |
| `.detail-overlay padding` | 0.75rem                          |
| `.detail-panel padding`   | 1.25rem, radius 16px             |
| `.detail-name`            | 1.4rem                           |
| `.filter-bar`             | padding 0.9rem, radius 12px      |
| `.chip`                   | 0.78rem, padding 0.28rem 0.6rem  |
| `.search-input`           | 0.9rem                           |
| `.mol-card-body padding`  | 0.6rem 0.8rem                    |
| `.mol-card-name`          | 0.95rem                          |

#### ≤479px

| 屬性             | 值                              |
| ---------------- | ------------------------------- |
| `.molecule-grid` | **1fr**（單欄）                 |
| `.detail-panel`  | padding 1rem, radius 14px       |
| `.detail-name`   | 1.2rem                          |
| `.filter-bar`    | padding 0.75rem                 |
| `.chip`          | 0.72rem, padding 0.22rem 0.5rem |
| `h1`             | 1.4rem                          |
| subtitle         | 0.88rem                         |

---

### 2.8 `src/views/Chapter10View.vue`（Scoped — 香水資料庫）

#### 基礎值

| 屬性                      | 值                                      |
| ------------------------- | --------------------------------------- |
| `.perfume-grid`           | `repeat(auto-fill, minmax(320px, 1fr))` |
| `.perfume-card padding`   | 1.2rem                                  |
| `.detail-panel max-width` | 820px                                   |
| `.detail-panel padding`   | 2rem                                    |
| `.formula-table`          | 繼承全域                                |

#### ≤1199px

| 屬性            | 值                   |
| --------------- | -------------------- |
| `.perfume-grid` | `minmax(280px, 1fr)` |

#### ≤991px

| 屬性            | 值                               |
| --------------- | -------------------------------- |
| `.perfume-grid` | `minmax(260px, 1fr)`, gap 0.8rem |
| `.detail-panel` | max-width 90vw, padding 1.5rem   |

#### ≤767px

| 屬性             | 值                           |
| ---------------- | ---------------------------- |
| `.perfume-grid`  | **1fr**（單欄）              |
| `.detail-panel`  | 1.25rem, radius 16px         |
| `.detail-name`   | 1.4rem                       |
| `.formula-table` | 0.78rem, th/td 0.4rem 0.5rem |
| `.chip`          | 0.78rem                      |
| `.pyramid-tag`   | 0.72rem                      |

#### ≤479px

| 屬性                   | 值                |
| ---------------------- | ----------------- |
| `.detail-panel`        | 1rem, radius 14px |
| `.detail-name`         | 1.2rem            |
| `.formula-table`       | 0.72rem           |
| `h1`                   | 1.4rem            |
| `.perfume-description` | 0.88rem           |

---

## 三、WebView 問題分析（360–414px 視窗）

### 3.1 WebView 特性

WebView（LINE、Facebook、Instagram 內嵌瀏覽器）的特殊行為：

- **viewport 寬度**: 通常 360–414px
- **可能缺少 `viewport meta`**: 部分 WebView 不一定遵守 `initial-scale`
- **safe-area**: 部分 WebView 有上方操作列佔用空間
- **裝置像素比**: 通常 2x–3x

### 3.2 WebView 在 <480px 的實際渲染值

以 **360px 寬度 + 13px base font** 計算：

| 元素                   | rem 值  | 實際 px                      | 評估                   |
| ---------------------- | ------- | ---------------------------- | ---------------------- |
| h1                     | 1.5rem  | 19.5px                       | ⚠️ 偏大，建議 1.3rem   |
| h2                     | 1.25rem | 16.25px                      | ⚠️ 仍偏大              |
| h3                     | 1.1rem  | 14.3px                       | OK                     |
| h4                     | 1rem    | 13px                         | OK                     |
| p                      | 0.9rem  | 11.7px                       | OK                     |
| card padding           | 0.9rem  | 11.7px                       | OK                     |
| main-panel padding L/R | 0.75rem | 9.75px                       | OK                     |
| layout padding         | 8px     | 8px                          | OK                     |
| table font-size        | 0.8rem  | 10.4px                       | OK                     |
| **layout 總水平佔用**  | —       | 8+8 + 9.75+9.75 = **35.5px** | 可用寬度 ≈ **324.5px** |

### 3.3 ❌ 核心問題清單

| #   | 問題                               | 嚴重度 | 位置                | 說明                                                                                     |
| --- | ---------------------------------- | ------ | ------------------- | ---------------------------------------------------------------------------------------- |
| 1   | **缺少 320px 斷點**                | 🔴 高  | style.css           | 極窄 WebView（如折疊手機、舊裝置）完全沒有額外處理                                       |
| 2   | **base font-size 為固定 px**       | 🟡 中  | style.css           | `html { font-size: 16px }` 搭配 `13px@<480`. 建議全程使用 `clamp()` 或更流暢的漸進式縮放 |
| 3   | **FooterBar 無響應式**             | 🟡 中  | FooterBar.vue       | `padding: 2rem` + `margin-top: 4rem` 在 360px 視窗佔比過大                               |
| 4   | **圖表 inline max-height 固定**    | 🟡 中  | Chapter1~8View      | `style="max-height: 320px"` 在所有章節 canvas 上硬編碼，在小螢幕不會縮小                 |
| 5   | **molecule-viewer 固定高度**       | 🟡 中  | style.css           | 雖有響應式 (400→320→260→220px)，但仍為固定 px 而非比例                                   |
| 6   | **detail-overlay 在 WebView**      | 🟡 中  | Ch9/Ch10            | Modal padding 在 <480 僅 0.5rem，但 `position: fixed` 在部分 WebView 可能有怪異行為      |
| 7   | **table white-space: nowrap**      | 🟡 中  | style.css xs/xxs    | 防止文字換行但造成表格可能極寬需大量水平捲動                                             |
| 8   | **Chapter 1-8 無 scoped 響應式**   | ℹ️ 低  | Chapter1~8View      | 完全依賴 style.css 全域。若全域調整不足，無法個別微調                                    |
| 9   | **brand-dropdown max-height 固定** | 🟡 中  | Chapter10View       | `max-height: 400px` 在小螢幕可能超出視窗                                                 |
| 10  | **scroll 行為差異**                | ℹ️ 低  | style.css sm/xs/xxs | 768px 以下 body 改為 `overflow-y: auto`，但部分 WebView 對 `overflow` 處理不同           |

---

## 四、各斷點字型尺寸對照表

| 元素             | 預設(16px) | sm(15px) | xs(14px) | xxs(13px) |
| ---------------- | ---------- | -------- | -------- | --------- |
| h1               | 40px       | 30px     | 24.5px   | 19.5px    |
| h2               | 32px       | 24px     | 19.6px   | 16.25px   |
| h3               | 24px       | 19.5px   | 16.8px   | 14.3px    |
| h4               | 19.2px     | —        | 14.7px   | 13px      |
| p (body)         | 16px       | 15px     | 13.3px   | 11.7px    |
| table body       | 16px       | 13.8px   | 11.9px   | 10.4px    |
| .structure-table | 14.4px     | —        | —        | 9.75px    |
| code             | 14.4px     | —        | —        | —         |
| .chip            | 13.6px     | —        | 10.9px   | 9.36px    |
| .btn             | 16px       | —        | 12.6px   | 11.05px   |

---

## 五、間距/尺寸對照表（padding/margin/gap）

| 元素               | 預設       | sm(768-991)    | xs(480-767)    | xxs(<480)      |
| ------------------ | ---------- | -------------- | -------------- | -------------- |
| layout gap         | 24px       | 16px           | 12px           | 8px            |
| layout padding     | 24px       | 16px+safe      | 12px+safe      | 8px+safe       |
| main-panel padding | 24-32-35px | 22.5-22.5-30px | 17.5-14-24.5px | 13-9.75-19.5px |
| container padding  | 32px       | 18.75px        | 14px           | 9.75px         |
| card padding       | 24px       | —              | 15.4px         | 11.7px         |
| th/td padding      | 16px       | 9.75px         | 7-8.4px        | 5.2-6.5px      |
| pre padding        | 24px       | —              | 14px           | 10.4px         |
| blockquote padding | 19.2px     | —              | 12.6px         | 9.1px          |
| btn padding        | 12.8-32px  | —              | 8.4-16.8px     | 6.5-13px       |
| footer padding     | 32px       | **32px** ⚠️    | **32px** ⚠️    | **32px** ⚠️    |
| footer margin-top  | 64px       | **64px** ⚠️    | **64px** ⚠️    | **64px** ⚠️    |

---

## 六、固定尺寸元素清單

| 元素                             | 值                | 位置        | 是否響應式            |
| -------------------------------- | ----------------- | ----------- | --------------------- |
| `.molecule-viewer height`        | 400/320/260/220px | style.css   | ✓ 有分級但仍為固定 px |
| `canvas max-height`              | 320px (inline)    | Chapter1~8  | ❌ 所有斷點固定       |
| `.brand-dropdown max-height`     | 400px             | Ch10 scoped | ❌ 固定               |
| `.brand-options-list max-height` | 280px             | Ch10 scoped | ❌ 固定               |
| `.detail-panel max-width`        | 720px/820px       | Ch9/Ch10    | ✓ 有 90vw fallback    |
| `.page-num min-width/height`     | 32x30/30x30/26x26 | ChapterNav  | ✓ 有分級              |
| `.detail-close width/height`     | 36x36px           | Ch9/Ch10    | ❌ 固定               |
| 滾動條                           | 12px/6px          | style.css   | ✓ xxs 縮小            |

---

## 七、改善建議

### 7.1 優先度：高（🔴）

1. **新增 320px 斷點或使用 `clamp()` 漸進式字型**

   ```css
   html {
     font-size: clamp(12px, 2.5vw + 6px, 16px);
   }
   ```

   這可以消除硬編碼斷點，讓 WebView 在任何寬度下自動縮放。

2. **FooterBar 加入響應式**

   ```css
   @media (max-width: 767px) {
     .footer {
       padding: 1.25rem;
       margin-top: 2rem;
     }
   }
   @media (max-width: 479px) {
     .footer {
       padding: 1rem;
       margin-top: 1.5rem;
       font-size: 0.82rem;
     }
     .footer-sub {
       font-size: 0.78rem;
     }
   }
   ```

3. **chart canvas 改為響應式 max-height**
   ```css
   @media (max-width: 479px) {
     .chart-container canvas {
       max-height: 220px !important;
     }
   }
   @media (max-width: 767px) {
     .chart-container canvas {
       max-height: 260px !important;
     }
   }
   ```

### 7.2 優先度：中（🟡）

4. **brand-dropdown 在小螢幕限制高度**

   ```css
   @media (max-width: 479px) {
     .brand-dropdown {
       max-height: 60vh;
     }
     .brand-options-list {
       max-height: 40vh;
     }
   }
   ```

5. **table 在極窄螢幕提供更好的水平捲動提示**
   - 考慮加入捲動陰影漸層或捲動提示 icon

6. **molecule-viewer 改為 aspect-ratio 或 max-height + percentage**

   ```css
   .molecule-viewer {
     height: auto;
     max-height: min(400px, 50vh);
     aspect-ratio: 16/9;
   }
   ```

7. **detail modal 在 WebView 改用 bottom-sheet 模式**
   - `position: fixed` 在部分 WebView 有問題
   - 考慮在 <480px 使用全螢幕 modal

### 7.3 優先度：低（ℹ️）

8. **統一斷點查詢格式** — 建議全部統一使用 `max-width` 向下覆蓋模式
9. **考慮加入 `prefers-reduced-motion` 媒體查詢**
10. **Chapter 1-8 加入 scoped 微調** — 現階段全域已覆蓋大部分案例

---

## 八、總結

| 面向         | 現狀                                   | 評分     |
| ------------ | -------------------------------------- | -------- |
| 斷點覆蓋度   | 6 個斷點（1400/1200/992/768/480/479）  | ⭐⭐⭐⭐ |
| 字型縮放     | 硬切換 16→15→14→13px                   | ⭐⭐⭐   |
| 間距縮放     | 逐步縮小 padding/gap/margin            | ⭐⭐⭐⭐ |
| 固定尺寸處理 | molecule-viewer 有分級，chart 未處理   | ⭐⭐⭐   |
| WebView 相容 | safe-area ✓、移除 hover ✓、body 捲動 ✓ | ⭐⭐⭐⭐ |
| 斷點一致性   | 全域/元件格式不同但數值對齊            | ⭐⭐⭐   |
| 子元件覆蓋   | FooterBar 無響應式、HomeView 無 scoped | ⭐⭐     |

**整體評分**: ⭐⭐⭐ (3.5/5) — 基礎框架良好，WebView 相關改善空間集中在：字型漸進縮放、FooterBar、圖表高度、極窄視窗處理。
