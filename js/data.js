/**
 * 言霊（ことだま）モンスターズ ～社会科・記述詠唱バトルRPG～
 * データ定義（単元データ ＋ 言霊モンスター図鑑＆ガチャデータ）
 * 完全無料・クライアントサイド完結
 */

const MONSTERS = [
  {
    id: "m01",
    name: "ブレイズ・ドラグーン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🐉",
    color: "#ef4444",
    title: "溶鉱炉の紅蓮竜",
    lore: "高温の炎で鉄を鍛える相棒モンスター。4択コンボが決まるたびに火炎ブレスの威力が上がる！"
  },
  {
    id: "m02",
    name: "メカ・ファルコン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🦅",
    color: "#3b82f6",
    title: "高速ラインの守護翼",
    lore: "輸送用機械のスピードを象徴する機械鳥。工場の上空から異常がないか見守っている。"
  },
  {
    id: "m03",
    name: "プレス・タイタン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🤖",
    color: "#0ea5e9",
    title: "鋼鉄打ち抜き巨人",
    lore: "巻かれた鉄の板を一瞬で折り曲げ、ドアや屋根をつくりだす怪力無双のゴーレム。"
  },
  {
    id: "m04",
    name: "スパーク・アームズ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "⚡",
    color: "#eab308",
    title: "閃光の溶接騎士",
    lore: "火花を散らして約3万個の部品から車体を正確に溶接する。すばやくたくさんの車をつくるプロ！"
  },
  {
    id: "m05",
    name: "プリズム・ペインター",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🎨",
    color: "#ec4899",
    title: "四重塗装の幻術師",
    lore: "4回の美しい塗装バリアで「さび」を完全に防ぎ、「見ばえ」を最高に輝く姿へと進化させる！"
  },
  {
    id: "m06",
    name: "アンドン・ガーディアン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚨",
    color: "#f97316",
    title: "光と音の警鐘精霊",
    lore: "作業中に異常や遅れが起きると、すぐさま光と音で仲間に知らせてピンチを救う頼もしい精霊。"
  },
  {
    id: "m07",
    name: "カンバン・セージ",
    rarity: "UR",
    stars: "★★★★★",
    icon: "📜",
    color: "#a855f7",
    title: "無無駄（むだなし）の大賢者",
    lore: "「使った分の部品だけ」を注文する魔法の札『かんばん』を操り、部品を一切余らせない伝説の賢者。"
  },
  {
    id: "m08",
    name: "ロード・オブ・モーター",
    rarity: "LEGEND",
    stars: "👑★★★★★",
    icon: "🏎️",
    color: "#facc15",
    title: "輸送機械の黄金神竜",
    lore: "日本の機械工業の頂点に君臨する伝説の言霊モンスター。3万個の結晶がひとつになる時、光速を超える！"
  },
  {
    id: "m09",
    name: "シジビラ・フェアリー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🏷️",
    color: "#14b8a6",
    title: "注文記憶の妖精",
    lore: "1つの流れの中でちがう色や種類の車をつくるとき、『指示ビラ』をつけて間違いをゼロにする妖精。"
  },
  {
    id: "m10",
    name: "コンベヤー・サーペント",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🐍",
    color: "#10b981",
    title: "定速進行の機巧竜",
    lore: "一定の速さで進む組み立てラインの化身。部品の箱を車と一緒に運び、作業に集中させる力を持つ。"
  },
  {
    id: "m11",
    name: "ボルト・ナイト",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🔩",
    color: "#64748b",
    title: "ネジ止めの小さな騎士",
    lore: "ひとつひとつのボルトをしっかり締めて、車がバラバラにならないよう守る真面目な騎士。"
  },
  {
    id: "m12",
    name: "タイヤ・ローラー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🛞",
    color: "#475569",
    title: "ころころ転がる走り屋",
    lore: "ゴムでできたまんまるの仲間。どんな道でもしっかりグリップして車を支える。"
  },
  {
    id: "m13",
    name: "ハンドル・ピクシー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🎡",
    color: "#0ea5e9",
    title: "曲がり角の案内妖精",
    lore: "ハンドルの形をした妖精。右へ左へ、車を行きたい方向へ導いてくれる。"
  },
  {
    id: "m14",
    name: "ガラス・スライム",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🪟",
    color: "#38bdf8",
    title: "すきとおる視界の守り手",
    lore: "透明なからだで前方の景色を守るスライム。ワイパーのしっぽが自慢。"
  },
  {
    id: "m15",
    name: "シート・クッシー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "💺",
    color: "#f43f5e",
    title: "ふかふか座席の癒し手",
    lore: "長いドライブでも疲れないよう、ふかふかのからだで乗る人を支えるやさしい仲間。"
  },
  {
    id: "m16",
    name: "ライト・ホタル",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "💡",
    color: "#fde047",
    title: "夜道を照らす光の虫",
    lore: "ヘッドライトの光で暗い道を照らし、夜の運転を安全にしてくれるホタル。"
  },
  {
    id: "m17",
    name: "チェーン・ワーム",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🔗",
    color: "#78716c",
    title: "つながる力の鎖虫",
    lore: "部品と部品をつなぐ鎖の体。工場のラインを力強く動かし続ける。"
  },
  {
    id: "m18",
    name: "ピストン・ラビット",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐇",
    color: "#fb923c",
    title: "上下にはねる心臓部",
    lore: "エンジンの中を元気に上下にはねるウサギ。そのパワーで車が走り出す！"
  },
  {
    id: "m19",
    name: "ブレーキ・タートル",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐢",
    color: "#ef4444",
    title: "止まる勇気のカメ",
    lore: "どんなに急いでいても、ぴたっと止まれる安全第一のカメ。ブレーキ性能は国内一。"
  },
  {
    id: "m20",
    name: "オイル・ドロップ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🧴",
    color: "#22c55e",
    title: "なめらか潤滑のしずく",
    lore: "エンジンの動きをなめらかにするオイルのしずく。いなくなると機械が止まっちゃう！"
  },
  {
    id: "m21",
    name: "バッテリー・ピカ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🔋",
    color: "#84cc16",
    title: "電気自動車の元気玉",
    lore: "電気をためて車を動かす小さなパワフル電池。充電するとぴかぴかに光る。"
  },
  {
    id: "m22",
    name: "コンテナ・ボックス",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "📦",
    color: "#a16d3a",
    title: "港のはこび屋",
    lore: "大きな箱のからだに、たくさんの部品や車を入れて世界中に運ぶ働き者。"
  },
  {
    id: "m23",
    name: "ポート・クジラ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚢",
    color: "#0369a1",
    title: "海を渡る輸出クジラ",
    lore: "自動車を背中にのせ、海をこえて外国へ運ぶ大きなクジラ。日本の輸出を支える。"
  },
  {
    id: "m24",
    name: "シグナル・フロッグ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚦",
    color: "#16a34a",
    title: "信号を守るカエル",
    lore: "赤・黄・青のからだで交通ルールを教えてくれる、道路のお助けガエル。"
  },
  {
    id: "m25",
    name: "ロボット・アーム・ドラゴン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🤖",
    color: "#6366f1",
    title: "精密作業の腕利き",
    lore: "長いロボットアームのうでで溶接も塗装も正確にこなす、工場自慢の竜。"
  },
  {
    id: "m26",
    name: "ようこうろ・フェニックス",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🔥",
    color: "#dc2626",
    title: "燃えさかる鉄の不死鳥",
    lore: "高温の炎の中から何度でもよみがえる。鉄づくりの熱い心を持つ鳥。"
  },
  {
    id: "m27",
    name: "マグネット・ユニコーン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🧲",
    color: "#7c3aed",
    title: "鉄を引き寄せる聖獣",
    lore: "つのが強力な磁石になっていて、集めた鉄くずを新しい鉄へと生まれ変わらせる。"
  },
  {
    id: "m28",
    name: "ファクトリー・ゴーレム",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🏭",
    color: "#57534e",
    title: "煙突頭の工場巨人",
    lore: "頭の煙突から白いけむりをあげ、24時間はたらく工場の守り神。"
  },
  {
    id: "m29",
    name: "ツール・ワイバーン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🛠️",
    color: "#f59e0b",
    title: "道具箱の飛竜",
    lore: "スパナとレンチのつばさを持つ飛竜。どんな故障もあっという間に直してしまう。"
  },
  {
    id: "m30",
    name: "ケンサ・オウル",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🔍",
    color: "#06b6d4",
    title: "見のがさない検査フクロウ",
    lore: "大きな目で、車のキズも小さな不具合も見つける。出荷前の最後の砦。"
  },
  {
    id: "m31",
    name: "ゴムの錬金術師",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🧪",
    color: "#a3e635",
    title: "ゴムづくりの魔法使い",
    lore: "ゴムの木のしるを魔法で固めて、じょうぶなタイヤの材料をつくる。"
  },
  {
    id: "m32",
    name: "パーツ・ケルベロス",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🧩",
    color: "#d946ef",
    title: "三つ首の部品番犬",
    lore: "3万個の部品を3つの頭で見張る番犬。部品が足りないとすぐに吠える。"
  },
  {
    id: "m33",
    name: "ハーバー・クラーケン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "⚓",
    color: "#1d4ed8",
    title: "港の大タコ",
    lore: "いくつもの足でコンテナを同時に持ち上げ、船へ積み込む港の怪力タコ。"
  },
  {
    id: "m34",
    name: "シンカン・ドラゴン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🚄",
    color: "#e11d48",
    title: "日本をつなぐ高速竜",
    lore: "日本中を高速で走り、人と荷物を運ぶ新幹線の竜。ほとんど遅れない正確さ！"
  },
  {
    id: "m35",
    name: "エコ・ユグドラシル",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌱",
    color: "#22c55e",
    title: "環境を守る世界樹",
    lore: "排出ガスを減らす工夫を見守る木の精霊。未来の車づくりを応援している。"
  },
  {
    id: "m36",
    name: "サテライト・ゼウス",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🛰️",
    color: "#8b5cf6",
    title: "天空の物流神",
    lore: "人工衛星の目で世界中の物流を見渡し、荷物の迷子を一つも出さない天空の神。"
  },
  {
    id: "m37",
    name: "カラー・シャーマン",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌈",
    color: "#ec4899",
    title: "七色塗装の巫女",
    lore: "車体に七色の光をまとわせる塗装の巫女。見ばえを極めた者だけが会える。"
  },
  {
    id: "m38",
    name: "ギア・エンペラー",
    rarity: "UR",
    stars: "★★★★★",
    icon: "⚙️",
    color: "#0f766e",
    title: "歯車帝国の皇帝",
    lore: "大小の歯車を束ねる皇帝。すべての部品が噛み合うとき、工場は最強になる。"
  },
  {
    id: "m39",
    name: "グローバル・ポセイドン",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌏",
    color: "#2563eb",
    title: "世界貿易の海神",
    lore: "世界中の港を結ぶ海の神様。日本の車が外国の道を走る未来を見守る。"
  },
  {
    id: "m40",
    name: "ミライ・オラクル",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🔮",
    color: "#a855f7",
    title: "未来の車を視る預言者",
    lore: "自動運転や空飛ぶ車など、未来の工業を水晶玉に映し出す預言者。"
  },
  {
    id: "m41",
    name: "コトダマ・オーバーロード",
    rarity: "LEGEND",
    stars: "👑★★★★★",
    icon: "🌟",
    color: "#fbbf24",
    title: "言霊を統べる創造神",
    lore: "すべての工場と言霊の力をひとつにまとめる究極の存在。出会えた者は伝説になる！"
  },
  {
    id: "m42",
    name: "ニッポン・ヤマタノオロチ",
    rarity: "LEGEND",
    stars: "👑★★★★★",
    icon: "🐲",
    color: "#f59e0b",
    title: "八つの工業地帯の大蛇",
    lore: "日本の八つの工業地帯を守る伝説の大蛇。八つの頭が日本のものづくりを支える。"
  },
  {
    id: "m43",
    name: "ライス・スプライト",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌾",
    color: "#ca8a04",
    title: "田んぼの稲穂の精",
    lore: "夏の太陽をいっぱい浴びて、おいしいお米を実らせる稲穂の精。"
  },
  {
    id: "m44",
    name: "ライス・ベア",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🍚",
    color: "#e5e7eb",
    title: "おにぎり大好きクマ",
    lore: "新潟のお米が大好きなクマ。ほかほかのごはんをいつも抱えている。"
  },
  {
    id: "m45",
    name: "トマト・ピクシー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🍅",
    color: "#ef4444",
    title: "ハウス栽培の赤い妖精",
    lore: "ビニールハウスの中で育つ真っ赤な妖精。寒い土地でも一年中あまくなる。"
  },
  {
    id: "m46",
    name: "ミカン・フォックス",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🍊",
    color: "#f97316",
    title: "あたたかい土地のキツネ",
    lore: "あたたかい和歌山や愛媛の山で、みかんの木を見守るキツネ。"
  },
  {
    id: "m47",
    name: "リンゴ・ラビット",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🍎",
    color: "#dc2626",
    title: "すずしい高原のウサギ",
    lore: "青森や長野のすずしい気候が大好き。まっ赤なリンゴをかかえている。"
  },
  {
    id: "m48",
    name: "ミルク・カウ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐄",
    color: "#f1f5f9",
    title: "北海道の酪農ウシ",
    lore: "広い牧場でのびのび育ち、おいしい牛乳をたくさん出してくれるウシ。"
  },
  {
    id: "m49",
    name: "ポーク・ピッグ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐖",
    color: "#fda4af",
    title: "元気いっぱいのブタ",
    lore: "大きな農場で育つ、ごきげんなブタ。食べるのも運動するのも大好き。"
  },
  {
    id: "m50",
    name: "エッグ・チック",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🥚",
    color: "#fde68a",
    title: "たまごから生まれたヒヨコ",
    lore: "養鶏場で毎日たまごをとどけるニワトリの子ども。"
  },
  {
    id: "m51",
    name: "ツナ・フィッシュ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐟",
    color: "#0ea5e9",
    title: "遠洋を泳ぐマグロ",
    lore: "遠い海を泳いで旅するマグロ。漁船が追いかける人気者。"
  },
  {
    id: "m52",
    name: "カニ・ナイト",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🦀",
    color: "#ef4444",
    title: "北の海のカニ騎士",
    lore: "冷たい北の海にすむ、はさみの剣を持つ騎士。"
  },
  {
    id: "m53",
    name: "ワカメ・ウィスプ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌿",
    color: "#16a34a",
    title: "養しょく場の海藻精",
    lore: "海の中でゆらゆら育つ海藻の精。養しょくいかだの仲間。"
  },
  {
    id: "m54",
    name: "スキャロップ・シェル",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐚",
    color: "#f9a8d4",
    title: "ホタテの貝がら戦士",
    lore: "貝がらをパカパカ開いて泳ぐホタテ。北海道や青森の養しょくで育つ。"
  },
  {
    id: "m55",
    name: "フィッシャー・ペンギン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐧",
    color: "#1e3a8a",
    title: "漁船のりのペンギン",
    lore: "小さな漁船に乗って、毎朝いっしょに魚をとりに出かけるペンギン。"
  },
  {
    id: "m56",
    name: "フィッシング・キャット",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🎣",
    color: "#06b6d4",
    title: "つり名人のネコ",
    lore: "のんびり釣りざおをたらす、つり名人のネコ。"
  },
  {
    id: "m57",
    name: "トラクター・タヌキ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚜",
    color: "#65a30d",
    title: "畑たがやしのタヌキ",
    lore: "大きなトラクターに乗って、畑をふかふかにたがやす力持ち。"
  },
  {
    id: "m58",
    name: "スノー・ブラザー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "⛄",
    color: "#bae6fd",
    title: "北国の雪だるま",
    lore: "雪の多い北国で、人びとのくらしを見守る雪だるま。"
  },
  {
    id: "m59",
    name: "サクラ・フェアリー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌸",
    color: "#f472b6",
    title: "春をつげる桜の妖精",
    lore: "日本の春を知らせてくれる、はなびらの妖精。"
  },
  {
    id: "m60",
    name: "フジ・ドラゴン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🗻",
    color: "#6366f1",
    title: "日本一の山のちび竜",
    lore: "日本一高い富士山のてっぺんでお昼寝するちび竜。"
  },
  {
    id: "m61",
    name: "リバー・カッパ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌊",
    color: "#0891b2",
    title: "大きな川の河童",
    lore: "長い川をまもる河童。川の水は田んぼやくらしを支えている。"
  },
  {
    id: "m62",
    name: "ブナ・トレント",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌲",
    color: "#15803d",
    title: "森をまもる木の精",
    lore: "森林で水をたくわえ、山くずれからまちを守る木の精。"
  },
  {
    id: "m63",
    name: "レイン・バニー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "☔",
    color: "#3b82f6",
    title: "梅雨をよぶウサギ",
    lore: "梅雨の季節にしとしと雨をふらせる、かさをさしたウサギ。"
  },
  {
    id: "m64",
    name: "タイフーン・スピリット",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌀",
    color: "#64748b",
    title: "夏の終わりの小さな台風",
    lore: "夏から秋にやってくる台風の子ども。大雨や強い風には注意が必要。"
  },
  {
    id: "m65",
    name: "オンセン・モンキー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "♨️",
    color: "#fb923c",
    title: "温泉につかるサル",
    lore: "火山の近くの温泉でぽかぽかするサル。観光客にも大人気。"
  },
  {
    id: "m66",
    name: "ネット・スパイダー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🕸️",
    color: "#7c3aed",
    title: "情報をつなぐクモ",
    lore: "世界中にあみの目のように情報をはりめぐらせるクモ。"
  },
  {
    id: "m67",
    name: "テレビ・ロボ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "📺",
    color: "#0f172a",
    title: "ニュースを映すロボ",
    lore: "テレビ局から送られる映像を、画面いっぱいに映し出すロボ。"
  },
  {
    id: "m68",
    name: "ニュース・バード",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "📰",
    color: "#a8a29e",
    title: "新聞をくばる鳥",
    lore: "毎朝、新聞をくわえて空を飛び、世の中のできごとを知らせる鳥。"
  },
  {
    id: "m69",
    name: "ラジオ・キャット",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "📻",
    color: "#f59e0b",
    title: "災害時に頼れるネコ",
    lore: "停電のときでも、音で情報をとどけてくれるラジオ型のネコ。"
  },
  {
    id: "m70",
    name: "スマホ・スプライト",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "📱",
    color: "#06b6d4",
    title: "ピカピカ光る通信の精",
    lore: "電波にのって、情報をいっしゅんでとどける小さな精。"
  },
  {
    id: "m71",
    name: "ゴールデン・ライスドラゴン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌾",
    color: "#eab308",
    title: "黄金の稲穂をまとう竜",
    lore: "日本の米づくりの力を集めて、黄金色に光り輝く竜。"
  },
  {
    id: "m72",
    name: "ホッカイドウ・ベア",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🐻",
    color: "#92400e",
    title: "広大な大地の王",
    lore: "広い北海道の大地で、牧場や畑を見守るクマの王。"
  },
  {
    id: "m73",
    name: "マグロ・キング",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🐟",
    color: "#1d4ed8",
    title: "大海原の王",
    lore: "世界中の海を旅する王様。泳ぐスピードは新幹線並み！"
  },
  {
    id: "m74",
    name: "スキャロップ・マーメイド",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🧜",
    color: "#0ea5e9",
    title: "養しょく場の人魚",
    lore: "豊かな海を守る人魚。魚や貝を育てる漁師さんのなかま。"
  },
  {
    id: "m75",
    name: "ギョギョ・キャプテン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "⚓",
    color: "#0369a1",
    title: "遠洋漁業の船長",
    lore: "何か月も船に乗って遠い海へ出かける、頼れる船長。"
  },
  {
    id: "m76",
    name: "アップル・ドリアード",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🍏",
    color: "#16a34a",
    title: "りんごの木の守り神",
    lore: "果樹園のりんごの木から生まれた、やさしい守り神。"
  },
  {
    id: "m77",
    name: "ミカン・ドラゴン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🍊",
    color: "#ea580c",
    title: "南国日向の橙竜",
    lore: "あたたかい南の斜面でみかんをあまくそだてるオレンジ色の竜。"
  },
  {
    id: "m78",
    name: "ヒノキ・エント",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌳",
    color: "#166534",
    title: "日本の森の守護者",
    lore: "人工林を何十年も見守りながら、木材を育て続ける大木の守護者。"
  },
  {
    id: "m79",
    name: "カザン・サラマンダー",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌋",
    color: "#dc2626",
    title: "火山に棲む炎の竜",
    lore: "日本にたくさんある火山にすむ炎の精霊。温泉もつくってくれる。"
  },
  {
    id: "m80",
    name: "アルプス・イーグル",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🦅",
    color: "#1e40af",
    title: "日本アルプスの鷲",
    lore: "高い山脈の上を飛び、日本の屋根をじっと見守るワシ。"
  },
  {
    id: "m81",
    name: "ブリザード・ウルフ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🐺",
    color: "#38bdf8",
    title: "雪原をかける白狼",
    lore: "冬の北海道を走る白いオオカミ。寒さに強い家の工夫を教えてくれる。"
  },
  {
    id: "m82",
    name: "シーサー・レオ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🦁",
    color: "#f97316",
    title: "沖縄を守る獅子",
    lore: "あたたかい沖縄の家の屋根から、まちを守る獅子の神様。"
  },
  {
    id: "m83",
    name: "ウンディーネ・スプリング",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "💧",
    color: "#0284c7",
    title: "水源の水の精霊",
    lore: "山から流れる水をきれいに保つ水の精霊。"
  },
  {
    id: "m84",
    name: "ダム・ガーディアン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🏞️",
    color: "#0e7490",
    title: "水をたくわえる守護者",
    lore: "大雨のときは水をため、日照りのときは水をくれる大きな守り手。"
  },
  {
    id: "m85",
    name: "ソーラー・サンバード",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "☀️",
    color: "#f59e0b",
    title: "太陽光発電の鳥",
    lore: "太陽の光をあつめて電気をつくる、輝くつばさの鳥。"
  },
  {
    id: "m86",
    name: "ウィンド・ドラゴン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌬️",
    color: "#14b8a6",
    title: "風車を回す風の竜",
    lore: "大きな風車を回して、風から電気をつくる竜。"
  },
  {
    id: "m87",
    name: "インターネット・ウィザード",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌐",
    color: "#4f46e5",
    title: "世界をつなぐ魔術師",
    lore: "光ファイバーの杖で、世界中に情報を一瞬でとどける魔術師。"
  },
  {
    id: "m88",
    name: "クラウド・シープ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "☁️",
    color: "#93c5fd",
    title: "データをためる雲ヒツジ",
    lore: "もこもこの雲の体に、たくさんの情報をしまっているヒツジ。"
  },
  {
    id: "m89",
    name: "ホウソウ・フェニックス",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "📡",
    color: "#ec4899",
    title: "電波でとぶ不死鳥",
    lore: "電波にのって、ニュースを日本中にとどけるフェニックス。"
  },
  {
    id: "m90",
    name: "ボウサイ・ナイト",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🛡️",
    color: "#2563eb",
    title: "災害からまもる騎士",
    lore: "地震や台風から、人びとのくらしを守る防災の騎士。"
  },
  {
    id: "m91",
    name: "ニッポン・ツルギ",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🦢",
    color: "#e2e8f0",
    title: "日本の空の鶴姫",
    lore: "白い翼で日本全国を飛びまわり、各地のめぐみを運ぶ鶴の姫。"
  },
  {
    id: "m92",
    name: "フジサン・ホウオウ",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🗻",
    color: "#a855f7",
    title: "日本一の霊峰の鳳凰",
    lore: "富士山の上でかがやく鳳凰。見られた人には幸運がおとずれる。"
  },
  {
    id: "m93",
    name: "アース・ガイア",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌍",
    color: "#16a34a",
    title: "地球をまもる大地の女神",
    lore: "地球の自然と、くらしのバランスを見守る大地の女神。"
  },
  {
    id: "m94",
    name: "ミズ・リュウジン",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🐉",
    color: "#0ea5e9",
    title: "水をつかさどる竜神",
    lore: "川や海、水そのものをあやつる、青い竜の神様。"
  },
  {
    id: "m95",
    name: "アグリ・デメテル",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌽",
    color: "#eab308",
    title: "実りの女神",
    lore: "米、野菜、くだもの……すべての農作物を実らせる実りの女神。"
  },
  {
    id: "m96",
    name: "ジョウホウ・テング",
    rarity: "UR",
    stars: "★★★★★",
    icon: "👺",
    color: "#dc2626",
    title: "情報をあやつる天狗",
    lore: "世界の情報を見通す天狗。うその情報にだまされないよう教えてくれる。"
  },
  {
    id: "m97",
    name: "ミライ・ソーラーヒメ",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌞",
    color: "#f97316",
    title: "未来エネルギーの姫",
    lore: "太陽・風・水の力をあわせ、未来の電気をつくりだす姫。"
  },
  {
    id: "m98",
    name: "ボウサイ・アークエンジェル",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🚨",
    color: "#2563eb",
    title: "まちを守る大天使",
    lore: "どんな災害からも人びとを助ける、防災の大天使。"
  },
  {
    id: "m99",
    name: "ニホンレットウ・ギガタートル",
    rarity: "LEGEND",
    stars: "👑★★★★★",
    icon: "🐢",
    color: "#facc15",
    title: "日本列島を背負う亀",
    lore: "日本列島をそっくり背中にのせた伝説の巨大亀。4つの大きな島と、たくさんの島じまを守っている。"
  },
  {
    id: "m100",
    name: "ヒカリ・アマテラス",
    rarity: "LEGEND",
    stars: "👑★★★★★",
    icon: "🌅",
    color: "#fbbf24",
    title: "朝日をよぶ太陽神",
    lore: "日本の空にのぼる太陽の力そのもの。いちばん会いにくい、まぼろしの太陽神。"
  },
  {
    id: "m101",
    name: "キャベツ・コロボックル",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🥬",
    color: "#22c55e",
    title: "高原のキャベツ妖精",
    lore: "すずしい高原で、夏でもみずみずしいキャベツを育てる小さな妖精。"
  },
  {
    id: "m102",
    name: "キュウリ・ガエル",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🥒",
    color: "#16a34a",
    title: "夏やさい大好きカエル",
    lore: "ビニールハウスでぐんぐんのびるキュウリが大好きなカエル。"
  },
  {
    id: "m103",
    name: "ブドウ・ミンク",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🍇",
    color: "#7c3aed",
    title: "山なしのブドウ畑の番人",
    lore: "日当たりのよい山のしゃ面で、ブドウのふさを守るイタチ。"
  },
  {
    id: "m104",
    name: "モモ・ピーチ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🍑",
    color: "#fb7185",
    title: "ふっくらあまいモモの子",
    lore: "山梨や福島で育つ、あまいモモの形をした元気な子。"
  },
  {
    id: "m105",
    name: "チャ・サムライ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🍵",
    color: "#4ade80",
    title: "お茶つみのサムライ",
    lore: "静岡の茶畑でおいしい新茶をつむ、緑のサムライ。"
  },
  {
    id: "m106",
    name: "ニワトリ・コッコ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐓",
    color: "#f97316",
    title: "朝をつげる養鶏場の主",
    lore: "毎朝コケコッコーと元気に鳴いて、たまごを産んでくれるニワトリ。"
  },
  {
    id: "m107",
    name: "ウール・シープ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐑",
    color: "#f1f5f9",
    title: "ふわふわ牧場のヒツジ",
    lore: "もこもこの毛をまとった牧場のヒツジ。冬のぼうし作りが得意。"
  },
  {
    id: "m108",
    name: "ホース・ランナー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐎",
    color: "#92400e",
    title: "北の大地を走るウマ",
    lore: "広い北海道の牧場を風のように走り回るウマ。"
  },
  {
    id: "m109",
    name: "エビ・ファイター",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🦐",
    color: "#fb923c",
    title: "養しょく池のエビ戦士",
    lore: "ぷりぷりの体でハサミをふりまわす、海のエビ戦士。"
  },
  {
    id: "m110",
    name: "タコ・マスター",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐙",
    color: "#a855f7",
    title: "うで八本の漁師",
    lore: "八本のうでで漁あみを引き上げる、器用なタコ。"
  },
  {
    id: "m111",
    name: "サンマ・ブレード",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🐠",
    color: "#06b6d4",
    title: "秋の海をかけるサンマ",
    lore: "秋になると北から南へ泳いでくる、細くて速い刀のようなサンマ。"
  },
  {
    id: "m112",
    name: "イカ・ランタン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🦑",
    color: "#e11d48",
    title: "夜の海の光るイカ",
    lore: "夜の海で明かりをともしてさそう、イカ釣り船のなかま。"
  },
  {
    id: "m113",
    name: "サンゴ・ガーディアン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🪸",
    color: "#f472b6",
    title: "南の海のサンゴ守り",
    lore: "あたたかい沖縄の海で、サンゴしょうを守る小さな守護者。"
  },
  {
    id: "m114",
    name: "ハンマー・ドワーフ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "⚒️",
    color: "#64748b",
    title: "鉄をきたえる小人",
    lore: "熱い鉄をトンカンたたいて、じょうぶな部品を作る小人。"
  },
  {
    id: "m115",
    name: "ヨウコウ・イフリート",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🔥",
    color: "#ea580c",
    title: "ほのおの鉄づくり",
    lore: "ようこうろの中で、鉄鉱石をドロドロにとかすほのおの精。"
  },
  {
    id: "m116",
    name: "ミシン・スパイダー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🧵",
    color: "#ec4899",
    title: "せんいの糸あやつり",
    lore: "細い糸をあやつって、じょうぶな布を織り上げるクモ。"
  },
  {
    id: "m117",
    name: "ケミカル・スライム",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🧪",
    color: "#84cc16",
    title: "石油から生まれたスライム",
    lore: "石油からいろいろな製品の原料になる、不思議なスライム。"
  },
  {
    id: "m118",
    name: "オイル・タンカー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🛢️",
    color: "#374151",
    title: "石油をはこぶ巨大船",
    lore: "外国から石油をたっぷりはこんでくる、大きなタンカー。"
  },
  {
    id: "m119",
    name: "カンヅメ・ゴブリン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🥫",
    color: "#dc2626",
    title: "食品工場のゴブリン",
    lore: "おいしい食品をカンヅメにして、長持ちさせる小さなゴブリン。"
  },
  {
    id: "m120",
    name: "パン・ベイカー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🍞",
    color: "#d97706",
    title: "ふっくら焼きたてパン",
    lore: "こむぎ粉から、おいしいパンを焼き上げる食品工場の職人。"
  },
  {
    id: "m121",
    name: "カマボコ・ミニオン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🍥",
    color: "#fda4af",
    title: "魚のすり身の子",
    lore: "魚のすり身から生まれた、ぷるぷるのかわいい子。"
  },
  {
    id: "m122",
    name: "クレーン・ジャイアント",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🏗️",
    color: "#eab308",
    title: "港のクレーン巨人",
    lore: "コンテナを高く持ち上げて、船につみこむ力持ち。"
  },
  {
    id: "m123",
    name: "トラック・ドラゴン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚛",
    color: "#2563eb",
    title: "荷物をとどける運び屋",
    lore: "高速道路を走って、全国へ荷物をとどけるトラック竜。"
  },
  {
    id: "m124",
    name: "ジェット・スワロー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "✈️",
    color: "#38bdf8",
    title: "空をわたるツバメ",
    lore: "飛行機のように速く、軽い荷物を遠くへ運ぶツバメ。"
  },
  {
    id: "m125",
    name: "デンシャ・ワーム",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚃",
    color: "#16a34a",
    title: "ガタゴト走る電車",
    lore: "町と町をつなぐ、通勤電車のようなイモムシ。"
  },
  {
    id: "m126",
    name: "バス・ベア",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚌",
    color: "#f59e0b",
    title: "町をめぐる路線バス",
    lore: "みんなを乗せて町を走る、やさしいクマ運転手。"
  },
  {
    id: "m127",
    name: "ハイウェイ・スネーク",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🛣️",
    color: "#6b7280",
    title: "長く伸びる高速道路",
    lore: "日本中をむすぶ道路にそって、くねくね走るヘビ。"
  },
  {
    id: "m128",
    name: "ブリッジ・カメレオン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌉",
    color: "#0ea5e9",
    title: "海をわたる橋の守り",
    lore: "島と島をむすぶ大きな橋にすむカメレオン。"
  },
  {
    id: "m129",
    name: "レール・モグラ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🛤️",
    color: "#a16207",
    title: "トンネルをほるモグラ",
    lore: "山をつらぬくトンネルをほって、線路をつなぐモグラ。"
  },
  {
    id: "m130",
    name: "ポスト・ペリカン",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "📮",
    color: "#ef4444",
    title: "手紙をとどける配達員",
    lore: "日本中に手紙をとどける、赤いポストのペリカン。"
  },
  {
    id: "m131",
    name: "デンワ・ウサギ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "📞",
    color: "#8b5cf6",
    title: "声をつなぐ通信ウサギ",
    lore: "遠くの人と声をつなげる、長い耳のウサギ。"
  },
  {
    id: "m132",
    name: "パソコン・ミミック",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "💻",
    color: "#475569",
    title: "調べものが得意",
    lore: "インターネットで何でも調べてくれる、パソコンの形のモンスター。"
  },
  {
    id: "m133",
    name: "カメラ・カメ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "📸",
    color: "#f43f5e",
    title: "ニュースを撮るカメ",
    lore: "現場へかけつけて、ニュースの写真をとるカメ。"
  },
  {
    id: "m134",
    name: "アンテナ・カエル",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "📡",
    color: "#0891b2",
    title: "電波をキャッチ",
    lore: "空からの電波をキャッチして、番組を届けるカエル。"
  },
  {
    id: "m135",
    name: "シンリン・エルフ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌳",
    color: "#15803d",
    title: "森を守るエルフ",
    lore: "山の森で木を育て、水をたくわえる森のエルフ。"
  },
  {
    id: "m136",
    name: "ログ・ビーバー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🪵",
    color: "#92400e",
    title: "丸太を運ぶビーバー",
    lore: "切り出した丸太を川に流す、働き者のビーバー。"
  },
  {
    id: "m137",
    name: "ヤマ・カモシカ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🏔️",
    color: "#94a3b8",
    title: "けわしい山のカモシカ",
    lore: "日本の山地にすむ、じょうぶな足のカモシカ。"
  },
  {
    id: "m138",
    name: "ダム・ビーバー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🏞️",
    color: "#38bdf8",
    title: "水をためる名人",
    lore: "雨の水をためて、町に分けてあげる水の番人。"
  },
  {
    id: "m139",
    name: "スイドウ・ドロップ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚰",
    color: "#60a5fa",
    title: "きれいな水のしずく",
    lore: "じょう水場できれいになって、家の蛇口にとどくしずく。"
  },
  {
    id: "m140",
    name: "リサイクル・ゴースト",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "♻️",
    color: "#22c55e",
    title: "ごみを生き返らせる",
    lore: "ごみを分別して、新しい資源に生まれ変わらせる優しい幽霊。"
  },
  {
    id: "m141",
    name: "ゴミ・クリーナー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🗑️",
    color: "#64748b",
    title: "町をきれいにする掃除屋",
    lore: "ごみしゅうしゅう車に乗って、毎日町をきれいにする。"
  },
  {
    id: "m142",
    name: "デンリョク・ネズミ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🔌",
    color: "#facc15",
    title: "電気を運ぶネズミ",
    lore: "発電所から家まで、電線を伝って電気を運ぶ。"
  },
  {
    id: "m143",
    name: "フウリョク・クルクル",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌬️",
    color: "#7dd3fc",
    title: "風車の子",
    lore: "風の力でくるくる回って、電気を生み出す風車の子。"
  },
  {
    id: "m144",
    name: "タイヨウ・ヒマワリ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌞",
    color: "#fbbf24",
    title: "太陽光発電の花",
    lore: "太陽の光をいっぱい集めて電気にする、ヒマワリ。"
  },
  {
    id: "m145",
    name: "ショウボウ・ドッグ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🧯",
    color: "#ef4444",
    title: "火事から守る犬",
    lore: "火事のときにかけつける、消防隊のイヌ。"
  },
  {
    id: "m146",
    name: "パトロール・フクロウ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚓",
    color: "#1d4ed8",
    title: "町の安全を見守る",
    lore: "夜の町をパトロールして、みんなを守るフクロウ。"
  },
  {
    id: "m147",
    name: "キュウキュウ・ウサギ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🚑",
    color: "#f87171",
    title: "命を救う救急隊",
    lore: "けが人を助けに、サイレンを鳴らして急ぐ救急隊のウサギ。"
  },
  {
    id: "m148",
    name: "ツナミ・ウォッチャー",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🌊",
    color: "#0ea5e9",
    title: "津波を見守る",
    lore: "海の波の変化を見守り、早く知らせる見張り番。"
  },
  {
    id: "m149",
    name: "ドシャ・ゴーレム",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "⛰️",
    color: "#a8a29e",
    title: "土砂くずれを止める",
    lore: "がけの土砂くずれを防ぐ、石でできたゴーレム。"
  },
  {
    id: "m150",
    name: "ニッポン・キューブ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🗾",
    color: "#4ade80",
    title: "日本地図のカタマリ",
    lore: "日本の地形を体に刻んだ、四角いふしぎな生き物。"
  },
  {
    id: "m151",
    name: "コンパス・キツネ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🧭",
    color: "#0d9488",
    title: "方角を知るキツネ",
    lore: "北をさす針で、迷わず道案内をするキツネ。"
  },
  {
    id: "m152",
    name: "チズ・フクロウ",
    rarity: "SR",
    stars: "★★★☆☆",
    icon: "🗺️",
    color: "#d97706",
    title: "地図を読む博士",
    lore: "地図記号をぜんぶ知っている物知りのフクロウ。"
  },
  {
    id: "m153",
    name: "ロボット・エンジニア",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🤖",
    color: "#6366f1",
    title: "ロボットのかしこい技師",
    lore: "ロボットをプログラムして、工場の作業を自動でこなす技師。"
  },
  {
    id: "m154",
    name: "コウジョウ・ゴーレム",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🏭",
    color: "#78716c",
    title: "煙を上げる工場の主",
    lore: "たくさんの機械を動かして、毎日製品をつくる工場のゴーレム。"
  },
  {
    id: "m155",
    name: "スポーツカー・ガルーダ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🚗",
    color: "#ef4444",
    title: "最高速の自動車鳥",
    lore: "風を切って走る、流線形の自動車の鳥。"
  },
  {
    id: "m156",
    name: "ギア・ドラゴン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "⚙️",
    color: "#94a3b8",
    title: "歯車の竜",
    lore: "何百もの歯車がかみあって動く、メカの竜。"
  },
  {
    id: "m157",
    name: "メンテナンス・フェアリー",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🔧",
    color: "#0ea5e9",
    title: "機械を直す妖精",
    lore: "こわれた機械を、すぐに直してくれる小さな妖精。"
  },
  {
    id: "m158",
    name: "レース・フェニックス",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🏎️",
    color: "#dc2626",
    title: "炎の走り屋",
    lore: "エンジンのうなりと炎をまとって走る不死鳥。"
  },
  {
    id: "m159",
    name: "ゴウカ・クルーザー",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🚢",
    color: "#1e40af",
    title: "大海原の巨大船",
    lore: "世界中の海をわたって、荷物を運ぶ巨大な船。"
  },
  {
    id: "m160",
    name: "スカイ・ライナー",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🛫",
    color: "#38bdf8",
    title: "空の旅人",
    lore: "日本から世界へ、人と荷物を運ぶ飛行機の竜。"
  },
  {
    id: "m161",
    name: "シンカンセン・ファルコン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🚅",
    color: "#e0f2fe",
    title: "ビュンと走る新幹線",
    lore: "日本中を速く走る、白くてかっこいいハヤブサ。"
  },
  {
    id: "m162",
    name: "ネットワーク・クモ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "📶",
    color: "#a78bfa",
    title: "世界をつなぐ糸",
    lore: "世界中のコンピューターをつなぐ、光る糸を持つクモ。"
  },
  {
    id: "m163",
    name: "ホウソウ・キャスター",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "📺",
    color: "#f59e0b",
    title: "ニュースを伝える司会",
    lore: "テレビの前の人たちに、正しい情報を伝える司会者。"
  },
  {
    id: "m164",
    name: "ノウギョウ・ハーベスター",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🧑‍🌾",
    color: "#65a30d",
    title: "収穫の達人",
    lore: "田んぼと畑で、大きなコンバインを動かす農家。"
  },
  {
    id: "m165",
    name: "コメ・ヒメ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌾",
    color: "#facc15",
    title: "黄金の稲穂のお姫様",
    lore: "黄金色の稲穂をまとった、お米の国のお姫様。"
  },
  {
    id: "m166",
    name: "ラクノウ・ミノタウロス",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🐮",
    color: "#ca8a04",
    title: "牧場の力持ち",
    lore: "広い牧場で牛を育てる、力持ちのミノタウロス。"
  },
  {
    id: "m167",
    name: "ギョギョウ・ネプチューン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🐟",
    color: "#0369a1",
    title: "漁業の海王",
    lore: "あみを広げて海を守る、りっぱなひげの海王。"
  },
  {
    id: "m168",
    name: "オキナワ・シーサー",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🏝️",
    color: "#14b8a6",
    title: "南の島のシーサー",
    lore: "あたたかい島で、家を守り続けるシーサー。"
  },
  {
    id: "m169",
    name: "ホッカイドウ・ユキウサギ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "❄️",
    color: "#bae6fd",
    title: "雪国の白いウサギ",
    lore: "雪の降る北海道で、元気に走る白いウサギ。"
  },
  {
    id: "m170",
    name: "ジョウカ・サムライ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🏯",
    color: "#b45309",
    title: "お城の武将",
    lore: "昔から日本を守ってきた、お城のサムライ。"
  },
  {
    id: "m171",
    name: "トリイ・キツネ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "⛩️",
    color: "#dc2626",
    title: "神社を守る稲荷",
    lore: "赤い鳥居の前で、みんなのお願いを聞く白ギツネ。"
  },
  {
    id: "m172",
    name: "フンカ・ドラゴン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌋",
    color: "#f97316",
    title: "火山の竜",
    lore: "火山の山をふるわせて、あつい溶岩をふきだす竜。"
  },
  {
    id: "m173",
    name: "カイガン・マーメイド",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🏖️",
    color: "#fde047",
    title: "砂浜の人魚",
    lore: "きれいな海岸に歌声をひびかせる人魚。"
  },
  {
    id: "m174",
    name: "ニジ・ユニコーン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌈",
    color: "#c084fc",
    title: "雨上がりの七色",
    lore: "雨の後に空をかける、虹色のユニコーン。"
  },
  {
    id: "m175",
    name: "ハル・サクラドラゴン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🌸",
    color: "#f9a8d4",
    title: "桜前線を運ぶ竜",
    lore: "南から北へ、桜の季節を運んでいく春の竜。"
  },
  {
    id: "m176",
    name: "アキ・モミジフォックス",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🍁",
    color: "#ea580c",
    title: "紅葉の狐",
    lore: "山を赤くそめる、紅葉をまとったキツネ。"
  },
  {
    id: "m177",
    name: "フユ・ユキダルマン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "⛄",
    color: "#e0f2fe",
    title: "雪国の雪だるま",
    lore: "豪雪地帯で、人々の暮らしを見守る大きな雪だるま。"
  },
  {
    id: "m178",
    name: "ハツデン・サンダー",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "⚡",
    color: "#facc15",
    title: "発電所の雷鳥",
    lore: "ダムや火力発電所で、電気を生み出す雷の鳥。"
  },
  {
    id: "m179",
    name: "エコ・フェニックス",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "♻️",
    color: "#10b981",
    title: "資源を生まれ変わらせる",
    lore: "もえかすの灰から資源をよみがえらせる緑の不死鳥。"
  },
  {
    id: "m180",
    name: "ボウサイ・ガーディアン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🛡️",
    color: "#2563eb",
    title: "災害から守る盾",
    lore: "地震や台風から町を守る、大きな盾を持つ戦士。"
  },
  {
    id: "m181",
    name: "ジョウホウ・ライブラリアン",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "📖",
    color: "#7c3aed",
    title: "情報を見ぬく司書",
    lore: "ほんとうの情報とニセの情報を見分ける、図書館の賢者。"
  },
  {
    id: "m182",
    name: "ガクシュウ・セージ",
    rarity: "SSR",
    stars: "★★★★☆",
    icon: "🧑‍🏫",
    color: "#0ea5e9",
    title: "勉強の守り神",
    lore: "社会科をたくさん学んだ人にそっと力をかしてくれる、やさしい賢者。"
  },
  {
    id: "m183",
    name: "ヒノマル・ドラゴン",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🐉",
    color: "#ef4444",
    title: "朝日のような赤い竜",
    lore: "日の丸のように赤く輝く、日本を象徴する竜。"
  },
  {
    id: "m184",
    name: "サクラ・ヒメミコ",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌸",
    color: "#f472b6",
    title: "春をつげる巫女",
    lore: "日本の春をひとつにつなぐ、桜の巫女。"
  },
  {
    id: "m185",
    name: "ショーグン・ナイト",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🏯",
    color: "#a16207",
    title: "時代を超える武将",
    lore: "昔から今まで日本を守り続ける、金の鎧の武将。"
  },
  {
    id: "m186",
    name: "コウテツ・フェニックス",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🔥",
    color: "#f97316",
    title: "鉄をきたえる炎鳥",
    lore: "ようこうろの炎を全身にまとった、鋼の不死鳥。"
  },
  {
    id: "m187",
    name: "ノゾミ・ライコウ",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🚄",
    color: "#60a5fa",
    title: "雷をまとう新幹線",
    lore: "雷のように駆け抜ける、最強の新幹線の竜。"
  },
  {
    id: "m188",
    name: "ニホンカイ・リヴァイアサン",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌊",
    color: "#0284c7",
    title: "日本海の大海獣",
    lore: "冬の荒波を操る日本海の大海獣。"
  },
  {
    id: "m189",
    name: "ヒダ・ホワイトタイガー",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🏔️",
    color: "#cbd5e1",
    title: "日本アルプスの白虎",
    lore: "雪をかぶった山脈をかけぬける、気高い白虎。"
  },
  {
    id: "m190",
    name: "ミノリ・ゴールドクイーン",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌾",
    color: "#eab308",
    title: "黄金の稲穂の女王",
    lore: "日本中の田んぼを黄金色にそめる、実りの女王。"
  },
  {
    id: "m191",
    name: "カイヨウ・ポセイドン",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🐟",
    color: "#0ea5e9",
    title: "海の漁業神",
    lore: "豊かな海を守り、漁の安全を願う海の神。"
  },
  {
    id: "m192",
    name: "ソーラー・ゴッデス",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌞",
    color: "#fde047",
    title: "太陽のエネルギー神",
    lore: "太陽の光からエネルギーを集めて、世界にとどける女神。"
  },
  {
    id: "m193",
    name: "インターネット・オーディン",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌐",
    color: "#6366f1",
    title: "情報の主神",
    lore: "世界中の情報を一つにつなぐ、ふしぎな賢者。"
  },
  {
    id: "m194",
    name: "ウチュウ・ヒメ",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🛰️",
    color: "#818cf8",
    title: "宇宙から見守る姫",
    lore: "人工衛星で地球を見守る、宇宙のお姫様。"
  },
  {
    id: "m195",
    name: "ボウサイ・ヴァルキリー",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🛡️",
    color: "#16a34a",
    title: "命を守る戦女神",
    lore: "台風や地震から、人々の命を守る戦女神。"
  },
  {
    id: "m196",
    name: "チキュウ・ガイア",
    rarity: "UR",
    stars: "★★★★★",
    icon: "🌍",
    color: "#22c55e",
    title: "地球を守る母なる神",
    lore: "豊かな自然と未来の地球を守る、母なる大地の神。"
  },
  {
    id: "m197",
    name: "ジュウニ・コトダマ",
    rarity: "LEGEND",
    stars: "👑★★★★★",
    icon: "🌟",
    color: "#fbbf24",
    title: "言霊の神様",
    lore: "すべての言葉と知識を宿す、いちばん会えない言霊の神様。"
  },
  {
    id: "m198",
    name: "ニッポン・ゲンブ",
    rarity: "LEGEND",
    stars: "👑★★★★★",
    icon: "🐢",
    color: "#10b981",
    title: "日本列島の守護神",
    lore: "日本列島すべてを背に乗せ、四季を守り続ける玄武。"
  },
  {
    id: "m199",
    name: "ヤタガラス・サンバード",
    rarity: "LEGEND",
    stars: "👑★★★★★",
    icon: "🦅",
    color: "#f59e0b",
    title: "太陽の三本足の鴉",
    lore: "日本の神話に出てくる、太陽の使い。"
  },
  {
    id: "m200",
    name: "ミライ・ニジリュウ",
    rarity: "LEGEND",
    stars: "👑★★★★★",
    icon: "🌈",
    color: "#a78bfa",
    title: "未来を照らす虹の竜",
    lore: "未来の社会を七色に照らす、伝説の虹の竜。"
  }
];

const UNITS = [
  // ==========================================================================
  // 単元1：教科書（下）10〜15ページ「自動車をつくる工業 〜 自動車を組み立てる工場」
  // ==========================================================================
  {
    id: "shakai5_ge_p10_15",
    grade: "小学5年 社会（下）",
    pages: "10〜15ページ",
    title: "自動車をつくる工業 〜 自動車を組み立てる工場",
    subtitle: "機械工業の特色と、工場で早く・正確に・むだなく車をつくる工夫",
    icon: "🚗",
    bossName: "鋼鉄機神 ギガ・ファクトリー",
    bossIcon: "👾",

    // ==========================================
    // WAVE 1 (Step 1): 通常攻撃＆コンボバトル（4択クイズ）
    // ==========================================
    step1_quiz: [
      {
        id: "q1",
        type: "知識・資料読解",
        page: "p.10",
        enemyName: "グラフ・ガーゴイル",
        enemyIcon: "🦇",
        question: "日本の工業の中で生産額のわりあいが最も高く、自動車などの「輸送用機械」がさかんな工業は何ですか。",
        choices: [
          "機械工業",
          "化学工業",
          "金属工業",
          "食料品工業"
        ],
        answer: "機械工業",
        keywords: ["機械工業", "輸送用機械", "生産額が最も高い"],
        explanation: "日本の工業生産額の約半分（45.3%）を「機械工業」が占めています。その中でも自動車などの「輸送用機械」が最も大きなわりあいを占めています。"
      },
      {
        id: "q2",
        type: "知識・概念",
        page: "p.12",
        enemyName: "パーツ・スライム群",
        enemyIcon: "⚙️",
        question: "自動車は、エンジンやタイヤから細かいねじまで合わせると、およそ何個の部品からできていますか。",
        choices: [
          "約3万個",
          "約3千個",
          "約400個",
          "約1500個"
        ],
        answer: "約3万個",
        keywords: ["約3万個", "多くの関連工場"],
        explanation: "【大事な数字！】1台の自動車は「約3万個」もの部品からできています。「3千個」とまちがえやすいので、「3万」をしっかり覚えよう！"
      },
      {
        id: "q3",
        type: "知識・工程",
        page: "p.14",
        enemyName: "アイアン・ゴーレム",
        enemyIcon: "🗿",
        question: "鉄の板を切り取り、機械で折り曲げたり打ちぬいたりして、ドアやゆか、屋根などをつくる工程を何といいますか。",
        choices: [
          "プレス",
          "ようせつ",
          "とそう",
          "検査"
        ],
        answer: "プレス",
        keywords: ["プレス", "鉄の板を折り曲げる・打ちぬく"],
        explanation: "巻かれた鉄の板を切り取り、巨大なプレス機で力を加えて折り曲げたり打ちぬいたりする最初の工程を「プレス」といいます。"
      },
      {
        id: "q4",
        type: "思考・理由",
        page: "p.14",
        enemyName: "ロボット・センチネル",
        enemyIcon: "🤖",
        question: "プレスやようせつなど、大きな部品や重い部品を取りつけるときに、主にロボットや機械を使うのはなぜですか。",
        choices: [
          "すばやくたくさんの自動車をつくるため",
          "部品の数をへらして車を軽くするため",
          "検査をしないで出荷できるようにするため",
          "すべて同じ種類の車だけをつくるため"
        ],
        answer: "すばやくたくさんの自動車をつくるため",
        keywords: ["すばやく", "たくさんの自動車", "ロボット"],
        explanation: "【記述にも出る重要ポイント！】大きな部品や重い部品の取り付け、細かい溶接などをロボットで行うのは、「すばやくたくさんの自動車をつくるため」です。"
      },
      {
        id: "q5",
        type: "思考・理由",
        page: "p.14",
        enemyName: "サビサビ・アーマー",
        enemyIcon: "🛡️",
        question: "ようせつされた車体をあらい、買う人の希望に合わせて4回も「とそう」をするのはなぜですか。",
        choices: [
          "車体のさびを防いだり、見ばえをよくしたりするため",
          "鉄の板を熱でとかして、つなぎ合わせるため",
          "車体を重くして、風で飛ばされないようにするため",
          "ブレーキや水もれなどの異常を直すため"
        ],
        answer: "車体のさびを防いだり、見ばえをよくしたりするため",
        keywords: ["さびを防ぐ", "見ばえをよくする"],
        explanation: "【記述の頻出問題！】とそうを4回も重ねるのは、「①車体のさびを防ぐため」と「②見ばえをよくするため」の2つの理由があります。"
      },
      {
        id: "q6",
        type: "知識・重要語句",
        page: "p.15",
        enemyName: "ベルト・ワーム",
        enemyIcon: "🐛",
        question: "一定の速さで進むコンベヤーの上で作業を分たんし、正確に自動車を組み立てる流れのことを何といいますか。",
        choices: [
          "組み立てライン",
          "関連工場",
          "モーターショー",
          "輸送用機械"
        ],
        answer: "組み立てライン",
        keywords: ["組み立てライン", "コンベヤー", "作業を分たん"],
        explanation: "【重要語句！】一定の速さで動くラインの上で、作業を分担し、車を組み立てられる流れのことを「組み立てライン」といいます。"
      },
      {
        id: "q7",
        type: "思考・工夫",
        page: "p.14",
        enemyName: "ミラージュ・カメレオン",
        enemyIcon: "🦎",
        question: "消費者の注文に合わせてちがう色や種類の車を1つの流れの中でつくるとき、まちがいを防ぐためにどんな工夫をしていますか。",
        choices: [
          "注文した色や種類などが書かれた「指示ビラ」を車につける",
          "毎日1種類の色と形の自動車だけを決めて組み立てる",
          "お客さんに工場へ来てもらい、自分で部品を選んでもらう",
          "完成したあとで、注文に合わせて部品をすべて取りかえる"
        ],
        answer: "注文した色や種類などが書かれた「指示ビラ」を車につける",
        keywords: ["指示ビラ", "注文した色や種類", "まちがいを防ぐ"],
        explanation: "【思考・工夫のポイント！】1つのラインにいろいろな色・種類の車が流れてくるため、車体に「指示ビラ」をつけて部品の取り付けまちがいを防いでいます。"
      },
      {
        id: "q8",
        type: "知識・工夫",
        page: "p.14",
        enemyName: "サイレン・ゴースト",
        enemyIcon: "👻",
        question: "作業中に何か異常が起きたり作業がおくれたりしたとき、よび出しボタンをおした人の場所を知らせる表示や音を何といいますか。",
        choices: [
          "アンドン",
          "らくらくシート",
          "指示ビラ",
          "プレス機"
        ],
        answer: "アンドン",
        keywords: ["アンドン", "よび出しボタンをおす", "異常やおくれを知らせる"],
        explanation: "【まぎらわしい！】おすのは「よび出しボタン」、光や音で場所を知らせる表示のしくみが「アンドン」です。問題文の最後が「〜をおす」か「表示や音」かよく見よう！"
      },
      {
        id: "q9",
        type: "思考・理由",
        page: "p.15",
        enemyName: "ボックス・ミミック",
        enemyIcon: "📦",
        question: "1台の自動車に必要な部品をあらかじめ箱にそろえ、自動車といっしょにコンベヤーで運ぶようにしたのはなぜですか。",
        choices: [
          "部品を取りに行く手間を省き、より作業に集中できるようにするため",
          "余った部品をすべて次の車にそのまま取りつけるため",
          "ロボットを使わずに、1人で1台の車を組み立てるため",
          "部品の検査を省略して、すぐに出荷できるようにするため"
        ],
        answer: "部品を取りに行く手間を省き、より作業に集中できるようにするため",
        keywords: ["手間を省き", "作業に集中できるようにする"],
        explanation: "【記述にも出る重要ポイント！】必要な部品を箱にそろえて車と一緒に流すことで、「部品を取りに行く手間を省き、より作業に集中できるようにするため」です。"
      },
      {
        id: "q10",
        type: "知識・工夫",
        page: "p.15",
        enemyName: "ジャスト・ナイト",
        enemyIcon: "⚔️",
        question: "使った分の部品だけを注文して部品を余らせないようにするために、部品の種類や数が書かれた紙を何といいますか。",
        choices: [
          "かんばん",
          "アンドン",
          "指示ビラ",
          "見学カード"
        ],
        answer: "かんばん",
        keywords: ["かんばん", "使った分の部品だけ注文", "部品を余らせない"],
        explanation: "部品の種類や数が書かれた「かんばん」を使って、使った分だけ注文することで、工場に余分な部品を置かずむだをなくしています。"
      }
    ],

    // ==========================================
    // WAVE 2 (Step 2): 雷撃バリア破壊パズル（語句ブロック並び替え）
    // ==========================================
    step2_puzzle: [
      {
        id: "p1",
        page: "p.14",
        enemyName: "重機竜 メカ・レックス",
        enemyIcon: "🦖",
        category: "バリア①：ロボット導入の理由",
        question: "プレスやようせつなどの工程で、主にロボットや機械を使うのはなぜですか。",
        blocks: [
          "大きな部品や",
          "重い部品をとりつけ、",
          "すばやくたくさんの",
          "自動車をつくるため。"
        ],
        point: "「どんな作業を（大きな・重い部品）」「どうするために（すばやく・たくさんつくるため）」の順につなぐとバリアを破壊できます！"
      },
      {
        id: "p2",
        page: "p.14",
        enemyName: "腐食魔獣 ラスト・ヒドラ",
        enemyIcon: "🐉",
        category: "バリア②：4回塗装の理由",
        question: "ようせつされた車体をあらい、4回も「とそう」をするのはなぜですか。",
        blocks: [
          "車体のさびを",
          "防いだり、",
          "見ばえをよく",
          "したりするため。"
        ],
        point: "とそうの理由は「①さびを防ぐ」「②見ばえをよくする」の2つです。「〜たり、〜たりするため。」の形を使うときれいに書けます。"
      },
      {
        id: "p3",
        page: "p.14",
        enemyName: "幻惑魔導師 カオス・ライン",
        enemyIcon: "🧙‍♂️",
        category: "バリア③：多品種生産の工夫",
        question: "ちがう色や種類の車を1つの流れの中でつくるとき、まちがいを防ぐためにどんな工夫をしていますか。",
        blocks: [
          "注文した色や",
          "種類などが書かれた",
          "「指示ビラ」を",
          "車につけている。"
        ],
        point: "「何が書かれた（注文した色や種類）」「何を（指示ビラを）」「どうしているか（車につけている）」の順に組み立てます。"
      },
      {
        id: "p4",
        page: "p.15",
        enemyName: "迷宮騎士 ラビリンス・ギア",
        enemyIcon: "🤖",
        category: "バリア④：部品運搬の理由",
        question: "1台の自動車に必要な部品をあらかじめ箱にそろえ、車といっしょにコンベヤーで運ぶのはなぜですか。",
        blocks: [
          "部品を取りに行く",
          "手間を省き、",
          "より作業に集中",
          "できるようにするため。"
        ],
        point: "「何をなくして（部品を取りに行く手間を省き）」「どうするためか（より作業に集中できるようにするため）」をつなげます。"
      },
      {
        id: "p5",
        page: "p.15",
        enemyName: "暴食魔王 オーバー・ストック",
        enemyIcon: "👹",
        category: "バリア⑤：かんばん方式の目的",
        question: "組み立て工場で「かんばん」という紙を使うのは、どのような目的があるからですか。",
        blocks: [
          "使った分の",
          "部品だけを注文し、",
          "部品を余らせない",
          "ようにするため。"
        ],
        point: "かんばん方式のポイントは「使った分だけ注文する」➔「部品を余らせない（むだをなくす）」という流れです。"
      }
    ],

    // ==========================================
    // WAVE 3 (Step 3): 超必殺技・言霊アルティメット詠唱（1行記述）
    // ==========================================
    step3_descriptive: [
      {
        id: "d1",
        page: "p.14",
        enemyName: "鋼鉄機神 ギガ・ファクトリー【第1形態】",
        enemyIcon: "👾",
        question: "ようせつされた車体をあらい、4回も「とそう」をするのはなぜですか。",
        instruction: "2つの言霊（キーワード）を込めて、「〜ため。」で終わる必殺詠唱を放て！",
        keywords: [
          {
            label: "さび",
            hint: "鉄の車体がいたむ原因",
            variants: ["さび", "サビ", "錆", "さびる", "錆びる"]
          },
          {
            label: "見ばえ（見た目）",
            hint: "外から見た美しさ・きれいさ",
            variants: ["見ばえ", "みばえ", "見栄え", "見た目", "みため", "きれい", "綺麗", "美しく", "うつくしく"]
          }
        ],
        endingType: "reason",
        modelAnswer: "車体のさびを防いだり、見ばえをよくしたりするため。",
        rubricNote: "「さびを防ぐこと」と「見ばえ（見た目）をよくすること」の2つが入っていれば一撃必殺9,999ダメージ！"
      },
      {
        id: "d2",
        page: "p.14",
        enemyName: "鋼鉄機神 ギガ・ファクトリー【第2形態】",
        enemyIcon: "🤖",
        question: "プレスやようせつなどの工程で、主にロボットや機械を使うのはなぜですか。",
        instruction: "2つの言霊（キーワード）を込めて、「〜ため。」で終わる必殺詠唱を放て！",
        keywords: [
          {
            label: "すばやく（はやく）",
            hint: "スピードについての言葉",
            variants: ["すばやく", "素早く", "はやく", "早く", "速く", "短時間", "たんじかん", "スピーディー"]
          },
          {
            label: "たくさん（多く）",
            hint: "つくる数についての言葉",
            variants: ["たくさん", "多く", "おおく", "大量", "たいりょう", "いっぱい", "数多くの"]
          }
        ],
        endingType: "reason",
        modelAnswer: "すばやくたくさんの自動車をつくるため。",
        rubricNote: "「すばやく（速く）」と「たくさん（多く）」の2つの視点から、車をつくる目的が書けていれば一撃必殺！"
      },
      {
        id: "d3",
        page: "p.14",
        enemyName: "鋼鉄機神 ギガ・ファクトリー【第3形態】",
        enemyIcon: "🛸",
        question: "注文に合わせてちがう色や種類の車を1つの流れの中でつくるとき、まちがいを防ぐためにどんな工夫をしていますか。",
        instruction: "2つの言霊（キーワード）を込めて、工夫を説明する必殺詠唱を放て！",
        keywords: [
          {
            label: "注文（色や種類）",
            hint: "お客さんが決めた車の情報",
            variants: ["注文", "ちゅうもん", "色", "いろ", "種類", "しゅるい", "希望", "きぼう"]
          },
          {
            label: "指示ビラ",
            hint: "車体につける紙の名前",
            variants: ["指示ビラ", "しじビラ", "指示びら", "しじびら", "ビラ"]
          }
        ],
        endingType: "method",
        modelAnswer: "注文した色や種類などが書かれた「指示ビラ」を車につけている。",
        rubricNote: "「注文した色や種類が書かれていること」と「指示ビラを車につけること」が書けていれば一撃必殺！"
      },
      {
        id: "d4",
        page: "p.15",
        enemyName: "鋼鉄機神 ギガ・ファクトリー【第4形態】",
        enemyIcon: "🐲",
        question: "1台の自動車に必要な部品をあらかじめ箱にそろえ、自動車といっしょにコンベヤーで運ぶようにしたのはなぜですか。",
        instruction: "2つの言霊（キーワード）を込めて、「〜ため。」で終わる必殺詠唱を放て！",
        keywords: [
          {
            label: "手間（取りに行く）",
            hint: "部品をとりに歩くむだ",
            variants: ["手間", "てま", "取りに行く", "とりにいく", "取りにいく", "歩く", "あるく", "探す", "さがす", "むだな動き", "無駄な動き"]
          },
          {
            label: "集中",
            hint: "組み立て作業にしっかり取り組むこと",
            variants: ["集中", "しゅうちゅう", "専念", "せんねん", "正確", "せいかく"]
          }
        ],
        endingType: "reason",
        modelAnswer: "部品を取りに行く手間を省き、より作業に集中できるようにするため。",
        rubricNote: "「部品を取りに行く手間をはぶくこと」と「作業に集中できるようにすること」がつながっていれば一撃必殺！"
      },
      {
        id: "d5",
        page: "p.15",
        enemyName: "最終形態 アルティメット・ファクトリー",
        enemyIcon: "👑",
        question: "部品の種類や数が書かれた「かんばん」を使うのはなぜですか。",
        instruction: "最後のトドメだ！2つの言霊（キーワード）を込めて、「〜ため。」で終わる究極詠唱を放て！",
        keywords: [
          {
            label: "使った分（必要な分）",
            hint: "どれだけの部品を注文するか",
            variants: ["使った分", "つかったぶん", "使ったぶん", "必要な分", "ひつようなぶん", "必要なだけ", "使っただけ", "つかっただけ"]
          },
          {
            label: "余らせない（むだ）",
            hint: "工場に余分な部品を置かないこと",
            variants: ["余らせない", "あまらせない", "余らない", "あまらない", "むだ", "ムダ", "無駄"]
          }
        ],
        endingType: "reason",
        modelAnswer: "使った分の部品だけを注文して、部品を余らせないようにするため。",
        rubricNote: "「使った分だけ注文すること」と「部品を余らせない（むだをなくす）こと」が書けていれば完全撃破！"
      }
    ]
  },

  // ==========================================================================
  // 単元2：教科書（下）16〜22ページ「関連工場・世界への輸送と現地生産・これからの自動車開発」
  // ==========================================================================
  {
    id: "shakai5_ge_p16_22",
    grade: "小学5年 社会（下）",
    pages: "16〜22ページ",
    title: "部品をつくる関連工場・世界とつながる自動車・未来の車",
    subtitle: "関連工場の協力、海外での現地生産のよさ、脱炭素社会に向けた新しい車づくり",
    icon: "🚢",
    bossName: "地球機神 グローバル・モーター",
    bossIcon: "🌐",

    // ==========================================
    // WAVE 1 (Step 1): 通常攻撃＆コンボバトル（4択クイズ）
    // ==========================================
    step1_quiz: [
      {
        id: "q11",
        type: "知識・重要語句",
        page: "p.16",
        enemyName: "ネットワーク・ギア",
        enemyIcon: "🏭",
        question: "組み立て工場から注文を受けて部品をつくったり、その工場からさらに細かい部品の注文を受けて仕事をしたりする工場のことを何といいますか。",
        choices: [
          "関連工場",
          "組み立てライン",
          "現地工場",
          "化学工場"
        ],
        answer: "関連工場",
        keywords: ["関連工場", "部品をつくる工場", "豊田市やその周辺"],
        explanation: "【ここが大事！】シートやハンドル、ライトなど多くの部品は、組み立て工場のまわりにある「関連工場」でつくられ、協力して自動車を生産しています。"
      },
      {
        id: "q12",
        type: "思考・理由",
        page: "p.17",
        enemyName: "タイム・キーパー",
        enemyIcon: "⏱️",
        question: "シートをつくる関連工場で、指定された時間までに注文された種類のシートを必要な数だけ組み立て、車種の順番通りにならべて配送するのはなぜですか。",
        choices: [
          "組み立て工場の作業が止まってしまわないようにするため",
          "シートだけを海外の港へ直接輸出するため",
          "組み立て工場でシートの検査をしなくてすむようにするため",
          "余ったシートを別の種類の車にも取りつけられるようにするため"
        ],
        answer: "組み立て工場の作業が止まってしまわないようにするため",
        keywords: ["組み立て工場の作業が止まらないように", "車種の順番通り", "時間通りにとどける"],
        explanation: "自動車は部品が一つ足りなくても生産できません。組み立て工場の作業が止まってしまわないように、組み立てる車種の順番通りにならべて時間通りに届けています。"
      },
      {
        id: "q13",
        type: "思考・対策",
        page: "p.17",
        enemyName: "リスク・バランサー",
        enemyIcon: "🛡️",
        question: "東日本大震災や新型コロナウイルスのえいきょうで部品が不足して生産が止まった経験から、自動車会社はどのような対策をとっていますか。",
        choices: [
          "同じ部品でも多くの関連工場に注文するようにしている",
          "すべての部品を1つの大きな工場だけでつくるようにしている",
          "部品の数を半分にへらして自動車をつくるようにしている",
          "1年分の部品をすべて組み立て工場の中にためておくようにしている"
        ],
        answer: "同じ部品でも多くの関連工場に注文するようにしている",
        keywords: ["同じ部品でも多くの関連工場に注文", "工場を止めないため"],
        explanation: "災害や感染症などで1つの部品工場が止まっても自動車の生産が止まらないよう、同じ部品でも複数の（多くの）関連工場に注文して備えています。"
      },
      {
        id: "q14",
        type: "知識・輸送",
        page: "p.18",
        enemyName: "オーシャン・キャリアー",
        enemyIcon: "🚢",
        question: "完成した自動車を国内の遠くのはん売店や外国の港へ大量に運ぶとき、港で何に積みこんで運びますか。",
        choices: [
          "自動車専用船",
          "キャリアカー",
          "タンカー",
          "ベルトコンベヤー"
        ],
        answer: "自動車専用船",
        keywords: ["自動車専用船", "キャリアカー（トラック）", "きずつかないように運ぶ"],
        explanation: "工場に近い販売店へは「キャリアカー（トラック）」で運び、国内の遠くの販売店や海外へは港から「自動車専用船」にすき間なくきれいに並べて運んでいます。"
      },
      {
        id: "q15",
        type: "知識・まぎらわしい語句",
        page: "p.18",
        enemyName: "プライス・ファントム",
        enemyIcon: "💴",
        question: "自動車を運ぶ「輸送費」や、材料費・研究開発費・車の生産にかかる費用などは、だれがはらう自動車の価格にふくまれていますか。",
        choices: [
          "消費者",
          "生産者",
          "関連工場",
          "運転手"
        ],
        answer: "消費者",
        keywords: ["消費者", "輸送費", "生産にかかる費用"],
        explanation: "【まちがえやすい！】輸送費や研究開発費、宣伝費、製造費などはすべて、車を買う人＝「消費者」がはらう自動車の価格にふくまれています（「生産者」とまちがえないよう注意！）。"
      },
      {
        id: "q16",
        type: "知識・重要語句",
        page: "p.19",
        enemyName: "ワールド・ビルダー",
        enemyIcon: "🌍",
        question: "日本の自動車会社が、世界のいろいろな国に工場をつくり、その国で自動車を生産してはん売することを何といいますか。",
        choices: [
          "現地生産",
          "大量生産",
          "組み立てライン",
          "貿易摩擦"
        ],
        answer: "現地生産",
        keywords: ["現地生産", "海外生産台数の増加", "北アメリカやアジア"],
        explanation: "海外の国に工場をつくり、現地で生産・販売することを「現地生産」といいます。1985年ごろから海外生産台数が大きく増えています。"
      },
      {
        id: "q17",
        type: "思考・理由",
        page: "p.19",
        enemyName: "グローカル・ドラゴン",
        enemyIcon: "🐲",
        question: "日本の自動車会社が海外で「現地生産」を行うよさ（メリット）として、正しいものはどれですか。",
        choices: [
          "その国に住む人の好みに合った車をより早く安く届けられ、現地の仕事を増やして産業を発展させられる",
          "日本から自動車専用船で運ぶよりも輸送費や時間がたくさんかかるようになる",
          "日本の工場をすべて閉鎖して、日本で働く人の仕事をなくすことができる",
          "世界中のどの国でもまったく同じ1種類の車だけを売ることができる"
        ],
        answer: "その国に住む人の好みに合った車をより早く安く届けられ、現地の仕事を増やして産業を発展させられる",
        keywords: ["輸送する費用や時間をかけない", "好みに合った自動車", "仕事を増やし産業を発展させる"],
        explanation: "【記述にも使える重要ポイント！】現地生産には①輸送費や時間を減らし安く早く届けられる、②現地の道や好みに合った車をつくれる、③現地の仕事を増やし技術や産業を発展させられる、という3つのよさがあります。"
      },
      {
        id: "q18",
        type: "知識・重要語句",
        page: "p.20",
        enemyName: "ゼロカーボン・スピリット",
        enemyIcon: "🌱",
        question: "地球温暖化の原因とされている温室効果ガス（二酸化炭素など）の排出量をゼロにしていく社会のことを何といいますか。",
        choices: [
          "脱炭素社会",
          "SDGs",
          "情報化社会",
          "少子高齢社会"
        ],
        answer: "脱炭素社会",
        keywords: ["脱炭素社会", "温室効果ガスの排出量をゼロに", "地球温暖化を防ぐ"],
        explanation: "【重要語句！】「温室効果ガスの排出量をゼロにしていく社会」＝「脱炭素社会」です。「SDGs」とまちがえないようにしよう！"
      },
      {
        id: "q19",
        type: "知識・重要語句",
        page: "p.21",
        enemyName: "エレキ・モーター",
        enemyIcon: "⚡",
        question: "電気でモーターを回すため、走行時に二酸化炭素が出ない「電気自動車」は、エネルギー費用がどうなりますか。",
        choices: [
          "エネルギー費用が安くなる",
          "エネルギー費用が高くなる",
          "エネルギー費用が10倍になる",
          "電気ではなく水素だけで走る"
        ],
        answer: "エネルギー費用が安くなる",
        keywords: ["電気自動車", "二酸化炭素が出ない", "エネルギー費用が安くなる"],
        explanation: "【ここが大事！】電気自動車は走行時に二酸化炭素が出ず、エネルギー費用も「安く」すみます！"
      },
      {
        id: "q20",
        type: "知識・重要語句",
        page: "p.21",
        enemyName: "アクア・セル",
        enemyIcon: "💧",
        question: "水素と酸素から電気をつくり、水だけを排出して排出ガスを出さない、環境にやさしい自動車を何といいますか。",
        choices: [
          "燃料電池自動車",
          "二酸化炭素電池自動車",
          "ガソリン自動車",
          "ディーゼル自動車"
        ],
        answer: "燃料電池自動車",
        keywords: ["燃料電池自動車", "水素と酸素から電気をつくる", "水だけを排出"],
        explanation: "【まぎらわしい！】水素と酸素で電気をつくり水だけを出すのは「燃料電池自動車」です。「二酸化炭素電池」という車はありません！"
      }
    ],

    // ==========================================
    // WAVE 2 (Step 2): 雷撃バリア破壊パズル（語句ブロック並び替え）
    // ==========================================
    step2_puzzle: [
      {
        id: "p6",
        page: "p.17",
        enemyName: "時空番人 クロノ・キャリアー",
        enemyIcon: "🚛",
        category: "バリア①：時間通りに部品を届ける理由",
        question: "関連工場が、指定された時間までに必要な数だけ部品を組み立てて、組み立て工場へとどけるのはなぜですか。",
        blocks: [
          "組み立て工場の",
          "作業が止まって",
          "しまわないように",
          "するため。"
        ],
        point: "自動車は部品が1つ足りなくても生産できません。「組み立て工場の作業が止まらないようにするため」という目的をおさえよう！"
      },
      {
        id: "p7",
        page: "p.17",
        enemyName: "危機管理獣 セーフティ・ネット",
        enemyIcon: "🛡️",
        category: "バリア②：工場を止めないための工夫",
        question: "災害や病気の流行などで部品が不足する事態にそなえ、自動車会社はどのような工夫をしていますか。",
        blocks: [
          "部品不足にそなえ、",
          "同じ部品でも",
          "多くの関連工場に",
          "注文している。"
        ],
        point: "東日本大震災や新型コロナの教訓から、「同じ部品でも多くの関連工場に注文する」ことで生産が止まるのを防いでいます。"
      },
      {
        id: "p8",
        page: "p.19",
        enemyName: "世界戦略竜 グローバル・ウイング",
        enemyIcon: "✈️",
        category: "バリア③：現地生産のよさ（消費者・輸送面）",
        question: "日本の自動車会社が海外で車をつくって売ると、買う人にとってどんなよさがありますか。",
        blocks: [
          "その国に住む人の",
          "好みに合った自動車を",
          "より早く届ける",
          "ことができる。"
        ],
        point: "「その国に住む人の好みに合った自動車を」「より早く（安く）届けることができる」の流れで組み立てよう！"
      },
      {
        id: "p9",
        page: "p.19",
        enemyName: "技術伝承神 テクノ・タイタン",
        enemyIcon: "🤝",
        category: "バリア④：現地生産のよさ（現地の国への貢献）",
        question: "日本の自動車会社が海外に工場をつくることは、その国にとってどんなよいことがありますか。",
        blocks: [
          "その国の仕事を増やし、",
          "技術を伝えて",
          "産業を発展させる",
          "ことができる。"
        ],
        point: "「その国の仕事を増やしたり」「産業を発展させたりすることができる」という現地へのよさも大事です！"
      },
      {
        id: "p10",
        page: "p.20〜21",
        enemyName: "環境守護神 エコ・ガーディアン",
        enemyIcon: "🌿",
        category: "バリア⑤：環境にやさしい自動車の開発目的",
        question: "電気自動車や燃料電池自動車など、排出ガスを出さない自動車を開発しているのはなぜですか。",
        blocks: [
          "温室効果ガスの",
          "排出量をゼロにする",
          "「脱炭素社会」の",
          "実現にこうけんするため。"
        ],
        point: "「温室効果ガスの排出量をゼロにする」＝「脱炭素社会」という言葉とセットで覚えよう！"
      }
    ],

    // ==========================================
    // WAVE 3 (Step 3): 超必殺技・言霊アルティメット詠唱（1行記述）
    // ==========================================
    step3_descriptive: [
      {
        id: "d6",
        page: "p.19",
        enemyName: "地球機神 グローバル・モーター【第1形態】",
        enemyIcon: "🌐",
        question: "日本の自動車会社が、海外で自動車をつくって売る「現地生産」を行うと、買う人にとってどんなよさがありますか。（現地の人のくらし・届ける速さや費用の面から）",
        instruction: "2つの言霊（キーワード）を込めて、現地生産のよさを説明する必殺詠唱を放て！",
        keywords: [
          {
            label: "好み（くらし・道・輸送費）",
            hint: "その国に住む人の好み・くらし、または輸送の費用",
            variants: ["好み", "このみ", "くらし", "暮らし", "道", "みち", "現地", "げんち", "その国", "輸送", "ゆそう", "費用", "ひよう"]
          },
          {
            label: "早く（安く・届ける・合わせる）",
            hint: "より早く・安くお客様に届けること",
            variants: ["早く", "はやく", "速く", "安く", "やすく", "届ける", "とどける", "とどけられる", "届けられる", "合わせた", "あわせた", "合った", "あった"]
          }
        ],
        endingType: "method",
        modelAnswer: "現地生産をすることで、その国に住む人の好みに合った自動車をより早く届けることができる。",
        rubricNote: "「その国の人の好み（くらし）に合った車」や「輸送費をかけず早く安く届けられること」が書けていれば一撃必殺！"
      },
      {
        id: "d7",
        page: "p.19",
        enemyName: "地球機神 グローバル・モーター【第2形態】",
        enemyIcon: "🏭",
        question: "日本の自動車会社が海外で「現地生産」を行うと、現地の国にとってどのようなよいことがありますか。（仕事や産業の面から）",
        instruction: "2つの言霊（キーワード）を込めて、現地の国へのメリットを説明する必殺詠唱を放て！",
        keywords: [
          {
            label: "仕事（技術）",
            hint: "現地で働く人の仕事や、日本の高い技術",
            variants: ["仕事", "しごと", "働く", "はたらく", "雇用", "こよう", "技術", "ぎじゅつ"]
          },
          {
            label: "産業（発展・増やす）",
            hint: "仕事を増やしたり産業を発展させたりすること",
            variants: ["産業", "さんぎょう", "発展", "はってん", "増やす", "ふやす", "増やし", "ふやし", "増える", "ふえる", "こうけん", "貢献"]
          }
        ],
        endingType: "method",
        modelAnswer: "海外で生産することで、その国の仕事を増やしたり、産業を発展させたりすることができる。",
        rubricNote: "もう1つの角度！「その国の仕事を増やすこと」や「技術・産業を発展させること」が書けていれば一撃必殺！"
      },
      {
        id: "d8",
        page: "p.17",
        enemyName: "地球機神 グローバル・モーター【第3形態】",
        enemyIcon: "🚛",
        question: "シートなどの関連工場が、指定された時間までに必要な数だけ部品を組み立て、車種の順番通りにならべて配送するのはなぜですか。",
        instruction: "2つの言霊（キーワード）を込めて、「〜ため。」で終わる必殺詠唱を放て！",
        keywords: [
          {
            label: "組み立て工場（作業・生産）",
            hint: "どこの工場の何が止まるのを防ぐか",
            variants: ["組み立て工場", "くみたてこうじょう", "組立工場", "作業", "さぎょう", "生産", "せいさん", "ライン"]
          },
          {
            label: "止まらない（止めない）",
            hint: "ストップしてしまわないようにすること",
            variants: ["止まらない", "とまらない", "止まってしまわない", "とまってしまわない", "止めない", "とめない", "ストップしない"]
          }
        ],
        endingType: "reason",
        modelAnswer: "組み立て工場の作業が止まってしまわないようにするため。",
        rubricNote: "「組み立て工場の作業（生産）」が「止まってしまわないようにするため」と書けていれば一撃必殺！"
      },
      {
        id: "d9",
        page: "p.17",
        enemyName: "地球機神 グローバル・モーター【第4形態】",
        enemyIcon: "🛡️",
        question: "地震などの災害や病気の流行で部品が不足する事態にそなえ、自動車会社は関連工場への注文でどのような工夫をしていますか。",
        instruction: "2つの言霊（キーワード）を込めて、対策を説明する必殺詠唱を放て！",
        keywords: [
          {
            label: "同じ部品",
            hint: "1種類の部品についての工夫",
            variants: ["同じ部品", "おなじぶひん", "ひとつの部品", "1つの部品", "部品", "ぶひん"]
          },
          {
            label: "多くの関連工場（複数の工場）",
            hint: "1か所だけでなくたくさんの工場に頼むこと",
            variants: ["多くの関連工場", "おおくのかんれんこうじょう", "多くの工場", "たくさんの関連工場", "複数の", "ふくすうの", "いくつもの", "関連工場", "かんれんこうじょう"]
          }
        ],
        endingType: "method",
        modelAnswer: "同じ部品でも多くの関連工場に注文するようにしている。",
        rubricNote: "「同じ部品でも」「多くの（複数の）関連工場に注文する」ことが書けていれば一撃必殺！"
      },
      {
        id: "d10",
        page: "p.20",
        enemyName: "最終形態 ゼロカーボン・オーバーロード",
        enemyIcon: "👑",
        question: "これからの自動車づくりで目指している「脱炭素社会」とは、どのような社会のことですか。",
        instruction: "最後のトドメだ！2つの言霊（キーワード）を込めて、脱炭素社会を説明する究極詠唱を放て！",
        keywords: [
          {
            label: "温室効果ガス（二酸化炭素）",
            hint: "地球温暖化の原因とされるガス",
            variants: ["温室効果ガス", "おんしつこうかがす", "二酸化炭素", "にさんかたんそ", "排出ガス", "はいしゅつがす", "温暖化の原因"]
          },
          {
            label: "排出量をゼロ（出さない）",
            hint: "出す量を0にしていくこと",
            variants: ["ゼロ", "ぜろ", "0", "出さない", "ださない", "なくす", "減らす", "へらす"]
          }
        ],
        endingType: "method",
        modelAnswer: "地球温暖化の原因とされている温室効果ガスの排出量をゼロにしていく社会。",
        rubricNote: "「温室効果ガス（二酸化炭素）の排出量」を「ゼロにしていく社会」と書けていれば完全撃破！"
      }
    ]
  },

  // ==========================================================================
  // 単元3：【テスト勉強】「3 わたしたちの生活と工業生産」総復習（本(下) P2〜23）
  // 工業地帯・グラフ読解・自動車づくり・これからの車を、いろいろな角度から問う総まとめ
  // ==========================================================================
  {
    id: "shakai5_ge_test_p2_23",
    grade: "🎯 テスト勉強【わたしたちの生活と工業生産】",
    pages: "本（下）2〜23ページ",
    title: "わたしたちの生活と工業生産 総復習マスター",
    subtitle: "工業地帯・グラフ読解・自動車づくり・記述まで、2学期の学習をまとめて総仕上げ！",
    icon: "💯",
    bossName: "総復習大魔王 グランド・マスター",
    bossIcon: "👑",

    // ==========================================
    // WAVE 1 (Step 1): 総復習・資料読解・まちがえやすいポイント（全12問）
    // ==========================================
    step1_quiz: [
      {
        id: "q21",
        type: "知識・工業地帯",
        page: "p.6〜7",
        enemyName: "中京ガーディアン",
        enemyIcon: "🏯",
        question: "愛知県を中心に広がり、工業生産額が約55兆円で日本一の工業地帯はどこですか。",
        choices: [
          "中京工業地帯",
          "阪神工業地帯",
          "関東内陸工業地域",
          "京浜工業地帯"
        ],
        answer: "中京工業地帯",
        keywords: ["中京工業地帯", "約55兆円で日本一", "機械工業がさかん"],
        explanation: "生産額が約55兆円でダントツ日本一なのが「中京工業地帯」です。自動車をはじめとする「機械工業」が約7割を占めています。"
      },
      {
        id: "q22",
        type: "知識・工業地帯",
        page: "p.6〜7",
        enemyName: "阪神センチネル",
        enemyIcon: "🐙",
        question: "大阪府や兵庫県を中心に広がり、工業生産額が約32兆円で全国2位の工業地帯はどこですか。",
        choices: [
          "阪神工業地帯",
          "中京工業地帯",
          "関東内陸工業地域",
          "瀬戸内工業地域"
        ],
        answer: "阪神工業地帯",
        keywords: ["阪神工業地帯", "約32兆円で全国2位", "機械工業と金属工業"],
        explanation: "大阪・兵庫を中心とする「阪神工業地帯」は国内2位の生産額（約32兆円）で、「機械工業」と「金属工業」をあわせると半分以上を占めています。"
      },
      {
        id: "q23",
        type: "資料読解・くらべる",
        page: "p.6〜7",
        enemyName: "内陸ゴーレム",
        enemyIcon: "⛰️",
        question: "次の3つを、工業生産額が多い順に正しくならべたものはどれですか。（中京工業地帯：約55兆円　阪神工業地帯：約32兆円　関東内陸工業地域：約29兆円）",
        choices: [
          "中京工業地帯 ➔ 阪神工業地帯 ➔ 関東内陸工業地域",
          "阪神工業地帯 ➔ 中京工業地帯 ➔ 関東内陸工業地域",
          "中京工業地帯 ➔ 関東内陸工業地域 ➔ 阪神工業地帯",
          "関東内陸工業地域 ➔ 阪神工業地帯 ➔ 中京工業地帯"
        ],
        answer: "中京工業地帯 ➔ 阪神工業地帯 ➔ 関東内陸工業地域",
        keywords: ["中京（約55兆円）", "阪神（約32兆円）", "関東内陸（約29兆円）"],
        explanation: "数字の大きい順にならべます。約55兆円の「中京」➔ 約32兆円の「阪神」➔ 約29兆円の「関東内陸」の順です。関東内陸工業地域は海に面していない内陸にあるのが特色でしたね。"
      },
      {
        id: "q24",
        type: "知識・重要語句",
        page: "p.6",
        enemyName: "ベルト・リヴァイアサン",
        enemyIcon: "🌊",
        question: "「太平洋ベルト」とは、どのような地域のことですか。",
        choices: [
          "関東地方の南部から九州地方の北部にかけて、工業地帯や工業地域が帯のように広がっている地域",
          "東北地方の日本海側にだけ、工場がならんでいる地域",
          "北海道から東北地方にかけて、農地がどこまでも広がっている地域",
          "海から遠い山の中に、工場が集まっている地域"
        ],
        answer: "関東地方の南部から九州地方の北部にかけて、工業地帯や工業地域が帯のように広がっている地域",
        keywords: ["太平洋ベルト", "関東南部から九州北部", "帯のように広がる"],
        explanation: "関東地方の南部から九州地方の北部にかけて、工業地帯・工業地域が帯（ベルト）のように連なっている地域を「太平洋ベルト」とよびます。日本の工業の中心です。"
      },
      {
        id: "q25",
        type: "資料読解・グラフ",
        page: "p.7",
        enemyName: "クロノ・グラフ",
        enemyIcon: "📊",
        question: "工業種類別の生産額のわりあいの変化のグラフで、1935年（昭和10年）にもっともわりあいが高かった工業はどれですか。",
        choices: [
          "せんい工業",
          "機械工業",
          "化学工業",
          "食料品工業"
        ],
        answer: "せんい工業",
        keywords: ["1935年の1位はせんい工業（32.9%）", "機械工業は12.6%→45.0%"],
        explanation: "1935年の1位は「せんい工業（32.9%）」でした。いっぽう機械工業は、1935年の12.6%から2020年の45.0%へと大きくのび、今ではいちばん大きなわりあいを占めています。"
      },
      {
        id: "q26",
        type: "資料読解・計算",
        page: "p.7",
        enemyName: "トリック・ナンバー",
        enemyIcon: "🃏",
        question: "日本の工業生産額は、1960年の約15兆円から2020年の約303兆円へ変わりました。2020年は1960年のおよそ何倍ですか。",
        choices: [
          "約20倍",
          "約10倍",
          "約2倍",
          "約50倍"
        ],
        answer: "約20倍",
        keywords: ["1960年（約15兆円）", "2020年（約303兆円）", "約20倍"],
        explanation: "15兆円 × 20 ＝ 300兆円なので、およそ「20倍」です。グラフの数字を読むときは、かけ算で見当をつけて確かめるとまちがえません。"
      },
      {
        id: "q27",
        type: "知識・工程",
        page: "p.14〜15",
        enemyName: "オーダー・ナイト",
        enemyIcon: "🛡️",
        question: "自動車の組み立て工場の作業で、「ようせつ」の次に行われる作業はどれですか。",
        choices: [
          "とそう",
          "組み立て",
          "検査",
          "プレス"
        ],
        answer: "とそう",
        keywords: ["プレス➔ようせつ➔とそう➔組み立て➔検査"],
        explanation: "作業の順番は、鉄の板を打ちぬく「プレス」➔ つなぎ合わせる「ようせつ」➔ 色をぬる「とそう」➔ 部品をつける「組み立て」➔ 最後に「検査」です。"
      },
      {
        id: "q28",
        type: "知識・まぎらわしい語句",
        page: "p.14〜15",
        enemyName: "ボタン・ミミック",
        enemyIcon: "🚨",
        question: "「指示ビラ」の説明として正しいものはどれですか。",
        choices: [
          "注文した色や種類などが書かれていて、車につけて部品のとりつけまちがいを防ぐ",
          "使った分の部品だけを注文するために、部品の種類や数が書かれている",
          "異常が起きたり作業がおくれたりしたときに、作業する人がおすボタン",
          "異常が起きた場所を、光や音で知らせる表示"
        ],
        answer: "注文した色や種類などが書かれていて、車につけて部品のとりつけまちがいを防ぐ",
        keywords: ["指示ビラ＝注文した色や種類を書いて車につける", "かんばん・よび出しボタン・アンドンとの区別"],
        explanation: "「指示ビラ」は注文内容を書いて車につける紙です。2つ目は「かんばん」、3つ目は「よび出しボタン」、4つ目は「アンドン」の説明。名前と役わりをセットで覚えましょう。"
      },
      {
        id: "q29",
        type: "知識・まとめ",
        page: "p.14〜16",
        enemyName: "トリプル・スフィンクス",
        enemyIcon: "🦁",
        question: "車体のとそうは（①）回おこなう。使った分だけ部品を注文するための紙を（②）という。部品をつくり、組み立て工場へとどける工場を（③）という。正しい組み合わせはどれですか。",
        choices: [
          "① 4 ／ ② かんばん ／ ③ 関連工場",
          "① 2 ／ ② かんばん ／ ③ 関連工場",
          "① 4 ／ ② 指示ビラ ／ ③ 関連工場",
          "① 4 ／ ② かんばん ／ ③ 組み立てライン"
        ],
        answer: "① 4 ／ ② かんばん ／ ③ 関連工場",
        keywords: ["とそうは4回", "かんばん", "関連工場"],
        explanation: "①さびを防いで見ばえをよくするため、とそうは「4回」重ねます。②使った分だけ注文するための紙が「かんばん」。③部品をつくる工場は「関連工場」です。"
      },
      {
        id: "q30",
        type: "知識・しくみ",
        page: "p.18",
        enemyName: "コスト・デーモン",
        enemyIcon: "💰",
        question: "車を買う人がはらう自動車の価格には、次のうちどの費用がふくまれていますか。",
        choices: [
          "輸送費や研究開発費、宣伝費など",
          "買った人が毎日はらう駐車場代",
          "買った人の家の電気代",
          "買った人が行く旅行の費用"
        ],
        answer: "輸送費や研究開発費、宣伝費など",
        keywords: ["輸送費", "研究開発費", "宣伝費", "消費者がはらう価格"],
        explanation: "自動車の価格には、車をつくる費用のほかに、運ぶための「輸送費」、新しい車を考える「研究開発費」、「宣伝費」などもふくまれていて、それを買う人（消費者）がはらっています。"
      },
      {
        id: "q31",
        type: "知識・これからの車",
        page: "p.20〜21",
        enemyName: "フューチャー・ナイト",
        enemyIcon: "🚘",
        question: "電気自動車と燃料電池自動車の説明として、正しいものはどれですか。",
        choices: [
          "電気自動車は走行時に二酸化炭素が出ず、燃料電池自動車は水素と酸素から電気をつくって水だけを出す",
          "電気自動車はガソリンだけで走り、燃料電池自動車は二酸化炭素を大量に出す",
          "電気自動車は走行時に大量の排出ガスを出し、燃料電池自動車は電気も水素も使わない",
          "どちらも温室効果ガスの排出量をふやすための車である"
        ],
        answer: "電気自動車は走行時に二酸化炭素が出ず、燃料電池自動車は水素と酸素から電気をつくって水だけを出す",
        keywords: ["電気自動車", "燃料電池自動車", "水素と酸素", "水だけを排出"],
        explanation: "どちらも「脱炭素社会」を目ざす車です。電気自動車は走行時に二酸化炭素が出ず、エネルギー費用も安くすみます。燃料電池自動車は水素と酸素から電気をつくり、水だけを出して走ります。"
      },
      {
        id: "q32",
        type: "思考・理由",
        page: "p.6〜9",
        enemyName: "パシフィック・タイタン",
        enemyIcon: "⚓",
        question: "外国から輸入した原材料や燃料で製品をつくる工場が、太平洋側の海ぞいに多いのはなぜですか。",
        choices: [
          "原材料や燃料を船で運んでくるのに便利で、できた製品も輸出しやすいから",
          "海ぞいは冬にたくさん雪が降り、工場を冷やすのに便利だから",
          "山が多く、トンネルの中に工場をつくりやすいから",
          "外国との貿易をせずに、国内だけで材料を集められるから"
        ],
        answer: "原材料や燃料を船で運んでくるのに便利で、できた製品も輸出しやすいから",
        keywords: ["原材料や燃料を船で運ぶのに便利", "製品を輸出しやすい"],
        explanation: "海ぞいなら、外国からの原材料や燃料を「船で運んでくるのに便利」で、工場でできた製品も「輸出しやすい」ので、太平洋側の海ぞいに工業がさかんな地域が多くなりました。"
      }
    ],

    // ==========================================
    // WAVE 2 (Step 2): 記述文構造パズル（全5問）
    // ==========================================
    step2_puzzle: [
      {
        id: "p11",
        page: "p.6〜9",
        enemyName: "海嶺竜 パシフィック・ドラグーン",
        enemyIcon: "🚢",
        category: "バリア①：海ぞいに工場が多い理由（原料面）",
        question: "外国から輸入した原材料や燃料を使う工場が、海ぞいに多いのはなぜですか。",
        blocks: [
          "港に近く、",
          "原材料や燃料を",
          "船で運び入れるのに",
          "便利だから。"
        ],
        point: "「どこに（港に近く）」「何を（原材料や燃料を）」「どうするのに（船で運び入れるのに）便利」の順につなぎます。"
      },
      {
        id: "p12",
        page: "p.6〜9",
        enemyName: "港湾機神 ハーバー・コロッサス",
        enemyIcon: "⚓",
        category: "バリア②：海ぞいに工場が多い理由（輸出面）",
        question: "工場でつくった製品を外国へ送り出すうえで、工場が海ぞいにあるとどんな利点がありますか。",
        blocks: [
          "できた製品を",
          "船に積みこんで",
          "外国へ",
          "輸出しやすい。"
        ],
        point: "原料の「輸入」だけでなく、製品の「輸出」にも海ぞいが便利なことをセットで覚えると、記述でも書きやすくなります。"
      },
      {
        id: "p13",
        page: "p.19",
        enemyName: "現地生産竜 ローカル・ワイバーン",
        enemyIcon: "🌍",
        category: "バリア③：現地生産のよさ（買う人の面）",
        question: "日本の自動車会社が海外で車をつくって売ると、買う人にとってどんなよさがありますか。",
        blocks: [
          "その国の人の",
          "好みや道に合った車を",
          "安く早く",
          "手に入れられる。"
        ],
        point: "「だれの（その国の人の）」「何を（好みや道に合った車を）」「どうなる（安く早く手に入る）」の順に組み立てよう。"
      },
      {
        id: "p14",
        page: "p.19",
        enemyName: "産業発展神 インダストリー・ロード",
        enemyIcon: "🏭",
        category: "バリア④：現地生産のよさ（現地の社会の面）",
        question: "日本の自動車会社が海外に工場をつくることは、その国の社会にとってどんな点でよいことですか。",
        blocks: [
          "その国で",
          "働く人の仕事が",
          "ふえ、産業が",
          "発展する。"
        ],
        point: "買う人の面だけでなく、「仕事がふえる」「産業が発展する」という現地の社会へのよさもおさえておこう。"
      },
      {
        id: "p15",
        page: "p.6〜7",
        enemyName: "工業地帯王 ベルト・エンペラー",
        enemyIcon: "👑",
        category: "バリア⑤：太平洋ベルトと中京工業地帯",
        question: "日本の工業地域や工業地帯の広がりと、生産額1位の工業地帯について正しく並び替えよう。",
        blocks: [
          "太平洋ベルトに",
          "工業地帯が広がり、",
          "中京工業地帯が",
          "生産額日本一である。"
        ],
        point: "「太平洋ベルト」と、日本一の「中京工業地帯（とくに機械工業がさかん）」は工業学習の主役です！"
      }
    ],

    // ==========================================
    // WAVE 3 (Step 3): 記述問題・総仕上げ詠唱（全5問）
    // ==========================================
    step3_descriptive: [
      {
        id: "d11",
        page: "p.6〜9",
        enemyName: "総復習大魔王 グランド・マスター【第1形態】",
        enemyIcon: "⚓",
        question: "太平洋側の海ぞいに工業のさかんな地域が多いのはなぜですか。原材料や燃料の運び方、できた製品の送り出し方に注目して書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて、「〜から。」または「〜ため。」で終わる必殺詠唱を放て！",
        keywords: [
          {
            label: "原材料・燃料 または 製品",
            hint: "外国から輸入する「原材料・燃料」や、工場でつくった「製品」",
            variants: ["原材料", "げんざいりょう", "原料", "げんりょう", "燃料", "ねんりょう", "材料", "ざいりょう", "製品", "せいひん", "品物", "しなもの", "自動車", "じどうしゃ"]
          },
          {
            label: "船で運ぶ・輸出入に便利",
            hint: "「船で運んでくるのに便利」または「輸出しやすい」",
            variants: ["船", "ふね", "港", "みなと", "運ぶ", "はこぶ", "運んで", "はこんで", "輸送", "ゆそう", "輸出", "ゆしゅつ", "輸入", "ゆにゅう", "貿易", "ぼうえき", "便利", "べんり", "しやすい"]
          }
        ],
        endingType: "reason",
        modelAnswer: "港が近く、原材料や燃料を船で運んでくるのに便利で、できた製品も輸出しやすいから。",
        rubricNote: "「原材料や燃料を船で運んでくるのに便利」または「製品を輸出しやすい」のどちらか（または両方）が書けていれば一撃必殺！"
      },
      {
        id: "d12",
        page: "p.19",
        enemyName: "総復習大魔王 グランド・マスター【第2形態】",
        enemyIcon: "🌍",
        question: "日本の自動車会社が海外に工場をつくって車を売ると、その国の買う人にはどんなよさがありますか。（好み・届ける速さや費用に注目して書こう）",
        instruction: "2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "好みに合った（くらし・輸送費）",
            hint: "その国に住む人の好み・くらし、または輸送の費用や時間",
            variants: ["好み", "このみ", "くらし", "暮らし", "道", "みち", "現地", "げんち", "その国", "輸送", "ゆそう", "費用", "ひよう", "ニーズ"]
          },
          {
            label: "早く届ける（安く・つくる）",
            hint: "より早く（安く）自動車を届けることができる",
            variants: ["早く", "はやく", "速く", "安く", "やすく", "届ける", "とどける", "とどけられる", "届けられる", "つくる", "作れる", "つくれる", "できる"]
          }
        ],
        endingType: "method",
        modelAnswer: "その国の人の好みや道に合った自動車を、安く早く届けることができる。",
        rubricNote: "「その国の人の好みに合った車」と「早く（安く）届けられること」が書けていれば一撃必殺！"
      },
      {
        id: "d13",
        page: "p.19",
        enemyName: "総復習大魔王 グランド・マスター【第3形態】",
        enemyIcon: "🏭",
        question: "日本の自動車会社が海外に工場をつくることは、その国の社会にとってどのようなよい点がありますか。（仕事や産業に注目して書こう）",
        instruction: "もう1つの角度からも書けるようにしよう！2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "仕事を増やす（技術）",
            hint: "その国の仕事を増やしたり、日本の技術を伝えたりすること",
            variants: ["仕事", "しごと", "働く", "はたらく", "雇用", "こよう", "技術", "ぎじゅつ", "増やす", "ふやす", "増やし", "ふやし", "増える", "ふえる"]
          },
          {
            label: "産業の発展（協力・貢献）",
            hint: "その国の産業（工業）を発展させること",
            variants: ["産業", "さんぎょう", "工業", "こうぎょう", "発展", "はってん", "さかん", "盛ん", "協力", "きょうりょく", "こうけん", "貢献"]
          }
        ],
        endingType: "method",
        modelAnswer: "その国で働く人の仕事がふえ、産業が発展する。",
        rubricNote: "「仕事がふえること」と「産業（技術）が発展すること」が書けていれば一撃必殺！"
      },
      {
        id: "d14",
        page: "p.6〜7",
        enemyName: "総復習大魔王 グランド・マスター【第4形態】",
        enemyIcon: "🗾",
        question: "工業地帯や工業地域が帯のように広がる地域の名前と、工業生産額が日本一の工業地帯の名前を、1文で書きましょう。",
        instruction: "工業学習の重要語句だ！2つの言霊（キーワード）を両方入れて文をつくろう！",
        keywords: [
          {
            label: "太平洋ベルト",
            hint: "帯のように工業地帯が広がる地域（ひらがな可）",
            variants: ["太平洋ベルト", "たいへいようベルト", "太平洋べると", "たいへいようべると"]
          },
          {
            label: "中京工業地帯",
            hint: "機械工業がさかんで生産額日本一の工業地帯",
            variants: ["中京工業地帯", "ちゅうきょうこうぎょうちたい", "中京", "ちゅうきょう"]
          }
        ],
        endingType: "method",
        modelAnswer: "帯のように広がる地域を太平洋ベルトとよび、日本一の工業生産額なのは中京工業地帯である。",
        rubricNote: "「太平洋ベルト」と「中京工業地帯」の2つが正確に書けていれば一撃必殺！"
      },
      {
        id: "d15",
        page: "p.14〜21",
        enemyName: "最終形態 アルティメット・マスター",
        enemyIcon: "👑",
        question: "組み立て工場で異常や遅れが起きたとき、作業する人がおすものと、温室効果ガスの排出量をゼロにしていく社会を、それぞれ何といいますか。",
        instruction: "最後のトドメだ！「アンドン」とまちがえないように、2つの言霊を込めて究極詠唱を放て！",
        keywords: [
          {
            label: "よび出しボタン",
            hint: "異常が起きたときに「おす」もの（※アンドンは表示や音）",
            variants: ["よび出しボタン", "呼び出しボタン", "よびだしボタン", "呼びだしボタン", "よび出しぼたん", "呼び出しぼたん"]
          },
          {
            label: "脱炭素社会",
            hint: "温室効果ガスの排出量をゼロにしていく社会",
            variants: ["脱炭素社会", "だつたんそしゃかい", "脱炭素", "だつたんそ"]
          }
        ],
        endingType: "method",
        modelAnswer: "異常が起きたときにはよび出しボタンをおし、温室効果ガスの排出量をゼロにしていく社会を脱炭素社会という。",
        rubricNote: "「よび出しボタン」と「脱炭素社会」が正確に書けていれば完全撃破！"
      }
    ]
  },

  // ==========================================================================
  // 単元4：工業生産を支える運輸と貿易①（教科書 30〜33ページ）
  // ==========================================================================
  {
    id: "shakai5_ge_p30_33",
    grade: "小5社会（下）｜工業生産を支える運輸と貿易①",
    pages: "教科書 30〜33ページ",
    title: "工業生産を支える運輸と貿易 〜 全国へ運ばれる工業製品",
    subtitle: "トラック・船・鉄道・飛行機の使い分けと、主要な港・空港の貿易をマスターしよう！",
    icon: "🚚",
    bossName: "物流機神 トランスポート・レックス",
    bossIcon: "🚛",

    // ==========================================
    // WAVE 1 (Step 1): 基礎知識＆グラフ・資料読解 4択クイズ（全10問）
    // ==========================================
    step1_quiz: [
      {
        id: "q33",
        type: "知識・重要語句",
        page: "p.31",
        enemyName: "カーゴ・キャリアー",
        enemyIcon: "🚛",
        question: "トラックをはじめとする自動車や船、鉄道、飛行機を使って、人やものを運ぶ仕事や産業のことを何といいますか。",
        choices: [
          "運輸（うんゆ）",
          "貿易（ぼうえき）",
          "通信（つうしん）",
          "製造（せいぞう）"
        ],
        answer: "運輸（うんゆ）",
        keywords: ["運輸（うんゆ）", "自動車・船・鉄道・飛行機", "人やものを運ぶ仕事や産業"],
        explanation: "教科書p.31の「ことば」を確認しましょう。自動車や船、鉄道、飛行機を使って人やものを運ぶ仕事や産業を「運輸（うんゆ）」といいます。"
      },
      {
        id: "q34",
        type: "知識・重要語句",
        page: "p.31",
        enemyName: "トレード・シップ",
        enemyIcon: "🚢",
        question: "外国とものやサービスを売り買いすることを「貿易」といいます。そのうち、外国に商品を売ることを何といいますか。",
        choices: [
          "輸出（ゆしゅつ）",
          "輸入（ゆにゅう）",
          "輸送（ゆそう）",
          "運輸（うんゆ）"
        ],
        answer: "輸出（ゆしゅつ）",
        keywords: ["貿易（ぼうえき）", "外国に売る＝輸出", "外国から買う＝輸入"],
        explanation: "外国とものやサービスを売り買いすることが「貿易」です。外国に商品を売ることを「輸出」、外国から商品を買うことを「輸入」といいます。"
      },
      {
        id: "q35",
        type: "資料読解",
        page: "p.31",
        enemyName: "エアポート・ウイング",
        enemyIcon: "✈️",
        question: "日本の主な港や空港の貿易額のグラフ（p.31図⑤）で、輸出と輸入を合わせた「貿易額」がいちばん大きいのはどこですか。",
        choices: [
          "成田国際空港",
          "東京港",
          "名古屋港",
          "横浜港"
        ],
        answer: "成田国際空港",
        keywords: ["成田国際空港が貿易額1位", "輸入額が輸出額より多い"],
        explanation: "千葉県成田市にある「成田国際空港」が、輸出額と輸入額を合わせた貿易額全体で日本一です。なお、成田国際空港や東京港は「輸入額」の方が「輸出額」より多くなっています。"
      },
      {
        id: "q36",
        type: "資料読解",
        page: "p.31",
        enemyName: "ハーバー・クラーケン",
        enemyIcon: "⚓",
        question: "主な港や空港の貿易額のグラフ（p.31図⑤）で、自動車などの輸出がさかんなため、「輸出額」がいちばん大きく、輸入額の約2倍になっている港はどこですか。",
        choices: [
          "名古屋港",
          "東京港",
          "成田国際空港",
          "関西国際空港"
        ],
        answer: "名古屋港",
        keywords: ["名古屋港", "輸出額が輸入額よりかなり多い", "中京工業地帯の窓口"],
        explanation: "中京工業地帯にある「名古屋港」は、自動車や部品などの輸出がさかんなため、主な港や空港の中で「輸出額」がいちばん大きく、輸入額を大きく上回っています。"
      },
      {
        id: "q37",
        type: "知識",
        page: "p.32",
        enemyName: "ターミナル・ゲート",
        enemyIcon: "🏢",
        question: "東京都大田区にあり、東京ドーム約5倍の広さに1日4000台以上の車が出入りして、全国へ荷物を送り出す拠点となっている施設はどこですか。",
        choices: [
          "京浜トラックターミナル",
          "名古屋港フェリーターミナル",
          "成田国際空港",
          "関西国際空港"
        ],
        answer: "京浜トラックターミナル",
        keywords: ["京浜トラックターミナル", "東京都大田区", "鉄道・港・空港が近くに集まる"],
        explanation: "東京都大田区にある「京浜トラックターミナル」の周りには、鉄道の貨物ターミナル、東京港、羽田空港（東京国際空港）が集まり、工場と全国各地を結ぶ窓口になっています。"
      },
      {
        id: "q38",
        type: "資料読解",
        page: "p.32",
        enemyName: "ハイウェイ・ランナー",
        enemyIcon: "🛣️",
        question: "国内の貨物輸送のわりあいの変化のグラフ（p.32図③）を見ると、1960年度から2019年度にかけてわりあいが3倍以上に増え、全体の半分以上（52.9%）を占めるようになった輸送手段はどれですか。",
        choices: [
          "自動車（トラック）",
          "鉄道",
          "船",
          "飛行機"
        ],
        answer: "自動車（トラック）",
        keywords: ["自動車（トラック）が52.9%", "鉄道は39.2%から4.9%に減少"],
        explanation: "高速道路が全国に整備されたことなどにより、自動車（トラック）による輸送が15.0%から52.9%へと大きく増え、国内の貨物輸送の半分以上を占めています。"
      },
      {
        id: "q39",
        type: "資料読解",
        page: "p.32",
        enemyName: "オーシャン・バルク",
        enemyIcon: "⛴️",
        question: "2019年度の国内の貨物輸送のグラフ（p.32図③）で、自動車（52.9%）に次いで約4割（42.0%）を占めている輸送手段はどれですか。",
        choices: [
          "船",
          "鉄道",
          "飛行機",
          "自転車"
        ],
        answer: "船",
        keywords: ["船が42.0%", "自動車と船で国内輸送の9割以上"],
        explanation: "国内の貨物輸送（トンキロ）では、1位が「自動車（52.9%）」、2位が「船（42.0%）」で、この2つで全体の9割以上を占めています。"
      },
      {
        id: "q40",
        type: "思考・比較",
        page: "p.33",
        enemyName: "ダイレクト・トラック",
        enemyIcon: "🚚",
        question: "船や鉄道と比べたとき、「トラック（自動車）」で工業製品を運ぶ長所（よい点）として最も適切なものはどれですか。",
        choices: [
          "工場から目的地まで積みかえなしで直接運べ、希望の日時を指定できる",
          "一度に何千台もの自動車や大量の石油を、いちばん安い費用で運べる",
          "渋滞にまきこまれることがなく、排気ガスもまったく出ない",
          "外国の遠い港まで、海を渡って直接飛んでいくことができる"
        ],
        answer: "工場から目的地まで積みかえなしで直接運べ、希望の日時を指定できる",
        keywords: ["積みかえなしで直接運べる", "希望の日時の指定ができる", "少量ずつこまめに運べる"],
        explanation: "トラックは一度に運べる量は船や鉄道より少ないですが、工場からお店や目的地まで「積みかえなしで直接運べる」ことや、「希望の日時を指定できる」という大きな長所があります。"
      },
      {
        id: "q41",
        type: "思考・比較",
        page: "p.33",
        enemyName: "フェリー・タイタン",
        enemyIcon: "🚢",
        question: "「船（貨物船やフェリー）」で工業製品や原材料を運ぶときの長所（よい点）として、正しいものはどれですか。",
        choices: [
          "時間はかかるが、一度にたくさんの大型の製品や重い荷物を安い費用で運べる",
          "費用はとても高いが、どの乗り物よりも速く数時間で目的地に着く",
          "山の中の工場の入り口まで、積みかえなしで直接入っていける",
          "小さな荷物しか運べないが、道路の渋滞をぬって走れる"
        ],
        answer: "時間はかかるが、一度にたくさんの大型の製品や重い荷物を安い費用で運べる",
        keywords: ["一度にたくさん運べる", "大型の製品や重い荷物に向く", "安い費用で運べる"],
        explanation: "船は時間はかかりますが、「一度にたくさんの大型の製品や重い荷物を、安い費用で運ぶのに便利」です。長距離ではトラックごとフェリーに乗せて運ぶこともあります。"
      },
      {
        id: "q42",
        type: "思考・比較",
        page: "p.33",
        enemyName: "ジェット・フレイト",
        enemyIcon: "🛫",
        question: "「飛行機（貨物専用機）」で運ぶのに最も向いている工業製品はどれですか。",
        choices: [
          "小型で高価な集積回路（IC）や精密機械、急いで届ける必要があるもの",
          "重くて大量にある鉄鉱石や石炭、原油などの原材料や燃料",
          "1台ずつが大きくて重いトラックやバスなどの大型自動車",
          "安くて大量に運ぶセメントや木材"
        ],
        answer: "小型で高価な集積回路（IC）や精密機械、急いで届ける必要があるもの",
        keywords: ["飛行機＝小型で高価なもの・急ぐもの", "遠くへ最も速く運べる", "費用は高い"],
        explanation: "飛行機は運ぶ費用が高いかわりに「遠くへ最も速く運べる」ため、集積回路（IC）や精密機械のような小型で高価なもの、急ぐものを運ぶのに使われます。"
      }
    ],

    // ==========================================
    // WAVE 2 (Step 2): 語句ブロック並び替えパズル（全5問）
    // ==========================================
    step2_puzzle: [
      {
        id: "p16",
        page: "p.31",
        enemyName: "物流要塞 トランス・フォートレス",
        enemyIcon: "🚛",
        category: "バリア①：運輸と貿易の意味",
        question: "「運輸」と「貿易」という言葉の意味について、正しい文になるように並び替えよう。",
        blocks: [
          "自動車や船などで",
          "人やものを運ぶ仕事を",
          "運輸といい、外国と",
          "商品を売り買いするのを貿易という。"
        ],
        point: "「運ぶ仕事や産業＝運輸（うんゆ）」「外国と売り買いすること＝貿易（ぼうえき）」の2つをしっかり区別しよう！"
      },
      {
        id: "p17",
        page: "p.32〜33",
        enemyName: "高速機獣 ハイウェイ・ドラグーン",
        enemyIcon: "🚚",
        category: "バリア②：トラック輸送が多く使われる理由",
        question: "国内の貨物輸送でトラック（自動車）が多く使われているのはなぜですか。",
        blocks: [
          "工場から目的地まで",
          "積みかえなしで直接運べ、",
          "希望の日時を",
          "指定できるから。"
        ],
        point: "トラックの最大の強みは「積みかえなしで直接運べること」と「希望の日時を指定できること」です。"
      },
      {
        id: "p18",
        page: "p.33",
        enemyName: "大海獣 カーゴ・クラーケン",
        enemyIcon: "🚢",
        category: "バリア③：船で運ぶよさ",
        question: "船（貨物船や自動車専用船）で工業製品や原料を運ぶよさを並び替えよう。",
        blocks: [
          "船は時間がかかるが、",
          "一度にたくさんの",
          "大型の製品や重い荷物を",
          "安い費用で運べる。"
        ],
        point: "「一度にたくさん」「大型の製品や重い荷物」「安い費用で運べる」の3点セットが船の特徴です。"
      },
      {
        id: "p19",
        page: "p.33",
        enemyName: "音速翼竜 エア・ワイバーン",
        enemyIcon: "✈️",
        category: "バリア④：飛行機で運ぶ特色",
        question: "飛行機（貨物専用機）で工業製品を運ぶときの特色を並び替えよう。",
        blocks: [
          "飛行機は費用が高いが、",
          "集積回路などの",
          "小型で高価なものを",
          "遠くへ最も速く運べる。"
        ],
        point: "飛行機は「費用が高い」かわりに「小型で高価なもの（集積回路など）を遠くへ最も速く運べる」のが特徴です。"
      },
      {
        id: "p20",
        page: "p.31",
        enemyName: "港湾覇王 トレード・ガーディアン",
        enemyIcon: "⚓",
        category: "バリア⑤：名古屋港と成田国際空港の比較",
        question: "主な港や空港の輸出額と輸入額の特色について、正しく並び替えよう。",
        blocks: [
          "名古屋港は自動車などの",
          "輸出額が多く、",
          "成田国際空港や東京港は",
          "輸入額の方が多い。"
        ],
        point: "グラフの超重要ポイント！「名古屋港＝輸出額がいちばん多い」「成田国際空港・東京港＝輸入額の方が多い」をおさえよう。"
      }
    ],

    // ==========================================
    // WAVE 3 (Step 3): キーワード指定 1行記述チャレンジ（全5問）
    // ==========================================
    step3_descriptive: [
      {
        id: "d16",
        page: "p.32〜33",
        enemyName: "物流機神 トランスポート・レックス【第1形態】",
        enemyIcon: "🚚",
        question: "国内の貨物輸送で、トラック（自動車）が多く使われているのはなぜですか。船や鉄道と比べたときの便利さに注目して書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて、「〜から。」または「〜ため。」で終わる必殺詠唱を放て！",
        keywords: [
          {
            label: "直接運べる（積みかえなし）",
            hint: "工場から目的地まで積みかえなしで直接運べること",
            variants: ["直接", "ちょくせつ", "積みかえなし", "つみかえなし", "積み替えなし", "そのまま", "目的地まで"]
          },
          {
            label: "希望の日時（時間指定・こまめ）",
            hint: "希望の日時を指定できる（少量ずつこまめに運べる）こと",
            variants: ["日時", "にちじ", "時間", "じかん", "指定", "してい", "希望", "きぼう", "こまめ", "少量", "しょうりょう", "いつでも"]
          }
        ],
        endingType: "reason",
        modelAnswer: "工場から目的地まで積みかえなしで直接運べ、希望の日時を指定できるから。",
        rubricNote: "「積みかえなしで直接運べること」と「希望の日時を指定できる（こまめに運べる）こと」が書けていれば一撃必殺！"
      },
      {
        id: "d17",
        page: "p.33",
        enemyName: "物流機神 トランスポート・レックス【第2形態】",
        enemyIcon: "🚢",
        question: "船を使って工業製品や原材料を運ぶことには、どのようなよさがありますか。運べる量や費用に注目して書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて、船の長所を説明する必殺詠唱を放て！",
        keywords: [
          {
            label: "一度にたくさん（大量・大型・重い）",
            hint: "一度にたくさんの（大型・重い）荷物を運べること",
            variants: ["たくさん", "大量", "たいりょう", "一度に", "いちどに", "大型", "おおがた", "重い", "おもい", "多く", "おおく"]
          },
          {
            label: "安い費用",
            hint: "運ぶための費用が安いこと",
            variants: ["安い", "やすい", "安く", "やすく", "費用", "ひよう", "運賃", "うんちん"]
          }
        ],
        endingType: "method",
        modelAnswer: "一度にたくさんの大型の製品や重い荷物を、安い費用で運ぶことができる。",
        rubricNote: "「一度にたくさん（大型・重い荷物）を」「安い費用で運べる」ことが書けていれば一撃必殺！"
      },
      {
        id: "d18",
        page: "p.33",
        enemyName: "物流機神 トランスポート・レックス【第3形態】",
        enemyIcon: "✈️",
        question: "飛行機は運ぶ費用が高いのに、集積回路（IC）や精密機械などの輸送に使われるのはなぜですか。",
        instruction: "2つの言霊（キーワード）を込めて、「〜から。」または「〜ため。」で終わる必殺詠唱を放て！",
        keywords: [
          {
            label: "小型で高価（急ぐもの）",
            hint: "小型で高価なもの（または急いで届けるもの）であること",
            variants: ["小型", "こがた", "小さい", "ちいさい", "高価", "こうか", "高い", "たかい", "急ぐ", "いそぐ", "精密", "せいみつ", "集積回路"]
          },
          {
            label: "速く運べる（遠くへ）",
            hint: "遠くへ最も速く運ぶことができること",
            variants: ["速く", "はやく", "早く", "最も速く", "いちばん速く", "短時間", "たんじかん", "遠く", "とおく"]
          }
        ],
        endingType: "reason",
        modelAnswer: "小型で高価な製品や急ぐものを、遠くへ最も速く運ぶことができるから。",
        rubricNote: "「小型で高価なもの（急ぐもの）」を「遠くへ速く運べるから」と書けていれば一撃必殺！"
      },
      {
        id: "d19",
        page: "p.31",
        enemyName: "物流機神 トランスポート・レックス【第4形態】",
        enemyIcon: "📦",
        question: "自動車や船、鉄道、飛行機を使って人やものを運ぶ仕事や産業を何といいますか。また、外国とものやサービスを売り買いすることを何といいますか。",
        instruction: "教科書の重要語句だ！2つの言霊（キーワード）を両方入れて1文で答えよう！",
        keywords: [
          {
            label: "運輸（うんゆ）",
            hint: "人やものを運ぶ仕事や産業",
            variants: ["運輸", "うんゆ"]
          },
          {
            label: "貿易（ぼうえき）",
            hint: "外国とものやサービスを売り買いすること",
            variants: ["貿易", "ぼうえき"]
          }
        ],
        endingType: "method",
        modelAnswer: "人やものを運ぶ仕事や産業を運輸といい、外国とものやサービスを売り買いすることを貿易という。",
        rubricNote: "「運輸」と「貿易」の2語が正確に書けていれば一撃必殺！"
      },
      {
        id: "d20",
        page: "p.31",
        enemyName: "最終形態 グランド・トランスポーター",
        enemyIcon: "👑",
        question: "日本の主な港や空港の中で、貿易額の合計がいちばん大きい空港と、自動車などの「輸出額」がいちばん大きい港を、それぞれ入れて1文で書きましょう。",
        instruction: "最後のトドメだ！グラフの2大拠点を込めて究極詠唱を放て！",
        keywords: [
          {
            label: "成田国際空港",
            hint: "貿易額全体が日本一の空港（輸入額＞輸出額）",
            variants: ["成田国際空港", "なりたこくさいくうこう", "成田空港", "なりたくうこう"]
          },
          {
            label: "名古屋港",
            hint: "輸出額がいちばん大きい港（輸出額＞輸入額）",
            variants: ["名古屋港", "なごやこう"]
          }
        ],
        endingType: "method",
        modelAnswer: "貿易額がいちばん大きいのは成田国際空港で、輸出額がいちばん大きいのは名古屋港である。",
        rubricNote: "「成田国際空港」と「名古屋港」の2つが正確に書けていれば完全撃破！"
      }
    ]
  },

  // ==========================================================================
  // 単元5：工業生産を支える運輸と貿易②（教科書 34〜38ページ）
  // ==========================================================================
  {
    id: "shakai5_ge_p34_38",
    grade: "小5社会（下）｜工業生産を支える運輸と貿易②",
    pages: "教科書 34〜38ページ",
    title: "日本の輸入・輸出の特色とこれからの社会",
    subtitle: "資源の輸入・アジアからの機械類輸入・集積回路(IC)の輸出・再生可能エネルギーを攻略！",
    icon: "🚢",
    bossName: "貿易海皇 トレード・リヴァイアサン",
    bossIcon: "🌏",

    // ==========================================
    // WAVE 1 (Step 1): 基礎知識＆グラフ・資料読解 4択クイズ（全10問）
    // ==========================================
    step1_quiz: [
      {
        id: "q43",
        type: "資料読解",
        page: "p.34",
        enemyName: "リソース・ゴーレム",
        enemyIcon: "⛏️",
        question: "日本の「輸入量と国内生産量のわりあい」のグラフ（p.34図②）を見ると、石油・石炭・天然ガス・鉄鉱石の輸入のわりあいはどうなっていますか。",
        choices: [
          "どれも97%〜100%で、ほとんどすべてを外国からの輸入にたよっている",
          "どれも半分（50%）くらいを日本国内で生産している",
          "鉄鉱石だけは100%日本国内でとれている",
          "石油と石炭は外国へたくさん輸出している"
        ],
        answer: "どれも97%〜100%で、ほとんどすべてを外国からの輸入にたよっている",
        keywords: ["石油99.6〜99.7%", "石炭99.6%", "天然ガス97.8%", "鉄鉱石100%輸入"],
        explanation: "資源が少ない日本は、石油（約99.7%）、石炭（99.6%）、天然ガス（97.8%）、鉄鉱石（100%）など、工業生産に必要な燃料や原材料のほとんどを輸入にたよっています。"
      },
      {
        id: "q44",
        type: "知識・地図読解",
        page: "p.34",
        enemyName: "オイル・タンカー",
        enemyIcon: "🛢️",
        question: "日本が輸入している「石油（原油）」は、主にどの地域の国々から大型のタンカーで運ばれてきますか。",
        choices: [
          "サウジアラビアやアラブ首長国連邦などの中東の国々",
          "フランスやドイツなどのヨーロッパの国々",
          "ブラジルやアルゼンチンなどの南アメリカの国々",
          "エジプトやケニアなどのアフリカの国々"
        ],
        answer: "サウジアラビアやアラブ首長国連邦などの中東の国々",
        keywords: ["石油＝中東（サウジアラビア・アラブ首長国連邦など）", "タンカーで輸送"],
        explanation: "日本の石油（原油）は、サウジアラビアやアラブ首長国連邦、カタールといった「中東（ちゅうとう）」の国々から多く輸入されています。"
      },
      {
        id: "q45",
        type: "知識・地図読解",
        page: "p.34",
        enemyName: "アイアン・オージー",
        enemyIcon: "🦘",
        question: "日本が「鉄鉱石」や「石炭」「天然ガス」を最も多く輸入している相手国はどこですか。",
        choices: [
          "オーストラリア",
          "サウジアラビア",
          "韓国",
          "イギリス"
        ],
        answer: "オーストラリア",
        keywords: ["オーストラリア", "鉄鉱石・石炭・天然ガスの輸入1位"],
        explanation: "オーストラリアは鉄鉱石・石炭・天然ガスなどの資源が豊富で、日本にとってこれらの資源の最大の輸入相手国になっています（鉄鉱石はブラジルからも多く輸入しています）。"
      },
      {
        id: "q46",
        type: "資料読解",
        page: "p.35",
        enemyName: "インポート・アナライザー",
        enemyIcon: "📊",
        question: "「主な輸入品の取りあつかい額のわりあいの変化」のグラフ（p.35図③）を見ると、1962年に比べて現在大きく増え、原油などの燃料と並んで輸入の主役（約3割）になっているものはどれですか。",
        choices: [
          "機械類（コンピューターや電化製品など）",
          "せんい原料などの原料品",
          "米や野菜などの食料品",
          "金や銀などの貴金属"
        ],
        answer: "機械類（コンピューターや電化製品など）",
        keywords: ["機械類の輸入が増加", "アジア地域から安くて品質のよい工業製品を輸入"],
        explanation: "昔の日本は原料や燃料ばかりを輸入していましたが、現在は中国をはじめとするアジア地域から、安くて品質のよい「機械類」や化学製品などの工業製品をたくさん輸入するようになっています。"
      },
      {
        id: "q47",
        type: "思考・課題",
        page: "p.35",
        enemyName: "シャドウ・インポーター",
        enemyIcon: "⚠️",
        question: "外国から安い工業製品や燃料をたくさん輸入することは便利ですが、輸入にたよりすぎるとどのような課題（問題）が起きますか。",
        choices: [
          "国内で生産するものが売れなくなって国内の産業が弱まったり、輸入が止まると国内で製品がつくれなくなったりする",
          "国内の工場が忙しくなりすぎて、働く人が増えすぎてしまう",
          "外国の製品がまったく手に入らなくなってしまう",
          "資源が日本国内でどんどんわき出るようになる"
        ],
        answer: "国内で生産するものが売れなくなって国内の産業が弱まったり、輸入が止まると国内で製品がつくれなくなったりする",
        keywords: ["輸入に頼りすぎる課題", "国内の産業が弱くなる", "輸入できなくなると製品がつくれなくなる"],
        explanation: "輸入が増えすぎると、日本でつくったものが売れなくなって「国内の産業が弱くなる」ことや、災害や国際問題で「輸入できなくなると国内で製品がつくれなくなる」ことが課題になります。"
      },
      {
        id: "q48",
        type: "知識・重要語句",
        page: "p.36",
        enemyName: "マイクロ・チップ",
        enemyIcon: "💾",
        question: "現在の日本がアジアの国々などへ多く輸出している、コンピューターやテレビなどの電子機器を動かす「頭脳」となる超小型の電子部品を何といいますか。",
        choices: [
          "集積回路（IC）",
          "指示ビラ",
          "アンドン",
          "太陽電池"
        ],
        answer: "集積回路（IC）",
        keywords: ["集積回路（IC）", "電子機器に使われる超小型の電子部品", "高い技術を生かした輸出品"],
        explanation: "日本の高い技術でつくられた「集積回路（IC）」は、アジアの国や地域へ多く輸出され、現地の工場で組み立てられる電化製品や電子機器の部品として使われています。"
      },
      {
        id: "q49",
        type: "資料読解",
        page: "p.37",
        enemyName: "エクスポート・シフト",
        enemyIcon: "📈",
        question: "「主な輸出品の取りあつかい額のわりあいの変化」のグラフ（p.37図②）で、1960年に1位（30%）だった輸出品と、現在全体の6割以上を占めて1位になっている輸出品の正しい組み合わせはどれですか。",
        choices: [
          "1960年：せんい品 ➔ 現在：機械類（自動車をふくむ）",
          "1960年：自動車 ➔ 現在：せんい品",
          "1960年：食料品 ➔ 現在：原油などの燃料",
          "1960年：鉄鋼 ➔ 現在：せんい品"
        ],
        answer: "1960年：せんい品 ➔ 現在：機械類（自動車をふくむ）",
        keywords: ["1960年の輸出1位はせんい品", "1970年ごろから機械類（自動車ふくむ）が1位"],
        explanation: "1960年は「せんい品（30%）」が輸出品の1位でしたが、1970年ごろから「機械類（自動車をふくむ）」が1位になり、現在は全体の6割以上を占めています。"
      },
      {
        id: "q50",
        type: "資料読解",
        page: "p.36〜37",
        enemyName: "アジア・トレーダー",
        enemyIcon: "🌏",
        question: "日本の輸出相手先について、地域別で見たときに最も輸出額が多い地域はどこですか。また、国別で特に多い2つの国はどこですか。",
        choices: [
          "地域：アジア ／ 国：アメリカ・中国",
          "地域：アフリカ ／ 国：エジプト・南アフリカ",
          "地域：南アメリカ ／ 国：ブラジル・ペルー",
          "地域：オセアニア ／ 国：ニュージーランド・フィジー"
        ],
        answer: "地域：アジア ／ 国：アメリカ・中国",
        keywords: ["アジア地域への輸出が多い", "国別ではアメリカや中国が多い"],
        explanation: "日本の輸出相手先は、地域別では「アジア」の国や地域がとても多く、国別では「アメリカ」や「中国」への輸出が多くなっています。"
      },
      {
        id: "q51",
        type: "思考・課題",
        page: "p.37",
        enemyName: "ホロウ・ファクトリー",
        enemyIcon: "🏭",
        question: "日本の製造業の会社が海外に工場を増やし、外国でばかりたくさん生産するようになると、日本国内ではどのような問題が出てきますか。",
        choices: [
          "日本国内での生産がおとろえ、国内の工場や仕事が減ってしまう",
          "日本国内の工場が増えすぎて、土地が足りなくなる",
          "外国との貿易がまったくなにもできなくなる",
          "日本で石油や鉄鉱石が掘り出せるようになる"
        ],
        answer: "日本国内での生産がおとろえ、国内の工場や仕事が減ってしまう",
        keywords: ["海外生産が増えすぎる課題", "国内での生産がおとろえる", "輸入と輸出のつりあいのとれた貿易"],
        explanation: "教科書p.37にあるように、外国でたくさん生産するようになると、逆に「国内での生産がおとろえる」という問題が出てきます。輸入と輸出のつりあいのとれた貿易を続けることが大切です。"
      },
      {
        id: "q52",
        type: "知識・重要語句",
        page: "p.38",
        enemyName: "グリーン・ジェネレーター",
        enemyIcon: "🌱",
        question: "太陽光発電や風力発電、地熱発電、バイオマス発電など、資源をくり返し使うことができ、地球温暖化の原因となる二酸化炭素を出さないエネルギーを何といいますか。",
        choices: [
          "再生可能エネルギー",
          "化石エネルギー",
          "火力発電エネルギー",
          "使いきりエネルギー"
        ],
        answer: "再生可能エネルギー",
        keywords: ["再生可能エネルギー", "太陽光発電・風力発電・地熱発電", "くり返し使えて二酸化炭素を出さない"],
        explanation: "教科書p.38の「ことば」の重要語句です。太陽光発電や風力発電など、資源をくり返し使えて二酸化炭素を出さない環境にやさしいエネルギーを「再生可能エネルギー」といいます。"
      }
    ],

    // ==========================================
    // WAVE 2 (Step 2): 語句ブロック並び替えパズル（全5問）
    // ==========================================
    step2_puzzle: [
      {
        id: "p21",
        page: "p.34",
        enemyName: "資源海竜 リソース・サーペント",
        enemyIcon: "🛢️",
        category: "バリア①：日本の資源・燃料の輸入",
        question: "日本の工業生産に必要な原材料や燃料の輸入について、正しく並び替えよう。",
        blocks: [
          "資源が少ない日本は、",
          "石油や鉄鉱石などの",
          "原材料や燃料のほとんどを",
          "外国からの輸入にたよっている。"
        ],
        point: "石油は中東から、鉄鉱石や石炭はオーストラリアなどから、ほぼ100%近くを輸入にたよっています。"
      },
      {
        id: "p22",
        page: "p.35",
        enemyName: "機械輸入獣 メカ・インポーター",
        enemyIcon: "📦",
        category: "バリア②：近年の輸入品の変化",
        question: "最近の日本の輸入品の特色について、正しい文になるように並び替えよう。",
        blocks: [
          "最近は原油などの燃料だけでなく、",
          "アジアの国々から",
          "安くて品質のよい",
          "機械類の輸入が増えている。"
        ],
        point: "昔は原料や燃料ばかりでしたが、今はアジア地域から「機械類」や化学製品などの工業製品の輸入が大きく増えています。"
      },
      {
        id: "p23",
        page: "p.35",
        enemyName: "輸入依存竜 インポート・ハザード",
        enemyIcon: "⚠️",
        category: "バリア③：輸入に頼りすぎる課題",
        question: "外国からの輸入にたよりすぎると起こる課題について、正しく並び替えよう。",
        blocks: [
          "外国からの輸入に",
          "たよりすぎると、",
          "国内の産業が弱くなり、",
          "国内で製品がつくれなくなる。"
        ],
        point: "記述問題でもよく聞かれる超重要ポイント！「国内の産業が弱くなる」「輸入できなくなると国内で製品がつくれなくなる」をおさえよう。"
      },
      {
        id: "p24",
        page: "p.36〜37",
        enemyName: "技術輸出機 ハイテク・エクスポーター",
        enemyIcon: "💾",
        category: "バリア④：日本の輸出品の特色",
        question: "現在の日本の輸出品の特色について、正しい文になるように並び替えよう。",
        blocks: [
          "現在の日本は、",
          "高い技術を生かした",
          "自動車や集積回路などの",
          "機械類を多く輸出している。"
        ],
        point: "1960年は「せんい品」が1位でしたが、現在は自動車や集積回路（IC）などの「機械類」が輸出の6割以上を占めています。"
      },
      {
        id: "p25",
        page: "p.38",
        enemyName: "自然発電神 エコ・タイタン",
        enemyIcon: "☀️",
        category: "バリア⑤：再生可能エネルギーの開発",
        question: "これからの社会に向けたエネルギーの取り組みについて、正しく並び替えよう。",
        blocks: [
          "太陽光や風力など、",
          "くり返し使えて",
          "二酸化炭素を出さない",
          "再生可能エネルギーの開発が進む。"
        ],
        point: "「太陽光発電」「風力発電」＝「再生可能エネルギー」！（※「持続可能な社会」とまぎらわしいのでしっかり区別しよう！）"
      }
    ],

    // ==========================================
    // WAVE 3 (Step 3): キーワード指定 1行記述チャレンジ（全5問）
    // ==========================================
    step3_descriptive: [
      {
        id: "d21",
        page: "p.35",
        enemyName: "貿易海皇 トレード・リヴァイアサン【第1形態】",
        enemyIcon: "⚠️",
        question: "外国から安い機械類や燃料をたくさん輸入すると便利ですが、いいことばかりではありません。「輸入」という言葉を使って、輸入に頼りすぎると起こる問題（課題）を書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて、輸入に頼りすぎる課題を説明する必殺詠唱を放て！",
        keywords: [
          {
            label: "輸入",
            hint: "問題文の指定語句「輸入」を使うこと",
            variants: ["輸入", "ゆにゅう"]
          },
          {
            label: "国内の産業が弱くなる（国内で製品がつくれなくなる）",
            hint: "国内の産業が弱まる、または国内でものがつくれなくなること",
            variants: ["国内", "こくない", "産業", "さんぎょう", "弱く", "よわく", "おとろえ", "衰え", "売れなく", "うれなく", "つくれなく", "作れなく", "守る", "まもる"]
          }
        ],
        endingType: "method",
        modelAnswer: "輸入に頼りすぎると国内の産業が弱くなり、輸入が止まったときに国内で製品がつくれなくなってしまう。",
        rubricNote: "「輸入」という言葉を使い、「国内の産業が弱くなる（または国内で製品がつくれなくなる・売れなくなる）」と書けていれば一撃必殺！"
      },
      {
        id: "d22",
        page: "p.35〜37",
        enemyName: "貿易海皇 トレード・リヴァイアサン【第2形態】",
        enemyIcon: "📊",
        question: "1960年ごろと比べると、現在の日本の貿易ではどのような品目の輸出や輸入が増えていますか。「機械類」という言葉を使って書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて、貿易品目の変化を説明する必殺詠唱を放て！",
        keywords: [
          {
            label: "機械類",
            hint: "自動車やコンピューター、集積回路などの機械類",
            variants: ["機械類", "きかいるい", "機械製品", "きかいせいひん", "機械", "きかい"]
          },
          {
            label: "輸出・輸入ともに増えた（アジア・高い技術）",
            hint: "輸出でも輸入でも機械類の割合が大きくなっていること",
            variants: ["輸出", "ゆしゅつ", "輸入", "ゆにゅう", "増え", "ふえ", "多く", "おおく", "1位", "アジア", "あじあ", "自動車", "集積回路"]
          }
        ],
        endingType: "method",
        modelAnswer: "輸出ではせんい品が減って自動車などの機械類が1位になり、輸入でもアジアからの機械類が大きく増えている。",
        rubricNote: "「機械類」という言葉を使い、輸出や輸入で機械類が増えていることが書けていれば一撃必殺！"
      },
      {
        id: "d23",
        page: "p.36〜37",
        enemyName: "貿易海皇 トレード・リヴァイアサン【第3形態】",
        enemyIcon: "💾",
        question: "電子機器の頭脳として使われ、日本から多く輸出されている超小型の電子部品を何といいますか。また、日本の製造業が外国でばかり生産するようになると、国内の生産はどうなりますか。",
        instruction: "2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "集積回路（IC）",
            hint: "電子機器に使われる超小型の電子部品",
            variants: ["集積回路", "しゅうせきかいろ", "IC", "アイシー", "あいしー"]
          },
          {
            label: "国内の生産がおとろえる（減る）",
            hint: "日本国内での生産がおとろえてしまうこと",
            variants: ["国内", "こくない", "おとろえる", "衰える", "おとろえ", "減る", "へる", "少なくなる", "弱くなる"]
          }
        ],
        endingType: "method",
        modelAnswer: "超小型の電子部品を集積回路（IC）といい、外国でばかり生産すると国内での生産がおとろえてしまう。",
        rubricNote: "「集積回路（IC）」と「国内での生産がおとろえる（減る）」が書けていれば一撃必殺！"
      },
      {
        id: "d24",
        page: "p.38",
        enemyName: "貿易海皇 トレード・リヴァイアサン【第4形態】",
        enemyIcon: "☀️",
        question: "太陽光発電や風力発電のように、資源をくり返し使うことができ、地球温暖化の原因となる二酸化炭素を出さないエネルギーを何といいますか。特徴とあわせて1文で書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "二酸化炭素を出さない（くり返し使える・環境にやさしい）",
            hint: "再生可能エネルギーの特徴",
            variants: ["二酸化炭素", "にさんかたんそ", "くり返し", "繰り返し", "くりかえし", "環境", "かんきょう", "温暖化", "おんだんか", "太陽光", "風力"]
          },
          {
            label: "再生可能エネルギー",
            hint: "太陽光や風力などのエネルギーの名前",
            variants: ["再生可能エネルギー", "さいせいかのうエネルギー", "さいせいかのうえねるぎー"]
          }
        ],
        endingType: "method",
        modelAnswer: "資源をくり返し使えて二酸化炭素を出さない、環境にやさしいエネルギーを再生可能エネルギーという。",
        rubricNote: "特徴と「再生可能エネルギー」が正確に書けていれば一撃必殺！"
      },
      {
        id: "d25",
        page: "p.34",
        enemyName: "最終形態 ワールド・トレード・エンペラー",
        enemyIcon: "👑",
        question: "日本が「石油（原油）」を多く輸入している地域（または国）と、「鉄鉱石」や「石炭」を最も多く輸入している国を、それぞれ入れて1文で書きましょう。",
        instruction: "最後のトドメだ！日本の資源輸入の2大相手先を込めて究極詠唱を放て！",
        keywords: [
          {
            label: "中東（サウジアラビア・アラブ首長国連邦）",
            hint: "石油（原油）を多く輸入している地域や国",
            variants: ["中東", "ちゅうとう", "サウジアラビア", "さうじあらびあ", "アラブ首長国連邦"]
          },
          {
            label: "オーストラリア",
            hint: "鉄鉱石や石炭を最も多く輸入している国",
            variants: ["オーストラリア", "おーすとらりあ"]
          }
        ],
        endingType: "method",
        modelAnswer: "日本は石油をサウジアラビアなどの中東から多く輸入し、鉄鉱石や石炭はオーストラリアから最も多く輸入している。",
        rubricNote: "「中東（またはサウジアラビア等）」と「オーストラリア」が正確に書けていれば完全撃破！"
      }
    ]
  },

  // ==========================================================================
  // 単元6：これからの工業生産とわたしたち①（教科書 40〜43ページ）
  // ==========================================================================
  {
    id: "shakai5_ge_p40_43",
    grade: "小5社会（下）｜これからの工業生産とわたしたち①",
    pages: "教科書 40〜43ページ",
    title: "これからの工業生産の課題と伝統を生かした工業",
    subtitle: "大工場・中小工場のグラフ読解と、鯖江のめがね・輪島塗・有田焼・高岡銅器・堺打刃物！",
    icon: "👓",
    bossName: "伝統機巧師 トラディショナル・マイスター",
    bossIcon: "🏺",

    // ==========================================
    // WAVE 1 (Step 1): 基礎知識＆グラフ・資料読解 4択クイズ（全10問）
    // ==========================================
    step1_quiz: [
      {
        id: "q53",
        type: "資料読解",
        page: "p.40",
        enemyName: "ワーカー・グラフ",
        enemyIcon: "📉",
        question: "「製造業で働く人口の変化」のグラフ（p.40図③）を見ると、製造業で働く人の数は何年ごろから減り続けていますか。",
        choices: [
          "1990年（平成2年）ごろから減り続けている",
          "1960年（昭和35年）ごろから減り続けている",
          "2020年（令和2年）までずっと増え続けている",
          "どの年もまったく同じ人数で変わっていない"
        ],
        answer: "1990年（平成2年）ごろから減り続けている",
        keywords: ["製造業で働く人の数", "1990年（平成2年）から減り続けている"],
        explanation: "グラフを見ると、製造業で働く人の数は1990年（平成2年）の約1200万人をピークにして、その後は30年以上減り続けています。"
      },
      {
        id: "q54",
        type: "資料読解",
        page: "p.40",
        enemyName: "テキスタイル・スピナー",
        enemyIcon: "🧵",
        question: "「いろいろな工業の生産額で大工場・中小工場がしめるわりあい」のグラフ（p.40図⑤）で、中小工場（300人未満）の生産額のわりあいが約90%（89.8%〜91.1%）ともっとも高い工業はどれですか。",
        choices: [
          "せんい工業",
          "機械工業",
          "化学工業",
          "金属工業"
        ],
        answer: "せんい工業",
        keywords: ["せんい工業", "中小工場の生産額が約90%（91.1%）"],
        explanation: "「せんい工業」は、働く人が300人未満の「中小工場」が生産額の約90%（統計により89.8%〜91.1%）を占めており、中小工場が大活躍している工業です。"
      },
      {
        id: "q55",
        type: "資料読解",
        page: "p.40",
        enemyName: "スケール・バランサー",
        enemyIcon: "⚖️",
        question: "「いろいろな工業の生産額で大工場・中小工場がしめるわりあい」のグラフ（p.40図⑤）を見たときの説明として、正しいものはどれですか。",
        choices: [
          "「機械工業」と「化学工業」は、中小工場よりも大工場（300人以上）の生産額のわりあいの方が多い",
          "「食料品工業」と「せんい工業」は、大工場（300人以上）が生産額の9割以上をしめている",
          "すべての種類の工業で、大工場の方が中小工場よりも生産額が多い",
          "「機械工業」は、中小工場が生産額の7割以上をしめている"
        ],
        answer: "「機械工業」と「化学工業」は、中小工場よりも大工場（300人以上）の生産額のわりあいの方が多い",
        keywords: ["せんい・食料品・金属＝中小工場の方が多い", "化学・機械＝大工場の方が多い"],
        explanation: "よく出るグラフ比較です！「せんい工業」「食料品工業」「金属工業」は中小工場の生産額の方が多く、「化学工業（大工場約51〜56%）」と「機械工業（大工場約70〜71%）」は大工場の生産額の方が多くなっています。"
      },
      {
        id: "q56",
        type: "知識",
        page: "p.41",
        enemyName: "ラッカー・アーティスト",
        enemyIcon: "🥣",
        question: "石川県輪島市でさかんにつくられている、手作業の工程が分業化され、専門技術をもった職人がつくるはなやかなしっき（漆器）を何といいますか。",
        choices: [
          "輪島塗（わじまぬり）",
          "有田焼（ありたやき）",
          "高岡銅器（たかおかどうき）",
          "堺打刃物（さかいうちはもの）"
        ],
        answer: "輪島塗（わじまぬり）",
        keywords: ["石川県輪島市", "輪島塗（わじまぬり）", "分業化された職人の手作業"],
        explanation: "石川県輪島市では「輪島塗」とよばれるしっきづくりがさかんです。最近では伝統の技術を生かして、輪島塗のアクセサリーや金属カップとのコラボ製品などもつくられています。"
      },
      {
        id: "q57",
        type: "知識",
        page: "p.42",
        enemyName: "グラス・マイスター",
        enemyIcon: "👓",
        question: "「めがねのまち」として知られ、日本のめがねわく生産の90%以上をしめている都市はどこですか。",
        choices: [
          "福井県鯖江市（さばえし）",
          "石川県輪島市（わじまし）",
          "富山県高岡市（たかおかし）",
          "大阪府堺市（さかいし）"
        ],
        answer: "福井県鯖江市（さばえし）",
        keywords: ["福井県鯖江市", "日本のめがねわく生産の90%以上", "増永五左衛門", "チタン加工技術が医療用ピンセットにも応用"],
        explanation: "福井県鯖江市は日本のめがねわく生産の90%以上を占める世界三大めがね産地の一つです。軽くてじょうぶなチタン製めがねづくりの加工技術は、医療用のピンセットや部品などにも生かされています。"
      },
      {
        id: "q58",
        type: "知識・重要語句",
        page: "p.42",
        enemyName: "ブランド・エンブレム",
        enemyIcon: "🏷️",
        question: "福井県鯖江市の「THE 291（フクイ）」のように、産地がまとまって地域の特産品のみ力を高め、全国や世界の消費者に印象づけるための取り組みを何といいますか。",
        choices: [
          "地域ブランド",
          "かんばん方式",
          "仲間まわし",
          "現地生産"
        ],
        answer: "地域ブランド",
        keywords: ["地域ブランド", "地域の特産品のみ力を高める", "全国や世界の消費者に印象づける"],
        explanation: "教科書p.42の「ことば」の重要語句です。産地がまとまって地域の「特産品」のみ力を高め、全国や世界の消費者に印象づけるためにつくられるめいがらを「地域ブランド」といいます。"
      },
      {
        id: "q59",
        type: "知識",
        page: "p.43",
        enemyName: "セラミック・マスター",
        enemyIcon: "🏺",
        question: "佐賀県有田町を中心に400年以上の歴史をもち、最近では現代風のデザインを取り入れた食器や工芸品を海外に輸出するなどの新しい取り組みを進めている伝統工業は何ですか。",
        choices: [
          "有田焼（ありたやき）",
          "輪島塗（わじまぬり）",
          "高岡銅器（たかおかどうき）",
          "堺打刃物（さかいうちはもの）"
        ],
        answer: "有田焼（ありたやき）",
        keywords: ["佐賀県有田町", "有田焼", "400年以上の歴史", "現代風のデザイン・海外へ輸出"],
        explanation: "佐賀県有田町の「有田焼」は400年以上の歴史があり、伝統を生かしながら現代風のデザインを取り入れた製品を海外に輸出するなど、新しい取り組みを進めています。"
      },
      {
        id: "q60",
        type: "知識",
        page: "p.43",
        enemyName: "ブロンズ・ベル",
        enemyIcon: "🔔",
        question: "富山県高岡市でさかんで、寺の鐘（かね）や銅像、茶器や花器など、日本の銅器生産の90%以上をしめている伝統工業は何ですか。",
        choices: [
          "高岡銅器（たかおかどうき）",
          "堺打刃物（さかいうちはもの）",
          "有田焼（ありたやき）",
          "輪島塗（わじまぬり）"
        ],
        answer: "高岡銅器（たかおかどうき）",
        keywords: ["富山県高岡市", "高岡銅器", "寺の鐘や銅像・日本の銅器生産の90%以上"],
        explanation: "富山県高岡市の「高岡銅器」は400年の歴史をもち、工程ごとに分業化された専門の職人がさまざまな銅製品をつくっており、日本の銅器生産の90%以上を占めています。"
      },
      {
        id: "q61",
        type: "知識",
        page: "p.43",
        enemyName: "ブレード・スミス",
        enemyIcon: "🔪",
        question: "大阪府堺市で600年の歴史をもち、プロの料理人用包丁では国内の90%以上をしめ、和食への注目から海外からの注文も増えている伝統工業は何ですか。",
        choices: [
          "堺打刃物（さかいうちはもの）",
          "高岡銅器（たかおかどうき）",
          "有田焼（ありたやき）",
          "輪島塗（わじまぬり）"
        ],
        answer: "堺打刃物（さかいうちはもの）",
        keywords: ["大阪府堺市", "堺打刃物", "プロの料理人用包丁の90%以上", "和食への注目で海外の注文増加"],
        explanation: "大阪府堺市の「堺打刃物」は専門の職人が一本ずつ手づくりで仕上げ、切れ味と使い勝手にすぐれています。和食に対する世界からの注目が高まり、海外からの注文が増えています。"
      },
      {
        id: "q62",
        type: "思考・まとめ",
        page: "p.41〜43",
        enemyName: "クラフト・ガーディアン",
        enemyIcon: "✨",
        question: "鯖江のめがねわく、有田焼、高岡銅器、堺打刃物など、各地の「伝統を生かした工業生産」に共通している工夫として最も適切なものはどれですか。",
        choices: [
          "専門技術を受けついだ職人が分業や手作業で高い品質を守りながら、新しい製品開発や海外への輸出にも取り組んでいる",
          "昔からのやり方をすべてやめて、すべて外国の工場に生産をまかせている",
          "機械だけで大量に安いものをつくり、品質の検査は行わないようにしている",
          "国内の決まった人にしか売らないようにして、新しい商品はつくらない"
        ],
        answer: "専門技術を受けついだ職人が分業や手作業で高い品質を守りながら、新しい製品開発や海外への輸出にも取り組んでいる",
        keywords: ["職人の専門技術と分業", "地域ブランド", "現代風のデザインや他分野への応用", "海外への輸出"],
        explanation: "伝統を生かした工業では、職人の高い専門技術や分業で品質を守るだけでなく、地域ブランドをつくったり、医療分野へ応用したり、海外へ輸出したりと新しい挑戦を続けています。"
      }
    ],

    // ==========================================
    // WAVE 2 (Step 2): 語句ブロック並び替えパズル（全5問）
    // ==========================================
    step2_puzzle: [
      {
        id: "p26",
        page: "p.40",
        enemyName: "工場統計獣 センサス・ゴーレム",
        enemyIcon: "📊",
        category: "バリア①：大工場と中小工場の生産額のわりあい",
        question: "工業の種類による大工場と中小工場の生産額の特色を正しく並び替えよう。",
        blocks: [
          "せんい工業や食料品工業は",
          "中小工場の生産額が多く、",
          "機械工業や化学工業は",
          "大工場の生産額が多い。"
        ],
        point: "グラフの超重要ポイント！「せんい・食料品・金属＝中小工場の方が多い」「機械・化学＝大工場の方が多い」をセットで覚えよう！"
      },
      {
        id: "p27",
        page: "p.40",
        enemyName: "人口時計竜 タイム・ワーカー",
        enemyIcon: "📉",
        category: "バリア②：製造業で働く人口の変化",
        question: "日本の製造業で働く人の数の変化について、正しく並び替えよう。",
        blocks: [
          "日本の製造業で",
          "働く人の数は、",
          "1990年ごろから",
          "減り続けている。"
        ],
        point: "製造業で働く人の数が減り続けているのは「1990年（平成2年）」ごろからです。年号の数字もよく聞かれます！"
      },
      {
        id: "p28",
        page: "p.42",
        enemyName: "眼鏡機神 サバエ・マイスター",
        enemyIcon: "👓",
        category: "バリア③：福井県鯖江市のめがねわく生産",
        question: "福井県鯖江市の工業生産の特色について、正しい文になるように並び替えよう。",
        blocks: [
          "福井県鯖江市では、",
          "伝統を生かしためがねわくの",
          "生産がさかんで、日本全体の",
          "90%以上をしめている。"
        ],
        point: "「伝統」を生かした工業で、福井県鯖江市は日本のめがねわく生産の「90%以上」を占めています。"
      },
      {
        id: "p29",
        page: "p.42",
        enemyName: "銘柄紋章竜 ブランド・ドラグーン",
        enemyIcon: "🏷️",
        category: "バリア④：地域ブランドをつくる目的",
        question: "産地が「地域ブランド」をつくる目的について、正しく並び替えよう。",
        blocks: [
          "地域の特産品のみ力を高め、",
          "全国や世界の",
          "消費者に印象づけるために",
          "地域ブランドをつくっている。"
        ],
        point: "「地域の特産品のみ力を高め」「消費者に印象づけるために」「地域ブランドをつくる」という穴埋め・記述の定番フレーズです！"
      },
      {
        id: "p30",
        page: "p.43",
        enemyName: "伝統革新王 クラフト・ロード",
        enemyIcon: "🏺",
        category: "バリア⑤：伝統を生かした工業の新しい取り組み",
        question: "有田焼や堺打刃物など、伝統を生かした工業の取り組みを正しく並び替えよう。",
        blocks: [
          "職人の伝統技術を守りながら、",
          "現代風のデザインを取り入れ、",
          "海外へ輸出するなどの",
          "新しい取り組みを進めている。"
        ],
        point: "昔からの技術を守るだけでなく、新しいデザインや医療用部品への応用、海外への輸出など、時代に合った工夫をしています。"
      }
    ],

    // ==========================================
    // WAVE 3 (Step 3): キーワード指定 1行記述チャレンジ（全5問）
    // ==========================================
    step3_descriptive: [
      {
        id: "d26",
        page: "p.42",
        enemyName: "伝統機巧師 トラディショナル・マイスター【第1形態】",
        enemyIcon: "🏷️",
        question: "福井県鯖江市などの産地がまとまって、地域の製品のみ力を高め、全国や世界の消費者に印象づけるためにつくっているものを何といいますか。「特産品」という言葉を使って1文で書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "特産品",
            hint: "その地域ならではのすぐれた産物・製品",
            variants: ["特産品", "とくさんひん", "特産", "とくさん"]
          },
          {
            label: "地域ブランド",
            hint: "消費者に印象づけるためにつくる地域のめいがら",
            variants: ["地域ブランド", "ちいきぶらんど", "ブランド", "ぶらんど"]
          }
        ],
        endingType: "method",
        modelAnswer: "地域の特産品のみ力を高め、消費者に印象づけるために地域ブランドをつくっている。",
        rubricNote: "「特産品」と「地域ブランド」の2語を使って説明できていれば一撃必殺！"
      },
      {
        id: "d27",
        page: "p.40",
        enemyName: "伝統機巧師 トラディショナル・マイスター【第2形態】",
        enemyIcon: "📊",
        question: "工業の生産額のグラフを見たとき、中小工場が約9割をしめる工業と、逆に大工場の方が半分以上をしめる工業（2つ）を、それぞれ入れて1文で書きましょう。",
        instruction: "グラフの読み取りだ！2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "せんい工業",
            hint: "中小工場の生産額が約9割（91.1%）をしめる工業",
            variants: ["せんい工業", "繊維工業", "せんいこうぎょう", "せんい"]
          },
          {
            label: "機械工業・化学工業",
            hint: "大工場の生産額が半分以上をしめる工業",
            variants: ["機械工業", "きかいこうぎょう", "化学工業", "かがくこうぎょう"]
          }
        ],
        endingType: "method",
        modelAnswer: "中小工場が約9割をしめるのはせんい工業で、大工場の方が多いのは機械工業と化学工業である。",
        rubricNote: "「せんい工業」と「機械工業（または化学工業）」が正確に書けていれば一撃必殺！"
      },
      {
        id: "d28",
        page: "p.42〜43",
        enemyName: "伝統機巧師 トラディショナル・マイスター【第3形態】",
        enemyIcon: "🏺",
        question: "福井県鯖江市のめがねや佐賀県の有田焼、大阪府の堺打刃物など、各地の伝統を生かした工業では、これからさらに発展していくためにどのような新しい取り組みをしていますか。",
        instruction: "2つの言霊（キーワード）を込めて、伝統工業の新しい挑戦を説明する必殺詠唱を放て！",
        keywords: [
          {
            label: "伝統（職人の高い技術）",
            hint: "昔から受けついだ伝統や職人の技術を生かすこと",
            variants: ["伝統", "でんとう", "職人", "しょくにん", "技術", "ぎじゅつ", "チタン", "デザイン", "でざいん", "現代風", "医療"]
          },
          {
            label: "海外へ輸出（地域ブランド・新しい製品）",
            hint: "海外に輸出したり、地域ブランドや新しい分野の製品をつくったりすること",
            variants: ["海外", "かいがい", "輸出", "ゆしゅつ", "外国", "がいこく", "世界", "せかい", "ブランド", "新しい", "あたらしい", "新製品"]
          }
        ],
        endingType: "method",
        modelAnswer: "伝統の技術を生かして現代風のデザインの製品や医療用部品をつくり、地域ブランドを高めて海外へ輸出している。",
        rubricNote: "「伝統（職人の技術・デザイン等）」と「海外への輸出（地域ブランド・新分野への挑戦）」が書けていれば一撃必殺！"
      },
      {
        id: "d29",
        page: "p.42",
        enemyName: "伝統機巧師 トラディショナル・マイスター【第4形態】",
        enemyIcon: "👓",
        question: "福井県鯖江市では日本のめがねわく生産の何%以上をしめていますか。また、その軽くてじょうぶなチタンの加工技術は、ほかにどのような分野に生かされていますか。",
        instruction: "2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "90%以上（約9割）",
            hint: "日本のめがねわく生産にしめる福井県のわりあい",
            variants: ["90%", "９０％", "90パーセント", "9割", "９割", "きゅうわり"]
          },
          {
            label: "医療用（ピンセット・部品）",
            hint: "病院の手術などで使われるピンセットや部品の分野",
            variants: ["医療", "いりょう", "ピンセット", "ぴんせっと", "病院", "手術"]
          }
        ],
        endingType: "method",
        modelAnswer: "日本のめがねわく生産の90%以上をしめ、チタンの加工技術は医療用のピンセットや部品などにも生かされている。",
        rubricNote: "「90%以上（9割）」と「医療用（ピンセット等）」が書けていれば一撃必殺！"
      },
      {
        id: "d30",
        page: "p.40〜41",
        enemyName: "最終形態 マスター・オブ・トラディション",
        enemyIcon: "👑",
        question: "日本の製造業で働く人の数は何年ごろから減り続けていますか。また、輪島塗や高岡銅器のように職人が工程を分けてつくるしくみを何といいますか。",
        instruction: "最後のトドメだ！2つの言霊（キーワード）を込めて究極詠唱を放て！",
        keywords: [
          {
            label: "1990年",
            hint: "製造業で働く人口が減り始めた年（平成2年）",
            variants: ["1990", "１９９０", "平成2年"]
          },
          {
            label: "分業（専門の職人）",
            hint: "工程ごとに専門の職人が手分けしてつくること",
            variants: ["分業", "ぶんぎょう", "手分け", "てわけ", "専門", "せんもん"]
          }
        ],
        endingType: "method",
        modelAnswer: "製造業で働く人の数は1990年ごろから減り続けており、工程ごとに専門の職人が分けてつくるしくみを分業という。",
        rubricNote: "「1990年」と「分業（専門）」が正確に書けていれば完全撃破！"
      }
    ]
  },

  // ==========================================================================
  // 単元7：これからの工業生産とわたしたち②（教科書 44〜49ページ）
  // ==========================================================================
  {
    id: "shakai5_ge_p44_49",
    grade: "小5社会（下）｜これからの工業生産とわたしたち②",
    pages: "教科書 44〜49ページ",
    title: "高い技術を生かした中小工場と持続可能な社会",
    subtitle: "ものづくりのまち大田区の「しぼり」「仲間まわし」・介護や作業ロボット・持続可能な社会！",
    icon: "🤖",
    bossName: "未来創造神 サステナブル・オメガ",
    bossIcon: "🌱",

    // ==========================================
    // WAVE 1 (Step 1): 基礎知識＆グラフ・資料読解 4択クイズ（全10問）
    // ==========================================
    step1_quiz: [
      {
        id: "q63",
        type: "知識・重要語句",
        page: "p.45",
        enemyName: "スモール・ギア",
        enemyIcon: "⚙️",
        question: "働く人が「300人未満」の工場のことを何といいますか。また、日本の工場の数のうちどれくらいのわりあいを占めていますか。",
        choices: [
          "中小工場といい、日本の工場のほとんど（約99%）を占めている",
          "大工場といい、日本の工場の半分（約50%）を占めている",
          "関連工場といい、日本の工場の約10%しか存在しない",
          "組み立て工場といい、大都市に1か所ずつしかない"
        ],
        answer: "中小工場といい、日本の工場のほとんど（約99%）を占めている",
        keywords: ["中小工場＝働く人が300人未満", "大工場＝300人以上", "日本の工場のほとんどは中小工場"],
        explanation: "教科書p.45の「ことば」を確認しましょう。働く人が300人未満の工場を「中小工場」、300人以上の工場を「大工場」といい、日本の工場のほとんどは中小工場です。"
      },
      {
        id: "q64",
        type: "資料読解",
        page: "p.44〜45",
        enemyName: "オオタ・クラフト",
        enemyIcon: "🔩",
        question: "約3500の中小工場が集まり「ものづくりのまち」とよばれる東京都大田区で、業種別工場数のわりあい（p.45図④）がいちばん多いのはどの工業ですか。",
        choices: [
          "機械工業（約49%）",
          "せんい工業（約1%）",
          "食料品工業（約4%）",
          "化学工業（約10%）"
        ],
        answer: "機械工業（約49%）",
        keywords: ["東京都大田区＝ものづくりのまち", "業種別工場数1位は機械工業（約48.5〜49.0%）"],
        explanation: "大田区の業種別工場数のわりあいを見ると、「機械工業」が約49%（ほぼ半分）でいちばん多く、次いで「金属工業（約25〜26%）」が多くなっています。"
      },
      {
        id: "q65",
        type: "知識",
        page: "p.44",
        enemyName: "スピニング・マスター",
        enemyIcon: "📡",
        question: "東京都大田区の富永さんの町工場で、回転する金属の板に「へら一本」を当てて手作業で加工し、航空機の部品やパラボラアンテナをつくる高い技術を何といいますか。",
        choices: [
          "しぼり",
          "ようせつ",
          "プレス",
          "とそう"
        ],
        answer: "しぼり",
        keywords: ["しぼり", "へら一本で金属を加工する手作業", "航空機部品やパラボラアンテナ"],
        explanation: "「しぼり」という技術では、注文によってつくる製品がすべてちがい、使う金属によって力のかけ方も変わるため、職人の熟練した手作業が欠かせません。"
      },
      {
        id: "q66",
        type: "知識・重要語句",
        page: "p.45",
        enemyName: "ネットワーク・リンカー",
        enemyIcon: "🤝",
        question: "大田区の中小工場で、それぞれの工場が得意な技術（板金加工・パイプ加工など）をもちより、工場から工場へとまわしながら高い品質の製品をつくる協力を何といいますか。",
        choices: [
          "仲間まわし",
          "かんばん方式",
          "組み立てライン",
          "地域ブランド"
        ],
        answer: "仲間まわし",
        keywords: ["仲間まわし", "工場どうしが得意な技術をもちよって協力"],
        explanation: "近くの工場どうしがそれぞれの得意な専門技術をもちより、工場から工場へとまわして加工していくことで高い品質の製品をつくることを「仲間まわし」とよんでいます。"
      },
      {
        id: "q67",
        type: "知識",
        page: "p.45",
        enemyName: "オンリーワン・ペン",
        enemyIcon: "🖊️",
        question: "大田区の田中さんたちの工場が「仲間まわし」で開発した特しゅなペンは、どのような人の役に立つ製品ですか。",
        choices: [
          "書くと文字や線がもり上がり、目の不自由な人が指でさわって確かめることができるペン",
          "水の中でも消えずに書けて、深海探査に使われるペン",
          "宇宙空間で無重力でも文字が書けるペン",
          "音声で話したことを自動で翻訳して紙に印刷するペン"
        ],
        answer: "書くと文字や線がもり上がり、目の不自由な人が指でさわって確かめることができるペン",
        keywords: ["目の不自由な人がさわって文字を確かめられるペン", "オンリーワンの技術", "人に役立つ製品"],
        explanation: "香川県の特別支援学校にたのまれて、書くと字がもり上がり、目の不自由な人が指でさわって読み取れるペンを開発しました。その工場でしかできない「オンリーワン」の技術が国内外で評価されています。"
      },
      {
        id: "q68",
        type: "知識・課題",
        page: "p.45",
        enemyName: "ファクトリー・ダウン",
        enemyIcon: "📉",
        question: "高い技術をもった中小工場が集まる東京都大田区ですが、現在どのような課題をかかえていますか。",
        choices: [
          "工場数が減少しており、工場どうしが協力し合って技術を守り発展させる必要がある",
          "工場数が急激に増えすぎて、住宅がまったく建てられなくなっている",
          "大工場ばかりになってしまい、中小工場が1つもなくなってしまった",
          "外国からの注文が禁止されて、国内にしか売れなくなっている"
        ],
        answer: "工場数が減少しており、工場どうしが協力し合って技術を守り発展させる必要がある",
        keywords: ["大田区の課題＝工場数の減少", "工場どうしが協力して高い品質の製品をつくる"],
        explanation: "教科書p.45にあるように、大田区では「工場数の減少」などの課題がありますが、工場どうしが協力し合って高い品質の製品をつくり、乗りこえようとしています。"
      },
      {
        id: "q69",
        type: "知識・思考",
        page: "p.46",
        enemyName: "ケア・ロイド",
        enemyIcon: "🤖",
        question: "現在、少子高齢化が進み若い世代の人口が減ることが予想される日本で、工場や介護施設、危険な作業現場などのために開発が進められているものは何ですか。",
        choices: [
          "人の代わりになって活やくするロボットや、くらしを支える製品",
          "石炭を大量に燃やして走る蒸気機関車",
          "人手がたくさんないと動かせない大型の工作機械",
          "使い捨てにするプラスチック製品"
        ],
        answer: "人の代わりになって活やくするロボットや、くらしを支える製品",
        keywords: ["少子高齢化と人手不足の解決", "介護施設や危険な作業現場で働くロボット"],
        explanation: "少子高齢化による人手不足を解決したり、お年寄りや体の不自由な人のくらしを支えたりするため、介護施設や危険な作業現場で人の代わりに働くロボットなどの開発が進められています。"
      },
      {
        id: "q70",
        type: "知識",
        page: "p.46",
        enemyName: "ハイドロ・ステーション",
        enemyIcon: "💧",
        question: "代表的なエコタウンの一つである福岡県北九州市などで整備が進められている、燃料電池自動車の燃料を補給する施設を何といいますか。",
        choices: [
          "水素ステーション",
          "京浜トラックターミナル",
          "火力発電所",
          "高炉（こうろ）"
        ],
        answer: "水素ステーション",
        keywords: ["水素ステーション", "福岡県北九州市（エコタウン）", "燃料電池自動車の補給場所"],
        explanation: "福岡県北九州市は代表的なエコタウンの一つで、燃料電池自動車に水素を補給する「水素ステーション」など、水素社会の実現に向けた取り組みを行っています。"
      },
      {
        id: "q71",
        type: "知識・重要語句",
        page: "p.46",
        enemyName: "アース・ガーディアン",
        enemyIcon: "🌍",
        question: "今のことだけでなく、未来に生きる人々の幸福のために、環境を大切にし、資源を使い切ってしまわない社会のことを何といいますか。",
        choices: [
          "持続可能な社会",
          "大量生産社会",
          "高度経済成長社会",
          "自給自足社会"
        ],
        answer: "持続可能な社会",
        keywords: ["持続可能な社会", "未来に生きる人々の幸福", "環境を大切にし、資源を使い切ってしまわない社会"],
        explanation: "教科書p.46の「ことば」の重要語句です。未来に生きる人々の幸せも考え、資源を使い切ってしまうことなく、環境にも配りょした社会を「持続可能な社会」といいます。"
      },
      {
        id: "q72",
        type: "思考・まとめ",
        page: "p.47〜49",
        enemyName: "フューチャー・ビジョン",
        enemyIcon: "🌈",
        question: "これからの日本の工業生産を発展させていくために大切なこととして、教科書のまとめ（p.47〜49）に書かれている内容に当てはまらないものはどれですか。",
        choices: [
          "環境や資源のことは気にせず、とにかく価格の安い製品だけを大量につくり続けること",
          "「オンリーワン」の高い技術や職人の伝統技術を生かし、工場どうしが協力すること",
          "介護ロボットや目の不自由な人向けのペンなど、人のくらしに役立つ製品を開発すること",
          "排出ガスを出さない自動車など環境に配りょした製品をつくり、持続可能な社会をめざすこと"
        ],
        answer: "環境や資源のことは気にせず、とにかく価格の安い製品だけを大量につくり続けること",
        keywords: ["伝統を生かす", "高い技術（オンリーワン・仲間まわし）", "人に役立つ製品・環境にやさしい製品", "つり合いのとれた貿易"],
        explanation: "ただ安いものを大量につくるだけでなく、①伝統や高い技術を生かす、②人に役立つ製品をつくる、③環境や資源に配りょする（持続可能な社会）、④世界の国々とつり合いのとれた貿易を続けることが大切です。"
      }
    ],

    // ==========================================
    // WAVE 2 (Step 2): 語句ブロック並び替えパズル（全5問）
    // ==========================================
    step2_puzzle: [
      {
        id: "p31",
        page: "p.45",
        enemyName: "町工場機神 クラフト・エンジン",
        enemyIcon: "⚙️",
        category: "バリア①：中小工場の定義とよさ",
        question: "「中小工場」の意味と、大工場にはないよさについて正しく並び替えよう。",
        blocks: [
          "働く人が300人未満の",
          "工場を中小工場といい、",
          "高い技術の製品を",
          "少量でもすばやくつくれる。"
        ],
        point: "「300人未満＝中小工場」「300人以上＝大工場」。たのまれたらすばやく、少量でも高い技術でつくれるのが中小工場の強みです！"
      },
      {
        id: "p32",
        page: "p.45",
        enemyName: "連携機獣 タッグ・フォートレス",
        enemyIcon: "🤝",
        category: "バリア②：ものづくりのまち大田区の協力",
        question: "東京都大田区の中小工場の現状と協力のしくみについて、正しく並び替えよう。",
        blocks: [
          "大田区では工場数は減少しているが、",
          "工場どうしが得意な技術を",
          "もちよって協力する",
          "「仲間まわし」で製品をつくる。"
        ],
        point: "大田区は「中小工場」が多く、工場数は「減少」していますが、「仲間まわし」で協力して「オンリーワン」の製品をつくっています。"
      },
      {
        id: "p33",
        page: "p.46",
        enemyName: "機巧守護神 ロボット・センチネル",
        enemyIcon: "🤖",
        category: "バリア③：少子高齢化と新しい製品開発",
        question: "少子高齢化が進む日本での新しい工業製品の取り組みを正しく並び替えよう。",
        blocks: [
          "少子高齢化が進む日本では、",
          "介護施設や危険な現場で",
          "人の代わりに働くロボットや",
          "くらしに役立つ製品を開発している。"
        ],
        point: "少子高齢化による人手不足の解決や、お年寄り・体の不自由な人のくらしを支える製品づくりがこれからのカギです！"
      },
      {
        id: "p34",
        page: "p.46",
        enemyName: "地球守護竜 アース・ドラグーン",
        enemyIcon: "🌍",
        category: "バリア④：持続可能な社会の意味",
        question: "「持続可能な社会」とはどのような社会か、正しい文になるように並び替えよう。",
        blocks: [
          "未来に生きる人々の幸せも考え、",
          "資源を使い切らず",
          "環境にも配りょした社会を",
          "「持続可能な社会」という。"
        ],
        point: "「未来に生きる人々の幸せ」「資源を使い切らない」「環境に配りょ」の3つがそろったら「持続可能な社会」です！"
      },
      {
        id: "p35",
        page: "p.48〜49",
        enemyName: "未来創世王 フューチャー・ロード",
        enemyIcon: "🌈",
        category: "バリア⑤：これからの日本の工業生産に大切なこと",
        question: "これからの日本の工業生産を発展させるために大切なことを正しく並び替えよう。",
        blocks: [
          "伝統やオンリーワンの技術を生かし、",
          "環境に配りょした製品をつくりながら、",
          "輸出と輸入のつり合いのとれた",
          "貿易を続けていくことが大切だ。"
        ],
        point: "記述問題のまとめでも使える黄金フレーズです！「技術」「環境」「つり合いのとれた貿易」の視点をしっかり身につけよう。"
      }
    ],

    // ==========================================
    // WAVE 3 (Step 3): キーワード指定 1行記述チャレンジ（全5問）
    // ==========================================
    step3_descriptive: [
      {
        id: "d31",
        page: "p.45",
        enemyName: "未来創造神 サステナブル・オメガ【第1形態】",
        enemyIcon: "⚙️",
        question: "働く人が300人未満の「中小工場」には、大工場にはないどのようなよさ（強み）がありますか。また、大田区のように工場どうしが技術をもちよって協力することを何といいますか。",
        instruction: "2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "高い技術・少量・すばやく（オンリーワン）",
            hint: "高い技術のものを少量でもすばやくつくれること",
            variants: ["高い技術", "たかいぎじゅつ", "少量", "しょうりょう", "すばやく", "素早く", "オンリーワン", "おんりーわん", "手作業"]
          },
          {
            label: "仲間まわし（協力）",
            hint: "工場から工場へとまわしながら加工して協力すること",
            variants: ["仲間まわし", "なかままわし", "仲間回し", "協力", "きょうりょく"]
          }
        ],
        endingType: "method",
        modelAnswer: "高い技術のものを少量でもすばやくつくれるよさがあり、工場どうしが協力することを仲間まわしという。",
        rubricNote: "中小工場のよさ（高い技術・少量・すばやく）と「仲間まわし（協力）」が書けていれば一撃必殺！"
      },
      {
        id: "d32",
        page: "p.46",
        enemyName: "未来創造神 サステナブル・オメガ【第2形態】",
        enemyIcon: "🌍",
        question: "今のことだけでなく未来に生きる人々の幸福のために、環境を大切にし、資源を使い切ってしまわない社会のことを何といいますか。説明とあわせて1文で書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "資源・環境（未来）",
            hint: "資源を使い切らず、環境を大切にすること",
            variants: ["資源", "しげん", "環境", "かんきょう", "未来", "みらい"]
          },
          {
            label: "持続可能な社会",
            hint: "教科書p.46の重要語句",
            variants: ["持続可能な社会", "じぞくかのうなしゃかい", "持続可能", "じぞくかのう"]
          }
        ],
        endingType: "method",
        modelAnswer: "未来に生きる人々のために環境を大切にし、資源を使い切らない社会を持続可能な社会という。",
        rubricNote: "「資源・環境（未来）」と「持続可能な社会」が正確に書けていれば一撃必殺！"
      },
      {
        id: "d33",
        page: "p.46〜48",
        enemyName: "未来創造神 サステナブル・オメガ【第3形態】",
        enemyIcon: "🤖",
        question: "日本では少子高齢化が進み、働く人の不足が課題となっています。この課題を解決したり人々のくらしを支えたりするために、工業ではどのような製品を開発していけばよいですか。",
        instruction: "2つの言霊（キーワード）を込めて、これからの製品づくりを説明する必殺詠唱を放て！",
        keywords: [
          {
            label: "ロボット（人の代わり・人手不足）",
            hint: "介護施設や危険な作業現場で人の代わりに働くロボットなど",
            variants: ["ロボット", "ろぼっと", "人の代わり", "ひとのかわり", "介護", "かいご", "人手不足", "ひとでぶそく"]
          },
          {
            label: "くらしに役立つ（助ける・支える）",
            hint: "人々のくらしに役立つ（生活を支える・助ける）製品",
            variants: ["役立つ", "やく立つ", "やくにたつ", "役に立つ", "くらし", "暮らし", "生活", "せいかつ", "支える", "ささえる", "助ける", "たすける", "開発"]
          }
        ],
        endingType: "method",
        modelAnswer: "人手不足を解決するために人の代わりに働くロボットや、人々のくらしに役立つ製品を開発していけばよい。",
        rubricNote: "「人の代わりに働くロボット（人手不足の解決）」や「くらしに役立つ（生活を支える）製品の開発」が書けていれば一撃必殺！"
      },
      {
        id: "d34",
        page: "p.46〜49",
        enemyName: "未来創造神 サステナブル・オメガ【第4形態】",
        enemyIcon: "🌱",
        question: "地球温暖化や資源の不足といった課題がある中で、これからの日本の工業生産をどのように発展させていけばよいですか。環境やエネルギーに注目して書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて、環境にやさしい工業のあり方を詠唱せよ！",
        keywords: [
          {
            label: "環境（排出ガス・再生可能エネルギー・資源）",
            hint: "環境に配りょすること、排出ガスを出さない車や再生可能エネルギーの利用",
            variants: ["環境", "かんきょう", "排出ガス", "はいしゅつがす", "二酸化炭素", "再生可能エネルギー", "資源", "しげん", "温暖化"]
          },
          {
            label: "製品・技術（持続可能な社会・開発）",
            hint: "製品や技術をつくり出し、持続可能な社会をめざすこと",
            variants: ["製品", "せいひん", "技術", "ぎじゅつ", "自動車", "じどうしゃ", "持続可能", "じぞくかのう", "開発", "かいはつ", "つくる", "作る"]
          }
        ],
        endingType: "method",
        modelAnswer: "排出ガスを出さない自動車や再生可能エネルギーを使うなど、環境に配りょした製品や技術を開発し、持続可能な社会をめざしていけばよい。",
        rubricNote: "「環境への配りょ（排出ガスを出さない・再生可能エネルギー・資源を大切にする）」と「製品や技術の開発（持続可能な社会）」が書けていれば一撃必殺！"
      },
      {
        id: "d35",
        page: "p.48〜49",
        enemyName: "最終形態 アルティメット・サステナブル",
        enemyIcon: "👑",
        question: "「とにかく価格が安い製品をたくさんつくって売ることが大切だ」という意見があります。安い製品以外にも、これからの工業生産ではどのようなことが大切か、あなたの考えを書きましょう。",
        instruction: "最後のトドメだ！「技術・伝統」や「環境・資源」「消費者の安全・くらし」などの言霊を込めて究極詠唱を放て！",
        keywords: [
          {
            label: "環境・資源 または 高い技術・伝統",
            hint: "「再生可能エネルギーや資源を大切にする環境への配りょ」または「高い技術や伝統技術」",
            variants: ["環境", "かんきょう", "資源", "しげん", "再生可能", "技術", "ぎじゅつ", "伝統", "でんとう", "オンリーワン", "安全", "あんぜん"]
          },
          {
            label: "製品づくり（受け継ぐ・くらしを支える・貿易）",
            hint: "製品づくりに生かすこと、技術を受け継ぐこと、人々のくらしを支えること",
            variants: ["製品", "せいひん", "ものづくり", "受け継", "うけつ", "守る", "まもる", "くらし", "暮らし", "生活", "せいかつ", "役立つ", "役に立つ", "消費者", "貿易", "大切"]
          }
        ],
        endingType: "method",
        modelAnswer: "限りある資源を大切にして環境に配りょした製品づくりをすることや、日本にしかない高い技術や伝統技術を生かして人々のくらしに役立つ製品をつくることも大切だ。",
        rubricNote: "「環境・資源への配りょ」「高い技術・伝統技術の継承」「安全でくらしに役立つ製品づくり」のいずれかが自分の言葉で書けていれば完全撃破！"
      }
    ]
  },

  // ==========================================================================
  // 単元8：【テスト勉強】「運輸と貿易・これからの工業生産」総復習（本(下) P30〜49）
  // 貿易グラフ・港と空港の比較・ICと再生可能エネルギー・大工場と中小工場・記述2題の総仕上げ
  // ==========================================================================
  {
    id: "shakai5_ge_test_p30_49",
    grade: "🎯 テスト勉強【運輸と貿易・これからの工業生産】",
    pages: "本（下）30〜49ページ",
    title: "運輸と貿易・これからの工業生産 総復習マスター",
    subtitle: "貿易グラフのひっかけ・ICと再生可能エネルギー・大工場と中小工場・記述2大テーマを完全攻略！",
    icon: "🏆",
    bossName: "貿易機神 グランド・ロジスティクス",
    bossIcon: "👑",

    // ==========================================
    // WAVE 1 (Step 1): 総復習・資料読解・まちがえやすいポイント（全12問）
    // ==========================================
    step1_quiz: [
      {
        id: "q73",
        type: "資料読解・グラフ",
        page: "p.35〜37",
        enemyName: "トレード・チェッカー",
        enemyIcon: "📊",
        question: "日本の輸入品と輸出品の取りあつかい額の変化のグラフ（1960年代〜2022年）について、正しい説明はどれですか。",
        choices: [
          "近年の輸入品では「原油などの燃料」と「機械類」が大きな割合を占め、1990年と2022年を比べると輸出品の取りあつかい額は2倍以上に増えている",
          "近年の輸入品では「原料品」が8割以上を占め、「機械類」はまったく輸入されていない",
          "1990年（約41.5兆円）と2022年（約98.1兆円）を比べると、輸出品の取りあつかい額は半分以下に減っている",
          "現在の輸出品の1位は「せんい品」で、全体の7割以上を占めている"
        ],
        answer: "近年の輸入品では「原油などの燃料」と「機械類」が大きな割合を占め、1990年と2022年を比べると輸出品の取りあつかい額は2倍以上に増えている",
        keywords: ["2022年の輸入は燃料(28%)と機械類(28%)が同じ割合", "輸出品総額は1990年(41.5兆円)→2022年(98.1兆円)で2倍以上"],
        explanation: "2022年の輸入品グラフでは「原油などの燃料（28%）」と「機械類（28%）」が同じ割合で並んでいます。また、輸出品の総額は1990年の41.5兆円から2022年の98.1兆円へと2倍以上に増えています。"
      },
      {
        id: "q74",
        type: "資料読解・ひっかけ注意",
        page: "p.31",
        enemyName: "ポート・トリックスター",
        enemyIcon: "⚓",
        question: "【ひっかけ注意！】日本の主な港や空港の貿易額のグラフ（成田国際空港・東京港・名古屋港・横浜港・関西国際空港）を見たとき、正しい説明はどれですか。",
        choices: [
          "「輸出額」がいちばん大きいのは名古屋港であり、成田国際空港では輸出額より「輸入額」の方が多い",
          "「輸出額」がいちばん大きいのは東京港であり、名古屋港は輸入額の方が多い",
          "成田国際空港では、輸入額よりも「輸出額」の方がずっと多い",
          "すべての港と空港で、輸出額と輸入額がまったく同じになっている"
        ],
        answer: "「輸出額」がいちばん大きいのは名古屋港であり、成田国際空港では輸出額より「輸入額」の方が多い",
        keywords: ["輸出額1位＝名古屋港", "貿易額合計1位＝成田国際空港（ただし輸入額＞輸出額）"],
        explanation: "超重要ひっかけポイントです！貿易額の「合計」が1位なのは成田国際空港ですが、成田国際空港や東京港は「輸入額」の方が多いです。「輸出額」だけに注目すると、自動車輸出がさかんな「名古屋港」が1位です！"
      },
      {
        id: "q75",
        type: "資料読解",
        page: "p.34",
        enemyName: "リソース・センチネル",
        enemyIcon: "🛢️",
        question: "日本の「輸入量と国内生産量のわりあい」のグラフ（原油99.7%・鉄鉱石100%・石炭99.6%・天然ガス97.8%）から読み取れることとして、正しいものはどれですか。",
        choices: [
          "日本は工業生産に必要な原材料や燃料のほとんどすべてを、外国からの輸入にたよっている",
          "日本は鉄鉱石と石炭をすべて国内でまかなえている",
          "天然ガスと原油は半分以上を日本国内で生産している",
          "日本は資源が豊富なので、原材料を輸入する必要がない"
        ],
        answer: "日本は工業生産に必要な原材料や燃料のほとんどすべてを、外国からの輸入にたよっている",
        keywords: ["原油99.7%・鉄鉱石100%・石炭99.6%・天然ガス97.8%を輸入"],
        explanation: "原油・鉄鉱石・石炭・天然ガスはいずれも97%〜100%を外国からの輸入に頼っており、日本の工業生産にとって資源の確保が大きな課題であることがわかります。"
      },
      {
        id: "q76",
        type: "知識・まぎらわしい語句",
        page: "p.31〜38",
        enemyName: "ワード・キメラ",
        enemyIcon: "🦁",
        question: "外国に商品を売ることを（①）という。現在の日本は電子機器に使われる（②）などを多く輸出している。また、太陽光発電や（③）発電といった（④）エネルギーの開発が進められている。正しい組み合わせはどれですか。",
        choices: [
          "① 輸出 ／ ② 集積回路(IC) ／ ③ 風力 ／ ④ 再生可能",
          "① 輸送 ／ ② せんい品 ／ ③ 火力 ／ ④ 持続可能",
          "① 輸出 ／ ② 集積回路(IC) ／ ③ 火力 ／ ④ 持続可能",
          "① 輸入 ／ ② せんい品 ／ ③ 風力 ／ ④ 再生可能"
        ],
        answer: "① 輸出 ／ ② 集積回路(IC) ／ ③ 風力 ／ ④ 再生可能",
        keywords: ["外国に売る＝輸出", "電子機器の部品＝集積回路(IC)", "太陽光・風力＝再生可能エネルギー"],
        explanation: "まぎらわしい選択肢に注意！①外国に売るのは「輸出」（運ぶのは輸送）。②電子機器に使うのは「集積回路(IC)」。③環境にやさしいのは「風力」発電。④エネルギーの名前は「再生可能」エネルギーです（社会の名前が「持続可能な社会」）。"
      },
      {
        id: "q77",
        type: "資料読解・ひっかけ注意",
        page: "p.40",
        enemyName: "ファクトリー・アナライザー",
        enemyIcon: "🏭",
        question: "【ひっかけ注意！】「いろいろな工業の生産額で大工場・中小工場がしめるわりあい」のグラフで、「化学工業」と「せんい工業」についての正しい説明はどれですか。",
        choices: [
          "化学工業の生産額のわりあいは「大工場」の方が多く、せんい工業は「中小工場」が約9割（91.1%）を占めている",
          "化学工業の生産額のわりあいは「中小工場」の方が多く、せんい工業は「大工場」が約9割を占めている",
          "化学工業もせんい工業も、大工場が9割以上を占めている",
          "化学工業もせんい工業も、中小工場が9割以上を占めている"
        ],
        answer: "化学工業の生産額のわりあいは「大工場」の方が多く、せんい工業は「中小工場」が約9割（91.1%）を占めている",
        keywords: ["化学工業＝大工場の方が多い（55.5%）", "せんい工業＝中小工場が91.1%"],
        explanation: "グラフの棒の区切りを落ち着いて見ましょう！せんい工業（91.1%）・食料品工業（73.6%）・金属工業（61.9%）は「中小工場」の方が多いですが、**化学工業（大工場55.5%：中小工場44.5%）**と**機械工業（大工場70.4%）**は「**大工場**」の方が多くを占めています！"
      },
      {
        id: "q78",
        type: "資料読解",
        page: "p.40・p.45",
        enemyName: "センサス・ナイト",
        enemyIcon: "🛡️",
        question: "「業種別工場数のわりあい」と「製造業で働く人口の変化」のグラフを見たとき、大田区でいちばん工場数が多い工業（①）と、製造業で働く人の数が減り続けている始まりの年（②）の正しい組み合わせはどれですか。",
        choices: [
          "① 機械工業 ／ ② 1990年",
          "① せんい工業 ／ ② 1960年",
          "① 食料品工業 ／ ② 2000年",
          "① 化学工業 ／ ② 1970年"
        ],
        answer: "① 機械工業 ／ ② 1990年",
        keywords: ["大田区で一番多いのは機械工業（49.0%）", "製造業の人口は1990年から減少"],
        explanation: "大田区の業種別工場数でいちばん多いのは「機械」工業（49.0%）です。また、製造業で働く人の数はピークだった「1990」年から減り続けています。"
      },
      {
        id: "q79",
        type: "知識・まとめ",
        page: "p.41〜42",
        enemyName: "サバエ・ガーディアン",
        enemyIcon: "👓",
        question: "日本各地には（①）を生かした工業が数多く残されている。福井県鯖江市ではめがねわくの生産が日本全体の90%以上をしめ、地域の（②）のみ力を高めて消費者に印象づけるために（③）をつくっている。正しい組み合わせはどれですか。",
        choices: [
          "① 伝統 ／ ② 特産品 ／ ③ 地域ブランド",
          "① 新しい技術 ／ ② 大工場 ／ ③ 地域ブランド",
          "① 伝統 ／ ② 輸入品 ／ ③ 中小工場",
          "① 新しい技術 ／ ② 特産品 ／ ③ 大工場"
        ],
        answer: "① 伝統 ／ ② 特産品 ／ ③ 地域ブランド",
        keywords: ["伝統を生かした工業", "地域の特産品のみ力を高める", "地域ブランド"],
        explanation: "福井県鯖江市のめがねわくや輪島塗などは「① 伝統」を生かした工業です。地域の「② 特産品」のみ力を高め、世界の消費者に印象づけるために「③ 地域ブランド」をつくっています。"
      },
      {
        id: "q80",
        type: "知識・まとめ",
        page: "p.44〜45",
        enemyName: "オオタ・マイスター",
        enemyIcon: "🔩",
        question: "東京都大田区は「ものづくりのまち」とよばれ、高い技術をもった（①）が多くある。大田区では工場数は（②）しており、工場どうしが協力し合って高い品質の製品をつくっている。正しい組み合わせはどれですか。",
        choices: [
          "① 中小工場 ／ ② 減少",
          "① 大工場 ／ ② 増加",
          "① 中小工場 ／ ② 増加",
          "① 大工場 ／ ② 減少"
        ],
        answer: "① 中小工場 ／ ② 減少",
        keywords: ["大田区＝高い技術をもった中小工場が多い", "工場数は減少している"],
        explanation: "ものづくりのまち大田区には、高い技術をもった「① 中小工場」が約3500集まっています。工場数は「② 減少」していますが、「仲間まわし」などで工場どうしが協力し合って高い品質の製品をつくっています。"
      },
      {
        id: "q81",
        type: "思考・課題",
        page: "p.35",
        enemyName: "インポート・リスク",
        enemyIcon: "⚠️",
        question: "日本はアジア地域から安くて品質のよい機械類を輸入したり、石油などの燃料をたくさん輸入したりしています。輸入で安いものや国内でつくれないものが手に入る一方、どのような問題（課題）がありますか。",
        choices: [
          "輸入に頼りすぎると国内の産業が弱くなり、もし輸入できなくなると国内で製品がつくれなくなってしまう",
          "輸入すればするほど、日本国内の工場で働く人の仕事が増えすぎてしまう",
          "外国の資源が無限に増え続けて、価格がタダになってしまう",
          "国内のすべての工場が自動的に大工場に変わってしまう"
        ],
        answer: "輸入に頼りすぎると国内の産業が弱くなり、もし輸入できなくなると国内で製品がつくれなくなってしまう",
        keywords: ["輸入に頼ると国内の産業が弱くなる", "輸入できなくなると国内で製品がつくれなくなる"],
        explanation: "輸入のメリットの裏にある大事な課題です。「輸入に頼ると国内の産業が弱くなってしまう」「輸入できなくなると国内で製品がつくれなくなってしまう」という2つの視点を自分の言葉で書けるようにしましょう！"
      },
      {
        id: "q82",
        type: "知識・比較",
        page: "p.38・p.46",
        enemyName: "エコ・ツインズ",
        enemyIcon: "🌱",
        question: "テストでよくまちがえやすい「再生可能エネルギー」と「持続可能な社会」の使い分けとして、正しいものはどれですか。",
        choices: [
          "太陽光発電や風力発電は「再生可能エネルギー」といい、資源を使い切らず環境にも配りょした社会を「持続可能な社会」という",
          "太陽光発電や風力発電は「持続可能エネルギー」といい、環境にやさしい社会を「再生可能な社会」という",
          "どちらも同じ意味なので、どちらの言葉を入れてもよい",
          "石油や石炭を燃やすことを「再生可能エネルギー」という"
        ],
        answer: "太陽光発電や風力発電は「再生可能エネルギー」といい、資源を使い切らず環境にも配りょした社会を「持続可能な社会」という",
        keywords: ["エネルギー＝再生可能エネルギー", "社会＝持続可能な社会"],
        explanation: "後ろにつく言葉で見分けましょう！「〇〇エネルギー」と聞かれたら「**再生可能**エネルギー」（太陽光・風力など）、「〇〇な社会」と聞かれたら「**持続可能**な社会」（または温室効果ガスゼロの「脱炭素社会」）です！"
      },
      {
        id: "q83",
        type: "知識",
        page: "p.32〜33",
        enemyName: "トランス・マスター",
        enemyIcon: "🚚",
        question: "国内の貨物輸送のわりあいが最も高い「トラック（自動車）」と、2番目に高い「船」の使い分けとして正しいものはどれですか。",
        choices: [
          "トラックは積みかえなしで希望の日時に直接運ぶのに向き、船は一度にたくさんの重い荷物を安い費用で運ぶのに向く",
          "トラックは一度に何万トンもの原油を運ぶのに向き、船は山の奥の工場まで積みかえなしで直接運ぶのに向く",
          "トラックも船も、集積回路を数時間で外国へ飛ばすために使われる",
          "国内の貨物輸送では鉄道が9割を占め、トラックと船はほとんど使われない"
        ],
        answer: "トラックは積みかえなしで希望の日時に直接運ぶのに向き、船は一度にたくさんの重い荷物を安い費用で運ぶのに向く",
        keywords: ["トラック＝積みかえなし・日時指定", "船＝大量・大型・重い荷物を安く運ぶ"],
        explanation: "国内の貨物輸送の約53%がトラック（自動車）、約42%が船です。それぞれの長所に合わせて使い分けたり、トラックごとフェリーに乗せて運んだりしています。"
      },
      {
        id: "q84",
        type: "思考・まとめ",
        page: "p.46〜49",
        enemyName: "フューチャー・マイスター",
        enemyIcon: "👑",
        question: "日本で少子高齢化が進んでいることや地球温暖化などの課題がある中で、これからの日本の工業を発展させていくための取り組みとして適切なものはどれですか。",
        choices: [
          "排出ガスを出さない自動車など環境に配りょした製品や、人手不足を補うロボット・人のくらしに役立つ製品を開発し、高い技術を守りながらつり合いのとれた貿易を行う",
          "環境問題は気にせずに石油や石炭の使用量を増やし、伝統技術や中小工場をすべてなくす",
          "外国との貿易や現地生産をすべてやめて、日本国内だけで閉じた工業にする",
          "お年寄りや体の不自由な人向けの製品はつくらず、若者向けの商品だけをつくる"
        ],
        answer: "排出ガスを出さない自動車など環境に配りょした製品や、人手不足を補うロボット・人のくらしに役立つ製品を開発し、高い技術を守りながらつり合いのとれた貿易を行う",
        keywords: ["環境に配慮した製品・技術", "人手不足を補うロボット・暮らしに役立つ製品", "つり合いのとれた貿易・高い技術の継承"],
        explanation: "これからの日本の工業生産の記述テーマそのものです！①環境への配りょ（排出ガスを出さない車など）、②少子高齢化・人手不足への対応（ロボット・くらしに役立つ製品）、③つり合いのとれた貿易や高い技術の継承、の3つの柱をおさえましょう。"
      }
    ],

    // ==========================================
    // WAVE 2 (Step 2): 記述文構造パズル（全5問）
    // ==========================================
    step2_puzzle: [
      {
        id: "p36",
        page: "p.35",
        enemyName: "輸入警鐘竜 インポート・ウォーニング",
        enemyIcon: "⚠️",
        category: "バリア①：輸入に頼りすぎる課題（産業面）",
        question: "外国から安い製品や燃料をたくさん輸入することの課題について、正しく並び替えよう。",
        blocks: [
          "外国からの輸入に",
          "たよりすぎると、",
          "国内でものが売れなくなり、",
          "国内の産業が弱くなってしまう。"
        ],
        point: "「いいことばかりではないんだよ。それはね……」に続く記述のパターン①です！「輸入」という言葉を入れて「国内の産業が弱くなってしまう」と書こう。"
      },
      {
        id: "p37",
        page: "p.35",
        enemyName: "供給停止機 ストップ・サプライ",
        enemyIcon: "🛑",
        category: "バリア②：輸入に頼りすぎる課題（生産面）",
        question: "原材料や製品の輸入に頼りすぎているとき、もし輸入が止まるとどうなるか並び替えよう。",
        blocks: [
          "外国から原材料や部品を",
          "輸入できなくなると、",
          "日本国内で製品を",
          "つくれなくなってしまう。"
        ],
        point: "「いいことばかりではないんだよ。それはね……」に続く記述のパターン②です！「輸入できなくなると、国内で製品がつくれなくなってしまう」もバッチリ正解になります！"
      },
      {
        id: "p38",
        page: "p.41〜45",
        enemyName: "伝統町工場神 クラフト・ガーディアン",
        enemyIcon: "👓",
        category: "バリア③：鯖江の地域ブランドと大田区の中小工場",
        question: "福井県鯖江市と東京都大田区の工業の特色について、正しく並び替えよう。",
        blocks: [
          "鯖江市は伝統を生かして",
          "特産品の地域ブランドをつくり、",
          "大田区は工場数が減少する中で",
          "中小工場どうしが協力している。"
        ],
        point: "穴埋め問題の5大キーワード「伝統」「特産品」「地域ブランド」「中小工場」「減少」を一気に確認できる文です！"
      },
      {
        id: "p39",
        page: "p.46〜49",
        enemyName: "環境機神 エコ・イノベーター",
        enemyIcon: "🌱",
        category: "バリア④：これからの工業の発展（環境・貿易面）",
        question: "地球温暖化などの課題がある中で、これからの工業をどう発展させるか並び替えよう。",
        blocks: [
          "排出ガスを出さない自動車など",
          "環境に配りょした製品をつくり、",
          "輸出と輸入のつり合いのとれた",
          "貿易で世界の国々と結びつく。"
        ],
        point: "これからの工業の発展についての記述ポイント①（環境への配りょ）と②（世界の国々とのつり合いのとれた貿易）です！"
      },
      {
        id: "p40",
        page: "p.46〜49",
        enemyName: "未来支援王 ロボット・マイスター",
        enemyIcon: "🤖",
        category: "バリア⑤：これからの工業の発展（少子高齢化・技術面）",
        question: "少子高齢化が進む日本で、これからの工業をどう発展させるか並び替えよう。",
        blocks: [
          "人手不足を解決するために",
          "人の代わりに働くロボットや",
          "くらしに役立つ製品を開発し、",
          "日本の高い技術を守っていく。"
        ],
        point: "これからの工業の発展についての記述ポイント③（ロボットやくらしに役立つ製品の開発・高い技術の継承）です！"
      }
    ],

    // ==========================================
    // WAVE 3 (Step 3): 記述問題・総仕上げ詠唱（全5問）
    // ==========================================
    step3_descriptive: [
      {
        id: "d36",
        page: "p.35",
        enemyName: "貿易機神 グランド・ロジスティクス【第1形態】",
        enemyIcon: "⚠️",
        question: "日本はアジア地域から安くて品質のよい機械類を輸入したり、石油などの燃料をたくさん輸入したりしていて便利ですが、「いいことばかりではない」という意見もあります。「輸入」という言葉を使って、どのような課題（問題）があるか書きましょう。",
        instruction: "必ず「輸入」という言葉を入れて、国内の産業や製品づくりに起こる課題を詠唱せよ！",
        keywords: [
          {
            label: "輸入",
            hint: "指定語句の「輸入」を必ず使うこと",
            variants: ["輸入", "ゆにゅう"]
          },
          {
            label: "国内の産業が弱くなる（国内で製品がつくれなくなる）",
            hint: "国内の産業が弱くなってしまう、または国内で製品がつくれなくなってしまうこと",
            variants: ["国内", "こくない", "産業", "さんぎょう", "弱く", "よわく", "おとろえ", "衰え", "つくれなく", "作れなく", "売れなく", "うれなく", "仕事が減"]
          }
        ],
        endingType: "method",
        modelAnswer: "輸入に頼ると国内の産業が弱くなってしまったり、輸入できなくなると国内で製品がつくれなくなってしまったりする。",
        rubricNote: "「輸入」という言葉を使い、「輸入に頼ると国内の産業が弱くなってしまう」または「輸入できなくなると国内で製品がつくれなくなってしまう」と書けていれば一撃必殺！"
      },
      {
        id: "d37",
        page: "p.46〜49",
        enemyName: "貿易機神 グランド・ロジスティクス【第2形態】",
        enemyIcon: "🌱",
        question: "地球温暖化などの社会的な課題がある中で、日本がこれからの工業をどのように発展させていけばよいと思いますか。（環境やエネルギー、世界の国々との関わりに注目して書こう）",
        instruction: "2つの言霊（キーワード）を込めて、持続可能な社会をめざす工業の姿を詠唱せよ！",
        keywords: [
          {
            label: "環境（排出ガス・再生可能エネルギー・貿易）",
            hint: "環境に配りょすること、排出ガスを出さない自動車、またはつり合いのとれた貿易",
            variants: ["環境", "かんきょう", "排出ガス", "はいしゅつがす", "二酸化炭素", "再生可能", "温暖化", "資源", "しげん", "貿易", "ぼうえき", "現地生産"]
          },
          {
            label: "製品・技術（つくる・開発・持続可能）",
            hint: "環境に配慮した製品や技術をつくり出すこと、持続可能な社会を目指すこと",
            variants: ["製品", "せいひん", "技術", "ぎじゅつ", "自動車", "じどうしゃ", "開発", "かいはつ", "つくる", "作り", "つくり", "持続可能", "結びつき"]
          }
        ],
        endingType: "method",
        modelAnswer: "排出ガスを出さない自動車をつくるなど、環境に配りょした製品や技術をつくり出していくようにする。",
        rubricNote: "「環境に配慮した製品や技術をつくる（排出ガスを出さない車など）」または「現地生産や輸出入のつり合いのとれた貿易を大切にする」と書けていれば一撃必殺！"
      },
      {
        id: "d38",
        page: "p.46〜49",
        enemyName: "貿易機神 グランド・ロジスティクス【第3形態】",
        enemyIcon: "🤖",
        question: "日本で少子高齢化が進んでいるという課題がある中で、日本がこれからの工業をどのように発展させていけばよいと思いますか。（人手不足の解決や人々のくらし、技術の面に注目して書こう）",
        instruction: "もう1つの角度からも書けるようにしよう！2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "ロボット・人手不足（くらし・高い技術）",
            hint: "人手不足を解決するロボット、人々のくらし、または高い技術",
            variants: ["ロボット", "ろぼっと", "人手不足", "ひとでぶそく", "人の代わり", "介護", "くらし", "暮らし", "生活", "技術", "ぎじゅつ", "伝統"]
          },
          {
            label: "役立つ製品を開発（守る・受け継ぐ）",
            hint: "くらしに役立つ製品を開発すること、または技術を守り受け継ぐこと",
            variants: ["製品", "せいひん", "開発", "かいはつ", "役立つ", "やく立つ", "役に立つ", "支える", "ささえる", "守っ", "まもっ", "守る", "受け継", "うけつ"]
          }
        ],
        endingType: "method",
        modelAnswer: "人手不足を解決するために、人の代わりに働くロボットのような人のくらしに役立つ製品を開発していけばよい。",
        rubricNote: "「人の代わりに働くロボットや人の暮らしに役立つ製品を開発する」または「高い技術を守っていく」と書けていれば一撃必殺！"
      },
      {
        id: "d39",
        page: "p.36〜38",
        enemyName: "貿易機神 グランド・ロジスティクス【第4形態】",
        enemyIcon: "💾",
        question: "現在の日本で電子機器などに使われ多く輸出されている部品の名前と、太陽光発電や風力発電のような環境にやさしいエネルギーの名前を、それぞれ入れて1文で書きましょう。",
        instruction: "2つの重要語句を正確に込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "集積回路（IC）",
            hint: "電子機器などに使われる超小型の電子部品",
            variants: ["集積回路", "しゅうせきかいろ", "IC", "アイシー"]
          },
          {
            label: "再生可能エネルギー",
            hint: "太陽光発電や風力発電などのエネルギー（※持続可能とまちがえないこと！）",
            variants: ["再生可能エネルギー", "さいせいかのうエネルギー", "さいせいかのうえねるぎー", "再生可能"]
          }
        ],
        endingType: "method",
        modelAnswer: "電子機器に使われる集積回路（IC）を多く輸出し、太陽光や風力などの再生可能エネルギーの開発が進められている。",
        rubricNote: "「集積回路（IC）」と「再生可能エネルギー」が正確に書けていれば一撃必殺！"
      },
      {
        id: "d40",
        page: "p.40〜45",
        enemyName: "最終形態 グランド・ロジスティクス・オメガ",
        enemyIcon: "👑",
        question: "福井県鯖江市が地域の特産品のみ力を高めるためにつくっているものと、東京都大田区に多く集まり協力し合っている工場の種類（働く人が300人未満）を、それぞれ入れて1文で書きましょう。",
        instruction: "最後のトドメだ！2つの言霊（キーワード）を込めて究極詠唱を放て！",
        keywords: [
          {
            label: "地域ブランド",
            hint: "地域の特産品のみ力を高め消費者に印象づけるもの",
            variants: ["地域ブランド", "ちいきぶらんど"]
          },
          {
            label: "中小工場",
            hint: "ものづくりのまち大田区に多くある工場（300人未満）",
            variants: ["中小工場", "ちゅうしょうこうじょう"]
          }
        ],
        endingType: "method",
        modelAnswer: "鯖江市では特産品のみ力を高めるために地域ブランドをつくり、大田区には高い技術をもった中小工場が多くある。",
        rubricNote: "「地域ブランド」と「中小工場」が正確に書けていれば完全撃破！"
      }
    ]
  },

  // ==========================================================================
  // 単元9：【テスト勉強】「2学期のまとめ（水産業・工業生産）」総復習
  // 本(上) P94〜123（水産業のさかんな地域）＋ 本(下) P2〜49（工業生産・運輸・貿易）
  // ==========================================================================
  {
    id: "shakai5_ge_test_term2_summary",
    grade: "🎯 テスト勉強【2学期のまとめ（水産業・工業生産）】",
    pages: "本（上）94〜123・本（下）2〜49ページ",
    title: "2学期のまとめ（水産業・工業生産）総復習マスター",
    subtitle: "海流と漁港・養殖と栽培漁業・地産地消の記述から、世界の自動車販売・これからの工業生産まで総仕上げ！",
    icon: "🌟",
    bossName: "二学期総統 クロノス・エンペラー",
    bossIcon: "👑",

    // ==========================================
    // WAVE 1 (Step 1): 水産業＋工業生産 総復習クイズ（全12問）
    // ==========================================
    step1_quiz: [
      {
        id: "q85",
        type: "知識・地図（水産業）",
        page: "本(上) p.96〜99",
        enemyName: "カレント・サーペント",
        enemyIcon: "🌊",
        question: "【ひっかけ注意！】日本周辺の海流で、①日本海側を北から南へ流れる寒流（冷たい海流）と、②太平洋側を南から北へ流れる暖流（あたたかい海流）の正しい組み合わせはどれですか。",
        choices: [
          "① リマン海流 ／ ② 黒潮（日本海流）",
          "① 親潮（千島海流） ／ ② 対馬海流",
          "① 黒潮（日本海流） ／ ② リマン海流",
          "① 対馬海流 ／ ② 親潮（千島海流）"
        ],
        answer: "① リマン海流 ／ ② 黒潮（日本海流）",
        keywords: ["日本海側の寒流＝リマン海流", "太平洋側の暖流＝黒潮（日本海流）", "太平洋側の寒流＝親潮（千島海流）・日本海側の暖流＝対馬海流"],
        explanation: "海流の地図は「日本海側か太平洋側か」「北から（寒流）か南から（暖流）か」を必ず確認しましょう！日本海側を北から南へ流れる寒流は「リマン海流」、太平洋側を南から北へ流れる暖流は「黒潮（日本海流）」です！"
      },
      {
        id: "q86",
        type: "資料読解・ひっかけ注意（水産業）",
        page: "本(上) p.96〜99",
        enemyName: "ポート・クラーケン",
        enemyIcon: "🦑",
        question: "日本の主な漁港の水あげ量と、都道府県別の漁業生産額のわりあいの資料（北海道18.6%、長崎県8.1%、愛媛県7.1%、兵庫県4.1%、高知県3.4%など、全国水あげ量約222万5千t）について、正しい説明はどれですか。",
        choices: [
          "北海道の漁業生産額のわりあい（18.6%）は兵庫県（4.1%）の4倍以上であり、日本全国の水あげ量は200万トン以上である",
          "主な漁港の中で、水あげ量がいちばん多い漁港は静岡県の「焼津（やいづ）漁港」である",
          "四国地方の中で、漁業生産額のわりあいが1番大きい県は「高知県」である",
          "日本全国の水あげ量は、全部合わせても50万トン未満である"
        ],
        answer: "北海道の漁業生産額のわりあい（18.6%）は兵庫県（4.1%）の4倍以上であり、日本全国の水あげ量は200万トン以上である",
        keywords: ["北海道(18.6%)は兵庫県(4.1%)の4倍以上", "全国の水あげ量は200万トン以上", "四国1位は愛媛県(7.1%)", "水あげ量が多い漁港は釧路・銚子など（焼津ではない）"],
        explanation: "よく出る〇✕判定のポイントです！①水あげ量トップは釧路漁港や銚子漁港で、焼津漁港ではありません。②北海道（18.6%）は兵庫県（4.1%）の4倍（16.4%）以上です。③全国の水あげ量は222万t（200万t以上）です。④四国で割合が一番大きいのは「愛媛県（7.1%）」です（高知県3.4%ではない）。"
      },
      {
        id: "q87",
        type: "知識・重要語句（水産業）",
        page: "本(上) p.98〜105",
        enemyName: "リーフ・リヴァイアサン",
        enemyIcon: "🐟",
        question: "日本の近海には、水深が約200mまでのゆるやかな斜面の海底が続く（①）が広がっていて、魚のえさとなる（②）が豊富で魚がよく集まる。また、魚を全国の商店に届けるための（③）の費用も魚の価格にふくまれている。正しい組み合わせはどれですか。",
        choices: [
          "① 大陸だな ／ ② プランクトン ／ ③ 輸送",
          "① 排他的経済水域 ／ ② サンゴ礁 ／ ③ 輸入",
          "① 大陸だな ／ ② プランクトン ／ ③ 養しょく",
          "① 太平洋ベルト ／ ② プランクトン ／ ③ 輸送"
        ],
        answer: "① 大陸だな ／ ② プランクトン ／ ③ 輸送",
        keywords: ["水深約200mまでのゆるやかな海底＝大陸だな", "プランクトンが豊富", "運ぶ費用＝輸送の費用"],
        explanation: "水深約200mまでのゆるやかな斜面の海底を「① 大陸だな」といい、太陽の光が届きやすく海流もぶつかるため「② プランクトン」が豊富です。また、魚を届けるための「③ 輸送」の費用も魚の価格に含まれています。"
      },
      {
        id: "q88",
        type: "知識・まぎらわしい語句（水産業）",
        page: "本(上) p.110〜113",
        enemyName: "アクア・ブリーダー",
        enemyIcon: "🐡",
        question: "【ひっかけ注意！】たまごから成魚になるまで「いけすなどで育ててからとる」漁業を（①）といい、人間の手でたまごをかえして稚魚まで育て、「川や海に放流し、自然の中で育ててからとる」漁業を（②）という。正しい組み合わせはどれですか。",
        choices: [
          "① 養しょく ／ ② さいばい漁業",
          "① さいばい漁業 ／ ② 養しょく",
          "① 沖合漁業 ／ ② 遠洋漁業",
          "① 沿岸漁業 ／ ② さいばい漁業"
        ],
        answer: "① 養しょく ／ ② さいばい漁業",
        keywords: ["いけすなどで成魚まで育てる＝養しょく", "放流して自然の中で育ててとる＝さいばい漁業"],
        explanation: "逆にしやすいため超注意！最後までいけすなどでエサをやって育てるのが「① 養しょく（養殖）」、稚魚を川や海に放流して自然の海や川で大きく育ててからとるのが「② さいばい漁業（栽培漁業）」です！"
      },
      {
        id: "q89",
        type: "知識・課題（水産業）",
        page: "本(上) p.108〜117",
        enemyName: "オーシャン・ガーディアン",
        enemyIcon: "⚓",
        question: "沖合漁業や沿岸漁業の生産量が減ってきたのは、漁場の（①）の悪化や魚のとりすぎなどが関係している。また、漁業や水産加工の人手不足をおぎなうため、日本の技術を学びに来ている多くの（②）が日本国内で働いている。正しい組み合わせはどれですか。",
        choices: [
          "① 環境 ／ ② 外国人技能実習生",
          "① 大陸だな ／ ② 消費者",
          "① 環境 ／ ② 排他的経済水域",
          "① 気候 ／ ② 生産者"
        ],
        answer: "① 環境 ／ ② 外国人技能実習生",
        keywords: ["漁場の環境の悪化・魚のとりすぎ", "人手不足をおぎなう＝外国人技能実習生"],
        explanation: "生産量が減った原因には、漁場の「① 環境」の悪化や魚のとりすぎがあります。また、漁業や水産加工の現場では、日本の技術を学びに来ている多くの「② 外国人技能実習生」が活躍しています。"
      },
      {
        id: "q90",
        type: "思考・理由（食料生産）",
        page: "本(上) p.118〜123",
        enemyName: "ファーム・スピリット",
        enemyIcon: "🌾",
        question: "日本の食料生産について、地域でとれた農産物や水産物をその地域で消費する「地産地消（ちさんちしょう）」の取り組みが各地で進められています。地産地消が大切な理由として適切なものはどれですか。",
        choices: [
          "自国の食料自給率を高めることや国内の農業・漁業の活性化につながり、つくった人の顔や名前がわかって安心・安全な食生活につながるから",
          "外国からの食料の輸入量を今より10倍以上に増やすことができるから",
          "遠くの国から飛行機で時間をかけて運ぶことで、輸送費を高くできるから",
          "日本の農業や漁業で働く人を減らすことができるから"
        ],
        answer: "自国の食料自給率を高めることや国内の農業・漁業の活性化につながり、つくった人の顔や名前がわかって安心・安全な食生活につながるから",
        keywords: ["食料自給率を高める", "国内の農業や漁業の活性化", "つくった人の顔や名前が分かり安心・安全"],
        explanation: "「地産地消」が大切な理由は3つあります！①自国の食料自給率を高めることにつながる、②国内（地域）の農業や漁業の活性化につながる、③生産者の顔や名前がわかり新鮮で安心・安全な食生活につながる、です。"
      },
      {
        id: "q91",
        type: "資料読解（工業生産）",
        page: "本(下) p.19",
        enemyName: "グローバル・ディーラー",
        enemyIcon: "🌎",
        question: "日本の自動車会社の「地域別はん売台数」の円グラフ（世界での販売台数約956.7万台：北アメリカ25.5%、中国20.3%、アジア14.5%、日本国内13.5%、ヨーロッパ10.8%）を見ると、世界でいちばん多く販売されている地域はどこですか。",
        choices: [
          "北アメリカ（25.5%）",
          "日本国内（13.5%）",
          "ヨーロッパ（10.8%）",
          "中国（20.3%）"
        ],
        answer: "北アメリカ（25.5%）",
        keywords: ["世界での販売台数1位＝北アメリカ（25.5%）", "2位＝中国（20.3%）"],
        explanation: "日本の自動車会社が世界で販売する約956.7万台のうち、いちばん販売割合が大きい地域は「北アメリカ（25.5%）」で、全体の約4分の1を占めています。"
      },
      {
        id: "q92",
        type: "資料読解（工業生産）",
        page: "本(下) p.19",
        enemyName: "プロダクション・ピーク",
        enemyIcon: "📈",
        question: "「日本の乗用車生産台数の変化」の棒グラフ（1965年〜2020年）を見たとき、日本国内での乗用車生産台数がいちばん多かった年（①）と、そのときの生産台数（②）の正しい組み合わせはどれですか。",
        choices: [
          "① 1990年 ／ ② 約1000万台",
          "① 1965年 ／ ② 約100万台",
          "① 2020年 ／ ② 約2000万台",
          "① 2000年 ／ ② 約500万台"
        ],
        answer: "① 1990年 ／ ② 約1000万台",
        keywords: ["日本の乗用車生産台数のピーク＝1990年", "約1000万台"],
        explanation: "日本の乗用車生産台数のグラフを見ると、「1990年（平成2年）」がいちばん高く、メモリは「約1000万台」を指しています（製造業で働く人口のピークと同じ1990年です！）。"
      },
      {
        id: "q93",
        type: "資料読解・計算（工業生産）",
        page: "本(下) p.19",
        enemyName: "オーバーシーズ・シフト",
        enemyIcon: "🏭",
        question: "「日本の乗用車生産台数」と「自動車の海外生産台数」の2つのグラフを比べたとき、①2015年では国内生産と海外生産のどちらが多いですか。また、②海外生産台数は2000年（約600万台）と比べると2022年（約1700〜1800万台）では約何倍になっていますか。",
        choices: [
          "① 海外生産台数の方が多い ／ ② 約3倍",
          "① 国内生産台数の方が多い ／ ② 約3倍",
          "① 海外生産台数の方が多い ／ ② 約10倍",
          "① 国内生産台数の方が多い ／ ② 約2倍"
        ],
        answer: "① 海外生産台数の方が多い ／ ② 約3倍",
        keywords: ["2015年は国内(約800万台)より海外生産(約1800万台)の方が多い", "海外生産は2000年(約600万台)→2022年(約1800万台)で約3倍"],
        explanation: "①2015年の棒を比べると、日本の乗用車生産（約800万台）より海外生産（約1800万台）の方が「多い」です。②海外生産は2000年の約600万台から2022年の約1700〜1800万台へと「約3倍」に増えています。"
      },
      {
        id: "q94",
        type: "知識・まぎらわしい語句（工業生産）",
        page: "本(下) p.31〜45",
        enemyName: "インダストリー・スフィンクス",
        enemyIcon: "🦁",
        question: "自動車や船、鉄道、飛行機を使って人やものを運ぶ仕事を（①）といい、外国とものやサービスを売り買いすることを（②）という。また、商品のみ力を高めて消費者に印象づけるために（③）づくりが重要であり、日本の工場のほとんどは働く人が300人未満の（④）である。正しい組み合わせはどれですか。",
        choices: [
          "① 運輸 ／ ② 貿易 ／ ③ ブランド ／ ④ 中小工場",
          "① 輸出 ／ ② 工業 ／ ③ 伝統 ／ ④ 大工場",
          "① 運輸 ／ ② 貿易 ／ ③ 伝統 ／ ④ 大工場",
          "① 輸出 ／ ② 貿易 ／ ③ ブランド ／ ④ 中小工場"
        ],
        answer: "① 運輸 ／ ② 貿易 ／ ③ ブランド ／ ④ 中小工場",
        keywords: ["運ぶ仕事＝運輸", "外国と売り買い＝貿易", "印象づける＝ブランドづくり", "日本の工場のほとんど＝中小工場"],
        explanation: "①人やものを運ぶ仕事や産業は「運輸」。②外国と売り買いするのは「貿易」。③消費者に印象づけるのは「ブランド」づくり。④働く人が300人未満の工場が「中小工場」で、日本の工場のほとんどを占めています。"
      },
      {
        id: "q95",
        type: "知識・まぎらわしい語句（工業生産）",
        page: "本(下) p.20・p.46",
        enemyName: "サステナブル・ナイト",
        enemyIcon: "🌍",
        question: "【ひっかけ注意！】「今のことだけでなく未来のことや、未来に生きる人々の幸せも考え、資源を使い切ってしまうことなく、環境にも配りょした社会」のことを何といいますか。",
        choices: [
          "持続可能な社会",
          "脱炭素社会",
          "再生可能エネルギー社会",
          "情報化社会"
        ],
        answer: "持続可能な社会",
        keywords: ["未来に生きる人々の幸せ・資源を使い切らない＝持続可能な社会", "温室効果ガス排出ゼロ＝脱炭素社会"],
        explanation: "「脱炭素社会」と「持続可能な社会」の見分け方です！「温室効果ガスの排出量をゼロにする社会」は『脱炭素社会』、「未来に生きる人々の幸せも考え、資源を使い切らず環境にも配りょした社会」は『持続可能な社会』です！"
      },
      {
        id: "q96",
        type: "思考・まとめ（工業生産）",
        page: "本(下) p.48〜49",
        enemyName: "マスター・オブ・インダストリー",
        enemyIcon: "👑",
        question: "これからの工業生産について、「とにかく価格が安い製品をたくさんつくって売ることが大切だ」という意見に対して、これまでの学習をふまえて付け加える考えとして最も適切なものはどれですか。",
        choices: [
          "安い製品を売るだけでなく、再生可能エネルギーの利用や資源を大切にするなど環境に配りょした製品づくりや、日本の高い技術・伝統技術を生かして消費者のくらしに役立つ安全なものづくりをすることも大切だ",
          "資源はいくら使ってもなくならないので、環境への配りょはやめて安い製品だけをつくればよい",
          "日本の伝統技術や中小工場のオンリーワン技術はすべて捨てて、デザインを1種類だけに決めるべきだ",
          "消費者の安全や使いやすさは考えずに、工場の都合だけで製品をつくることが大切だ"
        ],
        answer: "安い製品を売るだけでなく、再生可能エネルギーの利用や資源を大切にするなど環境に配りょした製品づくりや、日本の高い技術・伝統技術を生かして消費者のくらしに役立つ安全なものづくりをすることも大切だ",
        keywords: ["再生可能エネルギー・限りある資源を大切にする（環境への配慮）", "高い技術や伝統技術を生かす", "安全で消費者の願いに合った暮らしを支える製品づくり"],
        explanation: "安さだけでなく、①限りある資源や環境に配慮した製品づくり（再生可能エネルギーの利用など）、②日本にしかない高い技術や伝統技術を生かした製品づくり、③安全で人々の暮らしを支える製品づくり、が大切です！"
      }
    ],

    // ==========================================
    // WAVE 2 (Step 2): 記述文構造パズル（全5問）
    // ==========================================
    step2_puzzle: [
      {
        id: "p41",
        page: "本(上) p.96〜113",
        enemyName: "海流養殖竜 オーシャン・ドラグーン",
        enemyIcon: "🐟",
        category: "バリア①：日本周辺の海流と養殖・栽培漁業",
        question: "日本周辺の海流と、育てる漁業の区別について正しく並び替えよう。",
        blocks: [
          "日本海側の寒流をリマン海流、",
          "太平洋側の暖流を黒潮といい、",
          "いけすで育てる養しょくや",
          "放流するさいばい漁業が行われている。"
        ],
        point: "水産業の超重要語句「リマン海流」「黒潮（日本海流）」「養しょく」「さいばい漁業」をまとめて確認しよう！"
      },
      {
        id: "p42",
        page: "本(上) p.118〜123",
        enemyName: "地産地消神 ローカル・ハーベスト",
        enemyIcon: "🌾",
        category: "バリア②：地産地消の取り組みが大切な理由（自給率・活性化）",
        question: "「地産地消」の取り組みが大切な理由について、正しく並び替えよう。",
        blocks: [
          "地域でとれたものを地域で消費すると、",
          "日本の食料自給率を高め、",
          "国内の農業や漁業を",
          "活性化させることにつながるから。"
        ],
        point: "地産地消の記述パターン①：「自国の食料自給率を高める」「国内の農業や漁業の活性化につながる」の2大メリットです！"
      },
      {
        id: "p43",
        page: "本(上) p.118〜123",
        enemyName: "安心食卓竜 セーフ・テーブル",
        enemyIcon: "🥗",
        category: "バリア③：地産地消の取り組みが大切な理由（食の安全・安心）",
        question: "消費者の食生活にとって「地産地消」が大切な理由を正しく並び替えよう。",
        blocks: [
          "身近な地域でとれた食材は、",
          "つくった人の顔や名前が",
          "分かるため、安心・安全な",
          "食生活につながるから。"
        ],
        point: "地産地消の記述パターン②：「つくった人の顔や名前が分かるから、安心・安全な食生活につながる」も書きやすくてバッチリ正解になります！"
      },
      {
        id: "p44",
        page: "本(下) p.19",
        enemyName: "世界販売機 ワールド・モーター",
        enemyIcon: "🚗",
        category: "バリア④：日本の自動車生産と海外販売のグラフ",
        question: "日本の自動車の販売地域と生産台数の変化について、正しく並び替えよう。",
        blocks: [
          "世界での販売台数は北アメリカが最も多く、",
          "国内の乗用車生産は1990年の約1000万台が",
          "ピークで、現在は海外生産台数が",
          "2000年の約3倍に増えている。"
        ],
        point: "自動車グラフの4大空欄「北アメリカ」「1990年」「1000万台」「海外生産の方が多く、2000年の約3倍」を一気にマスターしよう！"
      },
      {
        id: "p45",
        page: "本(下) p.48〜49",
        enemyName: "未来工業王 サステナブル・ロード",
        enemyIcon: "👑",
        category: "バリア⑤：安い製品以外にこれからの工業生産で大切なこと",
        question: "安い製品をたくさん売ること以外に、これからの工業生産で大切なことを並び替えよう。",
        blocks: [
          "限りある資源を大切にし、",
          "環境に配りょした製品づくりや、",
          "日本の高い技術や伝統を生かして",
          "くらしに役立つ製品をつくることも大切だ。"
        ],
        point: "「たしかに安い製品をたくさん売ることも大切だけど、ほかにも…」に続く記述の黄金パターンです！"
      }
    ],

    // ==========================================
    // WAVE 3 (Step 3): 記述問題・2学期総仕上げ詠唱（全5問）
    // ==========================================
    step3_descriptive: [
      {
        id: "d41",
        page: "本(上) p.118〜123",
        enemyName: "二学期総統 クロノス・エンペラー【第1形態】",
        enemyIcon: "🌾",
        question: "日本の食料生産について、各地で「地産地消」の取り組みが進められています。なぜ地産地消の取り組みが大切なのでしょうか。食料自給率や国内の農業・漁業、食の安全・安心などに注目して書きましょう。",
        instruction: "2つの言霊（キーワード）を込めて、「〜から。」または「〜ため。」で終わる必殺詠唱を放て！",
        keywords: [
          {
            label: "食料自給率・国内の農業や漁業・つくった人の顔",
            hint: "「食料自給率」「国内（地域）の農業や漁業」「つくった人の顔や名前・新鮮」のいずれか",
            variants: ["食料自給率", "しょくりょうじきゅうりつ", "自給率", "じきゅうりつ", "農業", "のうぎょう", "漁業", "ぎょぎょう", "顔", "かお", "名前", "なまえ", "生産者", "新鮮", "しんせん", "地域"]
          },
          {
            label: "高める・活性化・安心・安全",
            hint: "「高めていく」「活性化につながる」「安心・安全な食生活につながる」のいずれか",
            variants: ["高め", "たかめ", "上がる", "あがる", "活性化", "かっせいか", "さかん", "盛ん", "元気", "安心", "あんしん", "安全", "あんぜん", "つながる"]
          }
        ],
        endingType: "reason",
        modelAnswer: "自国の食料自給率を高めていくことや国内の農業・漁業の活性化につながり、つくった人の顔や名前が分かって安心・安全な食生活につながるから。",
        rubricNote: "①食料自給率を高める、②国内の農業・漁業の活性化、③生産者の顔や名前が分かり安心・安全、のどれか1つ以上が理由として書けていれば一撃必殺！"
      },
      {
        id: "d42",
        page: "本(下) p.48〜49",
        enemyName: "二学期総統 クロノス・エンペラー【第2形態】",
        enemyIcon: "🏭",
        question: "これからの工業生産について、「とにかく価格が安い製品をたくさんつくって、たくさん売ることが大切だね。」と言っている人がいます。「たしかに安い製品をたくさん売ることも大切だけど、ほかにも…」に続くあなたの考えを書きましょう。",
        instruction: "「環境・資源」「高い技術・伝統」「安全・くらしに役立つ」などの言霊を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "環境・資源・再生可能エネルギー または 高い技術・伝統・安全",
            hint: "環境への配りょ・資源を大切にする、または高い技術・伝統技術・消費者の安全",
            variants: ["環境", "かんきょう", "資源", "しげん", "再生可能", "技術", "ぎじゅつ", "伝統", "でんとう", "オンリーワン", "安全", "あんぜん", "消費者", "しょうひしゃ"]
          },
          {
            label: "製品づくり（受け継ぐ・くらしを支える・大切）",
            hint: "製品づくりをすること、技術を受け継いでいくこと、人々のくらしを支えること",
            variants: ["製品", "せいひん", "ものづくり", "つくる", "作る", "づくり", "受け継", "うけつ", "守る", "まもる", "生活", "せいかつ", "くらし", "暮らし", "役立つ", "役に立つ", "大切", "たいせつ"]
          }
        ],
        endingType: "method",
        modelAnswer: "製品をつくるために再生可能エネルギーを利用したり限りある資源を大切にしたりすることや、日本の高い技術や伝統技術を生かして安全で人々のくらしに役立つ製品をつくることも大切だ。",
        rubricNote: "「再生可能エネルギーや資源を大切にする（環境への配慮）」「高い技術や伝統技術を生かす・受け継ぐ」「安全で暮らしに役立つ製品づくり」のいずれかが書けていれば一撃必殺！"
      },
      {
        id: "d43",
        page: "本(上) p.96〜99",
        enemyName: "二学期総統 クロノス・エンペラー【第3形態】",
        enemyIcon: "🌊",
        question: "日本周辺の海流のうち、日本海側を北から南へ流れる寒流の名前と、太平洋側を南から北へ流れる暖流の名前を、それぞれ入れて1文で書きましょう。",
        instruction: "地図の海流名だ！2つの言霊（キーワード）を両方入れて必殺詠唱を放て！",
        keywords: [
          {
            label: "リマン海流",
            hint: "日本海側を北から南へ流れる寒流（ひらがな可）",
            variants: ["リマン海流", "りまんかいりゅう", "リマンかいりゅう"]
          },
          {
            label: "黒潮（日本海流）",
            hint: "太平洋側を南から北へ流れる暖流（どちらでも可）",
            variants: ["黒潮", "くろしお", "日本海流", "にほんかいりゅう", "にっぽんかいりゅう"]
          }
        ],
        endingType: "method",
        modelAnswer: "日本海側を流れる寒流はリマン海流で、太平洋側を流れる暖流は黒潮（日本海流）である。",
        rubricNote: "「リマン海流」と「黒潮（または日本海流）」が正確に書けていれば一撃必殺！"
      },
      {
        id: "d44",
        page: "本(上) p.98〜113",
        enemyName: "二学期総統 クロノス・エンペラー【第4形態】",
        enemyIcon: "🐟",
        question: "日本の近海に広がる水深約200mまでのゆるやかな海底を何といいますか。また、人間の手でたまごをかえして川や海に放流し、自然の中で育ててからとる漁業を何といいますか。",
        instruction: "水産業の重要語句だ！2つの言霊（キーワード）を込めて必殺詠唱を放て！",
        keywords: [
          {
            label: "大陸だな",
            hint: "水深約200mまでのゆるやかな斜面の海底",
            variants: ["大陸だな", "たいりくだな", "大陸棚"]
          },
          {
            label: "さいばい漁業（栽培漁業）",
            hint: "稚魚を放流し、自然の中で育ててからとる漁業（※養しょくと区別！）",
            variants: ["さいばい漁業", "栽培漁業", "さいばいぎょぎょう"]
          }
        ],
        endingType: "method",
        modelAnswer: "水深約200mまでのゆるやかな海底を大陸だなといい、稚魚を放流して自然の中で育ててからとる漁業をさいばい漁業という。",
        rubricNote: "「大陸だな」と「さいばい漁業」が正確に書けていれば一撃必殺！"
      },
      {
        id: "d45",
        page: "本(下) p.31〜46",
        enemyName: "最終形態 クロノス・オーバーロード",
        enemyIcon: "👑",
        question: "自動車や船、鉄道、飛行機を使って人やものを運ぶ仕事や産業を何といいますか。また、未来に生きる人々の幸せも考え、資源を使い切らず環境にも配りょした社会を何といいますか。",
        instruction: "最後のトドメだ！2つの言霊（キーワード）を込めて究極詠唱を放て！",
        keywords: [
          {
            label: "運輸（うんゆ）",
            hint: "自動車や船などで人やものを運ぶ仕事や産業",
            variants: ["運輸", "うんゆ"]
          },
          {
            label: "持続可能な社会",
            hint: "資源を使い切らず環境にも配りょした社会",
            variants: ["持続可能な社会", "じぞくかのうなしゃかい"]
          }
        ],
        endingType: "method",
        modelAnswer: "人やものを運ぶ仕事や産業を運輸といい、資源を使い切らず環境にも配りょした社会を持続可能な社会という。",
        rubricNote: "「運輸」と「持続可能な社会」が正確に書けていれば2学期総まとめ完全制覇！"
      }
    ]
  }
];
