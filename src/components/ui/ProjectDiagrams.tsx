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
          viewBox="0 0 420 104"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Esquema P2P CaronaJu"
        >
          <path
            d="M 102 30 C 132 30, 134 52, 154 52"
            fill="none"
            stroke="var(--cobalt)"
            strokeWidth="1.5"
          />
          <path
            d="M 102 74 C 132 74, 134 52, 154 52"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
          <line
            x1="274"
            y1="52"
            x2="310"
            y2="52"
            stroke="var(--cobalt)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />

          <g transform="translate(14, 15)">
            <rect
              width="88"
              height="30"
              rx="8"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <circle cx="14" cy="15" r="3.5" fill="var(--cobalt)" />
            <text
              x="24"
              y="18"
              fill="var(--ink)"
              fontSize="9.5"
              fontFamily="var(--font-geist-mono)"
            >
              Motorista
            </text>
          </g>

          <g transform="translate(14, 59)">
            <rect
              width="88"
              height="30"
              rx="8"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <circle cx="14" cy="15" r="3.5" fill="var(--accent)" />
            <text
              x="24"
              y="18"
              fill="var(--ink)"
              fontSize="9.5"
              fontFamily="var(--font-geist-mono)"
            >
              Caroneiro
            </text>
          </g>

          <g transform="translate(154, 29)">
            <rect
              width="120"
              height="46"
              rx="10"
              fill="var(--cobalt-soft)"
              stroke="var(--cobalt-border)"
              strokeWidth="1.2"
            />
            <text
              x="60"
              y="19"
              textAnchor="middle"
              fill="var(--cobalt)"
              fontSize="8.5"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              VÍNCULO + ROTAS
            </text>
            <text
              x="60"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontFamily="var(--font-geist-sans)"
            >
              Campus &amp; Horário
            </text>
          </g>

          <g transform="translate(310, 29)">
            <rect
              width="96"
              height="46"
              rx="10"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="48"
              y="19"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              CLIHC 2026
            </text>
            <text
              x="48"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-sans)"
            >
              Artigo SBC
            </text>
          </g>
        </svg>
      );

    case "kafka-cqrs":
      return (
        <svg
          viewBox="0 0 420 104"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Esquema Kafka e CQRS"
        >
          <line
            x1="96"
            y1="52"
            x2="144"
            y2="52"
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
          <path
            d="M 264 38 C 290 38, 294 26, 316 26"
            fill="none"
            stroke="var(--sage)"
            strokeWidth="1.5"
          />
          <path
            d="M 264 66 C 290 66, 294 78, 316 78"
            fill="none"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
          />

          <g transform="translate(12, 31)">
            <rect
              width="84"
              height="42"
              rx="9"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="42"
              y="18"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              SPRING API
            </text>
            <text
              x="42"
              y="32"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              Comando
            </text>
          </g>

          <g transform="translate(144, 20)">
            <rect
              width="120"
              height="64"
              rx="10"
              fill="var(--accent-soft)"
              stroke="var(--accent-border)"
              strokeWidth="1.2"
            />
            <text
              x="60"
              y="16"
              textAnchor="middle"
              fill="var(--accent)"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              KAFKA · 6 PARTIÇÕES
            </text>
            {[0, 1, 2, 3, 4, 5].map((p) => (
              <rect
                key={p}
                x={15 + p * 15.5}
                y={24}
                width="11"
                height="28"
                rx="3"
                fill={p % 2 === 0 ? "var(--accent)" : "var(--surface)"}
                fillOpacity={p % 2 === 0 ? "0.75" : "1"}
                stroke="var(--accent-border)"
              />
            ))}
          </g>

          <g transform="translate(316, 9)">
            <rect
              width="92"
              height="34"
              rx="8"
              fill="var(--sage-soft)"
              stroke="var(--sage-border)"
            />
            <text
              x="46"
              y="14"
              textAnchor="middle"
              fill="var(--sage)"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              REDIS CACHE
            </text>
            <text
              x="46"
              y="26"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Saldo &lt; 1ms
            </text>
          </g>

          <g transform="translate(316, 61)">
            <rect
              width="92"
              height="34"
              rx="8"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="46"
              y="14"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              POSTGRESQL
            </text>
            <text
              x="46"
              y="26"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Livro Razão
            </text>
          </g>
        </svg>
      );

    case "doc-pipeline":
      return (
        <svg
          viewBox="0 0 420 104"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Esquema PrintWeb"
        >
          <line
            x1="106"
            y1="52"
            x2="150"
            y2="52"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
          />
          <line
            x1="270"
            y1="52"
            x2="314"
            y2="52"
            stroke="var(--sage)"
            strokeWidth="1.5"
          />

          <g transform="translate(14, 29)">
            <rect
              width="92"
              height="46"
              rx="9"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="46"
              y="19"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              RASCUNHO
            </text>
            <text
              x="46"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="500"
              fontFamily="var(--font-geist-sans)"
            >
              Notas de Estudo
            </text>
          </g>

          <g transform="translate(150, 25)">
            <rect
              width="120"
              height="54"
              rx="10"
              fill="var(--sage-soft)"
              stroke="var(--sage-border)"
            />
            <text
              x="60"
              y="19"
              textAnchor="middle"
              fill="var(--sage)"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              SPRING + REACT
            </text>
            <text
              x="60"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-sans)"
            >
              Design Editorial
            </text>
            <text
              x="60"
              y="46"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Bucket4j + IA
            </text>
          </g>

          <g transform="translate(314, 29)">
            <rect
              width="92"
              height="46"
              rx="9"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="46"
              y="19"
              textAnchor="middle"
              fill="var(--sage)"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              PRINTWEB.ME
            </text>
            <text
              x="46"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-sans)"
            >
              Apostila PDF
            </text>
          </g>
        </svg>
      );

    case "inclusive-engine":
      return (
        <svg
          viewBox="0 0 420 104"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Esquema IncluEdu Engine"
        >
          <line
            x1="106"
            y1="52"
            x2="148"
            y2="52"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
          />
          <line
            x1="272"
            y1="52"
            x2="314"
            y2="52"
            stroke="var(--amber)"
            strokeWidth="1.5"
          />

          <g transform="translate(14, 29)">
            <rect
              width="92"
              height="46"
              rx="9"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="46"
              y="19"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              PLANO PEI / PDI
            </text>
            <text
              x="46"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="500"
              fontFamily="var(--font-geist-sans)"
            >
              Perfil do Aluno
            </text>
          </g>

          <g transform="translate(148, 25)">
            <rect
              width="124"
              height="54"
              rx="10"
              fill="var(--amber-soft)"
              stroke="var(--amber-border)"
            />
            <text
              x="62"
              y="19"
              textAnchor="middle"
              fill="var(--amber)"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              INCLUEDU ENGINE
            </text>
            <text
              x="62"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-sans)"
            >
              Adaptação + IA
            </text>
            <text
              x="62"
              y="46"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Spring + Postgres
            </text>
          </g>

          <g transform="translate(314, 29)">
            <rect
              width="92"
              height="46"
              rx="9"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="46"
              y="19"
              textAnchor="middle"
              fill="var(--amber)"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              SALA DE AULA
            </text>
            <text
              x="46"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-sans)"
            >
              Guia Inclusivo
            </text>
          </g>
        </svg>
      );

    case "oci-biometrics":
      return (
        <svg
          viewBox="0 0 420 104"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Esquema Biometria OCI ARM64"
        >
          <line
            x1="102"
            y1="52"
            x2="142"
            y2="52"
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
          <line
            x1="278"
            y1="52"
            x2="316"
            y2="52"
            stroke="var(--sage)"
            strokeWidth="1.5"
          />

          <g transform="translate(12, 29)">
            <rect
              width="90"
              height="46"
              rx="9"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="45"
              y="19"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              CLOUDFLARE
            </text>
            <text
              x="45"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="500"
              fontFamily="var(--font-geist-sans)"
            >
              Zero-Trust WAF
            </text>
          </g>

          <g transform="translate(142, 24)">
            <rect
              width="136"
              height="56"
              rx="10"
              fill="var(--accent-soft)"
              stroke="var(--accent-border)"
            />
            <text
              x="68"
              y="18"
              textAnchor="middle"
              fill="var(--accent)"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              OCI ARM64 · ONNX PURO
            </text>
            <text
              x="68"
              y="33"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              YuNet → MiniFASNet
            </text>
            <text
              x="68"
              y="46"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              SFace 128D · 864 MB
            </text>
          </g>

          <g transform="translate(316, 29)">
            <rect
              width="92"
              height="46"
              rx="9"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="46"
              y="19"
              textAnchor="middle"
              fill="var(--sage)"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              PROVA DE VIDA
            </text>
            <text
              x="46"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-sans)"
            >
              Token Seguro
            </text>
          </g>
        </svg>
      );

    case "mobile-sync":
      return (
        <svg
          viewBox="0 0 420 104"
          className="h-24 w-full select-none"
          role="img"
          aria-label="Esquema NeuroFlow Mobile e API"
        >
          <line
            x1="104"
            y1="52"
            x2="150"
            y2="52"
            stroke="var(--sage)"
            strokeWidth="1.5"
          />
          <line
            x1="270"
            y1="52"
            x2="316"
            y2="52"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
          />

          <g transform="translate(14, 29)">
            <rect
              width="90"
              height="46"
              rx="9"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="45"
              y="19"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              APP FLUTTER
            </text>
            <text
              x="45"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="500"
              fontFamily="var(--font-geist-sans)"
            >
              Rotina Calma
            </text>
          </g>

          <g transform="translate(150, 25)">
            <rect
              width="120"
              height="54"
              rx="10"
              fill="var(--sage-soft)"
              stroke="var(--sage-border)"
            />
            <text
              x="60"
              y="19"
              textAnchor="middle"
              fill="var(--sage)"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              NODE.JS + EXPRESS
            </text>
            <text
              x="60"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              JWT + Bcrypt 10r
            </text>
            <text
              x="60"
              y="46"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              API Desacoplada
            </text>
          </g>

          <g transform="translate(316, 29)">
            <rect
              width="90"
              height="46"
              rx="9"
              fill="var(--surface)"
              stroke="var(--border-strong)"
            />
            <text
              x="45"
              y="19"
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              MYSQL + ORM
            </text>
            <text
              x="45"
              y="34"
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="9.5"
              fontWeight="600"
              fontFamily="var(--font-geist-sans)"
            >
              Migrations
            </text>
          </g>
        </svg>
      );
  }
}
