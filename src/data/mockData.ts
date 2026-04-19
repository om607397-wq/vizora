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
    avatarUrl: "/public/imgs/khaled/15.jpg",
    posters: [
{ id: "1", title: "بوستر 1", imageUrl: "/imgs/khaled/4.jpg", category: "مهاجم" },
{ id: "2", title: "بوستر 2", imageUrl: "/imgs/khaled/1C.jpg", category: "مهاجم" },
{ id: "3", title: "بوستر 3", imageUrl: "/imgs/khaled/2.jpg", category: "مهاجم" },
{ id: "4", title: "بوستر 4", imageUrl: "/imgs/khaled/3.jpg", category: "مهاجم" },
{ id: "6", title: "بوستر 6", imageUrl: "/imgs/khaled/5.jpg", category: "مهاجم" },
{ id: "7", title: "بوستر 7", imageUrl: "/imgs/khaled/6.jpg", category: "مهاجم" },
{ id: "11", title: "بوستر 11", imageUrl: "/imgs/khaled/10.jpg", category: "مهاجم" },
{ id: "12", title: "بوستر 12", imageUrl: "/imgs/khaled/11.jpg", category: "مهاجم" },
{ id: "14", title: "بوستر 14", imageUrl: "/imgs/khaled/13.jpg", category: "مهاجم" },
{ id: "15", title: "بوستر 15", imageUrl: "/imgs/khaled/14.jpg", category: "مهاجم" },
{ id: "16", title: "بوستر 16", imageUrl: "/imgs/khaled/16.jpg", category: "مهاجم" },
    ],
  },
  {
    id: "p2",
    name: "معاذ جابر",
    avatarUrl: "/public/imgs/moaz/1.jpg",
    posters: [
      { id: "17", title: "بوستر 1", imageUrl: "/imgs/moaz/1.jpg", category: "حارس" },
      { id: "18", title: "بوستر 2", imageUrl: "/imgs/moaz/2.jpg", category: "حارس" },
      { id: "19", title: "بوستر 3", imageUrl: "/imgs/moaz/3.jpg", category: "حارس" },
      { id: "20", title: "بوستر 4", imageUrl: "/imgs/moaz/4.jpg", category: "حارس" },
      { id: "21", title: "بوستر 5", imageUrl: "/imgs/moaz/5.jpg", category: "حارس" },
      { id: "22", title: "بوستر 6", imageUrl: "/imgs/moaz/6.jpg", category: "حارس" },
    ],
  },
  {
    id: "p3",
    name: "فريق الأبطال",
    avatarUrl: "https://picsum.photos/seed/p3/200/200",
    posters: [
      { id: "18", title: "بوستر الفريق", imageUrl: "https://picsum.photos/seed/pos4/1059/1488", category: "فرق" },
      { id: "19", title: "فوز الكأس", imageUrl: "https://picsum.photos/seed/pos5/1059/1488", category: "فرق" },
    ],
  },
  {
    id: "p4",
    name: "بطولة الخماسي",
    avatarUrl: "https://picsum.photos/seed/p4/200/200",
    posters: [
      { id: "20", title: "نهائي الخماسي", imageUrl: "https://picsum.photos/seed/pos6/1059/1488", category: "خماسي" },
    ],
  },
  {
    id: "p5",
    name: "كريستيانو رونالدو",
    avatarUrl: "https://picsum.photos/seed/p5/200/200",
    posters: [
      { id: "21", title: "احتفال", imageUrl: "https://picsum.photos/seed/pos7/1059/1488", category: "مهاجم" },
    ],
  },
  {
    id: "p6",
    name: "ليونيل ميسي",
    avatarUrl: "https://picsum.photos/seed/p6/200/200",
    posters: [
      { id: "22", title: "كأس العالم", imageUrl: "https://picsum.photos/seed/pos8/1059/1488", category: "مهاجم" },
    ],
  },
  {
    id: "p7",
    name: "كريم بنزيما",
    avatarUrl: "https://picsum.photos/seed/p7/200/200",
    posters: [
      { id: "23", title: "الحكومة", imageUrl: "https://picsum.photos/seed/pos9/1059/1488", category: "مهاجم" },
    ],
  },
  {
    id: "p8",
    name: "ياسين بونو",
    avatarUrl: "https://picsum.photos/seed/p8/200/200",
    posters: [
      { id: "24", title: "حائط الصد", imageUrl: "https://picsum.photos/seed/pos10/1059/1488", category: "حارس" },
    ],
  }
];

export const allPosters: (Poster & { playerId: string; playerName: string })[] =
  players.flatMap(player =>
    player.posters.map(poster => ({
      ...poster,
      playerId: player.id,
      playerName: player.name
    }))
  );