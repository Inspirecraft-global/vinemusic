import HeroString from '../../assets/Images/artis.png';
import Navbar from '../../common/Navbar';

export default function Lafred() {
  return (
    <div className="bg-black h-full w-full ">
      <div className="w-full px-2 lg:px-24 pt-12">
        <Navbar />
      </div>
      <div className=" w-full h-[500px] flex justify-center items-center pt-10">
        <img src={HeroString} alt="Hero Background" className="w-full pb-20 " />
      </div>
      <h3 className="absolute text-white md:text-4xl bottom-0  w-full font-bold flex justify-center items-center p-3">
        Lafred John
      </h3>
    </div>
  );
}
