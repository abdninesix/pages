'use client'

import Navbar from "./Navbar"
import { AnimatePresence, easeOut, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ThemeProvider } from "./ThemeContext"

const TransitionProvider = ({ children }) => {

  const pathName = usePathname()

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <div key={pathName} className="absolute top-0 z-[-2] h-screen w-screen bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200 duration-200">

          <motion.div animate={{ height: "0vh" }} exit={{ height: "140vh" }} transition={{ duration: 0.5, ease: easeOut }} className="h-screen w-screen fixed bg-mytheme rounded-b-[100px] z-40" />
          {/*<motion.div initial={{y:100, opacity:1, duration:2}} animate={{y:0, opacity:0}} exit={{opacity:0}} transition={{duration:0.5, ease:easeOut}} className="fixed m-auto top-0 bottom-0 right-0 left-0 text-stone-400 text-8xl cursor-default w-fit h-fit z-50">{pathName.substring(1)}</motion.div>*/}
          <motion.div initial={{ height: "140vh" }} animate={{ height: "0vh", transition: { delay: 0.5 } }} className="h-screen w-screen fixed bg-mytheme rounded-t-[100px] bottom-0 z-40" />

          <div><Navbar /></div>
          <div className="h-[calc(100vh-5rem)]">{children}</div>
        </div>
      </AnimatePresence>
    </ThemeProvider>

  )
}

export default TransitionProvider


