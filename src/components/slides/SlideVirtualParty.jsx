import React, { useState } from 'react';
import { Music, PartyPopper, Sparkles } from 'lucide-react';

const PartyGif = ({ dancer, index, started }) => {
  const positions = [
    // Arka sıra - küçük, derinde
    { x: 20, y: 304, size: 'h-[98px] w-[98px]', delay: '0ms', float: 'partyFloatA', z: 'z-30' },
    { x: 35, y: 318, size: 'h-[52px] w-[52px]', delay: '90ms', float: 'partyFloatB', z: 'z-30' },
    { x: 50, y: 326, size: 'h-[54px] w-[54px]', delay: '180ms', float: 'partyFloatC', z: 'z-30' },
    { x: 65, y: 318, size: 'h-[52px] w-[52px]', delay: '270ms', float: 'partyFloatA', z: 'z-30' },
    { x: 80, y: 304, size: 'h-[48px] w-[48px]', delay: '360ms', float: 'partyFloatB', z: 'z-30' },

    // Orta sıra - pistin ortası
    { x: 16, y: 238, size: 'h-[66px] w-[66px]', delay: '450ms', float: 'partyFloatC', z: 'z-40' },
    { x: 30, y: 222, size: 'h-[74px] w-[74px]', delay: '540ms', float: 'partyFloatA', z: 'z-40' },
    { x: 43, y: 238, size: 'h-[68px] w-[68px]', delay: '630ms', float: 'partyFloatB', z: 'z-40' },
    { x: 57, y: 238, size: 'h-[68px] w-[68px]', delay: '720ms', float: 'partyFloatC', z: 'z-40' },
    { x: 70, y: 222, size: 'h-[74px] w-[74px]', delay: '810ms', float: 'partyFloatA', z: 'z-40' },
    { x: 84, y: 238, size: 'h-[66px] w-[66px]', delay: '900ms', float: 'partyFloatB', z: 'z-40' },

    // Ön sıra - büyükler
    { x: 10, y: 126, size: 'h-[88px] w-[88px]', delay: '990ms', float: 'partyFloatA', z: 'z-50' },
    { x: 23, y: 98, size: 'h-[106px] w-[106px]', delay: '1080ms', float: 'partyFloatB', z: 'z-50' },
    { x: 37, y: 118, size: 'h-[94px] w-[94px]', delay: '1170ms', float: 'partyFloatC', z: 'z-50' },
    { x: 50, y: 86, size: 'h-[112px] w-[112px]', delay: '1260ms', float: 'partyFloatA', z: 'z-50' },
    { x: 63, y: 118, size: 'h-[94px] w-[94px]', delay: '1350ms', float: 'partyFloatB', z: 'z-50' },
    { x: 77, y: 98, size: 'h-[106px] w-[106px]', delay: '1440ms', float: 'partyFloatC', z: 'z-50' },
    { x: 90, y: 126, size: 'h-[88px] w-[88px]', delay: '1530ms', float: 'partyFloatA', z: 'z-50' }
  ];

  const item = positions[index];

  if (!item) return null;

  return (
    <div
      className={`absolute ${item.z} ${item.size} transition-all duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        started ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
      style={{
        left: `${item.x}%`,
        bottom: `${item.y}px`,
        transform: 'translateX(-50%)',
        transitionDelay: item.delay
      }}
    >
      <div
        className="h-full w-full"
        style={{
          animation: started
            ? `${item.float} ${2.5 + index * 0.08}s ease-in-out infinite`
            : 'none',
          animationDelay: item.delay
        }}
      >
        <img
          src={dancer.image}
          alt={dancer.name ?? `party-gif-${index + 1}`}
          draggable="false"
          className="h-full w-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.72)]"
        />
      </div>
    </div>
  );
};

export const SlideVirtualParty = ({
  party = {
    title: 'Doğum günü partini başlat',
    startedTitle: 'THE PARTY MUST GO ON',
    subtitle: 'Pist senin, kaos bizim.',
    dancers: [
      { name: 'Dancer 1', image: '/party/dancer1.gif' },
      { name: 'Dancer 2', image: '/party/dancer2.gif' },
      { name: 'Dancer 3', image: '/party/dancer3.gif' },
      { name: 'Dancer 4', image: '/party/dancer4.gif' },
      { name: 'Dancer 5', image: '/party/dancer5.gif' },
      { name: 'Dancer 6', image: '/party/dancer6.gif' },
      { name: 'Dancer 7', image: '/party/dancer7.gif' },
      { name: 'Dancer 8', image: '/party/dancer8.gif' },
      { name: 'Dancer 9', image: '/party/dancer9.gif' },
      { name: 'Dancer 10', image: '/party/dancer10.gif' },
      { name: 'Dancer 11', image: '/party/dancer11.gif' },
      { name: 'Dancer 12', image: '/party/dancer12.gif' },
      { name: 'Dancer 13', image: '/party/dancer13.gif' },
      { name: 'Dancer 14', image: '/party/dancer14.gif' },
      { name: 'Dancer 15', image: '/party/dancer15.gif' },
      { name: 'Dancer 16', image: '/party/dancer16.gif' },
      { name: 'Dancer 17', image: '/party/dancer17.gif' },
      { name: 'Dancer 18', image: '/party/dancer18.gif' }
    ]
  }
}) => {
  const [started, setStarted] = useState(false);
  const dancers = Array.isArray(party.dancers) ? party.dancers.slice(0, 18) : [];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#05020a] text-white">
      <style>
        {`
          @keyframes clubSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
            @keyframes discoBallSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes discoSwing {
  0%, 100% { transform: translateX(-50%) rotate(-4deg); }
  50% { transform: translateX(-50%) rotate(4deg); }
}

@keyframes discoRay {
  0%, 100% { opacity: .12; transform: rotate(var(--angle)) scaleY(.9); }
  50% { opacity: .38; transform: rotate(calc(var(--angle) + 8deg)) scaleY(1.05); }
}

          @keyframes partyFloatA {
            0%, 100% { transform: translateY(0) rotate(-2deg); }
            50% { transform: translateY(-8px) rotate(3deg); }
          }

          @keyframes partyFloatB {
            0%, 100% { transform: translateY(0) rotate(3deg); }
            50% { transform: translateY(-10px) rotate(-3deg); }
          }

          @keyframes partyFloatC {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-7px) scale(1.04); }
          }

          @keyframes beamLeft {
            0%, 100% { opacity: .22; transform: rotate(-26deg) translateX(-28px); }
            50% { opacity: .72; transform: rotate(-8deg) translateX(18px); }
          }

          @keyframes beamRight {
            0%, 100% { opacity: .22; transform: rotate(26deg) translateX(28px); }
            50% { opacity: .72; transform: rotate(8deg) translateX(-18px); }
          }

          @keyframes floorPulse {
            0%, 100% { opacity: .55; filter: brightness(1); }
            50% { opacity: .95; filter: brightness(1.25); }
          }

          @keyframes equalizer {
            0%, 100% { transform: scaleY(.35); }
            50% { transform: scaleY(1); }
          }

          @keyframes buttonPulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 32px rgba(255, 20, 147, .28); }
            50% { transform: scale(1.035); box-shadow: 0 0 58px rgba(255, 20, 147, .55); }
          }

          @keyframes neonDot {
            0%, 100% { opacity: .45; transform: scale(.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,20,147,0.17),transparent_33%),linear-gradient(180deg,#12041a_0%,#06020b_48%,#020105_100%)]" />

        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-pink-500/20 blur-[130px]" />
        <div className="absolute top-[16%] -right-28 h-96 w-96 rounded-full bg-cyan-400/17 blur-[140px]" />
        <div className="absolute bottom-[-18%] left-[12%] h-96 w-96 rounded-full bg-yellow-300/13 blur-[130px]" />

        <div
          className={`absolute left-1/2 top-[38%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-[1300ms] ${
            started ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
          }`}
          style={{
            background:
              'conic-gradient(from 90deg, rgba(255,20,147,0.24), rgba(34,211,238,0.22), rgba(253,224,71,0.18), rgba(168,85,247,0.24), rgba(255,20,147,0.24))',
            filter: 'blur(28px)',
            animation: started ? 'clubSpin 7s linear infinite' : 'none'
          }}
        />
      </div>

      {/* Side LED bars */}
      <div
        className={`absolute left-2 top-[130px] z-20 flex flex-col gap-2 transition-opacity duration-1000 ${
          started ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="h-2 w-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-300 shadow-[0_0_14px_rgba(255,20,147,0.8)]"
            style={{ animation: `neonDot ${0.8 + i * 0.04}s ease-in-out infinite` }}
          />
        ))}
      </div>

      <div
        className={`absolute right-2 top-[130px] z-20 flex flex-col gap-2 transition-opacity duration-1000 ${
          started ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="h-2 w-10 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
            style={{ animation: `neonDot ${0.85 + i * 0.04}s ease-in-out infinite` }}
          />
        ))}
      </div>

      {/* Center disco ball */}
<div
  className={`absolute left-1/2 top-[92px] z-30 h-[92px] w-[92px] -translate-x-1/2 transition-all duration-1000 ${
    started ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
  }`}
  style={{
    animation: started ? 'discoSwing 3.2s ease-in-out infinite' : 'none'
  }}
>
  {/* String */}
  <div className="absolute left-1/2 top-[-72px] h-[76px] w-[1px] -translate-x-1/2 bg-white/18" />

  {/* Glow */}
  <div className="absolute -inset-5 rounded-full bg-white/12 blur-2xl" />

  {/* Ball */}
  <div
    className="relative h-full w-full overflow-hidden rounded-full border border-white/25 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),rgba(255,255,255,0.34)_24%,rgba(168,85,247,0.26)_48%,rgba(15,23,42,0.9)_100%)] shadow-[0_0_34px_rgba(255,255,255,0.28)]"
    style={{
      animation: started ? 'discoBallSpin 3.8s linear infinite' : 'none'
    }}
  >
    {/* Tiles */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.20)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] bg-[size:14px_14px] opacity-65" />

    {/* Shine */}
    <div className="absolute left-4 top-3 h-5 w-5 rounded-full bg-white/80 blur-[1px]" />
    <div className="absolute right-5 bottom-5 h-3 w-3 rounded-full bg-cyan-200/70 blur-[1px]" />
  </div>
</div>

{/* Disco rays */}
{[
  { angle: '-34deg', left: '31%', color: 'from-pink-300/38' },
  { angle: '-16deg', left: '43%', color: 'from-yellow-200/32' },
  { angle: '16deg', left: '57%', color: 'from-cyan-300/34' },
  { angle: '34deg', left: '69%', color: 'from-fuchsia-300/34' }
].map((ray, index) => (
  <div
    key={index}
    className={`absolute top-[128px] z-10 h-[430px] w-12 origin-top bg-gradient-to-b ${ray.color} to-transparent blur-md transition-opacity duration-1000 ${
      started ? 'opacity-100' : 'opacity-0'
    }`}
    style={{
      left: ray.left,
      '--angle': ray.angle,
      transform: `rotate(${ray.angle})`,
      animation: started ? `discoRay ${3 + index * 0.35}s ease-in-out infinite` : 'none'
    }}
  />
))}

      {/* Moving beams */}
      <div
        className={`absolute left-[28%] top-[80px] z-10 h-[430px] w-20 origin-top bg-gradient-to-b from-pink-300/35 to-transparent blur-md transition-opacity duration-1000 ${
          started ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ animation: started ? 'beamLeft 3s ease-in-out infinite' : 'none' }}
      />

      <div
        className={`absolute right-[28%] top-[80px] z-10 h-[430px] w-20 origin-top bg-gradient-to-b from-cyan-300/32 to-transparent blur-md transition-opacity duration-1000 ${
          started ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ animation: started ? 'beamRight 3.4s ease-in-out infinite' : 'none' }}
      />

      {/* Title */}
      <div
        className={`absolute left-1/2 top-8 z-50 w-full max-w-[330px] -translate-x-1/2 px-4 text-center transition-all duration-1000 ${
          started ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        }`}
      >
        <p className="text-[10px] uppercase tracking-[0.32em] font-black text-yellow-100/70">
          NİSA'NIN DOĞUM GÜNÜ PARTİSİ
        </p>
        <h2 className="mt-2 text-[2.05rem] leading-[0.92] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-yellow-100 to-cyan-100">
          {party.startedTitle}
        </h2>
      </div>

      {/* Floor */}
      <div
        className={`absolute left-1/2 bottom-[54px] z-10 h-[340px] w-[590px] -translate-x-1/2 rounded-t-[3rem] transition-all duration-1000 ${
          started ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,20,147,0.18) 34%, rgba(34,211,238,0.16) 66%, rgba(0,0,0,0.20) 100%)',
          clipPath: 'polygon(31% 0%, 69% 0%, 100% 100%, 0% 100%)',
          boxShadow:
            '0 0 70px rgba(255,20,147,0.22), inset 0 0 40px rgba(255,255,255,0.06)',
          animation: started ? 'floorPulse 2.8s ease-in-out infinite' : 'none'
        }}
      />

      {/* Floor grid */}
      <div
        className={`absolute left-1/2 bottom-[54px] z-20 h-[340px] w-[590px] -translate-x-1/2 overflow-hidden transition-opacity duration-1000 ${
          started ? 'opacity-70' : 'opacity-0'
        }`}
        style={{
          clipPath: 'polygon(31% 0%, 69% 0%, 100% 100%, 0% 100%)'
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:38px_30px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_58%)]" />
      </div>

      {/* Dancers */}
      {dancers.map((dancer, index) => (
        <PartyGif key={dancer.name + index} dancer={dancer} index={index} started={started} />
      ))}

      {/* Equalizer */}
      <div
        className={`absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-end gap-1 transition-opacity duration-700 ${
          started ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {[18, 28, 22, 34, 24, 30, 20, 26, 18].map((height, index) => (
          <div
            key={index}
            className="w-1.5 rounded-full bg-gradient-to-t from-pink-400 to-yellow-200"
            style={{
              height,
              transformOrigin: 'bottom',
              animation: started
                ? `equalizer ${0.7 + index * 0.05}s ease-in-out infinite`
                : 'none',
              animationDelay: `${index * 80}ms`
            }}
          />
        ))}
      </div>

      {/* Start screen */}
      <div
        className={`relative z-[60] h-full flex flex-col items-center justify-center px-6 text-center transition-all duration-700 ${
          started ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/12 bg-white/10 backdrop-blur-2xl shadow-[0_0_45px_rgba(255,20,147,0.22)]">
          <PartyPopper size={42} className="text-pink-100" />
        </div>

        <p className="mb-3 text-[10px] uppercase tracking-[0.34em] font-black text-pink-100/55">
          ÖZEL PARTİ
        </p>

        <h1 className="max-w-[320px] text-[2.7rem] leading-[0.92] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-yellow-100 to-cyan-100">
          Küçük bir partiye hazır mısın?
        </h1>

        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-9 flex items-center gap-3 rounded-full border border-white/15 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_0_34px_rgba(255,20,147,0.35)] active:scale-95 transition-transform"
          style={{
            animation: 'buttonPulse 2s ease-in-out infinite'
          }}
        >
          <Music size={18} />
          {party.title}
          <Sparkles size={18} />
        </button>
      </div>
    </div>
  );
};