import React, { useState } from 'react';
import Cover3 from '../../assets/Images/beau.jpeg';
import Cover1 from '../../assets/Images/volin.jpg';
import Cover2 from '../../assets/Images/madt.jpeg';
import Cover4 from '../../assets/Images/praise.jpeg';
import Cover7 from '../../assets/Images/ana.png';
import Cover5 from '../../assets/Images/vint.jpg';
import Cover6 from '../../assets/Images/grac.png';

const releases = [
  {
    id: 'love-and-light',
    artist: 'Sammy Greyson ',
    title: 'Beautiful Day',
    cover: Cover3,
    audio: '/audio/beautiful.mp3',
    videoId: '0oJO_MIE2q8',
    ditto: 'https://ditto.fm/beautiful_day_0c6560df',
  },
/*   {
    id: 'love-and-light-2',
    artist: 'Sammy Greyson',
    title: 'Madt-DEMO.mp3',
    cover: Cover2,
    audio: '/audio/Madt.mp3',
    videoId: 'YpGE-yxvoI8',
    ditto: 'https://ditto.fm/madt',
  }, */
  {
    id: 'love-and-light-3',
    artist: 'Sammy Greyson',
    title: 'Madt-Live.mp3',
    cover: Cover2,
    audio: '/audio/Madt-LIVE.mp3',
    videoId:'HYxSwCmZoJE',
    ditto: 'https://ditto.fm/madt',
  },
  {
    id: 'love-and-light-4',
    artist: 'Sammy Greyson',
    title: 'Unsual Praise_Sammy Droos',
    cover: Cover4,
    audio: '/audio/Praise_Sammy.mp3',
    videoId: '50MVMz04UBU',
    ditto: 'https://ditto.fm/unusual-praise',


  },
  {
    id: 'love-and-light-5',
    artist: 'Sammy Greyson',
    title: 'Annabel',
    cover: Cover7,
    audio: '/audio/AUD-20250619-WA0007.mp3',
    videoId: 'X6QgFqTOkS0',
    ditto: 'https://ditto.fm/annabel',
  },
    {
    id: 'love-and-light-5',
    artist: 'Sammy Greyson',
    title: 'GFTR (Grace For The Race)',
    cover: Cover6,
    audio: '/audio/AUD-20250619-WA0007.mp3',
    videoId:'hcsF8f02ta8',
    ditto: 'https://ditto.fm/gftr',
  },
];

export default function ReleaseDetails() {
  const [playbackModes, setPlaybackModes] = useState({});

  const setPlaybackMode = (releaseId, mode) => {
    setPlaybackModes((current) => ({ ...current, [releaseId]: mode }));
  };

  const releaseInfo = (release) => {
    const mode = playbackModes[release.id] || 'audio';
    return (
      <div className="flex flex-col justify-center px-2">
        <h3 className="text-white text-xl md:text-2xl font-bold">
          {release.artist}
        </h3>
        <p className="text-white/80 mt-2">{release.title}</p>

        <div className="mt-4 inline-flex w-fit rounded-full border border-white/20 bg-black/20 p-1" aria-label={`Choose how to play ${release.title}`}>
          <button
            type="button"
            onClick={() => setPlaybackMode(release.id, 'audio')}
            aria-pressed={mode === 'audio'}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${mode === 'audio' ? 'bg-white text-[#4B0082]' : 'text-white/80 hover:bg-white/10'}`}
          >
            Audio
          </button>
          {release.videoId && (
            <button
              type="button"
              onClick={() => setPlaybackMode(release.id, 'video')}
              aria-pressed={mode === 'video'}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${mode === 'video' ? 'bg-white text-[#4B0082]' : 'text-white/80 hover:bg-white/10'}`}
            >
              Video
            </button>
          )}
        </div>

        {mode === 'video' && release.videoId ? (
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

        {release.ditto && (
          <a
            href={release.ditto}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-[#4B0082] transition hover:bg-white/90"
          >
            Listen on Ditto
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="aboutus px-4 lg:px-24 py-10 font-lato">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        {releases.map((r, idx) => {
          const isImageLeft = idx % 2 === 0;
          return (
            <div key={r.id} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {isImageLeft ? (
                  <img
                    src={r.cover}
                    alt={r.title}
                    className="w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover rounded"
                  />
                ) : (
                  releaseInfo(r)
                )}

                {!isImageLeft ? (
                  <img
                    src={r.cover}
                    alt={r.title}
                    className="w-full h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded"
                  />
                ) : (
                  releaseInfo(r)
                )}
              </div>

              <div className="mt-6 border-t border-white/10" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
