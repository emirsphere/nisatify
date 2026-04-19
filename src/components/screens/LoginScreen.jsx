import React, { useState } from 'react';
import { CONFIG } from '../../data/config';
import { LockKeyhole, Sparkles, ArrowRight } from 'lucide-react';

export const LoginScreen = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentInput = password.trim().toLowerCase();

    if (currentInput === CONFIG.CORRECT_PASSWORD) {
      onLogin();
      return;
    }

    const matchedGroup = CONFIG.SPECIFIC_ERRORS.find((group) =>
      group.keywords.includes(currentInput)
    );

    if (matchedGroup) {
      const randomMsg =
        matchedGroup.messages[
          Math.floor(Math.random() * matchedGroup.messages.length)
        ];

      setErrorMessage(randomMsg);
    } else {
      const randomGenericMsg =
        CONFIG.GENERIC_ERRORS[
          Math.floor(Math.random() * CONFIG.GENERIC_ERRORS.length)
        ];

      setErrorMessage(randomGenericMsg);
    }

    setPassword('');
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#070312] text-white">
      <style>
        {`
          @keyframes softPulse {
            0%, 100% { opacity: .45; transform: scale(1); }
            50% { opacity: .9; transform: scale(1.08); }
          }

          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-9px); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
            22% { opacity: .55; }
            100% { transform: translateX(230%) skewX(-18deg); opacity: 0; }
          }

          @keyframes buttonGlow {
            0%, 100% { box-shadow: 0 0 36px rgba(217,70,239,.28), 0 0 70px rgba(236,72,153,.18); }
            50% { box-shadow: 0 0 54px rgba(217,70,239,.48), 0 0 100px rgba(236,72,153,.32); }
          }

          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-6px); }
            80% { transform: translateX(6px); }
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.20),transparent_34%),linear-gradient(180deg,#1a0b2e_0%,#070312_55%,#030208_100%)]" />

        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-500/20 blur-[130px] animate-[softPulse_8s_ease-in-out_infinite]" />
        <div className="absolute top-[26%] -right-28 h-96 w-96 rounded-full bg-fuchsia-500/16 blur-[140px] animate-[softPulse_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-18%] left-[15%] h-96 w-96 rounded-full bg-pink-500/12 blur-[130px] animate-[softPulse_10s_ease-in-out_infinite]" />
      </div>

      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="select-none text-[7.5rem] font-black tracking-[-0.08em] text-white/[0.025] rotate-[-7deg]">
          VIP
        </span>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-7">
        <div className="w-full max-w-[340px]">
          {/* Icon */}
          <div className="mb-8 flex justify-center animate-[floatSlow_4s_ease-in-out_infinite]">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/12 bg-white/10 backdrop-blur-2xl shadow-[0_0_45px_rgba(168,85,247,0.22)]">
              <div className="absolute -inset-5 rounded-[2.4rem] bg-fuchsia-400/12 blur-2xl" />

              <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                <div
                  className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ animation: 'shimmer 3s ease-in-out infinite' }}
                />
              </div>

              <LockKeyhole size={34} className="relative z-10 text-purple-100" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.34em] text-purple-200/55">
              ÖZEL NISATIFY WRAPPED ERİŞİMİ
            </p>

            <h1 className="text-[2.9rem] font-black leading-[0.95] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-100">
              Ama önce...
            </h1>

            <p className="mx-auto mt-5 max-w-[295px] text-[1rem] font-medium leading-relaxed text-purple-100/62">
              Küçük bir güvenlik doğrulaması yapmamız lazım. Malum, özel
              veriler.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-10 flex w-full flex-col items-center">
            <div
              className={`w-full ${isShaking ? 'animate-[shake_500ms_ease-in-out]' : ''}`}
            >
              <label className="mb-3 block text-center text-[15px] font-black uppercase tracking-[0.24em] leading-relaxed text-purple-200/100">
                En sevdiğin, en mükemmel
                <br />
                arkadaşının adı:
              </label>

              <div className="relative overflow-hidden rounded-[1.6rem] border border-purple-200/25 bg-black/28 backdrop-blur-xl shadow-[inset_0_0_28px_rgba(255,255,255,0.04)]">
                <input
                  type="text"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  className="h-[74px] w-full bg-transparent px-5 text-center text-[2rem] font-black text-white outline-none placeholder:text-white/12"
                  placeholder="Cevap..."
                  autoFocus
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 flex h-[68px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-[1.05rem] font-black text-white shadow-[0_0_34px_rgba(217,70,239,0.35)] transition-transform active:scale-95"
              style={{ animation: 'buttonGlow 2.5s ease-in-out infinite' }}
            >
              <span>İçeri Gir</span>
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Error */}
          <div className="mt-7 min-h-[4.5rem]">
            {errorMessage && (
              <div className="rounded-[1.4rem] border border-pink-300/18 bg-pink-500/10 px-5 py-4 text-center backdrop-blur-xl animate-in fade-in zoom-in duration-300">
                <div className="mb-2 flex justify-center text-pink-200/70">

                </div>

                <p className="text-sm font-semibold leading-snug text-pink-100/86">
                  {errorMessage}
                </p>
              </div>
            )}
          </div>

          <p className="mt-2 text-center text-[10px] font-black uppercase tracking-[0.28em] text-white/18">
            nisatify
          </p>
        </div>
      </div>
    </div>
  );
};