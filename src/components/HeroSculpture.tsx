"use client";

import { useEffect, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import { ArrowUpRight, Pause, Play, RotateCcw } from "lucide-react";
import ArchitectureFallback from "./ArchitectureFallback";
import type { ArchitectureSceneController } from "@/lib/architecture-scene";
import "./hero-sculpture.css";

const chapters = [
  { name: "Forma", title: "Toda ideia tem um ponto de partida.", detail: "Uma forma. Infinitas possibilidades." },
  { name: "Estrutura", title: "Por dentro, tudo se conecta.", detail: "Peças independentes. Um sistema inteiro." },
  { name: "Conexão", title: "Construir é ir além do que se vê.", detail: "Código que transforma intenção em movimento." },
];
const clamp = (value: number) => Math.max(-1, Math.min(1, value));

export default function HeroSculpture() {
  const rootRef = useRef<HTMLElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<ArchitectureSceneController | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const scrollSyncRef = useRef<(() => void) | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");
  const [chapter, setChapter] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cinematicEnabled, setCinematicEnabled] = useState(false);
  const settingsRef = useRef({ chapter: 0, motionEnabled: false });
  const manualRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef<{ id: number; x: number; y: number; orbitX: number; orbitY: number } | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const host = hostRef.current;
    if (!root || !host) return;
    let disposed = false;
    let loading = false;
    let visible = false;
    let scrollFrame = 0;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cinematic = window.matchMedia("(min-width: 1100px) and (min-height: 820px)");
    settingsRef.current.motionEnabled = !preference.matches;
    setReducedMotion(preference.matches);
    setMotionEnabled(!preference.matches);
    setCinematicEnabled(cinematic.matches);

    const updateScroll = () => {
      scrollFrame = 0;
      if (!visible || !controllerRef.current || !cinematic.matches || preference.matches || !settingsRef.current.motionEnabled) return;
      if (manualRef.current !== null) {
        if (Math.abs(window.scrollY - manualRef.current) < 32) return;
        manualRef.current = null;
      }
      const story = root.closest<HTMLElement>(".hero-story");
      if (!story) return;
      const bounds = story.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight + 88);
      const progress = Math.max(0, Math.min(1, (88 - bounds.top) / distance));
      controllerRef.current?.setScrollProgress(progress);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      const current = Math.min(2, Math.floor(progress * 2 + 0.5));
      if (settingsRef.current.chapter !== current) {
        settingsRef.current.chapter = current;
        setChapter(current);
      }
    };
    const scheduleScroll = () => {
      if (visible && !scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
    };
    scrollSyncRef.current = scheduleScroll;
    const onCinematicChange = () => {
      setCinematicEnabled(cinematic.matches);
      scheduleScroll();
    };
    const onPreferenceChange = () => {
      const enabled = !preference.matches;
      settingsRef.current.motionEnabled = enabled;
      setReducedMotion(preference.matches);
      setMotionEnabled(enabled);
      controllerRef.current?.setMotionEnabled(enabled);
      controllerRef.current?.setPointer(0, 0);
      pointerRef.current = { x: 0, y: 0 };
      scheduleScroll();
    };
    const fail = () => {
      if (disposed) return;
      setStatus("fallback");
      controllerRef.current?.dispose();
      controllerRef.current = null;
      settingsRef.current.chapter = 0;
      setChapter(0);
      if (progressRef.current) progressRef.current.style.transform = "scaleX(0)";
    };
    const load = async () => {
      if (loading || disposed) return;
      loading = true;
      try {
        const { createArchitectureScene } = await import("@/lib/architecture-scene");
        if (disposed) return;
        const controller = createArchitectureScene(host, {
          motionEnabled: settingsRef.current.motionEnabled,
          exploded: false,
          onError: fail,
        });
        if (disposed) { controller.dispose(); return; }
        controllerRef.current = controller;
        controller.setChapter(settingsRef.current.chapter);
        controller.setVisible(visible && !document.hidden);
        setStatus("ready");
        scheduleScroll();
      } catch { fail(); }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) { void load(); scheduleScroll(); }
      controllerRef.current?.setVisible(visible && !document.hidden);
    }, { threshold: 0.02 });
    const onVisibilityChange = () => controllerRef.current?.setVisible(visible && !document.hidden);
    observer.observe(root);
    preference.addEventListener("change", onPreferenceChange);
    cinematic.addEventListener("change", onCinematicChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("scroll", scheduleScroll, { passive: true });
    window.addEventListener("resize", scheduleScroll, { passive: true });
    return () => {
      disposed = true;
      observer.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
      cinematic.removeEventListener("change", onCinematicChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("scroll", scheduleScroll);
      window.removeEventListener("resize", scheduleScroll);
      cancelAnimationFrame(scrollFrame);
      scrollSyncRef.current = null;
      controllerRef.current?.dispose();
      controllerRef.current = null;
    };
  }, []);

  const selectChapter = (index: number) => {
    manualRef.current = window.scrollY;
    settingsRef.current.chapter = index;
    setChapter(index);
    controllerRef.current?.setChapter(index);
    if (progressRef.current) progressRef.current.style.transform = `scaleX(${index / 2})`;
  };
  const replay = () => {
    selectChapter(0);
    pointerRef.current = { x: 0, y: 0 };
    controllerRef.current?.setPointer(0, 0);
    controllerRef.current?.replay();
  };
  const toggleMotion = () => {
    const enabled = !settingsRef.current.motionEnabled;
    settingsRef.current.motionEnabled = enabled;
    setMotionEnabled(enabled);
    controllerRef.current?.setMotionEnabled(enabled);
    if (enabled) scrollSyncRef.current?.();
  };
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (status !== "ready" || reducedMotion || event.button !== 0) return;
    dragRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY, orbitX: pointerRef.current.x, orbitY: pointerRef.current.y };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.dataset.dragging = "true";
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const drag = dragRef.current;
    if (drag) {
      pointerRef.current = {
        x: clamp(drag.orbitX + (event.clientX - drag.x) / bounds.width * 3),
        y: clamp(drag.orbitY + (event.clientY - drag.y) / bounds.height * 2),
      };
    } else if (event.pointerType === "mouse" && settingsRef.current.motionEnabled) {
      pointerRef.current = {
        x: (((event.clientX - bounds.left) / bounds.width) * 2 - 1) * 0.42,
        y: (((event.clientY - bounds.top) / bounds.height) * 2 - 1) * 0.35,
      };
    } else return;
    controllerRef.current?.setPointer(pointerRef.current.x, pointerRef.current.y);
  };
  const releasePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current = null;
    delete event.currentTarget.dataset.dragging;
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, [number, number]> = { ArrowLeft: [-0.2, 0], ArrowRight: [0.2, 0], ArrowUp: [0, -0.2], ArrowDown: [0, 0.2] };
    if (event.key === "Home") {
      event.preventDefault();
      pointerRef.current = { x: 0, y: 0 };
      controllerRef.current?.setPointer(0, 0);
    } else if (keys[event.key] && !reducedMotion) {
      event.preventDefault();
      const [x, y] = keys[event.key];
      pointerRef.current = { x: clamp(pointerRef.current.x + x), y: clamp(pointerRef.current.y + y) };
      controllerRef.current?.setPointer(pointerRef.current.x, pointerRef.current.y);
    }
  };

  return (
    <figure className={`hero-sculpture sculpture-${status}`} data-chapter={chapter} ref={rootRef} aria-labelledby="sculpture-caption">
      <div className="sculpture-topline"><span className="sculpture-live-dot" aria-hidden="true" /><span>ESTUDO EM MOVIMENTO</span><span className="sculpture-edition">AP—003</span></div>
      <div id="architecture-model" className="sculpture-viewport" role="group" tabIndex={status === "ready" ? 0 : -1} aria-label="Escultura 3D interativa" aria-describedby="sculpture-instructions" onKeyDown={onKeyDown} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={releasePointer} onPointerCancel={releasePointer} onLostPointerCapture={releasePointer}>
        <div className="sculpture-guides" aria-hidden="true"><span>+</span><span>+</span><span>+</span><span>+</span></div>
        <span className="sculpture-side-note" aria-hidden="true">IDEIA → SISTEMA → POSSIBILIDADE</span>
        <div className="sculpture-static" aria-hidden="true"><ArchitectureFallback /></div>
        <div className="sculpture-canvas" ref={hostRef} aria-hidden="true" />
        <span className="sculpture-step-number" aria-hidden="true">0{chapter + 1}<i> / 03</i></span>
        <span className="sculpture-stage-hint" aria-hidden="true">ARRASTE PARA EXPLORAR</span>
      </div>
      <p id="sculpture-instructions" className="sculpture-sr-only">{reducedMotion ? "Use os botões abaixo para alternar entre as três composições estáticas." : "Arraste para girar a escultura ou use as setas do teclado. A tecla Home restaura a orientação. Os botões abaixo alternam as três composições."}</p>
      <figcaption className="sculpture-caption" id="sculpture-caption">
        <div className="sculpture-caption-copy" key={chapter}><span className="sculpture-caption-title">{chapters[chapter].title}</span><span className="sculpture-caption-detail">{chapters[chapter].detail}</span></div>
        <ArrowUpRight size={23} strokeWidth={1.3} aria-hidden="true" />
      </figcaption>
      <div className="sculpture-chapters" role="group" aria-label="Etapas da escultura">
        {chapters.map((item, index) => <button type="button" key={item.name} onClick={() => selectChapter(index)} disabled={status !== "ready"} aria-pressed={chapter === index} aria-controls="architecture-model"><span>0{index + 1}</span>{item.name}</button>)}
      </div>
      <div className="sculpture-timeline" aria-hidden="true"><div ref={progressRef} /></div>
      <div className="sculpture-toolbar">
        <span className="sculpture-scroll-note">{status === "fallback" ? "ESTUDO DE FORMA E MOVIMENTO" : !reducedMotion && cinematicEnabled ? "ROLE PARA TRANSFORMAR" : "EXPLORE AS TRÊS COMPOSIÇÕES"}</span>
        <div>
          <button type="button" onClick={replay} disabled={status !== "ready"} aria-label="Recomeçar sequência 3D" title="Recomeçar sequência"><RotateCcw size={14} aria-hidden="true" /></button>
          {!reducedMotion && <button type="button" onClick={toggleMotion} disabled={status !== "ready"} aria-label={motionEnabled ? "Pausar animação 3D" : "Retomar animação 3D"} title={motionEnabled ? "Pausar animação" : "Retomar animação"}>{motionEnabled ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}</button>}
        </div>
      </div>
    </figure>
  );
}
