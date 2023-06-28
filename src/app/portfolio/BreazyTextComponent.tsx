export const BreazyTextComponent = () => {
  return (
    <div className="flex flex-col w-1/6">
      <div className="bg-white ml-8  -mt-5 p-4 h-max mr-2 border-4 border-black border-dashed relative">
        <h1 className="text-2xl font-bold">BREAZY</h1>
        <p className="mt-4 text-xl leading-9 font-normal">
          A <span className="font-semibold">front-end</span> web app coded using
          React.
        </p>
      </div>
      <div className="bg-white -ml-16  mt-10 p-4 h-max mr-6 border-4 border-black border-dashed relative">
        <p className="text-xl leading-9 font-normal">
          <span className="font-semibold">Breazy</span> - breathing exercises
          made easy.
        </p>
      </div>
      <div className="bg-white ml-2  mt-10 p-4 h-max border-4 border-black border-dashed relative">
        <h1 className="text-2xl">TECHSTACK:</h1>
        <p className="mt-4 text-xl leading-9 font-normal">
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">React Hooks</span>, Javascript, HTML,
          CSS, Framer Motion, React Transition Group,{" "}
          <span className="font-semibold">Jest</span>,{" "}
          <span className="font-semibold">React Testing Library</span>
        </p>
      </div>
    </div>
  );
};
