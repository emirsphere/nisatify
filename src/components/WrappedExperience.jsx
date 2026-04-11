import React, { useState, useEffect, useRef } from 'react';

// Importlar artık tek tek ve doğru dosya yollarından yapılıyor
import { SlideNewIntro } from './slides/SlideNewIntro';
import { SlideStory1 } from './slides/SlideStory1';
import { SlideStory2 } from './slides/SlideStory2';
import { SlideMinutes } from './slides/SlideMinutes';
import { SlideTopGenres } from './slides/SlideTopGenres';

import { WRAPPED_DATA, AUDIO_TRACKS } from '../data/config';

export const WrappedExperience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const slides = [
    <SlideNewIntro key="intro" />,
    <SlideStory1 key="story1" />,
    <SlideStory2 key="story2" />,
    <SlideMinutes key="minutes" minutes={WRAPPED_DATA.minutesListened} />,
    <SlideTopGenres key="genres" genres={WRAPPED_DATA.topGenres} />
  ];

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const playAudio = async () => {
      try {
        audioRef.current.pause();
        audioRef.current.src = AUDIO_TRACKS[currentSlide];
        audioRef.current.currentTime = 0;
        
        if (isPlaying || currentSlide === 0) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.warn("Kullanıcı çok hızlı geçti:", error.message);
      }
    };

    playAudio();
  }, [currentSlide, isPlaying]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.warn(e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  return (
    <div className="relative h-full w-full bg-black overflow-hidden select-none">
      <div className="absolute top-0 left-0 w-full p-4 flex gap-2 z-50">
        {slides.map((_, idx) => (
          <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-white transition-all duration-300 ${
                idx < currentSlide ? 'w-full' : idx === currentSlide ? 'w-full animate-pulse shadow-[0_0_10px_white]' : 'w-0'
              }`} 
            />
          </div>
        ))}
      </div>

      <button 
        onClick={toggleMute}
        className="absolute top-8 right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/10 shadow-lg"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        )}
      </button>

      <div className="h-full w-full relative">
        {slides[currentSlide]}
      </div>

      <div className="absolute inset-0 flex z-40">
        <div className="w-1/3 h-full cursor-pointer" onClick={handlePrev}></div>
        <div className="w-2/3 h-full cursor-pointer" onClick={handleNext}></div>
      </div>
    </div>
  );
};