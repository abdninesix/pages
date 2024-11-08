"use client"

import { motion } from "framer-motion";
import React from 'react'

const CoursesPage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full text-4xl flex items-center justify-center">Coming soon</div>
    </motion.div>
  )
}

export default CoursesPage