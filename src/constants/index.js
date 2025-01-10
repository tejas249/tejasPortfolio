import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Welcome to my portfolio website! I'm a Final Year Undergraduate and aspiring Full-Stack Developer (MERN), passionate about building dynamic web applications with seamless user experiences. I strive to create innovative, scalable solutions by combining creativity and efficient technology.`;

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
    title: "Shoper: E-Commerce Website",
    image: project1,
    description:
      "Developed E-Commerce website using React, featuring a responsive and interactive interface with distinct sections for men's, women's, and kids' clothing. The application includes secure authentication, dynamic product management, and streamlined cart functionality for an enhanced shopping experience.",
    technologies: ["React","CSS"],
    liveLink:"https://shoper-ecommerce-app.netlify.app",
    githubLink:"https://github.com/tejas249/Shoper"
  },
  {
    title: "Tomato: Food Delivery Website",
    image: project2,
    description:
      "Developed a responsive food delivery website, Tomato, using React and CSS, featuring intuitive navigation and seamless item management. Enhanced user experience with categorized browsing and secure login/signup functionality.",
    technologies: ["React","CSS"],
    liveLink:"https://tomato-food-del.netlify.app",
    githubLink:"https://github.com/tejas249/Tomato"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "Tailwind"],
    liveLink:"",
    githubLink:"https://github.com/tejas249/tejasPortfolio"
  },
];

export const CONTACT = {
  address: "Pune, India",
  phoneNo: "+91 9022195136 ",
  email: "tejaskamble0208@gmail.com",
};
