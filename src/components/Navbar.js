"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import NavLink from './NavLink'
import { Dribble, Twitter, Pinterest, Linkedin, Github, Sun , Moon, Test } from './Icons'
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'
import SunIcon from "/public/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg"
import MoonIcon from "/public/svgs/moon-filled-to-sunny-filled-loop-transition.svg"


const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useThemeSwitcher();

    console.log(mode)

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        },
    };
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        },
    };
    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };
    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <header className='w-full font-medium flex items-center justify-between py-8 sm:py-2 md:py-4 md:px-6 lg:px-10 px-32 xs:px-2'>
            {/* links */}
            <nav className='sm:hidden md:hidden '>
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </nav>
            {/* socials */}
            <nav className='flex items-center justify-center flex-wrap sm:hidden md:hidden '>
                <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} href="https://github.com/Rahim-lrb" target={"_blank"} className='mx-3'><Github className="!w-8" /></motion.a>
                <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/abderrahim-laribi-467b542b0/" target={"_blank"} className='mx-3'><Linkedin className="!w-8" /></motion.a>
                <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} href="/" target={"_blank"} className='mx-3'><Pinterest className="!w-8" /></motion.a>
                <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} href="/" target={"_blank"} className='mx-3'><Twitter className="!w-8" /></motion.a>
                <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} href="/" target={"_blank"} className='mx-3'><Dribble className="!w-8" /></motion.a>
                {/* <button className='w-10 h-10' onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    {
                        mode === "dark" ? "light" : "dark"
                    }
                    {
                        mode === "dark" ? <Sun className={"fill-black"}/> : <Moon className={"fill-black"}/>
                    }
                </button> */}
            </nav>
            <div className='sm:hidden md:hidden absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo></Logo>
            </div>

            <div className='hidden sm:block md:block'>
                <Logo className="!w-6 !h-6"></Logo>
            </div>
            <div className="sm:block md:block hidden h-full">
                {/* MENU BUTTON */}
                <button
                    className="w-10 h-8 flex flex-col justify-between z-40 relative"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded"
                    ></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                </button>
                {/* MENU LIST */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-full bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-30"
                    >
                        {links.map((link) => (
                            <motion.div
                                variants={listItemVariants}
                                className=""
                                key={link.title}
                            >
                                <Link onClick={() => setOpen(false)} href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </header>
    )
}
