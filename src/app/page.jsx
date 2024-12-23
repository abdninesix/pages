"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (

    <motion.div className="h-full scrollbar-none" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="overflow-hidden items-center h-full flex flex-col gap-4 md:gap-10 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

    {/*IMAGE CONTAINER*/}
    <motion.div className="flex-none w-44 h-44 md:w-56 md:h-56 lg:w-[380px] lg:h-[380px] p-2" initial={{y:-50, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.25, delay:1.5, ease: "easeInOut" }}>
      <Image src="/about.png" alt="hero" width={500} height={500} className="h-full w-full rounded-full md:hover:rounded-tr-none md:hover:rounded-br-none duration-200"/>
    </motion.div>

    {/*TEXT & BUTTON CONTAINER */}
    <div className="h-auto lg:h-fit flex flex-col gap-5 lg:gap-10 justify-center text-center lg:text-left">

      <div className="flex flex-col gap-4 lg:gap-6">
        <h1 className="text-4xl md:text-6xl font-bold z-200">Meet <span className="text-mytheme">Abdullah</span></h1>
        <h1 className="text-2xl md:text-4xl font-bold z-20 hover:scale-105 duration-200 relative group">A&nbsp;
          <span className="p-1 rounded-lg bg-gray-200 dark:text-gray-800">NEXT.js</span>&nbsp;&&nbsp;
          <span className="p-1 rounded-lg bg-gray-200">
            <span className="text-green-700">M</span>
            <span className="text-gray-800">E</span>
            <span className="text-cyan-600">R</span>
            <span className="text-green-500">N</span>
          </span>
          <span>&nbsp;Stack Developer</span>
          {/*<Image src="/mern.png" alt="MERN" height={256} width={256} className="h-14 w-fit absolute -top-3 left-[680px] transform opacity-0 lg:group-hover:opacity-100 duration-300"/>*/}
        </h1>
        
        <p className="md:text-xl text-left">Hi there! I&apos;m a spirited and dedicated MERN stack developer with a CGPA of 3.45, here to craft vibrant web experiences. From dynamic databases with MongoDB to sleek front-end designs with React, and blazing-fast, SEO-friendly web applications powered by Next.js, I&apos;ve got all the tools to make your digital dreams a reality. Let&apos;s code something awesome together!</p>
      </div>
      
      <div className="flex flex-wrap gap-3 lg:gap-4 justify-start">
        <Link href="/About" className="bg-mytheme hover:bg-black text-white rounded-md p-2">Find out more</Link>
        <Link href="/Portfolio" className="bg-mytheme hover:bg-black text-white rounded-md p-2">Check out my work</Link>
        <Link href="/Contact" className="ring-1 ring-black dark:ring-white hover:ring-2 font-semibold rounded-md p-2">Work with me</Link>
      </div>

    </div>

  </div>
  
  </motion.div>
  );
};

export default Homepage;
