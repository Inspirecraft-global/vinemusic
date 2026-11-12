import React, { useState } from 'react';
import AnnabelCover from '../../assets/Images/ana.png';
import { NavLink } from 'react-router';

const releases = [
  {
    id: 'love-and-light-5',
    artist: 'Sammy Greyson',
    title: 'Annabel',
    cover: AnnabelCover,
    audio: '/audio/Annabel.mp3',
    videoId: 'G24YRUYI5bg',
    ditto: 'https://ditto.fm/annabel',
  },
];

export default function ReleasesHome() {
  const [playbackMode, setPlaybackMode] = useState('audio');

  return (
    <div className="aboutus w-full py-10 font-lato">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        {/* Title & Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest Releases 🎶
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Discover the freshest tracks from{' '}
            <span className="font-semibold">Sammy Greyson</span>. Hit play to
            enjoy smooth vibes and get lost in the rhythm.
          </p>
        </div>

        {releases.map((r, idx) => {
          const isImageLeft = idx % 2 === 0;
          return (
            <div key={r.id} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {isImageLeft ? (
                  <img
                    src={r.cover}
                    alt={r.title}
                    className="w-full h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded"
                  />
                ) : (
                  <ReleasePlayer release={r} mode={playbackMode} onModeChange={setPlaybackMode} />
                )}

                {!isImageLeft ? (
                  <img
                    src={r.cover}
                    alt={r.title}
                    className="w-full h-[300px] md:h-[300px] lg:h-[340px] object-cover rounded"
                  />
                ) : (
                  <ReleasePlayer release={r} mode={playbackMode} onModeChange={setPlaybackMode} />
                )}
              </div>

              <div className="mt-6 border-t border-white/10" />

              <NavLink to={`/release`} className="flex justify-center">
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Listen More 🎧
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ReleasePlayer({ release, mode, onModeChange }) {
  return (
    <div className="flex flex-col justify-center px-2">
      <h3 className="text-white text-xl md:text-2xl font-bold">{release.artist}</h3>
      <p className="text-white/80 mt-2">{release.title}</p>

      <div className="mt-4 inline-flex w-fit rounded-full border border-white/20 bg-black/20 p-1" aria-label={`Choose how to play ${release.title}`}>
        <button
          type="button"
          onClick={() => onModeChange('audio')}
          aria-pressed={mode === 'audio'}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${mode === 'audio' ? 'bg-white text-[#4B0082]' : 'text-white/80 hover:bg-white/10'}`}
        >
          Audio
        </button>
        <button
          type="button"
          onClick={() => onModeChange('video')}
          aria-pressed={mode === 'video'}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${mode === 'video' ? 'bg-white text-[#4B0082]' : 'text-white/80 hover:bg-white/10'}`}
        >
          Video
        </button>
      </div>

      {mode === 'video' ? (
        <div className="mt-4 aspect-video w-full max-w-xl overflow-hidden rounded bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${release.videoId}?rel=0`}
            title={`${release.title} video`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <audio controls src={release.audio} className="mt-4 w-full max-w-[300px]" />
      )}
    </div>
  );
}
