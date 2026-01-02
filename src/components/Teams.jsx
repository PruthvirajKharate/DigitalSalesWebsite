import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets/assets";

const Teams = () => {
  return (
    <div
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
  pt-20 text-gray-800 dark:text-white"
    >
      <Title
        title={"Meet the team"}
        description={
          "A passionate team of digital experts dedicated to your brands success."
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl 
            border border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-100 dark:shadow-white/10
            hover:scale-105 transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-gray-500 dark:text-white/75 text-sm">
                {member.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
