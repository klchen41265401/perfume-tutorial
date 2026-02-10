// Centralized molecule registry for perfume chemistry tutorial

export const MOLECULES = {
  // === Aldehydes ===
  citral: { name: '檸檬醛 (Citral)', smiles: 'CC(=CC=O)CCC=C(C)C' },
  benzaldehyde: { name: '苯甲醛 (Benzaldehyde)', smiles: 'O=Cc1ccccc1' },
  anisaldehyde: { name: '茴香醛 (Anisaldehyde)', smiles: 'O=Cc1ccc(OC)cc1' },
  cinnamaldehyde: { name: '肉桂醛 (Cinnamaldehyde)', smiles: 'O=C/C=C/c1ccccc1' },
  hexanal: { name: '正己醛 (Hexanal)', smiles: 'CCCCCC=O' },
  transHexenal: { name: '反-2-己烯醛 (trans-2-Hexenal)', smiles: 'CCC/C=C/C=O' },
  hydroxycitronellal: { name: '羥基香茅醛 (Hydroxycitronellal)', smiles: 'OCC(C)CCCC(C)CC=O' },
  phenylacetaldehyde: { name: '苯乙醛 (Phenylacetaldehyde)', smiles: 'O=CCc1ccccc1' },
  nonanal: { name: '壬醛 (Nonanal)', smiles: 'CCCCCCCCC=O' },
  decanal: { name: '癸醛 (Decanal)', smiles: 'CCCCCCCCCC=O' },
  undecanal: { name: '十一醛 (Undecanal)', smiles: 'CCCCCCCCCCC=O' },
  dodecanal: { name: '月桂醛 (Dodecanal)', smiles: 'CCCCCCCCCCCC=O' },
  hexylCinnamal: { name: '己基肉桂醛 (Hexyl cinnamal)', smiles: 'O=C/C=C/c1ccc(CCCCCC)cc1' },
  amylCinnamal: { name: '戊基肉桂醛 (Amyl cinnamaldehyde)', smiles: 'O=C/C=C/c1ccc(CCCCC)cc1' },
  lilial: { name: '鈴蘭醛 (Lilial)', smiles: 'CC(C)c1ccc(CC(C)C=O)cc1' },
  helional: { name: '日光醛 (Helional)', smiles: 'O=CCC(C)c1ccc2OCOc2c1' },
  piperonal: { name: '洋茉莉醛 (Piperonal)', smiles: 'O=Cc1ccc2OCOc2c1' },
  citronellal: { name: '香茅醛 (Citronellal)', smiles: 'CC(CC=O)CCC=C(C)C' },

  // === Alcohols ===
  linalool: { name: '芳樟醇 (Linalool)', smiles: 'CC(=CCCC(C)(O)C=C)C' },
  geraniol: { name: '香葉醇 (Geraniol)', smiles: 'CC(=CCCC(=CCO)C)C' },
  citronellol: { name: '香茅醇 (Citronellol)', smiles: 'CC(CCO)CCC=C(C)C' },
  nerol: { name: '橙花醇 (Nerol)', smiles: 'OC/C=C(\\C)CCC=C(C)C' },
  phenylethylAlcohol: { name: '苯乙醇 (Phenylethyl alcohol)', smiles: 'OCCc1ccccc1' },
  benzylAlcohol: { name: '苯甲醇 (Benzyl alcohol)', smiles: 'OCc1ccccc1' },
  terpineol: { name: 'alpha-萜品醇 (alpha-Terpineol)', smiles: 'CC1=CCC(CC1)(C)O' },
  menthol: { name: '薄荷醇 (Menthol)', smiles: 'CC1CCC(C(C1)O)C(C)C' },
  lMenthol: { name: 'L-薄荷醇 (L-Menthol)', smiles: 'C[C@@H]1CC[C@H]([C@@H](C1)O)C(C)C' },
  dMenthol: { name: 'D-薄荷醇 (D-Menthol)', smiles: 'C[C@H]1CC[C@@H]([C@H](C1)O)C(C)C' },
  ethanol: { name: '乙醇 (Ethanol)', smiles: 'CCO' },
  santalol: { name: 'alpha-檀香醇 (alpha-Santalol)', smiles: 'CC(CO)=CCC1C(=C)CCC1C(C)C' },
  cedrol: { name: '雪松醇 (Cedrol)', smiles: 'CC1CCC2C(C1C)C1(O)CCC(C)C1CC2' },
  patchoulol: { name: '廣藿香醇 (Patchoulol)', smiles: 'CC1(C)CCC2(O)C(C)CCC1C2C' },
  nerolidol: { name: '橙花叔醇 (Nerolidol)', smiles: 'CC(=CCCC(C)(O)C=C)CCC=C(C)C' },
  farnesol: { name: '法呢醇 (Farnesol)', smiles: 'CC(=CCCC(=CCCC(=CCO)C)C)C' },
  rPhenylethanol: { name: '(R)-苯乙醇', smiles: 'O[C@@H](C)c1ccccc1' },
  lavandulol: { name: '薰衣草醇 (Lavandulol)', smiles: 'CC(=C)C(CC=C(C)C)CO' },
  dihydromyrcenol: { name: '二氫月桂烯醇 (Dihydromyrcenol)', smiles: 'CC(C)(O)CCCC(=C)C' },

  // === Ketones ===
  muscone: { name: '麝香酮 (Muscone)', smiles: 'O=C1CCCCCCCCCCCC(C)C1' },
  cyclopentadecanone: { name: '環十五酮 (Cyclopentadecanone)', smiles: 'O=C1CCCCCCCCCCCCCC1' },
  rCarvone: { name: '(R)-香芹酮 (葛縷子)', smiles: 'CC(=O)[C@H]1CC=C(C)CC1' },
  sCarvone: { name: '(S)-香芹酮 (薄荷)', smiles: 'CC(=O)[C@@H]1CC=C(C)CC1' },
  undecanone: { name: '2-十一酮 (2-Undecanone)', smiles: 'CCCCCCCCCC(=O)C' },
  camphor: { name: '樟腦 (Camphor)', smiles: 'CC1(C)C2CCC1(C)C(=O)C2' },
  isoESuper: { name: 'Iso E Super', smiles: 'CC(C)C1CCC2(CCCC(=O)C2C)C1' },
  cashmeran: { name: 'Cashmeran (卡什莫蘭)', smiles: 'CC1(C)CC2CCC(=O)C2(C)C1' },
  nootkatone: { name: '諾卡酮 (Nootkatone)', smiles: 'CC1CCC(=CC1=O)C(=C)C' },
  verbenone: { name: '馬鞭草酮 (Verbenone)', smiles: 'CC1(C)C2CC(=O)C1=CC2' },
  acetophenone: { name: '苯乙酮 (Acetophenone)', smiles: 'CC(=O)c1ccccc1' },
  alphaIonone: { name: 'alpha-紫羅蘭酮 (alpha-Ionone)', smiles: 'CC1=CC(CC1(C)C)C=CC(=O)C' },
  betaIonone: { name: 'beta-紫羅蘭酮 (beta-Ionone)', smiles: 'CC1=CC(=CC(=O)C)CC1(C)C' },
  alphaDamascone: { name: 'alpha-大馬士革酮 (alpha-Damascone)', smiles: 'CC1=CC(CC1(C)C)/C=C/C(=O)C' },
  betaDamascone: { name: 'beta-大馬士革酮 (beta-Damascone)', smiles: 'C/C=C/C(=O)C=CC1C(C)(C)CC1' },
  damascenone: { name: '大馬士革烯酮 (Damascenone)', smiles: 'CC1(C)/C(O)=C\\C(=O)/C1=C/C=CC' },
  alphaIsomethylIonone: { name: 'alpha-異甲基紫羅蘭酮', smiles: 'CC1=CC(CC1(C)C)/C(C)=C/C(=O)C' },

  // === Esters ===
  hedione: { name: 'Hedione (甲基二氫茉莉酸酯)', smiles: 'COC(=O)CCC1CCC(=O)C1' },
  linalylAcetate: { name: '乙酸芳樟酯 (Linalyl acetate)', smiles: 'CC(=CCCC(C)(OC(C)=O)C=C)C' },
  benzylAcetate: { name: '乙酸苄酯 (Benzyl acetate)', smiles: 'CC(=O)OCc1ccccc1' },
  phenylethylAcetate: { name: '乙酸苯乙酯 (Phenylethyl acetate)', smiles: 'CC(=O)OCCc1ccccc1' },
  methylSalicylate: { name: '水楊酸甲酯 (Methyl salicylate)', smiles: 'COC(=O)c1ccccc1O' },
  methylBenzoate: { name: '苯甲酸甲酯 (Methyl benzoate)', smiles: 'COC(=O)c1ccccc1' },
  methylCinnamate: { name: '肉桂酸甲酯 (Methyl cinnamate)', smiles: 'COC(=O)/C=C/c1ccccc1' },
  methylAnthranilate: { name: '鄰胺基苯甲酸甲酯 (Methyl anthranilate)', smiles: 'COC(=O)c1ccccc1N' },
  benzylBenzoate: { name: '苯甲酸苄酯 (Benzyl benzoate)', smiles: 'O=C(OCc1ccccc1)c1ccccc1' },
  benzylSalicylate: { name: '水楊酸苄酯 (Benzyl salicylate)', smiles: 'O=C(OCCc1ccccc1)c1ccccc1O' },
  amylSalicylate: { name: '水楊酸戊酯 (Amyl salicylate)', smiles: 'O=C(OCCCCC)c1ccccc1O' },
  hexylSalicylate: { name: '水楊酸己酯 (Hexyl salicylate)', smiles: 'O=C(OCCCCCC)c1ccccc1O' },
  benzylPropionate: { name: '丙酸苄酯 (Benzyl propionate)', smiles: 'CCC(=O)OCCc1ccccc1' },
  ethylAcetate: { name: '乙酸乙酯 (Ethyl acetate)', smiles: 'CCOC(=O)C' },
  ethylPropionate: { name: '丙酸乙酯 (Ethyl propionate)', smiles: 'CCOC(=O)CC' },
  ethylButyrate: { name: '丁酸乙酯 (Ethyl butyrate)', smiles: 'CCOC(=O)CCC' },
  isoamylAcetate: { name: '乙酸異戊酯 (Isoamyl acetate)', smiles: 'CC(=O)OCC(C)C' },
  methylIsobutyrate: { name: '異丁酸甲酯 (Methyl isobutyrate)', smiles: 'CC(C)C(=O)OC' },
  cis3HexenylAcetate: { name: '順式-3-己烯醇乙酸酯 (cis-3-Hexenyl acetate)', smiles: 'CC(=O)OCC/C=C\\CC' },
  triethylCitrate: { name: '檸檬酸三乙酯 (Triethyl citrate)', smiles: 'CCOC(=O)CC(O)(CC(=O)OCC)C(=O)OCC' },
  gammaDecalactone: { name: 'gamma-癸內酯 (gamma-Decalactone)', smiles: 'CCCCCCC1CCC(=O)O1' },
  deltaDecalactone: { name: 'delta-癸內酯 (delta-Decalactone)', smiles: 'CCCCCC1CCCC(=O)O1' },
  gammaUndecalactone: { name: 'gamma-十一內酯 (gamma-Undecalactone)', smiles: 'CCCCCCCC1CCC(=O)O1' },
  coumarin: { name: '香豆素 (Coumarin)', smiles: 'O=C1Oc2ccccc2C=C1' },

  // === Terpene Hydrocarbons ===
  limonene: { name: '檸檬烯 (Limonene)', smiles: 'CC1=CCC(CC1)C(=C)C' },
  rLimonene: { name: '(R)-檸檬烯 (柑橘)', smiles: 'CC1=CC[C@@H](CC1)C(=C)C' },
  sLimonene: { name: '(S)-檸檬烯 (松脂)', smiles: 'CC1=CC[C@H](CC1)C(=C)C' },
  myrcene: { name: '月桂烯 (Myrcene)', smiles: 'CC(=C)CCC=C(C)C' },
  alphaPinene: { name: 'alpha-蒎烯 (alpha-Pinene)', smiles: 'CC1=CCC2CC1C2(C)C' },
  betaPinene: { name: 'beta-蒎烯 (beta-Pinene)', smiles: 'CC1(C)C2CCC(=C)C1C2' },
  eucalyptol: { name: '桉葉油素 (Eucalyptol/1,8-Cineole)', smiles: 'CC1(C)C2CCC(O2)(CC1)C' },
  ocimene: { name: '羅勒烯 (Ocimene)', smiles: 'CC(=C)C=CC=C(C)C' },

  // === Phenols & Phenyl compounds ===
  eugenol: { name: '丁香酚 (Eugenol)', smiles: 'C=CCc1ccc(O)c(OC)c1' },
  isoeugenol: { name: '異丁香酚 (Isoeugenol)', smiles: 'C/C=C/c1ccc(O)c(OC)c1' },
  methylEugenol: { name: '甲基丁香酚 (Methyl eugenol)', smiles: 'C=CCc1ccc(OC)c(OC)c1' },
  vanillin: { name: '香草醛 (Vanillin)', smiles: 'O=Cc1ccc(O)c(OC)c1' },
  ethylVanillin: { name: '乙基香蘭素 (Ethyl vanillin)', smiles: 'O=Cc1ccc(O)c(OCC)c1' },
  ethylMaltol: { name: '乙基麥芽酚 (Ethyl maltol)', smiles: 'CCC1=C(O)C(=O)C=CO1' },
  thymol: { name: '百里酚 (Thymol)', smiles: 'CC(C)c1cc(C)ccc1O' },
  carvacrol: { name: '香芹酚 (Carvacrol)', smiles: 'CC(C)c1ccc(C)cc1O' },
  pCresolMethylEther: { name: '對甲酚甲醚 (p-Cresyl methyl ether)', smiles: 'COc1ccc(C)cc1' },

  // === Nitrogen-containing ===
  indole: { name: '吲哚 (Indole)', smiles: 'c1ccc2[nH]ccc2c1' },
  skatole: { name: '糞臭素 (Skatole)', smiles: 'Cc1c[nH]c2ccccc12' },
  muskKetone: { name: '酮麝香 (Musk ketone)', smiles: 'CC1=CC([N+](=O)[O-])=C(C)C([N+](=O)[O-])=C1' },

  // === Sulfur-containing ===
  ethanethiol: { name: '乙硫醇 (Ethanethiol)', smiles: 'CCS' },

  // === Macrocyclic Musks ===
  exaltolide: { name: '環十五內酯 (Exaltolide)', smiles: 'O=C1CCCCCCCCCCCCCO1' },
  ethyleneBrassylate: { name: '麝香T (Ethylene brassylate)', smiles: 'O=C1CCCCCCCCCC(=O)OCCO1' },
  ambrettolide: { name: '麝香內酯 (Ambrettolide)', smiles: 'O=C1CCCCCCCCCCCCCCO1' },
  globalide: { name: 'Globalide (環十五烯內酯)', smiles: 'O=C1CCCCCCCCCCCCCO1' },

  // === Polycyclic Musks ===
  galaxolide: { name: '佳樂麝香 (Galaxolide)', smiles: 'CC1(C)CC2=CC(=CC3CCCCC3=C2OC1)C' },
  tonalide: { name: '吐納麝香 (Tonalide)', smiles: 'CC(=O)c1cc2c(cc1C)C(C)(C)CCC2C' },

  // === Amber/Woody ===
  ambroxide: { name: '龍涎醚 (Ambroxide)', smiles: 'CC1CCCC2(C)OC(CCC12)C(C)C' },
  sclareol: { name: '香紫蘇醇 (Sclareol)', smiles: 'CC1(C)CCCC2(C)C1CCC(C2CO)C(C)(O)C=C' },
  javanol: { name: '加瓦醇 (Javanol)', smiles: 'OCC(C)c1ccc2c(c1)CCC2C' },
  sandalore: { name: '新檀香醇 (Sandalore)', smiles: 'CC(C)CC(CC=C(C)C)CC(C)O' },

  // === Oxides ===
  roseOxide: { name: '玫瑰氧化物 (Rose oxide)', smiles: 'CC1CCC(OC1)C(C)=C' },

  // === Marine/Aquatic ===
  calone: { name: '海洋酮 (Calone)', smiles: 'O=C1COc2cc(Cl)ccc2CC1' },

  // === Special ingredients ===
  evernyl: { name: '草苔素 (Evernyl)', smiles: 'COC(=O)c1c(O)cc(OC)c(C)c1O' },
  veratraldehyde: { name: '藜蘆醛 (Veratraldehyde)', smiles: 'O=Cc1ccc(OC)c(OC)c1' },
  safranal: { name: '番紅花醛 (Safranal)', smiles: 'CC1=CC(=O)C(C)(C)C=C1' },
  geranicAcid: { name: '牻牛兒酸 (Geranic acid)', smiles: 'CC(=CCCC(C)=CC(=O)O)C' },

  // === Carrier / Solvents ===
  ipm: { name: '肉豆蔻酸異丙酯 (IPM)', smiles: 'CCCCCCCCCCCCCC(=O)OC(C)C' },
  dpg: { name: '二丙二醇 (DPG)', smiles: 'CC(O)COC(C)CO' },
  phenoxyethanol: { name: '苯氧乙醇 (Phenoxyethanol)', smiles: 'OCCOc1ccccc1' },
  diethylPhthalate: { name: '鄰苯二甲酸二乙酯 (DEP)', smiles: 'CCOC(=O)c1ccccc1C(=O)OCC' },
  bht: { name: 'BHT (二丁基羟基甲苯)', smiles: 'Cc1cc(C(C)(C)C)c(O)c(C(C)(C)C)c1' },
}

// === Per-chapter exports ===

export const HOME_MOLECULES = [
  MOLECULES.citral,
  MOLECULES.linalool,
  MOLECULES.vanillin,
  MOLECULES.rCarvone,
  MOLECULES.sCarvone,
  MOLECULES.muscone,
  MOLECULES.geraniol,
  MOLECULES.benzaldehyde,
  MOLECULES.coumarin,
  MOLECULES.ethylMaltol,
  MOLECULES.limonene,
  MOLECULES.eugenol,
  MOLECULES.hedione,
  MOLECULES.isoESuper,
  MOLECULES.ambroxide,
  MOLECULES.benzylSalicylate,
  MOLECULES.hexylSalicylate,
  MOLECULES.isoamylAcetate,
  MOLECULES.ethylButyrate,
  MOLECULES.cis3HexenylAcetate,
  MOLECULES.diethylPhthalate,
  MOLECULES.phenoxyethanol,
]

// Chapter 1: Quantum Chemistry & Olfactory Receptors
export const CH1_MOLECULES = [
  MOLECULES.citral,
  MOLECULES.benzaldehyde,
  MOLECULES.ethanethiol,
  MOLECULES.undecanone,
  MOLECULES.indole,
  MOLECULES.skatole,
  MOLECULES.betaIonone,
  MOLECULES.acetophenone,
]
export const CH1_CARVONE_PAIR = [
  MOLECULES.rCarvone,
  MOLECULES.sCarvone,
]
export const CH1_THIOL_PAIR = [
  MOLECULES.ethanol,
  MOLECULES.ethanethiol,
]
export const CH1_ALDEHYDE_PAIR = [
  MOLECULES.hexanal,
  MOLECULES.transHexenal,
]
export const CH1_MUSK_FAMILY = [
  MOLECULES.muscone,
  MOLECULES.cyclopentadecanone,
]
export const CH1_RESONANCE_PAIR = [
  MOLECULES.benzaldehyde,
  MOLECULES.anisaldehyde,
]
export const CH1_LIMONENE_PAIR = [
  MOLECULES.rLimonene,
  MOLECULES.sLimonene,
]
export const CH1_MENTHOL_PAIR = [
  MOLECULES.lMenthol,
  MOLECULES.dMenthol,
]

// Chapter 2: Thermodynamics & Volatility
export const CH2_MOLECULES = [
  MOLECULES.limonene,
  MOLECULES.linalool,
  MOLECULES.vanillin,
  MOLECULES.ethanol,
  MOLECULES.alphaPinene,
  MOLECULES.myrcene,
  MOLECULES.eucalyptol,
  MOLECULES.linalylAcetate,
  MOLECULES.ethylAcetate,
  MOLECULES.geraniol,
  MOLECULES.citronellol,
  MOLECULES.phenylethylAlcohol,
  MOLECULES.roseOxide,
  MOLECULES.eugenol,
  MOLECULES.muscone,
  MOLECULES.santalol,
  MOLECULES.patchoulol,
  MOLECULES.benzylBenzoate,
]

// Chapter 3: SAR Deep Analysis
export const CH3_MOLECULES = [
  MOLECULES.geraniol,
  MOLECULES.muscone,
  MOLECULES.linalool,
  MOLECULES.cinnamaldehyde,
  MOLECULES.benzaldehyde,
  MOLECULES.nerol,
  MOLECULES.eugenol,
  MOLECULES.isoeugenol,
  MOLECULES.alphaIonone,
  MOLECULES.betaIonone,
  MOLECULES.alphaDamascone,
  MOLECULES.damascenone,
  MOLECULES.galaxolide,
  MOLECULES.tonalide,
  MOLECULES.methylSalicylate,
  MOLECULES.benzylAcetate,
  MOLECULES.methylBenzoate,
  MOLECULES.methylCinnamate,
]

// Chapter 4: Synthesis Chemistry
export const CH4_MOLECULES = [
  MOLECULES.citronellol,
  MOLECULES.vanillin,
  MOLECULES.hedione,
  MOLECULES.rPhenylethanol,
  MOLECULES.myrcene,
  MOLECULES.linalool,
  MOLECULES.betaIonone,
  MOLECULES.coumarin,
  MOLECULES.citral,
  MOLECULES.hydroxycitronellal,
  MOLECULES.isoESuper,
  MOLECULES.cashmeran,
  MOLECULES.galaxolide,
  MOLECULES.lilial,
  MOLECULES.calone,
  MOLECULES.nootkatone,
  MOLECULES.sclareol,
  MOLECULES.piperonal,
]

// Chapter 5: Formulation Engineering
export const CH5_MOLECULES = [
  MOLECULES.limonene,
  MOLECULES.linalool,
  MOLECULES.coumarin,
  MOLECULES.muskKetone,
  MOLECULES.roseOxide,
  MOLECULES.ethanol,
  MOLECULES.benzylBenzoate,
  MOLECULES.benzylSalicylate,
  MOLECULES.hexylSalicylate,
  MOLECULES.ambroxide,
  MOLECULES.exaltolide,
  MOLECULES.hedione,
  MOLECULES.dihydromyrcenol,
  MOLECULES.phenylethylAlcohol,
  MOLECULES.sandalore,
  MOLECULES.cedrol,
  MOLECULES.alphaIsomethylIonone,
  MOLECULES.gammaDecalactone,
  MOLECULES.methylAnthranilate,
  MOLECULES.ethyleneBrassylate,
  MOLECULES.phenoxyethanol,
  MOLECULES.diethylPhthalate,
]

// Chapter 6: Analytical Methods
export const CH6_MOLECULES = [
  MOLECULES.linalool,
  MOLECULES.vanillin,
  MOLECULES.eugenol,
  MOLECULES.limonene,
  MOLECULES.camphor,
  MOLECULES.citronellol,
  MOLECULES.geraniol,
  MOLECULES.cinnamaldehyde,
  MOLECULES.hexylCinnamal,
  MOLECULES.benzylAlcohol,
  MOLECULES.benzylSalicylate,
  MOLECULES.citral,
  MOLECULES.farnesol,
  MOLECULES.citronellal,
  MOLECULES.methylEugenol,
  MOLECULES.amylCinnamal,
  MOLECULES.terpineol,
  MOLECULES.anisaldehyde,
  MOLECULES.coumarin,
  MOLECULES.amylSalicylate,
]

// Chapter 7: Case Studies
export const CH7_MOLECULES = [
  MOLECULES.citral,
  MOLECULES.linalool,
  MOLECULES.isoESuper,
  MOLECULES.ambroxide,
  MOLECULES.hedione,
  MOLECULES.benzylAcetate,
  MOLECULES.geraniol,
  MOLECULES.phenylethylAcetate,
  MOLECULES.santalol,
  MOLECULES.javanol,
  MOLECULES.evernyl,
  MOLECULES.amylCinnamal,
  MOLECULES.citronellol,
  MOLECULES.benzylAlcohol,
  MOLECULES.calone,
  MOLECULES.lavandulol,
  MOLECULES.isoamylAcetate,
  MOLECULES.ethylButyrate,
]

// Chapter 8: Advanced Topics
export const CH8_MOLECULES = [
  MOLECULES.geraniol,
  MOLECULES.linalool,
  MOLECULES.camphor,
  MOLECULES.coumarin,
  MOLECULES.geranicAcid,
  MOLECULES.limonene,
  MOLECULES.ambroxide,
  MOLECULES.sclareol,
  MOLECULES.nootkatone,
  MOLECULES.verbenone,
  MOLECULES.helional,
  MOLECULES.vanillin,
  MOLECULES.indole,
  MOLECULES.betaIonone,
  MOLECULES.safranal,
  MOLECULES.cashmeran,
]
