import React from "react";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <div className="flex items-end max-md:flex-col pt-8">
        <div className="p1 bg-[#EDF2FC] h-fit w-[70%] max-md:w-[100%] flex flex-col lg:gap-[3vh] sm:gap-[2vh] gap-[1vh] mt-[10vh] pb-10 px-[5vw] max-md:px-2vh">
          <div className="c1 lg:text-4xl md:text-3xl sm:text-2xl text-[#474849]">
            I'm <span className="text-[#9c7301]">Sunny</span> Mudgal
          </div>
          <div className="c2 text-[#9c7301] lg:text-md md:text-sm sm:text-xs text-xs">
            <div>
              <p>
                A self-driven learner passionate about full-stack Java
                development.
              </p>
              <p>
                My journey started with mastering core Java, followed by
                exploring advanced Java concepts, and deepening my expertise in
                the Spring Framework with modules like Spring Boot and
                Hibernate.
              </p>
              <p>
                On the frontend, I’ve built a solid foundation in HTML5, CSS,
                JavaScript, and React, crafting responsive, dynamic web
                applications.
              </p>
              <p>
                What sets me apart is my ability to quickly adapt to new
                technologies and frameworks. With a strong programming
                background, I thrive on challenges, whether it's solving complex
                backend issues or building seamless user experiences.
              </p>
              <p>
                I'm always eager to learn, grow, and take on new challenges,
                continuously expanding my technical toolkit.
              </p>
            </div>
          </div>
          <div className=" hover:scale-95 transform duration-200 ease-out c3 cursor-pointer flex items-center justify-center lg:text-xl md:text-lg sm:text-sm text-xs font-mono tracking-widest bg-[#9c7301] w-fit py-1 px-3 rounded-md text-[#EDF2FC]">
            DOWNLOAD CV
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
