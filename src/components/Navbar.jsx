"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import NavLink from "./NavLink";
import {motion} from "framer-motion"

const links = [
  {url: "/", title:"Home" },
  {url: "/About", title:"About" },
  {url: "/Portfolio", title:"Portfolio" },
  {url: "/Contact", title:"Contact" },
];

const Navbar = () => {

const [open, setOpen] = useState(false)

const topVariants = {
  closed:{rotate:0}, opened:{x:10, rotate:45, backgroundColor:"rgb(255,255,255)"}
}
const centerVariants = {
  closed:{opacity:1}, opened:{opacity:0}
}
const bottomVariants = {
  closed:{rotate:0}, opened:{x:10, rotate:-45, backgroundColor:"rgb(255,255,255)"}
}
const listVariants = {
  closed:{x:50, y:-50}, opened:{x:0, y:0, transition:{staggerChildren:0.25, when:"beforeChildren"}}
}
const itemVariants = {
  closed:{x:50, y:-50, opacity:0}, opened:{x:0, y:0, opacity:1}
}

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">

      {/*MENU*/}
      <div className="hidden md:flex gap-5 w-1/3">
      {links.map(link=>(
            <NavLink link = {link} key={link.title}/>
          ))}
      </div>

      {/*LOGO*/}
        <div className="lg:flex lg:w-1/3 md:justify-start relative z-30">
            <Link href="/" className="text-sm bg-slate-700 rounded-full p-1 font-semibold flex items-left justify-center ring-slate-400 hover:ring-4">
                <span className="text-white mr-1">A.</span>
                <span className="rounded-full bg-white text-black px-1">Dev</span>
            </Link>
        </div>

      {/*Social links*/} 
        <div className="flex flex-row gap-2 justify-center md:justify-end w-fit">
          <Link className="ring-slate-700 hover:bg-white p-1 rounded-lg" href="https://github.com/abdninesix">
            <Image src="/github.png" alt="" width={32} height={32}/>
          </Link>
          <Link className="ring-slate-700 hover:bg-white p-1 rounded-lg" href="https://www.freelancer.com/u/abdninesix">
            <Image src="/freelancer.png" alt="" width={32} height={32}/>
          </Link>
          <Link className="ring-slate-700 hover:bg-white p-1 rounded-lg" href="https://www.behance.net/abdninesix">
            <Image src="/behance.png" alt="" width={32} height={32}/>
          </Link>
        </div>

      {/*MENU*/}
        <div className="md:hidden">
      {/*MENU BUTTON*/}
          <button className="w-10 h-8 flex flex-col justify-between z-20 relative" onClick={() =>setOpen((prev) => !prev)}>
            <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
            <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
            <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          </button>
        </div>
      {/*MENU ITEMS*/}
        {open && (
        <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-slate-900 text-stone-300 flex flex-col items-center justify-center gap-10 text-4xl z-10">
          {links.map(link=>(
            <motion.div variants={itemVariants} key={link.title}>
              <Link href={link.url} >{link.title}</Link>
            </motion.div>            
          ))}
        </motion.div>
        )}

    </div>
  )
}

export default Navbar