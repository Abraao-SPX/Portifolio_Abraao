"use client";

import React, { useState } from "react";
import {
  Activity,
  Terminal as TerminalIcon,
  Network,
  Cpu,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import type {
  Locale,
  TopologyNode,
  PortfolioDictionary,
} from "@/content/portfolio-data";
import { cn } from "@/lib/utils";

interface HeroControlPlaneProps {
  locale: Locale;
  nodes: TopologyNode[];
  visualTabs: PortfolioDictionary["hero"]["visualTabs"];
  topologyHint: string;
  terminalHint: string;
}

interface TerminalEntry {
  cmd: string;
  output: string[];
}

export function HeroControlPlane({
  locale,
  nodes,
  visualTabs,
  topologyHint,
  terminalHint,
}: HeroControlPlaneProps) {
  const [activeTab, setActiveTab] = useState<"topology" | "terminal">("topology");
  const [selectedNodeId, setSelectedNodeId] = useState<string>("kafka");
  const [terminalInput, setTerminalInput] = useState<string>("");

  const selectedNode =
    nodes.find((n) => n.id === selectedNodeId) ?? nodes[2] ?? nodes[0];

  const initialHistory: TerminalEntry[] =
    locale === "pt"
      ? [
          {
            cmd: "abraao-cli status --cluster",
            output: [
              "● CLUSTER: abraao-dev.tech (OCI ARM64 + Cloudflare Edge)",
              "├─ edge.cloudflare   [UP]  Anycast DNS · WAF · Zero-Trust",
              "├─ api.gateway       [UP]  Spring Boot 3 (Java 21) + FastAPI (ONNX)",
              "├─ event.backbone    [UP]  Apache Kafka (6 partitions · CQRS)",
              "└─ storage.engine    [UP]  Redis Read Model (<1ms) + PostgreSQL ACID",
            ],
          },
        ]
      : [
          {
            cmd: "abraao-cli status --cluster",
            output: [
              "● CLUSTER: abraao-dev.tech (OCI ARM64 + Cloudflare Edge)",
              "├─ edge.cloudflare   [UP]  Anycast DNS · WAF · Zero-Trust",
              "├─ api.gateway       [UP]  Spring Boot 3 (Java 21) + FastAPI (ONNX)",
              "├─ event.backbone    [UP]  Apache Kafka (6 partitions · CQRS)",
              "└─ storage.engine    [UP]  Redis Read Model (<1ms) + PostgreSQL ACID",
            ],
          },
        ];

  const [history, setHistory] = useState<TerminalEntry[]>(initialHistory);

  const runCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setTerminalInput("");
      return;
    }

    let output: string[] = [];

    if (cmd.includes("help")) {
      output =
        locale === "pt"
          ? [
              "Comandos disponíveis no Control Plane:",
              "  status      → Estado da infraestrutura e serviços distribuídos",
              "  projects    → Lista os 6 sistemas principais em destaque",
              "  research    → Publicação CLIHC 2026 / SBC e Mestrado CC (UFS)",
              "  stack       → Camadas de tecnologia (Back-end, Cloud, Front/Mobile)",
              "  health      → Executa health-check nos nós Kafka/Redis/OCI",
              "  clear       → Limpa o buffer do terminal",
            ]
          : [
              "Available Control Plane commands:",
              "  status      → Distributed infrastructure and service health",
              "  projects    → List the 6 featured engineering case studies",
              "  research    → CLIHC 2026 / SBC publication & CS M.Sc. (UFS)",
              "  stack       → Technology layers (Back-end, Cloud, Front/Mobile)",
              "  health      → Run health-check probe across Kafka/Redis/OCI",
              "  clear       → Clear terminal buffer",
            ];
    } else if (cmd.includes("project")) {
      output = [
        "01. CaronaJu                    [CLIHC 2026 / SBC · P2P Mobility]",
        "02. Transaction Event Processor [Java · Spring Boot · Kafka · Redis · CQRS]",
        "03. PrintWeb (printweb.me)      [TypeScript · React · Spring Boot · PDF]",
        "04. IncluEdu Engine             [Open-Source · Spring Boot · PostgreSQL]",
        "05. Biometric Validation API    [Python · FastAPI · ONNX · OCI ARM64]",
        "06. NeuroFlow                   [Flutter · Node.js · JWT · MySQL]",
      ];
    } else if (cmd.includes("research") || cmd.includes("clihc")) {
      output =
        locale === "pt"
          ? [
              "PUBLICAÇÃO: CLIHC 2026 — Sociedade Brasileira de Computação (SBC)",
              "TÍTULO:     CaronaJu: Plataforma P2P de Mobilidade Sustentável Universitária",
              "MESTRADO:   Candidato ao Mestrado em Ciência da Computação (PROCC / UFS)",
              "FOCO:       Engenharia de Software & Desenvolvimento Assistido por IA",
            ]
          : [
              "PUBLICATION: CLIHC 2026 — Brazilian Computer Society (SBC)",
              "TITLE:       CaronaJu: P2P Sustainable University Mobility Platform",
              "M.SC.:       M.Sc. Candidate in Computer Science (PROCC / UFS)",
              "FOCUS:       Software Engineering & AI-Assisted Development",
            ];
    } else if (cmd.includes("stack")) {
      output = [
        "LAYER 01 [BACK-END]   Java 21 · Spring Boot · Spring AI · Kafka · Node.js · Python",
        "LAYER 02 [DATA/CLOUD] PostgreSQL · MySQL · Redis · Docker · Linux · OCI · Cloudflare",
        "LAYER 03 [INTERFACE]  TypeScript · React · Next.js · Flutter / Dart",
      ];
    } else if (cmd.includes("health") || cmd.includes("curl")) {
      output = [
        'HTTP/2 200 OK · content-type: application/json · server: cloudflare-edge',
        '{',
        '  "status": "UP",',
        '  "compute": "oci-ampere-arm64",',
        '  "kafka_partitions": 6,',
        '  "redis_read_latency_ms": 0.42,',
        '  "biometric_onnx_runtime": "READY"',
        '}',
      ];
    } else if (cmd.includes("status")) {
      output = initialHistory[0].output;
    } else {
      output =
        locale === "pt"
          ? [
              `Comando não reconhecido: "${rawCmd}". Digite "help" para ver os comandos.`,
            ]
          : [
              `Unrecognized command: "${rawCmd}". Type "help" to list available commands.`,
            ];
    }

    setHistory((prev) => [...prev.slice(-3), { cmd: rawCmd, output }]);
    setTerminalInput("");
  };

  const quickCommands = ["help", "projects", "research", "health", "stack"];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#121215]/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0D0D10] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          <span className="ml-1.5 font-mono text-[11px] font-medium tracking-wider text-zinc-400">
            control-plane://abraao-dev.tech
          </span>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center rounded-lg border border-white/[0.08] bg-[#141418] p-0.5 font-mono text-[11px]">
          <button
            type="button"
            onClick={() => setActiveTab("topology")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-colors",
              activeTab === "topology"
                ? "bg-white/[0.1] text-zinc-100"
                : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            <Network className="h-3 w-3 text-[var(--accent)]" />
            <span>{visualTabs.topology}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("terminal")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-colors",
              activeTab === "terminal"
                ? "bg-white/[0.1] text-zinc-100"
                : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            <TerminalIcon className="h-3 w-3 text-[var(--accent)]" />
            <span>{visualTabs.terminal}</span>
          </button>
        </div>
      </div>

      {activeTab === "topology" ? (
        <div className="p-4 sm:p-5">
          {/* Sub-header telemetry bar */}
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="text-zinc-300">EVENT-DRIVEN TOPOLOGY</span>
            </div>
            <span className="text-zinc-500">{topologyHint}</span>
          </div>

          {/* Interactive SVG Architecture Canvas */}
          <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#09090B] p-2 sm:p-3">
            <svg
              viewBox="0 0 520 250"
              className="h-[220px] w-full select-none sm:h-[240px]"
              role="img"
              aria-label="Diagrama interativo de arquitetura distribuída"
            >
              <defs>
                <pattern
                  id="cpGrid"
                  width="26"
                  height="26"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 26 0 L 0 0 0 26"
                    fill="none"
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>

              <rect width="520" height="250" fill="url(#cpGrid)" />

              {/* Edges between nodes */}
              {/* Edge 1: Cloudflare -> Spring/FastAPI */}
              <path
                id="path-edge-api"
                d="M 145 68 L 195 68"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.6"
                fill="none"
              />
              {/* Edge 2: Spring/FastAPI -> Kafka */}
              <path
                id="path-api-kafka"
                d="M 325 68 L 375 68"
                stroke="var(--accent)"
                strokeWidth="1.8"
                fill="none"
              />
              {/* Edge 3: Spring/FastAPI -> Redis (Query Read) */}
              <path
                id="path-api-redis"
                d="M 260 98 L 260 158"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
              />
              {/* Edge 4: Kafka -> Redis Projection */}
              <path
                id="path-kafka-redis"
                d="M 415 98 C 415 130, 310 130, 290 158"
                stroke="var(--accent)"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Edge 5: Kafka -> PostgreSQL Persistence */}
              <path
                id="path-kafka-db"
                d="M 440 98 L 440 158"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1.6"
                fill="none"
              />

              {/* Animated Event Packets */}
              <circle r="3" fill="var(--accent)">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path="M 145 68 L 195 68"
                />
              </circle>
              <circle r="3.5" fill="var(--accent)">
                <animateMotion
                  dur="1.8s"
                  repeatCount="indefinite"
                  path="M 325 68 L 375 68"
                />
              </circle>
              <circle r="3" fill="var(--accent)">
                <animateMotion
                  dur="2.2s"
                  repeatCount="indefinite"
                  path="M 415 98 C 415 130, 310 130, 290 158"
                />
              </circle>
              <circle r="2.8" fill="#FAFAFA">
                <animateMotion
                  dur="2.6s"
                  repeatCount="indefinite"
                  path="M 440 98 L 440 158"
                />
              </circle>

              {/* Edge Labels */}
              <text
                x="170"
                y="58"
                textAnchor="middle"
                fill="#71717A"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
              >
                HTTPS
              </text>
              <text
                x="350"
                y="58"
                textAnchor="middle"
                fill="var(--accent)"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
              >
                EVENT
              </text>
              <text
                x="235"
                y="132"
                textAnchor="middle"
                fill="#71717A"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
              >
                GET &lt;1ms
              </text>
              <text
                x="368"
                y="125"
                textAnchor="middle"
                fill="var(--accent)"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
              >
                CQRS PROJ
              </text>
              <text
                x="472"
                y="132"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
              >
                ACID
              </text>

              {/* Interactive Nodes */}
              {nodes.map((node) => {
                const isSelected = node.id === selectedNode.id;
                const boxWidth = 130;
                const boxHeight = 60;
                const boxX = node.x - boxWidth / 2 + 15;
                const boxY = node.y - boxHeight / 2;

                return (
                  <g
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    onMouseEnter={() => setSelectedNodeId(node.id)}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.label} - ${node.sublabel}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedNodeId(node.id);
                      }
                    }}
                  >
                    <rect
                      x={boxX}
                      y={boxY}
                      width={boxWidth}
                      height={boxHeight}
                      rx="9"
                      fill={isSelected ? "#151C1A" : "#121215"}
                      stroke={
                        isSelected
                          ? "var(--accent)"
                          : "rgba(255,255,255,0.13)"
                      }
                      strokeWidth={isSelected ? "1.6" : "1"}
                    />
                    {/* Status dot */}
                    <circle
                      cx={boxX + 12}
                      cy={boxY + 15}
                      r="3"
                      fill="var(--accent)"
                    />
                    {/* Layer badge */}
                    <text
                      x={boxX + 20}
                      y={boxY + 18}
                      fill="#71717A"
                      fontSize="7.5"
                      fontFamily="var(--font-geist-mono)"
                    >
                      {node.latency}
                    </text>
                    {/* Main Title */}
                    <text
                      x={boxX + 12}
                      y={boxY + 34}
                      fill="#FAFAFA"
                      fontSize="10"
                      fontWeight="600"
                      fontFamily="var(--font-geist-sans)"
                    >
                      {node.label}
                    </text>
                    {/* Subtitle */}
                    <text
                      x={boxX + 12}
                      y={boxY + 48}
                      fill="#A1A1AA"
                      fontSize="8"
                      fontFamily="var(--font-geist-mono)"
                    >
                      {node.sublabel}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Selected Node Live Inspector Drawer */}
          <div className="mt-3 rounded-xl border border-white/[0.08] bg-[#0D0D10] p-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-[var(--accent)]" />
                <span className="font-mono text-xs font-semibold text-zinc-100">
                  {selectedNode.label}
                </span>
                <span className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">
                  {selectedNode.layer}
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <span className="text-[var(--accent)]">
                  ● {selectedNode.latency}
                </span>
                <span className="text-zinc-400">{selectedNode.throughput}</span>
              </div>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              {selectedNode.description}
            </p>

            <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
              {selectedNode.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.07] bg-[#141418] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Interactive Terminal View */
        <div className="p-4 sm:p-5">
          <div className="mb-2.5 flex items-center justify-between font-mono text-[11px] text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Activity className="h-3.5 w-3.5 text-[var(--accent)]" />
              abraao@oci-arm64:~
            </span>
            <span className="text-zinc-500">{terminalHint}</span>
          </div>

          {/* Quick command pills */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {quickCommands.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => runCommand(q)}
                className="rounded-md border border-white/[0.08] bg-[#16161A] px-2.5 py-1 font-mono text-[11px] text-zinc-300 transition-colors hover:border-[var(--accent-border)] hover:text-white"
              >
                $ {q}
              </button>
            ))}
          </div>

          {/* Terminal Output Console */}
          <div className="h-[235px] overflow-y-auto rounded-xl border border-white/[0.07] bg-[#08080A] p-3.5 font-mono text-xs leading-relaxed">
            {history.map((entry, idx) => (
              <div key={idx} className="mb-3 last:mb-1">
                <div className="flex items-center gap-1.5 text-zinc-200">
                  <ChevronRight className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span className="font-medium">{entry.cmd}</span>
                </div>
                <div className="mt-1 space-y-0.5 pl-5 text-[11px] text-zinc-400">
                  {entry.output.map((line, lineIdx) => (
                    <div key={lineIdx} className="whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Interactive command prompt */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                runCommand(terminalInput);
              }}
              className="mt-2 flex items-center gap-1.5 border-t border-white/[0.06] pt-2"
            >
              <ChevronRight className="h-3.5 w-3.5 text-[var(--accent)]" />
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder={
                  locale === "pt"
                    ? "Digite help, projects, research, health..."
                    : "Type help, projects, research, health..."
                }
                aria-label="Comando do terminal"
                className="w-full bg-transparent font-mono text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
              />
            </form>
          </div>
        </div>
      )}

      {/* Footer status bar inside Control Plane */}
      <div className="flex items-center justify-between border-t border-white/[0.07] bg-[#0C0C0F] px-4 py-2 font-mono text-[11px] text-zinc-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
          <span>OCI ARM64 · KAFKA · REDIS · SPRING</span>
        </span>
        <span className="text-zinc-500">p99 &lt; 15ms</span>
      </div>
    </div>
  );
}
