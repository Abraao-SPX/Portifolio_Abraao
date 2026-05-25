"use client";
import React, { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { sendEmailForm } from "@/lib/email";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Github, Linkedin, Mail } from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />,
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
        setErrorMsg("Algo deu errado. Verifique as credenciais do EmailJS no .env.local.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contato" className="py-32 px-6 md:px-20 border-t border-white/8 relative overflow-hidden">

      {/* Bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white opacity-[0.012] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary font-medium mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/20" />
            Próximos passos
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            Inicie um<br />
            <span className="text-zinc-600">projeto.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy + socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-secondary mb-10 font-light max-w-md leading-relaxed">
              Disponível para novos projetos freelance, oportunidades remotas em tempo integral e colaborações em arquitetura back-end.
            </p>

            {/* Email link */}
            <a
              href={`mailto:${siteConfig.personal.email}`}
              className="inline-flex items-center gap-3 text-white font-medium mb-10 group w-fit"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors bg-white/[0.02]">
                <Mail size={15} />
              </div>
              <span className="border-b border-white/20 group-hover:border-white transition-colors pb-0.5">
                {siteConfig.personal.email}
              </span>
            </a>

            {/* Social links */}
            <div className="flex gap-4">
              {Object.entries(siteConfig.personal.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 border border-white/8 rounded-full text-secondary hover:text-white hover:border-white/25 transition-all text-sm font-medium"
                >
                  {socialIcons[key] ?? null}
                  <span className="capitalize">{key}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5 p-8 bg-white/[0.02] border border-white/8 rounded-2xl backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-secondary uppercase tracking-wider">Nome</label>
                  <input
                    required
                    name="user_name"
                    type="text"
                    className="bg-background border border-white/8 px-4 py-3 rounded-xl focus:outline-none focus:border-white/30 hover:border-white/15 transition-all text-white placeholder-zinc-700 text-sm"
                    placeholder="Como posso te chamar?"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-secondary uppercase tracking-wider">Email</label>
                  <input
                    required
                    name="user_email"
                    type="email"
                    className="bg-background border border-white/8 px-4 py-3 rounded-xl focus:outline-none focus:border-white/30 hover:border-white/15 transition-all text-white placeholder-zinc-700 text-sm"
                    placeholder="voce@empresa.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Mensagem</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="bg-background border border-white/8 px-4 py-3 rounded-xl focus:outline-none focus:border-white/30 hover:border-white/15 transition-all text-white placeholder-zinc-700 font-light resize-none text-sm"
                  placeholder="Conte sobre o projeto, budget ou a vaga..."
                />
              </div>

              <div className="flex items-center justify-between gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-100 hover:scale-[1.02] flex items-center gap-2 transition-all text-sm ${
                    isSubmitting ? "opacity-60 pointer-events-none" : ""
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send size={14} />
                </button>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm font-medium"
                  >
                    <CheckCircle size={15} /> Mensagem enviada!
                  </motion.div>
                )}
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm font-medium"
                  >
                    <AlertCircle size={15} className="shrink-0" /> {errorMsg}
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