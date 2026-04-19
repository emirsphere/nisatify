import React, { useEffect, useState } from 'react';

const StickerVisual = ({ sticker, className = '' }) => {
  if (sticker?.image) {
    return (
      <img
        src={sticker.image}
        alt={sticker.name}
        draggable="false"
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {sticker?.emoji ?? '✨'}
    </div>
  );
};

export const SlideBestMadeStickers = ({
  stickers = [
    { name: 'Sticker Başyapıtı', image: '', emoji: '😭' },
    { name: 'Kaos Eseri', image: '', emoji: '💀' },
    { name: 'Yarma Klasik', image: '', emoji: '😔' },
    { name: 'Puhaha Eseri', image: '', emoji: '🫠' },
    { name: 'Minik Felaket', image: '', emoji: '🤡' },
    { name: 'Efsane Tepki', image: '', emoji: '😵‍💫' },
    { name: 'Final Boss', image: '', emoji: '🧍' },
    { name: 'Bonus Eser', image: '', emoji: '🫡' }
  ]
}) => {
  const [phase, setPhase] = useState(0);

  const safeStickers = Array.isArray(stickers) ? stickers.slice(0, 8) : [];

  const winner = safeStickers[0] ?? {
    name: 'Sticker Başyapıtı',
    image: '',
    emoji: '😭'
  };

  const gallery = safeStickers.slice(1, 8);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 650);
    const t2 = setTimeout(() => setPhase(2), 2700);
    const t3 = setTimeout(() => setPhase(3), 3900);
    const t4 = setTimeout(() => setPhase(4), 5100);
    const t5 = setTimeout(() => setPhase(5), 6400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  const galleryPositions = [
    {
      box: 'left-[-8px] top-[178px]',
      rotate: '-15deg',
      size: 'h-[88px] w-[88px]',
      inner: 'max-h-[68px] max-w-[68px] text-5xl',
      hidden: '-translate-x-16 -translate-y-2 scale-50 opacity-0'
    },
    {
      box: 'right-[-10px] top-[152px]',
      rotate: '14deg',
      size: 'h-[92px] w-[92px]',
      inner: 'max-h-[72px] max-w-[72px] text-5xl',
      hidden: 'translate-x-16 -translate-y-2 scale-50 opacity-0'
    },
    {
      box: 'left-[20px] top-[315px]',
      rotate: '9deg',
      size: 'h-[86px] w-[86px]',
      inner: 'max-h-[66px] max-w-[66px] text-5xl',
      hidden: '-translate-x-16 scale-50 opacity-0'
    },
    {
      box: 'right-[12px] top-[318px]',
      rotate: '-10deg',
      size: 'h-[86px] w-[86px]',
      inner: 'max-h-[66px] max-w-[66px] text-5xl',
      hidden: 'translate-x-16 scale-50 opacity-0'
    },
    {
      box: 'left-[34px] bottom-[188px]',
      rotate: '-7deg',
      size: 'h-[82px] w-[82px]',
      inner: 'max-h-[62px] max-w-[62px] text-4xl',
      hidden: '-translate-x-10 translate-y-14 scale-50 opacity-0'
    },
    {
      box: 'right-[42px] bottom-[166px]',
      rotate: '8deg',
      size: 'h-[84px] w-[84px]',
      inner: 'max-h-[64px] max-w-[64px] text-4xl',
      hidden: 'translate-x-10 translate-y-14 scale-50 opacity-0'
    },
    {
      box: 'left-1/2 bottom-[98px] -translate-x-1/2',
      rotate: '-2deg',
      size: 'h-[80px] w-[80px]',
      inner: 'max-h-[60px] max-w-[60px] text-4xl',
      hidden: 'translate-y-14 scale-50 opacity-0'
    }
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b0b08] text-white">
      <style>
        {`
          @keyframes slowSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes floaty {
            0%, 100% { transform: translateY(0px) rotate(var(--r)); }
            50% { transform: translateY(-9px) rotate(var(--r)); }
          }

          @keyframes scan {
            0% { transform: translateX(-120%); opacity: 0; }
            20% { opacity: .65; }
            100% { transform: translateX(220%); opacity: 0; }
          }

          @keyframes popDust {
            0% { transform: scale(.7); opacity: 0; }
            35% { opacity: .8; }
            100% { transform: scale(1.25); opacity: 0; }
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#17110a_0%,#0b0b08_46%,#070708_100%)]" />

        <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-lime-400/20 blur-[110px]" />
        <div className="absolute top-[20%] -right-24 h-96 w-96 rounded-full bg-orange-500/18 blur-[130px]" />
        <div className="absolute bottom-[-18%] left-[10%] h-96 w-96 rounded-full bg-violet-600/18 blur-[130px]" />

        <div className="absolute top-[18%] -left-20 h-16 w-[140%] -rotate-6 bg-lime-300/8 blur-sm" />
        <div className="absolute bottom-[24%] -left-20 h-16 w-[140%] rotate-6 bg-orange-400/8 blur-sm" />
      </div>

      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[8rem] font-black tracking-[-0.08em] text-white/[0.025] rotate-[-8deg] select-none">
          ART
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
        <p className="text-lime-300 font-black uppercase tracking-[0.24em] text-[10px] mb-2">
          Sticker Museum
        </p>

        <h2 className="text-[2rem] leading-[0.92] font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-200 via-yellow-100 to-orange-300">
          İşte bu yıl ortaya çıkardığın en iyi sticker eserleri...
        </h2>
      </div>

      {/* 7 yan sticker */}
      {gallery.map((sticker, index) => {
        const item = galleryPositions[index];

        if (!item) return null;

        return (
          <div
            key={sticker.name + index}
            className={`absolute ${item.box} z-20 transition-all duration-[950ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              phase >= 4
                ? 'translate-x-0 translate-y-0 scale-100 opacity-100'
                : item.hidden
            }`}
            style={{
              transitionDelay: `${index * 110}ms`,
              '--r': item.rotate,
              animation:
                phase >= 4
                  ? `floaty ${3 + index * 0.22}s ease-in-out infinite`
                  : 'none'
            }}
          >
            <div
              className={`relative ${item.size} rounded-[1.15rem] border border-black/30 bg-[#f6f1d8] p-1.5 shadow-[7px_9px_0_rgba(0,0,0,0.35)]`}
              style={{ transform: `rotate(${item.rotate})` }}
            >
              <div className="absolute -top-1.5 left-1/2 h-3.5 w-8 -translate-x-1/2 rounded-sm bg-lime-300/80 rotate-[-3deg]" />

              <div className="h-full w-full rounded-[0.85rem] bg-white flex items-center justify-center overflow-hidden">
                <StickerVisual sticker={sticker} className={item.inner} />
              </div>
            </div>
          </div>
        );
      })}

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col px-5 pt-[118px] pb-6">
        <div className="h-[510px] relative flex items-center justify-center">
          {/* Rotating spotlight */}
          <div
            className={`absolute h-[330px] w-[330px] rounded-full transition-all duration-[1400ms] ${
              phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              background:
                'conic-gradient(from 90deg, rgba(190,242,100,0.18), rgba(251,146,60,0.16), rgba(168,85,247,0.16), rgba(190,242,100,0.18))',
              filter: 'blur(18px)',
              animation: phase >= 3 ? 'slowSpin 9s linear infinite' : 'none'
            }}
          />

          {/* Pop dust burst */}
          <div
            className={`absolute h-[250px] w-[250px] rounded-full border border-lime-200/10 ${
              phase >= 3 ? '' : 'hidden'
            }`}
            style={{
              animation: phase >= 3 ? 'popDust 1.2s ease-out 1' : 'none'
            }}
          />

          {/* Winner */}
          <div
            className={`relative z-30 flex flex-col items-center transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              phase >= 3
                ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                : 'opacity-0 translate-y-12 scale-75 rotate-6'
            }`}
          >
            <div className="mb-3 rounded-full border border-lime-200/20 bg-black/30 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-lime-200/85 backdrop-blur-md">
              masterpiece unlocked
            </div>

            <div className="relative h-[178px] w-[178px] rotate-[-2deg] rounded-[1.8rem] bg-[#f3d36b] p-3 shadow-[11px_13px_0_rgba(0,0,0,0.42)]">
              <div className="absolute inset-0 overflow-hidden rounded-[1.8rem]">
                <div
                  className={`absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-20deg] ${
                    phase >= 3 ? '' : 'hidden'
                  }`}
                  style={{
                    animation:
                      phase >= 3 ? 'scan 2.8s ease-in-out infinite' : 'none'
                  }}
                />
              </div>

              <div className="relative h-full w-full rounded-[1.25rem] border-[6px] border-[#1b1510] bg-white flex items-center justify-center overflow-hidden">
                <StickerVisual
                  sticker={winner}
                  className="max-h-[124px] max-w-[124px] text-7xl"
                />
              </div>
            </div>

            <h1 className="mt-4 max-w-[285px] text-center text-[2.25rem] font-black leading-[0.88] text-transparent bg-clip-text bg-gradient-to-r from-lime-200 via-yellow-100 to-orange-300 break-words">
              {winner.name}
            </h1>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`flex-1 flex flex-col justify-end transition-all duration-1000 ${
            phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mx-auto rounded-full border border-lime-200/10 bg-lime-300/8 px-4 py-2 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-lime-100/75">
              herkesten farklı çalışan bir zihin
            </p>
          </div>

          <div className="pt-5 text-center text-orange-200/25 text-[10px] font-black uppercase tracking-[0.34em]">
            nisatify
          </div>
        </div>
      </div>
    </div>
  );
};