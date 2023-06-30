import Image from "next/image";
import { BackgroundImage } from "./BackgroundImage";
// import backgroudFace from "../../../public/backgroundFace.svg";
const Contact = () => {
  return (
    <div className="w-full bg-green_bright font-roboto font-medium h-full min-h-screen border-x-4 border-b-4 border-black flex-col items-center flex p-10 relative overflow-hidden">
      {/* <Image src={backgroudFace} fill alt="background face image" /> */}
      <div className="absolute md:w-1/2 w-full h-full z-0">
        <BackgroundImage />
      </div>
      <div className="grid z-10">
        <div className="bg-white lg:w-sm px-8 py-4 max-w-sm col-start-1 col-span-3 mx-10 row-start-2 row-span-3 mt-20 text-5xl border-4 border-black border-dashed leading-relaxed ">
          EMAIL
        </div>
      </div>
    </div>
  );
};

export default Contact;
