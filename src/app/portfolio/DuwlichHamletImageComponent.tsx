import Image from "next/image";
import Link from "next/link";
import dulwichhamlet from "../../../public/images/dulwichhamlet.png";
import dulwichhamlet2 from "../../../public/images/dh2.png";

export const DulwichHamletImageComponent = () => {
  return (
    <div className="order-first sm:w-1/2 lg:w-2/5 sm:order-last">
      <div className="bg-white  max-w-sm lg:max-w-xl w-full flex mx-auto sm:mx-0   p-4 h-max text-2xl border-4 group border-black border-dashed relative group hover:bg-black hover:border-white transition-all duration-300">
        {" "}
        <Link
          className="relative"
          target="_blank"
          href="https://olgathecreator.co.uk/dulwich-hamlet/"
        >
          <Image
            className="group-hover:opacity-30 transition-opacity duration-300"
            src={dulwichhamlet}
            alt="screenshot of Dulwich Hamlet FC fanpage"
          />
        </Link>
      </div>
      <div className="bg-white  max-w-sm lg:max-w-xl w-full flex mx-auto sm:mx-0 mt-6 p-4 h-max text-2xl border-4 group border-black border-dashed relative group hover:bg-black hover:border-white transition-all duration-300">
        {" "}
        <Link
          className="relative"
          target="_blank"
          href="https://olgathecreator.co.uk/dulwich-hamlet/"
        >
          <Image
            className="group-hover:opacity-30 transition-opacity duration-300 "
            src={dulwichhamlet2}
            alt="screenshot of Dulwich Hamlet FC fanpage"
          />
          <p className="text-white backdrop-blur-md  underline absolute top-8 lg:top-24 left-12  lg:left-[45%] text-3xl group-hover:text-4xl transition-all duration-500">
            {" "}
            Click to go to <br />
            Dulwich Hamlet
            <br />
            fanpage!
          </p>
        </Link>
      </div>
    </div>
  );
};
