"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import LaptopContainer from "@/components/laptop/LaptopContainer";

const Homepage = () => {

  const handleRightClick = (event) => {
    event.preventDefault();
  };

  return (

    <motion.div className="flex flex-col justify-center gap-8 lg:gap-16 h-full overflow-hidden" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>

      <motion.span className=" flex justify-center text-4xl md:text-5xl" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25, delay: 0.75, ease: "easeInOut" }}>بسم الله الرحمن الرحيم</motion.span>

      <div className="items-center flex flex-col gap-4 md:gap-10 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">

        {/*IMAGE CONTAINER*/}
        {/* <motion.div onContextMenu={handleRightClick} className="group relative flex-none overflow-hidden size-52 lg:size-80 border-2 border-mytheme rounded-t-full select-none" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}>
          <div className="group-active:opacity-0 absolute top-[35%] ml-[31.5%] flex gap-1 lg:gap-3 w-fit -rotate-[12deg] z-10 duration-500">
            <div className="h-3 w-5 lg:h-5 lg:w-7 rounded-b-full bg-mytheme" />
            <div className="h-3 w-5 lg:h-5 lg:w-7 rounded-b-full bg-mytheme" />
          </div>
          <Image src="/p2.png" alt="hero" width={500} height={500} priority className="group brightness-0 group-active:brightness-150 duration-500" />
        </motion.div> */}

        <motion.div onContextMenu={handleRightClick} className="group relative w-full h-56 md:h-full lg:w-72 select-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4, delay: 3, ease: "easeInOut" }}>
          <LaptopContainer/>
        </motion.div>

        {/*TEXT & BUTTON CONTAINER */}
        <div className="h-auto lg:h-fit flex flex-col gap-5 lg:gap-6 justify-center text-center lg:text-left">

          <motion.div className="flex flex-col gap-4 lg:gap-6" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25, delay: 1, ease: "easeInOut" }}>
            <h1 className="text-4xl md:text-6xl font-bold">Meet <span className="text-mytheme">Abdullah</span></h1>
            <h1 className="text-2xl md:text-4xl font-bold flex flex-wrap justify-center lg:justify-start duration-200">
              <span className="p-1 rounded-lg bg-gray-200">
                <span className="text-green-700">M</span>
                <span className="text-gray-800">E</span>
                <span className="text-cyan-600">R</span>
                <span className="text-green-500">N</span>
                <span className="text-gray-800">&nbsp;Stack</span>
              </span>&nbsp;+&nbsp;
              <span className="p-1 rounded-lg bg-gray-200 dark:text-gray-800">NEXT.js</span>&nbsp;
              {/* <span className="p-1 rounded-lg bg-gray-200 text-red-500">Laravel</span>&nbsp; */}
              <span className="p-1">Developer</span>
              {/*<Image src="/mern.png" alt="MERN" height={256} width={256} className="h-14 w-fit absolute -top-3 left-[680px] transform opacity-0 lg:group-hover:opacity-100 duration-300"/>*/}
            </h1>

            <p className="text-justify md:text-xl">As a seasoned developer, I specialize in creating sophisticated, high-performance web applications using React.js/Node.js, Next.js and Laravel. I focus on delivering seamless, intuitive experiences that captivate users and stand the test of time. Let&apos;s build something remarkable together.</p>
          </motion.div>

          <motion.div className="flex justify-center lg:justify-start gap-3 lg:gap-4" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25, delay: 1.5, ease: "easeInOut" }}>
            <Link href="/About" className="bg-mytheme hover:bg-black text-white rounded-md p-2">About me</Link>
            <Link href="/Portfolio" className="bg-mytheme hover:bg-black text-white rounded-md p-2">My work</Link>
            <Link href="/Contact" className="ring-1 ring-black dark:ring-white hover:ring-2 font-semibold rounded-md p-2">Work with me</Link>
          </motion.div>
        </div>

      </div>

    </motion.div>
  );
};

export default Homepage;
