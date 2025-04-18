import figma from "../assets/images/figma-logo.svg";
import react from "@/assets/images/React.png"
import github from "../assets/images/github-logo.svg";
import motion from "@/assets/images/Motion.png"
import IntegrationColumn from "./IntegrationColumn";
import tailwind from "@/assets/images/Tailwind.png"
import git from "@/assets/images/Git (1).png"
import typescript from "@/assets/images/typescript.png"
import nextjs from "@/assets/images/nextjs.png"
import mongodb from "@/assets/images/mongodb.png"
import expressjs from "@/assets/images/expressjs.png"
import nodejs from "@/assets/images/nodejs.png"
import python from "@/assets/images/python.jpg"



const integrations = [
    { name: "Figma", icon: figma, description: "Figma is a collaborative interface design tool." },
    { name: "Tailwind", icon: tailwind, description: "Tailwind CSS is a utility-first CSS framework used for rapidly building custom, responsive user interfaces." },
    { name: "Git", icon: git, description: "Tracking changes in software code, enabling developers to collaborate efficiently and manage project history." },
    { name: "React", icon: react, description: "React is a JavaScript library for building user interfaces." },
    { name: "Motion", icon: motion, description: "A modern animation library for JavaScript and React." },
    { name: "GitHub", icon: github, description: "GitHub is the leading platform for code collaboration." },
    { name: "Typescript", icon: typescript, description: "TypeScript is a syntactic superset of JavaScript which adds static typing." },
    { name: "Nextjs", icon: nextjs, description: "Next.js is a powerful, open-source React framework developed by Vercel." },
    { name: "MongoDB", icon: mongodb, description: "MongoDB is a document database used to build highly available and scalable internet applications." },
    { name: "ExpressJS", icon: expressjs, description: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js." },
    { name: "NodeJS", icon: nodejs, description: "Node.js is a cross-platform, open-source JavaScript runtime environment." },
    { name: "Python", icon: python, description: "Python is a versatile, high-level, general-purpose programming language known for its readability and ease of use." },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return ( 
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <h2 className="text-6xl font-medium mt-6">My <span className="text-lime-400">skills</span></h2>
                    </div>
                <div>
                <div className="h-[400px] lg:h-[700px] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
                    
                    <IntegrationColumn integrations={integrations}/>
                    <IntegrationColumn integrations={integrations.slice().reverse()} 
                    reverse
                    className=" hidden md:flex"/>
               </div>
               </div>
              </div>
            </div>
        </section>
    );
}
