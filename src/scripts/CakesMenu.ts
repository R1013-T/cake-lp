export const useCakeMenuScript = (menuNumber: number) => {
  const Cakes = [
    {
      name: ["ベリーブラスト", "Cake 1"],
      price: ["300円", "300 yen"],
      description: [
        "ケーキ1の説明 ケーキ1の説明 ケーキ1の説明",
        "Cake 1 description Cake 1 description Cake 1 description",
      ],
    },
    {
      name: ["ベリーブラスト", "Berry Blast"],
      price: ["1,200円", "1,200 yen"],
      description: [
        "鮮なベリーが散りばめられた、サクサクのショートケーキです。バニラクリームと甘酸っぱいベリーが絶妙なハーモニーを奏でます。",
        "A crispy shortcake filled with fresh berries. The combination of vanilla cream and tangy berries creates a delightful harmony.",
      ],
    },
    {
      name: ["フレッシュミント", "Fresh Mint"],
      price: ["1,600円", "1,600 yen"],
      description: [
        "リフレッシュメントなフレッシュミントが香るチョコレートケーキです。口の中で広がるミントとチョコレートの絶妙な組み合わせをお楽しみください。",
        "Indulge in the refreshing flavor of fresh mint in this chocolate cake. Experience the delightful combination of mint and chocolate that spreads in your mouth.",
      ],
    },
    {
      name: ["ベリーチーズ", "Berry Cheese"],
      price: ["1,500円", "1,500 yen"],
      description: [
        "濃厚なチーズとミックスベリーが絶妙にマッチしたチーズケーキです。フルーティーな酸味とクリーミーさが口いっぱいに広がります。",
        "A perfectly matched cheesecake with rich cheese and mixed berries. The fruity acidity and creaminess will delight your taste buds.",
      ],
    },
    {
      name: ["マンゴーパッション", "Mango Passion"],
      price: ["1,800円", "1,800 yen"],
      description: [
        "トロピカルな味わいのマンゴーとパッションフルーツが溶け合った、軽やかなムースケーキです。爽やかな酸味と甘みが絶妙です。",
        "A light and airy mousse cake blending the tropical flavors of mango and passion fruit. The refreshing acidity and sweetness are perfectly balanced.",
      ],
    },
    {
      name: ["カラメルナッツ", "Caramel Nut"],
      price: ["1,400円", "1,400 yen"],
      description: [
        "ゴロゴロとしたカラメルとヘーゼルナッツがたっぷりのった、サクサクのタルトです。リッチな味わいと食感が楽しめます。",
        "Description: A crispy tart generously topped with chunks of caramel and hazelnuts. Enjoy the rich flavor and texture.",
      ],
    },
    {
      name: ["ショコラデリ", "Chocolat Deli"],
      price: ["1,500円", "1,500 yen"],
      description: [
        "リッチなチョコレートケーキの中には、クリーミーなバニラクリームがたっぷり詰まっています。トップにはショコラソースとデリシャスなデリシューが飾られています。",
        "Description: Indulge in the richness of this chocolate cake with layers of creamy vanilla filling. Topped with chocolate sauce and delicious delicieux on top.",
      ],
    },
    {
      name: ["チョコベリー", "Chocolate Berry"],
      price: ["1,800円", "1,800 yen"],
      description: [
        "チョコレートとフレッシュベリーが贅沢に組み合わさったムースケーキです。口の中でとろけるような滑らかさと、フルーティーな風味が広がります。",
        "A luscious mousse cake combining chocolate and fresh berries. Experience the smoothness that melts in your mouth and the fruity flavors.",
      ],
    },
  ];

  return Cakes[menuNumber];
};
