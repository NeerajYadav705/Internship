import Image from "next/image";
import { FaArrowRightLong, FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mt-20 flex justify-between h-[100vh] ">
      {/* make the best */}
      <div className="">
        <div>
          <h1 className="font-extrabold text-6xl ">
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

      <div className="w-[40%] relative ">
        <Image
          className="absolute top-32 -right-10"
          src="/hero/iPhone2.png"
          width={400}
          height={100}
          alt="phone2"
        />
        <Image
          className="absolute top-16 right-10"
          src="/hero/iPhone1.png"
          width={400}
          height={100}
          alt="phone1"
        />
        <Image
          className="absolute top-0 left-0"
          src="/hero/iPhone2.png"
          width={400}
          height={100}
          alt="phone"
        />
      </div>
    </div>
  );
};

export default Hero;
