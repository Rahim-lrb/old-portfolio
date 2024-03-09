import Image from "next/image";
import profilePic from "/public/profile/developer-pic-1.png"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Arrow } from "../components/Icons";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <>
      <Transition></Transition>
      <main className="flex items-center justify-between text-dark min-h-screen w-full">
        {/* content */}
        <div className="flex items-center justify-between w-full md:flex-col sm:!px-2 px-32 md:px-12 lg:px-16 sm:text-center space-x-6">

          <div className="w-full">
            <Image src={profilePic} alt="profile pic" className="w-full h-auto"></Image>
          </div>

          <div className="flex flex-col items-center self-center w-full ">
            <AnimatedText className="xs:!text-lg sm:!text-xl md:!text-3xl lg:!text-4xl !text-5xl text-left" text="Bringing Vision to Life: Where Code and Design Collide"/>
            <p className="my-4 xs:my-2 xs:text-left xs:text-sm sm:text-md text-base font-medium">as a skilled fullstack developer, I am dedicated to turning ideas into innovative web applications, explore my latest projects and articles, showcasing my expertise in react.js and web development</p>
            {/* buttons */}
            <div className="flex items-center justify-center self-start mt-2 sm:self-center">
              <Link href="/resume.pdf" target="_blank" download={true} className="flex items-center bg-dark text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black duration-300 border-2 border-solid border-transparent hover:border-black w-40 sm:w-20 sm:px-3 sm:py-1 sm:text-sm md:w-30 ms:px-4 md:py-2 md:text-md">
                resume
                <Arrow className={"w-6 ml-1"}/>
              </Link>
              <Link href="mailto:aberrahimcoder@gmail.com" target="_blank" className="ml-4 text-lg font-medium capitalize text-black underline sm:text-sm">contact</Link>
            </div>
          </div>

        </div>
      </main> 
    </>
  );
}
