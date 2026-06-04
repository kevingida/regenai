"use client";
import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });
  const isMobile = screenSize.width < 640;
  const isTablet = screenSize.width < 768;
  const isLarge = screenSize.width < 1024;
  const isXLarge = screenSize.width >= 1280;

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenSize, isMobile, isTablet, isLarge, isXLarge };
};

export default useScreenSize;
