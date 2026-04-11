import React from 'react';

export const SlideNewIntro = () => (
  <div className="flex flex-col justify-center h-full p-8 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-800 text-white animate-in fade-in duration-700">
    <div className="text-6xl mb-6 animate-bounce drop-shadow-2xl text-center">🎉</div>
    <h1 className="text-4xl font-black mb-6 leading-tight drop-shadow-md text-center">
      SONUNDA!
    </h1>
    <p className="text-lg font-medium opacity-90 delay-300 animate-in slide-in-from-bottom-8 fill-mode-backwards leading-relaxed text-center">
      Şifreyi bulman bir tık uzun sürdü sanki ama neyse. Hazırsan, senin için, sana özel özenle hazırlanan 20. yaşına bakış özetimiz başlıyor...
    </p>
  </div>
);