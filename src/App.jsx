import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";

import SocialLinks from "./components/SocialLinks";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#EDF2FC] h-screen font-extrabold">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
      <SocialLinks />
    </div>
  );
}

export default App;
