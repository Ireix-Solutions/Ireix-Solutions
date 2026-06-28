export type HomeCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "whatsapp" | "footer";
  purpose:
    | "navigation"
    | "conversion"
    | "support"
    | "content"
    | "client-access";
};

export type HomeAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon:
    | "Monitor"
    | "LayoutDashboard"
    | "Code2"
    | "ServerCog"
    | "Workflow"
    | "Bot"
    | "MessageCircle"
    | "SearchCheck"
    | "Cloud";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  body: string;
  resultBadge: { value: string; label: string };
  flowChips: string[];
};

export type BlogCard = {
  tag: "SEO" | "AUTOMAÇÃO" | "IA";
  icon: "SearchCheck" | "Workflow" | "Bot";
  title: string;
  summary: string;
  href: string;
};

export type ProposalProjectType =
  | "Site profissional"
  | "Sistema web"
  | "Automacao"
  | "WhatsApp Business API"
  | "IA para empresas"
  | "SEO e performance"
  | "MVP ou consultoria"
  | "Outro";

const whatsappNumber =
  process.env.NEXT_PUBLIC_IREX_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://ireixsolution.com";

export const contactEmail = "contato@ireixsolution.com";
export const hasConfiguredWhatsApp = whatsappNumber.length >= 10;

const buildWhatsAppHref = (message: string) => {
  if (!hasConfiguredWhatsApp) {
    return "#contato";
  }

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const proposalProjectTypes: ProposalProjectType[] = [
  "Site profissional",
  "Sistema web",
  "Automacao",
  "WhatsApp Business API",
  "IA para empresas",
  "SEO e performance",
  "MVP ou consultoria",
  "Outro",
];

export const homePageContent = {
  navigation: {
    brandName: "Ireix Solution",
    links: [
      { label: "Início", href: "/", variant: "secondary", purpose: "navigation" },
      { label: "Serviços", href: "#solucoes", variant: "secondary", purpose: "navigation" },
      { label: "Contato", href: "#contato", variant: "secondary", purpose: "navigation" },
    ] satisfies HomeCta[],
    primaryCta: {
      label: "Solicitar proposta",
      href: "#contato",
      variant: "primary",
      purpose: "conversion",
    } satisfies HomeCta,
    secondaryCta: {
      label: "Área do cliente",
      href: "#contato",
      variant: "secondary",
      purpose: "client-access",
    } satisfies HomeCta,
  },
  hero: {
    eyebrow: "PRESENÇA DIGITAL E CONVERSÃO",
    title: "Presença digital profissional para sua empresa crescer.",
    body:
      "Um site claro, bonito e direto ao ponto para apresentar seu negócio com confiança e transformar visitantes em contatos qualificados.",
    ctas: [
      {
        label: "Solicitar proposta",
        href: "#contato",
        variant: "primary",
        purpose: "conversion",
      },
      {
        label: "Conhecer serviços",
        href: "#solucoes",
        variant: "secondary",
        purpose: "navigation",
      },
    ] satisfies HomeCta[],
  },
  about: {
    eyebrow: "QUEM SOMOS",
    title: "Digital que faz sua empresa parecer tão boa quanto ela é.",
    body: "A Ireix cria presença digital para empresas que precisam ser entendidas rápido, transmitir confiança e transformar interesse em conversa comercial. Estratégia, design e execução trabalhando juntos para o negócio parecer tão bom online quanto é na prática.",
    resultBadge: {
      value: "+ clareza",
      label: "para decidir, confiar e chamar",
    },
    flowChips: ["Interesse", "Confiança", "Contato"],
  } satisfies AboutContent,
  services: {
    eyebrow: "SERVIÇOS",
    title: "Soluções digitais com a mesma presença premium do seu negócio.",
    body:
      "Da primeira impressão ao contato comercial: organizamos site, atendimento e processos para sua empresa vender com mais confiança.",
    cta: {
      label: "Montar meu projeto",
      href: "#contato",
      variant: "primary",
      purpose: "conversion",
    } satisfies HomeCta,
    items: [
      {
        title: "Sites que vendem",
        description:
          "Páginas profissionais com mensagem clara, visual forte e caminho direto para o orçamento.",
        icon: "Monitor",
      },
      {
        title: "Sistemas para organizar",
        description:
          "Painéis e portais que tiram processos do improviso e dão mais controle para a equipe.",
        icon: "LayoutDashboard",
      },
      {
        title: "Experiências digitais",
        description:
          "Interfaces modernas para apresentar serviços, captar contatos e conduzir o cliente com fluidez.",
        icon: "Code2",
      },
      {
        title: "Integrações seguras",
        description:
          "Conectamos ferramentas, cadastros, formulários e rotinas para reduzir retrabalho operacional.",
        icon: "ServerCog",
      },
      {
        title: "Automação de processos",
        description:
          "Fluxos automáticos para notificações, cobranças, cadastros e acompanhamento comercial.",
        icon: "Workflow",
      },
      {
        title: "Atendimento inteligente",
        description:
          "Assistentes e respostas guiadas para acelerar o primeiro contato sem perder contexto.",
        icon: "Bot",
      },
      {
        title: "WhatsApp comercial",
        description:
          "Captação de leads, mensagens organizadas e atendimento conectado aos seus canais digitais.",
        icon: "MessageCircle",
      },
      {
        title: "SEO e performance",
        description:
          "Estrutura para carregar rápido, aparecer melhor e transformar visitas em oportunidades.",
        icon: "SearchCheck",
      },
      {
        title: "Serviços em nuvem",
        description:
          "Hospedagem, infraestrutura e deploy escaláveis para manter site e sistemas no ar com estabilidade.",
        icon: "Cloud",
      },
    ] satisfies ServiceItem[],
  },
  process: {
    eyebrow: "PROCESSO",
    title: "Um processo claro para tirar sua presença digital do papel.",
    body:
      "Você acompanha cada etapa com objetividade: entendemos o negócio, desenhamos a experiência, publicamos e evoluímos com base em resultado.",
    cta: {
      label: "Ver metodologia",
      href: "#contato",
      variant: "secondary",
      purpose: "content",
    } satisfies HomeCta,
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        description:
          "Mapeamos objetivos, gargalos, público, canais e sistemas existentes.",
      },
      {
        number: "02",
        title: "Prototipação",
        description:
          "Criamos a experiência visual e o fluxo principal antes de desenvolver.",
      },
      {
        number: "03",
        title: "Desenvolvimento",
        description:
          "Construímos com stack moderna, integrações, segurança básica e performance.",
      },
      {
        number: "04",
        title: "Evolução",
        description:
          "Acompanhamos métricas, manutenção, melhorias e novas automações.",
      },
    ] satisfies ProcessStep[],
  },
  spotlight: {
    eyebrow: "ATENDIMENTO COMERCIAL",
    title:
      "Respostas mais rápidas para transformar conversas em oportunidades.",
    body:
      "Organize seus canais, responda com consistência e crie uma experiência mais clara para quem chega até sua empresa.",
    background: {
      src: "/images/home/whatsapp-spotlight.png",
      alt: "",
      width: 1440,
      height: 560,
    } satisfies HomeAsset,
    ctas: [
      {
        label: "Quero WhatsApp inteligente",
        href: buildWhatsAppHref(
          "Ola! Quero automatizar meu atendimento com WhatsApp e IA."
        ),
        variant: "primary",
        purpose: "conversion",
      },
      {
        label: "Ver integrações",
        href: "#solucoes",
        variant: "secondary",
        purpose: "navigation",
      },
    ] satisfies HomeCta[],
    chatMock: {
      assistantName: "Ireix Assistant",
      status: "automacao ativa",
      badge: "WhatsApp conectado",
      contextLabel: "Fluxo sugerido",
      contextValue: "Qualificar leads e encaminhar proposta",
      messages: [
        {
          role: "client",
          body: "Ola! Quero automatizar meu atendimento.",
          timestamp: "10:18",
        },
        {
          role: "assistant",
          body:
            "Perfeito. Posso entender seu volume de mensagens e o principal objetivo?",
          timestamp: "10:18",
        },
      ],
      composerPlaceholder: "Escreva uma mensagem...",
    },
  },
  blog: {
    eyebrow: "CONTEÚDO E ESTRATÉGIA",
    title:
      "Aprenda a usar tecnologia para vender mais e operar com menos esforço.",
    body:
      "Uma área de conteúdo fortalece autoridade, SEO e educação do cliente antes da conversa comercial.",
    cta: {
      label: "Ver todos os artigos",
      href: "/blog",
      variant: "secondary",
      purpose: "content",
    } satisfies HomeCta,
    items: [
      {
        tag: "SEO",
        icon: "SearchCheck",
        title: "Como um site profissional gera leads todos os meses",
        summary:
          "Estrutura, performance, conteúdo e mensuração transformam uma página bonita em um canal de aquisição.",
        href: "/blog#site-profissional-gera-leads",
      },
      {
        tag: "AUTOMAÇÃO",
        icon: "Workflow",
        title: "Quando automatizar o atendimento sem perder qualidade",
        summary:
          "Veja sinais de que sua empresa já pode ganhar tempo com WhatsApp, webhooks e fluxos inteligentes.",
        href: "/blog#automatizar-atendimento",
      },
      {
        tag: "IA",
        icon: "Bot",
        title: "Como aplicar IA em processos reais da empresa",
        summary:
          "Assistentes, classificação de mensagens e respostas com contexto podem reduzir gargalos operacionais.",
        href: "/blog#ia-em-processos-reais",
      },
    ] satisfies BlogCard[],
  },
  contact: {
    eyebrow: "CONTATO",
    title: "Vamos desenhar a próxima solução digital da sua empresa?",
    body:
      "Conte rapidamente o que você precisa. Podemos começar por um site, MVP, sistema interno, integração com WhatsApp, automação ou consultoria técnica.",
    bullets: [
      "Resposta inicial em até 24h úteis.",
      "Diagnóstico objetivo antes da proposta.",
      "Projetos com foco em performance, clareza e escala.",
    ],
    whatsappCta: {
      label: "Chamar no WhatsApp",
      href: buildWhatsAppHref(
        "Ola! Quero conversar sobre uma solucao digital da Ireix Solution."
      ),
      variant: "whatsapp",
      purpose: "support",
    } satisfies HomeCta,
    whatsappFallback:
      "WhatsApp comercial em configuração. Use o formulário ou contato@ireixsolution.com.",
    formTitle: "Solicite uma proposta",
    formNote: "contato@ireixsolution.com",
  },
  footer: {
    brandName: "Ireix Solution",
    body:
      "Sites profissionais, presença digital e soluções para empresas que querem vender melhor, ganhar confiança e transformar visitantes em oportunidades.",
    ctas: [
      {
        label: "Falar no WhatsApp",
        href: buildWhatsAppHref(
          "Ola! Quero falar com a Ireix Solution sobre um novo projeto."
        ),
        variant: "primary",
        purpose: "support",
      },
      {
        label: "Solicitar proposta",
        href: "#contato",
        variant: "secondary",
        purpose: "conversion",
      },
    ] satisfies HomeCta[],
    services: [
      "Sites profissionais",
      "Sistemas web sob medida",
      "Automações e integrações",
      "WhatsApp Business API",
      "IA para empresas",
    ],
    company: ["Processo", "Blog", "Consultoria", "Manutenção mensal", "MVPs"],
    contact: [
      "contato@ireixsolution.com",
      "WhatsApp comercial",
      "Atendimento remoto para todo o Brasil",
    ],
    legal: "© 2026 Ireix Solution. Todos os direitos reservados.",
    stack: "Estratégia digital · Software sob medida · IA aplicada",
  },
} as const;

export type HomePageContent = typeof homePageContent;
