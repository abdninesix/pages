"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import Handshake from "@/components/Handshake";

const ContactPage = () => {

  const text = "Say hello to begin;"
  
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState({})

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    setErrors({})

    const formValues = {
      user_message: form.current.user_message.value,
      user_email: form.current.user_email.value,
    };
    
    const newErrors = {};
    
    if (!formValues.user_message) { newErrors.user_message = "This field is required"; }
    if (!formValues.user_email) { newErrors.user_email = "This field is required"; }
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

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
    <motion.div className="h-full scrollbar-none" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full overflow-hidden flex flex-col items-center justify-center gap-4 lg:gap-20 lg:flex-row pb-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
        
        <div className="lg:w-1/2 h-1/5 lg:h-full flex flex-col gap-10 items-center justify-center text-3xl md:text-6xl">
          <div className="flex flex-wrap">
            {text.split("").map((letter,index) => (
              <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:1, repeat:Infinity, delay:index*0.1}}>{letter === " " ? "\u00A0" : letter}</motion.span>
            ))}
          </div>

          <div className="hidden lg:flex text-gray-800 dark:text-gray-300 duration-200">
            <Handshake/>
          </div>
        </div>


        <motion.form onSubmit={sendEmail} ref={form} className="p-4 shadow-lg rounded-2xl h-fit w-[350px] md:w-1/2 lg:h-[550px] lg:mt-5 bg-gray-300 dark:bg-slate-950 text-lg flex flex-col gap-5 justify-center duration-200" initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{delay:1, duration:0.25}}>
            <span>Your message:</span>
            <textarea rows={8} name="user_message" placeholder="Dear Abdullah," className="p-2 rounded-xl duration-200 bg-gray-50 text-gray-800 resize-none outline-none"/>
            {errors.user_message && <span className="w-fit rounded-md text-red-600">{errors.user_message}</span>}
            <span>Your email:</span>
            <input name="user_email" type="text" placeholder="something@somthing.com" className="p-2 rounded-xl duration-200 bg-gray-50 text-gray-800 resize-none outline-none"/>
            {errors.user_email && <span className="w-fit rounded-md text-red-600">{errors.user_email}</span>}
            <button className="bg-mytheme hover:bg-black text-white dark:hover:bg-gray-200 dark:hover:text-black rounded-md p-2 w-fit">Send</button>
            {success && <span className="w-fit rounded-md px-1 bg-green-600 text-white text-center">Your message has been sent!</span>}
            {error && <span className="w-fit rounded-md text-red-600">Something went wrong!</span>}
        </motion.form>

      </div>
    </motion.div>
  )
}

export default ContactPage