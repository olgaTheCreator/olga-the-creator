"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const MySkillsComponent = () => {
  const [animate, setAnimate] = useState<boolean>(true);
  return (
    <motion.div
      layout
      transition={{ duration: 0.3 }}
      role="button"
      onClick={() => setAnimate(!animate)}
      className={
        animate
          ? " h-20 w-full bg-white border-y-8 border-dashed border-white bg-gradient-to-r from-red_bright via-blue_bright to-green_bright relative overflow-hidden "
          : "h-56  bg-white border-y-8 border-dashed border-white bg-gradient-to-r from-red_bright via-blue_bright to-green_bright"
      }
    >
      <div className=" h-full w-full bg-white  relative overflow-hidden flex group">
        <ul
          className={`flex ${
            animate
              ? "animate-marquee text-3xl gap-28 whitespace-nowrap justify-evenly shrink-0 pt-3 group-hover:pause-animation"
              : "space-x-14 flex-wrap  py-4 px-16 text-2xl justify-evenly items-center"
          }`}
        >
          <li
            className={
              animate ? "font-bold text-4xl ml-28" : "font-bold text-3xl"
            }
          >
            Typescript
          </li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML5</li>
          <li>C</li>
          <li className={animate ? "font-bold text-4xl" : "font-bold text-3xl"}>
            Python 3
          </li>
          <li>Linux</li>
          <li className={animate ? "font-bold text-4xl" : "font-bold text-3xl"}>
            VSCode
          </li>
          <li>Git</li>
          <li>GitHub</li>
          <li className={animate ? "font-bold text-4xl" : "font-bold text-3xl"}>
            React
          </li>
          <li>React Hooks</li>
          <li className={animate ? "font-bold text-4xl" : "font-bold text-3xl"}>
            Next.js
          </li>
          <li>Sanic</li>
          <li>SQL</li>
          <li>SQLite</li>
          <li>Node.js</li>
          <li>Trello</li>
          <li>Figma</li>
          <li>Jest</li>
          <li className="mr-16">React Testing Library</li>
        </ul>
        <ul
          aria-hidden
          className={
            animate
              ? "animate-marquee2 absolute flex justify-evenly ml-28 shrink-0 text-3xl gap-28 whitespace-nowrap pt-3 group-hover:pause-animation"
              : "hidden"
          }
        >
          <li className="font-bold text-4xl">Typescript</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML5</li>
          <li>C</li>
          <li className="font-bold text-4xl">Python 3</li>
          <li>Linux</li>
          <li className="font-bold text-4xl">VSCode</li>
          <li>Git</li>
          <li>GitHub</li>
          <li className="font-bold text-4xl">React</li>
          <li>React Hooks</li>
          <li className="font-bold text-4xl">Next.js</li>
          <li>Sanic</li>
          <li>SQL</li>
          <li>SQLite</li>
          <li>Node.js</li>
          <li>Trello</li>
          <li>Figma</li>
          <li>Jest</li>
          <li>React Testing Library</li>
        </ul>
      </div>
    </motion.div>
  );
};
