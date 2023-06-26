import Image from "next/image";
import NetflixTogether from "../../../public/NetflixTogether.jpg";
import Breazy from "../../../public/Breazy.jpg";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="w-full bg-red_bright font-roboto font-medium h-max min-h-screen border-x-4 border-b-4 border-black flex-col items-center flex py-10 px-4">
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-1/6">
          <div className="bg-white ml-8 -mr-12 mt-10 p-4 h-max border-4 border-black border-dashed relative">
            <h1 className="text-2xl font-bold">WATCH TOGETHER</h1>
            <p className="mt-4 text-xl leading-9 font-normal">
              A <span className="font-semibold">full-stack</span> app written in{" "}
              <span className="font-semibold">TypeScript</span> and{" "}
              <span className="font-semibold">Python 3</span>.
            </p>
          </div>
          <div className="bg-white -mr-16  mt-10 p-4 h-max  border-4 border-black border-dashed relative">
            <p className="text-xl leading-9 font-normal">
              It allows you to share with friends movies you want to watch.
              <br />
              No more fights over which movie or series to choose.
            </p>
          </div>
          <div className="bg-white ml-2 -mr-10 mt-10 p-4 h-max border-4 border-black border-dashed relative">
            <h1 className="text-2xl">TECHSTACK:</h1>
            <p className="mt-4 text-xl leading-9 font-normal">
              <span className="font-semibold">React</span>, React Hooks, React
              Router, <span className="font-semibold">Sanic</span>, Mayim, HTML,
              CSS, Figma, SQL, <span className="font-semibold">SQLite</span>,
              esbuild, NGINX, Pipenv,{" "}
              <span className="font-semibold">TailwindCSS</span>, Pandas
            </p>
          </div>
        </div>

        <div className="bg-white  w-1/4 p-4 h-max text-2xl border-4 border-black border-dashed relative group hover:bg-black hover:border-white transition-all duration-300">
          {" "}
          <Link
            className="relative"
            target="_blank"
            href="https://olgathecreator.co.uk/together/"
          >
            <Image
              className="group-hover:opacity-30 transition-opacity duration-300"
              src={NetflixTogether}
              alt="screenshot of Netflix Together app"
            />
            <p className="text-white  underline absolute top-10  left-4 text-4xl w-max">
              {" "}
              Click to use <br />
              Watch Together <br />
              app!
            </p>
          </Link>
        </div>
        <div className="bg-white  w-1/4 p-4 h-max text-2xl border-4 border-black border-dashed relative group hover:bg-black hover:border-white transition-all duration-300">
          <Link
            target="_blank"
            className="relative w-full"
            href="https://olgathecreator.github.io/breazy/"
          >
            <Image
              className="group-hover:opacity-30 transition-opacity duration-300"
              src={Breazy}
              alt="screenshot of Netflix Together app"
            />
            <p className="text-white w-max  underline absolute top-24 left-10 text-4xl ">
              {" "}
              Click to use <br />
              Breazy app!
            </p>
          </Link>
        </div>
        <div className="flex flex-col w-1/6">
          <div className="bg-white ml-8  -mt-5 p-4 h-max mr-2 border-4 border-black border-dashed relative">
            <h1 className="text-2xl font-bold">BREAZY</h1>
            <p className="mt-4 text-xl leading-9 font-normal">
              A <span className="font-semibold">front-end</span> web app coded
              using React.
            </p>
          </div>
          <div className="bg-white -ml-16  mt-10 p-4 h-max mr-6 border-4 border-black border-dashed relative">
            <p className="text-xl leading-9 font-normal">
              <span className="font-semibold">Breazy</span> - breathing
              exercises made easy.
            </p>
          </div>
          <div className="bg-white ml-2  mt-10 p-4 h-max border-4 border-black border-dashed relative">
            <h1 className="text-2xl">TECHSTACK:</h1>
            <p className="mt-4 text-xl leading-9 font-normal">
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">React Hooks</span>, Javascript,
              HTML, CSS, Framer Motion, React Transition Group,{" "}
              <span className="font-semibold">Jest</span>,{" "}
              <span className="font-semibold">React Testing Library</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
