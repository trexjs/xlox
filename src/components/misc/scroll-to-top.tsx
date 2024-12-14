import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-indigo-500 hover:bg-indigo-600 text-white text-3xl p-4 rounded-full shadow-md focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp />
        </button>
      )}
    </div>
  );
}
