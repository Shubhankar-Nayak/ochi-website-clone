import { motion } from 'framer-motion';
import React from 'react'
import '../src/index.css';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity ,ease: "linear", duration: 10}} className='text-[24vw] font-semibold leading-none uppercase mr-10' style={{ fontFamily: 'FoundersGrotesk-SemiBold' }} >we are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity ,ease: "linear", duration: 10}} className='text-[24vw] font-semibold leading-none uppercase mr-10' style={{ fontFamily: 'FoundersGrotesk-SemiBold' }} >we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee