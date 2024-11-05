"use client"
import Navbar from "./Navbar"
import {AnimatePresence, easeOut} from "framer-motion"
import {motion} from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { initializeTheme, setTheme } from "./Theme"
import ThemeHandler from "./ThemeHandler"

const TransitionProvider = ({children}) => {

    const pathName = usePathname()

    const [theme, setLocalTheme] = useState('light')

    useEffect(() => {
      if (typeof window !== 'undefined') {
        initializeTheme();
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setLocalTheme(initialTheme); }
    }, []);
    
    useEffect(() => { setTheme(theme); }, [theme]);

  return (
    
    <AnimatePresence mode="wait">
        
        <div key={pathName} className={`absolute top-0 z-[-2] h-screen w-screen ${theme === 'dark' ? 'bg-gradient-radial from-gray-900 to-gray-600' : 'bg-gradient-radial from-gray-50 to-gray-300'}`}>
<ThemeHandler/>
          <motion.div animate={{height:"0vh"}} exit={{height:"140vh"}} transition={{duration:0.5, ease:easeOut}} className="h-screen w-screen fixed bg-gray-800 rounded-b-[100px] z-40"/>
          {/*<motion.div initial={{y:100, opacity:1, duration:2}} animate={{y:0, opacity:0}} exit={{opacity:0}} transition={{duration:0.5, ease:easeOut}} className="fixed m-auto top-0 bottom-0 right-0 left-0 text-stone-400 text-8xl cursor-default w-fit h-fit z-50">{pathName.substring(1)}</motion.div>*/}
          <motion.div initial={{height:"140vh"}} animate={{height:"0vh", transition:{delay:0.5}}} className="h-screen w-screen fixed bg-gray-800 rounded-t-[100px] bottom-0 z-40"/>

            <div className="h-24"><Navbar/></div>
            <div className="h-[calc(100vh-6rem)]">{children}</div>          
        </div>
    </AnimatePresence>
  )
}

export default TransitionProvider


