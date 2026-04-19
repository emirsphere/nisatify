import React, { useEffect, useState } from 'react';

export const SlideConversationTypes = ({
  types = [
    { name: 'Makara', percent: 34, color: 'from-pink-400 to-fuchsia-400' },
    { name: 'Ağır Boş Yapma', percent: 23, color: 'from-purple-400 to-violet-400' },
    { name: 'Reels & Twitter', percent: 22, color: 'from-sky-400 to-cyan-300' },
    { name: 'Derin Sohbet', percent: 10, color: 'from-yellow-300 to-orange-300' },
    { name: 'Dertleşme', percent: 11, color: 'from-red-400 to-rose-400' }
  ]
}) => {
  const [phase, setPhase] = useState(0);

  const safeTypes = Array.isArray(types) ? types.slice(0, 6) : [];

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 650);   // intro merkezde belirir
    const t2 = setTimeout(() => setPhase(2), 2600);  // intro yukarı çıkar
    const t3 = setTimeout(() => setPhase(3), 3800);  // grafik gelir
    const t4 = setTimeout(() => setPhase(4), 5000);  // alt not gelir

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#03130c] text-white">
      <style>
        {`
          @keyframes softPulse {
            0%, 100% { opacity: .45; transform: scale(1); }
            50% { opacity: .85; transform: scale(1.08); }
          }

          @keyframes orbitSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes textReveal {
            0% { opacity: 0; transform: translateY(22px); filter: blur(7px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
          }

          @keyframes cardPop {
            0% { opacity: 0; transform: translateY(28px) scale(.94); filter: blur(8px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
            25% { opacity: .5; }
            100% { transform: translateX(230%) skewX(-18deg); opacity: 0; }
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_34%),linear-gradient(180deg,#0d4f2b_0%,#06351f_46%,#03130c_100%)]" />

        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-400/18 blur-[130px] animate-[softPulse_8s_ease-in-out_infinite]" />
        <div className="absolute top-[25%] -right-28 h-96 w-96 rounded-full bg-lime-400/13 blur-[140px] animate-[softPulse_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-18%] left-[10%] h-96 w-96 rounded-full bg-cyan-300/10 blur-[130px] animate-[softPulse_10s_ease-in-out_infinite]" />
      </div>

      {/* Big faint chart mark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="select-none text-[7.5rem] font-black tracking-[-0.08em] text-white/[0.025] rotate-[-6deg]">
          %
        </span>
      </div>

      {/* Moving ring */}
      <div
        className={`absolute left-1/2 top-[44%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-[1400ms] ${
          phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 120deg, rgba(34,197,94,.16), rgba(56,189,248,.13), rgba(236,72,153,.12), rgba(34,197,94,.16))',
            filter: 'blur(22px)',
            animation: phase >= 3 ? 'orbitSlow 9s linear infinite' : 'none'
          }}
        />
      </div>

      {/* Intro */}
      <div
        className={`absolute left-1/2 z-30 w-full max-w-[340px] -translate-x-1/2 px-5 text-center transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          phase === 0
            ? 'top-1/2 -translate-y-1/2 opacity-0 scale-95 blur-sm'
            : phase === 1
            ? 'top-1/2 -translate-y-1/2 opacity-100 scale-100 blur-0'
            : 'top-[7%] -translate-y-0 opacity-90 scale-[0.74] blur-0'
        }`}
      >
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.34em] text-emerald-100/55">
          Sohbet İstatistiği
        </p>

        <h2 className="text-[2.1rem] leading-[1.2] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-lime-100">
          Sohbetlerimizin tür dağılımı
        </h2>
      </div>

      {/* Chart */}
      <div className="relative z-20 flex h-full flex-col justify-center px-5 pt-28 pb-20">
        <div
          className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 px-5 py-6 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.22)] transition-all duration-[1000ms] ${
            phase >= 3
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-95'
          }`}
          style={{
            animation: phase >= 3 ? 'cardPop 900ms ease-out both' : 'none'
          }}
        >
          <div
            className={`absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-[-20deg] ${
              phase >= 3 ? '' : 'hidden'
            }`}
            style={{
              animation: phase >= 3 ? 'shimmer 3.5s ease-in-out infinite' : 'none'
            }}
          />

          <div className="relative z-10 space-y-5">
            {safeTypes.map((item, index) => (
              <div
                key={item.name + index}
                className={`transition-all duration-700 ${
                  phase >= 3
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{
                  transitionDelay: `${index * 180}ms`
                }}
              >
                <div className="mb-2 flex items-end justify-between gap-3">
                  <span className="max-w-[230px] truncate text-[1.05rem] font-black text-white/92">
                    {item.name}
                  </span>

                  <span className="text-[1rem] font-black text-emerald-100/82">
                    %{item.percent}
                  </span>
                </div>

                <div className="h-4 w-full overflow-hidden rounded-full bg-black/28">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_18px_rgba(255,255,255,0.16)] transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]`}
                    style={{
                      width: phase >= 3 ? `${item.percent}%` : '0%',
                      transitionDelay: `${400 + index * 180}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.38em] text-white/24">
          NISATIFY
        </p>
      </div>
    </div>
  );
};