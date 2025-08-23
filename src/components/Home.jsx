import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Home = ({ section, setSection, imageNumber, setShowPopUp }) => {
    const [mailOpen, setMailOpen] = useState(true)
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
        <div>
            <div>
                <CiMail className="w-15 h-15 text-white p-3 bg-stone-100/20 mb-5 rounded-full cursor-pointer" title="tarex2006@gmail.com" onClick={()=>setShowPopUp(true)}/>

            </div>
            <div>
                <CiLinkedin  className="w-15 h-15 text-white p-3 bg-stone-100/20 mb-5 rounded-full cursor-pointer" />
            </div>
            <div>
                <FaGithub  className="w-15 h-15 text-white p-3 bg-stone-100/20 rounded-full cursor-pointer" onClick={()=>location.href="https://github.com/tarex13"} />
            </div>
        </div>
        <>
          <motion.div className="rounded-lg text-white w-[60%] h-[70%] border-2 p-10">
            <span className="text-[5rem] font-bold">Hello and welcome👋</span>
            <div className="text-[1.5rem] text-[#B3C4D6] p-2 border-white">
              My Name is{" "}
              <span className="font-bold text-white">Tara Onayoade</span> and I
              am a CS/BBA Student from the University of Waterloo. I am
              passionate about sustainability and social advocacy. Most of my
              projects are about connecting people through social apps.
              <p className="text-white">
                <b>Note: </b>Navigation Happens through these buttons.
              </p>
            </div>
            <div>
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
          <div className="relative">
            <div className="loop-card-base"></div>
            <img
              src="/avatar.jpg"
              alt="Tara Avatar"
              className="cover rounded-full loop-card-glass"
            />
          </div>
        </>
      </motion.div>
    </>
  );
};

export default Home;
