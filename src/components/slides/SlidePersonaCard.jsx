import React, { useEffect, useState } from 'react';
import { BadgeCheck, Crown, Sparkles } from 'lucide-react';

export const SlidePersonaCard = ({
  persona = {
    title: 'Kaos Koordinatörü',
    subtitle: 'Resmi Arkadaşlık Unvanı',
    description:
      'Kriz anında konuşur, boş anda güldürür, gece olunca da bütün sistemi komple dağıtırsın.',
    badges: [
      'Ücretsiz Terapist',
      'Sticker Küratörü',
      'Gece Mesaisi Uzmanı',
      'Tatlı Bela Departmanı'
    ]
  }
}) => {
  const [phase, setPhase] = useState(0);

  const badges = Array.isArray(persona.badges) ? persona.badges.slice(0, 4) : [];

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 650);   // intro fade-in
    const t2 = setTimeout(() => setPhase(2), 2600);  // intro top
    const t3 = setTimeout(() => setPhase(3), 3850);  // card reveal
    const t4 = setTimeout(() => setPhase(4), 5000);  // badges
    const t5 = setTimeout(() => setPhase(5), 6200);  // approval

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#070311] text-white">
      <style>
        {`
          @keyframes personaShimmer {
            0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
            18% { opacity: .55; }
            100% { transform: translateX(230%) skewX(-18deg); opacity: 0; }
          }

          @keyframes orbitSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes sealPulse {
            0%, 100% { transform: rotate(-8deg) scale(1); }
            50% { transform: rotate(-8deg) scale(1.05); }
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_32%),linear-gradient(180deg,#16072a_0%,#070311_52%,#030208_100%)]" />

        <div className="absolute -top-28 -left-20 h-96 w-96 rounded-full bg-violet-500/22 blur-[130px]" />
        <div className="absolute top-[18%] -right-24 h-96 w-96 rounded-full bg-cyan-400/16 blur-[140px]" />
        <div className="absolute bottom-[-18%] left-[12%] h-96 w-96 rounded-full bg-yellow-300/12 blur-[130px]" />

        <div className="absolute top-[18%] left-[-20%] h-20 w-[150%] rotate-[-8deg] bg-cyan-300/6 blur-sm" />
        <div className="absolute bottom-[24%] left-[-20%] h-20 w-[150%] rotate-[7deg] bg-violet-300/7 blur-sm" />
      </div>

      {/* Large bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[6.7rem] font-black tracking-[-0.08em] text-white/[0.035] rotate-[-7deg] select-none">
          ID
        </span>
      </div>

      {/* Intro: gerçek ekran merkezinden başlar */}
      <div
        className={`absolute left-1/2 z-40 w-full max-w-[330px] -translate-x-1/2 px-4 text-center transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          phase === 0
            ? 'top-1/2 -translate-y-1/2 opacity-0 scale-95 blur-sm'
            : phase === 1
            ? 'top-1/2 -translate-y-1/2 opacity-100 scale-100 blur-0'
            : 'top-[6.5%] -translate-y-0 opacity-90 scale-[0.72] blur-0'
        }`}
      >
        <p className="text-cyan-300 font-black uppercase tracking-[0.24em] text-[10px] mb-2">
          PERSONA CARD
        </p>

        <h2 className="text-[2rem] leading-[0.92] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-yellow-100">
          Bütün veriler işlendi. Sonuç kartın hazır.
        </h2>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[
          { top: '24%', left: '12%', delay: '0ms', rotate: '-12deg' },
          { top: '30%', right: '12%', delay: '250ms', rotate: '10deg' },
          { top: '68%', left: '10%', delay: '500ms', rotate: '8deg' },
          { top: '63%', right: '13%', delay: '750ms', rotate: '-10deg' }
        ].map((item, index) => (
          <div
            key={index}
            className={`absolute text-cyan-200/35 transition-all duration-1000 ${
              phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              ...item,
              transform: `rotate(${item.rotate})`,
              transitionDelay: item.delay
            }}
          >
            <Sparkles size={17} />
          </div>
        ))}
      </div>

      {/* Main layout */}
      <div className="relative z-20 h-full flex flex-col px-5 pt-[120px] pb-6">
        {/* Card zone */}
        <div className="h-[505px] relative flex items-center justify-center">
          {/* Orbit rings */}
          <div
            className={`absolute h-[330px] w-[330px] rounded-full transition-all duration-[1500ms] ${
              phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              background:
                'conic-gradient(from 140deg, rgba(34,211,238,0.18), rgba(168,85,247,0.20), rgba(253,224,71,0.14), rgba(34,211,238,0.18))',
              filter: 'blur(20px)',
              animation: phase >= 3 ? 'orbitSlow 10s linear infinite' : 'none'
            }}
          />

          <div
            className={`absolute h-[300px] w-[300px] rounded-full border border-cyan-200/10 transition-all duration-[1500ms] ${
              phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          />

          {/* Persona card */}
          <div
            className={`relative z-20 w-full max-w-[330px] transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              phase >= 3
                ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                : 'opacity-0 translate-y-16 scale-90 rotate-6'
            }`}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-2xl px-5 py-5 shadow-[0_22px_50px_rgba(0,0,0,0.42)]">
              {/* shimmer */}
              <div
                className={`absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent ${
                  phase >= 3 ? '' : 'hidden'
                }`}
                style={{ animation: phase >= 3 ? 'personaShimmer 3s ease-in-out infinite' : 'none' }}
              />

              {/* card header */}
              <div className="relative z-10 flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] font-black text-cyan-200/75">
                    {persona.subtitle}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35 font-black">
                    Nisatify Wrapped Result
                  </p>
                </div>

                <div className="h-11 w-11 rounded-2xl bg-cyan-300/12 border border-cyan-200/20 flex items-center justify-center text-cyan-200">
                  <Crown size={21} />
                </div>
              </div>

              {/* title */}
              <h1 className="relative z-10 text-[3rem] leading-[0.88] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-violet-200 to-yellow-100 break-words max-w-[295px]">
                {persona.title}
              </h1>

              <p className="relative z-10 mt-4 text-[14px] leading-relaxed text-white/72 font-medium max-w-[285px]">
                {persona.description}
              </p>

              {/* badges */}
              <div className="relative z-10 mt-5 grid grid-cols-2 gap-2">
                {badges.map((badge, index) => (
                  <div
                    key={badge + index}
                    className={`rounded-2xl border border-white/8 bg-black/20 px-3 py-2 text-center transition-all duration-700 ${
                      phase >= 4
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-4 scale-90'
                    }`}
                    style={{ transitionDelay: `${index * 140}ms` }}
                  >
                    <span className="text-[11px] leading-tight font-black text-white/78">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div
          className={`flex-1 flex flex-col justify-end transition-all duration-1000 ${
            phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mx-auto flex items-center gap-2 rounded-full border border-cyan-200/10 bg-cyan-300/8 px-4 py-2">
            <BadgeCheck size={15} className="text-cyan-200/70" />
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-cyan-100/75">
              kimlik onaylandı
            </p>
          </div>

          <div className="pt-5 text-center text-violet-200/25 text-[10px] font-black uppercase tracking-[0.34em]">
            nisatify persona card
          </div>
        </div>
      </div>
    </div>
  );
};