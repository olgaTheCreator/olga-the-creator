"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AboutMeComponent = () => {
  const [{ scalability }, setInteractiveEl] = useState({ scalability: false });

  const variants = {};

  return (
    <motion.div
      transition={{ staggerChildren: 1 }}
      className="overflow-clip relative flex flex-wrap justify-around gap-5 md:gap-10 xl:gap-0 lg:grid lg:grid-cols-12 lg:grid-rows-6 xl:grid-rows-5 w-full md:h-4/5 px-6 pt-6 md:px-10 md:pt-10  lg:max-h-[48rem] max-w-screen-2xl"
    >
      <motion.div
        initial={{ rotate: 20 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white mx-auto lg:mx-0  xl:ml-16 max-w-md 2xl:text-5xl text-3xl p-4  md:text-4xl leading-normal md:leading-[1.7] flex flex-col place-items-center 2xl:leading-relaxed justify-center lg:w-2xl lg:p-6 lg:max-w-2xl lg:col-start-6 xl:col-start-6 xl:col-span-5 lg:col-span-6 2xl:max-h-max h-fit  lg:mt-8 xl:mt-16 border-8 border-black border-dotted"
      >
        <p className="w-full text-left">Hello,</p>
        <p>my name is Olga Curylo and {"I’m"} a </p>
        <p className="font-bold place-self-start text-left relative overflow-clip ">
          <motion.span
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-block bg-yellow_bright w-full h-full absolute z-10"
          ></motion.span>
          <span className="z-50 relative">full-stack</span>
        </p>
        <p className="font-bold place-self-start text-left relative overflow-clip ">
          <motion.span
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-block bg-yellow_bright w-full h-full absolute z-10"
          ></motion.span>
          <span className="z-50 relative">developer.</span>
        </p>
      </motion.div>
      <motion.div
        initial={{ x: "-500%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4 }}
        className="bg-white lg:hover:border-blue_bright ml-5 lg:ml-0  lg:w-max 2xl:p-8 xl:p-6 p-4 max-w-max h-max text-2xl xl:text-3xl border-4 border-black border-dashed  col-start-2 xl:col-start-3 row-start-1 leading-relaxed"
      >
        <p>
          My{" "}
          <Link className="text-red_bright underline" href="/portfolio">
            portfolio
          </Link>
          .
        </p>
      </motion.div>
      <motion.div
        initial={{ x: "-500%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4 }}
        className="bg-white lg:hover:scale-125 transition-all duration-500 lg:hover:border-blue_bright lg:w-sm max-w-sm p-2 2xl:p-4 -ml-3 lg:ml-0 lg:col-start-1 xl:col-span-3 lg:col-span-4 xl:mx-6 lg:row-start-2 lg:row-span-2 xl:row-span-3 xl:mt-20 text-2xl border-8 border-black border-double leading-relaxed "
      >
        <Link href="https://certificates.cs50.io/2d31df6e-250e-4be8-979d-6d9c7ad6059d.pdf?size=letter">
          <p className="font-bold">Harvard CS50 Certificate:</p>
          <Image
            className="mt-4"
            src="/images/CS50xOlgaCurylo.png"
            alt="image of CS50 certificate"
            height={500}
            width={400}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: "500%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white lg:w-sm p-4 max-w-sm w-48 xl:w-36 mx-auto md:mx-4 lg:mx-2 h-max xl:col-start-11 xl:ml-16 lg:col-start-10 lg:col-span-3 lg:row-start-5 lg:mt-8 lg:ml-6 xl:col-span-2 xl:mb-16 xl:row-start-3 xl:mt-20 text-2xl xl:text-lg border-8 border-black border-dashed"
      >
        <p>{"I've beaten Sekiro on NG+"}</p>
      </motion.div>
      <motion.div
        initial={{ x: "-500%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4 }}
        className="bg-white lg:mt-6 lg:w-max p-4 2xl:p-8 lg:px-6 max-w-max h-max xl:text-4xl text-3xl border-4 border-black border-solid xl:col-start-11 xl:ml-10 xl:row-start-1 lg:col-start-7 lg:row-start-4 leading-relaxed"
      >
        My{" "}
        <a
          href="/files/Olga_Curylo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline lg:hover:text-blue_bright "
        >
          CV
        </a>
      </motion.div>
      <motion.div
        initial={{ x: "-500%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="group relative w-max lg:w-sm max-w-sm h-max xl:col-start-1 xl:mx-10 xl:col-span-2 lg:mb-16 xl:row-start-1 lg:mt-16 text-2xl xl:text-lg md:text-xl lg:col-start-10 lg:row-start-4 "
      >
        <p className=" bg-white p-4  border-2 border-black border-dotted visible lg:group-hover:invisible opacity-100 lg:group-hover:opacity-0 transition-all duration-[1000ms]">
          {"I'm vegan"}
        </p>
        <div
          className=" bg-white py-4 px-2 opacity-0 lg:group-hover:opacity-100 border-spacing-4 border-black border-dotted border-2 transition-all duration-[1000ms] lg:group-hover:scale-150  invisible lg:group-hover:visible lg:text-xl  xl:text-2xl
            absolute -top-1 -left-4  flex w-max
            "
        >
          I ❤️ &#128004; 🐖 🐓
          {/* 🐖 🐓 🐍 🐋 */}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "500%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-center md:max-w-xs lg:text-left bg-white xl:mt-6 p-2 lg:mt-6 2xl:p-8 lg:p-6 text-2xl ml-14 lg:ml-0 max-w-sm lg:w-sm border-4 border-black border-dotted xl:col-start-4 xl:row-start-2 h-max xl:col-span-2 lg:col-start-2 lg:col-span-3 lg:row-start-4 lg:-mr-10 leading-relaxed"
      >
        I like techno and crocheting
      </motion.div>

      <div
        role="button"
        className=" xl:col-start-4  xl:row-start-4 2xl:row-start-4 2xl:col-span-3 2xl:col-start-4 h-max xl:col-span-3 leading-relaxed lg:col-start-6 lg:row-start-5 lg:col-span-5  "
        onClick={() => setInteractiveEl({ scalability: !scalability })}
      >
        {scalability ? (
          <Image
            className="lg:hover:animate-bounce rotate-12"
            src="/images/datadoesntlie.gif"
            alt="gif of computer showing text data doesn't lie, people do"
            height={300}
            width={200}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white group lg:hover:border-dashed lg:hover:rounded-xl lg:hover:shadow-lg lg:hover:shadow-[#c4e2fd] md:w-48 lg:w-56 lg:hover:border-blue_bright relative lg:mt-4 lg:mx-4 2xl:ml-2 2xl:mr-0 2xl:p-6 p-2 lg:p-4 text-2xl max-w-md lg:w-md border-4 border-black border-dashed lg:border-dotted leading-relaxed"
          >
            I want to learn about{" "}
            <span className="lg:group-hover:font-bold ">scalability</span>.
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
