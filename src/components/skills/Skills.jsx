import React from "react";
import { Skill } from "./Skill";
import { Javascript } from "../icons/skillsIcon/Javascript";
import { Typescript } from "../icons/skillsIcon/Typescript";
import { ReactIcon } from "../icons/skillsIcon/ReactIcon";
import { Next } from "../icons/skillsIcon/Next";
import { Node } from "../icons/skillsIcon/Node";
import { Express } from "../icons/skillsIcon/Express";
import { Nest } from "../icons/skillsIcon/Nest";
import { Socket } from "../icons/skillsIcon/Socket";
import { Mongo } from "../icons/skillsIcon/Mongo";
import { Sass } from "../icons/skillsIcon/Sass";
import { Tailwind } from "../icons/skillsIcon/Tailwind";
import { FigmaIcon } from "../icons/skillsIcon/FigmaIcon";
import { Cypress } from "../icons/skillsIcon/Cypress";
import { Storybook } from "../icons/skillsIcon/Storybook";
import { Git } from "../icons/skillsIcon/Git";

export const Skills = () => {
  const skillSets = [];

  const skills = [
    {
      icon: <Javascript />,
      title: "Javascript",
    },
    {
      icon: <Typescript />,
      title: "Typescript",
    },
    {
      icon: <ReactIcon />,
      title: "React",
    },
    {
      icon: <Next />,
      title: "Next",
    },
    {
      icon: <Node />,
      title: "Node",
    },
    {
      icon: <Express />,
      title: "Express",
    },
    {
      icon: <Nest />,
      title: "Nest",
    },
    {
      icon: <Socket />,
      title: "Socket",
    },
    {
      icon: <Mongo />,
      title: "Mongo",
    },
    {
      icon: <Sass />,
      title: "Sass,Scss",
    },
    {
      icon: <Tailwind />,
      title: "Tailwind",
    },
    {
      icon: <FigmaIcon />,
      title: "Figma",
    },
    {
      icon: <Cypress />,
      title: "Cypress",
    },
    {
      icon: <Storybook />,
      title: "Storybook",
    },
    {
      icon: <Git />,
      title: "Git",
    },
  ];

  skills.forEach((props) => {
    skillSets.push(<Skill icon={props.icon} title={props.title} />);
  });

  return (
    <div className="flex flex-wrap gap-[40px] justify-center">{skillSets}</div>
  );
};
