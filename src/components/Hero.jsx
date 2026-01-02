import React from "react";
import assets from "../assets/assets/assets";
import { motion } from "motion/react";
function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      id="hero"
      className="flex flex-col items-center gap-6 py-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-center
  w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img src={assets.group_profile} alt="Grp profile" className="w-20" />
        <p className="text-xs  font-medium">Trusted by 10k+ people</p>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        Turning imagination into{" "}
        <span
          className="bg-gradient-to-r from-[#5004E5] to-[#4d8cea]
        bg-clip-text text-transparent"
        >
          digital
        </span>{" "}
        impact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative isolate"
      >
        <img src={assets.hero_img} className="w-full max-w-6xl " alt="" />
        <img
          src={assets.bgImage1}
          className="absolute -top-25 -right-20 -z-1 dark:hidden sm:-top-80 sm:-right-60"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
