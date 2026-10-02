"use client";

import emailjs from '@emailjs/browser';

/**
 * Função utilitária para enviar emails pelo EmailJS
 * 
 * Lembre-se que as variáveis do EmailJS são chamadas via process.env.
 * O retorno é configurado com a mesma interface de Promise que o EmailJS usa.
 */
export const sendEmailForm = (formElement: HTMLFormElement) => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceID || !templateID || !publicKey) {
    console.error("Variáveis de ambiente do EmailJS estão faltando.");
    return Promise.reject("Erro de configuração interno. Verifique o servidor.");
  }

  // Fazemos a chamada HTTP
  return emailjs.sendForm(serviceID, templateID, formElement, publicKey);
};
