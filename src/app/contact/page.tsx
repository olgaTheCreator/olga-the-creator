import { BackgroundImage } from "./BackgroundImage";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full bg-green_bright font-roboto h-full min-h-screen border-x-4 border-b-4 border-black flex-col items-center flex p-10 relative overflow-hidden">
      {/* <Image src={backgroudFace} fill alt="background face image" /> */}
      <div className="absolute md:w-1/2 w-full h-full z-0">
        <BackgroundImage />
      </div>
      <div className="grid z-10 gap-10 grid-cols-5 grid-rows-5 max-w-screen-lg lg:mt-10">
        <a
          href="mailto:curylo.olga@gmail.com"
          className="col-start-2 row-start-1 max-h-24"
        >
          <button className="bg-white px-8 py-2  text-5xl border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium ">
            EMAIL
          </button>
        </a>
        <Link
          target="_blank"
          href="https://github.com/olgaTheCreator"
          className="col-start-4 row-start-2 max-h-24"
        >
          <button className="bg-white px-8 py-2  text-5xl border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium">
            GITHUB
          </button>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/olga-curylo/"
          className="col-start-1 row-start-3 max-h-24"
        >
          <button className="bg-white px-8 py-2  text-5xl border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium">
            LINKEDIN
          </button>
        </Link>
        <a
          href="/files/Olga_Curylo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="col-start-3 row-start-4 max-h-24"
        >
          <button className="bg-white px-8 py-2  text-5xl border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium">
            CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
