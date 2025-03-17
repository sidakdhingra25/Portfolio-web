"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import BubbleText from "@/components/ui/BubbleText";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import HeroLeft from "@/assets/images/HeroLeft.jpg"
import {motion, useAnimate} from "framer-motion"
import { useEffect } from "react";
import cursorYou from "@/assets/images/cursor-you.svg";
 
const H1words = `I'm a Full-Stack Developer`;
export default function Hero() {
    const [leftDesignscope, leftDesignanimate] = useAnimate();
    const [leftPointerscope, leftPointeranimate] = useAnimate();
    const [rightDesignscope, rightDesignanimate] = useAnimate();
    const [rightPointerscope, rightPointeranimate] = useAnimate();
    
    useEffect(() => {
        leftDesignanimate([
            [leftDesignscope.current, { opacity: [1]}, {duration: 0.5}],     
            [leftDesignscope.current, {y: 0, x: 0 }, {duration: 0.5}],     
        ]);
        leftPointeranimate([
            [leftPointerscope.current, { opacity: 1}, {duration: 0.5}],
            [leftPointerscope.current, { y: 0, x: -100}, {duration: 0.5}],
            [leftPointerscope.current, { x: 0, y: [0, 16, 0]}, {duration: 0.5, ease: "easeInOut"}],
        ]);
        rightDesignanimate([
            [rightDesignscope.current, { opacity: 1}, {duration: 0.5, delay: 1.5}],
            [rightDesignscope.current, {y: 0, x: 0 }, {duration: 0.5}]
        ]);
        rightPointeranimate([
            [rightPointerscope.current, { opacity: 1}, {duration: 0.5, delay: 1.5}],
            [rightPointerscope.current, { y: 0, x: 175}, {duration:0.5}],
            [rightPointerscope.current, { x: 0, y: [0,20,0] }, {duration: 0.5, delay: 0.5, ease: "easeInOut"}],
            ]);
    }, []);
    
    return (
        <section id="hero" className="py-24 h-screen overflow-x-clip"
        style={{cursor: `url(${cursorYou.src}), auto`}}>
            <div className="md:container relative">
                <motion.div 
                ref={leftDesignscope}
                initial={{opacity: 0, y: 100, x: -100}}
                drag
                 className="absolute hidden lg:block -left-36 top-16">
                    <Image 
                    src={HeroLeft}
                    alt="Design exapmple 1"
                    height={300}
                    width={300}
                    draggable="false"/>
                </motion.div>
                    <motion.div
                     ref={leftPointerscope}
                     initial={{opacity: 0, y: 100, x: -200}}
                      className="absolute left-56 top-96">
                        <Pointer name="Sidak" />
                    </motion.div>
                    
                <motion.div 
                ref={rightDesignscope}
                initial={{opacity: 0, y: 100, x: 100}}  
                drag
                className="absolute hidden lg:block  -right-72 -top-26">
                    <Image
                    src={designExample2Image}
                    alt="design 2"
                    draggable="false"/>                
                    </motion.div>
                    
                    <motion.div 
                    ref={rightPointerscope}
                    initial={{opacity: 0, y: 100, x: 275}}
                    className="absolute  right-72 top-10 ">
                        <Pointer name="Sidak" color="red" />
                    </motion.div>
            <div className="py-24 mt-10 align-middle text-center">
            <TextGenerateEffect className="text-4xl" words="Hi, I&apos;m Sidak." />
            <div className="text-5xl mx-auto font-semibold text-lime-600 text-center mt-5">
                <BubbleText text={H1words} />
                <div>
                    
                </div>
            </div>
            </div>
            </div>
        </section>
    );
}
