import React from "react";
import { WorkCard } from "./WorkCard";

export const WorkContent = () => {
  const textSet = [];

  const text = [
    {
      texts: ["React", "Nest.js", "Typescript", "Nest.js", "PostgreSQL"],
    },

    {
      texts: ["React", "Nest.js", "Typescript", "Nest.js", "PostgreSQL"],
    },
  ];

  text.forEach((item) => {
    item.texts.forEach((props) => {
      textSet.push(<WorkCard text={props} />);
    });
  });

  return <div className="flex flex-wrap gap-2">{textSet}</div>;
};
