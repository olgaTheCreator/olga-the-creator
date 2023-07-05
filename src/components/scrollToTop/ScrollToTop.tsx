"use client";
import { useEffect, useState } from "react";
import { ScrollToTopIcon } from "./ScrollToTopIcon";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    const handleScrollButton = () => {
      window.scrollY > 200
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    };
    window.addEventListener("scroll", handleScrollButton);
    return () => {
      window.removeEventListener("scroll", handleScrollButton);
    };
  }, []);
  return (
    <>
      {showScrollButton && (
        <button
          className="fixed bottom-5 right-10 lg:bottom-12  z-50 cursor-pointer p-4 "
          onClick={handleScrollToTop}
        >
          <ScrollToTopIcon />
        </button>
      )}
    </>
  );
};
