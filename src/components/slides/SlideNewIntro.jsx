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

export const SlideStory1 = () => (
  <div className="flex flex-col justify-center h-full p-8 bg-gradient-to-b from-blue-900 to-indigo-900 text-white animate-in fade-in duration-500">
    <h2 className="text-4xl sm:text-5xl font-black mb-8 leading-tight">Koca bir 20 yaş bitti.</h2>
    <p className="text-xl sm:text-2xl font-semibold opacity-90 leading-relaxed mb-6">
      Kolay olmadı biliyorum. Krizler, sınavlar, hüzünler...
    </p>
    <p className="text-lg font-medium opacity-60">
      Ama bir şekilde atlattın. (Sayemde)
    </p>
  </div>
);

export const SlideStory2 = () => (
  <div className="flex flex-col justify-center items-center text-center h-full p-8 bg-gradient-to-tr from-orange-600 to-red-700 text-white animate-in fade-in duration-500">
    <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-10 shadow-lg"></div>
    <h2 className="text-4xl font-black mb-6 leading-tight">Peki bu yıl arka planda neler oldu?</h2>
    <p className="text-lg sm:text-xl font-medium opacity-90">
      Şimdi seninle derinlemesine inceleme vakti. Yüzleşmeye hazır mısın?
    </p>
  </div>
);