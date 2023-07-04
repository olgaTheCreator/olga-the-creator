import { BackgroundImage } from "./BackgroundImage";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full bg-green_bright font-roboto h-screen border-x-4 border-b-4 border-black flex-col items-center flex p-10 relative overflow-hidden">
      {/* <Image src={backgroudFace} fill alt="background face image" /> */}
      <div className="absolute lg:w-1/2 w-full h-full z-0 object-center object-cover">
        <BackgroundImage />
      </div>
      <div className="grid z-10 lg:gap-10 gap-6 grid-cols-5 grid-rows-4 max-w-screen-lg lg:mt-10 mb-6 h-5/6">
        <a
          href="mailto:curylo.olga@gmail.com"
          className="col-start-2 row-start-1 max-h-24"
        >
          <button className="bg-white md:px-8 px-6 py-2 md:py-4 text-4xl md:text-5xl border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium ">
            EMAIL
          </button>
        </a>
        <Link
          target="_blank"
          href="https://github.com/olgaTheCreator"
          className="md:col-start-4 col-start-3 row-start-2 max-h-24"
        >
          <button className="bg-white md:px-8 px-6 py-2 md:py-4 text-4xl md:text-5xl  border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium">
            GITHUB
          </button>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/olga-curylo/"
          className="col-start-1 row-start-3 max-h-24"
        >
          <button className="bg-white md:px-8 px-6 py-2 md:py-4 text-4xl md:text-5xl  border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium">
            LINKEDIN
          </button>
        </Link>
        <a
          href="/files/Olga_Curylo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="col-start-3 row-start-4 max-h-24"
        >
          <button className="bg-white md:px-8 px-6 py-2 md:py-4 text-4xl md:text-5xl  border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium">
            CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
