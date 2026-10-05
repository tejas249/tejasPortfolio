import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png"
import project5 from "../assets/projects/project5.png"
import project6 from "../assets/projects/project6.png"
import project7 from '../assets/projects/project7.png'
import project8 from '../assets/projects/project8.png'
import project9 from '../assets/projects/project9.png'
import launchlens from '../assets/projects/launchlens.png'
import visitzeeOverview from '../assets/projects/visitzee-owner-overview.webp'
import visitzeeCalendar from '../assets/projects/visitzee-owner-calendar.webp'
import visitzeeBooking from '../assets/projects/visitzee-owner-booking.webp'
import visitzeeServices from '../assets/projects/visitzee-owner-services.webp'
import visitzeeTeam from '../assets/projects/visitzee-owner-team.webp'
import visitzeeCustomers from '../assets/projects/visitzee-owner-customers.webp'
import visitzeeSettings from '../assets/projects/visitzee-owner-settings.webp'
import visitzeeCustTop from '../assets/projects/visitzee-customer-top.webp'
import visitzeeCustServices from '../assets/projects/visitzee-customer-services.webp'
import visitzeeCustTime from '../assets/projects/visitzee-customer-time.webp'
import visitzeeCustDetails from '../assets/projects/visitzee-customer-details.webp'
import visitzeeCustDone from '../assets/projects/visitzee-customer-done.webp'


export const HERO_CONTENT = `Full Stack Engineer at Katonic AI. I build production web apps end to end with Next.js, TypeScript, Node.js and PostgreSQL, from booking platforms to AI-powered workflows.`;

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
  // Visible on the portfolio, in this order: flagship first, then two supporting projects.
  {
    title: "Visitzee",
    subtitle: "Online Booking Platform for Local Businesses",
    image: visitzeeOverview,
    gallery: [
      {
        key: "owner",
        label: "Owner dashboard",
        kind: "desktop",
        screens: [
          { src: visitzeeOverview, title: "Your day, at a glance", body: "Today's bookings, expected revenue and what's coming next, the moment the owner opens the app." },
          { src: visitzeeCalendar, title: "One calendar for the whole team", body: "Everyone gets their own column. Days off and closed hours are shaded, so nobody is double-booked." },
          { src: visitzeeBooking, title: "Handle a booking in one tap", body: "Mark it complete, record a no-show or cancel. Send the customer a private link to view or cancel it themselves." },
          { src: visitzeeServices, title: "Your menu, your prices", body: "Durations, \"from\" prices and short descriptions. Reorder or hide a service any time." },
          { src: visitzeeTeam, title: "Your team and their hours", body: "Choose who does what, and when. Add time off and the calendar blocks it out." },
          { src: visitzeeCustomers, title: "Know your regulars", body: "Every customer's visits, spend and private notes in one place, a tap away from a call or WhatsApp." },
          { src: visitzeeSettings, title: "Make it yours", body: "Logo, colours, address and booking rules, with a live preview of the page customers see." },
        ],
      },
      {
        key: "customer",
        label: "Customer booking (mobile)",
        kind: "phone",
        screens: [
          { src: visitzeeCustTop, title: "A booking page that's yours", body: "The business name, address and a Book now button. One link for an Instagram bio or WhatsApp status." },
          { src: visitzeeCustServices, title: "Pick a service", body: "The menu with prices and durations, so there are no questions before the appointment." },
          { src: visitzeeCustTime, title: "Choose a time", body: "Only real, open times are shown. Anything already booked simply isn't there." },
          { src: visitzeeCustDetails, title: "Just a name and a number", body: "No account, no app, no password. A customer can book in under a minute." },
          { src: visitzeeCustDone, title: "Confirmed in seconds", body: "A private link to view or cancel, directions and a calendar file to save." },
        ],
      },
    ],
    featured: true,
    description: "Built and launched end to end, solo: a booking platform for salons, clinics, trainers and similar businesses in India and the US. Each business gets its own web address, photos, team, hours and map.",
    highlights: [
      { label: "Effortless for customers", text: "pick a service, person and time, then get an email confirmation with a calendar file, a day-before reminder and a private link to cancel or reschedule. No double bookings, even if two people book at once." },
      { label: "Powerful for owners", text: "day calendar, walk-in bookings, repeating appointments, holidays, staff logins (each sees only their own bookings), customer notes, CSV import, and revenue and busy-time reports." },
      { label: "Fills the calendar", text: "a waitlist that alerts people when a slot opens, customer reviews the owner approves, instant phone notifications for new bookings and one-tap WhatsApp reminders." },
      { label: "Secure by design", text: "customer data is encrypted and exportable or deletable (DPDP Act); bot-protected sign-in; Razorpay payments." },
      { label: "Production quality", text: "650+ automated tests and automatic deploys via GitHub Actions and Vercel, verified live." },
    ],
    stats: [
      { value: "650+", label: "automated tests" },
      { value: "2", label: "markets: India & US" },
      { value: "Solo", label: "built end to end" },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Razorpay", "Web Push", "Vitest", "GitHub Actions", "Vercel"],
    liveLink: "https://visitzee.in",
    links: [
      { label: "Website", href: "https://visitzee.in" },
      { label: "Owner dashboard (try demo)", href: "https://app.visitzee.in/demo" },
      { label: "Customer booking page", href: "https://glowstudio.visitzee.in" },
    ],
    githubLink: "",
  },
  {
    title: "LaunchLens AI",
    subtitle: "Startup Idea Validation Platform",
    image: launchlens,
    description: "Turns an idea into a plan: enter an idea, get market research, competitor analysis and an MVP roadmap. Uses AI APIs to produce structured reports with a revenue model, risk analysis and go-to-market strategy.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs"],
    liveLink: "https://launchlensai.vercel.app/",
    githubLink: "https://github.com/tejas249/Launchlens",
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
];

// Hidden from the portfolio for now (not rendered anywhere). Move an entry up into PROJECTS to show it again.
export const HIDDEN_PROJECTS = [
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
