import React from 'react';
import vector from '../../assets/Images/vtb.png';
import CEO from '../../assets/Images/ceo.jpg';

export default function AboutCEO() {
  return (
    <div className="bg-black px-4 lg:px-[126px]  pt-[86px]">
      <div className="flex flex-col justify-center items-center md:flex-row gap-6 ">
        <img
          src={CEO}
          alt="vector"
          className=" h-[500px] rounded-md  object-cover"
        />

        <div className=" text-white px-2 py-10 md:p-10">
          <h3 className=" text-3xl md:text-4xl font-extrabold text-white ">
            About Dr. Samuel Oyefeso{' '}
          </h3>
          <p className="text-lg md:text-lg mt-3 ">
            Dr. Samuel Oyefeso is a Music Medic, a practicing physician who
            harnesses the healing power of music to transform lives.
            <br />
            With over a decade of medical experience, and a lifelong passion for
            music, he bridges the gap between clinical care and creative
            expression to create meaningful change in his community.
            <br />
            As both healer and artist, Dr. Oyefeso belives that music trancends
            traditional medicine, offering hope, coneection, and renewal to
            those who need it most.
            <br />
            Whether the mentoring the next generation of healthcare
            professionals or individuals and communities, he
            approaches each interaction with genuine compassion and unwavering
            dedication to service.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={vector} alt="vector" className="-mt-20 object-cover" />
      </div>
    </div>
  );
}
