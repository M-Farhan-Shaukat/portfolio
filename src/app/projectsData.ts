// Project data shared by the page and the AI chat (/api/chat).

export const flagship = {
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

export const projects: { name: string; category: string; tagline: string; image: string; url?: string; description: string; tags: string[] }[] = [
  { name: "SeeForce", category: "HRMS · MERN stack", tagline: "Multi-organization HR platform", image: "/images/seeForce.png", url: "https://seeforce.seebiz.cloud", description: "Attendance, shift-based attendance, leave, payroll, reporting and batch management, with ZKTeco biometric devices and distributed cron-job locking in MongoDB.", tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript"] },
  { name: "SeeClass", category: "LMS · MERN stack", tagline: "Learning management system", image: "/images/seeClass.png", url: "https://seeclass.seebiz.cloud", description: "Curriculum planning, enrollment, timetabling with clash detection, assignments and grading, with SSO into SeeForce and an automated Vitest + Supertest suite.", tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Zod"] },
  { name: "QATS", category: "Training platform", tagline: "Training & certification", image: "/images/qats.png", url: "https://qats.qalam.it", description: "Trainee registration, exam access, aptitude assessments, document submission, result recording and progress tracking with secure authentication.", tags: ["Laravel", "Next.js", "MySQL", "Bootstrap"] },
  { name: "Books", category: "Accounting", tagline: "Multi-tenant accounting", image: "/images/books.png", url: "https://books.seebiz.com", description: "Journals, general ledger, invoices, bills, payments and trial balance, with automated balance sheet and profit & loss reports.", tags: ["Laravel", "React.js", "MySQL", "Bootstrap"] },
  { name: "Inventory", category: "Operations", tagline: "Multi-warehouse inventory", image: "/images/inventory.png", url: "https://inventory.seebiz.com", description: "Products, stock transfers and order processing with real-time stock tracking, low-stock alerts and queries tuned for large datasets.", tags: ["Laravel", "React.js", "MySQL", "Bootstrap"] },
  { name: "Expense", category: "Finance", tagline: "Expense management", image: "/images/expense.png", url: "https://expense.seebiz.com", description: "Advances, trips and daily expenditures with separate admin and user panels, RBAC and approval workflows.", tags: ["Laravel", "React.js", "MySQL", "Bootstrap"] },
  { name: "Turnfeat", category: "AI platform", tagline: "AI project scoping & hiring", image: "/images/turnfeat.webp", url: "https://turnfeat.ai", description: "A freelance platform that turns a client's brief into scoped modules with AI, estimates each one upfront and matches the right specialist to every module, with escrow-protected payments until the work is approved.", tags: ["REST APIs", "AI Scoping", "Escrow Payments"] },
  { name: "SeeBiz CRM", category: "CRM", tagline: "Sales, projects & support in one place", image: "/images/crm.webp", description: "One CRM for leads, customers, sales, invoices, estimates and proposals, plus subscriptions, contracts, projects, tasks and support tickets, with staff management, reports and analytics.", tags: ["PHP", "Laravel", "MySQL", "REST APIs"] },
  { name: "Law Forma", category: "Legal tech", tagline: "Guided legal document generation", image: "/images/legal.png", description: "Users create customized legal documents, such as a will, by answering simple guided questions. An admin reviews and approves each document, after which the user downloads it as a PDF.", tags: ["Next.js", "Laravel", "MySQL", "Bootstrap"] },
  { name: "Marklab", category: "Healthcare", tagline: "Doctor portal & lab management", image: "/images/marklab.png", url: "https://marklabinc.com", description: "A medical billing and healthcare management system where doctors register and manage reports and prescriptions, and patients connect with doctors to access their reports and prescriptions.", tags: ["Next.js", "Laravel", "MySQL", "Bootstrap"] },
  { name: "Krub", category: "Communities", tagline: "Wholesale buying communities", image: "/images/krub.png", url: "https://www.krub.ai", description: "Businesses join or build wholesale buying communities, connect with each other, share requirements and use their combined volume to negotiate better prices, with groups, channels and moderation tools.", tags: ["Next.js", "Node.js", "Express.js", "MongoDB"] },
];

export const testimonials = [
  { text: "Exceptional work from start to finish. The attention to detail and commitment to quality exceeded our expectations. Highly recommend for any complex web development project.", name: "Abdul Basit", role: "CEO, Sublime Traders", tag: "Client" },
  { text: "Professional, reliable, and incredibly talented. Delivered our project ahead of schedule with outstanding results. Will definitely work together again on future projects.", name: "Alexander", role: "Founder, Quantic Solutions", tag: "Client" },
  { text: "The technical expertise and creative solutions provided were exactly what we needed. The project was completed with precision and excellent communication throughout the process.", name: "Waqar Ahmad", role: "PO, Alpha Tech Solutions", tag: "Client" },
];
