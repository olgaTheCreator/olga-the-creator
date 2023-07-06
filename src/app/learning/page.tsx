"use client";
import Link from "next/link";
import {
  computerScienceLinks,
  cssAndHtmlLinks,
  frameworksLinks,
  javaScriptLinks,
  resourcesLink,
} from "./resourcesLinks";
import { motion } from "framer-motion";

interface LearningArea {
  title: string;
  links: resourcesLink[];
}

const learningAreas: LearningArea[] = [
  { title: "COMPUTER SCIENCE", links: computerScienceLinks },
  { title: "CSS and HTML", links: cssAndHtmlLinks },
  { title: "JAVASCRIPT and TYPESCRIPT", links: javaScriptLinks },
  { title: "FRONTEND FRAMEWORKS", links: frameworksLinks },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const LearningResources = () => {
  return (
    <>
      <motion.div
        key="learning"
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full relative bg-blue_bright font-roboto font-medium h-max min-h-screen border-x-4 border-b-4 border-black flex flex-col p-4 lg:py-8 xl:py-16 lg:px-8 items-center gap-6 xl:gap-10"
      >
        <h1 className="w-full first-letter:text-4xl md:first-letter:text-5xl max-w-screen-xl lg:text-4xl text-2xl md:text-3xl xl:text-5xl xl:text-justify">
          For people who want to start or expand their self-taught coding
          journey I recommend visiting pages listed below.
        </h1>
        <h2 className="md:first-letter:text-4xl first-letter:text-3xl w-full max-w-screen-xl text-xl lg:text-3xl md:text-2xl xl:text-4xl">
          They all were a source of great{" "}
          <span className="font-bold">knowledge</span> and all of the resources
          are <span className="font-bold">free</span>. * next to a link suggests
          more advanced content.
        </h2>
        <motion.div variants={container} initial="hidden" animate="show" className="flex gap-4 md:gap-6 lg:gap-8 max-w-screen-xl flex-wrap justify-center">
          {learningAreas.map((area) => {
            return (
              <motion.div
              variants={listItem}
                key={area.title}
                className="bg-white w-full md:max-w-xs lg:max-w-md mt-5 p-4 lg:p-6 h-max  border-4 border-black border-dashed relative"
              >
                <h1 className=" text-2xl lg:text-3xl font-bold">
                  {area.title}
                </h1>
                <ul className="mt-2 lg:mt-4 text-xl lg:text-2xl xl:space-y-2 leading-8 xl:leading-9 font-semibold list-[square] list-inside">
                  {area.links.map((link) => {
                    return (
                      <li key={link.title}>
                        <Link
                          target="_blank"
                          href={link.href}
                          className="underline hover:text-blue_bright"
                        >
                          {link.title}
                        </Link>
                        {link.star}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default LearningResources;
