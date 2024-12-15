"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import NavLink from "./NavLink";
import {motion} from "framer-motion"
import ThemeButton from "./ThemeButton";
import Socials from "./Socials";
import { Alex_Brush, Luxurious_Script, Miss_Fajardose } from "next/font/google";

const myfont2 = Alex_Brush({ weight: '400', subsets: ['latin'], display: 'swap', });

const links = [
  {url: "/", title:"Home" },
  {url: "/About", title:"About" },
  {url: "/Portfolio", title:"Projects" },
  //{url: "/Courses", title:"Courses" },
  {url: "/Contact", title:"Contact" },
];

const Navbar = () => {

const [open, setOpen] = useState(false)

const topVariants = {
  closed:{rotate:0}, opened:{x:10, rotate:45}
}
const centerVariants = {
  closed:{opacity:1}, opened:{opacity:0}
}
const bottomVariants = {
  closed:{rotate:0}, opened:{x:10, rotate:-45}
}
const listVariants = {
  closed:{x:50, y:-50}, opened:{x:0, y:0, transition:{staggerChildren:0.20, when:"beforeChildren"}}
}
const itemVariants = {
  closed:{x:50, y:-50, opacity:0}, opened:{x:0, y:0, opacity:1}
}

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      
      {/*LOGO*/}
        <div className={`${myfont2.className} lg:w-fit md:hidden lg:flex relative z-30`}>
            <Link href="/" className="text-4xl bg-transparent gap-1 flex items-center justify-center">
                <span>A;</span>
                {/*<span className="rounded-lg bg-red-600 text-white px-2">Dev</span>*/}
            </Link>
        </div>

       {/*MENU*/}
       <div className="hidden md:flex gap-5 w-fit"><ThemeButton/>
      {links.map(link=>(
            <NavLink link={link} key={link.title}/>
          ))}
      </div>

      {/*Social links*/} 
        <div className="hidden md:flex">
          <Socials/>
        </div>
      
      <div className="flex z-30 md:hidden"><ThemeButton/></div>

      {/*MENU*/}
        <div className="md:hidden">
      {/*MENU BUTTON*/}
          <button className="w-10 h-8 flex flex-col justify-between z-20 relative" onClick={() =>setOpen((prev) => !prev)}>
            <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black dark:bg-white rounded origin-left"></motion.div>
            <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black dark:bg-white rounded"></motion.div>
            <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black dark:bg-white rounded origin-left"></motion.div>
          </button>
        </div>
        
      {/*MENU ITEMS*/}
        {open && (
        <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute overflow-hidden rounded-lg top-0 right-0 w-screen h-screen bg-gray-400 dark:bg-slate-950 flex flex-col items-center justify-center gap-10 text-4xl font-medium z-10">
          {links.map(link=>(
            <motion.div variants={itemVariants} key={link.title}>
              <Link className="p-2 rounded-xl hover:font-bold" href={link.url} >{link.title}</Link>
            </motion.div>            
          ))} <div className="absolute bottom-20"><Socials/></div>
        </motion.div>
        )}

    </div>
  )
}

export default Navbar