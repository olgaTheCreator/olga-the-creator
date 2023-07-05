"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const BreazyTextComponent = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <motion.div
      animate={{ height: "auto" }}
      className="flex flex-col lg:flex-row  lg:flex-wrap sm:w-1/2 lg:w-3/5 place-items-center  sm:items-end lg:place-items-start lg:place-content-start gap-6 md:gap-8 "
    >
      {" "}
      <AnimatePresence>
        <div className="text-6xl xl:text-7xl sm:w-max lg:w-full lg:mb-6 font-light relative place-self-start sm:place-self-end lg:place-self-start">
          <h1 className="">BREAZY</h1>
          <h1 className="text-white absolute left-1 top-1">BREAZY</h1>
        </div>

        <div className="bg-white p-2 md:p-4 h-max border-4 border-black border-dashed relative md:w-max w-full md:max-w-xs">
          <h1 className="text-xl md:text-2xl font-bold">BREAZY</h1>
          <p className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
            A <span className="font-semibold">front-end</span> web app coded
            using React.
          </p>
        </div>

        <div className="bg-white p-2 md:p-4 h-max  border-4 border-black border-dashed relative w-full md:w-max md:max-w-xs xl:max-w-xs 2xl:max-w-sm">
          <p className="text-lg md:text-xl leading-9 font-normal">
            <span className="font-semibold">Breazy</span> - breathing exercises
            made easy.
          </p>
        </div>
        <div className="md:w-full flex flex-wrap  items-center justify-start sm:justify-end lg:justify-start gap-4 md:gap-8">
          <button
            onClick={() => setReadMore(!readMore)}
            className="order-last md:text-2xl xl:order-first bg-red_light px-4 text-xl lg:px-8 py-2 h-fit  2xl:text-3xl border-4 border-black border-dashed lg:leading-relaxed hover:rounded-full  transition-all duration-100 hover:font-medium"
          >
            Read {readMore ? "less" : "more"}...
          </button>
          <Link target="_blank" href="https://github.com/olgaTheCreator/breazy">
            <button className="bg-red_light px-4 md:text-2xl lg:px-8 py-2 text-xl 2xl:text-3xl border-4 border-black border-dashed lg:leading-relaxed hover:rounded-full  transition-all duration-100 hover:font-medium">
              Github
            </button>
          </Link>
          <Link
            className="relative"
            target="_blank"
            href="https://olgathecreator.github.io/breazy/"
          >
            <button className="bg-red_light md:text-2xl px-4 lg:px-8 py-2 text-xl 2xl:text-3xl border-4 border-black border-dashed lg:leading-relaxed hover:rounded-full transition-all duration-100 hover:font-medium">
              Live app
            </button>
          </Link>
        </div>
        {readMore && (
          <>
            <motion.div
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 1 }}
              key="teschstack"
              className=" bg-white p-2 md:p-4 h-max border-4 border-black border-dashed relative sm:w-max w-full sm:max-w-xs lg:max-w-xl xl:max-w-xs 2xl:max-w-sm"
            >
              <h1 className="text-xl md:text-2xl font-bold">TECHSTACK:</h1>
              <p className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
                <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">React Hooks</span>, Javascript,
                HTML, CSS, Framer Motion, React Transition Group,{" "}
                <span className="font-semibold">Jest</span>,{" "}
                <span className="font-semibold">React Testing Library</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 1 }}
              key="accomplishments"
              className="sm:place-self-end bg-white p-2 md:p-4 h-max border-4 border-black border-dashed relative sm:w-max w-full sm:max-w-md lg:max-w-lg xl:max-w-xs 2xl:max-w-md"
            >
              <h1 className="text-xl md:text-2xl font-bold">
                ACCOMPLISHMENTS:
              </h1>
              <div className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
                <ul className="md:space-y-2 list-[square] list-inside">
                  <li>I found slider package that worked!</li>
                  <li>I made Breazy fully accessible</li>
                  <li>Breazy passed lighthouse test at 100%</li>
                  <li>Breazy is fully responsive</li>
                  <li>Animations look awesome</li>
                  <li>I worked with a friend, who did graphics</li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
