import Image from "next/image";
import NetflixTogether from "../../../public/NetflixTogether.jpg";
import Breazy from "../../../public/Breazy.jpg";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="w-full bg-red_bright font-roboto font-medium h-max min-h-screen border-x-4 border-b-4 border-black flex-col items-center flex py-10 px-4">
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-1/6">
          <div className="bg-white ml-8 -mr-12 mt-10 p-4 h-max text-2xl border-4 border-black border-dashed relative">
            <h1 className="text-3xl">WATCH TOGETHER</h1>
            <p className="mt-4 text-2xl leading-9 font-light">
              A <span className="font-normal">full-stack</span> app written in{" "}
              <span className="font-normal">TypeScript</span> and{" "}
              <span className="font-normal">Python</span>
            </p>
          </div>
          <div className="bg-white -mr-16  mt-10 p-4 h-max text-2xl border-4 border-black border-dashed relative">
            <p className="text-2xl leading-9 font-light">
              It allows you to share with friends movies you want to watch.
              <br />
              No more fights over which movie or series to choose.
            </p>
          </div>
          <div className="bg-white ml-2 -mr-10 mt-10 p-4 h-max text-2xl border-4 border-black border-dashed relative">
            <h1 className="text-3xl">TECHSTACK:</h1>
            <p className="mt-4 text-2xl leading-9 font-light">
              A <span className="font-normal">full-stack</span> app written in{" "}
              <span className="font-normal">TypeScript</span> and{" "}
              <span className="font-normal">Python</span>
            </p>
          </div>
        </div>

        <div className="bg-white  w-1/4 p-4 h-max text-2xl border-4 border-black border-dashed relative group hover:bg-black hover:border-white transition-all duration-300">
          <Image
            className="group-hover:opacity-50 transition-opacity duration-300"
            src={NetflixTogether}
            alt="screenshot of Netflix Together app"
          />
          <Link
            target="_blank"
            className="text-white  underline absolute top-24 left-10 text-4xl "
            href="https://olgathecreator.co.uk/together/"
          >
            Click to use <br />
            the app!
          </Link>
        </div>
        <div className="bg-white  w-1/4 p-4 h-max text-2xl border-4 border-black border-dashed relative group hover:bg-black hover:border-white transition-all duration-300">
          <Image
            className="group-hover:opacity-50 transition-opacity duration-300"
            src={Breazy}
            alt="screenshot of Netflix Together app"
          />
          <Link
            target="_blank"
            className="text-white  underline absolute top-24 left-10 text-4xl "
            href="https://olgathecreator.github.io/breazy/"
          >
            Click to use <br />
            the app!
          </Link>
        </div>
        <div className="flex flex-col w-1/6">
          <div className="bg-white   mt-10 p-4 h-max text-2xl border-4 border-black border-dashed relative">
            <h1 className="text-3xl">WATCH TOGETHER</h1>
            <p className="mt-4 text-2xl leading-9 font-light">
              A <span className="font-normal">full-stack</span> app written in{" "}
              <span className="font-normal">TypeScript</span> and{" "}
              <span className="font-normal">Python</span>
            </p>
          </div>
          <div className="bg-white ml-10 -mr-16  mt-10 p-4 h-max text-2xl border-4 border-black border-dashed relative">
            <p className="text-2xl leading-9 font-light">
              It allows you to share with friends movies you want to watch.
              <br />
              No more fights over which movie or series to choose.
            </p>
          </div>
          <div className="bg-white -ml-10 -mr-4 mt-10 p-4 h-max text-2xl border-4 border-black border-dashed relative">
            <h1 className="text-3xl">TECHSTACK:</h1>
            <p className="mt-4 text-2xl leading-9 font-light">
              A <span className="font-normal">full-stack</span> app written in{" "}
              <span className="font-normal">TypeScript</span> and{" "}
              <span className="font-normal">Python</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
