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
      <Image src="/hero.png" alt="hero" width={256} height={256} objectFit="cover" layout="responsive" className="h-full w-full rounded-full ring-4 ring-red-600"/>
    </motion.div>

    {/*TEXT & BUTTON CONTAINER */}
    <div className="h-auto lg:h-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 justify-center text-center lg:text-left">

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-6xl font-bold z-20">Abdullah</h1>
        <h1 className="text-4xl md:text-6xl font-bold z-20 text-red-600">Frontend Developer</h1>
      </div>
      <p className="md:text-xl text-left">I am an enthusiastic Bachelor of Computer-Science with a noticeable CGPA of 3.45 and a strong foundation in web development and a passion for exploring various fields within technology. Proficient in HTML, CSS, JavaScript, React.js and Next.js, with hands-on experience in building responsive and user-friendly web applications. Eager to apply problem-solving skills and creativity to develop innovative web solutions. Aspiring to expand expertise in full stack web engineering for future projects.</p>

      <div className="flex gap-4 justify-start">
        <Link href="/Portfolio" className="bg-red-600 hover:bg-black text-white rounded-lg p-2">Check out my work</Link>
        <Link href="/Contact" className="ring-1 ring-black hover:ring-2 text-black font-semibold rounded-lg p-2">Work with me</Link>
      </div>

    </div>

  </div>
  
  </motion.div>
  );
};

export default Homepage;
