import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export const SlidePeakMoment = ({
  peakMoment = {
    title: 'Tam Bizlik Kaos',
    description:
      'Dışarıdan biri görse hiçbir şey anlamazdı ama bizim için yılın en komik, en tatlı ve en ikonik anlarından biriydi.',
  },
}) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);   // intro görünür
    const t2 = setTimeout(() => setPhase(2), 2200);  // intro yukarı çıkar
    const t3 = setTimeout(() => setPhase(3), 3400);  // halo + title gelir
    const t4 = setTimeout(() => setPhase(4), 4700);  // description gelir

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#09050d] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.10),transparent_28%),linear-gradient(180deg,#160916_0%,#0c0610_45%,#050409_100%)]" />

        <div
          className={`absolute -top-24 left-[-12%] w-80 h-80 rounded-full bg-fuchsia-500/20 blur-[120px] transition-all duration-[1500ms] ${
            phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
        <div
          className={`absolute top-[18%] right-[-15%] w-96 h-96 rounded-full bg-pink-500/16 blur-[130px] transition-all duration-[1600ms] ${
            phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
        <div
          className={`absolute bottom-[-15%] left-[18%] w-80 h-80 rounded-full bg-violet-500/14 blur-[120px] transition-all duration-[1600ms] ${
            phase >= 3 ? 'opacity-100 scale-110' : 'opacity-0 scale-50'
          }`}
        />
      </div>

      {/* floating sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[
          { top: '22%', left: '16%', delay: '0ms' },
          { top: '28%', right: '14%', delay: '300ms' },
          { top: '58%', left: '12%', delay: '700ms' },
          { top: '66%', right: '18%', delay: '1000ms' },
          { top: '42%', left: '78%', delay: '500ms' },
        ].map((item, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-1000 ${
              phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={item}
          >
            <div
              className="text-pink-200/50 animate-pulse"
              style={{ animationDelay: item.delay }}
            >
              <Sparkles size={16} strokeWidth={2} />
            </div>
          </div>
        ))}
      </div>

      {/* Main layout */}
      <div className="relative z-10 h-full flex flex-col px-5 pt-6 pb-6">
        {/* Intro zone */}
        <div className="h-[145px] relative flex items-center justify-center">
          <div
  className={`absolute left-1/2 w-full max-w-[320px] -translate-x-1/2 px-3 text-center transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
  ${
    phase === 0
      ? 'top-1/2 -translate-y-1/2 opacity-0 scale-95'
      : phase === 1
      ? 'top-1/2 -translate-y-1/2 opacity-100 scale-100'
      : 'top-2 -translate-y-0 opacity-80 scale-[0.74]'
  }`}
>
            <p className="text-pink-300 font-black uppercase tracking-[0.24em] text-[10px] mb-2">
              En İyi An
            </p>

            <h2 className="text-[2rem] leading-[0.92] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-fuchsia-300">
              Ama yılın tek bir anı seçilecek olsaydı...
            </h2>
          </div>
        </div>

        {/* Hero visual zone */}
        <div className="h-[360px] relative flex items-center justify-center">
          {/* halo system */}
          <div
            className={`absolute transition-all duration-[1400ms] ${
              phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div className="relative w-[290px] h-[290px]">
              <div className="absolute inset-0 rounded-full border border-pink-300/10" />
              <div className="absolute inset-[22px] rounded-full border border-fuchsia-300/10" />
              <div className="absolute inset-[46px] rounded-full border border-white/6" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,130,200,0.12)_0%,rgba(255,130,200,0.04)_38%,transparent_72%)] blur-md" />
            </div>
          </div>

          {/* center content */}
          <div
            className={`relative z-10 w-full transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              phase >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
            }`}
          >
            <div className="text-center">
              

              <h1 className="text-[3rem] sm:text-[3.4rem] leading-[0.9] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-fuchsia-300 to-rose-300 max-w-[290px] mx-auto break-words px-2 drop-shadow-[0_0_20px_rgba(244,114,182,0.18)]">
                {peakMoment.title}
              </h1>

              <div className="mt-4 flex justify-center">
                <div className="h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-pink-300/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom description zone */}
        <div
          className={`flex-1 flex flex-col justify-end transition-all duration-1000 ${
            phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="px-3">
            <p className="text-[15px] text-white/82 font-medium leading-relaxed text-center max-w-[300px] mx-auto">
              {peakMoment.description}
            </p>
          </div>

          <div className="pt-5 text-center text-pink-300/22 text-[10px] font-black uppercase tracking-[0.34em]">
            nisatify
          </div>
        </div>
      </div>
    </div>
  );
};