"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { projects } from "@/components/Slides";
import Card from "@/components/Card";
import { useState } from "react";

const PortfolioPage = () => {

  const [openCard, setOpenCard] = useState(null);

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full overflow-x-hidden scrollbar scrollbar-track-transparent scrollbar-thumb-mytheme p-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">

        <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-6xl md:text-8xl text-center">My work<Arrow /></div>

        <div className="grid gap-5 justify-items-center items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.flat().map((project, index) => (
            <Card
              key={project.alt}
              image={project.src}
              alt={project.alt}
              title={project.title}
              cat={project.cat}
              desc={project.desc}
              link={project.link}
              isOpen={openCard === index}
              onToggle={() => setOpenCard(openCard === index ? null : index)}
            />
          ))}
        </div>

        <div className="w-full mt-10 flex flex-col items-center justify-center">
          <div class="w-fit p-2 flex flex-col items-start">
            <div className="flex gap-2">
              <svg class="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <p class="font-semibold">Work In Progress</p>
            </div>
            <p class="text-sm">Some features in my showcased projects are still under development and may not function as expected. I&apos;m actively working to improve them. Thank you for your understanding!</p>
          </div>
        </div>

        <div className="h-screen flex flex-col gap-5 items-center justify-center text-center">
          <h1 className="text-4xl">Want to start your projects?</h1>
          <Link href="/Contact" className="bg-mytheme hover:bg-black dark:hover:bg-gray-200 dark:hover:text-black text-white rounded-md p-2">Let&apos;s work</Link>
        </div>

      </div>

    </motion.div>
  )
}

export default PortfolioPage