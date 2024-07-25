"use client";
import React, { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type YourComponentProps = {
  children: ReactNode;
};

const UseGsapAnimation: React.FC<YourComponentProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.set(".bdFadeUp", {
        y: 50,
        opacity: 0,
      });
    }

    const fadeArray = gsap.utils.toArray(".bdFadeUp");

    fadeArray.forEach((item: any) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,

          start: "top bottom-=150",
        },
      });

      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      });
    });
  }, []);

  return children;
};

export default UseGsapAnimation;
