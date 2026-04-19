import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export const SlideGladYouExist = ({
  message = {
    title: 'Şaka maka...',
    main: 'iyi ki varsın.',
    lines: [
      'İyi ki tanışmışız.',
      'İyi ki konuşmuşuz.',
      'İyi ki bu kadar saçmalayıp bu kadar gülebilmişiz.'
    ],
    footer: 'Yeni yaşında da bol bol gül, parılda ve biraz da kaos çıkar.'
  }
}) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => setPhase(3), 3600);
    const t4 = setTimeout(() => setPhase(4), 5000);
    const t5 = setTimeout(() => setPhase(5), 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#08060b] text-white">
      <style>
        {`
          @keyframes slowBreath {
            0%, 100% { opacity: .32; transform: scale(1); }
            50% { opacity: .58; transform: scale(1.06); }
          }

          @keyframes softHeart {
            0%, 100% { transform: scale(1); opacity: .72; }
            50% { transform: scale(1.08); opacity: 1; }
          }
        `}
      </style>

      {/* Soft plain background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#110914_0%,#08060b_52%,#040307_100%)]" />

        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-200/10 blur-[120px] animate-[slowBreath_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-100/7 blur-[140px] animate-[slowBreath_10s_ease-in-out_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-7 text-center">
        <div className="max-w-[330px]">
          <p
            className={`text-[1.45rem] leading-snug font-bold text-white/68 transition-all duration-[1300ms] ease-out ${
              phase >= 1
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            {message.title}
          </p>

          <h1
            className={`mt-5 text-[3.35rem] leading-[1.08] py-1 font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-yellow-100 to-white transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              phase >= 2
                ? 'opacity-100 translate-y-0 scale-100 blur-0'
                : 'opacity-0 translate-y-8 scale-95 blur-sm'
            }`}
          >
            {message.main}
          </h1>

          <div className="mt-9 flex flex-col gap-3">
            {message.lines.map((line, index) => (
              <p
                key={line + index}
                className={`text-[1.05rem] leading-relaxed font-medium text-white/76 transition-all duration-[1100ms] ease-out ${
                  phase >= 3
                    ? 'opacity-100 translate-y-0 blur-0'
                    : 'opacity-0 translate-y-6 blur-sm'
                }`}
                style={{
                  transitionDelay: `${index * 350}ms`
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <div
            className={`mx-auto mt-9 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-pink-100/60 to-transparent transition-all duration-[1200ms] ${
              phase >= 4 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'
            }`}
          />

          <p
            className={`mt-7 text-[0.95rem] leading-relaxed font-semibold text-pink-100/70 transition-all duration-[1200ms] ease-out ${
              phase >= 5
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-6 blur-sm'
            }`}
          >
            {message.footer}
          </p>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-pink-100/32 transition-all duration-1000 ${
            phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <Heart
            size={14}
            className="text-pink-200/55"
            style={{
              animation: phase >= 5 ? 'softHeart 2s ease-in-out infinite' : 'none'
            }}
          />
          <span className="text-[10px] uppercase tracking-[0.3em] font-black">
            nisatify
          </span>
          <Heart
            size={14}
            className="text-pink-200/55"
            style={{
              animation: phase >= 5 ? 'softHeart 2s ease-in-out infinite' : 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
};