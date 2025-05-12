/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
"use client";

import { FaReact, FaNodeJs } from "@/node_modules/react-icons/fa";
import { BiLogoJava } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";

import {
  SiTailwindcss,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon } from "lucide-react";

// about data
const about = {
  title: "About me",
  description:
    "Fueled by curiosity and determination, I’m passionate about building intuitive software that solves real-world problems. I believe technology has the power to connect, empower, and drive meaningful impact.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anshul Gangrade",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7240922563",
    },
    {
      fieldName: "Email",
      fieldValue: "anshulgangrade.15@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Indore,MadhyaPradesh, INDIA",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I specialize in creating responsive and user-focused web applications, combining clean design with efficient functionality to deliver smooth and impactful digital experiences.",
  skillList: [
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <TbBrandCpp />,
      name: "Cpp",
    },
    {
      icon: <BiLogoJava />,
      name: "Java",
    },
    {
      icon: <IoLogoJavascript />,
      name: "JavaScript",
    },
    {
      icon: <GrMysql />,
      name: "MySQL",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/about/badge.svg",
  title: "My experience",
  description:
    "Experienced in building end-to-end web solutions and collaborating with cross-functional teams to deliver reliable and user-centric applications.",
  items: [
    {
      position: "MERN Developer Intern - Dr Reddy Foundation",
      duration: "April 2025 - Present",
      description: "Indore",
    },
    {
      position: "Data Analytics Intern - AICTE",
      duration: "June 2023 - July 2023",
      description: "Indore",
    },
    {
      position: "Web Design & Development Intern - Oasis Infobyte",
      duration: "May 2023 - June 2023",
      description: "Indore",
    },
  ],
};

// education data
const education = {
  icon: "/assets/about/cap.svg",
  title: "My education",
  description:
    "Built on a strong academic foundation in computer science, my journey reflects continuous growth and a passion for learning.",
  items: [
    {
      institution: "Sage University",
      degree: "B.Tech (Computer Science & Engineering)",
      duration: "2021 - 2025",
    },
    {
      institution: "St. Pius Hr. Sec. School",
      degree: "Senior Secondary & Intermediate",
      duration: "2020 - 2021",
    },
    {
      institution: "M.G.M. Hr. Sec. School",
      degree: "High School",
      duration: "2018 - 2019",
    },
  ],
};

// certification data
const certificate = {
  // icon: "/assets/about/cap.svg",
  title: "My Certification",
  description:
    "Grounded in computer science fundamentals, my skills are further strengthened through specialized certifications that reflect my commitment to continuous learning.",
  items: [ 
    {
      institution: "NPTEL",
      degree: "Fundamentals of Object Oriented Programming",
      duration: "2025",
      image: "/assets/certificate/Fundamentals of Object Oriented Programming_page-0001.jpg",
      link: "https://drive.google.com/file/d/1tfTyqHFfm8IVJppsTrW5_ffDA0nPy2FA/view?usp=sharing",
    },
    {
      institution: "EduSkills Academy",
      degree: "Java Full Stack",
      duration: "2025",
      image: "/assets/certificate/Java-FullStack-EduSkill.jpg",
      link: "https://drive.google.com/file/d/1duOoQF3HVF9X_unTdUDeVaDVDU3jEqaJ/view?usp=sharing",
    },
    {
      institution: "HackerRank",
      degree: "Frontend Developer",
      duration: "2025",
      image: "/assets/certificate/frontend_developer_react.jpg",
      link: "https://www.hackerrank.com/certificates/e4372b12df69",
    },
    {
      institution: "GreatStack",
      degree: "JavaScript Fundamentals",
      duration: "2025",
      image: "/assets/certificate/Javascript-GreatStack.jpg",
      link: "https://drive.google.com/file/d/1hfpX2t2F5ALWYy0tYjf6uTYfQ5GF4StK/view?usp=sharing",
    },
    {
      institution: "Simplilearn",
      degree: "Introduction to Frontend Development",
      duration: "2025",
      image: "/assets/certificate/Frontend.jpg",
      link: "https://simpli-web.app.link/e/4MAJ4gQjYSb",
    },
    {
      institution: "Swayam NPTEL",
      degree: "Data Base Management System",
      duration: "2024",
      image: "/assets/certificate/DBMS-NPTEL.jpg",
      link: "https://drive.google.com/file/d/1J24wiWX2V8r9tusvR6iwFtbDR5hKsVje/view?usp=sharing",
    },
    {
      institution: "AWS Academy Graduate",
      degree: "AWS Academy Cloud Foundation",
      duration: "2023",
      image: "/assets/certificate/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations.jpg",
      link: "https://www.credly.com/badges/779572bf-4696-4c89-8855-48399bd94488/public_url",
    },
    {
      institution: "AWS Academy Graduate",
      degree: "AWS Academy Data Analytics",
      duration: "2023",
      image: "/assets/certificate/AWS Academy Data Analytics.jpg",
      link: "https://www.credly.com/badges/74d2369d-1fa4-4c04-b236-64cf957b3fe3/public_url",
    },
    {
      institution: "Simplilearn",
      degree: "Introduction of Cloud Computing",
      duration: "2023",
      image: "/assets/certificate/cloud.jpg",
      link: "https://simpli-web.app.link/e/NjeWmUAjYSb",
    },
    {
      institution: "CISCO",
      degree: "Introduction to Cyber Security",
      duration: "2023",
      image: "/assets/certificate/CYB Workshop III.jpg",
      link: "https://www.credly.com/badges/f50398ad-c57d-4949-a43e-d0be8508c5d3/public_url",
    },
    {
      institution: "Udemy",
      degree: "How Internet Works",
      duration: "2023",
      image: "/assets/certificate/How internet works.jpg",
      link: "https://drive.google.com/file/d/1kebwRZIy0vrfPbtuE7FI3I0Fw68ckQq4/view?usp=sharing",
    },
    {
      institution: "Udemy",
      degree: "Web Design",
      duration: "2023",
      image: "/assets/certificate/Web Design.jpg",
      link: "https://drive.google.com/file/d/1LHQvbvHHAVKfryvq5kZLBo_4x8JoTmdQ/view?usp=sharing",
    },
  ],
};


const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] xl:px-[30px] xl:h-[582px]"
        >
          <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificate">Certification</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{about.title}</h3>
                  <p className="p">{about.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-base tracking-tight text-white/80">
                            {item.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{skills.title}</h3>
                  <p className="p">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              {/* Display the skill name directly on smaller screens */}
                              <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all duration-300">
                                {skill.name}
                              </p>
                            </TooltipTrigger>
                            {/* Tooltip content only visible on xl screens and larger */}
                            <TooltipContent className="hidden xl:block">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center">
                <div className="flex flex-col gap-2 xl:text-left  ">
                  <h3 className="h3">{experience.title}</h3>
                  <p className="p">{experience.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:text-left">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] flex items-center justify-center">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center">
                <div className="flex flex-col gap-2 xl:text-left">
                  <h3 className="h3">{education.title}</h3>
                  <p className="p">{education.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:text-left">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] flex items-center justify-center">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* certificate */}
            <TabsContent value="certificate" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{certificate.title}</h3>
                  <p className="p">{certificate.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certificate.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[250px] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img
                            src={item.image} alt={item.degree}
                            className="w-[150px] h-auto mb-4 ml-10 object-contain rounded-md"
                          />
                        </a>
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[50px] flex items-center justify-center">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>            

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
