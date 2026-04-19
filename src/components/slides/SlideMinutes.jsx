import React, { useState, useEffect } from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const SlideMinutes = ({ minutes }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);   // intro belirir
    const t2 = setTimeout(() => setPhase(2), 2500);  // intro yukarı çıkar
    const t3 = setTimeout(() => setPhase(3), 3600);  // sayı gelir
    const t4 = setTimeout(() => setPhase(4), 5200);  // açıklama kartı gelir

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#17051f] text-white">
      <style>
        {`
          @keyframes orbitSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes softPulse {
            0%, 100% { opacity: .45; transform: scale(1); }
            50% { opacity: .85; transform: scale(1.08); }
          }

          @keyframes numberPop {
            0% { opacity: 0; transform: translateY(28px) scale(.84); filter: blur(8px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }

          @keyframes textReveal {
            0% { opacity: 0; transform: translateY(20px); filter: blur(6px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
            25% { opacity: .55; }
            100% { transform: translateX(230%) skewX(-18deg); opacity: 0; }
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.24),transparent_34%),linear-gradient(180deg,#36106d_0%,#1b0734_48%,#07020d_100%)]" />

        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/18 blur-[130px] animate-[softPulse_7s_ease-in-out_infinite]" />
        <div className="absolute top-[24%] -right-28 h-96 w-96 rounded-full bg-purple-500/18 blur-[140px] animate-[softPulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-18%] left-[10%] h-96 w-96 rounded-full bg-yellow-300/12 blur-[130px] animate-[softPulse_9s_ease-in-out_infinite]" />
      </div>

      {/* Moving rings behind number */}
      <div
        className={`absolute left-1/2 top-[45%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-[1200ms] ${
          phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      >
        <div className="absolute inset-0 rounded-full border border-yellow-200/10" />
        <div className="absolute inset-[30px] rounded-full border border-white/7" />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 120deg, rgba(253,224,71,.20), rgba(236,72,153,.18), rgba(168,85,247,.18), rgba(253,224,71,.20))',
            filter: 'blur(16px)',
            animation: phase >= 3 ? 'orbitSpin 8s linear infinite' : 'none'
          }}
        />
      </div>

      {/* Intro text */}
      <div
        className={`absolute left-1/2 z-30 w-full max-w-[330px] -translate-x-1/2 px-5 text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          phase === 0
            ? 'top-1/2 -translate-y-1/2 opacity-0 scale-95 blur-sm'
            : phase === 1
            ? 'top-1/2 -translate-y-1/2 opacity-100 scale-100 blur-0'
            : 'top-[8%] -translate-y-0 opacity-85 scale-[0.74] blur-0'
        }`}
      >
        

        <h2 className="text-[2.55rem] leading-[0.92] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-yellow-100">
          bu yıl tam...
        </h2>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 pb-8 text-center">
        <div
          className={`transition-all duration-[1000ms] ease-out ${
            phase >= 3
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-90'
          }`}
          style={{
            animation: phase >= 3 ? 'numberPop 900ms ease-out both' : 'none'
          }}
        >
          <h1 className="text-[5.45rem] leading-none font-black tracking-[-0.06em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-200 drop-shadow-[0_0_28px_rgba(253,224,71,0.35)]">
            {phase >= 3 && <AnimatedCounter end={minutes} duration={2000} />}
          </h1>

          <p className="mt-5 max-w-[330px] text-[1.55rem] leading-tight font-black text-white">
            dakika benim boş yapmamı dinledin.
          </p>
        </div>

        <div
          className={`absolute bottom-[82px] left-1/2 w-[86%] max-w-[340px] -translate-x-1/2 overflow-hidden rounded-[1.7rem] border border-white/12 bg-white/10 px-5 py-5 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition-all duration-1000 ${
            phase >= 4 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div
            className={`absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/18 to-transparent skew-x-[-20deg] ${
              phase >= 4 ? '' : 'hidden'
            }`}
            style={{
              animation: phase >= 4 ? 'shimmer 3s ease-in-out infinite' : 'none'
            }}
          />

          <p className="relative z-10 text-[0.95rem] leading-relaxed font-bold text-purple-50/88">
            Tebrikler! Beni dinleyenler arasında{' '}
            <span className="text-yellow-300 font-black">%0.00000001’lik</span>{' '}
            dilimdesin.
          </p>

          <p className="relative z-10 mt-2 text-[0.78rem] leading-relaxed font-medium text-purple-100/56">
            Çünkü senden başka kimse bu kadar tahammül edemezdi.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.38em] text-white/24">
          NISATIFY
        </p>
      </div>
    </div>
  );
};