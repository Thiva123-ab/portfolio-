export const profile = {
  name: "Thivanka Tharuka",
  firstName: "Thivanka",
  initials: "TT",
  title:
    "Computer Science Undergraduate | Aspiring Software Engineer | Full-Stack Developer",
  headline: "Building Intelligent Solutions Through Code.",
  location: "Polegoda, Sri Lanka",
  university: "NSBM Green University",
  degree: "BSc (Hons) Computer Science",
  github: "https://github.com/Thiva123-ab",
  linkedin: "https://www.linkedin.com/in/thivanka-tharuka/",
  avatar: "https://avatars.githubusercontent.com/u/194503135?v=4",
  /**
   * Public email shown on the site and used for the mailto fallback.
   * Leave this empty until you want an address published.
   */
  email: "",
  /**
   * Put a CV in /public (for example /public/cv.pdf) and set this to "/cv.pdf".
   * The download button stays hidden while this is empty.
   */
  cvUrl: "",
  tagline: "Computer Science undergraduate building practical, full-stack software.",
};

export const navItems = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#research", id: "research", label: "Research" },
  { href: "/#education", id: "education", label: "Education" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;

export type SkillGroup = {
  title: string;
  source: string;
  items: string[];
};

export const establishedSkills: SkillGroup[] = [
  {
    title: "Programming languages",
    source: "Primary languages in public repositories.",
    items: ["Java", "JavaScript", "TypeScript", "Dart", "PHP"],
  },
  {
    title: "Web and backend",
    source: "Used in Nova Bank, LectureLens, and the Spring Boot projects.",
    items: [
      "HTML",
      "CSS",
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Mobile",
    source: "FocusFlow is a Flutter application in the public repository.",
    items: ["Flutter", "Dart"],
  },
  {
    title: "Databases",
    source: "MySQL in the Java projects, PostgreSQL through Supabase, SQLite in FocusFlow.",
    items: ["MySQL", "SQL", "PostgreSQL", "Supabase", "SQLite"],
  },
  {
    title: "Tools",
    source: "GitHub-hosted work, Maven builds, and a Dockerfile in LectureLens.",
    items: ["Git", "GitHub", "Maven", "Docker"],
  },
  {
    title: "Applied in projects",
    source: "Libraries and services named in the project READMEs and source.",
    items: ["MediaPipe Pose", "Three.js", "TanStack Start", "WebSockets"],
  },
];

export const developingInterests = [
  "Cloud computing",
  "AWS, at an introductory level",
  "Kubernetes",
  "FinOps and cloud cost management",
  "Cybersecurity",
  "Privacy and data protection",
  "Zero-knowledge proofs",
  "Software architecture",
  "Artificial intelligence beyond the features already built",
];

export type ProjectCategory = "web" | "backend" | "ai" | "other";

export type Project = {
  name: string;
  summary: string;
  features: string[];
  stack: string[];
  contribution: string;
  github: string;
  categories: ProjectCategory[];
  mark: string;
};

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Development" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI / Machine Learning" },
  { id: "other", label: "Other" },
];

export const projects: Project[] = [
  {
    name: "Nova Bank",
    mark: "NB",
    categories: ["web", "backend"],
    github: "https://github.com/Thiva123-ab/Nova_bank-",
    summary:
      "A digital banking web application with accounts, transfers, bill payments, spending views, statements, and a role-gated admin area. Data access is modeled in Supabase with PostgreSQL.",
    features: [
      "Email and Google sign-in, password reset, and JWT checks on server functions",
      "Checking, savings, and credit accounts with transfers and bill payments",
      "Spending summaries, savings goals, and statement export",
      "Admin statistics and an audit log for users with an admin role",
    ],
    stack: [
      "TypeScript",
      "React",
      "TanStack Start",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Zod",
    ],
    contribution:
      "Public repository owned by Thivanka. The README credits him as the author. No live deployment is published.",
  },
  {
    name: "LectureLens",
    mark: "LL",
    categories: ["ai", "web"],
    github: "https://github.com/Thiva123-ab/study_buddy",
    summary:
      "A study assistant that turns uploaded notes into summaries, flashcards, quizzes, and exam-style papers, with English and Sinhala content. The repository wires an OpenAI-compatible model through server functions.",
    features: [
      "Upload a PDF, DOCX, or image, or paste notes directly",
      "Summary, flashcards, quiz, paper builder, and document chat",
      "Language toggle between English and Sinhala",
      "Accounts, saved study sets, and a Dockerfile for container builds",
    ],
    stack: [
      "TypeScript",
      "React",
      "TanStack Start",
      "Tailwind CSS",
      "Supabase",
      "Docker",
    ],
    contribution:
      "Public repository owned by Thivanka. A separate author list is not included in the README, and no live demo is published.",
  },
  {
    name: "FocusFlow",
    mark: "FF",
    categories: ["other"],
    github: "https://github.com/Thiva123-ab/Smart-Time-Management-MobileApp",
    summary:
      "A Flutter time-management app with a local SQLite database, focus sessions, goals, a daily planner, usage tracking through an Android platform channel, and a rule-based schedule assistant.",
    features: [
      "Dashboard, focus timer, Pomodoro engine, goals, and a time planner",
      "App-usage stats when Android usage access is granted",
      "Local schedule suggestions from open time and active goals",
      "Analytics, achievements, notifications, and PDF or data export",
    ],
    stack: ["Flutter", "Dart", "SQLite", "Provider"],
    contribution:
      "Public repository owned by Thivanka. The shipped app code is Dart. The README also describes a Kotlin design that is not the structure of the lib/ source.",
  },
  {
    name: "Motion Strike",
    mark: "MS",
    categories: ["ai", "web"],
    github: "https://github.com/Thiva123-ab/Motion-Strike",
    summary:
      "A browser combat prototype that reads body movement from a webcam and drives a 3D boxing exchange. Pose tracking, gesture detection, rendering, combat rules, and synthesized audio are split into separate modules.",
    features: [
      "MediaPipe Pose tracking from the webcam, with keyboard controls for testing",
      "Gesture detection for jabs, crosses, kicks, blocks, and slips",
      "Three.js scene, fighter rigs, and a ringside camera",
      "Web Audio punches, blocks, and impact effects without external sound files",
    ],
    stack: ["JavaScript", "MediaPipe Pose", "Three.js", "Web Audio API", "Vite"],
    contribution:
      "Public repository owned by Thivanka. No hosted demo is linked from the repository.",
  },
  {
    name: "Pharmacy Stock and Delivery",
    mark: "RX",
    categories: ["backend", "web"],
    github: "https://github.com/Thiva123-ab/Pharmacy-stock-system",
    summary:
      "A full-stack pharmacy system for inventory, prescriptions, orders, and deliveries. It was built as a Spring Boot course assignment and uses role-based access for customers, pharmacists, delivery staff, and admins.",
    features: [
      "JWT authentication with Spring Security and four user roles",
      "Medicine inventory, order flow, and delivery status updates",
      "Prescription image uploads",
      "WebSocket chat and notifications, plus an audit log",
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "WebSocket",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    contribution:
      "Course assignment published in Thivanka's GitHub and listed on his LinkedIn projects. Team size is not stated in the README.",
  },
  {
    name: "Flood Relief Coordinator",
    mark: "SL",
    categories: ["web", "backend"],
    github:
      "https://github.com/Thiva123-ab/Sri-Lanka-Flood-Relief-Coordinator-Live-Map",
    summary:
      "A Spring Boot application for coordinating flood-relief requests and showing affected areas on a live map. Thivanka described it publicly as a system for relief coordination in Sri Lanka.",
    features: [
      "Relief request and resource coordination",
      "Live map of affected areas and relief centers",
      "REST API for web and mobile clients",
      "Chat and alert updates",
    ],
    stack: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "HTML", "CSS", "JavaScript"],
    contribution:
      "Public repository owned by Thivanka. His LinkedIn post presents it as a project he developed. No live demo is published on the repository.",
  },
];

export const researchInterests = [
  "Artificial intelligence",
  "Cloud computing",
  "Cybersecurity",
  "Privacy and data protection",
];

export const education = [
  {
    school: "NSBM Green University",
    program: "BSc (Hons) in Computer Science",
    period: "2024 – Present",
    place: "Homagama, Sri Lanka",
    detail:
      "Second-year undergraduate, as stated on the public LinkedIn profile. The expected completion year is not listed.",
    coursework: [] as string[],
    achievements: [] as string[],
  },
  {
    school: "Ananda Sastralaya National School",
    program: "Secondary education",
    period: "2017 – 2024",
    place: "Sri Lanka",
    detail:
      "Listed on the public LinkedIn profile. Subjects, grades, and exam results are not shown here.",
    coursework: [] as string[],
    achievements: [] as string[],
  },
];

export const learningNotes = [
  {
    title: "AWS Educate Introduction to Cloud 101",
    detail:
      "Training badge issued in January 2026. This is an introductory badge, not a professional AWS certification.",
    href: "https://www.credly.com/badges/c60f6f2a-5631-499e-93cf-fe904bc1e0e5",
  },
  {
    title: "SkillShare DevForge workshop",
    detail:
      "IEEE Student Branch session at NSBM on 4 June 2026. Thivanka wrote that it covered modern workflows, AI-assisted development, and DevOps and CI/CD practices.",
  },
  {
    title: "AWS Student Community Day",
    detail:
      "Attended the event at the University of Kelaniya on 25 April 2026, organized by the AWS Cloud Clubs of the University of Kelaniya and ITUM.",
  },
];

export const goals = [
  {
    title: "Software engineering",
    text: "Join a team as an intern, take a real task from issue to review, and learn how production code is designed and maintained.",
  },
  {
    title: "Full-stack development",
    text: "Keep building applications where the interface, API, and database are thought through together, not as separate exercises.",
  },
  {
    title: "AI-supported products",
    text: "Use models where they help a person study, plan, or understand information, and stay clear about what the system actually does.",
  },
  {
    title: "Cloud software",
    text: "Learn to deploy, observe, and cost a service properly, starting from the introductory cloud study already underway.",
  },
];
