import { WatchTogetherImageComponent } from "./WatchTogetherImageComponent";

export const WatchTogetherTextComponent = () => {
  return (
    <div className="flex flex-wrap w-3/5 place-content-start gap-8">
      <div className="bg-white  p-4 h-max border-4 border-black border-dashed relative w-max max-w-xs">
        <h1 className="text-2xl font-bold">WATCH TOGETHER</h1>
        <p className="mt-4 text-xl leading-9 font-normal">
          A <span className="font-semibold">full-stack </span>app written in{" "}
          <span className="font-semibold">TypeScript </span>and{" "}
          <span className="font-semibold">Python 3</span>.
        </p>
      </div>
      <div className="bg-white  p-4 h-max  border-4 border-black border-dashed relative w-max max-w-sm">
        <p className="text-xl leading-9 font-normal">
          It allows you to share movies you want to watch with your friends.
          <br />
          No more fights over which movie or series to choose.
        </p>
      </div>
      <div className="bg-white p-4 h-max border-4 border-black border-dashed relative w-max max-w-sm">
        <h1 className="text-2xl">TECHSTACK:</h1>
        <p className="mt-4 text-xl leading-9 font-normal">
          <span className="font-semibold">React</span>, React Hooks, React
          Router, <span className="font-semibold">Sanic</span>, Mayim, HTML,
          CSS, Figma, SQL, <span className="font-semibold">SQLite</span>,
          esbuild, NGINX, Pipenv,{" "}
          <span className="font-semibold">TailwindCSS</span>, Pandas
        </p>
      </div>
      <div className="bg-white mt p-4 h-max border-4 border-black border-dashed relative w-max max-w-sm">
        <h1 className="text-2xl">PROBLEMS I ENCOUNTERED:</h1>
        <p className="mt-4 text-xl font-normal">
          <ul className="space-y-2 list-[square] list-inside">
            <li>Finding API, that can serve all Netflix movies and series</li>
            <li>Loading CSS and HTML files </li>
            <li>NGINX configuration</li>
          </ul>
        </p>
      </div>
      <div className="bg-white mt p-4 h-max border-4 border-black border-dashed relative w-max max-w-XL">
        <h1 className="text-2xl">
          I&apos;M BETTER DEVELOPER AFTER THIS PROJECT BECAUSE:
        </h1>
        <p className="mt-4 text-xl font-normal">
          <ul className="space-y-2 list-[square] list-inside">
            <li>Routes have become my friends</li>
            <li>
              I&apos;m not scared of using technologies I wasn&apos;t familiar
              with
            </li>
            <li>I now know how to set up cookies and use local storage</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
