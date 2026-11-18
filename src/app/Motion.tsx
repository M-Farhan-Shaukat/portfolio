"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import styles from "./page.module.css";

/**
 * Site-wide motion layer:
 *  - Lenis smooth scrolling (+ smooth anchor links)
 *  - custom cursor: instant dot + lagging ring that stretches with speed,
 *    a soft spotlight that follows the pointer and a ripple on click
 *  - ring shows a label for [data-cursor] targets
 *  - magnetic pull on [data-magnetic] elements
 *  - 3D tilt + glare on [data-tilt] elements
 * Everything is skipped for touch devices and for prefers-reduced-motion.
 */
export default function Motion({ paused }: { paused: boolean }) {
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Smooth scroll
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let id = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.querySelector<HTMLElement>(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: 0 });
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause smooth scroll while the mobile menu is open
  useEffect(() => {
    if (!lenisRef.current) return;
    if (paused) lenisRef.current.stop();
    else lenisRef.current.start();
  }, [paused]);

  // Cursor, magnetic, tilt (fine pointers only)
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const ring = ringRef.current;
    const label = labelRef.current;
    const dot = dotRef.current;
    const glow = glowRef.current;
    let labelled = false;
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let frame = 0;

    const loop = () => {
      const dx = (mx - rx) * 0.18;
      const dy = (my - ry) * 0.18;
      rx += dx;
      ry += dy;
      // Stretch the ring along its direction of travel
      const speed = Math.min(Math.hypot(dx, dy) / 30, 0.45);
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      if (ring) {
        ring.style.transform = labelled
          ? `translate3d(${rx}px, ${ry}px, 0)`
          : `translate3d(${rx}px, ${ry}px, 0) rotate(${angle}deg) scale(${1 + speed}, ${1 - speed * 0.5})`;
      }
      if (glow) glow.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      ring?.classList.add(styles.cursorOn);
      dot?.classList.add(styles.cursorOn);
      glow?.classList.add(styles.cursorOn);

      const target = e.target as HTMLElement;
      const labelEl = target.closest<HTMLElement>("[data-cursor]");
      const interactive = target.closest("a, button, summary, [role=tab]");
      labelled = !!labelEl;
      ring?.classList.toggle(styles.cursorLabel, labelled);
      ring?.classList.toggle(styles.cursorHover, !labelled && !!interactive);
      dot?.classList.toggle(styles.cursorDotHide, labelled || !!interactive);
      if (label) label.textContent = labelEl?.dataset.cursor ?? "";
    };
    const onLeave = () => {
      ring?.classList.remove(styles.cursorOn);
      dot?.classList.remove(styles.cursorOn);
      glow?.classList.remove(styles.cursorOn);
    };
    // Ripple on click
    const onDown = (e: PointerEvent) => {
      const ripple = document.createElement("span");
      ripple.className = styles.cursorRipple;
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
      ring?.classList.add(styles.cursorPress);
    };
    const onUp = () => ring?.classList.remove(styles.cursorPress);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);

    // Magnetic
    const magnets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const magMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.translate = `${x * 0.25}px ${y * 0.35}px`;
    };
    const magLeave = (e: PointerEvent) => {
      (e.currentTarget as HTMLElement).style.translate = "";
    };
    magnets.forEach((el) => {
      el.addEventListener("pointermove", magMove);
      el.addEventListener("pointerleave", magLeave);
    });

    // Tilt + glare
    const tilts = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const tiltMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", `${(px - 0.5) * 9}deg`);
      el.style.setProperty("--rx", `${(0.5 - py) * 9}deg`);
      el.style.setProperty("--gx", `${px * 100}%`);
      el.style.setProperty("--gy", `${py * 100}%`);
      el.classList.add(styles.tilting);
    };
    const tiltLeave = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.classList.remove(styles.tilting);
    };
    tilts.forEach((el) => {
      el.addEventListener("pointermove", tiltMove);
      el.addEventListener("pointerleave", tiltLeave);
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      magnets.forEach((el) => {
        el.removeEventListener("pointermove", magMove);
        el.removeEventListener("pointerleave", magLeave);
      });
      tilts.forEach((el) => {
        el.removeEventListener("pointermove", tiltMove);
        el.removeEventListener("pointerleave", tiltLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className={styles.cursorGlow} aria-hidden="true" />
      <div ref={ringRef} className={styles.cursor} aria-hidden="true">
        <span ref={labelRef} />
      </div>
      <div ref={dotRef} className={styles.cursorDot} aria-hidden="true" />
    </>
  );
}
