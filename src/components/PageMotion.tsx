"use client";

import { useEffect, useRef } from "react";
import "./motion.css";

const revealSelector = [
  ".projects-section-header",
  ".project-card",
  ".project-identity",
  ".about-title-column",
  ".about-copy",
  ".skills-intro",
  ".skills-row",
  ".journey-item",
  ".contact-copy",
  ".contact-form",
].join(",");

export default function PageMotion() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const animations = new Map<HTMLElement, Animation>();
    const visited = new Set<HTMLElement>();
    const asterisk = document.querySelector<HTMLElement>(".about-asterisk");
    const about = document.querySelector<HTMLElement>(".about-section");
    let asteriskVisible = false;
    let frame = 0;

    const updateScroll = () => {
      frame = 0;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / pageHeight)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;

      if (!preference.matches && asteriskVisible && about && asterisk) {
        const bounds = about.getBoundingClientRect();
        const position = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
        asterisk.style.setProperty("--about-turn", `${-28 + position * 76}deg`);
      }
    };

    const scheduleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    // Every element is readable in the server-rendered page. Only animate once
    // it enters the viewport; there is no hidden class waiting for JavaScript.
    const revealObserver = "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          revealObserver?.unobserve(element);
          if (visited.has(element)) return;
          visited.add(element);

          if (preference.matches || element.contains(document.activeElement) || !element.animate) return;

          const siblings = element.parentElement
            ? Array.from(element.parentElement.children).filter((sibling) => sibling.matches(revealSelector))
            : [];
          const delay = Math.min(Math.max(0, siblings.indexOf(element)), 3) * 75;
          const isProject = element.classList.contains("project-card");

          const animation = element.animate([
            { opacity: 0.2, transform: isProject ? "perspective(1100px) translateY(28px) rotateX(4deg)" : "translateY(22px)" },
            { opacity: 1, transform: "none" },
          ], {
            duration: 680,
            delay,
            easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
            fill: "backwards",
          });

          animations.set(element, animation);
          animation.onfinish = () => {
            animations.delete(element);
            animation.cancel();
          };
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" })
      : null;

    const asteriskObserver = "IntersectionObserver" in window && asterisk
      ? new IntersectionObserver(([entry]) => {
        asteriskVisible = entry.isIntersecting;
        if (asteriskVisible) scheduleScroll();
      })
      : null;

    const finishForFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      for (const element of elements) {
        if (!element.contains(event.target)) continue;
        visited.add(element);
        revealObserver?.unobserve(element);
        animations.get(element)?.cancel();
        animations.delete(element);
      }
    };

    const onPreferenceChange = () => {
      if (preference.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
        asterisk?.style.removeProperty("--about-turn");
      }
      scheduleScroll();
    };

    elements.forEach((element) => revealObserver?.observe(element));
    if (asterisk) asteriskObserver?.observe(asterisk);

    // Recompute the reading position after late font/layout changes as well.
    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(scheduleScroll) : null;
    resizeObserver?.observe(document.body);
    window.addEventListener("scroll", scheduleScroll, { passive: true });
    window.addEventListener("resize", scheduleScroll, { passive: true });
    document.addEventListener("focusin", finishForFocus);
    preference.addEventListener("change", onPreferenceChange);
    scheduleScroll();

    return () => {
      window.cancelAnimationFrame(frame);
      revealObserver?.disconnect();
      asteriskObserver?.disconnect();
      resizeObserver?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      asterisk?.style.removeProperty("--about-turn");
      window.removeEventListener("scroll", scheduleScroll);
      window.removeEventListener("resize", scheduleScroll);
      document.removeEventListener("focusin", finishForFocus);
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return <div ref={progressRef} className="page-scroll-progress" aria-hidden="true" />;
}
