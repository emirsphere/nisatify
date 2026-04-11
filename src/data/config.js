export const CONFIG = {
  CORRECT_PASSWORD: "emir",
  SPECIFIC_ERRORS: [
    { keywords: ["neslihan", "nesli"], messages: ["?", "yarma", "Neslihan mı? Gerçekten mi?"] },
    { keywords: ["buğra", "bugra", "iğrençra"], messages: ["iğrençra demek istedin galiba?", "puhauah", "Onu hiç karıştırma şimdi."] }
  ],
  GENERIC_ERRORS: [
    "ÜFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    "o kim aq ya bağartma",
    "tamam bırak makarayı yaz düzgünce",
    "Ayıp... Neyse, Emir yaz da geçelim artık şu aşamayı, sinirim bozuldu.",
    "Emin misin? Klavyen falan sürçtü herhalde. Bir daha dene.",
    "Şaka yapıyorsun değil mi? Bu kadar çabuk satılacağımı düşünmemiştim."
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
  minutesListened: 94608,
  topGenres: [
    { name: "Saf Gıybet", percentage: 45, color: "bg-pink-500" },
    { name: "Varoluşsal Kriz", percentage: 25, color: "bg-purple-500" },
    { name: "Anlamsız Reels", percentage: 20, color: "bg-blue-500" },
    { name: "İptal Edilen Planlar", percentage: 10, color: "bg-yellow-500" }
  ]
};