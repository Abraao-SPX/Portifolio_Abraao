"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Layers3, MoveUpRight, Pause, Play } from "lucide-react";
import ArchitectureFallback from "./ArchitectureFallback";
import type { ArchitectureSceneController } from "@/lib/architecture-scene";
import "./hero-sculpture.css";

export default function HeroSculpture() {
  const rootRef = useRef<HTMLElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<ArchitectureSceneController | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");
  const [exploded, setExploded] = useState(true);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const settingsRef = useRef({ exploded: true, motionEnabled: false });

  useEffect(() => {
    const root = rootRef.current;
    const host = hostRef.current;
    if (!root || !host) return;

    let disposed = false;
    let loading = false;
    let visible = false;
    let scrollFrame = 0;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    settingsRef.current.motionEnabled = !preference.matches;
    setReducedMotion(preference.matches);
    setMotionEnabled(!preference.matches);

    const onPreferenceChange = () => {
      const enabled = !preference.matches;
      settingsRef.current.motionEnabled = enabled;
      setReducedMotion(preference.matches);
      setMotionEnabled(enabled);
      controllerRef.current?.setMotionEnabled(enabled);
      controllerRef.current?.setPointer(0, 0);
    };
    const fail = () => {
      if (disposed) return;
      setStatus("fallback");
      controllerRef.current?.dispose();
      controllerRef.current = null;
    };
    const load = async () => {
      if (loading || disposed) return;
      loading = true;
      try {
        const { createArchitectureScene } = await import("@/lib/architecture-scene");
        if (disposed) return;
        const controller = createArchitectureScene(host, {
          motionEnabled: settingsRef.current.motionEnabled,
          exploded: settingsRef.current.exploded,
          onError: fail,
        });
        if (disposed) {
          controller.dispose();
          return;
        }
        controllerRef.current = controller;
        controller.setVisible(visible && !document.hidden);
        setStatus("ready");
      } catch {
        fail();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) void load();
      controllerRef.current?.setVisible(visible && !document.hidden);
    }, { threshold: 0.05 });
    const onVisibilityChange = () => controllerRef.current?.setVisible(visible && !document.hidden);
    const onScroll = () => {
      if (!visible || scrollFrame || !settingsRef.current.motionEnabled) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const hero = root.closest("section");
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        controllerRef.current?.setScrollProgress(Math.max(0, Math.min(1, -rect.top / rect.height)));
      });
    };

    observer.observe(root);
    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      disposed = true;
      observer.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(scrollFrame);
      controllerRef.current?.dispose();
      controllerRef.current = null;
    };
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !settingsRef.current.motionEnabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    controllerRef.current?.setPointer(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      ((event.clientY - rect.top) / rect.height) * 2 - 1,
    );
  };
  const toggleExploded = () => {
    const next = !settingsRef.current.exploded;
    settingsRef.current.exploded = next;
    setExploded(next);
    controllerRef.current?.setExploded(next);
  };
  const toggleMotion = () => {
    const next = !settingsRef.current.motionEnabled;
    settingsRef.current.motionEnabled = next;
    setMotionEnabled(next);
    controllerRef.current?.setMotionEnabled(next);
    controllerRef.current?.setPointer(0, 0);
  };

  return (
    <figure className={`hero-sculpture sculpture-${status}`} ref={rootRef} aria-labelledby="sculpture-caption">
      <div className="sculpture-topline" aria-hidden="true">
        <span>FIG. 01 — IDEIAS GANHAM FORMA</span>
        <span className="sculpture-edition">AP / 001</span>
      </div>
      <div
        id="architecture-model"
        className="sculpture-viewport"
        onPointerMove={onPointerMove}
        onPointerLeave={() => controllerRef.current?.setPointer(0, 0)}
      >
        <div className="sculpture-guides" aria-hidden="true"><i /><i /><span>+</span><span>+</span></div>
        <div className="sculpture-static" aria-hidden="true"><ArchitectureFallback /></div>
        <div className="sculpture-canvas" ref={hostRef} aria-hidden="true" />
        <span className="sculpture-axis" aria-hidden="true">X / Y / Z</span>
      </div>
      <figcaption className="sculpture-caption" id="sculpture-caption">
        <div><span className="sculpture-caption-title">Uma ideia. Várias camadas.</span><span className="sculpture-caption-detail">Interface, lógica e uma boa base.</span></div>
        <MoveUpRight size={24} strokeWidth={1.3} aria-hidden="true" />
      </figcaption>
      {status === "ready" && (
        <div className="sculpture-controls">
          <button type="button" onClick={toggleExploded} aria-controls="architecture-model" className="sculpture-layer-button">
            <Layers3 size={14} strokeWidth={1.5} aria-hidden="true" />
            <span>{exploded ? "Juntar camadas" : "Separar camadas"}</span>
          </button>
          <span className="sculpture-hint" aria-hidden="true">{motionEnabled ? "MOVA O CURSOR" : "MOVIMENTO PAUSADO"}</span>
          {!reducedMotion && (
            <button type="button" className="sculpture-motion-button" onClick={toggleMotion} aria-label={motionEnabled ? "Pausar animação 3D" : "Retomar animação 3D"} title={motionEnabled ? "Pausar animação" : "Retomar animação"}>
              {motionEnabled ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}
            </button>
          )}
        </div>
      )}
    </figure>
  );
}
