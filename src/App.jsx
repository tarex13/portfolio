import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import BouncingLogos from "./components/BouncingLogos";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import TechStack from "./components/TechStack";
import { CiLink, CiMail } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";
import Projects from "./components/projects";

function App() {
  const [section, setSection] = useState("home");
  const [imageNumber, setImageNumber] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageNumber((imageNumber) => (imageNumber + 1) % 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>

      {showPopUp && (
        <AnimatePresence>
          <motion.div
            className="inset-0 bg-gray-500/80 z-50 absolute flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ scale: 0.5, y: -100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.5, y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <CiMail className="w-20 h-20 text-white border-white bg-gray-400 p-5 rounded-full shadow-xl" />
              
              <div className="mt-5 border-2 rounded w-60 p-5 gap-3 border-white flex flex-col text-white font-bold font-mono shadow-lg bg-gray-700/80 backdrop-blur-sm">
                <motion.button
                  type="button"
                  className="cursor-pointer border-2 hover:bg-white hover:border-0 hover:text-gray-400 text-[1.5rem] gap-3 flex items-center p-2 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigator.clipboard.writeText("tarex2006@gmail.com")}
                >
                  <CiLink className="w-7 h-7" /> Copy Link
                </motion.button>

                <a
                  href="mailto:tarex2006@gmail.com"
                  className="cursor-pointer border-2 hover:bg-white hover:border-0 hover:text-gray-400 text-[1.5rem] gap-3 flex items-center p-2 rounded"
                >
                  <RiSendPlane2Line className="w-7 h-5" /> Send Mail
                </a>

                <motion.button
                  type="button"
                  className="cursor-pointer border-2 hover:bg-white hover:border-0 hover:text-gray-400 text-[1.5rem] gap-3 flex items-center p-2 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPopUp(false)}
                >
                  <MdClose className="w-7 h-6" /> Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
      <div className="w-screen h-screen relative flex items-center justify-center bg-gradient-to-tr from-[#0E1A1F] via-[#1A2E4D] via-[#2E4F73] to-[#3A6D92] ">
        <AnimatePresence>
          <motion.div className="h-[80%] w-[80%] relative">
            <AnimatePresence mode="wait">
              {section === "home" && (
                <Home
                  key="home"
                  section={section}
                  setSection={setSection}
                  imageNumber={imageNumber}
                  setShowPopUp={setShowPopUp}
                />
              )}
              {section === "stack" && (
                <TechStack
                  key="stack"
                  section={section}
                  setSection={setSection}
                  imageNumber={imageNumber}
                  setImageNumber={setImageNumber}
                />
              )}
              {section === "projects" && (
                <Projects
                  key="projects"
                  section={section}
                  setSection={setSection}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
