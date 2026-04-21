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
  title: "Portfólio | Abraão - Back-End Developer",
  description: "Portfólio de engenharia e desenvolvimento Back-End de Abraão.",
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
