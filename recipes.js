// 食譜資料。每份食譜是一組 { }，新增時照範例格式加在清單裡。
// category：蛋糕／餅乾／麵包／塔派／其他
// mold：{ shape: "round"（圓形，size 是直徑吋數）或 "square"（方形，size 是邊長吋數） }；沒有模具就刪掉這行
// 食材：g 是數量；unit 省略時是「克」；flour: true 是烘焙百分比的 100% 基準；piece 是換算顆數用
const RECIPES = [
  {
    id: "example-pound-cake",
    name: "範例：奶油磅蛋糕",
    category: "蛋糕",
    tags: ["新手"],
    photo: "",
    mold: { shape: "round", size: 6 },
    ingredients: [
      { name: "低筋麵粉", g: 200, flour: true },
      { name: "無鹽奶油", g: 150 },
      { name: "細砂糖", g: 120 },
      { name: "全蛋（去殼）", g: 150, piece: { unit: "顆", g: 50 } },
    ],
    steps: [
      "這是測試用的範例，換成真正的食譜後會刪除。",
      "奶油與糖打發，分次加入蛋液。",
      "拌入過篩的麵粉，倒入模具，以 170°C 烤約 45 分鐘。",
    ],
    note: "",
  },
];
