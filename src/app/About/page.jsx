"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Arrow from "@/components/Arrow";

const AboutPage = () => {

  const skillRef = useRef()
  const skillRefView = useInView(skillRef, {margin:"-80px"})

  const experienceRef = useRef()
  const experienceRefView = useInView(experienceRef, {margin:"-100px"})

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full overflow-scroll lg:flex text-black">

      {/*TEXT CONTAINER*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-20 flex flex-col gap-48 md:gap-56 lg:gap-36 xl:gap-64 lg:pr-0 lg:w-2/3 xl:1/2">
      {/*BIO*/}
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-4xl">BIOGRAPHY</h1>
            <p className="md:text-xl">I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. With years of experience, I have worked with a variety of technologies. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to projects.</p>
            <Arrow/>
          </div>
          
      {/*SKILLS*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 initial={{x:"-500px"}} animate={skillRefView ? {x:"0"} : {}} className="font-bold text-2xl">SKILLS</motion.h1>
            <motion.div initial={{x:"-500px"}} animate={skillRefView ? {x:"0"} : {}} transition={{delay:0.2}} className="flex flex-wrap gap-4">
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">HTML5</div>
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">CSS3</div>
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">Javascript</div>
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">React.js</div>
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">Next.js</div>
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">TailwindCSS</div>
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">Framer-motion</div>
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">Figma</div>
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">Node.js</div>
              <div className="p-2 rounded text-sm bg-gray-800 text-white ">Expess.js</div>
            </motion.div>
            <Arrow/>
          </div>

      {/*EXPERIENCE*/}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <motion.h1 initial={{x:"-500px"}} animate={experienceRefView ? {x:"0"} : {}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            <motion.div initial={{x:"-500px"}} animate={experienceRefView ? {x:"0"} : {}} transition={{delay:0.2}}>

        {/*LIST ITEM*/}       
              <div className="flex justify-between h-[320px] md:h-48">
                <div className="w-1/3 relative">
                  <div className="shadow-md shadow-gray-400 p-4 bg-white font-semibold rounded-md text-center w-fit">Fullstack Web</div>
                  <div className="-mx-2 p-3 text-[11px] md:text-sm">Skilled Web Developer with a talent for creating responsive and visually appealing websites. Proficient in HTML, CSS, and JavaScript, with a keen eye for design and user experience.</div>
                  <div className="text-sm font-semibold underline text-red-600">2022-Present</div>
                  {/*<div className="p-3 bg-white text-sm font-semibold rounded-md text-center w-fit">No company</div>*/}
                </div>

                <div>
                  <div className="w-1 h-full md:-left-4 bg-gray-600 rounded relative">
                    <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-600 bg-white"></div>
                  </div>
                </div>

                <div className="w-1/3 relative"></div>

              </div>

        {/*LIST ITEM 2*/}
              <div className="flex justify-between h-[320px] md:h-48">
                <div className="w-1/3 relative"></div>

                <div>
                  <div className="w-1 h-full md:-left-4 bg-gray-600 rounded relative">
                    <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-600 bg-white"></div>
                  </div>
                </div>

                <div className="w-1/3 relative">
                  <div className="shadow-md shadow-gray-400 p-4 bg-white font-semibold rounded-md text-center w-fit">Android Studio</div>
                  <div className="-mx-2 p-3 text-[11px] md:text-sm">Seasoned Android Studio Java developer with a knack for building user-friendly mobile applications. Expert in Java programming and Android SDK, focused on creating seamless, high-performance apps tailored to user needs.</div>
                  <div className="text-sm font-semibold underline text-red-600">2021-2022</div>
                </div>

              </div>

        {/*LIST ITEM 3*/}
              <div className="flex justify-between h-[320px] md:h-48">
                <div className="w-1/3 relative">
                  <div className="shadow-md shadow-gray-400 p-4 bg-white font-semibold rounded-md text-center w-fit">Visual Studio</div>
                  <div className="-mx-2 p-3 text-[11px] md:text-sm">Experienced Visual Studio C# developer skilled in crafting robust applications using the .NET framework. Adept at problem-solving, writing clean code, and continuously updating projects to keep up with technological advancements.</div>
                  <div className="text-sm font-semibold underline text-red-600">2020-2021</div>
                </div>

                <div>
                  <div className="w-1 h-full md:-left-4 bg-gray-600 rounded relative">
                    <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-600 bg-white"></div>
                  </div>
                </div>

                <div className="w-1/3 relative"></div>

              </div>
              

            </motion.div>

          </div>
        </div>
    
        {/*IMAGE CONTAINER*/}
        <motion.div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30" initial={{y:-200, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.5, delay:1, ease: "easeInOut" }}>
          <Image className="rounded-tl-[150px] rounded-br-[150px]" src="/about.png" alt="" height={600} width={600}/>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default AboutPage