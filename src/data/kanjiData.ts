import { KanjiQuestion, DifficultyLevel } from '../types/kanji';

// 初級レベル（基本的な漢字）
export const beginnerKanji: KanjiQuestion[] = [
  // 数字
  {
    kanji: "一",
    correctAnswer: "いち",
    options: ["いち", "に", "さん"],
    image: "number",
    difficulty: "beginner"
  },
  {
    kanji: "二",
    correctAnswer: "に",
    options: ["いち", "に", "さん"],
    image: "number",
    difficulty: "beginner"
  },
  {
    kanji: "三",
    correctAnswer: "さん",
    options: ["に", "さん", "よん"],
    image: "number",
    difficulty: "beginner"
  },
  {
    kanji: "四",
    correctAnswer: "よん",
    options: ["さん", "よん", "ご"],
    image: "number",
    difficulty: "beginner"
  },
  {
    kanji: "五",
    correctAnswer: "ご",
    options: ["よん", "ご", "ろく"],
    image: "number",
    difficulty: "beginner"
  },
  {
    kanji: "十",
    correctAnswer: "じゅう",
    options: ["じゅう", "ひゃく", "せん"],
    image: "number",
    difficulty: "beginner"
  },
  
  // 曜日
  {
    kanji: "月",
    correctAnswer: "げつ",
    options: ["げつ", "か", "すい"],
    image: "moon",
    difficulty: "beginner"
  },
  {
    kanji: "火",
    correctAnswer: "か",
    options: ["げつ", "か", "すい"],
    image: "fire",
    difficulty: "beginner"
  },
  {
    kanji: "水",
    correctAnswer: "すい",
    options: ["か", "すい", "もく"],
    image: "water",
    difficulty: "beginner"
  },
  {
    kanji: "木",
    correctAnswer: "もく",
    options: ["すい", "もく", "きん"],
    image: "tree",
    difficulty: "beginner"
  },
  {
    kanji: "金",
    correctAnswer: "きん",
    options: ["もく", "きん", "ど"],
    image: "gold",
    difficulty: "beginner"
  },
  {
    kanji: "土",
    correctAnswer: "ど",
    options: ["きん", "ど", "にち"],
    image: "earth",
    difficulty: "beginner"
  },
  {
    kanji: "日",
    correctAnswer: "にち",
    options: ["ど", "にち", "げつ"],
    image: "sun",
    difficulty: "beginner"
  },
  
  // 身体
  {
    kanji: "人",
    correctAnswer: "ひと",
    options: ["ひと", "こ", "おとこ"],
    image: "person",
    difficulty: "beginner"
  },
  {
    kanji: "子",
    correctAnswer: "こ",
    options: ["ひと", "こ", "おとこ"],
    image: "child",
    difficulty: "beginner"
  },
  {
    kanji: "男",
    correctAnswer: "おとこ",
    options: ["こ", "おとこ", "おんな"],
    image: "man",
    difficulty: "beginner"
  },
  {
    kanji: "女",
    correctAnswer: "おんな",
    options: ["おとこ", "おんな", "ちち"],
    image: "woman",
    difficulty: "beginner"
  },
  {
    kanji: "口",
    correctAnswer: "くち",
    options: ["くち", "め", "みみ"],
    image: "mouth",
    difficulty: "beginner"
  },
  {
    kanji: "目",
    correctAnswer: "め",
    options: ["くち", "め", "みみ"],
    image: "eye",
    difficulty: "beginner"
  },
  {
    kanji: "手",
    correctAnswer: "て",
    options: ["て", "あし", "からだ"],
    image: "hand",
    difficulty: "beginner"
  },
  {
    kanji: "足",
    correctAnswer: "あし",
    options: ["て", "あし", "からだ"],
    image: "foot",
    difficulty: "beginner"
  },
  
  // 方向・位置
  {
    kanji: "上",
    correctAnswer: "うえ",
    options: ["うえ", "した", "ひだり"],
    image: "up",
    difficulty: "beginner"
  },
  {
    kanji: "下",
    correctAnswer: "した",
    options: ["うえ", "した", "ひだり"],
    image: "down",
    difficulty: "beginner"
  },
  {
    kanji: "左",
    correctAnswer: "ひだり",
    options: ["した", "ひだり", "みぎ"],
    image: "left",
    difficulty: "beginner"
  },
  {
    kanji: "右",
    correctAnswer: "みぎ",
    options: ["ひだり", "みぎ", "だい"],
    image: "right",
    difficulty: "beginner"
  },
  {
    kanji: "大",
    correctAnswer: "だい",
    options: ["みぎ", "だい", "しょう"],
    image: "big",
    difficulty: "beginner"
  },
  {
    kanji: "小",
    correctAnswer: "しょう",
    options: ["だい", "しょう", "ちゅう"],
    image: "small",
    difficulty: "beginner"
  },
  
  // 自然
  {
    kanji: "山",
    correctAnswer: "やま",
    options: ["やま", "かわ", "た"],
    image: "mountain",
    difficulty: "beginner"
  },
  {
    kanji: "川",
    correctAnswer: "かわ",
    options: ["やま", "かわ", "た"],
    image: "river",
    difficulty: "beginner"
  },
  {
    kanji: "雨",
    correctAnswer: "あめ",
    options: ["あめ", "いし", "いわ"],
    image: "rain",
    difficulty: "beginner"
  },
  {
    kanji: "花",
    correctAnswer: "はな",
    options: ["はな", "たけ", "はやし"],
    image: "flower",
    difficulty: "beginner"
  },
  
  // 動物
  {
    kanji: "犬",
    correctAnswer: "いぬ",
    options: ["いぬ", "かい", "うし"],
    image: "dog",
    difficulty: "beginner"
  },
  {
    kanji: "魚",
    correctAnswer: "さかな",
    options: ["うし", "さかな", "とり"],
    image: "fish",
    difficulty: "beginner"
  },
  {
    kanji: "鳥",
    correctAnswer: "とり",
    options: ["さかな", "とり", "こめ"],
    image: "bird",
    difficulty: "beginner"
  }
];

// 中級レベル（少し複雑な漢字）
export const intermediateKanji: KanjiQuestion[] = [
  // 時間
  {
    kanji: "朝",
    correctAnswer: "あさ",
    options: ["あさ", "ひる", "ばん"],
    image: "morning",
    difficulty: "intermediate"
  },
  {
    kanji: "昼",
    correctAnswer: "ひる",
    options: ["あさ", "ひる", "ばん"],
    image: "noon",
    difficulty: "intermediate"
  },
  {
    kanji: "晩",
    correctAnswer: "ばん",
    options: ["ひる", "ばん", "よる"],
    image: "evening",
    difficulty: "intermediate"
  },
  {
    kanji: "夜",
    correctAnswer: "よる",
    options: ["ばん", "よる", "あさ"],
    image: "night",
    difficulty: "intermediate"
  },
  {
    kanji: "前",
    correctAnswer: "まえ",
    options: ["まえ", "あと", "うえ"],
    image: "front",
    difficulty: "intermediate"
  },
  {
    kanji: "後",
    correctAnswer: "あと",
    options: ["まえ", "あと", "した"],
    image: "back",
    difficulty: "intermediate"
  },
  
  // 家族
  {
    kanji: "家族",
    correctAnswer: "かぞく",
    options: ["かぞく", "いえ", "ひと"],
    image: "family",
    difficulty: "intermediate"
  },
  {
    kanji: "兄",
    correctAnswer: "あに",
    options: ["あに", "おとうと", "ちち"],
    image: "brother",
    difficulty: "intermediate"
  },
  {
    kanji: "弟",
    correctAnswer: "おとうと",
    options: ["あに", "おとうと", "あね"],
    image: "younger_brother",
    difficulty: "intermediate"
  },
  {
    kanji: "姉",
    correctAnswer: "あね",
    options: ["あね", "いもうと", "はは"],
    image: "sister",
    difficulty: "intermediate"
  },
  {
    kanji: "妹",
    correctAnswer: "いもうと",
    options: ["あね", "いもうと", "おとこ"],
    image: "younger_sister",
    difficulty: "intermediate"
  },
  {
    kanji: "私",
    correctAnswer: "わたし",
    options: ["わたし", "あなた", "かれ"],
    image: "myself",
    difficulty: "intermediate"
  },
  
  // 色
  {
    kanji: "赤色",
    correctAnswer: "あかいろ",
    options: ["あかいろ", "あおいろ", "しろいろ"],
    image: "red",
    difficulty: "intermediate"
  },
  {
    kanji: "青色",
    correctAnswer: "あおいろ",
    options: ["あかいろ", "あおいろ", "くろいろ"],
    image: "blue",
    difficulty: "intermediate"
  },
  {
    kanji: "白色",
    correctAnswer: "しろいろ",
    options: ["あおいろ", "しろいろ", "くろいろ"],
    image: "white",
    difficulty: "intermediate"
  },
  {
    kanji: "黒色",
    correctAnswer: "くろいろ",
    options: ["しろいろ", "くろいろ", "きいろ"],
    image: "black",
    difficulty: "intermediate"
  },
  {
    kanji: "黄色",
    correctAnswer: "きいろ",
    options: ["くろいろ", "きいろ", "みどり"],
    image: "yellow",
    difficulty: "intermediate"
  },
  {
    kanji: "緑",
    correctAnswer: "みどり",
    options: ["きいろ", "みどり", "あかいろ"],
    image: "green",
    difficulty: "intermediate"
  },
  
  // 季節
  {
    kanji: "春",
    correctAnswer: "はる",
    options: ["はる", "なつ", "あき"],
    image: "spring",
    difficulty: "intermediate"
  },
  {
    kanji: "夏",
    correctAnswer: "なつ",
    options: ["はる", "なつ", "あき"],
    image: "summer",
    difficulty: "intermediate"
  },
  {
    kanji: "秋",
    correctAnswer: "あき",
    options: ["なつ", "あき", "ふゆ"],
    image: "autumn",
    difficulty: "intermediate"
  },
  {
    kanji: "冬",
    correctAnswer: "ふゆ",
    options: ["あき", "ふゆ", "はる"],
    image: "winter",
    difficulty: "intermediate"
  },
  
  // 自然・天気
  {
    kanji: "空",
    correctAnswer: "そら",
    options: ["そら", "てん", "くも"],
    image: "sky",
    difficulty: "intermediate"
  },
  {
    kanji: "天",
    correctAnswer: "てん",
    options: ["そら", "てん", "ち"],
    image: "heaven",
    difficulty: "intermediate"
  },
  {
    kanji: "風",
    correctAnswer: "かぜ",
    options: ["かぜ", "あめ", "ゆき"],
    image: "wind",
    difficulty: "intermediate"
  },
  {
    kanji: "雲",
    correctAnswer: "くも",
    options: ["かぜ", "くも", "ゆき"],
    image: "cloud",
    difficulty: "intermediate"
  },
  {
    kanji: "雪",
    correctAnswer: "ゆき",
    options: ["くも", "ゆき", "あめ"],
    image: "snow",
    difficulty: "intermediate"
  },
  {
    kanji: "星",
    correctAnswer: "ほし",
    options: ["ほし", "つき", "ひかり"],
    image: "star",
    difficulty: "intermediate"
  },
  
  // 動物・自然
  {
    kanji: "海",
    correctAnswer: "うみ",
    options: ["うみ", "みずうみ", "いけ"],
    image: "sea",
    difficulty: "intermediate"
  },
  {
    kanji: "湖",
    correctAnswer: "みずうみ",
    options: ["うみ", "みずうみ", "いけ"],
    image: "lake",
    difficulty: "intermediate"
  },
  {
    kanji: "池",
    correctAnswer: "いけ",
    options: ["みずうみ", "いけ", "かわ"],
    image: "pond",
    difficulty: "intermediate"
  },
  {
    kanji: "馬",
    correctAnswer: "うま",
    options: ["うま", "いぬ", "ねこ"],
    image: "horse",
    difficulty: "intermediate"
  },
  {
    kanji: "虫",
    correctAnswer: "むし",
    options: ["むし", "とり", "さかな"],
    image: "insect",
    difficulty: "intermediate"
  },
  
  // 食べ物・料理
  {
    kanji: "料理",
    correctAnswer: "りょうり",
    options: ["りょうり", "たべもの", "のみもの"],
    image: "cooking",
    difficulty: "intermediate"
  },
  {
    kanji: "飯",
    correctAnswer: "めし",
    options: ["めし", "ごはん", "パン"],
    image: "rice",
    difficulty: "intermediate"
  },
  {
    kanji: "酒",
    correctAnswer: "さけ",
    options: ["さけ", "みず", "ちゃ"],
    image: "sake",
    difficulty: "intermediate"
  },
  {
    kanji: "味",
    correctAnswer: "あじ",
    options: ["あじ", "におい", "いろ"],
    image: "taste",
    difficulty: "intermediate"
  },
  
  // 場所・建物
  {
    kanji: "国",
    correctAnswer: "くに",
    options: ["くに", "まち", "いえ"],
    image: "country",
    difficulty: "intermediate"
  },
  {
    kanji: "市",
    correctAnswer: "し",
    options: ["し", "く", "むら"],
    image: "city",
    difficulty: "intermediate"
  },
  {
    kanji: "店",
    correctAnswer: "みせ",
    options: ["みせ", "いえ", "がっこう"],
    image: "shop",
    difficulty: "intermediate"
  },
  {
    kanji: "駅",
    correctAnswer: "えき",
    options: ["えき", "みせ", "がっこう"],
    image: "station",
    difficulty: "intermediate"
  },
  {
    kanji: "病院",
    correctAnswer: "びょういん",
    options: ["びょういん", "がっこう", "かいしゃ"],
    image: "hospital",
    difficulty: "intermediate"
  },
  {
    kanji: "公園",
    correctAnswer: "こうえん",
    options: ["こうえん", "びょういん", "がっこう"],
    image: "park",
    difficulty: "intermediate"
  },
  
  // 学習・教育
  {
    kanji: "勉強",
    correctAnswer: "べんきょう",
    options: ["べんきょう", "しゅくだい", "しけん"],
    image: "study",
    difficulty: "intermediate"
  },
  {
    kanji: "宿題",
    correctAnswer: "しゅくだい",
    options: ["べんきょう", "しゅくだい", "しけん"],
    image: "homework",
    difficulty: "intermediate"
  },
  {
    kanji: "質問",
    correctAnswer: "しつもん",
    options: ["しつもん", "こたえ", "はなし"],
    image: "question",
    difficulty: "intermediate"
  },
  {
    kanji: "試験",
    correctAnswer: "しけん",
    options: ["しけん", "べんきょう", "しゅくだい"],
    image: "exam",
    difficulty: "intermediate"
  },
  {
    kanji: "漢字",
    correctAnswer: "かんじ",
    options: ["かんじ", "ひらがな", "カタカナ"],
    image: "kanji",
    difficulty: "intermediate"
  },
  {
    kanji: "英語",
    correctAnswer: "えいご",
    options: ["えいご", "にほんご", "ちゅうごくご"],
    image: "english",
    difficulty: "intermediate"
  },
  
  // 活動・運動
  {
    kanji: "運動",
    correctAnswer: "うんどう",
    options: ["うんどう", "あそび", "はたらき"],
    image: "exercise",
    difficulty: "intermediate"
  },
  {
    kanji: "泳ぐ",
    correctAnswer: "およぐ",
    options: ["およぐ", "はしる", "とぶ"],
    image: "swim",
    difficulty: "intermediate"
  },
  {
    kanji: "旅",
    correctAnswer: "たび",
    options: ["たび", "でかけ", "いえ"],
    image: "travel",
    difficulty: "intermediate"
  },
  {
    kanji: "世界",
    correctAnswer: "せかい",
    options: ["せかい", "くに", "まち"],
    image: "world",
    difficulty: "intermediate"
  },
  {
    kanji: "練習",
    correctAnswer: "れんしゅう",
    options: ["れんしゅう", "べんきょう", "しごと"],
    image: "practice",
    difficulty: "intermediate"
  },
  {
    kanji: "歌",
    correctAnswer: "うた",
    options: ["うた", "おんがく", "こえ"],
    image: "song",
    difficulty: "intermediate"
  }
];

// 上級レベル（複雑な漢字）
export const advancedKanji: KanjiQuestion[] = [
  // 時間・期間
  {
    kanji: "昨年",
    correctAnswer: "さくねん",
    options: ["さくねん", "らいねん", "ことし"],
    image: "last_year",
    difficulty: "advanced"
  },
  {
    kanji: "翌年",
    correctAnswer: "よくとし",
    options: ["さくねん", "よくとし", "ことし"],
    image: "next_year",
    difficulty: "advanced"
  },
  {
    kanji: "現在",
    correctAnswer: "げんざい",
    options: ["げんざい", "むかし", "みらい"],
    image: "present",
    difficulty: "advanced"
  },
  {
    kanji: "昔",
    correctAnswer: "むかし",
    options: ["げんざい", "むかし", "みらい"],
    image: "past",
    difficulty: "advanced"
  },
  {
    kanji: "次回",
    correctAnswer: "じかい",
    options: ["じかい", "まえかい", "こんかい"],
    image: "next_time",
    difficulty: "advanced"
  },
  {
    kanji: "再開",
    correctAnswer: "さいかい",
    options: ["さいかい", "しゅうりょう", "ちゅうだん"],
    image: "restart",
    difficulty: "advanced"
  },
  
  // 人・関係
  {
    kanji: "彼",
    correctAnswer: "かれ",
    options: ["かれ", "かのじょ", "わたし"],
    image: "he",
    difficulty: "advanced"
  },
  {
    kanji: "君",
    correctAnswer: "きみ",
    options: ["きみ", "あなた", "ぼく"],
    image: "you",
    difficulty: "advanced"
  },
  {
    kanji: "仲間",
    correctAnswer: "なかま",
    options: ["なかま", "ともだち", "きょうだい"],
    image: "companion",
    difficulty: "advanced"
  },
  {
    kanji: "娘",
    correctAnswer: "むすめ",
    options: ["むすめ", "むすこ", "こども"],
    image: "daughter",
    difficulty: "advanced"
  },
  {
    kanji: "婦人",
    correctAnswer: "ふじん",
    options: ["ふじん", "だんし", "こども"],
    image: "woman_formal",
    difficulty: "advanced"
  },
  {
    kanji: "老人",
    correctAnswer: "ろうじん",
    options: ["ろうじん", "わかもの", "こども"],
    image: "elderly",
    difficulty: "advanced"
  },
  
  // 身体・感覚
  {
    kanji: "頭",
    correctAnswer: "あたま",
    options: ["あたま", "かお", "め"],
    image: "head",
    difficulty: "advanced"
  },
  {
    kanji: "顔",
    correctAnswer: "かお",
    options: ["あたま", "かお", "め"],
    image: "face",
    difficulty: "advanced"
  },
  {
    kanji: "鼻",
    correctAnswer: "はな",
    options: ["はな", "くち", "みみ"],
    image: "nose",
    difficulty: "advanced"
  },
  {
    kanji: "首",
    correctAnswer: "くび",
    options: ["くび", "あたま", "からだ"],
    image: "neck",
    difficulty: "advanced"
  },
  {
    kanji: "血",
    correctAnswer: "ち",
    options: ["ち", "みず", "えき"],
    image: "blood",
    difficulty: "advanced"
  },
  {
    kanji: "歯",
    correctAnswer: "は",
    options: ["は", "くち", "した"],
    image: "tooth",
    difficulty: "advanced"
  },
  
  // 食べ物・調理
  {
    kanji: "氷",
    correctAnswer: "こおり",
    options: ["こおり", "ゆき", "みず"],
    image: "ice",
    difficulty: "advanced"
  },
  {
    kanji: "湯気",
    correctAnswer: "ゆげ",
    options: ["ゆげ", "くも", "きり"],
    image: "steam",
    difficulty: "advanced"
  },
  {
    kanji: "卵",
    correctAnswer: "たまご",
    options: ["たまご", "にく", "さかな"],
    image: "egg",
    difficulty: "advanced"
  },
  {
    kanji: "豆",
    correctAnswer: "まめ",
    options: ["まめ", "こめ", "むぎ"],
    image: "bean",
    difficulty: "advanced"
  },
  {
    kanji: "粉",
    correctAnswer: "こな",
    options: ["こな", "つぶ", "かたまり"],
    image: "powder",
    difficulty: "advanced"
  },
  {
    kanji: "塩",
    correctAnswer: "しお",
    options: ["しお", "さとう", "みそ"],
    image: "salt",
    difficulty: "advanced"
  },
  
  // 温度・感覚
  {
    kanji: "熱い",
    correctAnswer: "あつい",
    options: ["あつい", "つめたい", "ぬるい"],
    image: "hot",
    difficulty: "advanced"
  },
  {
    kanji: "冷たい",
    correctAnswer: "つめたい",
    options: ["あつい", "つめたい", "ぬるい"],
    image: "cold",
    difficulty: "advanced"
  },
  {
    kanji: "暖かい",
    correctAnswer: "あたたかい",
    options: ["あたたかい", "すずしい", "さむい"],
    image: "warm",
    difficulty: "advanced"
  },
  {
    kanji: "温度",
    correctAnswer: "おんど",
    options: ["おんど", "きおん", "たいおん"],
    image: "temperature",
    difficulty: "advanced"
  },
  
  // 評価・状態
  {
    kanji: "良い",
    correctAnswer: "よい",
    options: ["よい", "わるい", "ふつう"],
    image: "good",
    difficulty: "advanced"
  },
  {
    kanji: "悪い",
    correctAnswer: "わるい",
    options: ["よい", "わるい", "ふつう"],
    image: "bad",
    difficulty: "advanced"
  },
  {
    kanji: "易しい",
    correctAnswer: "やさしい",
    options: ["やさしい", "むずかしい", "ふつう"],
    image: "easy",
    difficulty: "advanced"
  },
  {
    kanji: "難しい",
    correctAnswer: "むずかしい",
    options: ["やさしい", "むずかしい", "ふつう"],
    image: "difficult",
    difficulty: "advanced"
  },
  {
    kanji: "深い",
    correctAnswer: "ふかい",
    options: ["ふかい", "あさい", "ひくい"],
    image: "deep",
    difficulty: "advanced"
  },
  {
    kanji: "浅い",
    correctAnswer: "あさい",
    options: ["ふかい", "あさい", "ひくい"],
    image: "shallow",
    difficulty: "advanced"
  },
  
  // 感情・心理
  {
    kanji: "痛い",
    correctAnswer: "いたい",
    options: ["いたい", "かゆい", "しびれる"],
    image: "painful",
    difficulty: "advanced"
  },
  {
    kanji: "苦しい",
    correctAnswer: "くるしい",
    options: ["くるしい", "たのしい", "うれしい"],
    image: "painful_emotional",
    difficulty: "advanced"
  },
  {
    kanji: "喜ぶ",
    correctAnswer: "よろこぶ",
    options: ["よろこぶ", "かなしむ", "おこる"],
    image: "rejoice",
    difficulty: "advanced"
  },
  {
    kanji: "怒る",
    correctAnswer: "おこる",
    options: ["よろこぶ", "おこる", "わらう"],
    image: "angry",
    difficulty: "advanced"
  },
  {
    kanji: "笑う",
    correctAnswer: "わらう",
    options: ["わらう", "なく", "おこる"],
    image: "laugh",
    difficulty: "advanced"
  },
  {
    kanji: "泣く",
    correctAnswer: "なく",
    options: ["わらう", "なく", "よろこぶ"],
    image: "cry",
    difficulty: "advanced"
  },
  {
    kanji: "悲しい",
    correctAnswer: "かなしい",
    options: ["かなしい", "うれしい", "たのしい"],
    image: "sad",
    difficulty: "advanced"
  },
  {
    kanji: "涙",
    correctAnswer: "なみだ",
    options: ["なみだ", "あせ", "みず"],
    image: "tears",
    difficulty: "advanced"
  },
  {
    kanji: "幸せ",
    correctAnswer: "しあわせ",
    options: ["しあわせ", "ふしあわせ", "ふつう"],
    image: "happy",
    difficulty: "advanced"
  },
  {
    kanji: "感情",
    correctAnswer: "かんじょう",
    options: ["かんじょう", "りそう", "かんがえ"],
    image: "emotion",
    difficulty: "advanced"
  },
  
  // 行動・動作
  {
    kanji: "拾う",
    correctAnswer: "ひろう",
    options: ["ひろう", "すてる", "もつ"],
    image: "pick_up",
    difficulty: "advanced"
  },
  {
    kanji: "捨てる",
    correctAnswer: "すてる",
    options: ["ひろう", "すてる", "もつ"],
    image: "throw_away",
    difficulty: "advanced"
  },
  {
    kanji: "貸す",
    correctAnswer: "かす",
    options: ["かす", "かりる", "もらう"],
    image: "lend",
    difficulty: "advanced"
  },
  {
    kanji: "忘れる",
    correctAnswer: "わすれる",
    options: ["わすれる", "おぼえる", "しる"],
    image: "forget",
    difficulty: "advanced"
  },
  {
    kanji: "押す",
    correctAnswer: "おす",
    options: ["おす", "ひく", "もつ"],
    image: "push",
    difficulty: "advanced"
  },
  {
    kanji: "引く",
    correctAnswer: "ひく",
    options: ["おす", "ひく", "もつ"],
    image: "pull",
    difficulty: "advanced"
  },
  {
    kanji: "打つ",
    correctAnswer: "うつ",
    options: ["うつ", "なぐる", "たたく"],
    image: "hit",
    difficulty: "advanced"
  },
  {
    kanji: "投げる",
    correctAnswer: "なげる",
    options: ["なげる", "うつ", "とる"],
    image: "throw",
    difficulty: "advanced"
  },
  {
    kanji: "信じる",
    correctAnswer: "しんじる",
    options: ["しんじる", "うたがう", "しる"],
    image: "believe",
    difficulty: "advanced"
  },
  {
    kanji: "伝える",
    correctAnswer: "つたえる",
    options: ["つたえる", "きく", "しる"],
    image: "tell",
    difficulty: "advanced"
  },
  {
    kanji: "続く",
    correctAnswer: "つづく",
    options: ["つづく", "とまる", "おわる"],
    image: "continue",
    difficulty: "advanced"
  },
  {
    kanji: "祝う",
    correctAnswer: "いわう",
    options: ["いわう", "かなしむ", "おこる"],
    image: "celebrate",
    difficulty: "advanced"
  },
  {
    kanji: "願う",
    correctAnswer: "ねがう",
    options: ["ねがう", "きらう", "すき"],
    image: "wish",
    difficulty: "advanced"
  },
  
  // 生活・日常
  {
    kanji: "起きる",
    correctAnswer: "おきる",
    options: ["おきる", "ねる", "すわる"],
    image: "wake_up",
    difficulty: "advanced"
  },
  {
    kanji: "寝る",
    correctAnswer: "ねる",
    options: ["おきる", "ねる", "すわる"],
    image: "sleep",
    difficulty: "advanced"
  },
  {
    kanji: "洗濯",
    correctAnswer: "せんたく",
    options: ["せんたく", "そうじ", "りょうり"],
    image: "laundry",
    difficulty: "advanced"
  },
  {
    kanji: "干す",
    correctAnswer: "ほす",
    options: ["ほす", "ぬらす", "かわかす"],
    image: "dry",
    difficulty: "advanced"
  },
  {
    kanji: "浴びる",
    correctAnswer: "あびる",
    options: ["あびる", "のむ", "たべる"],
    image: "bathe",
    difficulty: "advanced"
  },
  {
    kanji: "夢",
    correctAnswer: "ゆめ",
    options: ["ゆめ", "うそ", "ほんとう"],
    image: "dream",
    difficulty: "advanced"
  },
  
  // 関係・社会
  {
    kanji: "関係",
    correctAnswer: "かんけい",
    options: ["かんけい", "ともだち", "かぞく"],
    image: "relationship",
    difficulty: "advanced"
  },
  {
    kanji: "結婚",
    correctAnswer: "けっこん",
    options: ["けっこん", "りこん", "どくしん"],
    image: "marriage",
    difficulty: "advanced"
  },
  {
    kanji: "独身",
    correctAnswer: "どくしん",
    options: ["けっこん", "りこん", "どくしん"],
    image: "single",
    difficulty: "advanced"
  },
  {
    kanji: "恋愛",
    correctAnswer: "れんあい",
    options: ["れんあい", "ともだち", "かぞく"],
    image: "love",
    difficulty: "advanced"
  },
  {
    kanji: "永遠",
    correctAnswer: "えいえん",
    options: ["えいえん", "いっしゅん", "みじかい"],
    image: "eternity",
    difficulty: "advanced"
  },
  {
    kanji: "福",
    correctAnswer: "ふく",
    options: ["ふく", "ふこう", "うん"],
    image: "fortune",
    difficulty: "advanced"
  },
  
  // 計画・約束
  {
    kanji: "予定",
    correctAnswer: "よてい",
    options: ["よてい", "けいかく", "やくそく"],
    image: "schedule",
    difficulty: "advanced"
  },
  {
    kanji: "用事",
    correctAnswer: "ようじ",
    options: ["ようじ", "しごと", "あそび"],
    image: "business",
    difficulty: "advanced"
  },
  {
    kanji: "約束",
    correctAnswer: "やくそく",
    options: ["やくそく", "けいかく", "よてい"],
    image: "promise",
    difficulty: "advanced"
  },
  {
    kanji: "必要",
    correctAnswer: "ひつよう",
    options: ["ひつよう", "ふひつよう", "かって"],
    image: "necessary",
    difficulty: "advanced"
  },
  {
    kanji: "取消",
    correctAnswer: "とりけし",
    options: ["とりけし", "けってい", "さんせい"],
    image: "cancel",
    difficulty: "advanced"
  },
  {
    kanji: "返す",
    correctAnswer: "かえす",
    options: ["かえす", "もらう", "あげる"],
    image: "return",
    difficulty: "advanced"
  },
  {
    kanji: "守る",
    correctAnswer: "まもる",
    options: ["まもる", "やぶる", "すてる"],
    image: "protect",
    difficulty: "advanced"
  },
  
  // 自然・地理
  {
    kanji: "気候",
    correctAnswer: "きこう",
    options: ["きこう", "てんき", "きおん"],
    image: "climate",
    difficulty: "advanced"
  },
  {
    kanji: "季節",
    correctAnswer: "きせつ",
    options: ["きせつ", "つき", "とし"],
    image: "season",
    difficulty: "advanced"
  },
  {
    kanji: "島",
    correctAnswer: "しま",
    options: ["しま", "りく", "うみ"],
    image: "island",
    difficulty: "advanced"
  },
  {
    kanji: "陸",
    correctAnswer: "りく",
    options: ["しま", "りく", "うみ"],
    image: "land",
    difficulty: "advanced"
  },
  {
    kanji: "河",
    correctAnswer: "かわ",
    options: ["かわ", "うみ", "いけ"],
    image: "river",
    difficulty: "advanced"
  },
  {
    kanji: "流れる",
    correctAnswer: "ながれる",
    options: ["ながれる", "とまる", "はしる"],
    image: "flow",
    difficulty: "advanced"
  },
  {
    kanji: "岸",
    correctAnswer: "きし",
    options: ["きし", "なか", "うえ"],
    image: "shore",
    difficulty: "advanced"
  },
  
  // 植物・農業
  {
    kanji: "農産",
    correctAnswer: "のうさん",
    options: ["のうさん", "ぎょさん", "こうさん"],
    image: "agricultural",
    difficulty: "advanced"
  },
  {
    kanji: "果実",
    correctAnswer: "かじつ",
    options: ["かじつ", "やさい", "はな"],
    image: "fruit",
    difficulty: "advanced"
  },
  {
    kanji: "葉",
    correctAnswer: "は",
    options: ["は", "はな", "み"],
    image: "leaf",
    difficulty: "advanced"
  },
  {
    kanji: "根",
    correctAnswer: "ね",
    options: ["ね", "は", "み"],
    image: "root",
    difficulty: "advanced"
  },
  
  // 建物・構造
  {
    kanji: "建築",
    correctAnswer: "けんちく",
    options: ["けんちく", "はかい", "そうじ"],
    image: "architecture",
    difficulty: "advanced"
  },
  {
    kanji: "構造",
    correctAnswer: "こうぞう",
    options: ["こうぞう", "かたち", "いろ"],
    image: "structure",
    difficulty: "advanced"
  },
  {
    kanji: "橋",
    correctAnswer: "はし",
    options: ["はし", "みち", "いえ"],
    image: "bridge",
    difficulty: "advanced"
  },
  {
    kanji: "窓",
    correctAnswer: "まど",
    options: ["まど", "と", "かべ"],
    image: "window",
    difficulty: "advanced"
  },
  {
    kanji: "戸",
    correctAnswer: "と",
    options: ["まど", "と", "かべ"],
    image: "door",
    difficulty: "advanced"
  },
  {
    kanji: "階段",
    correctAnswer: "かいだん",
    options: ["かいだん", "みち", "はし"],
    image: "stairs",
    difficulty: "advanced"
  },
  {
    kanji: "机",
    correctAnswer: "つくえ",
    options: ["つくえ", "いす", "たたみ"],
    image: "desk",
    difficulty: "advanced"
  },
  
  // 方向・位置
  {
    kanji: "角",
    correctAnswer: "かど",
    options: ["かど", "まんなか", "はし"],
    image: "corner",
    difficulty: "advanced"
  },
  {
    kanji: "坂",
    correctAnswer: "さか",
    options: ["さか", "みち", "はし"],
    image: "slope",
    difficulty: "advanced"
  },
  {
    kanji: "直線",
    correctAnswer: "ちょくせん",
    options: ["ちょくせん", "まがった", "まるい"],
    image: "straight_line",
    difficulty: "advanced"
  },
  {
    kanji: "逆",
    correctAnswer: "ぎゃく",
    options: ["ぎゃく", "せい", "ただしい"],
    image: "reverse",
    difficulty: "advanced"
  },
  
  // 許可・禁止
  {
    kanji: "禁止",
    correctAnswer: "きんし",
    options: ["きんし", "きょか", "じゆう"],
    image: "prohibition",
    difficulty: "advanced"
  },
  {
    kanji: "許可",
    correctAnswer: "きょか",
    options: ["きんし", "きょか", "じゆう"],
    image: "permission",
    difficulty: "advanced"
  },
  
  // 個性・社会
  {
    kanji: "個性",
    correctAnswer: "こせい",
    options: ["こせい", "きょうつう", "おなじ"],
    image: "personality",
    difficulty: "advanced"
  },
  {
    kanji: "紹介",
    correctAnswer: "しょうかい",
    options: ["しょうかい", "みつける", "わすれる"],
    image: "introduction",
    difficulty: "advanced"
  },
  {
    kanji: "常識",
    correctAnswer: "じょうしき",
    options: ["じょうしき", "へん", "ふつう"],
    image: "common_sense",
    difficulty: "advanced"
  },
  {
    kanji: "失礼",
    correctAnswer: "しつれい",
    options: ["しつれい", "れいぎ", "ていねい"],
    image: "rude",
    difficulty: "advanced"
  }
];

// 全難易度のデータ
export const allKanjiData: KanjiQuestion[] = [
  ...beginnerKanji,
  ...intermediateKanji,
  ...advancedKanji
];

// 難易度別データ取得関数
export const getKanjiByDifficulty = (difficulty: DifficultyLevel): KanjiQuestion[] => {
  switch (difficulty) {
    case 'beginner':
      return beginnerKanji;
    case 'intermediate':
      return intermediateKanji;
    case 'advanced':
      return advancedKanji;
    default:
      return allKanjiData;
  }
};
