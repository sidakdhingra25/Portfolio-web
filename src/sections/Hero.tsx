"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import BubbleText from "@/components/ui/BubbleText";
import HeroRight from "@/assets/images/HeroRight.jpg";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import HeroLeft from "@/assets/images/HeroLeft.jpg";
import { motion, useAnimate } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import cursorYou from "@/assets/images/cursor-you.svg";
const UseAnimations = dynamic(() => import("react-useanimations"), { ssr: false });
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import archive from 'react-useanimations/lib/archive';

const H1words = `I'm a Full-Stack Developer`;

export default function Hero() {
    const [leftDesignscope, leftDesignanimate] = useAnimate();
    const [leftPointerscope, leftPointeranimate] = useAnimate();
    const [rightDesignscope, rightDesignanimate] = useAnimate();
    const [rightPointerscope, rightPointeranimate] = useAnimate();
    const [Iconscope, Iconanimate] = useAnimate();

    useEffect(() => {
        leftDesignanimate([
            [leftDesignscope.current, { opacity: [1] }, { duration: 0.5 }],
            [leftDesignscope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointeranimate([
            [leftPointerscope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerscope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [leftPointerscope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
        ]);
        rightDesignanimate([
            [rightDesignscope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightDesignscope.current, { y: 0, x: 0 }, { duration: 0.5 }]
        ]);
        rightPointeranimate([
            [rightPointerscope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerscope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [rightPointerscope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, delay: 0.5, ease: "easeInOut" }],
        ]);
        Iconanimate([
            [Iconscope.current, { opacity: 1 }, { duration: 0.5, delay: 0.5, ease: "easeInOut" }],
            [Iconscope.current, { y: 0, x: 0 }, { duration: 0.5, delay: 0.5, ease: "backIn" }]
        ]);
    }, []);

    return (
        <section id="hero" className="py-24 h-screen overflow-x-clip" style={{ cursor: `url(${cursorYou.src}), auto` }}>
            <div className="md:container relative">
                <motion.div
                    ref={leftDesignscope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute hidden lg:block -left-36 top-16"
                >
                    <Image
                        src={HeroLeft}
                        alt="Design example 1"
                        height={300}
                        width={300}
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerscope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96"
                >
                    <Pointer name="Sidak" />
                </motion.div>
                <motion.div
                    ref={rightDesignscope}
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    drag
                    className="absolute hidden lg:block -right-40 -top-26"
                >
                    <Image
                        src={HeroRight}
                        alt="design 2"
                        draggable="false"
                        height={300}
                        width={300}
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerscope}
                    initial={{ opacity: 0, y: 100, x: 275 }}
                    className="absolute right-72 top-10"
                >
                    <Pointer name="Sidak" color="red" />
                </motion.div>
                <div className="py-24 flex justify-center flex-col align-middle mt-10 max-w-2xl mx-auto text-center">
                    <TextGenerateEffect className="text-4xl" words="Hi, I&apos;m Sidak." />
                    <div className="text-5xl mx-auto font-semibold text-blue-400 text-center mt-5">
                        <BubbleText text={H1words} />
                        <motion.div
                            ref={Iconscope}
                            initial={{ opacity: 0, x: 0, y: 50 }}
                            className="flex justify-center -ml-3 mt-5 gap-4"
                        >
                            <a href="https://github.com/sidakdhingra25" target="_blank">
                                <UseAnimations animation={github} size={30} speed={1} strokeColor="white" />
                            </a>
                            <a href="https://www.linkedin.com/in/sidak-dhingra-9a9b54249/" target="_blank">
                                <UseAnimations animation={linkedin} size={30} strokeColor="white" />
                            </a>
                            <a href="https://drive.google.com/file/d/1Bn3EbGNvXhnb9DTdlaII2uMgJJofCR_-/view?usp=sharing" target="_blank">
                                <UseAnimations animation={archive} size={25} strokeColor="white" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
