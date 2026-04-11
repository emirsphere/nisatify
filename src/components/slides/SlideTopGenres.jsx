import React, { useState, useEffect } from 'react';

export const SlideTopGenres = ({ genres }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1500);
    const t2 = setTimeout(() => setPhase(2), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex flex-col justify-center h-full p-8 bg-gradient-to-br from-green-600 to-teal-900 text-white animate-in fade-in duration-500 relative">
      <h2 className={`font-black w-full transition-all duration-1000 ease-in-out absolute left-0 px-8
        ${phase === 0 ? 'text-3xl sm:text-4xl top-[45%] text-center opacity-100' : 'text-2xl sm:text-3xl top-[12%] text-left opacity-90'}`}>
        Sohbetlerimizin Tür Dağılımı
      </h2>

      <div className={`flex flex-col gap-6 sm:gap-8 w-full mt-32 transition-all duration-1000 
        ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {genres.map((genre, idx) => (
          <div key={idx} className="flex flex-col gap-2 sm:gap-3">
            <div className="flex justify-between items-end">
              <span className="text-lg sm:text-xl font-bold tracking-wide">{genre.name}</span>
              <span className="text-base sm:text-lg font-black opacity-80">% {genre.percentage}</span>
            </div>
            <div className="w-full h-4 bg-black/20 rounded-full overflow-hidden shadow-inner">
              <div 
                className={`h-full ${genre.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ 
                  width: phase === 2 ? `${genre.percentage}%` : '0%',
                  transitionDelay: `${idx * 0.15}s` 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};