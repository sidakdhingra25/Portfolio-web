"use client"
import dynamic from "next/dynamic";
const UseAnimations = dynamic(() => import("react-useanimations"), { ssr: false });
import infinity from 'react-useanimations/lib/infinity';
import { motion , useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = " with experience in both freelance and internship roles. I specialize in React, TypeScript, Next.js, Node.js, and MongoDB, with a strong focus on building scalable web applications. Currently, I work as a Web Developer at FinCon Research and have previously contributed as a Frontend Developer at StudioMarici and Flib.I love to create seamless user experiences and collaborating with cross-functional teams.";
const words = text.split(' ');

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget, 
        offset: ['start end', 'end end']});
        
        useMotionValueEvent(scrollYProgress, "change", (latest) => 
        console.log("latest", latest)
    );
    const [currentword, setCurrentword] = useState(0);
    const wordsIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    
    useEffect(() => {
        wordsIndex.on('change', (latest) => {
            setCurrentword(latest);
        })
    })
    
    return (
        <section id="introduction" className=" flex justify-center items-center">
            <div className="md:max-w-7xl sm:max-w-md text-center">
                <div className="sticky top-28">
                <div className="flex justify-center text-lime-400">
                    <span className="border border-lime-600 py-2 px-2 gap-2 bg-fill rounded-full align-middle inline-flex">
                        <UseAnimations animation={infinity} className="" size={26} fillColor='white' strokeColor="lime" /> Small description of who i am
                    </span>
                </div>
                <div className="text-xl md:text-4xl lg:text-5xl mt-10 font-medium text-center">
                   <span>I'm Sidak, a full-stack web developer</span>
                   <span className=" text-slate-800 leading-tight">
                    {words.map((word, wordsIndex) => (
                        <span key={wordsIndex} className={twMerge(
                            "transition duration-500 text-white/15",
                            wordsIndex < currentword && "text-blue-300"
                        )}>
                            {`${word} `}</span>
                    ))}
                    </span>
                </div>
                </div>
            <div className="h-[150vh]" ref={scrollTarget}></div> 
            </div>
        </section>
    );
}
