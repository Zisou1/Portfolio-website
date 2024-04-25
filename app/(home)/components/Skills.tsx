"use client";

import React from "react";
import { Title } from "./Title";
import { HoverEffect } from "./Hover";
import {
  SiBootstrap,
  SiExpress,
  SiGit,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const Skills = () => {
  const skills = [
    {
      text: "ReactJs",
      Icon: SiReact,
    },
    {
      text: "NextJs",
      Icon: SiNextdotjs,
    },
    {
      text: "ExpressJs",
      Icon: SiExpress,
    },

    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Tailwindcss",
      Icon: SiTailwindcss,
    },
    {
      text: "PostgreSql",
      Icon: SiPostgresql,
    },
    {
      text: "Laravel",
      Icon: SiLaravel,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
};
