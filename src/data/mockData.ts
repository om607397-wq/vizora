export type Poster = {
  id: string;
  title: string;
  imageUrl: string;
  category: "مهاجم" | "حارس" | "خماسي" | "فرق";
};

export type Player = {
  id: string;
  name: string;
  avatarUrl: string;
  posters: Poster[];
};

export const categories = ["الكل", "مهاجم", "حارس", "خماسي", "فرق"] as const;

export const players: Player[] = [
  {
    id: "p1",
    name: "خالد رونالدو",
    avatarUrl: "../imgs/khaled/15.jpg",
    posters: [
      { id: "1", title: "احتفال هدف", imageUrl: "../imgs/khaled/1C.jpg", category: "مهاجم" },
      { id: "2", title: "لحظة تسديد", imageUrl: "../imgs/khaled/3.jpg", category: "مهاجم" },
      { id: "1", title: "احتفال هدف", imageUrl: "../imgs/khaled/4.jpg", category: "مهاجم" },
      { id: "2", title: "لحظة تسديد", imageUrl: "../imgs/khaled/5.jpg", category: "مهاجم" },
      { id: "1", title: "احتفال هدف", imageUrl: "../imgs/khaled/6.jpg", category: "مهاجم" },
      { id: "2", title: "لحظة تسديد", imageUrl: "../imgs/khaled/10.jpg", category: "مهاجم" },
      { id: "1", title: "احتفال هدف", imageUrl: "../imgs/khaled/11.jpg", category: "مهاجم" },
      { id: "2", title: "لحظة تسديد", imageUrl: "../imgs/khaled/13.jpg", category: "مهاجم" },
      { id: "1", title: "احتفال هدف", imageUrl: "../imgs/khaled/14.jpg.jpg", category: "مهاجم" },
      { id: "2", title: "لحظة تسديد", imageUrl: "../imgs/khaled/16.jpg", category: "مهاجم" },
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

export const allPosters: (Poster & { playerId: string; playerName: string })[] = players.flatMap(player => 
  player.posters.map(poster => ({ ...poster, playerId: player.id, playerName: player.name }))
);
