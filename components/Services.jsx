import { CiBellOn } from "react-icons/ci";

import { FiOctagon } from "react-icons/fi";
import { PiCubeTransparentLight, PiStarFour } from "react-icons/pi";

const Services = () => {
  return (
    <>
      {/* first section */}
      <div className="flex justify-between items-center m-10">
        <div>
          <img src="/hero/iPhone4.png" width={500} height={400} alt="" />
        </div>
        <div className="">
          <h3 className="text-red-500">FEATURES</h3>
          <h1 className="text-3xl font-extrabold mb-8">Uifry Premium</h1>
          <h2 className="font-bold text-1xl flex items-center gap-1 mb-2">
            <PiStarFour className="text-red-500" />
            Budget Intervals
          </h2>
          <p className="mb-2 text-gray-400">
            Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Aliquet
            <br />
            Faucibus Tinxisunt Eu Adipiscing Socils Arcu Lorem Portitor.
          </p>
          <h2 className="font-bold text-1xl flex items-center gap-1 mb-2 mt-8">
            <FiOctagon className="text-red-500" />
            Budget Intervals
          </h2>
          <p className="mb-2 text-gray-400">
            Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Aliquet
            <br />
            Faucibus Tinxisunt Eu Adipiscing Socils Arcu Lorem Portitor.
          </p>
          <h2 className="font-bold text-1xl flex items-center gap-1 mb-2 mt-8">
            <PiCubeTransparentLight className="text-red-500" />
            Budget Intervals
          </h2>
          <p className="mb-2 text-gray-400">
            Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Aliquet
            <br />
            Faucibus Tinxisunt Eu Adipiscing Socils Arcu Lorem Portitor.
          </p>
        </div>
      </div>

      {/* second section */}
      <div className="flex justify-between items-center m-10">
        <div className="">
          <h3 className="text-red-500">ADVANTAGES</h3>
          <h1 className="text-3xl font-extrabold mb-8">Why Choose  Uifry?</h1>
          <h2 className="font-bold text-1xl flex items-center gap-1 mb-2">
          <CiBellOn className="text-white bg-red-500 rounded-full w-8 h-8 p-2"  />
            Clear Notifications
          </h2>
          <p className="mb-2 text-gray-400">
         
            Arcu At Diotum Saplen, Mollis. Vulputate Sit Id Accumsan,<br/> Ultricies. In Ultrices Malesuada Elit Maurls Etiam Odio. Duls <br/> Tristique Lacus, Et Blandit Viverra Nisl Velit, Sed Mattis<br/> Rhoncus, Diam Suspendisse Sit Nuno, Gravida Eu, Lectus Eget<br/> Eget Ac Solor Neque Lorem Salpen, Suspendisse Aliquam.
          </p>
        </div>
        <div>
          <img src="/hero/iPhone4.png" width={500} height={400} alt="" />
        </div>
      </div>

      {/* third section */}
      <div className="flex justify-between items-center m-10">
        <div>
          <img src="/hero/iPhone4.png" width={500} height={400} alt="" />
        </div>
        <div className="">
          
          <h1 className="text-3xl font-extrabold mb-8 flex items-center gap-2"><PiStarFour className="text-white bg-red-500 w-10 h-10 p-2 rounded-full "/>Fully Customizable</h1>
          <p className="mb-2 text-gray-400">
           Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,<br/>Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis<br/>Tristique Lacus, Et Blandit Viverra Nisl Velit, Sed Mattis Rhoncus,<br/>Diam Suspendisse Sit Nuno, Gravida Eu. Lectus Eget Eget Ac<br/> Dolor Neque Sapien, Suspendisse Aliquam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
