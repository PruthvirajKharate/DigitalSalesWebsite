import React from "react";
import assets from "../assets/assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "Creating compelling ad campaigns that capture attention and drive engagement across multiple platforms.",
      icons: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description:
        "Crafting and distributing valuable, relevant content to attract and retain a clearly defined audience.",
      icons: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "Producing high-quality written content tailored to your brand's voice and audience needs.",
      icons: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "Managing and growing your social media presence to foster community and enhance brand awareness.",
      icons: assets.social_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delayChildren: 0.6 }}
      id="services"
      className="relative isolate flex flex-col items-center gap-7 px-4
  sm:px-12 lg:px-24 xl:px-40 sm:pt-20 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -z-1 -top-80 -left-0 dark:hidden"
      />
      <Title
        title={"How can we help?"}
        description={
          "From stratergy to execution, we craft digital solutions that move your business forward."
        }
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icons={service.icons}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
