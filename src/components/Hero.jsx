import { HERO_CONTENT } from "./../constants/index";
import ProfilePic from "../../public/Usama.png";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  const downloadRes = () => {
    saveAs("../../public/Usama-Resume.pdf", "Usama-resume.pdf");
  };
  return (
    <div className="border-b border-neutral-900 pb-4  lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col  items-center  lg:items-start ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Muhammad Usama
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500  bg-clip-text  text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=" my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.button
              className="mb-4 font-mono bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-bold py-2 px-6 border-b-4 border-blue-800 hover:border-blue-600 rounded-lg shadow-lg transition-transform duration-200 ease-in-out"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={downloadRes}
            >
              DOWNLOAD CV
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2  lg:p-8  ">
          <div className=" flex justify-center">
            <motion.img
              className=" rounded-lg"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={ProfilePic}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
