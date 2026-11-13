"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "./contact/ContactUs";
import Motion from "./Motion";

/* ═════════════════════════ Content ═════════════════════════ */

const EMAIL = "mfarhanshaukatali786@gmail.com";
const PHONE = "+92 301 0017469";
const PHONE_HREF = "tel:+923010017469";
const GITHUB = "https://github.com/M-Farhan-Shaukat";
const LINKEDIN = "https://www.linkedin.com/in/m-farhanshaukat-9aa172219";
const WHATSAPP = "https://wa.me/923010017469";
const CV = "/M_Farhan_Shaukat_Resume.pdf";
const CUTOUT = "/images/farhan-cutout.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const roles = ["Laravel Developer", "MERN Stack Developer", "AI Integration Engineer"];

const heroStats = [
  { value: "5+", label: "Years experience" },
  { value: "7", label: "Products shipped" },
  { value: "Laravel & MERN", label: "Core tech stack" },
  { value: "10K+", label: "Active users served" },
];

type IconName =
  | "arrow" | "download" | "mail" | "phone" | "pin" | "github" | "linkedin" | "whatsapp" | "up"
  | "check" | "copy" | "terminal" | "layers" | "layout" | "server" | "database" | "shield"
  | "rocket" | "spark" | "cpu" | "cloud" | "code" | "users" | "quote" | "gauge" | "bulb" | "plug" | "test";

const focusAreas: { icon: IconName; label: string; title: string; text: string; tech: string }[] = [
  {
    icon: "terminal",
    label: "Architecture & systems",
    title: "Laravel Back Ends",
    text: "Structured Laravel APIs with service layers, form requests, API resources, queues and multi-tenant data isolation.",
    tech: "PHP 8 / Laravel / Eloquent / Sanctum",
  },
  {
    icon: "layers",
    label: "MERN applications",
    title: "MERN Stack Products",
    text: "Node.js and Express.js services on MongoDB, written in TypeScript with JWT auth and React.js front ends.",
    tech: "MongoDB / Express.js / React.js / Node.js",
  },
  {
    icon: "cpu",
    label: "Applied AI",
    title: "AI-Powered Features",
    text: "LLM and embeddings features in production: CV parsing, semantic job matching and automated candidate analysis.",
    tech: "LLM APIs / Embeddings / Cosine similarity",
  },
  {
    icon: "cloud",
    label: "SaaS & delivery",
    title: "Multi-tenant SaaS",
    text: "RBAC, approval workflows, background jobs, SSO and third-party integrations, shipped with Docker and CI/CD.",
    tech: "RBAC / SSO / Queues / Docker / CI/CD",
  },
];

type Job = {
  period: string;
  current?: boolean;
  mark: string;
  role: string;
  company: string;
  where: string;
  type: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

const experience: Job[] = [
  {
    period: "May 2022 — Present",
    current: true,
    mark: "SB",
    role: "Executive Software Engineer",
    company: "SeeBiz Pvt Ltd",
    where: "Lahore, Pakistan · On-site",
    type: "Full-time",
    summary:
      "Full-stack engineer across 7 SaaS products, built with Laravel and MySQL (SeeATS, Books, Inventory, Expense, QATS) and the MERN stack (SeeForce HRMS, SeeClass).",
    bullets: [
      "Built a 145-endpoint Laravel API organised into 24 modules and integrated it with React.js front ends.",
      "Shipped AI features with LLM and embeddings APIs: CV parsing, semantic job matching and candidate analysis.",
      "Improved API performance by 40% with SQL optimization and eager loading to remove N+1 queries.",
      "Automated invoice generation (10+ hours saved weekly) and set up Docker and CI/CD pipelines.",
      "Code reviews, mentoring junior developers and PHPUnit / Vitest tests in Agile sprints.",
    ],
    tech: ["Laravel", "Node.js", "Express.js", "React.js", "MySQL", "MongoDB", "Docker"],
  },
  {
    period: "Oct 2021 — Apr 2022",
    mark: "OX",
    role: "Junior Software Engineer",
    company: "OXOSOFT",
    where: "Lahore, Pakistan",
    type: "Full-time",
    summary: "Built and maintained PHP web applications following MVC architecture.",
    bullets: [
      "Developed web applications using PHP, Laravel and CodeIgniter.",
      "Built and maintained RESTful APIs and integrated them with front-end applications.",
      "Optimized MySQL queries to improve performance and response times.",
    ],
    tech: ["PHP", "Laravel", "CodeIgniter", "MySQL", "REST APIs"],
  },
  {
    period: "Mar 2021 — Sep 2021",
    mark: "EB",
    role: "Web Development Intern",
    company: "EasyBew",
    where: "Lahore, Pakistan",
    type: "Internship",
    summary: "Started professional work on dynamic PHP and JavaScript web applications.",
    bullets: [
      "Developed dynamic web applications using PHP, Laravel, JavaScript and MVC architecture.",
      "Assisted with debugging, testing and deployment of web applications.",
    ],
    tech: ["PHP", "Laravel", "JavaScript", "MVC"],
  },
];

const marquee = ["Laravel", "MongoDB", "Express.js", "React.js", "Node.js", "PHP 8", "Next.js", "TypeScript", "MySQL", "Docker", "AWS S3", "LLM APIs"];

const stackTabs: { icon: IconName; title: string; text: string; items: string[] }[] = [
  { icon: "server", title: "Backend & Systems", text: "Server-side frameworks, API design and the architecture patterns I build with.", items: ["PHP 8", "Laravel", "Node.js", "Express.js", "TypeScript", "CodeIgniter", "RESTful APIs", "Service Layer", "Repository Pattern", "MVC / OOP / SOLID"] },
  { icon: "layers", title: "Laravel Core", text: "The parts of Laravel I use every day to keep applications clean and fast.", items: ["Eloquent ORM", "Blade", "Artisan", "Middleware", "Form Requests", "API Resources", "Queues & Jobs", "Task Scheduling", "Sanctum", "Migrations & Seeders"] },
  { icon: "layout", title: "Frontend Engineering", text: "Interfaces, component libraries and responsive layouts.", items: ["React.js", "React Hooks", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"] },
  { icon: "database", title: "Databases & Storage", text: "Relational and document databases, designed and tuned for real workloads.", items: ["MySQL", "MongoDB", "Mongoose", "Redis", "AWS S3", "Query Optimization", "Database Design"] },
  { icon: "spark", title: "Integrations & AI", text: "LLMs, embeddings and the third-party services products depend on.", items: ["LLM APIs (OpenAI-compatible, Groq)", "Embeddings", "Cosine Similarity", "Stripe", "Google Calendar API", "Google OAuth", "Twilio", "Mailgun", "ZKTeco Biometrics"] },
  { icon: "rocket", title: "Testing & Deployment", text: "Testing, delivery pipelines and the tools around them.", items: ["PHPUnit", "Vitest", "Supertest", "Docker", "CI/CD", "GitHub Actions", "Linux", "Nginx", "Postman", "Git"] },
  { icon: "shield", title: "Security & Architecture", text: "Access control and the patterns behind multi-tenant SaaS.", items: ["JWT", "Single Sign-On (SSO)", "RBAC", "Multi-tenant SaaS", "Cron Jobs", "Background Jobs", "Caching", "Swagger / OpenAPI"] },
];

const orbitRings = [
  { r: 112, speed: 40, items: ["PHP", "Laravel", "MySQL", "Redis"] },
  { r: 190, speed: 56, items: ["React", "Node.js", "MongoDB", "Express", "Next.js"] },
  { r: 268, speed: 74, items: ["Docker", "AWS S3", "LLM APIs", "Stripe", "Twilio", "Vitest", "Git"] },
];

const flagship = {
  name: "SeeATS",
  url: "https://seeats.seebiz.cloud",
  image: "/images/seeATS.png",
  subtitle:
    "An AI-powered applicant tracking system: it reads every CV, scores it against the job and summarises each candidate, so recruiters can focus on the shortlist.",
  points: [
    "AI CV matching with PDF parsing, vector embeddings, cosine-similarity scoring and LLM candidate analysis.",
    "Hiring pipeline built as a state machine (screening, interviews, approval, hire, offer) with full stage history.",
    "Multi-tenant branches, custom roles, module-level permissions (RBAC) and audit logs.",
    "Careers portal, OTP candidate portal and Google Calendar scheduling with conflict detection and Twilio SMS.",
  ],
  tags: ["PHP 8.4", "Laravel 13", "MySQL", "Queues", "LLM & Embeddings", "AWS S3", "React.js"],
};

const projects = [
  { name: "SeeForce", category: "HRMS · MERN stack", tagline: "Multi-organization HR platform", image: "/images/seeForce.png", url: "https://seeforce.seebiz.cloud", description: "Attendance, shift-based attendance, leave, payroll, reporting and batch management, with ZKTeco biometric devices and distributed cron-job locking in MongoDB.", tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript"] },
  { name: "SeeClass", category: "LMS · MERN stack", tagline: "Learning management system", image: "/images/seeClass.png", url: "https://seeclass.seebiz.cloud", description: "Curriculum planning, enrollment, timetabling with clash detection, assignments and grading, with SSO into SeeForce and an automated Vitest + Supertest suite.", tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Zod"] },
  { name: "QATS", category: "Training platform", tagline: "Training & certification", image: "/images/qats.png", url: "https://qats.qalam.it", description: "Trainee registration, exam access, aptitude assessments, document submission, result recording and progress tracking with secure authentication.", tags: ["Laravel", "Next.js", "MySQL", "Bootstrap"] },
  { name: "Books", category: "Accounting", tagline: "Multi-tenant accounting", image: "/images/books.png", url: "https://books.seebiz.com", description: "Journals, general ledger, invoices, bills, payments and trial balance, with automated balance sheet and profit & loss reports.", tags: ["Laravel", "React.js", "MySQL", "Bootstrap"] },
  { name: "Inventory", category: "Operations", tagline: "Multi-warehouse inventory", image: "/images/inventory.png", url: "https://inventory.seebiz.com", description: "Products, stock transfers and order processing with real-time stock tracking, low-stock alerts and queries tuned for large datasets.", tags: ["Laravel", "React.js", "MySQL", "Bootstrap"] },
  { name: "Expense", category: "Finance", tagline: "Expense management", image: "/images/expense.png", url: "https://expense.seebiz.com", description: "Advances, trips and daily expenditures with separate admin and user panels, RBAC and approval workflows.", tags: ["Laravel", "React.js", "MySQL", "Bootstrap"] },
];

const education = {
  degree: "Associate Degree in",
  field: "Computer Science",
  school: "Superior University Lahore",
  period: "2018 — 2020 · ADPCS",
  more: [
    "Intermediate in Computer Science (ICS), Govt. Shalamar College Lahore, 2016 — 2018.",
    "Matriculation, Govt. High School Baghbanpura Lahore, 2014 — 2016.",
    "Professional growth since 2021: Laravel, MERN, AI integration and SaaS architecture in production.",
  ],
};

const testimonials = [
  { text: "Exceptional work from start to finish. The attention to detail and commitment to quality exceeded our expectations. Highly recommend for any complex web development project.", name: "Abdul Basit", role: "CEO, Sublime Traders", tag: "Client" },
  { text: "Professional, reliable, and incredibly talented. Delivered our project ahead of schedule with outstanding results. Will definitely work together again on future projects.", name: "Alexander", role: "Founder, Quantic Solutions", tag: "Client" },
  { text: "The technical expertise and creative solutions provided were exactly what we needed. The project was completed with precision and excellent communication throughout the process.", name: "Waqar Ahmad", role: "PO, Alpha Tech Solutions", tag: "Client" },
];

/* ═════════════════════════ Icons ═════════════════════════ */

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "arrow": return <svg {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>;
    case "up": return <svg {...p}><path d="M12 19V5M6 11l6-6 6 6" /></svg>;
    case "download": return <svg {...p}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>;
    case "mail": return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "phone": return <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
    case "pin": return <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "github": return <svg {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;
    case "linkedin": return <svg {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case "whatsapp": return <svg {...p}><path d="M20.88 13.46A9 9 0 0 1 7.88 20L3 21l1-4.88a9 9 0 1 1 16.88-2.66z" /><path d="M8.68 10.94 10.21 9.4 9.81 8H8s-.41 2.54 2.52 5.46S16 16 16 16v-1.81l-1.4-.4-1.54 1.53" /></svg>;
    case "check": return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>;
    case "copy": return <svg {...p}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></svg>;
    case "terminal": return <svg {...p}><path d="m5 8 4 4-4 4M12 17h7" /></svg>;
    case "layers": return <svg {...p}><path d="M12 3 3 8l9 5 9-5-9-5z" /><path d="m3 13 9 5 9-5" /></svg>;
    case "layout": return <svg {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></svg>;
    case "server": return <svg {...p}><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></svg>;
    case "database": return <svg {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>;
    case "shield": return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "rocket": return <svg {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>;
    case "spark": return <svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>;
    case "cpu": return <svg {...p}><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></svg>;
    case "cloud": return <svg {...p}><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.7 1.6A3.75 3.75 0 0 0 6.5 19z" /></svg>;
    case "code": return <svg {...p}><path d="m8 7-5 5 5 5M16 7l5 5-5 5" /></svg>;
    case "users": return <svg {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6" /></svg>;
    case "quote": return <svg {...p}><path d="M7 7h4v4c0 3-1.5 5-4 6M14 7h4v4c0 3-1.5 5-4 6" /></svg>;
    case "gauge": return <svg {...p}><path d="M12 14l4-4M3.5 18a9 9 0 1 1 17 0" /></svg>;
    case "bulb": return <svg {...p}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" /></svg>;
    case "plug": return <svg {...p}><path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5" /></svg>;
    case "test": return <svg {...p}><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" /><path d="M7 15h10" /></svg>;
  }
}

/* ═════════════════════════ Small pieces ═════════════════════════ */

function Mark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <span className={`${styles.mark} ${styles[`mark_${size}`]}`} aria-hidden="true">
      MF
    </span>
  );
}

function Eyebrow({ index, label, center = false }: { index: string; label: string; center?: boolean }) {
  return (
    <p className={`${styles.eyebrow} ${center ? styles.eyebrowCenter : ""}`}>
      <Mark size="sm" />
      <span className={styles.eyebrowIndex}>{index}</span>
      <span className={styles.eyebrowRule} />
      {label}
    </p>
  );
}

function Chips({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className={`${styles.chips} ${light ? styles.chipsLight : ""}`}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Word-by-word masked reveal (runs when an ancestor gets .revealed). */
function Split({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {text.split(" ").map((w, i, all) => (
        <Fragment key={`${w}-${i}`}>
          <span className={styles.w}>
            <span style={{ ["--i" as string]: start + i }}>{w}</span>
          </span>
          {i < all.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}

/** Two-part heading: plain words, then gold italic words. */
function SplitHeading({
  plain,
  accent,
  className,
  id,
}: {
  plain: string;
  accent: string;
  className?: string;
  id?: string;
}) {
  const n = plain.split(" ").length;
  return (
    <h2 id={id} className={`${className ?? styles.heading} ${styles.split}`} data-reveal>
      <Split text={plain} />{" "}
      <em>
        <Split text={accent} start={n} />
      </em>
    </h2>
  );
}

/** Per-letter rise for the hero name. */
function Chars({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className={styles.chars} aria-hidden="true">
      {text.split("").map((c, i) => (
        <span key={i} className={styles.charMask}>
          <span style={{ animationDelay: `calc(var(--intro) + ${delay + i * 0.045}s)` }}>{c}</span>
        </span>
      ))}
    </span>
  );
}

/* ═════════════════════════ Page ═════════════════════════ */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const progressRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLOListElement>(null);

  // Rotating role under the hero name
  useEffect(() => {
    const id = window.setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => window.clearInterval(id);
  }, []);

  // One rAF-throttled scroll handler: nav state, active link, page progress, pinned horizontal track
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      setScrolled(y > 40);

      const max = document.documentElement.scrollHeight - vh;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

      const probe = y + vh * 0.35;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && probe >= el.offsetTop && probe < el.offsetTop + el.offsetHeight) {
          setActive(item.id);
          break;
        }
      }

      // Hero parallax
      if (heroRef.current && y < vh * 1.2) heroRef.current.style.setProperty("--py", String(y));

      // Timeline gold line fills as you scroll
      const tl = timelineRef.current;
      if (tl) {
        const r = tl.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
        tl.style.setProperty("--fill", String(p));
      }

      // Ghost words drift sideways
      document.querySelectorAll<HTMLElement>("[data-ghost]").forEach((g) => {
        const r = g.getBoundingClientRect();
        const p = (vh - r.top) / (vh + r.height);
        g.style.translate = `${(p - 0.5) * 12}% 0`;
      });

      // Stacked project cards sink as the next one covers them
      const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-stack]"));
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next || window.innerWidth <= 640) {
          card.style.transform = "";
          card.style.filter = "";
          return;
        }
        const a = card.getBoundingClientRect();
        const b = next.getBoundingClientRect();
        const cover = Math.min(1, Math.max(0, 1 - (b.top - a.top) / a.height));
        card.style.transform = `scale(${1 - cover * 0.08})`;
        card.style.filter = `brightness(${1 - cover * 0.55})`;
      });

    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll-reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add(styles.revealed));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.revealed);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.intro} aria-hidden="true">
        <Mark size="lg" />
      </div>
      <Motion paused={menuOpen} />
      <div className={styles.progress} ref={progressRef} aria-hidden="true" />
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>

      {/* ── Navigation ── */}
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a href="#home" className={styles.brand} aria-label="Muhammad Farhan Shaukat, back to top">
          <Mark />
          <span className={styles.brandText}>
            <span className={styles.brandName}>Farhan Shaukat</span>
            <span className={styles.status}>
              <span className={styles.statusDot} />
              Open to opportunities
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className={`${styles.navPill} ${menuOpen ? styles.navPillOpen : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={active === item.id ? styles.navActive : ""}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className={styles.navMobileOnly}>
              <a href={CV} download onClick={() => setMenuOpen(false)}>
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.navRight}>
          <a href="#contact" data-magnetic className={`${styles.btnGold} ${styles.btnSm}`}>
            Let&apos;s talk <Icon name="arrow" size={15} />
          </a>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>
      {menuOpen && <div className={styles.menuOverlay} onClick={() => setMenuOpen(false)} />}

      <main id="main">
        {/* ── Hero ── */}
        <section id="home" className={styles.hero} ref={heroRef}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <h1 className={styles.heroName}>
            <span className={styles.srOnly}>Muhammad </span>
            <span className={styles.srOnly}>Farhan Shaukat</span>
            <Chars text="Farhan" />
            <Chars text="Shaukat" delay={0.12} />
          </h1>

          <div className={styles.heroRoles}>
            <span className={styles.heroRoleLeft}>Based in Lahore, PK</span>
            <span className={styles.heroRoleRight}>
              <span key={roleIndex} className={styles.roleSwap}>
                {roles[roleIndex].split("").map((c, i) => (
                  <span key={i} className={styles.roleChar} style={{ animationDelay: `${i * 0.022}s` }}>
                    {c === " " ? "\u00a0" : c}
                  </span>
                ))}
                <span className={styles.roleTimer} />
              </span>
            </span>
          </div>

          <div className={styles.heroPortrait}>
            <Image src={CUTOUT} alt="Muhammad Farhan Shaukat" width={512} height={512} priority sizes="(max-width: 900px) 90vw, 760px" />
          </div>

          <div className={styles.heroBottom}>
            <div className={styles.heroIntro}>
              <p>
                Full Stack Developer building scalable SaaS products, AI-powered features and business-ready
                systems with Laravel and the MERN stack.
              </p>
              <div className={styles.currently}>
                <span>Currently at</span>
                <span className={styles.companyTile} title="SeeBiz Pvt Ltd">
                  SeeBiz
                </span>
              </div>
              <div className={styles.btnRow}>
                <a href="#projects" data-magnetic className={styles.btnGold}>
                  Explore projects <Icon name="arrow" size={15} />
                </a>
                <a href={CV} download data-magnetic className={styles.btnOutline}>
                  <Icon name="download" size={15} /> CV
                </a>
              </div>
            </div>

            <div className={styles.heroSide}>
              <dl className={styles.heroStats}>
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <dd>{s.value}</dd>
                    <dt>{s.label}</dt>
                  </div>
                ))}
              </dl>
              <a href="#about" className={styles.scrollCue}>
                Scroll to explore <span className={styles.scrollTick} />
              </a>
            </div>
          </div>
        </section>

        {/* ── 01 About (cream panel) ── */}
        <section id="about" className={styles.about}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div className={styles.arch} data-reveal>
                <div className={styles.archFrame}>
                  <Image src={CUTOUT} alt="" width={512} height={512} sizes="(max-width: 900px) 80vw, 420px" />
                </div>
                <div className={styles.archBadge}>
                  <Mark size="sm" />
                  <span>
                    <strong>Farhan Shaukat</strong>
                    <small>Full Stack Developer</small>
                  </span>
                </div>
              </div>

              <div className={styles.aboutCopy} data-reveal>
                <Eyebrow index="01" label="Who I am" />
                <SplitHeading className={styles.aboutHeading} plain="I build SaaS products where" accent="engineering meets scale." />
                <p className={styles.aboutText}>
                  I&apos;m Muhammad Farhan Shaukat, a Full Stack Developer with 5+ years of experience. At SeeBiz I
                  build multi-tenant SaaS with Laravel and the MERN stack, from 145-endpoint APIs and React.js front
                  ends to AI features like CV parsing and semantic job matching, for systems serving 10,000+ users.
                </p>
                <div className={styles.aboutActions}>
                  <a href={CV} download data-magnetic className={styles.btnDark}>
                    Download resume <Icon name="arrow" size={15} />
                  </a>
                  <span className={styles.locationLine}>
                    <Icon name="pin" size={15} /> Lahore, Pakistan
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.focusGrid}>
              {focusAreas.map((f, i) => (
                <article key={f.title} className={`${styles.navyCard} ${styles.beam}`} data-tilt data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className={styles.cardTop}>
                    <span className={styles.iconBox}>
                      <Icon name={f.icon} size={17} />
                    </span>
                    <span className={styles.cardNum}>{pad(i + 1)}</span>
                  </div>
                  <p className={styles.monoLabel}>{f.label}</p>
                  <h3>{f.title}</h3>
                  <p className={styles.cardText}>{f.text}</p>
                  <p className={styles.cardTech}>{f.tech}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 Experience ── */}
        <section id="experience" className={`${styles.section} ${styles.light}`}>
          <div className={styles.container}>
            <span className={styles.ghostWord} aria-hidden="true" data-ghost>Career</span>
            <Eyebrow index="02" label="Experience" />
            <SplitHeading plain="Building products," accent="shipping systems." />

            <ol className={styles.timeline} ref={timelineRef}>
              {experience.map((job, i) => (
                <li key={job.role} className={`${styles.tlItem} ${i % 2 ? styles.tlFlip : ""}`}>
                  <div className={styles.tlMeta} data-reveal>
                    <div className={styles.tlMetaTop}>
                      <span className={styles.tlDates}>
                        <span>{job.period}</span>
                        {job.current && (
                          <span className={styles.tlCurrent}>
                            <span className={styles.statusDotGold} /> Current role
                          </span>
                        )}
                      </span>
                      <span className={styles.logoTile}>{job.mark}</span>
                    </div>
                    <h3>{job.role}</h3>
                    <p className={styles.tlCompany}>
                      <em>{job.company}</em> <span>/ {job.where}</span>
                    </p>
                    <p className={styles.tlSummary}>{job.summary}</p>
                    <span className={styles.typeChip}>{job.type}</span>
                  </div>
                  <span className={styles.tlDot} aria-hidden="true" />
                  <div className={styles.tlCard} data-tilt data-reveal>
                    <ul className={styles.tlBullets}>
                      {job.bullets.map((b) => (
                        <li key={b}>
                          <Icon name="check" size={16} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Chips items={job.tech} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Gold marquee band ── */}
        <div className={styles.goldBand} aria-hidden="true">
          <div className={styles.goldTrack}>
            {[...marquee, ...marquee].map((t, i) => (
              <span key={`${t}-${i}`}>
                {t}
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        {/* ── 04 Stack ── */}
        <section id="stack" className={styles.section}>
          <div className={styles.container}>
            <span className={styles.ghostWord} aria-hidden="true" data-ghost>Stack</span>
            <div className={styles.headRow}>
              <div>
                <Eyebrow index="03" label="Technology" />
                <SplitHeading plain="A stack built for" accent="real products." />
              </div>
              <a href={CV} download data-magnetic className={styles.btnOutline}>
                Full skills in my CV <Icon name="arrow" size={15} />
              </a>
            </div>

            <div className={styles.stackGrid}>
              <div className={styles.orbitWrap} aria-hidden="true">
                <div className={styles.orbitStage}>
                  {orbitRings.map((ring) => (
                    <div
                      key={ring.r}
                      className={styles.ring}
                      style={{ width: ring.r * 2, height: ring.r * 2, animationDuration: `${ring.speed}s` }}
                    >
                      {ring.items.map((label, j) => {
                        const angle = (360 / ring.items.length) * j;
                        return (
                          <span
                            key={label}
                            className={styles.orbitItem}
                            style={{ transform: `rotate(${angle}deg) translateX(${ring.r}px)` }}
                          >
                            <span
                              className={styles.orbitChip}
                              style={{ ["--a" as string]: `${angle}deg`, animationDuration: `${ring.speed}s` }}
                            >
                              {label}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
                <span className={styles.orbitCore}>
                  <Mark size="lg" />
                </span>
              </div>

              <div className={styles.stackPanel} data-reveal>
                <div className={styles.tabs} role="tablist" aria-label="Skill categories">
                  {stackTabs.map((t, i) => (
                    <button
                      key={t.title}
                      type="button"
                      role="tab"
                      aria-selected={tab === i}
                      className={`${styles.tab} ${tab === i ? styles.tabActive : ""}`}
                      onClick={() => setTab(i)}
                    >
                      <Icon name={t.icon} size={14} /> {t.title}
                    </button>
                  ))}
                </div>
                <div className={styles.tabCard} role="tabpanel" key={tab}>
                  <p>{stackTabs[tab].text}</p>
                  <ul>
                    {stackTabs[tab].items.map((item) => (
                      <li key={item}>
                        <span className={styles.tabDot} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Flagship ── */}
        <section id="projects" className={`${styles.section} ${styles.flagshipSection}`}>
          <div className={styles.container}>
            <div className={styles.flagHead} data-reveal>
              <span className={styles.flagIcon}>ATS</span>
              <Eyebrow index="04" label="Flagship build" center />
              <h2 className={styles.flagTitle}>{flagship.name}</h2>
              <p className={styles.flagSub}>{flagship.subtitle}</p>
            </div>

            <a href={flagship.url} target="_blank" rel="noopener noreferrer" className={styles.browser} data-reveal data-cursor="Visit">
              <span className={styles.browserBar}>
                <i />
                <i />
                <i />
                <span>{flagship.url.replace("https://", "")}</span>
              </span>
              <span className={styles.browserShot}>
                <Image src={flagship.image} alt="SeeATS dashboard" fill sizes="(max-width: 900px) 100vw, 1100px" />
              </span>
            </a>

            <div className={styles.flagFoot}>
              <ol className={styles.flagPoints}>
                {flagship.points.map((pt, i) => (
                  <li key={pt} data-reveal>
                    <span>{pad(i + 1)}</span>
                    <p>{pt}</p>
                  </li>
                ))}
              </ol>
              <div className={styles.flagSide} data-reveal>
                <Chips items={flagship.tags} />
                <div className={styles.btnRow}>
                  <a href={flagship.url} target="_blank" rel="noopener noreferrer" data-magnetic className={styles.btnGold}>
                    Live site <Icon name="arrow" size={15} />
                  </a>
                  <a href="#contact" data-magnetic className={styles.btnOutline}>
                    Ask me about it
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Selected work (stacking cards) ── */}
        <section className={`${styles.section} ${styles.light}`}>
          <div className={styles.container}>
            <span className={styles.ghostWord} aria-hidden="true" data-ghost>Work</span>
            <Eyebrow index="05" label="Selected work" />
            <SplitHeading plain="More things" accent="I've engineered." />

            <div className={styles.stack}>
              {projects.map((p, i) => (
                <article key={p.name} className={styles.workCard} data-stack style={{ top: `calc(96px + ${i * 18}px)` }}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.workShot} aria-label={`Open ${p.name}`} data-cursor="Visit">
                    <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(max-width: 900px) 100vw, 640px" />
                  </a>
                  <div className={styles.workBody}>
                    <div className={styles.workHead}>
                      <span className={styles.monoLabel}>{p.category}</span>
                      <span className={styles.cardNum}>{pad(i + 2)}</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p className={styles.workTagline}>{p.tagline}</p>
                    <p className={styles.workText}>{p.description}</p>
                    <div className={styles.workFoot}>
                      <Chips items={p.tags} />
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                        Visit {p.url.replace("https://", "")} <Icon name="arrow" size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.centerRow}>
              <a href="#contact" data-magnetic className={styles.btnGold}>
                Discuss a project <Icon name="arrow" size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ── 07 Education (cream panel) ── */}
        <section id="education" className={styles.eduSection}>
          <div className={styles.eduPanel}>
            <div className={styles.ringWrap} data-reveal>
              <div className={styles.ring2}>
                <div className={styles.ringInner}>
                  <strong>2020</strong>
                  <span>Graduated · CS</span>
                </div>
              </div>
            </div>
            <div className={styles.eduCopy} data-reveal>
              <Eyebrow index="06" label="Academic foundation" />
              <SplitHeading className={styles.eduHeading} plain={education.degree} accent={education.field} />
              <div className={styles.schoolRow}>
                <span className={styles.schoolTile}>SU</span>
                <span>
                  <strong>{education.school}</strong>
                  <small>{education.period}</small>
                </span>
              </div>
              <ul className={styles.eduList}>
                {education.more.map((m) => (
                  <li key={m}>
                    <Icon name="check" size={16} />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 07 Testimonials (tilted cards) ── */}
        <section className={`${styles.section} ${styles.light}`}>
          <div className={styles.container}>
            <Eyebrow index="07" label="Recognition" center />
            <SplitHeading className={`${styles.heading} ${styles.headingCenter}`} plain="Trusted by" accent="clients." />
            <div className={styles.quoteGrid}>
              {testimonials.map((t, i) => (
                <figure key={t.name} className={styles.quoteCard} data-tilt data-reveal style={{ ["--tilt" as string]: `${[-3, 0, 3][i]}deg` }}>
                  <div className={styles.quoteTop}>
                    <span className={styles.quoteIcon}>
                      <Icon name="quote" size={17} />
                    </span>
                    <span className={styles.monoLabelMuted}>{t.tag}</span>
                  </div>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                  <blockquote>{t.text}</blockquote>
                  <span className={styles.chipSm}>Verified client</span>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── 09 Contact (gold panel) ── */}
        <section id="contact" className={styles.ctaSection}>
          <div className={styles.goldPanel}>
            <span className={styles.goldWatermark} aria-hidden="true">MF</span>
            <div className={styles.ctaCopy} data-reveal>
              <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
                <span className={styles.eyebrowIndex}>08</span>
                <span className={styles.eyebrowRule} />
                Let&apos;s work together
              </p>
              <SplitHeading className={styles.ctaHeading} plain="Let's build something" accent="exceptional." />
              <p className={styles.ctaText}>
                Hiring for a Senior Full Stack role, or have a Laravel or MERN product to build? Let&apos;s talk about
                it.
              </p>
              <div className={styles.btnRow}>
                <a href={`mailto:${EMAIL}`} data-magnetic className={styles.btnDark}>
                  Start a conversation <Icon name="arrow" size={15} />
                </a>
                <button type="button" onClick={copyEmail} className={styles.btnGhostDark}>
                  <Icon name="copy" size={15} /> {copied ? "Copied!" : EMAIL}
                </button>
              </div>
              <ul className={styles.ctaContacts}>
                <li>
                  <a href={PHONE_HREF}>
                    <Icon name="phone" size={15} /> {PHONE}
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <Icon name="whatsapp" size={15} /> WhatsApp
                  </a>
                </li>
                <li>
                  <span>
                    <Icon name="pin" size={15} /> Based in Lahore, open to onsite roles
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.formCard} data-reveal>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footCta}>
            <h2>
              Have something worth building? <em>Let&apos;s talk.</em>
              <small>Available for full-time roles and Laravel / MERN product work.</small>
            </h2>
            <div className={styles.btnRow}>
              <a href={`mailto:${EMAIL}`} data-magnetic className={styles.btnGold}>
                Start a conversation <Icon name="arrow" size={15} />
              </a>
              <a href={CV} download data-magnetic className={styles.btnOutline}>
                <Icon name="download" size={15} /> CV
              </a>
            </div>
          </div>

          <div className={styles.footGrid}>
            <div className={styles.footBrand}>
              <Mark size="lg" />
              <div>
                <p>Full Stack Developer building scalable SaaS, AI-powered features and business-ready systems with Laravel and the MERN stack.</p>
                <div className={styles.socials}>
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" size={16} /></a>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={16} /></a>
                  <a href={`mailto:${EMAIL}`} aria-label="Email"><Icon name="mail" size={16} /></a>
                </div>
              </div>
            </div>
            <ul className={styles.footLinks}>
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`}>{n.label}</a>
                </li>
              ))}
              <li>
                <a href={CV} download>Resume</a>
              </li>
            </ul>
            <ul className={styles.footContact}>
              <li><a href={`mailto:${EMAIL}`}><Icon name="mail" size={15} /> {EMAIL}</a></li>
              <li><a href={PHONE_HREF}><Icon name="phone" size={15} /> {PHONE}</a></li>
              <li><span><Icon name="pin" size={15} /> Lahore, Pakistan</span></li>
            </ul>
          </div>

          <div className={styles.footBottom}>
            <span>© {new Date().getFullYear()} Muhammad Farhan Shaukat</span>
            <a href="#home">
              Back to top <Icon name="up" size={13} />
            </a>
          </div>
        </div>
        <p className={styles.footGiant} aria-hidden="true">Farhan Shaukat</p>
      </footer>
    </div>
  );
}
