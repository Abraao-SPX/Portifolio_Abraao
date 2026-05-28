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
    "w-full bg-background border border-white/[0.08] px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400/40 hover:border-white/[0.14] transition-all text-primary placeholder-muted text-sm font-mono";

  return (
    <section id="contato" className="py-32 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] relative overflow-hidden">

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-cyan-500/[0.05] blur-[130px] rounded-full"
          animate={{ x: [0, 35, -18, 0], y: [0, -25, 14, 0], scale: [1, 1.08, 0.93, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[110px] rounded-full"
          animate={{ x: [0, -22, 11, 0], y: [0, 18, -10, 0], scale: [1, 0.93, 1.06, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {[
          { left: "5%",  top: "10%", delay: 0.5, color: "bg-cyan-400/20" },
          { left: "88%", top: "15%", delay: 1.7, color: "bg-emerald-400/20" },
          { left: "92%", top: "55%", delay: 0.9, color: "bg-cyan-400/15" },
          { left: "8%",  top: "78%", delay: 2.3, color: "bg-emerald-400/15" },
          { left: "45%", top: "90%", delay: 0.1, color: "bg-cyan-400/20" },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${dot.color}`}
            style={{ left: dot.left, top: dot.top }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.8, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
          />
        ))}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
        />
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-80px" }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6 font-mono text-xs text-muted">
            <span className="text-cyan-400">~/</span>
            <span>contact</span>
            <span className="text-muted">/</span>
            <span className="text-secondary">send-message</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.88]">
            <span className="text-primary">Inicie um</span>
            <br />
            <span className="text-gradient-cool">Projeto</span>
            <span className="text-muted">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-80px" }}
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
              <div className="w-9 h-9 rounded-lg border border-white/[0.1] flex items-center justify-center group-hover:border-cyan-400/40 group-hover:bg-cyan-400/5 transition-all">
                <Mail size={14} className="text-secondary group-hover:text-cyan-400 transition-colors" />
              </div>
              <span className="border-b border-white/[0.2] group-hover:border-cyan-400/50 transition-colors pb-0.5 text-secondary group-hover:text-primary">
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
                  className="flex items-center gap-2 px-4 py-2.5 border border-white/[0.08] rounded-lg text-secondary hover:text-primary hover:border-white/[0.2] transition-all text-xs font-mono"
                >
                  {socialIcons[key] ?? null}
                  <span className="capitalize">{key}</span>
                </a>
              ))}
            </div>

            {/* Terminal note */}
            <div className="mt-12 p-4 rounded-lg bg-surface/60 border border-white/[0.06] font-mono text-xs">
              <div className="flex items-center gap-2 mb-3 text-muted">
                <Terminal size={12} />
                <span>response time</span>
              </div>
              <p className="text-secondary leading-relaxed">
                <span className="text-cyan-400">$</span> echo &quot;Respondo em até{" "}
                <span className="text-emerald-400">24h</span> em dias úteis.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: false, margin: "-80px" }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-7 bg-surface/50 border border-white/[0.07] rounded-2xl"
            >
              {/* Form header */}
              <div className="flex items-center gap-2 pb-4 border-b border-white/[0.06]">
                <div className="terminal-dot bg-red-500/60" />
                <div className="terminal-dot bg-yellow-500/60" />
                <div className="terminal-dot bg-emerald-400/60" />
                <span className="ml-2 font-mono text-[10px] text-muted">new-message.sh</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-muted flex items-center gap-1.5">
                    <span className="text-cyan-400">›</span> nome
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
                    <span className="text-cyan-400">›</span> email
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
                  <span className="text-cyan-400">›</span> mensagem
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
                  className={`flex items-center gap-2 bg-cyan-400 text-background px-7 py-3 rounded-lg font-display font-semibold hover:bg-cyan-300 transition-all text-sm ${
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
                    className="flex items-center gap-2 text-emerald-400 text-xs font-mono"
                  >
                    <CheckCircle size={14} /> Mensagem enviada!
                  </motion.div>
                )}
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-red-400 text-xs font-mono"
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

