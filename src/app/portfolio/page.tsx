"use client";
import { WatchTogetherTextComponent } from "./WatchTogetherTextComponent";
import { WatchTogetherImageComponent } from "./WatchTogetherImageComponent";
import { BreazyImageComponent } from "./BreazyImageComponent";
import { BreazyTextComponent } from "./BreazyTextComponent";
import { motion } from "framer-motion";
import { DulwichHamletTextComponent } from "./DulwichHamletTextComponent";
import { DulwichHamletImageComponent } from "./DuwlichHamletImageComponent";

const Portfolio = () => {
  return (
    <motion.div
      key="portfolio"
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-red_bright font-roboto font-medium h-max min-h-screen border-x-4 border-b-4 border-black flex-col items-center flex py-6 px-4 lg:py-16 lg:px-8 "
    >
      <div className="flex flex-col w-full justify-between gap-10 divide-y-4 divide-black divide-dotted ">
        <div className="flex flex-col sm:flex-row justify-start gap-6 md:gap-10 transition-all duration-300">
          <WatchTogetherTextComponent />
          <WatchTogetherImageComponent />
        </div>
        <div className="flex flex-col sm:flex-row justify-start gap-6 md:gap-10 pt-10">
          <BreazyImageComponent />
          <BreazyTextComponent />
        </div>
        <div className="flex flex-col sm:flex-row justify-start gap-6 md:gap-10 transition-all duration-300 pt-10">
          <DulwichHamletTextComponent />
          <DulwichHamletImageComponent />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
