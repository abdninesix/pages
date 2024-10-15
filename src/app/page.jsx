"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (

    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="overflow-auto items-center h-full flex flex-col gap-4 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

    {/*IMAGE CONTAINER*/}
    <motion.div className="flex h-[200px] w-[200px] md:h-[600px] md:w-1/2 lg:mt-10" initial={{y:-200, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.5, delay:1, ease: "easeInOut" }}>
      <Image src="/hero.png" alt="hero" fill objectFit="cover" className="rounded-full"/>
    </motion.div>

    {/*TEXT & BUTTON CONTAINER */}
    <div className="h-auto lg:h-full lg:w-1/2 flex flex-col gap-5 justify-center text-center lg:text-left">

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-6xl font-bold z-20">Hi there!</h1>
        <h1 className="text-4xl md:text-6xl font-bold z-20 text-slate-700">I`m Abdullah</h1>
      </div>
      <p className="md:text-xl text-justify">I am an enthusiastic Bachelor of Computer-Science with a noticeable CGPA of 3.45 and a strong foundation in web development and a passion for exploring various fields within technology. Proficient in HTML, CSS, JavaScript, React.js and Next.js, with hands-on experience in building responsive and user-friendly web applications. Eager to apply problem-solving skills and creativity to develop innovative web solutions. Aspiring to expand expertise in full stack web engineering for future projects.</p>

      <div className="flex gap-4 justify-start">
        <Link href="/Portfolio" className="bg-black hover:bg-gray-800 text-white rounded-lg p-2">Check out my work</Link>
        <Link href="/Contact" className="ring-1 ring-black hover:ring-2 text-black rounded-lg p-2">Work with me</Link>
      </div>

    </div>

  </div>
  
  </motion.div>
  );
};

export default Homepage;
