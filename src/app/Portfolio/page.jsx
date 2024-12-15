"use client"

import { motion } from "framer-motion";
import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { project1, project2, project3 } from "@/components/Slides";

const PortfolioPage = () => {

  return (
    <motion.div className="h-full overflow-scroll overflow-x-hidden " initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>

      <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-6xl md:text-8xl text-center">My work<Arrow/></div>

      <div className="w-screen h-screen grid grid-flow-row bg-gray-200 dark:bg-slate-800 duration-200 items-center justify-center gap-4 lg:gap-20 lg:flex-row pb-4">
        <ImageSlider slides={project1}/>

        <div className="h-screen flex flex-col gap-16 items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <h1 className="text-4xl">Want to have your project done like this?</h1>
          <div className="relative">
            {/*<svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor" className="animate-spin-slow">
            <defs>
            <path
            id="circlePath"
            d="M 100, 100
             m -75, 0
             a 75,75 0 1,1 150,0
             a 75,75 0 1,1 -150,0"/>
            </defs>
            <text className="text-xl">
            <textPath href="#circlePath">
            ----Let`s create your project---- Let`s get to work
            </textPath>
            </text>
            </svg>
            <Link href="/Contact" className="w-28 h-28 *absolute top-0 left-0 right-0 bottom-0 m-auto bg-mytheme ring-mytheme hover:ring-2 text-white shadow-lg text-xl rounded-full flex items-center justify-center">Hire me</Link>*/}
            <Link href="/Contact" className="bg-mytheme hover:bg-black text-white rounded-md p-2">Let&apos;s work</Link>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default PortfolioPage