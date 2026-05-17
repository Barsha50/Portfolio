export const profile = {
  name: "Barsha Dutta",
  role: "Software Engineer",
  location: "Jodhpur, India",
  email: "barshadutta834@gmail.com",
  phone: "9330107630",
  socials: {
    github: "#",
    linkedin: "https://linkedin.com/in/barsha-dutta",
    twitter: "#",
    dribbble: "#",
  },
  bio:
    "I'm a software engineer skilled in full-stack development, RESTful API design and database management. I focus on writing clean, scalable code and delivering high-performance web applications — spanning React, .NET Core and MongoDB.",
  highlights: [
    "B.Tech CSE · CGPA 8.94",
    "Full-stack: React + .NET + MongoDB",
    "Serving 1M+ users at Capsitech",
  ],
};

export const experience = [
  {
    company: "Capsitech",
    role: "Software Engineer",
    period: "June 2025 — Present",
    location: "Jodhpur, India",
    summary:
      "Collaborating within the CRM Tax & Accounts team on Acting Office, a UK-based accounting solution, to engineer real-time billing systems and actionable financial insight modules serving 1M+ users.",
    projects: [
      {
        name: "P&L Variance Calculation Engine",
        desc: "Dynamic multi-journal import with year-wise Trial Balance variance analysis and individual P&L computation per journal entry — boosted client engagement by 70% through real-time journal-level variance visibility.",
        tech: ["ReactJS", ".NET Core", "MongoDB", "SQL Server"],
      },
      {
        name: "Customised Income Statement",
        desc: "Tailored account headings for trading, manufacturing, service and retail business types, ensuring financial data is accurately categorised to reflect each company's true operational reality.",
        tech: ["ReactJS", ".NET Core", "MongoDB"],
      },
      {
        name: "Review Request Mechanism",
        desc: "Empowered clients to directly edit, update or append Trial Balance entries upon invoking a review — enabling real-time identification of financial discrepancies and accelerating the audit cycle.",
        tech: ["ReactJS", "MongoDB", ".NET Core"],
      },
      {
        name: "Auditors Report Management System",
        desc: " Built an Auditors Report Management System using ReactJS, .NET, and MongoDB to automate auditor configuration, company onboarding, and audit workflow management.",
        tech: ["ReactJS", ".NET Core", "MongoDB"],
      },
    ],
  },
];

export const projects = [
  {
    name: "Hate Speech Detection",
    category: "Machine Learning",
    desc: "Hate speech detection system using Python, ML and NLP techniques. Preprocessing via tokenization and stopword removal to build a structured, model-ready dataset.",
    highlights: "92%+ classification accuracy across Logistic Regression and Naive Bayes classifiers, benchmarked on precision, recall and F1-score.",
    tech: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
    github: "#",
    live: null,
    featured: true,
  },
  {
    name: "CRM Tax & Accounts Platform",
    category: "Full Stack",
    desc: "UK-based accounting solution serving 1M+ users. Engineered real-time billing modules, P&L variance engines and automated email triggers within an Agile team.",
    highlights: "Boosted client engagement by 70% through real-time journal-level variance visibility.",
    tech: ["ReactJS", ".NET Core", "MongoDB", "SQL Server", "Azure"],
    github: null,
    live: null,
    featured: true,
  },
  {
    name: "Portfolio Website",
    category: "Frontend",
    desc: "Personal portfolio built with React, Tailwind CSS and Framer Motion. Features smooth animations, a dark aesthetic, and a contact form via Web3Forms.",
    highlights: "Pixel-perfect design with 95+ Lighthouse score, fully responsive and accessible.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    name: "Expense Tracker",
    category: "Full Stack",
    desc: "Scalable API gateway built with ASP.NET Core, implementing JWT authentication, rate limiting, and request validation middleware for enterprise-level applications.",
    highlights: "Reduced API response times by 40% through optimised query execution and caching layers.",
    tech: [".NET Core", "TypeScript", "Javascript", "Tailwind CSS"],
    github: "#",
    live: null,
    featured: false,
  },
];

export const education = {
  institution: "Future Institute of Engineering and Management",
  degree: "B.Tech in Computer Science and Engineering",
  period: "Sept 2021 — June 2025",
  cgpa: "8.94",
  coursework: ["Operating Systems", "DBMS", "Machine Learning", "Software Engineering"],
};

export const skills = [
  { name: "ReactJS", level: 90, category: "Frontend" },
  { name: "TailwindCSS", level: 95, category: "Frontend" },
  { name: "Fluent UI / Bootstrap", level: 82, category: "Frontend" },
  { name: "JavaScript / TypeScript", level: 85, category: "Language" },
  { name: "Java", level: 70, category: "Language" },
  { name: "C#", level: 75, category: "Language" },
  { name: ".NET Core / ASP.NET", level: 60, category: "Backend" },
  { name: "ExpressJS", level: 70, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "SQL Server", level: 85, category: "Database" },
  { name: "Azure / Git / Postman", level: 85, category: "Tooling" },
  { name: "Agile / OOP", level: 65, category: "Methodolgies"},
];

export const stack = [
  "React",
  "Tailwind",
  ".NET Core",
  "MongoDB",
  "TypeScript",
  "Azure",
  "SQL",
  "ExpressJS",
  "Fluent UI",
  "REST",
];
