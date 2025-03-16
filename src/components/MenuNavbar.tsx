"use client"

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const MenuNavbar = () => {
  return (
    <div className="">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-full rounded-full p-1"
    >
      <Tab setPosition={setPosition} onClick={() => handleScroll("hero")}>Home</Tab>
      <Tab setPosition={setPosition} onClick={() => handleScroll("introduction")}>About</Tab>
      <Tab setPosition={setPosition} onClick={() => handleScroll("projects")}>Projects</Tab>
      <Tab setPosition={setPosition} onClick={() => handleScroll("experience")}>Experience</Tab>
      <Tab setPosition={setPosition} onClick={() => handleScroll("contact-me")}>Contact Me</Tab>
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ children, setPosition, onClick }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      key="cursor"
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};