"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Arrow from "@/components/Arrow";

const AboutPage = () => {

  const skillRef = useRef()
  const skillRefView = useInView(skillRef, {margin:"-80px"})
  const skills = [ "HTML5", "CSS3", "Javascript", "Typescript", "React.js", "Next.js", "TailwindCSS", "Framer-motion", "Figma", "Node.js", "Express.js", "MongoDB", "Prisma" ];

  const experienceRef = useRef()
  const experienceRefView = useInView(experienceRef, {margin:"-100px"})

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full overflow-scroll lg:flex">

      {/*TEXT CONTAINER*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-20 flex flex-col gap-48 md:gap-56 lg:gap-36 xl:gap-64 lg:pr-0 lg:w-2/3 xl:1/2">
      {/*BIO*/}
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-4xl">BIOGRAPHY</h1>
            <p className="md:text-xl">I&apos;m a coding whiz who blends tech and creativity. Skilled in Visual Studio and Android Studio, I&apos;ve crafted slick apps and web front-ends. But I&apos;m not just about code, I&apos;m also a 3D whiz with Blender and SolidWorks, turning ideas into reality with 3D printing. Whether it&apos;s designing a new app interface or creating a complex 3D model, I bring a unique blend of technical expertise and artistic flair to my work.</p>
            <p className="md:text-xl">When I&apos;m not lost in code, you&apos;ll find me experimenting with new design techniques or fine-tuning my latest 3D print. I thrive on solving complex problems and pushing the boundaries of what&apos;s possible, always with an eye for detail and a passion for perfection. Whether I&apos;m coding up a storm or designing futuristic prototypes, I bring passion and precision to every project, making tech both fun and functional.</p>
            <Arrow/>
          </div>
          
      {/*SKILLS*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 initial={{x:"-500px"}} animate={skillRefView ? {x:"0"} : {}} className="font-bold text-3xl">SKILLS</motion.h1>
            <motion.div initial={{x:"-500px"}} animate={skillRefView ? {x:"0"} : {}} transition={{delay:0.2}} className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-2 rounded text-sm bg-gray-800 dark:bg-gray-200 text-white dark:text-black">{skill}</div> ))}
            </motion.div>
            <Arrow/>
          </div>

      {/*EXPERIENCE*/}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <motion.h1 initial={{x:"-500px"}} animate={experienceRefView ? {x:"0"} : {}} className="font-bold text-3xl">EXPERIENCE</motion.h1>
            <motion.div initial={{x:"-500px"}} animate={experienceRefView ? {x:"0"} : {}} transition={{delay:0.2}}>

        {/*LIST ITEM 0*/}       
        <div className="flex justify-between h-fit">
                <div className="w-1/3 relative"></div>

                <div>
                  <div className="relative w-1 h-full bg-gray-800 dark:bg-gray-200">
                    <div className="absolute -left-2 w-5 h-5 rounded-full bg-red-500"></div>
                  </div>
                </div>

                <div className="w-1/3 relative">
                <div className="shadow-lg p-4 bg-white text-gray-800 font-semibold rounded-md text-center w-fit">Fullstack Web</div>
                  <div className="-mx-3 p-3 text-[11px] md:text-sm">I&apos;m a MERN stack developer, wielding MongoDB, Express, React, and Node.js like a pro. My passion lies in creating seamless, user-friendly applications that deliver powerful digital experiences. Every project is a chance to make the web a better place, one line of code at a time. 🚀</div>
                  <div className="text-sm font-semibold underline">2022-Present</div>
                  {/*<div className="p-3 bg-white text-sm font-semibold rounded-md text-center w-fit">No company</div>*/}
                </div>

          </div>

        {/*LIST ITEM 1*/}       
        <div className="flex justify-between h-fit">
                <div className="w-1/3 relative">
                  <div className="shadow-lg p-4 bg-white text-gray-800 font-semibold rounded-md text-center w-fit">Frontend Web</div>
                  <div className="-mx-3 p-3 text-[11px] md:text-sm">I&apos;m a frontend dev, crafting responsive, visually appealing interfaces with HTML, CSS, and JavaScript. Every project is a chance to enhance the digital experience and make the web more enjoyable for all. 🎨💻</div>
                  <div className="text-sm font-semibold underline">2022</div>
                  {/*<div className="p-3 bg-white text-sm font-semibold rounded-md text-center w-fit">No company</div>*/}
                </div>

                <div>
                  <div className="relative w-1 h-full bg-gray-800 dark:bg-gray-200">
                    <div className="absolute -left-2 w-5 h-5 rounded-full bg-red-500"></div>
                  </div>
                </div>

                <div className="w-1/3 relative"></div>

              </div>

        {/*LIST ITEM 2*/}
              <div className="flex justify-between h-fit">
                <div className="w-1/3 relative"></div>

                <div>
                  <div className="relative w-1 h-full bg-gray-800 dark:bg-gray-200">
                    <div className="absolute -left-2 w-5 h-5 rounded-full bg-red-500"></div>
                  </div>
                </div>

                <div className="w-1/3 relative">
                  <div className="shadow-lg p-4 bg-white text-gray-800 font-semibold rounded-md text-center w-fit">Android Studio</div>
                  <div className="-mx-3 p-3 text-[11px] md:text-sm">Seasoned Android Studio Java developer with a knack for building user-friendly mobile applications. Expert in Java programming and Android SDK, focused on creating seamless, high-performance apps tailored to user needs.</div>
                  <div className="text-sm font-semibold underline">2021-2022</div>
                </div>

              </div>

        {/*LIST ITEM 3*/}
              <div className="flex justify-between h-fit">
                <div className="w-1/3 relative">
                  <div className="shadow-lg p-4 bg-white text-gray-800 font-semibold rounded-md text-center w-fit">Visual Studio</div>
                  <div className="-mx-3 p-3 text-[11px] md:text-sm">Experienced Visual Studio C# developer skilled in crafting robust applications using the .NET framework. Adept at problem-solving, writing clean code, and continuously updating projects to keep up with technological advancements.</div>
                  <div className="text-sm font-semibold underline">2020-2021</div>
                </div>

                <div>
                  <div className="relative w-1 h-full bg-gray-800 dark:bg-gray-200">
                    <div className="absolute -left-2 w-5 h-5 rounded-full bg-red-500"></div>
                  </div>
                </div>

                <div className="w-1/3 relative"></div>

              </div>
              

            </motion.div>

          </div>
        </div>
    
        {/*IMAGE CONTAINER*/}
        <motion.div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-5 z-30" initial={{y:-200, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.5, delay:1, ease: "easeInOut" }}>
          <Image className="rounded-tl-[150px] rounded-br-[150px]" src="/about.png" alt="" height={600} width={600}/>
        </motion.div>
        
      </div>
    </motion.div>
  )
}

export default AboutPage