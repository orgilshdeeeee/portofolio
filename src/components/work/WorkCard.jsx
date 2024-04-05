import React from "react";

export const WorkCard = (props) => {
  return (
    <div className="w-fit h-auto bg-gray-200 px-5 rounded-xl py-1 dark:text-[#D1D5DB] dark:bg-[#374151] text-sm">
      <div>{props.text}</div>
    </div>
  );
};
