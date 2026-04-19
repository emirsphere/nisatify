import React, { useEffect, useRef } from 'react';

export const AudioController = ({
  src,
  enabled,
  muted = false,
  volume = 0.38,
  loop = true,
  fadeMs = 450
}) => {
  const audioRef = useRef(null);
  const previousSrcRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;
    audio.muted = muted;

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }

    if (!enabled || !src) {
      audio.pause();
      audio.currentTime = 0;
      previousSrcRef.current = null;
      return;
    }

    if (previousSrcRef.current === src) {
      audio.volume = volume;
      audio.loop = loop;

      audio.play().catch(() => {});
      return;
    }

    const changeTrack = () => {
      audio.pause();
      audio.currentTime = 0;
      audio.src = src;
      audio.loop = loop;
      audio.volume = 0;

      previousSrcRef.current = src;

      audio.play().catch(() => {});

      const steps = 15;
      const stepVolume = volume / steps;
      const stepTime = Math.max(20, fadeMs / steps);

      let currentStep = 0;

      fadeIntervalRef.current = setInterval(() => {
        currentStep += 1;

        if (!audioRef.current) return;

        audioRef.current.volume = Math.min(volume, stepVolume * currentStep);

        if (currentStep >= steps) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
      }, stepTime);
    };

    if (!audio.paused && audio.volume > 0.02) {
      const steps = 10;
      const stepTime = Math.max(20, fadeMs / steps);
      const startVolume = audio.volume;
      let currentStep = 0;

      fadeIntervalRef.current = setInterval(() => {
        currentStep += 1;

        if (!audioRef.current) return;

        const nextVolume = startVolume * (1 - currentStep / steps);
        audioRef.current.volume = Math.max(0, nextVolume);

        if (currentStep >= steps) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
          changeTrack();
        }
      }, stepTime);
    } else {
      changeTrack();
    }

    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
    };
  }, [src, enabled, muted, volume, loop, fadeMs]);

  return <audio ref={audioRef} preload="auto" />;
};