import React from 'react';

export const SlideNewIntro = () => (
  <div className="relative h-full w-full overflow-hidden bg-[#080414] text-white">
    <style>
      {`
        @keyframes softPulse {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .9; transform: scale(1.08); }
        }

        @keyframes floatParty {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-12px) rotate(6deg); }
        }

        @keyframes titleReveal {
          0% { opacity: 0; transform: translateY(22px) scale(.92); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(20px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          25% { opacity: .55; }
          100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
        }
      `}
    </style>

    {/* Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.22),transparent_34%),linear-gradient(180deg,#2b0f55_0%,#140728_48%,#05020a_100%)]" />

      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[130px] animate-[softPulse_7s_ease-in-out_infinite]" />
      <div className="absolute top-[24%] -right-28 h-96 w-96 rounded-full bg-cyan-400/14 blur-[140px] animate-[softPulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-18%] left-[10%] h-96 w-96 rounded-full bg-pink-500/14 blur-[130px] animate-[softPulse_9s_ease-in-out_infinite]" />
    </div>

    {/* Big background word */}
    

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-7 text-center">
      <div className="max-w-[335px]">
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/12 bg-white/10 backdrop-blur-2xl shadow-[0_0_45px_rgba(217,70,239,0.25)] animate-[floatParty_4s_ease-in-out_infinite]">
          <div className="absolute -inset-5 rounded-[2.4rem] bg-pink-400/14 blur-2xl" />

          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <div
              className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/24 to-transparent"
              style={{ animation: 'shimmer 3s ease-in-out infinite' }}
            />
          </div>

          <span className="relative z-10 text-5xl drop-shadow-2xl">🎉</span>
        </div>

        <p
          className="mb-3 text-[10px] font-black uppercase tracking-[0.34em] text-pink-100/55"
          style={{ animation: 'textReveal 900ms ease-out both' }}
        >
          Access Granted
        </p>

        <h1
          className="text-[3.3rem] font-black leading-[0.9] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-yellow-100"
          style={{ animation: 'titleReveal 1100ms ease-out 250ms both' }}
        >
          SONUNDA!
        </h1>

        <p
          className="mx-auto mt-7 max-w-[315px] text-[1.05rem] font-medium leading-relaxed text-white/72"
          style={{ animation: 'textReveal 1100ms ease-out 900ms both' }}
        >
          Şifreyi bulman bir tık uzun sürdü sanki ama neyse.
        </p>

        <p
          className="mx-auto mt-5 max-w-[315px] text-[1.05rem] font-semibold leading-relaxed text-purple-100/82"
          style={{ animation: 'textReveal 1100ms ease-out 1450ms both' }}
        >
          Hazırsan, senin için sana özel özenle hazırlanan 20. yaşına bakış özetimiz başlıyor...
        </p>

        <div
          className="mx-auto mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-pink-100/70 to-transparent"
          style={{ animation: 'textReveal 900ms ease-out 2100ms both' }}
        />
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