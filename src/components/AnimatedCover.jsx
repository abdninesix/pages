import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const iconVariants = (duration)=> ({
    initial: {x: -500, scale: 1}, animate: {x:[500, -500], transition: {duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
})

const AnimatedCover = () => {
  return (
    <>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[0px] h-28 w-28 z-16" initial="initial" animate="animate" variants={iconVariants(3)}>
            <Image className="h-fit w-fit p-3" src="/Techs/nextjs.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[25px] h-28 w-28 z-15" initial="initial" animate="animate" variants={iconVariants(3.2)}>
            <Image className="h-fit w-fit p-3" src="/Techs/react.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[50px] h-28 w-28 z-14" initial="initial" animate="animate" variants={iconVariants(3.4)}>
            <Image className="h-fit w-fit p-3" src="/Techs/nodejs.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[75px] h-28 w-28 z-13" initial="initial" animate="animate" variants={iconVariants(3.6)}>
            <Image className="h-fit w-fit p-3" src="/Techs/ts.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[100px] h-28 w-28 z-12" initial="initial" animate="animate" variants={iconVariants(3.8)}>
            <Image className="h-fit w-fit p-3" src="/Techs/js.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[125px] h-28 w-28 z-11" initial="initial" animate="animate" variants={iconVariants(4)}>
            <Image className="h-fit w-fit p-3" src="/Techs/html.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[150px] h-28 w-28 z-10" initial="initial" animate="animate" variants={iconVariants(4.2)}>
            <Image className="h-fit w-fit p-3" src="/Techs/mongodb.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[175px] h-28 w-28 z-9" initial="initial" animate="animate" variants={iconVariants(2.5)}>
            <Image className="h-fit w-fit p-3" src="/Techs/firebase.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[200px] h-28 w-28 z-8" initial="initial" animate="animate" variants={iconVariants(2.8)}>
            <Image className="h-fit w-fit p-3" src="/Techs/tailwind.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[225px] h-28 w-28 z-7" initial="initial" animate="animate" variants={iconVariants(3.1)}>
            <Image className="h-fit w-fit p-3" src="/Techs/css.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[250px] h-28 w-28 z-6" initial="initial" animate="animate" variants={iconVariants(3.4)}>
            <Image className="h-fit w-fit p-3" src="/Techs/figma.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[275px] h-28 w-28 z-5" initial="initial" animate="animate" variants={iconVariants(3.7)}>
            <Image className="h-fit w-fit p-3" src="/Techs/photoshop.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[300px] h-28 w-28 z-4" initial="initial" animate="animate" variants={iconVariants(4)}>
            <Image className="h-fit w-fit p-3" src="/Techs/illustrator.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[325px] h-28 w-28 z-3" initial="initial" animate="animate" variants={iconVariants(4.3)}>
            <Image className="h-fit w-fit p-3" src="/Techs/blender.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[350px] h-28 w-28 z-2" initial="initial" animate="animate" variants={iconVariants(4.6)}>
            <Image className="h-fit w-fit p-3" src="/Techs/cad.png" alt="" height={256} width={256}/>
        </motion.div>
        <motion.div className="absolute backdrop-blur-2xl rounded-full bottom-[375px] h-28 w-28 z-1" initial="initial" animate="animate" variants={iconVariants(4.9)}>
            <Image className="h-fit w-fit p-3" src="/Techs/3dprint.png" alt="" height={256} width={256}/>
        </motion.div>
    </>
  )
}

export default AnimatedCover