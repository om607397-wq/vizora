export type Poster = {
  id: string;
  title: string;
  imageUrl: string;
  category: "مهاجم" | "حارس" | "خماسي" | "فرق";
  hideFromHome?: boolean; // أضفنا هذه الخاصية لإخفاء البوستر من الصفحة الرئيسية
};

export type Player = {
  id: string;
  name: string;
  avatarUrl: string;
  posters: Poster[];
  hideFromHome?: boolean; // إخفاء كل صور هذا اللاعب من الرئيسية
};

export const categories = ["الكل", "مهاجم", "حارس", "خماسي", "فرق"] as const;

export const players: Player[] = [
  {
    id: "p1",
    name: "عمر السومة",
    avatarUrl: "/imgs/khaled/15.jpg",
    posters: [
      { id: "k1", title: "بوستر 1", imageUrl: "/imgs/khaled/4.jpg", category: "مهاجم" },
      { id: "k2", title: "بوستر 2", imageUrl: "/imgs/khaled/1C.jpg", category: "مهاجم" },
      { id: "k3", title: "بوستر 3", imageUrl: "/imgs/khaled/2.jpg", category: "مهاجم" },
      { id: "k4", title: "بوستر 4", imageUrl: "/imgs/khaled/3.jpg", category: "مهاجم" },
      { id: "k5", title: "بوستر 5", imageUrl: "/imgs/khaled/5.jpg", category: "مهاجم" },
      { id: "k6", title: "بوستر 6", imageUrl: "/imgs/khaled/6.jpg", category: "مهاجم" },
      { id: "k7", title: "بوستر 7", imageUrl: "/imgs/khaled/10.jpg", category: "مهاجم" },
      { id: "k8", title: "بوستر 8", imageUrl: "/imgs/khaled/11.jpg", category: "مهاجم" },
      { id: "k9", title: "بوستر 9", imageUrl: "/imgs/khaled/13.jpg", category: "مهاجم" },
      { id: "k10", title: "بوستر 10", imageUrl: "/imgs/khaled/14.jpg", category: "مهاجم" },
      { id: "k11", title: "بوستر 11", imageUrl: "/imgs/khaled/16.jpg", category: "مهاجم" },
      // هذا البوستر سيظهر للعميل الخاص فقط ولن يظهر في الواجهة الرئيسية
      { id: "hidden_1", title: "تصميم خاص جداً", imageUrl: "/imgs/khaled/15.jpg", category: "مهاجم", hideFromHome: true },
    ],
  },
  {
    id: "p2",
    name: "محمد العويس",
    avatarUrl: "https://picsum.photos/seed/p2/200/200",
    posters: [
      { id: "3", title: "تصدي رائع", imageUrl: "https://picsum.photos/seed/pos3/1059/1488", category: "حارس" },
    ],
  },
  {
    id: "p3",
    name: "فريق الأبطال",
    avatarUrl: "https://picsum.photos/seed/p3/200/200",
    posters: [
      { id: "4", title: "بوستر الفريق", imageUrl: "https://picsum.photos/seed/pos4/1059/1488", category: "فرق" },
      { id: "5", title: "فوز الكأس", imageUrl: "https://picsum.photos/seed/pos5/1059/1488", category: "فرق" },
    ],
  },
  {
    id: "p4",
    name: "بطولة الخماسي",
    avatarUrl: "https://picsum.photos/seed/p4/200/200",
    posters: [
      { id: "6", title: "نهائي الخماسي", imageUrl: "https://picsum.photos/seed/pos6/1059/1488", category: "خماسي" },
    ],
  },
  {
    id: "p5",
    name: "كريستيانو رونالدو",
    avatarUrl: "https://picsum.photos/seed/p5/200/200",
    posters: [
      { id: "7", title: "احتفال", imageUrl: "https://picsum.photos/seed/pos7/1059/1488", category: "مهاجم" },
    ],
  },
  {
    id: "p6",
    name: "ليونيل ميسي",
    avatarUrl: "https://picsum.photos/seed/p6/200/200",
    posters: [
      { id: "8", title: "كأس العالم", imageUrl: "https://picsum.photos/seed/pos8/1059/1488", category: "مهاجم" },
    ],
  },
  {
    id: "p7",
    name: "كريم بنزيما",
    avatarUrl: "https://picsum.photos/seed/p7/200/200",
    posters: [
      { id: "9", title: "الحكومة", imageUrl: "https://picsum.photos/seed/pos9/1059/1488", category: "مهاجم" },
    ],
  },
  {
    id: "p8",
    name: "ياسين بونو",
    avatarUrl: "https://picsum.photos/seed/p8/200/200",
    posters: [
      { id: "10", title: "حائط الصد", imageUrl: "https://picsum.photos/seed/pos10/1059/1488", category: "حارس" },
    ],
  }
];

export const allPosters: (Poster & { playerId: string; playerName: string })[] = players
  .filter(player => !player.hideFromHome)
  .flatMap(player => 
    player.posters
      .filter(poster => !poster.hideFromHome)
      .map(poster => ({ ...poster, playerId: player.id, playerName: player.name }))
  );
