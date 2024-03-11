"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'


export default function Logo() {
    const motionLink = motion(Link)
    return (
        <div className='flex items-center justify-center mt-2'>
            <motion.div className='w-16 h-16 sm:h-6 sm:w-6 md:h-14 md:w-14 text-white bg-dark flex items-center justify-center rounded-full text-2xl font-semibold' whileHover={{ backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"], transition: {duration: 2, repeat: Infinity} }} >
                <Link href="/" className='sm:text-md md:text-md'>LB</Link>
            </motion.div>
        </div>
    )
}
