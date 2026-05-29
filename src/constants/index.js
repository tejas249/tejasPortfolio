import { image, title } from "framer-motion/client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png"
import project5 from "../assets/projects/project5.png"
import project6 from "../assets/projects/project6.png"
import project7 from '../assets/projects/project7.png'
import project8 from '../assets/projects/project8.png'
import project9 from '../assets/projects/project9.png'


export const HERO_CONTENT = `Hi there! I'm a  Full-Stack Developer (MERN), currently interning at KPIT. I love building clean, user-friendly web apps and am now exploring the world of Web3 to push my skills even further.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];
export const PROJECTS = [
  // ── Resume-featured projects first ──
  {
    title: "AI Fusion",
    subtitle: "Multi-Model AI Chat Platform",
    image: project7,
    description: "A unified AI chat platform that lets users converse with ChatGPT, DeepSeek, and Gemini in a single interface. Built with Clerk for secure auth, Firebase for real-time message history, and a polished ShadCN UI.",
    technologies: ["Next.js", "React", "Clerk", "Firebase", "ShadCN UI", "Tailwind CSS"],
    liveLink: "https://ai-fusion-lab-nine.vercel.app",
    githubLink: "https://github.com/tejas249/ai-fusion-lab",
  },
  {
    title: "InsiderJobs",
    subtitle: "Full-Stack Job Portal",
    image: project6,
    description: "A full-stack MERN job listing platform where users can browse, filter, and apply for jobs. Features secure RESTful APIs with JWT auth, MongoDB data management, and a responsive Tailwind UI.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Clerk"],
    liveLink: "https://insider-jobs-full-stack-client.vercel.app",
    githubLink: "https://github.com/tejas249/InsiderJobs",
  },
  // ── Other projects ──
  {
    title: "Reevio",
    subtitle: "Video Editing Agency Website",
    image: project8,
    description: "A modern agency website built with Next.js, MongoDB, and ShadCN for a sleek video editing experience.",
    technologies: ["React", "Next.js", "MongoDB", "ShadCN", "Aceternity UI"],
    liveLink: "https://reevio.netlify.app",
    githubLink: "https://github.com/tejas249/reevio",
  },
  {
    title: "Dark SaaS Landing Page",
    subtitle: "Landing Page",
    image: project9,
    description: "A sleek dark-themed SaaS landing page built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS"],
    liveLink: "https://sasdark.vercel.app",
    githubLink: "https://github.com/tejas249/darks",
  },
  {
    title: "AuthSystem",
    subtitle: "MERN Auth App",
    image: project5,
    description: "A secure authentication system with signup, OTP email verification, and password recovery.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveLink: "https://frontend-cj6x.onrender.com/",
    githubLink: "https://github.com/tejas249/AuthSystem",
  },
  {
    title: "Kodebase",
    subtitle: "Multi-Language IDE",
    image: project4,
    description: "A full-stack IDE supporting multiple languages and project management using MERN.",
    technologies: ["React", "MongoDB", "Express", "Node.js"],
    liveLink: "",
    githubLink: "https://github.com/tejas249/kodebase",
  },
  {
    title: "Tomato",
    subtitle: "Food Delivery App",
    image: project2,
    description: "A responsive food delivery web app built with React and CSS.",
    technologies: ["React", "CSS"],
    liveLink: "https://tomato-food-del.netlify.app",
    githubLink: "https://github.com/tejas249/Tomato",
  },
  {
    title: "Shoper",
    subtitle: "E-Commerce Site",
    image: project1,
    description: "An interactive e-commerce site with product management, cart, and authentication.",
    technologies: ["React", "CSS"],
    liveLink: "https://shoper-ecommerce-app.netlify.app",
    githubLink: "https://github.com/tejas249/Shoper",
  },
];


export const CONTACT = {
  address: "Pune, India",
  phoneNo: "+91 9022195136 ",
  email: "tejaskamble0208@gmail.com",
};
