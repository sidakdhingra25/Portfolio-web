"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import LogoImage from "../assets/images/favicon.ico"
import { MenuNavbar } from "@/components/MenuNavbar";
import MobileNav from "@/components/Button";


export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setShowNavbar(true);
                setIsScrollingUp(true);
            } else {
                setShowNavbar(false);
                setIsScrollingUp(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <section className={`py-4 fixed top-0 w-full transition-transform duration-300 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="container">
                <div className={`grid grid-cols-2 md:flex border border-white/15 rounded-full p-2 px-4 items-center ${isScrollingUp ? "bg-black/30 backdrop-blur-md" : ""}`}>
                    <div className="w-fit">
                        <Image src={LogoImage} 
                        alt="logo" 
                        height={100} 
                        width={100}
                        className="h-9 w-auto "/>
                    </div>
                    <div className="hidden h-auto w-full md:flex justify-end lg:justify-center">
                        <MenuNavbar/>
                    </div>
                    <div className="flex relative justify-end h-10 md:hidden">
                        <MobileNav/>
                    </div>
                </div>
            </div>
        </section>
    );
}
