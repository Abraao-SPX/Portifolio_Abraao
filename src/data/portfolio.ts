export const siteConfig = {
  siteName: "Abraão Paixão | Software Developer",
  siteDescription: "Portfólio de Abraão Paixão — desenvolvedor Java, Flutter e entusiasta de segurança.",

  personal: {
    name: "Abraão",
    surname: "Paixão",
    role: "Software Developer",
    shortBio: "Desenvolvedor especializado em Java (Spring Boot) e Flutter, com forte interesse em Ethical Hacking.",
    email: "abraao.aspx@hotmail.com",
    socials: {
      github: "https://github.com/Abraao-SPX",
      linkedin: "https://linkedin.com/in/abraaospx",
    },
  },

  hero: {
    badge: "Disponível para oportunidades",
    heading1: "Abraão",
    heading2: "Paixão.",
    paragraph: "Estudante universitário e desenvolvedor de software especializado em Java com Spring Boot e Flutter. Apaixonado por código limpo, arquitetura escalável e segurança de sistemas.",
  },

  about: {
    title: "Sistemas escaláveis. Código limpo. Segurança desde o primeiro commit.",
    paragraphs: [
      "Sou estudante de tecnologia e desenvolvedor de software com foco em Java (Spring Boot) para back-end robusto e Flutter para aplicações mobile de alta qualidade. Cada linha de código é escrita com intenção.",
      "Meu interesse em Ethical Hacking me diferencia: penso em segurança desde o design da arquitetura. Acredito que um bom desenvolvedor constrói sistemas que não apenas funcionam — mas resistem.",
    ],
    highlights: [
      "Java & Spring Boot",
      "Flutter & Dart",
      "Ethical Hacking",
      "Arquitetura Limpa",
    ],
  },

  projects: [
    {
      id: "01",
      category: "APIs REST e Gerenciamento",
      title: "Sistema de Gerenciamento de Tarefas Kanban",
      description: "Backend para gerenciamento de tarefas inspirado na metodologia Kanban. Permite a organização de fluxos de trabalho, criação de cards e controle de status de atividades de forma eficiente.",
      techs: ["Java", "Spring Boot", "PostgreSQL"],
      demoLink: "",
      repoLink: "https://github.com/Abraao-SPX/Sistema-de-Gerenciamento-de-Tarefas-Kanban",
      image: "",
    },
    {
      id: "02",
      category: "Mensageria e Arquitetura Orientada a Eventos",
      title: "Transaction Event Processor",
      description: "Serviço de processamento de transações em tempo real. Utilização do Apache Kafka para ingestão de eventos e CQRS para segregação de comandos e consultas, mantendo consistência eventual.",
      techs: ["Java", "Spring Kafka", "Redis", "MongoDB"],
      demoLink: "",
      repoLink: "https://github.com/Abraao-SPX/Transaction-Event-Processor",
      image: "",
    },
    {
      id: "03",
      category: "Segurança e Identidade",
      title: "OAuth2 Identity Provider",
      description: "Servidor de autorização customizado com Spring Security. Gerenciamento seguro de acesso granular (RBAC), emissão e revogação de tokens JWT em uma arquitetura stateless altamente testável.",
      techs: ["Java", "Spring Security", "PostgreSQL", "JUnit 5"],
      demoLink: "",
      repoLink: "",
      image: "",
    },
  ],

  skills: [
    { category: "Back-end", items: ["Java", "Spring Boot", "Spring Security", "Spring Kafka", "Node.js", "TypeScript"] },
    { category: "Mobile", items: ["Flutter", "Dart"] },
    { category: "Segurança", items: ["Ethical Hacking", "OWASP", "JWT", "OAuth2", "Pentest"] },
    { category: "Banco de Dados", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
    { category: "Arquitetura & DevOps", items: ["APIs REST", "Microsserviços", "CQRS", "Docker", "Git", "CI/CD", "AWS"] },
  ],

  experiences: [
    {
      period: "Atualmente",
      role: "Em Aberto para Primeira Oportunidade",
      company: "Disponível para o Mercado",
      description: "Focado em aplicar meus conhecimentos em desafios reais. Construindo uma base sólida através de projetos práticos, estudos aprofundados e paixão por resolver problemas complexos.",
    },
    {
      period: "Jornada de Aprendizado",
      role: "Desenvolvedor de Software em Formação",
      company: "Projetos Pessoais & Estudos",
      description: "Dedicando-me diariamente à criação de APIs, modelagem de dados e arquitetura limpa com Java e Spring Boot. Explorando Flutter para desenvolvimento mobile e aprofundando conhecimentos em segurança.",
    },
  ],

  footer: {
    copy: "© 2026 Abraão Paixão.",
    note: "Construído com código limpo e atenção aos detalhes.",
  },
};
