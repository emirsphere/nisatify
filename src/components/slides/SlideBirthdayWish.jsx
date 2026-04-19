import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export const SlideBirthdayWish = ({
  birthday = {
    age: 21,
    name: '',
    message:
      'Yeni yaşın sana bol bol kahkaha, güzel anılar, tatlı kaoslar ve hak ettiğin her şeyi getirsin.',
  },
}) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 650);
    const t2 = setTimeout(() => setPhase(2), 1900);
    const t3 = setTimeout(() => setPhase(3), 3100);
    const t4 = setTimeout(() => setPhase(4), 4500);
    const t5 = setTimeout(() => setPhase(5), 5900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  const confetti = [
    { top: '12%', left: '10%', color: 'bg-pink-400', rotate: '-14deg', delay: '0ms' },
    { top: '18%', right: '12%', color: 'bg-yellow-300', rotate: '16deg', delay: '100ms' },
    { top: '30%', left: '6%', color: 'bg-cyan-300', rotate: '28deg', delay: '200ms' },
    { top: '38%', right: '7%', color: 'bg-fuchsia-400', rotate: '-20deg', delay: '300ms' },
    { top: '55%', left: '12%', color: 'bg-orange-300', rotate: '10deg', delay: '400ms' },
    { top: '63%', right: '14%', color: 'bg-lime-300', rotate: '-16deg', delay: '500ms' },
    { top: '78%', left: '28%', color: 'bg-pink-300', rotate: '22deg', delay: '600ms' },
    { top: '82%', right: '30%', color: 'bg-cyan-200', rotate: '-8deg', delay: '700ms' },
    { top: '45%', left: '48%', color: 'bg-yellow-200', rotate: '34deg', delay: '800ms' },
    { top: '24%', right: '36%', color: 'bg-purple-300', rotate: '-30deg', delay: '900ms' },
    { top: '70%', left: '48%', color: 'bg-rose-300', rotate: '18deg', delay: '1000ms' },
    { top: '10%', left: '54%', color: 'bg-emerald-300', rotate: '-22deg', delay: '1100ms' },
  ];

  const sparkles = [
    { top: '16%', left: '18%', delay: '0ms', size: 16 },
    { top: '24%', right: '16%', delay: '250ms', size: 18 },
    { top: '46%', left: '8%', delay: '500ms', size: 15 },
    { top: '50%', right: '9%', delay: '750ms', size: 16 },
    { top: '70%', left: '14%', delay: '1000ms', size: 15 },
    { top: '76%', right: '18%', delay: '1250ms', size: 15 },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07020b] text-white">
      <style>
        {`
          @keyframes rainbowSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
            @keyframes balloonFloat {
  0%, 100% { transform: translateY(0) rotate(var(--rot)); }
  50% { transform: translateY(-16px) rotate(calc(var(--rot) + 4deg)); }
}

          @keyframes burstRing {
            0% { transform: scale(.35); opacity: 0; }
            35% { opacity: .9; }
            100% { transform: scale(1.35); opacity: 0; }
          }

          @keyframes confettiPop {
            0% { transform: translateY(28px) scale(.35) rotate(var(--r)); opacity: 0; }
            45% { opacity: 1; }
            100% { transform: translateY(0px) scale(1) rotate(var(--r)); opacity: 1; }
          }

          @keyframes numberFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-9px) scale(1.025); }
          }

          @keyframes tinyTwinkle {
            0%, 100% { opacity: .25; transform: scale(.8) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.12) rotate(12deg); }
          }

          @keyframes titlePop {
            0% { transform: translateY(20px) scale(.9); opacity: 0; filter: blur(6px); }
            100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
          }

          @keyframes shimmerLine {
            0% { transform: translateX(-120%); opacity: 0; }
            25% { opacity: .8; }
            100% { transform: translateX(220%); opacity: 0; }
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,20,147,0.16),transparent_32%),linear-gradient(180deg,#17051a_0%,#07020b_48%,#040106_100%)]" />

        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-pink-400/18 blur-[130px]" />
        <div className="absolute top-[22%] -right-28 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute bottom-[-18%] left-[12%] h-96 w-96 rounded-full bg-yellow-200/14 blur-[130px]" />

        <div
          className={`absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-[1400ms] ${
            phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background:
              'conic-gradient(from 120deg, rgba(255,20,147,0.24), rgba(253,224,71,0.20), rgba(34,211,238,0.20), rgba(168,85,247,0.22), rgba(255,20,147,0.24))',
            filter: 'blur(28px)',
            animation: phase >= 2 ? 'rainbowSpin 8s linear infinite' : 'none',
          }}
        />
      </div>
      {/* Balloons */}
{[
  { top: '15%', left: '7%', color: 'from-pink-300 to-fuchsia-400', size: 'h-16 w-12', rot: '-10deg', delay: '0ms' },
  { top: '20%', right: '8%', color: 'from-cyan-200 to-blue-400', size: 'h-14 w-11', rot: '9deg', delay: '300ms' },
  { top: '62%', left: '8%', color: 'from-yellow-200 to-orange-300', size: 'h-13 w-10', rot: '7deg', delay: '600ms' },
  { top: '66%', right: '10%', color: 'from-pink-200 to-rose-400', size: 'h-15 w-11', rot: '-8deg', delay: '900ms' }
].map((balloon, index) => (
  <div
    key={index}
    className={`absolute z-20 transition-all duration-1000 ${
      phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
    }`}
    style={{
      top: balloon.top,
      left: balloon.left,
      right: balloon.right,
      '--rot': balloon.rot,
      animation: phase >= 3 ? 'balloonFloat 4.2s ease-in-out infinite' : 'none',
      animationDelay: balloon.delay
    }}
  >
    <div
      className={`${balloon.size} rounded-[999px_999px_850px_850px] bg-gradient-to-br ${balloon.color} shadow-[0_0_24px_rgba(255,255,255,0.18)] relative`}
    >
      <div className="absolute left-3 top-3 h-4 w-2 rounded-full bg-white/45 blur-[1px]" />
      <div className="absolute left-1/2 bottom-[-5px] h-3 w-3 -translate-x-1/2 rotate-45 bg-current opacity-80" />
    </div>

    <div className="mx-auto mt-1 h-14 w-[1px] bg-white/20" />
  </div>
))}

      {/* Big clear age */}
      <div
        className={`absolute inset-x-0 top-[5%] z-10 flex justify-center pointer-events-none transition-all duration-[1300ms] ${
          phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
        }`}
        style={{
          animation: phase >= 1 ? 'numberFloat 4s ease-in-out infinite' : 'none',
        }}
      >
        <span className="text-[12.5rem] leading-none font-black tracking-[-0.09em] text-transparent bg-clip-text bg-gradient-to-b from-white via-pink-100 to-fuchsia-300 drop-shadow-[0_0_36px_rgba(244,114,182,0.22)]">
          {birthday.age}
        </span>
      </div>

      {/* Big age shadow duplicate */}
      <div
        className={`absolute inset-x-0 top-[6%] z-[9] flex justify-center pointer-events-none transition-all duration-[1300ms] ${
          phase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-[12.5rem] leading-none font-black tracking-[-0.09em] text-white/[0.045] blur-[1px]">
          {birthday.age}
        </span>
      </div>

      {/* Burst rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {[0, 220, 440].map((delay, index) => (
          <div
            key={index}
            className={`absolute h-[280px] w-[280px] rounded-full border border-pink-200/16 ${
              phase >= 2 ? '' : 'hidden'
            }`}
            style={{
              animation: phase >= 2 ? `burstRing 1.5s ease-out ${delay}ms 1` : 'none',
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      {confetti.map((item, index) => (
        <div
          key={index}
          className={`absolute z-20 h-3 w-2 rounded-sm ${item.color} transition-opacity duration-300 ${
            phase >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            '--r': item.rotate,
            animation: phase >= 3 ? 'confettiPop 850ms ease-out both' : 'none',
            animationDelay: item.delay,
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((item, index) => (
        <div
          key={index}
          className={`absolute z-20 text-pink-100/55 transition-all duration-1000 ${
            phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            transitionDelay: item.delay,
            animation: phase >= 2 ? 'tinyTwinkle 2.8s ease-in-out infinite' : 'none',
            animationDelay: item.delay,
          }}
        >
          <Sparkles size={item.size} />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center px-6 pt-[150px] pb-8 text-center">
        <div
          className={`transition-all duration-[1100ms] ease-out ${
            phase >= 3
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-8 blur-sm'
          }`}
          style={{
            animation: phase >= 3 ? 'titlePop 900ms ease-out both' : 'none',
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.34em] font-black text-yellow-100/65 mb-3">
            DOĞUM GÜNÜN KUTLU OLSUN
          </p>

          <h2 className="text-[2.45rem] leading-[1.08] py-1 font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-yellow-100 to-cyan-100 max-w-[330px] mx-auto">
            İyi ki doğdun
          </h2>

          {birthday.name && (
            <h3 className="mt-1 text-[2rem] leading-[1.1] py-1 font-black text-pink-200">
              {birthday.name}
            </h3>
          )}
        </div>

        <div
          className={`relative mt-7 max-w-[315px] overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/8 px-5 py-5 backdrop-blur-xl transition-all duration-[1200ms] ${
            phase >= 4
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div
            className={`absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/22 to-transparent skew-x-[-20deg] ${
              phase >= 4 ? '' : 'hidden'
            }`}
            style={{
              animation: phase >= 4 ? 'shimmerLine 3s ease-in-out infinite' : 'none',
            }}
          />

          <p className="relative z-10 text-[1rem] leading-relaxed font-medium text-white/84">
            {birthday.message}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`absolute bottom-8 left-1/2 z-40 -translate-x-1/2 text-center transition-all duration-1000 ${
          phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <p className="text-[10px] font-black uppercase tracking-[0.38em] text-white/24">
          NISATIFY
        </p>
      </div>
    </div>
  );
};