import React from 'react';

export const WelcomeScreen = ({ onNext }) => (
  <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-black via-gray-900 to-black text-white p-8 animate-in fade-in duration-1000">
    <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6 w-full">
      <div className="w-20 h-20 mb-2 rounded-full bg-white/10 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        <span className="text-3xl">✨</span>
      </div>
      <h1 className="text-4xl font-black tracking-tight">Selam.</h1>
      <p className="text-lg text-gray-400 max-w-[280px] leading-relaxed font-medium">
        Koca bir yılı daha geride bıraktık. İyisiyle, kötüsüyle ve bitmek bilmeyen boş muhabbetlerimizle...
      </p>
    </div>
    <div className="w-full pb-8">
      <button 
        onClick={onNext}
        className="w-full py-4 bg-white text-black font-extrabold rounded-full text-lg hover:scale-105 transition-transform active:scale-95 shadow-xl"
      >
        Hazırsan Başlayalım
      </button>
    </div>
  </div>
);