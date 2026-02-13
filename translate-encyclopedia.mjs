/**
 * 批量翻譯 encyclopedia.js — line-by-line 狀態機
 * 執行: node translate-encyclopedia.mjs
 */
import { readFileSync, writeFileSync } from 'fs'

// ═══════════════════════════════════════════════
// KEYWORD 翻譯映射
// ═══════════════════════════════════════════════
const KW = {
  '橙皮': 'Orange peel', '檸檬': 'Lemon', '清新': 'Fresh', '明亮': 'Bright',
  '銳利': 'Sharp', '草本': 'Herbal', '馬鞭草': 'Verbena', '檸檬草': 'Lemongrass',
  '柑橘': 'Citrus', '果香': 'Fruity', '甜橙': 'Sweet orange', '花香': 'Floral',
  '粉質': 'Powdery', '玫瑰': 'Rose', '茉莉': 'Jasmine', '蜂蜜': 'Honey',
  '甜美': 'Sweet', '甜蜜': 'Sweet', '甜膩': 'Sugary sweet', '甜苦': 'Bittersweet',
  '甜辣': 'Sweet-spicy', '甜點': 'Dessert', '糖果': 'Candy', '焦糖': 'Caramel',
  '巧克力': 'Chocolate', '黑巧克力': 'Dark chocolate', '太妃糖': 'Toffee',
  '奶油': 'Creamy', '乳脂': 'Buttery', '煉乳': 'Condensed milk', '棉花糖': 'Marshmallow',
  '香草': 'Vanilla', '溫暖': 'Warm', '琥珀': 'Amber', '木質': 'Woody',
  '檀香': 'Sandalwood', '雪松': 'Cedar', '松木': 'Pine', '松樹': 'Pine tree',
  '森林': 'Forest', '鉛筆': 'Pencil', '苔蘚': 'Moss', '泥土': 'Earthy',
  '乾草': 'Dry hay', '乾燥': 'Dry', '深沉': 'Deep', '深邃': 'Profound',
  '沉穩': 'Calm', '神聖': 'Sacred', '冥想': 'Meditative', '壁爐': 'Fireplace',
  '煙燻': 'Smoky', '焦木': 'Burnt wood', '煤焦油': 'Coal tar', '樹脂': 'Resin',
  '清涼': 'Cool', '冰涼': 'Icy', '提神': 'Refreshing', '薄荷': 'Mint',
  '留蘭香': 'Spearmint', '樟腦': 'Camphor', '桉樹': 'Eucalyptus',
  '辛辣': 'Spicy', '辛香': 'Spice', '肉桂': 'Cinnamon', '胡椒': 'Pepper',
  '丁香': 'Clove', '茴香': 'Anise', '葛縷子': 'Caraway',
  '綠葉': 'Green leaf', '綠色': 'Green', '綠意': 'Verdant', '青草': 'Fresh grass',
  '青蘋果': 'Green apple', '鮮切': 'Fresh-cut', '割草': 'Mown grass',
  '海洋': 'Marine', '海風': 'Sea breeze', '水感': 'Aqueous', '水潤': 'Dewy',
  '水果': 'Fruit', '臭氧': 'Ozone', '清透': 'Transparent', '清甜': 'Fresh-sweet',
  '百合': 'Lily', '鈴蘭': 'Lily of the valley', '風信子': 'Hyacinth',
  '紫丁香': 'Lilac', '紫羅蘭': 'Violet', '鳶尾': 'Iris', '蘭花': 'Orchid',
  '依蘭': 'Ylang-ylang', '天竺葵': 'Geranium', '康乃馨': 'Carnation',
  '仙客來': 'Cyclamen', '菩提花': 'Linden blossom', '橙花': 'Neroli',
  '白花': 'White floral', '白麝香': 'White musk', '麝香': 'Musk', '龍涎香': 'Ambergris',
  '脂肪': 'Fatty', '脂肪花香': 'Fatty floral', '動物': 'Animalic',
  '皮革': 'Leather', '皮膚': 'Skin-like', '肌膚': 'Skin',
  '藥味': 'Medicinal', '藥用': 'Pharmaceutical', '藥膏': 'Ointment', '藥草': 'Herbs',
  '微甜': 'Slightly sweet', '微苦': 'Slightly bitter', '苦味': 'Bitter',
  '陽光': 'Sunny', '夏日': 'Summer', '春天': 'Spring', '冬季': 'Winter',
  '復古': 'Vintage', '現代': 'Modern', '優雅': 'Elegant', '奢華': 'Luxurious',
  '性感': 'Sexy', '迷醉': 'Intoxicating', '空靈': 'Ethereal', '影子': 'Shadow',
  '金屬': 'Metallic', '蠟質': 'Waxy', '刺鼻': 'Pungent', '醛香': 'Aldehyde',
  '潔淨': 'Clean', '清潔': 'Clean', '洗衣液': 'Laundry detergent', '洗衣粉': 'Detergent',
  '肥皂': 'Soapy', '棉花': 'Cotton', '絲綢': 'Silk', '絲絨': 'Velvet',
  '羊絨': 'Cashmere', '油脂': 'Oily', '溶劑': 'Solvent', '透明': 'Crystal clear',
  '細膩': 'Delicate', '柔和': 'Soft', '柔軟': 'Soft', '活潑': 'Lively', '輕快': 'Light',
  '濃烈': 'Intense', '自然': 'Natural', '有機': 'Organic',
  '杏仁': 'Almond', '杏仁膏': 'Marzipan', '櫻桃': 'Cherry', '蜜桃': 'Peach',
  '梨子': 'Pear', '荔枝': 'Lychee', '鳳梨': 'Pineapple', '香蕉': 'Banana',
  '草莓': 'Strawberry', '覆盆子': 'Raspberry', '葡萄': 'Grape', '李子': 'Plum',
  '西瓜': 'Watermelon', '熱帶': 'Tropical', '葡萄柚': 'Grapefruit', '柚子': 'Yuzu',
  '費約果': 'Feijoa', '黑醋栗': 'Blackcurrant', '汁液': 'Juicy',
  '零陵香豆': 'Tonka bean', '甘草': 'Licorice', '番紅花': 'Saffron',
  '菸草': 'Tobacco', '百里香': 'Thyme', '迷迭香': 'Rosemary', '羅勒': 'Basil',
  '龍蒿': 'Tarragon', '蒔蘿': 'Dill', '芹菜': 'Celery', '蘑菇': 'Mushroom',
  '薰衣草': 'Lavender', '佛手柑': 'Bergamot', '定香': 'Fixative',
  '手性': 'Chiral', '紅酒': 'Red wine', '麥芽': 'Malt',
  '冬青': 'Wintergreen', '穀倉': 'Barnyard', '糞便': 'Fecal', '馬廄': 'Stable',
  '濕木': 'Wet wood', '岩蘭草': 'Vetiver', '香脂': 'Balsamic',
  '雨後': 'Petrichor', '橡苔': 'Oakmoss',
  '蠟': 'Wax', '酚類': 'Phenolic', '堅果': 'Nutty', '樹皮': 'Bark',
  '花粉': 'Pollen', '青綠': 'Green', '酸性': 'Acidic', '刺激': 'Irritating',
  '白胡椒': 'White pepper', '黑胡椒': 'Black pepper', '紅椒': 'Red pepper',
  '牛至': 'Oregano', '椰子': 'Coconut', '鮮奶': 'Fresh milk',
  '奶酪': 'Cheese', '黃油': 'Butter', '桃子': 'Peach', '杏子': 'Apricot',
  '芒果': 'Mango', '月桂': 'Bay laurel', '龍腦': 'Borneol',
  '紫蘇': 'Perilla', '艾草': 'Mugwort', '松脂': 'Pine resin', '松針': 'Pine needle',
  '乳香': 'Frankincense', '沒藥': 'Myrrh', '安息香': 'Benzoin',
  '土壤': 'Soil', '根部': 'Roots', '雪松木': 'Cedarwood',
  '廣藿香': 'Patchouli', '卡宴辣椒': 'Cayenne', '八角': 'Star anise',
  '小荳蔻': 'Cardamom', '鬱金香': 'Tulip', '牡丹': 'Peony',
  '水仙': 'Narcissus', '梔子花': 'Gardenia', '美食': 'Gourmand',
  '粉紅': 'Pink', '刺梨': 'Prickly pear', '紅茶': 'Black tea', '綠茶': 'Green tea',
  '薑': 'Ginger', '咖啡': 'Coffee', '可可': 'Cocoa', '蜂蜜花': 'Honey flower',
  '杏桃': 'Apricot', '桂花': 'Osmanthus', '山楂': 'Hawthorn',
  '洋甘菊': 'Chamomile', '棗子': 'Date', '煉金': 'Alchemy',
  '苦杏仁': 'Bitter almond', '荊芥': 'Catnip', '薰香': 'Incense',
  '催情': 'Aphrodisiac', '冷杉': 'Fir', '溫潤': 'Warm and smooth',
  '華麗': 'Gorgeous', '酸甜': 'Sweet-tart', '果醬': 'Jam', '醬果': 'Preserved fruit',
  '啤酒花': 'Hops', '威士忌': 'Whisky', '焙煎': 'Roasted',
  '青椒': 'Green pepper', '樟脂': 'Camphoraceous',
  '漿果': 'Berry', '脂粉': 'Powder compact', '毛皮': 'Fur',
  '人體': 'Body', '腐爛': 'Decaying', '吲哚': 'Indolic',
  '新鮮': 'Fresh', '翠綠': 'Emerald green', '生菜': 'Lettuce',
  '莖葉': 'Stems and leaves', '甲醛': 'Aldehyde-like', '黃瓜': 'Cucumber',
  '瓜類': 'Melon', '甜瓜': 'Cantaloupe',
  '新雪': 'Fresh snow', '乾淨': 'Clean', '林地': 'Woodland',
  '經典': 'Classic', '豔麗': 'Vibrant', '厚重': 'Heavy',
  '複雜': 'Complex', '多面': 'Multifaceted', '鳳仙花': 'Balsam flower',
  '土地': 'Earth', '脂質': 'Lipid', '舊木': 'Old wood', '溪流': 'Brook',
  '乾爽': 'Crisp and dry', '刺激性': 'Irritant',
  '利口酒': 'Liqueur', '焦麥': 'Roasted grain', '麵包': 'Bread',
  '糖漿': 'Syrup', '果仁': 'Nuts', '烤': 'Roasted',
  '肉': 'Meaty', '鮮肉': 'Fresh meat', '咸味': 'Salty',
  '濕地': 'Wetland', '低沉': 'Subdued', '馬鞍': 'Saddle', '苯酚': 'Phenol',
  '嬰兒粉': 'Baby powder', '草藥': 'Herbal', '鈴蘭花': 'Lily of the valley',
}

// ═══════════════════════════════════════════════
// APPEARANCE 翻譯映射
// ═══════════════════════════════════════════════
const APP_MAP = {
  '無色液體': 'Colorless liquid',
  '無色至淡黃色液體': 'Colorless to pale yellow liquid',
  '無色至淡黃液體': 'Colorless to pale yellow liquid',
  '淡黃色液體': 'Pale yellow liquid',
  '淡黃液體': 'Pale yellow liquid',
  '黃色液體': 'Yellow liquid',
  '琥珀色液體': 'Amber liquid',
  '淡黃色粘稠液體': 'Pale yellow viscous liquid',
  '淡黃色至琥珀色粘稠液體': 'Pale yellow to amber viscous liquid',
  '白色結晶': 'White crystals',
  '白色結晶粉末': 'White crystalline powder',
  '白色結晶片': 'White crystalline flakes',
  '白色針狀結晶': 'White needle-like crystals',
  '白色片狀結晶': 'White flaky crystals',
  '白色結晶或液體': 'White crystals or liquid',
  '白色結晶或粘稠液體': 'White crystals or viscous liquid',
  '白色至淡黃結晶': 'White to pale yellow crystals',
  '白色至米色結晶': 'White to off-white crystals',
  '白色粉末': 'White powder',
  '白色蠟狀固體': 'White waxy solid',
  '無色結晶': 'Colorless crystals',
  '無色至淡黃結晶': 'Colorless to pale yellow crystals',
  '黃色結晶': 'Yellow crystals',
}

// ═══════════════════════════════════════════════
// NATURAL SOURCE 翻譯映射
// ═══════════════════════════════════════════════
const NS = {
  '甜橙': 'Sweet orange', '檸檬': 'Lemon', '葡萄柚': 'Grapefruit', '橘子': 'Mandarin',
  '佛手柑': 'Bergamot', '檸檬草': 'Lemongrass', '檸檬馬鞭草': 'Lemon verbena',
  '檸檬皮': 'Lemon peel', '山蒼子': 'Litsea cubeba', '柑橘': 'Citrus', '柑橘皮': 'Citrus peel',
  '柑橘精油': 'Citrus essential oil', '柑橘花': 'Citrus blossom', '柑橘類': 'Citrus family',
  '橙皮油': 'Orange peel oil', '橙花': 'Neroli', '橙花油': 'Neroli oil', '柳橙花': 'Orange blossom',
  '玫瑰': 'Rose', '大馬士革玫瑰': 'Damask rose', '保加利亞玫瑰精油': 'Bulgarian rose oil',
  '玫瑰木': 'Rosewood', '玫瑰草': 'Palmarosa', '香茅草': 'Citronella grass',
  '尤加利': 'Eucalyptus', '茉莉': 'Jasmine', '茉莉花': 'Jasmine flower',
  '薰衣草': 'Lavender', '天竺葵': 'Geranium', '依蘭': 'Ylang-ylang', '桂花': 'Osmanthus',
  '梔子花': 'Gardenia', '塔希提梔子': 'Tahitian gardenia', '水仙': 'Narcissus',
  '風信子': 'Hyacinth', '紫羅蘭': 'Violet', '紫羅蘭花': 'Violet flower',
  '紫羅蘭葉': 'Violet leaf', '鬱金香': 'Tulip', '菩提花': 'Linden blossom',
  '康乃馨': 'Carnation', '洋甘菊': 'Chamomile', '鳶尾根': 'Orris root',
  '肉桂': 'Cinnamon', '肉桂皮': 'Cinnamon bark', '肉桂葉': 'Cinnamon leaf',
  '肉桂樹皮': 'Cinnamon tree bark', '中國肉桂': 'Chinese cinnamon', '桂皮': 'Cassia',
  '丁香': 'Clove', '黑胡椒': 'Black pepper', '小荳蔻': 'Cardamom',
  '生薑': 'Ginger', '番紅花（藏紅花）': 'Saffron',
  '薄荷': 'Peppermint', '留蘭香（Spearmint）': 'Spearmint', '玉米薄荷': 'Cornmint',
  '迷迭香': 'Rosemary', '羅勒': 'Basil', '百里香': 'Thyme', '牛至': 'Oregano',
  '鼠尾草': 'Sage', '快樂鼠尾草': 'Clary sage', '龍蒿': 'Tarragon',
  '蒔蘿': 'Dill', '芫荽': 'Coriander', '茴芹': 'Aniseed', '茴香': 'Fennel',
  '艾草': 'Mugwort', '紫蘇': 'Perilla', '月桂': 'Bay laurel',
  '大麻': 'Cannabis', '胡薄荷': 'Pennyroyal', '馬鞭草': 'Verbena',
  '香蜂草': 'Lemon balm', '香茅': 'Citronella',
  '松樹': 'Pine', '松針': 'Pine needle', '杜松': 'Juniper',
  '印度檀香木': 'Indian sandalwood', '澳洲檀香木': 'Australian sandalwood',
  '雪松': 'Cedar', '喜馬拉雅雪松': 'Himalayan cedar', '德州雪松': 'Texas cedar',
  '維吉尼亞雪松': 'Virginia cedar', '樟樹': 'Camphor tree',
  '廣藿香葉片': 'Patchouli leaf', '岩蘭草精油衍生物': 'Vetiver oil derivative',
  '龍涎香（鯨魚排泄物）': 'Ambergris (whale secretion)',
  '麝鹿香囊（現禁止天然來源）': 'Musk deer (natural source now banned)',
  '靈貓（現已禁止天然來源）': 'Civet (natural source now banned)',
  '海狸香': 'Castoreum', '天然麝香': 'Natural musk',
  '秘魯香脂': 'Peru balsam', '安息香': 'Benzoin', '吐魯香脂': 'Tolu balsam',
  '蘇合香': 'Styrax', '龍腦香樹': 'Dipterocarpus', '蜂膠': 'Propolis',
  '零陵香豆': 'Tonka bean', '零陵香豆（微量）': 'Tonka bean (trace)',
  '香草莢': 'Vanilla pod', '香莢蘭': 'Vanilla orchid',
  '甘草': 'Licorice', '樺樹': 'Birch', '橄欖': 'Olive',
  '絲柏': 'Cypress', '愈創木': 'Guaiac wood', '阿拉斯加黃檜': 'Alaska yellow cedar',
  '桃': 'Peach', '桃子': 'Peach', '桃核': 'Peach kernel', '杏': 'Apricot',
  '杏子': 'Apricot', '杏核': 'Apricot kernel', '苦杏仁': 'Bitter almond', '山楂花': 'Hawthorn',
  '梨': 'Pear', '椰子': 'Coconut', '芒果': 'Mango', '蜜桃': 'Peach',
  '蘋果': 'Apple', '草莓': 'Strawberry', '草莓葉': 'Strawberry leaf',
  '覆盆子': 'Raspberry', '荔枝': 'Lychee', '鳳梨': 'Pineapple', '香蕉': 'Banana',
  '櫻桃': 'Cherry', '費約果': 'Feijoa',
  '西瓜': 'Watermelon', '番茄': 'Tomato',
  '綠葉': 'Green leaves', '新鮮綠葉': 'Fresh green leaves',
  '綠茶': 'Green tea', '紅茶': 'Black tea', '茶葉': 'Tea leaf', '茶樹': 'Tea tree',
  '菸草葉': 'Tobacco leaf', '葡萄酒': 'Wine', '啤酒花': 'Hops',
  '大麥': 'Barley', '咖啡': 'Coffee', '咖啡烘焙': 'Roasted coffee',
  '焙烤咖啡': 'Roasted coffee', '焙烤食品': 'Baked goods', '焙烤麥芽': 'Roasted malt',
  '焦糖': 'Caramel', '煙燻木': 'Smoked wood', '煤焦油': 'Coal tar',
  '紅糖': 'Brown sugar', '百齡油': 'Axe oil', '甜菜': 'Beet',
  '合成': 'Synthetic', '合成原料': 'Synthetic material',
  '合成（Givaudan 專利）': 'Synthetic (Givaudan patent)',
  '合成（Pfizer 1966年開發）': 'Synthetic (developed by Pfizer, 1966)',
  '合成（模擬橡苔）': 'Synthetic (oakmoss simulation)',
  '合成（紫羅蘭酮衍生物）': 'Synthetic (ionone derivative)',
  '合成（雪松醇衍生物）': 'Synthetic (cedrol derivative)',
  '合成（靈感來自茉莉花瓣）': 'Synthetic (inspired by jasmine petals)',
  '合成（靈感來自麝香靈貓）': 'Synthetic (inspired by civet musk)',
  '合成（麥芽酚衍生物）': 'Synthetic (maltol derivative)',
  '幾乎所有綠色植物': 'Nearly all green plants',
  '多種香料植物': 'Various aromatic plants',
  '少量存在於柑橘精油中': 'Trace amounts in citrus essential oils',
  '葛縷子（Caraway）': 'Caraway', '黃葵子 (Ambrette seed)': 'Ambrette seed',
  '小茴香': 'Cumin', '冬青': 'Wintergreen',
  '奶油': 'Butter', '乳製品': 'Dairy', '牛奶': 'Milk',
  '人體代謝物': 'Human metabolite', '黑醋栗': 'Blackcurrant',
  '八角': 'Star anise', '威士忌': 'Whisky',
  '岩蘭草': 'Vetiver', '桉樹': 'Eucalyptus',
}

// ═══════════════════════════════════════════════
// APPLICATION 翻譯映射
// ═══════════════════════════════════════════════
const APPL = {
  '男香': "Men's fragrance", '古龍水': 'Cologne', '家用清潔': 'Household cleaner',
  '洗衣液': 'Laundry detergent', '柑橘調': 'Citrus fragrances',
  '清新調': 'Fresh fragrances', '清新花香': 'Fresh floral', '清新前調': 'Fresh top notes',
  '清新香水': 'Fresh perfumery', '清新男香': 'Fresh male fragrance',
  '花香調': 'Floral fragrances', '經典花香': 'Classic floral', '經典花香調': 'Classic floral',
  '深邃花香': 'Deep floral', '高端香水': 'Luxury perfumery',
  '木質調': 'Woody fragrances', '木質花香': 'Woody floral',
  '東方調': 'Oriental fragrances', '東方花香': 'Oriental floral', '東方甜香': 'Oriental sweet',
  '玫瑰調': 'Rose fragrances', '茉莉調': 'Jasmine fragrances',
  '鈴蘭調': 'Lily of the valley', '白花調': 'White floral', '紫羅蘭調': 'Violet',
  '紫丁香調': 'Lilac fragrances', '風信子調': 'Hyacinth fragrances',
  '鳶尾調': 'Iris fragrances', '紫羅蘭/鳶尾調': 'Violet/Iris fragrances',
  '康乃馨調': 'Carnation fragrances', '天然茉莉替代': 'Natural jasmine substitute',
  '依蘭調': 'Ylang-ylang fragrances', '橙花調': 'Neroli fragrances',
  '綠葉調': 'Green leaf', '綠色花香': 'Green floral', '綠花調': 'Green floral',
  '綠葉花香': 'Green leaf floral', '天然花香': 'Natural floral',
  '辛香調': 'Spicy fragrances', '辛香調（限制使用）': 'Spicy (restricted use)',
  '海洋調': 'Marine fragrances', '水生調': 'Aquatic fragrances', '臭氧調': 'Ozone fragrances',
  '美食調': 'Gourmand fragrances', '甜香調': 'Sweet fragrances', '甜點調': 'Dessert fragrances',
  '香草調': 'Vanilla fragrances', '零陵香豆調': 'Tonka bean fragrances',
  '琥珀調': 'Amber fragrances', '檀香調': 'Sandalwood fragrances',
  '麝香調': 'Musk fragrances', '高端麝香調': 'Luxury musk', '白麝香調': 'White musk',
  '皮革調': 'Leather fragrances', '皮膚調': 'Skin fragrances',
  '煙燻調': 'Smoky fragrances', '菸草調': 'Tobacco fragrances',
  '香脂調': 'Balsamic fragrances', '醛香調': 'Aldehyde fragrances',
  '醛香花香': 'Aldehyde floral', '粉香調': 'Powdery fragrances', '粉質花香': 'Powdery floral',
  '西普調': 'Chypre fragrances', '馥奇調': 'Fougère fragrances',
  '果香調': 'Fruity fragrances', '果香花香': 'Fruity floral', '花果調': 'Floral fruity',
  '果香前調': 'Fruity top notes', '草本調': 'Herbal fragrances',
  '薰衣草調': 'Lavender fragrances', '薰衣草配方': 'Lavender formulations',
  '薄荷調': 'Mint fragrances', '草莓調': 'Strawberry', '蜜桃調': 'Peach',
  '椰子調': 'Coconut', '櫻桃調': 'Cherry', '覆盆子調': 'Raspberry',
  '蘋果調': 'Apple fragrances', '葡萄柚調': 'Grapefruit fragrances',
  '紅酒調': 'Red wine', '茶香調': 'Tea fragrances', '岩蘭草調': 'Vetiver',
  '乳香調': 'Frankincense', '肌膚香氛': 'Skin scent', '皮膚香氛': 'Skin fragrance',
  '皮膚護理': 'Skin care', '中性香水': 'Unisex fragrance',
  '所有類型香水': 'All fragrance types', '幾乎所有現代香水': 'Nearly all modern perfumes',
  '幾乎所有類型香水': 'Nearly all fragrance types',
  '幾乎所有需要甜味的配方': 'Nearly all formulas requiring sweetness',
  '沐浴產品': 'Bath products', '沐浴露': 'Shower gel', '洗護產品': 'Hair care',
  '柔順劑': 'Fabric softener', '護膚品': 'Skincare', '防曬霜香精': 'Sunscreen fragrance',
  '嬰兒產品': 'Baby products', '兒童用品': "Children's products",
  '身體噴霧': 'Body spray', '運動香水': 'Sport fragrance', '日用品': 'Daily use',
  '日用香精': 'Daily fragrance', '清潔產品': 'Cleaning products',
  '肥皂': 'Soap', '皂香調': 'Soapy fragrances',
  '基調定香': 'Base fixative', '花香底座': 'Floral base', '底座定香': 'Base fixative',
  '定香劑': 'Fixative', '溫暖底座': 'Warm base',
  '食品': 'Food', '食品調味': 'Food flavoring', '食品香精': 'Food fragrance',
  '口腔護理': 'Oral care', '漱口水': 'Mouthwash',
  '牙科': 'Dental', '藥品': 'Pharmaceuticals', '藥用': 'Medicinal', '藥膏': 'Ointment',
  '殺菌產品': 'Antiseptic products', '防腐': 'Preservative', '防蚊產品': 'Mosquito repellent',
  '驅蟲': 'Insect repellent', '驅蟲產品': 'Insect repellent products',
  '森林調': 'Forest', '溶劑': 'Solvent', '稀釋劑': 'Diluent',
  '家居香氛': 'Home fragrance', '薰香': 'Incense', '冥想香氛': 'Meditation fragrance',
  '芳療': 'Aromatherapy', '肌肉酸痛產品': 'Muscle pain relief',
  '夏季香水': 'Summer fragrance', '前衛香水': 'Avant-garde perfume',
  '天然調': 'Natural fragrances', '天然香水': 'Natural perfumery',
  '奢華香水': 'Luxury fragrance', '優雅女香': 'Elegant feminine fragrance',
  '新鮮花香': 'Fresh floral', '動物調': 'Animalic accord',
  '動物調（痕量）': 'Animalic accord (trace)',
  '啤酒花調': 'Hops accord', '利口酒香精': 'Liqueur fragrance',
  '根汁汽水': 'Root beer', '葡萄風味': 'Grape flavor',
  '聖誕香氛': 'Christmas fragrance',
  '護膚品（除臭功能）': 'Skincare (deodorant function)',
  '作為「放大器」使用': 'Used as "amplifier"',
  '歷史：鈴蘭調、白花調、肥皂（現已禁用）': 'Historical: lily of the valley, white floral, soap (now banned)',
  'Ambroxide 前體': 'Ambroxide precursor', '龍涎香重現': 'Ambergris recreation',
  '中東香氛': 'Middle Eastern fragrance', '印度風格香水': 'Indian-style fragrance',
  '安息香調': 'Benzoin', '蘇合香脂調': 'Styrax',
}

// ═══════════════════════════════════════════════
// IFRA 翻譯映射
// ═══════════════════════════════════════════════
const IFRA_MAP = {
  '無特殊限制': 'No special restrictions',
  '致敏原，有使用限制': 'Sensitizer, usage restrictions apply',
  '致敏原': 'Sensitizer',
  '有使用限制': 'Usage restrictions apply',
  '列管過敏原但無限量': 'Listed allergen, no quantitative limit',
  '列管過敏原': 'Listed allergen',
  '無限制': 'No restrictions',
  '列管過敏原，有限量': 'Listed allergen, with limits',
  '有光敏性限制': 'Phototoxicity restrictions',
  '有注意事項': 'Precautions apply',
  '列管過敏原，嚴格限量': 'Listed allergen, strictly limited',
  '管制化學品（部分地區需許可）': 'Controlled chemical (license required in some regions)',
  '⚠️ 2022年EU禁用': '⚠️ Banned in EU since 2022',
  '天然來源禁用（動物福利）': 'Natural source banned (animal welfare)',
  '嚴格限制': 'Strictly restricted',
}

// ═══════════════════════════════════════════════
// DESCRIPTION 英文翻譯 — 全部 127 筆
// ═══════════════════════════════════════════════
const DESC = {
  limonene: 'Bright and fresh citrus aroma with the vitality of sweet orange and lemon peel. The most iconic citrus molecule, evoking a sun-drenched orchard. Slight piney quality at high doses.',
  citral: 'Intense and pure lemon aroma, sharper and more defined than limonene. Carries lemongrass and verbena character, dominating natural lemon essential oil. Cool, herbal undertone.',
  citronellal: 'Soft citrus with a gentle floral cushion, less aggressive than citral. A delicate citrus-rose bridge molecule, lending a natural and light green nuance.',
  decanal: 'Lively mandarin-like citrus top note with a slight waxy, fatty feel. Adds sparkling orange zest and transparency to openings. A classic aldehyde C-10 for fine fragrance.',
  nonanal: 'Fresh, green and slightly soapy citrus aldehyde. Evokes early morning freshness and dewy citrus groves. Adds brightness and diffusion to blends at low doses.',
  octanal: 'Sharp orange-peel burst with an initial green sting. More pungent than its longer-chain cousins, it imparts a zesty, almost metallic freshness that quickly softens.',
  linalylAcetate: 'Elegant lavender-bergamot fusion, the signature ester of lavender oil. Soft, sweet, floral-herbal with a translucent citrus lift. A backbone molecule for aromatic and fougere families.',
  linalool: 'Graceful floral-woody note with lilac and petitgrain facets. Silky, fresh and slightly citrusy, it bridges top and heart notes effortlessly. One of the most universal ingredients in perfumery.',
  geraniol: 'Lush rose-geranium character with a sweet, warm and slightly fruity hue. Radiant and diffusive, it is a cornerstone of rose accords and feminine florals.',
  citronellol: 'Dewy, natural rose with a green, leafy transparency. Softer and greener than geraniol, lending an outdoor garden freshness. Key to modern rose reconstructions.',
  phenylethylAlcohol: 'The smell of fresh rose petals in morning dew—honeyed, green, velvety. Gentle and romantic, it is the single most important rose-building block in perfumery.',
  roseOxide: 'Metallic, green and intensely rosy, with a lychee-like facet. A high-impact molecule where trace amounts dramatically shape the perception of rose in a blend.',
  hedione: 'Transparent, radiant jasmine breeze with a dewy smoothness. Boosts sillage and diffusion, acting as a magnifying glass for floral compositions. An epoch-defining molecule.',
  hydroxycitronellal: 'Dewy lily of the valley archetype with a clean, watery-sweet aspect. Once the gold standard for muguet accords (now restricted). Fresh, gentle and powdery.',
  helional: 'Green, watery, ozonic freshness with hay and melon facets. A modern aquatic building block that suggests sunlit meadows and clean linen.',
  nerol: 'Soft, honeyed rose with a gentler, less assertive profile than geraniol. Has a fresh, green, slightly fruity character reminiscent of neroli essential oil.',
  farnesol: 'Delicate, dewy floral with a gentle lily of the valley undertone. A mild, skin-like sweetness that serves as a natural base fixative in many flower absolutes.',
  methylAnthranilate: 'Grape-Concord-like fruity opening layered with an intensely narcotic, almost indolic orange-blossom character. Exotic and heady; essential for ylang-ylang and neroli accords.',
  phenylacetaldehyde: 'Hyacinth-green and honeyed, with a piercing, earthy sweetness. Powerful and diffusive even at trace levels, it shapes white-flower compositions from jasmine to narcissus.',
  alphaIsomethylIonone: 'Powdery, sheer violet with a woody orris undertone. Diffusive and refined, it projects the delicate translucence of iris petals. A staple in powdery-feminine accords.',
  nerolidol: 'Woody, floral and subtly green, like fresh bark on a spring morning. Mild and long-lasting, it functions as a gentle fixative with a dewy, almost metallic edge.',
  cis3HexenylAcetate: 'Extremely natural fresh-cut grass and green leaf aroma with a subtle fruity undertone and outdoor freshness. The chemical embodiment of green grass scent, evoking freshly mowed lawns, tea leaves and spring gardens.',
  transHexenal: 'Sharp and intensely green-leaf with a green-apple bite and powerful penetrating character. The green signal molecule released when plants are cut or crushed, with a slightly bitter metallic edge and raw vegetable vitality.',
  gammaDecalactone: 'Creamy, ripe peach with a velvety, lactonic richness. The classic peach skin molecule—lush, fruity and deeply comforting.',
  gammaUndecalactone: 'Creamy, coconut-peach with a warm, tropical sweetness. Key in peach and coconut accords; adds lactonic richness to fruity and gourmand blends.',
  deltaDecalactone: 'Rich, creamy, buttery-peach with an oily, dairy-like quality. A key lactone for natural-smelling peach and cream accords.',
  ethylButyrate: 'Juicy, tropical pineapple note with a candy-like sweetness. A classic fruity ester widely used in food and perfumery for tropical accords.',
  isoamylAcetate: 'Classic banana-pear aroma with a sweet candy-like quality and subtle solvent feel. The representative molecule for fruit candy accords; at low concentrations reveals a fresh, sweet pear-like fruitiness.',
  nootkatone: 'Fresh, citrus-woody (grapefruit peel) with a clean, green, slightly bitter character. A high-impact molecule prized in fine fragrance and as a natural insect repellent.',
  isoESuper: 'A velvety, woody-amber aura with a cedar-like warmth. Diffusive and skin-hugging, it is one of the most widely used captive aroma chemicals, adding a halo effect.',
  santalol: 'Creamy, milky, warm sandalwood with a subtle urinous-animalic undertone. Smooth and meditative; the quintessence of sacred-wood tradition.',
  cedrol: 'Dry and calm cedarwood aroma evoking pencil shavings and warm woodshop air. The main component of natural Virginia cedar oil, radiating a quiet, dependable masculine character. Drier and cooler than sandalwood.',
  patchoulol: 'Dark, earthy, slightly sweet patchouli with a camphoraceous freshness on top. Deep, mysterious and supremely tenacious; a hallmark of oriental and chypre.',
  cashmeran: 'Warm, musky, spicy-woody with a clean cashmere quality. Cozy, modern and very diffusive. Equally at home in masculine and feminine bases.',
  sandalore: 'A modern interpretation of sandalwood aroma, fresher and more transparent than the natural material. Retains the creamy warmth of true sandalwood with added airiness. An excellent and cost-effective alternative with stable supply.',
  javanol: 'Creamy, milky sandalwood with enhanced stability and projection. A modern Givaudan captive designed as a sustainable sandalwood alternative.',
  muscone: 'Refined, powerful natural musk with a subtle animalistic warmth. The defining molecule of deer musk—smooth, skin-like and profoundly tenacious.',
  galaxolide: 'Clean, warm, slightly sweet white musk. Skin-like and animalic in a polished way, it is the most commercially used polycyclic musk molecule.',
  tonalide: 'Sweet, warm, slightly ambery polycyclic musk. Clean and diffusive, but facing environmental scrutiny due to persistence.',
  ethyleneBrassylate: 'Powdery, clean, white musk with a subtle lactonic sweetness. A versatile macrocyclic musk that feels fresh and just-laundered.',
  exaltolide: 'Soft and sweet macrocyclic musk with a faint animalic warmth and creamy, buttery texture. Considered one of the closest synthetic approximations to natural musk, with an inviting skin-like intimacy.',
  ambrettolide: 'Natural musk from ambrette seeds—warm, sweet, slightly fruity. Considered the finest plant-derived musk molecule; valued in clean-beauty formulations.',
  eugenol: 'Rich, warm clove aroma with a spicy-sweet bite. Also found in cinnamon and basil, it adds depth and warmth to oriental and spicy compositions.',
  cinnamaldehyde: 'Warm, sweet, spicy cinnamon bark. Powerful and diffusive, it is the defining molecule of cinnamon. Direct and nostalgic; evokes bakeries and mulled wine.',
  isoeugenol: 'Softer and sweeter than eugenol, with more floral and woody facets. Carries a warm, sweet-spicy carnation character. Less pungent and more elegant than eugenol.',
  ambroxide: 'Rich, deep, woody-amber. The synthetic heart of ambergris—warm, dry, slightly smoky with extraordinary tenacity. A gold-standard base molecule.',
  vanillin: 'The quintessential warm, sweet vanilla scent. Creamy, gourmand and comforting, with a cozy, confectionery smoothness that anchors oriental and gourmand compositions.',
  ethylVanillin: 'An intensified vanilla—3 to 5x stronger than vanillin—with a richer, more confectionery sweetness. Adds a dense, enveloping warmth to gourmand and amber bases.',
  coumarin: 'Fresh-mown hay gently sweetened by tonka bean and almond, with a warm, powdery finish. A cornerstone of fougere, chypre and oriental families.',
  sclareol: 'Amber-tobacco warmth with a balsamic, slightly green herbal facet. The natural precursor to Ambroxide from clary sage oil, prized for its amber richness.',
  benzylBenzoate: 'Very faint, slightly balsamic and almond-like. Valued less for its own scent than as a superb solvent, fixative and modifier for heavy florals.',
  calone: 'Iconic marine-watermelon note that defined the aquatic genre. Fresh, sea-breeze ozonic with a melon sweetness. Revolutionary in 1990s perfumery.',
  dihydromyrcenol: 'Fresh, clean, citrus-metallic. The quintessential fresh laundry scent; an essential building block for modern masculine and aquatic fragrances.',
  ethylMaltol: 'An ultra-intense caramel-sugar note, 4-6x stronger than maltol. Imparts a voluptuous, cotton-candy warmth to sweet oriental and gourmand blends.',
  piperonal: 'Vanilla-cherry-almond sweetness with a heliotrope-like powdery warmth. Soft, comforting and gourmand; bridges floral and edible accords.',
  betaIonone: 'Classic violet-woody character—warm, powdery, slightly cedar-like. More intense than alpha-ionone; the definitive violet-leaf impression.',
  alphaIonone: 'Warm, powdery-violet with a rose-like facet. Woodier and more diffusive than beta-ionone, bridging violet and orris accords.',
  muskKetone: 'Sweet and vintage powdery musk with a nostalgic feel of classic cosmetics and old perfumery. The cleanest member of the nitro-musk family, imparting an old-fashioned elegance. Increasingly replaced by modern musks due to environmental regulations.',
  eucalyptol: 'Fresh, penetrating eucalyptus with a slightly camphoraceous and cooling sensation. Clean and medicinal; widely used in pharma, oral care and aromatic fragrances.',
  camphor: 'Cool, sharp and medicinal, with a penetrating eucalyptus-like freshness. Unmistakable herbal bite that invigorates and clears the senses.',
  menthol: 'Intense, icy coolness with a clean peppermint character. The most universally recognized cooling molecule; widely used beyond fragrance in pharma and oral care.',
  thymol: 'Sharp, medicinal, herbal thyme character. Phenolic and warm; a powerful antiseptic note reminiscent of traditional medicines and mouthwash.',
  verbenone: 'Fresh, minty-herbaceous with a camphoraceous quality. Found in rosemary and verbena oils; adds a bright, green-medicinal character.',
  indole: 'At trace levels, a heady, narcotic white-floral note (jasmine, tuberose). At higher concentrations, fecal and animalic. A quintessential shadow molecule in florals.',
  skatole: 'At extreme dilution, a warm, animalic musk-floral character. Undiluted, intensely fecal. Essential in trace amounts for natural-smelling jasmine and orange blossom accords.',
  alphaPinene: 'Fresh pine-forest aroma with a resinous warmth and subtle herbal undertone. The main component of pine needle essential oil, evoking the scent of fireside pine and Christmas holiday memories.',
  methylSalicylate: 'Wintergreen-mint freshness with a medicinal, slightly sweet, balsamic quality. Strongly associated with ointments and oral care products.',
  benzylAcetate: 'Fresh, fruity-floral with a jasmine-like facet and peach-skin softness. Bright and diffusive; a versatile top-heart bridge in floral and fruity compositions.',
  benzylSalicylate: 'Soft, green, balsamic with a faint orchid nuance. An indispensable fixative and diffusion booster for floral and chypre compositions.',
  hexylSalicylate: 'Clean, transparent, slightly green floral with a dry-down reminiscent of green tea. A modern diffusion agent prized in sheer, aquatic and skin-scent accords.',
  damascenone: 'Rose-wine-plum complexity at extreme dilution—one of the most potent aroma chemicals known. Adds depth, richness and an aged quality to compositions.',
  alphaDamascone: 'Rich, fruity-floral: plum, rose and blackcurrant with a warm, wine-like depth. Opulent and tenacious; a prized Damascus rose character note.',
  hexylCinnamal: 'Warm, amber-jasmine note with a chamomile-like softness. Rounded and voluptuous, it bridges floral hearts into woody-amber bases.',
  lilial: 'Fresh, green lily of the valley with a watery, cyclamen-like quality. Once ubiquitous in clean, aquatic florals—now banned in the EU (2022) due to reproductive toxicity.',
  lavandulol: 'Soft herbal lavender-green floral with a fresh, slightly sweet undertone. An important component of lavender essential oil, imparting a more authentic lavender feeling than linalool alone.',
  terpineol: 'Fresh lilac-pine hybrid aroma with a slightly sweet floral character and clean undertone. A key component of lilac flower scent, also carrying a pine-like freshness. Inexpensive and versatile.',
  safranal: 'Unique saffron-hay-leather blend with a slightly bitter, medicinal undertone and metallic edge. The main aroma component of saffron, the most expensive spice in the world, exuding an opulent, Eastern palace luxury.',
  evernyl: 'A synthetic oakmoss substitute—clean, mossy-green with a woody-phenolic character. IFRA-compliant and widely used to replace natural oakmoss.',
  phenylethylAcetate: 'Rose-peach with a clean, sweet, slightly honey-like character. Softer and fruitier than phenylethyl alcohol; useful in sheer, fresh rose accords.',
  methylCinnamate: 'Warm, balsamic, fruity-cinnamon. Softer and more floral than cinnamaldehyde, with a rich, strawberry-like sweetness. Evokes wild basil.',
  rCarvone: 'Warm, spicy caraway-seed aroma with a slightly sweet, bread-like warmth. The dominant flavor molecule of caraway and dill seeds.',
  sCarvone: 'Fresh, green spearmint character—clearly distinct from its R-enantiomer. A textbook example of chiral olfaction, with a cool and leafy freshness.',
  veratraldehyde: 'Woody-vanilla warm base note, drier and more woody than vanillin. Carries a clean, musky quality with a faint floral undertone.',
  myrcene: 'Fresh, green-peppery with a hop-like balsamic quality. Earthy and herbaceous, it is a key terpene in cannabis, hops and bay.',
  anisaldehyde: 'Sweet anise-almond-hay blend with a hawthorn-like slightly cloying floral quality and powdery feel. Carries an old-fashioned dessert vintage charm.',
  undecanal: 'Waxy, clean aldehyde with a soapy citrus undertone and faint metallic sheen. An indispensable component in classic aldehyde formulas like Chanel No.5, lending a sparkling penetrating top note.',
  dodecanal: 'Waxier and fattier than C-11, with a lily of the valley-like metallic sheen and faint violet-leaf quality. A typical high-carbon aldehyde with better tenacity than lower-carbon analogs.',
  methylUndecanal: 'Waxy aldehyde with an amber-like warmth, rounder than linear aldehydes. Features a unique metallic sparkle and dry woody undertone, often paired with florals for a shimmering effect.',
  nerylAcetate: 'Sweet bergamot-neroli blend with herbal and faintly rosy undertones. Fruitier and warmer than linalyl acetate; an important component of natural neroli and bergamot essential oils.',
  citronellylAcetate: 'Fresh rose-citrus blend with a fruity, slightly sweet quality. Lighter and more fruit-forward than citronellol, providing an elegant bridge in rose and citrus formulations.',
  benzylAlcohol: 'Faint, slightly sweet floral scent with mild almond and fruity undertones. Weak as an odorant; primarily used as a solvent and fixative. Naturally present in jasmine and ylang-ylang essential oils.',
  amylcinnamal: 'Rich, jasmine-like fatty floral with a faint powdery quality and warm sweetness. Plays a skeleton role in classic floral formulations, providing a lasting floral base. Very elegant at low doses.',
  cinnamylAlcohol: 'Warm, balsamic-cinnamon with a greener, more floral character than cinnamaldehyde. Softer and less aggressive; used in delicate oriental blends.',
  bourgeonal: 'Highly lifelike lily of the valley floral with aquatic-like transparency and a slightly sweet green quality. One of the best muguet recreation molecules with exceptional diffusion.',
  triplal: 'Green, herbal, intensely fresh with a strong leaf-stem note. A powerful green aldehyde that evokes torn herbs and morning dew.',
  cisJasmone: 'Fresh jasmine floral with herbal, celery-like distinctive undertones. Together with indole it constitutes the core scent molecules of natural jasmine flower. Elegantly floral at low doses.',
  geranylAcetate: 'Rose-lavender ester with a soft, fruity sweetness. Adds a silky, green-rosy richness to floral hearts and herbal-citrus accords.',
  cis3Hexenol: 'Extremely lifelike freshly-mown grass scent with a strong green juiciness and a slightly sweet fresh-leaf quality. The quintessential green note molecule; used in virtually all green-floral compositions.',
  methylHeptenone: 'Lemongrass-like green citrus note with a faint oily quality and herbal undertone. A natural component of many essential oils that adds green freshness and vitality to formulations.',
  gammaNonalactone: 'Rich coconut-cream aroma with sweet tropical-fruit undertones and a faint beeswax quality. The core molecule for recreating coconut scent and the source of suntan lotion vacation vibes.',
  gammaOctalactone: 'Sweet, coconut-vanilla with a creamy richness. Contributes a warm, tropical lactonic dimension to gourmand compositions.',
  deltaUndecalactone: 'Sweet peach-cream scent with a powdery quality and warm skin-like character. Colloquially called peach aldehyde (though chemically a lactone); the soul molecule for skin scents and peach formulations.',
  betaCaryophyllene: 'Dry, spicy, woody, almost clove-like. A sesquiterpene found in clove and black pepper, adding spicy warmth and natural depth to compositions.',
  cedrylAcetate: 'Soft, woody-amber with a dry, clean radiance. Lighter and more diffusive than raw cedarwood, it adds transparency to woody compositions.',
  acetylCedrene: 'Warm amber-woody blend with a dry cedar undertone and faint smoky quality. Warmer and richer than cedryl acetate; an indispensable fixative in many woody-oriental formulations.',
  guaiacol: 'Smoky, phenolic, slightly sweet. Reminiscent of smoked wood and whisky barrels. Used in leather and smoky-wood accords for depth and character.',
  vetiverylAcetate: 'Elegant vetiver scent with earthy, smoky and slightly sweet woody undertones. Softer and more refined than natural vetiver essential oil, removing the overly earthy roughness.',
  habanolide: 'Elegant, powerful macrocyclic musk with a luminous, slightly fruity aura. Clean, diffusive and tenacious; one of the most celebrated musk captives from Firmenich.',
  helvetolide: 'Musky, fruity pear-like note with a light, clean diffusion. A modern Firmenich captive musk offering a unique fruity-musk facet.',
  civettone: 'Powerful, warm, animalic musk with a sweet, honeyed depth. The synthetic version of civet musk—profound tenacity and a sensual, skin-clinging quality.',
  anethole: 'Sweet, warm, unmistakable anise character. The signature molecule of anise seed, fennel and star anise; also used in licorice-flavored products.',
  estragole: 'Sweet, anise-like, herbal. Found in tarragon and basil, it provides a green, licorice-like sweetness to aromatic compositions.',
  methylEugenol: 'Warm, sweet, clove-like with a carnation facet. Smoother than eugenol; used for warm spicy nuances but now restricted due to safety concerns.',
  dihydrocoumarin: 'Sweet tonka-coconut blend with a dry hay and almond warmth. Softer and creamier than coumarin; provides sweet base notes in oriental and gourmand perfumes.',
  cinnamicAcid: 'Warm balsamic character with honey-like sweetness and a faint powdery quality. An important component of benzoin resinoid, Peru balsam and styrax, offering warm and lasting base notes.',
  benzaldehyde: 'Classic bitter-almond character—sharp, nutty and slightly cherry-like. Clean, edible and immediately recognizable.',
  maltol: 'Cotton-candy sweetness with burnt-sugar caramel nuances. A powerful sweetness enhancer that gives gourmand compositions a just-baked character.',
  furaneol: 'Ripe strawberry-caramel sweet blend with brown sugar and a faint burnt undertone. A key component of strawberry and pineapple fruit aromas; highly effective even at very low doses.',
  borneol: 'Cool, camphoraceous, piney aroma with earthy herbal undertones and a faint minty quality. An important molecule in traditional Chinese medicine and incense.',
  fenchone: 'Cool fennel-camphor blend with earthy and faintly bitter undertones. Closely associated with the bitter character of fennel and lavender essential oils, providing herbal depth to formulations.',
  terpinylAcetate: 'Fresh bergamot-pine blend with light lavender and citrus undertones. An important component of cardamom and pine needle oils, providing crisp herbal top notes.',
  quinoline: 'Sharp, rugged leather-smoky aroma with coal-tar and wet-leather undertones. One of the original leather-note molecules, requiring extremely low dosage. Unpleasant at high concentrations.',
  isobutylQuinoline: 'Smoky, leathery, slightly dirty-green. A characteristic molecule for leather accords, evoking tanned hide, tobacco and vintage libraries.',
  pCresol: 'Intense barnyard-animalic scent with stable and leather-like rugged undertones. At extremely low doses (<0.01%) it adds vitality and skin feel to formulations; excessive amounts are repulsive.',
  tropional: 'A unique fusion of marine and floral, with fresh ozonic quality and faint lily undertones. A Calone alternative that perfectly blends ocean coolness with floral softness.',
  floralozone: 'Ozonic, fresh, green-floral. A modern molecule that blends ozone freshness with a delicate floral character for aquatic compositions.',
  methylBenzoate: 'Sweet, fruity-phenolic with a faint wintergreen nuance. A light, solvent-like ester bridging floral and herbaceous tonalities in fragrance blends.',
}

// ═══════════════════════════════════════════════
// NOTE 英文翻譯 — 全部 127 筆
// ═══════════════════════════════════════════════
const NOTE_EN = {
  limonene: 'EU-listed allergen; oxidation products are sensitizing',
  citral: 'EU-listed allergen; may cause skin sensitization',
  citronellal: 'EU-listed allergen',
  decanal: 'Irritating at high concentrations',
  nonanal: 'Strong; dosage must be controlled',
  octanal: 'Very strong diffusion; use in trace amounts',
  linalylAcetate: 'Good safety profile',
  linalool: 'EU 26 listed allergen; must be disclosed on ingredient labels',
  geraniol: 'EU 26 listed allergen',
  citronellol: 'Excellent safety; commonly used as solvent alternative',
  phenylethylAlcohol: 'Extremely low threshold; use in trace amounts',
  roseOxide: 'Excellent safety; widely used as an economical ingredient',
  hedione: 'EU 26 listed allergen; skin sensitizer',
  hydroxycitronellal: 'IFRA restricted',
  helional: 'Phototoxic; care needed in skin-contact products',
  nerol: 'Extremely low threshold',
  farnesol: 'Very strong; use in trace amounts',
  methylAnthranilate: 'Safe; also has insect-repellent properties',
  phenylacetaldehyde: 'Excellent safety; economical',
  alphaIsomethylIonone: 'Natural source limited due to deforestation',
  nerolidol: 'Good safety profile; known as the king of fragrances',
  cis3HexenylAcetate: 'Good safety profile',
  transHexenal: 'Very strong; use in trace amounts',
  gammaDecalactone: 'Good safety profile',
  gammaUndecalactone: 'Good safety profile; also used in food flavoring',
  deltaDecalactone: 'Good safety profile',
  ethylButyrate: 'Good safety profile',
  isoamylAcetate: 'Good safety profile',
  nootkatone: 'Safe; FDA-approved as insect repellent',
  isoESuper: 'Natural source banned (animal protection); synthetic version is safe',
  santalol: 'Environmental persistence concerns; increased regulation in some regions',
  cedrol: 'Good safety profile',
  patchoulol: 'Similar environmental concerns as Galaxolide',
  cashmeran: 'Biodegradable; eco-friendly musk choice',
  sandalore: 'Good safety profile',
  javanol: 'Biodegradable',
  muscone: 'Natural source; good safety profile',
  galaxolide: 'EU 26 listed allergen; skin irritation possible',
  tonalide: 'EU 26 listed allergen; skin irritation at high concentrations',
  ethyleneBrassylate: 'EU 26 listed allergen; high sensitization potential',
  exaltolide: 'Biodegradable',
  ambrettolide: 'Excellent safety; eco-friendly alternative to natural ambergris',
  eugenol: 'EU 26 listed allergen',
  cinnamaldehyde: 'EU 26 listed allergen; high sensitization, strictly limited in cosmetics',
  isoeugenol: 'EU 26 listed allergen; relatively high sensitization potential',
  ambroxide: 'Excellent safety profile',
  vanillin: 'Hepatotoxic at very high oral doses; safe within perfumery usage levels',
  ethylVanillin: 'Safe; also used for scabies treatment',
  coumarin: 'Effective even at very low usage levels',
  sclareol: 'Excellent safety; a cost-effective workhorse ingredient',
  benzylBenzoate: 'Good safety profile; also used in food flavoring',
  calone: 'Controlled chemical precursor status in some countries',
  dihydromyrcenol: 'Nitro-musk; environmental concerns restrict use; banned in some countries',
  ethylMaltol: 'Good safety profile; safe for oral use in small amounts',
  piperonal: 'Neurotoxic at high oral doses; safe for dermal use',
  betaIonone: 'Good safety profile; global annual production ~30,000 tonnes',
  alphaIonone: 'Skin irritation at high concentrations',
  muskKetone: 'Nitro-musk; environmental concerns restrict use; banned in some countries',
  eucalyptol: 'Safe; however, extremely low taste threshold requires precise dosing',
  camphor: 'Safe at usage levels; pulmonary toxicity at industrial concentrations',
  menthol: 'Oxidation products may cause sensitization',
  thymol: 'Toxic if ingested; safe at fragrance concentrations',
  verbenone: 'Olfactory threshold ~0.002 ppb; extremely potent',
  indole: 'Potent ingredient; precise dosing required',
  skatole: 'EU banned in cosmetics since 2022 due to reproductive toxicity',
  alphaPinene: 'Oxidation products may cause sensitization',
  methylSalicylate: 'Natural source extremely expensive',
  benzylAcetate: 'Oakmoss substitute; good safety profile',
  benzylSalicylate: 'High-dose exposure may cause skin allergy',
  hexylSalicylate: 'Low toxicity; commonly used as cosmetic preservative',
  damascenone: 'EU listed allergen; must be declared',
  alphaDamascone: 'Dosage must be controlled',
  hexylCinnamal: 'CB2 receptor agonist; anti-inflammatory properties',
  lilial: 'EU banned in cosmetics since March 2022 due to reproductive toxicity (CMR Cat. 1B)',
  lavandulol: 'Good safety profile',
  terpineol: 'Good safety profile',
  safranal: 'Natural source extremely expensive',
  evernyl: 'Oakmoss substitute; good safety profile',
  phenylethylAcetate: 'Good safety profile',
  methylCinnamate: 'Good safety profile',
  rCarvone: 'Good safety profile',
  sCarvone: 'Good safety profile',
  veratraldehyde: 'Good safety profile',
  myrcene: 'Good safety profile',
  anisaldehyde: 'EU 26 listed allergen',
  undecanal: 'High-dose exposure may cause skin allergy',
  dodecanal: 'Good safety profile',
  methylUndecanal: 'Good safety profile',
  nerylAcetate: 'Good safety profile',
  citronellylAcetate: 'Good safety profile',
  benzylAlcohol: 'Low toxicity; commonly used as cosmetic preservative',
  amylcinnamal: 'EU listed allergen; must be declared',
  cinnamylAlcohol: 'EU 26 listed allergen',
  bourgeonal: 'Good safety profile',
  triplal: 'Good safety profile',
  cisJasmone: 'Good safety profile',
  geranylAcetate: 'Good safety profile',
  cis3Hexenol: 'Good safety profile',
  methylHeptenone: 'Good safety profile',
  gammaNonalactone: 'Good safety profile',
  gammaOctalactone: 'Good safety profile',
  deltaUndecalactone: 'Good safety profile',
  betaCaryophyllene: 'CB2 receptor agonist; anti-inflammatory properties',
  cedrylAcetate: 'Good safety profile',
  acetylCedrene: 'Good safety profile',
  guaiacol: 'Good safety profile; good biodegradability',
  vetiverylAcetate: 'Good safety profile',
  habanolide: 'Modern formulations use synthetic version',
  helvetolide: 'Large intake may be hepatotoxic',
  civettone: 'May have genotoxic potential; dosage must be controlled',
  anethole: 'IFRA strictly restricted; suspected carcinogen',
  estragole: 'Safe in small amounts; not for large-scale ingestion',
  methylEugenol: 'IFRA strictly restricted; suspected carcinogen',
  dihydrocoumarin: 'Good safety profile; GRAS certified',
  cinnamicAcid: 'EU-listed allergen',
  benzaldehyde: 'GRAS certified',
  maltol: 'Good safety profile; dosage must be controlled',
  furaneol: 'GRAS certified',
  borneol: 'Good safety profile',
  fenchone: 'Good safety profile; dosage must be controlled',
  terpinylAcetate: 'Good safety profile',
  quinoline: 'IFRA strictly restricted dosage',
  isobutylQuinoline: 'IFRA strictly restricted dosage',
  pCresol: 'Toxic at high concentrations; use only in trace amounts',
  tropional: 'Good safety profile',
  floralozone: 'Good safety profile',
  methylBenzoate: 'Dosage must be controlled',
}

// ═══════════════════════════════════════════════
// 主程式 — line-by-line 狀態機
// ═══════════════════════════════════════════════
const filePath = 'src/data/encyclopedia.js'
const lines = readFileSync(filePath, 'utf-8').split('\n')
const result = []
let currentId = null
let stats = { desc: 0, kw: 0, app: 0, ns: 0, appl: 0, ifra: 0, note: 0 }
let missing = []

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]
  const trimmed = line.trim()

  // Track current entry ID
  const idMatch = trimmed.match(/^id:\s*'([^']+)'/)
  if (idMatch) {
    currentId = idMatch[1]
  }

  // 1a. Standalone description → insert descriptionEn after
  if (currentId && trimmed.startsWith("description: '") && !trimmed.startsWith('descriptionEn')) {
    // Ensure trailing comma
    const fixedLine = line.trimEnd().endsWith(',') ? line : line.replace(/(\s*)$/, ',$1')
    result.push(fixedLine)
    if (DESC[currentId]) {
      const indent = line.match(/^\s*/)[0]
      const escaped = DESC[currentId].replace(/'/g, "\\'")
      result.push(`${indent}descriptionEn: '${escaped}',`)
      stats.desc++
    } else {
      missing.push(`DESC: ${currentId}`)
    }
    continue
  }

  // 1b. Compact scentProfile: { description: '...', ..., keywords: [...] } on one line
  if (currentId && trimmed.startsWith('scentProfile: {') && trimmed.includes("description: '") && !trimmed.includes('descriptionEn')) {
    let newLine = line
    // inject descriptionEn after description
    if (DESC[currentId]) {
      const escaped = DESC[currentId].replace(/'/g, "\\'")
      // find the end of description value: description: '...', 
      newLine = newLine.replace(
        /(description: '[^']*'),/,
        `$1, descriptionEn: '${escaped}',`
      )
      stats.desc++
    } else {
      missing.push(`DESC: ${currentId}`)
    }
    // inject keywordsEn after keywords
    const kwMatch = trimmed.match(/keywords: \[([^\]]*)\]/)
    if (kwMatch) {
      const kws = kwMatch[1].match(/'([^']*)'/g)?.map(s => s.slice(1, -1)) || []
      const kwEn = kws.map(k => {
        if (!KW[k]) missing.push(`KW: ${k} (in ${currentId})`)
        return KW[k] || k
      })
      const kwEnStr = `keywordsEn: [${kwEn.map(k => `'${k}'`).join(', ')}]`
      newLine = newLine.replace(
        /(keywords: \[[^\]]*\])\s*}/,
        `$1, ${kwEnStr} }`
      )
      stats.kw++
    }
    result.push(newLine)
    continue
  }

  // 2. Standalone keywords → insert keywordsEn after
  if (currentId && trimmed.startsWith('keywords: [') && !trimmed.startsWith('keywordsEn')) {
    // Ensure trailing comma
    const fixedLine = line.trimEnd().endsWith(',') ? line : line.replace(/(\s*)$/, ',$1')
    result.push(fixedLine)
    const kwMatch = trimmed.match(/keywords: \[([^\]]*)\]/)
    if (kwMatch) {
      const kws = kwMatch[1].match(/'([^']*)'/g)?.map(s => s.slice(1, -1)) || []
      const kwEn = kws.map(k => {
        if (!KW[k]) missing.push(`KW: ${k} (in ${currentId})`)
        return KW[k] || k
      })
      const indent = line.match(/^\s*/)[0]
      result.push(`${indent}keywordsEn: [${kwEn.map(k => `'${k}'`).join(', ')}],`)
      stats.kw++
    }
    continue
  }

  // 3. properties line → add appearanceEn inline
  if (currentId && trimmed.startsWith('properties: {') && trimmed.includes("appearance: '")) {
    const appMatch = trimmed.match(/appearance: '([^']*)'/)
    if (appMatch) {
      const zhApp = appMatch[1]
      const enApp = APP_MAP[zhApp]
      if (enApp) {
        const newLine = line.replace(
          /appearance: '([^']*)'\s*}/,
          `appearance: '${zhApp}', appearanceEn: '${enApp}' }`
        )
        result.push(newLine)
        stats.app++
      } else {
        result.push(line)
        missing.push(`APPEARANCE: ${zhApp} (in ${currentId})`)
      }
    } else {
      result.push(line)
    }
    continue
  }

  // 4. naturalSources → insert naturalSourcesEn after
  if (currentId && trimmed.startsWith('naturalSources: [')) {
    const fixedLine = line.trimEnd().endsWith(',') ? line : line.replace(/(\s*)$/, ',$1')
    result.push(fixedLine)
    const nsMatch = trimmed.match(/naturalSources: \[([^\]]*)\]/)
    if (nsMatch) {
      const nss = nsMatch[1].match(/'([^']*)'/g)?.map(s => s.slice(1, -1)) || []
      const nsEn = nss.map(n => {
        if (!NS[n]) missing.push(`NS: ${n} (in ${currentId})`)
        return NS[n] || n
      })
      const indent = line.match(/^\s*/)[0]
      result.push(`${indent}naturalSourcesEn: [${nsEn.map(n => `'${n.replace(/'/g, "\\'")}'`).join(', ')}],`)
      stats.ns++
    }
    continue
  }

  // 5a. Standalone applications → insert applicationsEn after
  if (currentId && trimmed.startsWith('applications: [')) {
    const fixedLine = line.trimEnd().endsWith(',') ? line : line.replace(/(\s*)$/, ',$1')
    result.push(fixedLine)
    const applMatch = trimmed.match(/applications: \[([^\]]*)\]/)
    if (applMatch) {
      const apps = applMatch[1].match(/'([^']*)'/g)?.map(s => s.slice(1, -1)) || []
      const appEn = apps.map(a => {
        if (!APPL[a]) missing.push(`APPL: ${a} (in ${currentId})`)
        return APPL[a] || a
      })
      const indent = line.match(/^\s*/)[0]
      result.push(`${indent}applicationsEn: [${appEn.map(a => `'${a.replace(/'/g, "\\'")}'`).join(', ')}],`)
      stats.appl++
    }
    continue
  }

  // 5b. Compact usage: { ... applications: [...] } on one line
  if (currentId && trimmed.startsWith('usage: {') && trimmed.includes('applications: [') && !trimmed.includes('applicationsEn')) {
    let newLine = line
    const applMatch = trimmed.match(/applications: \[([^\]]*)\]/)
    if (applMatch) {
      const apps = applMatch[1].match(/'([^']*)'/g)?.map(s => s.slice(1, -1)) || []
      const appEn = apps.map(a => {
        if (!APPL[a]) missing.push(`APPL: ${a} (in ${currentId})`)
        return APPL[a] || a
      })
      const appEnStr = `applicationsEn: [${appEn.map(a => `'${a.replace(/'/g, "\\'")}'`).join(', ')}]`
      newLine = newLine.replace(
        /(applications: \[[^\]]*\])\s*}/,
        `$1, ${appEnStr} }`
      )
      stats.appl++
    }
    result.push(newLine)
    continue
  }

  // 6. safety line → add ifraEn + noteEn inline
  if (currentId && trimmed.startsWith('safety: {') && trimmed.includes("ifra: '")) {
    let newLine = line
    // ifraEn
    const ifraMatch = trimmed.match(/ifra: '([^']*)'/)
    if (ifraMatch) {
      const zhIfra = ifraMatch[1]
      const enIfra = IFRA_MAP[zhIfra]
      if (enIfra) {
        newLine = newLine.replace(
          `ifra: '${zhIfra}'`,
          `ifra: '${zhIfra}', ifraEn: '${enIfra}'`
        )
        stats.ifra++
      } else {
        missing.push(`IFRA: ${zhIfra} (in ${currentId})`)
      }
    }
    // noteEn
    const noteMatch = trimmed.match(/note: '([^']*)'/)
    if (noteMatch && NOTE_EN[currentId]) {
      const zhNote = noteMatch[1]
      const escaped = NOTE_EN[currentId].replace(/'/g, "\\'")
      newLine = newLine.replace(
        /note: '([^']*)'\s*}/,
        `note: '${zhNote}', noteEn: '${escaped}' }`
      )
      stats.note++
    } else if (!NOTE_EN[currentId]) {
      missing.push(`NOTE: ${currentId}`)
    }
    result.push(newLine)
    continue
  }

  // Default: pass through
  result.push(line)
}

// Write output
writeFileSync(filePath, result.join('\n'), 'utf-8')

console.log('\n✅ Translation complete!')
console.log(`  descriptionEn: ${stats.desc}/127`)
console.log(`  keywordsEn:    ${stats.kw}/127`)
console.log(`  appearanceEn:  ${stats.app}/127`)
console.log(`  naturalSourcesEn: ${stats.ns}/127`)
console.log(`  applicationsEn:   ${stats.appl}/127`)
console.log(`  ifraEn:        ${stats.ifra}/127`)
console.log(`  noteEn:        ${stats.note}/127`)

if (missing.length > 0) {
  console.log(`\n⚠️ Missing translations (${missing.length}):`)
  missing.forEach(m => console.log(`  - ${m}`))
}
