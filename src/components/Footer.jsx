import React from "react";
import { LiaJava } from "react-icons/lia";
import { FaReact } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";
function Footer() {
  return (
    <>
      <div className="max-md:w-full bg-[#EDF2FC]">
        <div className="flex justify-center z-0 relative">
          <div className="absolute top-9">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2.5,
                delay: 1,
                ease: "easeInOut",
              }}
              className="text-[#606163] z-10 flex gap-7 justify-between w-full text-4xl"
            >
              <motion.div
                className="mt-10 text-[#2e2e2e]"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <LiaJava />
              </motion.div>
              <motion.div
                className="mt-1"
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <FaReact />
              </motion.div>
              <motion.div
                className="mt-1 px-4"
                initial={{ y: 0 }}
                animate={{ y: [0, -16, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <SiSpring />
              </motion.div>
              <motion.div
                className="mt-10"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <SiSpringboot />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="bg-[#EDF2FC]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <img
              src="./images/xhd.png"
              className="max-sm:h-80 max-md:h-85 max-lg:h-77 max-xl:h-70 h-80"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Footer;
