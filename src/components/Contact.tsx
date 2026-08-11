"use client";
import React, { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { sendEmailForm } from "@/lib/email";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Github, Linkedin, Mail, Terminal } from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github size={14} />,
  linkedin: <Linkedin size={14} />,
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setErrorMsg("");

    const targetForm = e.currentTarget;
    sendEmailForm(targetForm)
      .then(() => {
        setSuccess(true);
        targetForm.reset();
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("Verifique as credenciais do EmailJS no .env.local.");
      })
      .finally(() => setIsSubmitting(false));
  };

  const inputClass =
    "w-full bg-surfaceAlt border border-border px-4 py-3 rounded-lg focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 hover:border-borderHover transition-all text-primary placeholder-muted text-sm font-mono";

  return (
    <section id="contato" className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Geometric shapes */}
        <div className="hidden md:block absolute top-[15%] right-[15%] w-28 h-28 border-2 border-accent/[0.06] rounded-3xl geo-float-1" />
        <div className="hidden md:block absolute bottom-[20%] left-[10%] w-20 h-20 bg-elegant/[0.04] rounded-full geo-float-2" style={{ animationDelay: '4s' }} />
        
        {/* Gradient orbs */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/[0.02] blur-[110px] rounded-full" />
        <div className="hidden md:block absolute bottom-[5%] right-[5%] w-[350px] h-[350px] bg-coral/[0.02] blur-[90px] rounded-full" />
        
        <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent/[0.03] blur-[60px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6 font-mono text-xs text-muted">
            <span className="text-accent">~/</span>
            <span>contact</span>
            <span className="text-muted">/</span>
            <span className="text-secondary">send-message</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.88]">
            <span className="text-primary">Inicie um</span>
            <br />
            <span className="text-gradient-warm">Projeto</span>
            <span className="text-muted">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="font-mono text-sm text-secondary leading-[1.9] mb-10 max-w-md">
              Disponível para projetos freelance, oportunidades remotas e colaborações. Vamos conversar sobre o que você precisa construir.
            </p>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.personal.email}`}
              className="inline-flex items-center gap-3 text-primary font-mono text-sm mb-10 group w-fit"
            >
              <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                <Mail size={14} className="text-secondary group-hover:text-accent transition-colors" />
              </div>
              <span className="border-b border-border group-hover:border-accent/50 transition-colors pb-0.5 text-secondary group-hover:text-primary">
                {siteConfig.personal.email}
              </span>
            </a>

            {/* Socials */}
            <div className="flex gap-3">
              {Object.entries(siteConfig.personal.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-secondary hover:text-primary hover:border-borderHover hover:bg-surfaceAlt transition-all text-xs font-mono"
                >
                  {socialIcons[key] ?? null}
                  <span className="capitalize">{key}</span>
                </a>
              ))}
            </div>

            {/* Terminal note */}
            <div className="mt-12 p-4 rounded-lg bg-surfaceAlt border border-border font-mono text-xs">
              <div className="flex items-center gap-2 mb-3 text-muted">
                <Terminal size={12} />
                <span>response time</span>
              </div>
              <p className="text-secondary leading-relaxed">
                <span className="text-accent">$</span> echo &quot;Respondo em até{" "}
                <span className="text-elegant">24h</span> em dias úteis.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-7 bg-surface border border-border rounded-2xl shadow-sm"
            >
              {/* Form header */}
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <div className="terminal-dot bg-coral/50" />
                <div className="terminal-dot bg-yellow-500/50" />
                <div className="terminal-dot bg-elegant/50" />
                <span className="ml-2 font-mono text-[10px] text-muted">new-message.sh</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-muted flex items-center gap-1.5">
                    <span className="text-accent">›</span> nome
                  </label>
                  <input
                    required
                    name="user_name"
                    type="text"
                    className={inputClass}
                    placeholder="Seu nome"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-muted flex items-center gap-1.5">
                    <span className="text-accent">›</span> email
                  </label>
                  <input
                    required
                    name="user_email"
                    type="email"
                    className={inputClass}
                    placeholder="voce@empresa.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-muted flex items-center gap-1.5">
                  <span className="text-accent">›</span> mensagem
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={inputClass + " resize-none"}
                  placeholder="Descreva o projeto, a ideia ou a oportunidade..."
                />
              </div>

              <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 bg-coral text-white px-7 py-3 rounded-lg font-display font-semibold hover:bg-coralLight transition-all text-sm shadow-sm hover:shadow-md hover:shadow-coral/20 ${
                    isSubmitting ? "opacity-60 pointer-events-none" : ""
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                  <Send size={13} />
                </button>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-elegant text-xs font-mono"
                  >
                    <CheckCircle size={14} /> Mensagem enviada!
                  </motion.div>
                )}
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-coral text-xs font-mono"
                  >
                    <AlertCircle size={14} className="shrink-0" /> {errorMsg}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
