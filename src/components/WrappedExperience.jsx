import React, { useState } from 'react';

import { SlideNewIntro } from './slides/SlideNewIntro';
import { SlideStory1 } from './slides/SlideStory1';
import { SlideStory2 } from './slides/SlideStory2';
import { SlideMinutes } from './slides/SlideMinutes';
import { SlideConversationTypes } from './slides/SlideTopGenres';
import { SlideChapterStart } from './slides/SlideChapterStart';
import { SlideCatchphrase } from './slides/SlideCatchphrase';
import { SlideBestJokes } from './slides/SlideBestJokes';
import { SlideTopTopics } from './slides/SlideTopTopics';
import { SlideDiscoveries } from './slides/SlideDiscoveries';
import { SlideFeltAge } from './slides/SlideFeltAge';
import { SlideMoodSwings } from './slides/SlideMoodSwings';
import { SlideAuraColor } from './slides/SlideAuraColor';
import { SlidePodcast } from './slides/SlidePodcast';
import { SlidePeakMoment } from './slides/SlidePeakMoment';
import { SlideBestMadeStickers } from './slides/SlideBestMadeStickers';
import { SlidePersonaCard } from './slides/SlidePersonaCard';
import { SlideSoftEnding } from './slides/SlideSoftEnding';
import { SlideBirthdayMode } from './slides/SlideBirthdayMode';
import { SlideBirthdayWish } from './slides/SlideBirthdayWish';
import { SlideGladYouExist } from './slides/SlideGladYouExist';
import { SlideVirtualParty } from './slides/SlideVirtualParty';

import { AudioController } from './AudioController';
import { WRAPPED_DATA, CONFIG } from '../data/config';

export const WrappedExperience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [muted, setMuted] = useState(false);

  const slides = [
    {
      key: 'intro',
      musicKey: 'newIntro',
      component: <SlideNewIntro />
    },
    {
      key: 'chapter',
      musicKey: 'chapter',
      component: <SlideChapterStart />
    },
    {
      key: 'story1',
      musicKey: 'story1',
      component: <SlideStory1 />
    },
    {
      key: 'story2',
      musicKey: 'story2',
      component: <SlideStory2 />
    },
    {
      key: 'minutes',
      musicKey: 'minutes',
      component: <SlideMinutes minutes={WRAPPED_DATA.minutesListened} />
    },
    {
      key: 'conversationTypes',
      musicKey: 'conversationTypes',
      component: (
        <SlideConversationTypes types={WRAPPED_DATA.conversationTypes} />
      )
    },
    {
      key: 'moods',
      musicKey: 'moodSwings',
      component: <SlideMoodSwings moods={WRAPPED_DATA.moodProfile} />
    },
    {
      key: 'aura',
      musicKey: 'aura',
      component: <SlideAuraColor aura={WRAPPED_DATA.auraColor} />
    },
    {
      key: 'catchphrase',
      musicKey: 'catchphrase',
      component: <SlideCatchphrase phrases={WRAPPED_DATA.topPhrases} />
    },
    {
      key: 'jokes',
      musicKey: 'bestJokes',
      component: <SlideBestJokes jokes={WRAPPED_DATA.bestJokes} />
    },
    {
      key: 'topics',
      musicKey: 'topTopics',
      component: <SlideTopTopics topics={WRAPPED_DATA.topTopics} />
    },
    {
      key: 'discoveries',
      musicKey: 'discoveries',
      component: <SlideDiscoveries discoveries={WRAPPED_DATA.discoveries} />
    },
    {
      key: 'feltAge',
      musicKey: 'feltAge',
      component: <SlideFeltAge feltAge={WRAPPED_DATA.feltAge} />
    },
    {
      key: 'podcast',
      musicKey: 'podcast',
      component: <SlidePodcast topics={WRAPPED_DATA.podcastTopics} />
    },
    {
      key: 'peakMoment',
      musicKey: 'peakMoment',
      component: <SlidePeakMoment peakMoment={WRAPPED_DATA.peakMoment} />
    },
    {
      key: 'bestMadeStickers',
      musicKey: 'bestMadeStickers',
      component: (
        <SlideBestMadeStickers stickers={WRAPPED_DATA.bestMadeStickers} />
      )
    },
    {
      key: 'persona',
      musicKey: 'persona',
      component: <SlidePersonaCard persona={WRAPPED_DATA.personaCard} />
    },
    {
      key: 'softEnding',
      musicKey: 'softEnding',
      component: <SlideSoftEnding />
    },
    {
      key: 'birthdayMode',
      musicKey: 'birthdayMode',
      component: <SlideBirthdayMode />
    },
    {
      key: 'birthdayWish',
      musicKey: 'birthdayWish',
      component: <SlideBirthdayWish birthday={WRAPPED_DATA.birthdayWish} />
    },
    {
      key: 'gladYouExist',
      musicKey: 'gladYouExist',
      component: (
        <SlideGladYouExist message={WRAPPED_DATA.gladYouExist} />
      )
    },
    {
      key: 'virtualParty',
      musicKey: 'virtualParty',
      component: <SlideVirtualParty party={WRAPPED_DATA.virtualParty} />
    }
  ];

  const currentSlideData = slides[currentSlide];
  const currentMusicSrc = CONFIG.slideMusic?.[currentSlideData?.musicKey] ?? null;

  const handleNext = () => {
    if (!musicEnabled) {
      setMusicEnabled(true);
    }

    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!musicEnabled) {
      setMusicEnabled(true);
    }

    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();

    if (!musicEnabled) {
      setMusicEnabled(true);
    }

    setMuted((prev) => !prev);
  };

  const volumeBySlide = currentSlideData?.musicKey === 'virtualParty' ? 0.58 : 0.38;

  return (
    <div className="relative h-full w-full bg-black overflow-hidden select-none">
      <AudioController
        src={currentMusicSrc}
        enabled={musicEnabled}
        muted={muted}
        volume={volumeBySlide}
        loop={true}
        fadeMs={450}
      />

      <div className="absolute top-0 left-0 w-full p-4 flex gap-2 z-50">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
          >
            <div
              className={`h-full bg-white transition-all duration-300 ${
                idx < currentSlide
                  ? 'w-full'
                  : idx === currentSlide
                    ? 'w-full animate-pulse shadow-[0_0_10px_white]'
                    : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={toggleMute}
        className="absolute top-8 right-4 z-[70] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/10 shadow-lg"
      >
        {!muted && musicEnabled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>

      <div className="h-full w-full relative">
        {currentSlideData.component}
      </div>

      <div className="absolute inset-0 flex z-40">
        <div
          className="w-1/3 h-full cursor-pointer"
          onClick={handlePrev}
        />
        <div
          className="w-2/3 h-full cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};