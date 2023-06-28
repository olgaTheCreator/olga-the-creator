export const WatchTogetherTextComponent = () => {
  return (
    <div className="flex flex-col w-1/6">
      <div className="bg-white ml-8 -mr-12 mt-10 p-4 h-max border-4 border-black border-dashed relative">
        <h1 className="text-2xl font-bold">WATCH TOGETHER</h1>
        <p className="mt-4 text-xl leading-9 font-normal">
          A <span className="font-semibold">full-stack </span>app written in{" "}
          <span className="font-semibold">TypeScript </span>and{" "}
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
  );
};
