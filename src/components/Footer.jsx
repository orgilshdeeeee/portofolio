import React from "react";
import { MailIcon } from "./icons/MailIcon";
import { CopyIcon } from "./icons/CopyIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import { GitHub } from "./icons/GitHub";
import { Twitter } from "./icons/Twitter";
import { Figma } from "./icons/Figma";
import { Copyright } from "./icons/Copyright";

export const Footer = () => {
  return (
    <>
      <div className="px-4 py-14 bg-white flex flex-col items-center gap-6 lg:py-24 lg:px-20 lg:gap-12 dark:bg-[#030712]">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[#4B5563] text-sm font-medium px-5 py-1 bg-[#E5E7EB] rounded-xl dark:text-[#D1D5DB] dark:bg-[#374151]">
            Get in touch
          </span>

          <span className="text-[#4B5563] text-xl text-center dark:text-[#D1D5DB]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </span>
        </div>

        <div className="lg:flex lg:flex-col lg:gap-4">
          <div className="flex gap-4 items-center">
            <MailIcon />

            <span className="text-lg font-semibold text-black lg:text-4xl dark:text-white">
              reachsagarshah@gmail.com
            </span>

            <CopyIcon />
          </div>

          <div className="flex gap-4 justify-center items-center">
            <PhoneIcon />

            <span className="text-lg font-semibold text-black lg:text-4xl dark:text-white">
              +91 8980500565
            </span>

            <CopyIcon />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#4B5563] dark:text-[#D1D5DB]">
            You may also find me on these platforms!
          </span>

          <div className="flex gap-3 justify-center">
            <GitHub />
            <Twitter />
            <Figma />
          </div>
        </div>
      </div>

      <div className="flex gap-2 py-6 justify-center bg-[#F9FAFB] items-center dark:bg-[#111827]">
        <Copyright />

        <span className="text-sm text-black dark:text-[#D1D5DB]">
          2023 | Designed and coded with ❤️️ by Sagar Shah
        </span>
      </div>
    </>
  );
};
