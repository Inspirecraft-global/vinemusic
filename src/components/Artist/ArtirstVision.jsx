import React from 'react';
import HeroString from '../../assets/Images/artis.png';
import Ane from '../../assets/Images/Anemo.png';
import Kairo from '../../assets/Images/Kairo.png';
import Zara from '../../assets/Images/zara.png';
import { NavLink } from 'react-router';

export default function ArtirstVision() {
  return (
    <div className="aboutus font-lato grid gap-4 grid-cols-1 md:grid-cols-2 px-4 lg:px-[126px] text-white  py-[86px]">
      <NavLink to={'/artist/lafred-john'} className="border-1 border-[#F8F6F1] p-2">
        <div className="relative  ">
          <img
            src={HeroString}
            alt="Hero Background"
            className="w-full h-full "
          />
          <h3 className="absolute md:text-4xl object-cover bottom-0 bg-[#0000004D] w-full font-bold flex justify-center items-center p-3">
            Lafred John{' '}
          </h3>
        </div>
      </NavLink>

      <NavLink
        to={'/artist/jordan-kairo'}
        className="border-1 border-[#F8F6F1] p-2 md:px-2 md:pt-5"
      >
        <div className="relative  ">
          <img
            src={Kairo}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute md:text-4xl bottom-0 bg-[#0000004D] w-full font-bold flex justify-center items-center p-3">
            Jordan Kairo{' '}
          </h3>
        </div>
      </NavLink>
      <NavLink to={'/artist/amae-leigh'} className="border-1 border-[#F8F6F1] p-2">
        <div className="relative  ">
          <img
            src={Ane}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute md:text-4xl bottom-0 bg-[#0000004D] w-full font-bold flex justify-center items-center p-3">
            Amaé Leigh{' '}
          </h3>
        </div>
      </NavLink>
      <NavLink to={'/artist/zaria-nkozi'} className="border-1 border-[#F8F6F1] p-2">
        <div className="relative  ">
          <img
            src={Zara}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute md:text-4xl bottom-0 bg-[#0000004D] w-full font-bold flex justify-center items-center p-3">
            Zaria Nkozi{' '}
          </h3>
        </div>
      </NavLink>
    </div>
  );
}
