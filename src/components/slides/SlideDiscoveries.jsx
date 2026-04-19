import React, { useState, useEffect } from 'react';

export const SlideDiscoveries = ({ discoveries }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0 -> 1: Giriş metni kaybolur, başlık gelir
    const t1 = setTimeout(() => setPhase(1), 2000);
    // 1 -> 2: Keşif kartları şelale (staggered) efektiyle düşer
    const t2 = setTimeout(() => setPhase(2), 3200);
    
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex flex-col justify-center h-full p-8 bg-[#020617] text-white animate-in fade-in duration-700 relative overflow-hidden">
      
      

      {/* DISCOVER WEEKLY AURASI (Gece Mavisi, Camgöbeği ve Zümrüt Yeşili) */}
      <div className="absolute -top-20 left-0 w-[400px] h-[400px] bg-cyan-900/40 rounded-full mix-blend-screen filter blur-[120px] animate-pulse z-0"></div>
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-emerald-800/30 rounded-full mix-blend-screen filter blur-[100px] animate-[pulse_6s_ease-in-out_infinite] z-0"></div>

      {/* Aşama 0 ve 1: Giriş Metni ve Başlık */}
      <div className={`transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] absolute w-full left-0 flex flex-col items-center px-6 z-10
        ${phase === 0 ? 'top-[45%] opacity-100 scale-100' : 'top-[10%] opacity-100 scale-95'}`}>
        
        <p className={`font-bold uppercase tracking-widest text-center transition-colors duration-700
          ${phase === 0 ? 'text-2xl sm:text-3xl text-white' : 'text-sm sm:text-base text-cyan-200/70'}`}>
          Bu yıl birbirimize neler bulaştırdık?
        </p>

        <h2 className={`text-4xl sm:text-5xl font-black mt-3 text-center text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-emerald-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-700 transform
          ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 hidden'}`}>
          Discover Annual
        </h2>
      </div>

      {/* Aşama 2: Keşif (Bulaşanlar) Kartları */}
      <div className={`w-full mt-32 z-10 transition-all duration-1000 flex flex-col gap-5
        ${phase >= 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {discoveries.map((item, idx) => (
          <div 
            key={idx}
            className="relative bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 transform"
            style={{ 
              transitionDelay: `${idx * 250}ms`,
              transform: phase >= 2 ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              opacity: phase >= 2 ? 1 : 0
            }}
          >
            {/* Sol kenardaki renkli çizgi (Accent line) */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-l-2xl opacity-80"></div>
            
            <div className="pl-3">
              <span className="inline-block px-2.5 py-1 mb-2 text-[10px] uppercase tracking-wider font-bold text-cyan-200 bg-cyan-950/50 rounded-md border border-cyan-800/50">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-1 leading-snug">
                {item.name}
              </h3>
              <p className="text-sm text-white/60 font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};