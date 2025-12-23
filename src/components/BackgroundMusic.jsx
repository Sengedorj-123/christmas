import React, { useState, useEffect, useRef } from "react";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const hasAttemptedAutoplay = useRef(false);
  const audioRef = useRef(null);
  const audioFileName = "/Dean Martin - Let It Snow! Let It Snow! Let It Snow! (Official Video).mp3";

  useEffect(() => {
    // Sync volume with audio element
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    // Try to autoplay on first user interaction anywhere on the page
    const handleFirstInteraction = async () => {
      if (audioRef.current && !hasAttemptedAutoplay.current) {
        hasAttemptedAutoplay.current = true;
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Audio playback failed:", error);
        }
      }
    };

    // Listen for various user interactions
    const events = ['click', 'touchstart', 'keydown'];
    
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true, passive: true });
    });

    // Try immediate autoplay (may fail due to browser policy)
    const attemptImmediateAutoplay = async () => {
      if (audioRef.current && !hasAttemptedAutoplay.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          hasAttemptedAutoplay.current = true;
        } catch (error) {
          // Expected to fail - will play on first user interaction instead
        }
      }
    };

    const timer = setTimeout(() => {
      attemptImmediateAutoplay();
    }, 100);

    return () => {
      clearTimeout(timer);
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {
          console.log("Audio playback failed");
        });
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <div className="fixed top-[calc(50%+220px)] sm:top-[calc(50%+240px)] md:top-[calc(50%+260px)] lg:top-[calc(50%+280px)] left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <audio
        ref={audioRef}
        loop
        autoPlay
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={audioFileName} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Main Player Container */}
      <div className="flex items-center gap-4 sm:gap-5 bg-gradient-to-r from-black/60 via-black/50 to-black/60 backdrop-blur-xl rounded-full px-6 py-3 sm:px-8 sm:py-4 border border-white/20 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-white/30 hover:shadow-amber-500/20">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className={`relative text-white transition-all duration-300 rounded-full p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black/50 ${
            isPlaying 
              ? 'hover:text-amber-300 hover:scale-110' 
              : 'hover:text-amber-200 hover:scale-105'
          }`}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {/* Pulsing glow effect when playing */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping"></div>
          )}
          <div className="relative">
            {isPlaying ? (
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </button>

        {/* Volume Control Container */}
        <div className="flex items-center gap-3">
          {/* Volume Icon */}
          <div className="text-white/80">
            {volume === 0 ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.828 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.828l3.555-3.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            ) : volume < 50 ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.828 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.828l3.555-3.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.828 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.828l3.555-3.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            )}
          </div>

          {/* Volume Slider */}
          <div className="relative flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="music-player-slider w-32 sm:w-40 md:w-48 h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer transition-all duration-200 hover:h-2 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                background: `linear-gradient(to right, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0.8) ${volume}%, rgba(255, 255, 255, 0.2) ${volume}%, rgba(255, 255, 255, 0.2) 100%)`
              }}
              aria-label="Volume control"
            />
          </div>

          {/* Volume Percentage (optional, can be removed if too cluttered) */}
          <div className="text-right mb-2">
          <span className="text-white/70 text-xs sm:text-sm font-medium min-w-10 text-right mb-2">
           
          </span>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

