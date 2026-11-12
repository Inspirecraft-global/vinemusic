import React from 'react';
import Navbar from '../../common/Navbar';
import HeroImage from '../../assets/Images/vine.png';
import string from '../../assets/Images/Group.png';
import HeroString from '../../assets/Images/New.png';

export default function Hero() {
  return (
    <div className="hero h-full w-full ">
      <div className="w-full px-2 lg:px-24 pt-12">
        <Navbar />
        <img
          src={HeroImage}
          alt="Hero Background"
          className="w-full  object-cover mt-[56px]"
        />
      </div>
      <img
        src={string}
        alt="Hero Background"
        className="w-full  object-cover pb-20 "
      />
    </div>
  );
}
