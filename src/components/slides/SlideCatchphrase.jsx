import React, { useState, useEffect } from 'react';

export const SlideCatchphrase = ({ phrases = [] }) => {
  const [phase, setPhase] = useState(0);

  // Gelen veriyi (phrases) bölümlere ayırıyoruz.
  const topPhrase = phrases.length > 0 ? phrases[0] : { text: "", count: 0 };
  const runnerUps = phrases.length > 1 ? phrases.slice(1, 4) : [];

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);  
    const t2 = setTimeout(() => setPhase(2), 2500); 
    const t3 = setTimeout(() => setPhase(3), 4500); 
    const t4 = setTimeout(() => setPhase(4), 7000); 
    
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="flex flex-col justify-center h-full bg-[#12001A] text-white relative overflow-hidden">
      
      {/* DEVASA "20" FİLİGRANI */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[20rem] sm:text-[30rem] font-black text-white/[0.03] select-none tracking-tighter">
          20
        </span>
      </div>

      {/* ARKAPLAN: Infinite Marquee (Sonsuz Kayan Yazı) */}
      <div className={`absolute inset-0 pointer-events-none flex flex-col justify-center gap-8 transition-opacity duration-1000 ease-in z-0
        ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap animate-marquee" 
               style={{ animationDirection: i % 2 === 0 ? 'normal' : 'reverse' }}>
            {[...Array(8)].map((_, j) => (
              // DEĞİŞEN KISIM: text-transparent ve WebkitTextStroke yerine daha güvenilir bir yarı saydam renk kullanıyoruz.
              <span key={j} className="text-8xl sm:text-[10rem] font-black mx-4 text-fuchsia-500/20 transition-colors duration-500">
                {topPhrase.text}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Spot Işığı Efekti */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-[#12001A]/80 to-[#12001A] transition-opacity duration-1000 z-0
        ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="relative z-10 px-6 w-full max-w-lg mx-auto flex flex-col items-center text-center">
        
        {/* Aşama 1 ve 2: Hazırlık */}
        <div className="h-24 mb-6 flex flex-col justify-end items-center">
          <div className="overflow-hidden">
            <p className={`text-xl text-fuchsia-300/80 font-semibold tracking-wide transition-all duration-700 transform
              ${phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              Bir şarkıyı çok dinlersin anlarız da...
            </p>
          </div>
          <div className="overflow-hidden mt-2">
            <p className={`text-2xl sm:text-3xl font-bold text-white transition-all duration-700 delay-300 transform
              ${phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              Bu kelimeyi <span className="text-green-400">ağzından</span> düşürmedin:
            </p>
          </div>
        </div>

        {/* Aşama 3: Ana Cümle (Şampiyon) */}
        <div className={`w-full transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] transform
          ${phase >= 3 ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-12'}`}>
          <div className="relative inline-block">
            <span className="absolute -top-8 -left-4 text-5xl text-green-400/30 font-serif rotate-180">"</span>
            
            <h2 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500 leading-tight py-2 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
              {topPhrase.text}
            </h2>
            
            <span className="absolute -bottom-6 -right-4 text-5xl text-green-400/30 font-serif">"</span>
          </div>
        </div>

        {/* Aşama 4: İstatistik ve Runner-ups */}
        <div className={`mt-10 w-full transition-all duration-1000 ease-out transform
          ${phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="bg-fuchsia-950/40 backdrop-blur-md rounded-2xl p-5 border border-fuchsia-500/20 shadow-[0_0_50px_rgba(192,38,211,0.15)] flex flex-col gap-4">
            
            {/* Şampiyonun Tekrar Sayısı */}
            <div className={`flex items-center justify-between pb-3 ${runnerUps.length > 0 ? 'border-b border-fuchsia-500/20' : ''}`}>
              <span className="text-sm uppercase tracking-widest text-fuchsia-300/70 font-bold">Tekrar Sayısı</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">{topPhrase.count}</span>
                <span className="text-sm text-fuchsia-300/70">kez</span>
              </div>
            </div>

            {/* Diğer favori cümleler listesi */}
            {runnerUps.length > 0 && (
              <div className="text-left mt-1">
                <span className="text-xs uppercase tracking-widest text-green-400 font-bold block mb-3">Bunlar da diline dolananlar:</span>
                <div className="flex flex-col gap-2">
                  {runnerUps.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-white/5 rounded-lg px-3 py-2 border border-white/5">
                      <span className="font-semibold text-white/90">"{item.text}"</span>
                      <span className="text-xs text-white/50 font-mono">{item.count} kez</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};