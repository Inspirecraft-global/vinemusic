import React from 'react';
import vector from '../../assets/Images/Vector.png';

export default function AboutMission() {
  return (
    <div className="aboutus px-4 lg:px-[126px]  pt-[86px]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="border-1 text-white rounded-[20px] border-[#F8F6F1] p-10">
          <h3 className=" text-3xl md:text-4xl font-extrabold text-white ">
            Our Mission{' '}
          </h3>
          <p className="text-lg md:text-xl mt-3 ">
            To discover, develop, and distribute impactful artists who carry
            messages of hope, love, and restoration through music and
            storytelling.
          </p>
        </div>
        <div className="border-1 text-white rounded-[20px] border-[#F8F6F1] p-10">
          <h3 className=" text-3xl md:text-4xl font-extrabold text-white ">
            Our Vision{' '}
          </h3>
          <p className="text-lg md:text-xl mt-3 ">
            To be one of the UK’s most inspiration-rooted record labels,
            transforming lives through music that heals, inspires, and redefines
            modern love and life.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={vector} alt="vector" className="-mt-20" />
      </div>
    </div>
  );
}
