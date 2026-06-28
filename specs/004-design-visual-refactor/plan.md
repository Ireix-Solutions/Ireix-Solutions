# Implementation Plan: Refatoração Visual para Fidelidade ao Design Pencil

**Branch**: `004-design-visual-refactor` | **Date**: 2026-06-28 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/004-design-visual-refactor/spec.md`

---

## Summary

Refatoração visual completa da homepage da IREX para atingir fidelidade pixel a pixel ao design aprovado no Pencil (Node ID: khBEU — "Ireix Solution Website - Desktop"). O trabalho abrange quatro eixos paralelos: (1) correção dos tokens de design CSS que erroneamente usam azul Meta em vez de ciano IREX; (2) reconstrução do HeroSection como full-bleed escuro com imagem de fundo real e navegação integrada; (3) criação da seção "Quem Somos" (AboutSection) e remoção da Testimonials inexistente no design; (4) atualização de estilos, espaçamentos e cópias em todas as seções restantes. Nenhuma rota nova, endpoint ou autenticação é afetada.

---

## Technical Context

**Language/Version**: TypeScript 5.x / Node.js 22.20.0

**Primary Dependencies**: Next.js 16.2.7, React 19.2.4, Framer Motion 12.40.x, Tailwind CSS v4, Lucide React, Vitest + @testing-library/react

**Storage**: N/A (sem persistência de dados)

**Testing**: Vitest + @testing-library/react (configurados). `npm run test`, `npm run test:coverage`.

**Target Platform**: Web — desktop 1440px (design base), mobile-first responsivo até 375px.

**Project Type**: Site institucional Next.js App Router

**Performance Goals**: LCP < 2.5s desktop (SC-PERF). Imagem do hero carregada com `priority` via `next/image`.

**Constraints**: Sem mudanças de rota, endpoint ou autenticação. Sem novos pacotes npm além dos já instalados (exceto possível remoção de `@tsparticles`).

**Scale/Scope**: 8 componentes de seção + 1 novo + 3 removidos + globals.css + home-content.ts + 2 testes novos + 2 testes removidos.

**SEO Impact**: Estrutura de headings `<h1>`/`<h2>` preservada. A navegação integrada no hero não altera a hierarquia semântica. Nenhuma metadata nova necessária.

**Security/OWASP Impact**: N/A — sem inputs novos, sem autenticação, sem dados sensíveis. Imagem servida de `public/` (estática, sem URL de terceiro exposta ao cliente).

**Design System Impact**: Atualização central dos tokens em `globals.css` propaga automaticamente para todos os componentes que usam `var(--irex-*)`. `docs/designer-system.md` já foi atualizado na sessão anterior com o design system correto.

**Existing Component Reuse**:
- Reaproveitados sem mudança: `FadeInView`, `StaggerContainer`, `StaggerItem`, `animation-config.ts`, `BlogInsightsSection` (tokens), `ProfessionalFooter` (tokens).
- Reaproveitados com alteração: `TopNavigation` (prop `embedded`), `SectionBackdrop` (substituição de cores).
- Novos: `AboutSection`, `AboutBrandPanel` — sem equivalente reutilizável existente.
- Removidos: `TestimonialsSection`, `HeroVisual`, `HeroParticles` — código morto após refatoração.

---

## Constitution Check

- [x] **IREX source of truth**: Cópias atualizadas via `home-content.ts`; navegação e marca preservadas; sem impacto em metadata ou SEO existente.
- [x] **SOLID e componentização**: Inventário completo em `data-model.md`. Reuso confirmado para 6 componentes. 2 novos (`AboutSection`, `AboutBrandPanel`) justificados pela inexistência de equivalente. 3 removidos eliminam código morto. Sem duplicação.
- [x] **OWASP**: Nenhum endpoint, autenticação ou dado sensível afetado. Imagem servida de `public/` sem exposição de URL.
- [x] **Next.js App Router**: `AboutSection` é Server Component. `next/image` com `fill` + `priority` para o hero. Guia de Image Optimization consultado.
- [x] **SEO e performance**: `<h1>` do hero mantido. LCP mitigado por `priority` no `next/image`. Estrutura de headings preservada.
- [x] **Design system e responsividade**: Tokens atualizados em `globals.css`. Mobile-first preservado. `docs/designer-system.md` já atualizado com o design real.
- [x] **Clean Code**: Componentes com responsabilidade única. Constantes de design extraídas para tokens CSS (sem magic numbers inline). Funções ≤20 linhas de lógica.
- [x] **TDD obrigatório**: Testes de caracterização BEFORE para componentes alterados. TDD RED→GREEN→REFACTOR para `AboutSection`. Ver `specs/000-tdd-foundation/`.

---

## Project Structure

### Documentation (this feature)

```text
specs/004-design-visual-refactor/
├── plan.md              # Este arquivo
├── spec.md              # Especificação de feature
├── research.md          # Decisões de arquitetura e pesquisa
├── data-model.md        # Tokens, entidades de conteúdo, inventário de componentes
├── quickstart.md        # Guia de validação e desenvolvimento
├── checklists/
│   └── requirements.md  # Checklist de qualidade da spec
└── tasks.md             # Gerado pelo /speckit-tasks
```

### Source Code (repository root)

```text
app/
├── globals.css                                 # tokens: ciano IREX, remoção de gold/azul Meta
└── (pages)/(home)/_components/
    ├── HomePage.tsx                            # nova ordem: Hero → About → Services → ...
    ├── HeroSection.tsx                         # full-bleed escuro + next/image + nav integrada
    ├── TopNavigation.tsx                       # prop embedded?: boolean
    ├── AboutSection.tsx                        # NOVO: seção Quem Somos (Server Component)
    ├── AboutBrandPanel.tsx                     # NOVO: painel escuro decorativo (Server Component)
    ├── ServicesSection.tsx                     # tokens + card styles (r-22, pad-24, icon DDF4FA)
    ├── ProcessSection.tsx                      # step cards (r-24, círculo escuro borda ciano)
    ├── WhatsAppSpotlight.tsx                   # eyebrow B9F7FF, botão 44B8D2, cópias
    ├── BlogInsightsSection.tsx                 # tokens (irex-surface → irex-canvas)
    ├── ContactSection.tsx                      # inputs F6FBFD, botão WA escuro, enviar ciano
    ├── ProfessionalFooter.tsx                  # gap 28, padding 48, tokens
    ├── SectionBackdrop.tsx                     # #0064e0 → #43A3BE em todas as refs
    ├── home-content.ts                         # about content, service titles, spotlight copies
    ├── HeroVisual.tsx                          # REMOVER
    ├── HeroParticles.tsx                       # REMOVER
    └── TestimonialsSection.tsx                 # REMOVER

public/
└── images/home/
    └── hero-background.jpg                     # imagem IA (ação manual antes de implementar)

tests/unit/
    ├── about-section.test.tsx                  # NOVO — TDD para AboutSection
    ├── hero-section.test.tsx                   # NOVO — testes do hero full-bleed
    ├── section-backdrop.test.tsx               # ATUALIZAR: #43A3BE em vez de #0064e0
    ├── hero-particles.test.tsx                 # REMOVER
    └── hero-visual.test.tsx                    # REMOVER
```

**Structure Decision**: Todos os componentes de seção ficam co-localizados em `app/(pages)/(home)/_components/` pois são exclusivos da homepage. `AboutBrandPanel` é sub-componente de `AboutSection` — ficheiro separado para responsabilidade única, mas co-localizado na mesma pasta (não em `components/` pois não é compartilhado).

---

## Complexity Tracking

> Sem violações da constituição — nenhuma entrada necessária.

---

## Plano de Implementação por User Story

### US1 — Tokens de Design (P1) — Fundação

**Bloqueante**: todas as outras USs dependem dos tokens corretos.

**Ordem de execução**:

1. `globals.css` — atualizar variáveis CSS (ver data-model.md, tabela de tokens)
2. `SectionBackdrop.tsx` — substituir `#0064e0` por `#43A3BE` nas 4 referências internas
3. `tests/unit/section-backdrop.test.tsx` — atualizar assertion de cor

**Impacto automático** (sem edição): qualquer componente que usa `var(--irex-accent)`, `var(--irex-border)`, `var(--irex-surface)`, `var(--irex-muted)` terá a cor correta automaticamente após a atualização dos tokens.

---

### US2 — Hero Full-Bleed (P1)

**Dependência**: US1 (tokens) deve estar completa.

**Ordem de execução**:

1. **Pré-req manual**: garantir que `public/images/home/hero-background.jpg` existe.
2. Escrever teste de caracterização de `HeroSection` (comportamento atual) → verificar que passa.
3. Escrever testes RED para o novo comportamento: `hero-section.test.tsx`.
4. Refatorar `HeroSection.tsx`:
   - Remover grid branco de 2 colunas
   - Adicionar `<section>` com `bg-[#061014]` e `min-h-[690px]`
   - Adicionar `<Image src="/images/home/hero-background.jpg" fill priority alt="" aria-hidden="true" className="object-cover">`
   - Adicionar overlay gradiente CSS absoluto
   - Posicionar `<TopNavigation embedded />` no topo (position absolute, z-10)
   - Posicionar copy da hero à esquerda (padding-left 104px → irex-container)
   - Adicionar barra accent `<div className="absolute bottom-0 h-1 w-full bg-[var(--irex-accent)]">` (4px)
5. Atualizar `TopNavigation.tsx`: adicionar prop `embedded?: boolean`; quando `embedded=true`, remover sticky/backdrop/border e usar cores white.
6. Atualizar `HomePage.tsx`: remover `<TopNavigation />` separado do layout (agora embutido no Hero).
7. Remover `HeroVisual.tsx`, `HeroParticles.tsx` e seus testes.
8. Verificar que testes verdes passam + `npm run test`.

---

### US3 — AboutSection / Quem Somos (P2)

**Dependência**: US1 (tokens).

**Ordem de execução**:

1. Adicionar `about` content em `home-content.ts`:
   ```
   about: {
     eyebrow: "QUEM SOMOS",
     title: "Digital que faz sua empresa parecer tão boa quanto ela é.",
     body: "A Irex cria presença digital para empresas que precisam ser entendidas rápido, transmitir confiança e transformar interesse em conversa comercial. Estratégia, design e execução trabalhando juntos para o negócio parecer tão bom online quanto é na prática.",
     resultBadge: { value: "+ clareza", label: "para decidir, confiar e chamar" },
     flowChips: ["Presença digital", "Atendimento comercial", "Resultados mensuráveis"],
   }
   ```
2. Escrever `tests/unit/about-section.test.tsx` (RED): testa renderização do eyebrow, título, painel escuro.
3. Criar `AboutBrandPanel.tsx` (Server Component): painel decorativo escuro (cornerRadius 40, shadow, chips).
4. Criar `AboutSection.tsx` (Server Component): layout 2 colunas, hairline topo, watermark IREX, copy + painel.
5. Atualizar `HomePage.tsx`: adicionar `<AboutSection />` como segunda seção (após Hero, antes de Services). Remover `<TestimonialsSection />`.
6. Remover `TestimonialsSection.tsx` e dados `testimonials` de `home-content.ts`.
7. Verificar testes GREEN + `npm run test`.

---

### US4 — Seções de Conteúdo (P2)

**Dependência**: US1 (tokens). Pode ser executada em paralelo com US3.

**Ordem de execução**:

#### 4a. home-content.ts — Atualização de Cópias

- Service titles: ver data-model.md tabela de títulos
- `spotlight.eyebrow`: "ATENDIMENTO COMERCIAL"
- `spotlight.title`: "Respostas mais rápidas para transformar conversas em oportunidades."
- `spotlight.body`: "Organize seus canais, responda com consistência e crie uma experiência mais clara para quem chega até sua empresa."
- `process.title`: "Um processo claro para tirar sua presença digital do papel."

#### 4b. ServicesSection.tsx

- Cards: `rounded-[22px]` (era `rounded-2xl`), `p-6` → `p-[24px]`, `gap-3.5` → `gap-[14px]`
- Icon shell: `bg-[#DDF4FA] border border-[#B9DEE8]` (era apenas `bg-[var(--irex-accent-soft)]`)
- Title: `text-[15px] font-bold` (era `text-lg`)
- Body: `text-[13px] text-[#64747C] leading-[1.45]` (era `text-base`)
- Section bg: gradient `from-[#F6FBFD] to-[#ECF6F9]` (era `var(--irex-surface)`)
- Padding: `py-[84px] px-[56px]` no desktop

#### 4c. ProcessSection.tsx

- Step card: `rounded-[24px] p-[22px] border border-[var(--irex-border)] shadow-[0_10px_28px_-22px_rgba(6,16,20,0.14)]`
- Número: `border-2 border-[var(--irex-accent)]` (adicionar borda ciano ao círculo escuro existente)
- Gap entre steps: `gap-[14px]`
- Bg da seção: `bg-white` (já correto, manter)
- Padding: `py-[86px] px-[56px]` no desktop

#### 4d. WhatsAppSpotlight.tsx

- Eyebrow: `text-[11px] font-[800] tracking-[0.09em] text-[#B9F7FF]` (era gold)
- Botão primário: `fill: #44B8D2` com glow shadow
- Manter fundo escuro e layout de 2 colunas existente

#### 4e. BlogInsightsSection.tsx, ContactSection.tsx, ProfessionalFooter.tsx

- Padding ajustado via tokens
- Inputs do contact: `bg-[var(--irex-canvas)] border-[var(--irex-border-icon)]` (F6FBFD / B9DEE8)
- Botão "Chamar no WhatsApp": `bg-[var(--irex-ink)]` dark (era `--irex-success` verde)
- Botão "Enviar mensagem": `bg-[var(--irex-accent)]` ciano
- Footer: gap `28px`, padding `48px`

---

## Validação Final

```bash
npm run lint      # zero warnings
npm run test      # cobertura ≥ 80% nos componentes novos/alterados
npm run build     # zero erros

# Inspeção visual no browser:
# 1. Tokens: DevTools > console > getComputedStyle(document.documentElement)
# 2. Hero: fundo escuro, imagem visível, nav integrada, barra ciano base
# 3. About: segunda seção, gradiente, painel escuro
# 4. Services: cards r-22, icon shell DDF4FA
# 5. Process: steps com borda ciano no número
# 6. Spotlight: eyebrow B9F7FF
# 7. Contact: inputs F6FBFD, botão enviar ciano
# 8. Footer: fundo #061014, 4 colunas
```
