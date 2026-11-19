"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./resume.module.css";
import { resume } from "./resumeData";

type Props = { open: boolean; onClose: () => void; cvHref: string };

/** Plain, document-style resume shown over the portfolio on the same page. */
export default function ResumeView({ open, onClose, cvHref }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.classList.add("resume-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("resume-open");
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div id="resume-view" className={styles.overlay} role="dialog" aria-modal="true" aria-label="Resume, plain view">
      <div className={styles.toolbar}>
        <button ref={closeRef} type="button" className={styles.back} onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Back to portfolio
        </button>
        <div className={styles.actions}>
          <button type="button" className={styles.ghost} onClick={() => window.print()}>
            Print
          </button>
          <a href={cvHref} download className={styles.primary}>
            Download PDF
          </a>
        </div>
      </div>

      <div className={styles.scroller} data-lenis-prevent>
        <article className={styles.paper}>
          <header className={styles.head}>
            <h1>{resume.name}</h1>
            <p className={styles.headline}>{resume.headline}</p>
            <p className={styles.contact}>
              {resume.contact.map((c, i) => (
                <span key={c.label}>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {c.label}
                    </a>
                  ) : (
                    c.label
                  )}
                  {i < resume.contact.length - 1 && <span className={styles.sep}>|</span>}
                </span>
              ))}
            </p>
          </header>

          <section>
            <h2>Professional Summary</h2>
            <p>{resume.summary}</p>
          </section>

          <section>
            <h2>Technical Skills</h2>
            <ul className={styles.skills}>
              {resume.skills.map(([k, v]) => (
                <li key={k}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Professional Experience</h2>
            {resume.experience.map((job) => (
              <div key={job.company} className={styles.entry}>
                <h3>
                  {job.role} — {job.company}
                </h3>
                <p className={styles.meta}>{job.meta}</p>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2>Projects</h2>
            {resume.projects.map((p) => (
              <div key={p.name} className={styles.entry}>
                <h3>
                  {p.name}
                  {p.url && (
                    <>
                      {" "}
                      <a href={`https://${p.url}`} target="_blank" rel="noreferrer">
                        ({p.url})
                      </a>
                    </>
                  )}
                </h3>
                <p className={styles.meta}>Technologies: {p.tech}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2>Education</h2>
            {resume.education.map((e) => (
              <div key={e.title} className={styles.entry}>
                <h3>{e.title}</h3>
                <p className={styles.meta}>{e.meta}</p>
              </div>
            ))}
          </section>

          <section>
            <h2>Languages</h2>
            <p>{resume.languages}</p>
          </section>
        </article>
      </div>
    </div>,
    document.body,
  );
}
