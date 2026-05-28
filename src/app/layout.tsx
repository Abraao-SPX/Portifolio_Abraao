import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import DynamicFavicon from "@/components/DynamicFavicon";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Abraão Paixão | Java · Flutter · Security",
  description: "Portfólio de Abraão Paixão — desenvolvedor de software especializado em Java, Spring Boot, Flutter e entusiasta de segurança.",
  openGraph: {
    type: "website",
    url: "https://abraaoportfolio.me/",
    title: "Abraão Paixão | Java · Flutter · Security",
    description: "Confira meus projetos em Java, Spring Boot, Flutter e segurança de sistemas.",
    images: [{
      url: "https://abraaoportfolio.me/preview.png",
      width: 1200,
      height: 630,
      alt: "Preview do Portfólio de Abraão Paixão",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bricolage.variable} ${jetbrainsMono.variable} font-sans bg-background text-primary antialiased selection:bg-cyan-400 selection:text-background overflow-x-hidden min-h-screen flex flex-col`}
      >
        <DynamicFavicon />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
