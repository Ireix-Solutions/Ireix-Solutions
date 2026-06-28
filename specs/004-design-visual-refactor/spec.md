# Feature Specification: Refatoração Visual para Fidelidade ao Design Pencil

**Feature Branch**: `004-design-visual-refactor`

**Created**: 2026-06-28

**Status**: Draft

**Input**: Usuário solicitou refatoração completa do site para atingir fidelidade pixel a pixel ao design do Pencil (Node ID: khBEU — "Ireix Solution Website - Desktop"), atualizando tokens de design, cópias, seções e estilos de componentes.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Tokens de Design Corretos (Priority: P1)

Um visitante abre qualquer página do site e percebe a identidade visual ciano-sobre-escuro da IREX: fundo off-white (#F6FBFD), accent ciano (#43A3BE), textos no dark brand (#061014) — sem nenhum tom de azul Meta.

**Why this priority**: Os tokens errados (azul #0064e0 em vez de ciano #43A3BE) contaminam todos os componentes. Corrigir os tokens é a fundação de todo o resto; sem ela, nenhuma outra história entrega fidelidade visual.

**Independent Test**: Abrir qualquer página no browser, inspecionar o botão primário e verificar `background: #43A3BE`; inspecionar qualquer eyebrow e verificar `color: #258CA6`; verificar que o azul Meta (#0064e0) não aparece em nenhum elemento.

**Acceptance Scenarios**:

1. **Given** o site carregado no browser, **When** inspeciono o `:root`, **Then** as variáveis `--irex-ink: #061014`, `--irex-accent: #43A3BE`, `--irex-accent-soft: #DDF4FA`, `--irex-accent-strong: #258CA6`, `--irex-surface: #F6FBFD`, `--irex-border: #D6E8EE`, `--irex-muted: #53636C` estão definidas e o antigo azul Meta está ausente.
2. **Given** o botão primário renderizado, **When** verifico o estilo, **Then** `background-color` é `#43A3BE` (ciano), não `#0064e0`.
3. **Given** qualquer eyebrow label, **When** inspeciono a cor, **Then** é `#258CA6` em fundos claros e `#B9F7FF` em fundos escuros.

---

### User Story 2 — Hero Full-Bleed com Imagem e Navegação Integrada (Priority: P1)

Um visitante acessa a homepage e vê um hero escuro de tela cheia (#061014), com a imagem de fundo da IA criada, overlay gradiente de contraste, a copy posicionada à esquerda, o menu de navegação integrado no topo do hero, e o accent bar ciano de 4px na base.

**Why this priority**: O hero é o primeiro impacto visual. O design atual é completamente diferente do Pencil: fundo branco em duas colunas vs. full-bleed escuro com imagem. Essa inconsistência é imediatamente percebida pelo visitante.

**Independent Test**: Acessar `http://localhost:3000`, verificar que o hero ocupa toda a largura, tem fundo escuro (#061014), imagem de fundo visível, menu de navegação embutido (sem header separado), e uma linha ciano de 4px na parte inferior.

**Acceptance Scenarios**:

1. **Given** a homepage carregada, **When** visualizo o hero, **Then** ele tem fundo `#061014`, imagem de fundo com overlay gradiente de contraste, largura de tela cheia, altura de 690px no desktop.
2. **Given** o topo do hero, **When** visualizo, **Then** a navegação (logo, links, CTAs) está integrada dentro do hero — não em um `<header>` separado acima dele.
3. **Given** a base do hero, **When** inspeciono, **Then** há uma barra accent `#43A3BE` de 4px de altura ocupando toda a largura.
4. **Given** a área de copy do hero, **When** visualizo no desktop, **Then** eyebrow, título (60px/700), body, CTAs e métricas estão alinhados à esquerda sobre o fundo escuro.

---

### User Story 3 — Seção "Quem Somos" substitui Testimonials (Priority: P2)

Um visitante rola a página após o hero e encontra uma seção "Quem Somos" moderna com editorial copy à esquerda (título 56px) e um painel de marca escuro à direita exibindo um preview da solução digital — em vez da seção de depoimentos que existe hoje.

**Why this priority**: O design Pencil não tem seção de Testimonials; tem uma seção "Quem Somos Section - Modern" (kvV05) com identidade editorial forte. Manter a seção errada quebra a sequência narrativa do site.

**Independent Test**: Rolar a página após o hero, verificar a seção com fundo gradiente `#F8FDFF → #FFFFFF → #EAF3F6`, título "Digital que faz sua empresa parecer tão boa quanto ela é." à esquerda e painel dark (#061014, cornerRadius 40) à direita.

**Acceptance Scenarios**:

1. **Given** a homepage, **When** rolo após o Hero, **Then** a próxima seção tem fundo gradiente off-white, não a seção de depoimentos.
2. **Given** a seção Quem Somos, **When** visualizo no desktop, **Then** layout é dois painéis: copy editorial à esquerda e About Brand System Panel escuro à direita (cornerRadius 40, sombra).
3. **Given** o painel escuro, **When** inspeciono, **Then** tem fundo `#061014`, cornerRadius 40, sombra externa e "Floating Result Badge" visível com texto "+ clareza".

---

### User Story 4 — Seções de Conteúdo com Tokens e Cópias Corretas (Priority: P2)

Um visitante percorre Services, Process, WhatsApp Spotlight, Blog e Contact, e todas as seções apresentam exatamente os estilos, espaçamentos, cores e textos definidos no design Pencil.

**Why this priority**: Cada seção tem diferenças acumuladas em copy, espaçamento, cores de cards e layout. Sem essas correções o site não corresponde ao design aprovado.

**Independent Test**: Comparar cada seção com o design Pencil; verificar service cards com cornerRadius 22px, process steps com número em círculo escuro e borda ciano, formulário com inputs #F6FBFD e botão ciano, rodapé altura ~420px padding 48px.

**Acceptance Scenarios**:

1. **Given** a seção Services, **When** inspeciono os cards, **Then** `border-radius: 22px`, `padding: 24px`, `border: 1px solid #D6E8EE`, icon shell com fundo `#DDF4FA` e borda `#B9DEE8`, título 15px/700/#061014, body 13px/#64747C lineHeight 1.45.
2. **Given** a seção Process, **When** inspeciono os step cards, **Then** `cornerRadius: 24px`, número em círculo `54x54` com `fill: #061014` e `stroke: #43A3BE strokeWidth: 2`.
3. **Given** a seção Contact, **When** inspeciono o formulário, **Then** inputs têm `fill: #F6FBFD` e `stroke: #B9DEE8`, botão "Chamar no WhatsApp" tem `fill: #061014`, botão "Enviar mensagem" tem `fill: #43A3BE`.
4. **Given** o rodapé, **When** inspeciono, **Then** `background: #061014`, padding 48px, gap 28px, quatro colunas (Brand, Serviços, Empresa, Contato).

---

### Edge Cases

- Em mobile (< 640px), o hero deve colapsar mantendo o fundo escuro e a imagem de fundo visível com overlay legível sobre ela.
- A seção Quem Somos no mobile deve empilhar copy (topo) e painel escuro (base) verticalmente.
- O menu de navegação integrado no hero deve colapsar em hamburguer no mobile.
- Cores de eyebrow variam por fundo: `#258CA6` em seções claras (Services, Process, Contact, Blog), `#B9F7FF` em seções escuras (Hero, WhatsApp Spotlight).
- A imagem de fundo do hero deve ter fallback de cor sólida (`#061014`) enquanto carrega, sem layout shift.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Os tokens de CSS no `:root` de `globals.css` MUST refletir exatamente a paleta do design Pencil: `--irex-ink: #061014`, `--irex-accent: #43A3BE`, `--irex-accent-soft: #DDF4FA`, `--irex-accent-strong: #258CA6`, `--irex-surface: #F6FBFD`, `--irex-border: #D6E8EE`, `--irex-muted: #53636C`. O token `--irex-gold` e referências ao azul Meta (#0064e0) MUST ser removidos.
- **FR-002**: O `HeroSection` MUST renderizar full-bleed escuro: fundo `#061014`, imagem de fundo com overlay gradiente, `TopNavigation` embutida no topo, copy da hero à esquerda, e barra accent ciano de 4px na base. O layout de duas colunas brancas MUST ser removido.
- **FR-003**: A `TestimonialsSection` MUST ser removida da homepage e substituída por um novo componente `AboutSection` (Quem Somos) posicionado como segunda seção, com layout editorial: copy à esquerda e painel de marca escuro à direita.
- **FR-004**: Os cards de serviço MUST ter `borderRadius: 22px`, `padding: 24px`, icon shell com `fill: #DDF4FA` e `stroke: #B9DEE8`, título 15px/700/#061014, body 13px/#64747C/lineHeight 1.45. As cópias dos serviços MUST ser atualizadas conforme o design (ex.: "Sites que vendem", "Sistemas para organizar", "Experiências digitais", "Integrações seguras", "Automação de processos", "Atendimento inteligente", "WhatsApp comercial", "SEO e performance", "Evolução contínua").
- **FR-005**: Os step cards de processo MUST ter `cornerRadius: 24px`, sombra `blur:28px offset:y10 spread:-22`, número em círculo `54x54` com `fill: #061014` e `stroke: #43A3BE strokeWidth: 2`, `padding: 22px`, `stroke: #D6E8EE`. O título da seção MUST ser atualizado para "Um processo claro para tirar sua presença digital do papel."
- **FR-006**: O formulário de contato MUST ter inputs com `fill: #F6FBFD` e `stroke: #B9DEE8`, botão "Chamar no WhatsApp" com `fill: #061014` (dark, não verde), botão "Enviar mensagem" com `fill: #43A3BE`.
- **FR-007**: O `home-content.ts` MUST ter todas as cópias atualizadas conforme o design Pencil, incluindo: títulos de serviço, título e body do processo, eyebrow e title do spotlight ("ATENDIMENTO COMERCIAL", "Respostas mais rápidas para transformar conversas em oportunidades."), e conteúdo da seção Quem Somos.
- **FR-SEO**: As alterações MUST manter o `<h1>` semântico do hero, os `<h2>` de seção e a estrutura de headings existente. Metadados da página MUST ser preservados.
- **FR-SEC**: Nenhuma alteração toca endpoints ou dados sensíveis. Imagens de fundo MUST ser servidas de `public/` ou via `next/image`, sem URLs externas expostas como variáveis de cliente.
- **FR-UI**: MUST seguir `docs/designer-system.md`. Componentes existentes MUST ser reaproveitados (`SectionBackdrop`, `FadeInView`, `StaggerContainer`, `TopNavigation`) quando aplicável; novos componentes MUST ser criados apenas quando não houver equivalente reutilizável.
- **FR-PERF**: A imagem de fundo do hero MUST ser carregada com prioridade (preload) para não prejudicar o LCP. O overlay gradiente MUST ser implementado via CSS puro, não como imagem adicional.
- **FR-CODE**: Todo código novo MUST seguir Clean Code — nomes descritivos, funções ≤20 linhas de lógica efetiva, sem magic numbers (extrair constantes), sem código morto, DRY (3ª repetição = extração obrigatória), tratamento de erros tipado e explícito.

### Key Entities

- **Design Token**: variável CSS no `:root` de `globals.css` representando uma cor, espaçamento ou tipografia do sistema de design IREX.
- **Section Component**: componente React representando uma seção completa da homepage (HeroSection, AboutSection, ServicesSection, etc.). Cada seção é independentemente testável.
- **home-content.ts**: arquivo de conteúdo centralizado com todas as cópias da homepage. Toda copy MUST passar por este arquivo — jamais hardcoded nos componentes.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Ao inspecionar o `:root` no browser, todos os tokens divergentes estão corrigidos e nenhuma referência ao azul Meta (#0064e0) ou gold (#ffd84d) aparece em qualquer componente.
- **SC-002**: O hero renderiza com fundo escuro, imagem visível e navegação integrada em 100% das larguras testadas: mobile 375px, tablet 768px, desktop 1440px.
- **SC-003**: A seção de depoimentos (Testimonials) não existe mais na homepage; a seção Quem Somos está presente como segunda seção após o hero.
- **SC-004**: Comparação visual lado a lado entre o site renderizado e o Node khBEU no Pencil confirma fidelidade de paleta, espaçamento de seções e estilo de cards — sem diferenças de cor ou layout identificáveis a olho nu.
- **SC-005**: `npm run build` passa sem erros. `npm run lint` sem warnings. `npm run test` passa com cobertura ≥ 80% nos componentes novos ou significativamente alterados.
- **SC-SEO**: `<h1>` do hero e `<h2>` de cada seção permanecem presentes e corretos após a refatoração.
- **SC-PERF**: Lighthouse LCP no desktop permanece abaixo de 2.5s; a imagem do hero não bloqueia o carregamento inicial.
- **SC-A11Y**: Contraste do texto sobre o hero escuro é ≥ 4.5:1 (WCAG AA). Navegação por teclado funciona para o menu integrado no hero.

---

## Assumptions

- O arquivo de imagem de fundo do hero (`ChatGPT Image 28 de jun. de 2026, 09_15_07.png`) deve ser colocado em `public/images/home/hero-background.png` (ou equivalente) antes da implementação.
- A `TestimonialsSection` e seus dados (`homePageContent.testimonials`) serão completamente removidos — não há plano de os usar em outra página neste momento.
- A `TopNavigation` será refatorada para funcionar integrada dentro do `HeroSection` (posição absoluta no topo), não como `<header>` separado no layout.
- O componente `HeroVisual` e `HeroParticles` serão removidos ou reutilizados internamente — o visual do hero passa a ser a imagem de fundo real com overlay.
- Framer-motion permanece como biblioteca de animação; animações de entrada existentes devem ser adaptadas ao novo visual escuro.
- A seção "Quem Somos" não possui formulário ou interação — é puramente editorial/informacional e pode ser Server Component.
