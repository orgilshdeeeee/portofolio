import React from "react";

export const Skill = (props) => {
  return (
    <div className="flex flex-col items-center w-[78px] gap-2">
      {props.icon}
      <p className="text-[#4B5563]">{props.title}</p>
    </div>
  );
};
