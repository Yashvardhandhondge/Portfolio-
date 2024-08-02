import React from "react";
import Image from "next/image";

const skills = [
    { Skill: "HTML" },
    { Skill: "CSS" },
    { Skill: "JavaScript" },
    { Skill: "React" },
    { Skill: "Node.js" },
    { Skill: "MongoDB" },
    { Skill: "Express" },
    { Skill: "Next.js" },
    { Skill: "Tailwind" },
    { Skill: "PostgreSQL" },
    { Skill: "TypeScript" },
    { Skill: "AWS EC2, Azure VM" },
    { Skill: "Docker" },
    { Skill: "CI/CD" },
];

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-600 border-0 rounded" />
                </h1>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Know More About Me!
                        </h1>
                        <p>
                            Hi, my name is Yashvardhan Dhondge and I am a{" "}
                            <span className="font-bold">highly ambitious</span>,
                            <span className="font-bold">self-motivated</span>, and 
                            <span className="font-bold"> driven</span> computer science undergraduate
                            based in Maharashtra, India.
                        </p>
                        <br />
                        <p>
                            I am a <span className="font-bold">Full-Stack Web Developer</span> with knowledge of DevOps tools. I have a keen interest in{" "}
                            <span className="font-bold">Frontend Development</span>,{" "}
                            <span className="font-bold">Backend Development</span>, and I can handle{" "}
                            <span className="font-bold">DevOps tasks</span> as well.
                        </p>
                    </div>
                    <div>
                        <div className="h-full border-r border-r-black rounded-full"></div>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => (
                                <p
                                    key={idx}
                                    className="px-4 py-2 m-2 bg-gray-200 rounded-full shadow-md text-gray-700"
                                >
                                    {item.Skill}
                                </p>
                            ))}
                        </div>
                        {/* <div className="mt-6">
                            <Image
                                src="/WhatsApp Image 2024-08-02 at 11.23.37_10caeb22.jpg"
                                alt="Profile Picture"
                                width={300}
                                height={300}
                                className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 rounded-lg"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
