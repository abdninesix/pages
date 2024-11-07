import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

const Socials = () => {

  const profiles = [
    { href: "https://www.behance.net/abdninesix", src: "/behance.svg", alt: "Behance" },
    { href: "https://github.com/abdninesix", src: "/github.svg", alt: "GitHub" },
    { href: "https://www.freelancer.com/u/abdninesix", src: "/freelancer.svg", alt: "Freelancer" },
    { href: "https://www.upwork.com/freelancers/~0194244346098915a5", src: "/upwork.svg", alt: "Upwork" },
    { href: "", src: "/linkedin.svg", alt: "LinkedIn" } ];

  return (
    <motion.div className="flex flex-row gap-2 justify-center md:justify-end w-fit rounded-lg animate-bounce md:animate-none" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, delay:1.5}}>
          {profiles.map((profile, index) => (
            <Link key={index} className="h-8 w-8 p-1 rounded-md dark:bg-gray-300" href={profile.href}>
              <Image src={profile.src} alt={profile.alt} width={32} height={32}/>
            </Link> ))}
    </motion.div>
  )
}

export default Socials