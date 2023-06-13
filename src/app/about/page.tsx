import Link from "next/link";

export const AboutMe = () => {
  return (
    <div className="w-full bg-yellow_bright font-roboto font-medium h-screen p-10 border-x-4 border-b-4 border-black relative ">
      <div className="bg-white lg:w-2xl p-12 max-w-2xl place-self-end right-20 mr-32 mt-16 border-4 border-black border-dotted absolute">
        <div className="text-5xl leading-relaxed">
          <p>Hello,</p>
          <p>
            my name is Olga Curylo and I’m a{" "}
            <span className="font-bold bg-yellow_bright">
              full-stack developer
            </span>
            .
          </p>
        </div>
      </div>
      <div className="bg-white lg:w-72 p-8 max-w-72 mt-10 text-2xl border-4 border-black border-dotted absolute leading-relaxed">
        <p>
          Checkout my <span className="font-bold">CV </span>and{" "}
          <Link className="text-red_bright underline" href="/portfolio">
            portfolio
          </Link>{" "}
          .
        </p>
      </div>
      <div className="bg-white lg:w-sm p-8 max-w-sm mt-64 left-20 text-2xl border-4 border-black border-dotted absolute leading-relaxed">
        <p>
          <ul>
            I love:
            <li>beating Sekiro on NG+</li>
            <li>techno</li>
            <li>my kids</li>
            <li>routes</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
