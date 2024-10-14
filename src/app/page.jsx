"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (

    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="overflow-auto h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

    {/*IMAGE CONTAINER */}
    <motion.div className="h-1/2 lg:h-full lg:w-1/2 relative" animate={{ y: [0, -20, 0] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}>
      <Image src="/hero.png" alt="hero" fill className="object-contain"/>
    </motion.div>

    {/*TEXT & BUTTON CONTAINER */}
    <div className="h-[300px] lg:h-full lg:w-1/2 flex flex-col gap-5 justify-center text-center lg:text-left">

      <div className="flex flex-col gap-4">
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
