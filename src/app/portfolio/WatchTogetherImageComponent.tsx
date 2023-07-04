import Image from "next/image";
import Link from "next/link";
import NetflixTogether from "../../../public/images/NetflixTogether.jpg";

export const WatchTogetherImageComponent = () => {
  return (
    <div className="order-first sm:w-1/2 lg:w-2/5 sm:order-last">
      <div className="bg-white  max-w-sm xl:max-w-md flex mx-auto sm:mx-0   xl:w-96 p-4 h-max text-2xl border-4 group border-black border-dashed relative group hover:bg-black hover:border-white transition-all duration-300">
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
          <p className="text-white  underline absolute top-10  left-4 text-3xl group-hover:text-4xl w-full transition-all duration-500">
            {" "}
            Click to use <br />
            Watch Together <br />
            app!
          </p>
        </Link>
      </div>
    </div>
  );
};
