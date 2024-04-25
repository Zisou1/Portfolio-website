import React from "react";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { Skills } from "./components/Skills";
import { HeroParallax } from "./components/hero-parallax";

export default function page() {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: "/images/test.jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/images/port.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/images/port.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/images/port.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/images/port.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/images/port.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/images/port.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/images/port.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: "/images/oni.jpg",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: "/images/stade.jpg",
    },
  ];

  return (
    <div className="min-h-[600vh] bg-black overflow-hidden">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <NavBar />

          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full "></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-8">
        <Skills />
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-8">
        <HeroParallax products={products} />
      </div>
    </div>
  );
}
