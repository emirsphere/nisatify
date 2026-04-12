export const CONFIG = {
  CORRECT_PASSWORD: "emir",
  SPECIFIC_ERRORS: [
    { keywords: ["neslihan", "nesli"], messages: ["?", "yarma","K.E.S.A.Q."] },
    { keywords: ["buğra", "bugra", "iğrençra"], messages: ["iğrençra demek istedin galiba?", "puhauah", ""] }
  ],
  GENERIC_ERRORS: [
    "ÜFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    "o kim aq ya bağartma",
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
  minutesListened: 119608,
  topPhrases: [
    { text: "BABA", count: 3316 },
    { text: "kes", count: 2864 },
    { text: "bak bak", count: 720 },
    {text: "puahaha", count: 289 },
    { text: "insta sildim", count: 211 }
  ],
  topGenres: [
   { name: "Makara", percentage: 34, color: "bg-pink-500" },
    { name: "Ağır Boş Yapma", percentage: 23, color: "bg-purple-500" },
    { name: "Reels & Twitter", percentage: 22, color: "bg-blue-500" },
    { name: "Derin Sohbet", percentage: 10, color: "bg-yellow-500" },
    { name: "Dertleşme", percentage: 11, color: "bg-red-500" }
  ],
  bestJokes: [
    { context: "1", quote: "puahaha nice babos" },
    { context: "2", quote: "Gece konuşurken zamanda seyahat etmemiz" },
    { context: "3", quote: "autotunelu tamam da kanka sesi" },
    { context: "4", quote: "iğrenç sticker eserlerin" },
    
  ],
  topTopics: [
    { name: "İsmet Taşdemir", count: 256 },
    { name: "Caan", count: 175 },
    { name: "Boğaz Ağrısı", count: 46 }
  ],
  discoveries: [
    { category: "Kelime", name: "baba", description: "Artık her bir şey bir baba gibi." },
    { category: "Kelime", name: "dur bi", description: "Bi dk." },
    { category: "Alışkanlık", name: "Gece Baya Geç Yatmak", description: "Biyolojik saatimizi mahvettik." }
  ]
};