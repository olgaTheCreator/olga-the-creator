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
          : "md:h-56  bg-white border-y-8 border-dashed border-white bg-gradient-to-r from-red_bright via-blue_bright to-green_bright"
      }
    >
      <div className=" h-full w-full bg-white  relative overflow-hidden flex group">
        <ul
          className={`flex ${
            animate
              ? "animate-marquee text-3xl gap-24 lg:gap-28 whitespace-nowrap justify-evenly shrink-0 pt-3 group-hover:pause-animation"
              : "xl:space-x-14 flex-wrap gap-x-8 py-4 px-4 lg:px-8 xl:px-16 text-xl lg:text-2xl xl:justify-evenly md:justify-start justify-start items-center gap-y-1"
          }`}
        >
          <li
            className={
              animate
                ? "font-bold text-4xl ml-28"
                : "font-bold lg:text-3xl text-2xl"
            }
          >
            Typescript
          </li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML5</li>
          <li>C</li>
          <li
            className={
              animate ? "font-bold text-4xl" : "font-bold lg:text-3xl text-2xl"
            }
          >
            Python 3
          </li>
          <li>Linux</li>
          <li
            className={
              animate ? "font-bold text-4xl" : "font-bold lg:text-3xl text-2xl"
            }
          >
            VSCode
          </li>
          <li>Git</li>
          <li>GitHub</li>
          <li
            className={
              animate ? "font-bold text-4xl" : "font-bold lg:text-3xl text-2xl"
            }
          >
            React
          </li>
          <li>React Hooks</li>
          <li
            className={
              animate ? "font-bold text-4xl" : "font-bold lg:text-3xl text-2xl"
            }
          >
            Next.js
          </li>
          <li>Sanic</li>
          <li>SQL</li>
          <li>SQLite</li>
          <li>Node.js</li>
          <li>Trello</li>
          <li>Figma</li>
          <li>Jest</li>
          <li>React Testing Library</li>
          <li>Pandas</li>
          <li>Accessibility</li>
          <li>Inkscape</li>
          <li>Flask</li>
          <li className="mr-16">Pydantic</li>
        </ul>
        <ul
          aria-hidden
          className={
            animate
              ? "animate-marquee2 absolute flex justify-evenly ml-28 shrink-0 text-3xl gap-24 lg:gap-28  whitespace-nowrap pt-3 group-hover:pause-animation"
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
          <li>Pandas</li>
          <li>Accessibility</li>
          <li>Inkscape</li>
          <li>Flask</li>
          <li>Pydantic</li>
        </ul>
      </div>
    </motion.div>
  );
};
