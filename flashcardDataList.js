const radicalList = [
  { number: 1, radical: "一", variants: [], pinyin: "yī", meaning: "one", strokes: 1, numCharacters: 42 },
  { number: 2, radical: "丨", variants: [], pinyin: "gǔn", meaning: "line", strokes: 1, numCharacters: 21 },
  { number: 3, radical: "丶", variants: [], pinyin: "zhǔ", meaning: "dot", strokes: 1, numCharacters: 10 },
  { number: 4, radical: "丿", variants: [], pinyin: "piě", meaning: "slash", strokes: 1, numCharacters: 33 },
  { number: 5, radical: "乙", variants: ["⺄", "乚"], pinyin: "yǐ", meaning: "second", strokes: 1, numCharacters: 42 },
  { number: 6, radical: "亅", variants: [], pinyin: "jué", meaning: "hook", strokes: 1, numCharacters: 19 },
  { number: 7, radical: "二", variants: [], pinyin: "èr", meaning: "two", strokes: 2, numCharacters: 29 },
  { number: 8, radical: "亠", variants: [], pinyin: "tóu", meaning: "lid", strokes: 2, numCharacters: 38 },
  { number: 9, radical: "人", variants: ["亻", "𠆢"], pinyin: "rén", meaning: "man", strokes: 2, numCharacters: 794 },
  { number: 10, radical: "儿", variants: [], pinyin: "ér", meaning: "son, legs", strokes: 2, numCharacters: 52 },
  { number: 11, radical: "入", variants: [], pinyin: "rù", meaning: "enter", strokes: 2, numCharacters: 28 },
  { number: 12, radical: "八", variants: [], pinyin: "bā", meaning: "eight", strokes: 2, numCharacters: 44 },
  { number: 13, radical: "冂", variants: [], pinyin: "jiōng", meaning: "down box", strokes: 2, numCharacters: 50 },
  { number: 14, radical: "冖", variants: [], pinyin: "mì", meaning: "cover", strokes: 2, numCharacters: 30 },
  { number: 15, radical: "冫", variants: [], pinyin: "bīng", meaning: "ice", strokes: 2, numCharacters: 115 },
  { number: 16, radical: "几", variants: [], pinyin: "jī", meaning: "table", strokes: 2, numCharacters: 38 },
  { number: 17, radical: "凵", variants: [], pinyin: "qū", meaning: "open box", strokes: 2, numCharacters: 23 },
  { number: 18, radical: "刀", variants: ["刂"], pinyin: "dāo", meaning: "knife", strokes: 2, numCharacters: 377 },
  { number: 19, radical: "力", variants: [], pinyin: "lì", meaning: "power", strokes: 2, numCharacters: 163 },
  { number: 20, radical: "勹", variants: [], pinyin: "bāo", meaning: "wrap", strokes: 2, numCharacters: 64 },
  { number: 21, radical: "匕", variants: [], pinyin: "bǐ", meaning: "spoon", strokes: 2, numCharacters: 19 },
  { number: 22, radical: "匚", variants: [], pinyin: "fāng", meaning: "right open box", strokes: 2, numCharacters: 64 },
  { number: 23, radical: "匸", variants: [], pinyin: "xǐ/xì", meaning: "hiding enclosure", strokes: 2, numCharacters: 17 },
  { number: 24, radical: "十", variants: [], pinyin: "shí", meaning: "ten", strokes: 2, numCharacters: 55 },
  { number: 25, radical: "卜", variants: [], pinyin: "bǔ", meaning: "divination", strokes: 2, numCharacters: 45 },
  { number: 26, radical: "卩", variants: ["㔾"], pinyin: "jié", meaning: "seal", strokes: 2, numCharacters: 40 },
  { number: 27, radical: "厂", variants: [], pinyin: "hàn", meaning: "cliff", strokes: 2, numCharacters: 129 },
  { number: 28, radical: "厶", variants: [], pinyin: "sī", meaning: "private", strokes: 2, numCharacters: 40 },
  { number: 29, radical: "又", variants: [], pinyin: "yòu", meaning: "again", strokes: 2, numCharacters: 91 },
  { number: 30, radical: "口", variants: [], pinyin: "kǒu", meaning: "mouth", strokes: 3, numCharacters: 1146 },
  { number: 31, radical: "囗", variants: [], pinyin: "wéi", meaning: "enclosure", strokes: 3, numCharacters: 118 },
  { number: 32, radical: "土", variants: [], pinyin: "tǔ", meaning: "earth", strokes: 3, numCharacters: 580 },
  { number: 33, radical: "士", variants: [], pinyin: "shì", meaning: "scholar", strokes: 3, numCharacters: 24 },
  { number: 34, radical: "夂", variants: [], pinyin: "zhǐ", meaning: "go", strokes: 3, numCharacters: 11 },
  { number: 35, radical: "夊", variants: [], pinyin: "suī", meaning: "go slowly", strokes: 3, numCharacters: 23 },
  { number: 36, radical: "夕", variants: [], pinyin: "xī", meaning: "evening", strokes: 3, numCharacters: 34 },
  { number: 37, radical: "大", variants: [], pinyin: "dà", meaning: "big", strokes: 3, numCharacters: 132 },
  { number: 38, radical: "女", variants: [], pinyin: "nǚ", meaning: "woman", strokes: 3, numCharacters: 681 },
  { number: 39, radical: "子", variants: [], pinyin: "zǐ", meaning: "child", strokes: 3, numCharacters: 83 },
  { number: 40, radical: "宀", variants: [], pinyin: "mián", meaning: "roof", strokes: 3, numCharacters: 246 },
  { number: 41, radical: "寸", variants: [], pinyin: "cùn", meaning: "inch", strokes: 3, numCharacters: 40 },
  { number: 42, radical: "小", variants: ["⺌", "⺍"], pinyin: "xiǎo", meaning: "small", strokes: 3, numCharacters: 41 },
  { number: 43, radical: "尢", variants: ["尣"], pinyin: "wāng", meaning: "lame", strokes: 3, numCharacters: 66 },
  { number: 44, radical: "尸", variants: [], pinyin: "shī", meaning: "corpse", strokes: 3, numCharacters: 148 },
  { number: 45, radical: "屮", variants: [], pinyin: "chè", meaning: "sprout", strokes: 3, numCharacters: 38 },
  { number: 46, radical: "山", variants: [], pinyin: "shān", meaning: "mountain", strokes: 3, numCharacters: 636 },
  { number: 47, radical: "巛", variants: ["川", "巜"], pinyin: "chuān", meaning: "river", strokes: 3, numCharacters: 26 },
  { number: 48, radical: "工", variants: [], pinyin: "gōng", meaning: "work", strokes: 3, numCharacters: 17 },
  { number: 49, radical: "己", variants: [], pinyin: "jǐ", meaning: "oneself", strokes: 3, numCharacters: 20 },
  { number: 50, radical: "巾", variants: [], pinyin: "jīn", meaning: "turban", strokes: 3, numCharacters: 295 },
  { number: 51, radical: "干", variants: [], pinyin: "gān", meaning: "dry", strokes: 3, numCharacters: 9 },
  { number: 52, radical: "幺", variants: [], pinyin: "yāo", meaning: "short thread", strokes: 3, numCharacters: 50 },
  { number: 53, radical: "广", variants: [], pinyin: "guǎng", meaning: "dotted cliff", strokes: 3, numCharacters: 15 },
  { number: 54, radical: "廴", variants: [], pinyin: "yǐn", meaning: "long stride", strokes: 3, numCharacters: 9 },
  { number: 55, radical: "廾", variants: [], pinyin: "gǒng", meaning: "two hands", strokes: 3, numCharacters: 50 },
  { number: 56, radical: "弋", variants: [], pinyin: "yì", meaning: "shoot", strokes: 3, numCharacters: 15 },
  { number: 57, radical: "弓", variants: [], pinyin: "gōng", meaning: "bow", strokes: 3, numCharacters: 165 },
  { number: 58, radical: "彐", variants: ["彑"], pinyin: "jì", meaning: "snout", strokes: 3, numCharacters: 25 },
  { number: 59, radical: "彡", variants: [], pinyin: "shān", meaning: "bristle", strokes: 3, numCharacters: 62 },
  { number: 60, radical: "彳", variants: [], pinyin: "chì", meaning: "step", strokes: 3, numCharacters: 215 },
  { number: 61, radical: "心", variants: ["忄","⺗"], pinyin: "xīn", meaning: "heart", strokes: 4, numCharacters: 1115 },
  { number: 62, radical: "戈", variants: [], pinyin: "gē", meaning: "halberd", strokes: 4, numCharacters: 116 },
  { number: 63, radical: "戶", variants: ["户","戸"], pinyin: "hù", meaning: "door", strokes: 4, numCharacters: 44 },
  { number: 64, radical: "手", variants: ["扌","龵"], pinyin: "shǒu", meaning: "hand", strokes: 4, numCharacters: 1203 },
  { number: 65, radical: "支", variants: [], pinyin: "zhī", meaning: "branch", strokes: 4, numCharacters: 26 },
  { number: 66, radical: "攴", variants: ["攵"], pinyin: "pū", meaning: "rap", strokes: 4, numCharacters: 296 },
  { number: 67, radical: "文", variants: [], pinyin: "wén", meaning: "script", strokes: 4, numCharacters: 26 },
  { number: 68, radical: "斗", variants: [], pinyin: "dǒu", meaning: "dipper", strokes: 4, numCharacters: 32 },
  { number: 69, radical: "斤", variants: [], pinyin: "jīn", meaning: "axe", strokes: 4, numCharacters: 55 },
  { number: 70, radical: "方", variants: [], pinyin: "fāng", meaning: "square", strokes: 4, numCharacters: 92 },
  { number: 71, radical: "无", variants: ["旡"], pinyin: "wú", meaning: "not", strokes: 4, numCharacters: 12 },
  { number: 72, radical: "日", variants: [], pinyin: "rì", meaning: "sun", strokes: 4, numCharacters: 453 },
  { number: 73, radical: "曰", variants: [], pinyin: "yuē", meaning: "say", strokes: 4, numCharacters: 37 },
  { number: 74, radical: "月", variants: [], pinyin: "yuè", meaning: "moon", strokes: 4, numCharacters: 69 },
  { number: 75, radical: "木", variants: [], pinyin: "mù", meaning: "tree", strokes: 4, numCharacters: 1369 },
  { number: 76, radical: "欠", variants: [], pinyin: "qiàn", meaning: "lack", strokes: 4, numCharacters: 235 },
  { number: 77, radical: "止", variants: [], pinyin: "zhǐ", meaning: "stop", strokes: 4, numCharacters: 99 },
  { number: 78, radical: "歹", variants: ["歺"], pinyin: "dǎi", meaning: "death", strokes: 4, numCharacters: 231 },
  { number: 79, radical: "殳", variants: [], pinyin: "shū", meaning: "weapon", strokes: 4, numCharacters: 93 },
  { number: 80, radical: "毋", variants: ["母", "⺟"], pinyin: "wú", meaning: "do not", strokes: 4, numCharacters: 16 },
  { number: 81, radical: "比", variants: [], pinyin: "bǐ", meaning: "compare", strokes: 4, numCharacters: 21 },
  { number: 82, radical: "毛", variants: [], pinyin: "máo", meaning: "fur", strokes: 4, numCharacters: 211 },
  { number: 83, radical: "氏", variants: [], pinyin: "shì", meaning: "clan", strokes: 4, numCharacters: 10 },
  { number: 84, radical: "气", variants: [], pinyin: "qì", meaning: "steam", strokes: 4, numCharacters: 17 },
  { number: 85, radical: "水", variants: ["氺", "氵"], pinyin: "shuǐ", meaning: "water", strokes: 4, numCharacters: 1595 },
  { number: 86, radical: "火", variants: ["灬"], pinyin: "huǒ", meaning: "fire", strokes: 4, numCharacters: 639 },
  { number: 87, radical: "爪", variants: ["爫"], pinyin: "zhǎo", meaning: "claw", strokes: 4, numCharacters: 36 },
  { number: 88, radical: "父", variants: [], pinyin: "fù", meaning: "father", strokes: 4, numCharacters: 10 },
  { number: 89, radical: "爻", variants: [], pinyin: "yáo", meaning: "double x", strokes: 4, numCharacters: 16 },
  { number: 90, radical: "爿", variants: ["丬"], pinyin: "qiáng", meaning: "half tree trunk", strokes: 4, numCharacters: 48 },
  { number: 91, radical: "片", variants: [], pinyin: "piàn", meaning: "slice", strokes: 4, numCharacters: 77 },
  { number: 92, radical: "牙", variants: [], pinyin: "yá", meaning: "fang", strokes: 4, numCharacters: 9 },
  { number: 93, radical: "牛", variants: ["牜", "⺧"], pinyin: "niú", meaning: "cow", strokes: 4, numCharacters: 233 },
  { number: 94, radical: "犬", variants: ["犭"], pinyin: "quǎn", meaning: "dog", strokes: 4, numCharacters: 444 },
  { number: 95, radical: "玄", variants: [], pinyin: "xuán", meaning: "profound", strokes: 5, numCharacters: 6 },
  { number: 96, radical: "玉", variants: ["玊", "王", "⺩"], pinyin: "yù", meaning: "jade", strokes: 5, numCharacters: 473 },
  { number: 97, radical: "瓜", variants: [], pinyin: "guā", meaning: "melon", strokes: 5, numCharacters: 55 },
  { number: 98, radical: "瓦", variants: [], pinyin: "wǎ", meaning: "tile", strokes: 5, numCharacters: 174 },
  { number: 99, radical: "甘", variants: [], pinyin: "gān", meaning: "sweet", strokes: 5, numCharacters: 22 },
  { number: 100, radical: "生", variants: [], pinyin: "shēng", meaning: "life", strokes: 5, numCharacters: 22 },
  { number: 101, radical: "用", variants: [], pinyin: "yòng", meaning: "use", strokes: 5, numCharacters: 10 },
  { number: 102, radical: "田", variants: [], pinyin: "tián", meaning: "field", strokes: 5, numCharacters: 192 },
  { number: 103, radical: "疋", variants: ["⺪"], pinyin: "pǐ", meaning: "bolt of cloth", strokes: 5, numCharacters: 15 },
  { number: 104, radical: "疒", variants: [], pinyin: "nè", meaning: "sickness", strokes: 5, numCharacters: 526 },
  { number: 105, radical: "癶", variants: [], pinyin: "bō", meaning: "dotted tent, legs", strokes: 5, numCharacters: 15 },
  { number: 106, radical: "白", variants: [], pinyin: "bái", meaning: "white", strokes: 5, numCharacters: 109 },
  { number: 107, radical: "皮", variants: [], pinyin: "pí", meaning: "skin", strokes: 5, numCharacters: 94 },
  { number: 108, radical: "皿", variants: [], pinyin: "mǐn", meaning: "dish", strokes: 5, numCharacters: 129 },
  { number: 109, radical: "目", variants: [], pinyin: "mù", meaning: "eye", strokes: 5, numCharacters: 647 },
  { number: 110, radical: "矛", variants: [], pinyin: "máo", meaning: "spear", strokes: 5, numCharacters: 65 },
  { number: 111, radical: "矢", variants: [], pinyin: "shǐ", meaning: "arrow", strokes: 5, numCharacters: 64 },
  { number: 112, radical: "石", variants: [], pinyin: "shí", meaning: "stone", strokes: 5, numCharacters: 499 },
  { number: 113, radical: "示", variants: ["礻"], pinyin: "shì", meaning: "spirit", strokes: 5, numCharacters: 213 },
  { number: 114, radical: "禸", variants: [], pinyin: "róu", meaning: "track", strokes: 5, numCharacters: 12 },
  { number: 115, radical: "禾", variants: [], pinyin: "hé", meaning: "grain", strokes: 5, numCharacters: 431 },
  { number: 116, radical: "穴", variants: [], pinyin: "xué", meaning: "cave", strokes: 5, numCharacters: 298 },
  { number: 117, radical: "立", variants: [], pinyin: "lì", meaning: "stand", strokes: 5, numCharacters: 101 },
  { number: 118, radical: "竹", variants: ["⺮"], pinyin: "zhú", meaning: "bamboo", strokes: 6, numCharacters: 953 },
  { number: 119, radical: "米", variants: [], pinyin: "mǐ", meaning: "rice", strokes: 6, numCharacters: 318 },
  { number: 120, radical: "糸", variants: ["糹","纟"], pinyin: "mì", meaning: "silk", strokes: 6, numCharacters: 823 },
  { number: 121, radical: "缶", variants: [], pinyin: "fǒu", meaning: "jar", strokes: 6, numCharacters: 77 },
  { number: 122, radical: "网", variants: ["罒", "⺲", "罓", "⺳"], pinyin: "wǎng", meaning: "net", strokes: 6, numCharacters: 163 },
  { number: 123, radical: "羊", variants: ["⺶","⺷"], pinyin: "yáng", meaning: "sheep", strokes: 6, numCharacters: 156 },
  { number: 124, radical: "羽", variants: [], pinyin: "yǔ", meaning: "feather", strokes: 6, numCharacters: 220 },
  { number: 125, radical: "老", variants: ["耂"], pinyin: "lǎo", meaning: "old", strokes: 6, numCharacters: 22 },
  { number: 126, radical: "而", variants: [], pinyin: "ér", meaning: "and", strokes: 6, numCharacters: 22 },
  { number: 127, radical: "耒", variants: [], pinyin: "lěi", meaning: "plow", strokes: 6, numCharacters: 84 },
  { number: 128, radical: "耳", variants: [], pinyin: "ěr", meaning: "ear", strokes: 6, numCharacters: 172 },
  { number: 129, radical: "聿", variants: ["⺻"], pinyin: "yù", meaning: "brush", strokes: 6, numCharacters: 19 },
  { number: 130, radical: "肉", variants: ["⺼"], pinyin: "ròu", meaning: "meat", strokes: 6, numCharacters: 674 },
  { number: 131, radical: "臣", variants: [], pinyin: "chén", meaning: "minister", strokes: 6, numCharacters: 16 },
  { number: 132, radical: "自", variants: [], pinyin: "zì", meaning: "self", strokes: 6, numCharacters: 34 },
  { number: 133, radical: "至", variants: [], pinyin: "zhì", meaning: "arrive", strokes: 6, numCharacters: 24 },
  { number: 134, radical: "臼", variants: [], pinyin: "jiù", meaning: "mortar", strokes: 6, numCharacters: 71 },
  { number: 135, radical: "舌", variants: [], pinyin: "shé", meaning: "tongue", strokes: 6, numCharacters: 31 },
  { number: 136, radical: "舛", variants: [], pinyin: "chuǎn", meaning: "oppose", strokes: 6, numCharacters: 10 },
  { number: 137, radical: "舟", variants: [], pinyin: "zhōu", meaning: "boat", strokes: 6, numCharacters: 197 },
  { number: 138, radical: "艮", variants: [], pinyin: "gēn", meaning: "stopping", strokes: 6, numCharacters: 5 },
  { number: 139, radical: "色", variants: [], pinyin: "sè", meaning: "color", strokes: 6, numCharacters: 21 },
  { number: 140, radical: "艸", variants: ["艹"], pinyin: "cǎo", meaning: "grass", strokes: 6, numCharacters: 1902 },
  { number: 141, radical: "虍", variants: [], pinyin: "hū", meaning: "tiger", strokes: 6, numCharacters: 114 },
  { number: 142, radical: "虫", variants: [], pinyin: "huǐ", meaning: "insect", strokes: 6, numCharacters: 1067 },
  { number: 143, radical: "血", variants: [], pinyin: "xuè", meaning: "blood", strokes: 6, numCharacters: 60 },
  { number: 144, radical: "行", variants: [], pinyin: "xíng", meaning: "walk enclosure", strokes: 6, numCharacters: 53 },
  { number: 145, radical: "衣", variants: ["衤"], pinyin: "yī", meaning: "clothes", strokes: 6, numCharacters: 607 },
  { number: 146, radical: "襾", variants: ["西","覀"], pinyin: "xī", meaning: "west", strokes: 6, numCharacters: 29 },
  { number: 147, radical: "見", variants: ["见"], pinyin: "jiàn", meaning: "see", strokes: 7, numCharacters: 161 },
  { number: 148, radical: "角", variants: [], pinyin: "jiǎo", meaning: "horn", strokes: 7, numCharacters: 158 },
  { number: 149, radical: "言", variants: ["訁", "讠"], pinyin: "yán", meaning: "speech", strokes: 7, numCharacters: 861 },
  { number: 150, radical: "谷", variants: [], pinyin: "gǔ", meaning: "valley", strokes: 7, numCharacters: 54 },
  { number: 151, radical: "豆", variants: [], pinyin: "dòu", meaning: "bean", strokes: 7, numCharacters: 68 },
  { number: 152, radical: "豕", variants: [], pinyin: "shǐ", meaning: "pig", strokes: 7, numCharacters: 148 },
  { number: 153, radical: "豸", variants: [], pinyin: "zhì", meaning: "badger", strokes: 7, numCharacters: 140 },
  { number: 154, radical: "貝", variants: ["贝"], pinyin: "bèi", meaning: "shell", strokes: 7, numCharacters: 277 },
  { number: 155, radical: "赤", variants: [], pinyin: "chì", meaning: "red", strokes: 7, numCharacters: 31 },
  { number: 156, radical: "走", variants: ["赱"], pinyin: "zǒu", meaning: "run", strokes: 7, numCharacters: 285 },
  { number: 157, radical: "足", variants: ["⻊"], pinyin: "zú", meaning: "foot", strokes: 7, numCharacters: 580 },
  { number: 158, radical: "身", variants: [], pinyin: "shēn", meaning: "body", strokes: 7, numCharacters: 97 },
  { number: 159, radical: "車", variants: ["车"], pinyin: "chē", meaning: "cart", strokes: 7, numCharacters: 361 },
  { number: 160, radical: "辛", variants: [], pinyin: "xīn", meaning: "bitter", strokes: 7, numCharacters: 36 },
  { number: 161, radical: "辰", variants: [], pinyin: "chén", meaning: "morning", strokes: 7, numCharacters: 15 },
  { number: 162, radical: "辵", variants: ["辶", "⻌", "⻍"], pinyin: "chuò", meaning: "walk", strokes: 7, numCharacters: 381 },
  { number: 163, radical: "邑", variants: ["阝", "⻏", "⻖"], pinyin: "yì", meaning: "city", strokes: 7, numCharacters: 350 },
  { number: 164, radical: "酉", variants: [], pinyin: "yǒu", meaning: "wine", strokes: 7, numCharacters: 290 },
  { number: 165, radical: "釆", variants: [], pinyin: "biàn", meaning: "distinguish", strokes: 7, numCharacters: 14 },
  { number: 166, radical: "里", variants: [], pinyin: "lǐ", meaning: "village", strokes: 7, numCharacters: 14 },
  { number: 167, radical: "金", variants: ["釒", "钅"], pinyin: "jīn", meaning: "gold", strokes: 8, numCharacters: 806 },
  { number: 168, radical: "長", variants: ["镸", "长"], pinyin: "cháng", meaning: "long", strokes: 8, numCharacters: 55 },
  { number: 169, radical: "門", variants: ["门"], pinyin: "mén", meaning: "gate", strokes: 8, numCharacters: 246 },
  { number: 170, radical: "阜", variants: ["阝"], pinyin: "fù", meaning: "mound", strokes: 8, numCharacters: 348 },
  { number: 171, radical: "隶", variants: [], pinyin: "lì", meaning: "slave", strokes: 8, numCharacters: 12 },
  { number: 172, radical: "隹", variants: [], pinyin: "zhuī", meaning: "short-tailed bird", strokes: 8, numCharacters: 233 },
  { number: 173, radical: "雨", variants: [], pinyin: "yǔ", meaning: "rain", strokes: 8, numCharacters: 298 },
  { number: 174, radical: "青", variants: ["靑"], pinyin: "qīng", meaning: "blue", strokes: 8, numCharacters: 17 },
  { number: 175, radical: "非", variants: [], pinyin: "fēi", meaning: "wrong", strokes: 8, numCharacters: 25 },
  { number: 176, radical: "面", variants: ["靣"], pinyin: "miàn", meaning: "face", strokes: 9, numCharacters: 66 },
  { number: 177, radical: "革", variants: [], pinyin: "gé", meaning: "leather", strokes: 9, numCharacters: 305 },
  { number: 178, radical: "韋", variants: ["韦"], pinyin: "wéi", meaning: "tanned leather", strokes: 9, numCharacters: 100 },
  { number: 179, radical: "韭", variants: [], pinyin: "jiǔ", meaning: "leek", strokes: 9, numCharacters: 20 },
  { number: 180, radical: "音", variants: [], pinyin: "yīn", meaning: "sound", strokes: 9, numCharacters: 43 },
  { number: 181, radical: "頁", variants: ["页"], pinyin: "yè", meaning: "leaf", strokes: 9, numCharacters: 372 },
  { number: 182, radical: "風", variants: ["𠘨", "风"], pinyin: "fēng", meaning: "wind", strokes: 9, numCharacters: 182 },
  { number: 183, radical: "飛", variants: ["飞"], pinyin: "fēi", meaning: "fly", strokes: 9, numCharacters: 92 },
  { number: 184, radical: "食", variants: ["飠", "饣"], pinyin: "shí", meaning: "eat", strokes: 9, numCharacters: 403 },
  { number: 185, radical: "首", variants: [], pinyin: "shǒu", meaning: "head", strokes: 9, numCharacters: 20 },
  { number: 186, radical: "香", variants: [], pinyin: "xiāng", meaning: "fragrant", strokes: 9, numCharacters: 37 },
  { number: 187, radical: "馬", variants: ["马"], pinyin: "mǎ", meaning: "horse", strokes: 10, numCharacters: 472 },
  { number: 188, radical: "骨", variants: [], pinyin: "gǔ", meaning: "bone", strokes: 10, numCharacters: 185 },
  { number: 189, radical: "高", variants: ["髙"], pinyin: "gāo", meaning: "tall", strokes: 10, numCharacters: 34 },
  { number: 190, radical: "髟", variants: [], pinyin: "biāo", meaning: "hair", strokes: 10, numCharacters: 243 },
  { number: 191, radical: "鬥", variants: [], pinyin: "dòu", meaning: "fight", strokes: 10, numCharacters: 23 },
  { number: 192, radical: "鬯", variants: [], pinyin: "chàng", meaning: "sacrificial wine", strokes: 10, numCharacters: 8 },
  { number: 193, radical: "鬲", variants: [], pinyin: "lì", meaning: "cauldron", strokes: 10, numCharacters: 73 },
  { number: 194, radical: "鬼", variants: [], pinyin: "guǐ", meaning: "ghost", strokes: 10, numCharacters: 141 },
  { number: 195, radical: "魚", variants: ["鱼"], pinyin: "yú", meaning: "fish", strokes: 11, numCharacters: 571 },
  { number: 196, radical: "鳥", variants: ["鸟"], pinyin: "niǎo", meaning: "bird", strokes: 11, numCharacters: 750 },
  { number: 197, radical: "鹵", variants: ["卤"], pinyin: "lǔ", meaning: "salt", strokes: 11, numCharacters: 44 },
  { number: 198, radical: "鹿", variants: [], pinyin: "lù", meaning: "deer", strokes: 11, numCharacters: 104 },
  { number: 199, radical: "麥", variants: ["麦"], pinyin: "mài", meaning: "wheat", strokes: 11, numCharacters: 131 },
  { number: 200, radical: "麻", variants: [], pinyin: "má", meaning: "hemp", strokes: 11, numCharacters: 34 },
  { number: 201, radical: "黃", variants: [], pinyin: "huáng", meaning: "yellow", strokes: 12, numCharacters: 42 },
  { number: 202, radical: "黍", variants: [], pinyin: "shǔ", meaning: "millet", strokes: 12, numCharacters: 46 },
  { number: 203, radical: "黑", variants: [], pinyin: "hēi", meaning: "black", strokes: 12, numCharacters: 172 },
  { number: 204, radical: "黹", variants: [], pinyin: "zhǐ", meaning: "embroidery", strokes: 12, numCharacters: 8 },
  { number: 205, radical: "黽", variants: ["黾"], pinyin: "mǐn", meaning: "frog", strokes: 13, numCharacters: 40 },
  { number: 206, radical: "鼎", variants: [], pinyin: "dǐng", meaning: "tripod", strokes: 13, numCharacters: 14 },
  { number: 207, radical: "鼓", variants: [], pinyin: "gǔ", meaning: "drum", strokes: 13, numCharacters: 46 },
  { number: 208, radical: "鼠", variants: [], pinyin: "shǔ", meaning: "rat", strokes: 13, numCharacters: 92 },
  { number: 209, radical: "鼻", variants: [], pinyin: "bí", meaning: "nose", strokes: 14, numCharacters: 49 },
  { number: 210, radical: "齊", variants: ["齐"], pinyin: "qí", meaning: "even", strokes: 14, numCharacters: 18 },
  { number: 211, radical: "齒", variants: ["齿"], pinyin: "chǐ", meaning: "tooth", strokes: 15, numCharacters: 162 },
  { number: 212, radical: "龍", variants: ["龙"], pinyin: "lóng", meaning: "dragon", strokes: 16, numCharacters: 14 },
  { number: 213, radical: "龜", variants: ["龟"], pinyin: "guī", meaning: "turtle", strokes: 16, numCharacters: 24 },
  { number: 214, radical: "龠", variants: [], pinyin: "yuè", meaning: "flute", strokes: 17, numCharacters: 19 }
];

const flashCardDataList = [
      { traditional: "的", simplified: "的", pinyin: "de", definition: "possessive, adjectival suffix", radicals: "白", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1155", frequencyRank: 1 },
      { traditional: "一", simplified: "一", pinyin: "yī", definition: "one; a, an; alone", radicals: "一", strokeCount: 1, hskLevel: 1, generalStandardNumber: "0001", frequencyRank: 2 },
      { traditional: "是", simplified: "是", pinyin: "shì", definition: "indeed, yes, right; to be; demonstrative pronoun, this, that", radicals: "日", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1479", frequencyRank: 3 },
      { traditional: "不", simplified: "不", pinyin: "bù", definition: "no, not; un-; negative prefix", radicals: "一", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0091", frequencyRank: 4 },
      { traditional: "了", simplified: "了", pinyin: "le", definition: "to finish; particle of completed action", radicals: "亅", strokeCount: 2, hskLevel: 1, generalStandardNumber: "0017", frequencyRank: 5 },
      { traditional: "在", simplified: "在", pinyin: "zài", definition: "be at, in, on; consist in, rest", radicals: "土", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0388", frequencyRank: 6 },
      { traditional: "人", simplified: "人", pinyin: "rén", definition: "man; people; mankind; someone else", radicals: "人", strokeCount: 2, hskLevel: 1, generalStandardNumber: "0010", frequencyRank: 7 },
      { traditional: "有", simplified: "有", pinyin: "yǒu", definition: "have, own, possess; exist", radicals: "月", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0390", frequencyRank: 8 },
      { traditional: "我", simplified: "我", pinyin: "wǒ", definition: "our, us, i, me, my, we", radicals: "戈", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0761", frequencyRank: 9 },
      { traditional: "他", simplified: "他", pinyin: "tā", definition: "other, another; he, she, it", radicals: "人", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0277", frequencyRank: 10 },
      { traditional: "这", simplified: "这", pinyin: "zhè", definition: "this, the, here", radicals: "辵", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0837", frequencyRank: 11 },
      { traditional: "个", simplified: "个", pinyin: "gè", definition: "numerary adjunct, piece; single", radicals: "丨", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0045", frequencyRank: 12 },
      { traditional: "们", simplified: "们", pinyin: "men", definition: "adjunct pronoun indicate plural", radicals: "人", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0273", frequencyRank: 13 },
      { traditional: "中", simplified: "中", pinyin: "zhōng", definition: "central; center, middle; in the midst of; hit (target); attain", radicals: "丨", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0113", frequencyRank: 14 },
      { traditional: "来", simplified: "来", pinyin: "lái", definition: "come, coming; return, returning", radicals: "木", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0707", frequencyRank: 15 },
      { traditional: "上", simplified: "上", pinyin: "shàng", definition: "top; superior, highest; go up, send up", radicals: "一", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0036", frequencyRank: 16 },
      { traditional: "大", simplified: "大", pinyin: "dà", definition: "big, great, vast, large, high", radicals: "大", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0032", frequencyRank: 17 },
      { traditional: "为", simplified: "为", pinyin: "wèi", definition: "do, handle, govern, act; be", radicals: "丶", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0165", frequencyRank: 18 },
      { traditional: "和", simplified: "和", pinyin: "hé", definition: "harmony, peace; peaceful, calm", radicals: "口", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1131", frequencyRank: 19 },
      { traditional: "国", simplified: "国", pinyin: "guó", definition: "nation, country, nation-state", radicals: "囗", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1081", frequencyRank: 20 },
      { traditional: "地", simplified: "地", pinyin: "de", definition: "earth; soil, ground; region", radicals: "土", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0366", frequencyRank: 21 },
      { traditional: "到", simplified: "到", pinyin: "dào", definition: "go to, arrive, been to", radicals: "刀", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1063", frequencyRank: 22 },
      { traditional: "以", simplified: "以", pinyin: "yǐ", definition: "by means of; thereby, therefore; consider as; in order to", radicals: "人", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0182", frequencyRank: 23 },
      { traditional: "说", simplified: "说", pinyin: "shuō", definition: "speak, say, talk; scold, upbraid", radicals: "言", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1717", frequencyRank: 24 },
      { traditional: "时", simplified: "时", pinyin: "shí", definition: "time, season; era, age, period", radicals: "日", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0717", frequencyRank: 25 },
      { traditional: "要", simplified: "要", pinyin: "yào", definition: "necessary, essential; necessity", radicals: "襾", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1441", frequencyRank: 26 },
      { traditional: "就", simplified: "就", pinyin: "jiù", definition: "just, simply; to come, go to; to approach, near", radicals: "尢", strokeCount: 12, hskLevel: 2, generalStandardNumber: "2728", frequencyRank: 27 },
      { traditional: "出", simplified: "出", pinyin: "chū", definition: "go out, send out; stand; produce", radicals: "凵", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0330", frequencyRank: 28 },
      { traditional: "会", simplified: "会", pinyin: "huì", definition: "assemble, meet together; meeting", radicals: "人", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0486", frequencyRank: 29 },
      { traditional: "可", simplified: "可", pinyin: "kě", definition: "may, can, -able; possibly", radicals: "口", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0212", frequencyRank: 30 },
      { traditional: "也", simplified: "也", pinyin: "yě", definition: "also; classical final particle of strong affirmation or identity", radicals: "乙", strokeCount: 3, hskLevel: 2, generalStandardNumber: "0066", frequencyRank: 31 },
      { traditional: "你", simplified: "你", pinyin: "nǐ", definition: "you, second person pronoun", radicals: "人", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0782", frequencyRank: 32 },
      { traditional: "对", simplified: "对", pinyin: "duì", definition: "correct, right; facing, opposed", radicals: "寸", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0341", frequencyRank: 33 },
      { traditional: "生", simplified: "生", pinyin: "shēng", definition: "life, living, lifetime; birth", radicals: "生", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0263", frequencyRank: 34 },
      { traditional: "能", simplified: "能", pinyin: "néng", definition: "to be able; can, permitted to; ability", radicals: "肉", strokeCount: 10, hskLevel: 1, generalStandardNumber: "2146", frequencyRank: 35 },
      { traditional: "而", simplified: "而", pinyin: "ér", definition: "and; and then; and yet; but", radicals: "而", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0392", frequencyRank: 36 },
      { traditional: "子", simplified: "子", pinyin: "zi", definition: "offspring, child; fruit, seed of; 1st terrestrial branch", radicals: "子", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0064", frequencyRank: 37 },
      { traditional: "那", simplified: "那", pinyin: "nà", definition: "that, that one, those", radicals: "邑", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0564", frequencyRank: 38 },
      { traditional: "得", simplified: "得", pinyin: "dé", definition: "obtain, get, gain, acquire", radicals: "彳", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2341", frequencyRank: 39 },
      { traditional: "于", simplified: "于", pinyin: "yú", definition: "in, on, at; go to; surname", radicals: "二", strokeCount: 3, hskLevel: 3, generalStandardNumber: "0024", frequencyRank: 40 },
      { traditional: "着", simplified: "着", pinyin: "zhe", definition: "make move, take action", radicals: "目", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2398", frequencyRank: 41 },
      { traditional: "下", simplified: "下", pinyin: "xià", definition: "under, underneath, below; down; inferior; bring down", radicals: "一", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0030", frequencyRank: 42 },
      { traditional: "自", simplified: "自", pinyin: "zì", definition: "self, private, personal; from", radicals: "自", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0477", frequencyRank: 43 },
      { traditional: "之", simplified: "之", pinyin: "zhī", definition: "marks preceding phrase as modifier of following phrase; it, him her, them; go to", radicals: "丿", strokeCount: 3, hskLevel: 4, generalStandardNumber: "0058", frequencyRank: 44 },
      { traditional: "年", simplified: "年", pinyin: "nián", definition: "year", radicals: "干", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0444", frequencyRank: 45 },
      { traditional: "过", simplified: "过", pinyin: "guò", definition: "pass, pass through, go across", radicals: "辵", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0379", frequencyRank: 46 },
      { traditional: "发", simplified: "发", pinyin: "fā", definition: "issue, dispatch, send out; hair", radicals: "又", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0339", frequencyRank: 47 },
      { traditional: "后", simplified: "后", pinyin: "hòu", definition: "queen, empress, sovereign; (simp. for 後) behind, rear, after", radicals: "口", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0482", frequencyRank: 48 },
      { traditional: "作", simplified: "作", pinyin: "zuò", definition: "make; work; compose, write; act, perform", radicals: "人", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0777", frequencyRank: 49 },
      { traditional: "里", simplified: "里", pinyin: "lǐ", definition: "unit of distance; village; lane", radicals: "里", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0721", frequencyRank: 50 },
      { traditional: "用", simplified: "用", pinyin: "yòng", definition: "use, employ, apply, operate; use", radicals: "用", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0283", frequencyRank: 51 },
      { traditional: "道", simplified: "道", pinyin: "dào", definition: "path, road, street; method, way", radicals: "辵", strokeCount: 12, hskLevel: 2, generalStandardNumber: "2745", frequencyRank: 52 },
      { traditional: "行", simplified: "行", pinyin: "xíng", definition: "go; walk; move, travel; circulate", radicals: "行", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0483", frequencyRank: 53 },
      { traditional: "所", simplified: "所", pinyin: "suǒ", definition: "place, location; numerary adjunct", radicals: "戶", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1164", frequencyRank: 54 },
      { traditional: "然", simplified: "然", pinyin: "rán", definition: "yes, certainly; pledge, promise", radicals: "火", strokeCount: 12, hskLevel: 2, generalStandardNumber: "2723", frequencyRank: 55 },
      { traditional: "家", simplified: "家", pinyin: "jiā", definition: "house, home, residence; family", radicals: "宀", strokeCount: 10, hskLevel: 1, generalStandardNumber: "2099", frequencyRank: 56 },
      { traditional: "种", simplified: "种", pinyin: "zhǒng", definition: "seed; race, breed; to plant", radicals: "禾", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1549", frequencyRank: 57 },
      { traditional: "事", simplified: "事", pinyin: "shì", definition: "affair, matter, business; to serve; accident, incident", radicals: "亅", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1038", frequencyRank: 58 },
      { traditional: "成", simplified: "成", pinyin: "chéng", definition: "completed, finished, fixed", radicals: "戈", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0401", frequencyRank: 59 },
      { traditional: "方", simplified: "方", pinyin: "fāng", definition: "a square, rectangle; a region; local", radicals: "方", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0163", frequencyRank: 60 },
      { traditional: "多", simplified: "多", pinyin: "duō", definition: "much, many; more than, over", radicals: "夕", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0507", frequencyRank: 61 },
      { traditional: "经", simplified: "经", pinyin: "jīng", definition: "classic works; pass through", radicals: "糸", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1350", frequencyRank: 62 },
      { traditional: "么", simplified: "么", pinyin: "me", definition: "interrogative particle; repetition of a tune small; tender", radicals: "丿", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0048", frequencyRank: 63 },
      { traditional: "去", simplified: "去", pinyin: "qù", definition: "go away, leave, depart", radicals: "厶", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0204", frequencyRank: 64 },
      { traditional: "法", simplified: "法", pinyin: "fǎ", definition: "law, rule, regulation, statute; France, French", radicals: "水", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1241", frequencyRank: 65 },
      { traditional: "学", simplified: "学", pinyin: "xué", definition: "learning, knowledge; school", radicals: "子", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1273", frequencyRank: 66 },
      { traditional: "如", simplified: "如", pinyin: "rú", definition: "if, supposing; as if; like, as", radicals: "女", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0578", frequencyRank: 67 },
      { traditional: "都", simplified: "都", pinyin: "dōu", definition: "metropolis, capital; all, the whole; elegant, refined", radicals: "邑", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1801", frequencyRank: 68 },
      { traditional: "同", simplified: "同", pinyin: "tóng", definition: "same, similar; together with", radicals: "口", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0427", frequencyRank: 69 },
      { traditional: "现", simplified: "现", pinyin: "xiàn", definition: "appear, manifest, become visible", radicals: "玉", strokeCount: 8, hskLevel: 1, generalStandardNumber: "0949", frequencyRank: 70 },
      { traditional: "当", simplified: "当", pinyin: "dāng", definition: "bear, accept, undertake; just", radicals: "小", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0418", frequencyRank: 71 },
      { traditional: "没", simplified: "没", pinyin: "méi", definition: "not, have not, none; drown, sink", radicals: "水", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0867", frequencyRank: 72 },
      { traditional: "动", simplified: "动", pinyin: "dòng", definition: "move, happen; movement, action", radicals: "力", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0353", frequencyRank: 73 },
      { traditional: "面", simplified: "面", pinyin: "miàn", definition: "face; surface; plane; side, dimension", radicals: "面", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1455", frequencyRank: 74 },
      { traditional: "起", simplified: "起", pinyin: "qǐ", definition: "rise, stand up; go up; begin", radicals: "走", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1789", frequencyRank: 75 },
      { traditional: "看", simplified: "看", pinyin: "kàn", definition: "look, see; examine, scrutinize", radicals: "目", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1539", frequencyRank: 76 },
      { traditional: "定", simplified: "定", pinyin: "dìng", definition: "decide, settle, fix", radicals: "宀", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1276", frequencyRank: 77 },
      { traditional: "天", simplified: "天", pinyin: "tiān", definition: "sky, heaven; god, celestial", radicals: "大", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0078", frequencyRank: 78 },
      { traditional: "分", simplified: "分", pinyin: "fēn", definition: "divide; small unit of time etc.", radicals: "刀", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0146", frequencyRank: 79 },
      { traditional: "还", simplified: "还", pinyin: "hái", definition: "still, yet, also, besides", radicals: "辵", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0704", frequencyRank: 80 },
      { traditional: "进", simplified: "进", pinyin: "jìn", definition: "advance, make progress, enter", radicals: "辵", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0605", frequencyRank: 81 },
      { traditional: "好", simplified: "好", pinyin: "hǎo", definition: "good, excellent, fine; well", radicals: "女", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0581", frequencyRank: 82 },
      { traditional: "小", simplified: "小", pinyin: "xiǎo", definition: "small, tiny, insignificant", radicals: "小", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0037", frequencyRank: 83 },
      { traditional: "部", simplified: "部", pinyin: "bù", definition: "part, division, section", radicals: "邑", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2044", frequencyRank: 84 },
      { traditional: "其", simplified: "其", pinyin: "qí", definition: "his, her, its, their; that", radicals: "八", strokeCount: 8, hskLevel: 3, generalStandardNumber: "0996", frequencyRank: 85 },
      { traditional: "些", simplified: "些", pinyin: "xiē", definition: "little, few; rather, somewhat", radicals: "二", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1069", frequencyRank: 86 },
      { traditional: "主", simplified: "主", pinyin: "zhǔ", definition: "master, chief owner; host; lord", radicals: "丶", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0300", frequencyRank: 87 },
      { traditional: "样", simplified: "样", pinyin: "yàng", definition: "shape, form, pattern, style", radicals: "木", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1849", frequencyRank: 88 },
      { traditional: "理", simplified: "理", pinyin: "lǐ", definition: "reason, logic; manage", radicals: "玉", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2157", frequencyRank: 89 },
      { traditional: "心", simplified: "心", pinyin: "xīn", definition: "heart; mind, intelligence; soul", radicals: "心", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0174", frequencyRank: 90 },
      { traditional: "她", simplified: "她", pinyin: "tā", definition: "she, her", radicals: "女", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0582", frequencyRank: 91 },
      { traditional: "本", simplified: "本", pinyin: "běn", definition: "root, origin, source; basis", radicals: "木", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0210", frequencyRank: 92 },
      { traditional: "前", simplified: "前", pinyin: "qián", definition: "in front, forward; preceding", radicals: "刀", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1650", frequencyRank: 93 },
      { traditional: "开", simplified: "开", pinyin: "kāi", definition: "open; initiate, begin, start", radicals: "廾", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0076", frequencyRank: 94 },
      { traditional: "但", simplified: "但", pinyin: "dàn", definition: "only; but, however, yet, still", radicals: "人", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0774", frequencyRank: 95 },
      { traditional: "因", simplified: "因", pinyin: "yīn", definition: "cause, reason; by; because (of)", radicals: "囗", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0430", frequencyRank: 96 },
      { traditional: "只", simplified: "只", pinyin: "zhǐ", definition: "only, just, simply", radicals: "口", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0246", frequencyRank: 97 },
      { traditional: "从", simplified: "从", pinyin: "cóng", definition: "from, by, since, whence, through", radicals: "人", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0142", frequencyRank: 98 },
      { traditional: "想", simplified: "想", pinyin: "xiǎng", definition: "think, speculate, plan, consider", radicals: "心", strokeCount: 13, hskLevel: 1, generalStandardNumber: "2867", frequencyRank: 99 },
      { traditional: "实", simplified: "实", pinyin: "shí", definition: "real, true; honest, sincere", radicals: "宀", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1285", frequencyRank: 100 }
      ,{ traditional: "日", simplified: "日", pinyin: "rì", definition: "sun; day; daytime", radicals: "日", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0112", frequencyRank: 101 }
      ,{ traditional: "军", simplified: "军", pinyin: "jūn", definition: "army, military; soldiers, troops", radicals: "車", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0552", frequencyRank: 102 }
      ,{ traditional: "者", simplified: "者", pinyin: "zhě", definition: "that which; he who; those who", radicals: "老", strokeCount: 8, hskLevel: 3, generalStandardNumber: "0969", frequencyRank: 103 }
      ,{ traditional: "意", simplified: "意", pinyin: "yì", definition: "thought, idea, opinion; think", radicals: "心", strokeCount: 13, hskLevel: 2, generalStandardNumber: "2996", frequencyRank: 104 }
      ,{ traditional: "无", simplified: "无", pinyin: "wú", definition: "negative, no, not; KangXi radical 71", radicals: "无", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0081", frequencyRank: 105 }
      ,{ traditional: "力", simplified: "力", pinyin: "lì", definition: "power, capability, influence", radicals: "力", strokeCount: 2, hskLevel: 3, generalStandardNumber: "0019", frequencyRank: 106 }
      ,{ traditional: "它", simplified: "它", pinyin: "tā", definition: "it; other", radicals: "宀", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0314", frequencyRank: 107 }
      ,{ traditional: "与", simplified: "与", pinyin: "yǔ", definition: "and; with; to; for; give, grant", radicals: "一", strokeCount: 3, hskLevel: 4, generalStandardNumber: "0034", frequencyRank: 108 }
      ,{ traditional: "长", simplified: "长", pinyin: "zhǎng", definition: "long; length; excel in; leader", radicals: "長", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0127", frequencyRank: 109 }
      ,{ traditional: "把", simplified: "把", pinyin: "bǎ", definition: "hold, take; guard; regard as", radicals: "手", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0655", frequencyRank: 110 }
      ,{ traditional: "机", simplified: "机", pinyin: "jī", definition: "desk; machine; moment", radicals: "木", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0377", frequencyRank: 111 }
      ,{ traditional: "十", simplified: "十", pinyin: "shí", definition: "ten, tenth; complete; perfect", radicals: "十", strokeCount: 2, hskLevel: 1, generalStandardNumber: "0004", frequencyRank: 112 }
      ,{ traditional: "民", simplified: "民", pinyin: "mín", definition: "people, subjects, citizens", radicals: "氏", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0327", frequencyRank: 113 }
      ,{ traditional: "第", simplified: "第", pinyin: "dì", definition: "sequence, number; grade, degree", radicals: "竹", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2322", frequencyRank: 114 }
      ,{ traditional: "公", simplified: "公", pinyin: "gōng", definition: "fair, equitable; public; duke", radicals: "八", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0148", frequencyRank: 115 }
      ,{ traditional: "此", simplified: "此", pinyin: "cǐ", definition: "this, these; in this case, then", radicals: "止", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0411", frequencyRank: 116 }
      ,{ traditional: "已", simplified: "已", pinyin: "yǐ", definition: "already; finished; stop", radicals: "己", strokeCount: 3, hskLevel: 2, generalStandardNumber: "0061", frequencyRank: 117 }
      ,{ traditional: "工", simplified: "工", pinyin: "gōng", definition: "labor, work; worker, laborer", radicals: "工", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0026", frequencyRank: 118 }
      ,{ traditional: "使", simplified: "使", pinyin: "shǐ", definition: "cause, send on a mission, order; envoy, messenger, ambassador", radicals: "人", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1139", frequencyRank: 119 }
      ,{ traditional: "情", simplified: "情", pinyin: "qíng", definition: "feeling, sentiment, emotion", radicals: "心", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2438", frequencyRank: 120 }
      ,{ traditional: "明", simplified: "明", pinyin: "míng", definition: "bright, light, brilliant; clear", radicals: "日", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1087", frequencyRank: 121 }
      ,{ traditional: "性", simplified: "性", pinyin: "xìng", definition: "nature, character, sex", radicals: "心", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1268", frequencyRank: 122 }
      ,{ traditional: "知", simplified: "知", pinyin: "zhī", definition: "know, perceive, comprehend", radicals: "矢", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1122", frequencyRank: 123 }
      ,{ traditional: "全", simplified: "全", pinyin: "quán", definition: "maintain, keep whole or intact", radicals: "入", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0485", frequencyRank: 124 }
      ,{ traditional: "三", simplified: "三", pinyin: "sān", definition: "three", radicals: "一", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0022", frequencyRank: 125 }
      ,{ traditional: "又", simplified: "又", pinyin: "yòu", definition: "and, also, again, in addition", radicals: "又", strokeCount: 2, hskLevel: 3, generalStandardNumber: "0021", frequencyRank: 126 }
      ,{ traditional: "关", simplified: "关", pinyin: "guān", definition: "frontier pass; close; relation", radicals: "八", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0532", frequencyRank: 127 }
      ,{ traditional: "点", simplified: "点", pinyin: "diǎn", definition: "dot, speck, spot; point, degree", radicals: "火", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1469", frequencyRank: 128 }
      ,{ traditional: "正", simplified: "正", pinyin: "zhèng", definition: "right, proper, correct", radicals: "止", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0198", frequencyRank: 129 }
      ,{ traditional: "业", simplified: "业", pinyin: "yè", definition: "profession, business; GB radical 111", radicals: "一", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0231", frequencyRank: 130 }
      ,{ traditional: "外", simplified: "外", pinyin: "wài", definition: "out, outside, external; foreign", radicals: "夕", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0293", frequencyRank: 131 }
      ,{ traditional: "将", simplified: "将", pinyin: "jiāng", definition: "will, going to, future; general", radicals: "爿", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1617", frequencyRank: 132 }
      ,{ traditional: "两", simplified: "两", pinyin: "liǎng", definition: "two, both, pair, couple; ounce", radicals: "一", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0697", frequencyRank: 133 }
      ,{ traditional: "高", simplified: "高", pinyin: "gāo", definition: "high, tall; lofty, elevated", radicals: "高", strokeCount: 10, hskLevel: 1, generalStandardNumber: "2021", frequencyRank: 134 }
      ,{ traditional: "间", simplified: "间", pinyin: "jiān", definition: "midpoint, space; place, locality", radicals: "門", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0847", frequencyRank: 135 }
      ,{ traditional: "由", simplified: "由", pinyin: "yóu", definition: "cause, reason; from", radicals: "田", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0245", frequencyRank: 136 }
      ,{ traditional: "问", simplified: "问", pinyin: "wèn", definition: "ask about, inquire after", radicals: "門", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0528", frequencyRank: 137 }
      ,{ traditional: "很", simplified: "很", pinyin: "hěn", definition: "very, quite, much", radicals: "彳", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1584", frequencyRank: 138 }
      ,{ traditional: "最", simplified: "最", pinyin: "zuì", definition: "most, extremely, exceedingly", radicals: "曰", strokeCount: 12, hskLevel: 2, generalStandardNumber: "2614", frequencyRank: 139 }
      ,{ traditional: "重", simplified: "重", pinyin: "zhòng", definition: "heavy, weighty; double", radicals: "里", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1552", frequencyRank: 140 }
      ,{ traditional: "并", simplified: "并", pinyin: "bìng", definition: "and, also, furthermore, definitely", radicals: "干", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0531", frequencyRank: 141 }
      ,{ traditional: "物", simplified: "物", pinyin: "wù", definition: "thing, substance, creature", radicals: "牛", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1127", frequencyRank: 142 }
      ,{ traditional: "手", simplified: "手", pinyin: "shǒu", definition: "hand", radicals: "手", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0121", frequencyRank: 143 }
      ,{ traditional: "应", simplified: "应", pinyin: "yīng", definition: "should, ought to, must", radicals: "广", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0836", frequencyRank: 144 }
      ,{ traditional: "战", simplified: "战", pinyin: "zhàn", definition: "war, fighting, battle", radicals: "戈", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1468", frequencyRank: 145 }
      ,{ traditional: "向", simplified: "向", pinyin: "xiàng", definition: "toward, direction, trend", radicals: "口", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0480", frequencyRank: 146 }
      ,{ traditional: "头", simplified: "头", pinyin: "tóu", definition: "head; top; chief, first; boss", radicals: "大", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0310", frequencyRank: 147 }
      ,{ traditional: "文", simplified: "文", pinyin: "wén", definition: "literature, culture, writing", radicals: "文", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0161", frequencyRank: 148 }
      ,{ traditional: "体", simplified: "体", pinyin: "tǐ", definition: "body; group, class, body, unit; inferior", radicals: "人", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0770", frequencyRank: 149 }
      ,{ traditional: "政", simplified: "政", pinyin: "zhèng", definition: "government, political affairs", radicals: "攴", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1376", frequencyRank: 150 }
      ,{ traditional: "美", simplified: "美", pinyin: "měi", definition: "beautiful, pretty; pleasing", radicals: "羊", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1642", frequencyRank: 151 }
      ,{ traditional: "相", simplified: "相", pinyin: "xiāng", definition: "mutual, reciprocal, each other", radicals: "目", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1430", frequencyRank: 152 }
      ,{ traditional: "见", simplified: "见", pinyin: "jiàn", definition: "see, observe, behold; perceive", radicals: "見", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0118", frequencyRank: 153 }
      ,{ traditional: "被", simplified: "被", pinyin: "bèi", definition: "by (passive voice)", radicals: "衣", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2118", frequencyRank: 154 }
      ,{ traditional: "利", simplified: "利", pinyin: "lì", definition: "gains, advantage, profit, merit", radicals: "刀", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0763", frequencyRank: 155 }
      ,{ traditional: "什", simplified: "什", pinyin: "shén", definition: "file of ten soldiers; mixed, miscellaneous", radicals: "人", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0129", frequencyRank: 156 }
      ,{ traditional: "二", simplified: "二", pinyin: "èr", definition: "two; twice", radicals: "二", strokeCount: 2, hskLevel: 1, generalStandardNumber: "0003", frequencyRank: 157 }
      ,{ traditional: "等", simplified: "等", pinyin: "děng", definition: "equal, equivalent, same; wait for, await", radicals: "竹", strokeCount: 12, hskLevel: 2, generalStandardNumber: "2681", frequencyRank: 158 }
      ,{ traditional: "产", simplified: "产", pinyin: "chǎn", definition: "give birth, bring forth, produce", radicals: "立", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0522", frequencyRank: 159 }
      ,{ traditional: "或", simplified: "或", pinyin: "huò", definition: "or, either, else; perhaps, maybe", radicals: "戈", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1035", frequencyRank: 160 }
      ,{ traditional: "新", simplified: "新", pinyin: "xīn", definition: "new, recent, fresh, modern", radicals: "斤", strokeCount: 13, hskLevel: 2, generalStandardNumber: "2994", frequencyRank: 161 }
      ,{ traditional: "己", simplified: "己", pinyin: "jǐ", definition: "self, oneself; personal, private; 6th heavenly stem", radicals: "己", strokeCount: 3, hskLevel: 3, generalStandardNumber: "0060", frequencyRank: 162 }
      ,{ traditional: "制", simplified: "制", pinyin: "zhì", definition: "system; establish; overpower", radicals: "刀", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1121", frequencyRank: 163 }
      ,{ traditional: "身", simplified: "身", pinyin: "shēn", definition: "body; trunk, hull; rad. no. 158", radicals: "身", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0786", frequencyRank: 164 }
      ,{ traditional: "果", simplified: "果", pinyin: "guǒ", definition: "fruit; result", radicals: "木", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1079", frequencyRank: 165 }
      ,{ traditional: "加", simplified: "加", pinyin: "jiā", definition: "add to, increase, augment", radicals: "力", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0335", frequencyRank: 166 }
      ,{ traditional: "西", simplified: "西", pinyin: "xī", definition: "west(ern); westward, occident", radicals: "襾", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0384", frequencyRank: 167 }
      ,{ traditional: "斯", simplified: "斯", pinyin: "sī", definition: "this, thus, such; to lop off; emphatic particle", radicals: "斤", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2541", frequencyRank: 168 }
      ,{ traditional: "月", simplified: "月", pinyin: "yuè", definition: "moon; month; KangXi radical 74", radicals: "月", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0150", frequencyRank: 169 }
      ,{ traditional: "话", simplified: "话", pinyin: "huà", definition: "speech, talk, language; dialect", radicals: "言", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1296", frequencyRank: 170 }
      ,{ traditional: "合", simplified: "合", pinyin: "hé", definition: "combine, unite, join; gather", radicals: "口", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0488", frequencyRank: 171 }
      ,{ traditional: "回", simplified: "回", pinyin: "huí", definition: "return, turn around; a time", radicals: "囗", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0438", frequencyRank: 172 }
      ,{ traditional: "特", simplified: "特", pinyin: "tè", definition: "special, unique, distinguished", radicals: "牛", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1938", frequencyRank: 173 }
      ,{ traditional: "代", simplified: "代", pinyin: "dài", definition: "replace, replacement (of person or generation); era, generation", radicals: "人", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0271", frequencyRank: 174 }
      ,{ traditional: "内", simplified: "内", pinyin: "nèi", definition: "inside", radicals: "入", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0116", frequencyRank: 175 }
      ,{ traditional: "信", simplified: "信", pinyin: "xìn", definition: "trust, believe; letter", radicals: "人", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1570", frequencyRank: 176 }
      ,{ traditional: "表", simplified: "表", pinyin: "biǎo", definition: "show, express, manifest, display", radicals: "衣", strokeCount: 8, hskLevel: 2, generalStandardNumber: "0951", frequencyRank: 177 }
      ,{ traditional: "化", simplified: "化", pinyin: "huà", definition: "change, convert, reform; -ize", radicals: "匕", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0132", frequencyRank: 178 }
      ,{ traditional: "老", simplified: "老", pinyin: "lǎo", definition: "old, aged; experienced", radicals: "老", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0360", frequencyRank: 179 }
      ,{ traditional: "给", simplified: "给", pinyin: "gěi", definition: "give; by, for", radicals: "糸", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1758", frequencyRank: 180 }
      ,{ traditional: "世", simplified: "世", pinyin: "shì", definition: "generation; world; era", radicals: "一", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0206", frequencyRank: 181 }
      ,{ traditional: "位", simplified: "位", pinyin: "wèi", definition: "throne; position, post; rank, status; seat", radicals: "人", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0784", frequencyRank: 182 }
      ,{ traditional: "次", simplified: "次", pinyin: "cì", definition: "order, sequence; next", radicals: "欠", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0521", frequencyRank: 183 }
      ,{ traditional: "度", simplified: "度", pinyin: "dù", definition: "degree, system; manner; to consider", radicals: "广", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1622", frequencyRank: 184 }
      ,{ traditional: "门", simplified: "门", pinyin: "mén", definition: "gate, door, entrance, opening", radicals: "門", strokeCount: 3, hskLevel: 2, generalStandardNumber: "0055", frequencyRank: 185 }
      ,{ traditional: "任", simplified: "任", pinyin: "rèn", definition: "trust to, rely on, appoint; to bear, duty, office; allow", radicals: "人", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0467", frequencyRank: 186 }
      ,{ traditional: "常", simplified: "常", pinyin: "cháng", definition: "common, normal, frequent, regular", radicals: "巾", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2257", frequencyRank: 187 }
      ,{ traditional: "先", simplified: "先", pinyin: "xiān", definition: "first, former, previous", radicals: "儿", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0446", frequencyRank: 188 }
      ,{ traditional: "海", simplified: "海", pinyin: "hǎi", definition: "sea, ocean; maritime", radicals: "水", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2074", frequencyRank: 189 }
      ,{ traditional: "通", simplified: "通", pinyin: "tōng", definition: "pass through, common, communicate", radicals: "辵", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2145", frequencyRank: 190 }
      ,{ traditional: "教", simplified: "教", pinyin: "jiào", definition: "teach, class", radicals: "攴", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2179", frequencyRank: 191 }
      ,{ traditional: "儿", simplified: "儿", pinyin: "ér", definition: "son, child; KangXi radical 10", radicals: "儿", strokeCount: 2, hskLevel: 1, generalStandardNumber: "0012", frequencyRank: 192 }
      ,{ traditional: "原", simplified: "原", pinyin: "yuán", definition: "source, origin, beginning", radicals: "厂", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1868", frequencyRank: 193 }
      ,{ traditional: "东", simplified: "东", pinyin: "dōng", definition: "east, eastern, eastward", radicals: "一", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0225", frequencyRank: 194 }
      ,{ traditional: "声", simplified: "声", pinyin: "shēng", definition: "sound, voice, noise; tone; music", radicals: "士", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0654", frequencyRank: 195 }
      ,{ traditional: "提", simplified: "提", pinyin: "tí", definition: "hold in hand; lift in hand", radicals: "手", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2520", frequencyRank: 196 }
      ,{ traditional: "立", simplified: "立", pinyin: "lì", definition: "stand; let stand; establish, set", radicals: "立", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0302", frequencyRank: 197 }
      ,{ traditional: "及", simplified: "及", pinyin: "jí", definition: "extend; reach; come up to; and", radicals: "又", strokeCount: 3, hskLevel: 4, generalStandardNumber: "0052", frequencyRank: 198 }
      ,{ traditional: "比", simplified: "比", pinyin: "bǐ", definition: "to compare, liken; comparison; than", radicals: "比", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0105", frequencyRank: 199 }
      ,{ traditional: "员", simplified: "员", pinyin: "yuán", definition: "member; personnel, staff member", radicals: "口", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0737", frequencyRank: 200 }
      ,{ traditional: "解", simplified: "解", pinyin: "jiě", definition: "loosen, unfasten, untie; explain", radicals: "角", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2981", frequencyRank: 201 }
      ,{ traditional: "水", simplified: "水", pinyin: "shuǐ", definition: "water, liquid, lotion, juice", radicals: "水", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0117", frequencyRank: 202 }
      ,{ traditional: "名", simplified: "名", pinyin: "míng", definition: "name, rank, title, position", radicals: "口", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0505", frequencyRank: 203 }
      ,{ traditional: "真", simplified: "真", pinyin: "zhēn", definition: "real, actual, true, genuine", radicals: "目", strokeCount: 10, hskLevel: 2, generalStandardNumber: "1832", frequencyRank: 204 }
      ,{ traditional: "论", simplified: "论", pinyin: "lùn", definition: "debate; discuss; discourse", radicals: "言", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0556", frequencyRank: 205 }
      ,{ traditional: "处", simplified: "处", pinyin: "chù", definition: "place, locale; department", radicals: "夂", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0294", frequencyRank: 206 }
      ,{ traditional: "走", simplified: "走", pinyin: "zǒu", definition: "walk, go on foot; run; leave", radicals: "走", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0625", frequencyRank: 207 }
      ,{ traditional: "义", simplified: "义", pinyin: "yì", definition: "right conduct, righteousness", radicals: "丿", strokeCount: 3, hskLevel: 5, generalStandardNumber: "0057", frequencyRank: 208 }
      ,{ traditional: "各", simplified: "各", pinyin: "gè", definition: "each, individually, every, all", radicals: "口", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0506", frequencyRank: 209 }
      ,{ traditional: "入", simplified: "入", pinyin: "rù", definition: "enter, come in(to), join", radicals: "入", strokeCount: 2, hskLevel: 4, generalStandardNumber: "0011", frequencyRank: 210 }
      ,{ traditional: "几", simplified: "几", pinyin: "jǐ", definition: "small table", radicals: "几", strokeCount: 2, hskLevel: 1, generalStandardNumber: "0014", frequencyRank: 211 }
      ,{ traditional: "口", simplified: "口", pinyin: "kǒu", definition: "mouth; open end; entrance, gate", radicals: "口", strokeCount: 3, hskLevel: 3, generalStandardNumber: "0038", frequencyRank: 212 }
      ,{ traditional: "认", simplified: "认", pinyin: "rèn", definition: "recognize, know, understand", radicals: "言", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0171", frequencyRank: 213 }
      ,{ traditional: "条", simplified: "条", pinyin: "tiáo", definition: "clause, condition; string, stripe", radicals: "木", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0816", frequencyRank: 214 }
      ,{ traditional: "平", simplified: "平", pinyin: "píng", definition: "flat, level, even; peaceful", radicals: "干", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0222", frequencyRank: 215 }
      ,{ traditional: "系", simplified: "系", pinyin: "xì", definition: "system; line, link, connection", radicals: "糸", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0825", frequencyRank: 216 }
      ,{ traditional: "气", simplified: "气", pinyin: "qì", definition: "steam, vapor; KangXi radical 84", radicals: "气", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0122", frequencyRank: 217 }
      ,{ traditional: "题", simplified: "题", pinyin: "tí", definition: "forehead; title, headline; theme", radicals: "頁", strokeCount: 15, hskLevel: 2, generalStandardNumber: "3233", frequencyRank: 218 }
      ,{ traditional: "活", simplified: "活", pinyin: "huó", definition: "live, exist, survive; lively", radicals: "水", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1672", frequencyRank: 219 }
      ,{ traditional: "尔", simplified: "尔", pinyin: "ěr", definition: "you; that, those; final particle", radicals: "小", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0286", frequencyRank: 220 }
      ,{ traditional: "更", simplified: "更", pinyin: "gèng", definition: "more, still further, much more", radicals: "曰", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0693", frequencyRank: 221 }
      ,{ traditional: "别", simplified: "别", pinyin: "bié", definition: "separate, other; do not", radicals: "刀", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0751", frequencyRank: 222 }
      ,{ traditional: "打", simplified: "打", pinyin: "dǎ", definition: "strike, hit, beat; fight; attack", radicals: "手", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0196", frequencyRank: 223 }
      ,{ traditional: "女", simplified: "女", pinyin: "nǚ", definition: "woman, girl; feminine; rad. 38", radicals: "女", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0067", frequencyRank: 224 }
      ,{ traditional: "变", simplified: "变", pinyin: "biàn", definition: "change, transform, alter; rebel", radicals: "又", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1204", frequencyRank: 225 }
      ,{ traditional: "四", simplified: "四", pinyin: "sì", definition: "four", radicals: "囗", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0262", frequencyRank: 226 }
      ,{ traditional: "神", simplified: "神", pinyin: "shén", definition: "spirit, god, supernatural being", radicals: "示", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1711", frequencyRank: 227 }
      ,{ traditional: "总", simplified: "总", pinyin: "zǒng", definition: "collect; overall, altogether", radicals: "八", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1654", frequencyRank: 228 }
      ,{ traditional: "何", simplified: "何", pinyin: "hé", definition: "what, why, where, which, how", radicals: "人", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0771", frequencyRank: 229 }
      ,{ traditional: "电", simplified: "电", pinyin: "diàn", definition: "electricity; electric; lightning", radicals: "曰", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0242", frequencyRank: 230 }
      ,{ traditional: "数", simplified: "数", pinyin: "shù", definition: "number; several, count; fate", radicals: "攴", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2999", frequencyRank: 231 }
      ,{ traditional: "安", simplified: "安", pinyin: "ān", definition: "peaceful, tranquil, quiet", radicals: "宀", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0549", frequencyRank: 232 }
      ,{ traditional: "少", simplified: "少", pinyin: "shǎo", definition: "few, less, inadequate", radicals: "小", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0110", frequencyRank: 233 }
      ,{ traditional: "报", simplified: "报", pinyin: "bào", definition: "report, tell, announce", radicals: "手", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0656", frequencyRank: 234 }
      ,{ traditional: "才", simplified: "才", pinyin: "cái", definition: "talent, ability; just, only", radicals: "手", strokeCount: 3, hskLevel: 3, generalStandardNumber: "0029", frequencyRank: 235 }
      ,{ traditional: "结", simplified: "结", pinyin: "jié", definition: "knot, tie; join, connect", radicals: "糸", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1754", frequencyRank: 236 }
      ,{ traditional: "反", simplified: "反", pinyin: "fǎn", definition: "reverse, opposite, contrary, anti", radicals: "又", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0139", frequencyRank: 237 }
      ,{ traditional: "受", simplified: "受", pinyin: "shòu", definition: "receive, accept, get; bear, stand", radicals: "又", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1174", frequencyRank: 238 }
      ,{ traditional: "目", simplified: "目", pinyin: "mù", definition: "eye; look, see; division, topic", radicals: "目", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0236", frequencyRank: 239 }
      ,{ traditional: "太", simplified: "太", pinyin: "tài", definition: "very, too, much; big; extreme", radicals: "大", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0093", frequencyRank: 240 }
      ,{ traditional: "量", simplified: "量", pinyin: "liàng", definition: "measure, quantity, capacity", radicals: "里", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2616", frequencyRank: 241 }
      ,{ traditional: "再", simplified: "再", pinyin: "zài", definition: "again, twice, re-", radicals: "冂", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0382", frequencyRank: 242 }
      ,{ traditional: "感", simplified: "感", pinyin: "gǎn", definition: "feel, perceive, emotion", radicals: "心", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2875", frequencyRank: 243 }
      ,{ traditional: "建", simplified: "建", pinyin: "jiàn", definition: "build, establish, erect, found", radicals: "廴", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1302", frequencyRank: 244 }
      ,{ traditional: "务", simplified: "务", pinyin: "wù", definition: "affairs, business; must, should", radicals: "夂", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0297", frequencyRank: 245 }
      ,{ traditional: "做", simplified: "做", pinyin: "zuò", definition: "work, make; act", radicals: "人", strokeCount: 11, hskLevel: 1, generalStandardNumber: "2324", frequencyRank: 246 }
      ,{ traditional: "接", simplified: "接", pinyin: "jiē", definition: "receive; continue; catch; connect", radicals: "手", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2185", frequencyRank: 247 }
      ,{ traditional: "必", simplified: "必", pinyin: "bì", definition: "surely, most certainly; must", radicals: "心", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0321", frequencyRank: 248 }
      ,{ traditional: "场", simplified: "场", pinyin: "chǎng", definition: "open space, field, market", radicals: "土", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0367", frequencyRank: 249 }
      ,{ traditional: "件", simplified: "件", pinyin: "jiàn", definition: "numerary adjunct for article; matter", radicals: "人", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0466", frequencyRank: 250 }
      ,{ traditional: "计", simplified: "计", pinyin: "jì", definition: "plan, plot; strategem; scheme", radicals: "言", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0168", frequencyRank: 251 }
      ,{ traditional: "管", simplified: "管", pinyin: "guǎn", definition: "pipe, tube, duct; woodwind music", radicals: "竹", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3123", frequencyRank: 252 }
      ,{ traditional: "期", simplified: "期", pinyin: "qī", definition: "period of time; date; time limit", radicals: "月", strokeCount: 12, hskLevel: 1, generalStandardNumber: "2542", frequencyRank: 253 }
      ,{ traditional: "市", simplified: "市", pinyin: "shì", definition: "market, fair; city, town; trade", radicals: "巾", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0301", frequencyRank: 254 }
      ,{ traditional: "直", simplified: "直", pinyin: "zhí", definition: "straight, erect, vertical", radicals: "目", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1011", frequencyRank: 255 }
      ,{ traditional: "德", simplified: "德", pinyin: "dé", definition: "ethics, morality, virtue", radicals: "彳", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3272", frequencyRank: 256 }
      ,{ traditional: "资", simplified: "资", pinyin: "zī", definition: "property; wealth; capital", radicals: "貝", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2039", frequencyRank: 257 }
      ,{ traditional: "命", simplified: "命", pinyin: "mìng", definition: "life; destiny, fate, luck; an order, instruction", radicals: "口", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1168", frequencyRank: 258 }
      ,{ traditional: "山", simplified: "山", pinyin: "shān", definition: "mountain, hill, peak", radicals: "山", strokeCount: 3, hskLevel: 3, generalStandardNumber: "0039", frequencyRank: 259 }
      ,{ traditional: "金", simplified: "金", pinyin: "jīn", definition: "gold; metals in general; money", radicals: "金", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1166", frequencyRank: 260 }
      ,{ traditional: "指", simplified: "指", pinyin: "zhǐ", definition: "finger, toe; point, indicate", radicals: "手", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1389", frequencyRank: 261 }
      ,{ traditional: "克", simplified: "克", pinyin: "kè", definition: "gram; overcome; transliteration", radicals: "儿", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0675", frequencyRank: 262 }
      ,{ traditional: "许", simplified: "许", pinyin: "xǔ", definition: "allow, permit; promise; betroth", radicals: "言", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0554", frequencyRank: 263 }
      ,{ traditional: "统", simplified: "统", pinyin: "tǒng", definition: "govern, command, control; unite", radicals: "糸", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1765", frequencyRank: 264 }
      ,{ traditional: "区", simplified: "区", pinyin: "qū", definition: "area, district, region, ward", radicals: "匸", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0094", frequencyRank: 265 }
      ,{ traditional: "保", simplified: "保", pinyin: "bǎo", definition: "protect, safeguard, defend, care", radicals: "人", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1562", frequencyRank: 266 }
      ,{ traditional: "至", simplified: "至", pinyin: "zhì", definition: "reach, arrive; extremely, very", radicals: "至", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0410", frequencyRank: 267 }
      ,{ traditional: "队", simplified: "队", pinyin: "duì", definition: "team, group; army unit", radicals: "阜", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0180", frequencyRank: 268 }
      ,{ traditional: "形", simplified: "形", pinyin: "xíng", definition: "form, shape, appearance", radicals: "彡", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0604", frequencyRank: 269 }
      ,{ traditional: "社", simplified: "社", pinyin: "shè", definition: "god of the soil and altars to him; group of families; company, society", radicals: "示", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0890", frequencyRank: 270 }
      ,{ traditional: "便", simplified: "便", pinyin: "biàn", definition: "convenience, ease; expedient", radicals: "人", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1556", frequencyRank: 271 }
      ,{ traditional: "空", simplified: "空", pinyin: "kōng", definition: "empty, hollow, bare, deserted", radicals: "穴", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1282", frequencyRank: 272 }
      ,{ traditional: "决", simplified: "决", pinyin: "jué", definition: "decide, determine, judge", radicals: "冫", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0523", frequencyRank: 273 }
      ,{ traditional: "治", simplified: "治", pinyin: "zhì", definition: "govern, regulate, administer", radicals: "水", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1264", frequencyRank: 274 }
      ,{ traditional: "展", simplified: "展", pinyin: "zhǎn", definition: "open, unfold; stretch, extend", radicals: "尸", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2131", frequencyRank: 275 }
      ,{ traditional: "马", simplified: "马", pinyin: "mǎ", definition: "horse; surname; KangXi radical 187", radicals: "馬", strokeCount: 3, hskLevel: 3, generalStandardNumber: "0072", frequencyRank: 276 }
      ,{ traditional: "科", simplified: "科", pinyin: "kē", definition: "section, department, science", radicals: "禾", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1551", frequencyRank: 277 }
      ,{ traditional: "司", simplified: "司", pinyin: "sī", definition: "take charge of, control, manage; officer", radicals: "口", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0325", frequencyRank: 278 }
      ,{ traditional: "五", simplified: "五", pinyin: "wǔ", definition: "five; surname", radicals: "二", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0088", frequencyRank: 279 }
      ,{ traditional: "基", simplified: "基", pinyin: "jī", definition: "foundation, base", radicals: "土", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2193", frequencyRank: 280 }
      ,{ traditional: "眼", simplified: "眼", pinyin: "yǎn", definition: "eye; eyelet, hole, opening", radicals: "目", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2263", frequencyRank: 281 }
      ,{ traditional: "书", simplified: "书", pinyin: "shū", definition: "book, letter, document; writings", radicals: "丨", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0188", frequencyRank: 282 }
      ,{ traditional: "非", simplified: "非", pinyin: "fēi", definition: "not, negative, non-; oppose", radicals: "非", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1064", frequencyRank: 283 }
      ,{ traditional: "则", simplified: "则", pinyin: "zé", definition: "rule, law, regulation; grades", radicals: "刀", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0440", frequencyRank: 284 }
      ,{ traditional: "听", simplified: "听", pinyin: "tīng", definition: "hear; understand; obey, comply", radicals: "口", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0739", frequencyRank: 285 }
      ,{ traditional: "白", simplified: "白", pinyin: "bái", definition: "white; pure, unblemished; bright", radicals: "白", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0275", frequencyRank: 286 }
      ,{ traditional: "却", simplified: "却", pinyin: "què", definition: "still, but; decline; retreat", radicals: "卩", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0658", frequencyRank: 287 }
      ,{ traditional: "界", simplified: "界", pinyin: "jiè", definition: "boundary, limit; domain; society; the world", radicals: "田", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1496", frequencyRank: 288 }
      ,{ traditional: "达", simplified: "达", pinyin: "dá", definition: "arrive at, reach; intelligent; smooth, slippery", radicals: "辵", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0398", frequencyRank: 289 }
      ,{ traditional: "光", simplified: "光", pinyin: "guāng", definition: "light, brilliant, shine; only", radicals: "儿", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0417", frequencyRank: 290 }
      ,{ traditional: "放", simplified: "放", pinyin: "fàng", definition: "put, release, free, liberate", radicals: "攴", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1223", frequencyRank: 291 }
      ,{ traditional: "强", simplified: "强", pinyin: "qiáng", definition: "strong, powerful, energetic", radicals: "弓", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2802", frequencyRank: 292 }
      ,{ traditional: "即", simplified: "即", pinyin: "jí", definition: "promptly, quickly, immediately", radicals: "卩", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0901", frequencyRank: 293 }
      ,{ traditional: "像", simplified: "像", pinyin: "xiàng", definition: "a picture, image, figure; to resemble", radicals: "人", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2961", frequencyRank: 294 }
      ,{ traditional: "难", simplified: "难", pinyin: "nán", definition: "difficult, arduous, hard; unable", radicals: "又", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2147", frequencyRank: 295 }
      ,{ traditional: "且", simplified: "且", pinyin: "qiě", definition: "moreover, also (post-subject); about to, will soon (pre-verb)", radicals: "一", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0237", frequencyRank: 296 }
      ,{ traditional: "权", simplified: "权", pinyin: "quán", definition: "power, right, authority", radicals: "木", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0378", frequencyRank: 297 }
      ,{ traditional: "思", simplified: "思", pinyin: "sī", definition: "think, consider, ponder; final particle", radicals: "心", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1500", frequencyRank: 298 }
      ,{ traditional: "王", simplified: "王", pinyin: "wáng", definition: "king, ruler; royal; surname", radicals: "玉", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0075", frequencyRank: 299 }
      ,{ traditional: "象", simplified: "象", pinyin: "xiàng", definition: "elephant; ivory; figure, image", radicals: "豕", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2361", frequencyRank: 300 }
      ,{ traditional: "完", simplified: "完", pinyin: "wán", definition: "complete, finish, settle; whole", radicals: "宀", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0877", frequencyRank: 301 }
      ,{ traditional: "设", simplified: "设", pinyin: "shè", definition: "build; establish; display", radicals: "言", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0560", frequencyRank: 302 }
      ,{ traditional: "式", simplified: "式", pinyin: "shì", definition: "style, system, formula, rule", radicals: "弋", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0349", frequencyRank: 303 }
      ,{ traditional: "色", simplified: "色", pinyin: "sè", definition: "color, tint, hue, shade; form, body; beauty, desire for beauty", radicals: "色", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0509", frequencyRank: 304 }
      ,{ traditional: "路", simplified: "路", pinyin: "lù", definition: "road, path, street; journey", radicals: "足", strokeCount: 13, hskLevel: 2, generalStandardNumber: "2918", frequencyRank: 305 }
      ,{ traditional: "记", simplified: "记", pinyin: "jì", definition: "record; keep in mind, remember", radicals: "言", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0323", frequencyRank: 306 }
      ,{ traditional: "南", simplified: "南", pinyin: "nán", definition: "south; southern part; southward", radicals: "十", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1422", frequencyRank: 307 }
      ,{ traditional: "品", simplified: "品", pinyin: "pǐn", definition: "article, product, commodity", radicals: "口", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1503", frequencyRank: 308 }
      ,{ traditional: "住", simplified: "住", pinyin: "zhù", definition: "reside, live at, dwell, lodge; stop", radicals: "人", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0783", frequencyRank: 309 }
      ,{ traditional: "告", simplified: "告", pinyin: "gào", definition: "tell, announce, inform; accuse", radicals: "口", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0760", frequencyRank: 310 }
      ,{ traditional: "类", simplified: "类", pinyin: "lèi", definition: "class, group, kind, category", radicals: "大", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1646", frequencyRank: 311 }
      ,{ traditional: "求", simplified: "求", pinyin: "qiú", definition: "seek; demand, request; beseech", radicals: "水", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0690", frequencyRank: 312 }
      ,{ traditional: "据", simplified: "据", pinyin: "jù", definition: "to occupy, take possession of; a base, position", radicals: "手", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2189", frequencyRank: 313 }
      ,{ traditional: "程", simplified: "程", pinyin: "chéng", definition: "journey, trip; schedule, agenda", radicals: "禾", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2677", frequencyRank: 314 }
      ,{ traditional: "北", simplified: "北", pinyin: "běi", definition: "north; northern; northward", radicals: "匕", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0227", frequencyRank: 315 }
      ,{ traditional: "边", simplified: "边", pinyin: "biān", definition: "edge, margin, side, border", radicals: "辵", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0337", frequencyRank: 316 }
      ,{ traditional: "死", simplified: "死", pinyin: "sǐ", definition: "die; dead; death", radicals: "歹", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0400", frequencyRank: 317 }
      ,{ traditional: "张", simplified: "张", pinyin: "zhāng", definition: "stretch, extend, expand; sheet", radicals: "弓", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0909", frequencyRank: 318 }
      ,{ traditional: "该", simplified: "该", pinyin: "gāi", definition: "should, ought to, need to", radicals: "言", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1300", frequencyRank: 319 }
      ,{ traditional: "交", simplified: "交", pinyin: "jiāo", definition: "mix; intersect; exchange, communicate; deliver", radicals: "亠", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0519", frequencyRank: 320 }
      ,{ traditional: "规", simplified: "规", pinyin: "guī", definition: "rules, regulations, customs, law", radicals: "見", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0952", frequencyRank: 321 }
      ,{ traditional: "万", simplified: "万", pinyin: "wàn", definition: "ten thousand; innumerable", radicals: "一", strokeCount: 3, hskLevel: 3, generalStandardNumber: "0035", frequencyRank: 322 }
      ,{ traditional: "取", simplified: "取", pinyin: "qǔ", definition: "take, receive, obtain; select", radicals: "又", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0997", frequencyRank: 323 }
      ,{ traditional: "拉", simplified: "拉", pinyin: "lā", definition: "pull, drag; seize, hold; lengthen", radicals: "手", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0981", frequencyRank: 324 }
      ,{ traditional: "格", simplified: "格", pinyin: "gé", definition: "pattern, standard, form; style", radicals: "木", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1845", frequencyRank: 325 }
      ,{ traditional: "望", simplified: "望", pinyin: "wàng", definition: "to look at, look forward; to hope, expect", radicals: "月", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2394", frequencyRank: 326 }
      ,{ traditional: "觉", simplified: "觉", pinyin: "jué", definition: "to wake up from sleep; conscious", radicals: "見", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1694", frequencyRank: 327 }
      ,{ traditional: "术", simplified: "术", pinyin: "shù", definition: "art, skill, special feat; method, technique", radicals: "木", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0211", frequencyRank: 328 }
      ,{ traditional: "领", simplified: "领", pinyin: "lǐng", definition: "neck; collar; lead, guide", radicals: "頁", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2354", frequencyRank: 329 }
      ,{ traditional: "共", simplified: "共", pinyin: "gòng", definition: "together with, all, total; to share", radicals: "八", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0371", frequencyRank: 330 }
      ,{ traditional: "确", simplified: "确", pinyin: "què", definition: "sure, certain; real, true", radicals: "石", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2591", frequencyRank: 331 }
      ,{ traditional: "传", simplified: "传", pinyin: "chuán", definition: "summon; propagate, transmit", radicals: "人", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0455", frequencyRank: 332 }
      ,{ traditional: "师", simplified: "师", pinyin: "shī", definition: "teacher, master, specialist", radicals: "巾", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0413", frequencyRank: 333 }
      ,{ traditional: "观", simplified: "观", pinyin: "guān", definition: "see, observe, view; appearance", radicals: "見", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0586", frequencyRank: 334 }
      ,{ traditional: "清", simplified: "清", pinyin: "qīng", definition: "clear, pure, clean; peaceful", radicals: "水", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2410", frequencyRank: 335 }
      ,{ traditional: "今", simplified: "今", pinyin: "jīn", definition: "now, today, modern era", radicals: "人", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0144", frequencyRank: 336 }
      ,{ traditional: "切", simplified: "切", pinyin: "qiè", definition: "cut, mince, slice, carve", radicals: "刀", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0107", frequencyRank: 337 }
      ,{ traditional: "院", simplified: "院", pinyin: "yuàn", definition: "courtyard, yard, court; school", radicals: "阜", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1734", frequencyRank: 338 }
      ,{ traditional: "让", simplified: "让", pinyin: "ràng", definition: "allow, permit, yield, concede", radicals: "言", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0317", frequencyRank: 339 }
      ,{ traditional: "识", simplified: "识", pinyin: "shí", definition: "recognize, understand, know", radicals: "言", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0892", frequencyRank: 340 }
      ,{ traditional: "候", simplified: "候", pinyin: "hòu", definition: "wait; expect; visit; greet", radicals: "人", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1964", frequencyRank: 341 }
      ,{ traditional: "带", simplified: "带", pinyin: "dài", definition: "belt, girdle, band, strap, zone", radicals: "巾", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1407", frequencyRank: 342 }
      ,{ traditional: "导", simplified: "导", pinyin: "dǎo", definition: "direct, guide, lead, conduct", radicals: "寸", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0567", frequencyRank: 343 }
      ,{ traditional: "争", simplified: "争", pinyin: "zhēng", definition: "dispute, fight, contend, strive", radicals: "亅", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0508", frequencyRank: 344 }
      ,{ traditional: "运", simplified: "运", pinyin: "yùn", definition: "run; simplified form of 運 luck, fortune; ship, transport", radicals: "辵", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0611", frequencyRank: 345 }
      ,{ traditional: "笑", simplified: "笑", pinyin: "xiào", definition: "smile, laugh, giggle; snicker", radicals: "竹", strokeCount: 10, hskLevel: 2, generalStandardNumber: "1952", frequencyRank: 346 }
      ,{ traditional: "飞", simplified: "飞", pinyin: "fēi", definition: "fly; go quickly; dart; high", radicals: "乙", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0069", frequencyRank: 347 }
      ,{ traditional: "风", simplified: "风", pinyin: "fēng", definition: "wind; air; manners, atmosphere", radicals: "風", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0154", frequencyRank: 348 }
      ,{ traditional: "步", simplified: "步", pinyin: "bù", definition: "step, pace; walk, stroll", radicals: "止", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0710", frequencyRank: 349 }
      ,{ traditional: "改", simplified: "改", pinyin: "gǎi", definition: "change, alter; improve, remodel", radicals: "攴", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0908", frequencyRank: 350 }
      ,{ traditional: "收", simplified: "收", pinyin: "shōu", definition: "gather together, collect; harvest", radicals: "攴", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0573", frequencyRank: 351 }
      ,{ traditional: "根", simplified: "根", pinyin: "gēn", definition: "root, base(d on); foundation", radicals: "木", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1850", frequencyRank: 352 }
      ,{ traditional: "干", simplified: "干", pinyin: "gàn", definition: "oppose, offend; invade; dried", radicals: "干", strokeCount: 3, hskLevel: 3, generalStandardNumber: "0023", frequencyRank: 353 }
      ,{ traditional: "造", simplified: "造", pinyin: "zào", definition: "construct, build, make, begin; prepare", radicals: "辵", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1940", frequencyRank: 354 }
      ,{ traditional: "言", simplified: "言", pinyin: "yán", definition: "words, speech; speak, say", radicals: "言", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0826", frequencyRank: 355 }
      ,{ traditional: "联", simplified: "联", pinyin: "lián", definition: "connect, join; associate, ally", radicals: "耳", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2544", frequencyRank: 356 }
      ,{ traditional: "持", simplified: "持", pinyin: "chí", definition: "sustain, support; hold, grasp", radicals: "手", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1367", frequencyRank: 357 }
      ,{ traditional: "组", simplified: "组", pinyin: "zǔ", definition: "class; section, department", radicals: "糸", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1338", frequencyRank: 358 }
      ,{ traditional: "每", simplified: "每", pinyin: "měi", definition: "every, each", radicals: "毋", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0767", frequencyRank: 359 }
      ,{ traditional: "济", simplified: "济", pinyin: "jì", definition: "help, aid, relieve; ferry, cross", radicals: "水", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1678", frequencyRank: 360 }
      ,{ traditional: "车", simplified: "车", pinyin: "chē", definition: "cart, vehicle; carry in cart", radicals: "車", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0100", frequencyRank: 361 }
      ,{ traditional: "亲", simplified: "亲", pinyin: "qīn", definition: "relatives, parents; intimate the hazel nut or filbert tree a thorny tree", radicals: "立", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1631", frequencyRank: 362 }
      ,{ traditional: "极", simplified: "极", pinyin: "jí", definition: "extreme, utmost, furthest, final", radicals: "木", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0687", frequencyRank: 363 }
      ,{ traditional: "林", simplified: "林", pinyin: "lín", definition: "forest, grove; surname", radicals: "木", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1018", frequencyRank: 364 }
      ,{ traditional: "服", simplified: "服", pinyin: "fú", definition: "clothes; wear, dress", radicals: "月", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1190", frequencyRank: 365 }
      ,{ traditional: "快", simplified: "快", pinyin: "kuài", definition: "rapid, quick, speedy, fast; soon", radicals: "心", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0876", frequencyRank: 366 }
      ,{ traditional: "办", simplified: "办", pinyin: "bàn", definition: "manage, do, handle; deal with", radicals: "力", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0181", frequencyRank: 367 }
      ,{ traditional: "议", simplified: "议", pinyin: "yì", definition: "consult, talk over, discuss", radicals: "言", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0320", frequencyRank: 368 }
      ,{ traditional: "往", simplified: "往", pinyin: "wǎng", definition: "go, depart; past, formerly", radicals: "彳", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1160", frequencyRank: 369 }
      ,{ traditional: "元", simplified: "元", pinyin: "yuán", definition: "first; dollar; origin; head", radicals: "儿", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0080", frequencyRank: 370 }
      ,{ traditional: "英", simplified: "英", pinyin: "yīng", definition: "petal, flower, leaf; brave, a hero; England, English", radicals: "艸", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1006", frequencyRank: 371 }
      ,{ traditional: "士", simplified: "士", pinyin: "shì", definition: "scholar, gentleman; soldier", radicals: "士", strokeCount: 3, hskLevel: 4, generalStandardNumber: "0028", frequencyRank: 372 }
      ,{ traditional: "证", simplified: "证", pinyin: "zhèng", definition: "prove, confirm, verify; proof", radicals: "言", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0885", frequencyRank: 373 }
      ,{ traditional: "近", simplified: "近", pinyin: "jìn", definition: "near, close; approach; intimate", radicals: "辵", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0791", frequencyRank: 374 }
      ,{ traditional: "失", simplified: "失", pinyin: "shī", definition: "lose; make mistake, neglect", radicals: "大", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0265", frequencyRank: 375 }
      ,{ traditional: "转", simplified: "转", pinyin: "zhuǎn", definition: "shift, move, turn", radicals: "車", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1059", frequencyRank: 376 }
      ,{ traditional: "夫", simplified: "夫", pinyin: "fū", definition: "man, male adult, husband; those", radicals: "大", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0079", frequencyRank: 377 }
      ,{ traditional: "令", simplified: "令", pinyin: "lìng", definition: "order, command, instruction; make a request", radicals: "人", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0282", frequencyRank: 378 }
      ,{ traditional: "准", simplified: "准", pinyin: "zhǔn", definition: "approve, allow, permit; in accord", radicals: "冫", strokeCount: 10, hskLevel: 2, generalStandardNumber: "2024", frequencyRank: 379 }
      ,{ traditional: "布", simplified: "布", pinyin: "bù", definition: "cotton cloth, textiles, linen", radicals: "巾", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0218", frequencyRank: 380 }
      ,{ traditional: "始", simplified: "始", pinyin: "shǐ", definition: "begin, start; then, only then", radicals: "女", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1329", frequencyRank: 381 }
      ,{ traditional: "怎", simplified: "怎", pinyin: "zěn", definition: "what? why? how?", radicals: "心", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1543", frequencyRank: 382 }
      ,{ traditional: "呢", simplified: "呢", pinyin: "ne", definition: "interrogative or emphatic final; (Cant.) this", radicals: "口", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1102", frequencyRank: 383 }
      ,{ traditional: "存", simplified: "存", pinyin: "cún", definition: "exist, live, be; survive; remain", radicals: "子", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0391", frequencyRank: 384 }
      ,{ traditional: "未", simplified: "未", pinyin: "wèi", definition: "not yet; 8th terrestrial branch", radicals: "木", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0192", frequencyRank: 385 }
      ,{ traditional: "远", simplified: "远", pinyin: "yuǎn", definition: "distant, remote, far; profound", radicals: "辵", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0608", frequencyRank: 386 }
      ,{ traditional: "叫", simplified: "叫", pinyin: "jiào", definition: "cry, shout; hail, greet, call", radicals: "口", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0253", frequencyRank: 387 }
      ,{ traditional: "台", simplified: "台", pinyin: "tái", definition: "platform; unit; term of address", radicals: "口", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0342", frequencyRank: 388 }
      ,{ traditional: "单", simplified: "单", pinyin: "dān", definition: "single, individual, only; lone", radicals: "八", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1232", frequencyRank: 389 }
      ,{ traditional: "影", simplified: "影", pinyin: "yǐng", definition: "shadow; image, reflection; photograph", radicals: "彡", strokeCount: 15, hskLevel: 1, generalStandardNumber: "3240", frequencyRank: 390 }
      ,{ traditional: "具", simplified: "具", pinyin: "jù", definition: "tool, implement; draw up, write", radicals: "八", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1077", frequencyRank: 391 }
      ,{ traditional: "罗", simplified: "罗", pinyin: "luō", definition: "net for catching birds; gauze", radicals: "网", strokeCount: 8, hskLevel: null, generalStandardNumber: "1108", frequencyRank: 392 }
      ,{ traditional: "字", simplified: "字", pinyin: "zì", definition: "letter, character, word", radicals: "子", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0548", frequencyRank: 393 }
      ,{ traditional: "爱", simplified: "爱", pinyin: "ài", definition: "love, be fond of, like", radicals: "爪", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1987", frequencyRank: 394 }
      ,{ traditional: "击", simplified: "击", pinyin: "jī", definition: "strike, hit, beat; attack, fight", radicals: "凵", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0195", frequencyRank: 395 }
      ,{ traditional: "流", simplified: "流", pinyin: "liú", definition: "flow, circulate, drift; class", radicals: "水", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2080", frequencyRank: 396 }
      ,{ traditional: "备", simplified: "备", pinyin: "bèi", definition: "prepare, ready, perfect", radicals: "夂", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1200", frequencyRank: 397 }
      ,{ traditional: "兵", simplified: "兵", pinyin: "bīng", definition: "soldier, troops", radicals: "八", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0768", frequencyRank: 398 }
      ,{ traditional: "连", simplified: "连", pinyin: "lián", definition: "join, connect; continuous; even", radicals: "辵", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0708", frequencyRank: 399 }
      ,{ traditional: "调", simplified: "调", pinyin: "diào", definition: "transfer, move, change; tune", radicals: "言", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2123", frequencyRank: 400 }
      ,{ traditional: "深", simplified: "深", pinyin: "shēn", definition: "deep; depth; far; very, extreme", radicals: "水", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2432", frequencyRank: 401 }
      ,{ traditional: "商", simplified: "商", pinyin: "shāng", definition: "commerce, business, trade", radicals: "口", strokeCount: 11, hskLevel: 1, generalStandardNumber: "2391", frequencyRank: 402 }
      ,{ traditional: "算", simplified: "算", pinyin: "suàn", definition: "count, calculate, figure; plan", radicals: "竹", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3121", frequencyRank: 403 }
      ,{ traditional: "质", simplified: "质", pinyin: "zhì", definition: "matter, material, substance", radicals: "厂", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1157", frequencyRank: 404 }
      ,{ traditional: "团", simplified: "团", pinyin: "tuán", definition: "sphere, ball, circle; mass, lump", radicals: "囗", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0425", frequencyRank: 405 }
      ,{ traditional: "集", simplified: "集", pinyin: "jí", definition: "assemble, collect together", radicals: "隹", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2694", frequencyRank: 406 }
      ,{ traditional: "百", simplified: "百", pinyin: "bǎi", definition: "one hundred; numerous, many", radicals: "白", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0389", frequencyRank: 407 }
      ,{ traditional: "需", simplified: "需", pinyin: "xū", definition: "need, require, must", radicals: "雨", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3095", frequencyRank: 408 }
      ,{ traditional: "价", simplified: "价", pinyin: "jià", definition: "price, value", radicals: "人", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0469", frequencyRank: 409 }
      ,{ traditional: "花", simplified: "花", pinyin: "huā", definition: "flower; blossoms", radicals: "艸", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0665", frequencyRank: 410 }
      ,{ traditional: "党", simplified: "党", pinyin: "dǎng", definition: "political party, gang, faction", radicals: "儿", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1885", frequencyRank: 411 }
      ,{ traditional: "华", simplified: "华", pinyin: "huá", definition: "flowery; illustrious; Chinese", radicals: "十", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0472", frequencyRank: 412 }
      ,{ traditional: "城", simplified: "城", pinyin: "chéng", definition: "castle; city, town; municipality", radicals: "土", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1373", frequencyRank: 413 }
      ,{ traditional: "石", simplified: "石", pinyin: "shí", definition: "stone, rock, mineral; rad. 112", radicals: "石", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0216", frequencyRank: 414 }
      ,{ traditional: "级", simplified: "级", pinyin: "jí", definition: "level, rank, class; grade", radicals: "糸", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0594", frequencyRank: 415 }
      ,{ traditional: "整", simplified: "整", pinyin: "zhěng", definition: "orderly, neat, tidy; whole", radicals: "攴", strokeCount: 16, hskLevel: 4, generalStandardNumber: "3333", frequencyRank: 416 }
      ,{ traditional: "府", simplified: "府", pinyin: "fǔ", definition: "prefecture; prefect; government", radicals: "广", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1211", frequencyRank: 417 }
      ,{ traditional: "离", simplified: "离", pinyin: "lí", definition: "rare beast; strange; elegant", radicals: "禸", strokeCount: 10, hskLevel: 2, generalStandardNumber: "2035", frequencyRank: 418 }
      ,{ traditional: "况", simplified: "况", pinyin: "kuàng", definition: "condition, situation; furthermore", radicals: "冫", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0830", frequencyRank: 419 }
      ,{ traditional: "亚", simplified: "亚", pinyin: "yà", definition: "Asia; second", radicals: "一", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0373", frequencyRank: 420 }
      ,{ traditional: "请", simplified: "请", pinyin: "qǐng", definition: "ask, request; invite; please", radicals: "言", strokeCount: 10, hskLevel: 1, generalStandardNumber: "2108", frequencyRank: 421 }
      ,{ traditional: "技", simplified: "技", pinyin: "jì", definition: "skill, ability, talent, ingenuity", radicals: "手", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0615", frequencyRank: 422 }
      ,{ traditional: "际", simplified: "际", pinyin: "jì", definition: "border, boundary, juncture", radicals: "阜", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0911", frequencyRank: 423 }
      ,{ traditional: "约", simplified: "约", pinyin: "yuē", definition: "treaty, agreement, covenant", radicals: "糸", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0593", frequencyRank: 424 }
      ,{ traditional: "示", simplified: "示", pinyin: "shì", definition: "show, manifest; demonstrate", radicals: "示", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0194", frequencyRank: 425 }
      ,{ traditional: "复", simplified: "复", pinyin: "fù", definition: "return; repeat; repeatedly", radicals: "夊", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1553", frequencyRank: 426 }
      ,{ traditional: "病", simplified: "病", pinyin: "bìng", definition: "illness, sickness, disease", radicals: "疒", strokeCount: 10, hskLevel: 2, generalStandardNumber: "2027", frequencyRank: 427 }
      ,{ traditional: "息", simplified: "息", pinyin: "xī", definition: "rest, put stop to, end, cease", radicals: "心", strokeCount: 10, hskLevel: 2, generalStandardNumber: "1973", frequencyRank: 428 }
      ,{ traditional: "究", simplified: "究", pinyin: "jiū", definition: "examine, investigate", radicals: "穴", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0881", frequencyRank: 429 }
      ,{ traditional: "线", simplified: "线", pinyin: "xiàn", definition: "line, thread, wire; clue", radicals: "糸", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1336", frequencyRank: 430 }
      ,{ traditional: "似", simplified: "似", pinyin: "shì", definition: "resemble, similar to; as if, seem", radicals: "人", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0481", frequencyRank: 431 }
      ,{ traditional: "官", simplified: "官", pinyin: "guān", definition: "official, public servant", radicals: "宀", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1281", frequencyRank: 432 }
      ,{ traditional: "火", simplified: "火", pinyin: "huǒ", definition: "fire, flame; burn; anger, rage", radicals: "火", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0164", frequencyRank: 433 }
      ,{ traditional: "断", simplified: "断", pinyin: "duàn", definition: "sever, cut off; interrupt", radicals: "斤", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2405", frequencyRank: 434 }
      ,{ traditional: "精", simplified: "精", pinyin: "jīng", definition: "essence; semen; spirit", radicals: "米", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3153", frequencyRank: 435 }
      ,{ traditional: "满", simplified: "满", pinyin: "mǎn", definition: "fill; full, satisfied", radicals: "水", strokeCount: 13, hskLevel: 3, generalStandardNumber: "3005", frequencyRank: 436 }
      ,{ traditional: "支", simplified: "支", pinyin: "zhī", definition: "disperse, pay; support; branch", radicals: "支", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0089", frequencyRank: 437 }
      ,{ traditional: "视", simplified: "视", pinyin: "shì", definition: "look at, inspect, observe, see", radicals: "見", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1294", frequencyRank: 438 }
      ,{ traditional: "消", simplified: "消", pinyin: "xiāo", definition: "vanish, die out; melt away", radicals: "水", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2071", frequencyRank: 439 }
      ,{ traditional: "越", simplified: "越", pinyin: "yuè", definition: "exceed, go beyond; the more ...", radicals: "走", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2514", frequencyRank: 440 }
      ,{ traditional: "器", simplified: "器", pinyin: "qì", definition: "receptacle, vessel; instrument", radicals: "口", strokeCount: 16, hskLevel: 5, generalStandardNumber: "3348", frequencyRank: 441 }
      ,{ traditional: "容", simplified: "容", pinyin: "róng", definition: "looks, appearance; figure, form", radicals: "宀", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2105", frequencyRank: 442 }
      ,{ traditional: "照", simplified: "照", pinyin: "zhào", definition: "shine, illumine, reflect", radicals: "火", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2911", frequencyRank: 443 }
      ,{ traditional: "须", simplified: "须", pinyin: "xū", definition: "must, have to, necessary", radicals: "彡", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1585", frequencyRank: 444 }
      ,{ traditional: "九", simplified: "九", pinyin: "jiǔ", definition: "nine", radicals: "乙", strokeCount: 2, hskLevel: 1, generalStandardNumber: "0015", frequencyRank: 445 }
      ,{ traditional: "增", simplified: "增", pinyin: "zēng", definition: "increase, add to, augment", radicals: "土", strokeCount: 15, hskLevel: 4, generalStandardNumber: "3204", frequencyRank: 446 }
      ,{ traditional: "研", simplified: "研", pinyin: "yán", definition: "grind, rub; study, research", radicals: "石", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1446", frequencyRank: 447 }
      ,{ traditional: "写", simplified: "写", pinyin: "xiě", definition: "write; draw, sketch; compose", radicals: "冖", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0316", frequencyRank: 448 }
      ,{ traditional: "称", simplified: "称", pinyin: "chēng", definition: "call; name, brand; address; say", radicals: "禾", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1948", frequencyRank: 449 }
      ,{ traditional: "企", simplified: "企", pinyin: "qǐ", definition: "plan a project; stand on tiptoe", radicals: "人", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0490", frequencyRank: 450 }
      ,{ traditional: "八", simplified: "八", pinyin: "bā", definition: "eight; all around, all sides", radicals: "八", strokeCount: 2, hskLevel: 1, generalStandardNumber: "0009", frequencyRank: 451 }
      ,{ traditional: "功", simplified: "功", pinyin: "gōng", definition: "achievement, merit, good result", radicals: "力", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0202", frequencyRank: 452 }
      ,{ traditional: "吗", simplified: "吗", pinyin: "ma", definition: "final interrogative particle", radicals: "口", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0432", frequencyRank: 453 }
      ,{ traditional: "包", simplified: "包", pinyin: "bāo", definition: "wrap, pack, bundle; package", radicals: "勹", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0298", frequencyRank: 454 }
      ,{ traditional: "片", simplified: "片", pinyin: "piàn", definition: "slice, splinter, strip; rad. 91", radicals: "片", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0130", frequencyRank: 455 }
      ,{ traditional: "史", simplified: "史", pinyin: "shǐ", definition: "history, chronicle, annals", radicals: "口", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0248", frequencyRank: 456 }
      ,{ traditional: "委", simplified: "委", pinyin: "wěi", definition: "appoint, send, commission", radicals: "女", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1133", frequencyRank: 457 }
      ,{ traditional: "乎", simplified: "乎", pinyin: "hū", definition: "interrogative or exclamatory final particle", radicals: "丿", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0280", frequencyRank: 458 }
      ,{ traditional: "查", simplified: "查", pinyin: "chá", definition: "investigate, examine, seek into", radicals: "木", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1431", frequencyRank: 459 }
      ,{ traditional: "轻", simplified: "轻", pinyin: "qīng", definition: "light; easy, simple; gentle", radicals: "車", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1463", frequencyRank: 460 }
      ,{ traditional: "易", simplified: "易", pinyin: "yì", definition: "change; easy", radicals: "日", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1088", frequencyRank: 461 }
      ,{ traditional: "早", simplified: "早", pinyin: "zǎo", definition: "early; soon; morning", radicals: "日", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0419", frequencyRank: 462 }
      ,{ traditional: "曾", simplified: "曾", pinyin: "céng", definition: "already; sign of past", radicals: "曰", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2747", frequencyRank: 463 }
      ,{ traditional: "除", simplified: "除", pinyin: "chú", definition: "eliminate, remove, except", radicals: "阜", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1732", frequencyRank: 464 }
      ,{ traditional: "农", simplified: "农", pinyin: "nóng", definition: "agriculture, farming; farmer", radicals: "冖", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0558", frequencyRank: 465 }
      ,{ traditional: "找", simplified: "找", pinyin: "zhǎo", definition: "search, seek, look for; find", radicals: "手", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0621", frequencyRank: 466 }
      ,{ traditional: "装", simplified: "装", pinyin: "zhuāng", definition: "dress, clothes, attire; fill", radicals: "衣", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2726", frequencyRank: 467 }
      ,{ traditional: "广", simplified: "广", pinyin: "guǎng", definition: "wide, extensive, broad; rad. 53", radicals: "广", strokeCount: 3, hskLevel: 4, generalStandardNumber: "0053", frequencyRank: 468 }
      ,{ traditional: "显", simplified: "显", pinyin: "xiǎn", definition: "manifest, display; evident, clear", radicals: "日", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1485", frequencyRank: 469 }
      ,{ traditional: "吧", simplified: "吧", pinyin: "ba", definition: "emphatic final particle", radicals: "口", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0747", frequencyRank: 470 }
      ,{ traditional: "阿", simplified: "阿", pinyin: "ā", definition: "family, close, affectionate", radicals: "阜", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0913", frequencyRank: 471 }
      ,{ traditional: "李", simplified: "李", pinyin: "lǐ", definition: "plum; judge; surname", radicals: "木", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0688", frequencyRank: 472 }
      ,{ traditional: "标", simplified: "标", pinyin: "biāo", definition: "mark, symbol, label, sign; stand the bole of a tree", radicals: "木", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1424", frequencyRank: 473 }
      ,{ traditional: "谈", simplified: "谈", pinyin: "tán", definition: "talk; conversation; surname", radicals: "言", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2127", frequencyRank: 474 }
      ,{ traditional: "吃", simplified: "吃", pinyin: "chī", definition: "eat; drink; suffer, endure, bear", radicals: "口", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0429", frequencyRank: 475 }
      ,{ traditional: "图", simplified: "图", pinyin: "tú", definition: "diagram; chart, map, picture", radicals: "囗", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1119", frequencyRank: 476 }
      ,{ traditional: "念", simplified: "念", pinyin: "niàn", definition: "think of, recall, study", radicals: "心", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1177", frequencyRank: 477 }
      ,{ traditional: "六", simplified: "六", pinyin: "liù", definition: "number six", radicals: "八", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0160", frequencyRank: 478 }
      ,{ traditional: "引", simplified: "引", pinyin: "yǐn", definition: "to pull, draw out, attract; to stretch", radicals: "弓", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0176", frequencyRank: 479 }
      ,{ traditional: "历", simplified: "历", pinyin: "lì", definition: "history; calendar", radicals: "厂", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0095", frequencyRank: 480 }
      ,{ traditional: "首", simplified: "首", pinyin: "shǒu", definition: "head; first; leader, chief; a poem", radicals: "首", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1651", frequencyRank: 481 }
      ,{ traditional: "医", simplified: "医", pinyin: "yī", definition: "cure, heal; doctor, medical", radicals: "匸", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0700", frequencyRank: 482 }
      ,{ traditional: "局", simplified: "局", pinyin: "jú", definition: "bureau, office; circumstance", radicals: "尸", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0907", frequencyRank: 483 }
      ,{ traditional: "突", simplified: "突", pinyin: "tū", definition: "suddenly, abruptly, unexpectedly", radicals: "穴", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1700", frequencyRank: 484 }
      ,{ traditional: "专", simplified: "专", pinyin: "zhuān", definition: "monopolize, take sole possession", radicals: "一", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0083", frequencyRank: 485 }
      ,{ traditional: "费", simplified: "费", pinyin: "fèi", definition: "expenses, expenditures, fee", radicals: "貝", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1726", frequencyRank: 486 }
      ,{ traditional: "号", simplified: "号", pinyin: "hào", definition: "mark, sign; symbol; number", radicals: "口", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0243", frequencyRank: 487 }
      ,{ traditional: "尽", simplified: "尽", pinyin: "jǐn", definition: "exhaust, use up; deplete", radicals: "尸", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0566", frequencyRank: 488 }
      ,{ traditional: "另", simplified: "另", pinyin: "lìng", definition: "another, separate, other", radicals: "口", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0256", frequencyRank: 489 }
      ,{ traditional: "周", simplified: "周", pinyin: "zhōu", definition: "Zhou dynasty; circumference", radicals: "口", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1192", frequencyRank: 490 }
      ,{ traditional: "较", simplified: "较", pinyin: "jiào", definition: "compare; comparatively, more", radicals: "車", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1876", frequencyRank: 491 }
      ,{ traditional: "注", simplified: "注", pinyin: "zhù", definition: "concentrate, focus, direct", radicals: "水", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1252", frequencyRank: 492 }
      ,{ traditional: "语", simplified: "语", pinyin: "yǔ", definition: "language, words; saying, expression", radicals: "言", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1707", frequencyRank: 493 }
      ,{ traditional: "仅", simplified: "仅", pinyin: "jǐn", definition: "only, merely, solely, just", radicals: "人", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0136", frequencyRank: 494 }
      ,{ traditional: "考", simplified: "考", pinyin: "kǎo", definition: "examine, test; investigate", radicals: "老", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0358", frequencyRank: 495 }
      ,{ traditional: "落", simplified: "落", pinyin: "luò", definition: "fall, drop; net income, surplus", radicals: "艸", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2557", frequencyRank: 496 }
      ,{ traditional: "青", simplified: "青", pinyin: "qīng", definition: "blue, green, black; young", radicals: "青", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0947", frequencyRank: 497 }
      ,{ traditional: "随", simplified: "随", pinyin: "suí", definition: "follow, listen to, submit to", radicals: "阜", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2476", frequencyRank: 498 }
      ,{ traditional: "选", simplified: "选", pinyin: "xuǎn", definition: "choose, select; elect; election", radicals: "辵", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1545", frequencyRank: 499 }
      ,{ traditional: "列", simplified: "列", pinyin: "liè", definition: "a line; to arrange in order, classify", radicals: "刀", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0399", frequencyRank: 500 }
      ,{ traditional: "武", simplified: "武", pinyin: "wǔ", definition: "military; martial, warlike", radicals: "止", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0946", frequencyRank: 501 }
      ,{ traditional: "红", simplified: "红", pinyin: "hóng", definition: "red, vermillion; blush, flush", radicals: "糸", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0589", frequencyRank: 502 }
      ,{ traditional: "响", simplified: "响", pinyin: "xiǎng", definition: "make sound, make noise; sound", radicals: "口", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1509", frequencyRank: 503 }
      ,{ traditional: "虽", simplified: "虽", pinyin: "suī", definition: "although, even if", radicals: "虫", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1502", frequencyRank: 504 }
      ,{ traditional: "推", simplified: "推", pinyin: "tuī", definition: "push, expel; push forward", radicals: "手", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2174", frequencyRank: 505 }
      ,{ traditional: "势", simplified: "势", pinyin: "shì", definition: "power, force; tendency", radicals: "力", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0977", frequencyRank: 506 }
      ,{ traditional: "参", simplified: "参", pinyin: "cān", definition: "take part in, intervene; ginseng", radicals: "厶", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1334", frequencyRank: 507 }
      ,{ traditional: "希", simplified: "希", pinyin: "xī", definition: "rare; hope, expect, strive for", radicals: "巾", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0796", frequencyRank: 508 }
      ,{ traditional: "古", simplified: "古", pinyin: "gǔ", definition: "old, classic, ancient", radicals: "口", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0208", frequencyRank: 509 }
      ,{ traditional: "众", simplified: "众", pinyin: "zhòng", definition: "multitude, crowd; masses, public", radicals: "人", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0491", frequencyRank: 510 }
      ,{ traditional: "构", simplified: "构", pinyin: "gòu", definition: "frame, building, structure", radicals: "木", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1029", frequencyRank: 511 }
      ,{ traditional: "房", simplified: "房", pinyin: "fáng", definition: "house, building; room", radicals: "戶", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1290", frequencyRank: 512 }
      ,{ traditional: "半", simplified: "半", pinyin: "bàn", definition: "half", radicals: "十", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0307", frequencyRank: 513 }
      ,{ traditional: "节", simplified: "节", pinyin: "jié", definition: "knot, node, joint; section", radicals: "艸", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0209", frequencyRank: 514 }
      ,{ traditional: "土", simplified: "土", pinyin: "tǔ", definition: "soil, earth; items made of earth", radicals: "土", strokeCount: 3, hskLevel: 5, generalStandardNumber: "0027", frequencyRank: 515 }
      ,{ traditional: "投", simplified: "投", pinyin: "tóu", definition: "throw, cast, fling, pitch; jump", radicals: "手", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0643", frequencyRank: 516 }
      ,{ traditional: "某", simplified: "某", pinyin: "mǒu", definition: "certain thing or person", radicals: "木", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1399", frequencyRank: 517 }
      ,{ traditional: "案", simplified: "案", pinyin: "àn", definition: "table, bench; legal case", radicals: "木", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2107", frequencyRank: 518 }
      ,{ traditional: "黑", simplified: "黑", pinyin: "hēi", definition: "black; dark; evil, sinister", radicals: "黑", strokeCount: 12, hskLevel: 2, generalStandardNumber: "2655", frequencyRank: 519 }
      ,{ traditional: "维", simplified: "维", pinyin: "wéi", definition: "maintain, preserve, safeguard", radicals: "糸", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2492", frequencyRank: 520 }
      ,{ traditional: "革", simplified: "革", pinyin: "gé", definition: "leather, animal hides; rad. 177", radicals: "革", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1403", frequencyRank: 521 }
      ,{ traditional: "划", simplified: "划", pinyin: "huà", definition: "to row or paddle boat; to scratch", radicals: "刀", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0407", frequencyRank: 522 }
      ,{ traditional: "敌", simplified: "敌", pinyin: "dí", definition: "enemy, foe, rival; resist", radicals: "舌", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1942", frequencyRank: 523 }
      ,{ traditional: "致", simplified: "致", pinyin: "zhì", definition: "send, deliver, present; cause", radicals: "至", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1879", frequencyRank: 524 }
      ,{ traditional: "陈", simplified: "陈", pinyin: "chén", definition: "exhibit, display; plead; a surname", radicals: "阜", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0914", frequencyRank: 525 }
      ,{ traditional: "律", simplified: "律", pinyin: "lǜ", definition: "statute, principle, regulation", radicals: "彳", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1583", frequencyRank: 526 }
      ,{ traditional: "足", simplified: "足", pinyin: "zú", definition: "foot; attain, satisfy, enough", radicals: "足", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0731", frequencyRank: 527 }
      ,{ traditional: "态", simplified: "态", pinyin: "tài", definition: "manner, bearing, attitude", radicals: "心", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1052", frequencyRank: 528 }
      ,{ traditional: "护", simplified: "护", pinyin: "hù", definition: "protect, guard, defend, shelter", radicals: "手", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0649", frequencyRank: 529 }
      ,{ traditional: "七", simplified: "七", pinyin: "qī", definition: "seven", radicals: "一", strokeCount: 2, hskLevel: 1, generalStandardNumber: "0007", frequencyRank: 530 }
      ,{ traditional: "兴", simplified: "兴", pinyin: "xìng", definition: "thrive, prosper, flourish", radicals: "八", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0544", frequencyRank: 531 }
      ,{ traditional: "派", simplified: "派", pinyin: "pài", definition: "school of thought, sect, branch", radicals: "水", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1673", frequencyRank: 532 }
      ,{ traditional: "孩", simplified: "孩", pinyin: "hái", definition: "baby, child; children", radicals: "子", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1730", frequencyRank: 533 }
      ,{ traditional: "验", simplified: "验", pinyin: "yàn", definition: "test, examine, inspect; verify", radicals: "馬", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2152", frequencyRank: 534 }
      ,{ traditional: "责", simplified: "责", pinyin: "zé", definition: "responsible, liable, accountable", radicals: "貝", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0948", frequencyRank: 535 }
      ,{ traditional: "营", simplified: "营", pinyin: "yíng", definition: "encampment, barracks; manage", radicals: "艸", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2214", frequencyRank: 536 }
      ,{ traditional: "星", simplified: "星", pinyin: "xīng", definition: "a star, planet; any point of light", radicals: "日", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1488", frequencyRank: 537 }
      ,{ traditional: "够", simplified: "够", pinyin: "gòu", definition: "enough, adequate", radicals: "夕", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2362", frequencyRank: 538 }
      ,{ traditional: "章", simplified: "章", pinyin: "zhāng", definition: "composition; chapter, section", radicals: "立", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2389", frequencyRank: 539 }
      ,{ traditional: "音", simplified: "音", pinyin: "yīn", definition: "sound, tone, pitch, pronunciation", radicals: "音", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1632", frequencyRank: 540 }
      ,{ traditional: "跟", simplified: "跟", pinyin: "gēn", definition: "heel; to follow, accompany; with", radicals: "足", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2920", frequencyRank: 541 }
      ,{ traditional: "志", simplified: "志", pinyin: "zhì", definition: "purpose, will, determination; annals", radicals: "心", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0651", frequencyRank: 542 }
      ,{ traditional: "底", simplified: "底", pinyin: "dǐ", definition: "bottom, underneath, underside", radicals: "广", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1212", frequencyRank: 543 }
      ,{ traditional: "站", simplified: "站", pinyin: "zhàn", definition: "stand up; a stand, station", radicals: "立", strokeCount: 10, hskLevel: 2, generalStandardNumber: "2041", frequencyRank: 544 }
      ,{ traditional: "严", simplified: "严", pinyin: "yán", definition: "strict, rigorous, rigid; stern", radicals: "一", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0671", frequencyRank: 545 }
      ,{ traditional: "巴", simplified: "巴", pinyin: "bā", definition: "greatly desire, anxiously hope", radicals: "己", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0178", frequencyRank: 546 }
      ,{ traditional: "例", simplified: "例", pinyin: "lì", definition: "precedent, example; regulation", radicals: "人", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1140", frequencyRank: 547 }
      ,{ traditional: "防", simplified: "防", pinyin: "fáng", definition: "defend; prevent; embankment", radicals: "阜", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0576", frequencyRank: 548 }
      ,{ traditional: "族", simplified: "族", pinyin: "zú", definition: "a family clan, ethnic group, tribe", radicals: "方", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2392", frequencyRank: 549 }
      ,{ traditional: "供", simplified: "供", pinyin: "gōng", definition: "supply, provide for; offer in worship", radicals: "人", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1138", frequencyRank: 550 }
      ,{ traditional: "效", simplified: "效", pinyin: "xiào", definition: "result, effect; effectiveness", radicals: "攴", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2034", frequencyRank: 551 }
      ,{ traditional: "续", simplified: "续", pinyin: "xù", definition: "continue, carry on; succeed", radicals: "糸", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2488", frequencyRank: 552 }
      ,{ traditional: "施", simplified: "施", pinyin: "shī", definition: "grant, bestow; give; act; name", radicals: "方", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1634", frequencyRank: 553 }
      ,{ traditional: "留", simplified: "留", pinyin: "liú", definition: "stop, halt; stay, detain, keep", radicals: "田", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2009", frequencyRank: 554 }
      ,{ traditional: "讲", simplified: "讲", pinyin: "jiǎng", definition: "explain; discuss; talk", radicals: "言", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0550", frequencyRank: 555 }
      ,{ traditional: "型", simplified: "型", pinyin: "xíng", definition: "pattern, model, type; law; mold", radicals: "土", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1363", frequencyRank: 556 }
      ,{ traditional: "料", simplified: "料", pinyin: "liào", definition: "consider, conjecture; materials, ingredients", radicals: "斗", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2054", frequencyRank: 557 }
      ,{ traditional: "终", simplified: "终", pinyin: "zhōng", definition: "end; finally, in the end", radicals: "糸", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1344", frequencyRank: 558 }
      ,{ traditional: "答", simplified: "答", pinyin: "dá", definition: "answer, reply; return; assent to", radicals: "竹", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2687", frequencyRank: 559 }
      ,{ traditional: "紧", simplified: "紧", pinyin: "jǐn", definition: "tense, tight, taut; firm, secure", radicals: "糸", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1884", frequencyRank: 560 }
      ,{ traditional: "黄", simplified: "黄", pinyin: "huáng", definition: "yellow; surname", radicals: "黃", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2201", frequencyRank: 561 }
      ,{ traditional: "绝", simplified: "绝", pinyin: "jué", definition: "to cut, sever, break off, terminate", radicals: "糸", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1762", frequencyRank: 562 }
      ,{ traditional: "奇", simplified: "奇", pinyin: "qí", definition: "strange, unusual, uncanny, occult", radicals: "大", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1050", frequencyRank: 563 }
      ,{ traditional: "察", simplified: "察", pinyin: "chá", definition: "examine, investigate; notice", radicals: "宀", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3174", frequencyRank: 564 }
      ,{ traditional: "母", simplified: "母", pinyin: "mǔ", definition: "mother; female elders; female", radicals: "毋", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0345", frequencyRank: 565 }
      ,{ traditional: "京", simplified: "京", pinyin: "jīng", definition: "capital city", radicals: "亠", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1205", frequencyRank: 566 }
      ,{ traditional: "段", simplified: "段", pinyin: "duàn", definition: "section, piece, division", radicals: "殳", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1555", frequencyRank: 567 }
      ,{ traditional: "依", simplified: "依", pinyin: "yī", definition: "rely on, be set in; consent, obey a wish", radicals: "人", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1153", frequencyRank: 568 }
      ,{ traditional: "批", simplified: "批", pinyin: "pī", definition: "comment, criticize; wholesale", radicals: "手", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0622", frequencyRank: 569 }
      ,{ traditional: "群", simplified: "群", pinyin: "qún", definition: "(same as 羣) group, crowd, multitude, mob", radicals: "羊", strokeCount: 13, hskLevel: 5, generalStandardNumber: "3035", frequencyRank: 570 }
      ,{ traditional: "项", simplified: "项", pinyin: "xiàng", definition: "neck, nape of neck; sum; funds", radicals: "頁", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1370", frequencyRank: 571 }
      ,{ traditional: "故", simplified: "故", pinyin: "gù", definition: "ancient, old; reason, because", radicals: "攴", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1418", frequencyRank: 572 }
      ,{ traditional: "按", simplified: "按", pinyin: "àn", definition: "put hand on, press down with hand", radicals: "手", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1395", frequencyRank: 573 }
      ,{ traditional: "河", simplified: "河", pinyin: "hé", definition: "river; stream; yellow river", radicals: "水", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1244", frequencyRank: 574 }
      ,{ traditional: "米", simplified: "米", pinyin: "mǐ", definition: "hulled or husked uncooked rice", radicals: "米", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0533", frequencyRank: 575 }
      ,{ traditional: "围", simplified: "围", pinyin: "wéi", definition: "surround, encircle, corral", radicals: "囗", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0728", frequencyRank: 576 }
      ,{ traditional: "江", simplified: "江", pinyin: "jiāng", definition: "large river; yangzi; surname", radicals: "水", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0538", frequencyRank: 577 }
      ,{ traditional: "织", simplified: "织", pinyin: "zhī", definition: "weave, knit; organize, unite", radicals: "糸", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1342", frequencyRank: 578 }
      ,{ traditional: "害", simplified: "害", pinyin: "hài", definition: "injure, harm; destroy, kill", radicals: "宀", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2097", frequencyRank: 579 }
      ,{ traditional: "斗", simplified: "斗", pinyin: "dòu", definition: "Chinese peck; liquid measure", radicals: "斗", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0166", frequencyRank: 580 }
      ,{ traditional: "双", simplified: "双", pinyin: "shuāng", definition: "set of two, pair, couple; both", radicals: "又", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0187", frequencyRank: 581 }
      ,{ traditional: "境", simplified: "境", pinyin: "jìng", definition: "boundary, frontier; area, region", radicals: "土", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3061", frequencyRank: 582 }
      ,{ traditional: "客", simplified: "客", pinyin: "kè", definition: "guest, traveller; customer", radicals: "宀", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1703", frequencyRank: 583 }
      ,{ traditional: "纪", simplified: "纪", pinyin: "jì", definition: "record, annal, historical account", radicals: "糸", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0595", frequencyRank: 584 }
      ,{ traditional: "采", simplified: "采", pinyin: "cǎi", definition: "collect, gather; pick, pluck", radicals: "釆", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1172", frequencyRank: 585 }
      ,{ traditional: "举", simplified: "举", pinyin: "jǔ", definition: "raise, lift up; recommend", radicals: "丶", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1693", frequencyRank: 586 }
      ,{ traditional: "杀", simplified: "杀", pinyin: "shā", definition: "kill, slaughter, murder; hurt", radicals: "木", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0487", frequencyRank: 587 }
      ,{ traditional: "攻", simplified: "攻", pinyin: "gōng", definition: "attack, assault; criticize", radicals: "攴", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0630", frequencyRank: 588 }
      ,{ traditional: "父", simplified: "父", pinyin: "fù", definition: "father; KangXi radical 88", radicals: "父", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0141", frequencyRank: 589 }
      ,{ traditional: "苏", simplified: "苏", pinyin: "sū", definition: "(phonetic, used in names) ", radicals: "艸", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0677", frequencyRank: 590 }
      ,{ traditional: "密", simplified: "密", pinyin: "mì", definition: "dense, thick, close; intimate", radicals: "宀", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2458", frequencyRank: 591 }
      ,{ traditional: "低", simplified: "低", pinyin: "dī", definition: "low; to lower, hang, bend, bow", radicals: "人", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0781", frequencyRank: 592 }
      ,{ traditional: "朝", simplified: "朝", pinyin: "cháo", definition: "dynasty; morning", radicals: "月", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2559", frequencyRank: 593 }
      ,{ traditional: "友", simplified: "友", pinyin: "yǒu", definition: "friend, companion; fraternity", radicals: "又", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0097", frequencyRank: 594 }
      ,{ traditional: "诉", simplified: "诉", pinyin: "sù", definition: "accuse; sue; inform; narrate", radicals: "言", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0894", frequencyRank: 595 }
      ,{ traditional: "止", simplified: "止", pinyin: "zhǐ", definition: "stop, halt, desist; detain", radicals: "止", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0109", frequencyRank: 596 }
      ,{ traditional: "细", simplified: "细", pinyin: "xì", definition: "fine, tiny; slender, thin", radicals: "糸", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1340", frequencyRank: 597 }
      ,{ traditional: "愿", simplified: "愿", pinyin: "yuàn", definition: "sincere, honest, virtuous", radicals: "心", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3094", frequencyRank: 598 }
      ,{ traditional: "千", simplified: "千", pinyin: "qiān", definition: "thousand; many, numerous; very; (Cant.) a cheater, swindler", radicals: "十", strokeCount: 3, hskLevel: 2, generalStandardNumber: "0041", frequencyRank: 599 }
      ,{ traditional: "值", simplified: "值", pinyin: "zhí", definition: "price", radicals: "人", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1956", frequencyRank: 600 }
      ,{ traditional: "仍", simplified: "仍", pinyin: "réng", definition: "yet, still, as ever; again; keep -ing, continuing", radicals: "人", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0135", frequencyRank: 601 }
      ,{ traditional: "男", simplified: "男", pinyin: "nán", definition: "male, man; son; baron; surname", radicals: "田", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0733", frequencyRank: 602 }
      ,{ traditional: "钱", simplified: "钱", pinyin: "qián", definition: "money, currency, coins", radicals: "金", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1928", frequencyRank: 603 }
      ,{ traditional: "破", simplified: "破", pinyin: "pò", definition: "break, ruin, destroy; rout", radicals: "石", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1867", frequencyRank: 604 }
      ,{ traditional: "网", simplified: "网", pinyin: "wǎng", definition: "net; network; KangXi radical 122", radicals: "网", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0442", frequencyRank: 605 }
      ,{ traditional: "热", simplified: "热", pinyin: "rè", definition: "hot; heat; fever; restless; zeal", radicals: "火", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1809", frequencyRank: 606 }
      ,{ traditional: "助", simplified: "助", pinyin: "zhù", definition: "help, aid, assist", radicals: "力", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0719", frequencyRank: 607 }
      ,{ traditional: "倒", simplified: "倒", pinyin: "dào", definition: "fall over; lie down; take turns", radicals: "人", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1960", frequencyRank: 608 }
      ,{ traditional: "育", simplified: "育", pinyin: "yù", definition: "produce, give birth to; educate", radicals: "肉", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1225", frequencyRank: 609 }
      ,{ traditional: "属", simplified: "属", pinyin: "shǔ", definition: "class, category, type; belong to", radicals: "尸", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2800", frequencyRank: 610 }
      ,{ traditional: "坐", simplified: "坐", pinyin: "zuò", definition: "sit; seat; ride, travel by", radicals: "土", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0797", frequencyRank: 611 }
      ,{ traditional: "帝", simplified: "帝", pinyin: "dì", definition: "supreme ruler, emperor; god", radicals: "巾", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1633", frequencyRank: 612 }
      ,{ traditional: "限", simplified: "限", pinyin: "xiàn", definition: "boundary, limit, line", radicals: "阜", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1323", frequencyRank: 613 }
      ,{ traditional: "船", simplified: "船", pinyin: "chuán", definition: "ship, boat, vessel", radicals: "舟", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2345", frequencyRank: 614 }
      ,{ traditional: "脸", simplified: "脸", pinyin: "liǎn", definition: "face; cheek; reputation", radicals: "肉", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2359", frequencyRank: 615 }
      ,{ traditional: "职", simplified: "职", pinyin: "zhí", definition: "duty, profession; office, post", radicals: "耳", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2192", frequencyRank: 616 }
      ,{ traditional: "速", simplified: "速", pinyin: "sù", definition: "quick, prompt, speedy", radicals: "辵", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1853", frequencyRank: 617 }
      ,{ traditional: "刻", simplified: "刻", pinyin: "kè", definition: "carve, engrave; quarter hour", radicals: "刀", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1224", frequencyRank: 618 }
      ,{ traditional: "乐", simplified: "乐", pinyin: "lè", definition: "happy, glad; enjoyable; music", radicals: "丿", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0287", frequencyRank: 619 }
      ,{ traditional: "否", simplified: "否", pinyin: "fǒu", definition: "not, no, negative; final particle", radicals: "口", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0703", frequencyRank: 620 }
      ,{ traditional: "刚", simplified: "刚", pinyin: "gāng", definition: "hard, tough, rigid, strong", radicals: "刀", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0441", frequencyRank: 621 }
      ,{ traditional: "威", simplified: "威", pinyin: "wēi", definition: "pomp, power; powerful; dominate", radicals: "女", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1444", frequencyRank: 622 }
      ,{ traditional: "毛", simplified: "毛", pinyin: "máo", definition: "hair, fur, feathers; coarse", radicals: "毛", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0123", frequencyRank: 623 }
      ,{ traditional: "状", simplified: "状", pinyin: "zhuàng", definition: "form; appearance; shape; official", radicals: "犬", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0828", frequencyRank: 624 }
      ,{ traditional: "率", simplified: "率", pinyin: "lǜ", definition: "to lead; ratio; rate; limit", radicals: "玄", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2395", frequencyRank: 625 }
      ,{ traditional: "甚", simplified: "甚", pinyin: "shén", definition: "great extent; considerably", radicals: "甘", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1400", frequencyRank: 626 }
      ,{ traditional: "独", simplified: "独", pinyin: "dú", definition: "alone, single, solitary, only", radicals: "犬", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1602", frequencyRank: 627 }
      ,{ traditional: "球", simplified: "球", pinyin: "qiú", definition: "ball, sphere, globe; round", radicals: "玉", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2155", frequencyRank: 628 }
      ,{ traditional: "般", simplified: "般", pinyin: "bān", definition: "sort, manner, kind, category", radicals: "舟", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1980", frequencyRank: 629 }
      ,{ traditional: "普", simplified: "普", pinyin: "pǔ", definition: "universal, general, widespread", radicals: "日", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2741", frequencyRank: 630 }
      ,{ traditional: "怕", simplified: "怕", pinyin: "pà", definition: "to fear, be afraid of; apprehensive", radicals: "心", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1269", frequencyRank: 631 }
      ,{ traditional: "弹", simplified: "弹", pinyin: "dàn", definition: "pellet, bullet, shot, shell", radicals: "弓", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2473", frequencyRank: 632 }
      ,{ traditional: "校", simplified: "校", pinyin: "xiào", definition: "school; military field officer", radicals: "木", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1847", frequencyRank: 633 }
      ,{ traditional: "苦", simplified: "苦", pinyin: "kǔ", definition: "bitter; hardship, suffering", radicals: "艸", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0999", frequencyRank: 634 }
      ,{ traditional: "创", simplified: "创", pinyin: "chuàng", definition: "establish, create; knife cut", radicals: "刀", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0494", frequencyRank: 635 }
      ,{ traditional: "假", simplified: "假", pinyin: "jiǎ", definition: "falsehood, deception; vacation", radicals: "人", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2337", frequencyRank: 636 }
      ,{ traditional: "久", simplified: "久", pinyin: "jiǔ", definition: "long time (ago); time passage, grow late", radicals: "丿", strokeCount: 3, hskLevel: 3, generalStandardNumber: "0047", frequencyRank: 637 }
      ,{ traditional: "错", simplified: "错", pinyin: "cuò", definition: "error, blunder, mistake; wrong", radicals: "金", strokeCount: 13, hskLevel: 2, generalStandardNumber: "2936", frequencyRank: 638 }
      ,{ traditional: "承", simplified: "承", pinyin: "chéng", definition: "inherit, receive; succeed", radicals: "手", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1315", frequencyRank: 639 }
      ,{ traditional: "印", simplified: "印", pinyin: "yìn", definition: "print, seal, stamp, chop, mark", radicals: "卩", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0285", frequencyRank: 640 }
      ,{ traditional: "晚", simplified: "晚", pinyin: "wǎn", definition: "night, evening; late", radicals: "日", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2270", frequencyRank: 641 }
      ,{ traditional: "兰", simplified: "兰", pinyin: "lán", definition: "orchid; elegant, graceful", radicals: "八", strokeCount: 5, hskLevel: null, generalStandardNumber: "0306", frequencyRank: 642 }
      ,{ traditional: "试", simplified: "试", pinyin: "shì", definition: "test, try, experiment", radicals: "言", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1286", frequencyRank: 643 }
      ,{ traditional: "股", simplified: "股", pinyin: "gǔ", definition: "thighs, haunches, rump; share", radicals: "肉", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1186", frequencyRank: 644 }
      ,{ traditional: "拿", simplified: "拿", pinyin: "ná", definition: "take, hold, grasp; bring; with", radicals: "手", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1983", frequencyRank: 645 }
      ,{ traditional: "脑", simplified: "脑", pinyin: "nǎo", definition: "brain", radicals: "肉", strokeCount: 10, hskLevel: 1, generalStandardNumber: "2001", frequencyRank: 646 }
      ,{ traditional: "预", simplified: "预", pinyin: "yù", definition: "prepare, arrange; in advance", radicals: "頁", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2148", frequencyRank: 647 }
      ,{ traditional: "谁", simplified: "谁", pinyin: "shuí", definition: "who? whom? whose? anyone?", radicals: "言", strokeCount: 10, hskLevel: 1, generalStandardNumber: "2122", frequencyRank: 648 }
      ,{ traditional: "益", simplified: "益", pinyin: "yì", definition: "profit, benefit; advantage", radicals: "皿", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2055", frequencyRank: 649 }
      ,{ traditional: "阳", simplified: "阳", pinyin: "yáng", definition: "yang of yin-yang; positive,sunny, bright, masculine, warm", radicals: "阜", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0572", frequencyRank: 650 }
      ,{ traditional: "若", simplified: "若", pinyin: "ruò", definition: "if, supposing, assuming; similar", radicals: "艸", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1002", frequencyRank: 651 }
      ,{ traditional: "哪", simplified: "哪", pinyin: "nǎ", definition: "which? where? how?", radicals: "口", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1515", frequencyRank: 652 }
      ,{ traditional: "微", simplified: "微", pinyin: "wēi", definition: "small, prefix micro-, trifling", radicals: "彳", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2965", frequencyRank: 653 }
      ,{ traditional: "尼", simplified: "尼", pinyin: "ní", definition: "Buddhist nun; transliteration", radicals: "尸", strokeCount: 5, hskLevel: null, generalStandardNumber: "0326", frequencyRank: 654 }
      ,{ traditional: "继", simplified: "继", pinyin: "jì", definition: "continue, maintain, carry on", radicals: "糸", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2153", frequencyRank: 655 }
      ,{ traditional: "送", simplified: "送", pinyin: "sòng", definition: "see off, send off; dispatch, give", radicals: "辵", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1645", frequencyRank: 656 }
      ,{ traditional: "急", simplified: "急", pinyin: "jí", definition: "quick, quickly; urgent, pressing", radicals: "心", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1609", frequencyRank: 657 }
      ,{ traditional: "血", simplified: "血", pinyin: "xuè", definition: "blood; radical number 143", radicals: "血", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0479", frequencyRank: 658 }
      ,{ traditional: "惊", simplified: "惊", pinyin: "jīng", definition: "frighten, surprise, startle", radicals: "心", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2445", frequencyRank: 659 }
      ,{ traditional: "伤", simplified: "伤", pinyin: "shāng", definition: "wound, injury; fall ill from", radicals: "人", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0468", frequencyRank: 660 }
      ,{ traditional: "素", simplified: "素", pinyin: "sù", definition: "white (silk); plain; vegetarian; formerly; normally", radicals: "糸", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1775", frequencyRank: 661 }
      ,{ traditional: "药", simplified: "药", pinyin: "yào", definition: "leaf of Dahurian angelica plant; medicine", radicals: "艸", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1423", frequencyRank: 662 }
      ,{ traditional: "适", simplified: "适", pinyin: "shì", definition: "go, reach; appropriate, suitable", radicals: "辵", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1546", frequencyRank: 663 }
      ,{ traditional: "波", simplified: "波", pinyin: "bō", definition: "waves, breakers; undulations", radicals: "水", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1261", frequencyRank: 664 }
      ,{ traditional: "夜", simplified: "夜", pinyin: "yè", definition: "night, dark; in night; by night", radicals: "夕", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1209", frequencyRank: 665 }
      ,{ traditional: "省", simplified: "省", pinyin: "shěng", definition: "province; save, economize", radicals: "目", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1474", frequencyRank: 666 }
      ,{ traditional: "初", simplified: "初", pinyin: "chū", definition: "beginning, initial, primary", radicals: "刀", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0889", frequencyRank: 667 }
      ,{ traditional: "喜", simplified: "喜", pinyin: "xǐ", definition: "like, love, enjoy; joyful thing", radicals: "口", strokeCount: 12, hskLevel: 1, generalStandardNumber: "2523", frequencyRank: 668 }
      ,{ traditional: "卫", simplified: "卫", pinyin: "wèi", definition: "guard, protect, defend", radicals: "乙", strokeCount: 3, hskLevel: 4, generalStandardNumber: "0065", frequencyRank: 669 }
      ,{ traditional: "源", simplified: "源", pinyin: "yuán", definition: "spring; source, head; surname", radicals: "水", strokeCount: 13, hskLevel: 5, generalStandardNumber: "3008", frequencyRank: 670 }
      ,{ traditional: "食", simplified: "食", pinyin: "shí", definition: "eat; meal; food; KangXi radical number 184", radicals: "食", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1589", frequencyRank: 671 }
      ,{ traditional: "险", simplified: "险", pinyin: "xiǎn", definition: "narrow pass, strategic point", radicals: "阜", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1733", frequencyRank: 672 }
      ,{ traditional: "待", simplified: "待", pinyin: "dài", definition: "treat, entertain, receive; wait", radicals: "彳", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1580", frequencyRank: 673 }
      ,{ traditional: "述", simplified: "述", pinyin: "shù", definition: "narrate, state, express", radicals: "辵", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1032", frequencyRank: 674 }
      ,{ traditional: "陆", simplified: "陆", pinyin: "lù", definition: "land, continental; army", radicals: "阜", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0912", frequencyRank: 675 }
      ,{ traditional: "习", simplified: "习", pinyin: "xí", definition: "practice; flapping wings", radicals: "冫", strokeCount: 3, hskLevel: 1, generalStandardNumber: "0070", frequencyRank: 676 }
      ,{ traditional: "置", simplified: "置", pinyin: "zhì", definition: "place, lay out; set aside", radicals: "网", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2931", frequencyRank: 677 }
      ,{ traditional: "居", simplified: "居", pinyin: "jū", definition: "live, dwell, reside, sit", radicals: "尸", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1308", frequencyRank: 678 }
      ,{ traditional: "劳", simplified: "劳", pinyin: "láo", definition: "labor, toil, do manual work", radicals: "力", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0674", frequencyRank: 679 }
      ,{ traditional: "财", simplified: "财", pinyin: "cái", definition: "wealth, valuables, riches", radicals: "貝", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0756", frequencyRank: 680 }
      ,{ traditional: "环", simplified: "环", pinyin: "huán", definition: "jade ring or bracelet; ring", radicals: "玉", strokeCount: 8, hskLevel: 3, generalStandardNumber: "0945", frequencyRank: 681 }
      ,{ traditional: "排", simplified: "排", pinyin: "pái", definition: "row, rank, line", radicals: "手", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2168", frequencyRank: 682 }
      ,{ traditional: "福", simplified: "福", pinyin: "fú", definition: "happiness, good fortune, blessing", radicals: "示", strokeCount: 13, hskLevel: 4, generalStandardNumber: "3033", frequencyRank: 683 }
      ,{ traditional: "纳", simplified: "纳", pinyin: "nà", definition: "admit, take, receive, accept", radicals: "糸", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0934", frequencyRank: 684 }
      ,{ traditional: "欢", simplified: "欢", pinyin: "huān", definition: "happy, pleased, glad; joy; enjoy", radicals: "欠", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0587", frequencyRank: 685 }
      ,{ traditional: "雷", simplified: "雷", pinyin: "léi", definition: "thunder", radicals: "雨", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2884", frequencyRank: 686 }
      ,{ traditional: "警", simplified: "警", pinyin: "jǐng", definition: "guard, watch; alert, alarm", radicals: "言", strokeCount: 19, hskLevel: 4, generalStandardNumber: "3453", frequencyRank: 687 }
      ,{ traditional: "获", simplified: "获", pinyin: "huò", definition: "obtain, get, receive; seize", radicals: "艸", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1827", frequencyRank: 688 }
      ,{ traditional: "模", simplified: "模", pinyin: "mó", definition: "model, standard, pattern; copy", radicals: "木", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3078", frequencyRank: 689 }
      ,{ traditional: "充", simplified: "充", pinyin: "chōng", definition: "fill, be full, supply", radicals: "儿", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0525", frequencyRank: 690 }
      ,{ traditional: "负", simplified: "负", pinyin: "fù", definition: "load, burden; carry, bear", radicals: "貝", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0503", frequencyRank: 691 }
      ,{ traditional: "云", simplified: "云", pinyin: "yún", definition: "say, speak; clouds", radicals: "二", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0082", frequencyRank: 692 }
      ,{ traditional: "停", simplified: "停", pinyin: "tíng", definition: "stop, suspend, delay; suitable", radicals: "人", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2333", frequencyRank: 693 }
      ,{ traditional: "木", simplified: "木", pinyin: "mù", definition: "tree; wood, lumber; wooden", radicals: "木", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0087", frequencyRank: 694 }
      ,{ traditional: "游", simplified: "游", pinyin: "yóu", definition: "to swim; float, drift; wander, roam", radicals: "水", strokeCount: 12, hskLevel: 2, generalStandardNumber: "2766", frequencyRank: 695 }
      ,{ traditional: "龙", simplified: "龙", pinyin: "lóng", definition: "dragon; symbolic of emperor", radicals: "龍", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0221", frequencyRank: 696 }
      ,{ traditional: "树", simplified: "树", pinyin: "shù", definition: "tree; plant; set up, establish", radicals: "木", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1439", frequencyRank: 697 }
      ,{ traditional: "疑", simplified: "疑", pinyin: "yí", definition: "doubt, question, suspect", radicals: "疋", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3136", frequencyRank: 698 }
      ,{ traditional: "层", simplified: "层", pinyin: "céng", definition: "storey, layer, floor, stratum", radicals: "尸", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0902", frequencyRank: 699 }
      ,{ traditional: "冷", simplified: "冷", pinyin: "lěng", definition: "cold, cool; lonely", radicals: "冫", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0838", frequencyRank: 700 }
      ,{ traditional: "洲", simplified: "洲", pinyin: "zhōu", definition: "continent; island; islet", radicals: "水", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1680", frequencyRank: 701 }
      ,{ traditional: "冲", simplified: "冲", pinyin: "chōng", definition: "soar; pour boiling water over", radicals: "冫", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0511", frequencyRank: 702 }
      ,{ traditional: "射", simplified: "射", pinyin: "shè", definition: "shoot, eject, issue forth, emit", radicals: "寸", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1971", frequencyRank: 703 }
      ,{ traditional: "略", simplified: "略", pinyin: "lüè", definition: "approximately, roughly; outline", radicals: "田", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2277", frequencyRank: 704 }
      ,{ traditional: "范", simplified: "范", pinyin: "fàn", definition: "surname; bee-like insect", radicals: "艸", strokeCount: null, hskLevel: 5, generalStandardNumber: "1010", frequencyRank: 705 }
      ,{ traditional: "竟", simplified: "竟", pinyin: "jìng", definition: "finally, after all, at last", radicals: "立", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2390", frequencyRank: 706 }
      ,{ traditional: "句", simplified: "句", pinyin: "jù", definition: "sentence", radicals: "口", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0288", frequencyRank: 707 }
      ,{ traditional: "室", simplified: "室", pinyin: "shì", definition: "room, home, house, chamber", radicals: "宀", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1697", frequencyRank: 708 }
      ,{ traditional: "异", simplified: "异", pinyin: "yì", definition: "different, unusual, strange", radicals: "廾", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0568", frequencyRank: 709 }
      ,{ traditional: "激", simplified: "激", pinyin: "jī", definition: "arouse, excite, incite; quickly", radicals: "水", strokeCount: 16, hskLevel: 4, generalStandardNumber: "3379", frequencyRank: 710 }
      ,{ traditional: "汉", simplified: "汉", pinyin: "hàn", definition: "Chinese people; Chinese language", radicals: "水", strokeCount: 5, hskLevel: 1, generalStandardNumber: "0311", frequencyRank: 711 }
      ,{ traditional: "村", simplified: "村", pinyin: "cūn", definition: "village, hamlet; uncouth, vulgar", radicals: "木", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0682", frequencyRank: 712 }
      ,{ traditional: "哈", simplified: "哈", pinyin: "hā", definition: "sound of laughter", radicals: "口", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1510", frequencyRank: 713 }
      ,{ traditional: "策", simplified: "策", pinyin: "cè", definition: "scheme, plan; to whip; urge", radicals: "竹", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2683", frequencyRank: 714 }
      ,{ traditional: "演", simplified: "演", pinyin: "yǎn", definition: "perform, put on; exercise", radicals: "水", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3167", frequencyRank: 715 }
      ,{ traditional: "简", simplified: "简", pinyin: "jiǎn", definition: "simple, terse, succinct, a letter", radicals: "竹", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2954", frequencyRank: 716 }
      ,{ traditional: "卡", simplified: "卡", pinyin: "kǎ", definition: "card, punch card; calorie", radicals: "卜", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0226", frequencyRank: 717 }
      ,{ traditional: "罪", simplified: "罪", pinyin: "zuì", definition: "crime, sin, vice; evil; hardship", radicals: "网", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2932", frequencyRank: 718 }
      ,{ traditional: "判", simplified: "判", pinyin: "pàn", definition: "judge; discriminate; conclude", radicals: "刀", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0849", frequencyRank: 719 }
      ,{ traditional: "担", simplified: "担", pinyin: "dān", definition: "carry, bear, undertake", radicals: "手", strokeCount: 8, hskLevel: 3, generalStandardNumber: "0963", frequencyRank: 720 }
      ,{ traditional: "州", simplified: "州", pinyin: "zhōu", definition: "administrative division, state", radicals: "巛", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0535", frequencyRank: 721 }
      ,{ traditional: "静", simplified: "静", pinyin: "jìng", definition: "quiet, still, motionless; gentle", radicals: "青", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3049", frequencyRank: 722 }
      ,{ traditional: "退", simplified: "退", pinyin: "tuì", definition: "step back, retreat, withdraw", radicals: "辵", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1720", frequencyRank: 723 }
      ,{ traditional: "既", simplified: "既", pinyin: "jì", definition: "already; de facto; since; then", radicals: "无", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1721", frequencyRank: 724 }
      ,{ traditional: "衣", simplified: "衣", pinyin: "yī", definition: "clothes, clothing; cover, skin", radicals: "衣", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0520", frequencyRank: 725 }
      ,{ traditional: "您", simplified: "您", pinyin: "nín", definition: "you (polite)", radicals: "心", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2331", frequencyRank: 726 }
      ,{ traditional: "宗", simplified: "宗", pinyin: "zōng", definition: "lineage, ancestry; ancestor, clan", radicals: "宀", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1275", frequencyRank: 727 }
      ,{ traditional: "积", simplified: "积", pinyin: "jī", definition: "accumulate, store up, amass", radicals: "禾", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1945", frequencyRank: 728 }
      ,{ traditional: "余", simplified: "余", pinyin: "yú", definition: "I, my, me; surname; surplus", radicals: "人", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0795", frequencyRank: 729 }
      ,{ traditional: "痛", simplified: "痛", pinyin: "tòng", definition: "pain, ache; sorry, sad; bitter", radicals: "疒", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2734", frequencyRank: 730 }
      ,{ traditional: "检", simplified: "检", pinyin: "jiǎn", definition: "check; examine", radicals: "木", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2227", frequencyRank: 731 }
      ,{ traditional: "差", simplified: "差", pinyin: "chà", definition: "to differ; different, wrong; nearly, almost; an officer", radicals: "工", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1640", frequencyRank: 732 }
      ,{ traditional: "富", simplified: "富", pinyin: "fù", definition: "abundant, ample; rich, wealthy", radicals: "宀", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2781", frequencyRank: 733 }
      ,{ traditional: "灵", simplified: "灵", pinyin: "líng", definition: "spirit, soul; spiritual world", radicals: "彐", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0900", frequencyRank: 734 }
      ,{ traditional: "协", simplified: "协", pinyin: "xié", definition: "be united; cooperate", radicals: "十", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0383", frequencyRank: 735 }
      ,{ traditional: "角", simplified: "角", pinyin: "jiǎo", definition: "horn; angle, corner; point", radicals: "角", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0814", frequencyRank: 736 }
      ,{ traditional: "占", simplified: "占", pinyin: "zhàn", definition: "divine; observe; versify", radicals: "卜", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0228", frequencyRank: 737 }
      ,{ traditional: "配", simplified: "配", pinyin: "pèi", definition: "match, pair; equal; blend", radicals: "酉", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1858", frequencyRank: 738 }
      ,{ traditional: "征", simplified: "征", pinyin: "zhēng", definition: "invade, attack, conquer", radicals: "彳", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1159", frequencyRank: 739 }
      ,{ traditional: "修", simplified: "修", pinyin: "xiū", definition: "study; repair; cultivate", radicals: "人", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1560", frequencyRank: 740 }
      ,{ traditional: "皮", simplified: "皮", pinyin: "pí", definition: "skin, hide, fur, feather; outer", radicals: "皮", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0336", frequencyRank: 741 }
      ,{ traditional: "挥", simplified: "挥", pinyin: "huī", definition: "direct; wipe away; squander", radicals: "手", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1396", frequencyRank: 742 }
      ,{ traditional: "胜", simplified: "胜", pinyin: "shèng", definition: "victory; excel, be better than", radicals: "肉", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1594", frequencyRank: 743 }
      ,{ traditional: "降", simplified: "降", pinyin: "jiàng", definition: "descend, fall, drop; lower, down", radicals: "阜", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1321", frequencyRank: 744 }
      ,{ traditional: "阶", simplified: "阶", pinyin: "jiē", definition: "stairs, steps; rank, degree", radicals: "阜", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0574", frequencyRank: 745 }
      ,{ traditional: "审", simplified: "审", pinyin: "shěn", definition: "examine, investigate; judge", radicals: "宀", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1279", frequencyRank: 746 }
      ,{ traditional: "沉", simplified: "沉", pinyin: "chén", definition: "sink, submerge; addicted to", radicals: "水", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0871", frequencyRank: 747 }
      ,{ traditional: "坚", simplified: "坚", pinyin: "jiān", definition: "hard, strong, firm; resolute", radicals: "土", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0712", frequencyRank: 748 }
      ,{ traditional: "善", simplified: "善", pinyin: "shàn", definition: "good, virtuous, charitable, kind", radicals: "口", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2738", frequencyRank: 749 }
      ,{ traditional: "妈", simplified: "妈", pinyin: "mā", definition: "mother, mama", radicals: "女", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0583", frequencyRank: 750 }
      ,{ traditional: "刘", simplified: "刘", pinyin: "liú", definition: "surname; kill, destroy", radicals: "刀", strokeCount: 6, hskLevel: null, generalStandardNumber: "0517", frequencyRank: 751 }
      ,{ traditional: "读", simplified: "读", pinyin: "dú", definition: "read, study; pronounce", radicals: "言", strokeCount: 10, hskLevel: 1, generalStandardNumber: "2112", frequencyRank: 752 }
      ,{ traditional: "啊", simplified: "啊", pinyin: "a", definition: "exclamatory particle", radicals: "口", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1915", frequencyRank: 753 }
      ,{ traditional: "超", simplified: "超", pinyin: "chāo", definition: "jump over, leap over; surpass", radicals: "走", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2517", frequencyRank: 754 }
      ,{ traditional: "免", simplified: "免", pinyin: "miǎn", definition: "spare; excuse from; evade", radicals: "儿", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0810", frequencyRank: 755 }
      ,{ traditional: "压", simplified: "压", pinyin: "yā", definition: "press; oppress; crush; pressure", radicals: "厂", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0385", frequencyRank: 756 }
      ,{ traditional: "银", simplified: "银", pinyin: "yín", definition: "silver; cash, money, wealth", radicals: "金", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2309", frequencyRank: 757 }
      ,{ traditional: "买", simplified: "买", pinyin: "mǎi", definition: "buy, purchase; bribe, persuade", radicals: "大", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0588", frequencyRank: 758 }
      ,{ traditional: "皇", simplified: "皇", pinyin: "huáng", definition: "royal, imperial; ruler, superior", radicals: "白", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1571", frequencyRank: 759 }
      ,{ traditional: "养", simplified: "养", pinyin: "yǎng", definition: "raise, rear, bring up; support", radicals: "八", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1641", frequencyRank: 760 }
      ,{ traditional: "伊", simplified: "伊", pinyin: "yī", definition: "third person pronoun; he, she, this, that", radicals: "人", strokeCount: 6, hskLevel: null, generalStandardNumber: "0478", frequencyRank: 761 }
      ,{ traditional: "怀", simplified: "怀", pinyin: "huái", definition: "bosom, breast; carry in bosom", radicals: "心", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0873", frequencyRank: 762 }
      ,{ traditional: "执", simplified: "执", pinyin: "zhí", definition: "hold in hand; keep; carry out", radicals: "手", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0363", frequencyRank: 763 }
      ,{ traditional: "副", simplified: "副", pinyin: "fù", definition: "assist; supplement; assistant", radicals: "刀", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2234", frequencyRank: 764 }
      ,{ traditional: "乱", simplified: "乱", pinyin: "luàn", definition: "confusion, state of chaos, revolt", radicals: "乙", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0762", frequencyRank: 765 }
      ,{ traditional: "抗", simplified: "抗", pinyin: "kàng", definition: "resist, oppose, defy, reject", radicals: "手", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0646", frequencyRank: 766 }
      ,{ traditional: "犯", simplified: "犯", pinyin: "fàn", definition: "commit crime, violate; criminal", radicals: "犬", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0292", frequencyRank: 767 }
      ,{ traditional: "追", simplified: "追", pinyin: "zhuī", definition: "pursue, chase after; expel", radicals: "辵", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1577", frequencyRank: 768 }
      ,{ traditional: "帮", simplified: "帮", pinyin: "bāng", definition: "help, assist; defend; shoe upper", radicals: "巾", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1356", frequencyRank: 769 }
      ,{ traditional: "宣", simplified: "宣", pinyin: "xuān", definition: "declare, announce, proclaim", radicals: "宀", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1695", frequencyRank: 770 }
      ,{ traditional: "佛", simplified: "佛", pinyin: "fú", definition: "Buddha; of Buddhism; merciful person; Buddhist image; the dead (Jap.)", radicals: "人", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0789", frequencyRank: 771 }
      ,{ traditional: "岁", simplified: "岁", pinyin: "suì", definition: "year; age; harvest", radicals: "山", strokeCount: 6, hskLevel: 1, generalStandardNumber: "0436", frequencyRank: 772 }
      ,{ traditional: "航", simplified: "航", pinyin: "háng", definition: "sail; navigate; ship, boat", radicals: "舟", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1981", frequencyRank: 773 }
      ,{ traditional: "优", simplified: "优", pinyin: "yōu", definition: "superior, excellent; actor", radicals: "人", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0461", frequencyRank: 774 }
      ,{ traditional: "怪", simplified: "怪", pinyin: "guài", definition: "strange, unusual, peculiar", radicals: "心", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1271", frequencyRank: 775 }
      ,{ traditional: "香", simplified: "香", pinyin: "xiāng", definition: "fragrant, sweet smelling, incense", radicals: "香", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1548", frequencyRank: 776 }
      ,{ traditional: "著", simplified: "著", pinyin: "zhe", definition: "manifest; (Cant.) to wear", radicals: "艸", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2198", frequencyRank: 777 }
      ,{ traditional: "田", simplified: "田", pinyin: "tián", definition: "field, arable land, cultivated", radicals: "田", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0244", frequencyRank: 778 }
      ,{ traditional: "铁", simplified: "铁", pinyin: "tiě", definition: "iron; strong, solid, firm", radicals: "金", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1932", frequencyRank: 779 }
      ,{ traditional: "控", simplified: "控", pinyin: "kòng", definition: "accuse, charge; control", radicals: "手", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2187", frequencyRank: 780 }
      ,{ traditional: "税", simplified: "税", pinyin: "shuì", definition: "taxes", radicals: "禾", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2679", frequencyRank: 781 }
      ,{ traditional: "左", simplified: "左", pinyin: "zuǒ", definition: "left; east; unorthodox, improper", radicals: "工", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0214", frequencyRank: 782 }
      ,{ traditional: "右", simplified: "右", pinyin: "yòu", definition: "right; west; right-wing", radicals: "口", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0217", frequencyRank: 783 }
      ,{ traditional: "份", simplified: "份", pinyin: "fèn", definition: "portion, part; duty", radicals: "人", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0471", frequencyRank: 784 }
      ,{ traditional: "穿", simplified: "穿", pinyin: "chuān", definition: "penetrate, pierce, drill; wear", radicals: "穴", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1701", frequencyRank: 785 }
      ,{ traditional: "艺", simplified: "艺", pinyin: "yì", definition: "art; talent, ability; craft", radicals: "艸", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0086", frequencyRank: 786 }
      ,{ traditional: "背", simplified: "背", pinyin: "bèi", definition: "back; back side; behind; betray", radicals: "肉", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1467", frequencyRank: 787 }
      ,{ traditional: "阵", simplified: "阵", pinyin: "zhèn", definition: "column, row or file of troops", radicals: "阜", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0571", frequencyRank: 788 }
      ,{ traditional: "草", simplified: "草", pinyin: "cǎo", definition: "grass, straw, thatch, herbs", radicals: "艸", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1408", frequencyRank: 789 }
      ,{ traditional: "脚", simplified: "脚", pinyin: "jiǎo", definition: "leg, foot; base, leg, foundation", radicals: "肉", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2355", frequencyRank: 790 }
      ,{ traditional: "概", simplified: "概", pinyin: "gài", definition: "generally, approximately", radicals: "木", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2871", frequencyRank: 791 }
      ,{ traditional: "恶", simplified: "恶", pinyin: "è", definition: "evil, wicked, bad, foul", radicals: "心", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1829", frequencyRank: 792 }
      ,{ traditional: "块", simplified: "块", pinyin: "kuài", definition: "piece, lump; dollar", radicals: "土", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0652", frequencyRank: 793 }
      ,{ traditional: "顿", simplified: "顿", pinyin: "dùn", definition: "pause, stop; bow, kowtow; arrange", radicals: "頁", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1877", frequencyRank: 794 }
      ,{ traditional: "敢", simplified: "敢", pinyin: "gǎn", definition: "to dare, venture; bold, brave", radicals: "攴", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2470", frequencyRank: 795 }
      ,{ traditional: "守", simplified: "守", pinyin: "shǒu", definition: "defend, protect, guard, conserve", radicals: "宀", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0546", frequencyRank: 796 }
      ,{ traditional: "酒", simplified: "酒", pinyin: "jiǔ", definition: "wine, spirits, liquor, alcoholic beverage", radicals: "酉", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2069", frequencyRank: 797 }
      ,{ traditional: "岛", simplified: "岛", pinyin: "dǎo", definition: "island", radicals: "山", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0820", frequencyRank: 798 }
      ,{ traditional: "托", simplified: "托", pinyin: "tuō", definition: "to hold up with palm; to support, rely on", radicals: "手", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0359", frequencyRank: 799 }
      ,{ traditional: "央", simplified: "央", pinyin: "yāng", definition: "center, conclude, run out; beg", radicals: "大", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0249", frequencyRank: 800 }
      ,{ traditional: "户", simplified: "户", pinyin: "hù", definition: "door; family", radicals: "戶", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0170", frequencyRank: 801 }
      ,{ traditional: "烈", simplified: "烈", pinyin: "liè", definition: "fiery, violent, vehement, ardent", radicals: "火", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1871", frequencyRank: 802 }
      ,{ traditional: "洋", simplified: "洋", pinyin: "yáng", definition: "ocean, sea; foreign; western", radicals: "水", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1679", frequencyRank: 803 }
      ,{ traditional: "哥", simplified: "哥", pinyin: "gē", definition: "elder brother", radicals: "口", strokeCount: 10, hskLevel: 2, generalStandardNumber: "1852", frequencyRank: 804 }
      ,{ traditional: "索", simplified: "索", pinyin: "suǒ", definition: "large rope, cable; rules, laws; to demand, to exact; to search, inquire; isolated", radicals: "糸", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1851", frequencyRank: 805 }
      ,{ traditional: "胡", simplified: "胡", pinyin: "hú", definition: "recklessly, foolishly; wildly", radicals: "肉", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1419", frequencyRank: 806 }
      ,{ traditional: "款", simplified: "款", pinyin: "kuǎn", definition: "item, article; clause; fund", radicals: "欠", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2508", frequencyRank: 807 }
      ,{ traditional: "靠", simplified: "靠", pinyin: "kào", definition: "lean on, trust, depend on; near", radicals: "非", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3259", frequencyRank: 808 }
      ,{ traditional: "评", simplified: "评", pinyin: "píng", definition: "appraise, criticize, evaluate", radicals: "言", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0887", frequencyRank: 809 }
      ,{ traditional: "版", simplified: "版", pinyin: "bǎn", definition: "printing blocks; edition", radicals: "片", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1143", frequencyRank: 810 }
      ,{ traditional: "宝", simplified: "宝", pinyin: "bǎo", definition: "treasure, jewel; precious, rare", radicals: "宀", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1274", frequencyRank: 811 }
      ,{ traditional: "座", simplified: "座", pinyin: "zuò", definition: "seat; stand, base", radicals: "广", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2025", frequencyRank: 812 }
      ,{ traditional: "释", simplified: "释", pinyin: "shì", definition: "interprete, elucidate; release", radicals: "釆", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2710", frequencyRank: 813 }
      ,{ traditional: "景", simplified: "景", pinyin: "jǐng", definition: "scenery, view; conditions", radicals: "日", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2626", frequencyRank: 814 }
      ,{ traditional: "顾", simplified: "顾", pinyin: "gù", definition: "look back; look at; look after", radicals: "頁", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1874", frequencyRank: 815 }
      ,{ traditional: "弟", simplified: "弟", pinyin: "dì", definition: "young brother; junior; i, me", radicals: "弓", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0854", frequencyRank: 816 }
      ,{ traditional: "登", simplified: "登", pinyin: "dēng", definition: "rise, mount, board, climb", radicals: "癶", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2813", frequencyRank: 817 }
      ,{ traditional: "货", simplified: "货", pinyin: "huò", definition: "goods, commodities, products", radicals: "貝", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1151", frequencyRank: 818 }
      ,{ traditional: "互", simplified: "互", pinyin: "hù", definition: "mutually, reciprocally", radicals: "二", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0106", frequencyRank: 819 }
      ,{ traditional: "付", simplified: "付", pinyin: "fù", definition: "give, deliver, pay, hand over; entrust", radicals: "人", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0269", frequencyRank: 820 }
      ,{ traditional: "伯", simplified: "伯", pinyin: "bó", definition: "father's elder brother (uncle), sir", radicals: "人", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0778", frequencyRank: 821 }
      ,{ traditional: "慢", simplified: "慢", pinyin: "màn", definition: "slow(ly), leisurely, sluggish", radicals: "心", strokeCount: 14, hskLevel: 2, generalStandardNumber: "3169", frequencyRank: 822 }
      ,{ traditional: "欧", simplified: "欧", pinyin: "ōu", definition: "translit.: Europe; ohm; surname", radicals: "欠", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1053", frequencyRank: 823 }
      ,{ traditional: "换", simplified: "换", pinyin: "huàn", definition: "change", radicals: "手", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1806", frequencyRank: 824 }
      ,{ traditional: "闻", simplified: "闻", pinyin: "wén", definition: "hear; smell; make known; news", radicals: "門", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1636", frequencyRank: 825 }
      ,{ traditional: "危", simplified: "危", pinyin: "wēi", definition: "dangerous, precarious; high", radicals: "卩", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0499", frequencyRank: 826 }
      ,{ traditional: "忙", simplified: "忙", pinyin: "máng", definition: "busy, pressed for time; hustling", radicals: "心", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0543", frequencyRank: 827 }
      ,{ traditional: "核", simplified: "核", pinyin: "hé", definition: "seed, kernel, core, nut; atom", radicals: "木", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1848", frequencyRank: 828 }
      ,{ traditional: "暗", simplified: "暗", pinyin: "àn", definition: "dark; obscure; in secret, covert", radicals: "日", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2909", frequencyRank: 829 }
      ,{ traditional: "姐", simplified: "姐", pinyin: "jiě", definition: "elder sister, young lady", radicals: "女", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1326", frequencyRank: 830 }
      ,{ traditional: "介", simplified: "介", pinyin: "jiè", definition: "forerunner, herald, harbinger; to lie between; sea shell; to wear armor", radicals: "人", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0140", frequencyRank: 831 }
      ,{ traditional: "坏", simplified: "坏", pinyin: "huài", definition: "rotten, spoilt, bad, broken down", radicals: "土", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0616", frequencyRank: 832 }
      ,{ traditional: "讨", simplified: "讨", pinyin: "tǎo", definition: "to discuss; ask for, beg; demand; dun; marry", radicals: "言", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0315", frequencyRank: 833 }
      ,{ traditional: "丽", simplified: "丽", pinyin: "lì", definition: "beautiful, magnificent, elegant", radicals: "丶", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0699", frequencyRank: 834 }
      ,{ traditional: "良", simplified: "良", pinyin: "liáng", definition: "good, virtuous, respectable", radicals: "艮", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0884", frequencyRank: 835 }
      ,{ traditional: "序", simplified: "序", pinyin: "xù", definition: "series, serial order, sequence", radicals: "广", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0840", frequencyRank: 836 }
      ,{ traditional: "升", simplified: "升", pinyin: "shēng", definition: "arise, go up; hoist; advance", radicals: "十", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0125", frequencyRank: 837 }
      ,{ traditional: "监", simplified: "监", pinyin: "jiān", definition: "supervise, control, direct", radicals: "皿", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1883", frequencyRank: 838 }
      ,{ traditional: "临", simplified: "临", pinyin: "lín", definition: "draw near, approach; descend", radicals: "丨", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1471", frequencyRank: 839 }
      ,{ traditional: "亮", simplified: "亮", pinyin: "liàng", definition: "bright, brilliant, radiant, light", radicals: "亠", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1621", frequencyRank: 840 }
      ,{ traditional: "露", simplified: "露", pinyin: "lù", definition: "dew; bare, open, exposed", radicals: "雨", strokeCount: 21, hskLevel: 6, generalStandardNumber: "3490", frequencyRank: 841 }
      ,{ traditional: "永", simplified: "永", pinyin: "yǒng", definition: "long, perpetual, eternal, forever", radicals: "水", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0324", frequencyRank: 842 }
      ,{ traditional: "呼", simplified: "呼", pinyin: "hū", definition: "breathe sigh, exhale; call, shout", radicals: "口", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1099", frequencyRank: 843 }
      ,{ traditional: "味", simplified: "味", pinyin: "wèi", definition: "taste, smell, odor; delicacy", radicals: "口", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1078", frequencyRank: 844 }
      ,{ traditional: "野", simplified: "野", pinyin: "yě", definition: "open country, field; wilderness", radicals: "里", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2265", frequencyRank: 845 }
      ,{ traditional: "架", simplified: "架", pinyin: "jià", definition: "rack, stand, prop; prop up", radicals: "木", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1743", frequencyRank: 846 }
      ,{ traditional: "域", simplified: "域", pinyin: "yù", definition: "district, region, boundary; land", radicals: "土", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2164", frequencyRank: 847 }
      ,{ traditional: "沙", simplified: "沙", pinyin: "shā", definition: "sand, gravel, pebbles; granulated", radicals: "水", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0860", frequencyRank: 848 }
      ,{ traditional: "掉", simplified: "掉", pinyin: "diào", definition: "turn, move; shake, wag; drop down", radicals: "手", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2170", frequencyRank: 849 }
      ,{ traditional: "括", simplified: "括", pinyin: "kuò", definition: "include, embrace, enclose", radicals: "手", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1383", frequencyRank: 850 }
      ,{ traditional: "舰", simplified: "舰", pinyin: "jiàn", definition: "warship", radicals: "舟", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1978", frequencyRank: 851 }
      ,{ traditional: "鱼", simplified: "鱼", pinyin: "yú", definition: "fish; surname; KangXi radical 195", radicals: "魚", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1194", frequencyRank: 852 }
      ,{ traditional: "杂", simplified: "杂", pinyin: "zá", definition: "mixed, blended; mix, mingle", radicals: "木", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0498", frequencyRank: 853 }
      ,{ traditional: "误", simplified: "误", pinyin: "wù", definition: "err, make mistake; interfere", radicals: "言", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1714", frequencyRank: 854 }
      ,{ traditional: "湾", simplified: "湾", pinyin: "wān", definition: "bay, cove, inlet, bend of stream", radicals: "水", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2764", frequencyRank: 855 }
      ,{ traditional: "吉", simplified: "吉", pinyin: "jí", definition: "lucky, propitious, good", radicals: "口", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0356", frequencyRank: 856 }
      ,{ traditional: "减", simplified: "减", pinyin: "jiǎn", definition: "decrease, subtract, diminish", radicals: "冫", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2375", frequencyRank: 857 }
      ,{ traditional: "编", simplified: "编", pinyin: "biān", definition: "knit, weave; arrange; compile", radicals: "糸", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2822", frequencyRank: 858 }
      ,{ traditional: "楚", simplified: "楚", pinyin: "chǔ", definition: "name of feudal state; clear", radicals: "木", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2864", frequencyRank: 859 }
      ,{ traditional: "肯", simplified: "肯", pinyin: "kěn", definition: "willing; consent to, permit", radicals: "肉", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1067", frequencyRank: 860 }
      ,{ traditional: "测", simplified: "测", pinyin: "cè", definition: "measure, estimate, conjecture", radicals: "水", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1670", frequencyRank: 861 }
      ,{ traditional: "败", simplified: "败", pinyin: "bài", definition: "be defeated, decline, fail", radicals: "貝", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1113", frequencyRank: 862 }
      ,{ traditional: "屋", simplified: "屋", pinyin: "wū", definition: "house; room; building, shelter", radicals: "尸", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1722", frequencyRank: 863 }
      ,{ traditional: "跑", simplified: "跑", pinyin: "pǎo", definition: "run, flee, leave in hurry", radicals: "足", strokeCount: 12, hskLevel: 2, generalStandardNumber: "2631", frequencyRank: 864 }
      ,{ traditional: "梦", simplified: "梦", pinyin: "mèng", definition: "dream; visionary; wishful", radicals: "木", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2221", frequencyRank: 865 }
      ,{ traditional: "散", simplified: "散", pinyin: "sàn", definition: "scatter, disperse, break up", radicals: "攴", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2546", frequencyRank: 866 }
      ,{ traditional: "温", simplified: "温", pinyin: "wēn", definition: "lukewarm", radicals: "水", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2757", frequencyRank: 867 }
      ,{ traditional: "困", simplified: "困", pinyin: "kùn", definition: "to surround, beseige; to be surrounded; difficult", radicals: "囗", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0734", frequencyRank: 868 }
      ,{ traditional: "剑", simplified: "剑", pinyin: "jiàn", definition: "sword, dagger, saber", radicals: "刀", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1587", frequencyRank: 869 }
      ,{ traditional: "渐", simplified: "渐", pinyin: "jiàn", definition: "gradually", radicals: "水", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2417", frequencyRank: 870 }
      ,{ traditional: "封", simplified: "封", pinyin: "fēng", definition: "letter, envelope; feudal", radicals: "寸", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1366", frequencyRank: 871 }
      ,{ traditional: "救", simplified: "救", pinyin: "jiù", definition: "save, rescue, relieve; help, aid", radicals: "攴", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2232", frequencyRank: 872 }
      ,{ traditional: "贵", simplified: "贵", pinyin: "guì", definition: "expensive, costly, valuable", radicals: "貝", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1495", frequencyRank: 873 }
      ,{ traditional: "枪", simplified: "枪", pinyin: "qiāng", definition: "spear, lance; gun, rifle", radicals: "木", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1027", frequencyRank: 874 }
      ,{ traditional: "缺", simplified: "缺", pinyin: "quē", definition: "be short of, lack; gap, deficit", radicals: "缶", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1935", frequencyRank: 875 }
      ,{ traditional: "楼", simplified: "楼", pinyin: "lóu", definition: "building of two or more stories", radicals: "木", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2870", frequencyRank: 876 }
      ,{ traditional: "县", simplified: "县", pinyin: "xiàn", definition: "county, district, subdivision", radicals: "厶", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0720", frequencyRank: 877 }
      ,{ traditional: "尚", simplified: "尚", pinyin: "shàng", definition: "still, yet; even; fairly, rather", radicals: "小", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1075", frequencyRank: 878 }
      ,{ traditional: "毫", simplified: "毫", pinyin: "háo", definition: "fine hair; measure of length", radicals: "毛", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2376", frequencyRank: 879 }
      ,{ traditional: "移", simplified: "移", pinyin: "yí", definition: "change place, shift; move about", radicals: "禾", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2316", frequencyRank: 880 }
      ,{ traditional: "娘", simplified: "娘", pinyin: "niáng", definition: "mother; young girl; woman; wife", radicals: "女", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2144", frequencyRank: 881 }
      ,{ traditional: "朋", simplified: "朋", pinyin: "péng", definition: "friend, pal, acquaintance", radicals: "月", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1185", frequencyRank: 882 }
      ,{ traditional: "画", simplified: "画", pinyin: "huà", definition: "a painting, picture, drawing; to draw", radicals: "田", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1036", frequencyRank: 883 }
      ,{ traditional: "班", simplified: "班", pinyin: "bān", definition: "class, group, grade; squad; job", radicals: "玉", strokeCount: 10, hskLevel: 2, generalStandardNumber: "1774", frequencyRank: 884 }
      ,{ traditional: "智", simplified: "智", pinyin: "zhì", definition: "wisdom, knowledge, intelligence", radicals: "日", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2670", frequencyRank: 885 }
      ,{ traditional: "亦", simplified: "亦", pinyin: "yì", definition: "also, too; likewise", radicals: "亠", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0516", frequencyRank: 886 }
      ,{ traditional: "耳", simplified: "耳", pinyin: "ěr", definition: "ear; merely, only; handle", radicals: "耳", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0369", frequencyRank: 887 }
      ,{ traditional: "恩", simplified: "恩", pinyin: "ēn", definition: "kindness, mercy, charity", radicals: "心", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1909", frequencyRank: 888 }
      ,{ traditional: "短", simplified: "短", pinyin: "duǎn", definition: "short; brief; deficient, lacking", radicals: "矢", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2669", frequencyRank: 889 }
      ,{ traditional: "掌", simplified: "掌", pinyin: "zhǎng", definition: "palm of hand, sole of foot, paw", radicals: "手", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2610", frequencyRank: 890 }
      ,{ traditional: "恐", simplified: "恐", pinyin: "kǒng", definition: "fear; fearful, apprehensive", radicals: "心", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1810", frequencyRank: 891 }
      ,{ traditional: "遗", simplified: "遗", pinyin: "yí", definition: "lose; articles lost; omit", radicals: "辵", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2633", frequencyRank: 892 }
      ,{ traditional: "固", simplified: "固", pinyin: "gù", definition: "to become solid, solidify; strength", radicals: "囗", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1093", frequencyRank: 893 }
      ,{ traditional: "席", simplified: "席", pinyin: "xí", definition: "seat; mat; take seat; banquet", radicals: "巾", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2023", frequencyRank: 894 }
      ,{ traditional: "松", simplified: "松", pinyin: "sōng", definition: "pine tree; fir tree", radicals: "木", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1026", frequencyRank: 895 }
      ,{ traditional: "秘", simplified: "秘", pinyin: "mì", definition: "secret, mysterious, abstruse", radicals: "禾", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1949", frequencyRank: 896 }
      ,{ traditional: "谢", simplified: "谢", pinyin: "xiè", definition: "thank; decline", radicals: "言", strokeCount: 12, hskLevel: 1, generalStandardNumber: "2795", frequencyRank: 897 }
      ,{ traditional: "鲁", simplified: "鲁", pinyin: "lǔ", definition: "foolish, stupid, rash; vulgar", radicals: "魚", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2717", frequencyRank: 898 }
      ,{ traditional: "遇", simplified: "遇", pinyin: "yù", definition: "meet, come across, encounter", radicals: "辵", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2622", frequencyRank: 899 }
      ,{ traditional: "康", simplified: "康", pinyin: "kāng", definition: "peaceful, quiet; happy, healthy", radicals: "广", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2385", frequencyRank: 900 }
      ,{ traditional: "虑", simplified: "虑", pinyin: "lǜ", definition: "be concerned, worry about", radicals: "心", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1882", frequencyRank: 901 }
      ,{ traditional: "幸", simplified: "幸", pinyin: "xìng", definition: "luck(ily), favor, fortunately", radicals: "干", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0983", frequencyRank: 902 }
      ,{ traditional: "均", simplified: "均", pinyin: "jūn", definition: "equal, even, fair; all, also", radicals: "土", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0640", frequencyRank: 903 }
      ,{ traditional: "销", simplified: "销", pinyin: "xiāo", definition: "melt, fuse; market, sell", radicals: "金", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2659", frequencyRank: 904 }
      ,{ traditional: "钟", simplified: "钟", pinyin: "zhōng", definition: "clock; bell", radicals: "金", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1528", frequencyRank: 905 }
      ,{ traditional: "诗", simplified: "诗", pinyin: "shī", definition: "poetry; poem, verse, ode", radicals: "言", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1288", frequencyRank: 906 }
      ,{ traditional: "藏", simplified: "藏", pinyin: "cáng", definition: "hide, conceal; hoard, store up", radicals: "艸", strokeCount: 17, hskLevel: 5, generalStandardNumber: "3392", frequencyRank: 907 }
      ,{ traditional: "赶", simplified: "赶", pinyin: "gǎn", definition: "pursue, follow; expel, drive away", radicals: "走", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1788", frequencyRank: 908 }
      ,{ traditional: "剧", simplified: "剧", pinyin: "jù", definition: "theatrical plays, opera, drama", radicals: "刀", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2132", frequencyRank: 909 }
      ,{ traditional: "票", simplified: "票", pinyin: "piào", definition: "slip of paper or bamboo; ticket", radicals: "示", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2235", frequencyRank: 910 }
      ,{ traditional: "损", simplified: "损", pinyin: "sǔn", definition: "diminish; impair; injure", radicals: "手", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1798", frequencyRank: 911 }
      ,{ traditional: "忽", simplified: "忽", pinyin: "hū", definition: "suddenly, abruptly; neglect", radicals: "心", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1197", frequencyRank: 912 }
      ,{ traditional: "巨", simplified: "巨", pinyin: "jù", definition: "large, great, enormous; chief", radicals: "工", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0101", frequencyRank: 913 }
      ,{ traditional: "炮", simplified: "炮", pinyin: "pào", definition: "large gun, cannon; artillery", radicals: "火", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1658", frequencyRank: 914 }
      ,{ traditional: "旧", simplified: "旧", pinyin: "jiù", definition: "old, ancient; former, past", radicals: "日", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0232", frequencyRank: 915 }
      ,{ traditional: "端", simplified: "端", pinyin: "duān", definition: "end, extreme; head; beginning", radicals: "立", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3151", frequencyRank: 916 }
      ,{ traditional: "探", simplified: "探", pinyin: "tàn", definition: "find, locate; search, grope for", radicals: "手", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2188", frequencyRank: 917 }
      ,{ traditional: "湖", simplified: "湖", pinyin: "hú", definition: "a lake; Hubei, Hunan; bluish-green", radicals: "水", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2751", frequencyRank: 918 }
      ,{ traditional: "录", simplified: "录", pinyin: "lù", definition: "copy, write down, record", radicals: "彐", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1304", frequencyRank: 919 }
      ,{ traditional: "叶", simplified: "叶", pinyin: "yè", definition: "to harmonize, to rhyme; to unite; (borrowed for) leaf", radicals: "口", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0238", frequencyRank: 920 }
      ,{ traditional: "春", simplified: "春", pinyin: "chūn", definition: "spring; wanton", radicals: "日", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1355", frequencyRank: 921 }
      ,{ traditional: "乡", simplified: "乡", pinyin: "xiāng", definition: "country; rural; village", radicals: "幺", strokeCount: 3, hskLevel: 5, generalStandardNumber: "0073", frequencyRank: 922 }
      ,{ traditional: "附", simplified: "附", pinyin: "fù", definition: "adhere to, append; rely on near to", radicals: "阜", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0916", frequencyRank: 923 }
      ,{ traditional: "吸", simplified: "吸", pinyin: "xī", definition: "inhale, suck in; absorb; attract", radicals: "口", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0431", frequencyRank: 924 }
      ,{ traditional: "予", simplified: "予", pinyin: "yǔ", definition: "I, me; to give", radicals: "亅", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0184", frequencyRank: 925 }
      ,{ traditional: "礼", simplified: "礼", pinyin: "lǐ", definition: "social custom; manners; courtesy", radicals: "示", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0318", frequencyRank: 926 }
      ,{ traditional: "港", simplified: "港", pinyin: "gǎng", definition: "port, harbor; small stream; bay", radicals: "水", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2749", frequencyRank: 927 }
      ,{ traditional: "雨", simplified: "雨", pinyin: "yǔ", definition: "rain; rainy; KangXi radical 173", radicals: "雨", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1041", frequencyRank: 928 }
      ,{ traditional: "呀", simplified: "呀", pinyin: "ya", definition: "particle used to express surprise or mild emphasis; (Cant.) slurred form of the number ten", radicals: "口", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0729", frequencyRank: 929 }
      ,{ traditional: "板", simplified: "板", pinyin: "bǎn", definition: "plank, board; iron or tin plate", radicals: "木", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1025", frequencyRank: 930 }
      ,{ traditional: "庭", simplified: "庭", pinyin: "tíng", definition: "courtyard; spacious hall or yard", radicals: "广", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1624", frequencyRank: 931 }
      ,{ traditional: "妇", simplified: "妇", pinyin: "fù", definition: "married women; woman; wife", radicals: "女", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0579", frequencyRank: 932 }
      ,{ traditional: "归", simplified: "归", pinyin: "guī", definition: "return; return to, revert to", radicals: "彐", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0234", frequencyRank: 933 }
      ,{ traditional: "睛", simplified: "睛", pinyin: "jīng", definition: "eyeball; pupil of eye", radicals: "目", strokeCount: 13, hskLevel: 2, generalStandardNumber: "2895", frequencyRank: 934 }
      ,{ traditional: "饭", simplified: "饭", pinyin: "fàn", definition: "cooked rice; food, meal", radicals: "食", strokeCount: 7, hskLevel: 1, generalStandardNumber: "0823", frequencyRank: 935 }
      ,{ traditional: "额", simplified: "额", pinyin: "é", definition: "forehead; tablet, plaque; fixed", radicals: "頁", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3304", frequencyRank: 936 }
      ,{ traditional: "含", simplified: "含", pinyin: "hán", definition: "hold in mouth; cherish; contain", radicals: "口", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0800", frequencyRank: 937 }
      ,{ traditional: "顺", simplified: "顺", pinyin: "shùn", definition: "obey, submit to, go along with", radicals: "頁", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1559", frequencyRank: 938 }
      ,{ traditional: "输", simplified: "输", pinyin: "shū", definition: "transport, carry, haul", radicals: "車", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2890", frequencyRank: 939 }
      ,{ traditional: "摇", simplified: "摇", pinyin: "yáo", definition: "wag, swing, wave; shake; scull", radicals: "手", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2841", frequencyRank: 940 }
      ,{ traditional: "招", simplified: "招", pinyin: "zhāo", definition: "beckon, summon; recruit, levy", radicals: "手", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0988", frequencyRank: 941 }
      ,{ traditional: "婚", simplified: "婚", pinyin: "hūn", definition: "get married; marriage, wedding", radicals: "女", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2481", frequencyRank: 942 }
      ,{ traditional: "脱", simplified: "脱", pinyin: "tuō", definition: "take off", radicals: "肉", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2360", frequencyRank: 943 }
      ,{ traditional: "补", simplified: "补", pinyin: "bǔ", definition: "mend, patch, fix, repair, restore", radicals: "衣", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0888", frequencyRank: 944 }
      ,{ traditional: "谓", simplified: "谓", pinyin: "wèi", definition: "say, tell; call, name; be called", radicals: "言", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2466", frequencyRank: 945 }
      ,{ traditional: "督", simplified: "督", pinyin: "dū", definition: "supervise, oversee, direct", radicals: "目", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2891", frequencyRank: 946 }
      ,{ traditional: "毒", simplified: "毒", pinyin: "dú", definition: "poison, venom; poisonous", radicals: "毋", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1362", frequencyRank: 947 }
      ,{ traditional: "油", simplified: "油", pinyin: "yóu", definition: "oil, fat, grease, lard; paints", radicals: "水", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1248", frequencyRank: 948 }
      ,{ traditional: "疗", simplified: "疗", pinyin: "liáo", definition: "be healed, cured, recover", radicals: "疒", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0834", frequencyRank: 949 }
      ,{ traditional: "旅", simplified: "旅", pinyin: "lǚ", definition: "trip, journey; travel; traveler", radicals: "方", strokeCount: 10, hskLevel: 2, generalStandardNumber: "2046", frequencyRank: 950 }
      ,{ traditional: "泽", simplified: "泽", pinyin: "zé", definition: "marsh, swamp; grace, brilliance", radicals: "水", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1263", frequencyRank: 951 }
      ,{ traditional: "材", simplified: "材", pinyin: "cái", definition: "material, stuff; timber; talent", radicals: "木", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0681", frequencyRank: 952 }
      ,{ traditional: "灭", simplified: "灭", pinyin: "miè", definition: "extinguish; wipe out, exterminate", radicals: "火", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0223", frequencyRank: 953 }
      ,{ traditional: "逐", simplified: "逐", pinyin: "zhú", definition: "chase, expel; one by one", radicals: "辵", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1870", frequencyRank: 954 }
      ,{ traditional: "莫", simplified: "莫", pinyin: "mò", definition: "do not, is not, can not; negative", radicals: "艸", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1824", frequencyRank: 955 }
      ,{ traditional: "笔", simplified: "笔", pinyin: "bǐ", definition: "writing brush; write; stroke", radicals: "竹", strokeCount: 10, hskLevel: 2, generalStandardNumber: "1951", frequencyRank: 956 }
      ,{ traditional: "亡", simplified: "亡", pinyin: "wáng", definition: "death, destroyed; lose, perish", radicals: "亠", strokeCount: 3, hskLevel: 6, generalStandardNumber: "0054", frequencyRank: 957 }
      ,{ traditional: "鲜", simplified: "鲜", pinyin: "xiān", definition: "fresh; delicious; attractive", radicals: "魚", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3135", frequencyRank: 958 }
      ,{ traditional: "词", simplified: "词", pinyin: "cí", definition: "words; phrase, expression", radicals: "言", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0897", frequencyRank: 959 }
      ,{ traditional: "圣", simplified: "圣", pinyin: "shèng", definition: "holy, sacred", radicals: "土", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0340", frequencyRank: 960 }
      ,{ traditional: "择", simplified: "择", pinyin: "zé", definition: "select, choose, pick out", radicals: "手", strokeCount: 8, hskLevel: 3, generalStandardNumber: "0992", frequencyRank: 961 }
      ,{ traditional: "寻", simplified: "寻", pinyin: "xún", definition: "seek, search, look for; ancient", radicals: "彐", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0563", frequencyRank: 962 }
      ,{ traditional: "厂", simplified: "厂", pinyin: "chǎng", definition: "factory, workshop; radical 27", radicals: "厂", strokeCount: 2, hskLevel: 5, generalStandardNumber: "0006", frequencyRank: 963 }
      ,{ traditional: "睡", simplified: "睡", pinyin: "shuì", definition: "sleep, doze", radicals: "目", strokeCount: 13, hskLevel: 1, generalStandardNumber: "2900", frequencyRank: 964 }
      ,{ traditional: "博", simplified: "博", pinyin: "bó", definition: "gamble, play games; wide, broad", radicals: "十", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2521", frequencyRank: 965 }
      ,{ traditional: "勒", simplified: "勒", pinyin: "lēi", definition: "strangle, tighten", radicals: "力", strokeCount: 11, hskLevel: null, generalStandardNumber: "2200", frequencyRank: 966 }
      ,{ traditional: "烟", simplified: "烟", pinyin: "yān", definition: "smoke, soot; opium; tobacco, cigarettes", radicals: "火", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2062", frequencyRank: 967 }
      ,{ traditional: "授", simplified: "授", pinyin: "shòu", definition: "give to, transmit; confer", radicals: "手", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2177", frequencyRank: 968 }
      ,{ traditional: "诺", simplified: "诺", pinyin: "nuò", definition: "promise; assent, approve", radicals: "言", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2111", frequencyRank: 969 }
      ,{ traditional: "伦", simplified: "伦", pinyin: "lún", definition: "normal human relationships", radicals: "人", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0470", frequencyRank: 970 }
      ,{ traditional: "岸", simplified: "岸", pinyin: "àn", definition: "bank, shore; beach, coast", radicals: "山", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1105", frequencyRank: 971 }
      ,{ traditional: "奥", simplified: "奥", pinyin: "ào", definition: "mysterious, obscure, profound", radicals: "大", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2701", frequencyRank: 972 }
      ,{ traditional: "唐", simplified: "唐", pinyin: "táng", definition: "Tang dynasty; Chinese", radicals: "口", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2037", frequencyRank: 973 }
      ,{ traditional: "卖", simplified: "卖", pinyin: "mài", definition: "sell; betray; show off", radicals: "十", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1042", frequencyRank: 974 }
      ,{ traditional: "俄", simplified: "俄", pinyin: "é", definition: "sudden(ly), soon; Russian", radicals: "人", strokeCount: 9, hskLevel: null, generalStandardNumber: "1564", frequencyRank: 975 }
      ,{ traditional: "炸", simplified: "炸", pinyin: "zhà", definition: "to fry in oil; to scald; to explode", radicals: "火", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1656", frequencyRank: 976 }
      ,{ traditional: "载", simplified: "载", pinyin: "zài", definition: "load; carry; transport, convey", radicals: "戈", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1787", frequencyRank: 977 }
      ,{ traditional: "洛", simplified: "洛", pinyin: "luò", definition: "river in Shanxi province; city", radicals: "水", strokeCount: 9, hskLevel: null, generalStandardNumber: "1676", frequencyRank: 978 }
      ,{ traditional: "健", simplified: "健", pinyin: "jiàn", definition: "strong, robust, healthy; strength", radicals: "人", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1969", frequencyRank: 979 }
      ,{ traditional: "堂", simplified: "堂", pinyin: "táng", definition: "hall; government office", radicals: "土", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2256", frequencyRank: 980 }
      ,{ traditional: "旁", simplified: "旁", pinyin: "páng", definition: "side; by side, close by, near", radicals: "方", strokeCount: 10, hskLevel: 2, generalStandardNumber: "2045", frequencyRank: 981 }
      ,{ traditional: "宫", simplified: "宫", pinyin: "gōng", definition: "palace", radicals: "宀", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1698", frequencyRank: 982 }
      ,{ traditional: "喝", simplified: "喝", pinyin: "hē", definition: "drink; shout, call out", radicals: "口", strokeCount: 12, hskLevel: 1, generalStandardNumber: "2639", frequencyRank: 983 }
      ,{ traditional: "借", simplified: "借", pinyin: "jiè", definition: "borrow; lend; make pretext of", radicals: "人", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1955", frequencyRank: 984 }
      ,{ traditional: "君", simplified: "君", pinyin: "jūn", definition: "sovereign, monarch, ruler, chief, prince", radicals: "口", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0899", frequencyRank: 985 }
      ,{ traditional: "禁", simplified: "禁", pinyin: "jìn", definition: "restrict, prohibit, forbid", radicals: "示", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2863", frequencyRank: 986 }
      ,{ traditional: "阴", simplified: "阴", pinyin: "yīn", definition: "negative, feminine, cool, moist; Yin (of yin-yang)", radicals: "阜", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0575", frequencyRank: 987 }
      ,{ traditional: "园", simplified: "园", pinyin: "yuán", definition: "garden; park, orchard", radicals: "囗", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0726", frequencyRank: 988 }
      ,{ traditional: "谋", simplified: "谋", pinyin: "móu", definition: "plan, scheme; strategem", radicals: "言", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2459", frequencyRank: 989 }
      ,{ traditional: "宋", simplified: "宋", pinyin: "sòng", definition: "Song dynasty; surname", radicals: "宀", strokeCount: 7, hskLevel: null, generalStandardNumber: "0878", frequencyRank: 990 }
      ,{ traditional: "避", simplified: "避", pinyin: "bì", definition: "avoid; turn aside; escape; hide", radicals: "辵", strokeCount: 16, hskLevel: 5, generalStandardNumber: "3385", frequencyRank: 991 }
      ,{ traditional: "抓", simplified: "抓", pinyin: "zhuā", definition: "scratch; clutch, seize, grab", radicals: "手", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0633", frequencyRank: 992 }
      ,{ traditional: "荣", simplified: "荣", pinyin: "róng", definition: "glory, honor; flourish, prosper", radicals: "艸", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1415", frequencyRank: 993 }
      ,{ traditional: "姑", simplified: "姑", pinyin: "gū", definition: "father's sister (aunt), nun", radicals: "女", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1325", frequencyRank: 994 }
      ,{ traditional: "孙", simplified: "孙", pinyin: "sūn", definition: "grandchild, descendent; surname", radicals: "子", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0570", frequencyRank: 995 }
      ,{ traditional: "逃", simplified: "逃", pinyin: "táo", definition: "escape, flee; abscond, dodge", radicals: "辵", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1588", frequencyRank: 996 }
      ,{ traditional: "牙", simplified: "牙", pinyin: "yá", definition: "tooth, molars, teeth; serrated", radicals: "牙", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0102", frequencyRank: 997 }
      ,{ traditional: "束", simplified: "束", pinyin: "shù", definition: "bind, control, restrain; bale", radicals: "木", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0694", frequencyRank: 998 }
      ,{ traditional: "跳", simplified: "跳", pinyin: "tiào", definition: "jump, leap, vault, bounce; dance", radicals: "足", strokeCount: 13, hskLevel: 2, generalStandardNumber: "2915", frequencyRank: 999 }
      ,{ traditional: "顶", simplified: "顶", pinyin: "dǐng", definition: "top, summit, peak; to carry on the head", radicals: "頁", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0971", frequencyRank: 1000 }
      ,{ traditional: "玉", simplified: "玉", pinyin: "yù", definition: "jade, precious stone, gem", radicals: "玉", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0190", frequencyRank: 1001 }
      ,{ traditional: "镇", simplified: "镇", pinyin: "zhèn", definition: "town, market place; suppress", radicals: "金", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3256", frequencyRank: 1002 }
      ,{ traditional: "雪", simplified: "雪", pinyin: "xuě", definition: "snow; wipe away shame, avenge", radicals: "雨", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2249", frequencyRank: 1003 }
      ,{ traditional: "午", simplified: "午", pinyin: "wǔ", definition: "noon; 7th terrestrial branch", radicals: "十", strokeCount: 4, hskLevel: 1, generalStandardNumber: "0119", frequencyRank: 1004 }
      ,{ traditional: "练", simplified: "练", pinyin: "liàn", definition: "to practice, drill, exercise, train", radicals: "糸", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1337", frequencyRank: 1005 }
      ,{ traditional: "迫", simplified: "迫", pinyin: "pò", definition: "coerce, force, compel; urgent", radicals: "辵", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1156", frequencyRank: 1006 }
      ,{ traditional: "爷", simplified: "爷", pinyin: "yé", definition: "father, grandfather", radicals: "父", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0492", frequencyRank: 1007 }
      ,{ traditional: "篇", simplified: "篇", pinyin: "piān", definition: "chapter, section, essay, article", radicals: "竹", strokeCount: 15, hskLevel: 4, generalStandardNumber: "3268", frequencyRank: 1008 }
      ,{ traditional: "肉", simplified: "肉", pinyin: "ròu", definition: "flesh; meat; KangXi radical 130", radicals: "肉", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0443", frequencyRank: 1009 }
      ,{ traditional: "嘴", simplified: "嘴", pinyin: "zuǐ", definition: "mouth, lips", radicals: "口", strokeCount: 16, hskLevel: 3, generalStandardNumber: "3342", frequencyRank: 1010 }
      ,{ traditional: "馆", simplified: "馆", pinyin: "guǎn", definition: "public building", radicals: "食", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2373", frequencyRank: 1011 }
      ,{ traditional: "遍", simplified: "遍", pinyin: "biàn", definition: "everywhere, all over, throughout", radicals: "辵", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2788", frequencyRank: 1012 }
      ,{ traditional: "凡", simplified: "凡", pinyin: "fán", definition: "all, any, every; ordinary, common", radicals: "几", strokeCount: 3, hskLevel: 6, generalStandardNumber: "0050", frequencyRank: 1013 }
      ,{ traditional: "础", simplified: "础", pinyin: "chǔ", definition: "foundation stone, plinth", radicals: "石", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1866", frequencyRank: 1014 }
      ,{ traditional: "洞", simplified: "洞", pinyin: "dòng", definition: "cave, grotto; ravine; hole", radicals: "水", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1669", frequencyRank: 1015 }
      ,{ traditional: "卷", simplified: "卷", pinyin: "juǎn", definition: "scroll; curl; make a comeback", radicals: "卩", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1231", frequencyRank: 1016 }
      ,{ traditional: "坦", simplified: "坦", pinyin: "tǎn", definition: "flat, smooth; self-possessed", radicals: "土", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0962", frequencyRank: 1017 }
      ,{ traditional: "牛", simplified: "牛", pinyin: "niú", definition: "cow, ox, bull; KangXi radical93", radicals: "牛", strokeCount: 4, hskLevel: 2, generalStandardNumber: "0120", frequencyRank: 1018 }
      ,{ traditional: "宁", simplified: "宁", pinyin: "níng", definition: "calm, peaceful, serene; healthy", radicals: "宀", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0312", frequencyRank: 1019 }
      ,{ traditional: "纸", simplified: "纸", pinyin: "zhǐ", definition: "paper", radicals: "糸", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0938", frequencyRank: 1020 }
      ,{ traditional: "诸", simplified: "诸", pinyin: "zhū", definition: "various, all, these; surname", radicals: "言", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2110", frequencyRank: 1021 }
      ,{ traditional: "训", simplified: "训", pinyin: "xùn", definition: "teach, instruct; exegesis", radicals: "言", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0319", frequencyRank: 1022 }
      ,{ traditional: "私", simplified: "私", pinyin: "sī", definition: "private, personal; secret", radicals: "禾", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0766", frequencyRank: 1023 }
      ,{ traditional: "庄", simplified: "庄", pinyin: "zhuāng", definition: "village, hamlet; villa, manor", radicals: "广", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0514", frequencyRank: 1024 }
      ,{ traditional: "祖", simplified: "祖", pinyin: "zǔ", definition: "ancestor, forefather; grandfather", radicals: "示", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1710", frequencyRank: 1025 }
      ,{ traditional: "丝", simplified: "丝", pinyin: "sī", definition: "silk; fine thread; wire; strings", radicals: "一", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0347", frequencyRank: 1026 }
      ,{ traditional: "翻", simplified: "翻", pinyin: "fān", definition: "flip over, upset, capsize", radicals: "羽", strokeCount: 18, hskLevel: 4, generalStandardNumber: "3445", frequencyRank: 1027 }
      ,{ traditional: "暴", simplified: "暴", pinyin: "bào", definition: "violent, brutal, tyrannical", radicals: "日", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3234", frequencyRank: 1028 }
      ,{ traditional: "森", simplified: "森", pinyin: "sēn", definition: "forest; luxuriant vegetation", radicals: "木", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2567", frequencyRank: 1029 }
      ,{ traditional: "塔", simplified: "塔", pinyin: "tǎ", definition: "tower, spire, tall building", radicals: "土", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2510", frequencyRank: 1030 }
      ,{ traditional: "默", simplified: "默", pinyin: "mò", definition: "silent; quiet, still; dark", radicals: "黑", strokeCount: 16, hskLevel: 4, generalStandardNumber: "3352", frequencyRank: 1031 }
      ,{ traditional: "握", simplified: "握", pinyin: "wò", definition: "grasp, hold fast, take by hand", radicals: "手", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2538", frequencyRank: 1032 }
      ,{ traditional: "戏", simplified: "戏", pinyin: "xì", definition: "theatrical play, show", radicals: "戈", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0584", frequencyRank: 1033 }
      ,{ traditional: "隐", simplified: "隐", pinyin: "yǐn", definition: "hide, conceal; hidden, secret", radicals: "阜", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2480", frequencyRank: 1034 }
      ,{ traditional: "熟", simplified: "熟", pinyin: "shú", definition: "well-cooked; ripe; familiar with", radicals: "火", strokeCount: 15, hskLevel: 4, generalStandardNumber: "3278", frequencyRank: 1035 }
      ,{ traditional: "骨", simplified: "骨", pinyin: "gǔ", definition: "bone; skeleton; frame, framework", radicals: "骨", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1523", frequencyRank: 1036 }
      ,{ traditional: "访", simplified: "访", pinyin: "fǎng", definition: "visit; ask, inquire", radicals: "言", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0561", frequencyRank: 1037 }
      ,{ traditional: "弱", simplified: "弱", pinyin: "ruò", definition: "weak; fragile, delicate", radicals: "弓", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2134", frequencyRank: 1038 }
      ,{ traditional: "蒙", simplified: "蒙", pinyin: "méng", definition: "cover; ignorant; suffer; mongolia", radicals: "艸", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2859", frequencyRank: 1039 }
      ,{ traditional: "歌", simplified: "歌", pinyin: "gē", definition: "song, lyrics; sing, chant; praise", radicals: "欠", strokeCount: 14, hskLevel: 2, generalStandardNumber: "3084", frequencyRank: 1040 }
      ,{ traditional: "店", simplified: "店", pinyin: "diàn", definition: "shop, store; inn, hotel", radicals: "广", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1208", frequencyRank: 1041 }
      ,{ traditional: "鬼", simplified: "鬼", pinyin: "guǐ", definition: "ghost; spirit of dead; devil", radicals: "鬼", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1573", frequencyRank: 1042 }
      ,{ traditional: "软", simplified: "软", pinyin: "ruǎn", definition: "soft, flexible, pliable; weak", radicals: "車", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1062", frequencyRank: 1043 }
      ,{ traditional: "典", simplified: "典", pinyin: "diǎn", definition: "law, canon; documentation; classic, scripture", radicals: "八", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1092", frequencyRank: 1044 }
      ,{ traditional: "欲", simplified: "欲", pinyin: "yù", definition: "desire, want, long for; intend", radicals: "欠", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2352", frequencyRank: 1045 }
      ,{ traditional: "萨", simplified: "萨", pinyin: "sà", definition: "Buddhist gods or immortals", radicals: "艸", strokeCount: 11, hskLevel: null, generalStandardNumber: "2217", frequencyRank: 1046 }
      ,{ traditional: "伙", simplified: "伙", pinyin: "huǒ", definition: "companion, colleague; utensils", radicals: "人", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0475", frequencyRank: 1047 }
      ,{ traditional: "遭", simplified: "遭", pinyin: "zāo", definition: "come across, meet with, encounter", radicals: "辵", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3085", frequencyRank: 1048 }
      ,{ traditional: "盘", simplified: "盘", pinyin: "pán", definition: "tray, plate, dish; examine", radicals: "皿", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2343", frequencyRank: 1049 }
      ,{ traditional: "爸", simplified: "爸", pinyin: "bà", definition: "father, papa", radicals: "父", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1171", frequencyRank: 1050 }
      ,{ traditional: "扩", simplified: "扩", pinyin: "kuò", definition: "expand, enlarge, stretch", radicals: "手", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0364", frequencyRank: 1051 }
      ,{ traditional: "盖", simplified: "盖", pinyin: "gài", definition: "cover, hide, protect", radicals: "皿", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2400", frequencyRank: 1052 }
      ,{ traditional: "弄", simplified: "弄", pinyin: "nòng", definition: "do, play or fiddle with; alley", radicals: "廾", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0600", frequencyRank: 1053 }
      ,{ traditional: "雄", simplified: "雄", pinyin: "xióng", definition: "male of species; hero; manly", radicals: "隹", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2596", frequencyRank: 1054 }
      ,{ traditional: "稳", simplified: "稳", pinyin: "wěn", definition: "stable, firm, solid, steady", radicals: "禾", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3118", frequencyRank: 1055 }
      ,{ traditional: "忘", simplified: "忘", pinyin: "wàng", definition: "forget; neglect; miss, omit", radicals: "心", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0844", frequencyRank: 1056 }
      ,{ traditional: "亿", simplified: "亿", pinyin: "yì", definition: "hundred million; many", radicals: "人", strokeCount: 3, hskLevel: 5, generalStandardNumber: "0044", frequencyRank: 1057 }
      ,{ traditional: "刺", simplified: "刺", pinyin: "cì", definition: "stab; prick, irritate; prod", radicals: "刀", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1039", frequencyRank: 1058 }
      ,{ traditional: "拥", simplified: "拥", pinyin: "yōng", definition: "embrace, hug, squeeze; crowd", radicals: "手", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0974", frequencyRank: 1059 }
      ,{ traditional: "徒", simplified: "徒", pinyin: "tú", definition: "disciple, follower; go on foot", radicals: "彳", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1975", frequencyRank: 1060 }
      ,{ traditional: "姆", simplified: "姆", pinyin: "mǔ", definition: "nanny, (usually phonetic for loanwords)", radicals: "女", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1330", frequencyRank: 1061 }
      ,{ traditional: "杨", simplified: "杨", pinyin: "yáng", definition: "willow, poplar, aspen; surname", radicals: "木", strokeCount: 7, hskLevel: null, generalStandardNumber: "0689", frequencyRank: 1062 }
      ,{ traditional: "齐", simplified: "齐", pinyin: "qí", definition: "even, uniform, of equal length", radicals: "齊", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0518", frequencyRank: 1063 }
      ,{ traditional: "赛", simplified: "赛", pinyin: "sài", definition: "compete, contend; contest, race", radicals: "宀", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3172", frequencyRank: 1064 }
      ,{ traditional: "趣", simplified: "趣", pinyin: "qù", definition: "interesting, amusing, delightful", radicals: "走", strokeCount: 15, hskLevel: 3, generalStandardNumber: "3194", frequencyRank: 1065 }
      ,{ traditional: "曲", simplified: "曲", pinyin: "qū", definition: "crooked, bent; wrong, false", radicals: "曰", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0424", frequencyRank: 1066 }
      ,{ traditional: "刀", simplified: "刀", pinyin: "dāo", definition: "knife; old coin; measure", radicals: "刀", strokeCount: 2, hskLevel: 4, generalStandardNumber: "0018", frequencyRank: 1067 }
      ,{ traditional: "床", simplified: "床", pinyin: "chuáng", definition: "bed, couch; framework, chassis", radicals: "广", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0831", frequencyRank: 1068 }
      ,{ traditional: "迎", simplified: "迎", pinyin: "yíng", definition: "receive, welcome, greet", radicals: "辵", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0822", frequencyRank: 1069 }
      ,{ traditional: "冰", simplified: "冰", pinyin: "bīng", definition: "ice; ice-cold", radicals: "冫", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0513", frequencyRank: 1070 }
      ,{ traditional: "虚", simplified: "虚", pinyin: "xū", definition: "false", radicals: "虍", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2253", frequencyRank: 1071 }
      ,{ traditional: "玩", simplified: "玩", pinyin: "wán", definition: "play with, joke, enjoy", radicals: "玉", strokeCount: 8, hskLevel: 2, generalStandardNumber: "0944", frequencyRank: 1072 }
      ,{ traditional: "析", simplified: "析", pinyin: "xī", definition: "split wood; break apart; divide", radicals: "木", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1024", frequencyRank: 1073 }
      ,{ traditional: "窗", simplified: "窗", pinyin: "chuāng", definition: "window", radicals: "穴", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2786", frequencyRank: 1074 }
      ,{ traditional: "醒", simplified: "醒", pinyin: "xǐng", definition: "wake up; sober up; startle", radicals: "酉", strokeCount: 16, hskLevel: 4, generalStandardNumber: "3336", frequencyRank: 1075 }
      ,{ traditional: "妻", simplified: "妻", pinyin: "qī", definition: "wife", radicals: "女", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1056", frequencyRank: 1076 }
      ,{ traditional: "透", simplified: "透", pinyin: "tòu", definition: "penetrate, pass through", radicals: "辵", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1950", frequencyRank: 1077 }
      ,{ traditional: "购", simplified: "购", pinyin: "gòu", definition: "buy, purchase; hire", radicals: "貝", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1117", frequencyRank: 1078 }
      ,{ traditional: "替", simplified: "替", pinyin: "tì", definition: "change, replace, substitute for", radicals: "曰", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2506", frequencyRank: 1079 }
      ,{ traditional: "塞", simplified: "塞", pinyin: "sāi", definition: "stop up, block, seal, cork; pass, frontier; fortress", radicals: "土", strokeCount: 13, hskLevel: 6, generalStandardNumber: "3025", frequencyRank: 1080 }
      ,{ traditional: "努", simplified: "努", pinyin: "nǔ", definition: "to exert, strive, make an effort; to pout", radicals: "力", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0924", frequencyRank: 1081 }
      ,{ traditional: "休", simplified: "休", pinyin: "xiū", definition: "rest, stop; retire; do not!", radicals: "人", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0458", frequencyRank: 1082 }
      ,{ traditional: "虎", simplified: "虎", pinyin: "hǔ", definition: "tiger; brave, fierce; surname", radicals: "虍", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1071", frequencyRank: 1083 }
      ,{ traditional: "扬", simplified: "扬", pinyin: "yáng", definition: "scatter, spread; praise", radicals: "手", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0368", frequencyRank: 1084 }
      ,{ traditional: "途", simplified: "途", pinyin: "tú", definition: "way, road, path, journey; course", radicals: "辵", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1982", frequencyRank: 1085 }
      ,{ traditional: "侵", simplified: "侵", pinyin: "qīn", definition: "invade, encroach upon, raid", radicals: "人", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1574", frequencyRank: 1086 }
      ,{ traditional: "刑", simplified: "刑", pinyin: "xíng", definition: "punishment, penalty; law", radicals: "刀", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0351", frequencyRank: 1087 }
      ,{ traditional: "绿", simplified: "绿", pinyin: "lǜ", definition: "green; chlorine", radicals: "糸", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2498", frequencyRank: 1088 }
      ,{ traditional: "兄", simplified: "兄", pinyin: "xiōng", definition: "elder brother", radicals: "儿", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0250", frequencyRank: 1089 }
      ,{ traditional: "迅", simplified: "迅", pinyin: "xùn", definition: "quick, hasty, rapid, sudden", radicals: "辵", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0565", frequencyRank: 1090 }
      ,{ traditional: "套", simplified: "套", pinyin: "tào", definition: "case, cover, wrapper, envelope", radicals: "大", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1869", frequencyRank: 1091 }
      ,{ traditional: "贸", simplified: "贸", pinyin: "mào", definition: "trade, barter; mixed; rashly", radicals: "貝", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1607", frequencyRank: 1092 }
      ,{ traditional: "毕", simplified: "毕", pinyin: "bì", definition: "end, finish, conclude; completed", radicals: "比", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0409", frequencyRank: 1093 }
      ,{ traditional: "唯", simplified: "唯", pinyin: "wéi", definition: "only; yes", radicals: "口", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2288", frequencyRank: 1094 }
      ,{ traditional: "谷", simplified: "谷", pinyin: "gǔ", definition: "valley, gorge, ravine", radicals: "谷", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0798", frequencyRank: 1095 }
      ,{ traditional: "轮", simplified: "轮", pinyin: "lún", definition: "wheel; revolve, turn; recur", radicals: "車", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1061", frequencyRank: 1096 }
      ,{ traditional: "库", simplified: "库", pinyin: "kù", definition: "armory, treasury, storehouse", radicals: "广", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0832", frequencyRank: 1097 }
      ,{ traditional: "迹", simplified: "迹", pinyin: "jī", definition: "traces, impressions, footprints", radicals: "辵", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1623", frequencyRank: 1098 }
      ,{ traditional: "尤", simplified: "尤", pinyin: "yóu", definition: "especially, particularly", radicals: "尢", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0098", frequencyRank: 1099 }
      ,{ traditional: "竞", simplified: "竞", pinyin: "jìng", definition: "contend, vie, compete", radicals: "立", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2043", frequencyRank: 1100 }
      ,{ traditional: "街", simplified: "街", pinyin: "jiē", definition: "street, road, thoroughfare", radicals: "行", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2702", frequencyRank: 1101 }
      ,{ traditional: "促", simplified: "促", pinyin: "cù", definition: "urge, press, hurry; close", radicals: "人", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1563", frequencyRank: 1102 }
      ,{ traditional: "延", simplified: "延", pinyin: "yán", definition: "delay, postpone, defer", radicals: "廴", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0464", frequencyRank: 1103 }
      ,{ traditional: "震", simplified: "震", pinyin: "zhèn", definition: "shake, quake, tremor; excite", radicals: "雨", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3229", frequencyRank: 1104 }
      ,{ traditional: "弃", simplified: "弃", pinyin: "qì", definition: "reject, abandon, discard", radicals: "廾", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0842", frequencyRank: 1105 }
      ,{ traditional: "甲", simplified: "甲", pinyin: "jiǎ", definition: "armor, shell; fingernails; 1st heavenly stem", radicals: "田", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0239", frequencyRank: 1106 }
      ,{ traditional: "伟", simplified: "伟", pinyin: "wěi", definition: "great, robust; extraordinary", radicals: "人", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0454", frequencyRank: 1107 }
      ,{ traditional: "麻", simplified: "麻", pinyin: "má", definition: "hemp, jute, flax; sesame", radicals: "麻", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2379", frequencyRank: 1108 }
      ,{ traditional: "川", simplified: "川", pinyin: "chuān", definition: "stream, river; flow; boil", radicals: "巛", strokeCount: 3, hskLevel: 6, generalStandardNumber: "0043", frequencyRank: 1109 }
      ,{ traditional: "申", simplified: "申", pinyin: "shēn", definition: "to state to a superior, report; extend; 9th terrestrial branch", radicals: "田", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0240", frequencyRank: 1110 }
      ,{ traditional: "缓", simplified: "缓", pinyin: "huǎn", definition: "slow, leisurely; to postpone, delay", radicals: "糸", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2818", frequencyRank: 1111 }
      ,{ traditional: "潜", simplified: "潜", pinyin: "qián", definition: "hide; hidden, secret, latent", radicals: "水", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3290", frequencyRank: 1112 }
      ,{ traditional: "闪", simplified: "闪", pinyin: "shǎn", definition: "flash; avoid, dodge, evade", radicals: "門", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0305", frequencyRank: 1113 }
      ,{ traditional: "售", simplified: "售", pinyin: "shòu", definition: "sell", radicals: "口", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2332", frequencyRank: 1114 }
      ,{ traditional: "灯", simplified: "灯", pinyin: "dēng", definition: "lantern, lamp", radicals: "火", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0534", frequencyRank: 1115 }
      ,{ traditional: "针", simplified: "针", pinyin: "zhēn", definition: "needle; pin; tack; acupuncture", radicals: "金", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0757", frequencyRank: 1116 }
      ,{ traditional: "哲", simplified: "哲", pinyin: "zhé", definition: "wise, sagacious; wise man, sage", radicals: "口", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1802", frequencyRank: 1117 }
      ,{ traditional: "络", simplified: "络", pinyin: "luò", definition: "enmesh, wrap around; web, net", radicals: "糸", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1761", frequencyRank: 1118 }
      ,{ traditional: "抵", simplified: "抵", pinyin: "dǐ", definition: "resist, oppose; deny; off-set", radicals: "手", strokeCount: 8, hskLevel: 6, generalStandardNumber: "0975", frequencyRank: 1119 }
      ,{ traditional: "朱", simplified: "朱", pinyin: "zhū", definition: "cinnabar, vermilion; surname", radicals: "木", strokeCount: 6, hskLevel: null, generalStandardNumber: "0445", frequencyRank: 1120 }
      ,{ traditional: "埃", simplified: "埃", pinyin: "āi", definition: "fine dust, dirt", radicals: "土", strokeCount: 10, hskLevel: null, generalStandardNumber: "1814", frequencyRank: 1121 }
      ,{ traditional: "抱", simplified: "抱", pinyin: "bào", definition: "embrace, hold in arms, enfold", radicals: "手", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0978", frequencyRank: 1122 }
      ,{ traditional: "鼓", simplified: "鼓", pinyin: "gǔ", definition: "drum; beat, top, strike", radicals: "鼓", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2837", frequencyRank: 1123 }
      ,{ traditional: "植", simplified: "植", pinyin: "zhí", definition: "plant, trees, plants; grow", radicals: "木", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2566", frequencyRank: 1124 }
      ,{ traditional: "纯", simplified: "纯", pinyin: "chún", definition: "pure, clean, simple", radicals: "糸", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0931", frequencyRank: 1125 }
      ,{ traditional: "夏", simplified: "夏", pinyin: "xià", definition: "summer; great, grand, big", radicals: "夊", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1862", frequencyRank: 1126 }
      ,{ traditional: "忍", simplified: "忍", pinyin: "rěn", definition: "endure, bear, suffer; forbear", radicals: "心", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0925", frequencyRank: 1127 }
      ,{ traditional: "页", simplified: "页", pinyin: "yè", definition: "page, sheet, leaf; rad. no. 181", radicals: "頁", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0393", frequencyRank: 1128 }
      ,{ traditional: "杰", simplified: "杰", pinyin: "jié", definition: "hero; heroic, outstanding", radicals: "木", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1031", frequencyRank: 1129 }
      ,{ traditional: "筑", simplified: "筑", pinyin: "zhù", definition: "ancient lute; build", radicals: "竹", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2682", frequencyRank: 1130 }
      ,{ traditional: "折", simplified: "折", pinyin: "zhé", definition: "break off, snap; bend", radicals: "手", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0632", frequencyRank: 1131 }
      ,{ traditional: "郑", simplified: "郑", pinyin: "zhèng", definition: "(phonetic)", radicals: "邑", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1229", frequencyRank: 1132 }
      ,{ traditional: "贝", simplified: "贝", pinyin: "bèi", definition: "sea shell; money, currency", radicals: "貝", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0114", frequencyRank: 1133 }
      ,{ traditional: "尊", simplified: "尊", pinyin: "zūn", definition: "respect, revere, venerate; honor", radicals: "寸", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2743", frequencyRank: 1134 }
      ,{ traditional: "吴", simplified: "吴", pinyin: "wú", definition: "name of warring state; surname", radicals: "口", strokeCount: 7, hskLevel: null, generalStandardNumber: "0718", frequencyRank: 1135 }
      ,{ traditional: "秀", simplified: "秀", pinyin: "xiù", definition: "ear of grain; flowering, luxuriant; refined, elegant, graceful", radicals: "禾", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0765", frequencyRank: 1136 }
      ,{ traditional: "混", simplified: "混", pinyin: "hùn", definition: "to mix, blend, mingle; to bumble along", radicals: "水", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2420", frequencyRank: 1137 }
      ,{ traditional: "臣", simplified: "臣", pinyin: "chén", definition: "minister, statesman, official", radicals: "臣", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0380", frequencyRank: 1138 }
      ,{ traditional: "雅", simplified: "雅", pinyin: "yǎ", definition: "elegant, graceful, refined", radicals: "隹", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2600", frequencyRank: 1139 }
      ,{ traditional: "振", simplified: "振", pinyin: "zhèn", definition: "raise, excite, arouse action", radicals: "手", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1786", frequencyRank: 1140 }
      ,{ traditional: "染", simplified: "染", pinyin: "rǎn", definition: "dye; be contagious; infect", radicals: "木", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1675", frequencyRank: 1141 }
      ,{ traditional: "盛", simplified: "盛", pinyin: "shèng", definition: "abundant, flourishing; contain; fill", radicals: "皿", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2247", frequencyRank: 1142 }
      ,{ traditional: "怒", simplified: "怒", pinyin: "nù", definition: "anger, rage, passion; angry", radicals: "心", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1742", frequencyRank: 1143 }
      ,{ traditional: "舞", simplified: "舞", pinyin: "wǔ", definition: "dance, posture, prance; brandish", radicals: "舛", strokeCount: 14, hskLevel: 2, generalStandardNumber: "3116", frequencyRank: 1144 }
      ,{ traditional: "圆", simplified: "圆", pinyin: "yuán", definition: "circle; round, circular; complete", radicals: "囗", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1922", frequencyRank: 1145 }
      ,{ traditional: "搞", simplified: "搞", pinyin: "gǎo", definition: "to clear, clarify", radicals: "手", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2842", frequencyRank: 1146 }
      ,{ traditional: "狂", simplified: "狂", pinyin: "kuáng", definition: "insane, mad; violent; wild", radicals: "犬", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0811", frequencyRank: 1147 }
      ,{ traditional: "措", simplified: "措", pinyin: "cuò", definition: "place; collect, arrange; employ", radicals: "手", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2162", frequencyRank: 1148 }
      ,{ traditional: "姓", simplified: "姓", pinyin: "xìng", definition: "surname of family", radicals: "女", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1327", frequencyRank: 1149 }
      ,{ traditional: "残", simplified: "残", pinyin: "cán", definition: "injure, spoil; oppress; broken", radicals: "歹", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1460", frequencyRank: 1150 }
      ,{ traditional: "秋", simplified: "秋", pinyin: "qiū", definition: "autumn, fall; year", radicals: "禾", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1550", frequencyRank: 1151 }
      ,{ traditional: "培", simplified: "培", pinyin: "péi", definition: "bank up with dirt; cultivate", radicals: "土", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2184", frequencyRank: 1152 }
      ,{ traditional: "迷", simplified: "迷", pinyin: "mí", definition: "bewitch, charm, infatuate", radicals: "辵", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1647", frequencyRank: 1153 }
      ,{ traditional: "诚", simplified: "诚", pinyin: "chéng", definition: "sincere, honest; true, real", radicals: "言", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1291", frequencyRank: 1154 }
      ,{ traditional: "宽", simplified: "宽", pinyin: "kuān", definition: "broad, wide; spacious, vast", radicals: "宀", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2098", frequencyRank: 1155 }
      ,{ traditional: "宇", simplified: "宇", pinyin: "yǔ", definition: "house; building, structure; eaves", radicals: "宀", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0545", frequencyRank: 1156 }
      ,{ traditional: "猛", simplified: "猛", pinyin: "měng", definition: "violent, savage, cruel; bold", radicals: "犬", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2370", frequencyRank: 1157 }
      ,{ traditional: "摆", simplified: "摆", pinyin: "bǎi", definition: "put, place; display; swing, sway", radicals: "手", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2838", frequencyRank: 1158 }
      ,{ traditional: "梅", simplified: "梅", pinyin: "méi", definition: "plums; prunes; surname", radicals: "木", strokeCount: 11, hskLevel: null, generalStandardNumber: "2226", frequencyRank: 1159 }
      ,{ traditional: "毁", simplified: "毁", pinyin: "huǐ", definition: "destroy", radicals: "殳", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2956", frequencyRank: 1160 }
      ,{ traditional: "伸", simplified: "伸", pinyin: "shēn", definition: "extend, stretch out, open up; trust", radicals: "人", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0775", frequencyRank: 1161 }
      ,{ traditional: "摩", simplified: "摩", pinyin: "mó", definition: "rub, scour, grind; friction", radicals: "手", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3279", frequencyRank: 1162 }
      ,{ traditional: "盟", simplified: "盟", pinyin: "méng", definition: "swear; oath, covenant, alliance", radicals: "皿", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2907", frequencyRank: 1163 }
      ,{ traditional: "末", simplified: "末", pinyin: "mò", definition: "final, last, end; insignificant", radicals: "木", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0193", frequencyRank: 1164 }
      ,{ traditional: "乃", simplified: "乃", pinyin: "nǎi", definition: "then; really, indeed; as it turned out, after all; namely", radicals: "丿", strokeCount: 2, hskLevel: null, generalStandardNumber: "0020", frequencyRank: 1165 }
      ,{ traditional: "悲", simplified: "悲", pinyin: "bēi", definition: "sorrow, grief; sorry, sad", radicals: "心", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2603", frequencyRank: 1166 }
      ,{ traditional: "拍", simplified: "拍", pinyin: "pāi", definition: "clap, tap, beat; beat or rhythm", radicals: "手", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0970", frequencyRank: 1167 }
      ,{ traditional: "丁", simplified: "丁", pinyin: "dīng", definition: "male adult; robust, vigorous; 4th heavenly stem", radicals: "一", strokeCount: 2, hskLevel: 6, generalStandardNumber: "0005", frequencyRank: 1168 }
      ,{ traditional: "赵", simplified: "赵", pinyin: "zhào", definition: "surname; ancient state", radicals: "走", strokeCount: 9, hskLevel: null, generalStandardNumber: "1378", frequencyRank: 1169 }
      ,{ traditional: "硬", simplified: "硬", pinyin: "yìng", definition: "hard, firm, strong; obstinate", radicals: "石", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2589", frequencyRank: 1170 }
      ,{ traditional: "麦", simplified: "麦", pinyin: "mài", definition: "wheat, barley, oats; simplified form of KangXi radical number 199", radicals: "麥", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0601", frequencyRank: 1171 }
      ,{ traditional: "蒋", simplified: "蒋", pinyin: "jiǎng", definition: "surname; hydropyrum latifalium", radicals: "艸", strokeCount: 12, hskLevel: null, generalStandardNumber: "2555", frequencyRank: 1172 }
      ,{ traditional: "操", simplified: "操", pinyin: "cāo", definition: "conduct, run, control, manage", radicals: "手", strokeCount: 16, hskLevel: 5, generalStandardNumber: "3317", frequencyRank: 1173 }
      ,{ traditional: "耶", simplified: "耶", pinyin: "yé", definition: "used in transliteration", radicals: "耳", strokeCount: 8, hskLevel: null, generalStandardNumber: "3853", frequencyRank: 1174 }
      ,{ traditional: "阻", simplified: "阻", pinyin: "zǔ", definition: "impede, hinder, obstruct; oppose", radicals: "阜", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0915", frequencyRank: 1175 }
      ,{ traditional: "订", simplified: "订", pinyin: "dìng", definition: "draw up agreement; arrange", radicals: "言", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0169", frequencyRank: 1176 }
      ,{ traditional: "彩", simplified: "彩", pinyin: "cǎi", definition: "hue, color; variegated colors", radicals: "彡", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2353", frequencyRank: 1177 }
      ,{ traditional: "抽", simplified: "抽", pinyin: "chōu", definition: "draw out, pull out; sprout", radicals: "手", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0966", frequencyRank: 1178 }
      ,{ traditional: "赞", simplified: "赞", pinyin: "zàn", definition: "help, support, assist, aid", radicals: "貝", strokeCount: 16, hskLevel: 5, generalStandardNumber: "3355", frequencyRank: 1179 }
      ,{ traditional: "魔", simplified: "魔", pinyin: "mó", definition: "demon, evil spirits; magic power", radicals: "鬼", strokeCount: 20, hskLevel: 6, generalStandardNumber: "3484", frequencyRank: 1180 }
      ,{ traditional: "纷", simplified: "纷", pinyin: "fēn", definition: "in disorder, scattered, tangled", radicals: "糸", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0937", frequencyRank: 1181 }
      ,{ traditional: "沿", simplified: "沿", pinyin: "yán", definition: "follow a course, go along", radicals: "水", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1250", frequencyRank: 1182 }
      ,{ traditional: "喊", simplified: "喊", pinyin: "hǎn", definition: "shout, call out, yell; howl; cry", radicals: "口", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2623", frequencyRank: 1183 }
      ,{ traditional: "违", simplified: "违", pinyin: "wéi", definition: "disobey, violate, defy; be apart from", radicals: "辵", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0609", frequencyRank: 1184 }
      ,{ traditional: "妹", simplified: "妹", pinyin: "mèi", definition: "younger sister", radicals: "女", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1324", frequencyRank: 1185 }
      ,{ traditional: "浪", simplified: "浪", pinyin: "làng", definition: "wave; wasteful, reckless", radicals: "水", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2084", frequencyRank: 1186 }
      ,{ traditional: "汇", simplified: "汇", pinyin: "huì", definition: "concourse; flow together, gather", radicals: "水", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0309", frequencyRank: 1187 }
      ,{ traditional: "币", simplified: "币", pinyin: "bì", definition: "currency, coins, legal tender", radicals: "巾", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0134", frequencyRank: 1188 }
      ,{ traditional: "丰", simplified: "丰", pinyin: "fēng", definition: "abundant, lush, bountiful, plenty", radicals: "丨", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0074", frequencyRank: 1189 }
      ,{ traditional: "蓝", simplified: "蓝", pinyin: "lán", definition: "blue; indigo plant; surname", radicals: "艸", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2852", frequencyRank: 1190 }
      ,{ traditional: "殊", simplified: "殊", pinyin: "shū", definition: "different, special, unusual", radicals: "歹", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1872", frequencyRank: 1191 }
      ,{ traditional: "献", simplified: "献", pinyin: "xiàn", definition: "offer, present; show, display", radicals: "犬", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2861", frequencyRank: 1192 }
      ,{ traditional: "桌", simplified: "桌", pinyin: "zhuō", definition: "table, desk, stand", radicals: "木", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1881", frequencyRank: 1193 }
      ,{ traditional: "啦", simplified: "啦", pinyin: "la", definition: "final particle of assertion", radicals: "口", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2267", frequencyRank: 1194 }
      ,{ traditional: "瓦", simplified: "瓦", pinyin: "wǎ", definition: "tile; earthenware pottery; girl", radicals: "瓦", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0108", frequencyRank: 1195 }
      ,{ traditional: "莱", simplified: "莱", pinyin: "lái", definition: "goosefoot, weed; fallow field", radicals: "艸", strokeCount: 10, hskLevel: null, generalStandardNumber: "1822", frequencyRank: 1196 }
      ,{ traditional: "援", simplified: "援", pinyin: "yuán", definition: "aid, assist; lead; cite", radicals: "手", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2530", frequencyRank: 1197 }
      ,{ traditional: "译", simplified: "译", pinyin: "yì", definition: "translate; decode; encode", radicals: "言", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0898", frequencyRank: 1198 }
      ,{ traditional: "夺", simplified: "夺", pinyin: "duó", definition: "take by force, rob, snatch", radicals: "大", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0396", frequencyRank: 1199 }
      ,{ traditional: "汽", simplified: "汽", pinyin: "qì", definition: "steam, vapor, gas", radicals: "水", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0861", frequencyRank: 1200 }
      ,{ traditional: "烧", simplified: "烧", pinyin: "shāo", definition: "burn; bake; heat; roast", radicals: "火", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2060", frequencyRank: 1201 }
      ,{ traditional: "距", simplified: "距", pinyin: "jù", definition: "distance, interval, gap", radicals: "足", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2273", frequencyRank: 1202 }
      ,{ traditional: "裁", simplified: "裁", pinyin: "cái", definition: "cut out; decrease", radicals: "衣", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2532", frequencyRank: 1203 }
      ,{ traditional: "偏", simplified: "偏", pinyin: "piān", definition: "inclined one side; slanting", radicals: "人", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2334", frequencyRank: 1204 }
      ,{ traditional: "符", simplified: "符", pinyin: "fú", definition: "i.d. tag, tally, symbol, charm", radicals: "竹", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2321", frequencyRank: 1205 }
      ,{ traditional: "勇", simplified: "勇", pinyin: "yǒng", definition: "brave, courageous, fierce", radicals: "力", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1746", frequencyRank: 1206 }
      ,{ traditional: "触", simplified: "触", pinyin: "chù", definition: "butt, ram, gore; touch", radicals: "角", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2980", frequencyRank: 1207 }
      ,{ traditional: "课", simplified: "课", pinyin: "kè", definition: "lesson; course; classwork", radicals: "言", strokeCount: 10, hskLevel: 2, generalStandardNumber: "2120", frequencyRank: 1208 }
      ,{ traditional: "敬", simplified: "敬", pinyin: "jìng", definition: "respect, honor; respectfully", radicals: "攴", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2553", frequencyRank: 1209 }
      ,{ traditional: "哭", simplified: "哭", pinyin: "kū", definition: "weep, cry, wail", radicals: "口", strokeCount: 10, hskLevel: 3, generalStandardNumber: "1907", frequencyRank: 1210 }
      ,{ traditional: "懂", simplified: "懂", pinyin: "dǒng", definition: "understand, comprehend", radicals: "心", strokeCount: 15, hskLevel: 2, generalStandardNumber: "3300", frequencyRank: 1211 }
      ,{ traditional: "墙", simplified: "墙", pinyin: "qiáng", definition: "wall", radicals: "土", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3054", frequencyRank: 1212 }
      ,{ traditional: "袭", simplified: "袭", pinyin: "xí", definition: "raid, attack; inherit", radicals: "龍", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2246", frequencyRank: 1213 }
      ,{ traditional: "召", simplified: "召", pinyin: "zhào", definition: "imperial decree; summon", radicals: "口", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0334", frequencyRank: 1214 }
      ,{ traditional: "罚", simplified: "罚", pinyin: "fá", definition: "penalty, fine; punish, penalize", radicals: "网", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1519", frequencyRank: 1215 }
      ,{ traditional: "侠", simplified: "侠", pinyin: "xiá", definition: "chivalrous person; knight-errant", radicals: "人", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1141", frequencyRank: 1216 }
      ,{ traditional: "厅", simplified: "厅", pinyin: "tīng", definition: "hall, central room", radicals: "厂", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0090", frequencyRank: 1217 }
      ,{ traditional: "拜", simplified: "拜", pinyin: "bài", definition: "do obeisance, bow, kowtow", radicals: "手", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1538", frequencyRank: 1218 }
      ,{ traditional: "巧", simplified: "巧", pinyin: "qiǎo", definition: "skillful, ingenious, clever", radicals: "工", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0197", frequencyRank: 1219 }
      ,{ traditional: "侧", simplified: "侧", pinyin: "cè", definition: "side; incline, slant, lean", radicals: "人", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1147", frequencyRank: 1220 }
      ,{ traditional: "韩", simplified: "韩", pinyin: "hán", definition: "fence; surname; Korea", radicals: "韋", strokeCount: 12, hskLevel: null, generalStandardNumber: "2558", frequencyRank: 1221 }
      ,{ traditional: "冒", simplified: "冒", pinyin: "mào", definition: "risk, brave, dare", radicals: "冂", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1486", frequencyRank: 1222 }
      ,{ traditional: "债", simplified: "债", pinyin: "zhài", definition: "debt, loan, liabilities", radicals: "人", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1954", frequencyRank: 1223 }
      ,{ traditional: "曼", simplified: "曼", pinyin: "màn", definition: "long, extended, vast; beautiful", radicals: "日", strokeCount: 11, hskLevel: null, generalStandardNumber: "2268", frequencyRank: 1224 }
      ,{ traditional: "融", simplified: "融", pinyin: "róng", definition: "melt, fuse; blend, harmonize", radicals: "虫", strokeCount: 16, hskLevel: 6, generalStandardNumber: "3334", frequencyRank: 1225 }
      ,{ traditional: "惯", simplified: "惯", pinyin: "guàn", definition: "habit, custom; habitually, usual", radicals: "心", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2450", frequencyRank: 1226 }
      ,{ traditional: "享", simplified: "享", pinyin: "xiǎng", definition: "enjoy", radicals: "亠", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1206", frequencyRank: 1227 }
      ,{ traditional: "戴", simplified: "戴", pinyin: "dài", definition: "wear on top; support", radicals: "戈", strokeCount: 17, hskLevel: 4, generalStandardNumber: "3388", frequencyRank: 1228 }
      ,{ traditional: "童", simplified: "童", pinyin: "tóng", definition: "child, boy, servant boy; virgin", radicals: "立", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2735", frequencyRank: 1229 }
      ,{ traditional: "犹", simplified: "犹", pinyin: "yóu", definition: "like, similar to, just like, as", radicals: "犬", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0812", frequencyRank: 1230 }
      ,{ traditional: "乘", simplified: "乘", pinyin: "chéng", definition: "ride, ascend; avail oneself of; numerary adjunct for vehicles", radicals: "丿", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1941", frequencyRank: 1231 }
      ,{ traditional: "挂", simplified: "挂", pinyin: "guà", definition: "hang, suspend; suspense", radicals: "手", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1365", frequencyRank: 1232 }
      ,{ traditional: "奖", simplified: "奖", pinyin: "jiǎng", definition: "prize, reward; give award to", radicals: "大", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1618", frequencyRank: 1233 }
      ,{ traditional: "绍", simplified: "绍", pinyin: "shào", definition: "continue, carry on; join", radicals: "糸", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1348", frequencyRank: 1234 }
      ,{ traditional: "厚", simplified: "厚", pinyin: "hòu", definition: "thick; substantial; greatly", radicals: "厂", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1449", frequencyRank: 1235 }
      ,{ traditional: "纵", simplified: "纵", pinyin: "zòng", definition: "indulge in, give free reign to", radicals: "糸", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0936", frequencyRank: 1236 }
      ,{ traditional: "障", simplified: "障", pinyin: "zhàng", definition: "separate; shield; barricade", radicals: "阜", strokeCount: 13, hskLevel: 6, generalStandardNumber: "3038", frequencyRank: 1237 }
      ,{ traditional: "讯", simplified: "讯", pinyin: "xùn", definition: "inquire; ask; examine; reproach", radicals: "言", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0322", frequencyRank: 1238 }
      ,{ traditional: "涉", simplified: "涉", pinyin: "shè", definition: "ford stream, wade across", radicals: "水", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2070", frequencyRank: 1239 }
      ,{ traditional: "彻", simplified: "彻", pinyin: "chè", definition: "penetrate, pervade; penetrating", radicals: "彳", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0792", frequencyRank: 1240 }
      ,{ traditional: "刊", simplified: "刊", pinyin: "kān", definition: "publication, periodical; publish", radicals: "刀", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0191", frequencyRank: 1241 }
      ,{ traditional: "丈", simplified: "丈", pinyin: "zhàng", definition: "unit of length equal 3.3 meters; gentleman, man, husband", radicals: "一", strokeCount: 3, hskLevel: 2, generalStandardNumber: "0033", frequencyRank: 1242 }
      ,{ traditional: "爆", simplified: "爆", pinyin: "bào", definition: "crackle, pop, burst, explode", radicals: "火", strokeCount: 19, hskLevel: 6, generalStandardNumber: "3471", frequencyRank: 1243 }
      ,{ traditional: "乌", simplified: "乌", pinyin: "wū", definition: "crow, rook, raven; black, dark", radicals: "丿", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0157", frequencyRank: 1244 }
      ,{ traditional: "役", simplified: "役", pinyin: "yì", definition: "service; a servant, laborer; to serve", radicals: "彳", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0793", frequencyRank: 1245 }
      ,{ traditional: "描", simplified: "描", pinyin: "miáo", definition: "copy, trace, sketch; depict", radicals: "手", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2163", frequencyRank: 1246 }
      ,{ traditional: "洗", simplified: "洗", pinyin: "xǐ", definition: "wash, rinse; clean, purify", radicals: "水", strokeCount: 9, hskLevel: 2, generalStandardNumber: "1671", frequencyRank: 1247 }
      ,{ traditional: "玛", simplified: "玛", pinyin: "mǎ", definition: "agate; cornelian", radicals: "玉", strokeCount: 7, hskLevel: null, generalStandardNumber: "0603", frequencyRank: 1248 }
      ,{ traditional: "患", simplified: "患", pinyin: "huàn", definition: "suffer, worry about; suffering", radicals: "心", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2285", frequencyRank: 1249 }
      ,{ traditional: "妙", simplified: "妙", pinyin: "miào", definition: "mysterious, subtle; exquisite", radicals: "女", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0919", frequencyRank: 1250 }
      ,{ traditional: "镜", simplified: "镜", pinyin: "jìng", definition: "mirror; lens; glass; glasses", radicals: "金", strokeCount: 16, hskLevel: 4, generalStandardNumber: "3354", frequencyRank: 1251 }
      ,{ traditional: "唱", simplified: "唱", pinyin: "chàng", definition: "sing, chant, call; ditty, song", radicals: "口", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2284", frequencyRank: 1252 }
      ,{ traditional: "烦", simplified: "烦", pinyin: "fán", definition: "bother, vex, trouble; troublesome", radicals: "火", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2059", frequencyRank: 1253 }
      ,{ traditional: "签", simplified: "签", pinyin: "qiān", definition: "sign, endorse; slip of paper", radicals: "竹", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2953", frequencyRank: 1254 }
      ,{ traditional: "仙", simplified: "仙", pinyin: "xiān", definition: "Taoist super-being, transcendent, immortal", radicals: "人", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0272", frequencyRank: 1255 }
      ,{ traditional: "彼", simplified: "彼", pinyin: "bǐ", definition: "that, there, those", radicals: "彳", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1162", frequencyRank: 1256 }
      ,{ traditional: "弗", simplified: "弗", pinyin: "fú", definition: "not, negative", radicals: "弓", strokeCount: 5, hskLevel: null, generalStandardNumber: "0328", frequencyRank: 1257 }
      ,{ traditional: "症", simplified: "症", pinyin: "zhèng", definition: "disease, illness, ailment", radicals: "疒", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2026", frequencyRank: 1258 }
      ,{ traditional: "仿", simplified: "仿", pinyin: "fǎng", definition: "imitate, copy; as if", radicals: "人", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0474", frequencyRank: 1259 }
      ,{ traditional: "倾", simplified: "倾", pinyin: "qīng", definition: "upset, pour out, overflow", radicals: "人", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1959", frequencyRank: 1260 }
      ,{ traditional: "牌", simplified: "牌", pinyin: "pái", definition: "signboard, placard", radicals: "片", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2692", frequencyRank: 1261 }
      ,{ traditional: "陷", simplified: "陷", pinyin: "xiàn", definition: "submerge, sink, plunge; trap", radicals: "阜", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2138", frequencyRank: 1262 }
      ,{ traditional: "鸟", simplified: "鸟", pinyin: "niǎo", definition: "bird; KangXi radical 196", radicals: "鳥", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0296", frequencyRank: 1263 }
      ,{ traditional: "轰", simplified: "轰", pinyin: "hōng", definition: "rumble, explosion, blast", radicals: "車", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1057", frequencyRank: 1264 }
      ,{ traditional: "咱", simplified: "咱", pinyin: "zán", definition: "we, us", radicals: "口", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1508", frequencyRank: 1265 }
      ,{ traditional: "菜", simplified: "菜", pinyin: "cài", definition: "vegetables; dish, order; food", radicals: "艸", strokeCount: 11, hskLevel: 1, generalStandardNumber: "2207", frequencyRank: 1266 }
      ,{ traditional: "闭", simplified: "闭", pinyin: "bì", definition: "shut, close; obstruct, block up", radicals: "門", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0527", frequencyRank: 1267 }
      ,{ traditional: "奋", simplified: "奋", pinyin: "fèn", definition: "strive, exert effort; arouse", radicals: "大", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1051", frequencyRank: 1268 }
      ,{ traditional: "庆", simplified: "庆", pinyin: "qìng", definition: "congratulate, celebrate", radicals: "广", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0515", frequencyRank: 1269 }
      ,{ traditional: "撤", simplified: "撤", pinyin: "chè", definition: "omit; remove; withdraw", radicals: "手", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3203", frequencyRank: 1270 }
      ,{ traditional: "泪", simplified: "泪", pinyin: "lèi", definition: "tears; weep, cry", radicals: "水", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1246", frequencyRank: 1271 }
      ,{ traditional: "茶", simplified: "茶", pinyin: "chá", definition: "tea", radicals: "艸", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1411", frequencyRank: 1272 }
      ,{ traditional: "疾", simplified: "疾", pinyin: "jí", definition: "illness, disease, sickness; to hate", radicals: "疒", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2028", frequencyRank: 1273 }
      ,{ traditional: "缘", simplified: "缘", pinyin: "yuán", definition: "hem, margin; reason, cause; fate", radicals: "糸", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2824", frequencyRank: 1274 }
      ,{ traditional: "播", simplified: "播", pinyin: "bō", definition: "sow, spread; broadcast; cast away, reject", radicals: "手", strokeCount: 15, hskLevel: 4, generalStandardNumber: "3199", frequencyRank: 1275 }
      ,{ traditional: "朗", simplified: "朗", pinyin: "lǎng", definition: "clear, bright; distinct", radicals: "月", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2109", frequencyRank: 1276 }
      ,{ traditional: "杜", simplified: "杜", pinyin: "dù", definition: "stop, prevent; restrict; surname", radicals: "木", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0680", frequencyRank: 1277 }
      ,{ traditional: "奶", simplified: "奶", pinyin: "nǎi", definition: "milk, breast, to breastfeed", radicals: "女", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0332", frequencyRank: 1278 }
      ,{ traditional: "季", simplified: "季", pinyin: "jì", definition: "quarter of year; season; surname", radicals: "子", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1132", frequencyRank: 1279 }
      ,{ traditional: "丹", simplified: "丹", pinyin: "dān", definition: "cinnabar (native HgS); vermilion (artificial HgS used as pigment)", radicals: "丶", strokeCount: 4, hskLevel: null, generalStandardNumber: "0155", frequencyRank: 1280 }
      ,{ traditional: "狗", simplified: "狗", pinyin: "gǒu", definition: "dog, canis familiaris", radicals: "犬", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1198", frequencyRank: 1281 }
      ,{ traditional: "尾", simplified: "尾", pinyin: "wěi", definition: "tail, extremity; end, stern", radicals: "尸", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0905", frequencyRank: 1282 }
      ,{ traditional: "仪", simplified: "仪", pinyin: "yí", definition: "ceremony, rites gifts; admire", radicals: "人", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0274", frequencyRank: 1283 }
      ,{ traditional: "偷", simplified: "偷", pinyin: "tōu", definition: "to steal, burglar, thief", radicals: "人", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2330", frequencyRank: 1284 }
      ,{ traditional: "奔", simplified: "奔", pinyin: "bēn", definition: "run fast, flee; rush about; run", radicals: "大", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1049", frequencyRank: 1285 }
      ,{ traditional: "珠", simplified: "珠", pinyin: "zhū", definition: "precious stone, gem, jewel, pearl", radicals: "玉", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1773", frequencyRank: 1286 }
      ,{ traditional: "虫", simplified: "虫", pinyin: "chóng", definition: "insects, worms; KangXi radical 142", radicals: "虫", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0423", frequencyRank: 1287 }
      ,{ traditional: "驻", simplified: "驻", pinyin: "zhù", definition: "to be stationed at, reside at; to stop", radicals: "馬", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1345", frequencyRank: 1288 }
      ,{ traditional: "孔", simplified: "孔", pinyin: "kǒng", definition: "opening, hole, orifice; great", radicals: "子", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0179", frequencyRank: 1289 }
      ,{ traditional: "宜", simplified: "宜", pinyin: "yí", definition: "suitable, right, fitting, proper", radicals: "宀", strokeCount: 8, hskLevel: 2, generalStandardNumber: "1278", frequencyRank: 1290 }
      ,{ traditional: "艾", simplified: "艾", pinyin: "ài", definition: "artemisia, mugwort; translit.", radicals: "艸", strokeCount: 5, hskLevel: null, generalStandardNumber: "0207", frequencyRank: 1291 }
      ,{ traditional: "桥", simplified: "桥", pinyin: "qiáo", definition: "bridge; beam, crosspiece", radicals: "木", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1841", frequencyRank: 1292 }
      ,{ traditional: "淡", simplified: "淡", pinyin: "dàn", definition: "weak, watery; insipid, tasteless", radicals: "水", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2430", frequencyRank: 1293 }
      ,{ traditional: "翼", simplified: "翼", pinyin: "yì", definition: "wings; fins on fish; shelter", radicals: "羽", strokeCount: 17, hskLevel: 6, generalStandardNumber: "3435", frequencyRank: 1294 }
      ,{ traditional: "恨", simplified: "恨", pinyin: "hèn", definition: "hatred, dislike; resent, hate", radicals: "心", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1692", frequencyRank: 1295 }
      ,{ traditional: "繁", simplified: "繁", pinyin: "fán", definition: "complicated, complex, difficult", radicals: "糸", strokeCount: 17, hskLevel: 5, generalStandardNumber: "3419", frequencyRank: 1296 }
      ,{ traditional: "寒", simplified: "寒", pinyin: "hán", definition: "cold, wintry, chilly", radicals: "宀", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2780", frequencyRank: 1297 }
      ,{ traditional: "伴", simplified: "伴", pinyin: "bàn", definition: "companion, comrade, partner; accompany", radicals: "人", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0785", frequencyRank: 1298 }
      ,{ traditional: "叹", simplified: "叹", pinyin: "tàn", definition: "sigh, admire", radicals: "口", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0257", frequencyRank: 1299 }
      ,{ traditional: "旦", simplified: "旦", pinyin: "dàn", definition: "dawn; morning; day", radicals: "日", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0235", frequencyRank: 1300 }
      ,{ traditional: "愈", simplified: "愈", pinyin: "yù", definition: "more and more, even more", radicals: "心", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2966", frequencyRank: 1301 }
      ,{ traditional: "潮", simplified: "潮", pinyin: "cháo", definition: "tide; moist, wet, damp; flow", radicals: "水", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3292", frequencyRank: 1302 }
      ,{ traditional: "粮", simplified: "粮", pinyin: "liáng", definition: "food, grain, provisions", radicals: "米", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2998", frequencyRank: 1303 }
      ,{ traditional: "缩", simplified: "缩", pinyin: "suō", definition: "contract, draw in, reduce", radicals: "糸", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3188", frequencyRank: 1304 }
      ,{ traditional: "罢", simplified: "罢", pinyin: "bà", definition: "cease, finish, stop; give up", radicals: "网", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1918", frequencyRank: 1305 }
      ,{ traditional: "聚", simplified: "聚", pinyin: "jù", definition: "assemble, meet together, collect", radicals: "耳", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3065", frequencyRank: 1306 }
      ,{ traditional: "径", simplified: "径", pinyin: "jìng", definition: "narrow path; diameter; direct", radicals: "彳", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1163", frequencyRank: 1307 }
      ,{ traditional: "恰", simplified: "恰", pinyin: "qià", definition: "just, exactly, precisely; proper", radicals: "心", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1690", frequencyRank: 1308 }
      ,{ traditional: "挑", simplified: "挑", pinyin: "tiāo", definition: "a load carried on the shoulders; to carry", radicals: "手", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1387", frequencyRank: 1309 }
      ,{ traditional: "袋", simplified: "袋", pinyin: "dài", definition: "pocket, bag, sack, pouch", radicals: "衣", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2325", frequencyRank: 1310 }
      ,{ traditional: "灰", simplified: "灰", pinyin: "huī", definition: "ashes; dust; lime, mortar", radicals: "火", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0397", frequencyRank: 1311 }
      ,{ traditional: "捕", simplified: "捕", pinyin: "bǔ", definition: "arrest, catch, seize", radicals: "手", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1783", frequencyRank: 1312 }
      ,{ traditional: "徐", simplified: "徐", pinyin: "xú", definition: "slowly, quietly, calmly; composed, dignified", radicals: "彳", strokeCount: 10, hskLevel: null, generalStandardNumber: "1976", frequencyRank: 1313 }
      ,{ traditional: "珍", simplified: "珍", pinyin: "zhēn", definition: "precious, valuable, rare", radicals: "玉", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1358", frequencyRank: 1314 }
      ,{ traditional: "幕", simplified: "幕", pinyin: "mù", definition: "curtain, screen, tent", radicals: "巾", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2854", frequencyRank: 1315 }
      ,{ traditional: "映", simplified: "映", pinyin: "yìng", definition: "project; reflect light", radicals: "日", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1487", frequencyRank: 1316 }
      ,{ traditional: "裂", simplified: "裂", pinyin: "liè", definition: "split, crack, break open; rend", radicals: "衣", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2595", frequencyRank: 1317 }
      ,{ traditional: "泰", simplified: "泰", pinyin: "tài", definition: "great, exalted, superior; big", radicals: "水", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1771", frequencyRank: 1318 }
      ,{ traditional: "隔", simplified: "隔", pinyin: "gé", definition: "separate, partition", radicals: "阜", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2805", frequencyRank: 1319 }
      ,{ traditional: "启", simplified: "启", pinyin: "qǐ", definition: "open; begin, commence; explain", radicals: "口", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0886", frequencyRank: 1320 }
      ,{ traditional: "尖", simplified: "尖", pinyin: "jiān", definition: "sharp, pointed, acute, keen", radicals: "小", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0415", frequencyRank: 1321 }
      ,{ traditional: "忠", simplified: "忠", pinyin: "zhōng", definition: "loyalty, devotion, fidelity", radicals: "心", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1094", frequencyRank: 1322 }
      ,{ traditional: "累", simplified: "累", pinyin: "lèi", definition: "tired; implicate, involve; bother", radicals: "糸", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2282", frequencyRank: 1323 }
      ,{ traditional: "炎", simplified: "炎", pinyin: "yán", definition: "flame, blaze; hot", radicals: "火", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1237", frequencyRank: 1324 }
      ,{ traditional: "暂", simplified: "暂", pinyin: "zàn", definition: "temporary", radicals: "日", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2599", frequencyRank: 1325 }
      ,{ traditional: "估", simplified: "估", pinyin: "gū", definition: "merchant; estimate, guess, presume", radicals: "人", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0769", frequencyRank: 1326 }
      ,{ traditional: "泛", simplified: "泛", pinyin: "fàn", definition: "to drift, float; careless, reckless", radicals: "水", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0865", frequencyRank: 1327 }
      ,{ traditional: "荒", simplified: "荒", pinyin: "huāng", definition: "wasteland, desert; uncultivated", radicals: "艸", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1412", frequencyRank: 1328 }
      ,{ traditional: "偿", simplified: "偿", pinyin: "cháng", definition: "repay, recompense; restitution", radicals: "人", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2327", frequencyRank: 1329 }
      ,{ traditional: "横", simplified: "横", pinyin: "héng", definition: "across", radicals: "木", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3213", frequencyRank: 1330 }
      ,{ traditional: "拒", simplified: "拒", pinyin: "jù", definition: "ward off with hand, defend", radicals: "手", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0620", frequencyRank: 1331 }
      ,{ traditional: "瑞", simplified: "瑞", pinyin: "ruì", definition: "felicitous omen; auspicious", radicals: "玉", strokeCount: 13, hskLevel: null, generalStandardNumber: "2827", frequencyRank: 1332 }
      ,{ traditional: "忆", simplified: "忆", pinyin: "yì", definition: "remember, reflect upon; memory", radicals: "心", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0167", frequencyRank: 1333 }
      ,{ traditional: "孤", simplified: "孤", pinyin: "gū", definition: "orphan, fatherless; solitary", radicals: "子", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1319", frequencyRank: 1334 }
      ,{ traditional: "鼻", simplified: "鼻", pinyin: "bí", definition: "nose; first; KangXi radical 209", radicals: "鼻", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3128", frequencyRank: 1335 }
      ,{ traditional: "闹", simplified: "闹", pinyin: "nào", definition: "quarrel; dispute hotly", radicals: "門", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1228", frequencyRank: 1336 }
      ,{ traditional: "羊", simplified: "羊", pinyin: "yáng", definition: "sheep, goat; KangXi radical 123", radicals: "羊", strokeCount: 6, hskLevel: 2, generalStandardNumber: "0530", frequencyRank: 1337 }
      ,{ traditional: "呆", simplified: "呆", pinyin: "dāi", definition: "dull; dull-minded, simple, stupid", radicals: "口", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0722", frequencyRank: 1338 }
      ,{ traditional: "厉", simplified: "厉", pinyin: "lì", definition: "whetstone; grind, sharpen; whet", radicals: "厂", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0215", frequencyRank: 1339 }
      ,{ traditional: "衡", simplified: "衡", pinyin: "héng", definition: "measure, weigh, judge, consider", radicals: "行", strokeCount: 16, hskLevel: 5, generalStandardNumber: "3363", frequencyRank: 1340 }
      ,{ traditional: "胞", simplified: "胞", pinyin: "bāo", definition: "womb, placenta, fetal membrane", radicals: "肉", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1595", frequencyRank: 1341 }
      ,{ traditional: "零", simplified: "零", pinyin: "líng", definition: "zero; fragment, fraction", radicals: "雨", strokeCount: 13, hskLevel: 2, generalStandardNumber: "2885", frequencyRank: 1342 }
      ,{ traditional: "穷", simplified: "穷", pinyin: "qióng", definition: "poor, destitute, impoverished", radicals: "穴", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0882", frequencyRank: 1343 }
      ,{ traditional: "舍", simplified: "舍", pinyin: "shě", definition: "house, dwelling; dwell, reside", radicals: "舌", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1165", frequencyRank: 1344 }
      ,{ traditional: "码", simplified: "码", pinyin: "mǎ", definition: "number, numerals; yard; symbol", radicals: "石", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1046", frequencyRank: 1345 }
      ,{ traditional: "赫", simplified: "赫", pinyin: "hè", definition: "bright, radiant, glowing", radicals: "赤", strokeCount: 14, hskLevel: null, generalStandardNumber: "3058", frequencyRank: 1346 }
      ,{ traditional: "婆", simplified: "婆", pinyin: "pó", definition: "old woman; grandmother", radicals: "女", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2435", frequencyRank: 1347 }
      ,{ traditional: "魂", simplified: "魂", pinyin: "hún", definition: "soul, spirit", radicals: "鬼", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2830", frequencyRank: 1348 }
      ,{ traditional: "灾", simplified: "灾", pinyin: "zāi", definition: "calamity, disaster, catastrophe", radicals: "火", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0883", frequencyRank: 1349 }
      ,{ traditional: "洪", simplified: "洪", pinyin: "hóng", definition: "vast, immense; flood, deluge", radicals: "水", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1664", frequencyRank: 1350 }
      ,{ traditional: "腿", simplified: "腿", pinyin: "tuǐ", definition: "legs, thighs", radicals: "肉", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2976", frequencyRank: 1351 }
      ,{ traditional: "胆", simplified: "胆", pinyin: "dǎn", definition: "gall bladder; bravery, courage", radicals: "肉", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1593", frequencyRank: 1352 }
      ,{ traditional: "津", simplified: "津", pinyin: "jīn", definition: "ferry; saliva; ford", radicals: "水", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1683", frequencyRank: 1353 }
      ,{ traditional: "俗", simplified: "俗", pinyin: "sú", definition: "social customs; vulgar, unrefined", radicals: "人", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1568", frequencyRank: 1354 }
      ,{ traditional: "辩", simplified: "辩", pinyin: "biàn", definition: "dispute, argue, debate, discuss", radicals: "辛", strokeCount: 16, hskLevel: 5, generalStandardNumber: "3372", frequencyRank: 1355 }
      ,{ traditional: "胸", simplified: "胸", pinyin: "xiōng", definition: "breast, bosom, chest; thorax", radicals: "肉", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1996", frequencyRank: 1356 }
      ,{ traditional: "晓", simplified: "晓", pinyin: "xiǎo", definition: "dawn, daybreak; clear, explicit", radicals: "日", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1889", frequencyRank: 1357 }
      ,{ traditional: "劲", simplified: "劲", pinyin: "jìn", definition: "strong, unyielding, tough, power", radicals: "力", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0926", frequencyRank: 1358 }
      ,{ traditional: "贫", simplified: "贫", pinyin: "pín", definition: "poor, impoverished, needy", radicals: "貝", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1178", frequencyRank: 1359 }
      ,{ traditional: "仁", simplified: "仁", pinyin: "rén", definition: "humaneness, benevolence, kindness", radicals: "人", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0128", frequencyRank: 1360 }
      ,{ traditional: "偶", simplified: "偶", pinyin: "ǒu", definition: "accidentally, coincidently; an idol", radicals: "人", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2328", frequencyRank: 1361 }
      ,{ traditional: "辑", simplified: "辑", pinyin: "jí", definition: "gather up, collect; edit, compile", radicals: "車", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2889", frequencyRank: 1362 }
      ,{ traditional: "邦", simplified: "邦", pinyin: "bāng", definition: "nation, country, state", radicals: "邑", strokeCount: 6, hskLevel: null, generalStandardNumber: "0348", frequencyRank: 1363 }
      ,{ traditional: "恢", simplified: "恢", pinyin: "huī", definition: "restore; big, great, immense, vast", radicals: "心", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1686", frequencyRank: 1364 }
      ,{ traditional: "赖", simplified: "赖", pinyin: "lài", definition: "rely, depend on; accuse falsely", radicals: "貝", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2872", frequencyRank: 1365 }
      ,{ traditional: "圈", simplified: "圈", pinyin: "quān", definition: "to circle; a circle; corral", radicals: "囗", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2302", frequencyRank: 1366 }
      ,{ traditional: "摸", simplified: "摸", pinyin: "mō", definition: "gently touch with hand; caress", radicals: "手", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2833", frequencyRank: 1367 }
      ,{ traditional: "仰", simplified: "仰", pinyin: "yǎng", definition: "raise the head to look; look up to, rely on, admire", radicals: "人", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0473", frequencyRank: 1368 }
      ,{ traditional: "润", simplified: "润", pinyin: "rùn", definition: "soft, moist; sleek; freshen", radicals: "水", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2081", frequencyRank: 1369 }
      ,{ traditional: "堆", simplified: "堆", pinyin: "duī", definition: "heap, pile, crowd; pile up", radicals: "土", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2173", frequencyRank: 1370 }
      ,{ traditional: "碰", simplified: "碰", pinyin: "pèng", definition: "collide, bump into", radicals: "石", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2880", frequencyRank: 1371 }
      ,{ traditional: "艇", simplified: "艇", pinyin: "tǐng", definition: "small boat, dugout, punt", radicals: "舟", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2706", frequencyRank: 1372 }
      ,{ traditional: "稍", simplified: "稍", pinyin: "shāo", definition: "little, slightly; rather", radicals: "禾", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2676", frequencyRank: 1373 }
      ,{ traditional: "迟", simplified: "迟", pinyin: "chí", definition: "late, tardy; slow; delay", radicals: "辵", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0906", frequencyRank: 1374 }
      ,{ traditional: "辆", simplified: "辆", pinyin: "liàng", definition: "numerary adjunct for vehicles", radicals: "車", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2251", frequencyRank: 1375 }
      ,{ traditional: "废", simplified: "废", pinyin: "fèi", definition: "abrogate, terminate, discard", radicals: "广", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1220", frequencyRank: 1376 }
      ,{ traditional: "净", simplified: "净", pinyin: "jìng", definition: "clean, pure; cleanse", radicals: "冫", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1221", frequencyRank: 1377 }
      ,{ traditional: "凶", simplified: "凶", pinyin: "xiōng", definition: "culprit; murder; bad, sad", radicals: "凵", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0145", frequencyRank: 1378 }
      ,{ traditional: "署", simplified: "署", pinyin: "shǔ", definition: "public office", radicals: "网", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2930", frequencyRank: 1379 }
      ,{ traditional: "壁", simplified: "壁", pinyin: "bì", definition: "partition wall; walls of a house", radicals: "土", strokeCount: 16, hskLevel: 5, generalStandardNumber: "3384", frequencyRank: 1380 }
      ,{ traditional: "御", simplified: "御", pinyin: "yù", definition: "drive, ride; chariot; manage", radicals: "彳", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2704", frequencyRank: 1381 }
      ,{ traditional: "奉", simplified: "奉", pinyin: "fèng", definition: "offer; receive; serve; respect", radicals: "大", strokeCount: 8, hskLevel: 6, generalStandardNumber: "0943", frequencyRank: 1382 }
      ,{ traditional: "旋", simplified: "旋", pinyin: "xuán", definition: "revolve, move in orbit; return", radicals: "方", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2393", frequencyRank: 1383 }
      ,{ traditional: "冬", simplified: "冬", pinyin: "dōng", definition: "winter, 11th lunar month", radicals: "冫", strokeCount: 5, hskLevel: 3, generalStandardNumber: "0295", frequencyRank: 1384 }
      ,{ traditional: "矿", simplified: "矿", pinyin: "kuàng", definition: "mine; mineral, ore", radicals: "石", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1045", frequencyRank: 1385 }
      ,{ traditional: "抬", simplified: "抬", pinyin: "tái", definition: "lift, carry", radicals: "手", strokeCount: 8, hskLevel: 4, generalStandardNumber: "0993", frequencyRank: 1386 }
      ,{ traditional: "蛋", simplified: "蛋", pinyin: "dàn", definition: "eggs; term of abuse", radicals: "虫", strokeCount: 11, hskLevel: 2, generalStandardNumber: "2477", frequencyRank: 1387 }
      ,{ traditional: "晨", simplified: "晨", pinyin: "chén", definition: "early morning, daybreak", radicals: "日", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2260", frequencyRank: 1388 }
      ,{ traditional: "伏", simplified: "伏", pinyin: "fú", definition: "crouch, crawl, lie hidden, conceal", radicals: "人", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0460", frequencyRank: 1389 }
      ,{ traditional: "吹", simplified: "吹", pinyin: "chuī", definition: "blow; puff; brag, boast", radicals: "口", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0744", frequencyRank: 1390 }
      ,{ traditional: "鸡", simplified: "鸡", pinyin: "jī", definition: "chicken", radicals: "鳥", strokeCount: 7, hskLevel: 2, generalStandardNumber: "0928", frequencyRank: 1391 }
      ,{ traditional: "倍", simplified: "倍", pinyin: "bèi", definition: "times, fold, multiple times", radicals: "人", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1967", frequencyRank: 1392 }
      ,{ traditional: "糊", simplified: "糊", pinyin: "hú", definition: "paste, stick on with paste", radicals: "米", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3287", frequencyRank: 1393 }
      ,{ traditional: "秦", simplified: "秦", pinyin: "qín", definition: "(phonetic) / surname", radicals: "禾", strokeCount: 10, hskLevel: null, generalStandardNumber: "1772", frequencyRank: 1394 }
      ,{ traditional: "盾", simplified: "盾", pinyin: "dùn", definition: "shield, shield-shaped object; currency sign for Dutch guilder", radicals: "目", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1579", frequencyRank: 1395 }
      ,{ traditional: "杯", simplified: "杯", pinyin: "bēi", definition: "cup, glass", radicals: "木", strokeCount: 8, hskLevel: 1, generalStandardNumber: "1020", frequencyRank: 1396 }
      ,{ traditional: "租", simplified: "租", pinyin: "zū", definition: "rent, lease; rental; tax", radicals: "禾", strokeCount: 10, hskLevel: 1, generalStandardNumber: "1944", frequencyRank: 1397 }
      ,{ traditional: "骑", simplified: "骑", pinyin: "qí", definition: "ride horseback; mount; cavalry", radicals: "馬", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2489", frequencyRank: 1398 }
      ,{ traditional: "乏", simplified: "乏", pinyin: "fá", definition: "lack; poor", radicals: "丿", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0147", frequencyRank: 1399 }
      ,{ traditional: "隆", simplified: "隆", pinyin: "lóng", definition: "prosperous, plentiful, abundant", radicals: "阜", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2479", frequencyRank: 1400 }
      ,{ traditional: "诊", simplified: "诊", pinyin: "zhěn", definition: "examine patient, diagnose", radicals: "言", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0896", frequencyRank: 1401 }
      ,{ traditional: "奴", simplified: "奴", pinyin: "nú", definition: "slave, servant", radicals: "女", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0333", frequencyRank: 1402 }
      ,{ traditional: "摄", simplified: "摄", pinyin: "shè", definition: "take in, absorb; act as deputy", radicals: "手", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2832", frequencyRank: 1403 }
      ,{ traditional: "丧", simplified: "丧", pinyin: "sàng", definition: "mourning; mourn; funeral", radicals: "十", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1034", frequencyRank: 1404 }
      ,{ traditional: "污", simplified: "污", pinyin: "wū", definition: "filthy, dirty, impure, polluted", radicals: "水", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0537", frequencyRank: 1405 }
      ,{ traditional: "渡", simplified: "渡", pinyin: "dù", definition: "cross, ferry over; ferry", radicals: "水", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2765", frequencyRank: 1406 }
      ,{ traditional: "旗", simplified: "旗", pinyin: "qí", definition: "banner, flag, streamer", radicals: "方", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3152", frequencyRank: 1407 }
      ,{ traditional: "甘", simplified: "甘", pinyin: "gān", definition: "sweetness; sweet, tasty", radicals: "甘", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0205", frequencyRank: 1408 }
      ,{ traditional: "耐", simplified: "耐", pinyin: "nài", definition: "endure, bear; resist; patient", radicals: "而", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1456", frequencyRank: 1409 }
      ,{ traditional: "凭", simplified: "凭", pinyin: "píng", definition: "lean on, depend on, rely on", radicals: "几", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1148", frequencyRank: 1410 }
      ,{ traditional: "扎", simplified: "扎", pinyin: "zhā", definition: "pull up; pierce; struggle free", radicals: "手", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0085", frequencyRank: 1411 }
      ,{ traditional: "抢", simplified: "抢", pinyin: "qiǎng", definition: "plunder, rob, take by force", radicals: "手", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0637", frequencyRank: 1412 }
      ,{ traditional: "绪", simplified: "绪", pinyin: "xù", definition: "end of thread; thread, clue", radicals: "糸", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2487", frequencyRank: 1413 }
      ,{ traditional: "粗", simplified: "粗", pinyin: "cū", definition: "rough, thick, course; rude", radicals: "米", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2403", frequencyRank: 1414 }
      ,{ traditional: "肩", simplified: "肩", pinyin: "jiān", definition: "shoulders; to shoulder; bear", radicals: "肉", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1289", frequencyRank: 1415 }
      ,{ traditional: "梁", simplified: "梁", pinyin: "liáng", definition: "bridge; beam; rafters; surname", radicals: "木", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2436", frequencyRank: 1416 }
      ,{ traditional: "幻", simplified: "幻", pinyin: "huàn", definition: "illusion, fantasy, mirage", radicals: "幺", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0189", frequencyRank: 1417 }
      ,{ traditional: "菲", simplified: "菲", pinyin: "fēi", definition: "fragrant, luxuriant; the Philippines", radicals: "艸", strokeCount: 11, hskLevel: null, generalStandardNumber: "2202", frequencyRank: 1418 }
      ,{ traditional: "皆", simplified: "皆", pinyin: "jiē", definition: "all, every, everybody", radicals: "白", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1465", frequencyRank: 1419 }
      ,{ traditional: "碎", simplified: "碎", pinyin: "suì", definition: "break, smash; broken, busted", radicals: "石", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2879", frequencyRank: 1420 }
      ,{ traditional: "宙", simplified: "宙", pinyin: "zhòu", definition: "time as concept; infinite time", radicals: "宀", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1280", frequencyRank: 1421 }
      ,{ traditional: "叔", simplified: "叔", pinyin: "shū", definition: "uncle, sir", radicals: "又", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1065", frequencyRank: 1422 }
      ,{ traditional: "岩", simplified: "岩", pinyin: "yán", definition: "cliff; rocks; mountain", radicals: "山", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1106", frequencyRank: 1423 }
      ,{ traditional: "荡", simplified: "荡", pinyin: "dàng", definition: "pond, pool; wash away, cleanse", radicals: "艸", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1414", frequencyRank: 1424 }
      ,{ traditional: "综", simplified: "综", pinyin: "zōng", definition: "arrange threads for weaving", radicals: "糸", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2496", frequencyRank: 1425 }
      ,{ traditional: "爬", simplified: "爬", pinyin: "pá", definition: "crawl, creep; climb; scramble", radicals: "爪", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1161", frequencyRank: 1426 }
      ,{ traditional: "荷", simplified: "荷", pinyin: "hé", definition: "lotus, water lily, holland", radicals: "艸", strokeCount: 10, hskLevel: null, generalStandardNumber: "1826", frequencyRank: 1427 }
      ,{ traditional: "悉", simplified: "悉", pinyin: "xī", definition: "know, learn about, comprehend", radicals: "心", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2351", frequencyRank: 1428 }
      ,{ traditional: "蒂", simplified: "蒂", pinyin: "dì", definition: "peduncle or stem of plants", radicals: "艸", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2556", frequencyRank: 1429 }
      ,{ traditional: "返", simplified: "返", pinyin: "fǎn", definition: "return, revert to, restore", radicals: "辵", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0794", frequencyRank: 1430 }
      ,{ traditional: "井", simplified: "井", pinyin: "jǐng", definition: "well, mine shaft, pit", radicals: "二", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0077", frequencyRank: 1431 }
      ,{ traditional: "壮", simplified: "壮", pinyin: "zhuàng", definition: "big, large; robust; name of tribe", radicals: "士", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0510", frequencyRank: 1432 }
      ,{ traditional: "薄", simplified: "薄", pinyin: "báo", definition: "thin, slight, weak; poor, stingy", radicals: "艸", strokeCount: 16, hskLevel: 5, generalStandardNumber: "3326", frequencyRank: 1433 }
      ,{ traditional: "悄", simplified: "悄", pinyin: "qiāo", definition: "silent, quiet, still; anxious", radicals: "心", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2092", frequencyRank: 1434 }
      ,{ traditional: "扫", simplified: "扫", pinyin: "sǎo", definition: "sweep, clear away; exterminate", radicals: "手", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0365", frequencyRank: 1435 }
      ,{ traditional: "敏", simplified: "敏", pinyin: "mǐn", definition: "fast, quick, clever, smart", radicals: "攴", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2323", frequencyRank: 1436 }
      ,{ traditional: "碍", simplified: "碍", pinyin: "ài", definition: "obstruct, hinder, block, deter", radicals: "石", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2876", frequencyRank: 1437 }
      ,{ traditional: "殖", simplified: "殖", pinyin: "zhí", definition: "breed, spawn; increase; prosper", radicals: "歹", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2594", frequencyRank: 1438 }
      ,{ traditional: "详", simplified: "详", pinyin: "xiáng", definition: "detailed, complete, thorough", radicals: "言", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1301", frequencyRank: 1439 }
      ,{ traditional: "迪", simplified: "迪", pinyin: "dí", definition: "enlighten, advance; progress", radicals: "辵", strokeCount: 8, hskLevel: null, generalStandardNumber: "1091", frequencyRank: 1440 }
      ,{ traditional: "矛", simplified: "矛", pinyin: "máo", definition: "spear, lance; KangXi radical 110", radicals: "矛", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0343", frequencyRank: 1441 }
      ,{ traditional: "霍", simplified: "霍", pinyin: "huò", definition: "quickly, suddenly; surname", radicals: "雨", strokeCount: 16, hskLevel: 6, generalStandardNumber: "3337", frequencyRank: 1442 }
      ,{ traditional: "允", simplified: "允", pinyin: "yǔn", definition: "to grant, to allow, to consent", radicals: "儿", strokeCount: 4, hskLevel: 4, generalStandardNumber: "0183", frequencyRank: 1443 }
      ,{ traditional: "幅", simplified: "幅", pinyin: "fú", definition: "piece, strip, breadth of, hem", radicals: "巾", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2648", frequencyRank: 1444 }
      ,{ traditional: "撒", simplified: "撒", pinyin: "sā", definition: "release, cast away, let go; disperse; relax", radicals: "手", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3192", frequencyRank: 1445 }
      ,{ traditional: "剩", simplified: "剩", pinyin: "shèng", definition: "leftovers, residue, remains", radicals: "刀", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2675", frequencyRank: 1446 }
      ,{ traditional: "凯", simplified: "凯", pinyin: "kǎi", definition: "triumphant; triumph, victory", radicals: "几", strokeCount: 8, hskLevel: null, generalStandardNumber: "1112", frequencyRank: 1447 }
      ,{ traditional: "颗", simplified: "颗", pinyin: "kē", definition: "grain, kernel", radicals: "頁", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3100", frequencyRank: 1448 }
      ,{ traditional: "骂", simplified: "骂", pinyin: "mà", definition: "accuse, blame, curse, scold", radicals: "口", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1505", frequencyRank: 1449 }
      ,{ traditional: "赏", simplified: "赏", pinyin: "shǎng", definition: "reward, grant, bestow; appreciate", radicals: "貝", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2609", frequencyRank: 1450 }
      ,{ traditional: "液", simplified: "液", pinyin: "yè", definition: "sap, juice, liquid, fluid", radicals: "水", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2428", frequencyRank: 1451 }
      ,{ traditional: "番", simplified: "番", pinyin: "fān", definition: "to take turns; a turn, a time; to repeat", radicals: "田", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2709", frequencyRank: 1452 }
      ,{ traditional: "箱", simplified: "箱", pinyin: "xiāng", definition: "case, box, chest, trunk", radicals: "竹", strokeCount: 15, hskLevel: 3, generalStandardNumber: "3265", frequencyRank: 1453 }
      ,{ traditional: "贴", simplified: "贴", pinyin: "tiē", definition: "paste to, stick on; attached to", radicals: "貝", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1521", frequencyRank: 1454 }
      ,{ traditional: "漫", simplified: "漫", pinyin: "màn", definition: "overflow of water; spreading", radicals: "水", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3164", frequencyRank: 1455 }
      ,{ traditional: "酸", simplified: "酸", pinyin: "suān", definition: "tart, sour; acid; stiff; spoiled", radicals: "酉", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3089", frequencyRank: 1456 }
      ,{ traditional: "郎", simplified: "郎", pinyin: "láng", definition: "gentleman, young man; husband", radicals: "邑", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1287", frequencyRank: 1457 }
      ,{ traditional: "腰", simplified: "腰", pinyin: "yāo", definition: "waist; kidney", radicals: "肉", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2969", frequencyRank: 1458 }
      ,{ traditional: "舒", simplified: "舒", pinyin: "shū", definition: "open up, unfold, stretch out; comfortable, easy", radicals: "舌", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2707", frequencyRank: 1459 }
      ,{ traditional: "眉", simplified: "眉", pinyin: "méi", definition: "eyebrows; upper margin of book", radicals: "目", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1729", frequencyRank: 1460 }
      ,{ traditional: "忧", simplified: "忧", pinyin: "yōu", definition: "sad, grieved; grief, melancholy", radicals: "心", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0874", frequencyRank: 1461 }
      ,{ traditional: "浮", simplified: "浮", pinyin: "fú", definition: "to float, drift, waft; to exceed; superfluous", radicals: "水", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2077", frequencyRank: 1462 }
      ,{ traditional: "辛", simplified: "辛", pinyin: "xīn", definition: "bitter; toilsome, laborious; 8th heavenly stem", radicals: "辛", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0841", frequencyRank: 1463 }
      ,{ traditional: "恋", simplified: "恋", pinyin: "liàn", definition: "love; long for, yearn for; love", radicals: "心", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2016", frequencyRank: 1464 }
      ,{ traditional: "餐", simplified: "餐", pinyin: "cān", definition: "eat, dine; meal; food", radicals: "食", strokeCount: 16, hskLevel: 4, generalStandardNumber: "3341", frequencyRank: 1465 }
      ,{ traditional: "吓", simplified: "吓", pinyin: "xià", definition: "scare, frighten; intimidate", radicals: "口", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0422", frequencyRank: 1466 }
      ,{ traditional: "挺", simplified: "挺", pinyin: "tǐng", definition: "to stand upright, straighten; rigid", radicals: "手", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1382", frequencyRank: 1467 }
      ,{ traditional: "励", simplified: "励", pinyin: "lì", definition: "strive; encourage", radicals: "力", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0702", frequencyRank: 1468 }
      ,{ traditional: "辞", simplified: "辞", pinyin: "cí", definition: "words, speech, expression, phrase", radicals: "舌", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2947", frequencyRank: 1469 }
      ,{ traditional: "艘", simplified: "艘", pinyin: "sōu", definition: "counter for ships, vessels", radicals: "舟", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3273", frequencyRank: 1470 }
      ,{ traditional: "键", simplified: "键", pinyin: "jiàn", definition: "door bolt, lock bolt; key", radicals: "金", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2943", frequencyRank: 1471 }
      ,{ traditional: "伍", simplified: "伍", pinyin: "wǔ", definition: "five, company of five; troops", radicals: "人", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0459", frequencyRank: 1472 }
      ,{ traditional: "峰", simplified: "峰", pinyin: "fēng", definition: "peak, summit; hump of camel", radicals: "山", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1921", frequencyRank: 1473 }
      ,{ traditional: "尺", simplified: "尺", pinyin: "chǐ", definition: "ruler, measuring tape, scale", radicals: "尸", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0175", frequencyRank: 1474 }
      ,{ traditional: "昨", simplified: "昨", pinyin: "zuó", definition: "yesterday; in former times, past", radicals: "日", strokeCount: 9, hskLevel: 1, generalStandardNumber: "1489", frequencyRank: 1475 }
      ,{ traditional: "黎", simplified: "黎", pinyin: "lí", definition: "surname; numerous, many; black", radicals: "黍", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3262", frequencyRank: 1476 }
      ,{ traditional: "辈", simplified: "辈", pinyin: "bèi", definition: "generation, lifetime; class", radicals: "非", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2602", frequencyRank: 1477 }
      ,{ traditional: "贯", simplified: "贯", pinyin: "guàn", definition: "a string of 1000 coins; to go through", radicals: "貝", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1351", frequencyRank: 1478 }
      ,{ traditional: "侦", simplified: "侦", pinyin: "zhēn", definition: "spy, reconnoiter; detective", radicals: "人", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1145", frequencyRank: 1479 }
      ,{ traditional: "滑", simplified: "滑", pinyin: "huá", definition: "slip, slide; slippery, polished", radicals: "水", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2761", frequencyRank: 1480 }
      ,{ traditional: "券", simplified: "券", pinyin: "quàn", definition: "certificate, ticket; title deeds", radicals: "刀", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1230", frequencyRank: 1481 }
      ,{ traditional: "崇", simplified: "崇", pinyin: "chóng", definition: "esteem, honor, revere, venerate", radicals: "山", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2299", frequencyRank: 1482 }
      ,{ traditional: "扰", simplified: "扰", pinyin: "rǎo", definition: "disturb, annoy, agitate", radicals: "手", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0618", frequencyRank: 1483 }
      ,{ traditional: "宪", simplified: "宪", pinyin: "xiàn", definition: "constitution, statute, law", radicals: "宀", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1699", frequencyRank: 1484 }
      ,{ traditional: "绕", simplified: "绕", pinyin: "rào", definition: "entwine; wind around; surround", radicals: "糸", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1755", frequencyRank: 1485 }
      ,{ traditional: "趋", simplified: "趋", pinyin: "qū", definition: "hasten, hurry; be attracted to", radicals: "走", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2516", frequencyRank: 1486 }
      ,{ traditional: "慈", simplified: "慈", pinyin: "cí", definition: "kind, charitable, benevolent", radicals: "心", strokeCount: 13, hskLevel: 6, generalStandardNumber: "3002", frequencyRank: 1487 }
      ,{ traditional: "乔", simplified: "乔", pinyin: "qiáo", definition: "tall, lofty; proud, stately", radicals: "大", strokeCount: 6, hskLevel: null, generalStandardNumber: "0452", frequencyRank: 1488 }
      ,{ traditional: "阅", simplified: "阅", pinyin: "yuè", definition: "examine, inspect, review, read", radicals: "門", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2048", frequencyRank: 1489 }
      ,{ traditional: "汗", simplified: "汗", pinyin: "hàn", definition: "perspiration, sweat", radicals: "水", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0536", frequencyRank: 1490 }
      ,{ traditional: "枝", simplified: "枝", pinyin: "zhī", definition: "branches, limbs; branch off", radicals: "木", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1019", frequencyRank: 1491 }
      ,{ traditional: "拖", simplified: "拖", pinyin: "tuō", definition: "drag, tow, haul; delay, prolong", radicals: "手", strokeCount: 8, hskLevel: 6, generalStandardNumber: "0968", frequencyRank: 1492 }
      ,{ traditional: "墨", simplified: "墨", pinyin: "mò", definition: "ink; writing", radicals: "土", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3255", frequencyRank: 1493 }
      ,{ traditional: "胁", simplified: "胁", pinyin: "xié", definition: "ribs, armpits; flank; threaten", radicals: "肉", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1191", frequencyRank: 1494 }
      ,{ traditional: "插", simplified: "插", pinyin: "chā", definition: "insert, stick into; plant", radicals: "手", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2526", frequencyRank: 1495 }
      ,{ traditional: "箭", simplified: "箭", pinyin: "jiàn", definition: "arrow; type of bamboo", radicals: "竹", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3267", frequencyRank: 1496 }
      ,{ traditional: "腊", simplified: "腊", pinyin: "là", definition: "year end sacrifice; dried meat", radicals: "肉", strokeCount: 12, hskLevel: null, generalStandardNumber: "2712", frequencyRank: 1497 }
      ,{ traditional: "粉", simplified: "粉", pinyin: "fěn", definition: "powder, face powder; plaster", radicals: "米", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2053", frequencyRank: 1498 }
      ,{ traditional: "泥", simplified: "泥", pinyin: "ní", definition: "mud, mire; earth, clay; plaster", radicals: "水", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1258", frequencyRank: 1499 }
      ,{ traditional: "氏", simplified: "氏", pinyin: "shì", definition: "clan, family; mister", radicals: "氏", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0151", frequencyRank: 1500 }
      ,{ traditional: "彭", simplified: "彭", pinyin: "péng", definition: "name of ancient country; surname", radicals: "彡", strokeCount: 12, hskLevel: null, generalStandardNumber: "2524", frequencyRank: 1501 }
      ,{ traditional: "拔", simplified: "拔", pinyin: "bá", definition: "uproot, pull out", radicals: "手", strokeCount: 8, hskLevel: 6, generalStandardNumber: "0959", frequencyRank: 1502 }
      ,{ traditional: "骗", simplified: "骗", pinyin: "piàn", definition: "swindle, cheat out of, defraud", radicals: "馬", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2821", frequencyRank: 1503 }
      ,{ traditional: "凤", simplified: "凤", pinyin: "fèng", definition: "male phoenix; symbol of joy", radicals: "几", strokeCount: 4, hskLevel: null, generalStandardNumber: "0159", frequencyRank: 1504 }
      ,{ traditional: "慧", simplified: "慧", pinyin: "huì", definition: "bright, intelligent; intelligence", radicals: "心", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3189", frequencyRank: 1505 }
      ,{ traditional: "媒", simplified: "媒", pinyin: "méi", definition: "go-between, matchmaker; medium", radicals: "女", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2808", frequencyRank: 1506 }
      ,{ traditional: "佩", simplified: "佩", pinyin: "pèi", definition: "belt ornament, pendant; wear at waist, tie to the belt; respect", radicals: "人", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1150", frequencyRank: 1507 }
      ,{ traditional: "愤", simplified: "愤", pinyin: "fèn", definition: "resent, hate; indignant", radicals: "心", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2770", frequencyRank: 1508 }
      ,{ traditional: "扑", simplified: "扑", pinyin: "pū", definition: "pound, beat, strike; attack", radicals: "手", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0199", frequencyRank: 1509 }
      ,{ traditional: "龄", simplified: "龄", pinyin: "líng", definition: "age; years", radicals: "齒", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2893", frequencyRank: 1510 }
      ,{ traditional: "驱", simplified: "驱", pinyin: "qū", definition: "spur a horse on; expel, drive away", radicals: "馬", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0930", frequencyRank: 1511 }
      ,{ traditional: "惜", simplified: "惜", pinyin: "xī", definition: "pity, regret, rue, begrudge", radicals: "心", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2439", frequencyRank: 1512 }
      ,{ traditional: "豪", simplified: "豪", pinyin: "háo", definition: "brave, heroic, chivalrous", radicals: "豕", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3141", frequencyRank: 1513 }
      ,{ traditional: "掩", simplified: "掩", pinyin: "yǎn", definition: "to cover (with the hand); shut, conceal; ambush", radicals: "手", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2166", frequencyRank: 1514 }
      ,{ traditional: "兼", simplified: "兼", pinyin: "jiān", definition: "unite, combine; connect; and", radicals: "八", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2056", frequencyRank: 1515 }
      ,{ traditional: "跃", simplified: "跃", pinyin: "yuè", definition: "skip, jump, frolic", radicals: "足", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2276", frequencyRank: 1516 }
      ,{ traditional: "尸", simplified: "尸", pinyin: "shī", definition: "corpse; to impersonate the dead; to preside; KangXi radical 44", radicals: "尸", strokeCount: 3, hskLevel: 6, generalStandardNumber: "0059", frequencyRank: 1517 }
      ,{ traditional: "肃", simplified: "肃", pinyin: "sù", definition: "pay respects; reverently", radicals: "聿", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1303", frequencyRank: 1518 }
      ,{ traditional: "帕", simplified: "帕", pinyin: "pà", definition: "turban, kerchief, veil; wrap", radicals: "巾", strokeCount: 8, hskLevel: null, generalStandardNumber: "1110", frequencyRank: 1519 }
      ,{ traditional: "驶", simplified: "驶", pinyin: "shǐ", definition: "sail, drive, pilot; fast, quick", radicals: "馬", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1341", frequencyRank: 1520 }
      ,{ traditional: "堡", simplified: "堡", pinyin: "bǎo", definition: "fort, fortress; town, village", radicals: "土", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2693", frequencyRank: 1521 }
      ,{ traditional: "届", simplified: "届", pinyin: "jiè", definition: "numerary adjunct for time, term", radicals: "尸", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1309", frequencyRank: 1522 }
      ,{ traditional: "欣", simplified: "欣", pinyin: "xīn", definition: "happy, joyous, delighted", radicals: "欠", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1158", frequencyRank: 1523 }
      ,{ traditional: "惠", simplified: "惠", pinyin: "huì", definition: "favor, benefit, confer kindness", radicals: "心", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2580", frequencyRank: 1524 }
      ,{ traditional: "册", simplified: "册", pinyin: "cè", definition: "book, volume, register, list", radicals: "冂", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0290", frequencyRank: 1525 }
      ,{ traditional: "储", simplified: "储", pinyin: "chǔ", definition: "save money, store, reserve; heir", radicals: "人", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2697", frequencyRank: 1526 }
      ,{ traditional: "飘", simplified: "飘", pinyin: "piāo", definition: "whirlwind, cyclone; floating", radicals: "風", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3221", frequencyRank: 1527 }
      ,{ traditional: "桑", simplified: "桑", pinyin: "sāng", definition: "mulberry tree; surname", radicals: "木", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2149", frequencyRank: 1528 }
      ,{ traditional: "闲", simplified: "闲", pinyin: "xián", definition: "fence, guard; defend; idle time", radicals: "門", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0846", frequencyRank: 1529 }
      ,{ traditional: "惨", simplified: "惨", pinyin: "cǎn", definition: "sad, pitiful, wretched; cruel", radicals: "心", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2449", frequencyRank: 1530 }
      ,{ traditional: "洁", simplified: "洁", pinyin: "jié", definition: "clean, purify, pure", radicals: "水", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1663", frequencyRank: 1531 }
      ,{ traditional: "踪", simplified: "踪", pinyin: "zōng", definition: "footprints, traces, tracks", radicals: "足", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3244", frequencyRank: 1532 }
      ,{ traditional: "勃", simplified: "勃", pinyin: "bó", definition: "suddenly, sudden, quick", radicals: "力", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1440", frequencyRank: 1533 }
      ,{ traditional: "宾", simplified: "宾", pinyin: "bīn", definition: "guest, visitor; surname; submit", radicals: "宀", strokeCount: 10, hskLevel: 2, generalStandardNumber: "2102", frequencyRank: 1534 }
      ,{ traditional: "频", simplified: "频", pinyin: "pín", definition: "frequently, again and again", radicals: "頁", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2892", frequencyRank: 1535 }
      ,{ traditional: "仇", simplified: "仇", pinyin: "chóu", definition: "enemy, hate, hatred, enmity", radicals: "人", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0133", frequencyRank: 1536 }
      ,{ traditional: "磨", simplified: "磨", pinyin: "mó", definition: "grind; polish; rub; wear out; a millstone", radicals: "石", strokeCount: 16, hskLevel: 6, generalStandardNumber: "3367", frequencyRank: 1537 }
      ,{ traditional: "递", simplified: "递", pinyin: "dì", definition: "hand over, deliver; substitute", radicals: "辵", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2064", frequencyRank: 1538 }
      ,{ traditional: "邪", simplified: "邪", pinyin: "xié", definition: "wrong, evil, depraved, vicious, perverse, heterodox", radicals: "邑", strokeCount: 6, hskLevel: null, generalStandardNumber: "0405", frequencyRank: 1539 }
      ,{ traditional: "撞", simplified: "撞", pinyin: "zhuàng", definition: "knock against, bump into, collide", radicals: "手", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3202", frequencyRank: 1540 }
      ,{ traditional: "拟", simplified: "拟", pinyin: "nǐ", definition: "draft; intend, plan, propose", radicals: "手", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0657", frequencyRank: 1541 }
      ,{ traditional: "滚", simplified: "滚", pinyin: "gǔn", definition: "turn", radicals: "水", strokeCount: 13, hskLevel: 5, generalStandardNumber: "3015", frequencyRank: 1542 }
      ,{ traditional: "奏", simplified: "奏", pinyin: "zòu", definition: "memorialize emperor; report", radicals: "大", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1354", frequencyRank: 1543 }
      ,{ traditional: "巡", simplified: "巡", pinyin: "xún", definition: "patrol, go on circuit, cruise", radicals: "巛", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0598", frequencyRank: 1544 }
      ,{ traditional: "颜", simplified: "颜", pinyin: "yán", definition: "face, facial appearance", radicals: "頁", strokeCount: 15, hskLevel: 2, generalStandardNumber: "3285", frequencyRank: 1545 }
      ,{ traditional: "剂", simplified: "剂", pinyin: "jì", definition: "medicinal preparation", radicals: "刀", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1216", frequencyRank: 1546 }
      ,{ traditional: "绩", simplified: "绩", pinyin: "jī", definition: "spin; achievements", radicals: "糸", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2486", frequencyRank: 1547 }
      ,{ traditional: "贡", simplified: "贡", pinyin: "gòng", definition: "offer tribute; tribute, gifts", radicals: "貝", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0627", frequencyRank: 1548 }
      ,{ traditional: "疯", simplified: "疯", pinyin: "fēng", definition: "crazy, insane, mentally ill", radicals: "疒", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1626", frequencyRank: 1549 }
      ,{ traditional: "坡", simplified: "坡", pinyin: "pō", definition: "slope, bank, hillside", radicals: "土", strokeCount: 8, hskLevel: 6, generalStandardNumber: "0989", frequencyRank: 1550 }
      ,{ traditional: "瞧", simplified: "瞧", pinyin: "qiáo", definition: "glance at, look at, see", radicals: "目", strokeCount: 17, hskLevel: 5, generalStandardNumber: "3402", frequencyRank: 1551 }
      ,{ traditional: "截", simplified: "截", pinyin: "jié", definition: "cut off, stop, obstruct, intersect", radicals: "戈", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3059", frequencyRank: 1552 }
      ,{ traditional: "燃", simplified: "燃", pinyin: "rán", definition: "burn; light fire, ignite", radicals: "火", strokeCount: 16, hskLevel: 5, generalStandardNumber: "3376", frequencyRank: 1553 }
      ,{ traditional: "焦", simplified: "焦", pinyin: "jiāo", definition: "burned, scorched; anxious, vexed", radicals: "火", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2695", frequencyRank: 1554 }
      ,{ traditional: "殿", simplified: "殿", pinyin: "diàn", definition: "hall; palace; temple", radicals: "殳", strokeCount: 13, hskLevel: 6, generalStandardNumber: "3036", frequencyRank: 1555 }
      ,{ traditional: "伪", simplified: "伪", pinyin: "wěi", definition: "false, counterfeit, bogus", radicals: "人", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0476", frequencyRank: 1556 }
      ,{ traditional: "柳", simplified: "柳", pinyin: "liǔ", definition: "willow tree; pleasure", radicals: "木", strokeCount: 9, hskLevel: null, generalStandardNumber: "1434", frequencyRank: 1557 }
      ,{ traditional: "锁", simplified: "锁", pinyin: "suǒ", definition: "lock, padlock; shackles, chains", radicals: "金", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2660", frequencyRank: 1558 }
      ,{ traditional: "逼", simplified: "逼", pinyin: "bī", definition: "compel, pressure, force; bother", radicals: "辵", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2582", frequencyRank: 1559 }
      ,{ traditional: "颇", simplified: "颇", pinyin: "pō", definition: "lean one side; very, rather", radicals: "頁", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2484", frequencyRank: 1560 }
      ,{ traditional: "昏", simplified: "昏", pinyin: "hūn", definition: "dusk, nightfall, twilight, dark", radicals: "日", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1193", frequencyRank: 1561 }
      ,{ traditional: "劝", simplified: "劝", pinyin: "quàn", definition: "recommend, advise, urge", radicals: "力", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0186", frequencyRank: 1562 }
      ,{ traditional: "呈", simplified: "呈", pinyin: "chéng", definition: "submit, show; appear; petition", radicals: "口", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0716", frequencyRank: 1563 }
      ,{ traditional: "搜", simplified: "搜", pinyin: "sōu", definition: "search, seek; investigate", radicals: "手", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2528", frequencyRank: 1564 }
      ,{ traditional: "勤", simplified: "勤", pinyin: "qín", definition: "industrious, diligent, attentive", radicals: "力", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2848", frequencyRank: 1565 }
      ,{ traditional: "戒", simplified: "戒", pinyin: "jiè", definition: "warn, caution, admonish", radicals: "戈", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0606", frequencyRank: 1566 }
      ,{ traditional: "驾", simplified: "驾", pinyin: "jià", definition: "to drive, sail, fly; a cart, carriage", radicals: "馬", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1332", frequencyRank: 1567 }
      ,{ traditional: "漂", simplified: "漂", pinyin: "piào", definition: "float, drift; tossed about", radicals: "水", strokeCount: 14, hskLevel: 1, generalStandardNumber: "3163", frequencyRank: 1568 }
      ,{ traditional: "饮", simplified: "饮", pinyin: "yǐn", definition: "drink; swallow; kind of drink", radicals: "食", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0824", frequencyRank: 1569 }
      ,{ traditional: "曹", simplified: "曹", pinyin: "cáo", definition: "ministry officials; surname", radicals: "曰", strokeCount: 11, hskLevel: null, generalStandardNumber: "2233", frequencyRank: 1570 }
      ,{ traditional: "朵", simplified: "朵", pinyin: "duǒ", definition: "cluster of flowers; earlobe", radicals: "木", strokeCount: 6, hskLevel: 3, generalStandardNumber: "0497", frequencyRank: 1571 }
      ,{ traditional: "仔", simplified: "仔", pinyin: "zǐ", definition: "small thing, child; young animal", radicals: "人", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0276", frequencyRank: 1572 }
      ,{ traditional: "柔", simplified: "柔", pinyin: "róu", definition: "soft; gentle, pliant", radicals: "木", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1750", frequencyRank: 1573 }
      ,{ traditional: "俩", simplified: "俩", pinyin: "liǎ", definition: "two, pair", radicals: "人", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1557", frequencyRank: 1574 }
      ,{ traditional: "孟", simplified: "孟", pinyin: "mèng", definition: "first in series; great, eminent", radicals: "子", strokeCount: 8, hskLevel: null, generalStandardNumber: "1316", frequencyRank: 1575 }
      ,{ traditional: "腐", simplified: "腐", pinyin: "fǔ", definition: "rot, decay, spoil; rotten", radicals: "肉", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3144", frequencyRank: 1576 }
      ,{ traditional: "幼", simplified: "幼", pinyin: "yòu", definition: "infant, young child; immature", radicals: "幺", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0346", frequencyRank: 1577 }
      ,{ traditional: "践", simplified: "践", pinyin: "jiàn", definition: "trample, tread upon, walk on", radicals: "足", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2628", frequencyRank: 1578 }
      ,{ traditional: "籍", simplified: "籍", pinyin: "jí", definition: "record, register, list; census", radicals: "竹", strokeCount: 20, hskLevel: 4, generalStandardNumber: "3482", frequencyRank: 1579 }
      ,{ traditional: "牧", simplified: "牧", pinyin: "mù", definition: "tend cattle, shepherd", radicals: "牛", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1126", frequencyRank: 1580 }
      ,{ traditional: "凉", simplified: "凉", pinyin: "liáng", definition: "cool, cold; disheartened", radicals: "冫", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2040", frequencyRank: 1581 }
      ,{ traditional: "牲", simplified: "牲", pinyin: "shēng", definition: "sacrificial animal; animal", radicals: "牛", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1544", frequencyRank: 1582 }
      ,{ traditional: "佳", simplified: "佳", pinyin: "jiā", definition: "good, auspicious; beautiful; delightful", radicals: "人", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1135", frequencyRank: 1583 }
      ,{ traditional: "娜", simplified: "娜", pinyin: "nà", definition: "elegant, graceful, delicate", radicals: "女", strokeCount: 9, hskLevel: null, generalStandardNumber: "1741", frequencyRank: 1584 }
      ,{ traditional: "浓", simplified: "浓", pinyin: "nóng", definition: "thick, strong, concentrated", radicals: "水", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1682", frequencyRank: 1585 }
      ,{ traditional: "芳", simplified: "芳", pinyin: "fāng", definition: "fragrant; virtuous; beautiful", radicals: "艸", strokeCount: 7, hskLevel: null, generalStandardNumber: "0670", frequencyRank: 1586 }
      ,{ traditional: "稿", simplified: "稿", pinyin: "gǎo", definition: "draft, manuscript, rough copy", radicals: "禾", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3263", frequencyRank: 1587 }
      ,{ traditional: "竹", simplified: "竹", pinyin: "zhú", definition: "bamboo; flute; KangXi radical 118", radicals: "竹", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0450", frequencyRank: 1588 }
      ,{ traditional: "腹", simplified: "腹", pinyin: "fù", definition: "stomach, belly, abdomen; inside", radicals: "肉", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2972", frequencyRank: 1589 }
      ,{ traditional: "跌", simplified: "跌", pinyin: "diē", definition: "stumble, slip, fall down; stamp", radicals: "足", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2630", frequencyRank: 1590 }
      ,{ traditional: "逻", simplified: "逻", pinyin: "luó", definition: "patrol; inspect; watch; patrol", radicals: "辵", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2295", frequencyRank: 1591 }
      ,{ traditional: "垂", simplified: "垂", pinyin: "chuí", definition: "let down; suspend, hand; down", radicals: "土", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1125", frequencyRank: 1592 }
      ,{ traditional: "遵", simplified: "遵", pinyin: "zūn", definition: "obey, comply with, follow; honor", radicals: "辵", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3288", frequencyRank: 1593 }
      ,{ traditional: "脉", simplified: "脉", pinyin: "mài", definition: "blood vessels, veins, arteries", radicals: "肉", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1597", frequencyRank: 1594 }
      ,{ traditional: "貌", simplified: "貌", pinyin: "mào", definition: "countenance, appearance", radicals: "豸", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3131", frequencyRank: 1595 }
      ,{ traditional: "柏", simplified: "柏", pinyin: "bǎi", definition: "cypress, cedar", radicals: "木", strokeCount: 9, hskLevel: null, generalStandardNumber: "1432", frequencyRank: 1596 }
      ,{ traditional: "狱", simplified: "狱", pinyin: "yù", definition: "prison, jail; case; lawsuit", radicals: "犬", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1605", frequencyRank: 1597 }
      ,{ traditional: "猜", simplified: "猜", pinyin: "cāi", definition: "guess, conjecture, suppose; feel", radicals: "犬", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2364", frequencyRank: 1598 }
      ,{ traditional: "怜", simplified: "怜", pinyin: "lián", definition: "pity, sympathize", radicals: "心", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1270", frequencyRank: 1599 }
      ,{ traditional: "惑", simplified: "惑", pinyin: "huò", definition: "confuse, mislead, baffle; doubt", radicals: "心", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2581", frequencyRank: 1600 }
      ,{ traditional: "陶", simplified: "陶", pinyin: "táo", definition: "pottery, ceramics", radicals: "阜", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2137", frequencyRank: 1601 }
      ,{ traditional: "兽", simplified: "兽", pinyin: "shòu", definition: "beast, animal; bestial", radicals: "八", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2407", frequencyRank: 1602 }
      ,{ traditional: "帐", simplified: "帐", pinyin: "zhàng", definition: "tent; screen, mosquito net", radicals: "巾", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0755", frequencyRank: 1603 }
      ,{ traditional: "饰", simplified: "饰", pinyin: "shì", definition: "decorate, ornament, adorn", radicals: "食", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1201", frequencyRank: 1604 }
      ,{ traditional: "贷", simplified: "贷", pinyin: "dài", definition: "lend; borrow; pardon", radicals: "貝", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1558", frequencyRank: 1605 }
      ,{ traditional: "昌", simplified: "昌", pinyin: "chāng", definition: "light of sun; good, proper", radicals: "日", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1084", frequencyRank: 1606 }
      ,{ traditional: "叙", simplified: "叙", pinyin: "xù", definition: "express, state, relate, narrate", radicals: "又", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1586", frequencyRank: 1607 }
      ,{ traditional: "躺", simplified: "躺", pinyin: "tǎng", definition: "lie down, recline", radicals: "身", strokeCount: 15, hskLevel: 4, generalStandardNumber: "3270", frequencyRank: 1608 }
      ,{ traditional: "钢", simplified: "钢", pinyin: "gāng", definition: "steel; hard, strong, tough", radicals: "金", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1529", frequencyRank: 1609 }
      ,{ traditional: "沟", simplified: "沟", pinyin: "gōu", definition: "ditch, drain, narrow waterway", radicals: "水", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0868", frequencyRank: 1610 }
      ,{ traditional: "寄", simplified: "寄", pinyin: "jì", definition: "send, transmit, mail; rely on", radicals: "宀", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2453", frequencyRank: 1611 }
      ,{ traditional: "扶", simplified: "扶", pinyin: "fú", definition: "support, help; protect; hold on", radicals: "手", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0612", frequencyRank: 1612 }
      ,{ traditional: "铺", simplified: "铺", pinyin: "pù", definition: "shop, store; place sleep, bed", radicals: "金", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2657", frequencyRank: 1613 }
      ,{ traditional: "邓", simplified: "邓", pinyin: "dèng", definition: "surname", radicals: "邑", strokeCount: 4, hskLevel: null, generalStandardNumber: "0185", frequencyRank: 1614 }
      ,{ traditional: "寿", simplified: "寿", pinyin: "shòu", definition: "old age, long life; lifespan", radicals: "寸", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0599", frequencyRank: 1615 }
      ,{ traditional: "惧", simplified: "惧", pinyin: "jù", definition: "fear, be afraid of, dread", radicals: "心", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2442", frequencyRank: 1616 }
      ,{ traditional: "询", simplified: "询", pinyin: "xún", definition: "inquire into, ask about; consult", radicals: "言", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1299", frequencyRank: 1617 }
      ,{ traditional: "汤", simplified: "汤", pinyin: "tāng", definition: "hot water; soup, gravy, broth", radicals: "水", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0542", frequencyRank: 1618 }
      ,{ traditional: "盗", simplified: "盗", pinyin: "dào", definition: "rob, steal; thief, bandit", radicals: "皿", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2388", frequencyRank: 1619 }
      ,{ traditional: "肥", simplified: "肥", pinyin: "féi", definition: "fat, plump, obese; fertile", radicals: "肉", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1189", frequencyRank: 1620 }
      ,{ traditional: "尝", simplified: "尝", pinyin: "cháng", definition: "taste; experience, experiment", radicals: "小", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1476", frequencyRank: 1621 }
      ,{ traditional: "匆", simplified: "匆", pinyin: "cōng", definition: "hastily, in haste, hurriedly", radicals: "勹", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0289", frequencyRank: 1622 }
      ,{ traditional: "辉", simplified: "辉", pinyin: "huī", definition: "brightness, luster, brilliance", radicals: "小", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2606", frequencyRank: 1623 }
      ,{ traditional: "奈", simplified: "奈", pinyin: "nài", definition: "but, how; bear, stand, endure", radicals: "大", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1048", frequencyRank: 1624 }
      ,{ traditional: "扣", simplified: "扣", pinyin: "kòu", definition: "knock, strike, rap, tap; button", radicals: "手", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0357", frequencyRank: 1625 }
      ,{ traditional: "廷", simplified: "廷", pinyin: "tíng", definition: "court", radicals: "廴", strokeCount: 6, hskLevel: null, generalStandardNumber: "0448", frequencyRank: 1626 }
      ,{ traditional: "澳", simplified: "澳", pinyin: "ào", definition: "inlet, bay; dock, bank", radicals: "水", strokeCount: 15, hskLevel: null, generalStandardNumber: "3295", frequencyRank: 1627 }
      ,{ traditional: "嘛", simplified: "嘛", pinyin: "ma", definition: "final exclamatory particle", radicals: "口", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3110", frequencyRank: 1628 }
      ,{ traditional: "董", simplified: "董", pinyin: "dǒng", definition: "direct, supervise; surname", radicals: "艸", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2551", frequencyRank: 1629 }
      ,{ traditional: "迁", simplified: "迁", pinyin: "qiān", definition: "move, shift, change; transfer; relocate a capital city", radicals: "辵", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0451", frequencyRank: 1630 }
      ,{ traditional: "凝", simplified: "凝", pinyin: "níng", definition: "coagulate; congeal; freeze", radicals: "冫", strokeCount: 16, hskLevel: 6, generalStandardNumber: "3370", frequencyRank: 1631 }
      ,{ traditional: "慰", simplified: "慰", pinyin: "wèi", definition: "comfort, console, calm", radicals: "心", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3310", frequencyRank: 1632 }
      ,{ traditional: "厌", simplified: "厌", pinyin: "yàn", definition: "dislike, detest, reject; satiate", radicals: "厂", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0386", frequencyRank: 1633 }
      ,{ traditional: "脏", simplified: "脏", pinyin: "zàng", definition: "internal organs, viscera; dirty", radicals: "肉", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1998", frequencyRank: 1634 }
      ,{ traditional: "腾", simplified: "腾", pinyin: "téng", definition: "fly; gallop; run; prance; rise", radicals: "肉", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2975", frequencyRank: 1635 }
      ,{ traditional: "幽", simplified: "幽", pinyin: "yōu", definition: "quiet, secluded, tranquil; dark", radicals: "幺", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1524", frequencyRank: 1636 }
      ,{ traditional: "怨", simplified: "怨", pinyin: "yuàn", definition: "hatred, enmity, resentment", radicals: "心", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1608", frequencyRank: 1637 }
      ,{ traditional: "鞋", simplified: "鞋", pinyin: "xié", definition: "shoes, footwear in general", radicals: "革", strokeCount: 15, hskLevel: 3, generalStandardNumber: "3207", frequencyRank: 1638 }
      ,{ traditional: "丢", simplified: "丢", pinyin: "diū", definition: "discard", radicals: "一", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0447", frequencyRank: 1639 }
      ,{ traditional: "埋", simplified: "埋", pinyin: "mái", definition: "bury, secrete, conceal", radicals: "土", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1794", frequencyRank: 1640 }
      ,{ traditional: "泉", simplified: "泉", pinyin: "quán", definition: "spring, fountain; wealth, money", radicals: "水", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1572", frequencyRank: 1641 }
      ,{ traditional: "涌", simplified: "涌", pinyin: "yǒng", definition: "surge up, bubble up, gush forth", radicals: "水", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2089", frequencyRank: 1642 }
      ,{ traditional: "辖", simplified: "辖", pinyin: "xiá", definition: "linchpin of wheel; control", radicals: "車", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3096", frequencyRank: 1643 }
      ,{ traditional: "躲", simplified: "躲", pinyin: "duǒ", definition: "hide, secrete; avoid, escape", radicals: "身", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2962", frequencyRank: 1644 }
      ,{ traditional: "晋", simplified: "晋", pinyin: "jìn", definition: "advance, increase; promote", radicals: "日", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1828", frequencyRank: 1645 }
      ,{ traditional: "紫", simplified: "紫", pinyin: "zǐ", definition: "purple, violet; amethyst; surname", radicals: "糸", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2604", frequencyRank: 1646 }
      ,{ traditional: "艰", simplified: "艰", pinyin: "jiān", definition: "difficult, hard; distressing", radicals: "又", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1335", frequencyRank: 1647 }
      ,{ traditional: "魏", simplified: "魏", pinyin: "wèi", definition: "kingdom of Wei; surname", radicals: "鬼", strokeCount: 17, hskLevel: null, generalStandardNumber: "3416", frequencyRank: 1648 }
      ,{ traditional: "吾", simplified: "吾", pinyin: "wú", definition: "i, my, our; resist, impede", radicals: "口", strokeCount: 7, hskLevel: null, generalStandardNumber: "0695", frequencyRank: 1649 }
      ,{ traditional: "慌", simplified: "慌", pinyin: "huāng", definition: "nervous, panicky, frantic", radicals: "心", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2771", frequencyRank: 1650 }
      ,{ traditional: "祝", simplified: "祝", pinyin: "zhù", definition: "pray for happiness or blessings", radicals: "示", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1712", frequencyRank: 1651 }
      ,{ traditional: "邮", simplified: "邮", pinyin: "yóu", definition: "postal, mail; post office", radicals: "邑", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0732", frequencyRank: 1652 }
      ,{ traditional: "吐", simplified: "吐", pinyin: "tǔ", definition: "vomit, spew out, cough up", radicals: "口", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0421", frequencyRank: 1653 }
      ,{ traditional: "狠", simplified: "狠", pinyin: "hěn", definition: "vicious, cruel; severely, extreme", radicals: "犬", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1606", frequencyRank: 1654 }
      ,{ traditional: "鉴", simplified: "鉴", pinyin: "jiàn", definition: "mirror, looking glass; reflect", radicals: "金", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2894", frequencyRank: 1655 }
      ,{ traditional: "曰", simplified: "曰", pinyin: "yuē", definition: "say; KangXi radical 73", radicals: "曰", strokeCount: 4, hskLevel: null, generalStandardNumber: "0111", frequencyRank: 1656 }
      ,{ traditional: "械", simplified: "械", pinyin: "xiè", definition: "weapons; implements, instruments", radicals: "木", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2219", frequencyRank: 1657 }
      ,{ traditional: "咬", simplified: "咬", pinyin: "yǎo", definition: "bite, gnaw", radicals: "口", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1512", frequencyRank: 1658 }
      ,{ traditional: "邻", simplified: "邻", pinyin: "lín", definition: "neighbor; neighborhood", radicals: "邑", strokeCount: 7, hskLevel: 3, generalStandardNumber: "0801", frequencyRank: 1659 }
      ,{ traditional: "赤", simplified: "赤", pinyin: "chì", definition: "scarlet color, bare/naked, honest", radicals: "赤", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0631", frequencyRank: 1660 }
      ,{ traditional: "挤", simplified: "挤", pinyin: "jǐ", definition: "crowd, squeeze, push against", radicals: "手", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1392", frequencyRank: 1661 }
      ,{ traditional: "弯", simplified: "弯", pinyin: "wān", definition: "bend, curve", radicals: "弓", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1616", frequencyRank: 1662 }
      ,{ traditional: "椅", simplified: "椅", pinyin: "yǐ", definition: "chair, seat", radicals: "木", strokeCount: 12, hskLevel: 1, generalStandardNumber: "2569", frequencyRank: 1663 }
      ,{ traditional: "陪", simplified: "陪", pinyin: "péi", definition: "accompany, be with, keep company", radicals: "阜", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2139", frequencyRank: 1664 }
      ,{ traditional: "割", simplified: "割", pinyin: "gē", definition: "cut, divide, partition; cede", radicals: "刀", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2779", frequencyRank: 1665 }
      ,{ traditional: "揭", simplified: "揭", pinyin: "jiē", definition: "raise, lift up; surname", radicals: "手", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2522", frequencyRank: 1666 }
      ,{ traditional: "韦", simplified: "韦", pinyin: "wéi", definition: "tanned leather; surname; simplified form of KangXi radical number 178", radicals: "韋", strokeCount: 4, hskLevel: null, generalStandardNumber: "3509", frequencyRank: 1667 }
      ,{ traditional: "悟", simplified: "悟", pinyin: "wù", definition: "to apprehend, realize, become aware", radicals: "心", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2091", frequencyRank: 1668 }
      ,{ traditional: "聪", simplified: "聪", pinyin: "cōng", definition: "intelligent, clever, bright", radicals: "耳", strokeCount: 15, hskLevel: 3, generalStandardNumber: "3206", frequencyRank: 1669 }
      ,{ traditional: "雾", simplified: "雾", pinyin: "wù", definition: "fog, mist, vapor, fine spray", radicals: "雨", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2886", frequencyRank: 1670 }
      ,{ traditional: "锋", simplified: "锋", pinyin: "fēng", definition: "point of spear, sharp point", radicals: "金", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2664", frequencyRank: 1671 }
      ,{ traditional: "梯", simplified: "梯", pinyin: "tī", definition: "ladder, steps, stairs; lean", radicals: "木", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2229", frequencyRank: 1672 }
      ,{ traditional: "猫", simplified: "猫", pinyin: "māo", definition: "cat", radicals: "犬", strokeCount: 11, hskLevel: 1, generalStandardNumber: "2367", frequencyRank: 1673 }
      ,{ traditional: "祥", simplified: "祥", pinyin: "xiáng", definition: "good luck, good omen; happiness", radicals: "示", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2119", frequencyRank: 1674 }
      ,{ traditional: "阔", simplified: "阔", pinyin: "kuò", definition: "broad, ample, wide; be apart", radicals: "門", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2737", frequencyRank: 1675 }
      ,{ traditional: "誉", simplified: "誉", pinyin: "yù", definition: "fame, reputation; praise", radicals: "言", strokeCount: 13, hskLevel: 6, generalStandardNumber: "3024", frequencyRank: 1676 }
      ,{ traditional: "筹", simplified: "筹", pinyin: "chóu", definition: "chip, tally, token; raise money", radicals: "竹", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2952", frequencyRank: 1677 }
      ,{ traditional: "丛", simplified: "丛", pinyin: "cóng", definition: "bush, shrub; thicket; collection", radicals: "一", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0281", frequencyRank: 1678 }
      ,{ traditional: "牵", simplified: "牵", pinyin: "qiān", definition: "drag, pull, lead by hand", radicals: "大", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1458", frequencyRank: 1679 }
      ,{ traditional: "鸣", simplified: "鸣", pinyin: "míng", definition: "cry of bird or animal; make sound", radicals: "口", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1100", frequencyRank: 1680 }
      ,{ traditional: "沈", simplified: "沈", pinyin: "chén", definition: "sink, submerge; addicted to; surname", radicals: "水", strokeCount: 7, hskLevel: null, generalStandardNumber: "0870", frequencyRank: 1681 }
      ,{ traditional: "阁", simplified: "阁", pinyin: "gé", definition: "chamber, pavilion; cabinet", radicals: "門", strokeCount: 9, hskLevel: null, generalStandardNumber: "1639", frequencyRank: 1682 }
      ,{ traditional: "穆", simplified: "穆", pinyin: "mù", definition: "majestic, solemn, reverent; calm", radicals: "禾", strokeCount: 16, hskLevel: null, generalStandardNumber: "3356", frequencyRank: 1683 }
      ,{ traditional: "屈", simplified: "屈", pinyin: "qū", definition: "bend, flex; bent, crooked; crouch", radicals: "尸", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1311", frequencyRank: 1684 }
      ,{ traditional: "旨", simplified: "旨", pinyin: "zhǐ", definition: "purpose, aim; excellent", radicals: "日", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0501", frequencyRank: 1685 }
      ,{ traditional: "袖", simplified: "袖", pinyin: "xiù", definition: "sleeve; put something in sleeve", radicals: "衣", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2116", frequencyRank: 1686 }
      ,{ traditional: "猎", simplified: "猎", pinyin: "liè", definition: "hunt; field sports", radicals: "犬", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2366", frequencyRank: 1687 }
      ,{ traditional: "臂", simplified: "臂", pinyin: "bì", definition: "arm", radicals: "肉", strokeCount: 17, hskLevel: 6, generalStandardNumber: "3434", frequencyRank: 1688 }
      ,{ traditional: "蛇", simplified: "蛇", pinyin: "shé", definition: "snake", radicals: "虫", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2280", frequencyRank: 1689 }
      ,{ traditional: "贺", simplified: "贺", pinyin: "hè", definition: "congratulate; send present", radicals: "貝", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1744", frequencyRank: 1690 }
      ,{ traditional: "柱", simplified: "柱", pinyin: "zhù", definition: "pillar, post; support; lean on", radicals: "木", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1435", frequencyRank: 1691 }
      ,{ traditional: "抛", simplified: "抛", pinyin: "pāo", definition: "throw (away)", radicals: "手", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0642", frequencyRank: 1692 }
      ,{ traditional: "鼠", simplified: "鼠", pinyin: "shǔ", definition: "rat, mouse; KangXi radical 208", radicals: "鼠", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2958", frequencyRank: 1693 }
      ,{ traditional: "瑟", simplified: "瑟", pinyin: "sè", definition: "large stringed musical instrument; dignified, massive; sound of wind", radicals: "玉", strokeCount: 13, hskLevel: null, generalStandardNumber: "2825", frequencyRank: 1694 }
      ,{ traditional: "戈", simplified: "戈", pinyin: "gē", definition: "halberd, spear, lance; rad. 62", radicals: "戈", strokeCount: 4, hskLevel: null, generalStandardNumber: "0104", frequencyRank: 1695 }
      ,{ traditional: "牢", simplified: "牢", pinyin: "láo", definition: "prison; stable, pen; secure", radicals: "牛", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0880", frequencyRank: 1696 }
      ,{ traditional: "逊", simplified: "逊", pinyin: "xùn", definition: "humble, modest; yield", radicals: "辵", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1728", frequencyRank: 1697 }
      ,{ traditional: "迈", simplified: "迈", pinyin: "mài", definition: "take a big stride; pass by", radicals: "辵", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0408", frequencyRank: 1698 }
      ,{ traditional: "欺", simplified: "欺", pinyin: "qī", definition: "cheat, double-cross, deceive", radicals: "欠", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2543", frequencyRank: 1699 }
      ,{ traditional: "吨", simplified: "吨", pinyin: "dūn", definition: "metric ton; (Cant.) to babble, gibberish", radicals: "口", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0730", frequencyRank: 1700 }
      ,{ traditional: "琴", simplified: "琴", pinyin: "qín", definition: "Chinese lute or guitar", radicals: "玉", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2501", frequencyRank: 1701 }
      ,{ traditional: "衰", simplified: "衰", pinyin: "shuāi", definition: "decline, falter, decrease; weaken", radicals: "衣", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2019", frequencyRank: 1702 }
      ,{ traditional: "瓶", simplified: "瓶", pinyin: "píng", definition: "jug, pitcher, vase, jar, bottle", radicals: "瓦", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2051", frequencyRank: 1703 }
      ,{ traditional: "恼", simplified: "恼", pinyin: "nǎo", definition: "angered, filled with hate", radicals: "心", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1691", frequencyRank: 1704 }
      ,{ traditional: "燕", simplified: "燕", pinyin: "yàn", definition: "swallow (bird); comfort, enjoy", radicals: "火", strokeCount: 16, hskLevel: null, generalStandardNumber: "3319", frequencyRank: 1705 }
      ,{ traditional: "仲", simplified: "仲", pinyin: "zhòng", definition: "middle brother; go between, mediator; surname", radicals: "人", strokeCount: 6, hskLevel: null, generalStandardNumber: "0465", frequencyRank: 1706 }
      ,{ traditional: "诱", simplified: "诱", pinyin: "yòu", definition: "persuade, entice, induce; guide", radicals: "言", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1715", frequencyRank: 1707 }
      ,{ traditional: "狼", simplified: "狼", pinyin: "láng", definition: "wolf", radicals: "犬", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2005", frequencyRank: 1708 }
      ,{ traditional: "池", simplified: "池", pinyin: "chí", definition: "pool, pond; moat; cistern", radicals: "水", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0540", frequencyRank: 1709 }
      ,{ traditional: "疼", simplified: "疼", pinyin: "téng", definition: "aches, pains; be fond of; love", radicals: "疒", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2031", frequencyRank: 1710 }
      ,{ traditional: "卢", simplified: "卢", pinyin: "lú", definition: "cottage, hut; surname; black", radicals: "卜", strokeCount: 5, hskLevel: null, generalStandardNumber: "0230", frequencyRank: 1711 }
      ,{ traditional: "仗", simplified: "仗", pinyin: "zhàng", definition: "rely upon; protector; fight; war, weaponry", radicals: "人", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0270", frequencyRank: 1712 }
      ,{ traditional: "冠", simplified: "冠", pinyin: "guān", definition: "cap, crown, headgear", radicals: "冖", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1705", frequencyRank: 1713 }
      ,{ traditional: "粒", simplified: "粒", pinyin: "lì", definition: "grain; small particle", radicals: "米", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2404", frequencyRank: 1714 }
      ,{ traditional: "遥", simplified: "遥", pinyin: "yáo", definition: "far away, distant, remote", radicals: "辵", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2967", frequencyRank: 1715 }
      ,{ traditional: "吕", simplified: "吕", pinyin: "lǚ", definition: "surname; a musical note", radicals: "口", strokeCount: 6, hskLevel: null, generalStandardNumber: "0426", frequencyRank: 1716 }
      ,{ traditional: "玄", simplified: "玄", pinyin: "xuán", definition: "deep, profound, abstruse; KangXi radical 95", radicals: "玄", strokeCount: 5, hskLevel: null, generalStandardNumber: "0304", frequencyRank: 1717 }
      ,{ traditional: "尘", simplified: "尘", pinyin: "chén", definition: "dust, dirt, ashes, cinders", radicals: "小", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0414", frequencyRank: 1718 }
      ,{ traditional: "冯", simplified: "冯", pinyin: "féng", definition: "surname; gallop; by dint of", radicals: "馬", strokeCount: 5, hskLevel: null, generalStandardNumber: "0303", frequencyRank: 1719 }
      ,{ traditional: "抚", simplified: "抚", pinyin: "fǔ", definition: "pat, console, comfort; pacify", radicals: "手", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0613", frequencyRank: 1720 }
      ,{ traditional: "浅", simplified: "浅", pinyin: "qiǎn", definition: "shallow, not deep; superficial", radicals: "水", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1240", frequencyRank: 1721 }
      ,{ traditional: "敦", simplified: "敦", pinyin: "dūn", definition: "esteem; honest, candid, sincere", radicals: "攴", strokeCount: 12, hskLevel: null, generalStandardNumber: "2729", frequencyRank: 1722 }
      ,{ traditional: "纠", simplified: "纠", pinyin: "jiū", definition: "investigate, inspect", radicals: "糸", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0344", frequencyRank: 1723 }
      ,{ traditional: "钻", simplified: "钻", pinyin: "zuān", definition: "drill, bore; pierce; diamond", radicals: "金", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1930", frequencyRank: 1724 }
      ,{ traditional: "晶", simplified: "晶", pinyin: "jīng", definition: "crystal; clear, bright; radiant", radicals: "日", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2620", frequencyRank: 1725 }
      ,{ traditional: "岂", simplified: "岂", pinyin: "qǐ", definition: "how? what?", radicals: "山", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0439", frequencyRank: 1726 }
      ,{ traditional: "峡", simplified: "峡", pinyin: "xiá", definition: "gorge, strait, ravine; isthmus", radicals: "山", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1518", frequencyRank: 1727 }
      ,{ traditional: "苍", simplified: "苍", pinyin: "cāng", definition: "blue; green", radicals: "艸", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0669", frequencyRank: 1728 }
      ,{ traditional: "喷", simplified: "喷", pinyin: "pēn", definition: "spurt, blow out, puff out", radicals: "口", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2618", frequencyRank: 1729 }
      ,{ traditional: "耗", simplified: "耗", pinyin: "hào", definition: "consume, use up; waste, squander", radicals: "耒", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1768", frequencyRank: 1730 }
      ,{ traditional: "凌", simplified: "凌", pinyin: "líng", definition: "pure; virtuous; insult; maltreat", radicals: "冫", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2014", frequencyRank: 1731 }
      ,{ traditional: "敲", simplified: "敲", pinyin: "qiāo", definition: "strike, beat, pound, hammer; rap", radicals: "攴", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3140", frequencyRank: 1732 }
      ,{ traditional: "菌", simplified: "菌", pinyin: "jūn", definition: "mushroom; germ, microbe", radicals: "艸", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2205", frequencyRank: 1733 }
      ,{ traditional: "赔", simplified: "赔", pinyin: "péi", definition: "indemnify, suffer loss", radicals: "貝", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2654", frequencyRank: 1734 }
      ,{ traditional: "涂", simplified: "涂", pinyin: "tú", definition: "surname; name of certain rivers", radicals: "水", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2075", frequencyRank: 1735 }
      ,{ traditional: "粹", simplified: "粹", pinyin: "cuì", definition: "pure; unadulterated; select", radicals: "米", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3154", frequencyRank: 1736 }
      ,{ traditional: "扁", simplified: "扁", pinyin: "biǎn", definition: "flat; tablet, signboard", radicals: "戶", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1708", frequencyRank: 1737 }
      ,{ traditional: "亏", simplified: "亏", pinyin: "kuī", definition: "lose, fail; damage; deficient", radicals: "二", strokeCount: 3, hskLevel: 5, generalStandardNumber: "0025", frequencyRank: 1738 }
      ,{ traditional: "寂", simplified: "寂", pinyin: "jì", definition: "still, silent, quiet, desolate", radicals: "宀", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2454", frequencyRank: 1739 }
      ,{ traditional: "煤", simplified: "煤", pinyin: "méi", definition: "coal, coke, charcoal, carbon", radicals: "火", strokeCount: 13, hskLevel: 5, generalStandardNumber: "3003", frequencyRank: 1740 }
      ,{ traditional: "熊", simplified: "熊", pinyin: "xióng", definition: "a bear; brilliant; bright; surname", radicals: "火", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3185", frequencyRank: 1741 }
      ,{ traditional: "恭", simplified: "恭", pinyin: "gōng", definition: "respectful, polite, reverent", radicals: "心", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1820", frequencyRank: 1742 }
      ,{ traditional: "湿", simplified: "湿", pinyin: "shī", definition: "wet, moist, humid, damp; illness", radicals: "水", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2756", frequencyRank: 1743 }
      ,{ traditional: "循", simplified: "循", pinyin: "xún", definition: "obey, comply with, follow", radicals: "彳", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2705", frequencyRank: 1744 }
      ,{ traditional: "暖", simplified: "暖", pinyin: "nuǎn", definition: "warm, genial", radicals: "日", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2906", frequencyRank: 1745 }
      ,{ traditional: "糖", simplified: "糖", pinyin: "táng", definition: "sugar; candy; sweets", radicals: "米", strokeCount: 16, hskLevel: 4, generalStandardNumber: "3374", frequencyRank: 1746 }
      ,{ traditional: "赋", simplified: "赋", pinyin: "fù", definition: "tax; give; endow; army; diffuse", radicals: "貝", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2650", frequencyRank: 1747 }
      ,{ traditional: "抑", simplified: "抑", pinyin: "yì", definition: "press down, repress; curb, hinder", radicals: "手", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0641", frequencyRank: 1748 }
      ,{ traditional: "秩", simplified: "秩", pinyin: "zhì", definition: "order; orderly; salary; decade", radicals: "禾", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1947", frequencyRank: 1749 }
      ,{ traditional: "帽", simplified: "帽", pinyin: "mào", definition: "hat, cap; cap-like tops", radicals: "巾", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2649", frequencyRank: 1750 }
      ,{ traditional: "哀", simplified: "哀", pinyin: "āi", definition: "sad, mournful, pitiful; pity", radicals: "口", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1619", frequencyRank: 1751 }
      ,{ traditional: "宿", simplified: "宿", pinyin: "sù", definition: "stop, rest, lodge, stay overnight; constellation", radicals: "宀", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2455", frequencyRank: 1752 }
      ,{ traditional: "踏", simplified: "踏", pinyin: "tà", definition: "step on, trample, tread on, walk", radicals: "足", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3242", frequencyRank: 1753 }
      ,{ traditional: "烂", simplified: "烂", pinyin: "làn", definition: "rotten, spoiled, decayed", radicals: "火", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1660", frequencyRank: 1754 }
      ,{ traditional: "袁", simplified: "袁", pinyin: "yuán", definition: "robe; surname", radicals: "衣", strokeCount: 10, hskLevel: null, generalStandardNumber: "1799", frequencyRank: 1755 }
      ,{ traditional: "侯", simplified: "侯", pinyin: "hóu", definition: "marquis, lord; target in archery", radicals: "人", strokeCount: 9, hskLevel: null, generalStandardNumber: "1576", frequencyRank: 1756 }
      ,{ traditional: "抖", simplified: "抖", pinyin: "dǒu", definition: "tremble, shake, rouse; give shake", radicals: "手", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0648", frequencyRank: 1757 }
      ,{ traditional: "夹", simplified: "夹", pinyin: "jiā", definition: "be wedged or inserted between", radicals: "一", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0402", frequencyRank: 1758 }
      ,{ traditional: "昆", simplified: "昆", pinyin: "kūn", definition: "elder brother; descendants", radicals: "日", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1080", frequencyRank: 1759 }
      ,{ traditional: "肝", simplified: "肝", pinyin: "gān", definition: "liver", radicals: "肉", strokeCount: 7, hskLevel: null, generalStandardNumber: "0803", frequencyRank: 1760 }
      ,{ traditional: "擦", simplified: "擦", pinyin: "cā", definition: "wipe, scrub, rub, scour; brush", radicals: "手", strokeCount: 17, hskLevel: 4, generalStandardNumber: "3389", frequencyRank: 1761 }
      ,{ traditional: "猪", simplified: "猪", pinyin: "zhū", definition: "pig, hog, wild boar", radicals: "犬", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2365", frequencyRank: 1762 }
      ,{ traditional: "炼", simplified: "炼", pinyin: "liàn", definition: "smelt, refine; distill, condense", radicals: "火", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1655", frequencyRank: 1763 }
      ,{ traditional: "恒", simplified: "恒", pinyin: "héng", definition: "constant, regular, persistent", radicals: "心", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1685", frequencyRank: 1764 }
      ,{ traditional: "慎", simplified: "慎", pinyin: "shèn", definition: "act with care, be cautious", radicals: "心", strokeCount: 13, hskLevel: 5, generalStandardNumber: "3023", frequencyRank: 1765 }
      ,{ traditional: "搬", simplified: "搬", pinyin: "bān", definition: "transfer, move, remove, shift", radicals: "手", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2840", frequencyRank: 1766 }
      ,{ traditional: "纽", simplified: "纽", pinyin: "niǔ", definition: "knot; button; handle, knob; tie", radicals: "糸", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0942", frequencyRank: 1767 }
      ,{ traditional: "纹", simplified: "纹", pinyin: "wén", definition: "line, streak, stripe; wrinkle", radicals: "糸", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0939", frequencyRank: 1768 }
      ,{ traditional: "玻", simplified: "玻", pinyin: "bō", definition: "glass", radicals: "玉", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1361", frequencyRank: 1769 }
      ,{ traditional: "渔", simplified: "渔", pinyin: "yú", definition: "to fish; seize; pursue; surname", radicals: "水", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2425", frequencyRank: 1770 }
      ,{ traditional: "磁", simplified: "磁", pinyin: "cí", definition: "magnetic; magnetism; porcelain", radicals: "石", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3093", frequencyRank: 1771 }
      ,{ traditional: "铜", simplified: "铜", pinyin: "tóng", definition: "copper, brass, bronze", radicals: "金", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2306", frequencyRank: 1772 }
      ,{ traditional: "齿", simplified: "齿", pinyin: "chǐ", definition: "teeth; gears, cogs; age; simplified form of the KangXi radical number 211", radicals: "齒", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1068", frequencyRank: 1773 }
      ,{ traditional: "跨", simplified: "跨", pinyin: "kuà", definition: "straddle, bestride, ride; carry", radicals: "足", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2913", frequencyRank: 1774 }
      ,{ traditional: "押", simplified: "押", pinyin: "yā", definition: "mortgage, pledge; deposit; to pawn; to arrest, detain, guard", radicals: "手", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0965", frequencyRank: 1775 }
      ,{ traditional: "怖", simplified: "怖", pinyin: "bù", definition: "terror, fear; frighten; terrified", radicals: "心", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1267", frequencyRank: 1776 }
      ,{ traditional: "漠", simplified: "漠", pinyin: "mò", definition: "desert; aloof, indifferent, cool", radicals: "水", strokeCount: 13, hskLevel: 5, generalStandardNumber: "3006", frequencyRank: 1777 }
      ,{ traditional: "疲", simplified: "疲", pinyin: "pí", definition: "feel tired, be exhausted; weak", radicals: "疒", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2032", frequencyRank: 1778 }
      ,{ traditional: "叛", simplified: "叛", pinyin: "pàn", definition: "rebel; rebellion; rebellious", radicals: "又", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1644", frequencyRank: 1779 }
      ,{ traditional: "遣", simplified: "遣", pinyin: "qiǎn", definition: "send, dispatch; send off, exile", radicals: "辵", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2921", frequencyRank: 1780 }
      ,{ traditional: "兹", simplified: "兹", pinyin: "zī", definition: "now, here; this; time, year", radicals: "艸", strokeCount: 9, hskLevel: null, generalStandardNumber: "1653", frequencyRank: 1781 }
      ,{ traditional: "祭", simplified: "祭", pinyin: "jì", definition: "sacrifice to, worship", radicals: "示", strokeCount: 11, hskLevel: null, generalStandardNumber: "2371", frequencyRank: 1782 }
      ,{ traditional: "醉", simplified: "醉", pinyin: "zuì", definition: "intoxicated, drunk; addicted to", radicals: "酉", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3224", frequencyRank: 1783 }
      ,{ traditional: "拳", simplified: "拳", pinyin: "quán", definition: "fist; various forms of boxing", radicals: "手", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2052", frequencyRank: 1784 }
      ,{ traditional: "弥", simplified: "弥", pinyin: "mí", definition: "extensive, full; fill; complete", radicals: "弓", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1313", frequencyRank: 1785 }
      ,{ traditional: "斜", simplified: "斜", pinyin: "xié", definition: "slanting, sloping, inclined", radicals: "斗", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2347", frequencyRank: 1786 }
      ,{ traditional: "档", simplified: "档", pinyin: "dàng", definition: "shelf; frame, crosspiece", radicals: "木", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1838", frequencyRank: 1787 }
      ,{ traditional: "稀", simplified: "稀", pinyin: "xī", definition: "rare, unusual, scarce; sparse", radicals: "禾", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2678", frequencyRank: 1788 }
      ,{ traditional: "捷", simplified: "捷", pinyin: "jié", definition: "win, victory, triumph", radicals: "手", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2167", frequencyRank: 1789 }
      ,{ traditional: "肤", simplified: "肤", pinyin: "fū", definition: "skin; superficial, shallow", radicals: "肉", strokeCount: 8, hskLevel: 4, generalStandardNumber: "1180", frequencyRank: 1790 }
      ,{ traditional: "疫", simplified: "疫", pinyin: "yì", definition: "epidemic, plague, pestilence", radicals: "疒", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1627", frequencyRank: 1791 }
      ,{ traditional: "肿", simplified: "肿", pinyin: "zhǒng", definition: "swell; swollen; swelling", radicals: "肉", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1183", frequencyRank: 1792 }
      ,{ traditional: "豆", simplified: "豆", pinyin: "dòu", definition: "beans, peas; bean-shaped", radicals: "豆", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0696", frequencyRank: 1793 }
      ,{ traditional: "削", simplified: "削", pinyin: "xuē", definition: "scrape off, pare, trim", radicals: "刀", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1475", frequencyRank: 1794 }
      ,{ traditional: "岗", simplified: "岗", pinyin: "gǎng", definition: "post; position", radicals: "山", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0754", frequencyRank: 1795 }
      ,{ traditional: "晃", simplified: "晃", pinyin: "huǎng", definition: "bright, dazzling; to sway, shake", radicals: "日", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1893", frequencyRank: 1796 }
      ,{ traditional: "吞", simplified: "吞", pinyin: "tūn", definition: "swallow; absorb, annex, engulf", radicals: "口", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0607", frequencyRank: 1797 }
      ,{ traditional: "宏", simplified: "宏", pinyin: "hóng", definition: "wide, spacious, great, vast", radicals: "宀", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0879", frequencyRank: 1798 }
      ,{ traditional: "癌", simplified: "癌", pinyin: "ái", definition: "cancer; marmoset", radicals: "疒", strokeCount: 17, hskLevel: 6, generalStandardNumber: "3425", frequencyRank: 1799 }
      ,{ traditional: "肚", simplified: "肚", pinyin: "dù", definition: "belly; abdomen; bowels", radicals: "肉", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0805", frequencyRank: 1800 }
      ,{ traditional: "隶", simplified: "隶", pinyin: "lì", definition: "subservient; servant; KangXi radical 171", radicals: "隶", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1305", frequencyRank: 1801 }
      ,{ traditional: "履", simplified: "履", pinyin: "lǚ", definition: "footwear, shoes; walk on, tread", radicals: "尸", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3312", frequencyRank: 1802 }
      ,{ traditional: "涨", simplified: "涨", pinyin: "zhǎng", definition: "rise in price", radicals: "水", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2086", frequencyRank: 1803 }
      ,{ traditional: "耀", simplified: "耀", pinyin: "yào", definition: "shine, sparkle, dazzle; glory", radicals: "羽", strokeCount: 20, hskLevel: 6, generalStandardNumber: "3476", frequencyRank: 1804 }
      ,{ traditional: "扭", simplified: "扭", pinyin: "niǔ", definition: "turn, twist, wrench; seize, grasp", radicals: "手", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0653", frequencyRank: 1805 }
      ,{ traditional: "坛", simplified: "坛", pinyin: "tán", definition: "altar; arena, examination hall", radicals: "土", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0614", frequencyRank: 1806 }
      ,{ traditional: "拨", simplified: "拨", pinyin: "bō", definition: "move; dispel; distribute", radicals: "手", strokeCount: 8, hskLevel: 6, generalStandardNumber: "0991", frequencyRank: 1807 }
      ,{ traditional: "沃", simplified: "沃", pinyin: "wò", definition: "water, irrigate; fertile, rich", radicals: "水", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0862", frequencyRank: 1808 }
      ,{ traditional: "绘", simplified: "绘", pinyin: "huì", definition: "draw, sketch, paint", radicals: "糸", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1757", frequencyRank: 1809 }
      ,{ traditional: "伐", simplified: "伐", pinyin: "fá", definition: "cut down, subjugate, attack", radicals: "人", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0463", frequencyRank: 1810 }
      ,{ traditional: "堪", simplified: "堪", pinyin: "kān", definition: "adequately capable of, worthy of", radicals: "土", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2509", frequencyRank: 1811 }
      ,{ traditional: "仆", simplified: "仆", pinyin: "pū", definition: "fall forward; lie prostrate, prone; servant", radicals: "人", strokeCount: 4, hskLevel: null, generalStandardNumber: "0131", frequencyRank: 1812 }
      ,{ traditional: "郭", simplified: "郭", pinyin: "guō", definition: "outer part (of a city); surname", radicals: "邑", strokeCount: 10, hskLevel: null, generalStandardNumber: "2022", frequencyRank: 1813 }
      ,{ traditional: "牺", simplified: "牺", pinyin: "xī", definition: "sacrifice, give up; sacrificial", radicals: "牛", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1939", frequencyRank: 1814 }
      ,{ traditional: "歼", simplified: "歼", pinyin: "jiān", definition: "annihilate, wipe out, kill off", radicals: "歹", strokeCount: 7, hskLevel: null, generalStandardNumber: "0706", frequencyRank: 1815 }
      ,{ traditional: "墓", simplified: "墓", pinyin: "mù", definition: "grave, tomb", radicals: "土", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2853", frequencyRank: 1816 }
      ,{ traditional: "雇", simplified: "雇", pinyin: "gù", definition: "employ, to hire", radicals: "隹", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2789", frequencyRank: 1817 }
      ,{ traditional: "廉", simplified: "廉", pinyin: "lián", definition: "upright, honorable, honest", radicals: "广", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2992", frequencyRank: 1818 }
      ,{ traditional: "契", simplified: "契", pinyin: "qì", definition: "deed, contract, bond; engrave", radicals: "大", strokeCount: 9, hskLevel: null, generalStandardNumber: "1352", frequencyRank: 1819 }
      ,{ traditional: "拼", simplified: "拼", pinyin: "pīn", definition: "join together, link, incorporate", radicals: "手", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1393", frequencyRank: 1820 }
      ,{ traditional: "惩", simplified: "惩", pinyin: "chéng", definition: "punish, reprimand; warn", radicals: "心", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2703", frequencyRank: 1821 }
      ,{ traditional: "捉", simplified: "捉", pinyin: "zhuō", definition: "grasp, clutch; catch, seize", radicals: "手", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1795", frequencyRank: 1822 }
      ,{ traditional: "覆", simplified: "覆", pinyin: "fù", definition: "cover; tip over; return; reply", radicals: "襾", strokeCount: 18, hskLevel: 6, generalStandardNumber: "3440", frequencyRank: 1823 }
      ,{ traditional: "刷", simplified: "刷", pinyin: "shuā", definition: "brush; clean with brush, scrub", radicals: "刀", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1310", frequencyRank: 1824 }
      ,{ traditional: "劫", simplified: "劫", pinyin: "jié", definition: "take by force, coerce; disaster", radicals: "力", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0660", frequencyRank: 1825 }
      ,{ traditional: "嫌", simplified: "嫌", pinyin: "xián", definition: "hate, detest; suspect; criticize", radicals: "女", strokeCount: 13, hskLevel: 6, generalStandardNumber: "3041", frequencyRank: 1826 }
      ,{ traditional: "瓜", simplified: "瓜", pinyin: "guā", definition: "melon, gourd, cucumber; rad. 97", radicals: "瓜", strokeCount: 5, hskLevel: 2, generalStandardNumber: "0279", frequencyRank: 1827 }
      ,{ traditional: "歇", simplified: "歇", pinyin: "xiē", definition: "rest, stop, lodge", radicals: "欠", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2908", frequencyRank: 1828 }
      ,{ traditional: "雕", simplified: "雕", pinyin: "diāo", definition: "engrave, inlay, carve; exhaust; used for 鵰 an eagle, vulture", radicals: "隹", strokeCount: 16, hskLevel: 6, generalStandardNumber: "3365", frequencyRank: 1829 }
      ,{ traditional: "闷", simplified: "闷", pinyin: "mèn", definition: "gloomy, depressed, melancholy", radicals: "門", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0848", frequencyRank: 1830 }
      ,{ traditional: "乳", simplified: "乳", pinyin: "rǔ", definition: "breast, nipples; milk, suckle", radicals: "乙", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1175", frequencyRank: 1831 }
      ,{ traditional: "串", simplified: "串", pinyin: "chuàn", definition: "string; relatives; conspire", radicals: "丨", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0736", frequencyRank: 1832 }
      ,{ traditional: "娃", simplified: "娃", pinyin: "wá", definition: "baby; doll; pretty girl", radicals: "女", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1735", frequencyRank: 1833 }
      ,{ traditional: "缴", simplified: "缴", pinyin: "jiǎo", definition: "deliver, submit; hand over", radicals: "糸", strokeCount: 16, hskLevel: 6, generalStandardNumber: "3387", frequencyRank: 1834 }
      ,{ traditional: "唤", simplified: "唤", pinyin: "huàn", definition: "call", radicals: "口", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1911", frequencyRank: 1835 }
      ,{ traditional: "赢", simplified: "赢", pinyin: "yíng", definition: "win; surplus, gain, profit", radicals: "亠", strokeCount: 17, hskLevel: 4, generalStandardNumber: "3427", frequencyRank: 1836 }
      ,{ traditional: "莲", simplified: "莲", pinyin: "lián", definition: "lotus, water lily; paradise", radicals: "艸", strokeCount: 10, hskLevel: null, generalStandardNumber: "1823", frequencyRank: 1837 }
      ,{ traditional: "霸", simplified: "霸", pinyin: "bà", definition: "rule by might rather than right", radicals: "雨", strokeCount: 21, hskLevel: 6, generalStandardNumber: "3489", frequencyRank: 1838 }
      ,{ traditional: "桃", simplified: "桃", pinyin: "táo", definition: "peach; marriage; surname", radicals: "木", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1844", frequencyRank: 1839 }
      ,{ traditional: "妥", simplified: "妥", pinyin: "tuǒ", definition: "satisfactory, appropriate", radicals: "女", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0799", frequencyRank: 1840 }
      ,{ traditional: "瘦", simplified: "瘦", pinyin: "shòu", definition: "thin, emaciated, lean; meager", radicals: "疒", strokeCount: 14, hskLevel: 3, generalStandardNumber: "3147", frequencyRank: 1841 }
      ,{ traditional: "搭", simplified: "搭", pinyin: "dā", definition: "join together, attach to; add to", radicals: "手", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2511", frequencyRank: 1842 }
      ,{ traditional: "赴", simplified: "赴", pinyin: "fù", definition: "go to; attend, be present", radicals: "走", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1377", frequencyRank: 1843 }
      ,{ traditional: "岳", simplified: "岳", pinyin: "yuè", definition: "mountain peak; surname", radicals: "山", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1137", frequencyRank: 1844 }
      ,{ traditional: "嘉", simplified: "嘉", pinyin: "jiā", definition: "excellent; joyful; auspicious", radicals: "口", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3056", frequencyRank: 1845 }
      ,{ traditional: "舱", simplified: "舱", pinyin: "cāng", definition: "hold of ship; cabin", radicals: "舟", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1979", frequencyRank: 1846 }
      ,{ traditional: "俊", simplified: "俊", pinyin: "jùn", definition: "talented, capable; handsome", radicals: "人", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1578", frequencyRank: 1847 }
      ,{ traditional: "址", simplified: "址", pinyin: "zhǐ", definition: "site, location, land for house", radicals: "土", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0623", frequencyRank: 1848 }
      ,{ traditional: "庞", simplified: "庞", pinyin: "páng", definition: "disorderly, messy; huge, big", radicals: "广", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1207", frequencyRank: 1849 }
      ,{ traditional: "耕", simplified: "耕", pinyin: "gēng", definition: "plow, cultivate", radicals: "耒", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1766", frequencyRank: 1850 }
      ,{ traditional: "锐", simplified: "锐", pinyin: "ruì", definition: "sharp, keen, acute, pointed", radicals: "金", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2666", frequencyRank: 1851 }
      ,{ traditional: "缝", simplified: "缝", pinyin: "fèng", definition: "sew, mend", radicals: "糸", strokeCount: 13, hskLevel: 6, generalStandardNumber: "3045", frequencyRank: 1852 }
      ,{ traditional: "悔", simplified: "悔", pinyin: "huǐ", definition: "repent, show remorse, regret", radicals: "心", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2094", frequencyRank: 1853 }
      ,{ traditional: "邀", simplified: "邀", pinyin: "yāo", definition: "invite, welcome; meet, intercept", radicals: "辵", strokeCount: 16, hskLevel: 4, generalStandardNumber: "3362", frequencyRank: 1854 }
      ,{ traditional: "玲", simplified: "玲", pinyin: "líng", definition: "tinkling of jade", radicals: "玉", strokeCount: 9, hskLevel: null, generalStandardNumber: "1359", frequencyRank: 1855 }
      ,{ traditional: "惟", simplified: "惟", pinyin: "wéi", definition: "but, however, nevertheless; only", radicals: "心", strokeCount: 11, hskLevel: null, generalStandardNumber: "2444", frequencyRank: 1856 }
      ,{ traditional: "斥", simplified: "斥", pinyin: "chì", definition: "to scold, upbraid, accuse, reproach", radicals: "斤", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0278", frequencyRank: 1857 }
      ,{ traditional: "宅", simplified: "宅", pinyin: "zhái", definition: "residence, dwelling, home; grave", radicals: "宀", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0547", frequencyRank: 1858 }
      ,{ traditional: "添", simplified: "添", pinyin: "tiān", definition: "append, add to; increase", radicals: "水", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2411", frequencyRank: 1859 }
      ,{ traditional: "挖", simplified: "挖", pinyin: "wā", definition: "dig, dig out, gouge out, scoop", radicals: "手", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1394", frequencyRank: 1860 }
      ,{ traditional: "呵", simplified: "呵", pinyin: "ā", definition: "scold; laughing sound; yawn", radicals: "口", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1085", frequencyRank: 1861 }
      ,{ traditional: "讼", simplified: "讼", pinyin: "sòng", definition: "accuse; argue, dispute; litigate", radicals: "言", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0557", frequencyRank: 1862 }
      ,{ traditional: "氧", simplified: "氧", pinyin: "yǎng", definition: "oxygen", radicals: "气", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1936", frequencyRank: 1863 }
      ,{ traditional: "浩", simplified: "浩", pinyin: "hào", definition: "great, numerous, vast, abundant", radicals: "水", strokeCount: 10, hskLevel: null, generalStandardNumber: "2073", frequencyRank: 1864 }
      ,{ traditional: "羽", simplified: "羽", pinyin: "yǔ", definition: "feather, plume; wings; rad. 124", radicals: "羽", strokeCount: 6, hskLevel: 4, generalStandardNumber: "0585", frequencyRank: 1865 }
      ,{ traditional: "斤", simplified: "斤", pinyin: "jīn", definition: "a catty (approximately 500 g); an axe; keen, shrewd; KangXi radical number 69", radicals: "斤", strokeCount: 4, hskLevel: 3, generalStandardNumber: "0137", frequencyRank: 1866 }
      ,{ traditional: "酷", simplified: "酷", pinyin: "kù", definition: "strong, stimulating; very", radicals: "酉", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3087", frequencyRank: 1867 }
      ,{ traditional: "掠", simplified: "掠", pinyin: "lüè", definition: "rob, ransack, plunder; pass by", radicals: "手", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2182", frequencyRank: 1868 }
      ,{ traditional: "妖", simplified: "妖", pinyin: "yāo", definition: "strange, weird, supernatural", radicals: "女", strokeCount: 7, hskLevel: null, generalStandardNumber: "0920", frequencyRank: 1869 }
      ,{ traditional: "祸", simplified: "祸", pinyin: "huò", definition: "misfortune, calamity, disaster", radicals: "示", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2465", frequencyRank: 1870 }
      ,{ traditional: "侍", simplified: "侍", pinyin: "shì", definition: "serve, attend upon; attendant, servant; samurai", radicals: "人", strokeCount: 8, hskLevel: null, generalStandardNumber: "1136", frequencyRank: 1871 }
      ,{ traditional: "乙", simplified: "乙", pinyin: "yǐ", definition: "second; 2nd heavenly stem", radicals: "乙", strokeCount: 1, hskLevel: 5, generalStandardNumber: "0002", frequencyRank: 1872 }
      ,{ traditional: "妨", simplified: "妨", pinyin: "fáng", definition: "interfere with, impede, obstruct", radicals: "女", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0922", frequencyRank: 1873 }
      ,{ traditional: "贪", simplified: "贪", pinyin: "tān", definition: "be greedy, covet; covetous", radicals: "貝", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1176", frequencyRank: 1874 }
      ,{ traditional: "挣", simplified: "挣", pinyin: "zhēng", definition: "strive, endeavor, struggle", radicals: "手", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1391", frequencyRank: 1875 }
      ,{ traditional: "汪", simplified: "汪", pinyin: "wāng", definition: "vast, extensive, deep; surname", radicals: "水", strokeCount: 7, hskLevel: null, generalStandardNumber: "0855", frequencyRank: 1876 }
      ,{ traditional: "尿", simplified: "尿", pinyin: "niào", definition: "urine; urinate", radicals: "尸", strokeCount: 7, hskLevel: null, generalStandardNumber: "0904", frequencyRank: 1877 }
      ,{ traditional: "莉", simplified: "莉", pinyin: "lì", definition: "white jasmine", radicals: "艸", strokeCount: 10, hskLevel: null, generalStandardNumber: "1825", frequencyRank: 1878 }
      ,{ traditional: "悬", simplified: "悬", pinyin: "xuán", definition: "hang, suspend, hoist; be hung", radicals: "心", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2264", frequencyRank: 1879 }
      ,{ traditional: "唇", simplified: "唇", pinyin: "chún", definition: "lips", radicals: "口", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1861", frequencyRank: 1880 }
      ,{ traditional: "翰", simplified: "翰", pinyin: "hàn", definition: "writing brush, pen, pencil", radicals: "羽", strokeCount: 16, hskLevel: null, generalStandardNumber: "3328", frequencyRank: 1881 }
      ,{ traditional: "仓", simplified: "仓", pinyin: "cāng", definition: "granary; berth; sea", radicals: "人", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0149", frequencyRank: 1882 }
      ,{ traditional: "轨", simplified: "轨", pinyin: "guǐ", definition: "track, rut, path", radicals: "車", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0404", frequencyRank: 1883 }
      ,{ traditional: "枚", simplified: "枚", pinyin: "méi", definition: "stalk of shrub, trunk of tree", radicals: "木", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1023", frequencyRank: 1884 }
      ,{ traditional: "盐", simplified: "盐", pinyin: "yán", definition: "salt", radicals: "皿", strokeCount: 10, hskLevel: 4, generalStandardNumber: "1790", frequencyRank: 1885 }
      ,{ traditional: "览", simplified: "览", pinyin: "lǎn", definition: "look at, inspect; perceive", radicals: "見", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1472", frequencyRank: 1886 }
      ,{ traditional: "傅", simplified: "傅", pinyin: "fù", definition: "tutor, teacher; assist; surname", radicals: "人", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2691", frequencyRank: 1887 }
      ,{ traditional: "帅", simplified: "帅", pinyin: "shuài", definition: "commander, commander-in-chief", radicals: "巾", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0233", frequencyRank: 1888 }
      ,{ traditional: "庙", simplified: "庙", pinyin: "miào", definition: "temple, shrine; imperial court", radicals: "广", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1210", frequencyRank: 1889 }
      ,{ traditional: "芬", simplified: "芬", pinyin: "fēn", definition: "fragrance, aroma; perfume", radicals: "艸", strokeCount: 7, hskLevel: null, generalStandardNumber: "0668", frequencyRank: 1890 }
      ,{ traditional: "屏", simplified: "屏", pinyin: "píng", definition: "folding screen, shield", radicals: "尸", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1724", frequencyRank: 1891 }
      ,{ traditional: "寺", simplified: "寺", pinyin: "sì", definition: "court, office; temple, monastery", radicals: "寸", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0355", frequencyRank: 1892 }
      ,{ traditional: "胖", simplified: "胖", pinyin: "pàng", definition: "fat, obese; fatty", radicals: "肉", strokeCount: 9, hskLevel: 3, generalStandardNumber: "1596", frequencyRank: 1893 }
      ,{ traditional: "璃", simplified: "璃", pinyin: "lí", definition: "glass", radicals: "玉", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3051", frequencyRank: 1894 }
      ,{ traditional: "愚", simplified: "愚", pinyin: "yú", definition: "stupid, doltish, foolish", radicals: "心", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2905", frequencyRank: 1895 }
      ,{ traditional: "滴", simplified: "滴", pinyin: "dī", definition: "drip; drop of water", radicals: "水", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3165", frequencyRank: 1896 }
      ,{ traditional: "疏", simplified: "疏", pinyin: "shū", definition: "neglect; careless, lax", radicals: "疋", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2804", frequencyRank: 1897 }
      ,{ traditional: "萧", simplified: "萧", pinyin: "xiāo", definition: "common artemisia; dejected", radicals: "艸", strokeCount: 11, hskLevel: null, generalStandardNumber: "2216", frequencyRank: 1898 }
      ,{ traditional: "姿", simplified: "姿", pinyin: "zī", definition: "style, posture, manner, appearance", radicals: "女", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1630", frequencyRank: 1899 }
      ,{ traditional: "颤", simplified: "颤", pinyin: "chàn", definition: "shiver, tremble; trembling", radicals: "頁", strokeCount: 19, hskLevel: 6, generalStandardNumber: "3465", frequencyRank: 1900 }
      ,{ traditional: "丑", simplified: "丑", pinyin: "chǒu", definition: "clown, comedian; 2nd terrestrial branch", radicals: "一", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0177", frequencyRank: 1901 }
      ,{ traditional: "劣", simplified: "劣", pinyin: "liè", definition: "bad, inferior; slightly", radicals: "力", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0416", frequencyRank: 1902 }
      ,{ traditional: "柯", simplified: "柯", pinyin: "kē", definition: "axe-handle; stalk, bough; surname", radicals: "木", strokeCount: 9, hskLevel: null, generalStandardNumber: "4141", frequencyRank: 1903 }
      ,{ traditional: "寸", simplified: "寸", pinyin: "cùn", definition: "inch; small, tiny; KangXi radical 41", radicals: "寸", strokeCount: 3, hskLevel: 6, generalStandardNumber: "0031", frequencyRank: 1904 }
      ,{ traditional: "扔", simplified: "扔", pinyin: "rēng", definition: "throw, hurl; throw away, cast", radicals: "手", strokeCount: 5, hskLevel: 4, generalStandardNumber: "0203", frequencyRank: 1905 }
      ,{ traditional: "盯", simplified: "盯", pinyin: "dīng", definition: "rivet gaze upon, keep eyes on", radicals: "目", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0715", frequencyRank: 1906 }
      ,{ traditional: "辱", simplified: "辱", pinyin: "rǔ", definition: "humiliate, insult, abuse", radicals: "辰", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1860", frequencyRank: 1907 }
      ,{ traditional: "匹", simplified: "匹", pinyin: "pǐ", definition: "bolt of cloth; counter for horses", radicals: "匸", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0099", frequencyRank: 1908 }
      ,{ traditional: "俱", simplified: "俱", pinyin: "jù", definition: "all, together; accompany", radicals: "人", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1962", frequencyRank: 1909 }
      ,{ traditional: "辨", simplified: "辨", pinyin: "biàn", definition: "distinguish, discriminate", radicals: "辛", strokeCount: 16, hskLevel: 6, generalStandardNumber: "3371", frequencyRank: 1910 }
      ,{ traditional: "饿", simplified: "饿", pinyin: "è", definition: "hungry; greedy for; hunger", radicals: "食", strokeCount: 10, hskLevel: 3, generalStandardNumber: "2012", frequencyRank: 1911 }
      ,{ traditional: "蜂", simplified: "蜂", pinyin: "fēng", definition: "bee, wasp, hornet", radicals: "虫", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2925", frequencyRank: 1912 }
      ,{ traditional: "哦", simplified: "哦", pinyin: "ó", definition: "oh? really? is that so?", radicals: "口", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1908", frequencyRank: 1913 }
      ,{ traditional: "腔", simplified: "腔", pinyin: "qiāng", definition: "chest cavity; hollow in body", radicals: "肉", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2715", frequencyRank: 1914 }
      ,{ traditional: "郁", simplified: "郁", pinyin: "yù", definition: "sweet smelling, rich in aroma; (Cant.) to move, hit", radicals: "邑", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1043", frequencyRank: 1915 }
      ,{ traditional: "溃", simplified: "溃", pinyin: "kuì", definition: "flooding river; militarily defeat", radicals: "水", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2759", frequencyRank: 1916 }
      ,{ traditional: "谨", simplified: "谨", pinyin: "jǐn", definition: "prudent, cautious; attentive", radicals: "言", strokeCount: 13, hskLevel: 5, generalStandardNumber: "3030", frequencyRank: 1917 }
      ,{ traditional: "糟", simplified: "糟", pinyin: "zāo", definition: "sediment, dregs; pickle", radicals: "米", strokeCount: 17, hskLevel: 5, generalStandardNumber: "3428", frequencyRank: 1918 }
      ,{ traditional: "葛", simplified: "葛", pinyin: "gé", definition: "edible bean; surname", radicals: "艸", strokeCount: 12, hskLevel: null, generalStandardNumber: "2550", frequencyRank: 1919 }
      ,{ traditional: "苗", simplified: "苗", pinyin: "miáo", definition: "sprouts; Miao nationality", radicals: "艸", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1005", frequencyRank: 1920 }
      ,{ traditional: "肠", simplified: "肠", pinyin: "cháng", definition: "intestines; emotions; sausage", radicals: "肉", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0807", frequencyRank: 1921 }
      ,{ traditional: "忌", simplified: "忌", pinyin: "jì", definition: "jealous, envious; fear", radicals: "心", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0910", frequencyRank: 1922 }
      ,{ traditional: "溜", simplified: "溜", pinyin: "liū", definition: "slide, glide, slip; slippery", radicals: "水", strokeCount: 13, hskLevel: 6, generalStandardNumber: "3013", frequencyRank: 1923 }
      ,{ traditional: "鸿", simplified: "鸿", pinyin: "hóng", definition: "species of wild swan; vast", radicals: "鳥", strokeCount: 11, hskLevel: null, generalStandardNumber: "2412", frequencyRank: 1924 }
      ,{ traditional: "爵", simplified: "爵", pinyin: "jué", definition: "feudal title or rank", radicals: "爪", strokeCount: 17, hskLevel: null, generalStandardNumber: "3421", frequencyRank: 1925 }
      ,{ traditional: "鹏", simplified: "鹏", pinyin: "péng", definition: "fabulous bird of enormous size", radicals: "鳥", strokeCount: 13, hskLevel: null, generalStandardNumber: "2974", frequencyRank: 1926 }
      ,{ traditional: "鹰", simplified: "鹰", pinyin: "yīng", definition: "falcon; Accipiter species (various)", radicals: "鳥", strokeCount: 18, hskLevel: null, generalStandardNumber: "3447", frequencyRank: 1927 }
      ,{ traditional: "笼", simplified: "笼", pinyin: "lóng", definition: "cage; cage-like basket", radicals: "竹", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2318", frequencyRank: 1928 }
      ,{ traditional: "丘", simplified: "丘", pinyin: "qiū", definition: "hill; elder; empty; a name", radicals: "一", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0268", frequencyRank: 1929 }
      ,{ traditional: "桂", simplified: "桂", pinyin: "guì", definition: "cassia or cinnamon", radicals: "木", strokeCount: 10, hskLevel: null, generalStandardNumber: "1835", frequencyRank: 1930 }
      ,{ traditional: "滋", simplified: "滋", pinyin: "zī", definition: "grow, multiply, increase; thrive", radicals: "水", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2767", frequencyRank: 1931 }
      ,{ traditional: "聊", simplified: "聊", pinyin: "liáo", definition: "somewhat, slightly, at least", radicals: "耳", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2196", frequencyRank: 1932 }
      ,{ traditional: "挡", simplified: "挡", pinyin: "dǎng", definition: "obstruct, impede; stop; resist", radicals: "手", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1379", frequencyRank: 1933 }
      ,{ traditional: "纲", simplified: "纲", pinyin: "gāng", definition: "heavy rope, hawser; main points", radicals: "糸", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0933", frequencyRank: 1934 }
      ,{ traditional: "肌", simplified: "肌", pinyin: "jī", definition: "muscle tissue; meat on bones", radicals: "肉", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0495", frequencyRank: 1935 }
      ,{ traditional: "茨", simplified: "茨", pinyin: "cí", definition: "thatching; caltrop, Tribulus terrestris", radicals: "艸", strokeCount: 9, hskLevel: null, generalStandardNumber: "4128", frequencyRank: 1936 }
      ,{ traditional: "壳", simplified: "壳", pinyin: "ké", definition: "casing, shell, husk", radicals: "士", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0650", frequencyRank: 1937 }
      ,{ traditional: "痕", simplified: "痕", pinyin: "hén", definition: "scar; mark; trace", radicals: "疒", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2383", frequencyRank: 1938 }
      ,{ traditional: "碗", simplified: "碗", pinyin: "wǎn", definition: "bowl, small dish", radicals: "石", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2881", frequencyRank: 1939 }
      ,{ traditional: "穴", simplified: "穴", pinyin: "xué", definition: "cave, den, hole; KangXi radical 116", radicals: "穴", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0313", frequencyRank: 1940 }
      ,{ traditional: "膀", simplified: "膀", pinyin: "bǎng", definition: "upper arm; shoulder; wing", radicals: "肉", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3134", frequencyRank: 1941 }
      ,{ traditional: "卓", simplified: "卓", pinyin: "zhuō", definition: "profound, brilliant, lofty", radicals: "十", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1070", frequencyRank: 1942 }
      ,{ traditional: "贤", simplified: "贤", pinyin: "xián", definition: "virtuous, worthy, good; able", radicals: "貝", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1074", frequencyRank: 1943 }
      ,{ traditional: "卧", simplified: "卧", pinyin: "wò", definition: "lie down; crouch", radicals: "臣", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1037", frequencyRank: 1944 }
      ,{ traditional: "膜", simplified: "膜", pinyin: "mó", definition: "membrane; to kneel and worship", radicals: "肉", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3132", frequencyRank: 1945 }
      ,{ traditional: "毅", simplified: "毅", pinyin: "yì", definition: "resolute, decisive, firm, persist", radicals: "殳", strokeCount: 15, hskLevel: 6, generalStandardNumber: "3286", frequencyRank: 1946 }
      ,{ traditional: "锦", simplified: "锦", pinyin: "jǐn", definition: "brocade, tapestry; embroidered", radicals: "金", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2942", frequencyRank: 1947 }
      ,{ traditional: "欠", simplified: "欠", pinyin: "qiàn", definition: "owe, lack, be deficient; KangXi radical number 76", radicals: "欠", strokeCount: 4, hskLevel: 5, generalStandardNumber: "0153", frequencyRank: 1948 }
      ,{ traditional: "哩", simplified: "哩", pinyin: "lī", definition: "mile", radicals: "口", strokeCount: 10, hskLevel: null, generalStandardNumber: "1905", frequencyRank: 1949 }
      ,{ traditional: "函", simplified: "函", pinyin: "hán", definition: "correspondence; a case; a box", radicals: "凵", strokeCount: 8, hskLevel: null, generalStandardNumber: "1322", frequencyRank: 1950 }
      ,{ traditional: "茫", simplified: "茫", pinyin: "máng", definition: "vast, boundless, widespread", radicals: "艸", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1413", frequencyRank: 1951 }
      ,{ traditional: "昂", simplified: "昂", pinyin: "áng", definition: "rise, raise; proud, bold; upright", radicals: "日", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1090", frequencyRank: 1952 }
      ,{ traditional: "薛", simplified: "薛", pinyin: "xuē", definition: "kind of marsh grass; feudal state", radicals: "艸", strokeCount: 16, hskLevel: null, generalStandardNumber: "3322", frequencyRank: 1953 }
      ,{ traditional: "皱", simplified: "皱", pinyin: "zhòu", definition: "wrinkles, creases, folds", radicals: "皮", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2011", frequencyRank: 1954 }
      ,{ traditional: "夸", simplified: "夸", pinyin: "kuā", definition: "extravagant, luxurious; handsome", radicals: "大", strokeCount: 6, hskLevel: 5, generalStandardNumber: "0395", frequencyRank: 1955 }
      ,{ traditional: "豫", simplified: "豫", pinyin: "yù", definition: "relaxed, comfortable, at ease", radicals: "豕", strokeCount: 15, hskLevel: 5, generalStandardNumber: "3313", frequencyRank: 1956 }
      ,{ traditional: "胃", simplified: "胃", pinyin: "wèi", definition: "stomach; gizzard of fowl", radicals: "肉", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1494", frequencyRank: 1957 }
      ,{ traditional: "舌", simplified: "舌", pinyin: "shé", definition: "tongue; clapper of bell; KangXi radical 135", radicals: "舌", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0449", frequencyRank: 1958 }
      ,{ traditional: "剥", simplified: "剥", pinyin: "bō", definition: "peel", radicals: "刀", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2129", frequencyRank: 1959 }
      ,{ traditional: "傲", simplified: "傲", pinyin: "ào", definition: "proud, haughty, overbearing", radicals: "人", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2690", frequencyRank: 1960 }
      ,{ traditional: "拾", simplified: "拾", pinyin: "shí", definition: "pick up, collect, tidy up; accounting form of the numeral ten", radicals: "手", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1386", frequencyRank: 1961 }
      ,{ traditional: "窝", simplified: "窝", pinyin: "wō", definition: "nest; cave, den; hiding place", radicals: "穴", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2784", frequencyRank: 1962 }
      ,{ traditional: "睁", simplified: "睁", pinyin: "zhēng", definition: "open eyes; stare", radicals: "目", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2261", frequencyRank: 1963 }
      ,{ traditional: "携", simplified: "携", pinyin: "xié", definition: "lead by hand, take with; carry", radicals: "手", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2839", frequencyRank: 1964 }
      ,{ traditional: "陵", simplified: "陵", pinyin: "líng", definition: "hill, mound; mausoleum", radicals: "阜", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2135", frequencyRank: 1965 }
      ,{ traditional: "哼", simplified: "哼", pinyin: "hēng", definition: "hum; sing softly; groan, moan; (Cant.) an interjecting indicating disapproval", radicals: "口", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1913", frequencyRank: 1966 }
      ,{ traditional: "棉", simplified: "棉", pinyin: "mián", definition: "cotton; cotton padded", radicals: "木", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2574", frequencyRank: 1967 }
      ,{ traditional: "晴", simplified: "晴", pinyin: "qíng", definition: "clear weather, fine weather", radicals: "日", strokeCount: 12, hskLevel: 2, generalStandardNumber: "2611", frequencyRank: 1968 }
      ,{ traditional: "铃", simplified: "铃", pinyin: "líng", definition: "bell", radicals: "金", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1933", frequencyRank: 1969 }
      ,{ traditional: "填", simplified: "填", pinyin: "tián", definition: "fill in, fill up; make good", radicals: "土", strokeCount: 13, hskLevel: 4, generalStandardNumber: "2834", frequencyRank: 1970 }
      ,{ traditional: "饲", simplified: "饲", pinyin: "sì", definition: "raise animals; feed; nourish", radicals: "食", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1203", frequencyRank: 1971 }
      ,{ traditional: "渴", simplified: "渴", pinyin: "kě", definition: "thirsty, parched; yearn, pine", radicals: "水", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2758", frequencyRank: 1972 }
      ,{ traditional: "吻", simplified: "吻", pinyin: "wěn", definition: "kiss; the lips; coinciding", radicals: "口", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0743", frequencyRank: 1973 }
      ,{ traditional: "扮", simplified: "扮", pinyin: "bàn", definition: "dress up; dress up as", radicals: "手", strokeCount: 7, hskLevel: 4, generalStandardNumber: "0636", frequencyRank: 1974 }
      ,{ traditional: "逆", simplified: "逆", pinyin: "nì", definition: "disobey, rebel; rebel, traitor", radicals: "辵", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1652", frequencyRank: 1975 }
      ,{ traditional: "脆", simplified: "脆", pinyin: "cuì", definition: "crisp; fragile, frail; brittle", radicals: "肉", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1994", frequencyRank: 1976 }
      ,{ traditional: "喘", simplified: "喘", pinyin: "chuǎn", definition: "pant, gasp, breathe heavily", radicals: "口", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2642", frequencyRank: 1977 }
      ,{ traditional: "罩", simplified: "罩", pinyin: "zhào", definition: "basket for catching fish; cover", radicals: "网", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2933", frequencyRank: 1978 }
      ,{ traditional: "卜", simplified: "卜", pinyin: "bo", definition: "fortune telling; prophesy", radicals: "卜", strokeCount: 2, hskLevel: null, generalStandardNumber: "0008", frequencyRank: 1979 }
      ,{ traditional: "炉", simplified: "炉", pinyin: "lú", definition: "fireplace, stove, oven, furnace", radicals: "火", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1238", frequencyRank: 1980 }
      ,{ traditional: "柴", simplified: "柴", pinyin: "chái", definition: "firewood, faggots, fuel", radicals: "木", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1880", frequencyRank: 1981 }
      ,{ traditional: "愉", simplified: "愉", pinyin: "yú", definition: "pleasant, delightful; please", radicals: "心", strokeCount: 12, hskLevel: 4, generalStandardNumber: "2777", frequencyRank: 1982 }
      ,{ traditional: "绳", simplified: "绳", pinyin: "shéng", definition: "rope, string, cord; control", radicals: "糸", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2491", frequencyRank: 1983 }
      ,{ traditional: "胎", simplified: "胎", pinyin: "tāi", definition: "unborn child, embryo, fetus", radicals: "肉", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1598", frequencyRank: 1984 }
      ,{ traditional: "蓄", simplified: "蓄", pinyin: "xù", definition: "store, save, hoard, gather", radicals: "艸", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2856", frequencyRank: 1985 }
      ,{ traditional: "眠", simplified: "眠", pinyin: "mián", definition: "close eyes, sleep; hibernate", radicals: "目", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1888", frequencyRank: 1986 }
      ,{ traditional: "竭", simplified: "竭", pinyin: "jié", definition: "put forth great effort; exhaust", radicals: "立", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3150", frequencyRank: 1987 }
      ,{ traditional: "喂", simplified: "喂", pinyin: "wèi", definition: "interjection to call attention", radicals: "口", strokeCount: 12, hskLevel: 1, generalStandardNumber: "2641", frequencyRank: 1988 }
      ,{ traditional: "傻", simplified: "傻", pinyin: "shǎ", definition: "foolish, silly, stupid; an imbecile", radicals: "人", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2960", frequencyRank: 1989 }
      ,{ traditional: "慕", simplified: "慕", pinyin: "mù", definition: "long for, desire; admire", radicals: "心", strokeCount: 14, hskLevel: 4, generalStandardNumber: "3066", frequencyRank: 1990 }
      ,{ traditional: "浑", simplified: "浑", pinyin: "hún", definition: "muddy, turbid; blend, merge, mix", radicals: "水", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1681", frequencyRank: 1991 }
      ,{ traditional: "奸", simplified: "奸", pinyin: "jiān", definition: "crafty, villainous, false", radicals: "女", strokeCount: 6, hskLevel: null, generalStandardNumber: "0577", frequencyRank: 1992 }
      ,{ traditional: "扇", simplified: "扇", pinyin: "shàn", definition: "fan; door panel", radicals: "戶", strokeCount: 10, hskLevel: 5, generalStandardNumber: "2113", frequencyRank: 1993 }
      ,{ traditional: "柜", simplified: "柜", pinyin: "guì", definition: "cabinet, cupboard; shop counter", radicals: "木", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1022", frequencyRank: 1994 }
      ,{ traditional: "悦", simplified: "悦", pinyin: "yuè", definition: "pleased, contented, gratified", radicals: "心", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2096", frequencyRank: 1995 }
      ,{ traditional: "拦", simplified: "拦", pinyin: "lán", definition: "obstruct, impede, bar, hinder", radicals: "手", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0982", frequencyRank: 1996 }
      ,{ traditional: "诞", simplified: "诞", pinyin: "dàn", definition: "bear children, give birth; birth", radicals: "言", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1297", frequencyRank: 1997 }
      ,{ traditional: "饱", simplified: "饱", pinyin: "bǎo", definition: "full, satisfied, well fed", radicals: "食", strokeCount: 8, hskLevel: 3, generalStandardNumber: "1202", frequencyRank: 1998 }
      ,{ traditional: "乾", simplified: "乾", pinyin: "gān", definition: "dry; first hexagram; warming principle of the sun, penetrating and fertilizing, heavenly generative principle (male)", radicals: "乙", strokeCount: 11, hskLevel: null, generalStandardNumber: "2215", frequencyRank: 1999 }
      ,{ traditional: "泡", simplified: "泡", pinyin: "pào", definition: "bubbles, suds; blister; soak", radicals: "水", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1251", frequencyRank: 2000 }
      ,{ traditional: "贼", simplified: "贼", pinyin: "zéi", definition: "thief, traitor; kill", radicals: "貝", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1924", frequencyRank: 2001 }
      ,{ traditional: "亭", simplified: "亭", pinyin: "tíng", definition: "pavilion; erect", radicals: "亠", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1620", frequencyRank: 2002 }
      ,{ traditional: "夕", simplified: "夕", pinyin: "xī", definition: "evening, night, dusk; slanted", radicals: "夕", strokeCount: 3, hskLevel: 5, generalStandardNumber: "0046", frequencyRank: 2003 }
      ,{ traditional: "爹", simplified: "爹", pinyin: "diē", definition: "father, daddy", radicals: "父", strokeCount: 10, hskLevel: null, generalStandardNumber: "1985", frequencyRank: 2004 }
      ,{ traditional: "酬", simplified: "酬", pinyin: "chóu", definition: "toast; reward, recompense", radicals: "酉", strokeCount: 13, hskLevel: 6, generalStandardNumber: "2874", frequencyRank: 2005 }
      ,{ traditional: "儒", simplified: "儒", pinyin: "rú", definition: "Confucian scholar", radicals: "人", strokeCount: 16, hskLevel: 6, generalStandardNumber: "3361", frequencyRank: 2006 }
      ,{ traditional: "姻", simplified: "姻", pinyin: "yīn", definition: "relatives by marriage", radicals: "女", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1738", frequencyRank: 2007 }
      ,{ traditional: "卵", simplified: "卵", pinyin: "luǎn", definition: "egg; ovum; roe; spawn", radicals: "卩", strokeCount: 7, hskLevel: null, generalStandardNumber: "0818", frequencyRank: 2008 }
      ,{ traditional: "氛", simplified: "氛", pinyin: "fēn", definition: "gas, vapor, air", radicals: "气", strokeCount: 8, hskLevel: 5, generalStandardNumber: "1124", frequencyRank: 2009 }
      ,{ traditional: "泄", simplified: "泄", pinyin: "xiè", definition: "leak; vent; flow; reveal", radicals: "水", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1242", frequencyRank: 2010 }
      ,{ traditional: "杆", simplified: "杆", pinyin: "gān", definition: "pole; shaft of spear", radicals: "木", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0678", frequencyRank: 2011 }
      ,{ traditional: "挨", simplified: "挨", pinyin: "āi", definition: "near, close by, next to, towards, against; to wait; to lean on", radicals: "手", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1815", frequencyRank: 2012 }
      ,{ traditional: "僧", simplified: "僧", pinyin: "sēng", definition: "Buddhist priest, monk; san of Sanskrit sangha", radicals: "人", strokeCount: 14, hskLevel: null, generalStandardNumber: "3127", frequencyRank: 2013 }
      ,{ traditional: "蜜", simplified: "蜜", pinyin: "mì", definition: "honey; sweet; nectar", radicals: "虫", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3175", frequencyRank: 2014 }
      ,{ traditional: "吟", simplified: "吟", pinyin: "yín", definition: "sing, hum; recite; type of poetry", radicals: "口", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0740", frequencyRank: 2015 }
      ,{ traditional: "猩", simplified: "猩", pinyin: "xīng", definition: "species of orangutan", radicals: "犬", strokeCount: 12, hskLevel: null, generalStandardNumber: "2718", frequencyRank: 2016 }
      ,{ traditional: "遂", simplified: "遂", pinyin: "suì", definition: "comply with, follow along; thereupon", radicals: "辵", strokeCount: 12, hskLevel: null, generalStandardNumber: "2746", frequencyRank: 2017 }
      ,{ traditional: "狭", simplified: "狭", pinyin: "xiá", definition: "narrow, limited; narrow-minded", radicals: "犬", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1600", frequencyRank: 2018 }
      ,{ traditional: "肖", simplified: "肖", pinyin: "xiào", definition: "look like, resemble, be like", radicals: "肉", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0713", frequencyRank: 2019 }
      ,{ traditional: "甜", simplified: "甜", pinyin: "tián", definition: "sweet, sweetness", radicals: "甘", strokeCount: 11, hskLevel: 3, generalStandardNumber: "2311", frequencyRank: 2020 }
      ,{ traditional: "霞", simplified: "霞", pinyin: "xiá", definition: "rosy clouds", radicals: "雨", strokeCount: 17, hskLevel: 6, generalStandardNumber: "3400", frequencyRank: 2021 }
      ,{ traditional: "驳", simplified: "驳", pinyin: "bó", definition: "varicolored, variegated; mixed", radicals: "馬", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0935", frequencyRank: 2022 }
      ,{ traditional: "裕", simplified: "裕", pinyin: "yù", definition: "abundant, rich, plentiful", radicals: "衣", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2790", frequencyRank: 2023 }
      ,{ traditional: "顽", simplified: "顽", pinyin: "wán", definition: "obstinate, stubborn; recalcitrant", radicals: "頁", strokeCount: 10, hskLevel: 6, generalStandardNumber: "1778", frequencyRank: 2024 }
      ,{ traditional: "於", simplified: "於", pinyin: "yú", definition: "in, at, on; interjection alas!", radicals: "方", strokeCount: 8, hskLevel: null, generalStandardNumber: "6716", frequencyRank: 2025 }
      ,{ traditional: "摘", simplified: "摘", pinyin: "zhāi", definition: "pluck, pick; select; specify", radicals: "手", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3062", frequencyRank: 2026 }
      ,{ traditional: "矮", simplified: "矮", pinyin: "ǎi", definition: "short, dwarf; low", radicals: "矢", strokeCount: 13, hskLevel: 3, generalStandardNumber: "2946", frequencyRank: 2027 }
      ,{ traditional: "秒", simplified: "秒", pinyin: "miǎo", definition: "beard of grain or corn; a second", radicals: "禾", strokeCount: 9, hskLevel: 4, generalStandardNumber: "1547", frequencyRank: 2028 }
      ,{ traditional: "卿", simplified: "卿", pinyin: "qīng", definition: "noble, high officer", radicals: "卩", strokeCount: 10, hskLevel: null, generalStandardNumber: "2006", frequencyRank: 2029 }
      ,{ traditional: "畜", simplified: "畜", pinyin: "chù", definition: "livestock, domestic animals", radicals: "田", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2047", frequencyRank: 2030 }
      ,{ traditional: "咽", simplified: "咽", pinyin: "yàn", definition: "throat; pharynx", radicals: "口", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1504", frequencyRank: 2031 }
      ,{ traditional: "披", simplified: "披", pinyin: "pī", definition: "wear; split; crack", radicals: "手", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0990", frequencyRank: 2032 }
      ,{ traditional: "辅", simplified: "辅", pinyin: "fǔ", definition: "cheek bone; protective; assist", radicals: "車", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2250", frequencyRank: 2033 }
      ,{ traditional: "勾", simplified: "勾", pinyin: "gōu", definition: "hook, join, connect; entice", radicals: "勹", strokeCount: 4, hskLevel: 6, generalStandardNumber: "0158", frequencyRank: 2034 }
      ,{ traditional: "盆", simplified: "盆", pinyin: "pén", definition: "basin, tub, pot, bowl", radicals: "皿", strokeCount: 9, hskLevel: 5, generalStandardNumber: "1590", frequencyRank: 2035 }
      ,{ traditional: "疆", simplified: "疆", pinyin: "jiāng", definition: "boundary, border, frontier", radicals: "田", strokeCount: 19, hskLevel: 6, generalStandardNumber: "3472", frequencyRank: 2036 }
      ,{ traditional: "赌", simplified: "赌", pinyin: "dǔ", definition: "bet, gamble, wager; compete", radicals: "貝", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2651", frequencyRank: 2037 }
      ,{ traditional: "塑", simplified: "塑", pinyin: "sù", definition: "model in clay, sculpt; plastics", radicals: "土", strokeCount: 13, hskLevel: 4, generalStandardNumber: "3001", frequencyRank: 2038 }
      ,{ traditional: "畏", simplified: "畏", pinyin: "wèi", definition: "fear, dread, awe, reverence", radicals: "田", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1492", frequencyRank: 2039 }
      ,{ traditional: "吵", simplified: "吵", pinyin: "chǎo", definition: "argue, dispute; disturb, annoy", radicals: "口", strokeCount: 7, hskLevel: 5, generalStandardNumber: "0735", frequencyRank: 2040 }
      ,{ traditional: "囊", simplified: "囊", pinyin: "náng", definition: "bag, purse, sack; put in bag", radicals: "口", strokeCount: 22, hskLevel: null, generalStandardNumber: "3496", frequencyRank: 2041 }
      ,{ traditional: "嗯", simplified: "嗯", pinyin: "ń", definition: "final particle", radicals: "口", strokeCount: 13, hskLevel: 5, generalStandardNumber: "5467", frequencyRank: 2042 }
      ,{ traditional: "泊", simplified: "泊", pinyin: "pō", definition: "anchor vessel; lie at anchor", radicals: "水", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1249", frequencyRank: 2043 }
      ,{ traditional: "肺", simplified: "肺", pinyin: "fèi", definition: "lungs", radicals: "肉", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1181", frequencyRank: 2044 }
      ,{ traditional: "骤", simplified: "骤", pinyin: "zhòu", definition: "procedure; gallop; sudden(ly)", radicals: "馬", strokeCount: 17, hskLevel: 5, generalStandardNumber: "3436", frequencyRank: 2045 }
      ,{ traditional: "缠", simplified: "缠", pinyin: "chán", definition: "wrap, wind around; tie, bind", radicals: "糸", strokeCount: 13, hskLevel: 6, generalStandardNumber: "3046", frequencyRank: 2046 }
      ,{ traditional: "冈", simplified: "冈", pinyin: "gāng", definition: "ridge or crest of hill", radicals: "冂", strokeCount: 4, hskLevel: null, generalStandardNumber: "0115", frequencyRank: 2047 }
      ,{ traditional: "羞", simplified: "羞", pinyin: "xiū", definition: "disgrace, shame; ashamed; shy", radicals: "羊", strokeCount: 10, hskLevel: 4, generalStandardNumber: "2049", frequencyRank: 2048 }
      ,{ traditional: "瞪", simplified: "瞪", pinyin: "dèng", definition: "stare at", radicals: "目", strokeCount: 17, hskLevel: 6, generalStandardNumber: "3406", frequencyRank: 2049 }
      ,{ traditional: "吊", simplified: "吊", pinyin: "diào", definition: "condole, mourn, pity; hang", radicals: "口", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0428", frequencyRank: 2050 }
      ,{ traditional: "贾", simplified: "贾", pinyin: "jiǎ", definition: "surname; merchant; buy, trade", radicals: "貝", strokeCount: 10, hskLevel: null, generalStandardNumber: "1856", frequencyRank: 2051 }
      ,{ traditional: "漏", simplified: "漏", pinyin: "lòu", definition: "leak, drip; funnel; hour glass", radicals: "水", strokeCount: 14, hskLevel: 5, generalStandardNumber: "3168", frequencyRank: 2052 }
      ,{ traditional: "斑", simplified: "斑", pinyin: "bān", definition: "mottled, striped, freckle", radicals: "文", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2505", frequencyRank: 2053 }
      ,{ traditional: "涛", simplified: "涛", pinyin: "tāo", definition: "large waves", radicals: "水", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2065", frequencyRank: 2054 }
      ,{ traditional: "悠", simplified: "悠", pinyin: "yōu", definition: "long, far, remote, distant; liesurely", radicals: "心", strokeCount: 11, hskLevel: 5, generalStandardNumber: "2326", frequencyRank: 2055 }
      ,{ traditional: "鹿", simplified: "鹿", pinyin: "lù", definition: "deer; surname; KangXi radical 198", radicals: "鹿", strokeCount: 11, hskLevel: null, generalStandardNumber: "2387", frequencyRank: 2056 }
      ,{ traditional: "俘", simplified: "俘", pinyin: "fú", definition: "prisoner of war; take as prisoner", radicals: "人", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1569", frequencyRank: 2057 }
      ,{ traditional: "锡", simplified: "锡", pinyin: "xī", definition: "tin, stannum; bestow, confer", radicals: "金", strokeCount: 13, hskLevel: null, generalStandardNumber: "2938", frequencyRank: 2058 }
      ,{ traditional: "卑", simplified: "卑", pinyin: "bēi", definition: "humble, low, inferior; despise", radicals: "十", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1154", frequencyRank: 2059 }
      ,{ traditional: "葬", simplified: "葬", pinyin: "zàng", definition: "bury, inter", radicals: "艸", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2548", frequencyRank: 2060 }
      ,{ traditional: "铭", simplified: "铭", pinyin: "míng", definition: "inscribe, engrave", radicals: "金", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2307", frequencyRank: 2061 }
      ,{ traditional: "滩", simplified: "滩", pinyin: "tān", definition: "bank, a sandbar, shoal; rapids", radicals: "水", strokeCount: 13, hskLevel: 5, generalStandardNumber: "3022", frequencyRank: 2062 }
      ,{ traditional: "嫁", simplified: "嫁", pinyin: "jià", definition: "to marry, give a daughter in marriage", radicals: "女", strokeCount: 13, hskLevel: 5, generalStandardNumber: "3042", frequencyRank: 2063 }
      ,{ traditional: "催", simplified: "催", pinyin: "cuī", definition: "press, urge", radicals: "人", strokeCount: 13, hskLevel: 5, generalStandardNumber: "2959", frequencyRank: 2064 }
      ,{ traditional: "璇", simplified: "璇", pinyin: "xuán", definition: "beautiful jade; star", radicals: "玉", strokeCount: 15, hskLevel: null, generalStandardNumber: "5857", frequencyRank: 2065 }
      ,{ traditional: "翅", simplified: "翅", pinyin: "chì", definition: "wings; fin", radicals: "羽", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1859", frequencyRank: 2066 }
      ,{ traditional: "盒", simplified: "盒", pinyin: "hé", definition: "small box or case; casket", radicals: "皿", strokeCount: 11, hskLevel: 4, generalStandardNumber: "2348", frequencyRank: 2067 }
      ,{ traditional: "蛮", simplified: "蛮", pinyin: "mán", definition: "barbarians; barbarous, savage", radicals: "虫", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2727", frequencyRank: 2068 }
      ,{ traditional: "矣", simplified: "矣", pinyin: "yǐ", definition: "particle of completed action", radicals: "矢", strokeCount: 7, hskLevel: null, generalStandardNumber: "0927", frequencyRank: 2069 }
      ,{ traditional: "潘", simplified: "潘", pinyin: "pān", definition: "surname; water in which rice has been rinsed; a river that flows into the Han", radicals: "水", strokeCount: 15, hskLevel: null, generalStandardNumber: "3296", frequencyRank: 2070 }
      ,{ traditional: "歧", simplified: "歧", pinyin: "qí", definition: "fork of road; branching off", radicals: "止", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1066", frequencyRank: 2071 }
      ,{ traditional: "赐", simplified: "赐", pinyin: "cì", definition: "give, bestow favors; appoint", radicals: "貝", strokeCount: 12, hskLevel: null, generalStandardNumber: "2653", frequencyRank: 2072 }
      ,{ traditional: "鲍", simplified: "鲍", pinyin: "bào", definition: "abalone; dried fish; surname", radicals: "魚", strokeCount: 13, hskLevel: null, generalStandardNumber: "2977", frequencyRank: 2073 }
      ,{ traditional: "锅", simplified: "锅", pinyin: "guō", definition: "cooking-pot, saucepan", radicals: "金", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2662", frequencyRank: 2074 }
      ,{ traditional: "廊", simplified: "廊", pinyin: "láng", definition: "corridor, porch, veranda", radicals: "广", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2384", frequencyRank: 2075 }
      ,{ traditional: "拆", simplified: "拆", pinyin: "chāi", definition: "to break up, split apart, rip open; to destroy", radicals: "手", strokeCount: 8, hskLevel: 5, generalStandardNumber: "0972", frequencyRank: 2076 }
      ,{ traditional: "灌", simplified: "灌", pinyin: "guàn", definition: "pour; water; irrigate, flood", radicals: "水", strokeCount: 20, hskLevel: 6, generalStandardNumber: "3486", frequencyRank: 2077 }
      ,{ traditional: "勉", simplified: "勉", pinyin: "miǎn", definition: "endeavor, make effort; urge", radicals: "力", strokeCount: 9, hskLevel: 6, generalStandardNumber: "1599", frequencyRank: 2078 }
      ,{ traditional: "盲", simplified: "盲", pinyin: "máng", definition: "blind; unperceptive, shortsighted", radicals: "目", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1222", frequencyRank: 2079 }
      ,{ traditional: "宰", simplified: "宰", pinyin: "zǎi", definition: "to slaughter; to rule", radicals: "宀", strokeCount: 10, hskLevel: 6, generalStandardNumber: "2106", frequencyRank: 2080 }
      ,{ traditional: "佐", simplified: "佐", pinyin: "zuǒ", definition: "assist, aid, second; subordinate", radicals: "人", strokeCount: 7, hskLevel: null, generalStandardNumber: "0772", frequencyRank: 2081 }
      ,{ traditional: "啥", simplified: "啥", pinyin: "shà", definition: "what?", radicals: "口", strokeCount: 11, hskLevel: 6, generalStandardNumber: "2290", frequencyRank: 2082 }
      ,{ traditional: "胀", simplified: "胀", pinyin: "zhàng", definition: "swell, inflate, expand", radicals: "肉", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1184", frequencyRank: 2083 }
      ,{ traditional: "扯", simplified: "扯", pinyin: "chě", definition: "rip up, tear down; raise; haul", radicals: "手", strokeCount: 7, hskLevel: 6, generalStandardNumber: "0624", frequencyRank: 2084 }
      ,{ traditional: "禧", simplified: "禧", pinyin: "xǐ", definition: "happiness; congratulations", radicals: "示", strokeCount: 16, hskLevel: null, generalStandardNumber: "6186", frequencyRank: 2085 }
      ,{ traditional: "辽", simplified: "辽", pinyin: "liáo", definition: "distant, far", radicals: "辵", strokeCount: 5, hskLevel: 6, generalStandardNumber: "0331", frequencyRank: 2086 }
      ,{ traditional: "抹", simplified: "抹", pinyin: "mǒ", definition: "smear, apply, wipe off, erase", radicals: "手", strokeCount: 8, hskLevel: 6, generalStandardNumber: "0953", frequencyRank: 2087 }
      ,{ traditional: "筒", simplified: "筒", pinyin: "tǒng", definition: "thick piece of bamboo; pipe", radicals: "竹", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2685", frequencyRank: 2088 }
      ,{ traditional: "棋", simplified: "棋", pinyin: "qí", definition: "chess; any game similar to chess", radicals: "木", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2564", frequencyRank: 2089 }
      ,{ traditional: "裤", simplified: "裤", pinyin: "kù", definition: "trousers, pants", radicals: "衣", strokeCount: 12, hskLevel: 3, generalStandardNumber: "2791", frequencyRank: 2090 }
      ,{ traditional: "唉", simplified: "唉", pinyin: "āi", definition: "alas, exclamation of surprise or pain", radicals: "口", strokeCount: 10, hskLevel: 5, generalStandardNumber: "1916", frequencyRank: 2091 }
      ,{ traditional: "朴", simplified: "朴", pinyin: "pǔ", definition: "simple, unadorned; sincere; surname; a tree", radicals: "木", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0376", frequencyRank: 2092 }
      ,{ traditional: "咐", simplified: "咐", pinyin: "fù", definition: "instruct, order", radicals: "口", strokeCount: 8, hskLevel: 6, generalStandardNumber: "1098", frequencyRank: 2093 }
      ,{ traditional: "孕", simplified: "孕", pinyin: "yùn", definition: "be pregnant, pregnancy", radicals: "子", strokeCount: 5, hskLevel: 5, generalStandardNumber: "0338", frequencyRank: 2094 }
      ,{ traditional: "誓", simplified: "誓", pinyin: "shì", definition: "swear, pledge; oath", radicals: "言", strokeCount: 14, hskLevel: 6, generalStandardNumber: "3060", frequencyRank: 2095 }
      ,{ traditional: "喉", simplified: "喉", pinyin: "hóu", definition: "throat, gullet, larynx; guttural", radicals: "口", strokeCount: 12, hskLevel: 6, generalStandardNumber: "2643", frequencyRank: 2096 }
      ,{ traditional: "妄", simplified: "妄", pinyin: "wàng", definition: "absurd, foolish, reckless; false", radicals: "女", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0526", frequencyRank: 2097 }
      ,{ traditional: "拘", simplified: "拘", pinyin: "jū", definition: "restrain, seize, detain", radicals: "手", strokeCount: 8, hskLevel: 6, generalStandardNumber: "0976", frequencyRank: 2098 }
      ,{ traditional: "链", simplified: "链", pinyin: "liàn", definition: "chain, wire, cable; chain, shack", radicals: "金", strokeCount: 12, hskLevel: 5, generalStandardNumber: "2658", frequencyRank: 2099 }
      ,{ traditional: "驰", simplified: "驰", pinyin: "chí", definition: "go quickly or swiftly; hurry", radicals: "馬", strokeCount: 6, hskLevel: 6, generalStandardNumber: "0596", frequencyRank: 2100 }
    ];