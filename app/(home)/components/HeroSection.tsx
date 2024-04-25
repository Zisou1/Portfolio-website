import Link from "next/link";
import React from "react";
import { Spotlight } from "./Spotlight";
import Image from "next/image";
import { Title } from "./Title";
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
          <Title text="Contact Me !" />
        </Link>
      </div>
      <div>
        <div className=" h-45 w-45 md:w-60 md:h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden  ">
          {/* Replace "profile-photo.png" with your actual image filename */}
          <Image
            src="/images/port.png"
            alt="Your Profile Photo"
            width={370}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
