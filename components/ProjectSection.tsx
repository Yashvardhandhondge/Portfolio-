import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Y-Chat",
    description: "A Realtime Chat Application with Rooms and Much more features",
    image: "/Screenshot (156).png",
    link: "https://github.com/Yashvardhandhondge/ChatApp",
  },
  {
    name: "Blog-site",
    description: "A Blog site where you can write, read and create blogs",
    image: "/Screenshot (76).png",
    link: "https://github.com/Yashvardhandhondge/Medium",
  },
  {
    name: "Payment-app",
    description: "A Payment App with Stripe Payment Gateway",
    image: "/Screenshot (18).png",
    link: "",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-600 border-0 rounded" />
      </h1>

      <div className="flex flex-col items-center space-y-12">
        {projects.map((project, idx) => (
          <div key={idx} className="w-full md:w-1/2">
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col items-center animate-slideUpCubiBezier animation-delay-2">
                <div className="relative w-full text-center">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={500}
                      className="mx-auto rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                  <div className="absolute top-2 right-2">
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
                <div className="mt-4 text-center w-full">
                  <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
