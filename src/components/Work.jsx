import React from "react";
import { ShareIcon } from "./icons/ShareIcon";
import { WorkContent } from "./work/WorkContent";

export const Work = () => {
  return (
    <div className="shadow-xl rounded-xl lg:flex lg:justify-between lg:w-[1152px]">
      <div className="p-8 bg-gray-50 rounded-t-xl lg:rounded-l-xl lg:rounded-r-none lg:p-12 dark:bg-[#374151]">
        <img className="rounded-xl" src="/main-image.png" alt="image" />
      </div>

      <div className="flex flex-col gap-6 p-8 lg:p-12 dark:bg-[#1F2937] lg:rounded-r-xl">
        <span className="text-xl font-semibold dark:text-white">Fiskil</span>

        <span className="lg:w-[480px] text-gray-600 dark:text-[#D1D5DB] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </span>

        <WorkContent />

        <ShareIcon />
      </div>
    </div>
  );
};
