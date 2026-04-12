import React, { useState, useEffect } from 'react';

export const SlideChapterStart = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0 -> 1: Devasa "20" rakamı ekrana hızlıca çarpıp oturur (Spotify Scale-down)
    const t1 = setTimeout(() => setPhase(1), 300);
    // 1 -> 2: Alt yazılar (Senin yılın vb.) yavaşça yukarı kayarak belirir
    const t2 = setTimeout(() => setPhase(2), 2000);
    
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full p-8 bg-[#121212] text-white overflow-hidden relative">
      
      {/* VIBRANT FLUID BACKGROUND (Spotify Görsel Stili) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        {/* Neon Yeşil/Sarı Dalga */}
        <div className="absolute -top-[10%] -left-[20%] w-[140%] h-[70%] bg-gradient-to-br from-green-400 to-yellow-300 rounded-full mix-blend-screen filter blur-[100px] animate-[pulse_6s_ease-in-out_infinite] opacity-90"></div>
        
        {/* Canlı Pembe/Mor Dalga */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[120%] h-[80%] bg-gradient-to-tl from-pink-500 to-purple-600 rounded-full mix-blend-screen filter blur-[120px] animate-[pulse_8s_ease-in-out_infinite] opacity-90 delay-700"></div>
        
        {/* Mavi Merkez Parlaması */}
        <div className="absolute top-[20%] left-[10%] w-[80%] h-[60%] bg-blue-500 rounded-full mix-blend-screen filter blur-[130px] animate-[pulse_7s_ease-in-out_infinite] opacity-60 delay-300"></div>
        
        {/* Okunabilirliği artırmak için hafif siyah overlay */}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      </div>

      {/* DEVASA "20" ANİMASYONU */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.17,0.84,0.44,1)] transform
        ${phase === 0 ? 'scale-[5] opacity-0 blur-xl' : 'scale-100 opacity-100 blur-0'}`}>
        
        {/* Kalın ve krem tonlarında (kırık beyaz) font stili */}
        <span className="text-[16rem] sm:text-[22rem] font-black text-[#FFFDF2] tracking-tighter leading-none select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
          20
        </span>
      </div>

      {/* ÖN PLAN METİNLERİ */}
      <div className="absolute bottom-20 z-20 flex flex-col items-center text-center px-4 w-full">
        <h1 className={`text-4xl sm:text-5xl font-black mb-3 leading-tight text-white drop-shadow-xl transition-all duration-1000 transform
          ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Senin Yılın.
        </h1>
        
      </div>

    </div>
  );
};