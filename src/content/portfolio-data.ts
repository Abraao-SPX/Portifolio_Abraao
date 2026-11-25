export type Locale = "pt" | "en";

export type ProjectCategory = "all" | "backend" | "fullstack" | "research";

export type ProjectTone = "terracotta" | "cobalt" | "sage" | "amber";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: Exclude<ProjectCategory, "all">;
  tone: ProjectTone;
  badge: string;
  year: string;
  featuredSpan: "col-7" | "col-5" | "col-6";
  humanStory: string;
  engineeringSolution: string;
  impactResult: string;
  architectureSteps: string[];
  highlights: { label: string; value: string }[];
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

export interface StackItem {
  name: string;
  role: string;
  story: string;
  projects: string[];
  core?: boolean;
}

export interface StackGroup {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: StackItem[];
}

export interface ResearchLine {
  number: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface Milestone {
  period: string;
  role: string;
  place: string;
  tag: string;
  note: string;
}

export interface PortfolioDictionary {
  nav: {
    about: string;
    projects: string;
    research: string;
    craft: string;
    contact: string;
    themeLight: string;
    themeDark: string;
  };
  hero: {
    locationBadge: string;
    availabilityBadge: string;
    greeting: string;
    headlineStart: string;
    headlineItalic: string;
    headlineEnd: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaPaper: string;
    profileCard: {
      tabBio: string;
      tabBlueprint: string;
      roleLabel: string;
      basedInLabel: string;
      basedInValue: string;
      educationLabel: string;
      educationValue: string;
      researchLabel: string;
      researchValue: string;
      currentlyNote: string;
      blueprintTitle: string;
      blueprintCaption: string;
      blueprintStages: {
        step: string;
        title: string;
        detail: string;
      }[];
    };
  };
  aboutStrip: {
    eyebrow: string;
    quoteStart: string;
    quoteHighlight: string;
    quoteEnd: string;
    paragraphs: string[];
    pillars: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  projectsSection: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    filters: { id: ProjectCategory; label: string }[];
    labels: {
      whyItMatters: string;
      howItsBuilt: string;
      outcome: string;
      pipeline: string;
      openLive: string;
      readPaper: string;
      viewCode: string;
      readCaseStudy: string;
      closeDrawer: string;
      clearTechFilter: string;
      filteringBy: string;
    };
    githubShelf: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
      items: { name: string; tech: string; note: string }[];
    };
  };
  researchSection: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    paper: {
      stamp: string;
      venue: string;
      publisher: string;
      title: string;
      authors: string;
      story: string;
      takeawaysTitle: string;
      takeaways: string[];
      copyBibtex: string;
      copiedBibtex: string;
      openSbc: string;
      bibtex: string;
    };
    researchFocusTitle: string;
    researchLines: ResearchLine[];
    journeyTitle: string;
    journey: Milestone[];
  };
  craftSection: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    interactiveHint: string;
    groups: StackGroup[];
    principlesTitle: string;
    principles: {
      title: string;
      text: string;
    }[];
  };
  contactSection: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    emailCardLabel: string;
    copyButton: string;
    copiedButton: string;
    writeEmailButton: string;
    openToTitle: string;
    openToList: string[];
    elsewhereTitle: string;
  };
  footer: {
    signature: string;
    location: string;
    colophon: string;
  };
  projects: ProjectItem[];
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
    nav: {
      about: "Sobre",
      projects: "Projetos",
      research: "Pesquisa",
      craft: "Oficina & Stack",
      contact: "Conversar",
      themeLight: "Modo claro editorial",
      themeDark: "Modo leitura noturna",
    },
    hero: {
      locationBadge: "Aracaju, Sergipe · Brasil",
      availabilityBadge: "Disponível para projetos & oportunidades",
      greeting: "Olá, eu sou Abraão Paixão — engenheiro de software & pesquisador.",
      headlineStart: "Construo sistemas sólidos no back-end, pensados para",
      headlineItalic: "pessoas reais",
      headlineEnd: "do outro lado da tela.",
      lead: "Trabalho na interseção entre arquitetura distribuída (Java, Spring Boot, Apache Kafka, Redis e nuvem ARM na OCI) e produtos completos que resolvem problemas concretos — de mobilidade universitária publicada pela SBC a ferramentas de educação inclusiva e validação biométrica.",
      ctaPrimary: "Conhecer meus projetos",
      ctaSecondary: "GitHub (@Abraao-SPX)",
      ctaPaper: "Artigo CLIHC 2026 / SBC",
      profileCard: {
        tabBio: "Caderno Pessoal",
        tabBlueprint: "Como Projeto",
        roleLabel: "Foco principal",
        basedInLabel: "Base & Atuação",
        basedInValue: "Aracaju, SE · Remoto / Brasil & Exterior",
        educationLabel: "Formação",
        educationValue: "ADS (UNINASSAU) · Candidato ao Mestrado CC (UFS)",
        researchLabel: "Publicação Científica",
        researchValue: "Autor publicado na CLIHC 2026 / SBC",
        currentlyNote:
          "Movido por arquitetura limpa, ADRs escritos antes do código, café forte e o desafio de tornar sistemas complexos simples e confiáveis para quem usa.",
        blueprintTitle: "Do problema humano ao serviço em produção",
        blueprintCaption: "O fio condutor por trás de cada projeto deste portfólio:",
        blueprintStages: [
          {
            step: "01 · Escuta & Domínio",
            title: "Entender a dor real antes de escolher ferramenta",
            detail:
              "Seja um professor adaptando aulas (IncluEdu) ou um pico de transações concorrentes (Event Processor).",
          },
          {
            step: "02 · Arquitetura Desacoplada",
            title: "Separar responsabilidades com clareza",
            detail:
              "Spring Boot, filas assíncronas com Kafka, leitura rápida em Redis e modelagem relacional bem normalizada.",
          },
          {
            step: "03 · Entrega Enxuta & Segura",
            title: "Colocar no ar com segurança desde o primeiro commit",
            detail:
              "Containers leves em VPS ARM na Oracle Cloud, borda protegida na Cloudflare e validação empírica.",
          },
        ],
      },
    },
    aboutStrip: {
      eyebrow: "01 · Minha História & Abordagem",
      quoteStart: "Boa engenharia não serve para impressionar diagramas — serve para que o sistema",
      quoteHighlight: "continue sereno, rápido e seguro",
      quoteEnd: "quando alguém realmente precisa dele.",
      paragraphs: [
        "Sou graduando em Análise e Desenvolvimento de Sistemas pela UNINASSAU e pesquisador candidato ao Mestrado em Ciência da Computação na UFS. Minha casa natural é o back-end e a arquitetura distribuída, mas gosto de acompanhar o produto inteiro: do banco de dados e mensageria até a tela React ou Flutter na mão do usuário.",
        "Nos últimos anos, percebi que meus melhores projetos nascem quando rigor técnico encontra impacto humano direto — como validar identidade facial sem exigir celulares caros, organizar rotinas para mentes neurodivergentes ou transformar notas de estudo em apostilas prontas para impressão.",
      ],
      pillars: [
        {
          number: "I",
          title: "Back-end & Eventos",
          description:
            "APIs em Java (Spring Boot), Node.js e Python projetadas para concorrência, CQRS com Apache Kafka e cache em Redis.",
        },
        {
          number: "II",
          title: "Visão de Produto Full-Stack",
          description:
            "Interfaces web e mobile cuidadosas em TypeScript, React e Flutter que respeitam o tempo e a atenção do usuário.",
        },
        {
          number: "III",
          title: "Ciência & Evidência",
          description:
            "Decisões documentadas em ADRs, segurança por padrão e pesquisa revisada por pares publicada na CLIHC 2026 / SBC.",
        },
      ],
    },
    projectsSection: {
      eyebrow: "02 · Projetos Selecionados & Estudos de Caso",
      titleStart: "Seis sistemas reais, contados pelo",
      titleItalic: "porquê e pelo como.",
      subtitle:
        "Sem projetos de tutorial: cada trabalho abaixo nasceu de uma necessidade concreta, exigiu escolhas reais de arquitetura e trouxe aprendizados que levo para a produção.",
      filters: [
        { id: "all", label: "Todos os 6 projetos" },
        { id: "backend", label: "Back-end & Sistemas Distribuídos" },
        { id: "fullstack", label: "Full-Stack & Produto" },
        { id: "research", label: "Pesquisa & Impacto Social" },
      ],
      labels: {
        whyItMatters: "O contexto humano",
        howItsBuilt: "Decisão de engenharia",
        outcome: "Resultado alcançado",
        pipeline: "Caminho dos dados na arquitetura",
        openLive: "Visitar site no ar",
        readPaper: "Ver publicação SBC",
        viewCode: "Código no GitHub",
        readCaseStudy: "Ver arquitetura em detalhe",
        closeDrawer: "Fechar detalhes",
        clearTechFilter: "Mostrar todos",
        filteringBy: "Destacando projetos construídos com",
      },
      githubShelf: {
        eyebrow: "Caderno Aberto no GitHub · +29 Repositórios",
        title: "Outros experimentos, APIs e estudos que mantenho em código aberto",
        description:
          "Além dos seis projetos principais, mantenho mais de vinte repositórios públicos explorando segurança, mensageria, agentes de IA e arquitetura limpa.",
        cta: "Ver todos no GitHub",
        items: [
          {
            name: "Sistema Kanban API",
            tech: "Spring Boot · PostgreSQL",
            note: "Gestão de fluxo com regras de domínio e documentação OpenAPI.",
          },
          {
            name: "School System",
            tech: "Spring Boot · MySQL · Redis",
            note: "Gestão acadêmica com cache de consultas frequentes em Redis.",
          },
          {
            name: "Agent Java & Spring AI",
            tech: "Java 21 · Spring AI",
            note: "Laboratório de orquestração de prompts estruturados no ecossistema Java.",
          },
        ],
      },
    },
    researchSection: {
      eyebrow: "03 · Pesquisa Científica & Vida Acadêmica",
      titleStart: "Onde a engenharia de software encontra a",
      titleItalic: "investigação científica.",
      subtitle:
        "Acredito na ponte entre universidade e indústria: testar hipóteses com sistemas de verdade, medir o impacto nas pessoas e compartilhar os achados com a comunidade.",
      paper: {
        stamp: "Artigo Publicado · CLIHC 2026 / SBC",
        venue: "Conferência Latino-Americana de Interação Humano-Computador (CLIHC 2026)",
        publisher: "Sociedade Brasileira de Computação (SBC)",
        title:
          "CaronaJu: Plataforma P2P de Mobilidade Sustentável e Colaborativa para Estudantes Universitários",
        authors: "Abraão Silva Paixão e colaboradores · UNINASSAU",
        story:
          "Nascido da realidade cotidiana de deslocamento estudantil em Aracaju, o CaronaJu investiga como criar confiança real entre universitários para compartilhar caronas. O artigo apresenta a modelagem da plataforma, a verificação de vínculo institucional e a avaliação com estudantes reais.",
        takeawaysTitle: "Principais contribuições do estudo",
        takeaways: [
          "Arquitetura peer-to-peer com verificação de vínculo acadêmico para elevar a segurança percebida.",
          "Pareamento inteligente de trajetos compatibilizando grades de horário e campi universitários.",
          "Validação empírica de usabilidade, confiança e incentivo à mobilidade sustentável publicada pela SBC.",
        ],
        copyBibtex: "Copiar citação BibTeX",
        copiedBibtex: "Citação BibTeX copiada!",
        openSbc: "Portal de Publicações SBC",
        bibtex: `@inproceedings{paixao2026caronaju,
  author    = {Paix{\\~a}o, Abra{\\~a}o Silva and collaborators},
  title     = {CaronaJu: Plataforma P2P de Mobilidade Sustent{\\'a}vel para Estudantes Universit{\\'a}rios},
  booktitle = {Anais da Confer{\\^e}ncia Latino-Americana de Intera{\\c{c}}{\\~a}o Humano-Computador (CLIHC 2026)},
  year      = {2026},
  publisher = {Sociedade Brasileira de Computa{\\c{c}}{\\~a}o (SBC)},
  url       = {https://abraao-dev.tech/#pesquisa}
}`,
      },
      researchFocusTitle: "Interesses de Pesquisa · Mestrado em Ciência da Computação (UFS)",
      researchLines: [
        {
          number: "01",
          title: "Engenharia de Software & Desenvolvimento Assistido por IA",
          description:
            "Como engenheiros humanos e agentes de IA podem colaborar sem abrir mão de arquitetura limpa, qualidade de testes e manutenibilidade a longo prazo.",
          keywords: ["Engenharia de Software", "IA Aplicada", "Qualidade Arquitetural", "Spring AI"],
        },
        {
          number: "02",
          title: "Sistemas Distribuídos & Arquiteturas Orientadas a Eventos",
          description:
            "Desacoplamento, consistência eventual, idempotência e observabilidade em sistemas de alta concorrência usando Kafka e Redis.",
          keywords: ["Apache Kafka", "CQRS", "Resiliência", "Redis"],
        },
        {
          number: "03",
          title: "Tecnologia Inclusiva, IHC & Segurança Acessível",
          description:
            "Software pensado para diversidade cognitiva, educação inclusiva e proteção digital sem criar barreiras de uso.",
          keywords: ["IHC / CLIHC", "Acessibilidade", "Biometria Leve", "LGPD"],
        },
      ],
      journeyTitle: "Caminhada Acadêmica",
      journey: [
        {
          period: "2026 — Atual",
          role: "Candidato ao Mestrado em Ciência da Computação",
          place: "Universidade Federal de Sergipe (PROCC / UFS)",
          tag: "Pesquisa de Pós-Graduação",
          note: "Foco em Engenharia de Software e Desenvolvimento Assistido por IA.",
        },
        {
          period: "2026",
          role: "Autor Publicado — CLIHC 2026",
          place: "Sociedade Brasileira de Computação (SBC)",
          tag: "Artigo Científico",
          note: "Publicação e apresentação da pesquisa sobre mobilidade universitária sustentável (CaronaJu).",
        },
        {
          period: "Graduação",
          role: "Análise e Desenvolvimento de Sistemas",
          place: "UNINASSAU · Aracaju",
          tag: "Ensino Superior",
          note: "Base sólida em engenharia de software, bancos de dados, redes e construção de projetos aplicados.",
        },
      ],
    },
    craftSection: {
      eyebrow: "04 · Oficina Técnica & Infraestrutura",
      titleStart: "As ferramentas com que trabalho",
      titleItalic: "todos os dias.",
      subtitle:
        "Em vez de barras de porcentagem arbitrárias, agrupei minha stack pelo papel que cada tecnologia cumpre na arquitetura — clique em qualquer item para ver em quais projetos ela aparece.",
      interactiveHint: "Dica: clique em uma tecnologia para destacar os projetos onde ela foi usada",
      groups: [
        {
          id: "backend",
          eyebrow: "Camada 01 · Coração do Sistema",
          title: "Back-end, Mensageria & IA",
          description:
            "Onde desenho regras de negócio, filas assíncronas, segurança e integrações com modelos de linguagem e visão.",
          items: [
            {
              name: "Java & Spring Boot",
              role: "Base principal para APIs e microsserviços",
              story: "Spring Data JPA, validação rigorosa, autenticação JWT, Bucket4j e arquitetura em camadas limpas.",
              projects: ["Transaction Event Processor", "PrintWeb", "IncluEdu Engine"],
              core: true,
            },
            {
              name: "Apache Kafka",
              role: "Mensageria e eventos distribuídos",
              story: "Tópicos particionados, consumer groups idempotentes e separação entre escrita e leitura (CQRS).",
              projects: ["Transaction Event Processor"],
              core: true,
            },
            {
              name: "Spring AI & LLMs",
              role: "IA generativa integrada ao domínio",
              story: "Transformação de conteúdo bruto em documentos ricos e apoio à adaptação de atividades escolares.",
              projects: ["PrintWeb", "IncluEdu Engine"],
            },
            {
              name: "Node.js & Express",
              role: "APIs REST leves e rápidas",
              story: "Back-ends para aplicativos móveis com autenticação JWT rotativa, bcrypt e Sequelize.",
              projects: ["CaronaJu", "NeuroFlow"],
            },
            {
              name: "Python (FastAPI & ONNX)",
              role: "Microsserviços de IA e biometria",
              story: "Inferência neural enxuta em CPU ARM sem depender de imagens pesadas com TensorFlow.",
              projects: ["Validação Biométrica Facial"],
              core: true,
            },
          ],
        },
        {
          id: "infra",
          eyebrow: "Camada 02 · Persistência & Nuvem",
          title: "Bancos de Dados, Cloud & Linux",
          description:
            "Modelagem relacional cuidadosa, cache em memória e servidores Linux configurados na unha.",
          items: [
            {
              name: "PostgreSQL & MySQL",
              role: "Bancos relacionais transacionais",
              story: "Modelagem normalizada, migrations versionadas, índices bem pensados e pools HikariCP.",
              projects: ["Transaction Event Processor", "IncluEdu Engine", "PrintWeb", "NeuroFlow", "CaronaJu"],
              core: true,
            },
            {
              name: "Redis",
              role: "Cache em memória e projeção de leitura",
              story: "Respostas em menos de 1 milissegundo para saldos projetados via CQRS e controle de sessão.",
              projects: ["Transaction Event Processor"],
              core: true,
            },
            {
              name: "Oracle Cloud (OCI ARM64)",
              role: "Infraestrutura em servidores Linux",
              story: "Deploy real em VPS Ampere ARM64 com hardening SSH, Nginx reverso e monitoramento.",
              projects: ["Validação Biométrica Facial", "PrintWeb"],
              core: true,
            },
            {
              name: "Cloudflare & Docker",
              role: "Proteção de borda e containers enxutos",
              story: "Roteamento Anycast, Zero-Trust Tunnels, WAF, SSL estrito e multi-stage Dockerfiles.",
              projects: ["Validação Biométrica Facial", "PrintWeb", "Transaction Event Processor", "IncluEdu Engine"],
            },
          ],
        },
        {
          id: "frontend",
          eyebrow: "Camada 03 · Experiência Humana",
          title: "Web, Mobile & Interfaces",
          description:
            "Interfaces claras, rápidas e acessíveis para que toda a engenharia do back-end faça sentido para quem usa.",
          items: [
            {
              name: "TypeScript & React",
              role: "Aplicações web modernas e tipadas",
              story: "Editores interativos, compilação de documentos para PDF e arquiteturas front-end previsíveis.",
              projects: ["PrintWeb", "IncluEdu Engine"],
              core: true,
            },
            {
              name: "Flutter & Dart",
              role: "Aplicativos móveis multiplataforma",
              story: "Experiências mobile fluidas com gerenciamento reativo de estado e funcionamento resiliente.",
              projects: ["CaronaJu", "NeuroFlow"],
              core: true,
            },
            {
              name: "Next.js & Tailwind CSS",
              role: "Performance web, SEO e sistemas de design",
              story: "Exportação estática ultrarrápida, tipografia editorial cuidadosa e acessibilidade.",
              projects: ["PrintWeb", "IncluEdu Engine"],
            },
          ],
        },
      ],
      principlesTitle: "Costumes de oficina dos quais não abro mão",
      principles: [
        {
          title: "Segurança desde o primeiro rascunho",
          text: "Senhas com bcrypt, JWT de curta duração, rate limiting (Bucket4j) e respeito real à LGPD — sem guardar dados sensíveis desnecessários.",
        },
        {
          title: "Containers leves e econômicos",
          text: "Trocar dependências gigantes por ONNX puro reduziu meu container biométrico para 864 MB rodando liso em CPU ARM.",
        },
        {
          title: "Documentar o porquê (ADRs)",
          text: "Código diz como algo funciona; bons registros de decisão explicam por que escolhemos Kafka ou Redis naquele ponto.",
        },
        {
          title: "Software calmo e acessível",
          text: "Evito poluição visual e complexidade gratuita — especialmente em produtos voltados à educação e neurodiversidade.",
        },
      ],
    },
    contactSection: {
      eyebrow: "05 · Vamos Conversar?",
      titleStart: "Tem um desafio de engenharia, vaga ou",
      titleItalic: "ideia de pesquisa?",
      subtitle:
        "Fico sempre feliz em conversar sobre oportunidades em Engenharia de Software (Back-end ou Full-Stack), projetos em sistemas distribuídos ou parcerias acadêmicas. Meu e-mail está a um clique abaixo.",
      emailCardLabel: "E-mail direto (respondo rápido)",
      copyButton: "Copiar endereço",
      copiedButton: "Copiado! Até já",
      writeEmailButton: "Escrever e-mail",
      openToTitle: "No que posso somar hoje",
      openToList: [
        "Engenharia de Software Back-end (Java / Spring Boot, Node.js, Python)",
        "Arquitetura Distribuída, Mensageria (Kafka) e Performance (Redis)",
        "Produtos Full-Stack Web & Mobile (React, TypeScript e Flutter)",
        "Pesquisa Científica em Engenharia de Software e IA",
      ],
      elsewhereTitle: "Onde me encontrar pela rede",
    },
    footer: {
      signature: "Desenhado e programado por Abraão Paixão.",
      location: "Feito em Aracaju, Sergipe · Hospedado em abraao-dev.tech",
      colophon: "Tipografia Instrument Serif, Geist Sans & Geist Mono sobre papel #FAF7F2.",
    },
    projects: [
      {
        id: "01",
        slug: "caronaju",
        title: "CaronaJu",
        tagline: "Mobilidade solidária entre universitários · Artigo publicado na CLIHC 2026 (SBC)",
        category: "research",
        tone: "cobalt",
        badge: "Pesquisa Publicada · SBC",
        year: "2026",
        featuredSpan: "col-7",
        humanStory:
          "Ir e voltar da universidade todos os dias pesa no bolso e na rotina de milhares de estudantes em Aracaju, enquanto caronas combinadas em redes abertas geram insegurança por falta de vínculo confirmado.",
        engineeringSolution:
          "Construí uma plataforma P2P mobile e API REST com validação institucional universitária, pareamento inteligente de rotas por campus/horário e sistema de reputação mútua entre colegas.",
        impactResult:
          "O projeto evoluiu para pesquisa científica completa, foi apresentado na CLIHC 2026 e publicado oficialmente nos anais da Sociedade Brasileira de Computação (SBC).",
        architectureSteps: [
          "App Mobile (Flutter)",
          "Vínculo Acadêmico Verificado",
          "Motor de Rotas & Horários",
          "API Node.js + MySQL",
          "Estudo Empírico SBC",
        ],
        highlights: [
          { label: "Reconhecimento", value: "CLIHC 2026 / SBC" },
          { label: "Modelo", value: "P2P Universitário" },
          { label: "Cidade-piloto", value: "Aracaju, SE" },
        ],
        stack: ["Flutter & Dart", "Node.js & Express", "PostgreSQL & MySQL", "TypeScript & React"],
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
        tagline: "Motor financeiro orientado a eventos com Spring Boot, Apache Kafka, Redis e CQRS",
        category: "backend",
        tone: "terracotta",
        badge: "Arquitetura Distribuída",
        year: "2026",
        featuredSpan: "col-5",
        humanStory:
          "Quando milhares de operações financeiras acontecem ao mesmo tempo em que usuários consultam seus saldos, um banco relacional tradicional trava disputando leitura e escrita na mesma tabela.",
        engineeringSolution:
          "Apliquei o padrão CQRS em Java com Spring Boot: cada transação entra em um tópico Apache Kafka com 6 partições, é processada de forma idempotente em background, salva no PostgreSQL e projetada no Redis.",
        impactResult:
          "Escritas pesadas absorvidas sem gargalo pelos consumidores Kafka e consultas de saldo respondidas em frações de milissegundo direto da memória no Redis.",
        architectureSteps: [
          "API de Comando (Spring)",
          "Apache Kafka (6 Partições)",
          "Consumidor Idempotente",
          "PostgreSQL Transacional",
          "Projeção Rápida no Redis",
        ],
        highlights: [
          { label: "Padrão", value: "CQRS + Eventos" },
          { label: "Paralelismo", value: "6 Partições Kafka" },
          { label: "Consulta", value: "Sub-ms via Redis" },
        ],
        stack: ["Java & Spring Boot", "Apache Kafka", "Redis", "PostgreSQL & MySQL", "Cloudflare & Docker"],
        links: {
          repo: "https://github.com/Abraao-SPX/Transaction-Event-Processor",
        },
        diagramType: "kafka-cqrs",
      },
      {
        id: "03",
        slug: "printweb",
        title: "PrintWeb (printweb.me)",
        tagline: "Transforma anotações brutas de estudo em apostilas HTML/CSS prontas para PDF",
        category: "fullstack",
        tone: "sage",
        badge: "No Ar · printweb.me",
        year: "2026",
        featuredSpan: "col-5",
        humanStory:
          "Quem estuda para provas ou prepara material técnico perde horas tentando diagramar resumos, tabelas e caixas de destaque para ficarem legíveis na impressão ou no PDF.",
        engineeringSolution:
          "Criei uma aplicação web em TypeScript e React conectada a um back-end Java/Spring Boot com controle de vazão (Bucket4j) e IA calibrada para compilar anotações diretamente nos componentes editoriais do app.",
        impactResult:
          "Produto real em produção em `printweb.me`, gerando guias de estudo limpos, organizados e prontos para exportação em PDF em poucos segundos.",
        architectureSteps: [
          "Anotações de Estudo",
          "API Spring Boot + Bucket4j",
          "Compilador HTML Editorial",
          "Editor React ao Vivo",
          "Exportação PDF Limpa",
        ],
        highlights: [
          { label: "Status", value: "Online (printweb.me)" },
          { label: "Proteção", value: "Rate-Limit Bucket4j" },
          { label: "Saída", value: "Guia Editorial PDF" },
        ],
        stack: [
          "TypeScript & React",
          "Java & Spring Boot",
          "Spring AI & LLMs",
          "PostgreSQL & MySQL",
          "Cloudflare & Docker",
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
        tagline: "Plataforma open-source para documentação de educação inclusiva e adaptação escolar",
        category: "fullstack",
        tone: "amber",
        badge: "Open-Source · Educação",
        year: "2026",
        featuredSpan: "col-7",
        humanStory:
          "Professores e equipes de educação inclusiva enfrentam burocracia espalhada em papéis e pouco tempo para adaptar atividades escolares às particularidades cognitivas de cada aluno.",
        engineeringSolution:
          "Desenvolvi um motor open-source com back-end em Spring Boot e PostgreSQL para organizar planos educacionais individualizados (PEI/PDI) e apoiar a adaptação estruturada de atividades com IA.",
        impactResult:
          "Histórico pedagógico centralizado e auditável, devolvendo tempo aos educadores para focarem no acompanhamento humano de cada estudante.",
        architectureSteps: [
          "Plano Individual (PEI)",
          "API de Domínio (Spring)",
          "Motor de Adaptação & IA",
          "Histórico no PostgreSQL",
          "Atividade Acessível",
        ],
        highlights: [
          { label: "Código", value: "Open-Source" },
          { label: "Propósito", value: "Inclusão Escolar" },
          { label: "Base", value: "Spring + PostgreSQL" },
        ],
        stack: [
          "Java & Spring Boot",
          "Spring AI & LLMs",
          "PostgreSQL & MySQL",
          "TypeScript & React",
          "Cloudflare & Docker",
        ],
        links: {
          repo: "https://github.com/Abraao-SPX",
        },
        diagramType: "inclusive-engine",
      },
      {
        id: "05",
        slug: "biometric-validation-api",
        title: "Validação Biométrica Facial",
        tagline: "Microsserviço de prova de vida e antifraude em VPS ARM na Oracle Cloud + Cloudflare",
        category: "backend",
        tone: "terracotta",
        badge: "OCI ARM64 + Cloudflare",
        year: "2026",
        featuredSpan: "col-6",
        humanStory:
          "Sistemas de verificação facial comuns ou são enganados por fotos em telas ou exigem servidores caros com GPU — além de precisarem ser simples para públicos como idosos.",
        engineeringSolution:
          "Construí um microsserviço em Python e FastAPI rodando modelos ONNX puros (YuNet + MiniFASNetV2 + SFace 128D) em servidor Linux ARM64 na OCI, protegido de ponta a ponta pela Cloudflare.",
        impactResult:
          "Container enxuto de apenas 864 MB (sem peso de TensorFlow), bloqueio de fraude de tela com prova de vida ativa e respeito total à LGPD sem reter rostos brutos.",
        architectureSteps: [
          "Borda Cloudflare WAF",
          "FastAPI em VPS OCI ARM64",
          "Prova de Vida MiniFASNet",
          "Vetor 128D SFace ONNX",
          "Token Assinado (LGPD)",
        ],
        highlights: [
          { label: "Servidor", value: "OCI Ampere ARM64" },
          { label: "Imagem Docker", value: "Enxuta (864 MB)" },
          { label: "Privacidade", value: "Zero Foto Retida" },
        ],
        stack: ["Python (FastAPI & ONNX)", "Oracle Cloud (OCI ARM64)", "Cloudflare & Docker"],
        links: {
          repo: "https://github.com/Abraao-SPX/Reconhecimeto_Facil",
        },
        diagramType: "oci-biometrics",
      },
      {
        id: "06",
        slug: "neuroflow",
        title: "NeuroFlow",
        tagline: "Aplicativo Flutter e API Node.js para rotinas calmas e regulação sensorial",
        category: "fullstack",
        tone: "sage",
        badge: "Mobile + API REST",
        year: "2026",
        featuredSpan: "col-6",
        humanStory:
          "Muitos apps de rotina tratam produtividade como cobrança barulhenta, causando sobrecarga sensorial justamente em pessoas neurodivergentes que precisam de previsibilidade.",
        engineeringSolution:
          "Projetei o ecossistema completo: aplicativo Flutter calmo e fluido no celular conversando com uma API REST em Node.js, Express e MySQL protegida com JWT rotativo e bcrypt.",
        impactResult:
          "MVP completo entregue com arquitetura cliente/servidor desacoplada, queries otimizadas via migrations versionadas e experiência acolhedora no mobile.",
        architectureSteps: [
          "App Mobile em Flutter",
          "Autenticação JWT Segura",
          "API REST Node.js/Express",
          "Migrations Sequelize",
          "Persistência MySQL",
        ],
        highlights: [
          { label: "Experiência", value: "Design Calmo" },
          { label: "Segurança", value: "JWT + Bcrypt 10r" },
          { label: "Arquitetura", value: "2 Repos Desacoplados" },
        ],
        stack: ["Flutter & Dart", "Node.js & Express", "PostgreSQL & MySQL", "Cloudflare & Docker"],
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
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      research: "Research",
      craft: "Craft & Stack",
      contact: "Say Hello",
      themeLight: "Warm editorial light mode",
      themeDark: "Warm night reading mode",
    },
    hero: {
      locationBadge: "Aracaju, Sergipe · Brazil",
      availabilityBadge: "Open to engineering roles & projects",
      greeting: "Hi, I'm Abraão Paixão — software engineer & researcher.",
      headlineStart: "I build dependable back-end systems, crafted for",
      headlineItalic: "real people",
      headlineEnd: "on the other side of the screen.",
      lead: "I work where distributed engineering (Java, Spring Boot, Apache Kafka, Redis, and ARM64 cloud on OCI) meets thoughtful full-stack products — from university ride-sharing published by SBC to inclusive education tools and anti-spoofing biometrics.",
      ctaPrimary: "Explore my projects",
      ctaSecondary: "GitHub (@Abraao-SPX)",
      ctaPaper: "CLIHC 2026 / SBC Paper",
      profileCard: {
        tabBio: "Personal Note",
        tabBlueprint: "How I Build",
        roleLabel: "Primary Focus",
        basedInLabel: "Location & Work",
        basedInValue: "Aracaju, Brazil · Remote Worldwide",
        educationLabel: "Academic Path",
        educationValue: "ADS (UNINASSAU) · CS M.Sc. Candidate (UFS)",
        researchLabel: "Scientific Output",
        researchValue: "Published Author at CLIHC 2026 / SBC",
        currentlyNote:
          "Driven by clean architecture, writing ADRs before code, strong coffee, and making complex distributed machinery feel calm and effortless to the end user.",
        blueprintTitle: "From human context to production service",
        blueprintCaption: "The engineering thread running through every project here:",
        blueprintStages: [
          {
            step: "01 · Listen First",
            title: "Understand the human bottleneck before picking tools",
            detail:
              "Whether it's a teacher adapting lessons (IncluEdu) or concurrent financial writes (Event Processor).",
          },
          {
            step: "02 · Decouple Cleanly",
            title: "Separate write workloads, domain rules, and fast reads",
            detail:
              "Spring Boot services, Apache Kafka event streams, sub-ms Redis projections, and normalized SQL.",
          },
          {
            step: "03 · Ship Lean & Safe",
            title: "Deploy with privacy, security, and low overhead",
            detail:
              "Lean containers on Oracle Cloud ARM64 instances, Cloudflare edge protection, and empirical validation.",
          },
        ],
      },
    },
    aboutStrip: {
      eyebrow: "01 · Story & Philosophy",
      quoteStart: "Good architecture isn't built to look impressive on slides — it exists so a system stays",
      quoteHighlight: "calm, fast, and trustworthy",
      quoteEnd: "when someone genuinely relies on it.",
      paragraphs: [
        "I'm finishing my degree in Systems Analysis and Development at UNINASSAU and pursuing my M.Sc. in Computer Science at the Federal University of Sergipe (UFS). Back-end and distributed systems are where I feel most at home, yet I love owning the whole journey from database schema and Kafka topics up to a clean React or Flutter interface.",
        "My favorite projects sit where rigorous software engineering meets tangible human value — verifying facial identity without costly GPUs, helping neurodivergent users keep calm routines, or turning study notes into printable handouts.",
      ],
      pillars: [
        {
          number: "I",
          title: "Back-end & Event Streams",
          description:
            "Java (Spring Boot), Node.js, and Python services built for concurrency, CQRS with Apache Kafka, and Redis caching.",
        },
        {
          number: "II",
          title: "Full-Stack Product Care",
          description:
            "Thoughtful web and mobile experiences in TypeScript, React, and Flutter that respect people's time and focus.",
        },
        {
          number: "III",
          title: "Research & Evidence",
          description:
            "Documented architectural decisions (ADRs), security by design, and peer-reviewed work published at CLIHC 2026 / SBC.",
        },
      ],
    },
    projectsSection: {
      eyebrow: "02 · Selected Work & Case Studies",
      titleStart: "Six real systems, told through",
      titleItalic: "why they exist and how they work.",
      subtitle:
        "No toy tutorials: each project below started with a concrete problem, demanded real architectural trade-offs, and taught me lessons I carry into production.",
      filters: [
        { id: "all", label: "All 6 projects" },
        { id: "backend", label: "Back-end & Distributed Systems" },
        { id: "fullstack", label: "Full-Stack & Product" },
        { id: "research", label: "Research & Social Impact" },
      ],
      labels: {
        whyItMatters: "Human context",
        howItsBuilt: "Engineering decision",
        outcome: "Outcome",
        pipeline: "Architectural flow",
        openLive: "Visit live site",
        readPaper: "View SBC paper",
        viewCode: "Source on GitHub",
        readCaseStudy: "Inspect full architecture",
        closeDrawer: "Close details",
        clearTechFilter: "Show all",
        filteringBy: "Highlighting projects built with",
      },
      githubShelf: {
        eyebrow: "Open Notebook on GitHub · 29+ Repositories",
        title: "More open-source APIs, experiments, and architecture labs",
        description:
          "Beyond the six featured case studies, I maintain over twenty public repositories exploring Spring Security, caching, AI agents, and clean architecture.",
        cta: "Browse all on GitHub",
        items: [
          {
            name: "Kanban Management API",
            tech: "Spring Boot · PostgreSQL",
            note: "Workflow engine with strict domain validation and OpenAPI docs.",
          },
          {
            name: "School System",
            tech: "Spring Boot · MySQL · Redis",
            note: "Academic platform accelerating frequent queries with Redis cache.",
          },
          {
            name: "Agent Java & Spring AI",
            tech: "Java 21 · Spring AI",
            note: "Structured LLM prompt orchestration experiments on the JVM.",
          },
        ],
      },
    },
    researchSection: {
      eyebrow: "03 · Academic Research & Publications",
      titleStart: "Where software engineering meets",
      titleItalic: "scientific inquiry.",
      subtitle:
        "I believe in bridging academia and industry: testing ideas through working software, measuring real human impact, and publishing open findings.",
      paper: {
        stamp: "Published Paper · CLIHC 2026 / SBC",
        venue: "Latin American Conference on Human-Computer Interaction (CLIHC 2026)",
        publisher: "Brazilian Computer Society (SBC)",
        title:
          "CaronaJu: Peer-to-Peer Sustainable and Collaborative Mobility Platform for University Students",
        authors: "Abraão Silva Paixão et al. · UNINASSAU",
        story:
          "Born out of everyday student commuting challenges in Aracaju, CaronaJu explores how institutional verification and schedule-aware route matching build genuine peer trust for shared university rides.",
        takeawaysTitle: "Key contributions of the paper",
        takeaways: [
          "Peer-to-peer architecture backed by academic affiliation verification to foster safety and trust.",
          "Campus and schedule-aware route matching tailored to university routines.",
          "Empirical evaluation of usability, trust, and sustainable commuting published by SBC.",
        ],
        copyBibtex: "Copy BibTeX citation",
        copiedBibtex: "BibTeX copied!",
        openSbc: "SBC Digital Library",
        bibtex: `@inproceedings{paixao2026caronaju,
  author    = {Paix{\\~a}o, Abra{\\~a}o Silva and collaborators},
  title     = {CaronaJu: Plataforma P2P de Mobilidade Sustent{\\'a}vel para Estudantes Universit{\\'a}rios},
  booktitle = {Proceedings of the Latin American Conference on Human-Computer Interaction (CLIHC 2026)},
  year      = {2026},
  publisher = {Sociedade Brasileira de Computa{\\c{c}}{\\~a}o (SBC)},
  url       = {https://abraao-dev.tech/#pesquisa}
}`,
      },
      researchFocusTitle: "Research Interests · Computer Science M.Sc. (UFS)",
      researchLines: [
        {
          number: "01",
          title: "Software Engineering & AI-Assisted Development",
          description:
            "How engineers and AI coding tools can collaborate while preserving clean architecture, test rigor, and long-term maintainability.",
          keywords: ["Software Engineering", "AI4SE", "Architectural Quality", "Spring AI"],
        },
        {
          number: "02",
          title: "Distributed Systems & Event-Driven Architectures",
          description:
            "Decoupling, eventual consistency, idempotency, and observability in high-concurrency systems powered by Kafka and Redis.",
          keywords: ["Apache Kafka", "CQRS", "Resilience", "Redis"],
        },
        {
          number: "03",
          title: "Inclusive Technology, HCI & Accessible Security",
          description:
            "Software designed around cognitive diversity, inclusive classrooms, and fraud protection without user friction.",
          keywords: ["HCI / CLIHC", "Accessibility", "Lean Biometrics", "Privacy"],
        },
      ],
      journeyTitle: "Academic Journey",
      journey: [
        {
          period: "2026 — Present",
          role: "M.Sc. Candidate in Computer Science",
          place: "Federal University of Sergipe (PROCC / UFS)",
          tag: "Graduate Research",
          note: "Researching Software Engineering and AI-Assisted Software Development.",
        },
        {
          period: "2026",
          role: "Published Author — CLIHC 2026",
          place: "Brazilian Computer Society (SBC)",
          tag: "Peer-Reviewed Paper",
          note: "Presented and published the CaronaJu university mobility study.",
        },
        {
          period: "Undergraduate",
          role: "Systems Analysis and Development",
          place: "UNINASSAU · Aracaju",
          tag: "Higher Education",
          note: "Strong foundation in software engineering, relational databases, networks, and applied systems.",
        },
      ],
    },
    craftSection: {
      eyebrow: "04 · Technical Workshop & Infrastructure",
      titleStart: "The tools I rely on",
      titleItalic: "day in, day out.",
      subtitle:
        "Instead of arbitrary skill percentages, here is how each technology fits into my systems — click any item to highlight the projects built with it.",
      interactiveHint: "Tip: click any technology card to highlight the projects where it runs",
      groups: [
        {
          id: "backend",
          eyebrow: "Layer 01 · System Core",
          title: "Back-end, Messaging & AI",
          description:
            "Where domain rules, asynchronous event streams, authentication, and AI pipelines live.",
          items: [
            {
              name: "Java & Spring Boot",
              role: "Primary foundation for APIs & microservices",
              story: "Spring Data JPA, strict validation, JWT security, Bucket4j rate limiting, and clean domain layers.",
              projects: ["Transaction Event Processor", "PrintWeb (printweb.me)", "IncluEdu Engine"],
              core: true,
            },
            {
              name: "Apache Kafka",
              role: "Distributed event streaming",
              story: "Partitioned topics, idempotent consumer groups, and clean write/read decoupling (CQRS).",
              projects: ["Transaction Event Processor"],
              core: true,
            },
            {
              name: "Spring AI & LLMs",
              role: "Domain-integrated generative AI",
              story: "Turning raw study notes into structured HTML handouts and assisting inclusive lesson adaptation.",
              projects: ["PrintWeb (printweb.me)", "IncluEdu Engine"],
            },
            {
              name: "Node.js & Express",
              role: "Fast, pragmatic REST APIs",
              story: "Mobile back-ends with rotating JWTs, bcrypt hashing, and versioned Sequelize models.",
              projects: ["CaronaJu", "NeuroFlow"],
            },
            {
              name: "Python (FastAPI & ONNX)",
              role: "AI & biometric microservices",
              story: "Pure ONNX neural inference running smoothly on ARM CPUs without heavy TensorFlow containers.",
              projects: ["Facial Biometric Validation"],
              core: true,
            },
          ],
        },
        {
          id: "infra",
          eyebrow: "Layer 02 · Data & Cloud",
          title: "Databases, Cloud & Linux",
          description:
            "Careful relational modeling, sub-millisecond memory caches, and hands-on Linux cloud deployments.",
          items: [
            {
              name: "PostgreSQL & MySQL",
              role: "Transactional relational databases",
              story: "Normalized schemas, versioned migrations, explicit indexing, and tuned HikariCP pools.",
              projects: [
                "Transaction Event Processor",
                "IncluEdu Engine",
                "PrintWeb (printweb.me)",
                "NeuroFlow",
                "CaronaJu",
              ],
              core: true,
            },
            {
              name: "Redis",
              role: "In-memory cache & CQRS read store",
              story: "Sub-millisecond balance lookups hydrated by Kafka consumers plus session control.",
              projects: ["Transaction Event Processor"],
              core: true,
            },
            {
              name: "Oracle Cloud (OCI ARM64)",
              role: "Linux VPS cloud infrastructure",
              story: "Production deployments on Ampere ARM64 instances with SSH hardening and Nginx.",
              projects: ["Facial Biometric Validation", "PrintWeb (printweb.me)"],
              core: true,
            },
            {
              name: "Cloudflare & Docker",
              role: "Edge protection & lean containers",
              story: "Anycast DNS, Zero-Trust Tunnels, WAF, strict TLS, and multi-stage Dockerfiles.",
              projects: [
                "Facial Biometric Validation",
                "PrintWeb (printweb.me)",
                "Transaction Event Processor",
                "IncluEdu Engine",
              ],
            },
          ],
        },
        {
          id: "frontend",
          eyebrow: "Layer 03 · Human Interface",
          title: "Web, Mobile & Product",
          description:
            "Clear, responsive, accessible interfaces that bring back-end engineering to life.",
          items: [
            {
              name: "TypeScript & React",
              role: "Typed modern web applications",
              story: "Interactive editors, HTML-to-PDF compilation pipelines, and maintainable UI state.",
              projects: ["PrintWeb (printweb.me)", "IncluEdu Engine"],
              core: true,
            },
            {
              name: "Flutter & Dart",
              role: "Cross-platform mobile apps",
              story: "Smooth native-feel mobile apps with reactive state and offline-friendly persistence.",
              projects: ["CaronaJu", "NeuroFlow"],
              core: true,
            },
            {
              name: "Next.js & Tailwind CSS",
              role: "Fast web delivery & design systems",
              story: "Static export performance, editorial typography, and accessible layouts.",
              projects: ["PrintWeb (printweb.me)", "IncluEdu Engine"],
            },
          ],
        },
      ],
      principlesTitle: "Workshop habits I never skip",
      principles: [
        {
          title: "Security & privacy from day one",
          text: "Bcrypt hashing, short-lived JWTs, Bucket4j rate limits, and zero unnecessary retention of sensitive biometric data.",
        },
        {
          title: "Lean, economical containers",
          text: "Replacing bloated ML frameworks with pure ONNX trimmed my biometric service down to 864 MB on ARM64.",
        },
        {
          title: "Write down the 'why' (ADRs)",
          text: "Code shows how something runs; concise Architecture Decision Records preserve why we chose Kafka or Redis.",
        },
        {
          title: "Calm, accessible software",
          text: "Avoiding visual noise and cognitive overload — especially when building for classrooms and neurodivergent users.",
        },
      ],
    },
    contactSection: {
      eyebrow: "05 · Let's Talk",
      titleStart: "Have an engineering role, project, or",
      titleItalic: "research idea in mind?",
      subtitle:
        "I'm always glad to chat about Software Engineering roles (Back-end or Full-Stack), distributed architecture challenges, or academic collaborations. My inbox is one click away.",
      emailCardLabel: "Direct e-mail (fastest way to reach me)",
      copyButton: "Copy address",
      copiedButton: "Copied! Talk soon",
      writeEmailButton: "Compose e-mail",
      openToTitle: "How I can contribute right now",
      openToList: [
        "Back-end Software Engineering (Java / Spring Boot, Node.js, Python)",
        "Distributed Architecture, Event Streaming (Kafka) & Caching (Redis)",
        "Full-Stack Web & Mobile Products (React, TypeScript & Flutter)",
        "Academic Research in Software Engineering & Applied AI",
      ],
      elsewhereTitle: "Find me around the web",
    },
    footer: {
      signature: "Designed and engineered by Abraão Paixão.",
      location: "Crafted in Aracaju, Brazil · Hosted at abraao-dev.tech",
      colophon: "Set in Instrument Serif, Geist Sans & Geist Mono on #FAF7F2 warm paper.",
    },
    projects: [
      {
        id: "01",
        slug: "caronaju",
        title: "CaronaJu",
        tagline: "Peer-to-peer sustainable university rides · Published paper at CLIHC 2026 (SBC)",
        category: "research",
        tone: "cobalt",
        badge: "Published Research · SBC",
        year: "2026",
        featuredSpan: "col-7",
        humanStory:
          "Daily campus commutes in Aracaju are expensive and tiring for students, yet informal ride groups lack verified university ties and schedule reliability.",
        engineeringSolution:
          "I built a cross-platform P2P mobile app and REST API with academic affiliation verification, schedule-and-campus route matching, and mutual peer reputation.",
        impactResult:
          "Evolved into a peer-reviewed scientific study presented at CLIHC 2026 and officially published by the Brazilian Computer Society (SBC).",
        architectureSteps: [
          "Flutter Mobile App",
          "Academic Verification",
          "Campus Route Matcher",
          "Node.js + MySQL API",
          "SBC Empirical Study",
        ],
        highlights: [
          { label: "Publication", value: "CLIHC 2026 / SBC" },
          { label: "Model", value: "Verified P2P" },
          { label: "Origin", value: "Aracaju, Brazil" },
        ],
        stack: ["Flutter & Dart", "Node.js & Express", "PostgreSQL & MySQL", "TypeScript & React"],
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
        tagline: "Event-driven financial engine powered by Spring Boot, Apache Kafka, Redis & CQRS",
        category: "backend",
        tone: "terracotta",
        badge: "Distributed Architecture",
        year: "2026",
        featuredSpan: "col-5",
        humanStory:
          "When bursts of financial writes collide with thousands of simultaneous balance checks, a single synchronous SQL table quickly locks up.",
        engineeringSolution:
          "I implemented CQRS in Java & Spring Boot: writes stream into a 6-partition Apache Kafka topic, are processed idempotently into PostgreSQL, and project balances into Redis.",
        impactResult:
          "Write spikes are smoothly absorbed across partitions while balance queries return in sub-millisecond time straight from Redis memory.",
        architectureSteps: [
          "Spring Command API",
          "Kafka (6 Partitions)",
          "Idempotent Consumer",
          "PostgreSQL Ledger",
          "Redis Read Model",
        ],
        highlights: [
          { label: "Pattern", value: "CQRS + Events" },
          { label: "Parallelism", value: "6 Kafka Partitions" },
          { label: "Reads", value: "Sub-ms via Redis" },
        ],
        stack: ["Java & Spring Boot", "Apache Kafka", "Redis", "PostgreSQL & MySQL", "Cloudflare & Docker"],
        links: {
          repo: "https://github.com/Abraao-SPX/Transaction-Event-Processor",
        },
        diagramType: "kafka-cqrs",
      },
      {
        id: "03",
        slug: "printweb",
        title: "PrintWeb (printweb.me)",
        tagline: "Turns raw study notes into structured HTML/CSS handouts ready for clean PDF export",
        category: "fullstack",
        tone: "sage",
        badge: "Live · printweb.me",
        year: "2026",
        featuredSpan: "col-5",
        humanStory:
          "Students and educators waste hours wrestling with formatting just to turn raw study notes into clean, printable handouts or PDFs.",
        engineeringSolution:
          "I created a TypeScript & React web app backed by Spring Boot (with Bucket4j rate limiting and AI synthesis) that compiles notes directly into a custom editorial HTML/CSS system.",
        impactResult:
          "Live in production at `printweb.me`, turning messy notes into crisp, print-ready study guides in seconds.",
        architectureSteps: [
          "Raw Study Notes",
          "Spring Boot + Bucket4j",
          "Editorial HTML Compiler",
          "Live React Preview",
          "Clean Vector PDF",
        ],
        highlights: [
          { label: "Status", value: "Live (printweb.me)" },
          { label: "Protection", value: "Bucket4j Rate-Limit" },
          { label: "Output", value: "Editorial PDF" },
        ],
        stack: [
          "TypeScript & React",
          "Java & Spring Boot",
          "Spring AI & LLMs",
          "PostgreSQL & MySQL",
          "Cloudflare & Docker",
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
        tagline: "Open-source platform for inclusive education records and classroom activity adaptation",
        category: "fullstack",
        tone: "amber",
        badge: "Open-Source · EdTech",
        year: "2026",
        featuredSpan: "col-7",
        humanStory:
          "Special-education teachers juggle scattered paperwork (IEP/PEI) and spend late nights manually adapting lessons to each student's cognitive profile.",
        engineeringSolution:
          "I engineered an open-source Spring Boot & PostgreSQL platform to track longitudinal education plans and assist teachers with structured, accessible activity adaptation.",
        impactResult:
          "Organized, auditable student progress records and faster creation of inclusive learning materials so educators can focus on students.",
        architectureSteps: [
          "Student Profile (IEP)",
          "Spring Domain API",
          "AI Adaptation Engine",
          "PostgreSQL History",
          "Accessible Lesson",
        ],
        highlights: [
          { label: "License", value: "Open-Source" },
          { label: "Mission", value: "Inclusive Classrooms" },
          { label: "Core", value: "Spring + PostgreSQL" },
        ],
        stack: [
          "Java & Spring Boot",
          "Spring AI & LLMs",
          "PostgreSQL & MySQL",
          "TypeScript & React",
          "Cloudflare & Docker",
        ],
        links: {
          repo: "https://github.com/Abraao-SPX",
        },
        diagramType: "inclusive-engine",
      },
      {
        id: "05",
        slug: "biometric-validation-api",
        title: "Facial Biometric Validation",
        tagline: "Active liveness & anti-spoofing microservice on Oracle Cloud ARM64 + Cloudflare",
        category: "backend",
        tone: "terracotta",
        badge: "OCI ARM64 + Cloudflare",
        year: "2026",
        featuredSpan: "col-6",
        humanStory:
          "Basic selfie checks are easily tricked by screen replays, while heavy deep-learning stacks require costly GPUs and frustrate older users.",
        engineeringSolution:
          "I built a Python/FastAPI service running pure ONNX models (YuNet, MiniFASNetV2 liveness, and 128D SFace) on an OCI ARM64 VPS shielded by Cloudflare WAF and Tunnels.",
        impactResult:
          "Lean 864 MB Docker image (no TensorFlow bloat), reliable screen-spoof blocking, and strict privacy compliance with zero raw face retention.",
        architectureSteps: [
          "Cloudflare Edge WAF",
          "FastAPI on OCI ARM64",
          "MiniFASNet Liveness",
          "SFace 128D Match",
          "Signed Token (Privacy)",
        ],
        highlights: [
          { label: "Compute", value: "OCI Ampere ARM64" },
          { label: "Container", value: "Lean 864 MB" },
          { label: "Privacy", value: "Zero Raw Photos" },
        ],
        stack: ["Python (FastAPI & ONNX)", "Oracle Cloud (OCI ARM64)", "Cloudflare & Docker"],
        links: {
          repo: "https://github.com/Abraao-SPX/Reconhecimeto_Facil",
        },
        diagramType: "oci-biometrics",
      },
      {
        id: "06",
        slug: "neuroflow",
        title: "NeuroFlow",
        tagline: "Calm Flutter app and Node.js REST API for predictable routines and sensory regulation",
        category: "fullstack",
        tone: "sage",
        badge: "Mobile + REST API",
        year: "2026",
        featuredSpan: "col-6",
        humanStory:
          "Most habit apps bombard people with loud streaks and visual clutter, creating sensory overload for neurodivergent users seeking calm structure.",
        engineeringSolution:
          "I built the full stack: a distraction-free Flutter mobile client paired with a Node.js, Express, and MySQL REST API secured with rotating JWTs and bcrypt.",
        impactResult:
          "Delivered a complete MVP with clean client/server separation, fast indexed queries via Sequelize migrations, and a genuinely calm mobile UX.",
        architectureSteps: [
          "Calm Flutter App",
          "Rotating JWT Guard",
          "Node.js / Express API",
          "Sequelize Migrations",
          "MySQL Persistence",
        ],
        highlights: [
          { label: "Experience", value: "Low-Noise UX" },
          { label: "Security", value: "JWT + Bcrypt 10r" },
          { label: "Structure", value: "Decoupled Client/API" },
        ],
        stack: ["Flutter & Dart", "Node.js & Express", "PostgreSQL & MySQL", "Cloudflare & Docker"],
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
  },
};
