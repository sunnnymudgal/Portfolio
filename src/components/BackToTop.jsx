import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-2 p-3 text-[#474849] rounded-full hover:scale-95 text-4xl lg:text-5xl transition duration-300 ease-in-out z-50"
        >
          <FaArrowCircleUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
