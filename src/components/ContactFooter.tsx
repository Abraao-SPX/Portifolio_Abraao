"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import {
  type PortfolioDictionary,
  PROFILE_LINKS,
} from "@/content/portfolio-data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface ContactFooterProps {
  contactDict: PortfolioDictionary["contactSection"];
  footerDict: PortfolioDictionary["footer"];
}

export function ContactFooter({
  contactDict,
  footerDict,
}: ContactFooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_LINKS.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      window.location.href = `mailto:${PROFILE_LINKS.email}`;
    }
  };

  const socialChannels = [
    {
      label: "GitHub",
      handle: "@Abraao-SPX",
      href: PROFILE_LINKS.github,
      icon: Github,
    },
    {
      label: "LinkedIn",
      handle: "/in/abraaospx",
      href: PROFILE_LINKS.linkedin,
      icon: Linkedin,
    },
    {
      label: "Currículo Lattes",
      handle: "CNPq / Produção Científica",
      href: PROFILE_LINKS.lattes,
      icon: GraduationCap,
    },
    {
      label: "PrintWeb (Em Produção)",
      handle: "printweb.me",
      href: PROFILE_LINKS.printweb,
      icon: Globe,
    },
  ];

  return (
    <>
      <section
        id="contato"
        className="relative border-t border-white/[0.07] bg-[#0C0C0F]/80 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left 7 Cols: Headline + 1-Click Copy Email Box */}
            <div className="lg:col-span-7">
              <div className="font-mono text-[11px] font-medium tracking-[0.08em] text-[var(--accent)] uppercase">
                {contactDict.eyebrow}
              </div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-zinc-50 sm:text-4xl">
                {contactDict.title}{" "}
                <span className="text-zinc-500">{contactDict.titleMuted}</span>
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-base leading-relaxed text-zinc-400">
                {contactDict.subtitle}
              </p>

              {/* Primary Email Command Box */}
              <SpotlightCard className="mt-8 p-5 sm:p-6">
                <div className="font-mono text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                  {contactDict.emailLabel}
                </div>

                <div className="mt-2.5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0D0D10] text-[var(--accent)]">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-sm font-semibold text-zinc-100 sm:text-base">
                      {PROFILE_LINKS.email}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex h-10 items-center gap-2 rounded-xl bg-zinc-100 px-4 font-mono text-xs font-semibold text-zinc-950 transition-all hover:bg-white"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span>{contactDict.copiedEmail}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>{contactDict.copyEmail}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${PROFILE_LINKS.email}?subject=Contato%20via%20abraao-dev.tech`}
                      className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-white/[0.1] bg-[#16161A] px-3.5 font-mono text-xs text-zinc-200 transition-colors hover:border-white/[0.2] hover:text-white"
                    >
                      <span>{contactDict.sendEmail}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                    </a>
                  </div>
                </div>

                <span className="sr-only" aria-live="polite">
                  {copiedEmail ? contactDict.copiedEmail : ""}
                </span>
              </SpotlightCard>

              {/* Current Engagement Scope */}
              <div className="mt-6 rounded-2xl border border-white/[0.07] bg-[#121215]/70 p-5">
                <div className="font-mono text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                  {contactDict.availabilityTitle}
                </div>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {contactDict.availabilityItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Verified Directories & Direct Profiles */}
            <div className="lg:col-span-5">
              <div className="mb-3 font-mono text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                {contactDict.directChannelsTitle}
              </div>

              <div className="space-y-3">
                {socialChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#121215] p-4 transition-all hover:border-[var(--accent-border)] hover:bg-[#16161B]"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0D0D10] text-zinc-300 transition-colors group-hover:border-[var(--accent-border)] group-hover:text-[var(--accent)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100">
                            {channel.label}
                          </div>
                          <div className="font-mono text-xs text-zinc-400">
                            {channel.handle}
                          </div>
                        </div>
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Terminal-Style Status Footer */}
      <footer className="border-t border-white/[0.08] bg-[#09090B] py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-5 font-mono text-xs text-zinc-500 sm:flex-row sm:items-center sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>{footerDict.status}</span>
            </span>
            <span className="text-zinc-700">·</span>
            <span>{footerDict.region}</span>
            <span className="text-zinc-700">·</span>
            <span className="inline-flex items-center gap-1 text-zinc-400">
              <Terminal className="h-3 w-3 text-[var(--accent)]" />
              abraao-dev.tech v3.0
            </span>
          </div>

          <div className="text-zinc-500">
            © {new Date().getFullYear()} {footerDict.rights}
          </div>
        </div>
      </footer>
    </>
  );
}
