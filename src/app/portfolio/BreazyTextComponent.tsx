"use client";
import Link from "next/link";
import { useState } from "react";

export const BreazyTextComponent = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="flex flex-wrap w-3/5 place-content-start gap-8">
      <div className="text-7xl w-full mb-6 font-light relative">
        <h1 className="">BREAZY</h1>
        <h1 className="text-white absolute left-1 top-1">BREAZY</h1>
      </div>

      <div className="bg-white w-max max-w-sm p-4 h-max mr-2 border-4 border-black border-dashed relative">
        <h1 className="text-2xl font-bold">BREAZY</h1>
        <p className="mt-4 text-xl leading-9 font-normal">
          A <span className="font-semibold">front-end</span> web app coded using
          React.
        </p>
      </div>

      <div className="bg-white w-max max-w-xs p-4 h-max  border-4 border-black border-dashed relative">
        <p className="text-xl leading-9 font-normal">
          <span className="font-semibold">Breazy</span> - breathing exercises
          made easy.
        </p>
      </div>
      <div className="w-full flex justify-start gap-8">
        <button
          onClick={() => setReadMore(!readMore)}
          className="bg-red_light px-8 py-2  text-3xl border-4 border-black border-dashed leading-relaxed hover:rounded-full  transition-all duration-100 hover:font-medium"
        >
          Read {readMore ? "less" : "more"}...
        </button>
        <Link target="_blank" href="https://github.com/olgaTheCreator/breazy">
          <button className="bg-red_light px-8 py-2  text-3xl border-4 border-black border-dashed leading-relaxed hover:rounded-full  transition-all duration-100 hover:font-medium">
            Github
          </button>
        </Link>
        <Link
          className="relative"
          target="_blank"
          href="https://olgathecreator.github.io/breazy/"
        >
          <button className="bg-red_light px-8 py-2  text-3xl border-4 border-black border-dashed leading-relaxed hover:rounded-full transition-all duration-100 hover:font-medium">
            Live app
          </button>
        </Link>
      </div>
      {readMore && (
        <>
          <div className="bg-white w-max max-w-sm p-4 h-max border-4 border-black border-dashed relative">
            <h1 className="text-2xl">TECHSTACK:</h1>
            <p className="mt-4 text-xl leading-9 font-normal">
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">React Hooks</span>, Javascript,
              HTML, CSS, Framer Motion, React Transition Group,{" "}
              <span className="font-semibold">Jest</span>,{" "}
              <span className="font-semibold">React Testing Library</span>
            </p>
          </div>
          <div className="bg-white w-max max-w-md p-4 h-max border-4 border-black border-dashed relative">
            <h1 className="text-2xl">ACCOMPLISHMENTS:</h1>
            <div className="mt-4 text-xl font-normal">
              <ul className="space-y-2 list-[square] list-inside">
                <li>I found slider package that worked!</li>
                <li>I made Breazy fully accessible</li>
                <li>Breazy passed lighthouse test at 100%</li>
                <li>Breazy is fully responsive</li>
                <li>Animations look awesome</li>
                <li>I worked with a friend, who did graphics</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
