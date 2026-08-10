"use client";

import { useEffect, useState } from "react";
import HeroImage from "@public/Music.jpg";
 import Image from "next/image";
 import DesktopView from "./DesktopView/page";
 import MobileView from "./MobileView/page";

const page = () => {
  const [showElement, setShowElement] = useState(false);

 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    }

  checkWidth();
    window.addEventListener("resize", checkWidth);


    return () => window.removeEventListener("resize", checkWidth);
  }, []);


  const Title = "Music Island Stories";
    if (isMobile) {
    return <MobileView />;
  }

  return <DesktopView />;

};

export default page;
