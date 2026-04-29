/**
 * ARQUIVO CENTRAL DE DADOS E CONFIGURAÇÕES DO PORTFÓLIO
 *
 * Este é o único arquivo que você precisará editar para mudar quase 100%
 * das informações de texto e links do site.
 */

export const siteConfig = {
  // SEO e Metadados do site
  siteName: "Abraão | Desenvolvedor Back-End",
  siteDescription: "Portfólio de engenharia e backend de Abraão.",

  // Informações Pessoais
  personal: {
    name: "Abraão",
    surname: "Silva", // Sobrenome opcional pra display tipográfico
    role: "Desenvolvedor Back-End",
    shortBio: "Desenvolvedor especializado em arquitetura robusta e construção de sistemas escaláveis de alta performance.",
    email: "abraao.aspx@hotmail.com", // Troque para o seu
    socials: {
      github: "https://github.com/Abraao-SPX", // Seu github
      linkedin: "https://linkedin.com/in/abraaospx", // Seu linkedin
    },
  },

  // Conteúdo da Hero Section
  hero: {
    badge: "Criador de arquiteturas e sistemas escaláveis",
    heading1: "Construindo o",
    heading2: "futuro no back-end.",
    paragraph: "Focado em código limpo, arquitetura escalável e sistemas resilientes. Da modelagem de banco de dados à entrega de APIs complexas, criando soluções robustas e de alto nível.",
  },

  // Conteúdo da Seção Sobre
  about: {
    title: "A beleza está em uma arquitetura limpa e performática.",
    paragraphs: [
      "Eu crio sistemas e infraestruturas que prezam pela máxima eficiência e segurança no servidor. Cada detalhe importa: de uma query otimizada em banco de dados a uma estrutura de microsserviços sólida.",
      "Com foco em escalabilidade e estabilidade, abandonei as abordagens genéricas para entregar back-ends que suportam milhares de requisições de forma resiliente, limpa e estruturada.",
    ],
    highlights: ["Especialista em Node.js/APIs REST", "Arquitetura de Banco de Dados", "Microsserviços & Cloud", "Foco em Performance & Escalabilidade"]
  },

  // Meus Trabalhos / Projetos
  projects: [
    {
      id: "01",
      category: "Sistema de Pagamentos",
      title: "PayGateway",
      description: "Gateway de pagamentos com arquitetura de microsserviços, garantindo disponibilidade de 99.9% e processamento assíncrono.",
      techs: ["Node.js", "RabbitMQ", "PostgreSQL"],
      demoLink: "https://seulink.demo",
      repoLink: "https://github.com/seuRepo",
    },
    {
      id: "02",
      category: "SaaS / FinTech",
      title: "Vault Finance API",
      description: "API robusta para gestão de patrimônio. Complexidade de dados operacionais condensados em endpoints rápidos e seguros.",
      techs: ["NestJS", "TypeScript", "Redis", "Docker"],
      demoLink: "https://seulink.demo",
      repoLink: "https://github.com/seuRepo",
    },
    {
      id: "03",
      category: "Arquitetura de Dados",
      title: "Data Core",
      description: "Sistema de processamento de alto volume construído para lidar com milhares de workers simultâneos consumindo filas.",
      techs: ["Golang", "Kafka", "AWS"],
      demoLink: "https://seulink.demo",
      repoLink: "https://github.com/seuRepo",
    }
  ],

  // Ferramentas e Habilidades
  skills: [
    { category: "Linguagens", items: ["Node.js", "TypeScript", "Python", "Java"] },
    { category: "Bancos de Dados", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
    { category: "Arquitetura", items: ["APIs REST", "GraphQL", "Microsserviços", "Mensageria (RabbitMQ/Kafka)"] },
    { category: "DevOps & Cloud", items: ["Docker", "AWS", "Git", "CI/CD"] },
  ],

  // Experiência / Trajetória (Busca da 1ª Oportunidade)
  experiences: [
    {
      period: "Momento Atual",
      role: "Em Aberto para Primeira Oportunidade",
      company: "Disponível para o Mercado",
      description: "Focado em aplicar meus conhecimentos teóricos em desafios reais. Construindo uma base sólida através de projetos práticos, estudos aprofundados e paixão por resolver problemas complexos no back-end."
    },
    {
      period: "Jornada de Aprendizado",
      role: "Desenvolvedor Back-End em Formação",
      company: "Projetos Pessoais & Estudos",
      description: "Dedicando-me diariamente à criação de APIs, modelagem de dados e arquitetura limpa. Motivado, proativo e pronto para agregar valor imediato e crescer junto com uma equipe experiente."
    },
  ],

  // Footer Personalização
  footer: {
    copy: "© 2026 Abraão Silva.",
    note: "Desenvolvido artesanalmente com rigor e disciplina.",
  }
};
