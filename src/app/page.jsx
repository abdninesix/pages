"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (

    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="overflow-auto items-center h-full flex flex-col gap-4 md:gap-10 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

    {/*IMAGE CONTAINER*/}
    <motion.div className="flex-none overflow-hidden w-44 h-44 md:w-56 md:h-56 lg:w-[400px] lg:h-[400px] p-2" initial={{y:-50, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.25, delay:1.5, ease: "easeInOut" }}>
      <Image src="/hero.png" alt="hero" width={500} height={500} className="h-full w-full rounded-full"/>
    </motion.div>

    {/*TEXT & BUTTON CONTAINER */}
    <div className="h-auto lg:h-fit flex flex-col gap-5 lg:gap-10 justify-center text-center lg:text-left">

      <div className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-bold z-200">Meet <span className="text-mytheme">Abdullah</span></h1>
        <h1 className="text-2xl md:text-4xl font-bold z-20 hover:scale-105 duration-300">A&nbsp;
          <span className="p-1 rounded-lg bg-gray-200">
            <span className="text-green-700">M</span>
            <span className="text-gray-800">E</span>
            <span className="text-cyan-600">R</span>
            <span className="text-green-500">N</span>
          </span>
          <span>&nbsp;Stack Web Developer</span>
        </h1>
        <p className="md:text-xl text-left">Hi there! I&apos;m a spirited and dedicated MERN stack developer with a CGPA of 3.45, here to craft vibrant web experiences. From dynamic databases with MongoDB to sleek front-end designs with React, I&apos;ve got all the tools to make your digital dreams a reality. Let&apos;s code something awesome together! 🚀💻</p>
      </div>
      
      <div className="flex gap-4 justify-start">
        <Link href="/Portfolio" className="bg-mytheme hover:bg-black duration-200 text-white rounded-lg p-2">Check out my work</Link>
        <Link href="/Contact" className="ring-1 ring-black dark:ring-white hover:ring-2 font-semibold rounded-lg p-2">Work with me</Link>
      </div>

    </div>

  </div>
  
  </motion.div>
  );
};

export default Homepage;
