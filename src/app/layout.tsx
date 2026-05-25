import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import React from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import AnimatedBackground from "@/components/AnimatedBackground";
import DynamicFavicon from "@/components/DynamicFavicon";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500"] });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Abraão Paixão | Desenvolvedor Java & Spring Boot",
  description: "Portfólio profissional de Abraão Paixão. Desenvolvedor de software especializado em Java, Spring Boot, Flutter e soluções de back-end.",
  openGraph: {
    type: "website",
    url: "https://abraaoportfolio.me/",
    title: "Abraão Paixão | Desenvolvedor Java & Spring Boot",
    description: "Confira meus projetos de software, competências em Java, ecossistema Spring e desenvolvimento mobile com Flutter.",
    images: [{
      url: "https://abraaoportfolio.me/preview.png",
      width: 1200,
      height: 630,
      alt: "Preview do Portfólio de Abraão Paixão"
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${syne.variable} font-sans bg-background text-primary antialiased selection:bg-white selection:text-black overflow-x-hidden min-h-screen flex flex-col`}>
        <DynamicFavicon />
        <AnimatedBackground />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
