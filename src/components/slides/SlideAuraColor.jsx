import React, { useEffect, useState } from 'react';

export const SlideAuraColor = ({
  aura = {
    label: 'Bu Yılki Aura Rengin',
    colorName: 'Hot Pink Chaos',
    description:
      'Dışarıdan tatlı, içeride yüksek enerji. Ortama bir anda renk, hareket ve minik kaos katıyorsun.',
  },
}) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);   // intro fade-in
    const t2 = setTimeout(() => setPhase(2), 2300);  // intro yukarı çık
    const t3 = setTimeout(() => setPhase(3), 3400);  // aura build-up
    const t4 = setTimeout(() => setPhase(4), 4700);  // main title
    const t5 = setTimeout(() => setPhase(5), 5600);  // description

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <div className="relative h-full overflow-hidden bg-[#05040a] text-white">
      {/* Base darkness + subtle tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,120,0.08),transparent_30%),linear-gradient(180deg,#120312_0%,#07070c_45%,#040409_100%)]" />

      {/* Intro text */}
      <div
        className={`absolute left-1/2 z-30 w-full max-w-[320px] -translate-x-1/2 px-6 text-center transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          phase < 2
            ? 'top-1/2 -translate-y-1/2 opacity-100 scale-100'
            : 'top-[8%] -translate-y-0 opacity-70 scale-75'
        }`}
      >
        <p className="text-3xl sm:text-4xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-fuchsia-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]">
          Ama bu yılı tek bir renkle anlatsaydık...
        </p>
      </div>

      {/* Background burst system */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {/* Outer ambient glow */}
        <div
          className={`absolute rounded-full transition-all duration-[1800ms] ease-out
          ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{
            width: 420,
            height: 420,
            background:
              'radial-gradient(circle, rgba(255,20,147,0.18) 0%, rgba(255,20,147,0.10) 30%, rgba(255,20,147,0.00) 72%)',
            filter: 'blur(12px)',
          }}
        />

        {/* Hot pink main blob */}
        <div
          className={`absolute rounded-full transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-25'}`}
          style={{
            width: 260,
            height: 260,
            background:
              'radial-gradient(circle at 35% 35%, rgba(255,170,220,0.95) 0%, rgba(255,90,180,0.95) 28%, rgba(255,20,147,0.92) 52%, rgba(195,20,110,0.82) 72%, rgba(255,20,147,0.00) 100%)',
            filter: 'blur(6px)',
            boxShadow:
              phase >= 4
                ? '0 0 70px rgba(255,20,147,0.55), 0 0 140px rgba(255,20,147,0.30)'
                : '0 0 30px rgba(255,20,147,0.25)',
          }}
        />

        {/* Magenta side bloom */}
        <div
          className={`absolute rounded-full transition-all duration-[1700ms] ease-out
          ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{
            width: 210,
            height: 210,
            transform: `translate(-110px, 40px) ${phase >= 4 ? 'scale(1.15)' : 'scale(1)'}`,
            background:
              'radial-gradient(circle, rgba(255,0,200,0.55) 0%, rgba(255,0,200,0.28) 45%, rgba(255,0,200,0.00) 80%)',
            filter: 'blur(14px)',
          }}
        />

        {/* Violet bloom */}
        <div
          className={`absolute rounded-full transition-all duration-[1900ms] ease-out
          ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{
            width: 190,
            height: 190,
            transform: `translate(115px, -30px) ${phase >= 4 ? 'scale(1.18)' : 'scale(1)'}`,
            background:
              'radial-gradient(circle, rgba(180,70,255,0.45) 0%, rgba(180,70,255,0.18) 48%, rgba(180,70,255,0.00) 80%)',
            filter: 'blur(16px)',
          }}
        />

        {/* Sparkle accent */}
        <div
          className={`absolute rounded-full transition-all duration-[1600ms] ease-out
          ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{
            width: 130,
            height: 130,
            transform: `translate(35px, 110px) ${phase >= 4 ? 'scale(1.25)' : 'scale(1)'}`,
            background:
              'radial-gradient(circle, rgba(255,240,250,0.55) 0%, rgba(255,180,220,0.18) 42%, rgba(255,180,220,0.00) 78%)',
            filter: 'blur(10px)',
          }}
        />

        {/* Final burst ring */}
        <div
          className={`absolute rounded-full border transition-all duration-[1200ms] ease-out
          ${phase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{
            width: 290,
            height: 290,
            borderColor: 'rgba(255,110,190,0.20)',
            boxShadow:
              '0 0 50px rgba(255,20,147,0.18), inset 0 0 30px rgba(255,255,255,0.05)',
          }}
        />

        {/* Final hot pink flash */}
        <div
          className={`absolute rounded-full transition-all duration-[900ms] ease-out
          ${phase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
          style={{
            width: 360,
            height: 360,
            background:
              'radial-gradient(circle, rgba(255,20,147,0.18) 0%, rgba(255,20,147,0.10) 36%, rgba(255,20,147,0.00) 72%)',
            filter: 'blur(10px)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 pt-28 pb-8 text-center">
        <div
          className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${phase >= 4 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/65 font-bold mb-3">
            {aura.label}
          </p>

          <h2
            className="text-5xl sm:text-6xl font-black leading-[0.92] px-2 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #ffd1ec 0%, #ff9fd5 18%, #ff5bb8 42%, #ff1493 68%, #ff4fc3 85%, #ffc1e8 100%)',
              textShadow: '0 0 24px rgba(255,20,147,0.14)',
            }}
          >
            {aura.colorName}
          </h2>
        </div>

        <div
          className={`mt-8 transition-all duration-[1200ms]
          ${phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm sm:text-base text-white/82 font-medium leading-relaxed max-w-[295px] mx-auto">
            {aura.description}
          </p>
        </div>
      </div>
    </div>
  );
};