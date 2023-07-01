import Image from "next/image";
import Link from "next/link";
import Breazy from "../../../public/images/Breazy.jpg";

export const BreazyImageComponent = () => {
  return (
    <div className="w-2/5">
      <div className="bg-white w-96 p-4 h-max text-2xl border-4 border-black border-dashed relative group hover:bg-black hover:border-white transition-all duration-300">
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
          <p className="text-white w-max  underline absolute top-24 left-10 text-3xl group-hover:text-4xl transition-all duration-500 ">
            {" "}
            Click to use <br />
            Breazy app!
          </p>
        </Link>
      </div>
    </div>
  );
};
