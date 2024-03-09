"use client"
import React from 'react'
import { motion } from "framer-motion"

console.log(motion)

const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.1
        }
    }
}

const single= {
    initial: {
        opacity: 0,
        y:50
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
        }
    }
}

export default function AnimatedText({ text, className = "" }) {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
                <motion.h1 className={`${className} inline-block text-dark font-bold capitalize`} variants={quote} initial="initial" animate="animate">
                    {text.split(" ").map((word, index) =>
                        <motion.span key={word + "-" + index} className='inline-block' variants={single}>{word}&nbsp;</motion.span>
                    )}
                </motion.h1>
        </div>
    )
}
