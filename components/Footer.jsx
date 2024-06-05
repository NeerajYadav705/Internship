import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mx-28 mt-40  flex justify-evenly gap-10">
        {/* first column */}
        <div className="flex flex-col gap-3">
          <img src="/hero/group.png" alt="" />
          <a className="font-medium flex items-center gap-2" href="/">
            <CiMail className="text-red-500" />
            Help@Frybix.Com
          </a>
          <a className="font-medium flex items-center gap-2" href="/">
            <FaPhoneAlt className="text-red-500" />
            +1234 456 678 89
          </a>
        </div>
        {/* second */}
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-3xl">Links</h1>
          <a className="font-medium" href="/">
            Home
          </a>
          <a className="font-medium" href="/">
            About Us
          </a>
          <a className="font-medium" href="/">
            Bookings
          </a>
          <a className="font-medium" href="/">
            Blog
          </a>
        </div>
        {/* third */}
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-3xl">Legal</h1>
          <a className="font-medium" href="/">
            Terms Of Use
          </a>
          <a className="font-medium" href="/">
            Privacy Policy
          </a>
          <a className="font-medium" href="/">
            Cookie Policy
          </a>
        </div>
        {/* fourth */}
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-3xl">Product</h1>
          <a className="font-medium" href="/">
            Take Tour
          </a>
          <a className="font-medium" href="/">
            Live Chat
          </a>
          <a className="font-medium" href="/">
            Reveiws
          </a>
        </div>
        {/* fifth */}
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-3xl">Newsletter</h1>
          <a className="font-medium" href="/">
            Stay Up To Date
          </a>
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Your emale"
          />
          <button className="bg-black text-white py-3 px-10 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      {/* line */}
      <div className="mt-20">
        <div className="relative w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>

      <div className="flex justify-center items-center p-10">
        <h1 className="font-medium">
          Copyright 2022 Uifry.Com All Right Reserved{" "}
        </h1>
      </div>
    </>
  );
};

export default Footer;
