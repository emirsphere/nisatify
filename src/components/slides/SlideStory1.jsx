import React from 'react';

export const SlideStory1 = () => (
  <div className="relative h-full w-full overflow-hidden bg-[#050817] text-white">
    <style>
      {`
        @keyframes softPulse {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .85; transform: scale(1.08); }
        }

        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(22px); filter: blur(7px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes lineGrow {
          0% { opacity: 0; transform: scaleX(.3); }
          100% { opacity: 1; transform: scaleX(1); }
        }

        @keyframes slowFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}
    </style>

    {/* Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16),transparent_34%),linear-gradient(180deg,#162a63_0%,#10194a_46%,#050817_100%)]" />

      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/18 blur-[130px] animate-[softPulse_8s_ease-in-out_infinite]" />
      <div className="absolute top-[30%] -right-28 h-96 w-96 rounded-full bg-indigo-400/16 blur-[140px] animate-[softPulse_9s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-18%] left-[8%] h-96 w-96 rounded-full bg-cyan-300/10 blur-[130px] animate-[softPulse_10s_ease-in-out_infinite]" />
    </div>

    {/* Big background number */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="select-none text-[9rem] font-black tracking-[-0.1em] text-white/[0.035]">
        20
      </span>
    </div>

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col justify-center px-7 pb-10">
      <div className="max-w-[335px]">
        

        <h2
          className="text-[3.15rem] font-black leading-[0.95] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-100"
          style={{ animation: 'textReveal 1100ms ease-out 250ms both' }}
        >
          Koca bir 20 yaş bitti.
        </h2>

        <div
          className="mt-7 h-[2px] w-28 rounded-full bg-gradient-to-r from-blue-200/80 via-cyan-100/70 to-transparent origin-left"
          style={{ animation: 'lineGrow 900ms ease-out 950ms both' }}
        />

        <p
          className="mt-8 text-[1.35rem] font-bold leading-snug text-white/84"
          style={{ animation: 'textReveal 1100ms ease-out 1200ms both' }}
        >
          Kolay olmadı biliyorum. Krizler, sınavlar, hüzünler...
        </p>

        <p
          className="mt-7 max-w-[310px] text-[1.1rem] font-semibold leading-relaxed text-blue-100/56"
          style={{ animation: 'textReveal 1100ms ease-out 1850ms both' }}
        >
          Ama bir şekilde atlattın.
          <span className="text-white/75"> (Sayemde)</span>
        </p>
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