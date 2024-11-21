import React from 'react'
import { motion } from 'framer-motion'

const AnimatedCover = () => {
  return (
    <>
        <div className="absolute bottom-[0px] h-56 w-56 z-16"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/nextjs.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[50px] right-16 h-40 w-40 z-15"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/react.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[50px] left-16 h-40 w-40 z-14"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/nodejs.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[180px] right-24 h-40 w-40 z-13"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/ts.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[180px] left-24 h-40 w-40 z-12"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/js.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[200px] h-40 w-40 z-11"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/html.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[320px] left-20 h-40 w-40 z-10"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/mongodb.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[320px] right-20 h-40 w-40 z-9"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/firebase.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[400px] left-36 h-40 w-40 z-8"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/tailwind.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[400px] right-36 h-40 w-40 z-7"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/css.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[350px] h-40 w-40 z-6"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/figma.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[330px] left-52 h-20 w-20 z-5"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/photoshop.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[330px] right-52 h-20 w-20 z-4"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/illustrator.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[550px] left-52 h-20 w-20 z-3"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/blender.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[550px] right-52 h-20 w-20 z-2"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/cad.png" alt="" height={256} width={256}/></div>
        <div className="absolute bottom-[500px] h-40 w-40 z-1"><Image className="h-fit w-fit p-2 rounded-md" src="/Techs/3dprint.png" alt="" height={256} width={256}/></div>
    </>
  )
}

export default AnimatedCover