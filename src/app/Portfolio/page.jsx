"use client"

import { motion } from "framer-motion";
import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { project1, project2, project3 } from "@/components/Slides";

const PortfolioPage = () => {

  return (
    <motion.div className="h-full overflow-x-hidden  scrollbar scrollbar-track-transparent scrollbar-thumb-mytheme " initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>

      <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-5 items-center justify-center text-2xl md:text-6xl text-center">
        <p>Deployed project demos coming soon.</p>
        <p>Check GitHub for projects.</p>
        <Arrow />
      </div>

    </motion.div>
  )
}

export default PortfolioPage