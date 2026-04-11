import React, { useState } from 'react';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { WrappedExperience } from './components/WrappedExperience';

export default function App() {
  const [step, setStep] = useState('WELCOME');

  return (
    <div className="h-screen w-full sm:max-w-md sm:mx-auto sm:border-x sm:border-white/10 overflow-hidden bg-black text-white selection:bg-pink-500/30">
      {step === 'WELCOME' && <WelcomeScreen onNext={() => setStep('LOGIN')} />}
      {step === 'LOGIN' && <LoginScreen onLogin={() => setStep('WRAPPED')} />}
      {step === 'WRAPPED' && <WrappedExperience />}
    </div>
  );
}