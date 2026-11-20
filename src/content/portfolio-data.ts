export type Locale = "pt" | "en";

export type ProjectCategory = "all" | "backend" | "fullstack" | "research";

export type ProjectStatus = "live" | "research" | "production" | "open-source";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, "all">;
  status: ProjectStatus;
  statusLabel: string;
  year: string;
  featuredSpan: "col-7" | "col-5" | "col-4";
  highlightMetric: string;
  problem: string;
  architecture: string;
  result: string;
  architectureFlow: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  links: {
    repo?: string;
    demo?: string;
    paper?: string;
    secondaryRepo?: { label: string; url: string };
  };
  diagramType:
    | "p2p-mesh"
    | "kafka-cqrs"
    | "doc-pipeline"
    | "inclusive-engine"
    | "oci-biometrics"
    | "mobile-sync";
}

export interface TopologyNode {
  id: string;
  label: string;
  sublabel: string;
  layer: string;
  x: number;
  y: number;
  status: "healthy" | "active";
  latency: string;
  throughput: string;
  spec: string;
  description: string;
  tech: string[];
}

export interface StackItem {
  name: string;
  role: string;
  usage: string;
  projects: string[];
  highlight?: boolean;
}

export interface StackCategory {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  items: StackItem[];
}

export interface ResearchLine {
  code: string;
  title: string;
  description: string;
  tags: string[];
}

export interface AcademicMilestone {
  period: string;
  title: string;
  institution: string;
  badge: string;
  description: string;
}

export interface PortfolioDictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    projects: string;
    research: string;
    stack: string;
    contact: string;
    lattes: string;
    status: string;
    accentTitle: string;
  };
  hero: {
    availability: string;
    eyebrow: string;
    headlinePrimary: string;
    headlineMuted: string;
    bio: string;
    ctaProjects: string;
    ctaGithub: string;
    ctaResearch: string;
    telemetry: { label: string; value: string; detail: string }[];
    visualTabs: {
      topology: string;
      terminal: string;
    };
    topologyHint: string;
    terminalHint: string;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    titleMuted: string;
    subtitle: string;
    filters: { id: ProjectCategory; label: string }[];
    labels: {
      problem: string;
      architecture: string;
      result: string;
      flow: string;
      repo: string;
      demo: string;
      paper: string;
      inspect: string;
      closeModal: string;
    };
    archiveCard: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
      highlights: string[];
    };
  };
  researchSection: {
    eyebrow: string;
    title: string;
    titleMuted: string;
    subtitle: string;
    featuredPaper: {
      badge: string;
      conference: string;
      publisher: string;
      title: string;
      authors: string;
      abstract: string;
      contributionsTitle: string;
      contributions: string[];
      copyBibtex: string;
      copiedBibtex: string;
      viewPaper: string;
      viewProject: string;
      bibtex: string;
    };
    researchLinesTitle: string;
    researchLines: ResearchLine[];
    timelineTitle: string;
    timeline: AcademicMilestone[];
  };
  stackSection: {
    eyebrow: string;
    title: string;
    titleMuted: string;
    subtitle: string;
    filterHint: string;
    activeFilterLabel: string;
    clearFilter: string;
    categories: StackCategory[];
    architecturePrinciples: {
      title: string;
      items: { code: string; name: string; detail: string }[];
    };
  };
  contactSection: {
    eyebrow: string;
    title: string;
    titleMuted: string;
    subtitle: string;
    emailLabel: string;
    copyEmail: string;
    copiedEmail: string;
    sendEmail: string;
    availabilityTitle: string;
    availabilityItems: string[];
    directChannelsTitle: string;
  };
  footer: {
    status: string;
    region: string;
    builtWith: string;
    rights: string;
  };
  projects: ProjectItem[];
  topologyNodes: TopologyNode[];
}

export const PROFILE_LINKS = {
  domain: "https://abraao-dev.tech",
  email: "abraao.aspx@hotmail.com",
  github: "https://github.com/Abraao-SPX",
  linkedin: "https://linkedin.com/in/abraaospx",
  lattes: "https://lattes.cnpq.br/",
  printweb: "https://printweb.me",
  sbcPortal: "https://sol.sbc.org.br/",
};

export const portfolioContent: Record<Locale, PortfolioDictionary> = {
  pt: {
    meta: {
      title: "Abraão Paixão — Engenharia Back-end & Arquitetura Distribuída",
      description:
        "Engenheiro de Software Back-end & Full-Stack (Java/Spring Boot, Apache Kafka, Redis, OCI, TypeScript/React, Flutter). Pesquisador publicado na CLIHC 2026 / SBC.",
    },
    nav: {
      projects: "Projetos",
      research: "Arquitetura & Pesquisa",
      stack: "Stack & Infra",
      contact: "Contato",
      lattes: "Lattes / CV",
      status: "Disponível · Pesquisa & Engenharia",
      accentTitle: "Alternar cor de acento do painel",
    },
    hero: {
      availability: "Disponível para projetos, engenharia back-end & pesquisa em mestrado",
      eyebrow: "// CONTROL PLANE · ABRAAO-DEV.TECH · ARACAJU, BR",
      headlinePrimary: "Engenharia back-end e sistemas distribuídos",
      headlineMuted: "projetados do evento à interface.",
      bio: "Desenvolvedor de software focado em arquiteturas orientadas a eventos, microsserviços resilientes e aplicações full-stack (Java/Spring Boot, Kafka, Redis, Python, React e Flutter). Pesquisador publicado na CLIHC 2026 (SBC) e candidato ao Mestrado em Ciência da Computação (UFS) em Engenharia de Software e IA.",
      ctaProjects: "Explorar Estudos de Caso",
      ctaGithub: "GitHub (Abraao-SPX)",
      ctaResearch: "Publicação CLIHC 2026",
      telemetry: [
        {
          label: "ARQUITETURA & BACK-END",
          value: "Spring · Kafka · Redis",
          detail: "CQRS, Event-Driven, FastAPI & Node.js",
        },
        {
          label: "PESQUISA CIENTÍFICA",
          value: "CLIHC 2026 / SBC",
          detail: "Artigo publicado + Mestrado CC (UFS)",
        },
        {
          label: "CLOUD & PRODUÇÃO",
          value: "OCI ARM64 · Cloudflare",
          detail: "Docker, Linux, Nginx, Zero-Trust Edge",
        },
      ],
      visualTabs: {
        topology: "topology.live",
        terminal: "abraao-cli",
      },
      topologyHint: "Clique ou passe o cursor sobre um nó para inspecionar telemetria e decisões arquiteturais",
      terminalHint: "Clique em um comando rápido abaixo ou inspecione o estado da arquitetura",
    },
    projectsSection: {
      eyebrow: "// 01 — ENGENHARIA EM PRODUÇÃO & ESTUDOS DE CASO",
      title: "Sistemas construídos com foco em",
      titleMuted: "problema, arquitetura e resultado.",
      subtitle:
        "Cada projeto é documentado pela decisão de engenharia que resolve o gargalo real — de motores orientados a eventos com Apache Kafka e microsserviços biométricos em OCI ARM até plataformas avaliadas cientificamente.",
      filters: [
        { id: "all", label: "Todos (06)" },
        { id: "backend", label: "Sistemas Distribuídos & Back-end" },
        { id: "fullstack", label: "Full-Stack & Produto" },
        { id: "research", label: "Pesquisa & IA Aplicada" },
      ],
      labels: {
        problem: "PROBLEMA",
        architecture: "ARQUITETURA",
        result: "RESULTADO",
        flow: "PIPELINE DE EXECUÇÃO",
        repo: "Repositório",
        demo: "Produção",
        paper: "Artigo SBC",
        inspect: "Especificação",
        closeModal: "Fechar especificação",
      },
      archiveCard: {
        eyebrow: "// GITHUB ARCHIVE · 29+ REPOSITÓRIOS",
        title: "Laboratório de Engenharia & Código Aberto",
        description:
          "Mais de 25 repositórios adicionais cobrindo APIs RESTful com Spring Security, sistemas Kanban, automação com IA (Spring AI), experimentos de estruturas de dados e infraestrutura Docker.",
        cta: "Explorar todos os repositórios no GitHub",
        highlights: [
          "Sistema-de-Gerenciamento-Kanban (Spring Boot + PostgreSQL)",
          "School-System (Spring Boot + MySQL + Redis Cache)",
          "Agent-Java & Spring AI Explorations",
          "SecRunner & Ferramentas de Segurança Defensiva",
        ],
      },
    },
    researchSection: {
      eyebrow: "// 02 — PESQUISA ACADÊMICA & PUBLICAÇÕES",
      title: "Rigor científico aplicado à",
      titleMuted: "engenharia de software e sistemas reais.",
      subtitle:
        "Investigação acadêmica na interseção entre Engenharia de Software, Interação Humano-Computador e Desenvolvimento Assistido por Inteligência Artificial.",
      featuredPaper: {
        badge: "ARTIGO PUBLICADO · PEER-REVIEWED",
        conference: "CLIHC 2026 — Conferência Latino-Americana de Interação Humano-Computador",
        publisher: "Publicado pela Sociedade Brasileira de Computação (SBC / SOL)",
        title:
          "CaronaJu: Plataforma P2P de Mobilidade Sustentável e Colaborativa para Comunidades Universitárias",
        authors: "Abraão Silva Paixão et al. · UNINASSAU / Pesquisa Aplicada em Computação",
        abstract:
          "Estudo, modelagem arquitetural e validação empírica de uma plataforma peer-to-peer voltada à mobilidade universitária sustentável. O trabalho investiga como mecanismos de verificação institucional, pareamento de rotas por proximidade temporal-espacial e design centrado na confiança reduzem o atrito de adoção e promovem transporte compartilhado seguro no ecossistema acadêmico.",
        contributionsTitle: "CONTRIBUIÇÕES DE ENGENHARIA & PESQUISA",
        contributions: [
          "Modelagem de arquitetura P2P com validação de vínculo acadêmico e reputação verificável entre pares.",
          "Algoritmo de correspondência de rotas universitárias com baixa latência e foco em redução de emissões.",
          "Avaliação de usabilidade, confiança percebida e impacto social publicada nos anais da CLIHC 2026 / SBC.",
        ],
        copyBibtex: "Copiar BibTeX",
        copiedBibtex: "BibTeX Copiado",
        viewPaper: "Portal SBC / Publicação",
        viewProject: "Ver Arquitetura CaronaJu",
        bibtex: `@inproceedings{paixao2026caronaju,
  author    = {Paix{\\~a}o, Abra{\\~a}o Silva and collaborators},
  title     = {CaronaJu: Plataforma P2P de Mobilidade Sustent{\\'a}vel para Estudantes Universit{\\'a}rios},
  booktitle = {Anais da Confer{\\^e}ncia Latino-Americana de Intera{\\c{c}}{\\~a}o Humano-Computador (CLIHC 2026)},
  year      = {2026},
  publisher = {Sociedade Brasileira de Computa{\\c{c}}{\\~a}o (SBC)},
  url       = {https://abraao-dev.tech/#pesquisa}
}`,
      },
      researchLinesTitle: "LINHAS DE PESQUISA (MESTRADO CC — UFS)",
      researchLines: [
        {
          code: "RES-01",
          title: "Engenharia de Software & Desenvolvimento Assistido por IA",
          description:
            "Investigação sobre orquestração de agentes de código, qualidade arquitetural, verificação automatizada e produtividade em sistemas orientados a domínio.",
          tags: ["AI4SE", "LLM Agents", "Code Quality", "Spring AI"],
        },
        {
          code: "RES-02",
          title: "Arquiteturas Distribuídas, Eventos & Resiliência",
          description:
            "Padrões de desacoplamento com mensageria assíncrona (Apache Kafka), CQRS, idempotência, cache distribuído (Redis) e tolerância a falhas em nuvem.",
          tags: ["Apache Kafka", "CQRS", "Redis", "Distributed Systems"],
        },
        {
          code: "RES-03",
          title: "Sistemas Centrados no Humano, Acessibilidade & Segurança",
          description:
            "Construção de plataformas educacionais inclusivas (IncluEdu), mobilidade sustentável (CaronaJu) e autenticação biométrica anti-spoofing acessível.",
          tags: ["CLIHC / SBC", "Assistive Tech", "Biometrics", "Privacy by Design"],
        },
      ],
      timelineTitle: "TRAJETÓRIA ACADÊMICA & CIENTÍFICA",
      timeline: [
        {
          period: "2026 — Presente",
          title: "Candidato ao Mestrado em Ciência da Computação (PROCC)",
          institution: "Universidade Federal de Sergipe (UFS)",
          badge: "Pós-Graduação Stricto Sensu",
          description:
            "Linha de pesquisa focada em Engenharia de Software e Desenvolvimento Assistido por IA, integrando verificação arquitetural e automação inteligente.",
        },
        {
          period: "2026",
          title: "Autor de Artigo Científico — CLIHC 2026",
          institution: "Sociedade Brasileira de Computação (SBC)",
          badge: "Publicação Internacional / Regional",
          description:
            "Apresentação e publicação da pesquisa sobre a plataforma CaronaJu na Conferência Latino-Americana de Interação Humano-Computador.",
        },
        {
          period: "Em conclusão",
          title: "Graduação em Análise e Desenvolvimento de Sistemas",
          institution: "Centro Universitário Maurício de Nassau (UNINASSAU)",
          badge: "Ensino Superior",
          description:
            "Foco em engenharia de software back-end, estruturas de dados, bancos relacionais, arquitetura de computadores e projetos aplicados de impacto real.",
        },
      ],
    },
    stackSection: {
      eyebrow: "// 03 — STACK & INFRAESTRUTURA POR CAMADA",
      title: "Tecnologias organizadas por",
      titleMuted: "responsabilidade arquitetural, não por barras genéricas.",
      subtitle:
        "Clique em qualquer tecnologia para filtrar e destacar em tempo real quais sistemas do portfólio a utilizam em produção ou pesquisa.",
      filterHint: "Clique em uma tecnologia para rastrear seus projetos correspondentes",
      activeFilterLabel: "Filtrando projetos que utilizam:",
      clearFilter: "Limpar seleção",
      categories: [
        {
          id: "backend",
          code: "LAYER 01 // BACK-END & MENSAGERIA",
          title: "Back-end, Domínio & Eventos",
          subtitle: "APIs de alta concorrência, microsserviços, processamento assíncrono e integração com IA.",
          items: [
            {
              name: "Java (17 / 21)",
              role: "Linguagem Core Back-end",
              usage: "Tipagem forte, concorrência, JVM tuning e serviços críticos",
              projects: ["Transaction Event Processor", "PrintWeb", "IncluEdu Engine"],
              highlight: true,
            },
            {
              name: "Spring Boot & Spring Data JPA",
              role: "Ecossistema Enterprise",
              usage: "REST APIs, transações ACID, Hibernate, validação e segurança JWT",
              projects: ["Transaction Event Processor", "PrintWeb", "IncluEdu Engine"],
              highlight: true,
            },
            {
              name: "Spring AI & LLM Orchestration",
              role: "Engenharia de IA Aplicada",
              usage: "Prompts estruturados, geração de documentos técnicos e adaptação pedagógica",
              projects: ["PrintWeb", "IncluEdu Engine"],
            },
            {
              name: "Apache Kafka",
              role: "Event Streaming Distribuído",
              usage: "Tópicos particionados (6 partitions), consumer groups, desacoplamento e CQRS",
              projects: ["Transaction Event Processor"],
              highlight: true,
            },
            {
              name: "Node.js & Express",
              role: "APIs REST & Tempo Real",
              usage: "Middlewares JWT, rate limiting, integração mobile e pareamento P2P",
              projects: ["CaronaJu", "NeuroFlow"],
            },
            {
              name: "Python (FastAPI & ONNX Runtime)",
              role: "Microsserviços & Visão Computacional",
              usage: "Inferência neural pura sem peso de TensorFlow, pipelines YuNet/SFace/MiniFASNet",
              projects: ["API de Validação Biométrica Facial"],
              highlight: true,
            },
          ],
        },
        {
          id: "data-cloud",
          code: "LAYER 02 // DADOS, CLOUD & INFRAESTRUTURA",
          title: "Persistência, Cache & Edge Cloud",
          subtitle: "Modelagem relacional normalizada, leitura sub-milissegundo e deploy em servidores Linux ARM.",
          items: [
            {
              name: "PostgreSQL",
              role: "Banco Relacional Primário",
              usage: "Modelagem normalizada, índices compostos, integridade transacional e auditoria",
              projects: ["Transaction Event Processor", "IncluEdu Engine"],
              highlight: true,
            },
            {
              name: "MySQL",
              role: "Persistência Relacional",
              usage: "Migrations versionadas, pools de conexão (HikariCP / Sequelize) e queries otimizadas",
              projects: ["CaronaJu", "PrintWeb", "NeuroFlow"],
            },
            {
              name: "Redis",
              role: "Cache In-Memory & Read Model",
              usage: "Projeções de leitura CQRS em baixa latência, invalidação de sessão e rate-limit",
              projects: ["Transaction Event Processor"],
              highlight: true,
            },
            {
              name: "Oracle Cloud Infrastructure (OCI)",
              role: "Compute VPS ARM64 (Ampere)",
              usage: "Provisionamento de instâncias Linux, hardening SSH, isolamento de serviços e deploy contínuo",
              projects: ["API de Validação Biométrica Facial", "PrintWeb"],
              highlight: true,
            },
            {
              name: "Cloudflare (DNS, Zero-Trust & WAF)",
              role: "Edge Network & Proteção",
              usage: "Roteamento Anycast, túneis seguros, mitigação DDoS, SSL/TLS estrito e cache de borda",
              projects: ["API de Validação Biométrica Facial", "PrintWeb"],
              highlight: true,
            },
            {
              name: "Docker & Linux (Nginx)",
              role: "Containerização & Proxy Reverso",
              usage: "Multi-stage builds enxutos, Docker Compose, isolamento de rede e entrega HTTP/2",
              projects: [
                "Transaction Event Processor",
                "API de Validação Biométrica Facial",
                "PrintWeb",
                "IncluEdu Engine",
              ],
            },
          ],
        },
        {
          id: "frontend-mobile",
          code: "LAYER 03 // FRONT-END & MOBILE MULTIPLATAFORMA",
          title: "Interfaces Web & Aplicações Nativas",
          subtitle: "Experiências reativas tipadas de ponta a ponta consumindo arquiteturas distribuídas.",
          items: [
            {
              name: "TypeScript",
              role: "Tipagem Estática End-to-End",
              usage: "Contratos estritos de API, segurança em tempo de compilação e arquitetura modular",
              projects: ["PrintWeb", "IncluEdu Engine", "CaronaJu"],
              highlight: true,
            },
            {
              name: "React & Next.js",
              role: "Interfaces Web & Design Systems",
              usage: "Renderização híbrida/estática, editores ricos, exportação PDF e alta performance",
              projects: ["PrintWeb", "IncluEdu Engine"],
              highlight: true,
            },
            {
              name: "Flutter & Dart",
              role: "Engenharia Mobile Multiplataforma",
              usage: "Gerenciamento de estado reativo, persistência local segura, UX fluida e integração REST",
              projects: ["CaronaJu", "NeuroFlow"],
              highlight: true,
            },
            {
              name: "Tailwind CSS & Motion",
              role: "Sistemas Visuais & Micro-interações",
              usage: "Tokens semânticos, layouts Bento responsivos, acessibilidade WCAG e animações fluidas",
              projects: ["PrintWeb", "IncluEdu Engine"],
            },
          ],
        },
      ],
      architecturePrinciples: {
        title: "PADRÕES DE ENGENHARIA APLICADOS EM TODOS OS SISTEMAS",
        items: [
          {
            code: "ADR-01",
            name: "CQRS & Event-Driven Isolation",
            detail: "Separação entre escrita assíncrona via Kafka e leitura ultra-rápida servida por Redis.",
          },
          {
            code: "ADR-02",
            name: "Security & Privacy by Design",
            detail: "Bcrypt, JWT com rotação/expiração curta, rate limiting (Bucket4j) e não-retenção de biometria bruta (LGPD).",
          },
          {
            code: "ADR-03",
            name: "Lean Containerization",
            detail: "Multi-stage Dockerfiles e inferência ONNX pura (redução de ~2.4GB para 864MB em produção ARM64).",
          },
          {
            code: "ADR-04",
            name: "Database Discipline",
            detail: "Migrations versionadas, índices explícitos em chaves estrangeiras e connection pooling calibrado.",
          },
        ],
      },
    },
    contactSection: {
      eyebrow: "// 04 — CANAL DIRETO & COLABORAÇÃO",
      title: "Pronto para discutir arquitetura,",
      titleMuted: "engenharia back-end ou pesquisa científica.",
      subtitle:
        "Disponível para posições de Engenharia de Software (Back-end / Full-Stack), projetos de arquitetura distribuída e colaborações acadêmicas em Engenharia de Software e IA.",
      emailLabel: "ENDPOINT DE CONTATO PRIMÁRIO",
      copyEmail: "Copiar e-mail",
      copiedEmail: "Copiado para o clipboard",
      sendEmail: "Abrir cliente de e-mail",
      availabilityTitle: "ESCOPO DE ATUAÇÃO ATUAL",
      availabilityItems: [
        "Engenharia Back-end (Java / Spring Boot, Node.js, Python)",
        "Arquitetura Orientada a Eventos (Kafka, Redis, Microsserviços)",
        "Desenvolvimento Full-Stack & Mobile (React, TypeScript, Flutter)",
        "Pesquisa Acadêmica & Mestrado (Engenharia de Software & IA)",
      ],
      directChannelsTitle: "DIRETÓRIOS & PERFIS VERIFICADOS",
    },
    footer: {
      status: "ALL SYSTEMS OPERATIONAL",
      region: "sa-aracaju-1 · OCI & Cloudflare Edge",
      builtWith: "Arquitetado com Next.js 15, TypeScript, Tailwind CSS & Geist",
      rights: "Abraão Silva Paixão. Código e arquitetura orientados à precisão.",
    },
    projects: [
      {
        id: "01",
        slug: "caronaju",
        title: "CaronaJu",
        subtitle: "Plataforma P2P de mobilidade sustentável universitária · Artigo publicado na CLIHC 2026 (SBC)",
        category: "research",
        status: "research",
        statusLabel: "CLIHC 2026 · SBC PAPER",
        year: "2026",
        featuredSpan: "col-7",
        highlightMetric: "Artigo Científico Publicado · SBC",
        problem:
          "Estudantes universitários enfrentam deslocamentos diários custosos e fragmentados, enquanto grupos informais de carona carecem de verificação de vínculo institucional, previsibilidade de rota e segurança entre pares.",
        architecture:
          "Arquitetura cliente-servidor com aplicativo mobile multiplataforma, API REST autenticada por vínculo acadêmico, motor de pareamento de rotas por janela de horário/campus e camada de reputação auditável.",
        result:
          "Pesquisa científica aprovada, apresentada na Conferência Latino-Americana de Interação Humano-Computador (CLIHC 2026) e publicada oficialmente pela Sociedade Brasileira de Computação (SBC).",
        architectureFlow: [
          "App Universitário (Flutter)",
          "Validação Institucional JWT",
          "Route Matching Engine",
          "MySQL Transacional",
          "Avaliação Empírica CLIHC/SBC",
        ],
        metrics: [
          { label: "Publicação", value: "CLIHC 2026 / SBC" },
          { label: "Topologia", value: "P2P Verificado" },
          { label: "Domínio", value: "Mobilidade & IHC" },
        ],
        stack: ["Flutter", "Dart", "Node.js", "Express", "MySQL", "TypeScript", "REST API"],
        links: {
          paper: "https://sol.sbc.org.br/",
          repo: "https://github.com/Abraao-SPX",
        },
        diagramType: "p2p-mesh",
      },
      {
        id: "02",
        slug: "transaction-event-processor",
        title: "Transaction Event Processor",
        subtitle: "Motor financeiro orientado a eventos de alta vazão com Java Spring Boot, Apache Kafka, Redis e CQRS",
        category: "backend",
        status: "production",
        statusLabel: "EVENT-DRIVEN · CQRS",
        year: "2026",
        featuredSpan: "col-5",
        highlightMetric: "6 Kafka Partitions · Sub-ms Read",
        problem:
          "Sistemas transacionais síncronos sofrem contenção de lock em banco relacional quando submetidos a picos concorrentes de escritas financeiras e consultas simultâneas de saldo.",
        architecture:
          "Implementação do padrão CQRS com Java e Spring Boot: comandos de transação são publicados em tópicos Apache Kafka (6 partições), processados de forma idempotente por consumer groups (`balance-processor`), persistidos no PostgreSQL e projetados em cache Redis.",
        result:
          "Desacoplamento total entre ingestão de escrita e leitura de saldo, garantindo consistência eventual auditável, escalabilidade horizontal por partição e leituras em sub-milissegundo via Redis.",
        architectureFlow: [
          "Command API (Spring Boot)",
          "Kafka Topic (6 Partitions)",
          "Consumer Group (Idempotent)",
          "PostgreSQL Ledger",
          "Redis Balance Projection",
        ],
        metrics: [
          { label: "Padrão", value: "CQRS + Event Driven" },
          { label: "Paralelismo", value: "6 Kafka Partitions" },
          { label: "Leitura", value: "Redis In-Memory" },
        ],
        stack: ["Java (17 / 21)", "Spring Boot & Spring Data JPA", "Apache Kafka", "Redis", "PostgreSQL", "Docker & Linux (Nginx)"],
        links: {
          repo: "https://github.com/Abraao-SPX/Transaction-Event-Processor",
        },
        diagramType: "kafka-cqrs",
      },
      {
        id: "03",
        slug: "printweb",
        title: "PrintWeb (printweb.me)",
        subtitle: "Plataforma em produção que converte anotações de estudo em guias HTML/CSS estruturados para PDF",
        category: "fullstack",
        status: "live",
        statusLabel: "LIVE · PRINTWEB.ME",
        year: "2026",
        featuredSpan: "col-5",
        highlightMetric: "Em Produção · printweb.me",
        problem:
          "Transformar anotações brutas de estudo e sínteses técnicas em materiais diagramados com qualidade editorial para impressão ou PDF exige formatação manual lenta e repetitiva.",
        architecture:
          "Front-end em TypeScript e React integrado a um editor estruturado e motor de compilação HTML/CSS com Design System próprio (callouts, tabelas técnicas, blocos de código), apoiado por back-end Spring Boot com rate limiting (Bucket4j) e geração assistida por IA.",
        result:
          "Aplicação hospedada em produção (`printweb.me`) capaz de gerar apostilas e guias técnicos prontos para exportação vetorial em PDF em segundos.",
        architectureFlow: [
          "Notas / Prompt Técnico",
          "Spring Boot + Bucket4j",
          "AST / Design System HTML",
          "Preview React em Tempo Real",
          "Exportação PDF Editorial",
        ],
        metrics: [
          { label: "Domínio", value: "printweb.me" },
          { label: "Rate Limit", value: "Bucket4j Token" },
          { label: "Output", value: "HTML/CSS → PDF" },
        ],
        stack: [
          "TypeScript",
          "React & Next.js",
          "Java (17 / 21)",
          "Spring Boot & Spring Data JPA",
          "Spring AI & LLM Orchestration",
          "MySQL",
          "Cloudflare (DNS, Zero-Trust & WAF)",
        ],
        links: {
          demo: "https://printweb.me",
          repo: "https://github.com/Abraao-SPX/PrintWeb",
        },
        diagramType: "doc-pipeline",
      },
      {
        id: "04",
        slug: "incluedu-engine",
        title: "IncluEdu Engine",
        subtitle: "Motor open-source para gestão de documentação de educação inclusiva e adaptação de atividades",
        category: "fullstack",
        status: "open-source",
        statusLabel: "OPEN-SOURCE · EDTECH ENGINE",
        year: "2026",
        featuredSpan: "col-7",
        highlightMetric: "Adaptação Pedagógica Estruturada",
        problem:
          "Equipes pedagógicas e de Atendimento Educacional Especializado (AEE) lidam com documentação fragmentada (PEI/PDI) e alto esforço manual para adaptar atividades curriculares às necessidades cognitivas individuais.",
        architecture:
          "Plataforma modular com back-end em Java/Spring Boot, banco relacional PostgreSQL para rastreabilidade longitudinal de planos educacionais e motor de transformação de atividades com templates acessíveis e suporte a IA.",
        result:
          "Padronização do fluxo documental inclusivo, histórico auditável de evolução do estudante e geração ágil de atividades adaptadas com foco em acessibilidade.",
        architectureFlow: [
          "Perfil Cognitivo / PEI",
          "IncluEdu Core API (Spring)",
          "Motor de Adaptação & IA",
          "PostgreSQL Longitudinal",
          "Atividade Adaptada & Relatório",
        ],
        metrics: [
          { label: "Licença", value: "Open-Source" },
          { label: "Modelagem", value: "PEI / PDI Auditável" },
          { label: "Arquitetura", value: "Modular Domain API" },
        ],
        stack: [
          "Java (17 / 21)",
          "Spring Boot & Spring Data JPA",
          "Spring AI & LLM Orchestration",
          "PostgreSQL",
          "TypeScript",
          "React & Next.js",
          "Docker & Linux (Nginx)",
        ],
        links: {
          repo: "https://github.com/Abraao-SPX",
        },
        diagramType: "inclusive-engine",
      },
      {
        id: "05",
        slug: "biometric-validation-api",
        title: "API de Validação Biométrica Facial",
        subtitle: "Microsserviço de identidade e liveness anti-spoofing em VPS ARM na Oracle Cloud (OCI) + Cloudflare",
        category: "backend",
        status: "production",
        statusLabel: "OCI ARM64 · CLOUDFLARE EDGE",
        year: "2026",
        featuredSpan: "col-4",
        highlightMetric: "ONNX Puro · 864MB Docker Image",
        problem:
          "Validações de identidade baseadas apenas em selfies estáticas são vulneráveis a ataques de apresentação (fotos em telas/impressos), e stacks tradicionais de Deep Learning exigem GPUs caras.",
        architecture:
          "Microsserviço Python/FastAPI executando pipeline ONNX puro em CPU ARM64 (OCI): detecção facial YuNet, anti-spoofing neural MiniFASNetV2 + desafio de reflexo luminoso (liveness ativo) e embeddings 128D SFace, protegido por Cloudflare Zero-Trust/WAF.",
        result:
          "Imagem Docker enxuta (864MB sem dependência de TensorFlow), conformidade LGPD (armazena apenas scores e vetores efêmeros) e baixa latência via roteamento Anycast Cloudflare.",
        architectureFlow: [
          "Cloudflare Edge / Tunnel",
          "FastAPI (OCI ARM64 VPS)",
          "YuNet + MiniFASNetV2 Liveness",
          "SFace 128D Cosine Match",
          "Signed Verification Token",
        ],
        metrics: [
          { label: "Infra", value: "OCI ARM64 + Cloudflare" },
          { label: "Pipeline", value: "YuNet + SFace + FASNet" },
          { label: "Container", value: "864 MB (ONNX Puro)" },
        ],
        stack: [
          "Python (FastAPI & ONNX Runtime)",
          "Oracle Cloud Infrastructure (OCI)",
          "Cloudflare (DNS, Zero-Trust & WAF)",
          "Docker & Linux (Nginx)",
        ],
        links: {
          repo: "https://github.com/Abraao-SPX/Reconhecimeto_Facil",
        },
        diagramType: "oci-biometrics",
      },
      {
        id: "06",
        slug: "neuroflow",
        title: "NeuroFlow",
        subtitle: "Ecossistema mobile e API REST full-stack para gestão de rotinas estruturadas e regulação cognitiva",
        category: "fullstack",
        status: "production",
        statusLabel: "FULL-STACK · MOBILE + REST",
        year: "2026",
        featuredSpan: "col-4",
        highlightMetric: "Flutter App + Node.js JWT API",
        problem:
          "Aplicativos convencionais de produtividade geram sobrecarga visual e notificações excessivas, prejudicando a manutenção de hábitos e rotinas previsíveis.",
        architecture:
          "Arquitetura desacoplada com aplicativo mobile construído em Flutter (gerenciamento de estado reativo e cache local resiliente) consumindo uma API RESTful em Node.js/Express com autenticação JWT, bcrypt, migrations Sequelize e MySQL.",
        result:
          "Experiência mobile fluida com sincronização segura, autenticação stateless robusta e separação clara entre repositórios de cliente (`neuroflow-app`) e servidor (`NeuroFlow_backend`).",
        architectureFlow: [
          "Flutter Client (Provider)",
          "JWT Auth + Refresh Guard",
          "Node.js / Express REST API",
          "Sequelize ORM Migrations",
          "MySQL Relational Store",
        ],
        metrics: [
          { label: "Mobile", value: "Flutter / Dart" },
          { label: "Segurança", value: "JWT + Bcrypt 10r" },
          { label: "Banco", value: "MySQL Versionado" },
        ],
        stack: ["Flutter & Dart", "Node.js & Express", "MySQL", "Docker & Linux (Nginx)"],
        links: {
          repo: "https://github.com/Abraao-SPX/NeuroFlow",
          secondaryRepo: {
            label: "API Back-end",
            url: "https://github.com/Abraao-SPX/NeuroFlow_backend",
          },
        },
        diagramType: "mobile-sync",
      },
    ],
    topologyNodes: [
      {
        id: "edge",
        label: "Cloudflare Edge",
        sublabel: "Anycast DNS · WAF · Zero-Trust",
        layer: "INGRESS LAYER",
        x: 70,
        y: 68,
        status: "healthy",
        latency: "4ms edge",
        throughput: "TLS 1.3 / HTTP3",
        spec: "Cloudflare Proxy + Tunnel",
        description:
          "Camada de borda responsável por terminação TLS, mitigação DDoS, roteamento Anycast e proteção de endpoints expostos na OCI.",
        tech: ["Cloudflare WAF", "Zero-Trust Tunnel", "DNS Anycast", "Nginx Reverse Proxy"],
      },
      {
        id: "api",
        label: "Spring Boot / FastAPI",
        sublabel: "OCI ARM64 Compute · REST & AI",
        layer: "APPLICATION GATEWAY",
        x: 245,
        y: 68,
        status: "active",
        latency: "p99 14ms",
        throughput: "Stateless JWT",
        spec: "Java 21 + Python 3.11 ONNX",
        description:
          "Núcleo de serviços back-end: validação de domínio, autenticação JWT, rate limiting (Bucket4j), orquestração Spring AI e pipeline biométrico ONNX.",
        tech: ["Java 21", "Spring Boot 3", "FastAPI", "Bucket4j", "ONNX Runtime"],
      },
      {
        id: "kafka",
        label: "Apache Kafka",
        sublabel: "6 Partitions · Event Log",
        layer: "EVENT STREAMING",
        x: 425,
        y: 68,
        status: "active",
        latency: "2.1ms append",
        throughput: "Consumer Group CQRS",
        spec: "Topic: transaction-events",
        description:
          "Barramento de eventos distribuído que desacopla comandos de escrita das projeções de leitura com processamento paralelo por partição.",
        tech: ["Apache Kafka", "6 Partitions", "Idempotent Consumer", "CQRS Pattern"],
      },
      {
        id: "redis",
        label: "Redis Cache",
        sublabel: "In-Memory Read Model",
        layer: "FAST PROJECTION",
        x: 245,
        y: 192,
        status: "healthy",
        latency: "0.4ms read",
        throughput: "Sub-ms Query",
        spec: "Balance & Session Store",
        description:
          "Camada de leitura em memória alimentada pelos consumidores de evento para consultas de saldo e invalidação rápida de sessão.",
        tech: ["Redis", "Read Projection", "TTL Policies", "Rate Limit Counters"],
      },
      {
        id: "db",
        label: "PostgreSQL / MySQL",
        sublabel: "ACID Ledger · Normalized",
        layer: "PERSISTENCE LAYER",
        x: 425,
        y: 192,
        status: "healthy",
        latency: "3.8ms commit",
        throughput: "HikariCP Pool",
        spec: "5FN Schema + Migrations",
        description:
          "Armazenamento relacional transacional com migrations versionadas, índices compostos e isolamento rigoroso de dados sensíveis.",
        tech: ["PostgreSQL", "MySQL", "Spring Data JPA", "HikariCP"],
      },
    ],
  },

  en: {
    meta: {
      title: "Abraão Paixão — Back-end Engineering & Distributed Architecture",
      description:
        "Back-end & Full-Stack Software Engineer (Java/Spring Boot, Apache Kafka, Redis, OCI, TypeScript/React, Flutter). Published researcher at CLIHC 2026 / SBC.",
    },
    nav: {
      projects: "Projects",
      research: "Architecture & Research",
      stack: "Stack & Infra",
      contact: "Contact",
      lattes: "Lattes / CV",
      status: "Available · Research & Engineering",
      accentTitle: "Switch control plane accent color",
    },
    hero: {
      availability: "Available for software engineering roles, distributed systems & M.Sc. research",
      eyebrow: "// CONTROL PLANE · ABRAAO-DEV.TECH · ARACAJU, BR",
      headlinePrimary: "Back-end engineering and distributed systems",
      headlineMuted: "architected from event log to interface.",
      bio: "Software engineer focused on event-driven architectures, resilient microservices, and full-stack applications (Java/Spring Boot, Kafka, Redis, Python, React, and Flutter). Published researcher at CLIHC 2026 (SBC) and M.Sc. candidate in Computer Science (UFS) researching Software Engineering and AI.",
      ctaProjects: "Explore Case Studies",
      ctaGithub: "GitHub (Abraao-SPX)",
      ctaResearch: "CLIHC 2026 Publication",
      telemetry: [
        {
          label: "BACK-END & ARCHITECTURE",
          value: "Spring · Kafka · Redis",
          detail: "CQRS, Event-Driven, FastAPI & Node.js",
        },
        {
          label: "ACADEMIC RESEARCH",
          value: "CLIHC 2026 / SBC",
          detail: "Published Paper + CS M.Sc. Candidate (UFS)",
        },
        {
          label: "CLOUD & PRODUCTION",
          value: "OCI ARM64 · Cloudflare",
          detail: "Docker, Linux, Nginx, Zero-Trust Edge",
        },
      ],
      visualTabs: {
        topology: "topology.live",
        terminal: "abraao-cli",
      },
      topologyHint: "Click or hover any node to inspect telemetry and architectural decisions",
      terminalHint: "Click a quick command below or inspect the live architecture status",
    },
    projectsSection: {
      eyebrow: "// 01 — PRODUCTION ENGINEERING & CASE STUDIES",
      title: "Systems engineered around",
      titleMuted: "problem, architecture, and measurable outcome.",
      subtitle:
        "Every project is documented through the engineering trade-offs that solved its core bottleneck — from Apache Kafka event processors and ARM64 biometric microservices on OCI to peer-reviewed platforms.",
      filters: [
        { id: "all", label: "All (06)" },
        { id: "backend", label: "Distributed Systems & Back-end" },
        { id: "fullstack", label: "Full-Stack & Product" },
        { id: "research", label: "Research & Applied AI" },
      ],
      labels: {
        problem: "PROBLEM",
        architecture: "ARCHITECTURE",
        result: "OUTCOME",
        flow: "EXECUTION PIPELINE",
        repo: "Repository",
        demo: "Live App",
        paper: "SBC Paper",
        inspect: "Specification",
        closeModal: "Close specification",
      },
      archiveCard: {
        eyebrow: "// GITHUB ARCHIVE · 29+ REPOSITORIES",
        title: "Open-Source & Engineering Lab",
        description:
          "Over 25 additional repositories covering Spring Security REST APIs, Kanban engines, AI automation (Spring AI), data structures, and containerized Linux infrastructure.",
        cta: "Browse all repositories on GitHub",
        highlights: [
          "Sistema-de-Gerenciamento-Kanban (Spring Boot + PostgreSQL)",
          "School-System (Spring Boot + MySQL + Redis Cache)",
          "Agent-Java & Spring AI Explorations",
          "SecRunner & Defensive Security Tooling",
        ],
      },
    },
    researchSection: {
      eyebrow: "// 02 — ACADEMIC RESEARCH & PUBLICATIONS",
      title: "Scientific rigor applied to",
      titleMuted: "software engineering and real-world systems.",
      subtitle:
        "Academic research at the intersection of Software Engineering, Human-Computer Interaction, and AI-Assisted Software Development.",
      featuredPaper: {
        badge: "PUBLISHED PAPER · PEER-REVIEWED",
        conference: "CLIHC 2026 — Latin American Conference on Human-Computer Interaction",
        publisher: "Published by the Brazilian Computer Society (SBC / SOL)",
        title:
          "CaronaJu: Peer-to-Peer Sustainable Mobility Platform for University Communities",
        authors: "Abraão Silva Paixão et al. · UNINASSAU / Applied Computing Research",
        abstract:
          "Architectural modeling, design, and empirical evaluation of a peer-to-peer sustainable mobility platform tailored for university students. The paper investigates how institutional verification, spatio-temporal route matching, and trust-centered design lower adoption friction and foster safe shared commuting.",
        contributionsTitle: "ENGINEERING & RESEARCH CONTRIBUTIONS",
        contributions: [
          "P2P architecture with institutional affiliation verification and auditable peer reputation.",
          "Low-latency campus route-matching algorithm designed around academic schedules.",
          "Empirical usability, perceived-trust, and sustainability evaluation published in CLIHC 2026 / SBC proceedings.",
        ],
        copyBibtex: "Copy BibTeX",
        copiedBibtex: "BibTeX Copied",
        viewPaper: "SBC Portal / Proceedings",
        viewProject: "Inspect CaronaJu Architecture",
        bibtex: `@inproceedings{paixao2026caronaju,
  author    = {Paix{\\~a}o, Abra{\\~a}o Silva and collaborators},
  title     = {CaronaJu: Plataforma P2P de Mobilidade Sustent{\\'a}vel para Estudantes Universit{\\'a}rios},
  booktitle = {Proceedings of the Latin American Conference on Human-Computer Interaction (CLIHC 2026)},
  year      = {2026},
  publisher = {Sociedade Brasileira de Computa{\\c{c}}{\\~a}o (SBC)},
  url       = {https://abraao-dev.tech/#pesquisa}
}`,
      },
      researchLinesTitle: "RESEARCH LINES (CS M.SC. — UFS)",
      researchLines: [
        {
          code: "RES-01",
          title: "Software Engineering & AI-Assisted Development",
          description:
            "Research on coding agent orchestration, architectural conformance, automated verification, and developer productivity in domain-driven systems.",
          tags: ["AI4SE", "LLM Agents", "Code Quality", "Spring AI"],
        },
        {
          code: "RES-02",
          title: "Distributed Architectures, Event Streaming & Resilience",
          description:
            "Decoupling patterns via asynchronous messaging (Apache Kafka), CQRS, idempotency, distributed caching (Redis), and cloud fault tolerance.",
          tags: ["Apache Kafka", "CQRS", "Redis", "Distributed Systems"],
        },
        {
          code: "RES-03",
          title: "Human-Centered Systems, Accessibility & Security",
          description:
            "Engineering inclusive educational platforms (IncluEdu), sustainable mobility (CaronaJu), and accessible anti-spoofing biometric verification.",
          tags: ["CLIHC / SBC", "Assistive Tech", "Biometrics", "Privacy by Design"],
        },
      ],
      timelineTitle: "ACADEMIC & SCIENTIFIC TIMELINE",
      timeline: [
        {
          period: "2026 — Present",
          title: "M.Sc. Candidate in Computer Science (PROCC)",
          institution: "Federal University of Sergipe (UFS)",
          badge: "Graduate Research",
          description:
            "Focused on Software Engineering and AI-Assisted Development, bridging architectural verification and intelligent automation.",
        },
        {
          period: "2026",
          title: "Published Author — CLIHC 2026 / SBC",
          institution: "Brazilian Computer Society (SBC)",
          badge: "Peer-Reviewed Publication",
          description:
            "Presented and published the CaronaJu sustainable university mobility research at the Latin American Conference on Human-Computer Interaction.",
        },
        {
          period: "Completing",
          title: "B.Tech. in Systems Analysis and Development",
          institution: "UNINASSAU University Center",
          badge: "Undergraduate Degree",
          description:
            "Focus on back-end software engineering, data structures, relational databases, computer architecture, and applied engineering projects.",
        },
      ],
    },
    stackSection: {
      eyebrow: "// 03 — STACK & INFRASTRUCTURE BY LAYER",
      title: "Technologies organized by",
      titleMuted: "architectural responsibility, not arbitrary percentage bars.",
      subtitle:
        "Click any technology to cross-highlight in real time which production systems and research projects rely on it.",
      filterHint: "Click any technology row to trace its corresponding projects",
      activeFilterLabel: "Highlighting projects powered by:",
      clearFilter: "Clear selection",
      categories: [
        {
          id: "backend",
          code: "LAYER 01 // BACK-END & MESSAGING",
          title: "Back-end, Domain & Events",
          subtitle: "High-concurrency APIs, microservices, asynchronous event processing, and AI orchestration.",
          items: [
            {
              name: "Java (17 / 21)",
              role: "Core Back-end Language",
              usage: "Strong typing, concurrency, JVM performance, and mission-critical services",
              projects: ["Transaction Event Processor", "PrintWeb", "IncluEdu Engine"],
              highlight: true,
            },
            {
              name: "Spring Boot & Spring Data JPA",
              role: "Enterprise Java Ecosystem",
              usage: "REST APIs, ACID transactions, Hibernate, validation, and JWT security",
              projects: ["Transaction Event Processor", "PrintWeb", "IncluEdu Engine"],
              highlight: true,
            },
            {
              name: "Spring AI & LLM Orchestration",
              role: "Applied AI Engineering",
              usage: "Structured prompts, technical document synthesis, and educational adaptation",
              projects: ["PrintWeb", "IncluEdu Engine"],
            },
            {
              name: "Apache Kafka",
              role: "Distributed Event Streaming",
              usage: "Partitioned topics (6 partitions), consumer groups, decoupling, and CQRS",
              projects: ["Transaction Event Processor"],
              highlight: true,
            },
            {
              name: "Node.js & Express",
              role: "REST APIs & Real-Time Services",
              usage: "JWT middlewares, rate limiting, mobile back-ends, and P2P route matching",
              projects: ["CaronaJu", "NeuroFlow"],
            },
            {
              name: "Python (FastAPI & ONNX Runtime)",
              role: "Microservices & Computer Vision",
              usage: "Pure ONNX neural inference without TensorFlow bloat, YuNet/SFace/MiniFASNet pipelines",
              projects: ["Facial Biometric Validation API"],
              highlight: true,
            },
          ],
        },
        {
          id: "data-cloud",
          code: "LAYER 02 // DATA, CLOUD & INFRASTRUCTURE",
          title: "Persistence, Cache & Edge Cloud",
          subtitle: "Normalized relational modeling, sub-millisecond read models, and Linux ARM64 cloud deployments.",
          items: [
            {
              name: "PostgreSQL",
              role: "Primary Relational Database",
              usage: "Normalized schemas, composite indexes, transactional ledger integrity, and auditing",
              projects: ["Transaction Event Processor", "IncluEdu Engine"],
              highlight: true,
            },
            {
              name: "MySQL",
              role: "Relational Persistence",
              usage: "Versioned migrations, connection pooling (HikariCP / Sequelize), and tuned queries",
              projects: ["CaronaJu", "PrintWeb", "NeuroFlow"],
            },
            {
              name: "Redis",
              role: "In-Memory Cache & Read Model",
              usage: "Low-latency CQRS balance projections, session invalidation, and rate limiting",
              projects: ["Transaction Event Processor"],
              highlight: true,
            },
            {
              name: "Oracle Cloud Infrastructure (OCI)",
              role: "ARM64 Compute VPS (Ampere)",
              usage: "Linux instance provisioning, SSH hardening, service isolation, and continuous delivery",
              projects: ["Facial Biometric Validation API", "PrintWeb"],
              highlight: true,
            },
            {
              name: "Cloudflare (DNS, Zero-Trust & WAF)",
              role: "Edge Network & Protection",
              usage: "Anycast routing, secure tunnels, DDoS mitigation, strict SSL/TLS, and edge caching",
              projects: ["Facial Biometric Validation API", "PrintWeb"],
              highlight: true,
            },
            {
              name: "Docker & Linux (Nginx)",
              role: "Containerization & Reverse Proxy",
              usage: "Lean multi-stage builds, Docker Compose, network isolation, and HTTP/2 delivery",
              projects: [
                "Transaction Event Processor",
                "Facial Biometric Validation API",
                "PrintWeb",
                "IncluEdu Engine",
              ],
            },
          ],
        },
        {
          id: "frontend-mobile",
          code: "LAYER 03 // FRONT-END & CROSS-PLATFORM MOBILE",
          title: "Web Interfaces & Native Apps",
          subtitle: "End-to-end typed reactive user experiences powered by distributed back-end services.",
          items: [
            {
              name: "TypeScript",
              role: "End-to-End Static Typing",
              usage: "Strict API contracts, compile-time safety, and modular architecture",
              projects: ["PrintWeb", "IncluEdu Engine", "CaronaJu"],
              highlight: true,
            },
            {
              name: "React & Next.js",
              role: "Web Interfaces & Design Systems",
              usage: "Static/hybrid rendering, structured editors, PDF export pipelines, and high performance",
              projects: ["PrintWeb", "IncluEdu Engine"],
              highlight: true,
            },
            {
              name: "Flutter & Dart",
              role: "Cross-Platform Mobile Engineering",
              usage: "Reactive state management, resilient local persistence, fluid UX, and REST integration",
              projects: ["CaronaJu", "NeuroFlow"],
              highlight: true,
            },
            {
              name: "Tailwind CSS & Motion",
              role: "Visual Systems & Micro-interactions",
              usage: "Semantic design tokens, responsive Bento grids, WCAG accessibility, and smooth motion",
              projects: ["PrintWeb", "IncluEdu Engine"],
            },
          ],
        },
      ],
      architecturePrinciples: {
        title: "ENGINEERING STANDARDS APPLIED ACROSS ALL SYSTEMS",
        items: [
          {
            code: "ADR-01",
            name: "CQRS & Event-Driven Isolation",
            detail: "Strict separation between asynchronous Kafka writes and sub-millisecond Redis read projections.",
          },
          {
            code: "ADR-02",
            name: "Security & Privacy by Design",
            detail: "Bcrypt, short-lived JWTs, Bucket4j rate limiting, and zero raw biometric retention (LGPD/GDPR).",
          },
          {
            code: "ADR-03",
            name: "Lean Containerization",
            detail: "Multi-stage Dockerfiles and pure ONNX inference (cutting image size from ~2.4GB down to 864MB on ARM64).",
          },
          {
            code: "ADR-04",
            name: "Database Discipline",
            detail: "Versioned migrations, explicit foreign-key indexing, and calibrated connection pooling.",
          },
        ],
      },
    },
    contactSection: {
      eyebrow: "// 04 — DIRECT CHANNEL & COLLABORATION",
      title: "Ready to discuss architecture,",
      titleMuted: "back-end engineering, or scientific research.",
      subtitle:
        "Open to Software Engineering opportunities (Back-end / Full-Stack), distributed architecture consulting, and academic collaborations in Software Engineering & AI.",
      emailLabel: "PRIMARY CONTACT ENDPOINT",
      copyEmail: "Copy e-mail",
      copiedEmail: "Copied to clipboard",
      sendEmail: "Open mail client",
      availabilityTitle: "CURRENT ENGAGEMENT SCOPE",
      availabilityItems: [
        "Back-end Engineering (Java / Spring Boot, Node.js, Python)",
        "Event-Driven Architecture (Kafka, Redis, Microservices)",
        "Full-Stack & Mobile Development (React, TypeScript, Flutter)",
        "Academic Research & M.Sc. (Software Engineering & AI)",
      ],
      directChannelsTitle: "VERIFIED DIRECTORIES & PROFILES",
    },
    footer: {
      status: "ALL SYSTEMS OPERATIONAL",
      region: "sa-aracaju-1 · OCI & Cloudflare Edge",
      builtWith: "Engineered with Next.js 15, TypeScript, Tailwind CSS & Geist",
      rights: "Abraão Silva Paixão. Code and architecture crafted with precision.",
    },
    projects: [
      {
        id: "01",
        slug: "caronaju",
        title: "CaronaJu",
        subtitle: "P2P sustainable university mobility platform · Published paper at CLIHC 2026 (SBC)",
        category: "research",
        status: "research",
        statusLabel: "CLIHC 2026 · SBC PAPER",
        year: "2026",
        featuredSpan: "col-7",
        highlightMetric: "Peer-Reviewed Paper · SBC",
        problem:
          "University students face costly, fragmented daily commutes while informal ride-sharing channels lack institutional verification, schedule predictability, and peer trust.",
        architecture:
          "Client-server architecture featuring a cross-platform mobile app, REST API with academic affiliation verification, spatio-temporal campus route matching engine, and auditable peer reputation.",
        result:
          "Peer-reviewed scientific paper accepted, presented at the Latin American Conference on Human-Computer Interaction (CLIHC 2026), and published by the Brazilian Computer Society (SBC).",
        architectureFlow: [
          "University App (Flutter)",
          "Academic JWT Verification",
          "Route Matching Engine",
          "Transactional MySQL",
          "CLIHC/SBC Empirical Study",
        ],
        metrics: [
          { label: "Publication", value: "CLIHC 2026 / SBC" },
          { label: "Topology", value: "Verified P2P" },
          { label: "Domain", value: "Mobility & HCI" },
        ],
        stack: ["Flutter", "Dart", "Node.js", "Express", "MySQL", "TypeScript", "REST API"],
        links: {
          paper: "https://sol.sbc.org.br/",
          repo: "https://github.com/Abraao-SPX",
        },
        diagramType: "p2p-mesh",
      },
      {
        id: "02",
        slug: "transaction-event-processor",
        title: "Transaction Event Processor",
        subtitle: "High-throughput event-driven financial engine built with Java Spring Boot, Apache Kafka, Redis & CQRS",
        category: "backend",
        status: "production",
        statusLabel: "EVENT-DRIVEN · CQRS",
        year: "2026",
        featuredSpan: "col-5",
        highlightMetric: "6 Kafka Partitions · Sub-ms Read",
        problem:
          "Synchronous transactional systems suffer relational database lock contention under concurrent financial write bursts and simultaneous balance queries.",
        architecture:
          "CQRS implementation in Java & Spring Boot: transaction commands publish to a 6-partition Apache Kafka topic, are idempotently processed by `balance-processor` consumer groups, persisted in PostgreSQL, and projected into Redis.",
        result:
          "Complete decoupling between write ingestion and balance reads, ensuring auditable eventual consistency, horizontal partition scaling, and sub-millisecond Redis queries.",
        architectureFlow: [
          "Command API (Spring Boot)",
          "Kafka Topic (6 Partitions)",
          "Consumer Group (Idempotent)",
          "PostgreSQL Ledger",
          "Redis Balance Projection",
        ],
        metrics: [
          { label: "Pattern", value: "CQRS + Event Driven" },
          { label: "Parallelism", value: "6 Kafka Partitions" },
          { label: "Read Model", value: "Redis In-Memory" },
        ],
        stack: ["Java (17 / 21)", "Spring Boot & Spring Data JPA", "Apache Kafka", "Redis", "PostgreSQL", "Docker & Linux (Nginx)"],
        links: {
          repo: "https://github.com/Abraao-SPX/Transaction-Event-Processor",
        },
        diagramType: "kafka-cqrs",
      },
      {
        id: "03",
        slug: "printweb",
        title: "PrintWeb (printweb.me)",
        subtitle: "Production web platform converting raw study notes into structured HTML/CSS guides ready for PDF export",
        category: "fullstack",
        status: "live",
        statusLabel: "LIVE · PRINTWEB.ME",
        year: "2026",
        featuredSpan: "col-5",
        highlightMetric: "Live in Production · printweb.me",
        problem:
          "Turning raw study notes and technical summaries into publication-grade handouts for print or PDF requires slow, repetitive manual typesetting.",
        architecture:
          "TypeScript & React front-end coupled with a structured editor and custom HTML/CSS compilation engine (callouts, technical tables, code blocks), backed by a Spring Boot API with Bucket4j rate limiting and AI generation.",
        result:
          "Live production web application (`printweb.me`) generating crisp, vector-ready PDF study guides and technical handouts in seconds.",
        architectureFlow: [
          "Raw Notes / Technical Prompt",
          "Spring Boot + Bucket4j",
          "AST / HTML Design System",
          "Real-Time React Preview",
          "Editorial PDF Export",
        ],
        metrics: [
          { label: "Domain", value: "printweb.me" },
          { label: "Rate Limit", value: "Bucket4j Token" },
          { label: "Output", value: "HTML/CSS → PDF" },
        ],
        stack: [
          "TypeScript",
          "React & Next.js",
          "Java (17 / 21)",
          "Spring Boot & Spring Data JPA",
          "Spring AI & LLM Orchestration",
          "MySQL",
          "Cloudflare (DNS, Zero-Trust & WAF)",
        ],
        links: {
          demo: "https://printweb.me",
          repo: "https://github.com/Abraao-SPX/PrintWeb",
        },
        diagramType: "doc-pipeline",
      },
      {
        id: "04",
        slug: "incluedu-engine",
        title: "IncluEdu Engine",
        subtitle: "Open-source platform for inclusive education documentation management and school activity adaptation",
        category: "fullstack",
        status: "open-source",
        statusLabel: "OPEN-SOURCE · EDTECH ENGINE",
        year: "2026",
        featuredSpan: "col-7",
        highlightMetric: "Structured Pedagogical Adaptation",
        problem:
          "Special education teachers and school teams manage fragmented Individualized Education Plans (IEP/PEI) and spend hours manually adapting classroom materials to diverse cognitive profiles.",
        architecture:
          "Modular platform powered by a Java/Spring Boot back-end, PostgreSQL for longitudinal student tracking, and an activity transformation engine featuring accessible templates and AI-assisted adaptation.",
        result:
          "Standardized inclusive documentation workflow, auditable student progress history, and rapid generation of accessible adapted learning materials.",
        architectureFlow: [
          "Cognitive Profile / IEP",
          "IncluEdu Core API (Spring)",
          "Adaptation & AI Engine",
          "Longitudinal PostgreSQL",
          "Adapted Activity & Report",
        ],
        metrics: [
          { label: "License", value: "Open-Source" },
          { label: "Modeling", value: "Auditable IEP / PEI" },
          { label: "Architecture", value: "Modular Domain API" },
        ],
        stack: [
          "Java (17 / 21)",
          "Spring Boot & Spring Data JPA",
          "Spring AI & LLM Orchestration",
          "PostgreSQL",
          "TypeScript",
          "React & Next.js",
          "Docker & Linux (Nginx)",
        ],
        links: {
          repo: "https://github.com/Abraao-SPX",
        },
        diagramType: "inclusive-engine",
      },
      {
        id: "05",
        slug: "biometric-validation-api",
        title: "Facial Biometric Validation API",
        subtitle: "Identity & anti-spoofing liveness microservice deployed on ARM VPS in Oracle Cloud (OCI) + Cloudflare",
        category: "backend",
        status: "production",
        statusLabel: "OCI ARM64 · CLOUDFLARE EDGE",
        year: "2026",
        featuredSpan: "col-4",
        highlightMetric: "Pure ONNX · 864MB Docker Image",
        problem:
          "Static selfie checks are vulnerable to presentation attacks (screen replay/printed photos), while traditional deep-learning stacks demand expensive GPU instances.",
        architecture:
          "Python/FastAPI microservice running a pure ONNX pipeline on OCI ARM64 CPUs: YuNet face detection, MiniFASNetV2 neural anti-spoofing + active flash challenge liveness, and 128D SFace embeddings behind Cloudflare WAF/Zero-Trust.",
        result:
          "Lean 864MB Docker image (zero TensorFlow bloat), privacy-by-design compliance (stores verification scores without raw biometric retention), and low-latency Cloudflare Anycast routing.",
        architectureFlow: [
          "Cloudflare Edge / Tunnel",
          "FastAPI (OCI ARM64 VPS)",
          "YuNet + MiniFASNetV2 Liveness",
          "SFace 128D Cosine Match",
          "Signed Verification Token",
        ],
        metrics: [
          { label: "Infra", value: "OCI ARM64 + Cloudflare" },
          { label: "Pipeline", value: "YuNet + SFace + FASNet" },
          { label: "Container", value: "864 MB (Pure ONNX)" },
        ],
        stack: [
          "Python (FastAPI & ONNX Runtime)",
          "Oracle Cloud Infrastructure (OCI)",
          "Cloudflare (DNS, Zero-Trust & WAF)",
          "Docker & Linux (Nginx)",
        ],
        links: {
          repo: "https://github.com/Abraao-SPX/Reconhecimeto_Facil",
        },
        diagramType: "oci-biometrics",
      },
      {
        id: "06",
        slug: "neuroflow",
        title: "NeuroFlow",
        subtitle: "Full-stack mobile application and REST API for structured routine management and cognitive flow",
        category: "fullstack",
        status: "production",
        statusLabel: "FULL-STACK · MOBILE + REST",
        year: "2026",
        featuredSpan: "col-4",
        highlightMetric: "Flutter App + Node.js JWT API",
        problem:
          "Conventional productivity apps overload users with visual clutter and noisy notifications, undermining predictable habit maintenance.",
        architecture:
          "Decoupled full-stack system with a Flutter mobile client (reactive state management and local persistence) consuming a Node.js/Express REST API secured with JWT, bcrypt, versioned Sequelize migrations, and MySQL.",
        result:
          "Low-friction mobile experience with stateless JWT authentication and clean separation between client (`neuroflow-app`) and server (`NeuroFlow_backend`) repositories.",
        architectureFlow: [
          "Flutter Client (Provider)",
          "JWT Auth + Refresh Guard",
          "Node.js / Express REST API",
          "Sequelize ORM Migrations",
          "MySQL Relational Store",
        ],
        metrics: [
          { label: "Mobile", value: "Flutter / Dart" },
          { label: "Security", value: "JWT + Bcrypt 10r" },
          { label: "Database", value: "Versioned MySQL" },
        ],
        stack: ["Flutter & Dart", "Node.js & Express", "MySQL", "Docker & Linux (Nginx)"],
        links: {
          repo: "https://github.com/Abraao-SPX/NeuroFlow",
          secondaryRepo: {
            label: "Back-end API",
            url: "https://github.com/Abraao-SPX/NeuroFlow_backend",
          },
        },
        diagramType: "mobile-sync",
      },
    ],
    topologyNodes: [
      {
        id: "edge",
        label: "Cloudflare Edge",
        sublabel: "Anycast DNS · WAF · Zero-Trust",
        layer: "INGRESS LAYER",
        x: 70,
        y: 68,
        status: "healthy",
        latency: "4ms edge",
        throughput: "TLS 1.3 / HTTP3",
        spec: "Cloudflare Proxy + Tunnel",
        description:
          "Edge ingress handling TLS termination, DDoS mitigation, Anycast routing, and Zero-Trust tunnel protection for OCI workloads.",
        tech: ["Cloudflare WAF", "Zero-Trust Tunnel", "Anycast DNS", "Nginx Reverse Proxy"],
      },
      {
        id: "api",
        label: "Spring Boot / FastAPI",
        sublabel: "OCI ARM64 Compute · REST & AI",
        layer: "APPLICATION GATEWAY",
        x: 245,
        y: 68,
        status: "active",
        latency: "p99 14ms",
        throughput: "Stateless JWT",
        spec: "Java 21 + Python 3.11 ONNX",
        description:
          "Core service gateway handling domain validation, JWT authentication, Bucket4j rate limiting, Spring AI orchestration, and ONNX biometric inference.",
        tech: ["Java 21", "Spring Boot 3", "FastAPI", "Bucket4j", "ONNX Runtime"],
      },
      {
        id: "kafka",
        label: "Apache Kafka",
        sublabel: "6 Partitions · Event Log",
        layer: "EVENT STREAMING",
        x: 425,
        y: 68,
        status: "active",
        latency: "2.1ms append",
        throughput: "Consumer Group CQRS",
        spec: "Topic: transaction-events",
        description:
          "Distributed event backbone decoupling write commands from read projections with partition-level consumer parallelism.",
        tech: ["Apache Kafka", "6 Partitions", "Idempotent Consumer", "CQRS Pattern"],
      },
      {
        id: "redis",
        label: "Redis Cache",
        sublabel: "In-Memory Read Model",
        layer: "FAST PROJECTION",
        x: 245,
        y: 192,
        status: "healthy",
        latency: "0.4ms read",
        throughput: "Sub-ms Query",
        spec: "Balance & Session Store",
        description:
          "In-memory read layer hydrated by Kafka consumers for sub-millisecond balance lookups and session/rate-limit counters.",
        tech: ["Redis", "Read Projection", "TTL Policies", "Rate Limit Counters"],
      },
      {
        id: "db",
        label: "PostgreSQL / MySQL",
        sublabel: "ACID Ledger · Normalized",
        layer: "PERSISTENCE LAYER",
        x: 425,
        y: 192,
        status: "healthy",
        latency: "3.8ms commit",
        throughput: "HikariCP Pool",
        spec: "5NF Schema + Migrations",
        description:
          "Transactional relational persistence with versioned migrations, composite indexing, and strict data isolation.",
        tech: ["PostgreSQL", "MySQL", "Spring Data JPA", "HikariCP"],
      },
    ],
  },
};
