"use client";
import Link from "next/link";
import { useState } from "react";

export const AboutMe = () => {
  const [animate, setAnimate] = useState<boolean>(true);

  return (
    <div className="w-full bg-yellow_bright font-roboto font-medium h-full border-x-4 border-b-4 border-black flex-col flex">
      <div className=" relative grid grid-cols-12 grid-rows-6 w-full h-4/5 px-10 pt-10 ">
        <div className="bg-white ml-16 2xl:text-5xl lg:text-4xl lg:leading-normal 2xl:leading-relaxed lg:w-2xl 2xl:p-12 lg:p-6 max-w-2xl col-start-6 col-span-5 2xl:row-span-5 lg:row-span-3 mt-16 border-4 border-black border-dotted">
          <p>Hello,</p>
          <p>
            my name is Olga Curylo and I’m a{" "}
            <span className="font-bold bg-yellow_bright">
              full-stack developer
            </span>
            .
          </p>
        </div>
        <div className="bg-white lg:w-max 2xl:p-8 lg:p-6 max-w-max h-max text-2xl border-4 border-black border-dotted col-start-3 row-start-1 leading-relaxed">
          <p>
            My{" "}
            <Link className="text-red_bright underline" href="/portfolio">
              portfolio
            </Link>
            .
          </p>
        </div>
        <div className="bg-white lg:w-sm p-8 max-w-sm col-start-1 col-span-3 mx-10 row-start-2 row-span-3 mt-20 text-2xl border-4 border-black border-dotted leading-relaxed">
          <p>Harvard Cs50 Certificate:</p>
        </div>
        <div className="bg-white lg:w-sm p-4 max-w-sm h-max col-start-11 ml-16 col-span-2 mb-16 row-start-2 mt-20 text-lg border-4 border-black border-dotted">
          <p>{"I've beaten Sekiro on NG+"}</p>
        </div>
        <div className="bg-white mt-6 lg:w-max 2xl:p-8 lg:p-6 max-w-max h-max text-2xl border-4 border-black border-dotted col-start-12 row-start-1 leading-relaxed">
          My{" "}
          <Link className="font-bold underline" href="/portfolio">
            CV
          </Link>
        </div>
        <div className="bg-white mt-6 2xl:p-8 lg:p-6 text-2xl max-w-sm lg:w-sm border-4 border-black border-dotted col-start-4 row-start-2 h-max col-span-2 leading-relaxed">
          I like techno and crocheting
        </div>
        <div className="bg-white lg:w-sm p-4 max-w-sm h-max col-start-1 mx-16 col-span-2 mb-16 row-start-1 mt-20 text-lg border-4 border-black border-dotted">
          <p>{"I'm vegan"}</p>
        </div>
        <div className="bg-white mt mx-6 2xl:p-8 lg:p-6 text-2xl max-w-sm lg:w-sm border-4 border-black border-dotted col-start-4 row-start-4 h-max col-span-2 leading-relaxed">
          I want to learn about scalability.
        </div>
      </div>
      <div
        role="button"
        onClick={() => setAnimate(!animate)}
        className={
          animate
            ? " h-20 w-full bg-white border-y-8 border-dashed border-white bg-gradient-to-r from-red_bright via-blue_bright to-green_bright relative overflow-hidden"
            : "h-60  bg-white border-y-8 border-dashed border-white bg-gradient-to-r from-red_bright via-blue_bright to-green_bright"
        }
      >
        <div className=" h-full w-full bg-white  relative overflow-hidden flex">
          <ul
            className={
              animate
                ? "animate-marquee flex justify-around shrink-0 text-3xl gap-28 whitespace-nowrap pt-3"
                : "flex justify-between text-3xl gap-14 h-20 flex-wrap px-5 py-2"
            }
          >
            <li
              className={
                animate ? "font-bold text-4xl ml-28" : "font-bold text-4xl"
              }
            >
              Typescript
            </li>
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
            <li className="mr-16">React Testing Library</li>
          </ul>
          <ul
            aria-hidden
            className={
              animate
                ? "animate-marquee2 absolute flex justify-around ml-28 shrink-0 text-3xl gap-28 whitespace-nowrap pt-3"
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
          {/* <ul className="animate-marquee2 w-full relative flex justify-around gap-4 shrink-0">
          <li>Typescript</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML5</li>
          <li>C</li>
          <li>Python 3</li>
        </ul> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
