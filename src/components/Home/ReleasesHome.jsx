import React from 'react';
import Cover3 from '../../assets/Images/audi.jpg';
import { NavLink } from 'react-router';

const releases = [
  {
    id: 'love-and-light-1',
    artist: 'Sammy Greyson ',
    title: 'Beautiful Day',
    cover: Cover3,
    audio: '/audio/Sammy.mp3',
  },
];

export default function ReleasesHome() {
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
