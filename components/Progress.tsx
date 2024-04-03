"use client";
import React, { useEffect } from "react";
const Progress = () => {
  useEffect(() => {
    const handleScroll = () => {
      const progress: HTMLSpanElement | null =
        document.querySelector(".filled-progress");
      if (progress) {
        const scrollPercent =
          (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          100;
        progress.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress w-full fixed top-0 h-1 bg-gray-700 z-[998]">
      <span className="filled-progress h-full bg-white block"></span>
    </div>
  );
};

export default Progress;
