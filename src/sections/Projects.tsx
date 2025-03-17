"use client";

import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import arrowDown from "react-useanimations/lib/arrowDown";
import ExpandableCard from "./ExpandableCard";

const UseAnimations = dynamic(() => import("react-useanimations"), { ssr: false });

export default function Features() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust threshold to control when it appears/disappears
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.6, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <section id="projects" className="pt-52">
      <div>
        <div>
          <div className="text-center text-lime-400">
            <span className="border border-lime-600 py-2 px-2 gap-2 bg-fill rounded-full align-middle uppercase inline-flex">
              <UseAnimations animation={arrowDown} size={20} strokeColor="lime" />
              projects
            </span>
          </div>
          <motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 50 }} className="py-32">
            <ExpandableCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
