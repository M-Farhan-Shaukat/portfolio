// Plain-text resume shown in the in-page "Plain view". Keep in sync with public/M_Farhan_Shaukat_Resume.pdf.

export const resume = {
  name: "M. Farhan Shaukat",
  headline: "Full Stack Developer | Laravel, PHP | MERN Stack (MongoDB, Express.js, React.js, Node.js) | AI Integration",
  contact: [
    { label: "Lahore, Pakistan" },
    { label: "+92 301 0017469", href: "tel:+923010017469" },
    { label: "mfarhanshaukatali786@gmail.com", href: "mailto:mfarhanshaukatali786@gmail.com" },
    { label: "linkedin.com/in/m-farhanshaukat-9aa172219", href: "https://linkedin.com/in/m-farhanshaukat-9aa172219" },
    { label: "github.com/M-Farhan-Shaukat", href: "https://github.com/M-Farhan-Shaukat" },
  ],
  summary:
    "Full Stack Developer and Software Engineer with 5+ years of experience building scalable, multi-tenant SaaS applications with PHP, Laravel and the MERN stack (MongoDB, Express.js, React.js, Node.js). Builds RESTful APIs and React.js front ends, designs MySQL and MongoDB databases, and builds AI-powered features with LLM and embeddings APIs, such as AI CV matching and candidate analysis. Delivered 7 production products (ATS, HRMS, LMS, inventory, accounting, expense and a training and certification platform), with systems serving 10,000+ active users. Improved API performance by 40%. Works in Agile/Scrum teams, conducts code reviews and mentors junior developers. Seeking a full-time onsite Senior Full Stack Developer role in Lahore.",
  skills: [
    ["Backend", "PHP 8, Laravel, CodeIgniter, Node.js, Express.js, MERN Stack, TypeScript, RESTful APIs, MVC, OOP, SOLID Principles, Service Layer, Repository Pattern"],
    ["Laravel Core", "Eloquent ORM and Relationships, Blade Templates, Artisan Commands, Composer, Middleware, Form Request Validation, API Resources, Migrations and Seeders, Queues and Jobs, Task Scheduling, Laravel Sanctum"],
    ["Frontend", "React.js, React Hooks, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery, Responsive Web Design"],
    ["AI & LLM", "AI Integration, LLM APIs (OpenAI-compatible, Groq), Embeddings, Cosine Similarity, Prompt Engineering, AI-powered Resume/CV Parsing and Matching"],
    ["Databases", "MySQL, MongoDB (Mongoose), Redis, Database Design, Query Optimization, Database Migrations"],
    ["APIs & Integrations", "REST, JSON, XML, Swagger/OpenAPI, Stripe Payment Gateway, Google Calendar API, Google OAuth, AWS S3, Twilio, Mailgun, ZKTeco Biometric Devices"],
    ["Security & Architecture", "JWT, Single Sign-On (SSO), Role-Based Access Control (RBAC), Multi-tenant SaaS, Cron Jobs, Background Jobs, Caching, Performance Optimization, Scalability"],
    ["Testing & DevOps", "PHPUnit, Unit Testing, Feature Testing, Vitest, Supertest, Docker, CI/CD, GitHub Actions, Git, GitHub, GitLab, Linux, Nginx, Postman, Agile/Scrum, Code Reviews"],
  ] as [string, string][],
  experience: [
    {
      role: "Executive Software Engineer",
      company: "SeeBiz Pvt Ltd",
      meta: "Lahore, Pakistan | May 2022 – Present",
      points: [
        "Develop full-stack SaaS applications across 7 products using Laravel and MySQL (SeeATS, Books, Inventory, Expense, QATS) and the MERN stack with TypeScript (SeeForce HRMS, SeeClass)",
        "Build RESTful APIs, including a 145-endpoint Laravel API organised into 24 modules, and integrate them with React.js front ends",
        "Build Node.js and Express.js REST APIs with MongoDB (Mongoose) and JWT authentication for multi-organization platforms",
        "Build responsive React.js interfaces with reusable components and hooks, plus HTML5, CSS3, jQuery and Bootstrap pages from design layouts",
        "Build AI-powered features with LLM and embeddings APIs: CV parsing, semantic job matching and automated candidate analysis",
        "Improved API performance by 40% through SQL query optimization and Eloquent eager loading to remove N+1 queries",
        "Automated invoice generation, saving the finance team 10+ hours weekly",
        "Set up Docker and CI/CD pipelines for smoother releases and less downtime",
        "Structure Laravel applications with custom Middleware, Form Requests, API Resources, Eloquent query scopes, Artisan commands, Migrations and Seeders",
        "Implemented multi-tenant data isolation, Role-Based Access Control (RBAC), approval workflows and queued background jobs",
        "Integrated third-party APIs using JSON and XML: Stripe, Google Calendar, AWS S3, Twilio and AI providers",
        "Conduct code reviews, mentor junior developers and write unit and feature tests with PHPUnit and Vitest in Agile sprints",
      ],
    },
    {
      role: "Junior Software Engineer",
      company: "OXOSOFT",
      meta: "Lahore, Pakistan | Oct 2021 – Apr 2022",
      points: [
        "Developed web applications using PHP, Laravel and CodeIgniter following MVC architecture",
        "Built and maintained RESTful APIs and integrated them with front-end applications",
        "Optimized MySQL queries to improve application performance and response times",
      ],
    },
    {
      role: "Web Development Intern",
      company: "EasyBew",
      meta: "Lahore, Pakistan | Mar 2021 – Sep 2021",
      points: [
        "Developed dynamic web applications using PHP, Laravel, JavaScript and MVC architecture",
        "Assisted in debugging, testing and deployment of web applications",
      ],
    },
  ],
  projects: [
    {
      name: "SeeATS — AI-Powered Applicant Tracking System (ATS)",
      url: "seeats.seebiz.cloud",
      tech: "PHP 8.4, Laravel 13, Eloquent ORM, MySQL, REST API, Laravel Sanctum, Queues, LLM and Embeddings APIs, AWS S3, Google Calendar API, React.js",
      points: [
        "Built a multi-tenant recruitment SaaS with branches, custom roles, module-level permissions (RBAC) and audit logs",
        "Built AI CV matching: PDF resume parsing, vector embeddings, cosine-similarity scoring and LLM candidate analysis, with queued jobs, retries and a daily API budget",
        "Designed the hiring pipeline (screening, interviews, approval, hire, offer) as a state machine with complete stage history",
        "Developed job posting, dynamic application forms, a public careers portal and an OTP-based candidate portal",
        "Integrated Google Calendar interview scheduling with conflict detection, email templates, email logs and Twilio SMS",
      ],
    },
    {
      name: "SeeForce — Human Resource Management System (HRMS) | MERN Stack",
      url: "seeforce.seebiz.cloud",
      tech: "MongoDB, Express.js, React.js, Node.js, TypeScript, JWT, AWS S3",
      points: [
        "Built attendance, shift-based attendance, leave, payroll, reporting and batch management modules for a multi-organization HR platform, with ZKTeco biometric device integration",
        "Implemented distributed cron job locking in MongoDB so scheduled jobs run once across multiple servers",
      ],
    },
    {
      name: "SeeClass — Learning Management System (LMS) | MERN Stack",
      url: "seeclass.seebiz.cloud",
      tech: "MongoDB, Express.js, React.js, Node.js, TypeScript, Zod, AWS S3, Vitest",
      points: [
        "Built curriculum planning, enrollment, timetabling with clash detection, assignments and grading",
        "Implemented Single Sign-On (SSO) with SeeForce HRMS and an automated API test suite with Vitest and Supertest",
      ],
    },
    {
      name: "Books — Accounting Management System",
      url: "books.seebiz.com",
      tech: "PHP, Laravel, MySQL, REST API, React.js, Bootstrap",
      points: [
        "Developed multi-tenant accounting modules for journals, general ledger, invoices, bills, payments and trial balance",
        "Built automated financial reports, including balance sheet and profit and loss statements",
      ],
    },
    {
      name: "Inventory Management System",
      url: "inventory.seebiz.com",
      tech: "PHP, Laravel, MySQL, REST API, React.js, Bootstrap",
      points: [
        "Developed a multi-warehouse inventory system for products, stock transfers and order processing",
        "Implemented real-time stock tracking, low-stock alerts and automated inventory reports; optimized queries for large datasets",
      ],
    },
    {
      name: "Expense Management System",
      url: "expense.seebiz.com",
      tech: "PHP, Laravel, MySQL, REST API, React.js, Bootstrap",
      points: [
        "Developed expense management for advances, trips and daily expenditures with admin and user panels, RBAC and approval workflows",
      ],
    },
    {
      name: "QATS — Training and Certification Platform",
      url: "qats.qalam.it",
      tech: "PHP, Laravel, MySQL, REST API, Next.js, Bootstrap",
      points: [
        "Built trainee registration, exam access, aptitude assessments, document submission, result recording and progress tracking with secure authentication",
      ],
    },
  ],
  education: [
    { title: "Associate Degree in Computer Science (ADPCS)", meta: "Superior University Lahore | 2018 – 2020" },
    { title: "Intermediate in Computer Science (ICS)", meta: "Govt. Shalamar College Lahore | 2016 – 2018" },
    { title: "Matriculation", meta: "Govt. High School Baghbanpura Lahore | 2014 – 2016" },
  ],
  languages: "English (Basic) | Urdu (Fluent)",
};
