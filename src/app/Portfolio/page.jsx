"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { projects } from "@/components/Slides";
import Card from "@/components/Card";

const PortfolioPage = () => {

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full overflow-x-hidden scrollbar scrollbar-track-transparent scrollbar-thumb-mytheme p-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">

        <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-6xl md:text-8xl text-center">My work<Arrow /></div>

        <div className="flex flex-wrap gap-5">
          {projects.flat().map((project, index) => (
            <div key={index}>
              <Card
                image={project.src}
                alt={project.alt}
                title={project.title}
                cat={project.cat}
                desc={project.desc}
                link={project.link}
              />
            </div>
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
          <Link href="/Contact" className="bg-mytheme hover:bg-black text-white rounded-md p-2">Let&apos;s work</Link>
        </div>

      </div>

    </motion.div>
  )
}

export default PortfolioPage