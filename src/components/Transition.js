"use client"
import React from 'react'
import { motion } from "framer-motion"



export default function Transition() {
    return (
        <div style={{zIndex: 50}}>  
            <motion.div style={{zIndex: 45}} className='fixed top-0 bottom-0 right-full w-screen h-screen bg-primary' initial={{x:"100%", width: "100%"}} animate={{x:"0%", width: "0%"}} transition={{duration: 0.8, ease:"easeInOut"}}/>
            <motion.div style={{zIndex: 43}} className='fixed top-0 bottom-0 right-full w-screen h-screen bg-white' initial={{x:"100%", width: "100%"}} animate={{x:"0%", width: "0%"}} transition={{delay:0.2, duration: 0.8, ease:"easeInOut"}}/>
            <motion.div style={{zIndex: 44}} className='fixed top-0 bottom-0 right-full w-screen h-screen bg-dark' initial={{x:"100%", width: "100%"}} animate={{x:"0%", width: "0%"}} transition={{delay: 0.4, duration: 0.8, ease:"easeInOut"}}/>
        </div>
    )
}
