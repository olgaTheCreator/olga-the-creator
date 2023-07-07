"use client";
import { BackgroundImage } from "./BackgroundImage";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-green_bright font-roboto h-screen border-x-4 border-b-4 border-black flex-col items-center flex p-10 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute lg:w-1/2 w-full h-full z-0 object-center object-cover"
      >
        <BackgroundImage />
      </motion.div>
      <motion.div
        initial={{ rotateZ: 90 }}
        animate={{
          rotateZ: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="grid z-10 lg:gap-10 gap-6 grid-cols-5 grid-rows-4 max-w-screen-lg lg:mt-10 mb-6 h-5/6 relative"
      >
        <a
          href="mailto:curylo.olga@gmail.com"
          className="col-start-2 row-start-1 max-h-24 w-full relative"
        >
          <motion.button
            initial={{ rotateZ: -60 }}
            animate={{
              rotateZ: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="bg-white md:px-8 px-6 py-2 md:py-4 text-4xl md:text-5xl border-4 border-black relative border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium "
          >
            EMAIL
          </motion.button>
        </a>
        <Link
          target="_blank"
          href="https://github.com/olgaTheCreator"
          className="md:col-start-4 col-start-3 row-start-2 max-h-24"
        >
          <motion.button
            initial={{ rotateZ: -70 }}
            animate={{
              rotateZ: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-white md:px-8 px-6 py-2 md:py-4 text-4xl md:text-5xl  border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium"
          >
            GITHUB
          </motion.button>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/olga-curylo/"
          className="col-start-1 row-start-3 max-h-24"
        >
          <motion.button
            initial={{ rotateZ: -60 }}
            animate={{
              rotateZ: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="bg-white md:px-8 px-6 py-2 md:py-4 text-4xl md:text-5xl  border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium"
          >
            LINKEDIN
          </motion.button>
        </Link>
        <a
          href="/files/Olga_Curylo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="col-start-3 row-start-4 max-h-24"
        >
          <motion.button
            initial={{ rotateZ: -50 }}
            animate={{
              rotateZ: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="bg-white md:px-8 px-6 py-2 md:py-4 text-4xl md:text-5xl  border-4 border-black border-dashed leading-relaxed hover:rounded-full hover:border-8 transition-all duration-100 hover:font-medium"
          >
            CV
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
