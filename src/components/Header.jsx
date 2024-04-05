import React from "react";
import { MenuIcon } from "./icons/MenuIcon";
import { SunIcon } from "./icons/SunIcon";

export const Header = () => {
  return (
    <div className=" bg-white p-4 flex justify-between items-center lg:px-20 py-4">
      <span className="text-[#111827] text-3xl font-bold">{"<SS />"}</span>

      <div className="lg:hidden">
        <MenuIcon />
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <button className="font-medium text-[#4B5563]">About</button>

        <button className="font-medium text-[#4B5563]">Work</button>

        <button className="font-medium text-[#4B5563]">Testimonials</button>

        <button className="font-medium text-[#4B5563]">Contact</button>

        <span className="text-[#F3F4F6]">|</span>

        <div className="flex items-center gap-4">
          <SunIcon />

          <button
            className="text-gray-50 font-medium px-4 py-[6px] bg-gray-900 rounded-xl"
            onClick={downloadPDF}
            disabled={!(loader === false)}
          >
            {loader ? <span>Downloading</span> : <span>Download CV</span>}
          </button>
        </div>
      </div>
    </div>
  );
};
