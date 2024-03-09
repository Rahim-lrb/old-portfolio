"use client"
import React, {useRef} from 'react'
import { useScroll, motion } from 'framer-motion'
import Ally from './Ally'

const Details = ({type, time, place, info}) => {
  const first = useRef(null)
  return (
    <li ref={first} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <Ally reference={first}/>
      <motion.div className='' initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type: "spring"}}>
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='capitalize inline-block font-medium text-black/75'>{time} | {place}</span>
        <p className='font-medium w-full'>{info}</p>
      </motion.div>
    </li>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })


  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center capitalize sm:!text-2xl'>Education</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
          <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 h-full w-[4px] bg-black origin-top '/>
          <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details type="Bachelor's Degree" time="2016 - 2020" place="University of Example" info="Major in Computer Science"/>
            <Details type="Bachelor's Degree" time="2016 - 2020" place="University of Example" info="Major in Computer Science"/>
          </ul>
        </div>
    </div>
  )
}
