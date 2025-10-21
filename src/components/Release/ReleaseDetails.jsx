import React from 'react';
import Cover3 from '../../assets/Images/audi.jpg';
import Cover1 from '../../assets/Images/volin.jpg';
import Cover2 from '../../assets/Images/Guitar.jpeg';
import Cover4 from '../../assets/Images/net.jpg';
import Cover5 from '../../assets/Images/vint.jpg';

const releases = [
  {
    id: 'love-and-light',
    artist: 'Sammy Greyson ',
    title: 'Beautiful Day',
    cover: Cover3,
    audio: '/audio/Sammy.mp3',
  },
  {
    id: 'love-and-light-2',
    artist: 'Sammy Greyson',
    title: 'Madt-DEMO.mp3',
    cover: Cover2,
    audio: '/audio/Madt.mp3',
  },
  {
    id: 'love-and-light-3',
    artist: 'Sammy Greyson',
    title: 'Madt-Live.mp3',
    cover: Cover1,
    audio: '/audio/Madt-LIVE.mp3',
  },
  {
    id: 'love-and-light-4',
    artist: 'Sammy Greyson',
    title: 'Unsual Praise_Sammy Droos',
    cover: Cover4,
    audio: '/audio/Praise_Sammy.mp3',
  },
  {
    id: 'love-and-light-5',
    artist: 'Sammy Greyson',
    title: 'Unsual Praise_Sammy Droos',
    cover: Cover5,
    audio: '/audio/AUD-20250619-WA0007.mp3',
  },
];

export default function ReleaseDetails() {
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
                    className="w-full h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded"
                  />
                ) : (
                  <div className="flex flex-col justify-center px-2">
                    <h3 className="text-white text-xl md:text-2xl font-bold">
                      {r.artist}
                    </h3>
                    <p className="text-white/80 mt-2">{r.title}</p>
                    <audio controls src={r.audio} className="mt-3 w-[300px]" />
                  </div>
                )}

                {!isImageLeft ? (
                  <img
                    src={r.cover}
                    alt={r.title}
                    className="w-full h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded"
                  />
                ) : (
                  <div className="flex flex-col justify-center px-2">
                    <h3 className="text-white text-xl md:text-2xl font-bold">
                      {r.artist}
                    </h3>
                    <p className="text-white/80 mt-2">{r.title}</p>
                    <audio controls src={r.audio} className="mt-3 w-[300px]" />
                  </div>
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
