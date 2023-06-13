import Link from "next/link";

export const AboutMe = () => {
  return (
    <div className="w-full bg-yellow_bright font-roboto font-medium h-screen p-10 border-x-4 border-b-4 border-black relative grid grid-cols-12 grid-rows-6">
      <div className="bg-white ml-16 2xl:text-5xl lg:text-4xl lg:leading-normal 2xl:leading-relaxed lg:w-2xl 2xl:p-12 lg:p-6 max-w-2xl col-start-6 col-span-5 2xl:row-span-4 lg:row-span-3 mt-16 border-4 border-black border-dotted">
        <p>Hello,</p>
        <p>
          my name is Olga Curylo and I’m a{" "}
          <span className="font-bold bg-yellow_bright">
            full-stack developer
          </span>
          .
        </p>
      </div>
      <div className="bg-white lg:w-72 2xl:p-8 lg:p-6 max-w-72 text-2xl border-4 border-black border-dotted col-start-3 row-start-1 leading-relaxed">
        <p>
          Checkout my <span className="font-bold">CV </span>and{" "}
          <Link className="text-red_bright underline" href="/portfolio">
            portfolio
          </Link>
          .
        </p>
      </div>
      <div className="bg-white lg:w-sm p-8 max-w-sm col-start-2 col-span-4 row-start-2 row-span-3 mt-20 text-2xl border-4 border-black border-dotted leading-relaxed">
        <p>
          <ul className="list-disc">
            Harvard Cs50 Certificate:
            <li>beating Sekiro on NG+</li>
            <li>techno</li>
            <li>my kids</li>
            <li>routes</li>
          </ul>
        </p>
      </div>
      <div className="bg-white lg:w-sm p-4 max-w-sm col-start-11 ml-16 col-span-2 mb-16 row-start-2 row-span-3 mt-20 text-lg border-4 border-black border-dotted">
        <p>
          <ul className="list-disc list-inside">
            I love:
            <li>Sekiro</li>
            <li>techno</li>
            <li>my kids</li>
            <li>routes</li>
            <li>programming languages</li>
            <li>Advent of Code</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
