import { AnimatePresence, motion } from "motion/react";

export default function BouncingLogos({ imageNumber }) {
  const logos = [
    {
      img: "/html-logo.png",
      experience: "7+ Years",
      proficiency: "Professional",
      usage: "Personal Projects",
    },
    {
      img: "/css-logo.png",
      experience: "7+ Years",
      proficiency: "Intermediate",
      usage: "Personal Projects",
    },
    {
      img: "/js-logo.png",
      experience: "7+ Years",
      proficiency: "Advanced",
      usage: "Personal Projects",
    },
    {
      img: "/react-logo.png",
      experience: "~ 6 Months",
      proficiency: "Intermediate",
      usage: "Personal Projects",
    },
    {
      img: "/tailwind-logo.png",
      experience: "~ 6 Months",
      proficiency: "Intermediate",
      usage: "Personal Projects",
    },
    {
      img: "/django-logo.png",
      experience: "> 1 Years",
      proficiency: "Intermediate(With Documentation)",
      usage: "Personal Projects",
    },
    {
      img: "/c-logo.png",
      experience: "~ 1 Years",
      proficiency: "Intermediate(With Documentation)",
      usage: "School-Based Projects",
    },
    {
      img: "/sql-logo.png",
      experience: "1 Year",
      proficiency: "Familiar With",
      usage: "Personal Projects",
    },
    {
      img: "/cpp-logo.png",
      experience: "Currently Learning",
      proficiency: "Currently Learning",
      usage: "Assignments",
    },
  ];

  return (
    <motion.div className="flex justify-center items-center relative w-full">
      <AnimatePresence mode="wait">
        {logos.map(({ img, experience, proficiency, usage }, index) =>
          imageNumber === index ? (
            <motion.div className="flex items-center flex-col" key={index}>
              <motion.img
                src={img}
                className="w-30 h-30 z-14"
                initial={{ y: -200 }}
                animate={{
                  y: [-200, 0, -60, 0, -30, 0, -10, 0],
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  times: [0, 0.4, 0.55, 0.7, 0.8, 0.9, 0.95, 1],
                }}
                exit={{
                  x: 200,
                  opacity: 0,
                  transition: {
                    type: "tween",
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.div
                className="md:w-90 w-full md:h-50 h-auto pt-10 border-2 border-[whitesmoke] bg-[whitesmoke]/90 rounded-lg -mt-10 relative p-2"
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                exit={{ x: -150, opacity: 0 }}
                transition={{ ease: "easeOut" }}
              >
                <motion.div
                  className="bouncing-button-base border-2 border-white rounded-lg"
                  initial={{ x: -50 }}
                  animate={{ x: 0 }}
                  exit={{ x: 150, opacity: 0 }}
                  transition={{ ease: "easeOut" }}
                ></motion.div>

                <h3 className="text-xl text-zinc-700 p-1">
                  <span className="font-bold text-2xl text-black">
                    Experience:
                  </span>{" "}
                  {experience}
                </h3>
                <h4 className="text-xl text-zinc-700 p-1">
                  <span className="font-bold text-2xl text-black">
                    Proficiency Level:
                  </span>{" "}
                  {proficiency}
                </h4>
                <h5 className="text-xl text-zinc-700 p-1">
                  <span className="font-bold  text-2xl text-black">Usage:</span>{" "}
                  {usage}
                </h5>
              </motion.div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </motion.div>
  );
}
