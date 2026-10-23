export const siteConfig = {
  name: "Olimbo",
  url: "https://olimbo.dev.br",
  navigation: [
    { label: "Soluções", href: "#solucoes" },
    { label: "Como trabalhamos", href: "#processo" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],
  benefits: [
    {
      label: "Presença digital",
      title: "Seu negócio bem apresentado",
      description:
        "Mostre o valor do que você faz em um site próprio, com seus serviços claros e o contato a um clique.",
      visual: "opportunities",
      href: "#solucao-sites",
      linkLabel: "Conhecer sites e landing pages",
    },
    {
      label: "Tempo para o que importa",
      title: "Menos copiar e colar",
      description:
        "Informações que passam de uma ferramenta para outra sem você repetir o mesmo trabalho a cada nova demanda.",
      visual: "automation",
      href: "#solucao-automacoes",
      linkLabel: "Explorar automações",
    },
    {
      label: "Clareza para decidir",
      title: "Sua operação em uma só visão",
      description:
        "Reúna demandas, dados e andamento do trabalho em um sistema pensado para o jeito que sua equipe funciona.",
      visual: "organization",
      href: "#solucao-sistemas",
      linkLabel: "Conhecer sistemas sob medida",
    },
    {
      label: "Do plano ao próximo passo",
      title: "Sua ideia com um caminho claro",
      description:
        "Entenda o que vale construir primeiro e transforme uma necessidade em um projeto com prioridades definidas.",
      visual: "custom",
      href: "#solucao-consultoria",
      linkLabel: "Entender a consultoria",
    },
  ],
  solutions: [
    {
      id: "sites",
      number: "01",
      title: "Criação de sites e landing pages",
      description:
        "Mostre o valor do seu negócio com uma experiência que apresenta seus serviços e conduz o visitante ao próximo passo.",
      items: [
        "Sites institucionais profissionais",
        "Landing pages para campanhas e geração de leads",
        "Interfaces responsivas",
        "Estrutura preparada para SEO",
        "Foco em clareza e conversão",
      ],
      ctaLabel: "Quero um site para meu negócio",
      whatsappMessage:
        "Olá, Olimbo! Quero conversar sobre a criação de um site ou landing page.",
      layout: "wide",
    },
    {
      id: "sistemas",
      number: "02",
      title: "Desenvolvimento de sistemas sob medida",
      description:
        "Dê à sua equipe um lugar para organizar informações, acompanhar tarefas e trabalhar com mais clareza.",
      items: [
        "Sistemas web personalizados",
        "Painéis administrativos",
        "Plataformas digitais",
        "Ferramentas internas",
        "Organização de processos e informações",
      ],
      ctaLabel: "Quero organizar minha operação",
      whatsappMessage:
        "Olá, Olimbo! Quero conversar sobre o desenvolvimento de um sistema sob medida.",
      layout: "standard",
    },
    {
      id: "automacoes",
      number: "03",
      title: "Automações e integrações",
      description:
        "Faça suas ferramentas trabalharem juntas para evitar copiar dados e repetir o mesmo trabalho a cada nova demanda.",
      items: [
        "Automação de tarefas repetitivas",
        "Integração entre ferramentas",
        "Fluxos de trabalho digitais",
        "Redução de atividades manuais",
        "Processos mais eficientes",
      ],
      ctaLabel: "Quero automatizar minha rotina",
      whatsappMessage:
        "Olá, Olimbo! Quero conversar sobre automações e integrações para o meu negócio.",
      layout: "standard",
    },
    {
      id: "consultoria",
      number: "04",
      title: "Consultoria e soluções digitais",
      description:
        "Tire sua ideia do campo das dúvidas. Organize prioridades, avalie possibilidades e defina o que construir primeiro.",
      items: [
        "Análise de necessidades",
        "Planejamento de soluções",
        "Evolução de sistemas existentes",
        "Transformação de ideias em projetos",
        "Orientação técnica",
      ],
      ctaLabel: "Quero tirar uma ideia do papel",
      whatsappMessage:
        "Olá, Olimbo! Tenho uma necessidade digital e quero entender qual solução faz sentido.",
      layout: "wide",
    },
  ],
  problemSolutions: [
    {
      problem: "Minha empresa ainda não tem um site profissional.",
      solution:
        "Apresente seus serviços em um site próprio, com uma mensagem clara e contato fácil de encontrar.",
      service: "Sites e landing pages",
    },
    {
      problem: "Perco tempo executando as mesmas tarefas.",
      solution:
        "Conecte as etapas repetitivas em um fluxo de automação, conforme as ferramentas que você já usa.",
      service: "Automações",
    },
    {
      problem: "Uso planilhas demais para controlar meus processos.",
      solution:
        "Centralize dados e acompanhamento em um sistema organizado em torno dos seus processos.",
      service: "Sistemas personalizados",
    },
    {
      problem: "Tenho uma ideia, mas não sei como transformá-la em software.",
      solution:
        "Transforme a ideia em prioridades, funcionalidades e um primeiro escopo para desenvolver.",
      service: "Consultoria digital",
    },
    {
      problem: "Meus sistemas não se comunicam.",
      solution:
        "Avalie integrações para que a informação circule entre ferramentas sem depender de copiar e colar.",
      service: "Integrações",
    },
  ],
  process: [
    {
      number: "01",
      title: "Entendemos seu desafio",
      description:
        "Você conta como trabalha, o que está travando sua rotina e o que quer construir.",
    },
    {
      number: "02",
      title: "Definimos o melhor caminho",
      description:
        "Organizamos prioridades e escopo para você entender o que será feito antes de começar.",
    },
    {
      number: "03",
      title: "Desenvolvemos a solução",
      description:
        "Transformamos o escopo em interfaces e funcionalidades, com atenção ao uso e à execução técnica.",
    },
    {
      number: "04",
      title: "Validamos e preparamos a entrega",
      description:
        "Revisamos os fluxos e funcionalidades em relação ao escopo definido e preparamos a solução para uso.",
    },
  ],
  faq: [
    {
      question: "Quanto custa desenvolver um site profissional?",
      answer:
        "O investimento depende do objetivo, do volume de conteúdo, das funcionalidades e do nível de personalização. A Olimbo entende o escopo antes de preparar um orçamento específico para o projeto.",
    },
    {
      question: "Qual é a diferença entre um site e uma landing page?",
      answer:
        "Um site costuma reunir diferentes páginas e informações sobre uma empresa. Uma landing page concentra a experiência em uma campanha, oferta ou ação principal, como solicitar contato.",
    },
    {
      question: "A Olimbo desenvolve sistemas personalizados?",
      answer:
        "Sim. Desenvolvemos sistemas web, painéis e ferramentas internas a partir dos processos que você precisa organizar. O escopo considera sua rotina, as informações envolvidas e quem vai usar a solução.",
    },
    {
      question: "É possível automatizar processos da minha empresa?",
      answer:
        "Podemos avaliar tarefas como transferir dados entre ferramentas, encaminhar informações e atualizar etapas de um processo. A viabilidade depende das ferramentas e dos acessos disponíveis na sua operação.",
    },
    {
      question: "Posso solicitar melhorias em um sistema existente?",
      answer:
        "Sim. Primeiro é necessário avaliar a tecnologia atual, o objetivo da evolução e as restrições do sistema antes de propor um caminho.",
    },
    {
      question: "Preciso saber exatamente o que quero desenvolver?",
      answer:
        "Não. Conte o que toma seu tempo, o que você quer melhorar ou qual ideia deseja colocar em prática. A partir disso, organizamos as possibilidades e o que faz sentido desenvolver primeiro.",
    },
    {
      question: "Como solicitar um orçamento?",
      answer:
        "Use os botões desta página para abrir o WhatsApp com uma mensagem pronta e compartilhar o contexto do projeto.",
    },
  ],
  contact: {
    whatsapp: {
      phone: "+55 (18) 99671-6753" as string | null,
      message:
        "Olá, Olimbo! Quero conversar sobre uma solução digital para o meu projeto.",
      note: "Converse com a Olimbo pelo WhatsApp.",
      unavailableMessage:
        "O WhatsApp está indisponível no momento.",
    },
  },
} as const;

export type NavigationItem = (typeof siteConfig.navigation)[number];
export type WhatsAppContact = typeof siteConfig.contact.whatsapp;
