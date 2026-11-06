"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ContactForm from "./contact/ContactUs";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { value: "7", label: "Products Shipped" },
  { value: "10K+", label: "Active Users" },
  { value: "5+", label: "Years Experience" },
  { value: "40%", label: "API Speed Gain" },
];

const experience = [
  {
    role: "Executive Software Engineer",
    company: "SeeBiz Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "May 2022 – Present",
    bullets: [
      "Develop full-stack SaaS applications with PHP, Laravel, React.js, Node.js, MySQL and MongoDB across 7 products: SeeATS, SEE HRM, SeeClass, Inventory, Books, Expense and QATS.",
      "Build RESTful APIs, including a 145-endpoint Laravel API organised into 24 modules, and integrate them with React.js front ends.",
      "Ship AI-powered features with LLM and embeddings APIs: CV parsing, semantic job matching and automated candidate analysis.",
      "Improved API performance by 40% through SQL query optimization and Eloquent eager loading to remove N+1 queries.",
      "Automated invoice generation, saving the finance team 10+ hours weekly, and set up Docker and CI/CD pipelines for smoother releases.",
      "Implement multi-tenant data isolation, Role-Based Access Control (RBAC), approval workflows and queued background jobs.",
      "Conduct code reviews, mentor junior developers and write unit and feature tests with PHPUnit and Vitest in Agile sprints.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "OXOSOFT",
    location: "Lahore, Pakistan",
    period: "Oct 2021 – Apr 2022",
    bullets: [
      "Developed web applications using PHP, Laravel and CodeIgniter following MVC architecture.",
      "Built and maintained RESTful APIs and integrated them with front-end applications.",
      "Optimized MySQL queries to improve application performance and response times.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "EasyBew",
    location: "Lahore, Pakistan",
    period: "Mar 2021 – Sep 2021",
    bullets: [
      "Developed dynamic web applications using PHP, Laravel, JavaScript and MVC architecture.",
      "Assisted in debugging, testing and deployment of web applications.",
    ],
  },
];

const skillGroups = [
  {
    title: "Backend",
    icon: "backend",
    items: [
      "PHP 8",
      "Laravel",
      "CodeIgniter",
      "Node.js",
      "Express.js",
      "TypeScript",
      "RESTful APIs",
      "MVC / OOP / SOLID",
      "Service Layer",
    ],
  },
  {
    title: "Laravel Core",
    icon: "laravel",
    items: [
      "Eloquent ORM",
      "Blade Templates",
      "Artisan Commands",
      "Composer",
      "Middleware",
      "Form Requests",
      "API Resources",
      "Queues & Jobs",
      "Laravel Sanctum",
    ],
  },
  {
    title: "Frontend",
    icon: "frontend",
    items: [
      "React.js",
      "React Hooks",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "jQuery",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "AI & LLM",
    icon: "ai",
    items: [
      "AI Integration",
      "LLM APIs (OpenAI, Groq)",
      "Embeddings",
      "Cosine Similarity",
      "Prompt Engineering",
      "CV Parsing & Matching",
      "Candidate Analysis",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB (Mongoose)",
      "Database Design",
      "Query Optimization",
      "Database Migrations",
    ],
  },
  {
    title: "APIs & Integrations",
    icon: "api",
    items: [
      "REST / JSON / XML",
      "Stripe",
      "Google Calendar API",
      "Google OAuth",
      "AWS S3",
      "Twilio",
      "Mailgun",
      "ZKTeco Biometric Devices",
    ],
  },
  {
    title: "Security & Architecture",
    icon: "security",
    items: [
      "JWT",
      "Single Sign-On (SSO)",
      "RBAC",
      "Multi-tenant SaaS",
      "Cron Jobs",
      "Background Jobs",
      "Approval Workflows",
    ],
  },
  {
    title: "Testing & DevOps",
    icon: "devops",
    items: [
      "PHPUnit",
      "Unit & Feature Testing",
      "Vitest",
      "Supertest",
      "Docker",
      "CI/CD",
      "Git / GitHub / GitLab",
      "Postman",
      "Agile / Scrum",
    ],
  },
];

const projects = [
  {
    name: "SeeATS",
    badge: "AI-Powered",
    monogram: "ATS",
    gradient: "linear-gradient(135deg, #0066ff 0%, #00ccff 100%)",
    image: "/images/seeATS.png",
    url: "https://seeats.seebiz.cloud" as string | null,
    description:
      "Multi-tenant applicant tracking system with AI CV matching, semantic job scoring and a state-machine hiring pipeline. Includes a public careers portal, OTP candidate portal and Google Calendar interview scheduling.",
    tags: ["PHP 8.4", "Laravel", "MySQL", "LLM & Embeddings", "React.js", "AWS S3"],
  },
  {
    name: "SEE HRM",
    badge: "Enterprise",
    monogram: "HRM",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
    image: "/images/seeForce.png",
    url: "https://seeforce.seebiz.cloud" as string | null,
    description:
      "Multi-organization HR platform covering attendance, shift-based attendance, leave, payroll, reporting and batch management, with ZKTeco biometric integration and distributed cron-job locking.",
    tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT", "React.js"],
  },
  {
    name: "SeeClass",
    badge: "Education",
    monogram: "LMS",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    image: "/images/seeClass.png",
    url: "https://seeclass.seebiz.cloud" as string | null,
    description:
      "Learning management system with curriculum planning, enrollment, timetabling with clash detection, assignments and grading, plus Single Sign-On with SEE HRM and an automated Vitest/Supertest suite.",
    tags: ["Node.js", "TypeScript", "MongoDB", "Zod", "React.js", "Vitest"],
  },
  {
    name: "QATS",
    badge: "New",
    monogram: "QATS",
    gradient: "linear-gradient(135deg, #0066ff 0%, #00ccff 100%)",
    image: "/images/qats.png",
    url: "https://qats.qalam.it",
    description:
      "Training and certification platform with trainee registration, exam access, aptitude assessments, document submission, result recording and progress tracking with secure authentication.",
    tags: ["Laravel", "Next.js", "MySQL", "Bootstrap"],
  },
  {
    name: "Books",
    badge: "Accounting",
    monogram: "BOOKS",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    image: "/images/books.png",
    url: "https://books.seebiz.com",
    description:
      "Multi-tenant accounting system with journals, general ledger, invoices, bills, payments and trial balance, plus automated balance sheet and profit & loss reports.",
    tags: ["Laravel", "React.js", "MySQL", "Bootstrap"],
  },
  {
    name: "Inventory",
    badge: "Operations",
    monogram: "INV",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
    image: "/images/inventory.png",
    url: "https://inventory.seebiz.com",
    description:
      "Multi-warehouse inventory system for products, stock transfers and order processing, with real-time stock tracking, low-stock alerts and optimized queries for large datasets.",
    tags: ["Laravel", "React.js", "MySQL", "Bootstrap"],
  },
  {
    name: "Expense",
    badge: "Finance",
    monogram: "EXP",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)",
    image: "/images/expense.png",
    url: "https://expense.seebiz.com",
    description:
      "Expense management platform for advances, trips and daily expenditures, with separate admin and user panels, RBAC and approval workflows.",
    tags: ["Laravel", "React.js", "MySQL", "Bootstrap"],
  },
];

const testimonials = [
  {
    text: "Exceptional work from start to finish. The attention to detail and commitment to quality exceeded our expectations. Highly recommend for any complex web development project.",
    initials: "AB",
    name: "Abdul Basit",
    role: "CEO, Sublime Traders",
  },
  {
    text: "Professional, reliable, and incredibly talented. Delivered our project ahead of schedule with outstanding results. Will definitely work together again on future projects.",
    initials: "AL",
    name: "Alexander",
    role: "Founder, Quantic Solutions",
  },
  {
    text: "The technical expertise and creative solutions provided were exactly what we needed. The project was completed with precision and excellent communication throughout the process.",
    initials: "WA",
    name: "Waqar Ahmad",
    role: "PO, Alpha Tech Solutions",
  },
];

function SkillIcon({ name }: { name: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "backend":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
          <line x1="7" y1="17" x2="7.01" y2="17" />
        </svg>
      );
    case "laravel":
      return (
        <svg {...common}>
          <path d="M12 3 3 8l9 5 9-5-9-5z" />
          <path d="m3 13 9 5 9-5" />
          <path d="m3 18 9 5 9-5" />
        </svg>
      );
    case "frontend":
      return (
        <svg {...common}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
          <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
        </svg>
      );
    case "security":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
  }
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener("scroll", handleScrollClose, { passive: true });
      return () => window.removeEventListener("scroll", handleScrollClose);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ""}`}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <img
              src="/images/Muhammad Farhan Shaukat.jpg"
              alt="Muhammad Farhan Shaukat"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginRight: "8px",
                objectFit: "cover",
              }}
            />
            <span className={styles.logoText}>Farhan</span>
          </div>
          <button
            className={styles.mobileMenuButton}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <span
              className={`${styles.hamburger} ${
                isMobileMenuOpen ? styles.hamburgerOpen : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          {isMobileMenuOpen && (
            <div
              className={styles.mobileMenuOverlay}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          <ul
            className={`${styles.navLinks} ${
              isMobileMenuOpen ? styles.navLinksOpen : ""
            }`}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={activeSection === item.id ? styles.active : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.greeting}>Hello, I&apos;m</p>
            <h1 className={styles.heroName}>Muhammad Farhan Shaukat</h1>
            <h2 className={styles.heroTitle}>Full-Stack Software Engineer</h2>
            <div className={styles.roleTags}>
              <span>Laravel</span>
              <span>PHP</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>AI Integration</span>
            </div>
            <p className={styles.heroDescription}>
              I build scalable, multi-tenant SaaS products and AI-powered
              features. 5+ years shipping production systems across ATS, HRMS,
              LMS, accounting, inventory and expense platforms — serving 10,000+
              active users.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>Available for Full-Time</span>
              <span className={styles.badge}>5+ Years Experience</span>
              <span className={styles.badge}>AI Integration</span>
            </div>
            <div className={styles.heroButtons}>
              <a href="#projects" className={styles.btnPrimary}>
                View My Work
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                Get In Touch
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              <img
                src="/images/Muhammad Farhan Shaukat.jpg"
                alt="Muhammad Farhan Shaukat"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.sectionSubtitle}>
              Full-stack engineer building scalable SaaS and AI-powered products
            </p>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <div className={styles.aboutIntro}>
                <p className={styles.leadText}>
                  I&apos;m a Full-Stack Software Engineer with 5+ years of
                  experience building scalable, multi-tenant SaaS applications
                  with PHP, Laravel, React.js and Node.js.
                </p>
                <p>
                  I build RESTful APIs and responsive React.js front ends,
                  design MySQL, PostgreSQL and MongoDB databases, and ship
                  AI-powered features with LLM and embeddings APIs — including
                  AI CV matching and candidate analysis.
                </p>
                <p>
                  I&apos;ve delivered 7 production products across ATS, HRMS,
                  LMS, inventory, accounting and expense platforms. I work in
                  Agile/Scrum teams, conduct code reviews, mentor junior
                  developers and focus on clean architectures that scale.
                </p>
              </div>
              <div className={styles.stats}>
                {stats.map((stat) => (
                  <div className={styles.stat} key={stat.label}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.sectionSubtitle}>
              A track record of shipping reliable products and improving systems
            </p>
          </div>
          <div className={styles.timeline}>
            {experience.map((job) => (
              <article className={styles.timelineItem} key={job.role}>
                <div className={styles.timelineHeader}>
                  <div>
                    <h3 className={styles.timelineRole}>{job.role}</h3>
                    <p className={styles.timelineCompany}>
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className={styles.timelinePeriod}>{job.period}</span>
                </div>
                <ul className={styles.timelineBullets}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`${styles.section} ${styles.sectionDark}`}
      >
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
            <p className={styles.sectionSubtitle}>
              A comprehensive toolkit for modern full-stack development
            </p>
          </div>
          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <div className={styles.skillCard} key={group.title}>
                <div className={styles.skillIcon}>
                  <SkillIcon name={group.icon} />
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              Seven production products across recruitment, HR, learning,
              finance and operations
            </p>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.name}>
                {project.image ? (
                  <div className={styles.projectImage}>
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className={styles.projectBadge}>{project.badge}</div>
                    {project.url && (
                      <div className={styles.projectOverlay}>
                        <a
                          href={project.url}
                          className={styles.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          Live Demo
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className={styles.projectVisual}
                    style={{ background: project.gradient }}
                  >
                    <span className={styles.projectMonogram}>
                      {project.monogram}
                    </span>
                    <span className={styles.projectVisualName}>
                      {project.name}
                    </span>
                    <div className={styles.projectBadge}>{project.badge}</div>
                    {project.url && (
                      <div className={styles.projectOverlay}>
                        <a
                          href={project.url}
                          className={styles.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          Live Demo
                        </a>
                      </div>
                    )}
                  </div>
                )}
                <div className={styles.projectInfo}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className={`${styles.section} ${styles.sectionDark}`}
      >
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>05</span>
            <h2 className={styles.sectionTitle}>Client Testimonials</h2>
            <p className={styles.sectionSubtitle}>
              What clients say about working with me
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div className={styles.testimonialCard} key={testimonial.name}>
                <div className={styles.testimonialQuote}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className={styles.testimonialText}>
                  &quot;{testimonial.text}&quot;
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorRole}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`${styles.section} ${styles.sectionDark}`}
      >
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>06</span>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <p className={styles.sectionSubtitle}>
              Let&apos;s discuss how I can help bring your vision to life
            </p>
          </div>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <p>
                I&apos;m open to full-time onsite Senior Full-Stack Engineer
                roles and new product work in Lahore. Feel free to reach out.
              </p>
              <div className={styles.contactMethods}>
                <a
                  href="mailto:mfarhanshaukatali786@gmail.com"
                  className={styles.contactItem}
                >
                  <div className={styles.contactIconWrapper}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span>mfarhanshaukatali786@gmail.com</span>
                </a>
                <a href="tel:+923010017469" className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>+92 301 0017469</span>
                </a>
                <a href="#" className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>Lahore, Pakistan</span>
                </a>
              </div>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/M-Farhan-Shaukat"
                  aria-label="GitHub"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/m-farhanshaukat-9aa172219"
                  aria-label="LinkedIn"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/923010017469"
                  aria-label="WhatsApp"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.88 13.46A9 9 0 0 1 7.88 20L3 21l1-4.88a9 9 0 1 1 16.88-2.66z" />
                    <path d="M8.68 10.94L10.21 9.4 9.81 8H8s-.41 2.54 2.52 5.46S16 16 16 16v-1.81l-1.4-.4-1.54 1.53" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div className={styles.contactFormWrapper}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <div className={styles.footerLogo}>
                <img
                  src="/images/Muhammad Farhan Shaukat.jpg"
                  alt="Muhammad Farhan Shaukat"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                    objectFit: "cover",
                  }}
                />
                <span>Muhammad Farhan</span>
              </div>
              <p className={styles.footerTagline}>
                Full-Stack Software Engineer building scalable SaaS products and
                AI-powered experiences with Laravel, React and Node.js.
              </p>
            </div>
            <div className={styles.footerSection}>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:mfarhanshaukatali786@gmail.com">
                    mfarhanshaukatali786@gmail.com
                  </a>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+923010017469">+92 301 0017469</a>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>Connect</h3>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/M-Farhan-Shaukat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/m-farhanshaukat-9aa172219"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/923010017469"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.88 13.46A9 9 0 0 1 7.88 20L3 21l1-4.88a9 9 0 1 1 16.88-2.66z" />
                    <path d="M8.68 10.94L10.21 9.4 9.81 8H8s-.41 2.54 2.52 5.46S16 16 16 16v-1.81l-1.4-.4-1.54 1.53" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2026 Muhammad Farhan Shaukat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
