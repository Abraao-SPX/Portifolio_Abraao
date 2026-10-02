"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

/** Keeps the link native while moving only its visual surface. */
export default function TiltSurface({ children, className = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;

    const motion = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const properties = ["--preview-rotate-x", "--preview-rotate-y", "--preview-shift-x", "--preview-shift-y", "--preview-light-x", "--preview-light-y"];
    let frame = 0;
    let previousTime = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let listening = false;

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      currentX = currentY = targetX = targetY = 0;
      delete link.dataset.tilting;
      delete link.dataset.moving;
      properties.forEach((property) => link.style.removeProperty(property));
    };

    const animate = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 48) : 16;
      previousTime = time;
      const ease = 1 - Math.exp(-elapsed / 95);
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      link.style.setProperty("--preview-rotate-x", `${(-currentY * 4.5).toFixed(3)}deg`);
      link.style.setProperty("--preview-rotate-y", `${(currentX * 4.5).toFixed(3)}deg`);
      link.style.setProperty("--preview-shift-x", `${(currentX * 5).toFixed(2)}px`);
      link.style.setProperty("--preview-shift-y", `${(currentY * 5).toFixed(2)}px`);
      link.style.setProperty("--preview-light-x", `${50 + currentX * 38}%`);
      link.style.setProperty("--preview-light-y", `${50 + currentY * 38}%`);

      if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.002) {
        frame = requestAnimationFrame(animate);
      } else {
        frame = 0;
        previousTime = 0;
        if (!link.dataset.tilting) reset();
      }
    };

    const start = () => {
      link.dataset.moving = "true";
      if (!frame) frame = requestAnimationFrame(animate);
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      const bounds = link.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
      targetY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
      link.dataset.tilting = "true";
      start();
    };

    const leave = () => {
      targetX = targetY = 0;
      delete link.dataset.tilting;
      start();
    };

    const detach = () => {
      link.removeEventListener("pointerenter", move);
      link.removeEventListener("pointermove", move);
      link.removeEventListener("pointerleave", leave);
      link.removeEventListener("pointercancel", leave);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", reset);
      listening = false;
      reset();
    };

    const syncPreference = () => {
      if (!motion.matches) {
        detach();
        return;
      }
      if (listening) return;
      link.addEventListener("pointerenter", move, { passive: true });
      link.addEventListener("pointermove", move, { passive: true });
      link.addEventListener("pointerleave", leave, { passive: true });
      link.addEventListener("pointercancel", leave, { passive: true });
      window.addEventListener("blur", reset);
      document.addEventListener("visibilitychange", reset);
      listening = true;
    };

    syncPreference();
    motion.addEventListener("change", syncPreference);
    return () => {
      motion.removeEventListener("change", syncPreference);
      detach();
    };
  }, []);

  return (
    <a {...props} className={`project-preview-link ${className}`.trim()} ref={linkRef}>
      <div className="project-preview-plane">{children}</div>
    </a>
  );
}
