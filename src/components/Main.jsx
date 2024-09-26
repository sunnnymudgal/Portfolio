import React from "react";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <div
        id="home"
        className=" flex lg:pt-32 pt-20 items-end max-lg:flex-col lg:pb-8 lg:pr-20"
      >
        <div className="p1 bg-[#EDF2FC] h-fit w-[70%] max-lg:w-[100%] flex flex-col lg:gap-[3vh] sm:gap-[2vh] gap-[1vh] mt-[10vh] pb-10 pl-[5vw]  max-md:px-2vh">
          <div className="c1 lg:text-5xl md:text-4xl text-3xl max-sm:pr-10 sm:text-4xl text-[#474849]">
            <div className="text-6xl font-serif">HELLO!</div>
            I'm <span className="text-[#9c7301]">Sunny</span> Mudgal
          </div>
          <div className="c2 text-[#9c7301] lg:text-md md:text-sm sm:text-xs text-xs max-lg:pr-10">
            Adaptable full-stack developer with expertise in Java, Spring, and
            React, driven by a passion for learning and tackling new challenges.
            Committed to continuous growth, I enjoy transforming complex
            problems into elegant solutions and delivering exceptional user
            experiences
          </div>
          <button className=" hover:scale-90 transform duration-200 ease-out c3 cursor-pointer flex items-center justify-center lg:text-xl md:text-lg sm:text-sm text-xs font-mono tracking-widest bg-[#9c7301] w-fit py-1 pt-1
            px-3 rounded-md text-[#EDF2FC] mt-10">
            <a href="https://drive.google.com/file/d/1EMmmrHFMvYqtZb9ew8DblETDK52Vc-iQ/view?usp=sharing">RESUME</a>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
