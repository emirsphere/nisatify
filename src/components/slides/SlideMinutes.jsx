import React, { useState, useEffect } from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const SlideMinutes = ({ minutes }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1800);
    const t2 = setTimeout(() => setPhase(2), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full p-6 bg-gradient-to-tr from-purple-900 via-purple-700 to-fuchsia-600 text-white animate-in fade-in duration-500 text-center relative overflow-hidden">
      <p className={`font-black uppercase tracking-widest transition-all duration-1000 ease-in-out absolute w-full text-center px-4
        ${phase === 0 ? 'text-3xl sm:text-4xl top-[45%] opacity-100 scale-100' : 'text-lg sm:text-xl top-[12%] opacity-80 scale-90'}`}>
        Bu yıl tam...
      </p>

      <div className={`transition-all duration-1000 ease-out transform w-full flex flex-col items-center justify-center
        ${phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'} mt-8`}>
        {phase >= 1 && (
          <h2 className="text-[5rem] sm:text-[6rem] leading-none font-black mb-4 text-yellow-300 drop-shadow-[0_0_25px_rgba(253,224,71,0.5)]">
            <AnimatedCounter end={minutes} duration={2000} />
          </h2>
        )}
        <p className={`text-2xl sm:text-3xl font-black transition-opacity duration-700 delay-500 px-2 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          dakika benim boş yapmamı dinledin.
        </p>
      </div>
      
      <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-5 absolute bottom-10 border border-white/20 shadow-2xl w-[90%] max-w-sm transition-all duration-1000 ease-out
        ${phase === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-sm sm:text-base text-purple-100 font-semibold leading-relaxed">
          Tebrikler! Beni dinleyenler arasında <span className="text-yellow-300 font-black">%0.00000001'lik</span> dilimdesin.
        </p>
        <p className="text-xs text-purple-300 mt-2 font-medium">
          (Çünkü senden başka kimse bu kadar tahammül edemezdi.)
        </p>
      </div>
    </div>
  );
};