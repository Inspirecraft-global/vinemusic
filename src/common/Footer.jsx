import React from 'react';
import {
  FacebookIcon,
  InstagraIcon,
  LinkdinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../assets/icons';

export default function Footer() {
  return (
    <div className="bg-black py-20 text-white footer flex flex-col gap-[140px] justify-center items-center">
      <button className="text-[#F8F6F1]  border-white border-1 md:px-52 py-3 md:py-5 font-bold text-2xl px-5 md:text-4xl cursor-pointer rounded-full">
        Discover the Sound
      </button>
      <div className="flex flex-col lg:flex-row  justify-between w-full px-2 lg:px-[189px] items-center">
        <div className="flex gap-8 items-center">
          <InstagraIcon />
          <FacebookIcon />
          <YoutubeIcon />
          <TwitterIcon />
          <LinkdinIcon />
        </div>
        <div>
          <h3 className="md:text-[32px] text-lg">©Vine Music 2025</h3>
        </div>
      </div>
    </div>
  );
}
