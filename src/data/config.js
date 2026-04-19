export const CONFIG = {
  CORRECT_PASSWORD: "emir",
  SPECIFIC_ERRORS: [
    { keywords: ["neslihan", "nesli"], messages: ["?", "yarma", "K.E.S.A.Q."] },
    {
      keywords: ["buğra", "bugra", "iğrençra"],
      messages: ["iğrençra demek istedin galiba?", "puhauah"]
    }
  ],
  GENERIC_ERRORS: [
    "ÜFFFFFFF",
    "o kim aq ya bağırtma",
    "tamam bırak makarayı yaz düzgünce",
    "K.E.S.A.Q.",
    "üzme"
  ]
};

// Kendi public/audio klasöründeki dosyaların yollarını buraya yazacaksın (Örn: "/audio/sarki1.mp3")
export const AUDIO_TRACKS = [
  "https://cdn.pixabay.com/download/audio/2022/10/25/audio_51c8a1b5c4.mp3",
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_249216d6fc.mp3",
  "https://cdn.pixabay.com/download/audio/2022/11/22/audio_7849ed8563.mp3",
  "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3",
  "https://cdn.pixabay.com/download/audio/2021/11/24/audio_34b3d870e2.mp3"
];

export const WRAPPED_DATA = {
  minutesListened: 149608,
  topPhrases: [
    { text: "BABA", count: 3316 },
    { text: "kes", count: 2864 },
    { text: "bak bak", count: 720 },
    { text: "puahaha", count: 289 },
    { text: "insta sildim", count: 211 }
  ],

  conversationTypes: [
  { name: "Makara", percent: 34, color: "from-pink-400 to-fuchsia-400" },
  { name: "Ağır Boş Yapma", percent: 23, color: "from-purple-400 to-violet-400" },
  { name: "Reels & Twitter", percent: 22, color: "from-sky-400 to-cyan-300" },
  { name: "Derin Sohbet", percent: 10, color: "from-yellow-300 to-orange-300" },
  { name: "Dertleşme", percent: 11, color: "from-red-400 to-rose-400" }
],
  bestJokes: [
    { context: "1", quote: "puahaha nice babos" },
    { context: "2", quote: "Gece konuşurken zamanda seyahat etmemiz" },
    { context: "3", quote: "autotunelu tamam da kanka sesi" },
    { context: "4", quote: "kyk yurdu mesajları" },
    { context: "5", quote: "iğrenç sticker eserlerin" }
  ],
  topTopics: [
    { name: "İsmet Taşdemir", count: 356 },
    { name: "Caan", count: 175 },
    { name: "Boğaz Ağrısı", count: 46 }
  ],
  discoveries: [
    { category: "Kelime", name: "baba", description: "Artık her bir şey bir baba gibi." },
    { category: "Kelime", name: "dur bi", description: "Bi dk." },
    { category: "Alışkanlık", name: "Salak rpler", description: "Anında ayak uyduruyoruz." }
  ],
  moodProfile: [
    {
      name: "Cutie Atom Bomb",
      percentage: 34,
      color: "from-pink-500 to-rose-400",
      note: "Tatlı bir atom bombasısın. Her an patlamaya hazır büyük bir enerji ve sinir var içinde, ama dışarıya genelde sevimli ve hafif bir aura yayıyorsun."
    },
    {
      name: "Enerjik Komedi Santralizmosu",
      percentage: 24,
      color: "from-fuchsia-500 to-violet-500",
      note: ""
    },
    {
      name: "Ağlamasyonel",
      percentage: 18,
      color: "from-blue-500 to-cyan-400",
      note: ""
    },
    {
      name: "Delirmasyoninyo Çıldırella",
      percentage: 14,
      color: "from-yellow-300 to-orange-400",
      note: ""
    },
    {
      name: "Ağır Boşlamagottoritto",
      percentage: 10,
      color: "from-emerald-400 to-teal-500",
      note: ""
    }
  ],
  auraColor: {
    label: "Bu Yılki Aura Rengin",
    colorName: "Hot Pink",
    description:
      "Tatlı görünüyorsun ama içinde aşırı canlı, komik ve biraz da olay çıkaran bir enerji dolaşıyor."
  },
  podcastTopics: [
    { name: "Hukuk Dersi Konuları", count: 259 },
    { name: "Gündeme Dair Her Şey", count: 200 },
    { name: "Dinler Ve Evren", count: 89 }
  ],
  peakMoment: {
    title: "Verdiğin Doğum Günü Hediyesi",
    description:
      "Bana aldığın hediyeyle ne kadar iyi biri olduğunu bir kez daha görmüş oldum. "
  },
  bestMadeStickers: [
    {
      name: "Dans Kedi",
      image: "/stickers/danskedi.webp"
    },
    {
      name: "Dans Kedi Old",
      image: "/stickers/danskediold.webp"
    },
    {
      name: "Fokin",
      image: "/stickers/fokin.jpg"
    },
    {
      name: "Havalı Güvercin",
      image: "/stickers/sakalli.jpg"
    },
    {
      name: "Sakallı",
      image: "/stickers/havaliguvercin.webp"
    },
    {
      name: "Sert Kedi",
      image: "/stickers/sertkedi.jpg"
    },
    {
      name: "Sinsi Kedi",
      image: "/stickers/sinsikedi.jpg"
    },
    {
      name: "Stop Kedi",
      image: "/stickers/ordek.webp"
    }
  ],
  personaCard: {
    title: "BABA",
    subtitle: "Resmi Arkadaşlık Unvanı",
    description:
      "Ciddiyet anında konuşur, boş anda güldürür, gece olunca da bütün sistemi darmadağın edersin.",
    badges: [
      "Ücretsiz Terapist",
      "Mizahşör",
      "Sinirbozan",
      "Keyifli"
    ]
  },
  birthdayWish: {
  age: 21,
  name: "Nisa",
  message:
    "Yeni yaşın sana bir sürü başarı, güzel anılar, bol kahkaha, para ve hak ettiğin her şeyi getirsin."
},
gladYouExist: {
  title: "Şaka maka...",
  main: "iyi ki varsın.",
  lines: [
    "İyi ki tanışmışız.",
    "İyi ki konuşmuşuz.",
    "İyi ki en yakın arkadaşım olmuşsun.",
  ],
  footer: "Umarım samimiyetimiz hiç azalmaz."
},
virtualParty: {
  title: "Doğum günü partini başlat",
  startedTitle: "THE PARTY MUST GO ON",
  subtitle: "Pist senin, kaos bizim.",
  dancers: [
    { name: "Dans 1", image: "/party/dancer1.gif" },
    { name: "Dans 2", image: "/party/cat-jumping-catjump.gif" },
    { name: "Dans 3", image: "/party/cute-bear.gif" },
    { name: "Dans 4", image: "/party/winnie.gif" },
    { name: "Dans 5", image: "/party/dog-dance-dog-dance-meme.gif" },
    { name: "Dans 6", image: "/party/party-cat.gif" },
    { name: "Dans 7", image: "/party/pengu-pudgy.gif" },
    { name: "Dans 8", image: "/party/quby.gif" },
    { name: "Dans 9", image: "/party/dancing-pengu.gif" },
    { name: "Dans 10", image: "/party/pocoyo.gif" },
    { name: "Dans 11", image: "/party/baykus.gif" },
    { name: "Dans 12", image: "/party/mantar.gif" },
    { name: "Dans 13", image: "/party/pocoyo2.gif" },
    { name: "Dans 14", image: "/party/black.gif" },
    { name: "Dans 15", image: "/party/pocoyo3.gif" },
    { name: "Dans 16", image: "/party/bear.gif" },
    { name: "Dans 17", image: "/party/duck.gif" },
    { name: "Dans 18", image: "/party/spongebob-dance-spongebob-joget.gif" }
  ]
},
slideMusic: {
    newIntro: "/audio/beatit.MP3",
    chapter: "/audio/chapter.mp3",
    story1: "/audio/story1.mp3",
    story2: "/audio/story2.mp3",
    minutes: "/audio/minutes.mp3",
    conversationTypes: "/audio/conversation-types.mp3",
    moodSwings: "/audio/mood.mp3",
    aura: "/audio/aura.mp3",
    catchphrase: "/audio/catchphrase.mp3",
    bestJokes: "/audio/jokes.mp3",
    topTopics: "/audio/top-topics.mp3",
    discoveries: "/audio/discoveries.mp3",
    feltAge: "/audio/felt-age.mp3",
    podcast: "/audio/podcast.mp3",
    peakMoment: "/audio/peak-moment.mp3",
    bestMadeStickers: "/audio/stickers.mp3",
    persona: "/audio/persona.mp3",
    softEnding: "/audio/soft-ending.mp3",
    birthdayMode: "/audio/birthday-mode.mp3",
    birthdayWish: "/audio/birthday-wish.mp3",
    gladYouExist: "/audio/glad-you-exist.mp3",
    virtualParty: "/audio/party.mp3"
  }
};
