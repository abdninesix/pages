"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (

    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="overflow-auto items-center text-black h-full flex flex-col gap-4 md:gap-10 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

    {/*IMAGE CONTAINER*/}
    <motion.div className="flex overflow-hidden w-44 h-44 md:w-56 md:h-56 lg:w-[500px] lg:h-[500px] p-2" initial={{y:-200, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.25, delay:2, ease: "easeInOut" }}>
      <Image src="/hero.png" alt="hero" width={256} height={256} objectFit="cover" layout="responsive" className="h-full w-full rounded-full"/>
    </motion.div>

    {/*TEXT & BUTTON CONTAINER */}
    <div className="h-auto lg:h-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 justify-center text-center lg:text-left">

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-6xl font-bold z-20">Meet <span className="text-red-600"> Abdullah</span></h1>
        <h1 className="text-2xl md:text-4xl font-bold z-20 text-black">A<span className=""> MERN Stack Web Developer</span></h1>
      </div>
      <p className="md:text-xl text-left">As a MERN stack developer, he's all about crafting awesome web apps using MongoDB, Express.js, React, and Node.js. With a CGPA of 3.45, he's shown he's got the brains and the talent. He's got a knack for making interfaces that users love and back-ends that run like a dream. With a solid JavaScript foundation and a flair for design, he's always up for tackling tricky challenges and boosting performance. Leveraging the MERN stack, he's all about creating cool, innovative solutions that keep businesses thriving and users happy.</p>

      <div className="flex gap-4 justify-start">
        <Link href="/Portfolio" className="bg-red-600 hover:bg-black text-white rounded-lg p-2 shadow-md shadow-gray-400">Check out my work</Link>
        <Link href="/Contact" className="ring-1 ring-black hover:ring-2 text-black font-semibold rounded-lg p-2">Work with me</Link>
      </div>

    </div>

  </div>
  
  </motion.div>
  );
};

export default Homepage;
