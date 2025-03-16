import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Integrations from "@/sections/Integrations";
import ContactForm from "@/sections/ContactMe";
import CallToAction from "@/sections/CallToAction";

export default function Home() {
    return <>
        <Navbar/>
        <section id="hero">
            <Hero/>
        </section>
        <section id="introduction">
            <Introduction/>
        </section>
        <section id="projects">
            <Projects/>
        </section>
        <section id="experience">
            <Experience />
        </section>
        <section id="integrations">
            <Integrations/>
        </section>
        <section id="contact-me">
            <ContactForm/>
        </section>
        <CallToAction/>
    </>;
}
