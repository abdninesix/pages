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
    <div className="h-auto lg:h-full flex flex-col gap-5 lg:gap-10 justify-center text-center lg:text-left">

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
        <p className="md:text-xl text-left">As a MERN stack developer, he&apos;s all about crafting awesome web apps using MongoDB, Express.js, React, and Node.js. With a CGPA of 3.45, he&apos;s shown he&apos;s got the brains and the talent. He&apos;s got a knack for making interfaces that users love and back-ends that run like a dream. With a solid JavaScript foundation and a flair for design, he&apos;s always up for tackling tricky challenges and boosting performance. Leveraging the MERN stack, he&apos;s all about creating cool, innovative solutions that keep businesses thriving and users happy.</p>
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
