"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { projects } from "@/components/Slides";
import Card from "@/components/Card";

const PortfolioPage = () => {

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full overflow-x-hidden scrollbar scrollbar-track-transparent scrollbar-thumb-mytheme p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-6xl md:text-8xl text-center">My work<Arrow /></div>

        <div>
          <div className="flex flex-wrap gap-5">
            {projects.flat().map((project, index) => (
              <div key={index}>
              <Card
                image={project.src}
                alt={project.alt}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
              </div>
            ))}
            </div>

          <div className="h-screen flex flex-col gap-16 items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <h1 className="text-4xl">Want to have your project done like this?</h1>
            <Link href="/Contact" className="bg-mytheme hover:bg-black text-white rounded-md p-2">Let&apos;s work</Link>
          </div>
        </div>

      </div>

    </motion.div>
  )
}

export default PortfolioPage