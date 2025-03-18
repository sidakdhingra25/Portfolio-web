"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const [scope, animate] = useAnimate();


  useEffect(() => {
    setIsMobile(window.innerWidth < 768); 
  }, []);


  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);


  useEffect(() => {
    if (animation.current) {
      animation.current.speed = isHovered ? 0.5 : 1;
    }
  }, [isHovered]);

 
  const toggleText = () => {
    if (isMobile) {
      setIsHovered((prev) => !prev); 
    }
  };

  return (
    <section id="call-to-action" className="-mt-36 pb-4">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          onClick={toggleText}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="group-hover:text-lime-400">
                {isHovered ? "Together" : "Let's work"}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
