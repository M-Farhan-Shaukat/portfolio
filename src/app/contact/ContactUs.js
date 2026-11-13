'use client';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../page.module.css';

const EMAILJS_PUBLIC_KEY = '6_vKg1XbaYvRELYgv';
const EMAILJS_SERVICE = 'service_bffriiu';
const EMAILJS_TEMPLATE = 'template_n8ttg79';

const nameRegex = /^[a-zA-Z ._-]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validate(name, value) {
  const v = value.trim();
  if (name === 'name') {
    if (!v) return 'Name is required.';
    if (!nameRegex.test(v)) return "Name can only contain letters, spaces, '.', '_' and '-'.";
  }
  if (name === 'email') {
    if (!v) return 'Email is required.';
    if (!emailRegex.test(v)) return 'Please enter a valid email address (e.g. name@domain.com).';
  }
  if (name === 'subject' && !v) return 'Subject cannot be empty.';
  if (name === 'message' && !v) return 'Message cannot be empty.';
  return '';
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const setFieldError = (name, value) => {
    const msg = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: msg }));
    return msg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setFieldError(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const hasError = ['name', 'email', 'subject', 'message']
      .map((f) => setFieldError(f, form[f]))
      .some(Boolean);
    if (hasError) return;

    setIsSubmitting(true);
    emailjs
      .send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          name: form.name,
          email: form.email,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      })
      .catch(() => setError('Failed to send message. Please try again later.'))
      .finally(() => setIsSubmitting(false));
  };

  // Hide notices after 5 seconds
  useEffect(() => {
    if (!submitted && !error) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
      setError('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [submitted, error]);

  const field = (name, label, props = {}, Tag = 'input') => (
    <div className={styles.formGroup}>
      <label htmlFor={`contact-${name}`}>{label}</label>
      <Tag
        id={`contact-${name}`}
        name={name}
        className={`${styles.input} ${errors[name] ? styles.inputError : ''}`}
        value={form[name]}
        onChange={handleChange}
        onBlur={(e) => setFieldError(name, e.target.value)}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `contact-${name}-error` : undefined}
        required
        {...props}
      />
      {errors[name] && (
        <span id={`contact-${name}-error`} className={styles.fieldError}>
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <h3 className={styles.formTitle}>Send a message</h3>
      <div className={styles.formRow}>
        {field('name', 'Name', { type: 'text', placeholder: 'Your name', autoComplete: 'name' })}
        {field('email', 'Email', { type: 'email', placeholder: 'you@company.com', autoComplete: 'email' })}
      </div>
      {field('subject', 'Subject', { type: 'text', placeholder: 'What is it about?' })}
      {field('message', 'Message', { rows: 5, placeholder: 'Tell me about the role or the project…' }, 'textarea')}

      <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send message'}
      </button>

      <div aria-live="polite">
        {submitted && (
          <p className={`${styles.formNotice} ${styles.formSuccess}`}>
            Thank you for getting in touch! I&apos;ll get back to you soon.
          </p>
        )}
        {error && <p className={`${styles.formNotice} ${styles.formFail}`}>{error}</p>}
      </div>
    </form>
  );
}
