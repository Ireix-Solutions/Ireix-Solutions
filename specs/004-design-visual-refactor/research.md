# Research: Refatoração Visual para Fidelidade ao Design Pencil

**Feature**: `004-design-visual-refactor`
**Date**: 2026-06-28

---

## Decisão 1: Estratégia de Background Image no Hero

**Decision**: Usar `<Image>` do Next.js com `fill` e `priority` como camada base do hero, não CSS `background-image`.

**Rationale**: `next/image` com `fill` gera automaticamente `<link rel="preload">` para a imagem, evita CLS e permite WebP/AVIF automático. É a forma canônica do App Router para imagens above-the-fold. O overlay gradiente é implementado como camada CSS absoluta sobre a imagem.

**Alternatives considered**:
- CSS `background-image` via style inline: sem preload automático, sem otimização de formato, prejudica LCP.
- `<img>` nativo: sem otimização de tamanho/formato do Next.js.

---

## Decisão 2: TopNavigation Integrada vs. Header Separado

**Decision**: Mover `TopNavigation` para dentro do `HeroSection` como elemento posicionado absolutamente no topo do hero (z-index elevado). Remover o `<header>` separado e a lógica de sticky scroll do topo da página.

**Rationale**: O design Pencil (Node dhsja) mostra a navegação como filho direto do frame do hero (y:0, height:78), não como header externo. A navegação integrada com fundo transparente sobre a imagem do hero é o padrão editorial escuro. Após o hero, a página pode ter uma navegação fixa no topo se necessário (pode ser adicionada como scroll-triggered posterior).

**Alternatives considered**:
- Manter TopNavigation como `<header>` sticky: viola o design aprovado; cria sobreposição visual com o hero.
- Duplicar TopNavigation: viola DRY.

**Implementation note**: O componente `TopNavigation` recebe uma prop `embedded?: boolean` que remove o comportamento sticky e o fundo branco, tornando-o transparente para uso dentro do hero.

---

## Decisão 3: Estrutura do AboutSection (Quem Somos)

**Decision**: Criar `AboutSection.tsx` como Server Component (sem estado, sem interatividade) em `app/(pages)/(home)/_components/`. Usar CSS Grid com duas colunas no desktop. O `AboutBrandPanel` (painel escuro direito) é um subcomponente co-localizado.

**Rationale**: A seção é puramente informacional. Server Component elimina bundle JS desnecessário. O `AboutBrandPanel` contém apenas elementos visuais decorativos — não reutilizável em outras seções, portanto co-localizado.

**Alternatives considered**:
- Client Component: desnecessário — nenhuma interatividade ou state.
- Componente compartilhado em `components/`: o painel é específico desta seção, violaria o princípio de co-localização.

---

## Decisão 4: Atualização dos Tokens de CSS

**Decision**: Atualizar diretamente `app/globals.css`, alterando os valores das variáveis CSS existentes. Não criar um sistema de temas ou arquivo de tokens separado.

**Rationale**: O projeto tem uma única marca (IREX). Tokens como arquivo separado (design-tokens.css) adicionaria uma camada de indireção sem benefício para um projeto single-brand. A mudança é pontual e rastreável via git diff.

**Tokens a alterar**:
- `--irex-ink: #0a1317` → `#061014`
- `--irex-accent: #0064e0` → `#43A3BE`
- `--irex-accent-strong: #0143b5` → `#258CA6`
- `--irex-accent-soft: #eaf2ff` → `#DDF4FA`
- `--irex-surface: #f5f6f7` → `#F6FBFD`
- `--irex-border: #edf0f2` → `#D6E8EE`
- `--irex-muted: #64717c` → `#53636C`
- `--irex-gold: #ffd84d` → REMOVER
- ADICIONAR `--irex-secondary-text: #64747C` (corpo dos cards de serviço)
- ADICIONAR `--irex-canvas: #F6FBFD` (alias semântico para fundos de input)

**Tokens a preservar (sem mudança)**:
- `--irex-success`, `--irex-danger`, `--irex-input-border` (form validation)
- `--irex-text-soft`, `--irex-text-subtle` (podem ser ajustados, mas não estão em conflito crítico)

---

## Decisão 5: SectionBackdrop — Atualização de Cores

**Decision**: Atualizar `SectionBackdrop.tsx` para usar `#43A3BE` (ciano) ao invés de `#0064e0` (azul Meta) em todas as referências hardcoded.

**Rationale**: O componente tem as cores hardcoded como constantes internas (não via CSS var). A mudança é simples substituição de valor.

---

## Decisão 6: Ordem das Seções

**Decision**: A ordem das seções em `HomePage.tsx` MUST ser atualizada para:
1. HeroSection (com TopNavigation integrada)
2. AboutSection (Quem Somos) — posição 2, logo após o hero
3. ServicesSection
4. ProcessSection
5. WhatsAppSpotlight
6. BlogInsightsSection
7. ContactSection
8. ProfessionalFooter

**Rationale**: O design Pencil (khBEU) lista os filhos nessa ordem exata. A Testimonials está na posição errada (6) e será removida.

---

## Decisão 7: Remoção de HeroVisual e HeroParticles

**Decision**: Remover `HeroVisual.tsx` e `HeroParticles.tsx` após migração para hero com background image real. Remover também os testes unitários correspondentes e a dependência `@tsparticles`.

**Rationale**: Os componentes existem apenas para o hero conceitual (ilustração + partículas animadas). Com o hero novo baseado em imagem fotográfica real, esses elementos visuais não aparecem no design aprovado. Manter seria código morto.

**Verification needed**: Verificar se `@tsparticles/react` e `@tsparticles/slim` têm outros usos no projeto antes de remover do `package.json`.

---

## Decisão 8: Estratégia de Testes (TDD)

**Decision**: Para cada componente novo (`AboutSection`) e cada componente significativamente alterado (`HeroSection`, `ServicesSection`, `ProcessSection`, `SectionBackdrop`, `globals.css tokens`), escrever testes de caracterização ANTES das alterações, verificar que passam (descrevem o comportamento atual), depois alterar o componente para o novo comportamento, garantir que os testes do novo comportamento passam.

**Para código legado alterado**: Testes de caracterização BEFORE + testes do novo comportamento AFTER.
**Para `AboutSection` (novo)**: RED → GREEN → REFACTOR.

**Test framework**: Vitest + @testing-library/react (já configurados no projeto).

---

## Decisão 9: Imagem do Hero — Arquivo Local

**Decision**: A imagem gerada por IA (`ChatGPT Image 28 de jun. de 2026, 09_15_07.png`) deve ser renomeada para `hero-background.jpg` (ou `.png`) e colocada em `public/images/home/hero-background.jpg` antes da implementação. No código, referenciada como `/images/home/hero-background.jpg`.

**Rationale**: A imagem já existe no sistema do usuário (`~/Área de trabalho/hero-background.jpg` foi baixada na sessão anterior). Mover para `public/` é necessário para servir via Next.js.

---

## Resumo de Unknowns Resolvidos

| Unknown | Resolução |
|---|---|
| Como carregar a imagem do hero? | `next/image` com `fill` + `priority` |
| TopNavigation separada ou embutida? | Embutida no HeroSection com prop `embedded` |
| AboutSection: Client ou Server Component? | Server Component |
| Tokens: arquivo separado ou globals.css? | Alterar globals.css diretamente |
| SectionBackdrop cores? | Substituir `#0064e0` por `#43A3BE` |
| Ordem das seções? | Hero → About → Services → Process → WA → Blog → Contact → Footer |
| O que fazer com HeroVisual/HeroParticles? | Remover (código morto após hero com imagem real) |
| Testes: estratégia? | Caracterização para legado + TDD para componentes novos |
