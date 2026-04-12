import React, { useState, useEffect } from 'react';

export const SlideTopTopics = ({ topics }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0: Gizemli giriş sorusu
    // 1: Yazı yukarı kayar, ana başlık gelir
    const t1 = setTimeout(() => setPhase(1), 2200);
    // 2: Liderlik tablosu (Leaderboard) sırayla ekrana düşer
    const t2 = setTimeout(() => setPhase(2), 3500);
    
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex flex-col justify-center h-full p-8 bg-[#0a050a] text-white animate-in fade-in duration-700 relative overflow-hidden">
      
      {/* DEVASA "20" EFEKTİ (Spotify Yıl Filigranı) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[20rem] sm:text-[30rem] font-black text-white/[0.03] select-none tracking-tighter">
          20
        </span>
      </div>

      {/* GIYBET AURASI (Koyu Mor ve Fuşya tonları) */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-purple-800 rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse z-0"></div>
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-fuchsia-700 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse delay-700 z-0"></div>

      {/* Aşama 0 ve 1: Giriş Metni ve Ana Başlık */}
      <div className={`transition-all duration-1000 ease-in-out absolute w-full left-0 flex flex-col items-center px-6 z-10
        ${phase === 0 ? 'top-[45%] opacity-100 scale-100' : 'top-[10%] opacity-100 scale-90'}`}>
        
        <p className={`font-bold uppercase tracking-widest text-center transition-colors duration-700
          ${phase === 0 ? 'text-2xl sm:text-3xl text-white' : 'text-sm sm:text-base text-fuchsia-300/70'}`}>
          Peki bu yıl en çok kimin kulaklarını çınlattık?
        </p>

        <h2 className={`text-5xl sm:text-5xl font-black mt-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-400 to-fuchsia-300 drop-shadow-[0_0_20px_rgba(192,38,211,0.4)] transition-all duration-700 transform
          ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 hidden'}`}>
          Top 3 Dedikodu Person
        </h2>
      </div>

      {/* Aşama 2: Liderlik Tablosu (Sıralı Animasyon) */}
      <div className={`w-full mt-36 z-10 transition-all duration-1000 flex flex-col gap-4
        ${phase >= 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {topics.map((topic, idx) => {
          const isFirst = idx === 0;
          
          return (
            <div 
              key={idx}
              className={`relative flex items-center justify-between p-5 rounded-2xl border backdrop-blur-md transition-all duration-700 transform
                ${isFirst 
                  ? 'bg-gradient-to-r from-purple-900/50 to-fuchsia-900/30 border-fuchsia-500/50 shadow-[0_0_25px_rgba(217,70,239,0.25)] scale-105 my-2' 
                  : 'bg-white/5 border-white/10 shadow-lg'}`}
              style={{ 
                transitionDelay: `${idx * 250}ms`,
                transform: phase >= 2 ? (isFirst ? 'translateY(0) scale(1.05)' : 'translateY(0) scale(1)') : 'translateY(20px) scale(0.95)',
                opacity: phase >= 2 ? 1 : 0
              }}
            >
              {/* Birinciye Özel Bir İkon */}
              {isFirst && (
                <span className="absolute -top-4 -left-2 text-3xl transform -rotate-12 drop-shadow-lg">👑</span>
              )}
              
              <div className="flex items-center gap-4">
                <span className={`text-3xl font-black italic 
                  ${isFirst ? 'text-fuchsia-400' : 'text-white/30'}`}>
                  #{idx + 1}
                </span>
                <span className={`font-bold ${isFirst ? 'text-2xl text-white' : 'text-xl text-white/90'}`}>
                  {topic.name}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className={`font-mono font-bold ${isFirst ? 'text-fuchsia-300' : 'text-white/60'}`}>
                  {topic.count}
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-50">KeZ</span>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};