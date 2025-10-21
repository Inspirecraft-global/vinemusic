import React from 'react';
import Artist from '../../assets/Images/artis.png'; // Assuming you have an artist image
import Vector from '../../assets/Images/Vector.png'; // Assuming you have an artist image
import { ArrowDownIcon } from '../../assets/icons';

export default function FeaturedArtist() {
  return (
    <div className="featured w-full flex gap-[42px] justify-center items-center pt-[84px] flex-col ">
      <h3 className="font-lato text-3xl md:text-[60px]  text-white italic">
        Featured Artist
      </h3>
      <ArrowDownIcon />
      <img src={Artist} alt="artist" />
      <img src={Vector} alt="artist" />
    </div>
  );
}
