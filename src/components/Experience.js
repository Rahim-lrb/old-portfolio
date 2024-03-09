"use client"
import React, {useRef} from 'react'
import { useScroll, motion } from 'framer-motion'
import Ally from './Ally'

const Details = ({position, company, companyLink, time, address, work}) => {
  const first = useRef(null)
  return (
    <li ref={first} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <Ally reference={first}/>
      <motion.div className='' initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type: "spring"}}>
        <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a className='text-primary capitalize' target='_blank' href={companyLink}>{company}</a> </h3>
        <span className='capitalize inline-block font-medium text-black/75'>{time} | {address}</span>
        <p className='font-medium w-full'>{work}</p>
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
        <h2 className='font-bold text-8xl mb-32 w-full text-center capitalize md:text-6xl md:mt-32 sm:!text-2xl'>experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
          <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 h-full w-[4px] bg-black origin-top '/>
          <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details position="software engineer" company="XYZ inc" companyLink="http://www.abccorp.com" time="Jan 2020" address="123 Main St, Cityville" work="Developed web applications using Python and Django framework"/>
            <Details position="software engineer" company="XYZ inc" companyLink="http://www.abccorp.com" time="Jan 2020" address="123 Main St, Cityville" work="Developed web applications using Python and Django framework"/>
            <Details position="software engineer" company="XYZ inc" companyLink="http://www.abccorp.com" time="Jan 2020" address="123 Main St, Cityville" work="Developed web applications using Python and Django framework"/>
          </ul>
        </div>
    </div>
  )
}
