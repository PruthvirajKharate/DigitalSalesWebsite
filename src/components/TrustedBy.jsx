import React from "react";
import { company_logos } from "../assets/assets/assets";
import { motion } from "motion/react";

function TrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-6 py-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-center
  w-full overflow-hidden text-gray-500 dark:text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-semibold"
      >
        Trusted By Leading Company
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ delayChildren: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-10 m-4 dark:text-white flex-wrap"
      >
        {company_logos.map((logo, index) => (
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            key={index}
            src={logo}
            alt={`Company ${index + 1}`}
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default TrustedBy;
