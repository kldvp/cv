// import {
//   AmbitLogo,
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ExternalLinkIcon, ExternalLink, Link, FileText } from "lucide-react";

export const RESUME_DATA = {
  name: "KLDV Prasad",
  initials: "KLDVP",
  location: "Hyderabad, India, IST",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  about:
    "Senior Software Engineer",
  summary:`
  Senior Software Engineer with 6+ years of experience in developing, testing, and deploying scalable web applications. 
  I have a penchant to learn and work with the latest technologies.`,
  highlights: [
    'Worked on JavaScript technologies like Node.js and Vue.js to develop Non-blocking I/O web apps.',
    'Designed and implemented RESTful APIs for web applications.',
    `Utilized Redis for caching and creating background jobs. Contributed to npm package named
    red-bull responsible for monitoring the redis background jobs.`,
    `Added internationalization (i18n) support to ensure a seamless experience for a global audience.`,
    `Developed logic for building MongoDB and Atlas search queries for all application filter conditions.`,
    `Developed logic for Generative AI Chatbot with retrieval-augmented generation (RAG) using
    MongoDB Atlas Vector Search and OpenAI LLM models.`
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/24998621",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "prasadkodali786@gmail.com",
    tel: "+917330668308",
    resumeLink: "https://drive.google.com/file/d/1DfaSEgjmVbRizU5UJheAyl8z5OrwkD_5/view?usp=sharing",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kldvp",
        icon: GitHubIcon,
        hover: 'Github',
        target: '_blank',
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kldvprasad/",
        icon: LinkedInIcon,
        hover: 'LinkedIn',
        target: '_blank'
      },
      {
        name: "X",
        url: "https://twitter.com/KldvP",
        icon: XIcon,
        hover: 'twitter',
        target: '_blank'
      },
      {
        name: "LinkToResume",
        url: "https://drive.google.com/file/d/1EyjZfqZsGPHu8kyrl2JAM9B3X9JVtkXV/view?usp=sharing",
        icon: FileText,
        hover: 'CV',
        target: '_blank',
      }
    ],
  },
  education: [
    {
      school: "Rajiv Gandhi University of Knowledge Technologies, IIIT - Nuzvid",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      grade: '8.0 GPA',
      start: "2014",
      end: "2018",
    },
    {
      school: "Rajiv Gandhi University of Knowledge Technologies, IIIT - Nuzvid",
      degree: "Pre University Course",
      grade: '8.0 GPA',
      start: "2012",
      end: "2014",
    }
  ],
  work: [
    {
      company: "Applaud",
      link: "https://www.applaudhr.com/",
      badges: ["Hybrid"],
      title: "Senior Software Engineer",
      start: "2019",
      end: "2024",
      experiencePeriod: "December, 2019 - Current",
      description: `
      I'm working as a Fullstack Developer for an HRM tool, I utilized Node.js, Loopback and Vue.js to develop core features and REST APIs. 
      My contributions included Generative AI chatbot, i18n translations, MongoDB and MongoDB Atlas search support for filters, workflows, redis background jobs, data export, and localized date formatting. 
      I also enhanced existing features, fixed bugs, and ensured code quality through unit testing with Jest and e2e testing with Ghost Inspector.
      `,
      techStack: ["Node.js", "Loopback 3", "Vue.js", "MongoDB", "Redis", "Elastic Search", "MongoDB Atlas Search", "Jest", "Ghost Inspector"],
    },
    {
      company: "Way2Online",
      link: "https://www.linkedin.com/company/theway2online/",
      badges: [],
      title: "MEAN stack developer → Product Engineer",
      start: "2018",
      end: "2019",
      experiencePeriod: "August, 2018 - November, 2019",
      techStack: ["Node.js", "Express.js", "MongoDB", "MySQL", "Spring MVC"],
      description:
        "I worked on Way2Sms product, My work is mainly focused on implementing core backend development tasks using Node.js, developed REST APIs, Automated SMS pushing and receiving of Delivery Reports (DLR's) using SMPP specification, Integrated third-party APIs for Voice SMS and targeted users based on their page visits. Provided Business, Promote and API service for Way2sms using the Spring MVC framework.",
    },
    {
      company: "Way2Online",
      link: "https://www.linkedin.com/company/theway2online/",
      badges: [],
      title: "MEAN stack developer",
      start: "2018",
      end: "2019",
      experiencePeriod: "January, 2018 - July, 2018",
      techStack: ["Node.js", "Angular", "Express.js", "MongoDB"],
      description:
        "I audited and organized large amounts of unstructured data into categories based on factors like age, gender, city, and interests. I implemented an Angular-based admin panel to display data, statistics, and counts. Additionally, I provided categorized data to existing products, such as Way2Sms and 160by2, to enhance their SMS services.",
    }
  ],
  skills: [
    "JavaScript",
    "Node.js",
    "Express",
    "Loopback",
    "HTML",
    "Vue.js",
    "React.js",
    "Redis",
    "ElasticSearch",
    "MongoDB",
    "MongoDB Atlas Search",
    "MongoDB Vector Search",
    "MySQL",
    "Jest (unit testing)",
    "Ghost inspector (e2e testing)",
    "Spring MVC",
    "pm2 (process manager)",
    "AWS",
  ],
  projects: [],
} as const;
