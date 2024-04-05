import React from "react";

export const Card = (props) => {
  return (
    <div className="flex flex-col bg-white p-8 shadow-xl rounded-xl gap-4 lg:flex-row lg:gap-12 lg:w-[896px] dark:bg-[#1F2937]">
      <div className="lg:w-[191px]">
        <img className="w-[102px] h-7" src={props.icon} alt="image" />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-12">
        <span className="text-[#374151] dark:text-[#E5E7EB]">{props.date}</span>
        <div className="flex flex-col gap-4 lg:w-[384px]">
          <span className="text-[#111827] text-xl font-semibold dark:text-white">
            {props.title}
          </span>
          <ul className="list-disc text-[#4B5563] flex flex-col gap-4 ml-4 dark:text-[#D1D5DB]">
            <li>{props.list}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
