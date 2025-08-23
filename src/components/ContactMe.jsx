import React from "react";
import { AnimatePresence, motion } from "motion/react";
import BouncingLogos from "./BouncingLogos";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
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
        <div>
            <div>
                <CiMail />
                <span>Email: </span><span>tarex2006@gmail.com</span>
            </div>
            <div>
                <CiLinkedin />
                <span>Linkedin: </span>
            </div>
            <div>
                <FaGithub />
                <span>GitHub</span>
            </div>
        </div>
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
            onClick={() => setSection("projects")}
            className="p-2 border-2 border-[#fff] hover:border-gray-400 m-2 rounded-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Projects
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setSection("contact")}
            className="p-2 border-2 border-[#fff] hover:border-gray-400 m-2 rounded-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Me
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setSection("playlist")}
            className="p-2 border-2 border-[#fff] hover:border-gray-400 m-2 rounded-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My Playlist
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};
