import React, { useState } from 'react';
import { CONFIG } from '../../data/config';

export const LoginScreen = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentInput = password.trim().toLowerCase();

    if (currentInput === CONFIG.CORRECT_PASSWORD) {
      onLogin();
    } else {
        
      
      const matchedGroup = CONFIG.SPECIFIC_ERRORS.find(group => 
        group.keywords.includes(currentInput)
      );

      if (matchedGroup) {
        const randomMsg = matchedGroup.messages[Math.floor(Math.random() * matchedGroup.messages.length)];
        setErrorMessage(randomMsg);
      } else {
        const randomGenericMsg = CONFIG.GENERIC_ERRORS[Math.floor(Math.random() * CONFIG.GENERIC_ERRORS.length)];
        setErrorMessage(randomGenericMsg);
      }

      setPassword('');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-indigo-950 via-purple-900 to-black text-white p-6 animate-in slide-in-from-right duration-500">
      <div className="w-full max-w-sm flex flex-col items-center">
        <h1 className="text-3xl font-black mb-3 text-center">Ama önce...</h1>
        <p className="mb-10 text-center text-purple-200 opacity-80 font-medium px-4">Küçük bir güvenlik doğrulaması yapmamız lazım. Malum, özel veriler.</p>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
          <div className={`w-full relative ${isShaking ? 'animate-shake' : ''}`}>
            <label className="text-xs sm:text-sm uppercase tracking-widest text-purple-300 font-bold mb-3 block text-center opacity-80">
              En sevdiğin, en mükemmel<br/>arkadaşının adı:
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 border-2 border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 text-center text-3xl font-black py-4 text-white transition-all placeholder-white/10 shadow-inner"
              placeholder="Cevap..."
              autoFocus
            />
          </div>
          
          <button 
            type="submit"
            className="mt-2 w-full max-w-[200px] py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-black text-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            İçeri Gir
          </button>
        </form>

        <div className="mt-8 min-h-[4rem] flex items-start justify-center w-full">
          {errorMessage && (
            <p className="text-pink-300 text-center font-semibold px-5 text-sm bg-pink-500/10 py-3 rounded-xl animate-in fade-in zoom-in duration-300 w-full border border-pink-500/20 leading-snug">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};