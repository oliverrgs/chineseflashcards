const basicRadicals = [
    {
        radicalNumber: 1,
        radicalGlyph: "一",
        radicalPinyin: "yī",
        radicalMeaning: "One",
    },
    {
        radicalNumber: 2,
        radicalGlyph: "丨",
        radicalPinyin: "gǔn",
        radicalMeaning: "Line",
    },
    {
        radicalNumber: 3,
        radicalGlyph: "丶",
        radicalPinyin: "zhǔ",
        radicalMeaning: "Dot",
    },
    {
        radicalNumber: 4,
        radicalGlyph: "丿 乀 乁",
        radicalPinyin: "piě",
        radicalMeaning: "Slash"
    },
    {
        radicalNumber: 5,
        radicalGlyph: "乙 乚",
        radicalPinyin: "yǐ",
        radicalMeaning: "Second"
    },
    {
        radicalNumber: 6,
        radicalGlyph: "亅",
        radicalPinyin: "jué",
        radicalMeaning: "Hook"
    },
    {
        radicalNumber: 7,
        radicalGlyph: "二",
        radicalPinyin: "èr",
        radicalMeaning: "Two"
    },
    {
        radicalNumber: 8,
        radicalGlyph: "亠",
        radicalPinyin: "tóu",
        radicalMeaning: "Lid"
    },
    {
        radicalNumber: 9,
        radicalGlyph: "人 亻",
        radicalPinyin: "rén",
        radicalMeaning: "Person"
    },
    {
        radicalNumber: 10,
        radicalGlyph: "儿",
        radicalPinyin: "rén",
        radicalMeaning: "Legs"
    },
    {
        radicalNumber: 11,
        radicalGlyph: "入",
        radicalPinyin: "rù",
        radicalMeaning: "Enter"
    },
    {
        radicalNumber: 12,
        radicalGlyph: "八 丷",
        radicalPinyin: "bā",
        radicalMeaning: "Eight"
    },
    {
        radicalNumber: 13,
        radicalGlyph: "冂",
        radicalPinyin: "jiōng",
        radicalMeaning: "Down box"
    },
    {
        radicalNumber: 14,
        radicalGlyph: "冖",
        radicalPinyin: "mì",
        radicalMeaning: "Cover"
    },
    {
        radicalNumber: 15,
        radicalGlyph: "冫",
        radicalPinyin: "bīng",
        radicalMeaning: "Ice"
    },
    {
        radicalNumber: 16,
        radicalGlyph: "几",
        radicalPinyin: "jǐ",
        radicalMeaning: "Table"
    },
    {
        radicalNumber: 17,
        radicalGlyph: "凵",
        radicalPinyin: "qiǎn",
        radicalMeaning: "Open box"
    },
    {
        radicalNumber: 18,
        radicalGlyph: "刂 刁 刀",
        radicalPinyin: "dāo",
        radicalMeaning: "Knife"
    },
    {
        radicalNumber: 19,
        radicalGlyph: "力",
        radicalPinyin: "lì",
        radicalMeaning: "Power"
    },
    {
        radicalNumber: 20,
        radicalGlyph: "勹",
        radicalPinyin: "bāo",
        radicalMeaning: "Wrap"
    },
    {
        radicalNumber: 21,
        radicalGlyph: "匕",
        radicalPinyin: "bǐ",
        radicalMeaning: "Ladle/Dagger"
    },
    {
        radicalNumber: 22,
        radicalGlyph: "匚",
        radicalPinyin: "fāng",
        radicalMeaning: "Right open box"
    },
    {
        radicalNumber: 23,
        radicalGlyph: "匸",
        radicalPinyin: "xì",
        radicalMeaning: "Hiding enclosure"
    },
    {
        radicalNumber: 24,
        radicalGlyph: "十",
        radicalPinyin: "shí",
        radicalMeaning: "Ten"
    },
    {
        radicalNumber: 25,
        radicalGlyph: "卜",
        radicalPinyin: "bǔ",
        radicalMeaning: "Divination"
    },
    {
        radicalNumber: 26,
        radicalGlyph: "卩",
        radicalPinyin: "jié",
        radicalMeaning: "Seal/Joint"
    },
    {
        radicalNumber: 27,
        radicalGlyph: "厂",
        radicalPinyin: "hǎn",
        radicalMeaning: "Cliff/House"
    },
    {
        radicalNumber: 28,
        radicalGlyph: "厶",
        radicalPinyin: "mǒu/sī",
        radicalMeaning: "Private"
    },
    {
        radicalNumber: 29,
        radicalGlyph: "又",
        radicalPinyin: "yòu",
        radicalMeaning: "Again"
    },
    {
        radicalNumber: 30,
        radicalGlyph: "口",
        radicalPinyin: "kǒu",
        radicalMeaning: "Mouth"
    },
    {
        radicalNumber: 31,
        radicalGlyph: "囗",
        radicalPinyin: "wéi",
        radicalMeaning: "Enclosure"
    },
    {
        radicalNumber: 32,
        radicalGlyph: "土",
        radicalPinyin: "tǔ",
        radicalMeaning: "Earth"
    },
    {
        radicalNumber: 33,
        radicalGlyph: "士",
        radicalPinyin: "shì",
        radicalMeaning: "Scholar"
    },
    {
        radicalNumber: 34,
        radicalGlyph: "夂",
        radicalPinyin: "zhǐ",
        radicalMeaning: "Go"
    },
    {
        radicalNumber: 35,
        radicalGlyph: "夊",
        radicalPinyin: "suī",
        radicalMeaning: "Go slowly"
    },
    {
        radicalNumber: 36,
        radicalGlyph: "夕",
        radicalPinyin: "xī",
        radicalMeaning: "Night"
    },
    {
        radicalNumber: 37,
        radicalGlyph: "大",
        radicalPinyin: "dà",
        radicalMeaning: "Big"
    },
    {
        radicalNumber: 38,
        radicalGlyph: "女",
        radicalPinyin: "nǚ",
        radicalMeaning: "Woman"
    },
    {
        radicalNumber: 39,
        radicalGlyph: "子",
        radicalPinyin: "zǐ",
        radicalMeaning: "Child"
    },
    {
        radicalNumber: 40,
        radicalGlyph: "宀",
        radicalPinyin: "mián",
        radicalMeaning: "Roof"
    },
    {
        radicalNumber: 41,
        radicalGlyph: "寸",
        radicalPinyin: "cùn",
        radicalMeaning: "Inch"
    },
    {
        radicalNumber: 42,
        radicalGlyph: "小 ⺌ ⺍",
        radicalPinyin: "xiǎo",
        radicalMeaning: "Small"
    },
    {
        radicalNumber: 43,
        radicalGlyph: "尢",
        radicalPinyin: "wāng",
        radicalMeaning: "Lame"
    },
    {
        radicalNumber: 44,
        radicalGlyph: "尸",
        radicalPinyin: "shī",
        radicalMeaning: "Corpse"
    },
    {
        radicalNumber: 45,
        radicalGlyph: "屮",
        radicalPinyin: "chè",
        radicalMeaning: "Sprout"
    },
    {
        radicalNumber: 46,
        radicalGlyph: "山",
        radicalPinyin: "shān",
        radicalMeaning: "Mountain"
    },
    {
        radicalNumber: 47,
        radicalGlyph: "川 巛",
        radicalPinyin: "chuān",
        radicalMeaning: "River"
    },
    {
        radicalNumber: 48,
        radicalGlyph: "工",
        radicalPinyin: "gōng",
        radicalMeaning: "Work"
    },
    {
        radicalNumber: 49,
        radicalGlyph: "己",
        radicalPinyin: "jǐ",
        radicalMeaning: "Oneself"
    },
    {
        radicalNumber: 50,
        radicalGlyph: "巾",
        radicalPinyin: "jīn",
        radicalMeaning: "Towel"
    },
    {
        radicalNumber: 51,
        radicalGlyph: "干",
        radicalPinyin: "gān/gàn",
        radicalMeaning: "Dry/Do"
    },
    {
        radicalNumber: 52,
        radicalGlyph: "幺",
        radicalPinyin: "yāo",
        radicalMeaning: "Youngest"
    },
    {
        radicalNumber: 53,
        radicalGlyph: "广",
        radicalPinyin: "guǎng",
        radicalMeaning: "Shelter"
    },
    {
        radicalNumber: 54,
        radicalGlyph: "廴",
        radicalPinyin: "yǐn",
        radicalMeaning: "Stride"
    },
    {
        radicalNumber: 55,
        radicalGlyph: "廾",
        radicalPinyin: "gǒng",
        radicalMeaning: "Hands joined"
    },
    {
        radicalNumber: 56,
        radicalGlyph: "弋",
        radicalPinyin: "yì",
        radicalMeaning: "Shoot with a bow"
    },
    {
        radicalNumber: 57,
        radicalGlyph: "弓",
        radicalPinyin: "gōng",
        radicalMeaning: "Bow"
    },
    {
        radicalNumber: 58,
        radicalGlyph: "彐 彑",
        radicalPinyin: "jì",
        radicalMeaning: "Snout"
    },
    {
        radicalNumber: 59,
        radicalGlyph: "彡",
        radicalPinyin: "shān",
        radicalMeaning: "Hair"
    },
    {
        radicalNumber: 60,
        radicalGlyph: "彳",
        radicalPinyin: "chì",
        radicalMeaning: "Step"
    },
    {
        radicalNumber: 61,
        radicalGlyph: "心 忄",
        radicalPinyin: "xīn",
        radicalMeaning: "Heart"
    },
    {
        radicalNumber: 62,
        radicalGlyph: "戈",
        radicalPinyin: "gē",
        radicalMeaning: "Spear"
    },
    {
        radicalNumber: 63,
        radicalGlyph: "戶 户",
        radicalPinyin: "hù",
        radicalMeaning: "Door"
    },
    {
        radicalNumber: 64,
        radicalGlyph: "扌",
        radicalPinyin: "shǒu",
        radicalMeaning: "Hand"
    },
    {
        radicalNumber: 65,
        radicalGlyph: "支",
        radicalPinyin: "zhī",
        radicalMeaning: "Branch"
    },
    {
        radicalNumber: 66,
        radicalGlyph: "攴 攵",
        radicalPinyin: "pū",
        radicalMeaning: "Rap/Beat"
    },
    {
        radicalNumber: 67,
        radicalGlyph: "文",
        radicalPinyin: "wén",
        radicalMeaning: "Script"
    },
    {
        radicalNumber: 68,
        radicalGlyph: "斗",
        radicalPinyin: "dǒu",
        radicalMeaning: "Vessel"
    },
    {
        radicalNumber: 69,
        radicalGlyph: "斤",
        radicalPinyin: "jīn",
        radicalMeaning: "Axe"
    },
    {
        radicalNumber: 70,
        radicalGlyph: "方",
        radicalPinyin: "fāng",
        radicalMeaning: "Square"
    },
    {
        radicalNumber: 71,
        radicalGlyph: "无/旡",
        radicalPinyin: "wú/jì",
        radicalMeaning: "Not/Choke on something eaten"
    },
    {
        radicalNumber: 72,
        radicalGlyph: "日",
        radicalPinyin: "rì",
        radicalMeaning: "Sun"
    },
    {
        radicalNumber: 73,
        radicalGlyph: "曰",
        radicalPinyin: "yuē",
        radicalMeaning: "Say"
    },
    {
        radicalNumber: 74,
        radicalGlyph: "月",
        radicalPinyin: "yuè",
        radicalMeaning: "Moon"
    },
    {
        radicalNumber: 75,
        radicalGlyph: "木 朩",
        radicalPinyin: "mù",
        radicalMeaning: "Tree"
    },
    {
        radicalNumber: 76,
        radicalGlyph: "欠",
        radicalPinyin: "qiàn",
        radicalMeaning: "Lack"
    },
    {
        radicalNumber: 77,
        radicalGlyph: "止",
        radicalPinyin: "zhǐ",
        radicalMeaning: "Stop"
    },
    {
        radicalNumber: 78,
        radicalGlyph: "歹",
        radicalPinyin: "dǎi",
        radicalMeaning: "Death"
    },
    {
        radicalNumber: 79,
        radicalGlyph: "殳",
        radicalPinyin: "shū",
        radicalMeaning: "Weapon"
    },
    {
        radicalNumber: 80,
        radicalGlyph: "母",
        radicalPinyin: "mǔ",
        radicalMeaning: "Mother"
    },
    {
        radicalNumber: 81,
        radicalGlyph: "比",
        radicalPinyin: "bǐ",
        radicalMeaning: "Compare"
    },
    {
        radicalNumber: 82,
        radicalGlyph: "毛",
        radicalPinyin: "máo",
        radicalMeaning: "Fur"
    },
    {
        radicalNumber: 83,
        radicalGlyph: "氏",
        radicalPinyin: "shì",
        radicalMeaning: "Clan"
    },
    {
        radicalNumber: 84,
        radicalGlyph: "气",
        radicalPinyin: "qì",
        radicalMeaning: "Steam"
    },
    {
        radicalNumber: 85,
        radicalGlyph: "水 氵 氺",
        radicalPinyin: "shuǐ",
        radicalMeaning: "Water"
    },
    {
        radicalNumber: 86,
        radicalGlyph: "火 灬",
        radicalPinyin: "huǒ",
        radicalMeaning: "Fire"
    },
    {
        radicalNumber: 87,
        radicalGlyph: "爪 爫",
        radicalPinyin: "zhǎo/zhuǎ",
        radicalMeaning: "Claw"
    },
    {
        radicalNumber: 88,
        radicalGlyph: "父",
        radicalPinyin: "fù",
        radicalMeaning: "Father"
    },
    {
        radicalNumber: 89,
        radicalGlyph: "爻",
        radicalPinyin: "yáo",
        radicalMeaning: "Lines on a trigram"
    },
    {
        radicalNumber: 90,
        radicalGlyph: "爿",
        radicalPinyin: "pán",
        radicalMeaning: "Half of a tree trunk"
    },
    {
        radicalNumber: 91,
        radicalGlyph: "片",
        radicalPinyin: "qiáng",
        radicalMeaning: "Slice"
    },
    {
        radicalNumber: 92,
        radicalGlyph: "牙",
        radicalPinyin: "yá",
        radicalMeaning: "Tooth"
    },
    {
        radicalNumber: 93,
        radicalGlyph: "牛 牜 ⺧",
        radicalPinyin: "niú",
        radicalMeaning: "Cow"
    },
    {
        radicalNumber: 94,
        radicalGlyph: "犬 犭",
        radicalPinyin: "quǎn",
        radicalMeaning: "Dog"
    },
    {
        radicalNumber: 95,
        radicalGlyph: "玄",
        radicalPinyin: "xuán",
        radicalMeaning: "Profound"
    },
    {
        radicalNumber: 96,
        radicalGlyph: "王 玉",
        radicalPinyin: "wáng/yù",
        radicalMeaning: "King/Jade"
    },
    {
        radicalNumber: 97,
        radicalGlyph: "瓜",
        radicalPinyin: "guā",
        radicalMeaning: "Melon"
    },
    {
        radicalNumber: 98,
        radicalGlyph: "瓦",
        radicalPinyin: "wǎ",
        radicalMeaning: "Tile"
    },
    {
        radicalNumber: 99,
        radicalGlyph: "甘",
        radicalPinyin: "gān",
        radicalMeaning: "Sweet"
    },
    {
        radicalNumber: 100,
        radicalGlyph: "生",
        radicalPinyin: "shēng",
        radicalMeaning: "Life"
    },
    {
        radicalNumber: 101,
        radicalGlyph: "用",
        radicalPinyin: "yòng",
        radicalMeaning: "Use"
    },
    {
        radicalNumber: 102,
        radicalGlyph: "田",
        radicalPinyin: "tián",
        radicalMeaning: "Field"
    },
    {
        radicalNumber: 103,
        radicalGlyph: "疋 𤴔",
        radicalPinyin: "pǐ",
        radicalMeaning: "Foot"
    },
    {
        radicalNumber: 104,
        radicalGlyph: "疒",
        radicalPinyin: "nè",
        radicalMeaning: "Sick"
    },
    {
        radicalNumber: 105,
        radicalGlyph: "癶",
        radicalPinyin: "bō",
        radicalMeaning: "Unbalanced footsteps"
    },
    {
        radicalNumber: 106,
        radicalGlyph: "白",
        radicalPinyin: "bái",
        radicalMeaning: "White"
    },
    {
        radicalNumber: 107,
        radicalGlyph: "皮",
        radicalPinyin: "pí",
        radicalMeaning: "Skin"
    },
    {
        radicalNumber: 108,
        radicalGlyph: "皿",
        radicalPinyin: "mǐn",
        radicalMeaning: "Dish"
    },
    {
        radicalNumber: 109,
        radicalGlyph: "目",
        radicalPinyin: "mù",
        radicalMeaning: "Eye"
    },
    {
        radicalNumber: 110,
        radicalGlyph: "矛",
        radicalPinyin: "máo",
        radicalMeaning: "Spear"
    },
    {
        radicalNumber: 111,
        radicalGlyph: "矢",
        radicalPinyin: "shǐ",
        radicalMeaning: "Arrow"
    },
    {
        radicalNumber: 112,
        radicalGlyph: "石",
        radicalPinyin: "shí",
        radicalMeaning: "Stone"
    },
    {
        radicalNumber: 113,
        radicalGlyph: "示 礻",
        radicalPinyin: "shì",
        radicalMeaning: "Spirit"
    },
    {
        radicalNumber: 114,
        radicalGlyph: "禸",
        radicalPinyin: "róu",
        radicalMeaning: "Rub"
    },
    {
        radicalNumber: 115,
        radicalGlyph: "禾",
        radicalPinyin: "hé",
        radicalMeaning: "Grain"
    },
    {
        radicalNumber: 116,
        radicalGlyph: "穴",
        radicalPinyin: "xué",
        radicalMeaning: "Cave"
    },
    {
        radicalNumber: 117,
        radicalGlyph: "立",
        radicalPinyin: "lì",
        radicalMeaning: "Stand"
    },
    {
        radicalNumber: 118,
        radicalGlyph: "竹 ⺮ ケ",
        radicalPinyin: "zhú",
        radicalMeaning: "Bamboo"
    },
    {
        radicalNumber: 119,
        radicalGlyph: "米",
        radicalPinyin: "mǐ",
        radicalMeaning: "Rice"
    },
    {
        radicalNumber: 120,
        radicalGlyph: "糸 纟",
        radicalPinyin: "sī",
        radicalMeaning: "Silk"
    },
    {
        radicalNumber: 121,
        radicalGlyph: "缶",
        radicalPinyin: "fǒu",
        radicalMeaning: "Jar"
    },
    {
        radicalNumber: 122,
        radicalGlyph: "网 罒 罓",
        radicalPinyin: "wǎng",
        radicalMeaning: "Net"
    },
    {
        radicalNumber: 123,
        radicalGlyph: "羊 ⺶ ⺷",
        radicalPinyin: "yáng",
        radicalMeaning: "Sheep"
    },
    {
        radicalNumber: 124,
        radicalGlyph: "羽",
        radicalPinyin: "yǔ",
        radicalMeaning: "Feather"
    },
    {
        radicalNumber: 125,
        radicalGlyph: "老 耂",
        radicalPinyin: "lǎo",
        radicalMeaning: "Old"
    },
    {
        radicalNumber: 126,
        radicalGlyph: "而",
        radicalPinyin: "ér",
        radicalMeaning: "And"
    },
    {
        radicalNumber: 127,
        radicalGlyph: "耒",
        radicalPinyin: "lěi",
        radicalMeaning: "Plaw"
    },
    {
        radicalNumber: 128,
        radicalGlyph: "耳",
        radicalPinyin: "ěr",
        radicalMeaning: "Ear"
    },
    {
        radicalNumber: 129,
        radicalGlyph: "聿",
        radicalPinyin: "yù",
        radicalMeaning: "Brush"
    },
    {
        radicalNumber: 130,
        radicalGlyph: "肉 月",
        radicalPinyin: "ròu",
        radicalMeaning: "Meat"
    },
    {
        radicalNumber: 131,
        radicalGlyph: "臣",
        radicalPinyin: "chén",
        radicalMeaning: "Minister"
    },
    {
        radicalNumber: 132,
        radicalGlyph: "自",
        radicalPinyin: "zì",
        radicalMeaning: "Oneself"
    },
    {
        radicalNumber: 133,
        radicalGlyph: "至",
        radicalPinyin: "zhì",
        radicalMeaning: "Arrive"
    },
    {
        radicalNumber: 134,
        radicalGlyph: "臼",
        radicalPinyin: "jiù",
        radicalMeaning: "Mortar"
    },
    {
        radicalNumber: 135,
        radicalGlyph: "舌",
        radicalPinyin: "shé",
        radicalMeaning: "Tongue"
    },
    {
        radicalNumber: 136,
        radicalGlyph: "舛",
        radicalPinyin: "chuǎn",
        radicalMeaning: "Contrary"
    },
    {
        radicalNumber: 137,
        radicalGlyph: "舟",
        radicalPinyin: "zhōu",
        radicalMeaning: "Boat"
    },
    {
        radicalNumber: 138,
        radicalGlyph: "艮",
        radicalPinyin: "gèn",
        radicalMeaning: "Mountain"
    },
    {
        radicalNumber: 139,
        radicalGlyph: "色",
        radicalPinyin: "sè",
        radicalMeaning: "Color"
    },
    {
        radicalNumber: 140,
        radicalGlyph: "艹",
        radicalPinyin: "cǎo",
        radicalMeaning: "Grass"
    },
    {
        radicalNumber: 141,
        radicalGlyph: "虍",
        radicalPinyin: "hū",
        radicalMeaning: "Stripes on a tiger"
    },
    {
        radicalNumber: 142,
        radicalGlyph: "虫",
        radicalPinyin: "chóng",
        radicalMeaning: "Insect"
    },
    {
        radicalNumber: 143,
        radicalGlyph: "血",
        radicalPinyin: "xuè",
        radicalMeaning: "Blood"
    },
    {
        radicalNumber: 144,
        radicalGlyph: "行",
        radicalPinyin: "xíng",
        radicalMeaning: "Walk"
    },
    {
        radicalNumber: 145,
        radicalGlyph: "衣 衤",
        radicalPinyin: "yī",
        radicalMeaning: "Clothes"
    },
    {
        radicalNumber: 146,
        radicalGlyph: "覀",
        radicalPinyin: "yà",
        radicalMeaning: "Cover"
    },
    {
        radicalNumber: 147,
        radicalGlyph: "见",
        radicalPinyin: "jiàn",
        radicalMeaning: "See"
    },
    {
        radicalNumber: 148,
        radicalGlyph: "角",
        radicalPinyin: "jiǎo",
        radicalMeaning: "Horn"
    },
    {
        radicalNumber: 149,
        radicalGlyph: "讠",
        radicalPinyin: "yán",
        radicalMeaning: "Speech"
    },
    {
        radicalNumber: 150,
        radicalGlyph: "谷",
        radicalPinyin: "gǔ",
        radicalMeaning: "Valley"
    },
    {
        radicalNumber: 151,
        radicalGlyph: "豆",
        radicalPinyin: "dòu",
        radicalMeaning: "Bean"
    },
    {
        radicalNumber: 152,
        radicalGlyph: "豕",
        radicalPinyin: "shǐ",
        radicalMeaning: "Pig"
    },
    {
        radicalNumber: 153,
        radicalGlyph: "豸",
        radicalPinyin: "zhì",
        radicalMeaning: "Legless insect"
    },
    {
        radicalNumber: 154,
        radicalGlyph: "贝",
        radicalPinyin: "bèi",
        radicalMeaning: "Shell"
    },
    {
        radicalNumber: 155,
        radicalGlyph: "赤",
        radicalPinyin: "chì",
        radicalMeaning: "Red"
    },
    {
        radicalNumber: 156,
        radicalGlyph: "走",
        radicalPinyin: "zǒu",
        radicalMeaning: "Walk"
    },
    {
        radicalNumber: 157,
        radicalGlyph: "足",
        radicalPinyin: "zú",
        radicalMeaning: "Foot"
    },
    {
        radicalNumber: 158,
        radicalGlyph: "身",
        radicalPinyin: "shēn",
        radicalMeaning: "Body"
    },
    {
        radicalNumber: 159,
        radicalGlyph: "车",
        radicalPinyin: "chē",
        radicalMeaning: "Cart"
    },
    {
        radicalNumber: 160,
        radicalGlyph: "辛",
        radicalPinyin: "xīn",
        radicalMeaning: "Bitter"
    },
    {
        radicalNumber: 161,
        radicalGlyph: "辰",
        radicalPinyin: "chén",
        radicalMeaning: "Day time"
    },
    {
        radicalNumber: 162,
        radicalGlyph: "辶",
        radicalPinyin: "chuò",
        radicalMeaning: "Walk"
    },
    {
        radicalNumber: 163,
        radicalGlyph: "邑 阝",
        radicalPinyin: "yì",
        radicalMeaning: "City"
    },
    {
        radicalNumber: 164,
        radicalGlyph: "酉",
        radicalPinyin: "yǒu",
        radicalMeaning: "Wine vessel"
    },
    {
        radicalNumber: 165,
        radicalGlyph: "釆",
        radicalPinyin: "biàn",
        radicalMeaning: "Distinguish"
    },
    {
        radicalNumber: 166,
        radicalGlyph: "里",
        radicalPinyin: "lǐ",
        radicalMeaning: "Village/Unit of distance"
    },
    {
        radicalNumber: 167,
        radicalGlyph: "金 钅",
        radicalPinyin: "jīn",
        radicalMeaning: "Metal"
    },
    {
        radicalNumber: 168,
        radicalGlyph: "长",
        radicalPinyin: "cháng",
        radicalMeaning: "Long"
    },
    {
        radicalNumber: 169,
        radicalGlyph: "门",
        radicalPinyin: "mén",
        radicalMeaning: "Gate"
    },
    {
        radicalNumber: 170,
        radicalGlyph: "阜⻏",
        radicalPinyin: "fù",
        radicalMeaning: "Mound"
    },
    {
        radicalNumber: 171,
        radicalGlyph: "隶",
        radicalPinyin: "lì",
        radicalMeaning: "Slave"
    },
    {
        radicalNumber: 172,
        radicalGlyph: "隹",
        radicalPinyin: "zhuī",
        radicalMeaning: "Short-tailed bird"
    },
    {
        radicalNumber: 173,
        radicalGlyph: "雨",
        radicalPinyin: "yǔ",
        radicalMeaning: "Rain"
    },
    {
        radicalNumber: 174,
        radicalGlyph: "青",
        radicalPinyin: "qīng",
        radicalMeaning: "Blue/Green"
    },
    {
        radicalNumber: 175,
        radicalGlyph: "非",
        radicalPinyin: "fēi",
        radicalMeaning: "Wrong"
    },
    {
        radicalNumber: 176,
        radicalGlyph: "面",
        radicalPinyin: "miàn",
        radicalMeaning: "Face"
    },
    {
        radicalNumber: 177,
        radicalGlyph: "革",
        radicalPinyin: "gé",
        radicalMeaning: "Leather"
    },
    {
        radicalNumber: 178,
        radicalGlyph: "韦",
        radicalPinyin: "wěi",
        radicalMeaning: "Soft leather"
    },
    {
        radicalNumber: 179,
        radicalGlyph: "韭",
        radicalPinyin: "jiǔ",
        radicalMeaning: "Leek"
    },
    {
        radicalNumber: 180,
        radicalGlyph: "音",
        radicalPinyin: "yīn",
        radicalMeaning: "Sound"
    },
    {
        radicalNumber: 181,
        radicalGlyph: "页",
        radicalPinyin: "yè",
        radicalMeaning: "Page"
    },
    {
        radicalNumber: 182,
        radicalGlyph: "风",
        radicalPinyin: "fēng",
        radicalMeaning: "Wind"
    },
    {
        radicalNumber: 183,
        radicalGlyph: "飞",
        radicalPinyin: "fēi",
        radicalMeaning: "Fly"
    },
    {
        radicalNumber: 184,
        radicalGlyph: "食 饣",
        radicalPinyin: "shí",
        radicalMeaning: "Eat"
    },
    {
        radicalNumber: 185,
        radicalGlyph: "首",
        radicalPinyin: "shǒu",
        radicalMeaning: "Head"
    },
    {
        radicalNumber: 186,
        radicalGlyph: "香",
        radicalPinyin: "xiāng",
        radicalMeaning: "Fragrant"
    },
    {
        radicalNumber: 187,
        radicalGlyph: "马",
        radicalPinyin: "mǎ",
        radicalMeaning: "Horse"
    },
    {
        radicalNumber: 188,
        radicalGlyph: "骨",
        radicalPinyin: "gǔ",
        radicalMeaning: "Bone"
    },
    {
        radicalNumber: 189,
        radicalGlyph: "高",
        radicalPinyin: "gāo",
        radicalMeaning: "High"
    },
    {
        radicalNumber: 190,
        radicalGlyph: "髟",
        radicalPinyin: "biāo",
        radicalMeaning: "Long hair"
    },
    {
        radicalNumber: 191,
        radicalGlyph: "门/鬥",
        radicalPinyin: "mén/dòu",
        radicalMeaning: "Fight"
    },
    {
        radicalNumber: 192,
        radicalGlyph: "鬯",
        radicalPinyin: "chàng",
        radicalMeaning: "Sacrificial wine"
    },
    {
        radicalNumber: 193,
        radicalGlyph: "鬲",
        radicalPinyin: "lì",
        radicalMeaning: "Cauldron"
    },
    {
        radicalNumber: 194,
        radicalGlyph: "鬼",
        radicalPinyin: "guǐ",
        radicalMeaning: "Ghost"
    },
    {
        radicalNumber: 195,
        radicalGlyph: "鱼",
        radicalPinyin: "yú",
        radicalMeaning: "Fish"
    },
    {
        radicalNumber: 196,
        radicalGlyph: "鸟",
        radicalPinyin: "niǎo",
        radicalMeaning: "Bird"
    },
    {
        radicalNumber: 197,
        radicalGlyph: "卤",
        radicalPinyin: "lǔ",
        radicalMeaning: "Brine"
    },
    {
        radicalNumber: 198,
        radicalGlyph: "鹿",
        radicalPinyin: "lù",
        radicalMeaning: "Deer"
    },
    {
        radicalNumber: 199,
        radicalGlyph: "麦",
        radicalPinyin: "mài",
        radicalMeaning: "Wheat"
    },
    {
        radicalNumber: 200,
        radicalGlyph: "麻",
        radicalPinyin: "má",
        radicalMeaning: "Hemp"
    },
    {
        radicalNumber: 201,
        radicalGlyph: "黄",
        radicalPinyin: "huáng",
        radicalMeaning: "Yellow"
    },
    {
        radicalNumber: 202,
        radicalGlyph: "黍",
        radicalPinyin: "shǔ",
        radicalMeaning: "Millet"
    },
    {
        radicalNumber: 203,
        radicalGlyph: "黑",
        radicalPinyin: "hēi",
        radicalMeaning: "Black"
    },
    {
        radicalNumber: 204,
        radicalGlyph: "黹",
        radicalPinyin: "zhǐ",
        radicalMeaning: "Embroidery"
    },
    {
        radicalNumber: 205,
        radicalGlyph: "黾",
        radicalPinyin: "měng",
        radicalMeaning: "Frog"
    },
    {
        radicalNumber: 206,
        radicalGlyph: "鼎",
        radicalPinyin: "dǐng",
        radicalMeaning: "Tripod"
    },
    {
        radicalNumber: 207,
        radicalGlyph: "鼓",
        radicalPinyin: "gǔ",
        radicalMeaning: "Drum"
    },
    {
        radicalNumber: 208,
        radicalGlyph: "鼠",
        radicalPinyin: "shǔ",
        radicalMeaning: "Rat"
    },
    {
        radicalNumber: 209,
        radicalGlyph: "鼻",
        radicalPinyin: "bí",
        radicalMeaning: "Nose"
    },
    {
        radicalNumber: 210,
        radicalGlyph: "齐",
        radicalPinyin: "qí",
        radicalMeaning: "Neat"
    },
    {
        radicalNumber: 211,
        radicalGlyph: "齿",
        radicalPinyin: "chǐ",
        radicalMeaning: "Tooth"
    },
    {
        radicalNumber: 212,
        radicalGlyph: "龙",
        radicalPinyin: "lóng",
        radicalMeaning: "Dragon"
    },
    {
        radicalNumber: 213,
        radicalGlyph: "龟",
        radicalPinyin: "guī",
        radicalMeaning: "Turtle"
    },
    {
        radicalNumber: 214,
        radicalGlyph: "龠",
        radicalPinyin: "yuè",
        radicalMeaning: "Flute"
    },
]