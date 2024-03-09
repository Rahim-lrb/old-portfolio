import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='w-full border-2 border-solid border-dark font-medium text-lg px-24 mt-6 md:px-6 sm:px-2'>
            <div className='py-6 flex items-center justify-between md:flex-col text-center'>
                <span className='sm:text-sm'>{new Date().getFullYear()}&copy; all rights reserved</span>
                <div className='flex items-center sm:text-sm'> built with <span className='inline-block text-[#B63E96] text-xl px-1'>&#9825;</span>by &nbsp;
                    <Link href="/" className='underline underline-offset-2'>rahim-lrb</Link>
                </div>
                <Link className='sm:text-sm' href="/">say hello</Link>
            </div>
        </footer>
    )
}
