"use client"

import { motion } from "framer-motion";
import ImageSlider from "@/components/ImageSlider";

const PortfolioPage = () => {

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
     <div className="h-full overflow-auto flex flex-col items-center justify-center gap-4 lg:gap-20 lg:flex-row pb-4">
        <ImageSlider/>
        </div>
    </motion.div>
  )
}

export default PortfolioPage