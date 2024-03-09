import React from 'react'
import Transition from '@/components/Transition'
import AnimatedText from '@/components/AnimatedText'
import { Github } from '@/components/Icons'
import Link from 'next/link'
import Image from 'next/image'
// data
import projectsData from "@/components/data"


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='xs:p-4 p-12 w-full flex items-center justify-between rounded-3xl border border-solid border-black shadow-2xl lg:flex-col lg:p-8 sm:rounded-2xl xs:rounded-xl'>

      <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={link} target='_blank'>
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-[#B63E96] font-medium text-xl xs:text-base'>{type}</span>
        <Link href="/" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-black sm:text-xs'>{summary}</p>
        {/* links */}
        <div className='mt-2 flex items-center '>
          <Link href={github} target='_blank' className='w-10'><Github /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-black text-white p-2 px-6 font-semibold sm:text-base sm:px-4'>visit project</Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='p-6 border-2 border-black rounded-2xl shadow-2xl'>

      <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
        <Image src={img} alt={title} className="w-full h-auto rounded-2xl" />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-[#B63E96] font-medium text-xl'>{type}</span>
        <Link href="/" className='hover:underline underline-offset-2 w-full'>
          <h2 className='my-2 w-full text-left text-2xl md:text-md font-bold'>{title}</h2>
        </Link>
        {/* links */}
        <div className='mt-2 flex items-center justify-between w-full'>
          <Link href={link} target='_blank' className='text-lg underline font-semibold'>visit</Link>
          <Link href={github} target='_blank' className='w-8'><Github /></Link>
        </div>
      </div>

    </article>
  )
}


export default function Page() {
  return (
    <>
      <Transition></Transition>
      <div className='px-32 lg:px-6 pt-16 w-full mb-16 flex flex-col items-center justify-center'>
        <AnimatedText text="Journey Through Imagination!" className='mb-16 xs:!text-4xl sm:!text-5xl !text-7xl'></AnimatedText>
      
        <div className='grid grid-cols-12 gap-y-20 gap-x-8 sm:gap-y-10'>
          <div className='col-span-12'>
            <FeaturedProject type={projectsData[0].type} title={projectsData[0].title} summary={projectsData[0].summary} link={projectsData[0].link} img={projectsData[0].img} github={projectsData[0].github}/>
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project type={projectsData[1].type} title={projectsData[1].title} summary={projectsData[1].summary} link={projectsData[1].link} img={projectsData[1].img} github={projectsData[1].github}/>
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project type={projectsData[2].type} title={projectsData[2].title} summary={projectsData[2].summary} link={projectsData[2].link} img={projectsData[2].img} github={projectsData[2].github}/>
          </div>
          <div className='col-span-12'>
            <FeaturedProject type={projectsData[3].type} title={projectsData[3].title} summary={projectsData[3].summary} link={projectsData[3].link} img={projectsData[3].img} github={projectsData[3].github}/>
          </div>
        </div>
      </div>
    </>
  )
}
