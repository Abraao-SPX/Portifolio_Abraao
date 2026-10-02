"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowDownRight, ArrowUpRight, Check, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { sendEmailForm } from "@/lib/email";
import "./contact.css";

const socialLabels: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emailFallback, setEmailFallback] = useState("");
  const sending = useRef(false);
  const lastSentAt = useRef(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") || "").trim()) return;

    setSuccess(false);
    setErrorMsg("");
    setEmailFallback("");

    const name = String(data.get("user_name") || "").trim();
    const email = String(data.get("user_email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setErrorMsg("Preencha seu nome, e-mail e mensagem para continuar.");
      return;
    }

    if (Date.now() - lastSentAt.current < 30_000) {
      setErrorMsg("Sua mensagem já foi enviada. Aguarde um pouco antes de enviar outra.");
      return;
    }

    sending.current = true;
    setIsSubmitting(true);

    try {
      await sendEmailForm(form);
      lastSentAt.current = Date.now();
      setSuccess(true);
      form.reset();
    } catch {
      const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      setEmailFallback(`mailto:${siteConfig.personal.email}?subject=${subject}&body=${body}`);
      setErrorMsg("Não foi possível enviar por aqui. Continue por e-mail com a mensagem que você escreveu.");
    } finally {
      sending.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-section-label">
          <p className="eyebrow">04 / Contato</p>
          <ArrowDownRight size={24} strokeWidth={1.4} aria-hidden="true" />
        </div>

        <div className="contact-layout">
          <div className="contact-copy">
            <h2 id="contact-title">
              Vamos construir<br />
              <em>algo juntos.</em>
            </h2>
            <p className="contact-description">
              Um projeto, uma oportunidade ou uma boa conversa sobre tecnologia.
              Estou por aqui.
            </p>

            <a className="contact-email" href={`mailto:${siteConfig.personal.email}`}>
              <span>{siteConfig.personal.email}</span>
              <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" />
            </a>

            <div className="contact-socials" aria-label="Redes sociais">
              {Object.entries(siteConfig.personal.socials).map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                  {socialLabels[key] || key}
                  <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="contact-sr-only"> (abre em uma nova aba)</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
            <p className="contact-form-intro">Me conte o que você tem em mente.</p>
            <div className="contact-field">
              <label htmlFor="contact-name"><span>01</span> Seu nome</label>
              <input
                id="contact-name"
                name="user_name"
                type="text"
                autoComplete="name"
                placeholder="Como posso te chamar?"
                maxLength={120}
                required
                readOnly={isSubmitting}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email"><span>02</span> Seu e-mail</label>
              <input
                id="contact-email"
                name="user_email"
                type="email"
                autoComplete="email"
                placeholder="voce@exemplo.com"
                maxLength={254}
                required
                readOnly={isSubmitting}
              />
            </div>
            <div className="contact-field contact-message-field">
              <label htmlFor="contact-message"><span>03</span> Sua mensagem</label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder="Sobre o que vamos conversar?"
                maxLength={5000}
                required
                readOnly={isSubmitting}
              />
            </div>
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Deixe este campo vazio</label>
              <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button className="contact-submit" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? "Enviando mensagem…" : "Vamos conversar"}</span>
              {isSubmitting
                ? <Loader2 className="contact-spinner" size={19} aria-hidden="true" />
                : <ArrowUpRight size={21} strokeWidth={1.6} aria-hidden="true" />}
            </button>

            <div className="contact-status" aria-live="polite" aria-atomic="true">
              {success && (
                <p className="contact-success"><Check size={17} aria-hidden="true" /> Mensagem enviada. Obrigado pelo contato!</p>
              )}
              {errorMsg && (
                <div className="contact-error" role="alert">
                  <p>{errorMsg}</p>
                  {emailFallback && <a href={emailFallback}>Continuar por e-mail <ArrowUpRight size={14} aria-hidden="true" /></a>}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
