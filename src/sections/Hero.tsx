"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import BubbleText from "@/components/ui/BubbleText";
import designexample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";

 
const H1words = `I'm a Full-Stack Developer
`;
const Pwords = `I build web applications with React, Next.js, and TailwindCSS. I also have experience with Node.js, Express, and MongoDB. I'm currently learning TypeScript and GraphQL.`;
export default function Hero() {
    return (
        <section id="hero" className="py-24 h-screen overflow-x-clip">
            <div className="container relative">
                <div className="absolute hidden lg:block -left-32 top-16">
                    <Image 
                    src={designexample1Image}
                    alt="Design exapmple 1"/>
                </div>
                <div className="absolute hidden lg:block  -right-72 -top-26">
                    <Image
                    src={designExample2Image}
                    alt="design 2"/>                
                    </div>
            <div className="py-24 align-middle text-center">
            <TextGenerateEffect className="text-4xl" words="Hi, I&apos;m Sidak." />
            <div className="text-5xl mx-auto font-semibold text-lime-600 text-center mt-4">
                <BubbleText text={H1words} />
            </div>
            </div>
            </div>
        </section>
    );
}
