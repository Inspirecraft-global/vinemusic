import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import { artistsData } from '../../data/artists';
import {
  InstagraIcon,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  LinkdinIcon,
} from '../../assets/icons';

export default function ArtistProfile() {
  const { id } = useParams();
  const artist = artistsData[id];

  if (!artist) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Artist Not Found</h1>
          <p className="text-xl mb-8">
            The artist you're looking for doesn't exist.
          </p>
          <Link
            to="/artists"
            className="bg-[#4B0082] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3a0066] transition-colors"
          >
            Back to Artists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with navbar overlaid on image */}
      <div className="relative artist-hero">
        <div className="w-full h-[260px] md:h-[360px] lg:h-[420px]">
          <img
            src={artist.heroImage}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        {/* Navbar over the banner */}
        <div className="absolute top-0 left-0 right-0">
          <div className="w-full px-2 lg:px-24 pt-12">
            <Navbar />
          </div>
        </div>

        {/* Artist Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            {artist.name}
          </h1>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href={artist.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <InstagraIcon />
            </a>
            <a
              href={artist.socialMedia.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">TT</span>
              </div>
            </a>
            <a
              href={artist.socialMedia.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <YoutubeIcon />
            </a>
            <a
              href={artist.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <TwitterIcon />
            </a>
            <a
              href={artist.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      {/* About Artist Section */}
      <div className="aboutus py-16 px-4 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artist Bio */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About {artist.name}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              {artist.bio}
            </p>

            {/* Artist Details */}
            <div className="space-y-4">
              <div>
                <span className="font-bold text-lg">Genre: </span>
                <span className="text-lg">{artist.genre}</span>
              </div>
              <div>
                <span className="font-bold text-lg">Location: </span>
                <span className="text-lg">{artist.location}</span>
              </div>
            </div>
          </div>

          {/* Artist Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-[300px] h-[400px] object-cover rounded-lg border-2 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Music Section */}
      <div className="aboutus py-16 px-4 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Music
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {artist.music.map((track) => (
            <div
              key={track.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              <div className="aspect-square mb-4">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-lg border border-white/20"
                />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-lg mb-1">{track.title}</h3>
                <p className="text-sm text-white/80 mb-1">{artist.name}</p>
                <p className="text-xs text-white/60">
                  {track.album} • {track.year}
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-[#4B0082] text-white text-xs rounded-full">
                  {track.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Artists Button */}
      <div className="bg-black py-12 flex justify-center">
        <Link
          to="/artists"
          className="bg-[#4B0082] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3a0066] transition-colors"
        >
          Back to All Artists
        </Link>
      </div>
    </div>
  );
}
