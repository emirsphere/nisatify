import React from 'react';

export const SlideStory2 = () => (
  <div className="relative h-full w-full overflow-hidden bg-[#120403] text-white">
    <style>
      {`
        @keyframes scanSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes softPulse {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .9; transform: scale(1.08); }
        }

        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(24px); filter: blur(7px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes scanLine {
          0% { transform: translateY(-120%); opacity: 0; }
          20% { opacity: .55; }
          100% { transform: translateY(220%); opacity: 0; }
        }

        @keyframes dotBlink {
          0%, 100% { opacity: .25; transform: scale(.75); }
          50% { opacity: 1; transform: scale(1.12); }
        }
      `}
    </style>

    {/* Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.18),transparent_34%),linear-gradient(180deg,#551407_0%,#2a0705_50%,#080202_100%)]" />

      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange-500/20 blur-[130px] animate-[softPulse_7s_ease-in-out_infinite]" />
      <div className="absolute top-[26%] -right-28 h-96 w-96 rounded-full bg-red-500/18 blur-[140px] animate-[softPulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-18%] left-[10%] h-96 w-96 rounded-full bg-yellow-300/12 blur-[130px] animate-[softPulse_9s_ease-in-out_infinite]" />
    </div>

    {/* Scan circle */}
    <div className="absolute left-1/2 top-[30%] z-10 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[18px] rounded-full border border-orange-200/10" />
      <div className="absolute inset-[36px] rounded-full border border-white/8" />

      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'conic-gradient(from 90deg, rgba(255,255,255,0.0), rgba(255,255,255,0.75), rgba(255,255,255,0.0), rgba(255,255,255,0.0))',
          maskImage: 'radial-gradient(circle, transparent 48%, black 50%, black 54%, transparent 57%)',
          animation: 'scanSpin 1.9s linear infinite'
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_22px_rgba(255,255,255,.55)]" />
    </div>

    {/* Vertical scan overlay */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute left-0 top-0 h-28 w-full bg-gradient-to-b from-transparent via-white/8 to-transparent"
        style={{ animation: 'scanLine 4s ease-in-out 1.2s infinite' }}
      />
    </div>

    {/* Little data dots */}
    {[
      { top: '20%', left: '16%', delay: '0ms' },
      { top: '25%', right: '18%', delay: '300ms' },
      { top: '63%', left: '13%', delay: '600ms' },
      { top: '72%', right: '20%', delay: '900ms' },
      { top: '53%', right: '10%', delay: '1200ms' }
    ].map((item, index) => (
      <div
        key={index}
        className="absolute z-10 h-2 w-2 rounded-full bg-orange-100/45"
        style={{
          ...item,
          animation: 'dotBlink 2.2s ease-in-out infinite',
          animationDelay: item.delay
        }}
      />
    ))}

    {/* Content */}
    <div className="relative z-20 flex h-full flex-col items-center justify-center px-7 text-center">
      <div className="max-w-[340px]">
        <p
          className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-orange-100/55"
          style={{ animation: 'textReveal 900ms ease-out both' }}
        >
          
        </p>

        <h2
          className="text-[2.95rem] font-black leading-[0.95] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-yellow-100"
          style={{ animation: 'textReveal 1100ms ease-out 300ms both' }}
        >
          Peki bu yıl arka planda neler oldu?
        </h2>

        <p
          className="mx-auto mt-7 max-w-[310px] text-[1.1rem] font-semibold leading-relaxed text-orange-50/78"
          style={{ animation: 'textReveal 1100ms ease-out 950ms both' }}
        >
          Şimdi seninle derinlemesine inceleme vakti. Hazır mısın?
        </p>

        <div
          className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-orange-100/10 bg-white/6 px-4 py-2 backdrop-blur-xl"
          style={{ animation: 'textReveal 900ms ease-out 1550ms both' }}
        >
          <span className="h-2 w-2 rounded-full bg-orange-200 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-100/60">
            nisatify wrapped başlıyor
          </span>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.38em] text-white/24">
        NISATIFY
      </p>
    </div>
  </div>
);