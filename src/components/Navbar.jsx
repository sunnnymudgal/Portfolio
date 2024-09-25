import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="w-[100vw] justify-center flex items-center z-[9999]">
      <div className="bg-[#EDF2FC] rounded-full fixed top-3 z-[9999] shadow-lg">
        <SlideTabs />
      </div>
    </div>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-[#0f3357c5] bg-[#EDF2FC] p-1 shadow-lg z-[9999]"
    >
      <a href="#home">
        <Tab setPosition={setPosition}>Home</Tab>
      </a>
      <a href="#aboutme">
        <Tab setPosition={setPosition}>ABOUT ME</Tab>
      </a>
      <a href="#skills">
        <Tab setPosition={setPosition}>SKILLS</Tab>
      </a>
      <a href="#projects">
        <Tab setPosition={setPosition}>PROJECTS</Tab>
      </a>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-[9999] block cursor-pointer px-3 py-1.5 text-xs font-bold uppercase text-black hover:text-neutral-500 md:px-5 md:py-1 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="absolute z-[9998] h-7 w-auto rounded-full bg-[#000000] md:h-8"
    />
  );
};

export default Navbar;
