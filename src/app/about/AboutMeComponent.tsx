"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AboutMeComponent = () => {
  const [{ scalability }, setInteractiveEl] = useState({ scalability: false });

  return (
    <div className=" relative grid grid-cols-12 grid-rows-6 w-full h-4/5 px-10 pt-10 2xl:max-h-[56rem] max-w-screen-2xl">
      <div className="bg-white ml-16 2xl:text-5xl lg:text-4xl lg:leading-normal flex flex-col place-items-center 2xl:leading-relaxed justify-center lg:w-2xl 2xl:p-6 lg:p-6 max-w-2xl col-start-6 col-span-5 2xl:max-h-max h-fit  mt-16 border-8 border-black border-dotted">
        <p className="w-full text-left">Hello,</p>
        <p>
          my name is Olga and {"I’m"} a <br />
          <span className="font-bold bg-yellow_bright">
            full-stack developer
          </span>
          .
        </p>
      </div>
      <div className="bg-white lg:w-max 2xl:p-8 lg:p-6 max-w-max h-max text-2xl border-4 border-black border-dashed col-start-3 row-start-1 leading-relaxed">
        <p>
          My{" "}
          <Link className="text-red_bright underline" href="/portfolio">
            portfolio
          </Link>
          .
        </p>
      </div>
      <div className="bg-white lg:w-sm p-8 max-w-sm col-start-1 col-span-3 mx-10 row-start-2 row-span-3 mt-20 text-2xl border-8 border-black border-double leading-relaxed">
        <p>Harvard Cs50 Certificate:</p>
      </div>
      <div className="bg-white lg:w-sm p-4 max-w-sm h-max col-start-11 ml-16 col-span-2 mb-16 row-start-2 mt-20 text-lg border-8 border-black border-dashed">
        <p>{"I've beaten Sekiro on NG+"}</p>
      </div>
      <div className="bg-white mt-6 lg:w-max 2xl:p-8 lg:p-6 max-w-max h-max text-2xl border-4 border-black border-solid col-start-12 row-start-1 leading-relaxed">
        My{" "}
        <Link className="font-bold underline" href="/portfolio">
          CV
        </Link>
      </div>
      <div className="bg-white mt-6 2xl:p-8 lg:p-6 text-2xl max-w-sm lg:w-sm border-4 border-black border-dotted col-start-4 row-start-2 h-max col-span-2 leading-relaxed">
        I like techno and crocheting
      </div>
      <div className="bg-white group relative lg:w-sm p-4 max-w-sm h-max col-start-1 mx-16 col-span-2 mb-16 row-start-1 mt-20 text-lg border-2 border-black border-dotted">
        <p>{"I'm vegan"}</p>
        <p
          className="transition transform duration-1000 invisible group-hover:visible group-hover:-translate-x-96 text-7xl
            absolute -top-20 flex w-max
            "
        >
          &#128004;🐖🐓🐍🐋
        </p>
      </div>
      <div
        role="button"
        className="col-start-4 row-start-4 h-max col-span-2 leading-relaxed"
        onClick={() => setInteractiveEl({ scalability: !scalability })}
      >
        {scalability ? (
          <Image
            className="hover:animate-bounce rotate-12"
            src="/datadoesntlie.gif"
            alt="gif of computer showing text data doesn't lie, people do"
            height={300}
            width={200}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white  hover:border-dashed hover:rounded-xl hover:shadow-lg hover:shadow-[#c4e2fd] hover:border-blue_bright relative mt-4 mx-4 2xl:p-6 lg:p-6 text-2xl max-w-sm lg:w-sm border-4 border-black border-dotted leading-relaxed"
          >
            I want to learn about scalability.
          </motion.div>
        )}
      </div>
    </div>
  );
};
