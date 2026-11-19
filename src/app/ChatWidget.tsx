"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./chat.module.css";

type Msg = { role: "user" | "assistant"; content: string };

const STARTERS = [
  { emoji: "💼", text: "Why hire Farhan?" },
  { emoji: "🚀", text: "What does Farhan work on?" },
  { emoji: "🤖", text: "Tell me about SeeATS" },
  { emoji: "🧩", text: "What is his Laravel experience?" },
  { emoji: "📅", text: "Is he open to new roles?" },
];

const GREETING: Msg = {
  role: "assistant",
  content: "Hi there! 👋 I'm Farhan's AI assistant.\nAsk me anything about his experience, projects or skills ✨",
};

/** Floating "Ask AI" chat that answers questions about Farhan from /api/chat. */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [hint, setHint] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // A one-time "Hi 👋" bubble next to the launcher
  useEffect(() => {
    const show = setTimeout(() => setHint(true), 4000);
    const hide = setTimeout(() => setHint(false), 11000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const toggle = () => {
    setHint(false);
    setOpen((o) => !o);
  };

  async function send(text: string) {
    const question = text.trim();
    if (!question || busy) return;
    const history: Msg[] = [...messages, { role: "user", content: question }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;
    const write = (content: string) =>
      setMessages((m) => [...m.slice(0, -1), { role: "assistant", content }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // the greeting is UI only, so it is not sent
        body: JSON.stringify({ messages: history.filter((m) => m !== GREETING) }),
        signal: controller.signal,
      });
      if (!res.ok || !res.body) {
        const msg = (await res.text().catch(() => "")) || "Something went wrong. Please try again.";
        write(res.status === 429 ? msg : `😕 ${msg}`);
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        write(answer);
      }
      if (!answer.trim()) write("🤔 Sorry, I couldn't answer that. Try asking another way?");
    } catch (err) {
      if ((err as Error).name !== "AbortError") write("📡 Connection problem. Please try again.");
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const showStarters = messages.length === 1;
  const last = messages.length - 1;

  return (
    <>
      {hint && !open && (
        <button type="button" className={styles.hint} onClick={toggle}>
          <span className={styles.wave} aria-hidden="true">👋</span> Hi! Ask me about Farhan
        </button>
      )}

      <button
        type="button"
        className={`${styles.launcher} ${open ? styles.launcherOpen : ""}`}
        onClick={toggle}
        aria-label={open ? "Close AI chat" : "Ask my AI about Farhan"}
        aria-expanded={open}
        data-cursor={open ? "" : "Ask AI"}
      >
        <svg className={styles.iconChat} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3c.4 3.4 1.9 5 5 5.5-3.1.5-4.6 2.1-5 5.5-.4-3.4-1.9-5-5-5.5 3.1-.5 4.6-2.1 5-5.5Z" />
          <path d="M19 14c.2 1.6.9 2.4 2.4 2.6-1.5.2-2.2 1-2.4 2.6-.2-1.6-.9-2.4-2.4-2.6 1.5-.2 2.2-1 2.4-2.6Z" />
        </svg>
        <svg className={styles.iconClose} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
        <span className={styles.launcherLabel}>Ask AI</span>
      </button>

      {open && (
        <section className={styles.panel} role="dialog" aria-label="Ask AI about Farhan">
          <header className={styles.head}>
            <span className={styles.avatar} aria-hidden="true">
              MF
              <span className={styles.online} />
            </span>
            <div>
              <strong>
                Farhan&apos;s AI <span className={styles.sparkle} aria-hidden="true">✨</span>
              </strong>
              <small>Answers from his resume &amp; projects</small>
            </div>
            <button type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </header>

          <div ref={listRef} className={styles.list} data-lenis-prevent aria-live="polite">
            {messages.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className={`${styles.msg} ${styles.user}`}>
                  {m.content}
                </div>
              ) : (
                <div key={i} className={styles.botRow}>
                  <span className={styles.botAvatar} aria-hidden="true">🤖</span>
                  <div className={`${styles.msg} ${styles.bot} ${busy && i === last ? styles.streaming : ""}`}>
                    {m.content || (
                      <span className={styles.typing} aria-label="Thinking">
                        <i />
                        <i />
                        <i />
                      </span>
                    )}
                  </div>
                </div>
              ),
            )}
            {showStarters && (
              <div className={styles.starters}>
                <span className={styles.startersTitle}>Try asking</span>
                {STARTERS.map((q, i) => (
                  <button key={q.text} type="button" onClick={() => send(q.text)} style={{ animationDelay: `${0.25 + i * 0.07}s` }}>
                    <span aria-hidden="true">{q.emoji}</span> {q.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={800}
              placeholder="Type your question… 💬"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              aria-label="Your question"
            />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
              </svg>
            </button>
          </form>
          <p className={styles.note}>⚡ Powered by AI · it can make mistakes</p>
        </section>
      )}
    </>
  );
}
