import React from "react";

export const Experience = () => {
  return (
    <div className="bg-white dark:bg-[#1F2937] flex p-8 justify-between rounded-xl shadow-lg">
      <img className="w-25.5 h-7" src="/logo-upwork.png" alt="image" />

      <div className="flex flex-col gap-4">
        <span className="text-gray-900 text-xl dark:text-[#F9FAFB]">
          Sr.Frontend Developer
        </span>

        <ul className="list-disc text-gray-600 dark:text-[#D1D5DB]">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>

          <li>Sed quis justo ac magna.</li>

          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>

      <div>
        <span className="text-gray-700 dark:text-[#E5E7EB]">
          Nov 2021 - Present
        </span>
      </div>
    </div>
  );
};
