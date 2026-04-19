import React, { useState, useEffect } from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const SlideFeltAge = ({ 
  // SENIOR PRATİĞİ: Defensive Programming (Savunmacı Programlama).
  // Eğer WrappedExperience bu prop'u geçmeyi unutursa (ki unutulmuş), 
  // uygulama çökmez, bu fallback (varsayılan) veriyi kullanır.
  feltAge = { 
    age: 58, 
    status: "Yorucu Kraliçe", 
    description: "Bu yıl benle geçirdiğin zamanlar epey yorucuydun. Bunu hak ettin." 
  } 
}) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Animasyon koreografisi: DOM'u aynı anda yormak yerine,
    // event loop'a task'leri sırayla vererek 60FPS akıcılık sağlıyoruz.
    const t1 = setTimeout(() => setPhase(1), 500);  // İlk cümle belirir
    const t2 = setTimeout(() => setPhase(2), 2500); // İkinci cümle belirir
    const t3 = setTimeout(() => setPhase(3), 4500); // Dramatik Yaş patlaması
    const t4 = setTimeout(() => setPhase(4), 7000); // Açıklama kartı
    
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    // 'overflow-hidden' ve 'relative' container animasyonların dışarı taşmasını engeller.
    <div className="flex flex-col justify-center h-full p-8 bg-[#0a0a0a] text-white relative overflow-hidden text-center">
      
      {/* SPOTIFY BACKGROUND AURA: 
          Arka planda nefes alan, donanımsal hızlandırma (transform/opacity) 
          kullanan gradient katmanları. */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${phase >= 3 ? 'opacity-100' : 'opacity-30'}`}>
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-orange-600/40 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-red-700/30 rounded-full mix-blend-screen filter blur-[120px] animate-[pulse_5s_ease-in-out_infinite]"></div>
      </div>

      {/* DEVASA BACKGROUND TEXT (Görsel Derinlik İçin) */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-1000 ease-out transform
        ${phase >= 3 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <span className="text-[25rem] font-black text-white/[0.02] select-none tracking-tighter leading-none">
          {feltAge.age}
        </span>
      </div>

      {/* AŞAMA 1 & 2: Hazırlık Metinleri */}
      <div className="absolute top-[25%] w-full left-0 px-8 z-10 flex flex-col gap-6 items-center">
        {/* Yazıların overflow-hidden bir div içinde transform ile gelmesi, 
            maskeleme (reveal) efekti yaratır. Premium hissettiren detay budur. */}
        <div className="overflow-hidden">
          <p className={`text-xl sm:text-2xl font-bold text-white/70 transition-all duration-700 ease-out transform
            ${phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            Takvime göre bugün 21 oldun...
          </p>
        </div>

        <div className="overflow-hidden">
          <p className={`text-2xl sm:text-3xl font-black text-white drop-shadow-md transition-all duration-700 ease-out transform delay-300
            ${phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            Ama bize hissettirdiğin yaş:
          </p>
        </div>
      </div>

      {/* AŞAMA 3: Devasa Yaş Animasyonu (The Drop) */}
      <div className={`z-20 mt-20 transition-all duration-[1500ms] ease-[cubic-bezier(0.17,0.84,0.44,1)] transform
        ${phase >= 3 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20 pointer-events-none'}`}>
        
        {phase >= 3 && (
          // Renk geçişleri ve büyük drop-shadow ile odak noktası yaratılıyor
          <div className="text-[10rem] sm:text-[12rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-orange-500 to-red-600 drop-shadow-[0_10px_40px_rgba(239,68,68,0.5)]">
            <AnimatedCounter end={feltAge.age} duration={2000} />
          </div>
        )}
      </div>

      {/* AŞAMA 4: Sonuç Kartı (Ruh Hali ve Açıklama) */}
      <div className={`absolute bottom-16 left-0 w-full px-6 z-20 transition-all duration-1000 ease-out transform
        ${phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
        
        <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] mx-auto max-w-sm relative overflow-hidden group">
          {/* Kartın içindeki şık ışık parlaması (Hover veya render efekti) */}
          <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shimmer_2s_infinite]"></div>
          
          <div className="inline-block px-4 py-1.5 mb-4 text-xs uppercase tracking-widest font-black text-orange-300 bg-orange-950/80 rounded-full border border-orange-700/50 shadow-inner">
            Ruh Hali: {feltAge.status}
          </div>
          <p className="text-base text-white/90 font-medium leading-relaxed">
            "{feltAge.description}"
          </p>
        </div>
      </div>

    </div>
  );
};