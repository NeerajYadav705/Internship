import { FaApple } from "react-icons/fa";

const Download = () => {
  return (
    <div className="mt-32 ">

      <div className="bg-custom-image bg-cover bg-center bg-no-repeat rounded-md flex justify-evenly pl-16 gap-4">
        <div className="flex flex-col justify-center items-start">
        <h1 className="text-white text-5xl font-extrabold">
          Ready To Get Started?
        </h1>
        <p className="text-white font-light">
          Risus Habitant Loo Egestas Mauris Diam Morbi Tempus
          <br />
          Vulputate.
        </p>
        <button className="bg-white text-black py-3  px-5 rounded-md font-medium flex items-center gap-2">
          Download App
          <FaApple className="text-2xl" />
        </button>
        </div>
        <div>
        <img src="/hero/phones.png" width={500} height={300} alt="" />
      </div>

      </div>
     
    </div>
  );
};

export default Download;
