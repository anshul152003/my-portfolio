"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "TalkTranscribe",
    description: "TalkTranscribe is a real-time speech-to-text web app built with React and the ReactSpeechRecognition library.",
    stack: [{ name: "ReactJs" }, { name: "TailwindCSS" }, { name: "Vite" }],
    image: "/assets/projects/thumb7.png",
    live: "https://talktranscribe.netlify.app/",
    github: "https://github.com/anshul152003/TalkTranscribe.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "Open Board System",
    description: "A real-time collaborative whiteboard application that allows users to draw, erase, and share ideas visually in the browser.",
    stack: [{ name: "JavaScript" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/projects/thumb1.png",
    live: "https://thisboard-com.onrender.com/",
    github: "https://github.com/anshul152003/Open-Board-System.git",
  },
  {
    num: "03",
    category: "fullstack",
    title: "VisionTalk",
    description: "A full-stack video conferencing platform with mood tracking features, built using ZegoCloud and Firebase for real-time communication and adaptive media streaming.",
    stack: [{ name: "TypeScript" }, { name: "TailwindCSS" }, { name: "Firebase" }, {name: "ZegoCloud"}],
    image: "/assets/projects/thumb2.jpg",
    live: "https://vision-talk-lac.vercel.app/",
    github: "https://github.com/anshul152003/Vision-Talk.git",
  },
  {
    num: "04",
    category: "frontend",
    title: "Music Player",
    description: "A modern and responsive music streaming interface enabling users to browse, play, and control audio playback with an intuitive design.",
    stack: [{ name: "JavaScript" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/projects/thumb3.png",
    live: "https://music-player-weld-seven.vercel.app/",
    github: "https://github.com/anshul152003/Music-Player.git",
  },
  {
    num: "05",
    category: "frontend",
    title: "SafeMessage - A encrypt-decrypt web app",
    description: "A web utility for securely encrypting and decrypting text messages, ensuring user confidentiality through a clean, minimal interface.",
    stack: [{ name: "JavaScript" },{ name: "HTML" },{ name: "CSS" }],
    image: "/assets/projects/thumb-7.png",
    live: "https://safe-message.vercel.app/",
    github: "https://github.com/anshul152003/SafeMessage.git",
  },
  {
    num: "06",
    category: "frontend",
    title: "Calorie-Counter",
    description: "A simple and interactive calorie tracking app that helps users log food items and monitor daily intake for a healthier lifestyle.",
    stack: [{ name: "JavaScript" },{ name: "HTML" },{ name: "CSS" }],
    image: "/assets/projects/thumb5.png",
    live: "https://calorie-counter-dun-alpha.vercel.app/",
    github: "https://github.com/anshul152003/Calorie-Counter.git",
  },
  {
    num: "07",
    category: "frontend",
    title: "Data Table Creation",
    description: "A dynamic table management tool built with React, allowing users to add, update, and delete tabular data with smooth UI interactions.",
    stack: [{ name: "React.js" },{ name: "CSS" },{ name: "Vite" }],
    image: "/assets/projects/thumb6.png",
    live: "https://data-table-create.vercel.app/",
    github: "https://github.com/anshul152003/Data-Table-Create.git",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-accent text-center">My Projects</h3>
        <p className="p mb-8 max-w-3xl mx-auto text-center text-white/80">
        These projects reflect my practical skills and passion for building user-friendly web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-xl"
                  priority={project.num === "02"}
                />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/95 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex gap-2 text-xs mt-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsArrowUpRight className="text-xl" />
                    </div>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsGithub className="text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
