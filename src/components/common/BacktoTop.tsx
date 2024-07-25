import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BacktoTop = () => {
  const [showProgress, setShowProgress] = useState<boolean>(false);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowProgress(false);
  };

  const handleScroll = (): void => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
   
    setScrollPercentage(scrollPercentage);
    setShowProgress(scrollTop > 50);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showProgress && (
        <div
          className="progress-wrap active-progress"
          onClick={handleScrollToTop}
        >
          <CircularProgressbar value={scrollPercentage} strokeWidth={4} />
        </div>
      )}
    </>
  );
};

export default BacktoTop;
