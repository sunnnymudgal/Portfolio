import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="navbar w-full h-fit flex items-center justify-end px-10 py-8">
      <div className="navChild  text-[#606163] h-6 flex z-10 items-center font-bold text-[1rem] lg:text-[1.2rem] justify-evenly 2xl:w-[40%] xl:w-[38%] lg:w-[38%] md:w-[45%] sm:w-[50%] max-sm:hidden">
        <div className="group gap-2 cursor-pointer flex items-center flex-col justify-center">
          <div className="cursor-pointer">
            <Link to="/">HOME</Link>
          </div>
          <div className="h-[1px] w-0 group-hover:w-[140%] transform ease-in-out duration-200 bg-black"></div>
        </div>
        <div className="group gap-2 cursor-pointer flex items-center flex-col justify-center">
          <div className="cursor-pointer">
            <Link to="/projects">PROJECTS</Link>
          </div>
          <div className="h-[1px] w-0 group-hover:w-[140%] transform ease-in-out duration-200 bg-black"></div>
        </div>
      </div>
      <div className="relative">
        <div
          className="sm:hidden h-6  flex items-center justify-center text-4xl"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <RxCross1 className="block mt-4 z-20" />
          ) : (
            <HiOutlineMenuAlt4 className="block mt-4" />
          )}
        </div>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 1, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.1 }}
              className="shadow-lg border-y-8 border-[#4f4949] navDiv text-2xl text-[#EDF2FC] z-10 font-mono bg-[#BB1B2C] top-[-8px] right-[-15px]  px-6 py-16 flex flex-col gap-8 rounded-3xl absolute h-fit w-52"
            >
              <Link to="/">
                <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 0.9 }}
                >
                  HOME
                </motion.div>
              </Link>
              <Link to="/projects">
                <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 0.9 }}
                >
                  PROJECTS
                </motion.div>
              </Link>
              <a
                target="_blank"
                href="mailto:sunnyxmudgal@gmail.com"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 0.9 }}
                >
                  Send Mail
                </motion.div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
