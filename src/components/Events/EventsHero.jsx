import React from 'react';
import Navbar from '../../common/Navbar';
import HeroString from '../../assets/Images/newwine.png';

export default function EventsHero() {
  return (
    <div className="bg-black h-full w-full ">
      <div className="w-full px-2 lg:px-24 pt-12">
        <Navbar />
      </div>

      <div className="flex font-lato justify-between items-center">
        <div className="px-4 py-10 lg:py-0 flex flex-col items-center lg:items-start md:px-24">
          <h3 className=" text-4xl font-extrabold text-white md:text-6xl">
            EVENTS
          </h3>
          <p className="text-white text-center lg:text-start text-lg md:text-xl  mt-6 lg:max-w-lg">
            Steps in rhythm where presence meets purpose in sacred gatherings
            shaped by sound where voices rise hearts open and every moment
            becomes a memory
          </p>
        </div>
        <img
          src={HeroString}
          alt="Hero Background"
          className="w-[500px] hidden lg:block h-[500px] pb-20 "
        />
      </div>
    </div>
  );
}
