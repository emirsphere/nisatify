import React, { useState, useEffect } from 'react';
import { Mic, Radio } from 'lucide-react';

export const SlidePodcast = ({ topics = [] }) => {
  const [phase, setPhase] = useState(0);

  const safeTopics = Array.isArray(topics) ? topics : [];
  const mainTopic = safeTopics[0] || { name: '...', count: 0 };
  const others = safeTopics.slice(1, 4);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);   // intro görünür
    const t2 = setTimeout(() => setPhase(2), 2400);  // intro yukarı taşınır
    const t3 = setTimeout(() => setPhase(3), 3900);  // ana kart gelir
    const t4 = setTimeout(() => setPhase(4), 5200);  // alt liste gelir

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#071019] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_28%),linear-gradient(180deg,#081018_0%,#071019_45%,#04070b_100%)]" />

        <div
          className={`absolute -top-16 right-[-12%] w-72 h-72 rounded-full bg-cyan-500/18 blur-[110px] transition-all duration-[1400ms] ${
            phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
        <div
          className={`absolute bottom-[-14%] left-[-12%] w-80 h-80 rounded-full bg-blue-600/18 blur-[120px] transition-all duration-[1500ms] ${
            phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
        <div
          className={`absolute top-[40%] left-[22%] w-60 h-60 rounded-full bg-sky-400/10 blur-[90px] transition-all duration-[1500ms] ${
            phase >= 3 ? 'opacity-100 scale-110' : 'opacity-0 scale-75'
          }`}
        />
      </div>

      {/* PODCAST WAVES */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className={`absolute w-[210px] h-[210px] rounded-full border border-cyan-300/10 transition-all duration-[1400ms] ${
            phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
        <div
          className={`absolute w-[300px] h-[300px] rounded-full border border-cyan-300/5 transition-all duration-[1600ms] ${
            phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
      </div>

      {/* INTRO */}
      <div
        className={`absolute left-1/2 z-30 w-full max-w-[320px] -translate-x-1/2 px-5 text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          phase < 2
            ? 'top-1/2 -translate-y-1/2 opacity-100 scale-100'
            : 'top-[8%] -translate-y-0 opacity-80 scale-75'
        }`}
      >
        <p className="text-cyan-300 font-black uppercase tracking-[0.24em] text-[11px] mb-3">
          Yılın Podcast Serisi
        </p>

        <h2 className="text-3xl sm:text-4xl font-black leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-sky-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.06)]">
          Sanki mikrofona konuşur gibi en çok bunları anlattın.
        </h2>
      </div>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 h-full flex flex-col px-5 pt-[11.5rem] pb-6">
        {/* HERO CARD */}
        <div
          className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
          }`}
        >
          <div className="relative rounded-[2rem] border border-cyan-400/12 bg-white/5 backdrop-blur-2xl px-5 py-6 shadow-[0_0_40px_rgba(34,211,238,0.10)] overflow-hidden min-h-[18.5rem]">
            <div className="absolute -right-5 -top-4 text-cyan-300/10">
              <Mic size={132} strokeWidth={1.5} />
            </div>

            <div className="relative z-10 flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                <Radio size={18} className="animate-pulse" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.22em] font-black text-cyan-200/75 leading-tight">
                En Çok Dinlenen Bölüm
              </span>
            </div>

            <h1 className="relative z-10 text-[2.65rem] sm:text-5xl font-black leading-[0.92] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-cyan-300 to-sky-400 break-words max-w-[260px]">
              {mainTopic.name}
            </h1>

            <p className="relative z-10 mt-5 text-[15px] sm:text-base text-cyan-100/75 font-medium leading-relaxed max-w-[270px]">
              Dinleyiciler yani ben, bu konuya tam{' '}
              <span className="text-white font-black text-2xl leading-none">
                {mainTopic.count}
              </span>{' '}
              kez maruz kaldı.
            </p>
          </div>
        </div>

        {/* LOWER LIST */}
        <div
          className={`mt-5 flex-1 transition-all duration-1000 ${
            phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {others.length > 0 && (
            <div className="text-[10px] uppercase tracking-[0.28em] text-sky-300/70 font-black mb-3 ml-1">
              Diğer Hit Bölümler
            </div>
          )}

          <div className="space-y-2.5">
            {others.map((topic, index) => (
              <div
                key={index}
                className={`flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl px-4 py-3.5 transition-all duration-700 ${
                  phase >= 4 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 180}ms` }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-cyan-400/35 font-black italic text-lg shrink-0">
                    #{index + 2}
                  </span>
                  <span className="font-bold text-white/90 text-[1.05rem] truncate">
                    {topic.name}
                  </span>
                </div>

                <span className="text-sm font-semibold text-cyan-200/65 shrink-0 ml-3">
                  {topic.count} kez
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div
          className={`pt-4 text-center text-cyan-400/25 text-[10px] font-black uppercase tracking-[0.34em] transition-opacity duration-1000 ${
            phase >= 4 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Nisatify Podcast
        </div>
      </div>
    </div>
  );
};