"use client"
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"

const ContactPage = () => {

  const text = "Say hello and let's start with your project;"
  
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        (result) => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
        },
      );
  };


  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full overflow-auto flex flex-col items-center justify-between gap-2 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        
        <div className="h-[180px] lg:h-full lg:w-[500px] p-10 lg:mt-36 flex items-start justify-center text-justify text-4xl md:text-6xl text-black">
          <div>
            {text.split("").map((letter,index) => (
              <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:2, repeat:Infinity, delay:index*0.1}}>{letter}</motion.span>
            ))}
          </div>
        </div>


        <motion.form onSubmit={sendEmail} ref={form} className="bg-red-600 text-white p-4 rounded-2xl h-2/3 lg:h-[550px] md:w-[500px] lg:mt-5 text-xl flex flex-col gap-5 justify-center" initial={{opacity:0, y:"30vh"}} animate={{opacity:1, y:"0%"}} transition={{delay:1, duration:0.5}}>
            <span>Dear Abdullah,</span>
            <textarea rows={8} name="user_message" className="p-2 rounded-xl bg-transparent border border-white resize-none"/>
            <span>Email:</span>
            <input name="user_email" type="text" className="p-2 rounded-xl bg-transparent border border-white resize-none"/>
            <button className="bg-white text-black rounded-lg p-2 mt-3 w-fit animate-bounce">Send</button>
            {success && <span className="text-green-600 text-center">Your message has been sent!</span>}
            {error && <span className="text-red-600 text-center">Something went wrong!</span>}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default ContactPage