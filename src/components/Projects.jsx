import React from "react";
import { motion } from "motion/react";

export default function Projects({ section, setSection }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-full">
      {/* Background card */}
      <motion.div
        className="loop-card-base-outer"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Main container */}
      <motion.div
        key="projects"
        className="container mx-auto relative w-full h-full overflow-auto flex flex-col items-center border-2 border-white rounded-xl pt-6 md:pt-10 pb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Top nav buttons */}
        <div className="text-white w-full flex flex-wrap justify-center items-center gap-3 mb-4 sm:mb-6">
          <motion.button
            type="button"
            onClick={() => setSection("home")}
            className="md:px-4 px-1 py-1 md:py-2 border-2 border-[#fff] hover:border-gray-400 rounded-sm cursor-pointer text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Home
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setSection("stack")}
            className="md:px-4 px-1 py-1 md:py-2 border-2 border-[#fff] hover:border-gray-400 rounded-sm cursor-pointer text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Tech Stack
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setSection("projects")}
            className="md:px-4 px-1 py-1 md:py-2 border-2 border-[#fff] hover:border-gray-400 rounded-sm cursor-pointer text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My Projects
          </motion.button>
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 pt-2"
          variants={container}
          animate="show"
          initial="hidden"
        >
          {/* Card: EcoQuest */}
          <motion.div
            className="bg-white/5 justify-between backdrop-blur-lg rounded-2xl shadow-xl p-4 flex flex-col bg-gradient-to-tr from-[#0E1A1F]/20 to-[#1A2E4D]/50"
            variants={child}
          >
            <div>
              <img
                src="/ecoquest.png"
                alt="Screenshot of EcoQuest educational game"
                className="w-full aspect-video object-cover rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <h3 className="text-lg md:text-xl font-semibold text-white">
                EcoQuest Game
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-1">
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
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <motion.a
                whileHover={{ scale: 0.95 }}
                href="https://ecoquest.nichesite.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View EcoQuest live site"
                className="px-3 py-2 border-2 hover:bg-white/30 hover:border-white/30 hover:text-black text-white text-xs sm:text-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white/60"
              >
                View Live
              </motion.a>
              <a
                href="https://github.com/tarex13/Energy-Creates"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View EcoQuest code on GitHub"
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white/60"
              >
                Code
              </a>
            </div>
          </motion.div>

          {/* Card: Tealives */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-4 flex flex-col bg-gradient-to-tr from-[#0E1A1F]/20 to-[#1A2E4D]/50"
            variants={child}
          >
            <img
              src="/tealives.png"
              alt="Screenshot of Tealives social app"
              className="w-full aspect-video object-cover rounded-lg shadow-md mb-4"
              loading="lazy"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white">
              Tealives
              <span className="block text-xs sm:text-sm font-normal text-gray-300">
                (Server might take a while to spin up)
              </span>
            </h3>
            <p className="text-gray-300 text-sm md:text-base mt-1">
              A community-based social interaction web-app. Members have access
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

            <div className="flex flex-wrap gap-3 mt-4">
              <motion.a
                whileHover={{ scale: 0.95 }}
                href="https://tealives.ca/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Tealives live site"
                className="px-3 py-2 border-2 hover:bg-white/30 hover:border-white/30 hover:text-black text-white text-xs sm:text-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white/60"
              >
                View Live
              </motion.a>
              <a
                href="https://github.com/tarex13/tealives-frontend"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Tealives frontend code on GitHub"
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white/60"
              >
                Frontend Code
              </a>
              <a
                href="https://github.com/tarex13/tealives-backend"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Tealives backend code on GitHub"
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white/60"
              >
                Backend Code
              </a>
            </div>
          </motion.div>

          {/* Card: Pupaisle */}
          <motion.div
            className="bg-white/5  justify-between backdrop-blur-lg  rounded-2xl shadow-xl p-4 flex flex-col bg-gradient-to-tr from-[#0E1A1F]/20 to-[#1A2E4D]/50"
            variants={child}
          >
            <div>
              <img
                src="/pupaisle.png"
                alt="Screenshot of Pupaisle budgeting tool"
                className="w-full aspect-video object-cover rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Pupaisle
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-1">
                A tool to help students learn how to manage their finances.
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
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <motion.a
                whileHover={{ scale: 0.95 }}
                href="https://pupaisle.epizy.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Pupaisle live site"
                className="px-3 py-2 border-2 hover:bg-white/30 hover:border-white/30 hover:text-black text-white text-xs sm:text-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white/60"
              >
                View Live
              </motion.a>
              <a
                href="#"
                aria-label="Pupaisle code repository"
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white/60"
              >
                Code
              </a>
            </div>
          </motion.div>

          {/* Card: Roman Casio */}
          <motion.div
            className="bg-white/5  justify-between backdrop-blur-lg rounded-2xl shadow-xl p-4 flex flex-col bg-gradient-to-tr from-[#0E1A1F]/20 to-[#1A2E4D]/50"
            variants={child}
          >
            <div>
              <img
                src="/casio.png"
                alt="Screenshot of Roman Casio calculator"
                className="w-full aspect-video object-cover rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Roman Casio
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-1">
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
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <motion.a
                whileHover={{ scale: 0.95 }}
                href="https://roman-casio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Roman Casio live site"
                className="px-3 py-2 border-2 hover:bg-white/30 hover:border-white/30 hover:text-black text-white text-xs sm:text-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white/60"
              >
                View Live
              </motion.a>
              <a
                href="https://github.com/tarex13/roman-casio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Roman Casio code on GitHub"
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white/60"
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
