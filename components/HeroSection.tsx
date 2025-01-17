"use client"

import React from "react"
import Image from "next/image"
import {Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

export const  HeroSection = () => {
    return(
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                <Image
                 src="/WhatsApp Image 2024-08-02 at 11.23.37_10caeb22.jpg"
                 alt="Profile Picture"
                 width={325}
                 height={325}
                 className="rounded-full shadow-2xl"
                />
                </div>
                <div className="md:mt-2 md:w-3/5">
                <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi,I&#39;m Yashvardhan</h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
                    I&#39;m a{" "}
                    <span className="font-semibold text-teal-600">
                        Full-Stack Web Developer{" "}
                    </span>
                    based in Maharashtra, India.Creating Things on the Internet is what I do.
                </p>
                <Link
                  to="projects"
                  className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                  activeClass="active"
                  spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Projects
                </Link>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <Link
                to="About"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
    )
}