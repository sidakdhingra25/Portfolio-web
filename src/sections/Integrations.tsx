import figma from "../assets/images/figma-logo.svg";
import notion from "../assets/images/notion-logo.svg";
import slack from "../assets/images/slack-logo.svg"; // Updated path
import relume from "../assets/images/relume-logo.svg";
import framer from "../assets/images/framer-logo.svg";
import github from "../assets/images/github-logo.svg";
import Image from "next/image";
import IntegrationColumn from "./IntegrationColumn";

const integrations = [
    { name: "Figma", icon: figma, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notion, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slack, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relume, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framer, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: github, description: "GitHub is the leading platform for code collaboration." },
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
                <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
                    
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
