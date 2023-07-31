"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export const DulwichHamletTextComponent = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row  lg:flex-wrap sm:w-1/2 lg:w-3/5 place-items-center sm:place-items-start sm:place-content-start gap-6 md:gap-8">
      <div className="text-6xl xl:text-7xl sm:w-full lg:mb-6 font-light relative place-self-start">
        <h1 className="">DULWICH HAMLET FC FANPAGE</h1>
        <motion.h1
          initial={{ x: 10, y: 10 }}
          whileInView={{ x: [9, 0, 1, 0], y: [9, 0, 1, 0] }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white absolute left-1 top-1"
        >
          DULWICH HAMLET FC FANPAGE
        </motion.h1>
      </div>

      <div className="bg-white p-2 md:p-4 h-max border-4 border-black border-dashed relative md:w-max w-full md:max-w-xs">
        <h1 className="text-xl md:text-2xl font-bold">
          DULWICH HAMLET FC FANPAGE
        </h1>
        <p className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
          A landing page for the fans of Dulwich Hamlet FC Women XI, written in
          <span className="font-semibold"> Typescript</span> using{" "}
          <span className="font-semibold">Next.js</span>.
        </p>
      </div>
      <div className="bg-white p-2 md:p-4 h-max  border-4 border-black border-dashed relative w-full md:w-max md:max-w-xs lg:max-w-sm xl:max-w-xs 2xl:max-w-sm">
        <h1 className="text-xl md:text-2xl font-bold">TECHSTACK:</h1>
        <p className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
          <span className="font-semibold">Next.js</span>,
          <span className="font-semibold"> React</span>, React Hooks, Vite,{" "}
          <span className="font-semibold">Typescript</span>, HTML, CSS, Figma,
          InkScape, Twiiter API,{" "}
          <span className="font-semibold">TailwindCSS</span>
        </p>
      </div>
      <div className="md:w-full flex flex-wrap  items-center md:justify-start gap-4 md:gap-8">
        <button
          onClick={() => setReadMore(!readMore)}
          className="order-last md:text-2xl xl:order-first bg-red_light px-4 text-xl lg:px-8 py-2 h-fit  2xl:text-3xl border-4 border-black border-dashed lg:leading-relaxed hover:rounded-full  transition-all duration-100 hover:font-medium"
        >
          Read {readMore ? "less" : "more"}...
        </button>
        <Link
          target="_blank"
          href="https://github.com/olgaTheCreator/dulwich-hamlet"
        >
          <button className="bg-red_light px-4 md:text-2xl lg:px-8 py-2 text-xl 2xl:text-3xl border-4 border-black border-dashed lg:leading-relaxed hover:rounded-full  transition-all duration-100 hover:font-medium">
            Github
          </button>
        </Link>{" "}
        <Link
          className="relative"
          target="_blank"
          href="https://olgathecreator.co.uk/dulwich-hamlet/"
        >
          <button className="bg-red_light md:text-2xl px-4 lg:px-8 py-2 text-xl 2xl:text-3xl border-4 border-black border-dashed lg:leading-relaxed hover:rounded-full transition-all duration-100 hover:font-medium">
            Live page
          </button>
        </Link>
      </div>
      {readMore && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-2 md:p-4 h-max border-4 border-black border-dashed relative sm:w-max w-full sm:max-w-sm lg:max-w-xl "
          >
            <h1 className="text-xl md:text-2xl font-bold">DEV HISTORY:</h1>
            <div className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
              Originally written in{" "}
              <span className="font-semibold">Next 12</span>, using{" "}
              <span className="font-semibold">CSS Modules </span>
              and <span className="font-semibold">Twitter API</span> to show the
              club’s timeline. <br />
              Later rewritten using React with Typescript, Vite, and Tailwind
              CSS. Unfortunately, I encountered problems with the Twitter API,
              and the project has become more of a{" "}
              <span className="font-semibold">landing page</span>.
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};
