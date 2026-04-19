"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { sendEmailForm } from "@/lib/email";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

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

    // Use a utility function or direct EmailJS
    sendEmailForm(targetForm)
      .then(() => {
        setSuccess(true);
        targetForm.reset();
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("Algo deu errado. Verifique se as credenciais do EmailJS estão configuradas no .env.local.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contato" className="py-32 px-6 md:px-20 min-h-[80vh] flex flex-col justify-center border-t border-white/10 relative overflow-hidden">
      {/* Background glow subtlety */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white opacity-[0.015] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <p className="text-secondary tracking-widest uppercase text-sm mb-6 font-medium">Próximos passos</p>
          <h2 className="font-display text-5xl md:text-7xl font-semibold mb-8 tracking-tighter leading-[0.95] hover:text-zinc-300 transition-colors duration-500">
            <a href={`mailto:${siteConfig.personal.email}`} className="inline-block relative group">
              Inicie um<br/>projeto.
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </a>
          </h2>
          <p className="text-lg text-secondary mb-12 font-light max-w-md">
            Disponível para novos projetos freelance, oportunidades remotas em tempo integral e arquitetura de interfaces B2B.
          </p>

          <div className="flex flex-wrap gap-8 text-secondary">
            {Object.entries(siteConfig.personal.socials).map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors capitalize font-medium flex items-center group">
                <span className="group-hover:-translate-y-1 transition-transform">{key}</span>
              </a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-surface/50 border border-white/5 p-8 rounded-2xl backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            
            {/* Nomes dos atributos 'name' devem bater exatamente com o que você configurou no Template do EmailJS (ex: 'from_name' e 'message') */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-secondary">Nome</label>
                <input 
                  required
                  name="user_name" // <--- Importante pro EmailJS 
                  type="text" 
                  className="bg-surface border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 hover:border-white/30 transition-all text-white placeholder-zinc-600 font-light" 
                  placeholder="Como posso te chamar?" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-secondary">Email</label>
                <input 
                  required
                  name="user_email" // <--- Importante pro EmailJS
                  type="email" 
                  className="bg-surface border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 hover:border-white/30 transition-all text-white placeholder-zinc-600 font-light" 
                  placeholder="voce@empresa.com" 
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-secondary">A ideia</label>
              <textarea 
                required
                name="message" // <--- Importante pro EmailJS
                rows={5} 
                className="bg-surface border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 hover:border-white/30 transition-all text-white placeholder-zinc-600 font-light resize-none" 
                placeholder="Conte um pouco sobre o projeto, budget ou a vaga..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`bg-white text-black px-8 py-3.5 rounded-full font-medium hover:scale-[1.02] flex items-center justify-center gap-2 transition-all w-full md:w-auto md:self-end ${isSubmitting ? 'opacity-70 pointer-events-none' : ''}`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"} <Send size={16} />
            </button>

            {/* Mensagem Feedback Animada */}
            {success && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex items-center gap-2 text-green-400 mt-2 text-sm font-medium">
                <CheckCircle size={16}/> Mensagem enviada com sucesso!
              </motion.div>
            )}
            {errorMsg && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex items-center gap-2 text-red-400 mt-2 text-sm font-medium leading-tight">
                <AlertCircle size={16} className="shrink-0"/> {errorMsg}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

