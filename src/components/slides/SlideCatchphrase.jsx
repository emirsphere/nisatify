import React, { useState, useEffect } from 'react';

export const SlideCatchphrase = ({ phrases }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0: Giriş yazısı
    // 1: Asıl cümlenin (1 numara) patlaması
    const t1 = setTimeout(() => setPhase(1), 2000);
    // 2: Altından diğer sık kullanılanların (runner-ups) gelmesi
    const t2 = setTimeout(() => setPhase(2), 4000);
    
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // İlk eleman şampiyon, geri kalanlar liste
  const topPhrase = phrases[0];
  const runnerUps = phrases.slice(1);

  return (
    <div className="flex flex-col justify-center items-center h-full p-8 bg-[#0a0a0a] text-white animate-in fade-in duration-700 relative overflow-hidden">
      
      {/* SPOTIFY AURA EFEKTİ (Arka planda nefes alan bulanık renkler) */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse delay-700"></div>

      {/* Aşama 0: Giriş Metni */}
      <p className={`font-bold uppercase tracking-widest transition-all duration-1000 ease-in-out absolute w-full text-center px-4 z-10
        ${phase === 0 ? 'text-2xl sm:text-3xl top-[45%] opacity-100 scale-100' : 'text-sm sm:text-base top-[10%] opacity-60 scale-90'}`}>
        Bu yıl dilinden hiç düşmeyen o söz...
      </p>

      {/* Aşama 1: Şampiyon Cümle */}
      <div className={`transition-all duration-1000 ease-out transform w-full flex flex-col items-center justify-center z-10 mt-16
        ${phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-50'}`}>
        
        {phase >= 1 && (
          <h2 className="text-5xl sm:text-6xl md:text-7xl leading-tight font-black mb-2 text-center text-transparent bg-clip-text bg-gradient-to-br from-white via-pink-200 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] px-2">
            "{topPhrase.text}"
          </h2>
        )}
        <p className={`text-xl font-medium text-pink-300 mt-4 transition-opacity duration-700 delay-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          Tam {topPhrase.count} kere söyledin.
        </p>
      </div>

      {/* Aşama 2: Geri Kalan Cümleler (Modüler Liste) */}
      <div className={`w-full max-w-sm mt-12 z-10 transition-all duration-1000
        ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {runnerUps.length > 0 && (
          <>
            <div className="w-full h-[1px] bg-white/20 mb-6"></div>
            <p className="text-xs uppercase tracking-widest opacity-60 mb-4 text-center font-bold">Bunlar da favorilerin:</p>
            <div className="flex flex-col gap-4">
              {runnerUps.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10"
                >
                  <span className="font-semibold text-base">"{item.text}"</span>
                  <span className="font-mono text-sm opacity-70">{item.count} kez</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

    </div>
  );
};