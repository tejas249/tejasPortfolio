import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp"
import project5 from "../assets/projects/project5.webp"
import project6 from "../assets/projects/project6.webp"
import project7 from '../assets/projects/project7.webp'
import project8 from '../assets/projects/project8.webp'
import project9 from '../assets/projects/project9.webp'
import launchlens from '../assets/projects/launchlens.webp'
import visitzeeMarketing from '../assets/projects/visitzee-marketing.jpg'
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
// The one product the portfolio is built around. Facts here mirror the Visitzee repo and the resume.
export const VISITZEE = {
  title: "Visitzee",
  tagline: "A complete SaaS booking platform for local businesses",
  role: "Sep 2026 to present",
  pitch: "Salons, clinics, trainers and studios in India and the US sign up, pick what they do, and get their own booking website, live in about two minutes. Customers book any hour, owners run the day from an installable app, and Visitzee staff manage every business from a secured admin console. Designed, built and shipped end to end.",
  caseStudy: {
    problem: {
      title: "Booking ran on phone calls and WhatsApp",
      body: "Local salons, clinics, trainers and studios had no real website, just a social bio link. Appointments lived in a phone book or a chat thread, there was no shared calendar, and double-booking was a matter of when, not if.",
    },
    approach: {
      title: "A live booking site, built so it can't double-book",
      body: "A business signs up and gets its own site on its own subdomain in about two minutes. A Postgres exclusion constraint makes a double-booking structurally impossible, not just unlikely. WhatsApp and email keep customers and owners in sync, and a two-factor admin console keeps every business's data isolated.",
    },
  },
  links: [
    { label: "visitzee.in", href: "https://visitzee.in" },
    { label: "Try the owner demo", href: "https://app.visitzee.in/demo" },
    { label: "Live booking page", href: "https://glowstudio.visitzee.in" },
  ],
  stats: [
    { value: "4", label: "apps" },
    { value: "900+", label: "automated tests" },
    { value: "33", label: "database models" },
    { value: "149", label: "commits in 5 weeks" },
    { value: "2", label: "countries: India, US" },
  ],
  gallery: [
    {
      key: "marketing",
      label: "Marketing site",
      kind: "desktop",
      screens: [
        { src: visitzeeMarketing, title: "visitzee.in", body: "The public marketing site: a business types its name, picks what it does and its website is live." },
      ],
    },
    {
      key: "owner",
      label: "Owner app",
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
        { src: visitzeeCustTop, title: "A booking page that's yours", body: "The business name, address and a Book now button, on its own address: name.visitzee.in." },
        { src: visitzeeCustServices, title: "Pick a service", body: "The menu with prices and durations, so there are no questions before the appointment." },
        { src: visitzeeCustTime, title: "Choose a time", body: "Only real, open times are shown. Anything already booked simply isn't there." },
        { src: visitzeeCustDetails, title: "Just a name and a number", body: "No account, no app, no password. A customer can book in under a minute." },
        { src: visitzeeCustDone, title: "Confirmed in seconds", body: "A private link to view or cancel, directions and a calendar file to save." },
      ],
    },
  ],
  apps: [
    { name: "Marketing site", host: "visitzee.in", href: "https://visitzee.in", icon: "globe", points: ["Pages by business type & country", "Pricing, FAQ, live demo", "SEO, OG images, sitemap"] },
    { name: "Customer booking page", host: "name.visitzee.in", href: "https://glowstudio.visitzee.in", icon: "calendar", points: ["Own subdomain per business", "Services, team, hours, map", "Book, reschedule, cancel via link"] },
    { name: "Owner app", host: "app.visitzee.in", href: "https://app.visitzee.in/demo", icon: "smartphone", points: ["Installable PWA, push alerts", "Calendar, walk-ins, waitlist", "Staff logins, customers, reports"] },
    { name: "Admin console", host: "admin.visitzee.in", href: "https://admin.visitzee.in", icon: "shield", points: ["Two-factor sign-in", "Onboard & manage businesses", "Roles, step-up auth, audit log"] },
  ],
  features: [
    { icon: "layers", title: "Multi-tenant SaaS", body: "Every business gets its own site the moment it signs up, routed by host name with wildcard DNS. Tenant isolation is enforced in three layers and tested." },
    { icon: "card", title: "Razorpay payments", body: "Pro plan checkout verified by HMAC signatures and idempotent webhooks, so a plan is extended exactly once. UPI deposits with QR codes for bookings." },
    { icon: "message", title: "WhatsApp notifications", body: "Meta's WhatsApp Cloud API with approved templates: confirmations, reminders and changes for customers, instant alerts for owners." },
    { icon: "mail", title: "Email integration", body: "Transactional email through Resend: confirmations with calendar files, day-before reminders, invites and password reset." },
    { icon: "shield", title: "Two-factor admin access", body: "TOTP two-factor sign-in with recovery codes, role-based permissions, step-up checks for destructive actions and an append-only audit log." },
    { icon: "lock", title: "Encryption and privacy", body: "Customer names, phones, emails and notes are AES-256-GCM encrypted before they reach Postgres. Consent, export, erasure and retention for India's DPDP Act." },
    { icon: "calendar", title: "No double bookings", body: "Guaranteed by a Postgres exclusion constraint, so two people booking the same slot at the same moment can't both win." },
    { icon: "server", title: "Backend and data", body: "Next.js Server Actions and API routes, PostgreSQL on Neon with Prisma: 33 models, 30 migrations, scheduled jobs for reminders and retention." },
    { icon: "git", title: "DevOps and DNS", body: "Custom domain and wildcard DNS on Vercel. GitHub Actions CI, migrations before every deploy, post-deploy smoke tests, uptime checks every 10 minutes and nightly backups." },
    { icon: "check", title: "Tested and hardened", body: "900+ automated tests (unit, real-database and Playwright end-to-end), CSP and HSTS headers, bot checks, rate limiting and Sentry error tracking." },
  ],
  stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL (Neon)", "Prisma", "Tailwind CSS", "Razorpay", "WhatsApp Cloud API", "Resend", "Web Push", "Vercel", "GitHub Actions", "Vitest", "Playwright", "Sentry"],
};

// Hidden from the portfolio for now (not rendered anywhere). Move an entry up into PROJECTS to show it again.
export const HIDDEN_PROJECTS = [
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
