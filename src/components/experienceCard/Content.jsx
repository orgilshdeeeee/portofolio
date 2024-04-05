import React from "react";
import { Card } from "./Card";

export const Content = () => {
  const contentSet = [];
  const listSet = [];

  const content = [
    {
      icon: "/logo-upwork.png",
      date: "Nov 2021 - Present",
      title: "Sr. Frontend Developer",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      icon: "/logo-upwork.png",
      date: "Jul 2017 - Oct 2021",
      title: "Team Lead",
      list: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      icon: "/logo-upwork.png",
      date: "Dec 2015 - May 2017",
      title: "Full Stack Developer",
      list: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  // content.forEach((item) => {
  //   item.list.forEach((element) => {
  //     listSet.push(<Card text={element} />);
  //   });
  // });

  content.forEach((props) => {
    contentSet.push(
      <Card
        icon={props.icon}
        date={props.date}
        title={props.title}
        list={props.list}
      />
    );
  });

  return (
    <div className="flex flex-col gap-14 lg:items-center">{contentSet}</div>
  );
};
