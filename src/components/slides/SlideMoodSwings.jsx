import React, { useEffect, useState } from 'react';

export const SlideMoodSwings = ({ moods = [] }) => {
  const [phase, setPhase] = useState(0);

  const topMood = moods[0] ?? {
    name: 'Cutie Atom Bomb',
    percentage: 34,
    color: 'from-pink-500 to-rose-400',
    note: 'Tatlı ama yüksek enerjili ve hafif tehlikeli premium paket.'
  };

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);
    const t2 = setTimeout(() => setPhase(2), 1900);
    const t3 = setTimeout(() => setPhase(3), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-center h-full px-5 py-5 bg-[#09090f] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-[-15%] w-64 h-64 bg-fuchsia-600/25 rounded-full blur-[90px] animate-pulse" />
        <div className="absolute top-[28%] right-[-15%] w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-12%] left-[18%] w-56 h-56 bg-yellow-400/10 rounded-full blur-[90px] animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[13rem] sm:text-[16rem] font-black tracking-tighter text-white/[0.03] select-none leading-none">
          20
        </span>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="min-h-[4.5rem] flex flex-col items-center text-center justify-end">
          <p
            className={`text-base sm:text-lg font-bold text-white/75 transition-all duration-700 transform ${
              phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Seni tek bir kelimeyle anlatamazdık.
          </p>

          <h2
            className={`mt-1 text-2xl sm:text-3xl font-black leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-yellow-200 transition-all duration-700 transform ${
              phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            O yüzden seni 5 moda böldük.
          </h2>
        </div>

        <div
          className={`mt-5 transition-all duration-1000 ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-fuchsia-200/70 font-bold mb-1.5">
              Baskın Mod
            </p>

            <h3 className="text-4xl sm:text-4xl font-black leading-[0.95] text-white break-words px-2">
              {topMood.name}
            </h3>

            <p className="mt-1.5 text-yellow-300 text-xl sm:text-2xl font-black">
              %{topMood.percentage}
            </p>

            <p className="mt-2 text-xs sm:text-sm text-white/65 leading-relaxed max-w-[260px] mx-auto font-medium">
              {topMood.note}
            </p>
          </div>

          <div className="w-full flex flex-col gap-2.5">
            {moods.map((mood, index) => (
              <div key={mood.name + index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[13px] sm:text-sm font-bold text-white/90 pr-3 leading-snug">
                    {mood.name}
                  </span>
                  <span className="text-[11px] font-mono text-white/55 shrink-0">
                    %{mood.percentage}
                  </span>
                </div>

                <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${mood.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: phase >= 3 ? `${mood.percentage}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            
          </div>
        </div>
      </div>
    </div>
  );
};