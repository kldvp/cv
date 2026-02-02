// import {
//   AmbitLogo,
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { FileText } from "lucide-react";

export const RESUME_DATA = {
  name: "KLDV Prasad",
  initials: "KLDVP",
  location: "Hyderabad, India, IST",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  about:
    "Senior Software Engineer",
  summary: `
Senior Software Engineer with 7+ years of experience in developing, testing, and deploying scalable web applications.
I have a penchant for learning and working with the latest technologies.`,
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
  personalWebsiteUrl: "https://github.com/kldvp",
  contact: {
    email: "prasadkodali786@gmail.com",
    tel: "+917330668308",
    resumeLink: "https://drive.google.com/file/d/1DfaSEgjmVbRizU5UJheAyl8z5OrwkD_5/view?usp=sharing",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kldvp",
        icon: GitHubIcon,
        hover: "GitHub",
        target: '_blank',
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kldvprasad/",
        icon: LinkedInIcon,
        hover: "LinkedIn",
        target: '_blank'
      },
      {
        name: "X",
        url: "https://twitter.com/KldvP",
        icon: XIcon,
        hover: "Twitter",
        target: '_blank'
      },
      {
        name: "LinkToResume",
        url: "https://drive.google.com/file/d/1DfaSEgjmVbRizU5UJheAyl8z5OrwkD_5/view?usp=sharing",
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
      company: "ServiceNow",
      link: "https://www.servicenow.com/",
      badges: [],
      title: "Senior Software Engineer",
      start: "2024",
      end: "Present",
      experiencePeriod: "October, 2024 - Current",
      description:
        "I'm working as a Senior Software Engineer for Legal and Contract Operations, owning a core Java-based document processing service used in real customer workflows. I built and deployed it on Docker and Kubernetes using Helm, solving non-trivial problems around document manipulation, version comparison, and accessibility to deliver a reliable, production-ready system.",
      techStack: ["Java", "JavaScript", "Jenkins", "Docker", "Kubernetes", "Helm charts"],
    },
    {
      company: "Applaud",
      link: "https://www.applaudhr.com/",
      badges: [],
      title: "Software Engineer → Senior Software Engineer → Lead Engineer",
      start: "2019",
      end: "2024",
      experiencePeriod: "December, 2019 - September, 2024",
      description:
        "I built and shipped core features for an HRM product using Node.js, LoopBack, and Vue.js. I implemented a Generative AI chatbot, advanced search with MongoDB Atlas, background jobs with Redis, workflows, data export, and full i18n and localization, and improved reliability through unit and end-to-end testing.",
      techStack: ["Node.js", "LoopBack 3", "Vue.js", "MongoDB", "Redis", "Elasticsearch", "MongoDB Atlas Search", "Jest", "Ghost Inspector"],
    },
    {
      company: "Way2Online",
      link: "https://www.way2online.com/",
      badges: [],
      title: "Product Engineer",
      start: "2018",
      end: "2019",
      experiencePeriod: "January, 2018 - November, 2019",
      techStack: ["Node.js", "Express.js", "MongoDB", "MySQL", "Angular", "Spring MVC", "SMPP"],
      description:
        "I built and ran core backend systems for Way2Sms, developing REST APIs and SMS delivery pipelines using Node.js and SMPP to automate message sending and delivery reports. I integrated voice SMS and user targeting systems, audited and structured large-scale unstructured user data by demographics and behavior, and built an internal Angular-based admin panel to power targeted messaging across Way2Sms and 160by2."
    }    
  ],
  skills: [
    "JavaScript",
    "Node.js",
    "Jenkins",
    "Java",
    "Docker",
    "Kubernetes",
    "Helm",
    "Express",
    "LoopBack",
    "HTML",
    "Vue.js",
    "React.js",
    "Redis",
    "Elasticsearch",
    "MongoDB",
    "MongoDB Atlas Search",
    "MongoDB Atlas Vector Search",
    "MySQL",
    "Jest (unit testing)",
    "Ghost Inspector (e2e testing)",
    "Spring MVC",
    "pm2 (process manager)",
    "AWS",
  ],
  projects: [],
} as const;
