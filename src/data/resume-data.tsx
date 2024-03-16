import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "KLDV Prasad",
  initials: "KLDVP",
  location: "Hyderabad, India, IST",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  about:
    "Senior Software Engineer",
  summary:`
  I'm a Software Engineer with over 5 years of experience developing, testing, and deploying scalable web applications. 
  I have a penchant to learn and work with the latest technologies.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/24998621",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "prasadkodali786@gmail.com",
    tel: "+917330668308",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kldvp",
        icon: GitHubIcon,
        target: '_blank',
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kldvprasad/",
        icon: LinkedInIcon,
        target: '_blank'
      },
      {
        name: "X",
        url: "https://twitter.com/KldvP",
        icon: XIcon,
        target: '_blank'
      },
    ],
  },
  education: [
    {
      school: "Rajiv Gandhi University of Knowledge Technologies, IIIT - Nuzvid",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2014",
      end: "2018",
    },
    {
      school: "Rajiv Gandhi University of Knowledge Technologies, IIIT - Nuzvid",
      degree: "Pre University Course",
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
      I'm working as a Backend Developer for an HRM tool, I utilized Node.js and Loopback 3 to develop core tasks and REST APIs. 
      My contributions included implementing i18n translations, MongoDB, MongoDB Atlas search support for filters, workflows, redis background jobs, data export, and localized date formatting. 
      I also enhanced existing features, fixed bugs, and ensured code quality through unit testing with Jest and e2e testing with Ghost Inspector.
      `,
      techStack: ["Node.js", "Loopback 3", "MongoDB", "Redis", "Elastic Search", "MongoDB Atlas Search", "Jest", "Ghost Inspector"],
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
    "pm2 (process manager)"
  ],
  projects: [],
} as const;
