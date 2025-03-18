"use client"
import Image from "next/image"
import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Link as Vercel } from "lucide-react"
import dynamic from 'next/dynamic';
const UseAnimations = dynamic(() => import("react-useanimations"), { ssr: false });
import { useOutsideClick } from "@/hooks/UseOutsideClicks"
import github from 'react-useanimations/lib/github'
import Walled from "@/assets/images/Walli.png";
import InsiChat from "@/assets/images/InsiChat.png";
import SpotiFind from "@/assets/images/SpotiFind.png";

export default function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src || "/placeholder.svg"}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      href={active.githubLink}
                      target="_blank"
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black"
                      rel="noreferrer"
                    >
                      <UseAnimations animation={github} size={25} />
                    </motion.a>
                    <motion.a
                      href={active.vercelLink}
                      target="_blank"
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black"
                      rel="noreferrer"
                    >
                      <Vercel size={20} />
                    </motion.a>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-3xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src || "/placeholder.svg"}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="text-center md:text-left">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              Click me
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

const cards = [
    {
      description: "Chat Application",
      title: "Insichat",
      src: InsiChat,
      githubLink: "https://github.com/sidakdhingra25/Insi-chat",
      vercelLink: "https://insi-chat.vercel.app/",
      content: () => {
        return (
          <p>
           ⭐Built a full-stack real-time chat application using React for the frontend and Node.js with Express for the backend, integrating WebSocket communication via Socket.io to enable instant messaging between users.<br/><br/>

           ⭐Implemented robust authentication using JWT tokens and bcrypt for secure user login, integrated Cloudinary for seamless image uploads in chat, and designed a fully responsive UI with Tailwind CSS and DaisyUI for an optimal user experience across devices.
          </p>
        )
      },
    },  
  {
    description: "Walled wallpaper for your Todos",
    title: "Walled",
    src: Walled,
    githubLink: "https://github.com/sidakdhingra25/Walled",
    vercelLink: "https://walled-sand.vercel.app/",
    content: () => {
      return (
        <p>
👉Todo Management: Implemented a comprehensive todo management system using React Context API, allowing users to add, update, and delete tasks efficiently.<br /><br />
👉Dynamic Wallpaper Generation: Developed features to transform todo lists into personalized wallpapers   for both desktop and mobile screens, utilizing libraries like html2canvas for image export.
        </p>
      )
    },
  },
  {
    description: "Spotify playlist generator",
    title: "SpotiFind",
    src: SpotiFind,
    githubLink: "https://github.com/sidakdhingra25/Spotify-Playlist",
    vercelLink: "https://spotifindd.vercel.app/",
    content: () => {
      return (
        <p>
          ⭐ Developed a Personalized Playlist Feature: Implemented a feature that allows users to input
             their favorite songs and artists, leveraging AI to generate personalized playlists tailored to their unique musical preferences.
             <br /><br />
          
          ⭐ User Authentication Integration: Integrated Spotify's authentication API to enable secure user login and access to personalized data, ensuring a seamless user experience.
             <br /><br />
        </p>
      )
    },
  },

]

function customDynamic(arg0: () => Promise<typeof import("react-useanimations")>, arg1: { ssr: boolean }) {
    throw new Error("Function not implemented.")
}

