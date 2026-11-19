// Extra background for the AI chat (/api/chat), beyond the resume and project cards.
// Edit freely: everything here is shown to the AI as facts about Farhan.

/** How Farhan works: drawn from his resume, past portfolio write-ups and client feedback. */
export const workStyle = [
  "Works in Agile/Scrum teams and delivers in sprints.",
  "Conducts code reviews and mentors junior developers at SeeBiz.",
  "Works closely with front-end developers and designers, agreeing API contracts so front and back ends integrate smoothly.",
  "Communicates directly with clients and product owners; client feedback highlights excellent communication throughout projects, attention to detail, reliability and delivering ahead of schedule.",
  "Writes unit and feature tests (PHPUnit, Vitest, Supertest) and cares about performance: SQL optimisation and eager loading cut API response times by 40%.",
  "Comfortable owning a feature end to end: database design, Laravel or Node.js API, React.js UI, deployment with Docker and CI/CD.",
  "Has built multilingual (i18n) features, including Chinese translation for the Books and Inventory products.",
  "Built backend business logic for accounting and inventory: Chart of Accounts, PDF templating and Stripe payments, plus a custom admin panel for large-scale updates across organisations and accounts.",
  "Looking for a full-time onsite Senior Full Stack Developer role in Lahore.",
];

/** Public GitHub (github.com/M-Farhan-Shaukat): 12 public repositories. */
export const github = {
  url: "https://github.com/M-Farhan-Shaukat",
  note: "Most production work (SeeBiz products) is in private company repositories; the public GitHub holds personal and learning projects.",
  repos: [
    "AI-cv-tailor (Laravel, PHP, JavaScript): an AI tool that tailors a CV to a job description.",
    "Chatbot_laravel_echo (Laravel, Blade): a real-time chatbot built with Laravel Echo and broadcasting.",
    "Custom_auth (Laravel 12): a boilerplate with custom role-based authentication for Admin and User, with dashboard redirection and seeded demo users.",
    "SMS and adv-S-M-S (Laravel, PHP, Blade): a Student Management System and an advanced version of it.",
    "DocReview (Laravel, Blade): a document review application.",
    "legal_document_fe (JavaScript): front end for the legal document generation platform (Law Forma).",
    "inventory_management_system_fe (JavaScript): front end for an inventory management system.",
    "resume-maker-fe (JavaScript): a resume builder front end.",
    "portfolio (Next.js, TypeScript): this portfolio website, including its AI chat assistant.",
  ],
};

/**
 * LinkedIn (linkedin.com/in/m-farhanshaukat-9aa172219).
 * Paste your LinkedIn "About", recommendations, certifications or extra skills here
 * as plain sentences; the AI will use them.
 */
export const linkedin: string[] = [];
