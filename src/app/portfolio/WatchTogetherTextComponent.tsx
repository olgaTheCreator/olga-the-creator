"use client";
import Link from "next/link";
import { useState } from "react";

export const WatchTogetherTextComponent = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row  lg:flex-wrap sm:w-1/2 lg:w-3/5 place-items-center sm:place-items-start sm:place-content-start gap-6 md:gap-8">
      <div className="text-6xl xl:text-7xl sm:w-full lg:mb-6 font-light relative place-self-start">
        <h1 className="">
          WATCH <br />
          TOGETHER
        </h1>
        <h1 className="text-white absolute left-1 top-1">
          WATCH <br />
          TOGETHER
        </h1>
      </div>

      <div className="bg-white p-2 md:p-4 h-max border-4 border-black border-dashed relative md:w-max w-full md:max-w-xs">
        <h1 className="text-xl md:text-2xl font-bold">WATCH TOGETHER</h1>
        <p className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
          A <span className="font-semibold">full-stack </span>app written in{" "}
          <span className="font-semibold">TypeScript </span>and{" "}
          <span className="font-semibold">Python 3</span>.
        </p>
      </div>
      <div className="bg-white p-2 md:p-4 h-max  border-4 border-black border-dashed relative w-full md:w-max md:max-w-xs lg:max-w-sm xl:max-w-xs 2xl:max-w-sm">
        <p className="text-lg md:text-xl leading-9 font-normal">
          <span className="font-bold">Watch Together</span> allows you to share
          movies you want to watch with your friends.
          <br />
          No more fights over which movie or series to choose.
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
          href="https://github.com/olgaTheCreator/ntflx-together"
        >
          <button className="bg-red_light px-4 md:text-2xl lg:px-8 py-2 text-xl 2xl:text-3xl border-4 border-black border-dashed lg:leading-relaxed hover:rounded-full  transition-all duration-100 hover:font-medium">
            Github
          </button>
        </Link>
        <Link
          className="relative"
          target="_blank"
          href="https://olgathecreator.co.uk/together/"
        >
          <button className="bg-red_light md:text-2xl px-4 lg:px-8 py-2 text-xl 2xl:text-3xl border-4 border-black border-dashed lg:leading-relaxed hover:rounded-full transition-all duration-100 hover:font-medium">
            Live app
          </button>
        </Link>
      </div>
      {readMore && (
        <>
          <div className="bg-white p-2 md:p-4 h-max border-4 border-black border-dashed relative sm:w-max w-full sm:max-w-md lg:max-w-xl xl:max-w-xs 2xl:max-w-sm">
            <h1 className="text-xl md:text-2xl font-bold">TECHSTACK:</h1>
            <p className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
              <span className="font-semibold">React</span>, React Hooks, React
              Router, <span className="font-semibold">Sanic</span>, Mayim, HTML,
              CSS, Figma, SQL, <span className="font-semibold">SQLite</span>,
              esbuild, NGINX, Pipenv,{" "}
              <span className="font-semibold">TailwindCSS</span>, Pandas
            </p>
          </div>
          <div className="bg-white p-2 md:p-4 h-max border-4 border-black border-dashed relative sm:w-max w-full sm:max-w-sm lg:max-w-lg xl:max-w-xs 2xl:max-w-sm">
            <h1 className="text-xl md:text-2xl font-bold">
              PROBLEMS I ENCOUNTERED:
            </h1>
            <div className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
              <ul className="md:space-y-2 list-[square] list-inside">
                <li>
                  Finding API, that can serve all Netflix movies and series
                </li>
                <li>Loading CSS and HTML files </li>
                <li>NGINX configuration</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-2 md:p-4 h-max border-4 border-black border-dashed relative sm:w-max w-full sm:max-w-xl">
            <h1 className="text-xl md:text-2xl font-bold">
              I&apos;M BETTER DEVELOPER AFTER THIS PROJECT BECAUSE:
            </h1>
            <div className="md:mt-4 text-lg md:text-xl leading-9 font-normal">
              <ul className="md:space-y-2 list-[square] list-inside">
                <li>Routes have become my friends</li>
                <li>
                  I&apos;m not scared of using technologies I wasn&apos;t
                  familiar with
                </li>
                <li>I now know how to set up cookies and use local storage</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
