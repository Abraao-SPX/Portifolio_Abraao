"use client";

import React from "react";
import type { ProjectItem } from "@/content/portfolio-data";

export function ProjectDiagram({
  type,
}: {
  type: ProjectItem["diagramType"];
}) {
  switch (type) {
    case "p2p-mesh":
      return (
        <svg
          viewBox="0 0 420 110"
          className="h-24 w-full select-none text-zinc-400"
          role="img"
          aria-label="Topologia P2P CaronaJu"
        >
          <defs>
            <linearGradient id="p2pGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Background grid lines */}
          <line x1="20" y1="55" x2="400" y2="55" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          {/* Connections */}
          <path
            d="M 68 32 C 125 32, 135 55, 195 55"
            fill="none"
            stroke="url(#p2pGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M 68 78 C 125 78, 135 55, 195 55"
            fill="none"
            stroke="url(#p2pGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M 235 55 L 325 55"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          {/* Left peer nodes */}
          <g transform="translate(16, 18)">
            <rect width="84" height="28" rx="6" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <circle cx="14" cy="14" r="3.5" fill="var(--accent)" />
            <text x="24" y="17" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              peer.driver
            </text>
          </g>
          <g transform="translate(16, 64)">
            <rect width="84" height="28" rx="6" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <circle cx="14" cy="14" r="3.5" fill="#3B82F6" />
            <text x="24" y="17" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              peer.rider
            </text>
          </g>
          {/* Center matching node */}
          <g transform="translate(154, 33)">
            <rect
              width="116"
              height="44"
              rx="8"
              fill="#141918"
              stroke="var(--accent-border)"
              strokeWidth="1.2"
            />
            <text x="58" y="19" textAnchor="middle" fill="var(--accent)" fontSize="8.5" fontFamily="var(--font-geist-mono)">
              MATCH ENGINE
            </text>
            <text x="58" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              Geo + Schedule
            </text>
          </g>
          {/* Right verified campus node */}
          <g transform="translate(310, 33)">
            <rect width="94" height="44" rx="8" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <text x="47" y="19" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="var(--font-geist-mono)">
              CLIHC / SBC
            </text>
            <text x="47" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              Verified P2P
            </text>
          </g>
        </svg>
      );

    case "kafka-cqrs":
      return (
        <svg
          viewBox="0 0 420 110"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Arquitetura Kafka CQRS"
        >
          {/* Command -> Kafka */}
          <line x1="92" y1="55" x2="146" y2="55" stroke="var(--accent)" strokeWidth="1.5" />
          {/* Kafka -> Redis & Postgres */}
          <path d="M 262 42 C 290 42, 295 28, 318 28" fill="none" stroke="var(--accent)" strokeWidth="1.4" />
          <path d="M 262 68 C 290 68, 295 82, 318 82" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.4" />

          {/* Command Node */}
          <g transform="translate(12, 35)">
            <rect width="80" height="40" rx="7" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <text x="40" y="17" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="var(--font-geist-mono)">
              SPRING API
            </text>
            <text x="40" y="30" textAnchor="middle" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              POST /tx
            </text>
          </g>

          {/* Kafka 6 partitions block */}
          <g transform="translate(146, 22)">
            <rect width="116" height="66" rx="8" fill="#141918" stroke="var(--accent-border)" strokeWidth="1.2" />
            <text x="58" y="16" textAnchor="middle" fill="var(--accent)" fontSize="8.5" fontFamily="var(--font-geist-mono)">
              KAFKA · 6 PARTITIONS
            </text>
            {/* Partition bars */}
            {[0, 1, 2, 3, 4, 5].map((p) => (
              <rect
                key={p}
                x={14 + p * 15}
                y={25}
                width="11"
                height="28"
                rx="2"
                fill={p % 2 === 0 ? "rgba(16,185,129,0.28)" : "rgba(255,255,255,0.08)"}
                stroke="rgba(255,255,255,0.12)"
              />
            ))}
          </g>

          {/* Redis Read Projection */}
          <g transform="translate(318, 11)">
            <rect width="90" height="34" rx="6" fill="#18181B" stroke="var(--accent-border)" />
            <text x="45" y="14" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="var(--font-geist-mono)">
              REDIS CACHE
            </text>
            <text x="45" y="26" textAnchor="middle" fill="#FAFAFA" fontSize="9" fontFamily="var(--font-geist-mono)">
              Read &lt; 1ms
            </text>
          </g>

          {/* PostgreSQL Write Ledger */}
          <g transform="translate(318, 63)">
            <rect width="90" height="34" rx="6" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <text x="45" y="14" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="var(--font-geist-mono)">
              POSTGRESQL
            </text>
            <text x="45" y="26" textAnchor="middle" fill="#FAFAFA" fontSize="9" fontFamily="var(--font-geist-mono)">
              ACID Ledger
            </text>
          </g>
        </svg>
      );

    case "doc-pipeline":
      return (
        <svg
          viewBox="0 0 420 110"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Pipeline de Compilação PrintWeb"
        >
          <line x1="104" y1="55" x2="152" y2="55" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" />
          <line x1="268" y1="55" x2="316" y2="55" stroke="var(--accent)" strokeWidth="1.5" />

          <g transform="translate(14, 33)">
            <rect width="90" height="44" rx="7" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <text x="45" y="19" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="var(--font-geist-mono)">
              INPUT NOTES
            </text>
            <text x="45" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              Markdown/Prompt
            </text>
          </g>

          <g transform="translate(152, 28)">
            <rect width="116" height="54" rx="8" fill="#141918" stroke="var(--accent-border)" />
            <text x="58" y="19" textAnchor="middle" fill="var(--accent)" fontSize="8.5" fontFamily="var(--font-geist-mono)">
              SPRING + REACT AST
            </text>
            <text x="58" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              Design Tokens
            </text>
            <text x="58" y="45" textAnchor="middle" fill="#71717A" fontSize="8" fontFamily="var(--font-geist-mono)">
              Bucket4j Rate-Limit
            </text>
          </g>

          <g transform="translate(316, 33)">
            <rect width="90" height="44" rx="7" fill="#18181B" stroke="rgba(255,255,255,0.16)" />
            <text x="45" y="19" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="var(--font-geist-mono)">
              PRINTWEB.ME
            </text>
            <text x="45" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              Vector PDF
            </text>
          </g>
        </svg>
      );

    case "inclusive-engine":
      return (
        <svg
          viewBox="0 0 420 110"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Arquitetura IncluEdu Engine"
        >
          <line x1="106" y1="55" x2="150" y2="55" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" />
          <line x1="274" y1="55" x2="314" y2="55" stroke="var(--accent)" strokeWidth="1.5" />

          <g transform="translate(14, 33)">
            <rect width="92" height="44" rx="7" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <text x="46" y="19" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="var(--font-geist-mono)">
              PEI / PDI DOCS
            </text>
            <text x="46" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              Perfil Cognitivo
            </text>
          </g>

          <g transform="translate(150, 28)">
            <rect width="124" height="54" rx="8" fill="#141918" stroke="var(--accent-border)" />
            <text x="62" y="19" textAnchor="middle" fill="var(--accent)" fontSize="8.5" fontFamily="var(--font-geist-mono)">
              INCLUEDU ENGINE
            </text>
            <text x="62" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              Spring Boot + AI
            </text>
            <text x="62" y="45" textAnchor="middle" fill="#71717A" fontSize="8" fontFamily="var(--font-geist-mono)">
              PostgreSQL Audit
            </text>
          </g>

          <g transform="translate(314, 33)">
            <rect width="92" height="44" rx="7" fill="#18181B" stroke="rgba(255,255,255,0.16)" />
            <text x="46" y="19" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="var(--font-geist-mono)">
              ACESSIBILIDADE
            </text>
            <text x="46" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9.5" fontFamily="var(--font-geist-mono)">
              Guia Adaptado
            </text>
          </g>
        </svg>
      );

    case "oci-biometrics":
      return (
        <svg
          viewBox="0 0 420 110"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Pipeline Biométrico OCI ARM64"
        >
          <line x1="100" y1="55" x2="142" y2="55" stroke="var(--accent)" strokeWidth="1.4" />
          <line x1="278" y1="55" x2="318" y2="55" stroke="var(--accent)" strokeWidth="1.4" />

          <g transform="translate(12, 33)">
            <rect width="88" height="44" rx="7" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <text x="44" y="19" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="var(--font-geist-mono)">
              CLOUDFLARE
            </text>
            <text x="44" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9" fontFamily="var(--font-geist-mono)">
              Zero-Trust WAF
            </text>
          </g>

          <g transform="translate(142, 26)">
            <rect width="136" height="58" rx="8" fill="#141918" stroke="var(--accent-border)" />
            <text x="68" y="18" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="var(--font-geist-mono)">
              OCI ARM64 · ONNX PURO
            </text>
            <text x="68" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9" fontFamily="var(--font-geist-mono)">
              YuNet → MiniFASNetV2
            </text>
            <text x="68" y="47" textAnchor="middle" fill="#71717A" fontSize="8" fontFamily="var(--font-geist-mono)">
              SFace 128D · 864MB
            </text>
          </g>

          <g transform="translate(318, 33)">
            <rect width="90" height="44" rx="7" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <text x="45" y="19" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="var(--font-geist-mono)">
              LIVENESS OK
            </text>
            <text x="45" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9" fontFamily="var(--font-geist-mono)">
              Signed JWT
            </text>
          </g>
        </svg>
      );

    case "mobile-sync":
      return (
        <svg
          viewBox="0 0 420 110"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Arquitetura NeuroFlow Flutter e Node.js"
        >
          <line x1="104" y1="55" x2="152" y2="55" stroke="var(--accent)" strokeWidth="1.4" />
          <line x1="270" y1="55" x2="316" y2="55" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" />

          <g transform="translate(14, 33)">
            <rect width="90" height="44" rx="7" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <text x="45" y="19" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="var(--font-geist-mono)">
              FLUTTER APP
            </text>
            <text x="45" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9" fontFamily="var(--font-geist-mono)">
              State + Cache
            </text>
          </g>

          <g transform="translate(152, 28)">
            <rect width="118" height="54" rx="8" fill="#141918" stroke="var(--accent-border)" />
            <text x="59" y="19" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="var(--font-geist-mono)">
              NODE.JS + EXPRESS
            </text>
            <text x="59" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9" fontFamily="var(--font-geist-mono)">
              JWT + Bcrypt 10r
            </text>
            <text x="59" y="45" textAnchor="middle" fill="#71717A" fontSize="8" fontFamily="var(--font-geist-mono)">
              REST Controllers
            </text>
          </g>

          <g transform="translate(316, 33)">
            <rect width="90" height="44" rx="7" fill="#18181B" stroke="rgba(255,255,255,0.12)" />
            <text x="45" y="19" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="var(--font-geist-mono)">
              SEQUELIZE ORM
            </text>
            <text x="45" y="33" textAnchor="middle" fill="#FAFAFA" fontSize="9" fontFamily="var(--font-geist-mono)">
              MySQL Schema
            </text>
          </g>
        </svg>
      );
  }
}
