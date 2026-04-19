/**
 * ARQUIVO CENTRAL DE DADOS E CONFIGURAÇÕES DO PORTFÓLIO
 *
 * Este é o único arquivo que você precisará editar para mudar quase 100%
 * das informações de texto e links do site.
 */

export const siteConfig = {
  // SEO e Metadados do site
  siteName: "Abraão | Desenvolvedor & Designer",
  siteDescription: "Portfólio de engenharia e design de Abraão.",

  // Informações Pessoais
  personal: {
    name: "Abraão",
    surname: "Silva", // Sobrenome opcional pra display tipográfico
    role: "Engenheiro Frontend & UI Designer",
    shortBio: "Desenvolvedor especializado em intersecções impecáveis entre código eficiente e estética de alta performance.",
    email: "contato@abraao.dev", // Troque para o seu
    socials: {
      github: "https://github.com/Abraao", // Seu github
      linkedin: "https://linkedin.com/in/abraao", // Seu linkedin
      twitter: "https://twitter.com/abraao",
    },
  },

  // Conteúdo da Hero Section
  hero: {
    badge: "Criador de experiências visuais e digitais",
    heading1: "Construindo o",
    heading2: "futuro interativo.",
    paragraph: "Focado em tipografia marcante, transições suaves e engenharia escalável. Do design de interface à arquitetura de React complexa, criando identidades memoráveis.",
  },

  // Conteúdo da Seção Sobre
  about: {
    title: "O código limpo é inútil se a experiência for fria.",
    paragraphs: [
      "Eu crio produtos digitais que prezam tanto pela eficiência da engenharia de software quanto pela beleza do design. Cada detalhe importa: da curva de uma animação CSS à refatoração limpa de um Hook em React.",
      "Com anos de foco em usabilidade e performance, abandonei as abordagens genéricas e superficiais para entregar interfaces com verdadeira personalidade. Onde o minimalismo não é ausência de conteúdo, mas a perfeita harmonia entre presença, tipografia e os espaços vazios.",
    ],
    highlights: ["Especialista em React/Next.js", "Fluência em Framer Motion & GSAP", "Design de Componentes UI", "Foco em Performance & LCP"]
  },

  // Meus Trabalhos / Projetos
  projects: [
    {
      id: "01",
      category: "E-Commerce",
      title: "Aura Premium",
      description: "Plataforma de luxo com arquitetura de navegação minimalista e checkout sem atritos.",
      techs: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://seulink.demo",
      repoLink: "https://github.com/seuRepo",
    },
    {
      id: "02",
      category: "SaaS / FinTech",
      title: "Vault Finance",
      description: "Dashboard inovador para gestão de patrimônio. Complexidade de dados operacionais condensados em gráficos elegantes e navegação intuitiva.",
      techs: ["React", "TypeScript", "D3.js", "Zustand"],
      demoLink: "https://seulink.demo",
      repoLink: "https://github.com/seuRepo",
    },
    {
      id: "03",
      category: "Institucional",
      title: "Lumina Studio",
      description: "Página de conversão de alta performance desenhada com conceito de grid rigoroso e WebGL interativo.",
      techs: ["Next.js", "Three.js", "GSAP"],
      demoLink: "https://seulink.demo",
      repoLink: "https://github.com/seuRepo",
    }
  ],

  // Ferramentas e Habilidades
  skills: [
    { category: "Core", items: ["JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Zustand"] },
    { category: "Motion & UI", items: ["Framer Motion", "GSAP", "Figma", "Shadcn/UI"] },
    { category: "Backend & Ferramentas", items: ["Node.js", "Git", "Docker", "Vercel"] },
  ],

  // Experiência / Trajetória
  experiences: [
    {
      period: "2024 - Presente",
      role: "Engenheiro Frontend Sênior",
      company: "Tech Premium Solutions", // Opcional
      description: "Liderando a arquitetura Frontend para aplicações de grande escala, reduzindo o tempo de carregamento em 40% e refinando as microinterações globais em Tailwind e Framer Motion."
    },
    {
      period: "2021 - 2024",
      role: "UI Designer & Fullstack Dev",
      company: "Agência Lumina", // Opcional
      description: "Criação colaborativa de experiências inteiras do zero no Figma com entrega de código pronto rodando em Next.js para clientes de luxo internacionais."
    },
  ],

  // Footer Personalização
  footer: {
    copy: "© 2026 Abraão Silva.",
    note: "Desenvolvido artesanalmente com rigor e disciplina.",
  }
};

