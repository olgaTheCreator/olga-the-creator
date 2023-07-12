"use client";

import { AboutMeComponent } from "@/components/about/AboutMeComponent";
import { MySkillsComponent } from "@/components/about/MySkillsComponent";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-yellow_bright font-roboto font-medium h-full border-x-4 border-b-4 border-black flex-col items-center flex pb-6 gap-10"
    >
      <AboutMeComponent />
      <MySkillsComponent />
    </motion.div>
  );
};

export default AboutMe;
