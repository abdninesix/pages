"use client"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import items from "@/components/Items";
import Arrow from "@/components/Arrow";



const PortfolioPage = () => {

  const ref = useRef();
  const {scrollYProgress} = useScroll({target:ref});
  const x = useTransform(scrollYProgress, [0,1], ["0%", "-80%"]);

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-[600vh] relative">
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center  text-6xl md:text-8xl text-center">My work<Arrow/></div>
      
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{x}} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-200 to-green-400"/>
          {items.map((item) => (
            <div className={`h-screen w-screen flex items-center justify-center p-8 bg-gradient-to-r ${item.color}`} key={item.id}>
              <div className="flex flex-col gap-8 p-10 h-full rounded-2xl text-white">
                <h1 className="text-4xl xl:text-6xl h-24">{item.title}</h1>
                <div className="relative w-[350px] h-[175px] md:w-[600px] md:h-[300px] lg:w-[700px] lg:h-[350px] xl:w-[700px] xl:h-[350px]"><Image className="shadow-md shadow-black rounded-2xl" src={item.img} alt="" fill/></div>
                <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-xl">{item.desc}</p>
                {/*<div className="flex justify-end"><Link href={item.link} className="bg-white hover:bg-gray-200 text-gray-600 text-sm md:text-lg lg:text-xl font-semibold p-2 md:p-3 xl:p-4 rounded-md">See Demo</Link></div>*/}
              </div>
            </div>))}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-slate-200"/>
          </motion.div>
        </div>

      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gray-300 dark:bg-slate-800">
          <h1 className="text-2xl md:text-4xl lg:text-6xl">Want to have your project done like this?</h1>
          <div className="relative">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor" className="animate-spin-slow">
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
            <Link href="/Contact" className="w-28 h-28 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-mytheme ring-mytheme hover:ring-2 text-white shadow-lg text-xl rounded-full flex items-center justify-center">Hire me</Link>
          </div>
      </div>

    </motion.div>
  )
}

export default PortfolioPage