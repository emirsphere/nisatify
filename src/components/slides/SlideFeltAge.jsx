import React, { useState, useEffect } from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter.jsx';

export const SlideFeltAge = ({ feltAge }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0 -> 1: İlk giriş cümlesi
    // 1 -> 2: İkinci hazırlık cümlesi gelir
    const t1 = setTimeout(() => setPhase(1), 2000);
    // 2 -> 3: Devasa hissettirilen yaş patlar ve saymaya başlar
    const t2 = setTimeout(() => setPhase(2), 4000);
    // 3 -> 4: Altındaki açıklama kartı gelir
    const t3 = setTimeout(() => setPhase(3), 6500);
    
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="flex flex-col justify-center h-full p-8 bg-[#0f0505] text-white animate-in fade-in duration-700 relative overflow-hidden text-center">
      
      {/* DEVASA "20" FİLİGRANI */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[20rem] sm:text-[30rem] font-black text-white/[0.02] select-none tracking-tighter">
          20
        </span>
      </div>

      {/* YORGUNLUK / VINTAGE AURASI (Koyu Bordo ve Kiremit) */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-rose-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse z-0"></div>
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-orange-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-[pulse_7s_ease-in-out_infinite] z-0"></div>

      {/* Aşama 0 ve 1: Hazırlık Metinleri */}
      <div className="absolute top-[20%] w-full left-0 px-8 z-10 flex flex-col gap-4">
        <p className={`text-xl sm:text-2xl font-bold text-rose-200/80 transition-all duration-1000 transform
          ${phase >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Takvime göre bu yıl 20 yaşıma girmiş olabilirim...
        </p>

        <p className={`text-2xl sm:text-3xl font-black text-white drop-shadow-md transition-all duration-1000 transform
          ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 hidden'}`}>
          Ama seninle uğraşmaktan hissettiğim yaş tam olarak:
        </p>
      </div>

      {/* Aşama 2: Devasa Yaş Animasyonu */}
      <div className={`z-10 mt-32 transition-all duration-1000 ease-[cubic-bezier(0.17,0.84,0.44,1)] transform
        ${phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none absolute'}`}>
        
        {phase >= 2 && (
          <div className="text-[8rem] sm:text-[10rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-200 via-rose-300 to-rose-600 drop-shadow-[0_10px_30px_rgba(225,29,72,0.4)]">
            <AnimatedCounter end={feltAge.age} duration={2500} />
          </div>
        )}
      </div>

      {/* Aşama 3: Sonuç Kartı (Ruh Hali ve Açıklama) */}
      <div className={`absolute bottom-12 left-0 w-full px-6 z-10 transition-all duration-1000 transform
        ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
        
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl mx-auto max-w-sm relative overflow-hidden">
          {/* İnce üst dekorasyon çizgisi */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-rose-500"></div>
          
          <div className="inline-block px-3 py-1 mb-3 text-xs uppercase tracking-widest font-bold text-orange-200 bg-orange-950/60 rounded border border-orange-800/50">
            Ruh Hali: {feltAge.status}
          </div>
          <p className="text-sm sm:text-base text-white/80 font-medium leading-relaxed">
            "{feltAge.description}"
          </p>
        </div>
      </div>

    </div>
  );
};