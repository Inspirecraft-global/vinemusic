import React from 'react';
import HeroString from '../../assets/Images/newwine.png';

export default function AboutHero() {
  return (
    <div className="  h-full w-full">
      <div className="py-14 font-lato">
        <div className="flex justify-center mb-8">
          <h3 className="mission text-white font-lato font-bold text-lg md:text-3xl text-whit px-[60px] py-[10px] rounded-full">
            ABOUT US
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-24 gap-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className=" text-lg text-center md:text-xl max-w-2xl leading-relaxed">
              Vine Music isn't just a record label, it's a heartbeat. Born from
              the vision of Dr. Samuel Oyefeso, Vine Music is where soul meets
              sound, and purpose meets artistry. Every lyric is a lifeline and
              every melody is a message. Here, music heals wounds, rekindles
              faith, and refines love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
