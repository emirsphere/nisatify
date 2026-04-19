import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export const SlideSoftEnding = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 2100);
    const t3 = setTimeout(() => setPhase(3), 3800);
    const t4 = setTimeout(() => setPhase(4), 5600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#08050d] text-white">
      <style>
        {`
          @keyframes softFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-10px) scale(1.03); }
          }

          @keyframes slowGlow {
            0%, 100% { opacity: .45; transform: scale(1); }
            50% { opacity: .9; transform: scale(1.08); }
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,207,232,0.12),transparent_34%),linear-gradient(180deg,#15091a_0%,#08050d_50%,#040307_100%)]" />

        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-pink-300/16 blur-[120px] animate-[slowGlow_7s_ease-in-out_infinite]" />
        <div className="absolute top-[28%] -right-24 h-96 w-96 rounded-full bg-fuchsia-400/14 blur-[130px] animate-[slowGlow_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-18%] left-[10%] h-96 w-96 rounded-full bg-yellow-200/10 blur-[130px] animate-[slowGlow_9s_ease-in-out_infinite]" />
      </div>

      {/* Soft sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: '18%', left: '16%', delay: '0ms' },
          { top: '26%', right: '14%', delay: '500ms' },
          { top: '63%', left: '12%', delay: '900ms' },
          { top: '72%', right: '18%', delay: '1200ms' },
          { top: '44%', right: '10%', delay: '300ms' }
        ].map((item, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ${
              phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              ...item,
              transitionDelay: item.delay,
              animation: 'softFloat 4s ease-in-out infinite',
              animationDelay: item.delay
            }}
          >
            <Sparkles size={16} className="text-pink-100/45" />
          </div>
        ))}
      </div>

      {/* Main text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-7 text-center">
        <div className="max-w-[330px]">
          <p
            className={`text-[1.8rem] leading-[1.1] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-yellow-100 transition-all duration-[1300ms] ease-out ${
              phase >= 1
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            20. yaşın bizim için özetlemek gerekirse böyleydi.
          </p>

          <p
            className={`mt-8 text-[1.35rem] leading-snug font-bold text-white/82 transition-all duration-[1300ms] ease-out ${
              phase >= 2
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            Tabii senin gibi dolu dolu birini birkaç dakikada özetlemek çok zor olsa da...
          </p>

          <p
            className={`mt-8 text-[2.7rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-fuchsia-200 to-yellow-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              phase >= 3
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-90'
            }`}
          >
            denedik.
          </p>

          <div
            className={`mx-auto mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-pink-200/80 to-transparent transition-all duration-[1200ms] ${
              phase >= 4 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'
            }`}
          />
        </div>
      </div>

      {/* Footer hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.34em] font-black text-pink-100/25 transition-opacity duration-1000 ${
          phase >= 4 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        nisatify
      </div>
    </div>
  );
};