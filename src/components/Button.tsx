"use client"

import { useState } from "react"
import { MotionConfig, motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 8px)",
    },
  },
}

const AnimatedHamburgerButton = ({ active, setActive }: { active: boolean; setActive: (value: boolean) => void }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive(!active)}
        className="relative h-10 w-10 flex items-center justify-center rounded-full bg-white/0 transition-colors hover:bg-white/20 z-50"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-8 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-8 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-4 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 8px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  )
}

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: {
      x: 20,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  }

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", name: "Home" },
    { id: "introduction", name: "About"},
    { id: "projects", name: "Projects" },
    { id: "experience", name: "Experience" },
    { id: "contact-me", name: "Contact Me"}
  ]

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <div className=" top-4 right-4 z-50">
        <AnimatedHamburgerButton active={isOpen} setActive={setIsOpen} />
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 justify-end h-screen w-[500px] bg-neutral-950 z-40 flex flex-col p-8 pt-20"
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScroll(item.id)}
                  className="border-b border-gray pb-2"
                >
                    <span
                    className="text-white text-xl font-medium cursor-pointer"
                    onClick={() => {
                      handleScroll(item.id);
                      setIsOpen(false);
                    }}
                    >
                    {item.name}
                    </span>
                </motion.div>
              ))}
            </nav>

            <motion.div variants={itemVariants} className="mt-auto">
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav

