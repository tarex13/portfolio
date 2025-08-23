import React, { useState } from "react";
import { motion } from "motion/react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Home = ({ section, setSection, imageNumber, setShowPopUp }) => {
  const [mailOpen, setMailOpen] = useState(true);

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
        className="relative h-full w-full flex flex-col lg:flex-row items-center justify-evenly border-2 border-white rounded-xl p-4 md:p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Social Icons */}
        <div className="flex lg:flex-col flex-row gap-4 mb-6 lg:mb-0">
          <CiMail
            className="w-12 h-12 text-white p-3 bg-stone-100/20 rounded-full cursor-pointer"
            title="tarex2006@gmail.com"
            onClick={() => setShowPopUp(true)}
          />
          <CiLinkedin
            className="w-12 h-12 text-white p-3 bg-stone-100/20 rounded-full cursor-pointer"
            onClick={() => (location.href = "https://linkedin.com")}
          />
          <FaGithub
            className="w-12 h-12 text-white p-3 bg-stone-100/20 rounded-full cursor-pointer"
            onClick={() => (location.href = "https://github.com/tarex13")}
          />
        </div>

        {/* Intro Text & Buttons */}
        <motion.div className="rounded-lg text-white w-full lg:w-[55%] border-2 p-6 md:p-10 mb-6 lg:mb-0">
          <span className="block font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            Hello and welcome👋
          </span>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B3C4D6] mb-4">
            My name is <span className="font-bold text-white">Tara Onayoade</span> and I
            am a CS/BBA Student from the University of Waterloo. I am passionate
            about sustainability and social advocacy. Most of my projects are about
            connecting people through social apps.
            <p className="text-white mt-2">
              <b>Note: </b>Navigation happens through these buttons.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["home", "stack", "projects"].map((item) => (
              <motion.button
                key={item}
                type="button"
                onClick={() => setSection(item)}
                className="px-4 py-2 border-2 border-[#fff] hover:border-gray-400 rounded-sm cursor-pointer text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item === "home"
                  ? "Home"
                  : item === "stack"
                  ? "Tech Stack"
                  : "My Projects"}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Avatar */}
        <div className="relative flex justify-center">
          <div className="loop-card-base absolute inset-0" />
          <img
            src="/avatar.jpg"
            alt="Tara Avatar"
            className="w-28 sm:w-40 md:w-52 lg:w-60 xl:w-72 object-cover shadow-lg loop-card-glass"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
