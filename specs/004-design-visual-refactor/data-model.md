# Data Model: Refatoração Visual para Fidelidade ao Design Pencil

**Feature**: `004-design-visual-refactor`
**Date**: 2026-06-28

---

## Entidades de Conteúdo

### AboutContent (nova seção Quem Somos)

Adicionada em `homePageContent` em `home-content.ts`.

```
AboutContent {
  eyebrow: string            // "QUEM SOMOS" — label uppercase com letterSpacing
  title: string              // "Digital que faz sua empresa parecer tão boa quanto ela é."
  body: string               // parágrafo editorial (max 3 linhas, ~200 chars)
  resultBadge: {
    value: string            // "+ clareza"
    label: string            // "para decidir, confiar e chamar"
  }
  flowChips: string[]        // 3 chips no painel: ex. "Presença digital", "Atendimento", "Resultados"
}
```

### HeroContent (atualização)

Campos existentes em `homePageContent.hero` que mudam:

```
HeroContent {
  // Remove: visual.label (HeroVisual removido)
  // Remove: overlayTitle, overlayBody (overlay card removido)
  // Mantém: chips, title, body, ctas, metrics
}
```

### ServiceItem (atualização de cópias)

Os 9 itens de serviço têm títulos novos conforme o design. Estrutura não muda, apenas o conteúdo:

| # | Título anterior (código) | Título novo (design) |
|---|---|---|
| 1 | Sites profissionais | Sites que vendem |
| 2 | Sistemas web | Sistemas para organizar |
| 3 | Interfaces modernas e responsivas | Experiências digitais |
| 4 | Infraestrutura e APIs | Integrações seguras |
| 5 | Automações | Automação de processos |
| 6 | IA para empresas | Atendimento inteligente |
| 7 | WhatsApp Business API | WhatsApp comercial |
| 8 | SEO e performance | SEO e performance *(igual)* |
| 9 | MVPs e consultoria | Evolução contínua |

### SpotlightContent (atualização de cópias)

```
SpotlightContent {
  eyebrow: string   // "ATENDIMENTO COMERCIAL" (era "WHATSAPP + IA")
  title: string     // "Respostas mais rápidas para transformar conversas em oportunidades."
  body: string      // "Organize seus canais, responda com consistência..."
  // Outros campos mantidos
}
```

### ProcessContent (atualização de título)

```
ProcessContent {
  title: string   // "Um processo claro para tirar sua presença digital do papel." (novo)
  // Outros campos mantidos
}
```

---

## Tokens de Design (Design Tokens)

Representados como variáveis CSS em `globals.css`. Tabela completa de alterações:

| Token CSS | Valor anterior | Valor novo | Origem no design |
|---|---|---|---|
| `--irex-ink` | `#0a1317` | `#061014` | Node fill `#061014` (hero, footer, ink-deep) |
| `--irex-accent` | `#0064e0` | `#43A3BE` | Nó a4Ryo (Hero Bottom Accent fill) |
| `--irex-accent-strong` | `#0143b5` | `#258CA6` | Eyebrow fill `#258CA6` (Services, Process, Contact) |
| `--irex-accent-soft` | `#eaf2ff` | `#DDF4FA` | Service Icon Shell fill `#DDF4FA` |
| `--irex-surface` | `#f5f6f7` | `#F6FBFD` | Services section bg (pos:0) e inputs |
| `--irex-border` | `#edf0f2` | `#D6E8EE` | Service card stroke, Process step stroke |
| `--irex-muted` | `#64717c` | `#53636C` | Section body text (Quem Somos, Process body) |
| `--irex-gold` | `#ffd84d` | REMOVIDO | Não existe no design IREX |
| `--irex-secondary-text` | *novo* | `#64747C` | Service card copy fill `#64747C` |
| `--irex-canvas` | *novo* | `#F6FBFD` | Input background (formulário) |
| `--irex-cyan-on-dark` | *novo* | `#B9F7FF` | Spotlight eyebrow e badge accent |
| `--irex-border-icon` | *novo* | `#B9DEE8` | Service icon shell stroke |

---

## Componentes: Inventário de Reuso

### Reaproveitados (sem mudança de interface)

| Componente | Localização | Reuso confirmado |
|---|---|---|
| `FadeInView` | `shared/fade-in-view.tsx` | Sim — todas as seções novas |
| `StaggerContainer` + `StaggerItem` | `shared/stagger-container.tsx` | Sim — ServicesSection |
| `animation-config.ts` | `shared/animation-config.ts` | Sim — todas as seções |
| `BlogInsightsSection` | `_components/` | Sim — apenas atualização de padding/tokens |
| `ContactSection` | `_components/` | Sim — atualização de estilos do formulário |
| `ProfessionalFooter` | `_components/` | Sim — ajuste de tokens |

### Reaproveitados com alteração de interface

| Componente | Alteração | Justificativa |
|---|---|---|
| `TopNavigation` | Adicionar prop `embedded?: boolean` | Comportamento transparente dentro do hero |
| `SectionBackdrop` | Substituir `#0064e0` → `#43A3BE` nas cores internas | Alinhamento de tokens |

### Novos componentes (justificados)

| Componente | Localização | Justificativa |
|---|---|---|
| `AboutSection` | `_components/AboutSection.tsx` | Seção nova; sem equivalente existente |
| `AboutBrandPanel` | `_components/AboutBrandPanel.tsx` | Subcomponente visual específico da seção About; não reutilizável |

### Removidos

| Componente | Justificativa |
|---|---|
| `TestimonialsSection` | Substituída por `AboutSection`; não aparece no design |
| `HeroVisual` | Hero passa a usar imagem real; componente vira código morto |
| `HeroParticles` | Idem — removido com HeroVisual |

---

## Validações e Restrições

- Não há mutations de dados do servidor nesta feature.
- Não há formulários novos — `ContactForm.tsx` existente é mantido com atualização de estilos.
- A imagem do hero é um asset estático em `public/` — sem upload ou exposição de URL externa.
- `homePageContent` é `as const` — readonly. Alterações de copy são diretas nos literais do arquivo.
