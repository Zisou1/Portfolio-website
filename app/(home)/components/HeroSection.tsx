import Link from "next/link";
import React from "react";
import { Spotlight } from "./Spotlight";

export const HeroSection = () => {
  return (
    <div className="min-h-[80vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <Spotlight className="left-0 " fill="white" />
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you <br />{" "}
          <span className="underline underline-offset-8  decoration-green-500">
            {" "}
            {"I'm Zakaria"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Algeria , I'm a Fullstack developper passionate about building a modern web application that users love."
          }
        </p>
        <Link
          href={"mailto:zakaria.ouldhamouda.dz@gmail.com"}
          className="inline-block"
        >
          <div>
            <h1 className="text-3xl font-bold hover:text-green-500">
              Contact Me !
            </h1>
            <div className="w-full h-2 bg-green-500 rounded-full "></div>
            <div className="w-full h-2 bg-indigo-500 rounded-full translate-x-2 "></div>
          </div>
        </Link>
      </div>
      <div>
        <div className="w-73 h-72  space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>

            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
