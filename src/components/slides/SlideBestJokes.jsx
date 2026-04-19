import React, { useState, useEffect } from 'react';

export const SlideBestJokes = ({ jokes = [] }) => {
  const [phase, setPhase] = useState(0);

  const defaultJokes = [
    { context: '1', quote: 'puahaha nice babos' },
    { context: '2', quote: 'Gece konuşurken zamanda seyahat etmemiz' },
    { context: '3', quote: 'autotunelu tamam da kanka sesi' },
    { context: '4', quote: 'kyk yurdu mesajları' },
    { context: '5', quote: 'iğrenç sticker eserlerin' }
  ];

  const safeJokes = Array.isArray(jokes) && jokes.length > 0 ? jokes.slice(0, 5) : defaultJokes;

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 650);   // intro merkezde belirir
    const t2 = setTimeout(() => setPhase(2), 2400);  // intro yukarı çıkar
    const t3 = setTimeout(() => setPhase(3), 3500);  // kartlar gelir
    const t4 = setTimeout(() => setPhase(4), 5200);  // footer note gelir

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#070403] text-white">
      <style>
        {`
          @keyframes softPulse {
            0%, 100% { opacity: .42; transform: scale(1); }
            50% { opacity: .82; transform: scale(1.08); }
          }

          @keyframes orbitSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes cardPop {
            0% { opacity: 0; transform: translateY(26px) scale(.94); filter: blur(7px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
            25% { opacity: .45; }
            100% { transform: translateX(230%) skewX(-18deg); opacity: 0; }
          }

          @keyframes quoteFloat {
            0%, 100% { transform: translateY(0px) rotate(-6deg); }
            50% { transform: translateY(-7px) rotate(5deg); }
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.15),transparent_34%),linear-gradient(180deg,#231406_0%,#0b0705_52%,#030202_100%)]" />

        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-500/18 blur-[130px] animate-[softPulse_8s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] -right-28 h-96 w-96 rounded-full bg-red-500/13 blur-[140px] animate-[softPulse_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-18%] left-[10%] h-96 w-96 rounded-full bg-yellow-300/10 blur-[130px] animate-[softPulse_10s_ease-in-out_infinite]" />
      </div>

      

      {/* Rotating glow */}
      <div
        className={`absolute left-1/2 top-[43%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-[1400ms] ${
          phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 120deg, rgba(251,191,36,.16), rgba(239,68,68,.13), rgba(244,114,182,.12), rgba(251,191,36,.16))',
            filter: 'blur(22px)',
            animation: phase >= 3 ? 'orbitSlow 9s linear infinite' : 'none'
          }}
        />
      </div>

      {/* Intro */}
      <div
        className={`absolute left-1/2 z-30 w-full max-w-[350px] -translate-x-1/2 px-5 text-center transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          phase === 0
            ? 'top-1/2 -translate-y-1/2 opacity-0 scale-95 blur-sm'
            : phase === 1
            ? 'top-1/2 -translate-y-1/2 opacity-100 scale-100 blur-0'
            : 'top-[6.5%] -translate-y-0 opacity-90 scale-[0.74] blur-0'
        }`}
      >
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.32em] text-amber-100/55">
          Kabul edelim
        </p>

        <h2 className="text-[2.25rem] leading-[0.92] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-amber-300">
          bu yıl gerçekten komiktin...
        </h2>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex h-full flex-col px-5 pt-[135px] pb-[74px]">
        <div
          className={`text-center transition-all duration-1000 ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="mx-auto mt-2 max-w-[340px] text-[2rem] leading-[1.2] font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-200">
            İşte bu yıl en çok güldüklerimiz
          </h1>
        </div>

        {/* Joke cards */}
        <div className="mt-6 flex flex-col gap-3">
          {safeJokes.map((joke, index) => (
            <div
              key={joke.context + joke.quote + index}
              className={`relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/7 px-4 py-4 backdrop-blur-xl shadow-[0_12px_26px_rgba(0,0,0,0.22)] transition-all duration-700 ${
                phase >= 3
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-7 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 170}ms`,
                animation: phase >= 3 ? 'cardPop 800ms ease-out both' : 'none',
                animationDelay: `${index * 170}ms`
              }}
            >
              <div
                className={`absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] ${
                  phase >= 3 ? '' : 'hidden'
                }`}
                style={{
                  animation: phase >= 3 ? 'shimmer 3.6s ease-in-out infinite' : 'none',
                  animationDelay: `${index * 200}ms`
                }}
              />

              <span
                className="absolute right-4 top-2 text-[3rem] leading-none font-black text-amber-300/10"
                style={{ animation: 'quoteFloat 4s ease-in-out infinite' }}
              >
                ”
              </span>

              <div className="relative z-10 flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-200/15 bg-amber-300/10">
                  <span className="text-[0.8rem] font-black text-amber-200">
                    {joke.context}
                  </span>
                </div>

                <p className="pr-4 text-[1rem] leading-snug font-semibold text-white/86">
                  “{joke.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-5 text-center transition-all duration-1000 ${
            phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="mx-auto max-w-[300px] text-[0.78rem] font-semibold leading-relaxed text-amber-100/42">
            Arşivden seçildi. Travmalar dahil değildir.
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