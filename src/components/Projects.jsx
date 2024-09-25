import React from "react";

function ProjectFile({ imageSrc, projectName, link }) {
  return (
    <a target="_blank" href={link}>
      <div className="z-0 hover:scale-95 transform duration-500 ease-in-out flex flex-col items-center  p-4 border border-gray-200 rounded-lg shadow-md w-56 m-4 cursor-pointer">
        <img
          src={imageSrc}
          alt={projectName}
          className="w-full h-52 rounded-md"
        />
        <h3 className="mt-4 text-lg font-serif text-center">{projectName}</h3>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <div className=" bg-[#EDF2FC] pt-10 pb-24">
      <div className="flex flex-wrap justify-center">
        <ProjectFile
          imageSrc="./images/TodoAppPost.png"
          projectName="To-Do Application"
          link="https://sunnnymudgal.github.io/TodoList1/"
        />
        <ProjectFile
          imageSrc="./images/CalculatorPost.jpg"
          projectName="Simple Calculator"
          link="https://sunnnymudgal.github.io/SimpleCalculator/"
        />
        <ProjectFile
          imageSrc="./images/BMIpost.jpg"
          projectName="BMI Calculator"
          link="https://sunnnymudgal.github.io/BMI-Calculator-Project/"
        />
      </div>
    </div>
  );
}

export default Projects;
