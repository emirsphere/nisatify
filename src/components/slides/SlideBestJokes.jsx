import React, { useState, useEffect } from 'react';

export const SlideBestJokes = ({ jokes }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0: "Bu yıl komiktin" giriş yazısı
    // 1: Yazı yukarı kayar, "İşte Yılın Şakaları" başlığı gelir
    const t1 = setTimeout(() => setPhase(1), 2200);
    // 2: Şaka kartları sırayla ekrana düşer
    const t2 = setTimeout(() => setPhase(2), 3500);
    
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex flex-col justify-center h-full p-8 bg-[#050505] text-white animate-in fade-in duration-700 relative overflow-hidden">
      
      {/* SAHNE IŞIĞI / AURA EFEKTİ (Altın ve Kırmızı tonları) */}
      <div className="absolute -top-40 left-10 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-red-700 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse delay-500"></div>

      {/* Aşama 0 ve 1: Giriş Metni ve Ana Başlık */}
      <div className={`transition-all duration-1000 ease-in-out absolute w-full left-0 flex flex-col items-center px-6 z-10
        ${phase === 0 ? 'top-[45%] opacity-100 scale-100' : 'top-[12%] opacity-100 scale-90'}`}>
        
        <p className={`font-bold uppercase tracking-widest text-center transition-colors duration-700
          ${phase === 0 ? 'text-2xl sm:text-3xl text-white' : 'text-sm sm:text-base text-amber-200/60'}`}>
          Kabul edelim, bu yıl gerçekten komiktin...
        </p>

        <h2 className={`text-4xl sm:text-3xl font-black mt-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-700 transform
          ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 hidden'}`}>
          İşte Bu Yıl En Çok Güldüklerimiz
        </h2>
      </div>

      {/* Aşama 2: Şaka Kartları Listesi */}
      <div className={`w-full mt-36 z-10 transition-all duration-1000 flex flex-col gap-5
        ${phase >= 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {jokes.map((joke, idx) => (
          <div 
            key={idx}
            className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl transition-all duration-700 transform`}
            style={{ 
              transitionDelay: `${idx * 300}ms`,
              transform: phase >= 2 ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              opacity: phase >= 2 ? 1 : 0
            }}// yazı boyutunu ayarlamam için değiştirmem gereken etiket :
          >
            {/* Dekoratif Tırnak İşareti */}
            <span className="absolute top-2 right-4 text-5xl font-serif text-amber-500/20 leading-none">"</span>
            
            <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              {joke.context}
            </p>
            <p className="text-lg sm:text-sm font-medium leading-snug text-white/90">
              "{joke.quote}"
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};