import React from "react";
import { AnimatePresence, motion } from "motion/react";
import BouncingLogos from "./BouncingLogos";
export default function TechStack ({
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
        className="relative h-full w-full flex items-center justify-evenly border-2 border-white rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <>
          <div className=" border-2 border-white w-90 h-80 rounded shadow-2xl">
            <p className="text-[whitesmoke] font-mono font-semibold border-b-2 text-center ">
              <span className="text-[2rem]">Tech Stack</span>
              <br />
              <span className="text-sm">(Click to learn more)</span>
            </p>

            <ul className="grid grid-cols-2 text-white font-semibold gap-5 p-3">
              <li
                className="border-b-2 p-1 border-[whitesmoke] cursor-pointer shadow-sm hover:border-l-2 hover:border-b-0"
                onClick={() => setImageNumber(0)}
              >
                HTML
              </li>
              <li
                className="border-b-2 p-1 border-[whitesmoke] cursor-pointer shadow-sm hover:border-r-2 hover:border-b-0"
                onClick={() => setImageNumber(1)}
              >
                CSS
              </li>
              <li
                className="border-b-2 p-1 border-[whitesmoke] cursor-pointer shadow-sm hover:border-l-2 hover:border-b-0"
                onClick={() => setImageNumber(2)}
              >
                JavaScript
              </li>
              <li
                className="border-b-2 p-1 border-[whitesmoke] cursor-pointer shadow-sm hover:border-r-2 hover:border-b-0"
                onClick={() => setImageNumber(3)}
              >
                React
              </li>
              <li
                className="border-b-2 p-1 border-[whitesmoke] cursor-pointer shadow-sm hover:border-l-2 hover:border-b-0"
                onClick={() => setImageNumber(4)}
              >
                Tailwind
              </li>
              <li
                className="border-b-2 p-1 border-[whitesmoke] cursor-pointer shadow-sm hover:border-r-2 hover:border-b-0"
                onClick={() => setImageNumber(5)}
              >
                Django
              </li>
              <li
                className="border-b-2 p-1 border-[whitesmoke] cursor-pointer shadow-sm hover:border-l-2 hover:border-b-0"
                onClick={() => setImageNumber(6)}
              >
                C
              </li>
              <li
                className="border-b-2 p-1 border-[whitesmoke] cursor-pointer shadow-sm hover:border-r-2 hover:border-b-0"
                onClick={() => setImageNumber(7)}
              >
                SQL
              </li>
            </ul>
          </div>
          {<BouncingLogos imageNumber={imageNumber} />}
        </>
        <div className="absolute bottom-[5vh] text-white ">
          <motion.button
            type="button"
            onClick={() => setSection("home")}
            className="p-2 border-2 border-[#fff] hover:border-gray-400 m-2 rounded-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Home
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setSection("stack")}
            className="p-2 border-2 border-[#fff] hover:border-gray-400 m-2 rounded-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Tech Stack
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setSection("projects")}
            className="p-2 border-2 border-[#fff] hover:border-gray-400 m-2 rounded-sm cursor-pointer"
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
};
