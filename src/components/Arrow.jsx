"use client"
import {motion, useInView} from "framer-motion"
import { useRef } from "react"

const Arrow = () => {

  const arrowRef = useRef()
  const arrowRefView = useInView(arrowRef, {margin:"-200px"})

  return (
    <motion.div initial={{opacity:0}} animate={arrowRefView ? {opacity:1} : {}} transition={{delay:0.2}} ref={arrowRef}>
        <div className="self-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                className="animate-bounce dark:fill-white">
                <path d="M12 16l-6-6h12z" />
              </svg>
            </div>
    </motion.div>
  )
}

export default Arrow