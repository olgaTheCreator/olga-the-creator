import Image from "next/image";
import Link from "next/link";
import Breazy from "../../../public/images/Breazy.jpg";

export const BreazyImageComponent = () => {
  return (
    <div className="sm:w-1/2 lg:w-2/5">
      <div className="bg-white  max-w-sm xl:max-w-md flex mx-auto sm:mx-0  xl:w-96 p-4 h-max text-2xl border-4 group border-black border-dashed relative group hover:bg-black hover:border-white transition-all duration-300">
        <Link
          target="_blank"
          className="relative w-full"
          href="https://olgathecreator.github.io/breazy/"
        >
          <Image
            className="group-hover:opacity-30 transition-all duration-300"
            src={Breazy}
            alt="screenshot of Netflix Together app"
          />
          <p className="text-white w-full  underline absolute top-10 left-6 text-3xl group-hover:text-4xl transition-all duration-500 ">
            {" "}
            Click to use <br />
            Breazy app!
          </p>
        </Link>
      </div>
    </div>
  );
};
