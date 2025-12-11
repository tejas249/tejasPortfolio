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
  {
    title: "Dark SAS Landing Page",
    image: project9,
    description: "Dark theme SAS Landing page",
    technologies: [ "NextJS","TailwindCSS"],
    liveLink: "https://sasdark.vercel.app",
    githubLink: "https://github.com/tejas249/darks",
  },
  {
    title: "Reevio - Video Editing Agency",
    image: project8,
    description: "A modern agency website built with Next.js, MongoDB, and ShadCN for a sleek video editing experience.",
    technologies: ["React", "NextJS", "MongoDB", "ShadCN", "Tailarc", "TweakCN", "Aceternity UI"],
    liveLink: "https://reevio.netlify.app",
    githubLink: "https://github.com/tejas249/reevio",
  },
  {
    title: "AI Fusion - Multi Model Chat",
    image: project7,
    description: "An AI chat platform with Clerk auth, Firebase backend, and multi-model integration like ChatGPT & Gemini.",
    technologies: ["React", "NextJS", "Clerk", "ShadCN", "Firebase"],
    liveLink: "https://ai-fusion-lab-nine.vercel.app",
    githubLink: "https://github.com/tejas249/ai-fusion-lab",
  },
  {
    title: "InsiderJobs - Job Portal",
    image: project6,
    description: "A MERN-based job portal with user/admin panels, Clerk auth, and responsive Tailwind UI.",
    technologies: ["React", "NodeJS", "MongoDB", "Express", "Tailwind", "Clerk"],
    liveLink: "https://insider-jobs-full-stack-client.vercel.app",
    githubLink: "https://github.com/tejas249/InsiderJobs",
  },
  {
    title: "AuthSystem - MERN Auth App",
    image: project5,
    description: "A secure authentication system with signup, OTP, and password recovery features.",
    technologies: ["React", "NodeJS", "MongoDB", "Express", "Tailwind"],
    liveLink: "https://frontend-cj6x.onrender.com/",
    githubLink: "https://github.com/tejas249/AuthSystem",
  },
  {
    title: "Kodebase - Multi-code IDE",
    image: project4,
    description: "A full-stack IDE supporting multiple languages and project management using MERN.",
    technologies: ["React", "MongoDB", "Express", "Node"],
    liveLink: "",
    githubLink: "https://github.com/tejas249/kodebase",
  },
  {
    title: "Tomato - Food Delivery App",
    image: project2,
    description: "A responsive food delivery web app built with React and CSS for smooth user experience.",
    technologies: ["React", "CSS"],
    liveLink: "https://tomato-food-del.netlify.app",
    githubLink: "https://github.com/tejas249/Tomato",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A personal portfolio built with React and Tailwind showcasing skills and projects.",
    technologies: ["React", "Tailwind"],
    liveLink: "",
    githubLink: "https://github.com/tejas249/tejasPortfolio",
  },
  {
    title: "Shoper - E-Commerce Site",
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
