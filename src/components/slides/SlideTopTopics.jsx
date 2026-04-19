import React, { useState, useEffect } from 'react';
import { Flame, Eye } from 'lucide-react';

export const SlideTopTopics = ({ topics = [] }) => {
  const [phase, setPhase] = useState(0);

  // Veri listesini alıp başrolü ve diğerlerini ayırıyoruz
  const safeTopics = Array.isArray(topics) ? topics : [];
  const mainTopic = safeTopics[0] || { name: "...", count: 0 };
  const others = safeTopics.slice(1, 4);

  useEffect(() => {
    // Kademeli merak uyandırma geçişleri
    const t1 = setTimeout(() => setPhase(1), 600);   // Üst başlıklar
    const t2 = setTimeout(() => setPhase(2), 2200);  // Ana dedikodu konusu
    const t3 = setTimeout(() => setPhase(3), 4000);  // Diğer çekiştirilenler
    
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="relative h-full w-full bg-[#1A0510] text-white overflow-hidden flex flex-col items-center justify-center px-6">
      
      {/* ARKA PLAN EFEKTLERİ: Dedikodu Ateşi (Kırmızı/Mor ışık hüzmeleri) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] right-[-10%] w-72 h-72 bg-rose-600/20 rounded-full blur-[100px] transition-opacity duration-1000 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[120px] transition-opacity duration-1000 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* İÇERİK KATMANI */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* ÜST BAŞLIK */}
        <div className="text-center mb-10">
          <div className="overflow-hidden">
            <h3 className={`text-rose-400 font-black uppercase tracking-[0.2em] text-sm mb-2 transition-all duration-700 ${phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              Dedikodu Köşesi
            </h3>
          </div>
          <div className="overflow-hidden">
            <h2 className={`text-2xl sm:text-3xl font-bold leading-tight transition-all duration-700 delay-300 ${phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              Bu yıl dedikodu kazanını<br/>en çok kimler için kaynattık?
            </h2>
          </div>
        </div>

        {/* ANA KONU (Şampiyon) */}
        <div className={`w-full mb-8 transition-all duration-1000 ease-out transform ${phase >= 2 ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-rose-500/20 to-fuchsia-500/10 backdrop-blur-xl border border-rose-500/20 rounded-[2rem] p-8 shadow-[0_0_40px_rgba(225,29,72,0.15)] relative overflow-hidden group">
            
            {/* Arka plan dev ikon efekti */}
            <div className="absolute -right-4 -top-4 opacity-10 text-rose-500 transform group-hover:scale-110 transition-transform duration-500">
              <Flame size={140} />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400 border border-rose-500/30">
                <Eye size={20} className="animate-pulse" />
              </div>
              <span className="text-xs font-black tracking-widest uppercase opacity-80 text-rose-300">Yılın Taşlananı</span>
            </div>

            <h1 className="text-4xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-rose-400">
              {mainTopic.name}
            </h1>
            <p className="text-rose-200/70 font-medium text-sm mt-3">
              Tam <span className="text-white font-bold text-lg">{mainTopic.count}</span> kez bu kişinin kritiği yapıldı.
            </p>
          </div>
        </div>

        {/* DİĞER KONULAR (Runner-ups) */}
        <div className="w-full space-y-3">
          {others.length > 0 && (
            <div className={`text-xs uppercase tracking-widest text-fuchsia-400/80 font-bold mb-2 ml-2 transition-opacity duration-700 delay-700 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              Diğer Taşlananlar
            </div>
          )}
          
          {others.map((topic, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between bg-white/5 hover:bg-rose-500/10 backdrop-blur-md border border-white/5 rounded-2xl px-6 py-4 transition-all duration-700 transform
                ${phase >= 3 ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="text-rose-500/40 font-black italic text-lg">#{index + 2}</span>
                <span className="font-bold text-lg text-white/90">{topic.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-rose-300/70 tracking-tighter">{topic.count} kez</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ALT NOT */}
      <div className={`absolute bottom-8 text-rose-500/30 text-[10px] font-black uppercase tracking-[0.4em] transition-opacity duration-1000 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
        Nisatify
      </div>

    </div>
  );
};