import React from 'react'
import Transition from '@/components/Transition'
import AnimatedText from '@/components/AnimatedText'
import dev from "/public/profile/developer-pic-2.jpg"
import Image from 'next/image'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Me from "/public/profile/me.png"

export default function page() {

  return (
    <>
      <Transition></Transition>
      <div className='flex w-full flex-col justify-center items-center px-32 md:px-6 lg:px-10 mb-20'>
        <AnimatedText text="Passion Fuels Purpose!" className='my-16 xs:!text-4xl sm:!text-5xl !text-7xl'></AnimatedText>
        {/* details */}
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 items-center'>

          <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:!col-span-8'> 
            <h2 className='mb-4 text-lg lowercase font-bold opacity-35 text-dark'>biography</h2>
            <p className='font-medium my-4'>Hi, I'm <span className='font-bold capitalize'>abderrahim</span>, a self-taught full-stack developer with 2 years of experience in crafting digital solutions. My journey began outside the confines of traditional education, driven by a relentless passion for coding and a hunger for knowledge.</p>
            <p className='font-medium my-4'>Through countless projects, I've honed my skills in both front-end and back-end development, tackling challenges with creativity and precision. From dynamic websites to robust backend systems, I thrive on pushing boundaries and delivering solutions that exceed expectations.</p>
            <p className='font-medium my-4'>I believe that development is more than just writing code; it's about solving real-world problems and enhancing user experiences. With a commitment to continuous learning and a dedication to excellence, I'm here to bring your digital visions to life with innovation and expertise.</p>
          </div>

          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-light p-8 z-10 xl:col-span-4 md:order-1 md:!col-span-8'>
              <Image className='w-full h-auto rounded-2xl' src={Me} priority></Image>
          </div>

          <div className='col-span-2 h-max flex flex-col justify-between items-end gap-10 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
            <div className='flex flex-col items-end justify-center md:!items-center'>
              <span className='inline-block text-7xl font-bold md:text-2xl'>0+</span>
              <h2 className='text-xl font-medium capitalize text-black/75 md:text-sm'>satisfied clients</h2>
            </div>
            <div className='flex flex-col items-end justify-center md:!items-center'>
              <span className='inline-block text-7xl font-bold md:text-2xl'>40+</span>
              <h2 className='text-xl font-medium capitalize text-black/75 md:text-sm'>projects completed</h2>
            </div>
            <div className='flex flex-col items-end justify-center md:!items-center'>
              <span className='inline-block text-7xl font-bold md:text-2xl'>2+</span>
              <h2 className='text-xl font-medium capitalize text-black/75 md:text-sm'>years in this field</h2>
            </div>
          </div>
        </div>
    
      </div>
      <Skills/>
      {/* <Experience/> */}
      {/* <Education/> */}
    </>
  )
}
