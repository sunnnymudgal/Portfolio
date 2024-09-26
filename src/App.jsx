import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import BackToTop from "./components/BackToTop";

import SocialLinks from "./components/SocialLinks";

import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Bottom from "./components/Bottom";

function App() {
  return (
    <div className="bg-[#EDF2FC] h-screen font-extrabold">
      <Navbar />
      <Main />
      <div className="w-100% flex h-40 bg-[#EDF2FC] items-center justify-center">
        <div className="h-[1px] w-[80%] bg-[#5c570b8e]"></div>
      </div>
      <AboutMe />
      <div className="w-100% flex h-40 bg-[#EDF2FC] items-center justify-center">
        <div className="h-[1px] w-[80%] bg-[#5c570b8e]"></div>
      </div>
      <Skills />
      <div className="w-100% flex h-40 bg-[#EDF2FC] items-center justify-center">
        <div className="h-[1px] w-[80%] bg-[#5c570b8e]"></div>
      </div>
{/*       <Projects />
      <div className="w-100% flex h-40 bg-[#EDF2FC] items-center justify-center">
        <div className="h-[1px] w-[80%] bg-[#5c570b8e]"></div>
      </div> */}
      <Bottom />
      <div className="fixed top-24 right-1">
        <SocialLinks />
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
