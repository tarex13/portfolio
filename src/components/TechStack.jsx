import React from "react";
import { motion } from "motion/react";
import BouncingLogos from "./BouncingLogos";

export default function TechStack({
  section,
  imageNumber,
  setImageNumber,
  setSection,
}) {
  return (
    <>
      <motion.div
        className="loop-card-base-outer"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <motion.div
        key="home"
        className="relative h-full w-full flex flex-col lg:flex-row items-center justify-evenly gap-6 p-4 border-2 border-white rounded-xl overflow-y-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Tech Stack List */}
        <div className="border-2 border-white w-full sm:w-[22rem] h-auto rounded shadow-2xl flex-shrink-0">
          <p className="text-[whitesmoke] w-[50%] font-mono font-semibold w-full border-b-2 text-center p-2">
            <span className="text-2xl sm:text-[2rem]">Tech Stack</span>
            <br />
            <span className="text-xs sm:text-sm">(Click to learn more)</span>
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 text-white font-semibold gap-3 p-3 text-sm sm:text-base">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Django",
              "C",
              "SQL",
            ].map((tech, index) => (
              <li
                key={index}
                className="border-b-2 p-1 border-[whitesmoke] cursor-pointer shadow-sm hover:border-l-2 hover:border-b-0 transition"
                onClick={() => setImageNumber(index)}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Logos */}
        <div className="flex-1 w-full flex justify-center items-center">
          <BouncingLogos imageNumber={imageNumber} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center lg:absolute lg:bottom-[5vh] text-white gap-2 mt-6 lg:mt-0">
          <motion.button
            type="button"
            onClick={() => setSection("home")}
            className="px-3 py-2 border-2 border-[#fff] hover:border-gray-400 rounded-sm cursor-pointer text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Home
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setSection("stack")}
            className="px-3 py-2 border-2 border-[#fff] hover:border-gray-400 rounded-sm cursor-pointer text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Tech Stack
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setSection("projects")}
            className="px-3 py-2 border-2 border-[#fff] hover:border-gray-400 rounded-sm cursor-pointer text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My Projects
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
