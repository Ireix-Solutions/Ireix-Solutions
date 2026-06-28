---

description: "Tasks — Refatoração Visual para Fidelidade ao Design Pencil"
---

# Tasks: Refatoração Visual para Fidelidade ao Design Pencil

**Input**: Design documents de `specs/004-design-visual-refactor/`

**Prerequisites**: plan.md ✅ | spec.md ✅ | research.md ✅ | data-model.md ✅ | quickstart.md ✅

**TDD obrigatório** — conforme constituição v1.1.0 e `specs/000-tdd-foundation/`. Testes de
caracterização ANTES de alterar código legado. RED → GREEN → REFACTOR para componentes novos.

**Format**: `[ID] [P?] [Story?] Descrição com caminho de arquivo`
- `[P]` = pode rodar em paralelo (arquivos diferentes, sem dependência incompleta)
- `[Story]` = user story da spec.md

---

## Phase 1: Setup

**Purpose**: Pré-requisitos manuais e inventário de reuso antes de qualquer implementação.

- [X] T001 [P] **MANDATORY reuse inventory**: inventário de componentes em `app/(pages)/(home)/_components/` — documentar: `FadeInView`, `StaggerContainer`, `SectionBackdrop`, `TopNavigation` reaproveitados; `AboutSection`, `AboutBrandPanel` novos (justificados); `TestimonialsSection`, `HeroVisual`, `HeroParticles` removidos. Ver `specs/004-design-visual-refactor/data-model.md`.
- [X] T002 Copiar imagem do hero para `public/images/home/hero-background.jpg` — executar: `cp ~/Área\ de\ trabalho/hero-background.jpg public/images/home/hero-background.jpg` (criar pasta se necessário)

---

## Phase 2: Foundational — US1: Tokens de Design (P1) 🎯 Bloqueia TUDO

**Purpose**: Corrigir os tokens CSS que contaminam todos os componentes. NENHUMA outra tarefa pode começar antes desta fase.

**Goal**: Tokens em `globals.css` refletem paleta ciano IREX (#43A3BE) — sem vestígio do azul Meta (#0064e0).

**Independent Test**: DevTools > console > `getComputedStyle(document.documentElement).getPropertyValue('--irex-accent')` retorna `#43A3BE`.

- [X] T003 [US1] Atualizar tokens em `app/globals.css`: `--irex-ink: #061014`, `--irex-accent: #43A3BE`, `--irex-accent-strong: #258CA6`, `--irex-accent-soft: #DDF4FA`, `--irex-surface: #F6FBFD`, `--irex-border: #D6E8EE`, `--irex-muted: #53636C`; remover `--irex-gold`; adicionar `--irex-secondary-text: #64747C`, `--irex-canvas: #F6FBFD`, `--irex-cyan-on-dark: #B9F7FF`, `--irex-border-icon: #B9DEE8`
- [X] T004 [P] [US1] Atualizar `app/(pages)/(home)/_components/SectionBackdrop.tsx`: substituir as 4 referências hardcoded `#0064e0` por `#43A3BE` (lineColor e glowColor em ambas as variantes light/dark)
- [X] T005 [P] [US1] Atualizar `tests/unit/section-backdrop.test.tsx`: corrigir assertions de cor de `#0064e0` para `#43A3BE` onde presentes

**Checkpoint**: Fase Foundational completa — tokens corretos propagam para todos os componentes via `var(--irex-*)`.

---

## Phase 3: US2 — Hero Full-Bleed com Imagem e Navegação Integrada (P1) 🎯 MVP

**Goal**: Hero escuro full-bleed com imagem real, nav integrada e accent bar ciano.

**Independent Test**: `http://localhost:3000` — hero tem fundo `#061014`, imagem visível, navegação sem header separado, linha ciano 4px na base.

### Testes para US2 (TDD obrigatório)

> **⚠️ Escrever testes ANTES de implementar**

- [X] T006 [US2] Escrever `tests/unit/hero-section.test.tsx`: (a) testes de caracterização do comportamento ATUAL (devem passar com código atual); (b) testes RED do novo comportamento — hero com `role="img"` na imagem de fundo, `data-testid="hero-accent-bar"` na barra ciano, sem `data-testid` de HeroVisual/HeroParticles (devem FALHAR antes da implementação)

### Implementação de US2

- [X] T007 [US2] Refatorar `app/(pages)/(home)/_components/HeroSection.tsx`: remover grid branco de 2 colunas; adicionar `<section>` com `bg-[#061014] min-h-[690px] relative overflow-hidden`; inserir `<Image>` do next/image com `src="/images/home/hero-background.jpg" fill priority alt="" aria-hidden className="object-cover"`; adicionar overlay gradiente CSS absoluto; posicionar copy à esquerda com padding conforme design; adicionar `<div data-testid="hero-accent-bar" className="absolute bottom-0 h-1 w-full bg-[var(--irex-accent)]" />`; integrar `<TopNavigation embedded />` no topo absoluto
- [X] T008 [US2] Atualizar `app/(pages)/(home)/_components/TopNavigation.tsx`: adicionar prop `embedded?: boolean`; quando `embedded=true` — remover `sticky`, `border-b`, lógica de scroll (`useScroll`/`useTransform`), fundo branco; usar cores brancas nos links e no logo
- [X] T009 [US2] Atualizar `app/(pages)/(home)/_components/HomePage.tsx`: remover `<TopNavigation />` do layout principal (agora integrado no HeroSection); remover import de TopNavigation
- [X] T010 [P] [US2] Remover `app/(pages)/(home)/_components/HeroVisual.tsx` e `tests/unit/hero-visual.test.tsx`
- [X] T011 [P] [US2] Remover `app/(pages)/(home)/_components/HeroParticles.tsx` e `tests/unit/hero-particles.test.tsx`; verificar se `@tsparticles/react` e `@tsparticles/slim` têm outros usos antes de remover do `package.json`

**Checkpoint**: Hero full-bleed renderizando, nav integrada, testes US2 verdes — `npm run test` deve passar.

---

## Phase 4: US3 — Seção "Quem Somos" / AboutSection (P2)

**Goal**: Seção editorial About na 2ª posição da homepage, substituindo Testimonials.

**Independent Test**: Rolar a homepage após o hero — encontrar seção com gradiente off-white (#F8FDFF → #FFFFFF → #EAF3F6), título "Digital que faz sua empresa parecer tão boa quanto ela é.", painel escuro à direita.

### Testes para US3 (TDD obrigatório)

> **⚠️ Escrever testes ANTES de implementar**

- [X] T012 [US3] Escrever `tests/unit/about-section.test.tsx` RED: testa que `AboutSection` renderiza eyebrow "QUEM SOMOS", título "Digital que faz sua empresa parecer tão boa quanto ela é.", e elemento com `data-testid="about-brand-panel"` (devem FALHAR antes da criação do componente)

### Implementação de US3

- [X] T013 [US3] Adicionar objeto `about` ao `app/(pages)/(home)/_components/home-content.ts`: eyebrow "QUEM SOMOS", title "Digital que faz sua empresa parecer tão boa quanto ela é.", body (parágrafo editorial), resultBadge { value: "+ clareza", label: "para decidir, confiar e chamar" }, flowChips ["Presença digital", "Atendimento comercial", "Resultados mensuráveis"]
- [X] T014 [US3] Criar `app/(pages)/(home)/_components/AboutBrandPanel.tsx` (Server Component): painel escuro `#061014`, `cornerRadius: 40px`, shadow `blur:60px color:#0610144D offset:y24 spread:-28`, decorações internas (glow ciano, watermark IREX, preview card, flow chips, floating badge "+ clareza")
- [X] T015 [US3] Criar `app/(pages)/(home)/_components/AboutSection.tsx` (Server Component): fundo gradiente `#F8FDFF → #FFFFFF → #EAF3F6` via Tailwind, hairline `#D6E8EE` no topo, watermark IREX (opacity 0.04), layout grid 2 colunas (copy à esquerda w:660, painel à direita), eyebrow `#258CA6`, título 56px/600, body 17px/`#53636C`
- [X] T016 [US3] Atualizar `app/(pages)/(home)/_components/HomePage.tsx`: adicionar `<AboutSection />` como 2ª seção (imediatamente após `<HeroSection />`); remover `<TestimonialsSection />` e seu import
- [X] T017 [US3] Remover `app/(pages)/(home)/_components/TestimonialsSection.tsx`; remover chave `testimonials` de `app/(pages)/(home)/_components/home-content.ts` e tipo `Testimonial`

**Checkpoint**: AboutSection renderizando na 2ª posição, Testimonials ausente, testes US3 verdes.

---

## Phase 5: US4 — Seções de Conteúdo com Tokens e Cópias Corretas (P2)

**Goal**: Services, Process, Spotlight, Blog, Contact e Footer com estilos e cópias fiéis ao design Pencil.

**Independent Test**: Comparação visual com Node ID khBEU — cards de serviço r-22, steps com borda ciano, inputs #F6FBFD, botão enviar ciano, rodapé 4 colunas.

### Implementação de US4

- [X] T018 [US4] Atualizar cópias em `app/(pages)/(home)/_components/home-content.ts`: service titles (9 títulos conforme data-model.md), `process.title` → "Um processo claro para tirar sua presença digital do papel.", `spotlight.eyebrow` → "ATENDIMENTO COMERCIAL", `spotlight.title` → "Respostas mais rápidas para transformar conversas em oportunidades.", `spotlight.body` → "Organize seus canais, responda com consistência e crie uma experiência mais clara para quem chega até sua empresa."
- [X] T019 [P] [US4] Atualizar `app/(pages)/(home)/_components/ServicesSection.tsx`: fundo gradiente `from-[#F6FBFD] to-[#ECF6F9]`, padding `py-[84px] px-[56px]`; cards: `rounded-[22px] p-[24px] gap-[14px] border border-[var(--irex-border)]`; icon shell: `bg-[#DDF4FA] border border-[#B9DEE8] rounded-full w-11 h-11`; título card: `text-[15px] font-bold text-[var(--irex-ink)]`; body card: `text-[13px] text-[#64747C] leading-[1.45]`
- [X] T020 [P] [US4] Atualizar `app/(pages)/(home)/_components/ProcessSection.tsx`: step cards `rounded-[24px] p-[22px] gap-[18px] border border-[var(--irex-border)] shadow-[0_10px_28px_-22px_rgba(6,16,20,0.14)]`; número: `border-2 border-[var(--irex-accent)]` (adicionar ao círculo escuro existente); gap entre steps `gap-[14px]`; padding seção `py-[86px] px-[56px]`
- [X] T021 [P] [US4] Atualizar `app/(pages)/(home)/_components/WhatsAppSpotlight.tsx`: eyebrow: `text-[11px] font-[800] tracking-[0.09em] text-[#B9F7FF]` (remover referência a `--irex-gold`); botão primário: `bg-[#44B8D2]` com `shadow-[0_14px_30px_-12px_rgba(68,184,210,0.4)]`; padding seção `py-[64px] px-[56px]`
- [X] T022 [P] [US4] Atualizar `app/(pages)/(home)/_components/BlogInsightsSection.tsx`: substituir `irex-surface` por `irex-canvas` onde usado como fundo de seção; padding `py-[76px] px-[48px]`
- [X] T023 [P] [US4] Atualizar `app/(pages)/(home)/_components/ContactSection.tsx`: inputs `bg-[var(--irex-canvas)] border border-[var(--irex-border-icon)]`; botão WhatsApp: `bg-[var(--irex-ink)] text-white` (remover variante verde); botão "Enviar mensagem": `bg-[var(--irex-accent)] text-white`; padding seção `py-[78px] px-[48px]`
- [X] T024 [P] [US4] Atualizar `app/(pages)/(home)/_components/ProfessionalFooter.tsx`: padding `p-12` → `py-12 px-12` (manter 48px); gap entre footer-top e footer-bottom: `gap-[28px]`; verificar que `bg-[var(--irex-ink)]` usa `#061014` (token atualizado em T003)

**Checkpoint**: Todas as seções com tokens e cópias corretas — comparação visual com design Pencil aprovada.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Qualidade final, acessibilidade, performance e validação de build.

- [X] T025 [P] SEO review: verificar que `<h1>` do hero está presente e único, `<h2>` de cada seção mantido, nenhuma heading quebrada pela refatoração do hero
- [X] T026 [P] Responsividade: verificar hero em 375px (mobile), 768px (tablet), 1440px (desktop) — fundo escuro visível, overlay legível, nav colapsando em hamburguer no mobile, Quem Somos empilhando no mobile
- [X] T027 [P] Acessibilidade: verificar contraste do texto branco sobre hero `#061014` (≥ 4.5:1 WCAG AA); nav por teclado funcionando no menu integrado do hero
- [X] T028 Executar `npm run lint` — zero warnings
- [X] T029 Executar `npm run test:coverage` — cobertura ≥ 80% nos componentes novos (`AboutSection`, `AboutBrandPanel`) e significativamente alterados (`HeroSection`, `ServicesSection`)
- [X] T030 Executar `npm run build` — zero erros de compilação
- [X] T031 Validação visual final: seguir checklist de `specs/004-design-visual-refactor/quickstart.md` — hero, about, services, process, spotlight, blog, contact, footer ✓

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Sem dependências — T002 é pré-requisito manual para T007
- **Foundational/US1 (Phase 2)**: Depende do Setup — BLOQUEIA todas as User Stories
- **US2 (Phase 3)**: Depende da Phase 2 completa; T007 depende de T002 (imagem em public/)
- **US3 (Phase 4)**: Depende da Phase 2; pode rodar em PARALELO com US2 (arquivos diferentes, exceto HomePage.tsx — T016 depende de T009)
- **US4 (Phase 5)**: Depende da Phase 2; T018 depende de T013 (mesmo arquivo home-content.ts); T019–T024 [P] podem rodar em paralelo entre si
- **Polish (Phase N)**: Depende de US2, US3, US4 completas

### Within Each User Story

- Testes (caracterização + RED) MUST ser escritos e verificados ANTES da implementação
- Remoção de arquivos legados AFTER implementação do substituto
- `npm run test` MUST passar após cada fase antes de prosseguir
- HomePage.tsx é editado em T009 (US2), T016 (US3) — não em paralelo

### Parallel Opportunities

```bash
# Phase 2 — US1 (após T003):
Task: "T004 — SectionBackdrop cores"
Task: "T005 — section-backdrop.test.tsx cores"

# Phase 3 — US2 (após T006):
# T007 → T008 → T009 (sequencial, mesmo arquivo ou dependência)
# Após T009:
Task: "T010 — Remover HeroVisual"
Task: "T011 — Remover HeroParticles"

# Phase 4 — US3 (após T013):
Task: "T014 — AboutBrandPanel.tsx"
Task: "T015 — AboutSection.tsx" (depende de T014)

# Phase 5 — US4 (após T018):
Task: "T019 — ServicesSection.tsx"
Task: "T020 — ProcessSection.tsx"
Task: "T021 — WhatsAppSpotlight.tsx"
Task: "T022 — BlogInsightsSection.tsx"
Task: "T023 — ContactSection.tsx"
Task: "T024 — ProfessionalFooter.tsx"
```

---

## Implementation Strategy

### MVP First — US1 + US2 (Tokens + Hero)

1. Completar Phase 1: Setup (T001–T002)
2. Completar Phase 2: Tokens US1 (T003–T005)
3. Completar Phase 3: Hero US2 (T006–T011)
4. **STOP e VALIDAR**: `npm run test` + inspeção visual do hero no browser
5. Deploy/demo se aprovado

### Incremental Delivery

1. Setup + US1 (Tokens) → Tokens corretos em toda a aplicação
2. US2 (Hero) → Hero visual aprovado
3. US3 (About) → Nova seção Quem Somos ativa, Testimonials removida
4. US4 (Seções) → Fidelidade visual total ao design Pencil

---

## Notes

- `[P]` = arquivo diferente, sem dependência incompleta — executar em paralelo
- `[Story]` = rastreabilidade com spec.md
- **TDD é obrigatório**: testes de caracterização BEFORE + RED antes de qualquer implementação
- Commit após cada fase com `npm run test` passando
- `SectionBackdrop` tem `#0064e0` hardcoded em 4 lugares — não é via token CSS; T004 faz a troca direta
- `TopNavigation` com `embedded=true` perde sticky/scroll/border — comportamento diferente é intencional
- Imagem do hero: `public/images/home/hero-background.jpg` — verificar existência ANTES de T007
- `@tsparticles` — verificar outros usos antes de remover do package.json (T011)
- Follow OWASP Top 10, SOLID, Clean Code, Next.js App Router docs e `docs/designer-system.md`
- Nomes descritivos: sem magic numbers inline — extrair para tokens CSS ou constantes nomeadas
- Funções ≤20 linhas de lógica efetiva; 3ª repetição de padrão = extração obrigatória
