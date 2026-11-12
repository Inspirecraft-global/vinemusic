import React from 'react';
import AboutHero from '../components/About/AboutHero';
import AboutMission from '../components/About/MissionAbout';
import AboutCEO from '../components/About/AboutCEO';

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutCEO />
    </div>
  );
}
