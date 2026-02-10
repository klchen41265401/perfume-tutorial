// ============================================================
// 香料分子百科全書 — Fragrance Molecule Encyclopedia
// 覆蓋市售主要香料化學品，按嗅覺家族分類
// ============================================================

/**
 * 嗅覺家族定義
 */
export const OLFACTORY_FAMILIES = {
  citrus:   { id: 'citrus',   label: '柑橘', labelEn: 'Citrus',   icon: '🍊', color: '#f59e0b' },
  floral:   { id: 'floral',   label: '花香', labelEn: 'Floral',   icon: '🌸', color: '#ec4899' },
  green:    { id: 'green',    label: '綠葉', labelEn: 'Green',    icon: '🌿', color: '#22c55e' },
  fruity:   { id: 'fruity',   label: '果香', labelEn: 'Fruity',   icon: '🍑', color: '#f97316' },
  woody:    { id: 'woody',    label: '木質', labelEn: 'Woody',    icon: '🌲', color: '#92400e' },
  musky:    { id: 'musky',    label: '麝香', labelEn: 'Musky',    icon: '🫧', color: '#a78bfa' },
  spicy:    { id: 'spicy',    label: '辛香', labelEn: 'Spicy',    icon: '🌶️', color: '#dc2626' },
  amber:    { id: 'amber',    label: '琥珀', labelEn: 'Amber',    icon: '🔶', color: '#d97706' },
  marine:   { id: 'marine',   label: '海洋', labelEn: 'Marine',   icon: '🌊', color: '#0ea5e9' },
  gourmand: { id: 'gourmand', label: '美食', labelEn: 'Gourmand', icon: '🍦', color: '#be185d' },
  powdery:  { id: 'powdery',  label: '粉香', labelEn: 'Powdery',  icon: '☁️', color: '#c084fc' },
  herbal:   { id: 'herbal',   label: '草本', labelEn: 'Herbal',   icon: '🌱', color: '#16a34a' },
  animalic: { id: 'animalic', label: '動物', labelEn: 'Animalic', icon: '🦌', color: '#78350f' },
  leather:  { id: 'leather',  label: '皮革', labelEn: 'Leather',  icon: '👝', color: '#7c2d12' },
}

/**
 * 香調位置
 */
export const NOTE_POSITIONS = {
  top:    { id: 'top',    label: '前調', labelEn: 'Top Note',    color: '#fbbf24' },
  middle: { id: 'middle', label: '中調', labelEn: 'Heart Note',  color: '#f472b6' },
  base:   { id: 'base',   label: '基調', labelEn: 'Base Note',   color: '#8b5cf6' },
}

/**
 * 化學官能團
 */
export const FUNCTIONAL_GROUPS = {
  aldehyde:     { id: 'aldehyde',     label: '醛類',     labelEn: 'Aldehydes',     color: '#e11d48' },
  alcohol:      { id: 'alcohol',      label: '醇類',     labelEn: 'Alcohols',      color: '#2563eb' },
  ketone:       { id: 'ketone',       label: '酮類',     labelEn: 'Ketones',       color: '#7c3aed' },
  ester:        { id: 'ester',        label: '酯類',     labelEn: 'Esters',        color: '#0891b2' },
  lactone:      { id: 'lactone',      label: '內酯',     labelEn: 'Lactones',      color: '#c026d3' },
  terpene:      { id: 'terpene',      label: '萜烯',     labelEn: 'Terpenes',      color: '#059669' },
  phenol:       { id: 'phenol',       label: '酚類',     labelEn: 'Phenols',       color: '#ea580c' },
  ether:        { id: 'ether',        label: '醚類',     labelEn: 'Ethers',        color: '#4f46e5' },
  oxide:        { id: 'oxide',        label: '氧化物',   labelEn: 'Oxides',        color: '#0d9488' },
  nitrile:      { id: 'nitrile',      label: '含氮類',   labelEn: 'Nitrogenous',   color: '#6366f1' },
  acid:         { id: 'acid',         label: '酸類',     labelEn: 'Acids',         color: '#dc2626' },
  musk:         { id: 'musk',         label: '大環/多環', labelEn: 'Musks',         color: '#9333ea' },
  heterocyclic: { id: 'heterocyclic', label: '雜環',     labelEn: 'Heterocyclic',  color: '#475569' },
}

/**
 * 分子家族分類（生合成 / 化學骨架來源）
 */
export const MOLECULE_FAMILIES = {
  monoterpenoid:   { id: 'monoterpenoid',   label: '單萜類',       labelEn: 'Monoterpenoids',        icon: '🌿', color: '#22c55e' },
  sesquiterpenoid: { id: 'sesquiterpenoid', label: '倍半萜類',     labelEn: 'Sesquiterpenoids',      icon: '🌲', color: '#15803d' },
  diterpenoid:     { id: 'diterpenoid',     label: '二萜類',       labelEn: 'Diterpenoids',          icon: '🏔️', color: '#166534' },
  norisoprenoid:   { id: 'norisoprenoid',   label: '降異戊二烯類', labelEn: 'Norisoprenoids',        icon: '🌅', color: '#ea580c' },
  phenylpropanoid: { id: 'phenylpropanoid', label: '苯丙素類',     labelEn: 'Phenylpropanoids',      icon: '🌺', color: '#dc2626' },
  benzenoid:       { id: 'benzenoid',       label: '苯環衍生物',   labelEn: 'Benzenoids',            icon: '⬡',  color: '#7c3aed' },
  aliphatic:       { id: 'aliphatic',       label: '脂肪族',       labelEn: 'Aliphatics',            icon: '〰️', color: '#0891b2' },
  lactone:         { id: 'lactone',         label: '內酯/香豆素',  labelEn: 'Lactones & Coumarins',  icon: '🔵', color: '#c026d3' },
  macrocyclic:     { id: 'macrocyclic',     label: '大環麝香',     labelEn: 'Macrocyclic Musks',     icon: '⭕', color: '#9333ea' },
  polycyclic:      { id: 'polycyclic',      label: '多環合成麝香', labelEn: 'Polycyclic Musks',      icon: '💎', color: '#6366f1' },
  heterocyclic:    { id: 'heterocyclic',    label: '雜環化合物',   labelEn: 'Heterocyclics',         icon: '🔷', color: '#475569' },
  synthetic:       { id: 'synthetic',       label: '合成特殊體',   labelEn: 'Synthetic Specialties', icon: '⚙️', color: '#0ea5e9' },
}

/**
 * 分子 → 家族映射表 (按生合成與化學骨架歸類)
 */
const MOLECULE_FAMILY_MAP = {
  // ── Monoterpenoids (C10 萜烯及其衍生物) ──
  limonene: 'monoterpenoid', citral: 'monoterpenoid', citronellal: 'monoterpenoid',
  linalool: 'monoterpenoid', geraniol: 'monoterpenoid', citronellol: 'monoterpenoid',
  nerol: 'monoterpenoid', menthol: 'monoterpenoid', camphor: 'monoterpenoid',
  terpineol: 'monoterpenoid', rCarvone: 'monoterpenoid', sCarvone: 'monoterpenoid',
  myrcene: 'monoterpenoid', alphaPinene: 'monoterpenoid', eucalyptol: 'monoterpenoid',
  verbenone: 'monoterpenoid', borneol: 'monoterpenoid', fenchone: 'monoterpenoid',
  dihydromyrcenol: 'monoterpenoid', linalylAcetate: 'monoterpenoid',
  nerylAcetate: 'monoterpenoid', citronellylAcetate: 'monoterpenoid',
  geranylAcetate: 'monoterpenoid', terpinylAcetate: 'monoterpenoid',
  roseOxide: 'monoterpenoid', lavandulol: 'monoterpenoid',
  hydroxycitronellal: 'monoterpenoid', methylHeptenone: 'monoterpenoid',
  thymol: 'monoterpenoid',

  // ── Sesquiterpenoids (C15) ──
  farnesol: 'sesquiterpenoid', nerolidol: 'sesquiterpenoid', nootkatone: 'sesquiterpenoid',
  santalol: 'sesquiterpenoid', cedrol: 'sesquiterpenoid', patchoulol: 'sesquiterpenoid',
  betaCaryophyllene: 'sesquiterpenoid', cedrylAcetate: 'sesquiterpenoid',
  acetylCedrene: 'sesquiterpenoid', vetiverylAcetate: 'sesquiterpenoid',
  cisJasmone: 'sesquiterpenoid', isoESuper: 'sesquiterpenoid',

  // ── Diterpenoids (C20) ──
  sclareol: 'diterpenoid', ambroxide: 'diterpenoid',

  // ── Norisoprenoids (C13, 類胡蘿蔔素裂解產物) ──
  betaIonone: 'norisoprenoid', alphaIonone: 'norisoprenoid',
  alphaIsomethylIonone: 'norisoprenoid', damascenone: 'norisoprenoid',
  alphaDamascone: 'norisoprenoid', safranal: 'norisoprenoid',

  // ── Phenylpropanoids (C6-C3 苯丙素骨架) ──
  eugenol: 'phenylpropanoid', cinnamaldehyde: 'phenylpropanoid',
  isoeugenol: 'phenylpropanoid', cinnamylAlcohol: 'phenylpropanoid',
  hexylCinnamal: 'phenylpropanoid', amylcinnamal: 'phenylpropanoid',
  methylCinnamate: 'phenylpropanoid', methylEugenol: 'phenylpropanoid',
  estragole: 'phenylpropanoid', anethole: 'phenylpropanoid',
  cinnamicAcid: 'phenylpropanoid',

  // ── Benzenoids (簡單芳環衍生物) ──
  phenylethylAlcohol: 'benzenoid', phenylacetaldehyde: 'benzenoid',
  benzaldehyde: 'benzenoid', benzylAcetate: 'benzenoid',
  benzylBenzoate: 'benzenoid', benzylSalicylate: 'benzenoid',
  benzylAlcohol: 'benzenoid', phenylethylAcetate: 'benzenoid',
  methylSalicylate: 'benzenoid', hexylSalicylate: 'benzenoid',
  methylBenzoate: 'benzenoid', anisaldehyde: 'benzenoid',
  veratraldehyde: 'benzenoid', piperonal: 'benzenoid',
  pCresol: 'benzenoid', guaiacol: 'benzenoid',
  vanillin: 'benzenoid', ethylVanillin: 'benzenoid',
  methylAnthranilate: 'benzenoid', evernyl: 'benzenoid',
  lilial: 'benzenoid', bourgeonal: 'benzenoid',

  // ── Aliphatics (直鏈/支鏈脂肪族) ──
  decanal: 'aliphatic', nonanal: 'aliphatic', octanal: 'aliphatic',
  undecanal: 'aliphatic', dodecanal: 'aliphatic', methylUndecanal: 'aliphatic',
  transHexenal: 'aliphatic', cis3HexenylAcetate: 'aliphatic',
  cis3Hexenol: 'aliphatic', ethylButyrate: 'aliphatic',
  isoamylAcetate: 'aliphatic',

  // ── Lactones & Coumarins (內酯環) ──
  gammaDecalactone: 'lactone', gammaUndecalactone: 'lactone',
  deltaDecalactone: 'lactone', gammaNonalactone: 'lactone',
  gammaOctalactone: 'lactone', dihydrocoumarin: 'lactone',
  coumarin: 'lactone',

  // ── Macrocyclic Musks (大環麝香) ──
  muscone: 'macrocyclic', ethyleneBrassylate: 'macrocyclic',
  exaltolide: 'macrocyclic', ambrettolide: 'macrocyclic',
  habanolide: 'macrocyclic', civettone: 'macrocyclic',

  // ── Polycyclic Musks (多環合成麝香) ──
  galaxolide: 'polycyclic', tonalide: 'polycyclic',
  cashmeran: 'polycyclic', muskKetone: 'polycyclic',

  // ── Heterocyclics (雜環) ──
  indole: 'heterocyclic', skatole: 'heterocyclic',
  quinoline: 'heterocyclic', isobutylQuinoline: 'heterocyclic',
  calone: 'heterocyclic', ethylMaltol: 'heterocyclic',
  maltol: 'heterocyclic', furaneol: 'heterocyclic',

  // ── Synthetic Specialties (合成特殊芳香體) ──
  sandalore: 'synthetic', javanol: 'synthetic', hedione: 'synthetic',
  helional: 'synthetic', triplal: 'synthetic', helvetolide: 'synthetic',
  tropional: 'synthetic', floralozone: 'synthetic',
}

/**
 * 完整分子百科資料庫
 */
export const ENCYCLOPEDIA = [

  // ═══════════════════════════════════════════════
  //   CITRUS 柑橘家族
  // ═══════════════════════════════════════════════

  {
    id: 'limonene',
    name: '檸檬烯',
    nameEn: 'Limonene',
    cas: '5989-27-5',
    smiles: 'CC1=CCC(CC1)C(=C)C',
    category: 'citrus',
    tags: ['fresh', 'clean'],
    functionalGroup: 'terpene',
    notePosition: 'top',
    scentProfile: {
      description: '明亮而清新的柑橘香氣，帶有甜橙和檸檬皮的活力感。它是最具代表性的柑橘調分子，彷彿置身於陽光照耀的果園之中。高劑量下帶有微弱的松脂質感。',
      intensity: 3,
      tenacity: 1,
      diffusion: 4,
      keywords: ['橙皮', '檸檬', '清新', '明亮']
    },
    properties: { mw: 136.23, bp: 176, logP: 4.57, density: 0.842, vaporPressure: 190, appearance: '無色液體' },
    naturalSources: ['甜橙', '檸檬', '葡萄柚', '橘子', '佛手柑'],
    usage: {
      concentration: '5-30%',
      pairings: ['Linalool', 'Citral', 'Decanal', 'Hedione'],
      perfumes: ['CK One', 'Acqua di Parma Colonia', 'Dolce & Gabbana Light Blue'],
      applications: ['男香', '古龍水', '家用清潔', '洗衣液']
    },
    safety: { ifra: '無特殊限制', allergen: true, note: 'EU 列管過敏原，氧化產物有致敏性' }
  },

  {
    id: 'citral',
    name: '檸檬醛',
    nameEn: 'Citral',
    cas: '5392-40-5',
    smiles: 'CC(=CC=O)CCC=C(C)C',
    category: 'citrus',
    tags: ['lemon', 'verbena'],
    functionalGroup: 'aldehyde',
    notePosition: 'top',
    scentProfile: {
      description: '強烈而純粹的檸檬香氣，比檸檬烯更加銳利和明確。帶有檸檬草（Lemongrass）和馬鞭草的特徵，在天然檸檬精油中佔主導地位。具有清涼、草本的底韻。',
      intensity: 4,
      tenacity: 2,
      diffusion: 5,
      keywords: ['檸檬', '檸檬草', '馬鞭草', '銳利']
    },
    properties: { mw: 152.23, bp: 229, logP: 2.76, density: 0.888, vaporPressure: 30, appearance: '淡黃色液體' },
    naturalSources: ['檸檬草', '山蒼子', '檸檬馬鞭草', '檸檬皮'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Linalool', 'Geraniol', 'Citronellal', 'Petitgrain oil'],
      perfumes: ['Eau de Rochas', 'Jo Malone Verbenas of Provence'],
      applications: ['古龍水', '清新花香', '家居香氛']
    },
    safety: { ifra: '致敏原，有使用限制', allergen: true, note: 'EU 列管過敏原，可能引起皮膚敏感' }
  },

  {
    id: 'citronellal',
    name: '香茅醛',
    nameEn: 'Citronellal',
    cas: '106-23-0',
    smiles: 'CC(CC=O)CCC=C(C)C',
    category: 'citrus',
    tags: ['fresh', 'rosy'],
    functionalGroup: 'aldehyde',
    notePosition: 'top',
    scentProfile: {
      description: '清新的柑橘-玫瑰交融香氣，比 Citral 更加圓潤甜美。帶有鈴蘭般的花香底調和微弱的草本感。是連接柑橘調與花香調的橋樑分子。',
      intensity: 3,
      tenacity: 2,
      diffusion: 4,
      keywords: ['柑橘', '玫瑰', '鈴蘭', '清甜']
    },
    properties: { mw: 154.25, bp: 207, logP: 3.53, density: 0.853, vaporPressure: 40, appearance: '無色至淡黃色液體' },
    naturalSources: ['香茅草', '尤加利', '玫瑰草'],
    usage: {
      concentration: '1-10%',
      pairings: ['Citronellol', 'Geraniol', 'Hydroxycitronellal'],
      perfumes: ['多種花香調香水'],
      applications: ['花香調', '驅蟲產品', '肥皂']
    },
    safety: { ifra: '致敏原', allergen: true, note: 'EU 列管過敏原' }
  },

  {
    id: 'decanal',
    name: '癸醛',
    nameEn: 'Decanal (Aldehyde C-10)',
    cas: '112-31-2',
    smiles: 'CCCCCCCCCC=O',
    category: 'citrus',
    tags: ['waxy', 'orange-peel'],
    functionalGroup: 'aldehyde',
    notePosition: 'top',
    scentProfile: {
      description: '強烈的甜橙皮香氣，帶有蠟質和油脂般的溫暖底調。低濃度時呈現迷人的柑橘花果香，高濃度下帶有脂肪感。是「醛香調」香水的重要成員之一。',
      intensity: 4,
      tenacity: 2,
      diffusion: 5,
      keywords: ['橙皮', '蠟質', '脂肪', '醛香']
    },
    properties: { mw: 156.27, bp: 208, logP: 4.09, density: 0.830, vaporPressure: 14, appearance: '無色液體' },
    naturalSources: ['橙皮油', '芫荽', '柑橘類'],
    usage: {
      concentration: '0.1-2%（極強，需稀釋用）',
      pairings: ['Linalool', 'Undecalactone', 'Rose absolute'],
      perfumes: ['Chanel No.5', 'Arpège'],
      applications: ['醛香調', '古龍水', '花果調']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '高濃度有刺激性' }
  },

  {
    id: 'nonanal',
    name: '壬醛',
    nameEn: 'Nonanal (Aldehyde C-9)',
    cas: '124-19-6',
    smiles: 'CCCCCCCCC=O',
    category: 'citrus',
    tags: ['waxy', 'rosy', 'fresh'],
    functionalGroup: 'aldehyde',
    notePosition: 'top',
    scentProfile: {
      description: '清新的柑橘-玫瑰混合香氣，質感比 Decanal 更輕盈透明。帶有新鮮花瓣上的露水般的清爽感，以及微妙的蠟質底調。在稀釋後展現優雅的花香側面。',
      intensity: 4,
      tenacity: 2,
      diffusion: 5,
      keywords: ['玫瑰', '柑橘', '蠟質', '清新']
    },
    properties: { mw: 142.24, bp: 191, logP: 3.27, density: 0.827, vaporPressure: 22, appearance: '無色液體' },
    naturalSources: ['玫瑰', '柑橘', '柳橙花'],
    usage: {
      concentration: '0.1-1%',
      pairings: ['Rose oxide', 'Geraniol', 'Citronellol'],
      perfumes: ['Clinique Happy', 'CK Eternity'],
      applications: ['花香調', '清新香水']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '強烈，需注意用量' }
  },

  {
    id: 'octanal',
    name: '辛醛',
    nameEn: 'Octanal (Aldehyde C-8)',
    cas: '124-13-0',
    smiles: 'CCCCCCCC=O',
    category: 'citrus',
    tags: ['citrus', 'green', 'fatty'],
    functionalGroup: 'aldehyde',
    notePosition: 'top',
    scentProfile: {
      description: '清新的柑橘-脂肪香，帶有綠色的草本質感和金屬般的銳利度。比壬醛和癸醛更加尖銳和穿透力強。在低劑量時呈現橙花般的優雅。',
      intensity: 4,
      tenacity: 1,
      diffusion: 5,
      keywords: ['柑橘', '脂肪', '金屬', '銳利']
    },
    properties: { mw: 128.21, bp: 171, logP: 2.78, density: 0.821, vaporPressure: 50, appearance: '無色液體' },
    naturalSources: ['柑橘精油', '薰衣草'],
    usage: {
      concentration: '0.05-0.5%',
      pairings: ['Citral', 'Linalool', 'Decanal'],
      perfumes: ['古龍水類'],
      applications: ['柑橘調', '清新調']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '極強擴散力，微量使用' }
  },

  {
    id: 'linalylAcetate',
    name: '乙酸芳樟酯',
    nameEn: 'Linalyl Acetate',
    cas: '115-95-7',
    smiles: 'CC(=CCCC(C)(OC(C)=O)C=C)C',
    category: 'citrus',
    tags: ['lavender', 'bergamot', 'fresh'],
    functionalGroup: 'ester',
    notePosition: 'top',
    scentProfile: {
      description: '清甜的薰衣草-佛手柑香氣，質感柔和而優雅。帶有果香和微弱的花香，是歐洲傳統古龍水和薰衣草香水的核心成分。比 Linalool 更加甜美和果香。',
      intensity: 3,
      tenacity: 2,
      diffusion: 4,
      keywords: ['薰衣草', '佛手柑', '甜美', '清新']
    },
    properties: { mw: 196.29, bp: 220, logP: 3.93, density: 0.895, vaporPressure: 8, appearance: '無色液體' },
    naturalSources: ['薰衣草', '佛手柑', '快樂鼠尾草'],
    usage: {
      concentration: '5-25%',
      pairings: ['Linalool', 'Coumarin', 'Geraniol', 'Bergamot oil'],
      perfumes: ['Pour un Homme de Caron', '多種薰衣草調'],
      applications: ['男香', '薰衣草調', '芳療']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   FLORAL 花香家族
  // ═══════════════════════════════════════════════

  {
    id: 'linalool',
    name: '芳樟醇',
    nameEn: 'Linalool',
    cas: '78-70-6',
    smiles: 'CC(=CCCC(C)(O)C=C)C',
    category: 'floral',
    tags: ['citrus', 'fresh', 'lavender'],
    functionalGroup: 'alcohol',
    notePosition: 'middle',
    scentProfile: {
      description: '多面向的花香-柑橘香氣，是香水工業中使用最廣泛的單體之一。帶有薰衣草的舒適感、鈴蘭的清新感，以及微弱的木質底調。它的香氣溫和而包容，幾乎能與所有香調和諧共存。',
      intensity: 3,
      tenacity: 3,
      diffusion: 4,
      keywords: ['薰衣草', '鈴蘭', '柑橘', '木質']
    },
    properties: { mw: 154.25, bp: 198, logP: 2.97, density: 0.870, vaporPressure: 21, appearance: '無色液體' },
    naturalSources: ['薰衣草', '佛手柑', '芫荽', '玫瑰木', '羅勒'],
    usage: {
      concentration: '5-30%',
      pairings: ['Geraniol', 'Citronellol', 'Rose oxide', 'Hedione'],
      perfumes: ['Chanel No.5', 'Acqua di Gio', 'J\'adore', 'Fierce'],
      applications: ['幾乎所有類型香水', '肥皂', '洗護產品']
    },
    safety: { ifra: '列管過敏原但無限量', allergen: true, note: 'EU 26 列管過敏原，需在成分表上標示' }
  },

  {
    id: 'geraniol',
    name: '香葉醇',
    nameEn: 'Geraniol',
    cas: '106-24-1',
    smiles: 'CC(=CCCC(=CCO)C)C',
    category: 'floral',
    tags: ['rose', 'citrus'],
    functionalGroup: 'alcohol',
    notePosition: 'middle',
    scentProfile: {
      description: '甜美而溫暖的玫瑰香氣，帶有天竺葵的綠意和微妙的柑橘亮度。是「玫瑰感」最直接的化學來源之一，香氣比 Citronellol 更加甜膩和飽滿。',
      intensity: 3,
      tenacity: 3,
      diffusion: 3,
      keywords: ['玫瑰', '天竺葵', '甜美', '溫暖']
    },
    properties: { mw: 154.25, bp: 230, logP: 3.56, density: 0.889, vaporPressure: 4, appearance: '無色至淡黃色液體' },
    naturalSources: ['玫瑰草', '天竺葵', '玫瑰', '檸檬草'],
    usage: {
      concentration: '3-15%',
      pairings: ['Citronellol', 'Phenylethyl alcohol', 'Rose oxide', 'Linalool'],
      perfumes: ['Joy by Jean Patou', 'Paris by YSL'],
      applications: ['玫瑰調', '花果調', '肥皂', '護膚品']
    },
    safety: { ifra: '列管過敏原', allergen: true, note: 'EU 26 過敏原' }
  },

  {
    id: 'citronellol',
    name: '香茅醇',
    nameEn: 'Citronellol',
    cas: '106-22-9',
    smiles: 'CC(CCO)CCC=C(C)C',
    category: 'floral',
    tags: ['rose', 'citrus', 'fresh'],
    functionalGroup: 'alcohol',
    notePosition: 'middle',
    scentProfile: {
      description: '清新而明亮的玫瑰香氣，比 Geraniol 更加輕盈和乾淨。帶有微妙的柑橘和綠葉面向，是現代玫瑰調香水的基礎。它的香氣自然而不造作，宛如剛從花園中摘下的新鮮玫瑰花瓣。',
      intensity: 2,
      tenacity: 3,
      diffusion: 3,
      keywords: ['玫瑰', '清新', '柑橘', '自然']
    },
    properties: { mw: 156.27, bp: 225, logP: 3.91, density: 0.855, vaporPressure: 5, appearance: '無色液體' },
    naturalSources: ['玫瑰', '天竺葵', '香茅'],
    usage: {
      concentration: '5-20%',
      pairings: ['Geraniol', 'Phenylethyl alcohol', 'Linalool', 'Rose oxide'],
      perfumes: ['Chloe EDP', 'Miss Dior', 'Rose 31 Le Labo'],
      applications: ['玫瑰調', '清新花香', '肥皂']
    },
    safety: { ifra: '列管過敏原', allergen: true, note: 'EU 26 過敏原' }
  },

  {
    id: 'phenylethylAlcohol',
    name: '苯乙醇',
    nameEn: 'Phenylethyl Alcohol (PEA)',
    cas: '60-12-8',
    smiles: 'OCCc1ccccc1',
    category: 'floral',
    tags: ['rose', 'honey'],
    functionalGroup: 'alcohol',
    notePosition: 'middle',
    scentProfile: {
      description: '柔和而蜂蜜般的玫瑰香氣，帶有微妙的綠色調。它是天然玫瑰精油中含量最高的成分，賦予玫瑰那種溫暖、微膩的甜蜜感。極低濃度時有一種乾淨的花香，高濃度下變得蜜質。',
      intensity: 2,
      tenacity: 3,
      diffusion: 2,
      keywords: ['玫瑰', '蜂蜜', '甜美', '柔和']
    },
    properties: { mw: 122.17, bp: 220, logP: 1.36, density: 1.017, vaporPressure: 12, appearance: '無色液體' },
    naturalSources: ['玫瑰', '茉莉', '橙花', '天竺葵'],
    usage: {
      concentration: '5-30%',
      pairings: ['Citronellol', 'Geraniol', 'Linalool', 'Rose oxide'],
      perfumes: ['Sa Majesté la Rose Serge Lutens', '各種玫瑰調'],
      applications: ['玫瑰調', '花香底座', '肥皂']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性極好，常用作溶劑替代' }
  },

  {
    id: 'roseOxide',
    name: '玫瑰氧化物',
    nameEn: 'Rose Oxide',
    cas: '16409-43-1',
    smiles: 'CC1CCC(OC1)C(C)=C',
    category: 'floral',
    tags: ['rose', 'green', 'metallic'],
    functionalGroup: 'oxide',
    notePosition: 'top',
    scentProfile: {
      description: '獨特的金屬質感玫瑰香氣，帶有荔枝和綠葉的面向。它不同於傳統的甜美玫瑰，而是呈現出一種現代、冷感、幾何般的玫瑰意象。微量使用即可為配方增添「活力」和「通透感」。',
      intensity: 4,
      tenacity: 2,
      diffusion: 5,
      keywords: ['玫瑰', '荔枝', '金屬', '綠葉']
    },
    properties: { mw: 154.25, bp: 187, logP: 2.54, density: 0.876, vaporPressure: 35, appearance: '無色液體' },
    naturalSources: ['保加利亞玫瑰精油', '大馬士革玫瑰'],
    usage: {
      concentration: '0.01-0.5%（極強效）',
      pairings: ['Citronellol', 'Geraniol', 'Linalool', 'Damascenone'],
      perfumes: ['Nahema Guerlain', 'Portrait of a Lady FM'],
      applications: ['玫瑰調', '花果調', '東方花香']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '閾值極低，微量使用' }
  },

  {
    id: 'hedione',
    name: 'Hedione (甲基二氫茉莉酸酯)',
    nameEn: 'Hedione (Methyl dihydrojasmonate)',
    cas: '24851-98-7',
    smiles: 'COC(=O)CCC1CCC(=O)C1',
    category: 'floral',
    tags: ['jasmine', 'fresh', 'transparent'],
    functionalGroup: 'ester',
    notePosition: 'middle',
    scentProfile: {
      description: '輕盈、透明的茉莉花香，帶有清新的柑橘底調和空靈感。它是 Eau Sauvage (Dior, 1966) 的革命性成分，首次為香水帶來了「透明度」的概念。不似天然茉莉那般濃烈，而是如同清晨微風中的茉莉花園。',
      intensity: 1,
      tenacity: 4,
      diffusion: 4,
      keywords: ['茉莉', '透明', '清新', '空靈']
    },
    properties: { mw: 226.31, bp: 135, logP: 2.14, density: 1.018, vaporPressure: 0.3, appearance: '無色液體' },
    naturalSources: ['合成（靈感來自茉莉花瓣）'],
    usage: {
      concentration: '10-40%（可大量使用）',
      pairings: ['Linalool', 'Galaxolide', 'Iso E Super', 'Citrus oils'],
      perfumes: ['Eau Sauvage Dior', 'CK One', 'Chanel No.19', 'J\'adore'],
      applications: ['幾乎所有現代香水', '清新花香', '皮膚香氛']
    },
    safety: { ifra: '無限制', allergen: false, note: '安全性極好，大量使用的經濟成分' }
  },

  {
    id: 'hydroxycitronellal',
    name: '羥基香茅醛',
    nameEn: 'Hydroxycitronellal',
    cas: '107-75-5',
    smiles: 'OCC(C)CCCC(C)CC=O',
    category: 'floral',
    tags: ['lily', 'muguet', 'sweet'],
    functionalGroup: 'aldehyde',
    notePosition: 'middle',
    scentProfile: {
      description: '甜美而水潤的鈴蘭（Muguet）香氣，帶有百合和清新的綠葉面向。它是經典鈴蘭調香水的核心原料，賦予那種清新、水仙般的白色花香。在低濃度下有一種乾淨的肥皂感。',
      intensity: 3,
      tenacity: 3,
      diffusion: 3,
      keywords: ['鈴蘭', '百合', '甜美', '水潤']
    },
    properties: { mw: 172.27, bp: 241, logP: 1.78, density: 0.918, vaporPressure: 2, appearance: '無色液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '2-10%',
      pairings: ['Lilial', 'Linalool', 'Phenylethyl alcohol', 'Muguet bases'],
      perfumes: ['Diorissimo', '各種鈴蘭調'],
      applications: ['鈴蘭調', '白花調', '肥皂', '洗衣液']
    },
    safety: { ifra: '列管過敏原，有限量', allergen: true, note: 'EU 26 過敏原，皮膚致敏' }
  },

  {
    id: 'helional',
    name: '日光醛',
    nameEn: 'Helional',
    cas: '1205-17-0',
    smiles: 'O=CCC(C)c1ccc2OCOc2c1',
    category: 'floral',
    tags: ['marine', 'green', 'cyclamen'],
    functionalGroup: 'aldehyde',
    notePosition: 'middle',
    scentProfile: {
      description: '帶有海洋氣息的綠色花香，結合了仙客來（Cyclamen）的優雅和水生的清新。它像是一朵在海風中搖曳的白色花朵，同時帶有洋茉莉醛的甜美和蘑菇的泥土氣息。',
      intensity: 3,
      tenacity: 3,
      diffusion: 4,
      keywords: ['仙客來', '海洋', '綠葉', '清新']
    },
    properties: { mw: 192.21, bp: 290, logP: 1.98, density: 1.148, vaporPressure: 0.5, appearance: '白色結晶或液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '1-5%',
      pairings: ['Calone', 'Hedione', 'Dihydromyrcenol', 'Marine notes'],
      perfumes: ['Acqua di Gio', 'L\'Eau d\'Issey', 'Cool Water'],
      applications: ['海洋調', '新鮮花香', '男香']
    },
    safety: { ifra: '有使用限制', allergen: false, note: 'IFRA限量' }
  },

  {
    id: 'nerol',
    name: '橙花醇',
    nameEn: 'Nerol',
    cas: '106-25-2',
    smiles: 'OC/C=C(\\C)CCC=C(C)C',
    category: 'floral',
    tags: ['rose', 'citrus', 'neroli'],
    functionalGroup: 'alcohol',
    notePosition: 'middle',
    scentProfile: {
      description: '清新的玫瑰-柑橘香氣，是 Geraniol 的順式異構體。帶有更強的橙花（Neroli）調性和更濕潤的質感，比 Geraniol 更加柔和淡雅。像是雨後花園中的玫瑰。',
      intensity: 2,
      tenacity: 2,
      diffusion: 3,
      keywords: ['橙花', '玫瑰', '柔和', '清新']
    },
    properties: { mw: 154.25, bp: 225, logP: 3.47, density: 0.876, vaporPressure: 5, appearance: '無色液體' },
    naturalSources: ['橙花油', '玫瑰', '檸檬草'],
    usage: {
      concentration: '2-10%',
      pairings: ['Geraniol', 'Linalool', 'Phenylethyl alcohol'],
      perfumes: ['橙花調香水'],
      applications: ['橙花調', '玫瑰調', '清新花香']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'farnesol',
    name: '法呢醇',
    nameEn: 'Farnesol',
    cas: '4602-84-0',
    smiles: 'CC(=CCCC(=CCCC(=CCO)C)C)C',
    category: 'floral',
    tags: ['muguet', 'linden', 'subtle'],
    functionalGroup: 'alcohol',
    notePosition: 'middle',
    scentProfile: {
      description: '極為細膩的鈴蘭-菩提花香氣，幾乎不可察覺卻為配方增添優雅的花香暈。帶有輕微的綠色和木質底調，是天然花香的「隱藏角色」。',
      intensity: 1,
      tenacity: 3,
      diffusion: 2,
      keywords: ['鈴蘭', '菩提花', '細膩', '木質']
    },
    properties: { mw: 222.37, bp: 280, logP: 5.77, density: 0.887, vaporPressure: 0.1, appearance: '淡黃色液體' },
    naturalSources: ['玫瑰', '橙花', '菩提花', '洋甘菊'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Linalool', 'Hydroxycitronellal', 'Muguet bases'],
      perfumes: ['細膩花香調香水'],
      applications: ['花香調', '天然香水', '護膚品（除臭功能）']
    },
    safety: { ifra: '列管過敏原', allergen: true, note: 'EU 26 過敏原' }
  },

  {
    id: 'methylAnthranilate',
    name: '鄰胺基苯甲酸甲酯',
    nameEn: 'Methyl Anthranilate',
    cas: '134-20-3',
    smiles: 'COC(=O)c1ccccc1N',
    category: 'floral',
    tags: ['grape', 'neroli', 'narcotic'],
    functionalGroup: 'ester',
    notePosition: 'middle',
    scentProfile: {
      description: '濃郁而迷醉的橙花-葡萄香氣，帶有強烈的人造感和糖漿般的甜膩。低濃度下呈現優雅的白花調，高濃度下帶有明顯的「葡萄汽水」感。是東方香調和花香調的重要原料。',
      intensity: 4,
      tenacity: 4,
      diffusion: 4,
      keywords: ['橙花', '葡萄', '甜膩', '迷醉']
    },
    properties: { mw: 151.16, bp: 256, logP: 1.91, density: 1.168, vaporPressure: 1, appearance: '淡黃色液體' },
    naturalSources: ['橙花', '茉莉', '依蘭', '柑橘花'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Indole', 'Jasmine absolute', 'Ylang ylang', 'Orange blossom'],
      perfumes: ['Shalimar', 'Mitsouko'],
      applications: ['東方調', '橙花調', '葡萄風味']
    },
    safety: { ifra: '有光敏性限制', allergen: false, note: '具光敏性，加入皮膚接觸產品需注意' }
  },

  {
    id: 'phenylacetaldehyde',
    name: '苯乙醛',
    nameEn: 'Phenylacetaldehyde',
    cas: '122-78-1',
    smiles: 'O=CCc1ccccc1',
    category: 'floral',
    tags: ['hyacinth', 'green', 'honey'],
    functionalGroup: 'aldehyde',
    notePosition: 'top',
    scentProfile: {
      description: '強烈的風信子-蜂蜜香氣，帶有鮮明的綠色花香和微苦的底調。它是風信子花香的關鍵化學成分，賦予那種春天花園般的芬芳。高濃度下帶有刺鼻的「貓尿」感。',
      intensity: 5,
      tenacity: 2,
      diffusion: 5,
      keywords: ['風信子', '蜂蜜', '綠色', '春天']
    },
    properties: { mw: 120.15, bp: 195, logP: 1.78, density: 1.027, vaporPressure: 30, appearance: '無色液體' },
    naturalSources: ['風信子', '桂花', '水仙'],
    usage: {
      concentration: '0.01-0.5%（極強）',
      pairings: ['Linalool', 'Hydroxycitronellal', 'Lilial'],
      perfumes: ['Poison Dior', '各種花香調'],
      applications: ['風信子調', '綠花調', '東方花香']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '閾值極低' }
  },

  {
    id: 'alphaIsomethylIonone',
    name: 'α-異甲基紫羅蘭酮',
    nameEn: 'alpha-Isomethyl Ionone',
    cas: '127-51-5',
    smiles: 'CC1=CC(CC1(C)C)/C(C)=C/C(=O)C',
    category: 'floral',
    tags: ['violet', 'powdery', 'woody'],
    functionalGroup: 'ketone',
    notePosition: 'middle',
    scentProfile: {
      description: '柔和的紫羅蘭-鳶尾花香氣，帶有溫暖的粉質底調和微妙的木質感。它是最常用的紫羅蘭/鳶尾調原料之一，香氣優雅而不張揚，適合營造柔和的花粉感。',
      intensity: 3,
      tenacity: 4,
      diffusion: 3,
      keywords: ['紫羅蘭', '鳶尾', '粉質', '柔和']
    },
    properties: { mw: 206.32, bp: 266, logP: 4.13, density: 0.927, vaporPressure: 0.5, appearance: '淡黃色液體' },
    naturalSources: ['合成（紫羅蘭酮衍生物）'],
    usage: {
      concentration: '2-15%',
      pairings: ['Ionones', 'Orris butter', 'Heliotropin', 'Powdery musks'],
      perfumes: ['Prada Infusion d\'Iris', 'Chanel No.19'],
      applications: ['紫羅蘭/鳶尾調', '粉質花香', '優雅女香']
    },
    safety: { ifra: '列管過敏原', allergen: true, note: 'EU 26 過敏原' }
  },

  {
    id: 'nerolidol',
    name: '橙花叔醇',
    nameEn: 'Nerolidol',
    cas: '7212-44-4',
    smiles: 'CC(=CCCC(C)(O)C=C)CCC=C(C)C',
    category: 'floral',
    tags: ['woody', 'green', 'waxy'],
    functionalGroup: 'alcohol',
    notePosition: 'base',
    scentProfile: {
      description: '柔和的花香-木質香氣，帶有新鮮樹皮和蠟質的底調。官能基近似 Linalool 但分子更大，因此沸點更高、持久力更好。有一種平靜的、森林般的安撫感。',
      intensity: 2,
      tenacity: 4,
      diffusion: 2,
      keywords: ['木質', '花香', '蠟質', '森林']
    },
    properties: { mw: 222.37, bp: 276, logP: 5.36, density: 0.878, vaporPressure: 0.1, appearance: '淡黃色液體' },
    naturalSources: ['橙花', '茉莉', '茶樹', '生薑'],
    usage: {
      concentration: '1-8%',
      pairings: ['Linalool', 'Santalol', 'Cedarwood'],
      perfumes: ['自然木質花香調'],
      applications: ['木質花香', '天然調', '防蚊產品']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   GREEN 綠葉家族
  // ═══════════════════════════════════════════════

  {
    id: 'cis3HexenylAcetate',
    name: '順-3-己烯醇乙酸酯',
    nameEn: 'cis-3-Hexenyl Acetate',
    cas: '3681-71-8',
    smiles: 'CC(=O)OCC/C=C\\CC',
    category: 'green',
    tags: ['leafy', 'fresh', 'natural'],
    functionalGroup: 'ester',
    notePosition: 'top',
    scentProfile: {
      description: '極為自然的鮮切青草和綠葉香氣，帶有微妙的果香和清新的戶外感。它是「青草味」的化學本體，喚起修剪過的草地、新鮮的茶葉和春天花園的意象。',
      intensity: 3,
      tenacity: 2,
      diffusion: 4,
      keywords: ['青草', '綠葉', '清新', '自然']
    },
    properties: { mw: 142.20, bp: 174, logP: 2.07, density: 0.898, vaporPressure: 60, appearance: '無色液體' },
    naturalSources: ['新鮮綠葉', '茶葉', '紫羅蘭葉'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Galbanum oil', 'Violet leaf abs.', 'Linalool', 'Stemone'],
      perfumes: ['Chanel No.19', 'Vent Vert Balmain'],
      applications: ['綠葉調', '清新調', '茶香調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'transHexenal',
    name: '反-2-己烯醛',
    nameEn: 'trans-2-Hexenal (Leaf Aldehyde)',
    cas: '6728-26-3',
    smiles: 'CCC/C=C/C=O',
    category: 'green',
    tags: ['leafy', 'sharp', 'apple'],
    functionalGroup: 'aldehyde',
    notePosition: 'top',
    scentProfile: {
      description: '銳利而強烈的綠葉-青蘋果香氣，具有極高的穿透力。它是植物被切割或壓碎時釋放的「綠色信號分子」，帶有微苦的金屬質感和新鮮蔬菜的生命力。',
      intensity: 5,
      tenacity: 1,
      diffusion: 5,
      keywords: ['綠葉', '青蘋果', '銳利', '金屬']
    },
    properties: { mw: 98.14, bp: 147, logP: 1.58, density: 0.846, vaporPressure: 320, appearance: '無色液體' },
    naturalSources: ['綠葉', '蘋果', '番茄', '橄欖'],
    usage: {
      concentration: '0.01-0.2%（極強）',
      pairings: ['cis-3-Hexenyl acetate', 'Galbanum', 'Linalool'],
      perfumes: ['Vent Vert', 'Green Tea Elizabeth Arden'],
      applications: ['綠葉調', '清新前調', '蘋果調']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '極強烈，微量使用' }
  },

  // ═══════════════════════════════════════════════
  //   FRUITY 果香家族
  // ═══════════════════════════════════════════════

  {
    id: 'gammaDecalactone',
    name: 'γ-癸內酯',
    nameEn: 'gamma-Decalactone (Peach lactone)',
    cas: '706-14-9',
    smiles: 'CCCCCCC1CCC(=O)O1',
    category: 'fruity',
    tags: ['peach', 'creamy', 'skin'],
    functionalGroup: 'lactone',
    notePosition: 'middle',
    scentProfile: {
      description: '強烈而誘人的蜜桃香氣，帶有奶油般的柔滑質感和微妙的椰子底調。它是香水中「桃子感」的首選來源，同時也能營造溫暖的「肌膚感」。在基調中提供持久的果香甜蜜。',
      intensity: 4,
      tenacity: 4,
      diffusion: 3,
      keywords: ['蜜桃', '奶油', '椰子', '肌膚']
    },
    properties: { mw: 170.25, bp: 281, logP: 2.74, density: 0.963, vaporPressure: 0.3, appearance: '無色至淡黃色液體' },
    naturalSources: ['桃子', '杏子', '草莓', '椰子'],
    usage: {
      concentration: '1-8%',
      pairings: ['Undecalactone', 'Vanillin', 'Hedione', 'Osmanthus abs.'],
      perfumes: ['Mitsouko Guerlain', 'Mon Guerlain', 'Delina Parfums de Marly'],
      applications: ['果香調', '美食調', '東方花香']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'gammaUndecalactone',
    name: 'γ-十一內酯',
    nameEn: 'gamma-Undecalactone (Peach/Coconut aldehyde)',
    cas: '104-67-6',
    smiles: 'CCCCCCCC1CCC(=O)O1',
    category: 'fruity',
    tags: ['peach', 'coconut', 'creamy'],
    functionalGroup: 'lactone',
    notePosition: 'base',
    scentProfile: {
      description: '椰子-蜜桃的豐潤香氣，比 γ-癸內酯更加椰奶般的甜膩和持久。帶有防曬霜般的夏日聯想和柔和的乳脂感。是許多經典香水中「溫暖甜蜜」底調的來源。',
      intensity: 3,
      tenacity: 5,
      diffusion: 3,
      keywords: ['椰子', '蜜桃', '奶油', '夏日']
    },
    properties: { mw: 184.28, bp: 297, logP: 3.22, density: 0.944, vaporPressure: 0.1, appearance: '無色至淡黃色液體' },
    naturalSources: ['桃', '椰子', '杏'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['gamma-Decalactone', 'Vanillin', 'Coumarin', 'Heliotropin'],
      perfumes: ['Shalimar', 'Angel Thierry Mugler', 'Mon Guerlain'],
      applications: ['東方調', '美食調', '果香調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'deltaDecalactone',
    name: 'δ-癸內酯',
    nameEn: 'delta-Decalactone',
    cas: '705-86-2',
    smiles: 'CCCCCC1CCCC(=O)O1',
    category: 'fruity',
    tags: ['creamy', 'milky', 'peach'],
    functionalGroup: 'lactone',
    notePosition: 'base',
    scentProfile: {
      description: '濃郁的奶油-桃子香氣，帶有強烈的乳脂質感和煉乳般的甜蜜。與 γ-癸內酯相比，更加「乳製品」的方向，適合營造溫暖包容的底調。',
      intensity: 3,
      tenacity: 5,
      diffusion: 2,
      keywords: ['奶油', '煉乳', '蜜桃', '溫暖']
    },
    properties: { mw: 170.25, bp: 283, logP: 2.49, density: 0.953, vaporPressure: 0.2, appearance: '無色液體' },
    naturalSources: ['牛奶', '奶油', '椰子', '桃'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Vanillin', 'Ethyl maltol', 'gamma-Decalactone'],
      perfumes: ['Hypnotic Poison Dior', 'Angel'],
      applications: ['美食調', '乳香調', '東方調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'ethylButyrate',
    name: '丁酸乙酯',
    nameEn: 'Ethyl Butyrate',
    cas: '105-54-4',
    smiles: 'CCCC(=O)OCC',
    category: 'fruity',
    tags: ['pineapple', 'tropical', 'sweet'],
    functionalGroup: 'ester',
    notePosition: 'top',
    scentProfile: {
      description: '明亮的鳳梨-熱帶水果香氣，帶有微甜的奶油底調和漿果般的豐盈感。是食品工業和香水中「熱帶果香」的基礎成分之一，賦予配方活潑歡快的性格。',
      intensity: 4,
      tenacity: 1,
      diffusion: 5,
      keywords: ['鳳梨', '熱帶', '甜美', '活潑']
    },
    properties: { mw: 116.16, bp: 121, logP: 1.73, density: 0.879, vaporPressure: 1500, appearance: '無色液體' },
    naturalSources: ['鳳梨', '蘋果', '草莓'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Isoamyl acetate', 'Aldehyde C-14', 'Ethyl acetate'],
      perfumes: ['Escada 夏季限量系列'],
      applications: ['果香調', '夏季香水', '沐浴產品']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'isoamylAcetate',
    name: '乙酸異戊酯',
    nameEn: 'Isoamyl Acetate (Banana ester)',
    cas: '123-92-2',
    smiles: 'CC(C)CCOC(=O)C',
    category: 'fruity',
    tags: ['banana', 'pear', 'sweet'],
    functionalGroup: 'ester',
    notePosition: 'top',
    scentProfile: {
      description: '典型的香蕉-梨子香氣，帶有甜美的糖果感和微妙的溶劑質感。是「水果糖」香調的代表分子，低濃度時有清甜的西洋梨果香。',
      intensity: 4,
      tenacity: 1,
      diffusion: 5,
      keywords: ['香蕉', '梨子', '糖果', '甜美']
    },
    properties: { mw: 130.18, bp: 142, logP: 2.25, density: 0.876, vaporPressure: 550, appearance: '無色液體' },
    naturalSources: ['香蕉', '蘋果', '梨'],
    usage: {
      concentration: '0.5-3%',
      pairings: ['Ethyl butyrate', 'Aldehyde C-14', 'fruit esters'],
      perfumes: ['活潑果香調香水'],
      applications: ['果香前調', '兒童用品', '食品香精']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'nootkatone',
    name: '諾卡酮',
    nameEn: 'Nootkatone',
    cas: '4674-50-4',
    smiles: 'CC1CCC(=CC1=O)C(=C)C',
    category: 'fruity',
    tags: ['grapefruit', 'citrus', 'woody'],
    functionalGroup: 'ketone',
    notePosition: 'middle',
    scentProfile: {
      description: '完美的葡萄柚-柚子香氣，帶有微苦的木質底調和獨特的硫磺質感。它是天然葡萄柚精油中最具特徵性的成分，賦予那種明亮而微苦的柑橘果香。',
      intensity: 3,
      tenacity: 3,
      diffusion: 3,
      keywords: ['葡萄柚', '柚子', '微苦', '明亮']
    },
    properties: { mw: 218.33, bp: 305, logP: 3.35, density: 0.987, vaporPressure: 0.1, appearance: '白色結晶' },
    naturalSources: ['葡萄柚', '阿拉斯加黃檜'],
    usage: {
      concentration: '0.1-2%',
      pairings: ['Limonene', 'Citral', 'Linalool', 'Pink pepper'],
      perfumes: ['Atelier Cologne Pomelo Paradis', 'Hermès Terre d\'Hermès'],
      applications: ['葡萄柚調', '柑橘調', '清新男香']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全，亦有驅蟲效果' }
  },

  // ═══════════════════════════════════════════════
  //   WOODY 木質家族
  // ═══════════════════════════════════════════════

  {
    id: 'isoESuper',
    name: 'Iso E Super',
    nameEn: 'Iso E Super (Arborone)',
    cas: '54464-57-2',
    smiles: 'CC(C)C1CCC2(CCCC(=O)C2C)C1',
    category: 'woody',
    tags: ['amber', 'velvety', 'skin'],
    functionalGroup: 'ketone',
    notePosition: 'base',
    scentProfile: {
      description: '絲絨般柔滑的木質香氣，帶有若有若無的琥珀質感和「第二層皮膚」般的親膚性。它是現代香水工業中最重要的合成木質原料之一。有趣的是，有些人幾乎聞不到它，而另一些人會被它深深吸引。具有嗅覺適應性——佩戴者經常覺得它消失了，但旁人仍能聞到。',
      intensity: 2,
      tenacity: 5,
      diffusion: 3,
      keywords: ['絲絨', '木質', '琥珀', '肌膚']
    },
    properties: { mw: 234.38, bp: 302, logP: 4.62, density: 0.944, vaporPressure: 0.05, appearance: '淡黃色液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '10-50%（可大量使用）',
      pairings: ['Ambroxide', 'Hedione', 'Cashmeran', 'Galaxolide'],
      perfumes: ['Molecule 01 (Escentric Molecules)', 'Terre d\'Hermès', 'Acqua di Gio Profumo'],
      applications: ['幾乎所有類型香水', '作為「放大器」使用']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性極好，經濟實惠' }
  },

  {
    id: 'santalol',
    name: 'α-檀香醇',
    nameEn: 'alpha-Santalol',
    cas: '115-71-9',
    smiles: 'CC(CO)=CCC1C(=C)CCC1C(C)C',
    category: 'woody',
    tags: ['sandalwood', 'creamy', 'warm'],
    functionalGroup: 'alcohol',
    notePosition: 'base',
    scentProfile: {
      description: '溫暖而奶滑的檀香木香氣，帶有乳脂般的柔稠質感和微甜的底調。它是天然印度檀香精油（Mysore Sandalwood）的主要成分，散發著東方寺廟般的神聖與安寧。持久力極佳，可以在皮膚上持續數天。',
      intensity: 3,
      tenacity: 5,
      diffusion: 3,
      keywords: ['檀香', '奶油', '溫暖', '神聖']
    },
    properties: { mw: 220.35, bp: 301, logP: 4.78, density: 0.968, vaporPressure: 0.01, appearance: '淡黃色粘稠液體' },
    naturalSources: ['印度檀香木', '澳洲檀香木'],
    usage: {
      concentration: '主要以檀香精油形式使用，5-20%',
      pairings: ['Ambroxide', 'Vanillin', 'Rose absolue', 'Cashmeran'],
      perfumes: ['Santal 33 Le Labo', 'Tam Dao Diptyque', 'Samsara Guerlain'],
      applications: ['東方調', '木質調', '冥想香氛']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '因過度砍伐導致天然來源受限' }
  },

  {
    id: 'cedrol',
    name: '雪松醇',
    nameEn: 'Cedrol',
    cas: '77-53-2',
    smiles: 'CC1CCC2C(C1C)C1(O)CCC(C)C1CC2',
    category: 'woody',
    tags: ['cedar', 'dry', 'pencil'],
    functionalGroup: 'alcohol',
    notePosition: 'base',
    scentProfile: {
      description: '乾燥而沉穩的雪松木香氣，帶有鉛筆屑和木工房的溫暖聯想。是天然維吉尼亞雪松油的主要成分，散發著安靜而可靠的男性氣質。比檀香更加「乾」和「冷」。',
      intensity: 2,
      tenacity: 5,
      diffusion: 2,
      keywords: ['雪松', '鉛筆', '乾燥', '沉穩']
    },
    properties: { mw: 222.37, bp: 291, logP: 4.30, density: 1.008, vaporPressure: 0.02, appearance: '白色結晶或粘稠液體' },
    naturalSources: ['維吉尼亞雪松', '德州雪松', '喜馬拉雅雪松'],
    usage: {
      concentration: '3-15%',
      pairings: ['Iso E Super', 'Vetiver', 'Sandalwood', 'Bergamot'],
      perfumes: ['Bois des Iles Chanel', 'Tam Dao'],
      applications: ['木質調', '馥奇調', '男香']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'patchoulol',
    name: '廣藿香醇',
    nameEn: 'Patchoulol (Patchouli alcohol)',
    cas: '5986-55-0',
    smiles: 'CC1(C)CCC2(O)C(C)CCC1C2C',
    category: 'woody',
    tags: ['earthy', 'dark', 'damp'],
    functionalGroup: 'alcohol',
    notePosition: 'base',
    scentProfile: {
      description: '濃郁而深邃的泥土-濕木香氣，帶有黑巧克力和潮濕苔蘚的黑暗質感。它是廣藿香精油的主要成分，在嬉皮文化中象徵自由與反叛。陳化後香氣變得更加圓潤甜美，有如陳年葡萄酒。',
      intensity: 4,
      tenacity: 5,
      diffusion: 3,
      keywords: ['泥土', '濕木', '黑巧克力', '深邃']
    },
    properties: { mw: 222.37, bp: 287, logP: 4.16, density: 0.993, vaporPressure: 0.01, appearance: '淡黃色至琥珀色粘稠液體' },
    naturalSources: ['廣藿香葉片'],
    usage: {
      concentration: '3-20%（通常以精油形式）',
      pairings: ['Vetiver', 'Coumarin', 'Vanillin', 'Rose', 'Labdanum'],
      perfumes: ['Angel Thierry Mugler', 'Coromandel Chanel', 'Patchouli 24 Le Labo'],
      applications: ['東方調', '西普調', '木質調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好; 是「香料之王」' }
  },

  {
    id: 'cashmeran',
    name: 'Cashmeran (卡什莫蘭)',
    nameEn: 'Cashmeran',
    cas: '33704-61-9',
    smiles: 'CC1(C)CC2CCC(=O)C2(C)C1',
    category: 'woody',
    tags: ['musky', 'warm', 'spicy'],
    functionalGroup: 'ketone',
    notePosition: 'base',
    scentProfile: {
      description: '溫暖而多層次的木質-麝香-辛香混合體。帶有喀什米爾羊絨般的柔軟觸感、微妙的椰奶甜味和乾燥木質感。它是少數能同時表現「木質」「麝香」「辛香」三重特徵的分子。',
      intensity: 3,
      tenacity: 5,
      diffusion: 3,
      keywords: ['羊絨', '木質', '麝香', '溫暖']
    },
    properties: { mw: 192.30, bp: 265, logP: 3.15, density: 0.949, vaporPressure: 0.2, appearance: '無色至淡黃色液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '2-15%',
      pairings: ['Iso E Super', 'Ambroxide', 'Sandalwood', 'Vanilla'],
      perfumes: ['Escentric 02', 'Silver Mountain Water Creed', 'Molecule 02'],
      applications: ['木質調', '麝香調', '溫暖底座']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'sandalore',
    name: '新檀香醇',
    nameEn: 'Sandalore',
    cas: '65113-99-7',
    smiles: 'CC(C)CC(CC=C(C)C)CC(C)O',
    category: 'woody',
    tags: ['sandalwood', 'creamy', 'modern'],
    functionalGroup: 'alcohol',
    notePosition: 'base',
    scentProfile: {
      description: '現代詮釋的檀香木香氣，比天然檀香更加清新和透明。保留了檀香的奶油質感和溫暖，但增添了更多的「空氣感」。是天然檀香的優秀替代品，成本更低且供應穩定。',
      intensity: 3,
      tenacity: 5,
      diffusion: 3,
      keywords: ['檀香', '奶油', '現代', '清新']
    },
    properties: { mw: 210.36, bp: 290, logP: 4.21, density: 0.905, vaporPressure: 0.03, appearance: '無色液體' },
    naturalSources: ['合成（Givaudan 專利）'],
    usage: {
      concentration: '5-20%',
      pairings: ['Iso E Super', 'Ambroxide', 'Javanol', 'Hedione'],
      perfumes: ['Le Male Le Parfum JPG', '各種現代檀香調'],
      applications: ['檀香調', '木質調', '皮膚香氛']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'javanol',
    name: '加瓦醇',
    nameEn: 'Javanol',
    cas: '198404-98-7',
    smiles: 'OCC(C)c1ccc2c(c1)CCC2C',
    category: 'woody',
    tags: ['sandalwood', 'floral', 'modern'],
    functionalGroup: 'alcohol',
    notePosition: 'base',
    scentProfile: {
      description: '極為細膩的檀香-花香融合體，帶有天然印度檀香的奶油質感和更多的花卉面向。被認為是最接近天然 Mysore 檀香的合成替代品之一。有一種絲綢般的觸感。',
      intensity: 3,
      tenacity: 5,
      diffusion: 3,
      keywords: ['檀香', '絲綢', '花香', '細膩']
    },
    properties: { mw: 204.31, bp: 310, logP: 3.85, density: 0.998, vaporPressure: 0.01, appearance: '無色液體' },
    naturalSources: ['合成（Givaudan 專利）'],
    usage: {
      concentration: '3-15%',
      pairings: ['Sandalore', 'Ambroxide', 'Iso E Super'],
      perfumes: ['Santal 33', '高端檀香調'],
      applications: ['檀香調', '木質花香', '肌膚香氛']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   MUSKY 麝香家族
  // ═══════════════════════════════════════════════

  {
    id: 'muscone',
    name: '麝香酮',
    nameEn: 'Muscone (l-Muscone)',
    cas: '541-91-3',
    smiles: 'O=C1CCCCCCCCCCCC(C)C1',
    category: 'musky',
    tags: ['animalic', 'warm', 'skin'],
    functionalGroup: 'musk',
    notePosition: 'base',
    scentProfile: {
      description: '溫暖而動物般的天然麝香香氣，帶有微甜的皮膚感和令人上癮的原始吸引力。它是天然麝香（取自麝鹿）的主要活性成分。香氣柔和而包裹，有一種被輕柔擁抱的感覺。',
      intensity: 3,
      tenacity: 5,
      diffusion: 4,
      keywords: ['麝香', '動物', '皮膚', '溫暖']
    },
    properties: { mw: 238.41, bp: 327, logP: 5.86, density: 0.922, vaporPressure: 0.005, appearance: '淡黃色液體' },
    naturalSources: ['麝鹿香囊（現禁止天然來源）', '合成'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Exaltolide', 'Ambroxide', 'Sandalwood', 'Rose'],
      perfumes: ['Narciso Rodriguez For Her', 'Kiehl\'s Musk'],
      applications: ['麝香調', '東方調', '肌膚香氛']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '天然來源禁止（保護動物）; 合成版本安全' }
  },

  {
    id: 'galaxolide',
    name: '佳樂麝香',
    nameEn: 'Galaxolide (HHCB)',
    cas: '1222-05-5',
    smiles: 'CC1(C)CC2=CC(=CC3CCCCC3=C2OC1)C',
    category: 'musky',
    tags: ['clean', 'laundry', 'sweet'],
    functionalGroup: 'musk',
    notePosition: 'base',
    scentProfile: {
      description: '乾淨而甜美的「洗衣粉」麝香香氣，帶有微妙的金屬光澤和粉質觸感。它是全球使用量最大的合成麝香之一，幾乎出現在所有日用品香精中。它代表了「清潔」這個概念在嗅覺上的表達。',
      intensity: 3,
      tenacity: 5,
      diffusion: 4,
      keywords: ['洗衣粉', '清潔', '甜美', '粉質']
    },
    properties: { mw: 258.40, bp: 330, logP: 5.90, density: 1.010, vaporPressure: 0.003, appearance: '無色結晶' },
    naturalSources: ['合成'],
    usage: {
      concentration: '5-30%',
      pairings: ['Hedione', 'Iso E Super', 'Linalool', 'Coumarin'],
      perfumes: ['Dolce & Gabbana Light Blue', 'CK One', '幾乎所有柔順劑'],
      applications: ['白麝香調', '洗護產品', '柔順劑', '日用品']
    },
    safety: { ifra: '有注意事項', allergen: false, note: '環境持久性問題，部分地區加強監管' }
  },

  {
    id: 'tonalide',
    name: '吐納麝香',
    nameEn: 'Tonalide (AHTN)',
    cas: '21145-77-7',
    smiles: 'CC(=O)c1cc2c(cc1C)C(C)(C)CCC2C',
    category: 'musky',
    tags: ['sweet', 'clean', 'warm'],
    functionalGroup: 'musk',
    notePosition: 'base',
    scentProfile: {
      description: '甜美而溫暖的麝香，比 Galaxolide 更加「甜膩」和「動物性」。帶有琥珀般的溫暖和微弱的花香底調。常與 Galaxolide 搭配使用以增加深度。',
      intensity: 3,
      tenacity: 5,
      diffusion: 3,
      keywords: ['甜美', '溫暖', '琥珀', '麝香']
    },
    properties: { mw: 258.40, bp: 325, logP: 5.70, density: 0.998, vaporPressure: 0.004, appearance: '淡黃色液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '3-20%',
      pairings: ['Galaxolide', 'Vanillin', 'Coumarin', 'Ambroxide'],
      perfumes: ['各種商業香水和日用品'],
      applications: ['麝香調', '洗護產品', '日用品']
    },
    safety: { ifra: '有注意事項', allergen: false, note: '與 Galaxolide 類似的環境問題' }
  },

  {
    id: 'ethyleneBrassylate',
    name: '麝香T / 乙烯十三碳二酸酯',
    nameEn: 'Ethylene Brassylate',
    cas: '105-95-3',
    smiles: 'O=C1CCCCCCCCCC(=O)OCCO1',
    category: 'musky',
    tags: ['powdery', 'metallic', 'elegant'],
    functionalGroup: 'musk',
    notePosition: 'base',
    scentProfile: {
      description: '優雅而粉質的大環麝香，帶有微妙的金屬光澤和花粉般的清透感。與 Galaxolide 的「洗衣粉」感不同，它更加「天然」和「高貴」。是許多高端香水中白麝香底調的首選。',
      intensity: 2,
      tenacity: 5,
      diffusion: 3,
      keywords: ['粉質', '金屬', '優雅', '白麝香']
    },
    properties: { mw: 270.37, bp: 340, logP: 4.12, density: 1.030, vaporPressure: 0.001, appearance: '白色結晶或液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '5-25%',
      pairings: ['Exaltolide', 'Muscone', 'Hedione', 'Ambroxide'],
      perfumes: ['Narciso Rodriguez For Her', 'Glossier You'],
      applications: ['白麝香調', '肌膚香氛', '高端香水']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '生物可降解，環保的麝香選擇' }
  },

  {
    id: 'exaltolide',
    name: '環十五內酯',
    nameEn: 'Exaltolide (Cyclopentadecanolide)',
    cas: '106-02-5',
    smiles: 'O=C1CCCCCCCCCCCCCO1',
    category: 'musky',
    tags: ['sweet', 'animalic', 'warm'],
    functionalGroup: 'musk',
    notePosition: 'base',
    scentProfile: {
      description: '柔軟而甜美的大環麝香，帶有微弱的動物性和溫暖的乳脂質感。被認為是最接近天然麝香的合成替代品之一。有一種讓人想靠近的「肌膚觸感」。',
      intensity: 2,
      tenacity: 5,
      diffusion: 2,
      keywords: ['甜美', '柔軟', '肌膚', '乳脂']
    },
    properties: { mw: 240.38, bp: 350, logP: 5.55, density: 0.961, vaporPressure: 0.001, appearance: '白色蠟狀固體' },
    naturalSources: ['合成（靈感來自麝香靈貓）'],
    usage: {
      concentration: '2-15%',
      pairings: ['Muscone', 'Ethylene brassylate', 'Ambroxide'],
      perfumes: ['Narciso Rodriguez Pure Musc', 'Le Labo Another 13'],
      applications: ['麝香調', '肌膚香氛', '底座定香']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '生物可降解' }
  },

  {
    id: 'ambrettolide',
    name: '麝香內酯',
    nameEn: 'Ambrettolide',
    cas: '123-69-3',
    smiles: 'O=C1CCCCCCCCCCCCCCO1',
    category: 'musky',
    tags: ['floral', 'musky', 'natural'],
    functionalGroup: 'musk',
    notePosition: 'base',
    scentProfile: {
      description: '花香-麝香的細膩融合，帶有微妙的果香甜味和春日草地般的自然感。是黃葵子（Ambrette seed）中的天然成分，被視為最優雅的天然麝香原料。',
      intensity: 2,
      tenacity: 5,
      diffusion: 2,
      keywords: ['花香', '麝香', '自然', '優雅']
    },
    properties: { mw: 252.39, bp: 355, logP: 6.0, density: 0.955, vaporPressure: 0.001, appearance: '白色蠟狀固體' },
    naturalSources: ['黃葵子 (Ambrette seed)'],
    usage: {
      concentration: '1-8%',
      pairings: ['Exaltolide', 'Hedione', 'Santalol'],
      perfumes: ['MFK Amyris Femme', '天然高端香水'],
      applications: ['天然香水', '高端麝香調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '天然來源，安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   SPICY 辛香家族
  // ═══════════════════════════════════════════════

  {
    id: 'eugenol',
    name: '丁香酚',
    nameEn: 'Eugenol',
    cas: '97-53-0',
    smiles: 'C=CCc1ccc(O)c(OC)c1',
    category: 'spicy',
    tags: ['clove', 'warm', 'dental'],
    functionalGroup: 'phenol',
    notePosition: 'middle',
    scentProfile: {
      description: '溫暖而辛辣的丁香-肉桂混合香氣，帶有藥草般的苦澀底調和牙科診所的獨特聯想。它是丁香精油的主要成分，在東方調和辛香調香水中不可或缺。低濃度下有一種溫暖的甜蜜感。',
      intensity: 4,
      tenacity: 4,
      diffusion: 4,
      keywords: ['丁香', '辛辣', '溫暖', '藥草']
    },
    properties: { mw: 164.20, bp: 254, logP: 2.49, density: 1.067, vaporPressure: 2, appearance: '淡黃色液體' },
    naturalSources: ['丁香', '肉桂葉', '月桂', '羅勒'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Cinnamaldehyde', 'Vanillin', 'Rose', 'Coumarin'],
      perfumes: ['Opium YSL', 'Spicebomb Viktor&Rolf', 'L\'Air du Temps'],
      applications: ['東方調', '辛香調', '牙科', '食品調味']
    },
    safety: { ifra: '列管過敏原，有限量', allergen: true, note: 'EU 26 過敏原，有皮膚刺激性' }
  },

  {
    id: 'cinnamaldehyde',
    name: '肉桂醛',
    nameEn: 'Cinnamaldehyde',
    cas: '104-55-2',
    smiles: 'O=C/C=C/c1ccccc1',
    category: 'spicy',
    tags: ['cinnamon', 'warm', 'sweet'],
    functionalGroup: 'aldehyde',
    notePosition: 'middle',
    scentProfile: {
      description: '濃烈而甜辣的肉桂香氣，帶有糖果般的甜蜜和刺激性的溫暖。嗅到它就像被溫暖的肉桂卷包圍，是秋冬季節香水和家居香氛的靈魂成分。',
      intensity: 5,
      tenacity: 3,
      diffusion: 5,
      keywords: ['肉桂', '甜辣', '溫暖', '冬季']
    },
    properties: { mw: 132.16, bp: 248, logP: 1.90, density: 1.050, vaporPressure: 3, appearance: '黃色液體' },
    naturalSources: ['肉桂樹皮', '中國肉桂'],
    usage: {
      concentration: '0.1-2%（強效）',
      pairings: ['Eugenol', 'Vanillin', 'Benzoin', 'Labdanum'],
      perfumes: ['Cinnabar Estée Lauder', '各種東方辛香調'],
      applications: ['東方調', '辛香調', '聖誕香氛', '食品']
    },
    safety: { ifra: '列管過敏原', allergen: true, note: 'EU 26 過敏原，高濃度有皮膚刺激性' }
  },

  {
    id: 'isoeugenol',
    name: '異丁香酚',
    nameEn: 'Isoeugenol',
    cas: '97-54-1',
    smiles: 'C/C=C/c1ccc(O)c(OC)c1',
    category: 'spicy',
    tags: ['clove', 'floral', 'warm'],
    functionalGroup: 'phenol',
    notePosition: 'middle',
    scentProfile: {
      description: '比丁香酚更加柔和甜美的辛香，帶有更多花香和木質的面向。有康乃馨（Carnation）般的溫暖甜辣感。相比eugenol更不刺鼻，更「優雅」。',
      intensity: 3,
      tenacity: 4,
      diffusion: 3,
      keywords: ['康乃馨', '辛香', '甜美', '花香']
    },
    properties: { mw: 164.20, bp: 266, logP: 2.58, density: 1.085, vaporPressure: 1, appearance: '淡黃色液體' },
    naturalSources: ['丁香', '肉桂', '依蘭'],
    usage: {
      concentration: '0.5-3%',
      pairings: ['Eugenol', 'Rose', 'Methyl salicylate'],
      perfumes: ['L\'Air du Temps Nina Ricci', '康乃馨調香水'],
      applications: ['康乃馨調', '東方花香', '辛香調']
    },
    safety: { ifra: '列管過敏原，嚴格限量', allergen: true, note: 'EU 26 過敏原，致敏性較高' }
  },

  // ═══════════════════════════════════════════════
  //   AMBER / BALSAMIC 琥珀/香脂家族
  // ═══════════════════════════════════════════════

  {
    id: 'ambroxide',
    name: '龍涎醚',
    nameEn: 'Ambroxide (Ambroxan)',
    cas: '6790-58-5',
    smiles: 'CC1CCCC2(C)OC(CCC12)C(C)C',
    category: 'amber',
    tags: ['woody', 'musky', 'skin'],
    functionalGroup: 'ether',
    notePosition: 'base',
    scentProfile: {
      description: '溫暖而多維的琥珀-木質香氣，帶有龍涎香（Ambergris）的神秘質感和「被陽光曬暖的皮膚」氣息。它可能是近20年來最重要的香料分子——Baccarat Rouge 540 的成功很大程度歸功於它。它有一種「發光」的感覺，像是從皮膚內部散發出光暈。',
      intensity: 3,
      tenacity: 5,
      diffusion: 5,
      keywords: ['龍涎香', '琥珀', '陽光', '皮膚']
    },
    properties: { mw: 236.40, bp: 282, logP: 5.15, density: 0.960, vaporPressure: 0.03, appearance: '白色結晶' },
    naturalSources: ['龍涎香（鯨魚排泄物）', '快樂鼠尾草', '合成'],
    usage: {
      concentration: '5-30%',
      pairings: ['Iso E Super', 'Cashmeran', 'Hedione', 'Saffron'],
      perfumes: ['Baccarat Rouge 540 MFK', 'Sauvage Dior', 'Not a Perfume Juliette Has A Gun'],
      applications: ['琥珀調', '龍涎香重現', '肌膚香氛']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性極好，環保替代天然龍涎香' }
  },

  {
    id: 'vanillin',
    name: '香草醛',
    nameEn: 'Vanillin',
    cas: '121-33-5',
    smiles: 'O=Cc1ccc(O)c(OC)c1',
    category: 'amber',
    tags: ['gourmand', 'sweet', 'warm'],
    functionalGroup: 'aldehyde',
    notePosition: 'base',
    scentProfile: {
      description: '溫暖而甜蜜的香草香氣，帶有奶油蛋糕和焦糖的美食聯想。它是全世界最受歡迎的香氣之一，代表著舒適、溫暖和童年的純真。在香水中作為「甜度放大器」使用。',
      intensity: 4,
      tenacity: 4,
      diffusion: 4,
      keywords: ['香草', '甜蜜', '奶油', '溫暖']
    },
    properties: { mw: 152.15, bp: 285, logP: 1.21, density: 1.056, vaporPressure: 0.01, appearance: '白色針狀結晶' },
    naturalSources: ['香草莢', '丁香', '秘魯香脂'],
    usage: {
      concentration: '1-10%',
      pairings: ['Coumarin', 'Ethyl maltol', 'Benzoin', 'Tonka bean abs.'],
      perfumes: ['Shalimar', 'Angel', 'Black Opium YSL', 'Tobacco Vanille TF'],
      applications: ['東方調', '美食調', '幾乎所有需要甜味的配方']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性極好' }
  },

  {
    id: 'ethylVanillin',
    name: '乙基香蘭素',
    nameEn: 'Ethyl Vanillin',
    cas: '121-32-4',
    smiles: 'O=Cc1ccc(O)c(OCC)c1',
    category: 'amber',
    tags: ['gourmand', 'sweet', 'intense'],
    functionalGroup: 'aldehyde',
    notePosition: 'base',
    scentProfile: {
      description: '比 Vanillin 強3-4倍的香草香氣，更加奶油和焦糖感。帶有巧克力和烤堅果的豐富底調，是追求極致甜蜜感的配方首選。',
      intensity: 5,
      tenacity: 4,
      diffusion: 4,
      keywords: ['香草', '巧克力', '焦糖', '濃烈']
    },
    properties: { mw: 166.17, bp: 295, logP: 1.58, density: 1.060, vaporPressure: 0.008, appearance: '白色結晶' },
    naturalSources: ['合成'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Vanillin', 'Coumarin', 'Benzoin resinoid'],
      perfumes: ['Angel Thierry Mugler', 'Lolita Lempicka'],
      applications: ['美食調', '東方甜香', '食品香精']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'coumarin',
    name: '香豆素',
    nameEn: 'Coumarin',
    cas: '91-64-5',
    smiles: 'O=C1Oc2ccccc2C=C1',
    category: 'amber',
    tags: ['hay', 'tonka', 'warm'],
    functionalGroup: 'lactone',
    notePosition: 'base',
    scentProfile: {
      description: '溫暖而舒適的乾草-零陵香豆香氣，帶有杏仁和新割牧草的田園韻味。它是西普調和馥奇調香水的標誌性成分。有一種讓人放鬆的居家感。',
      intensity: 3,
      tenacity: 4,
      diffusion: 3,
      keywords: ['乾草', '零陵香豆', '杏仁', '溫暖']
    },
    properties: { mw: 146.14, bp: 301, logP: 1.39, density: 0.935, vaporPressure: 0.03, appearance: '白色結晶' },
    naturalSources: ['零陵香豆', '薰衣草', '甘草', '桂皮'],
    usage: {
      concentration: '2-15%',
      pairings: ['Vanillin', 'Lavender oil', 'Oakmoss', 'Bergamot'],
      perfumes: ['Jicky Guerlain', 'Drakkar Noir', 'A*Men Mugler'],
      applications: ['馥奇調', '東方調', '男香', '薰衣草配方']
    },
    safety: { ifra: '列管過敏原', allergen: true, note: '有肝毒性（大劑量），食品中禁用但香水安全用量內無虞' }
  },

  {
    id: 'sclareol',
    name: '香紫蘇醇',
    nameEn: 'Sclareol',
    cas: '515-03-7',
    smiles: 'CC1(C)CCCC2(C)C1CCC(C2CO)C(C)(O)C=C',
    category: 'amber',
    tags: ['amber', 'tobacco', 'labdanum'],
    functionalGroup: 'alcohol',
    notePosition: 'base',
    scentProfile: {
      description: '溫暖的琥珀-菸草香氣，帶有快樂鼠尾草的草本清新和勞丹脂般的深沉質感。它是 Ambroxide 的天然前體，賦予香水一種「老錢」般的優雅與深度。',
      intensity: 2,
      tenacity: 5,
      diffusion: 2,
      keywords: ['琥珀', '菸草', '草本', '深沉']
    },
    properties: { mw: 308.50, bp: 360, logP: 5.05, density: 1.002, vaporPressure: 0.001, appearance: '白色結晶' },
    naturalSources: ['快樂鼠尾草', '菸草葉'],
    usage: {
      concentration: '1-8%',
      pairings: ['Ambroxide', 'Vanillin', 'Labdanum', 'Tobacco abs.'],
      perfumes: ['Shalimar', '各種琥珀東方調'],
      applications: ['琥珀調', '菸草調', 'Ambroxide 前體']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'benzylBenzoate',
    name: '苯甲酸苄酯',
    nameEn: 'Benzyl Benzoate',
    cas: '120-51-4',
    smiles: 'O=C(OCc1ccccc1)c1ccccc1',
    category: 'amber',
    tags: ['balsamic', 'faint', 'fixative'],
    functionalGroup: 'ester',
    notePosition: 'base',
    scentProfile: {
      description: '微弱的香脂-杏仁香氣，幾乎沒有自身的香味。它的價值在於作為定香劑和溶劑——能夠延緩其他香料分子的揮發，延長香水的持久力。是「幕後英雄」型的成分。',
      intensity: 1,
      tenacity: 5,
      diffusion: 1,
      keywords: ['香脂', '杏仁', '定香', '溶劑']
    },
    properties: { mw: 212.24, bp: 324, logP: 3.97, density: 1.112, vaporPressure: 0.003, appearance: '無色液體' },
    naturalSources: ['秘魯香脂', '吐魯香脂', '依蘭'],
    usage: {
      concentration: '5-30%（作為溶劑/定香劑）',
      pairings: ['所有香料（作為載體使用）'],
      perfumes: ['作為隱藏成分廣泛使用'],
      applications: ['定香劑', '稀釋劑', '皮膚護理']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全，也用於疥瘡治療' }
  },

  // ═══════════════════════════════════════════════
  //   MARINE / AQUATIC 海洋家族
  // ═══════════════════════════════════════════════

  {
    id: 'calone',
    name: '海洋酮',
    nameEn: 'Calone (Watermelon ketone)',
    cas: '28940-11-6',
    smiles: 'O=C1COc2cc(Cl)ccc2CC1',
    category: 'marine',
    tags: ['watermelon', 'ozone', 'fresh'],
    functionalGroup: 'ketone',
    notePosition: 'middle',
    scentProfile: {
      description: '獨特的海洋-西瓜-臭氧香氣，帶有雨後濕潤的空氣和遠方海浪的聯想。它是1990年代「海洋調」革命的核心分子，定義了整個水生香水品類。微量使用時彷彿海風拂面，過量則有「漂白水」感。',
      intensity: 4,
      tenacity: 3,
      diffusion: 5,
      keywords: ['海洋', '西瓜', '臭氧', '雨後']
    },
    properties: { mw: 224.68, bp: 320, logP: 2.18, density: 1.250, vaporPressure: 0.3, appearance: '白色結晶' },
    naturalSources: ['合成（Pfizer 1966年開發）'],
    usage: {
      concentration: '0.01-1%（極強效）',
      pairings: ['Dihydromyrcenol', 'Helional', 'Hedione', 'Marine bases'],
      perfumes: ['Escape CK', 'Cool Water Davidoff', 'L\'Eau d\'Issey'],
      applications: ['海洋調', '水生調', '清新男香']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '使用量極少即有效果' }
  },

  {
    id: 'dihydromyrcenol',
    name: '二氫月桂烯醇',
    nameEn: 'Dihydromyrcenol',
    cas: '18479-58-8',
    smiles: 'CC(C)(O)CCCC(=C)C',
    category: 'marine',
    tags: ['citrus', 'metallic', 'clean'],
    functionalGroup: 'alcohol',
    notePosition: 'top',
    scentProfile: {
      description: '清涼而金屬質感的柑橘-水生香氣，帶有洗衣液的清潔聯想和微弱的薰衣草底調。它是 Cool Water (Davidoff) 中最具辨識度的成分，定義了「清新男香」的概念。便宜而高效，是商業男香的支柱。',
      intensity: 3,
      tenacity: 2,
      diffusion: 5,
      keywords: ['清新', '金屬', '洗衣液', '清潔']
    },
    properties: { mw: 154.25, bp: 194, logP: 2.85, density: 0.830, vaporPressure: 25, appearance: '無色液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '10-40%（廉價，可大量使用）',
      pairings: ['Hedione', 'Calone', 'Iso E Super', 'Linalool'],
      perfumes: ['Cool Water Davidoff', 'Acqua di Gio', '各種清新男香'],
      applications: ['清新男香', '運動香水', '身體噴霧']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性極好，經濟實惠的工作馬' }
  },

  // ═══════════════════════════════════════════════
  //   GOURMAND 美食家族
  // ═══════════════════════════════════════════════

  {
    id: 'ethylMaltol',
    name: '乙基麥芽酚',
    nameEn: 'Ethyl Maltol',
    cas: '4940-11-8',
    smiles: 'CCC1=C(O)C(=O)C=CO1',
    category: 'gourmand',
    tags: ['caramel', 'cotton-candy', 'sweet'],
    functionalGroup: 'ketone',
    notePosition: 'base',
    scentProfile: {
      description: '極度甜蜜的棉花糖-焦糖香氣，帶有果醬和烤糖的溫暖聯想。它是美食調香水的標誌性成分，能將任何配方迅速推向「甜點」的方向。聞到它就像走進一家巴黎甜點店。',
      intensity: 5,
      tenacity: 4,
      diffusion: 4,
      keywords: ['棉花糖', '焦糖', '甜蜜', '甜點']
    },
    properties: { mw: 140.14, bp: 280, logP: -0.25, density: 1.100, vaporPressure: 0.05, appearance: '白色粉末' },
    naturalSources: ['合成（麥芽酚衍生物）'],
    usage: {
      concentration: '0.1-3%',
      pairings: ['Vanillin', 'Coumarin', 'Praline note', 'Fruit esters'],
      perfumes: ['Angel Thierry Mugler', 'La Vie Est Belle Lancôme', 'Black Opium'],
      applications: ['美食調', '東方甜香', '甜點調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好，也用於食品增味' }
  },

  {
    id: 'piperonal',
    name: '洋茉莉醛 / 天芥菜醛',
    nameEn: 'Piperonal (Heliotropin)',
    cas: '120-57-0',
    smiles: 'O=Cc1ccc2OCOc2c1',
    category: 'gourmand',
    tags: ['almond', 'cherry', 'powdery'],
    functionalGroup: 'aldehyde',
    notePosition: 'middle',
    scentProfile: {
      description: '甜蜜的杏仁-櫻桃-香草混合香氣，帶有溫暖的粉質觸感和天芥菜花的花香底調。有一種「懷舊嬰兒爽身粉」的溫暖聯想，是粉香調和美食調的重要原料。',
      intensity: 3,
      tenacity: 3,
      diffusion: 3,
      keywords: ['杏仁', '櫻桃', '粉質', '嬰兒粉']
    },
    properties: { mw: 150.13, bp: 263, logP: 1.04, density: 1.340, vaporPressure: 1, appearance: '白色結晶' },
    naturalSources: ['香莢蘭', '塔希提梔子'],
    usage: {
      concentration: '1-8%',
      pairings: ['Vanillin', 'Coumarin', 'Ionones', 'Anisaldehyde'],
      perfumes: ['L\'Heure Bleue Guerlain', 'Lolita Lempicka'],
      applications: ['粉香調', '美食調', '嬰兒產品']
    },
    safety: { ifra: '管制化學品（部分地區需許可）', allergen: false, note: '部分國家因胡椒醛前體身份受管制' }
  },

  // ═══════════════════════════════════════════════
  //   POWDERY 粉香家族
  // ═══════════════════════════════════════════════

  {
    id: 'betaIonone',
    name: 'β-紫羅蘭酮',
    nameEn: 'beta-Ionone',
    cas: '14901-07-6',
    smiles: 'CC1=CC(=CC(=O)C)CC1(C)C',
    category: 'powdery',
    tags: ['violet', 'woody', 'dry'],
    functionalGroup: 'ketone',
    notePosition: 'middle',
    scentProfile: {
      description: '乾燥而典雅的紫羅蘭-木質香氣，帶有微苦的粉質底調和胡蘿蔔種子的泥土感。它是紫羅蘭花香的化學本質，但也有一種冷峻的「距離感」。比 α-異甲基紫羅蘭酮更「乾」更「木質」。',
      intensity: 3,
      tenacity: 3,
      diffusion: 3,
      keywords: ['紫羅蘭', '木質', '乾燥', '粉質']
    },
    properties: { mw: 192.30, bp: 237, logP: 3.84, density: 0.945, vaporPressure: 1, appearance: '淡黃色液體' },
    naturalSources: ['紫羅蘭花', '鳶尾根', '覆盆子', '番茄'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Orris butter', 'alpha-Isomethyl ionone', 'Violet leaf abs.'],
      perfumes: ['Après l\'Ondée Guerlain', 'Insolence Guerlain'],
      applications: ['紫羅蘭調', '鳶尾調', '粉香調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'alphaIonone',
    name: 'α-紫羅蘭酮',
    nameEn: 'alpha-Ionone',
    cas: '127-41-3',
    smiles: 'CC1=CC(CC1(C)C)C=CC(=O)C',
    category: 'powdery',
    tags: ['violet', 'fruity', 'berry'],
    functionalGroup: 'ketone',
    notePosition: 'middle',
    scentProfile: {
      description: '果香的紫羅蘭-覆盆子混合，比 β-紫羅蘭酮更加水果調和甜美。帶有木質基底和微弱的粉質感。較 β 型更「溫柔」、「果味」。',
      intensity: 3,
      tenacity: 3,
      diffusion: 3,
      keywords: ['紫羅蘭', '覆盆子', '果香', '柔和']
    },
    properties: { mw: 192.30, bp: 228, logP: 3.52, density: 0.932, vaporPressure: 2, appearance: '淡黃色液體' },
    naturalSources: ['紫羅蘭', '覆盆子', '紅茶'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['beta-Ionone', 'Rose', 'Cassie absolute'],
      perfumes: ['各種花香調'],
      applications: ['紫羅蘭調', '覆盆子調', '花果調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'muskKetone',
    name: '酮麝香',
    nameEn: 'Musk Ketone',
    cas: '81-14-1',
    smiles: 'CC1=CC([N+](=O)[O-])=C(C)C([N+](=O)[O-])=C1',
    category: 'powdery',
    tags: ['musky', 'sweet', 'nostalgic'],
    functionalGroup: 'musk',
    notePosition: 'base',
    scentProfile: {
      description: '甜蜜而復古的粉質麝香，帶有老式香水和化妝品的懷舊氣息。它是硝基麝香家族最「乾淨」的成員，賦予經典香水那種「老式優雅」的質感。現因環保法規逐漸被新型麝香取代。',
      intensity: 2,
      tenacity: 5,
      diffusion: 3,
      keywords: ['粉質', '復古', '甜蜜', '優雅']
    },
    properties: { mw: 294.30, bp: 350, logP: 3.44, density: 1.140, vaporPressure: 0.001, appearance: '黃色結晶' },
    naturalSources: ['合成'],
    usage: {
      concentration: '1-5%',
      pairings: ['Galaxolide', 'Vanillin', 'Coumarin'],
      perfumes: ['Chanel No.5（原始配方）', '經典花香調'],
      applications: ['經典花香調', '粉香調']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '硝基麝香，環保考量限制使用；部分國家已禁用' }
  },

  // ═══════════════════════════════════════════════
  //   HERBAL / AROMATIC 草本/芳香家族  
  // ═══════════════════════════════════════════════

  {
    id: 'eucalyptol',
    name: '桉葉油素 / 桉醇',
    nameEn: 'Eucalyptol (1,8-Cineole)',
    cas: '470-82-6',
    smiles: 'CC1(C)C2CCC(O2)(CC1)C',
    category: 'herbal',
    tags: ['eucalyptus', 'camphor', 'fresh'],
    functionalGroup: 'oxide',
    notePosition: 'top',
    scentProfile: {
      description: '清涼而穿透力強的桉樹-薄荷香氣，帶有樟腦般的藥用感和微甜的草本底調。它喚起的是感冒糖漿和漱口水的聯想——清潔、通暢、提神。在香水中為前調增添「通透感」。',
      intensity: 4,
      tenacity: 2,
      diffusion: 5,
      keywords: ['桉樹', '薄荷', '清涼', '藥用']
    },
    properties: { mw: 154.25, bp: 176, logP: 2.74, density: 0.922, vaporPressure: 200, appearance: '無色液體' },
    naturalSources: ['桉樹', '迷迭香', '月桂', '茶樹'],
    usage: {
      concentration: '1-10%',
      pairings: ['Camphor', 'Menthol', 'Lavender', 'Pine oil'],
      perfumes: ['各種草本清新調'],
      applications: ['芳療', '藥用', '草本調', '清新前調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好，但不宜口服大量' }
  },

  {
    id: 'camphor',
    name: '樟腦',
    nameEn: 'Camphor',
    cas: '76-22-2',
    smiles: 'CC1(C)C2CCC1(C)C(=O)C2',
    category: 'herbal',
    tags: ['medicinal', 'woody', 'cool'],
    functionalGroup: 'ketone',
    notePosition: 'top',
    scentProfile: {
      description: '強烈的藥用-木質-清涼香氣，帶有松樹和薄荷交融的穿透力。它是東方藥典中的重要角色，喚起樟木衣箱和中藥店的記憶。在現代香水中少見，但在芳療和日用品中廣泛使用。',
      intensity: 5,
      tenacity: 3,
      diffusion: 5,
      keywords: ['樟腦', '藥用', '清涼', '木質']
    },
    properties: { mw: 152.23, bp: 209, logP: 2.38, density: 0.992, vaporPressure: 33, appearance: '白色結晶' },
    naturalSources: ['樟樹', '迷迭香', '薰衣草'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Eucalyptol', 'Lavender oil', 'Rosemary'],
      perfumes: ['草本芳療類'],
      applications: ['芳療', '藥膏', '驅蟲', '草本調']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '神經毒性（口服大劑量），皮膚外用安全' }
  },

  {
    id: 'menthol',
    name: '薄荷醇',
    nameEn: 'Menthol (l-Menthol)',
    cas: '2216-51-5',
    smiles: 'CC1CCC(C(C1)O)C(C)C',
    category: 'herbal',
    tags: ['mint', 'cool', 'fresh'],
    functionalGroup: 'alcohol',
    notePosition: 'top',
    scentProfile: {
      description: '清涼而提神的薄荷香氣，帶有標誌性的「冰感」——它激活TRPM8冷覺受體，在嗅覺之外還產生生理上的清涼感。是世界上用量最大的單體香料分子之一。',
      intensity: 4,
      tenacity: 2,
      diffusion: 5,
      keywords: ['薄荷', '冰涼', '清新', '提神']
    },
    properties: { mw: 156.27, bp: 212, logP: 3.40, density: 0.890, vaporPressure: 5, appearance: '白色結晶' },
    naturalSources: ['薄荷', '玉米薄荷'],
    usage: {
      concentration: '0.5-10%',
      pairings: ['Eucalyptol', 'Peppermint oil', 'Linalool'],
      perfumes: ['少見於傳統香水，偶見於清新前調'],
      applications: ['口腔護理', '藥品', '食品', '沐浴露']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好，全球年產量達3萬噸' }
  },

  {
    id: 'thymol',
    name: '百里酚',
    nameEn: 'Thymol',
    cas: '89-83-8',
    smiles: 'CC(C)c1cc(C)ccc1O',
    category: 'herbal',
    tags: ['thyme', 'medicinal', 'warm'],
    functionalGroup: 'phenol',
    notePosition: 'middle',
    scentProfile: {
      description: '溫暖的百里香-草藥香氣，帶有微辣的藥用感和乾燥的草本底調。是地中海烹飪和芳療的經典香氣，喚起普羅旺斯陽光下的香草花園。',
      intensity: 4,
      tenacity: 3,
      diffusion: 4,
      keywords: ['百里香', '草藥', '藥用', '溫暖']
    },
    properties: { mw: 150.22, bp: 233, logP: 3.30, density: 0.965, vaporPressure: 5, appearance: '白色結晶' },
    naturalSources: ['百里香', '牛至', '紫蘇'],
    usage: {
      concentration: '0.1-2%',
      pairings: ['Lavender', 'Rosemary', 'Eugenol', 'Bergamot'],
      perfumes: ['草本芳療調'],
      applications: ['芳療', '漱口水', '草本調', '殺菌產品']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '高濃度有皮膚刺激性' }
  },

  {
    id: 'verbenone',
    name: '馬鞭草酮',
    nameEn: 'Verbenone',
    cas: '80-57-9',
    smiles: 'CC1(C)C2CC(=O)C1=CC2',
    category: 'herbal',
    tags: ['rosemary', 'minty', 'fresh'],
    functionalGroup: 'ketone',
    notePosition: 'top',
    scentProfile: {
      description: '清新的迷迭香-薄荷混合香氣，帶有樟腦般的藥用底調和微微的柑橘亮度。它是迷迭香精油中更加「優雅」的面向。',
      intensity: 3,
      tenacity: 2,
      diffusion: 4,
      keywords: ['迷迭香', '薄荷', '清新', '草本']
    },
    properties: { mw: 150.22, bp: 228, logP: 1.89, density: 0.978, vaporPressure: 10, appearance: '無色液體' },
    naturalSources: ['迷迭香', '馬鞭草'],
    usage: {
      concentration: '0.5-3%',
      pairings: ['Eucalyptol', 'Camphor', 'Lavender'],
      perfumes: ['草本清新調'],
      applications: ['芳療', '草本調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   ANIMALIC 動物香家族
  // ═══════════════════════════════════════════════

  {
    id: 'indole',
    name: '吲哚',
    nameEn: 'Indole',
    cas: '120-72-9',
    smiles: 'c1ccc2[nH]ccc2c1',
    category: 'animalic',
    tags: ['floral', 'fecal', 'narcotic'],
    functionalGroup: 'nitrile',
    notePosition: 'middle',
    scentProfile: {
      description: '充滿魅力的矛盾分子：高濃度下有明顯的糞臭感和動物性，但極低濃度時展現出迷人的白花-茉莉香氣。它是茉莉花迷人魅力的關鍵——那種讓人又愛又怕的「慵懶性感」。是香水界最重要的「愛恨交織」成分。',
      intensity: 5,
      tenacity: 4,
      diffusion: 4,
      keywords: ['茉莉', '動物', '性感', '白花']
    },
    properties: { mw: 117.15, bp: 254, logP: 2.14, density: 1.222, vaporPressure: 1, appearance: '白色結晶片' },
    naturalSources: ['茉莉', '橙花', '梔子花', '水仙'],
    usage: {
      concentration: '0.01-0.5%（極少量）',
      pairings: ['Jasmine absolute', 'Tuberose', 'Hedione', 'Orange blossom'],
      perfumes: ['Joy Jean Patou', 'Fracas Robert Piguet', 'Carnal Flower FM'],
      applications: ['白花調', '東方調', '動物調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全，但味覺閾值極低，需精確使用' }
  },

  {
    id: 'skatole',
    name: '糞臭素',
    nameEn: 'Skatole (3-Methylindole)',
    cas: '83-34-1',
    smiles: 'Cc1c[nH]c2ccccc12',
    category: 'animalic',
    tags: ['fecal', 'floral', 'extreme'],
    functionalGroup: 'nitrile',
    notePosition: 'base',
    scentProfile: {
      description: '極度動物性的糞便-花香矛盾體。在近乎不可感知的微量下，它為花香調增添了一種神秘的「有機」深度——像是花朵的根基深植於泥土之中。用量稍過即災難性地轉向糞臭。',
      intensity: 5,
      tenacity: 5,
      diffusion: 5,
      keywords: ['糞便', '動物', '有機', '泥土']
    },
    properties: { mw: 131.17, bp: 265, logP: 2.60, density: 1.080, vaporPressure: 0.5, appearance: '白色片狀結晶' },
    naturalSources: ['茉莉', '橙花', '甜菜', '人體代謝物'],
    usage: {
      concentration: '0.0001-0.01%（痕量使用）',
      pairings: ['Indole', 'Civet paste replacement', 'Jasmine abs.'],
      perfumes: ['極少直接使用，多在天然原料中存在'],
      applications: ['動物調（痕量）', '天然茉莉替代']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全但具肺毒性（工業濃度），香水用量安全' }
  },

  // ═══════════════════════════════════════════════
  //   更多常用分子補充
  // ═══════════════════════════════════════════════

  {
    id: 'alphaPinene',
    name: 'α-蒎烯',
    nameEn: 'alpha-Pinene',
    cas: '80-56-8',
    smiles: 'CC1=CCC2CC1C2(C)C',
    category: 'herbal',
    tags: ['pine', 'fresh', 'resinous'],
    functionalGroup: 'terpene',
    notePosition: 'top',
    scentProfile: {
      description: '清新的松樹-森林香氣，帶有樹脂般的溫暖和微妙的草本底調。是松針精油的主要成分，喚起冬日壁爐旁的松木氣息和聖誕節的節日記憶。',
      intensity: 3,
      tenacity: 1,
      diffusion: 4,
      keywords: ['松樹', '森林', '樹脂', '清新']
    },
    properties: { mw: 136.23, bp: 156, logP: 4.83, density: 0.858, vaporPressure: 470, appearance: '無色液體' },
    naturalSources: ['松樹', '迷迭香', '鼠尾草', '杜松'],
    usage: {
      concentration: '1-10%',
      pairings: ['Limonene', 'Eucalyptol', 'Cedarwood'],
      perfumes: ['Terre d\'Hermès', '各種森林調'],
      applications: ['森林調', '芳療', '清新前調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '氧化產物可能致敏' }
  },

  {
    id: 'methylSalicylate',
    name: '水楊酸甲酯',
    nameEn: 'Methyl Salicylate (Wintergreen)',
    cas: '119-36-8',
    smiles: 'COC(=O)c1ccccc1O',
    category: 'herbal',
    tags: ['minty', 'medicinal', 'sweet'],
    functionalGroup: 'ester',
    notePosition: 'top',
    scentProfile: {
      description: '甜美而辛涼的冬青-肌肉酸痛藥膏香氣，帶有薄荷和泡泡糖的雙重面向。在低濃度時有一種清甜的桃味，高濃度下展現強烈的藥用感。是醫藥與食品產業的雙棲原料。',
      intensity: 4,
      tenacity: 2,
      diffusion: 5,
      keywords: ['冬青', '藥膏', '薄荷', '甜辣']
    },
    properties: { mw: 152.15, bp: 222, logP: 2.55, density: 1.174, vaporPressure: 4, appearance: '無色液體' },
    naturalSources: ['冬青', '百齡油', '樺樹'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Camphor', 'Eucalyptol', 'Menthol'],
      perfumes: ['罕見於現代香水'],
      applications: ['藥品', '肌肉酸痛產品', '口腔護理', '根汁汽水']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全用量下無虞，口服有毒' }
  },

  {
    id: 'benzylAcetate',
    name: '乙酸苄酯',
    nameEn: 'Benzyl Acetate',
    cas: '140-11-4',
    smiles: 'CC(=O)OCc1ccccc1',
    category: 'floral',
    tags: ['jasmine', 'fruity', 'fresh'],
    functionalGroup: 'ester',
    notePosition: 'top',
    scentProfile: {
      description: '清新而果香的茉莉花香氣，帶有梨子和青蘋果的果味面向。它是天然茉莉精油中含量最高的成分之一（約25%），但比天然茉莉更加「乾淨」和「清新」。',
      intensity: 3,
      tenacity: 2,
      diffusion: 4,
      keywords: ['茉莉', '梨子', '清新', '果香']
    },
    properties: { mw: 150.17, bp: 213, logP: 1.96, density: 1.054, vaporPressure: 15, appearance: '無色液體' },
    naturalSources: ['茉莉花', '梔子花', '依蘭'],
    usage: {
      concentration: '3-15%',
      pairings: ['Hedione', 'Indole', 'Benzyl alcohol', 'Linalool'],
      perfumes: ['Joy Jean Patou', '多種茉莉調'],
      applications: ['茉莉調', '花果調', '洗護產品']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'benzylSalicylate',
    name: '水楊酸苄酯',
    nameEn: 'Benzyl Salicylate',
    cas: '118-58-1',
    smiles: 'O=C(OCCc1ccccc1)c1ccccc1O',
    category: 'floral',
    tags: ['balsamic', 'orchid', 'fixative'],
    functionalGroup: 'ester',
    notePosition: 'base',
    scentProfile: {
      description: '微弱而柔和的花香-香脂香氣，帶有蘭花般的優雅和微甜的底調。它的主要價值在於出色的定香能力——能將揮發性分子「固定」在配方中，延長整體持久力。是看不見的「香水建築師」。',
      intensity: 1,
      tenacity: 5,
      diffusion: 1,
      keywords: ['蘭花', '香脂', '定香', '柔和']
    },
    properties: { mw: 228.24, bp: 320, logP: 3.44, density: 1.177, vaporPressure: 0.005, appearance: '無色至淡黃色液體' },
    naturalSources: ['依蘭'],
    usage: {
      concentration: '5-25%（作為定香劑）',
      pairings: ['Hedione', 'Galaxolide', 'Iso E Super', '所有花香調'],
      perfumes: ['幾乎所有商業香水中作為定香劑'],
      applications: ['定香劑', '花香底座', '所有類型香水']
    },
    safety: { ifra: '列管過敏原，有限量', allergen: true, note: 'EU 26 過敏原' }
  },

  {
    id: 'hexylSalicylate',
    name: '水楊酸己酯',
    nameEn: 'Hexyl Salicylate',
    cas: '6259-76-3',
    smiles: 'O=C(OCCCCCC)c1ccccc1O',
    category: 'floral',
    tags: ['green', 'orchid', 'fresh'],
    functionalGroup: 'ester',
    notePosition: 'middle',
    scentProfile: {
      description: '清新的綠色花香，帶有蘭花般的高雅氣質和微弱的金屬光澤。比 Benzyl salicylate 更加「綠色」和「清新」，同時兼具良好的定香能力。',
      intensity: 2,
      tenacity: 4,
      diffusion: 2,
      keywords: ['綠色', '蘭花', '清新', '定香']
    },
    properties: { mw: 222.28, bp: 305, logP: 4.22, density: 1.036, vaporPressure: 0.01, appearance: '無色液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '3-15%',
      pairings: ['Benzyl salicylate', 'Hedione', 'Linalool'],
      perfumes: ['清新花香調'],
      applications: ['定香劑', '綠色花香', '洗護產品']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'damascenone',
    name: '大馬士革烯酮',
    nameEn: 'Damascenone (beta-Damascenone)',
    cas: '23726-93-4',
    smiles: 'CC1(C)/C(O)=C\\C(=O)/C1=C/C=CC',
    category: 'fruity',
    tags: ['rose', 'plum', 'wine'],
    functionalGroup: 'ketone',
    notePosition: 'middle',
    scentProfile: {
      description: '極為豐沛的玫瑰-李子-蘋果混合香氣，帶有紅酒般的醇厚和蜂蜜般的甜蜜。它是天然玫瑰萃取物中「最珍貴的幾滴」，閾值低到令人驚嘆。微量添加即可賦予配方非凡的果香深度。',
      intensity: 5,
      tenacity: 4,
      diffusion: 5,
      keywords: ['玫瑰', '李子', '紅酒', '蜂蜜']
    },
    properties: { mw: 190.28, bp: 274, logP: 3.02, density: 0.944, vaporPressure: 0.5, appearance: '淡黃色液體' },
    naturalSources: ['大馬士革玫瑰', '蘋果', '葡萄酒', '啤酒花'],
    usage: {
      concentration: '0.001-0.1%（痕量使用）',
      pairings: ['Rose oxide', 'Citronellol', 'Geraniol', 'Linalool'],
      perfumes: ['Chloe EDP', 'Rose 31 Le Labo'],
      applications: ['玫瑰調', '果香調', '紅酒調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '嗅覺閾值約0.002 ppb，極其強效' }
  },

  {
    id: 'alphaDamascone',
    name: 'α-大馬士革酮',
    nameEn: 'alpha-Damascone',
    cas: '43052-87-5',
    smiles: 'CC1=CC(CC1(C)C)/C=C/C(=O)C',
    category: 'fruity',
    tags: ['rose', 'plum', 'woody'],
    functionalGroup: 'ketone',
    notePosition: 'middle',
    scentProfile: {
      description: '華麗的玫瑰-黑醋栗-李子混合，帶有木質和茶的底調。比 beta-Damascenone 更加「果味」和「可控」，但同樣擁有令人印象深刻的擴散力。是高端玫瑰配方的秘密武器。',
      intensity: 4,
      tenacity: 4,
      diffusion: 5,
      keywords: ['玫瑰', '黑醋栗', '李子', '木質']
    },
    properties: { mw: 192.30, bp: 268, logP: 3.32, density: 0.925, vaporPressure: 0.5, appearance: '淡黃色液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '0.05-1%',
      pairings: ['Rose absolute', 'Black currant bud abs.', 'Linalool'],
      perfumes: ['Portrait of a Lady FM', 'Lyric Amouage'],
      applications: ['玫瑰調', '果香調', '深邃花香']
    },
    safety: { ifra: '有使用限制', allergen: false, note: '強效成分，需精確用量' }
  },

  {
    id: 'hexylCinnamal',
    name: '己基肉桂醛',
    nameEn: 'Hexyl Cinnamal',
    cas: '101-86-0',
    smiles: 'O=C/C=C/c1ccc(CCCCCC)cc1',
    category: 'floral',
    tags: ['jasmine', 'mild', 'fixative'],
    functionalGroup: 'aldehyde',
    notePosition: 'base',
    scentProfile: {
      description: '極為柔和的茉莉-洋甘菊花香，幾乎感覺不到但為配方增添了持久的花香「影子」。它是最溫和的醛類香料之一，更多以定香劑的身份存在。',
      intensity: 1,
      tenacity: 5,
      diffusion: 1,
      keywords: ['茉莉', '柔和', '定香', '影子']
    },
    properties: { mw: 216.32, bp: 310, logP: 4.85, density: 0.946, vaporPressure: 0.01, appearance: '淡黃色液體' },
    naturalSources: ['洋甘菊'],
    usage: {
      concentration: '3-15%',
      pairings: ['Hedione', 'Benzyl salicylate', 'Linalool'],
      perfumes: ['作為定香劑廣泛使用'],
      applications: ['定香劑', '花香底座', '洗護產品']
    },
    safety: { ifra: '列管過敏原', allergen: true, note: 'EU 26 過敏原' }
  },

  {
    id: 'lilial',
    name: '鈴蘭醛 (Lilial)',
    nameEn: 'Lilial (Butylphenyl methylpropanal)',
    cas: '80-54-6',
    smiles: 'CC(C)c1ccc(CC(C)C=O)cc1',
    category: 'floral',
    tags: ['muguet', 'lily', 'clean'],
    functionalGroup: 'aldehyde',
    notePosition: 'middle',
    scentProfile: {
      description: '經典的鈴蘭-百合花香，帶有清潔的肥皂感和微妙的綠色底調。曾是全球使用最廣泛的白花調原料之一，但因安全性問題於2022年在歐盟被禁用。',
      intensity: 3,
      tenacity: 3,
      diffusion: 4,
      keywords: ['鈴蘭', '百合', '肥皂', '清潔']
    },
    properties: { mw: 204.31, bp: 279, logP: 3.65, density: 0.948, vaporPressure: 0.5, appearance: '無色液體' },
    naturalSources: ['合成'],
    usage: {
      concentration: '（已被 EU 禁用）歷史用量 2-10%',
      pairings: ['Hydroxycitronellal', 'Linalool', 'Muguet bases'],
      perfumes: ['Diorissimo (原配方)', '經典鈴蘭調'],
      applications: ['歷史：鈴蘭調、白花調、肥皂（現已禁用）']
    },
    safety: { ifra: '⚠️ 2022年EU禁用', allergen: true, note: 'EU 2022年禁止在化妝品中使用，因生殖毒性' }
  },

  {
    id: 'lavandulol',
    name: '薰衣草醇',
    nameEn: 'Lavandulol',
    cas: '498-16-8',
    smiles: 'CC(=C)C(CC=C(C)C)CO',
    category: 'herbal',
    tags: ['lavender', 'floral', 'green'],
    functionalGroup: 'alcohol',
    notePosition: 'middle',
    scentProfile: {
      description: '柔和的薰衣草-綠色花香，帶有草本的清新和微甜的底調。是薰衣草精油中的重要組成部分，賦予一種比 Linalool 更「正宗薰衣草」的感覺。',
      intensity: 2,
      tenacity: 3,
      diffusion: 3,
      keywords: ['薰衣草', '綠色', '柔和', '草本']
    },
    properties: { mw: 154.25, bp: 210, logP: 2.65, density: 0.875, vaporPressure: 10, appearance: '無色液體' },
    naturalSources: ['薰衣草'],
    usage: {
      concentration: '1-8%',
      pairings: ['Linalool', 'Linalyl acetate', 'Coumarin'],
      perfumes: ['Pour un Homme de Caron'],
      applications: ['薰衣草調', '草本調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'terpineol',
    name: 'α-萜品醇',
    nameEn: 'alpha-Terpineol',
    cas: '98-55-5',
    smiles: 'CC1=CCC(CC1)(C)O',
    category: 'floral',
    tags: ['lilac', 'fresh', 'pine'],
    functionalGroup: 'alcohol',
    notePosition: 'middle',
    scentProfile: {
      description: '清新的紫丁香-松樹混合香氣，帶有微甜的花香和乾淨的底調。是紫丁香（Lilac）花香的關鍵成分，同時帶有松樹般的清新感。價格低廉且用途廣泛。',
      intensity: 2,
      tenacity: 3,
      diffusion: 3,
      keywords: ['紫丁香', '松樹', '清新', '花香']
    },
    properties: { mw: 154.25, bp: 219, logP: 2.98, density: 0.935, vaporPressure: 5, appearance: '無色液體' },
    naturalSources: ['松樹', '茶樹', '桉樹', '薰衣草'],
    usage: {
      concentration: '2-10%',
      pairings: ['Linalool', 'Eucalyptol', 'Pine oil'],
      perfumes: ['各種清新花香調'],
      applications: ['紫丁香調', '清潔產品', '漱口水']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'safranal',
    name: '番紅花醛',
    nameEn: 'Safranal',
    cas: '116-26-7',
    smiles: 'CC1=CC(=O)C(C)(C)C=C1',
    category: 'spicy',
    tags: ['saffron', 'hay', 'leather'],
    functionalGroup: 'aldehyde',
    notePosition: 'middle',
    scentProfile: {
      description: '獨特的番紅花-乾草-皮革混合香氣，帶有微苦的藥用底調和金屬質感。它是全球最昂貴香料——番紅花的主要氣味成分，散發著東方宮廷般的奢華氣息。',
      intensity: 4,
      tenacity: 3,
      diffusion: 4,
      keywords: ['番紅花', '乾草', '皮革', '奢華']
    },
    properties: { mw: 150.22, bp: 254, logP: 2.56, density: 0.973, vaporPressure: 2, appearance: '淡黃色液體' },
    naturalSources: ['番紅花（藏紅花）'],
    usage: {
      concentration: '0.5-3%',
      pairings: ['Oud', 'Ambroxide', 'Rose', 'Leather notes'],
      perfumes: ['Baccarat Rouge 540', 'Bvlgari Le Gemme'],
      applications: ['東方調', '奢華香水', '美食調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '天然來源極昂貴' }
  },

  {
    id: 'evernyl',
    name: '草苔素',
    nameEn: 'Evernyl (Methyl atrarate)',
    cas: '4707-47-5',
    smiles: 'COC(=O)c1c(O)cc(OC)c(C)c1O',
    category: 'woody',
    tags: ['oakmoss', 'earthy', 'chypre'],
    functionalGroup: 'ester',
    notePosition: 'base',
    scentProfile: {
      description: '苔蘚-泥土-木質的深沉香氣，帶有雨後森林地面的潮濕感和微弱的蘑菇底調。它是天然橡苔（Oakmoss）的合成替代品，是西普調（Chypre）香水的核心靈魂。',
      intensity: 3,
      tenacity: 5,
      diffusion: 2,
      keywords: ['橡苔', '泥土', '苔蘚', '森林']
    },
    properties: { mw: 212.20, bp: 295, logP: 1.73, density: 1.180, vaporPressure: 0.01, appearance: '白色結晶' },
    naturalSources: ['合成（模擬橡苔）'],
    usage: {
      concentration: '1-8%',
      pairings: ['Oakmoss abs.', 'Coumarin', 'Patchouli', 'Bergamot'],
      perfumes: ['Mitsouko Guerlain', 'Chanel Pour Monsieur', 'various Chypre fragrances'],
      applications: ['西普調', '馥奇調', '木質調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '橡苔替代品，安全性良好' }
  },

  {
    id: 'phenylethylAcetate',
    name: '乙酸苯乙酯',
    nameEn: 'Phenylethyl Acetate',
    cas: '103-45-7',
    smiles: 'CC(=O)OCCc1ccccc1',
    category: 'floral',
    tags: ['rose', 'fruity', 'honey'],
    functionalGroup: 'ester',
    notePosition: 'top',
    scentProfile: {
      description: '甜蜜的玫瑰-蜂蜜-果香混合，帶有比苯乙醇更加「乾淨」和「輕盈」的花香質感。在前調中提供明亮的花果香氣，是玫瑰調的輕盈版本。',
      intensity: 2,
      tenacity: 2,
      diffusion: 3,
      keywords: ['玫瑰', '蜂蜜', '果香', '清新']
    },
    properties: { mw: 164.20, bp: 238, logP: 2.30, density: 1.032, vaporPressure: 5, appearance: '無色液體' },
    naturalSources: ['玫瑰', '橙花'],
    usage: {
      concentration: '2-10%',
      pairings: ['Phenylethyl alcohol', 'Citronellol', 'Linalool'],
      perfumes: ['各種玫瑰花香調'],
      applications: ['玫瑰調', '花果調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'methylCinnamate',
    name: '肉桂酸甲酯',
    nameEn: 'Methyl Cinnamate',
    cas: '103-26-4',
    smiles: 'COC(=O)/C=C/c1ccccc1',
    category: 'amber',
    tags: ['balsamic', 'strawberry', 'warm'],
    functionalGroup: 'ester',
    notePosition: 'middle',
    scentProfile: {
      description: '溫暖的香脂-草莓混合，帶有辛甜的肉桂底調和微妙的果香面向。是東方調和辛香調的過渡成分，在花香與辛香之間架起橋樑。',
      intensity: 3,
      tenacity: 3,
      diffusion: 3,
      keywords: ['香脂', '草莓', '肉桂', '溫暖']
    },
    properties: { mw: 162.19, bp: 261, logP: 2.36, density: 1.042, vaporPressure: 1, appearance: '白色結晶' },
    naturalSources: ['多種香料植物'],
    usage: {
      concentration: '1-5%',
      pairings: ['Cinnamaldehyde', 'Vanillin', 'Eugenol'],
      perfumes: ['東方辛香調'],
      applications: ['東方調', '辛香調', '食品香精']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'rCarvone',
    name: '(R)-香芹酮',
    nameEn: '(R)-Carvone (Spearmint)',
    cas: '6485-40-1',
    smiles: 'CC(=O)[C@H]1CC=C(C)CC1',
    category: 'herbal',
    tags: ['mint', 'sweet', 'chiral'],
    functionalGroup: 'ketone',
    notePosition: 'top',
    scentProfile: {
      description: '甜美的留蘭香（Spearmint）薄荷香氣，比 Menthol 更加柔和甜美。它是手性化學在香水中的經典範例——同一分子的鏡像異構體（S-香芹酮）聞起來像葛縷子。這展示了嗅覺受體對立體構型的驚人辨別力。',
      intensity: 4,
      tenacity: 2,
      diffusion: 4,
      keywords: ['留蘭香', '薄荷', '甜美', '手性']
    },
    properties: { mw: 150.22, bp: 231, logP: 2.74, density: 0.960, vaporPressure: 5, appearance: '無色液體' },
    naturalSources: ['留蘭香（Spearmint）', '胡薄荷'],
    usage: {
      concentration: '1-5%',
      pairings: ['Menthol', 'Eucalyptol', 'Linalool'],
      perfumes: ['清新調'],
      applications: ['口腔護理', '薄荷調', '食品']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'sCarvone',
    name: '(S)-香芹酮',
    nameEn: '(S)-Carvone (Caraway)',
    cas: '2244-16-8',
    smiles: 'CC(=O)[C@@H]1CC=C(C)CC1',
    category: 'spicy',
    tags: ['caraway', 'dill', 'chiral'],
    functionalGroup: 'ketone',
    notePosition: 'top',
    scentProfile: {
      description: '溫暖的葛縷子-蒔蘿香氣，帶有微甜的辛辣感和種子般的芳香。它是 (R)-香芹酮的鏡像分子，卻氣味完全不同！這個事實深刻揭示了嗅覺受體的手性選擇性。',
      intensity: 4,
      tenacity: 2,
      diffusion: 4,
      keywords: ['葛縷子', '蒔蘿', '辛香', '手性']
    },
    properties: { mw: 150.22, bp: 231, logP: 2.74, density: 0.956, vaporPressure: 5, appearance: '無色液體' },
    naturalSources: ['葛縷子（Caraway）', '蒔蘿'],
    usage: {
      concentration: '0.5-3%',
      pairings: ['Dill oil', 'Cumin', 'Black pepper'],
      perfumes: ['罕見於香水，多用於食品'],
      applications: ['食品調味', '辛香調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'veratraldehyde',
    name: '藜蘆醛',
    nameEn: 'Veratraldehyde',
    cas: '120-14-9',
    smiles: 'O=Cc1ccc(OC)c(OC)c1',
    category: 'gourmand',
    tags: ['vanilla', 'woody', 'creamy'],
    functionalGroup: 'aldehyde',
    notePosition: 'base',
    scentProfile: {
      description: '木質-香草的溫暖底調，帶有比 Vanillin 更乾燥和「木質」的面向。有一種乾淨的麝香質感和微弱的花香底調。',
      intensity: 2,
      tenacity: 4,
      diffusion: 2,
      keywords: ['香草', '木質', '乾燥', '麝香']
    },
    properties: { mw: 166.17, bp: 281, logP: 1.47, density: 1.125, vaporPressure: 0.5, appearance: '白色結晶' },
    naturalSources: ['合成'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Vanillin', 'Coumarin', 'Sandalwood'],
      perfumes: ['各種東方調'],
      applications: ['香草調', '木質調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'myrcene',
    name: '月桂烯',
    nameEn: 'Myrcene (beta-Myrcene)',
    cas: '123-35-3',
    smiles: 'C=CC(=C)CCC=C(C)C',
    category: 'green',
    tags: ['herbal', 'balsamic', 'peppery'],
    functionalGroup: 'terpene',
    notePosition: 'top',
    scentProfile: {
      description: '新鮮的草本-胡椒-香脂混合，帶有微甜的金屬質感和啤酒花般的苦調。是許多精油的主要萜烯成分，負責為前調增添「未經加工的自然感」。',
      intensity: 3,
      tenacity: 1,
      diffusion: 4,
      keywords: ['草本', '胡椒', '啤酒花', '自然']
    },
    properties: { mw: 136.23, bp: 167, logP: 4.17, density: 0.794, vaporPressure: 300, appearance: '無色液體' },
    naturalSources: ['月桂', '啤酒花', '大麻', '芒果', '百里香'],
    usage: {
      concentration: '1-5%',
      pairings: ['Limonene', 'Linalool', 'alpha-Pinene'],
      perfumes: ['多作為精油成分出現'],
      applications: ['天然調', '草本調', '啤酒花調']
    },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  {
    id: 'anisaldehyde',
    name: '茴香醛',
    nameEn: 'Anisaldehyde (p-Methoxybenzaldehyde)',
    cas: '123-11-5',
    smiles: 'O=Cc1ccc(OC)cc1',
    category: 'gourmand',
    tags: ['anise', 'sweet', 'powdery'],
    functionalGroup: 'aldehyde',
    notePosition: 'middle',
    scentProfile: {
      description: '甜蜜的茴香-杏仁-乾草混合，帶有山楂花般的微膩花香和爽身粉的粉質感。有一種「老派甜點」的復古魅力。',
      intensity: 3,
      tenacity: 3,
      diffusion: 3,
      keywords: ['茴香', '杏仁', '粉質', '甜蜜']
    },
    properties: { mw: 136.15, bp: 248, logP: 1.78, density: 1.119, vaporPressure: 3, appearance: '淡黃色液體' },
    naturalSources: ['茴芹', '山楂花', '桂花'],
    usage: {
      concentration: '0.5-5%',
      pairings: ['Piperonal', 'Vanillin', 'Coumarin'],
      perfumes: ['經典花香調'],
      applications: ['粉香調', '甜點調', '食品香精']
    },
    safety: { ifra: '列管過敏原', allergen: true, note: 'EU 26 過敏原' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL CITRUS / ALDEHYDE
  // ═══════════════════════════════════════════════

  {
    id: 'undecanal', name: '十一醛', nameEn: 'Undecanal (Aldehyde C-11)', cas: '112-44-7',
    smiles: 'CCCCCCCCCCC=O', category: 'citrus', tags: ['waxy','clean','soapy'],
    functionalGroup: 'aldehyde', notePosition: 'top',
    scentProfile: { description: '蠟質而潔淨的醛香，帶有肥皂般的柑橘底韻和微弱的金屬光澤。在 Chanel N°5 等經典醛香配方中是不可或缺的成分，賦予前調閃亮的穿透力。', intensity: 4, tenacity: 2, diffusion: 5, keywords: ['蠟質', '肥皂', '潔淨', '金屬'] },
    properties: { mw: 170.29, bp: 223, logP: 4.09, density: 0.825, vaporPressure: 8, appearance: '無色液體' },
    naturalSources: ['玫瑰', '松針', '丁香'],
    usage: { concentration: '0.1-2%', pairings: ['Dodecanal', 'Linalool', 'Rose oxide'], perfumes: ['Chanel N°5', 'Givenchy L\'Interdit'], applications: ['醛香花香', '經典花香', '皂香調'] },
    safety: { ifra: '有使用限制', allergen: false, note: '高劑量可能引起皮膚過敏' }
  },
  {
    id: 'dodecanal', name: '十二醛', nameEn: 'Dodecanal (Aldehyde C-12 Lauric)', cas: '112-54-9',
    smiles: 'CCCCCCCCCCCC=O', category: 'citrus', tags: ['waxy','lily','metallic'],
    functionalGroup: 'aldehyde', notePosition: 'top',
    scentProfile: { description: '比 C-11 更加蠟質、脂肪感更強的醛香，帶有鈴蘭花般的金屬光澤和淡淡的紫羅蘭葉味。高碳數醛類的典型代表，持久力優於低碳醛。', intensity: 4, tenacity: 3, diffusion: 4, keywords: ['蠟質', '鈴蘭', '金屬', '脂肪'] },
    properties: { mw: 184.32, bp: 238, logP: 4.60, density: 0.831, vaporPressure: 5, appearance: '無色至淡黃液體' },
    naturalSources: ['柑橘皮', '芫荽'],
    usage: { concentration: '0.05-1%', pairings: ['Undecanal', 'Hydroxycitronellal', 'Rose'], perfumes: ['Chanel N°5', 'Arpège'], applications: ['醛香調', '花香調'] },
    safety: { ifra: '有使用限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'methylUndecanal', name: '甲基十一醛', nameEn: '2-Methylundecanal (Aldehyde C-12 MNA)', cas: '110-41-8',
    smiles: 'CCCCCCCCCCC(C)=O', category: 'citrus', tags: ['amber','waxy','metallic'],
    functionalGroup: 'aldehyde', notePosition: 'top',
    scentProfile: { description: '帶有琥珀般溫暖感的蠟質醛香，比線性醛更加圓潤。有獨特的金屬閃金和乾燥木質底韻，常與花香搭配製造「閃亮」效果。', intensity: 4, tenacity: 3, diffusion: 5, keywords: ['琥珀', '蠟質', '溫暖', '金屬'] },
    properties: { mw: 184.32, bp: 228, logP: 4.30, density: 0.830, vaporPressure: 6, appearance: '無色液體' },
    naturalSources: ['少量存在於柑橘精油中'],
    usage: { concentration: '0.05-1%', pairings: ['Aldehyde C-11', 'Aldehyde C-12 Lauric', 'Floral bases'], perfumes: ['Chanel N°22', 'Lanvin Arpège'], applications: ['醛香花香', '東方花香'] },
    safety: { ifra: '有使用限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'nerylAcetate', name: '乙酸橙花酯', nameEn: 'Neryl Acetate', cas: '141-12-8',
    smiles: 'CC(=O)OCC=C(C)CCC=C(C)C', category: 'citrus', tags: ['bergamot','sweet','floral'],
    functionalGroup: 'ester', notePosition: 'top',
    scentProfile: { description: '甜美的佛手柑-橙花混合香氣，帶有草本和微弱玫瑰的韻味。比乙酸芳樟酯更加果香、更加溫潤，是天然橙花和佛手柑精油的重要組成。', intensity: 3, tenacity: 2, diffusion: 4, keywords: ['佛手柑', '甜橙', '花香', '草本'] },
    properties: { mw: 196.29, bp: 227, logP: 3.56, density: 0.899, vaporPressure: 12, appearance: '無色至淡黃液體' },
    naturalSources: ['橙花', '佛手柑', '檸檬草', '香蜂草'],
    usage: { concentration: '1-10%', pairings: ['Linalool', 'Geranyl acetate', 'Citral'], perfumes: ['清新柑橘調配方'], applications: ['古龍水', '清新花香', '天然調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'citronellylAcetate', name: '乙酸香茅酯', nameEn: 'Citronellyl Acetate', cas: '150-84-5',
    smiles: 'CC(=O)OCCC(C)CCC=C(C)C', category: 'citrus', tags: ['rosy','fruity','fresh'],
    functionalGroup: 'ester', notePosition: 'top',
    scentProfile: { description: '清新的玫瑰-柑橘混合，帶有果香和微甜感。比香茅醇更加輕盈、更加果漾，在玫瑰和柑橘配方中提供優雅的連結。', intensity: 3, tenacity: 2, diffusion: 4, keywords: ['玫瑰', '果香', '清新', '柑橘'] },
    properties: { mw: 198.30, bp: 229, logP: 4.20, density: 0.883, vaporPressure: 10, appearance: '無色液體' },
    naturalSources: ['玫瑰', '天竺葵', '香茅'],
    usage: { concentration: '2-15%', pairings: ['Citronellol', 'Geraniol', 'Linalool'], perfumes: ['Rose-themed fragrances'], applications: ['玫瑰調', '古龍水', '日用香精'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL FLORAL
  // ═══════════════════════════════════════════════

  {
    id: 'benzylAlcohol', name: '苄醇', nameEn: 'Benzyl Alcohol', cas: '100-51-6',
    smiles: 'OCc1ccccc1', category: 'floral', tags: ['faint','sweet','solvent'],
    functionalGroup: 'alcohol', notePosition: 'middle',
    scentProfile: { description: '微弱而甜美的花香，帶有輕微的杏仁和果香底韻。本身氣味不強，更多作為溶劑和定香劑使用。在茉莉和依蘭精油中天然存在。', intensity: 1, tenacity: 2, diffusion: 2, keywords: ['微甜', '杏仁', '溶劑', '柔和'] },
    properties: { mw: 108.14, bp: 205, logP: 1.10, density: 1.044, vaporPressure: 12, appearance: '無色液體' },
    naturalSources: ['茉莉', '依蘭', '風信子', '秘魯香脂'],
    usage: { concentration: '1-10%（常作溶劑）', pairings: ['Jasmine abs', 'Ylang ylang', 'Benzyl acetate'], perfumes: ['作為輔助溶劑廣泛使用'], applications: ['溶劑', '防腐', '花香調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '低毒性，常用於化妝品防腐' }
  },
  {
    id: 'amylcinnamal', name: '戊基肉桂醛', nameEn: 'Amylcinnamal', cas: '122-40-7',
    smiles: 'O=CC(=Cc1ccccc1)CCCCC', category: 'floral', tags: ['jasmine','fatty','floral'],
    functionalGroup: 'aldehyde', notePosition: 'middle',
    scentProfile: { description: '豐潤的茉莉-脂肪花香，帶有微弱的粉質感和溫暖的甜韻。在經典花香配方中扮演「骨架」角色，提供持久的花香基底。低劑量下非常優雅。', intensity: 3, tenacity: 4, diffusion: 3, keywords: ['茉莉', '脂肪花香', '粉質', '溫暖'] },
    properties: { mw: 202.29, bp: 290, logP: 4.30, density: 0.963, vaporPressure: 0.3, appearance: '淡黃液體' },
    naturalSources: ['合成原料'],
    usage: { concentration: '1-5%', pairings: ['Hexyl cinnamal', 'Hydroxycitronellal', 'Lilial'], perfumes: ['Dior J\'adore', 'Coco Mademoiselle'], applications: ['花香調', '東方花香', '木質花香'] },
    safety: { ifra: '列管過敏原', allergen: true, note: 'EU 過敏原，需標示' }
  },
  {
    id: 'cinnamylAlcohol', name: '肉桂醇', nameEn: 'Cinnamyl Alcohol', cas: '104-54-1',
    smiles: 'OCC=Cc1ccccc1', category: 'floral', tags: ['hyacinth','balsamic','sweet'],
    functionalGroup: 'alcohol', notePosition: 'middle',
    scentProfile: { description: '甜美的風信子-百合花香，帶有溫暖的香脂底韻和微弱的粉質感。比肉桂醛更加柔和花香，常用於東方花香型香水的心調。', intensity: 3, tenacity: 3, diffusion: 3, keywords: ['風信子', '香脂', '甜美', '粉質'] },
    properties: { mw: 134.18, bp: 250, logP: 1.95, density: 1.044, vaporPressure: 1, appearance: '白色結晶或液體' },
    naturalSources: ['秘魯香脂', '肉桂皮', '蘇合香'],
    usage: { concentration: '0.5-5%', pairings: ['Linalool', 'Hydroxycitronellal', 'Eugenol'], perfumes: ['Eastern floral compositions'], applications: ['東方花香', '風信子調', '香脂調'] },
    safety: { ifra: '列管過敏原', allergen: true, note: 'EU 過敏原，需標示' }
  },
  {
    id: 'bourgeonal', name: '鈴蘭醛', nameEn: 'Bourgeonal', cas: '18127-01-0',
    smiles: 'O=CCCc1ccc(C(C)(C)C)cc1', category: 'floral', tags: ['lilyOfValley','fresh','aquatic'],
    functionalGroup: 'aldehyde', notePosition: 'top',
    scentProfile: { description: '非常逼真的鈴蘭花香，帶有水生般的清透感和微甜的綠意。是最好的鈴蘭香氣重現分子之一，擴散力極強。', intensity: 4, tenacity: 2, diffusion: 5, keywords: ['鈴蘭', '水感', '清透', '綠意'] },
    properties: { mw: 190.28, bp: 280, logP: 3.40, density: 0.964, vaporPressure: 0.5, appearance: '無色至淡黃液體' },
    naturalSources: ['合成原料'],
    usage: { concentration: '1-8%', pairings: ['Hydroxycitronellal', 'Lilial', 'Linalool', 'Hedione'], perfumes: ['Diorissimo', '鈴蘭主題香水'], applications: ['鈴蘭調', '清新花香', '白花調'] },
    safety: { ifra: '有使用限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'triplal', name: '三甲基環己烯甲醛', nameEn: 'Triplal', cas: '68039-49-6',
    smiles: 'O=CC1CC(C)=CC(C)C1', category: 'floral', tags: ['green','fresh','floral'],
    functionalGroup: 'aldehyde', notePosition: 'top',
    scentProfile: { description: '清新的綠葉花香醛，帶有金屬感和微弱的蘑菇調。介於綠葉和花香之間的獨特分子，常用於現代清新花香的前調。', intensity: 4, tenacity: 2, diffusion: 5, keywords: ['綠葉', '清新', '金屬', '蘑菇'] },
    properties: { mw: 152.23, bp: 220, logP: 2.50, density: 0.920, vaporPressure: 15, appearance: '無色液體' },
    naturalSources: ['合成原料'],
    usage: { concentration: '0.5-5%', pairings: ['Hedione', 'Linalool', 'Lily aldehydes'], perfumes: ['現代清新花香配方'], applications: ['清新花香', '綠葉花香'] },
    safety: { ifra: '有使用限制', allergen: false, note: '需注意用量' }
  },
  {
    id: 'cisJasmone', name: '順式茉莉酮', nameEn: 'cis-Jasmone', cas: '488-10-8',
    smiles: 'CCC=CCC1=CC(=O)CC1', category: 'floral', tags: ['jasmine','herbal','celery'],
    functionalGroup: 'ketone', notePosition: 'middle',
    scentProfile: { description: '清新的茉莉花香，帶有草本、芹菜般的特異底韻。與吲哚共同構成天然茉莉花的核心氣味分子。低劑量下表現出優雅的花香。', intensity: 3, tenacity: 3, diffusion: 3, keywords: ['茉莉', '草本', '芹菜', '清新'] },
    properties: { mw: 164.24, bp: 258, logP: 2.80, density: 0.944, vaporPressure: 3, appearance: '淡黃色液體' },
    naturalSources: ['茉莉', '橙花', '茶葉'],
    usage: { concentration: '0.5-5%', pairings: ['Indole', 'Hedione', 'Benzyl acetate'], perfumes: ['Joy by Jean Patou'], applications: ['茉莉調', '白花調', '天然花香'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'geranylAcetate', name: '乙酸牻牛兒酯', nameEn: 'Geranyl Acetate', cas: '105-87-3',
    smiles: 'CC(=O)OCC=C(C)CCC=C(C)C', category: 'floral', tags: ['rosy','fruity','lavender'],
    functionalGroup: 'ester', notePosition: 'top',
    scentProfile: { description: '甜美的玫瑰-果香混合，帶有薰衣草和佛手柑的清新韻味。比牻牛兒醇更加輕盈明亮，在天然精油重建中不可或缺。', intensity: 3, tenacity: 2, diffusion: 4, keywords: ['玫瑰', '果香', '薰衣草', '清新'] },
    properties: { mw: 196.29, bp: 242, logP: 3.56, density: 0.900, vaporPressure: 8, appearance: '無色液體' },
    naturalSources: ['香茅', '玫瑰草', '薰衣草', '天竺葵'],
    usage: { concentration: '2-15%', pairings: ['Geraniol', 'Citronellol', 'Linalool'], perfumes: ['玫瑰調配方'], applications: ['玫瑰調', '果香花香', '天然調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL GREEN
  // ═══════════════════════════════════════════════

  {
    id: 'cis3Hexenol', name: '順-3-己烯-1-醇', nameEn: 'cis-3-Hexen-1-ol (Leaf Alcohol)', cas: '928-96-1',
    smiles: 'OCCC=CCC', category: 'green', tags: ['grass','leaf','fresh'],
    functionalGroup: 'alcohol', notePosition: 'top',
    scentProfile: { description: '非常逼真的新鮮割草香，帶有強烈的綠色汁液感和微甜的剛摘葉片氣味。這是「綠色調」最典型的代表分子，幾乎所有綠葉花香都會用到。', intensity: 5, tenacity: 1, diffusion: 5, keywords: ['割草', '綠葉', '鮮切', '汁液'] },
    properties: { mw: 100.16, bp: 156, logP: 1.61, density: 0.847, vaporPressure: 130, appearance: '無色液體' },
    naturalSources: ['綠茶', '草莓葉', '紫蘇', '幾乎所有綠色植物'],
    usage: { concentration: '0.1-3%', pairings: ['cis-3-Hexenyl acetate', 'Galbanum', 'Violet leaf'], perfumes: ['Chanel N°19', 'Balmain Vent Vert'], applications: ['綠葉調', '清新花香', '茶香調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'methylHeptenone', name: '甲基庚烯酮', nameEn: '6-Methyl-5-hepten-2-one', cas: '110-93-0',
    smiles: 'CC(=O)CCC=C(C)C', category: 'green', tags: ['herbal','citrus','oily'],
    functionalGroup: 'ketone', notePosition: 'top',
    scentProfile: { description: '檸檬草般的綠色柑橘調，帶有微弱的油脂感和草本底韻。是多種精油中的天然成分，可以為配方增添清新的綠意和活力。', intensity: 3, tenacity: 2, diffusion: 4, keywords: ['檸檬草', '綠意', '油脂', '草本'] },
    properties: { mw: 126.20, bp: 173, logP: 1.89, density: 0.846, vaporPressure: 150, appearance: '淡黃色液體' },
    naturalSources: ['檸檬草', '香茅', '山蒼子', '啤酒花'],
    usage: { concentration: '0.5-5%', pairings: ['Citral', 'Linalool', 'Hexenyl acetate'], perfumes: ['綠色柑橘配方'], applications: ['綠葉調', '柑橘調', '草本調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL FRUITY / LACTONE
  // ═══════════════════════════════════════════════

  {
    id: 'gammaNonalactone', name: 'γ-壬內酯', nameEn: 'gamma-Nonalactone', cas: '104-61-0',
    smiles: 'CCCCCC1CCC(=O)O1', category: 'fruity', tags: ['coconut','creamy','tropical'],
    functionalGroup: 'lactone', notePosition: 'middle',
    scentProfile: { description: '濃郁的椰子奶油香，帶有甜蜜的熱帶水果底韻和微弱的蜂蠟質感。是重現椰子香氣的核心分子，也是「太陽油」般度假氣息的來源。', intensity: 4, tenacity: 4, diffusion: 3, keywords: ['椰子', '奶油', '熱帶', '甜蜜'] },
    properties: { mw: 156.22, bp: 243, logP: 2.20, density: 0.960, vaporPressure: 2, appearance: '無色至淡黃液體' },
    naturalSources: ['椰子', '蜜桃', '杏子', '乳製品'],
    usage: { concentration: '1-10%', pairings: ['Vanillin', 'Coumarin', 'gamma-Decalactone'], perfumes: ['Thierry Mugler Angel', 'Bronze Goddess'], applications: ['椰子調', '美食調', '防曬霜香精'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'gammaOctalactone', name: 'γ-辛內酯', nameEn: 'gamma-Octalactone', cas: '104-50-7',
    smiles: 'CCCCC1CCC(=O)O1', category: 'fruity', tags: ['coconut','herbal','sweet'],
    functionalGroup: 'lactone', notePosition: 'middle',
    scentProfile: { description: '比γ-壬內酯更加輕快的椰子調，帶有草本和微弱的薄荷底韻。更加清爽透明，常用於需要輕盈奶感而不厚重的配方。', intensity: 3, tenacity: 3, diffusion: 3, keywords: ['椰子', '輕快', '草本', '透明'] },
    properties: { mw: 142.20, bp: 234, logP: 1.72, density: 0.974, vaporPressure: 4, appearance: '無色液體' },
    naturalSources: ['椰子', '大麥', '桃'],
    usage: { concentration: '1-8%', pairings: ['gamma-Nonalactone', 'Vanillin', 'Linalool'], perfumes: ['輕快果香配方'], applications: ['果香調', '椰子調', '食品香精'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'deltaUndecalactone', name: 'δ-十一內酯', nameEn: 'delta-Undecalactone (Aldehyde C-14)', cas: '104-67-6',
    smiles: 'CCCCCCC1CCCC(=O)O1', category: 'fruity', tags: ['peach','creamy','powdery'],
    functionalGroup: 'lactone', notePosition: 'middle',
    scentProfile: { description: '甜蜜的蜜桃-奶油香，帶有粉質感和溫暖的皮膚調韻味。俗稱「桃子醛」（雖然化學上是內酯），是皮膚香和桃子調配方的靈魂分子。', intensity: 3, tenacity: 4, diffusion: 3, keywords: ['蜜桃', '奶油', '粉質', '皮膚'] },
    properties: { mw: 184.28, bp: 279, logP: 2.83, density: 0.942, vaporPressure: 0.8, appearance: '無色液體' },
    naturalSources: ['蜜桃', '杏子', '乳製品', '椰子'],
    usage: { concentration: '2-15%', pairings: ['gamma-Decalactone', 'Vanillin', 'Hedione'], perfumes: ['Dolce & Gabbana The One', 'Kenzo Flower'], applications: ['蜜桃調', '皮膚調', '美食調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL WOODY
  // ═══════════════════════════════════════════════

  {
    id: 'betaCaryophyllene', name: 'β-石竹烯', nameEn: 'beta-Caryophyllene', cas: '87-44-5',
    smiles: 'C=C1CCC2(C)CC=C(C)CCC2C1', category: 'woody', tags: ['spicy','peppery','clove'],
    functionalGroup: 'terpene', notePosition: 'middle',
    scentProfile: { description: '溫暖的木質-辛香混合，帶有胡椒和丁香般的辛辣底韻。是黑胡椒、丁香和大麻精油的主要組成，也具有抗炎活性（CB2 受體激動劑）。', intensity: 3, tenacity: 3, diffusion: 3, keywords: ['胡椒', '丁香', '辛辣', '木質'] },
    properties: { mw: 204.35, bp: 262, logP: 4.73, density: 0.907, vaporPressure: 1.5, appearance: '無色至淡黃液體' },
    naturalSources: ['黑胡椒', '丁香', '啤酒花', '迷迭香', '大麻'],
    usage: { concentration: '1-10%', pairings: ['Eugenol', 'Patchoulol', 'Sandalwood'], perfumes: ['辛香木質配方'], applications: ['辛香調', '木質調', '天然調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: 'CB2 受體激動劑，具抗炎特性' }
  },
  {
    id: 'cedrylAcetate', name: '乙酸雪松酯', nameEn: 'Cedryl Acetate', cas: '77-54-3',
    smiles: 'CC(=O)OC1(C)C2CCC3(C)CCCC1C23', category: 'woody', tags: ['cedar','dry','pencil'],
    functionalGroup: 'ester', notePosition: 'base',
    scentProfile: { description: '乾燥、溫暖的雪松木香，帶有鉛筆刨花般的清潔木質感和微弱的皮革底韻。比雪松醇更加柔和持久，是木質基調的支柱分子。', intensity: 2, tenacity: 5, diffusion: 2, keywords: ['雪松', '乾燥', '鉛筆', '溫暖'] },
    properties: { mw: 264.41, bp: 285, logP: 4.80, density: 1.009, vaporPressure: 0.1, appearance: '無色至淡黃液體' },
    naturalSources: ['合成（雪松醇衍生物）'],
    usage: { concentration: '5-20%', pairings: ['Cedrol', 'Iso E Super', 'Vetiver'], perfumes: ['雪松木質配方'], applications: ['木質調', '男香', '基調定香'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'acetylCedrene', name: '甲基雪松酮', nameEn: 'Acetyl Cedrene (Vertofix)', cas: '32388-55-9',
    smiles: 'CC(=O)C1=CCC2(C)C3CCCC1(C)C23', category: 'woody', tags: ['amber','woody','dry'],
    functionalGroup: 'ketone', notePosition: 'base',
    scentProfile: { description: '溫暖的琥珀-木質混合，帶有乾燥的雪松底韻和微弱的煙燻感。比雪松酯更加溫暖濃郁，是許多木質東方配方中不可或缺的定香劑。', intensity: 3, tenacity: 5, diffusion: 2, keywords: ['琥珀', '木質', '乾燥', '煙燻'] },
    properties: { mw: 246.39, bp: 294, logP: 4.50, density: 1.030, vaporPressure: 0.05, appearance: '淡黃色液體' },
    naturalSources: ['合成'],
    usage: { concentration: '5-25%', pairings: ['Iso E Super', 'Ambroxide', 'Patchoulol'], perfumes: ['Dior Sauvage', 'Bleu de Chanel'], applications: ['木質調', '琥珀調', '定香劑'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'guaiacol', name: '愈創木酚', nameEn: 'Guaiacol', cas: '90-05-1',
    smiles: 'COc1ccccc1O', category: 'woody', tags: ['smoky','phenolic','medicinal'],
    functionalGroup: 'phenol', notePosition: 'middle',
    scentProfile: { description: '煙燻、藥味的酚香，帶有焦糖化木材和壁爐灰燼的感覺。是威士忌、煙燻茶和煙燻食品的典型香氣成分，低劑量下可增添配方深度。', intensity: 5, tenacity: 3, diffusion: 4, keywords: ['煙燻', '藥味', '焦木', '壁爐'] },
    properties: { mw: 124.14, bp: 205, logP: 1.32, density: 1.129, vaporPressure: 16, appearance: '白色至淡黃結晶' },
    naturalSources: ['愈創木', '煙燻木', '咖啡', '威士忌'],
    usage: { concentration: '0.01-0.5%', pairings: ['Vanillin', 'Eugenol', 'Birch tar'], perfumes: ['煙燻皮革配方'], applications: ['煙燻調', '皮革調', '食品香精'] },
    safety: { ifra: '有使用限制', allergen: false, note: '高劑量有毒，需嚴格控制用量' }
  },
  {
    id: 'vetiverylAcetate', name: '乙酸岩蘭草酯', nameEn: 'Vetiveryl Acetate', cas: '62563-80-8',
    smiles: 'CC(=O)OC1CC2(C)CCCC(=C)C2CC1', category: 'woody', tags: ['vetiver','earthy','smoky'],
    functionalGroup: 'ester', notePosition: 'base',
    scentProfile: { description: '優雅的岩蘭草香氣，帶有泥土、煙燻和微甜的木質底韻。比天然岩蘭草精油更加柔和優雅，去除了過於泥土的粗糙感。', intensity: 3, tenacity: 5, diffusion: 2, keywords: ['岩蘭草', '泥土', '煙燻', '優雅'] },
    properties: { mw: 264.36, bp: 290, logP: 4.20, density: 0.990, vaporPressure: 0.05, appearance: '琥珀色液體' },
    naturalSources: ['岩蘭草精油衍生物'],
    usage: { concentration: '3-15%', pairings: ['Patchoulol', 'Iso E Super', 'Ambroxide'], perfumes: ['Terre d\'Hermès', 'Guerlain Vétiver'], applications: ['岩蘭草調', '木質調', '男香'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL MUSKY
  // ═══════════════════════════════════════════════

  {
    id: 'habanolide', name: '環十五烯內酯', nameEn: 'Habanolide (Oxacyclohexadecenone)', cas: '34902-57-3',
    smiles: 'O=C1CCCCCCCCCC=CCCCO1', category: 'musky', tags: ['clean','metallic','musky'],
    functionalGroup: 'musk', notePosition: 'base',
    scentProfile: { description: '潔淨而略帶金屬感的麝香，比動物麝香現代得多。帶有微弱的甜韻和皮膚般的溫暖質感，是現代清新麝香配方的核心。', intensity: 2, tenacity: 5, diffusion: 3, keywords: ['潔淨', '金屬', '皮膚', '溫暖'] },
    properties: { mw: 238.37, bp: 310, logP: 5.20, density: 0.940, vaporPressure: 0.02, appearance: '無色液體' },
    naturalSources: ['合成'],
    usage: { concentration: '5-25%', pairings: ['Galaxolide', 'Ambroxide', 'Hedione'], perfumes: ['現代清新麝香配方'], applications: ['麝香調', '清新調', '皮膚調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好，生物降解性佳' }
  },
  {
    id: 'helvetolide', name: '瑞士麝香', nameEn: 'Helvetolide', cas: '141773-73-1',
    smiles: 'CC(C)CC1(C(=O)OC)C(CC=C(C)C)C1', category: 'musky', tags: ['fruity','pear','musky'],
    functionalGroup: 'musk', notePosition: 'base',
    scentProfile: { description: 'Firmenich 開發的獨特果香麝香，帶有明顯的梨子和琥珀底韻。打破了傳統麝香的框架，將果香與麝香巧妙融合，非常現代。', intensity: 2, tenacity: 5, diffusion: 3, keywords: ['梨子', '果香', '琥珀', '麝香'] },
    properties: { mw: 256.38, bp: 295, logP: 4.80, density: 0.970, vaporPressure: 0.03, appearance: '無色液體' },
    naturalSources: ['合成'],
    usage: { concentration: '5-20%', pairings: ['Galaxolide', 'Habanolide', 'Hedione'], perfumes: ['L\'Eau d\'Issey', '現代果香配方'], applications: ['麝香調', '果香調', '清新調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'civettone', name: '靈貓酮', nameEn: 'Civettone', cas: '542-46-1',
    smiles: 'O=C1CCCCCCCCC=CCCCCC1', category: 'musky', tags: ['animalic','sensual','warm'],
    functionalGroup: 'musk', notePosition: 'base',
    scentProfile: { description: '溫暖、性感的動物麝香，帶有皮膚般的親密感和微弱的尿騷-糞香底韻（極低劑量下反而優雅迷人）。天然靈貓香的主要分子，現已由合成品替代。', intensity: 4, tenacity: 5, diffusion: 2, keywords: ['動物', '性感', '皮膚', '溫暖'] },
    properties: { mw: 250.42, bp: 340, logP: 6.50, density: 0.920, vaporPressure: 0.005, appearance: '白色蠟狀固體' },
    naturalSources: ['靈貓（現已禁止天然來源）'],
    usage: { concentration: '0.01-0.5%', pairings: ['Muscone', 'Indole', 'Ambroxide'], perfumes: ['Chanel N°5（早期配方）', 'Jicky'], applications: ['動物調', '東方調', '奢華香水'] },
    safety: { ifra: '天然來源禁用（動物福利）', allergen: false, note: '現代配方使用合成版本' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL SPICY
  // ═══════════════════════════════════════════════

  {
    id: 'anethole', name: '茴香腦', nameEn: 'trans-Anethole', cas: '4180-23-8',
    smiles: 'CC=Cc1ccc(OC)cc1', category: 'spicy', tags: ['anise','sweet','licorice'],
    functionalGroup: 'ether', notePosition: 'middle',
    scentProfile: { description: '甜蜜而溫暖的茴香-甘草香氣，帶有微弱的草本底韻。是八角、茴香和甘草的主要香氣成分。甜度感極強，常用於東方型配方。', intensity: 4, tenacity: 4, diffusion: 3, keywords: ['茴香', '甘草', '甜蜜', '溫暖'] },
    properties: { mw: 148.20, bp: 234, logP: 3.39, density: 0.988, vaporPressure: 3, appearance: '白色結晶' },
    naturalSources: ['八角', '茴香', '甘草', '龍蒿'],
    usage: { concentration: '0.5-5%', pairings: ['Eugenol', 'Cinnamaldehyde', 'Vanillin'], perfumes: ['Lolita Lempicka', 'Mugler Angel'], applications: ['東方調', '美食調', '利口酒香精'] },
    safety: { ifra: '有使用限制', allergen: false, note: '大量攝入可能有肝毒性' }
  },
  {
    id: 'estragole', name: '草蒿腦', nameEn: 'Estragole (Methyl Chavicol)', cas: '140-67-0',
    smiles: 'C=CCc1ccc(OC)cc1', category: 'spicy', tags: ['tarragon','anise','herbal'],
    functionalGroup: 'ether', notePosition: 'top',
    scentProfile: { description: '清新的龍蒿-茴香調，比茴香腦帶有更多綠色草本感。是羅勒和龍蒿精油的主要成分，帶有獨特的藥草廚房氣息。', intensity: 4, tenacity: 2, diffusion: 4, keywords: ['龍蒿', '羅勒', '茴香', '草本'] },
    properties: { mw: 148.20, bp: 216, logP: 3.13, density: 0.965, vaporPressure: 15, appearance: '無色液體' },
    naturalSources: ['羅勒', '龍蒿', '茴香', '八角'],
    usage: { concentration: '0.5-5%', pairings: ['Linalool', 'Eugenol', 'Methyl salicylate'], perfumes: ['草本芳香配方'], applications: ['草本調', '芳療', '食品香精'] },
    safety: { ifra: '有使用限制', allergen: false, note: '可能具基因毒性，劑量需控制' }
  },
  {
    id: 'methylEugenol', name: '甲基丁香酚', nameEn: 'Methyl Eugenol', cas: '93-15-2',
    smiles: 'C=CCc1cc(OC)c(OC)cc1', category: 'spicy', tags: ['clove','warm','sweet'],
    functionalGroup: 'ether', notePosition: 'middle',
    scentProfile: { description: '溫暖甜美的丁香-肉桂調，比丁香酚更加柔和甜蜜。帶有微弱的玫瑰和康乃馨底韻，在東方香調中增添溫暖深度。', intensity: 4, tenacity: 3, diffusion: 3, keywords: ['丁香', '甜蜜', '溫暖', '玫瑰'] },
    properties: { mw: 178.23, bp: 254, logP: 2.74, density: 1.036, vaporPressure: 3, appearance: '無色液體' },
    naturalSources: ['玫瑰', '月桂', '羅勒', '肉桂葉'],
    usage: { concentration: '0.1-2%', pairings: ['Eugenol', 'Isoeugenol', 'Rose absolute'], perfumes: ['限於天然存在量'], applications: ['東方調', '辛香調（限制使用）'] },
    safety: { ifra: '嚴格限制', allergen: false, note: 'IFRA 嚴格限制，具致癌疑慮' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL AMBER / BALSAMIC
  // ═══════════════════════════════════════════════

  {
    id: 'dihydrocoumarin', name: '二氫香豆素', nameEn: 'Dihydrocoumarin', cas: '119-84-6',
    smiles: 'O=C1CCc2ccccc2O1', category: 'amber', tags: ['tonka','coconut','sweet'],
    functionalGroup: 'lactone', notePosition: 'base',
    scentProfile: { description: '甜蜜的零陵香豆-椰子混合，帶有乾草和杏仁的溫暖底韻。比香豆素更加柔和奶油般，在東方型和美食型香水中提供甜蜜的基調。', intensity: 3, tenacity: 4, diffusion: 3, keywords: ['零陵香豆', '椰子', '乾草', '甜蜜'] },
    properties: { mw: 148.16, bp: 272, logP: 1.94, density: 1.186, vaporPressure: 1, appearance: '無色至淡黃液體' },
    naturalSources: ['零陵香豆（微量）'],
    usage: { concentration: '1-10%', pairings: ['Coumarin', 'Vanillin', 'Tonka abs'], perfumes: ['東方美食配方'], applications: ['東方調', '美食調', '零陵香豆調'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'cinnamicAcid', name: '肉桂酸', nameEn: 'Cinnamic Acid', cas: '140-10-3',
    smiles: 'OC(=O)C=Cc1ccccc1', category: 'amber', tags: ['balsamic','warm','honey'],
    functionalGroup: 'acid', notePosition: 'base',
    scentProfile: { description: '溫暖的香脂調，帶有蜂蜜般的甜韻和微弱的粉質感。是安息香、秘魯香脂和蘇合香的重要成分，提供溫暖持久的基調。', intensity: 2, tenacity: 5, diffusion: 1, keywords: ['香脂', '蜂蜜', '溫暖', '粉質'] },
    properties: { mw: 148.16, bp: 300, logP: 2.13, density: 1.248, vaporPressure: 0.01, appearance: '白色結晶' },
    naturalSources: ['安息香', '秘魯香脂', '肉桂', '蘇合香'],
    usage: { concentration: '0.5-5%', pairings: ['Benzoin', 'Vanillin', 'Peru balsam'], perfumes: ['Shalimar', 'Opium'], applications: ['東方調', '香脂調', '定香劑'] },
    safety: { ifra: '有使用限制', allergen: true, note: 'EU 列管過敏原' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL GOURMAND
  // ═══════════════════════════════════════════════

  {
    id: 'benzaldehyde', name: '苯甲醛', nameEn: 'Benzaldehyde', cas: '100-52-7',
    smiles: 'O=Cc1ccccc1', category: 'gourmand', tags: ['cherry','almond','marzipan'],
    functionalGroup: 'aldehyde', notePosition: 'top',
    scentProfile: { description: '甜蜜的杏仁-櫻桃香氣，帶有微苦的果仁底韻和微弱的苯甲醛「化學感」。是杏仁精和櫻桃利口酒的主要香氣成分。', intensity: 4, tenacity: 2, diffusion: 5, keywords: ['杏仁', '櫻桃', '杏仁膏', '甜苦'] },
    properties: { mw: 106.12, bp: 178, logP: 1.48, density: 1.044, vaporPressure: 127, appearance: '無色液體' },
    naturalSources: ['苦杏仁', '櫻桃', '桃核', '杏核'],
    usage: { concentration: '0.1-3%', pairings: ['Vanillin', 'Coumarin', 'Heliotropin'], perfumes: ['杏仁-櫻桃主題配方'], applications: ['美食調', '櫻桃調', '食品香精'] },
    safety: { ifra: '有使用限制', allergen: false, note: '少量安全，不可大量攝入' }
  },
  {
    id: 'maltol', name: '麥芽酚', nameEn: 'Maltol', cas: '118-71-8',
    smiles: 'CC1=C(O)C(=O)C=CO1', category: 'gourmand', tags: ['caramel','cotton candy','toffee'],
    functionalGroup: 'ketone', notePosition: 'middle',
    scentProfile: { description: '棉花糖般的焦糖甜香，帶有太妃糖和麥芽的溫暖底韻。比乙基麥芽酚甜度稍低但更加「焦糖化」，常用於美食調基底。', intensity: 4, tenacity: 3, diffusion: 3, keywords: ['焦糖', '棉花糖', '太妃糖', '麥芽'] },
    properties: { mw: 126.11, bp: 292, logP: -0.24, density: 1.260, vaporPressure: 0.1, appearance: '白色結晶粉末' },
    naturalSources: ['焙烤麥芽', '咖啡烘焙', '焦糖', '紅糖'],
    usage: { concentration: '0.1-2%', pairings: ['Ethyl maltol', 'Vanillin', 'Coumarin'], perfumes: ['Angel', 'La Vie Est Belle'], applications: ['美食調', '甜香調', '食品香精'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好，GRAS 認證' }
  },
  {
    id: 'furaneol', name: '呋喃酮', nameEn: 'Furaneol (DMHF)', cas: '3658-77-3',
    smiles: 'CC1(O)C(=O)C(C)=CO1', category: 'gourmand', tags: ['strawberry','caramel','burnt sugar'],
    functionalGroup: 'ketone', notePosition: 'middle',
    scentProfile: { description: '成熟草莓和焦糖的甜蜜混合，帶有棕色糖和微弱的焦燒底韻。是草莓和鳳梨等水果香氣中的關鍵成分，低劑量即產生顯著效果。', intensity: 5, tenacity: 3, diffusion: 4, keywords: ['草莓', '焦糖', '焦糖', '水果'] },
    properties: { mw: 128.13, bp: 287, logP: -0.58, density: 1.080, vaporPressure: 0.5, appearance: '白色至米色結晶' },
    naturalSources: ['草莓', '鳳梨', '芒果', '焙烤食品'],
    usage: { concentration: '0.01-1%', pairings: ['Ethyl maltol', 'gamma-Decalactone', 'Vanillin'], perfumes: ['草莓主題配方'], applications: ['草莓調', '美食調', '食品香精'] },
    safety: { ifra: '無特殊限制', allergen: false, note: 'GRAS 認證' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL HERBAL
  // ═══════════════════════════════════════════════

  {
    id: 'borneol', name: '龍腦', nameEn: 'Borneol', cas: '507-70-0',
    smiles: 'CC1(C)C2CCC1(C)C(O)C2', category: 'herbal', tags: ['camphor','balsamic','woody'],
    functionalGroup: 'alcohol', notePosition: 'middle',
    scentProfile: { description: '清涼的樟腦-松木香氣，帶有泥土般的草本底韻和微弱的薄荷感。是冰片的主要異構體，在傳統中藥和薰香中有重要地位。', intensity: 4, tenacity: 3, diffusion: 4, keywords: ['樟腦', '松木', '清涼', '草本'] },
    properties: { mw: 154.25, bp: 210, logP: 2.87, density: 1.011, vaporPressure: 15, appearance: '白色結晶' },
    naturalSources: ['樟樹', '迷迭香', '艾草', '龍腦香樹'],
    usage: { concentration: '0.5-5%', pairings: ['Camphor', 'Eucalyptol', 'alpha-Pinene'], perfumes: ['芳療配方'], applications: ['草本調', '藥用', '薰香'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'fenchone', name: '茴香酮', nameEn: 'Fenchone', cas: '1195-79-5',
    smiles: 'CC1(C)C2CCC1(C)C(=O)C2', category: 'herbal', tags: ['fennel','camphor','earth'],
    functionalGroup: 'ketone', notePosition: 'top',
    scentProfile: { description: '清涼的茴香-樟腦混合，帶有泥土和微弱的苦味底韻。與小茴香和薰衣草精油的苦味特徵密切相關，提供配方的草本深度。', intensity: 4, tenacity: 2, diffusion: 4, keywords: ['茴香', '樟腦', '泥土', '苦味'] },
    properties: { mw: 152.23, bp: 193, logP: 2.13, density: 0.946, vaporPressure: 95, appearance: '無色液體' },
    naturalSources: ['小茴香', '薰衣草', '艾草', '鼠尾草'],
    usage: { concentration: '0.5-3%', pairings: ['Camphor', 'Eucalyptol', 'Lavandulol'], perfumes: ['草本芳療配方'], applications: ['草本調', '芳療', '藥用'] },
    safety: { ifra: '有使用限制', allergen: false, note: '安全性良好，需注意用量' }
  },
  {
    id: 'terpinylAcetate', name: '乙酸松油酯', nameEn: 'Terpinyl Acetate', cas: '80-26-2',
    smiles: 'CC(=O)OC1(C)CCC(=CC1)C', category: 'herbal', tags: ['bergamot','pine','herbal'],
    functionalGroup: 'ester', notePosition: 'top',
    scentProfile: { description: '清新的佛手柑-松木混合，帶有薰衣草和柑橘的輕快底韻。是小荳蔻精油和松針精油的重要組成，提供清爽的草本前調。', intensity: 3, tenacity: 2, diffusion: 4, keywords: ['佛手柑', '松木', '薰衣草', '清新'] },
    properties: { mw: 196.29, bp: 220, logP: 3.30, density: 0.966, vaporPressure: 15, appearance: '無色液體' },
    naturalSources: ['小荳蔻', '松針', '迷迭香', '絲柏'],
    usage: { concentration: '2-15%', pairings: ['alpha-Pinene', 'Eucalyptol', 'Linalyl acetate'], perfumes: ['清新草本配方'], applications: ['草本調', '柑橘調', '芳療'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   LEATHER / ANIMALIC / HETEROCYCLIC
  // ═══════════════════════════════════════════════

  {
    id: 'quinoline', name: '喹啉', nameEn: 'Quinoline', cas: '91-22-5',
    smiles: 'c1ccc2ncccc2c1', category: 'leather', tags: ['leather','harsh','smoky'],
    functionalGroup: 'heterocyclic', notePosition: 'middle',
    scentProfile: { description: '尖銳而粗獷的皮革煙燻香氣，帶有煤焦油和潮濕皮革的底韻。是皮革香調的元祖分子之一，需極低劑量使用。高劑量下令人不快。', intensity: 5, tenacity: 4, diffusion: 4, keywords: ['皮革', '煤焦油', '煙燻', '刺鼻'] },
    properties: { mw: 129.16, bp: 237, logP: 2.03, density: 1.093, vaporPressure: 8, appearance: '無色至淡黃液體' },
    naturalSources: ['煤焦油'],
    usage: { concentration: '0.01-0.1%', pairings: ['Birch tar', 'Isobutyl quinoline', 'Castoreum'], perfumes: ['Knize Ten', 'Cuir de Russie'], applications: ['皮革調', '煙燻調'] },
    safety: { ifra: '嚴格限制', allergen: false, note: 'IFRA 嚴格限制用量' }
  },
  {
    id: 'isobutylQuinoline', name: '異丁基喹啉', nameEn: 'Isobutyl Quinoline', cas: '65442-31-1',
    smiles: 'CC(C)Cc1ccc2ccccc2n1', category: 'leather', tags: ['leather','refined','green'],
    functionalGroup: 'heterocyclic', notePosition: 'middle',
    scentProfile: { description: '優雅而圓潤的皮革調，比喹啉柔和許多。帶有綠色草本和微弱的青苔底韻，常用於高級男香的皮革豐韻。', intensity: 3, tenacity: 4, diffusion: 3, keywords: ['皮革', '優雅', '綠意', '柔和'] },
    properties: { mw: 185.27, bp: 280, logP: 3.50, density: 1.040, vaporPressure: 0.3, appearance: '淡黃色液體' },
    naturalSources: ['合成'],
    usage: { concentration: '0.1-2%', pairings: ['Quinoline', 'Birch tar', 'Styrax'], perfumes: ['Tuscan Leather', 'Ombré Leather'], applications: ['皮革調', '菸草調', '男香'] },
    safety: { ifra: '有使用限制', allergen: false, note: '需控制用量' }
  },
  {
    id: 'pCresol', name: '對甲酚', nameEn: 'p-Cresol (4-Methylphenol)', cas: '106-44-5',
    smiles: 'Cc1ccc(O)cc1', category: 'animalic', tags: ['barnyard','horse','leather'],
    functionalGroup: 'phenol', notePosition: 'middle',
    scentProfile: { description: '強烈的動物-穀倉氣味，帶有馬廄和皮革的粗獷底韻。極低劑量（<0.01%）下可增添配方的「活力」和「肌膚感」，過量則令人厭惡。', intensity: 5, tenacity: 4, diffusion: 5, keywords: ['穀倉', '馬廄', '皮革', '動物'] },
    properties: { mw: 108.14, bp: 202, logP: 1.95, density: 1.035, vaporPressure: 11, appearance: '無色至淡黃結晶' },
    naturalSources: ['天然麝香', '海狸香', '蜂膠', '焙烤咖啡'],
    usage: { concentration: '0.001-0.02%', pairings: ['Indole', 'Civet', 'Castoreum reconstitution'], perfumes: ['Vero Profumo Kiki', 'Papillon Salome'], applications: ['動物調', '皮革調', '前衛香水'] },
    safety: { ifra: '有使用限制', allergen: false, note: '高濃度有毒，紅極微量使用' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL MARINE
  // ═══════════════════════════════════════════════

  {
    id: 'tropional', name: '海風醛', nameEn: 'Tropional (Troplional)', cas: '104-55-2',
    smiles: 'O=CCCc1ccc2OCOc2c1', category: 'marine', tags: ['marine','floral','ozonic'],
    functionalGroup: 'aldehyde', notePosition: 'top',
    scentProfile: { description: '海洋與花香的獨特融合，帶有清新的臭氧感和微弱的百合花底韻。是 Calone 的替代品，將海洋的清涼與花香的柔美完美結合。', intensity: 3, tenacity: 2, diffusion: 4, keywords: ['海洋', '花香', '臭氧', '清新'] },
    properties: { mw: 178.18, bp: 275, logP: 1.60, density: 1.150, vaporPressure: 0.5, appearance: '白色結晶' },
    naturalSources: ['合成'],
    usage: { concentration: '0.5-5%', pairings: ['Calone', 'Dihydromyrcenol', 'Hedione'], perfumes: ['L\'Eau d\'Issey', 'Acqua di Gio'], applications: ['海洋調', '清新花香', '中性香水'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },
  {
    id: 'floralozone', name: '花氧調', nameEn: 'Floralozone', cas: '67634-15-5',
    smiles: 'CC1(CC=C(C)C)OCC(C)O1', category: 'marine', tags: ['ozonic','sea','fresh'],
    functionalGroup: 'ether', notePosition: 'top',
    scentProfile: { description: '清新的臭氧-海風感，帶有微弱的花香和金屬底韻。是打造「海邊散步」感覺的關鍵分子，為配方帶來清涼的空氣感。', intensity: 3, tenacity: 1, diffusion: 5, keywords: ['臭氧', '海風', '清涼', '金屬'] },
    properties: { mw: 170.25, bp: 210, logP: 1.80, density: 0.940, vaporPressure: 20, appearance: '無色液體' },
    naturalSources: ['合成'],
    usage: { concentration: '0.5-5%', pairings: ['Calone', 'Dihydromyrcenol', 'Linalool'], perfumes: ['海洋清新配方'], applications: ['海洋調', '臭氧調', '運動香水'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

  // ═══════════════════════════════════════════════
  //   ADDITIONAL POWDERY
  // ═══════════════════════════════════════════════

  {
    id: 'methylBenzoate', name: '苯甲酸甲酯', nameEn: 'Methyl Benzoate', cas: '93-58-3',
    smiles: 'COC(=O)c1ccccc1', category: 'powdery', tags: ['ylang','feijoa','fruity'],
    functionalGroup: 'ester', notePosition: 'middle',
    scentProfile: { description: '甜蜜的依蘭-費約果（Feijoa）混合，帶有微弱的粉質感和溫暖香脂底韻。在天然依蘭精油中佔有重要比例，也帶有獨特的熱帶果香。', intensity: 3, tenacity: 3, diffusion: 3, keywords: ['依蘭', '費約果', '粉質', '甜蜜'] },
    properties: { mw: 136.15, bp: 199, logP: 2.12, density: 1.088, vaporPressure: 40, appearance: '無色液體' },
    naturalSources: ['依蘭', '費約果', '鬱金香'],
    usage: { concentration: '1-10%', pairings: ['Benzyl acetate', 'Ylang ylang oil', 'Linalool'], perfumes: ['依蘭主題配方'], applications: ['依蘭調', '粉香調', '食品香精'] },
    safety: { ifra: '無特殊限制', allergen: false, note: '安全性良好' }
  },

]

/**
 * 所有類別選項（給篩選用）
 */
export const CATEGORY_OPTIONS = Object.values(OLFACTORY_FAMILIES)

/**
 * 所有香調位置選項
 */
export const NOTE_OPTIONS = Object.values(NOTE_POSITIONS)

/**
 * 所有化學官能團選項（給篩選用）
 */
export const FUNCTIONAL_GROUP_OPTIONS = Object.values(FUNCTIONAL_GROUPS)

/**
 * 所有分子家族選項（給篩選用）
 */
export const MOLECULE_FAMILY_OPTIONS = Object.values(MOLECULE_FAMILIES)

// ── 將分子家族注入 ENCYCLOPEDIA 每一個條目 ──
ENCYCLOPEDIA.forEach(mol => {
  mol.moleculeFamily = MOLECULE_FAMILY_MAP[mol.id] || null
})
