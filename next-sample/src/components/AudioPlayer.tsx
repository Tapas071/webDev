"use client";
import React, { useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current && !isPlaying) {
      console.log("Playing audio");
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current && isPlaying) {
      console.log("Pausing audio");
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src="/assets/audios/expire.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={playAudio} disabled={isPlaying}>
        Play
      </button>
      <button onClick={pauseAudio} disabled={!isPlaying}>
        Pause
      </button>
    </div>
  );
};

export default AudioPlayer;
