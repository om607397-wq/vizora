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
    name: "خالد رونالدو",
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
    name: "معاذ جابر",
    avatarUrl: "/imgs/moaz/1.jpg",
    posters: [
            { id: "m1", title: "بوستر 1", imageUrl: "/imgs/moaz/1.jpg", category: "حارس" },
      { id: "m2", title: "بوستر 2", imageUrl: "/imgs/moaz/2.jpg", category: "حارس" },
      { id: "m3", title: "بوستر 3", imageUrl: "/imgs/moaz/3.jpg", category: "حارس" },
      { id: "m4", title: "بوستر 4", imageUrl: "/imgs/moaz/4.jpg", category: "حارس" },
      { id: "m5", title: "بوستر 5", imageUrl: "/imgs/moaz/5.jpg", category: "حارس" },
      { id: "m6", title: "بوستر 6", imageUrl: "/imgs/moaz/6.jpg", category: "حارس" },
    ],
  },
  {
    id: "p1",
    name: "youssef hamdy",
    avatarUrl: "/imgs/youssef hamdy/2.jpg",
    posters: [
      { id: "yh1", title: "بوستر 1", imageUrl: "/imgs/youssef hamdy/1.jpg", category: "مهاجم" },
      { id: "yh2", title: "بوستر 2", imageUrl: "/imgs/youssef hamdy/2.jpg", category: "مهاجم" },
      { id: "yh3", title: "بوستر 3", imageUrl: "/imgs/youssef hamdy/3.jpg", category: "مهاجم" },
      { id: "yh4", title: "بوستر 4", imageUrl: "/imgs/youssef hamdy/4.jpg", category: "مهاجم" },
    ],
  },
  {
    id: "p2",
    name: "youssef",
    avatarUrl: "/imgs/youssef/2.jpg",
    posters: [
      { id: "y1", imageUrl: "/imgs/youssef/1.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y2", imageUrl: "/imgs/youssef/2.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y3", imageUrl: "/imgs/youssef/3.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y4", imageUrl: "/imgs/youssef/4.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y5", imageUrl: "/imgs/youssef/5.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y6", imageUrl: "/imgs/youssef/6.jpg", title: "بوستر", category: "مهاجم" },
    ],
  },
  {
    id: "p3",
    name: "youssef2",
    avatarUrl: "/imgs/youssef2/2.jpg",
    posters: [
      { id: "y21", imageUrl: "/imgs/youssef2/1.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y22", imageUrl: "/imgs/youssef2/2.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y23", imageUrl: "/imgs/youssef2/3.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y24", imageUrl: "/imgs/youssef2/4.jpg", title: "بوستر", category: "مهاجم" },
    ],
  },
  {
    id: "p4",
    name: "youssef3",
    avatarUrl: "/imgs/youssef3/2.jpg",
    posters: [
      { id: "y31", imageUrl: "/imgs/youssef3/1.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y32", imageUrl: "/imgs/youssef3/2.jpg", title: "بوستر", category: "مهاجم" },
      { id: "y33", imageUrl: "/imgs/youssef3/3.jpg", title: "بوستر", category: "مهاجم" },
    ],
  },
  {
    id: "p5",
    name: "ziad",
    avatarUrl: "/imgs/ziad/2.jpg",
    posters: [
      { id: "z1", imageUrl: "/imgs/ziad/1.jpg", title: "بوستر", category: "مهاجم" },
      { id: "z2", imageUrl: "/imgs/ziad/2.jpg", title: "بوستر", category: "مهاجم" },
    ],
  },
  {
    id: "p6",
    name: "mohamed",
    avatarUrl: "/imgs/mohamed/2.jpg",
    posters: [
      { id: "m1", imageUrl: "/imgs/mohamed/1.jpg", title: "بوستر", category: "مهاجم" },
      { id: "m2", imageUrl: "/imgs/mohamed/2.jpg", title: "بوستر", category: "مهاجم" },
      { id: "m3", imageUrl: "/imgs/mohamed/3.jpg", title: "بوستر", category: "مهاجم" },
      { id: "m4", imageUrl: "/imgs/mohamed/4.jpg", title: "بوستر", category: "مهاجم" },
      { id: "m5", imageUrl: "/imgs/mohamed/5.jpg", title: "بوستر", category: "مهاجم" },
      { id: "m6", imageUrl: "/imgs/mohamed/6.jpg", title: "بوستر", category: "مهاجم" },
      { id: "m7", imageUrl: "/imgs/mohamed/7.jpg", title: "بوستر", category: "مهاجم" },
      { id: "m8", imageUrl: "/imgs/mohamed/8.jpg", title: "بوستر", category: "مهاجم" },
    ],
  },
  {
    id: "p7",
    name: "mohamed2",
    avatarUrl: "/imgs/mohamed2/2.jpg",
    posters: [
      { id: "m21", imageUrl: "/imgs/mohamed2/1.jpg", title: "بوستر", category: "مهاجم" },
      { id: "m22", imageUrl: "/imgs/mohamed2/2.jpg", title: "بوستر", category: "مهاجم" },
      { id: "m23", imageUrl: "/imgs/mohamed2/3.jpg", title: "بوستر", category: "مهاجم" },
    ],
  },
  {
    id: "p8",
    name: "sasa",
    avatarUrl: "/imgs/sasa/2.jpg",
    posters: Array.from({ length: 18 }, (_, i) => ({
      id: `s${i + 1}`,
      title: "بوستر",
      imageUrl: `/imgs/sasa/${i + 1}.jpg`,
      category: "مهاجم",
    })),
  },
  {
    id: "p9",
    name: "mostafa",
    avatarUrl: "/imgs/mostafa/2.jpg",
    posters: [
      { id: "mo1", imageUrl: "/imgs/mostafa/1.jpg", title: "بوستر", category: "مهاجم" },
      { id: "mo2", imageUrl: "/imgs/mostafa/2.jpg", title: "بوستر", category: "مهاجم" },
      { id: "mo3", imageUrl: "/imgs/mostafa/3.jpg", title: "بوستر", category: "مهاجم" },
      { id: "mo4", imageUrl: "/imgs/mostafa/4.jpg", title: "بوستر", category: "مهاجم" },
    ],
  },
  {
    id: "p10",
    name: "ahmed",
    avatarUrl: "/imgs/ahmed/2.jpg",
    posters: [
      { id: "a1", imageUrl: "/imgs/ahmed/1.jpg", title: "بوستر", category: "مهاجم" },
      { id: "a2", imageUrl: "/imgs/ahmed/2.jpg", title: "بوستر", category: "مهاجم" },
      { id: "a3", imageUrl: "/imgs/ahmed/3.jpg", title: "بوستر", category: "مهاجم" },
      { id: "a4", imageUrl: "/imgs/ahmed/4.jpg", title: "بوستر", category: "مهاجم" },
      { id: "a5", imageUrl: "/imgs/ahmed/5.jpg", title: "بوستر", category: "مهاجم" },
      { id: "a6", imageUrl: "/imgs/ahmed/6.jpg", title: "بوستر", category: "مهاجم" },
    ],
  },
];

export const allPosters: (Poster & { playerId: string; playerName: string })[] = players
  .filter(player => !player.hideFromHome)
  .flatMap(player => 
    player.posters
      .filter(poster => !poster.hideFromHome)
      .map(poster => ({ ...poster, playerId: player.id, playerName: player.name }))
  );
