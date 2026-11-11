import React, { useMemo, useRef, useState } from 'react';
import Artist1 from '../../assets/Images/media.png';
import Artist2 from '../../assets/Images/music.png';
import Artist4 from '../../assets/Images/media.png';
import Artist3 from '../../assets/Images/music.png';

function PlayIcon({ isPlaying }) {
  return (
    <span
      className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 text-[#4B0082]"
      aria-hidden="true"
    >
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M9 5h2v14H9zM13 5h2v14h-2z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </span>
  );
}

export default function MediaDetails() {
  const audioRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tiles = useMemo(
    () => [
      { id: 0, image: Artist1, title: 'Studio Session' },
      { id: 1, image: Artist2, title: 'Interview' },
      { id: 2, image: Artist3, title: 'Behind The Scenes' },
      { id: 3, image: Artist4, title: 'Live Performance' },
    ],
    []
  );

  const dummySrc =
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  const handlePlay = (index) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (activeIndex === index) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
      return;
    }

    setActiveIndex(index);
    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen aboutus">
      <div className="px-4 lg:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiles.map((tile, index) => (
            <button
              key={tile.id}
              onClick={() => handlePlay(index)}
              className="relative group rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <img
                src={tile.image}
                alt={tile.title}
                className="w-full h-[260px] md:h-[300px] lg:h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayIcon isPlaying={isPlaying && activeIndex === index} />
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white font-bold text-lg md:text-xl drop-shadow">
                {tile.title}
              </div>
              {activeIndex === index && (
                <div className="absolute inset-0 ring-4 ring-white/60 rounded-lg pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>

      <audio
        ref={audioRef}
        src={dummySrc}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
    </div>
  );
}

/* import React from 'react';
import CEO from '../../assets/Images/media.png';
import liste from '../../assets/Images/music.png';
import { NavLink } from 'react-router';

export default function MediaDetails() {
  return (
    <div className="mediadetails grid grid-cols-1 space-x-6 space-y-6 md:grid-cols-2 px-4 md:px-[100px] py-[86px]">
      <div className="h-[500px]">
        <div className="  ">
          <img
            src={CEO}
            alt="Hero Background"
            className="w-full object-cover h-full "
          />
        </div>
      </div>
      <div className="h-[500px]">
        <div className="r ">
          <img
            src={liste}
            alt="Hero Background"
            className="w-full object-cover h-full "
          />
        </div>
      </div>
    </div>
  );
}
 */
