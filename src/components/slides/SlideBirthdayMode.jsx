import React, { useEffect, useState } from 'react';
import { Gift, PartyPopper, Sparkles } from 'lucide-react';

export const SlideBirthdayMode = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);   // "Ve şimdi..." yavaşça gelir
    const t2 = setTimeout(() => setPhase(2), 2600);  // "Ve şimdi..." yukarı çıkar
    const t3 = setTimeout(() => setPhase(3), 3800);  // toggle OFF görünür
    const t4 = setTimeout(() => setPhase(4), 5600);  // toggle ON olur
    const t5 = setTimeout(() => setPhase(5), 6800);  // Birthday Mode ON yazısı gelir
    const t6 = setTimeout(() => setPhase(6), 7900);  // alt yazı gelir

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  const confetti = [
    { top: '17%', left: '12%', color: 'bg-pink-400', rotate: '-12deg', delay: '0ms' },
    { top: '22%', right: '13%', color: 'bg-yellow-300', rotate: '16deg', delay: '120ms' },
    { top: '35%', left: '7%', color: 'bg-cyan-300', rotate: '28deg', delay: '240ms' },
    { top: '45%', right: '8%', color: 'bg-fuchsia-400', rotate: '-20deg', delay: '360ms' },
    { top: '61%', left: '15%', color: 'bg-orange-300', rotate: '10deg', delay: '480ms' },
    { top: '70%', right: '16%', color: 'bg-lime-300', rotate: '-16deg', delay: '600ms' },
    { top: '80%', left: '36%', color: 'bg-pink-300', rotate: '22deg', delay: '720ms' },
    { top: '12%', left: '48%', color: 'bg-cyan-200', rotate: '-8deg', delay: '840ms' },
    { top: '55%', left: '48%', color: 'bg-yellow-200', rotate: '34deg', delay: '960ms' },
    { top: '30%', right: '34%', color: 'bg-purple-300', rotate: '-30deg', delay: '1080ms' }
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#070312] text-white">
      <style>
        {`
          @keyframes birthdaySpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
            @keyframes birthdayBeam {
  0%, 100% { opacity: .55; transform: translate(-50%, -50%) rotate(-18deg) scale(1); }
  50% { opacity: .9; transform: translate(-50%, -50%) rotate(12deg) scale(1.06); }
}

          @keyframes confettiPop {
            0% { transform: translateY(24px) scale(.4) rotate(var(--r)); opacity: 0; }
            45% { opacity: 1; }
            100% { transform: translateY(0px) scale(1) rotate(var(--r)); opacity: 1; }
          }

          @keyframes switchGlow {
            0%, 100% { box-shadow: 0 0 26px rgba(255, 20, 147, .24), inset 0 0 16px rgba(255,255,255,.07); }
            50% { box-shadow: 0 0 54px rgba(255, 20, 147, .55), inset 0 0 28px rgba(255,255,255,.12); }
          }

          @keyframes switchGlowOn {
            0%, 100% { box-shadow: 0 0 38px rgba(253, 224, 71, .35), 0 0 80px rgba(255, 20, 147, .28), inset 0 0 20px rgba(255,255,255,.10); }
            50% { box-shadow: 0 0 70px rgba(253, 224, 71, .60), 0 0 110px rgba(255, 20, 147, .45), inset 0 0 30px rgba(255,255,255,.14); }
          }

          @keyframes giftFloat {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-7px) scale(1.03); }
          }

          @keyframes titlePop {
            0% { transform: translateY(22px) scale(.86); opacity: 0; filter: blur(6px); }
            100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
          }
        `}
      </style>

      {/* Background */}
      {/* Background */}
<div className="absolute inset-0">
  <div className="absolute inset-0 bg-[linear-gradient(180deg,#030712_0%,#111827_46%,#020617_100%)]" />

  {/* cyber gradient glow */}
  <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-[130px]" />
  <div className="absolute bottom-[-22%] left-[-25%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/14 blur-[130px]" />
  <div className="absolute bottom-[-18%] right-[-28%] h-[420px] w-[420px] rounded-full bg-blue-500/12 blur-[130px]" />

  {/* diagonal neon beams */}
  <div className="absolute -left-28 top-[18%] h-[520px] w-[120px] rotate-[26deg] bg-gradient-to-b from-cyan-300/20 via-cyan-400/7 to-transparent blur-2xl" />
  <div className="absolute -right-24 top-[14%] h-[560px] w-[120px] rotate-[-24deg] bg-gradient-to-b from-fuchsia-300/20 via-pink-400/7 to-transparent blur-2xl" />

  {/* subtle grid bottom */}
  <div
    className="absolute inset-x-0 bottom-0 h-[42%] opacity-35"
    style={{
      backgroundImage:
        'linear-gradient(rgba(34,211,238,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,.14) 1px, transparent 1px)',
      backgroundSize: '38px 38px',
      maskImage: 'linear-gradient(to top, black 0%, transparent 88%)'
    }}
  />

  {/* big faint system text */}
  

  {/* ON glow after toggle */}
  <div
  className={`absolute left-1/2 top-[54%] h-[520px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] transition-all duration-[1400ms] ${
    phase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
  }`}
  style={{
    
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(236,72,153,0.22) 32%, rgba(168,85,247,0.18) 58%, rgba(34,211,238,0.14) 100%)',
    filter: 'blur(34px)',
    transform: 'translate(-50%, -50%) rotate(-18deg)',
    animation: phase >= 4 ? 'birthdayBeam 5s ease-in-out infinite' : 'none'
    
  }}
/>
</div>

      {/* Confetti only after ON */}
      {confetti.map((item, index) => (
        <div
          key={index}
          className={`absolute z-20 h-3 w-2 rounded-sm ${item.color} transition-opacity duration-300 ${
            phase >= 4 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            '--r': item.rotate,
            animation: phase >= 4 ? 'confettiPop 800ms ease-out both' : 'none',
            animationDelay: item.delay
          }}
        />
      ))}

      {/* Intro */}
      <div
        className={`absolute left-1/2 z-40 w-full max-w-[330px] -translate-x-1/2 px-4 text-center transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          phase === 0
            ? 'top-1/2 -translate-y-1/2 opacity-0 scale-95 blur-sm'
            : phase === 1
            ? 'top-1/2 -translate-y-1/2 opacity-100 scale-100 blur-0'
            : 'top-[8%] -translate-y-0 opacity-90 scale-[0.76] blur-0'
        }`}
      >
        <p className="text-yellow-200 font-black uppercase tracking-[0.28em] text-[10px] mb-2">
          FİNAL
        </p>

        <h2 className="text-[2.5rem] leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-yellow-100">
          Ve şimdi...
        </h2>
      </div>

      {/* Main layout */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center px-5 pt-24 pb-8 text-center">
        {/* Gift icon appears with toggle OFF */}
        <div
          className={`mb-7 transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            phase >= 3
              ? 'opacity-100 translate-y-0 scale-100 rotate-0'
              : 'opacity-0 translate-y-10 scale-50 -rotate-12'
          }`}
          style={{
            animation: phase >= 3 ? 'giftFloat 3s ease-in-out infinite' : 'none'
          }}
        >
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_0_45px_rgba(255,20,147,0.22)]">
            <div className="absolute -inset-3 rounded-[2.3rem] bg-gradient-to-br from-pink-500/20 via-yellow-300/12 to-cyan-300/16 blur-xl" />
            <Gift size={44} className="relative z-10 text-pink-100" />
          </div>
        </div>

        {/* Toggle appears OFF first, then turns ON */}
        <div
          className={`relative mb-8 h-[66px] w-[180px] rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur-2xl transition-all duration-[1000ms] ${
            phase >= 3 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'
          }`}
          style={{
            animation:
              phase >= 4
                ? 'switchGlowOn 2.2s ease-in-out infinite'
                : phase >= 3
                  ? 'switchGlow 2.2s ease-in-out infinite'
                  : 'none'
          }}
        >
          <div
            className={`absolute inset-0 rounded-full transition-all duration-700 ${
              phase >= 4
                ? 'bg-gradient-to-r from-pink-500/45 via-fuchsia-400/35 to-yellow-300/35'
                : 'bg-white/8'
            }`}
          />

          <div
            className={`relative z-10 flex h-full w-full items-center rounded-full transition-all duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              phase >= 4 ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-full shadow-[0_0_30px_rgba(255,255,255,0.35)] transition-all duration-700 ${
                phase >= 4 ? 'bg-white text-pink-500 rotate-12' : 'bg-white/85 text-white/60'
              }`}
            >
              <PartyPopper size={23} />
            </div>
          </div>

          <span
            className={`absolute left-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-[0.2em] transition-opacity duration-500 ${
              phase >= 4 ? 'opacity-0 text-white/0' : 'opacity-100 text-white/55'
            }`}
          >
            off
          </span>

          <span
            className={`absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-[0.2em] transition-opacity duration-500 ${
              phase >= 4 ? 'opacity-100 text-yellow-100' : 'opacity-0 text-yellow-100'
            }`}
          >
            on
          </span>
        </div>

        {/* Title appears only after ON */}
        <div
          className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase >= 5 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
          }`}
          style={{
            animation: phase >= 5 ? 'titlePop 900ms ease-out both' : 'none'
          }}
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.35em] font-black text-pink-200/70">
            Nisatify
          </p>

          <h1 className="text-[3.4rem] leading-[0.88] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-yellow-100 to-cyan-100 drop-shadow-[0_0_22px_rgba(255,20,147,0.12)]">
            Birthday Mode
          </h1>

          <h2 className="mt-1 text-[4.4rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-fuchsia-300">
            ON
          </h2>
        </div>

        {/* Bottom text appears last */}
        <div
          className={`mt-8 max-w-[300px] transition-all duration-1000 ${
            phase >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[1.05rem] leading-snug font-bold text-white/82">
            Çünkü bugün sıradan bir gün değil.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 text-pink-100/35">
            <Sparkles size={15} />
            <span className="text-[10px] font-black uppercase tracking-[0.34em]">
              Kutlama günü açıldı
            </span>
            <Sparkles size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};