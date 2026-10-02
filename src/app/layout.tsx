import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  adjustFontFallback: false,
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abraaoportfolio.me"),
  icons: { icon: "/favicon.svg" },
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
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            "style-src 'self' 'unsafe-inline'",
            "font-src 'self' data:",
            "img-src 'self' data: https: blob:",
            "connect-src 'self' https://api.emailjs.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self' https://api.emailjs.com",
            "upgrade-insecure-requests",
          ].join("; ")}
        />
      </head>
      <body
        className={`${manrope.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
