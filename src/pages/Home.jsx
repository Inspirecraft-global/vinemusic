import React from 'react';
import Hero from '../components/Home/Hero';
import Mission from '../components/Home/Mission';
import FeaturedArtist from '../components/Home/FeaturedArtist';
import AboutHero from '../components/About/AboutHero';
import AboutMission from '../components/About/MissionAbout';
import AboutCEO from '../components/About/AboutCEO';
import ReleasesHome from '../components/Home/ReleasesHome';

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <Hero />
      <div id="about-us">
        <AboutHero />
      </div>
      <div id="mission-vision">
        <AboutMission />
      </div>
      <div id="about-ceo">
        <AboutCEO />
      </div>
      <ReleasesHome />
    </div>
  );
}
