"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) =>  {
  return (
    <motion.div whileHover={{scale: 1.05}} initial={{x:0, y:0}} whileInView={{x:x, y:y}} viewport={{once: true}} transition={{duration:1.5}} className='flex items-center justify-center rounded-full font-semibold bg-black text-white p-6 py-3 shadow-2xl cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-black xs:font-bold'>{name}</motion.div>
  )
}

export default function Skills() {
  return (
    <div className='mb-20 mt-54 md:mt-32'>
        <h2 className='font-bold text-8xl w-full text-center md:text-6xl sm:text-2xl'>skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
          <motion.div whileHover={{scale: 1.05}} className='flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-2xl cursor-pointer lg:p-6 md:p-4 xs:text-sm xs:p-2'>web</motion.div>
          <Skill name="css" x="-1vw" y="-6vw"></Skill>
          <Skill name="html" x="+3vw" y="7vw"></Skill>
          <Skill name="Javascript" x="-16vw" y="0"></Skill>
          <Skill name="reactjs" x="-5vw" y="16vw"></Skill>
          <Skill name="nextjs" x="20vw" y="17vw"></Skill>
          <Skill name="nodejs" x="30vw" y="-10vw"></Skill>
          <Skill name="expressjs" x="-1vw" y="-16vw"></Skill>
          <Skill name="mongodb" x="-26vw" y="-18vw"></Skill>
          <Skill name="tailwindcss" x="-30vw" y="-10vw"></Skill>
          <Skill name="git&github" x="-30vw" y="10vw"></Skill>
        </div>
    </div>
  )
}
