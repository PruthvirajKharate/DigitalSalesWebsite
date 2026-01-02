import React from "react";
import Title from "./Title";
import assets from "../assets/assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile App Marketing",
      description:
        "A comprehensive marketing strategy for a mobile app that increased user acquisition by 150% in six months.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description:
        "A complete redesign of an e-commerce platform that improved user experience and boosted sales by 30%.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Campaign",
      description:
        "A targeted social media campaign that enhanced brand awareness and engagement across multiple platforms.",
      image: assets.work_fitness_app,
    },
  ];
  return (
    <div
      id="OurWork"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
  pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={"Our Work"}
        description={
          "Explore a selection of our recent projects that showcase our commitment to excellence and innovation in design."
        }
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4 sm:px-12 lg:px-24 xl:px-40 pb-20 text-gray-700 dark:text-white">
        {workData.map((work, index) => (
          <div
            className="hover:scale-105 transition-all duration-500 cursor-pointer"
            key={index}
          >
            <img src={work.image} alt="index" />
            <h3 className="font-semibold text-lg mt-4 mb-2">{work.title}</h3>
            <p className="text-gray-500 dark:text-white/75 text-sm text-center max-w-sm">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
