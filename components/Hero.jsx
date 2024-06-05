import Image from "next/image";
import { FaArrowRightLong, FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mt-20 flex justify-between">
      {/* make the best */}
      <div>
        <div>
          <h1 className="font-extrabold text-6xl">
            Make The Best <br />
            Financial Decisions
          </h1>
          <p className="my-4 text-gray-400">
            Cum Et Convallis Risus Placerat Aliquam,Nuno. Scelerisque Aliquest{" "}
            <br /> Faucibus Eu Adipiscing Soclis Arcu Lorem Portitor.
          </p>
        </div>
        <div className="flex items-center gap-8 ">
          <button className="bg-black text-white py-3 px-10 rounded-md flex items-center gap-4">
            Get Started
            <FaArrowRightLong />
          </button>
          <a className="flex items-center gap-3" href="/">
            <FaRegCirclePlay className="text-2xl" />
            Watch Video
          </a>
        </div>
        {/* achievements image */}
        <div className="mt-10">
          <Image src="/hero/shape.png" width={500} height={400} alt="logo" />
        </div>
      </div>
        {/* iphone section */}
      <div className="">
        <div className="">
          <img className="" src="/hero/iPhone3.png" width={400} height={100} alt="" />
          {/* <img src="/hero/iPhone1.png" width={100} height={100} alt="" />
          <img src="/hero/iPhone2.png" width={100} height={100} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
