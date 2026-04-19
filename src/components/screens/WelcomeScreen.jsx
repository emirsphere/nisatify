import React from 'react';
import { Sparkles, Play } from 'lucide-react';

export const WelcomeScreen = ({ onNext }) => (
  <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#05050a] text-white">
    <style>
      {`
        @keyframes softPulse {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .9; transform: scale(1.08); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
          22% { opacity: .6; }
          100% { transform: translateX(230%) skewX(-18deg); opacity: 0; }
        }

        @keyframes buttonGlow {
          0%, 100% { box-shadow: 0 0 34px rgba(255,255,255,.16), 0 0 70px rgba(244,114,182,.18); }
          50% { box-shadow: 0 0 48px rgba(255,255,255,.26), 0 0 95px rgba(244,114,182,.28); }
        }
      `}
    </style>

    {/* Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,207,232,0.12),transparent_34%),linear-gradient(180deg,#100817_0%,#05050a_52%,#020204_100%)]" />

      <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-300/14 blur-[120px] animate-[softPulse_7s_ease-in-out_infinite]" />
      <div className="absolute top-[32%] -left-24 h-96 w-96 rounded-full bg-fuchsia-400/10 blur-[130px] animate-[softPulse_9s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-18%] right-[-20%] h-96 w-96 rounded-full bg-yellow-200/9 blur-[130px] animate-[softPulse_10s_ease-in-out_infinite]" />
    </div>

    {/* Big faded mark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="select-none text-[8.5rem] font-black tracking-[-0.1em] text-white/[0.025]">
        21
      </span>
    </div>

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col px-7 pt-8 pb-8">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        {/* Icon */}
        <div className="relative mb-8 animate-[floatSlow_4s_ease-in-out_infinite]">
          <div className="absolute -inset-5 rounded-full bg-pink-200/10 blur-2xl" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/12 bg-white/8 backdrop-blur-2xl shadow-[0_0_45px_rgba(255,255,255,0.08)]">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              <div
                className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ animation: 'shimmer 3.2s ease-in-out infinite' }}
              />
            </div>

            <Sparkles size={34} className="relative z-10 text-pink-100" />
          </div>
        </div>

        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.34em] text-pink-100/45">
          Nisatify Wrapped
        </p>

        <h1 className="text-[3.45rem] font-black leading-none tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-yellow-100">
          Selam.
        </h1>

        <p className="mt-7 max-w-[300px] text-[1.05rem] font-medium leading-relaxed text-white/58">
          Koca bir yılı daha geride bıraktık. İyisiyle, kötüsüyle ve bitmek
          bilmeyen boş muhabbetlerimizle...
        </p>

        <div className="mt-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-pink-100/45 to-transparent" />
      </div>

      {/* Button */}
      {/* Button */}
<div className="relative z-20 w-full pb-2">
  <button
    type="button"
    onClick={onNext}
    className="group relative flex h-[74px] w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white text-[1.05rem] font-black text-black shadow-xl transition-transform active:scale-95"
    style={{ animation: 'buttonGlow 2.6s ease-in-out infinite' }}
  >
    <span className="absolute inset-0 bg-gradient-to-r from-white via-pink-100 to-yellow-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <Play size={19} className="relative z-10 fill-black shrink-0" />
    <span className="relative z-10 whitespace-nowrap">
      Hazırsan Başlayalım
    </span>
  </button>

  <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.28em] text-white/20">
    küçük bir yıllık rapor
  </p>
</div>
    </div>
  </div>
);