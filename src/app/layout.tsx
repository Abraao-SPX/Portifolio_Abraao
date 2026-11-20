import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://abraao-dev.tech"),
  icons: { icon: "/favicon.svg" },
  title: "Abraão Paixão — Engenharia Back-end & Arquitetura Distribuída",
  description:
    "Portfólio de Engenharia de Software de Abraão Paixão (abraao-dev.tech). Foco em Back-end, Sistemas Distribuídos (Java, Spring Boot, Apache Kafka, Redis, OCI), Full-Stack (TypeScript, React, Flutter) e Pesquisa Científica (CLIHC 2026 / SBC).",
  keywords: [
    "Abraão Paixão",
    "abraao-dev.tech",
    "Abraao-SPX",
    "Engenheiro de Software Back-end",
    "Java Spring Boot",
    "Apache Kafka",
    "Arquitetura Distribuída",
    "CQRS",
    "Redis",
    "Oracle Cloud Infrastructure",
    "CLIHC 2026",
    "CaronaJu",
    "PrintWeb",
    "IncluEdu Engine",
    "Flutter",
  ],
  authors: [{ name: "Abraão Silva Paixão", url: "https://abraao-dev.tech" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://abraao-dev.tech/",
    siteName: "Abraão Paixão · Engenharia de Software & Arquitetura",
    title: "Abraão Paixão — Engenharia Back-end & Arquitetura Distribuída",
    description:
      "Sistemas distribuídos, microsserviços Java/Spring Boot, Apache Kafka, Redis, OCI ARM64 e pesquisa científica publicada na CLIHC 2026 / SBC.",
    images: [
      {
        url: "https://abraao-dev.tech/preview.png",
        width: 1200,
        height: 630,
        alt: "Abraão Paixão — Engenharia Back-end & Arquitetura Distribuída",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abraão Paixão — Engenharia Back-end & Arquitetura Distribuída",
    description:
      "Engenharia de Software Back-end & Full-Stack (Java/Spring Boot, Kafka, Redis, OCI, React, Flutter) · Pesquisador CLIHC 2026 / SBC.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abraao-dev.tech/#person",
      name: "Abraão Silva Paixão",
      givenName: "Abraão",
      familyName: "Paixão",
      url: "https://abraao-dev.tech",
      jobTitle: "Back-end & Full-Stack Software Engineer",
      email: "mailto:abraao.aspx@hotmail.com",
      sameAs: [
        "https://github.com/Abraao-SPX",
        "https://linkedin.com/in/abraaospx",
        "https://printweb.me",
      ],
      knowsAbout: [
        "Software Engineering",
        "Distributed Systems",
        "Java",
        "Spring Boot",
        "Apache Kafka",
        "Redis",
        "PostgreSQL",
        "MySQL",
        "Python",
        "TypeScript",
        "React",
        "Flutter",
        "Oracle Cloud Infrastructure",
        "Cloudflare",
      ],
    },
    {
      "@type": "ScholarlyArticle",
      headline:
        "CaronaJu: Plataforma P2P de Mobilidade Sustentável para Estudantes Universitários",
      author: { "@id": "https://abraao-dev.tech/#person" },
      datePublished: "2026",
      publisher: {
        "@type": "Organization",
        name: "Sociedade Brasileira de Computação (SBC) — CLIHC 2026",
      },
      url: "https://abraao-dev.tech/#pesquisa",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#09090B] text-[#FAFAFA] antialiased">
        {children}
      </body>
    </html>
  );
}
