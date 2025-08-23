import React, { Children } from "react";
import { AnimatePresence, motion } from "motion/react";
export default function Projects({ section, setSection }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // delay each child
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative h-full">
      <motion.div
        className="loop-card-base-outer"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        key="home"
        className="container h-[95%] relative mb-10 h-full w-full overflow-auto flex flex-col pt-10 pb-10 items-center justify-evenly border-2 border-white rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="text-white w-full flex justify-center align-center gap-4">
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
        <motion.div
          className="grid grid-cols-3 gap-5 h-full pt-5"
          variants={container}
          animate="show"
          initial="hidden"
        >
          <motion.div
            className="max-w-md bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-4 bg-gradient-to-tr from-[#0E1A1F]/20 to-[#1A2E4D]/50"
            
            variants={child}
          >
            <img
              src="/ecoquest.png"
              alt="EcoQuest Game"
              className="rounded-lg shadow-md mb-4"
            />

            <h3 className="text-xl font-semibold text-white">EcoQuest Game</h3>
            <p className="text-gray-300 text-sm mt-1">
              An educational game about energy challenges in Canada.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 text-xs bg-indigo-600/40 text-indigo-100 rounded-full">
                HTML
              </span>
              <span className="px-2 py-1 text-xs bg-teal-600/40 text-teal-100 rounded-full">
                CSS
              </span>
              <span className="px-2 py-1 text-xs bg-yellow-600/40 text-yellow-100 rounded-full">
                JavaScript
              </span>
            </div>

            <div className="flex gap-3 mt-4">
              <motion.a
                whileHover={{scale: 0.95}}
                href="https://ecoquest.nichesite.org/"
                className="px-4 py-2 border-2 hover:bg-white/30 hover:border-white/30 hover:text-black text-white text-sm rounded-lg"
              >
                View Live
              </motion.a>
              <a
                href="https://github.com/tarex13/Energy-Creates"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg"
              >
                Code
              </a>
            </div>
          </motion.div>

          <motion.div
            className="max-w-md bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-4 bg-gradient-to-tr from-[#0E1A1F]/20 to-[#1A2E4D]/50"
            variants={child}
          >
            <img
              src="/tealives.png"
              alt="Tealives"
              className="rounded-lg shadow-md mb-4"
            />

            <h3 className="text-xl font-semibold text-white">Tealives<span className="text-sm"> (Server might take a while to spin up)</span></h3>
            <p className="text-gray-300 text-sm mt-1">
              A community based social interaction web-app. Members have access
              to discussions, marketplace, events and groups.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 text-xs bg-red-600/40 text-indigo-100 rounded-full">
                React
              </span>
              <span className="px-2 py-1 text-xs bg-pink-600/40 text-fuchsia-100 rounded-full">
                Tailwind
              </span>
              <span className="px-2 py-1 text-xs bg-teal-600/40 text-teal-100 rounded-full">
                CSS
              </span>
              <span className="px-2 py-1 text-xs bg-yellow-600/40 text-yellow-100 rounded-full">
                JavaScript
              </span>
              <span className="px-2 py-1 text-xs bg-green-800/40 text-yellow-100 rounded-full">
                Django
              </span>
            </div>

            <div className="flex gap-3 mt-4">
              <motion.a
              
                whileHover={{scale: 0.95}}
                href="https://tealives.ca/"
                className="px-4 py-2 border-2 hover:bg-white/30 hover:border-white/30 hover:text-black text-white text-sm rounded-lg"
              >
                View Live
              </motion.a>
              <a
                href="https://github.com/tarex13/tealives-frontend"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg"
              >
                Frontend Code
              </a>
              <a
                href="https://github.com/tarex13/tealives-backend"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg"
              >
                Backend Code
              </a>
            </div>
          </motion.div>
          <motion.div
            className="max-w-md bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-4 bg-gradient-to-tr from-[#0E1A1F]/20 to-[#1A2E4D]/50"
            variants={child}
          >
            <img
              src="/pupaisle.png"
              alt="Pupaisle"
              className="rounded-lg shadow-md mb-4"
            />

            <h3 className="text-xl font-semibold text-white">Pupaisle</h3>
            <p className="text-gray-300 text-sm mt-1">
              An tool to help students learn how to manage their finances.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 text-xs bg-indigo-600/40 text-indigo-100 rounded-full">
                HTML
              </span>
              <span className="px-2 py-1 text-xs bg-teal-600/40 text-teal-100 rounded-full">
                CSS
              </span>
              <span className="px-2 py-1 text-xs bg-yellow-600/40 text-yellow-100 rounded-full">
                JavaScript
              </span>
            </div>

            <div className="flex gap-3 mt-4">
              <motion.a
                whileHover={{scale: 0.95}}
                href="https://pupaisle.epizy.com/"
                className="px-4 py-2 border-2 hover:bg-white/30 hover:border-white/30 hover:text-black text-white text-sm rounded-lg"
              >
                View Live
              </motion.a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg"
              >
                Code
              </a>
            </div>
          </motion.div>
          <motion.div
            className="max-w-md bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-4 bg-gradient-to-tr from-[#0E1A1F]/20 to-[#1A2E4D]/50"
            variants={child}
          >
            <img
              src="/casio.png"
              alt="Roman Casio"
              className="rounded-lg shadow-md mb-4"
            />

            <h3 className="text-xl font-semibold text-white">Roman Casio</h3>
            <p className="text-gray-300 text-sm mt-1">
              This is a calculator not for numbers, but Roman Numerals.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 text-xs bg-red-600/40 text-indigo-100 rounded-full">
                React
              </span>
              <span className="px-2 py-1 text-xs bg-pink-600/40 text-fuchsia-100 rounded-full">
                Tailwind
              </span>
              <span className="px-2 py-1 text-xs bg-yellow-600/40 text-yellow-100 rounded-full">
                JavaScript
              </span>
            </div>

            <div className="flex gap-3 mt-4">
              <motion.a
                whileHover={{scale: 0.95}}
                href="https://roman-casio.vercel.app/"
                className="px-4 py-2 border-2 hover:bg-white/30 hover:border-white/30 hover:text-black text-white text-sm rounded-lg"
              >
                View Live
              </motion.a>
              <a
                href="https://github.com/tarex13/roman-casio"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg"
              >
                Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
