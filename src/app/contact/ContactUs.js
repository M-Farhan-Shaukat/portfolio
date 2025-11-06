'use client';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../page.module.css';
import Link from 'next/link';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("6_vKg1XbaYvRELYgv");
  }, []);

  // Regex patterns
  const nameRegex = /^[a-zA-Z ._-]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validation logic
  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required.";
      else if (!nameRegex.test(value.trim()))
        error = "Name can only contain letters, space, '.', '_', and '-'.";
    }
    if (name === "email") {
      if (!value.trim()) error = "Email is required.";
      else if (!emailRegex.test(value.trim()))
        error = "Please enter a valid email address (e.g., example@domain.com).";
    }
    if (name === "subject") {
      if (!value.trim()) error = "Subject cannot be empty.";
    }
    if (name === "message") {
      if (!value.trim()) error = "Message cannot be empty.";
      else if (value.trim().length < 1)
        error = "Message should be at least 1 characters long.";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSubmitted(false);

    // Validate all fields
    const nameError = validateField("name", form.name);
    const emailError = validateField("email", form.email);
    const subjectError = validateField("subject", form.subject);
    const messageError = validateField("message", form.message);

    if (
      nameError ||
      emailError ||
      subjectError ||
      messageError ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setIsSubmitting(false);
      return;
    }

    // EmailJS send
    emailjs.send(
      "service_bffriiu",
      "template_n8ttg79",
      {
        name: form.name,
        email: form.email,
        reply_to: form.email, // for Reply-To
        subject: form.subject,
        message: form.message,
      },
      "6_vKg1XbaYvRELYgv"
    )
      .then(() => {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      })
      .catch(() => {
        setError('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Hide notifications after 3 seconds
  useEffect(() => {
    let timer;
    if (submitted || error) {
      timer = setTimeout(() => {
        setSubmitted(false);
        setError('');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [submitted, error]);

  // Theme classes
  const cardClass = "card bg-dark text-light border-secondary" ;
  const cardBodyClass = "card-body bg-dark text-light" ;

  return (
    <>
      
      <p>
        <Link href="mailto:mfarhanshaukatali786@gmail.com"></Link>
      </p>
     
     
    <form className={styles.contactForm} style={{width: '100%'}} onSubmit={handleSubmit} noValidate>
              <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                id="contactName"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={form.name}
                onChange={handleChange}
                onBlur={e => validateField(e.target.name, e.target.value)}
                placeholder="Your Name"
                required
                aria-describedby="nameHelp"
              />
              {errors.name && (
                <div id="nameHelp" className="invalid-feedback">
                  {errors.name}
                </div>
              )}
              </div>
              <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                id="contactEmail"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={form.email}
                onChange={handleChange}
                onBlur={e => validateField(e.target.name, e.target.value)}
                placeholder="Your Email"
                required
                aria-describedby="emailHelp"
              />
               {errors.email && (
                <div id="emailHelp" className="invalid-feedback">
                  {errors.email}
                </div>
              )}
              </div>
              <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                id="contactSubject"
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                value={form.subject}
                onChange={handleChange}
                onBlur={e => validateField(e.target.name, e.target.value)}
                placeholder="Subject"
                required
                aria-describedby="subjectHelp"
              />
              {errors.subject && (
                <div id="subjectHelp" className="invalid-feedback">
                  {errors.subject}
                </div>
              )}
              </div>
              <div className={styles.formGroup}>
              <textarea
                name="message"
                id="contactMessage"
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                value={form.message}
                onChange={handleChange}
                onBlur={e => validateField(e.target.name, e.target.value)}
                placeholder="Write your message here..."
                rows="5"
                required
                aria-describedby="messageHelp"
              ></textarea>
               {errors.message && (
                <div id="messageHelp" className="invalid-feedback">
                  {errors.message}
                </div>
              )}
              </div>
              <button
              type="submit"
              className={styles.btnPrimary}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            {submitted && (
              <div className="alert alert-success mt-3" role="alert">
                Thank you for contacting me! I'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
            </form>
              
    </>
  );
} 