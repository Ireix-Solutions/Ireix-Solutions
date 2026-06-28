## Overview

A Ireix Solution adota uma linguagem digital sóbria, técnica e confiável — adequada a uma empresa de software B2B que precisa transmitir competência antes de qualquer detalhe de produto. O canvas alterna entre seções claras (quase-branco tintado de ciano) e seções escuras (navy #061014), criando um ritmo visual de alternância que sinaliza mudança de assunto sem precisar de separadores visuais explícitos.

O accent ciano (#43A3BE) é a única cor de ênfase do sistema. Ele aparece nos CTAs primários, nas marcas de acento horizontal (hero bottom accent), nos glows decorativos e nas eyebrows de seção. A tipografia é inteiramente Montserrat, com hierarquia construída por peso e tamanho, não por família. Watermarks semi-transparentes da palavra "IREIX" reaparecem como elemento de profundidade em praticamente toda seção — é uma assinatura decorativa, não texto funcional.

**Características-chave:**
- Canvas claro (#F6FBFD → #EAF3F6) nas seções de conteúdo, intercalado com dark navy (#061014) em seções de impacto
- Único accent color: ciano #43A3BE para CTAs, accents e glows; #258CA6 para eyebrow labels de seção
- Montserrat como família universal, com pesos 400 / 600 / 700 / 800
- Cards com cornerRadius 22–28px, borda hairline #D6E8EE e padding 22–28px — sem sombras em cards de serviço, sombras sutis nos cards de destaque
- Eyebrows de seção em uppercase, letter-spacing 1.6px, 12px / 700, na cor #258CA6 (claro) ou #B9F7FF (escuro)
- Watermark decorativo "IREIX" em cada seção com opacity ~4% como elemento de profundidade

---

## Colors

> Extraídos diretamente do design `khBEU` (Ireix Solution Website - Desktop).

### Brand

| Token | Hex | Uso |
|---|---|---|
| `{colors.brand-dark}` | `#061014` | Cor de marca escura. Fundo do hero, footer, seções dark, texto principal no modo claro. |
| `{colors.brand-cyan}` | `#43A3BE` | Accent primário. CTAs primários, hero bottom accent, glows decorativos, traço de seção. |
| `{colors.brand-cyan-deep}` | `#258CA6` | Cyan mais escuro. Eyebrow labels nas seções claras. |
| `{colors.brand-cyan-bright}` | `#44B8D2` | Cyan vibrante. Usado pontualmente em efeitos de glow em painéis escuros. |
| `{colors.brand-cyan-light}` | `#B9F7FF` | Cyan muito claro. Eyebrow labels sobre fundo dark (ex.: WhatsApp Spotlight). |

### Surface

| Token | Hex | Uso |
|---|---|---|
| `{colors.canvas}` | `#F6FBFD` | Fundo primário de página e seções claras. |
| `{colors.canvas-white}` | `#FFFFFF` | Cards, painéis, formulários e seções de processo. |
| `{colors.surface-soft}` | `#F8FDFF` | Fundo de painéis internos (ex.: website preview no About panel). |
| `{colors.surface-gradient-start}` | `#F6FBFD` | Início dos gradientes de fundo de seção (topo). |
| `{colors.surface-gradient-end}` | `#EAF3F6` | Final dos gradientes de fundo de seção (base). |
| `{colors.surface-teal-mid}` | `#ECF6F9` | Ponto médio dos gradientes em seções de serviços. |
| `{colors.hairline}` | `#D6E8EE` | Borda de cards, separadores, inputs. 1px. |

### Text

| Token | Hex | Uso |
|---|---|---|
| `{colors.ink-deep}` | `#061014` | Texto primário de títulos e copy principal no canvas claro. |
| `{colors.ink-secondary}` | `#53636C` | Texto de corpo (parágrafos, descrições de seção). |
| `{colors.ink-on-dark}` | `#FFFFFF` | Texto sobre fundos dark (#061014). |
| `{colors.ink-body-dark}` | `#D7E5E9` | Texto de corpo no hero (sobre fundo dark com imagem). |
| `{colors.ink-eyebrow-dark}` | `#B9F7FF` | Eyebrow label em seções dark. |
| `{colors.ink-muted}` | `rgba(255,255,255,0.58)` | Texto de rodapé e legenda sobre dark (legal, stack). |

### Semantic

| Token | Hex | Uso |
|---|---|---|
| `{colors.overlay-dark-heavy}` | `#061014F2` | Overlay de imagem na base do gradiente (hero). |
| `{colors.overlay-dark-mid}` | `#061014B8` | Overlay de imagem no meio do gradiente. |
| `{colors.overlay-dark-light}` | `#06101426` | Overlay de imagem no topo do gradiente (hero). |
| `{colors.ghost-fill}` | `#FFFFFF12` | Fundo de botões ghost sobre dark. |
| `{colors.ghost-stroke}` | `#FFFFFF66` | Borda de botões ghost sobre dark. |

---

## Typography

### Font Family

**Montserrat** é a família exclusiva do sistema. Cobre todos os papéis — display, heading, body, caption, eyebrow e button. Uma variável `$font-secondary` é referenciada no rodapé para texto legal de menor hierarquia; presumir Montserrat como fallback até definição.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Uso |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 60px | 700 | 1.03 | 0 | Hero main title — título impactante acima do fold. |
| `{typography.display-lg}` | 56px | 600 | 1.04 | 0 | About / Quem Somos section title. |
| `{typography.display-md}` | 42px | 600 | 1.12 | 0 | Process section title. |
| `{typography.display-sm}` | 41–40px | 700 / 600 | 1.1–1.15 | 0 | WhatsApp Spotlight title / Contact title. |
| `{typography.heading-lg}` | 56px | 600 | 1.04 | 0 | Alias de display-lg para seções de conteúdo. |
| `{typography.body-lead}` | 18px | 400 | 1.52 | 0 | Hero body — descrição imediatamente abaixo do título hero. |
| `{typography.body-md}` | 17px | 400 | 1.5 | 0 | About body — parágrafos de seção. |
| `{typography.body-base}` | 16px | 400–500 | 1.5–1.55 | 0 | Texto de corpo padrão (process body, spotlight body, contact body). |
| `{typography.form-title}` | 15px | 700 | 1.3 | 0 | Título de formulário de contato. |
| `{typography.caption}` | 12px | 400 | — | 0 | Footer legal, footer stack. |
| `{typography.eyebrow}` | 12px | 700 | 1.3 | 1.6px | Labels de seção uppercase: "PROCESSO", "CONTATO" etc. (em claro: #258CA6). |
| `{typography.eyebrow-dark}` | 11–12px | 700–800 | 1.3 | 1.4–1.6px | Eyebrow sobre dark: "ATENDIMENTO COMERCIAL" (em #B9F7FF). |
| `{typography.watermark}` | 116–146px | 700 | — | 0 | Watermark decorativa "IREIX", opacity ~4%. Não é texto funcional. |

### Principles

- Headings de seção usam weight 600 (not 700) para grandes displays acima de 40px — isso cria leveza sem perder autoridade.
- Eyebrows são sempre **uppercase**, com `letterSpacing: 1.4–1.6px` e `fontWeight: 700–800`. São o único lugar onde letra-spacing é deliberadamente aumentado.
- O watermark "IREIX" reaparece em quase todas as seções com `opacity: 0.04` — é um elemento de identidade de marca, não de legibilidade.
- `lineHeight: 1.03` no hero é intencionalmente comprimido para exibição de grande título de uma linha. Não usar esse valor em texto longo.

---

## Layout

### Spacing System

- **Base unit**: 4px com incremento primário de 10–14px entre grupos de conteúdo interno.
- **Gap entre itens de card em coluna**: 14px.
- **Gap entre cards em fileira**: 18px.
- **Gap entre blocos de conteúdo dentro de seção**: 22–40px.
- **Gap entre colunas de seção (ex.: copy + painel)**: 40px (process: implícito por fill_container).

### Section Padding

| Seção | Padding Vertical | Padding Horizontal |
|---|---|---|
| Hero | — (clip, absoluto) | — |
| Quem Somos | implícito | — |
| Services | 84px | 56px |
| Process | 86px | 56px |
| WhatsApp Spotlight | 64px | 56px |
| Blog Insights | 76px | 48px |
| Contact | 78px | 48px |
| Footer | 48px | 48px |

### Grid & Container

- Desktop: **1440px** de largura fixa.
- Navegação: `padding: [0, 88px]` horizontal — os 88px garantem o recuo lateral da nav.
- Hero copy: `width: 640px`, `x: 104px` — posicionado à esquerda com margem interna de 104px.
- Seções de serviços: grid de 3 colunas via fileiras de frames com `gap: 18px`.
- Contact: split de 2 colunas (copy 500px + form fill_container) com gap 32px.
- Footer: 4 colunas (brand 420px + 3 × fill_container, sendo última 300px).

### Whitespace Philosophy

Seções claras respiram: padding vertical de 76–86px cria ritmo generoso entre blocos. Seções dark (Hero, WhatsApp Spotlight, Footer) são mais densas e usam a imagem ou a profundidade do dark como substituto visual do espaçamento. Watermarks decorativos preenchem espaço negativo sem adicionar peso de layout.

---

## Elevation & Depth

O sistema usa elevação com moderação. Cards de serviço, blog e processo são planos (sem sombra) para favorecer leveza. Sombras aparecem apenas em elementos de destaque (About Brand Panel, Process Steps, Contact Form, WhatsApp Mock).

| Nível | Tratamento | Uso |
|---|---|---|
| 0 (flat) | Sem sombra; borda `1px solid #D6E8EE` | Service cards, Blog cards, nav |
| 1 (subtle) | `shadow outer, blur 28, spread -22, y:10, color #06101424` | Process step cards |
| 2 (card medium) | `shadow outer, blur 34, spread -24, y:12, color #0610141F` | Contact form |
| 3 (panel strong) | `shadow outer, blur 60, spread -28, y:24, color #0610144D` | About Brand System Panel |
| 4 (modal/mock) | `shadow outer, blur 70, spread -22, y:28, color #00000080` | WhatsApp Mock |

### Decorative Depth

- **Glow ciano**: Elipses `#43A3BE` ou `#44B8D2` com `opacity: 0.12–0.28` posicionadas atrás de painéis dark para simular luz ambiente.
- **Watermark decorativo**: "IREIX" em Montserrat 700 com `opacity: 0.04–0.075` em toda seção — profundidade sem ruído.
- **Background blur**: WhatsApp mock usa `background_blur radius: 10` para efeito glassmorphism.
- **Gradiente de overlay de imagem**: Hero e Spotlight usam múltiplas camadas de gradiente (#061014 em diferentes opacidades e ângulos) para garantir leitura do texto sobre foto.

---

## Shapes

### Border Radius Scale

| Token | Value | Uso |
|---|---|---|
| `{rounded.sm}` | ~8px | Implícito em inputs menores. |
| `{rounded.lg}` | ~18px | Pill brand no About panel (cornerRadius 18). |
| `{rounded.xl}` | 22px | Service cards, Blog cards — formato padrão de card de conteúdo. |
| `{rounded.xxl}` | 24px | Process step cards, Chat shell interno do WhatsApp mock. |
| `{rounded.xxxl}` | 28px | Contact form, WhatsApp mock container. |
| `{rounded.feature}` | 32px | Premium Website Preview card (painel about). |
| `{rounded.section}` | 34px | WhatsApp mock outer shell. |
| `{rounded.panel}` | 40px | About Brand System Panel. |
| `{rounded.full}` | 100px / `$radius-full` | Botões pill, Nav Links container, WhatsApp CTA. |

---

## Components

### Buttons

**`button-primary-marketing`** — CTA primário ciano para seções de marketing.
- Background `{colors.brand-cyan}` (#43A3BE), texto branco (#FFFFFF), Montserrat 700, `{rounded.full}`.
- Usado em: "Montar meu projeto" (Services), variantes de CTA de seção.

**`button-secondary-ghost-dark`** — Botão ghost para uso sobre fundos dark.
- Background `{colors.ghost-fill}` (#FFFFFF12), stroke `{colors.ghost-stroke}` (#FFFFFF66) 1px, texto branco, Montserrat 700, `{rounded.full}`.
- Usado em: "Ver metodologia" (Process), CTAs do Spotlight.

**`button-primary-dark`** — CTA sólido dark para uso em canvas claro.
- Background `{colors.ink-deep}` (#061014), texto branco, `{rounded.full}`, padding `[14px, 22px]`.
- Usado em: WhatsApp CTA no contact, variantes inline.

**`button-secondary-outline`** — Botão outline em canvas claro.
- Background transparente, stroke `{colors.hairline}` ou `{colors.ink-deep}`, texto `{colors.ink-deep}`, `{rounded.full}`.
- Usado em: ações secundárias de seção.

### Cards

**`card-service`** — Card de serviço nas 3 fileiras de serviços.
- Background `{colors.canvas-white}`, cornerRadius 22px, padding 24px, stroke `{colors.hairline}` 1px, gap interno 14px, sombra desabilitada.
- Layout: vertical. Width: fill_container ou 429px (card mais estreito no layout 2/3).

**`card-process-step`** — Card de etapa no Process Section.
- Background `{colors.canvas-white}`, cornerRadius 24px, padding 22px, stroke `{colors.hairline}` 1px, gap 18px.
- Sombra: `shadow outer, blur 28, spread -22, y:10, color #06101424`.

**`card-blog`** — Card de artigo no Blog Insights.
- Background `{colors.canvas-white}`, cornerRadius 22px, padding 24px, stroke `{colors.hairline}` 1px, gap 14px, altura 278px.
- Layout: vertical. Width: fill_container.

**`card-contact-form`** — Formulário de contato.
- Background `{colors.canvas-white}`, cornerRadius 28px, padding 28px, stroke `{colors.hairline}` 1px, gap 14px.
- Sombra: `shadow outer, blur 34, spread -24, y:12, color #0610141F`.

**`panel-brand-dark`** — Painel dark da marca (About Section).
- Background `{colors.ink-deep}`, cornerRadius 40px, width 562px, height 520px.
- Sombra: `shadow outer, blur 60, spread -28, y:24, color #0610144D`.
- Contém: gradient radial de fundo, glows ciano, watermark "IREIX", pill da marca, preview do site, badges flutuantes.

**`card-whatsapp-mock`** — Mock do chat WhatsApp.
- Background `#F7FAFBEF`, cornerRadius 34px, padding 14px, stroke `#FFFFFF99` 1px.
- Efeitos: `background_blur radius:10` + `shadow outer blur:70 spread:-22 y:28 color:#00000080`.

### Navigation

**Top Navigation** — Barra no topo do hero, transparente sobre a imagem.
- Height: 78px, width: 1440px, padding `[0, 88px]`, layout horizontal, `justifyContent: space_between`.
- Esquerda: `Brand` (logo + nome), Centro: `Navigation Links` (cornerRadius 100, gap 28px), Direita: `Navigation Actions` (gap 24px).
- Background: `#00000000` (totalmente transparente).

### Section Anatomy

Toda seção segue a estrutura:
```
Section Frame (fill_container width, specific height ou layout vertical)
  ├── [opcional] Watermark decorativo "IREIX" (layoutPosition: absolute, opacity ~0.04)
  ├── [opcional] Accent shape (cornerRadius, fill, opacity ~0.055–0.085, layoutPosition: absolute)
  ├── Section Header (layout horizontal, justifyContent space_between)
  │   ├── Header Copy (layout vertical, gap 10)
  │   │   ├── Eyebrow Label (12px, 700, uppercase, letterSpacing 1.6, #258CA6)
  │   │   └── Section Title (40–56px, 600–700)
  │   └── [opcional] CTA Button
  └── Content Grid / Content Columns
```

### Eyebrow Labels

Elemento de identidade forte — aparece em toda seção informativa.
- Claro: `fontSize: 12`, `fontWeight: 700`, `fill: #258CA6`, `letterSpacing: 1.6`, `lineHeight: 1.3`, uppercase.
- Dark: `fontSize: 11–12`, `fontWeight: 700–800`, `fill: #B9F7FF`, `letterSpacing: 1.4–1.6`.
- Conteúdo: sempre descritivo da seção em capslock ("PROCESSO", "CONTATO", "ATENDIMENTO COMERCIAL").

### Footer

**`footer-professional`** — Rodapé dark com 4 colunas + barra legal.
- Background `$ink-deep` (#061014), padding 48px, gap 28px, altura 420px.
- Borda superior: `stroke top 1px $hairline-soft`.
- Watermark "IREIX" branco, opacity 4.5%, layoutPosition absolute.
- Colunas: Brand (420px) + Serviços (fill) + Empresa (fill) + Contato (300px), gap 36px.
- Rodapé inferior: altura 56px, borda superior `#FFFFFF1F` 1px, dois textos legais em `opacity: 0.58`.

---

## Hero Section Anatomy

O hero é a seção mais complexa do layout. Todos os filhos são posicionados absolutamente (`layout: none`).

```
Hero Section (T5QVGA) — 1440×690, fill #061014, clip true
  ├── Hero Full Bleed Image (wshpn) — rectangle 1440×690, fill: image
  ├── Hero Image Contrast Overlay (T32WLC) — rectangle 1440×690
  │     fill: [#0610148F solid, gradient linear rotation:270
  │            #061014F2 → #061014B8@45% → #06101426]
  ├── Hero Clean Copy (puGOM) — frame vertical, width 640, x:104, y:174, gap 22
  │   ├── Hero Editorial Eyebrow (mdinT) — frame horizontal, gap 12
  │   ├── Hero Main Title (c5wUT) — 60px/700, fill #FFFFFF, lineHeight 1.03
  │   ├── Hero Main Body (t1xRI) — 18px/400, fill #D7E5E9, lineHeight 1.52, width 545
  │   └── Hero Action Row (eyroT) — frame horizontal, gap 12, alignItems center
  ├── Hero Bottom Accent (a4Ryo) — frame 1440×4, fill #43A3BE, y:686
  └── Top Navigation (dhsja) — frame 1440×78, y:0, padding [0,88], transparent
```

**Overlay de contraste**: dupla camada (sólido + gradiente direcional) garante leitura de texto branco sobre qualquer fotografia.

**Bottom accent ciano**: linha de 4px na cor `{colors.brand-cyan}` no rodapé do hero — assinatura visual da transição de seção.

---

## Responsive Behavior

### Breakpoints (referência de design)

| Nome | Largura | Comportamento previsto |
|---|---|---|
| Desktop | 1440px | Layout atual documentado. Padrão do design. |
| Tablet | 768–1023px | Grid de serviços colapsa de 3 para 2 colunas. Split de contact empilha. |
| Mobile | < 768px | Single column. Nav vira hambúrguer. Hero copy ocupa full width. |

### Touch Targets

- Botões pill: padding `[14px, 22–30px]` — altura efetiva ≥ 44px.
- Links de navegação: gap 28px entre itens dentro do container de nav links.

---

## Do's and Don'ts

### Do
- Usar `{colors.brand-cyan}` (#43A3BE) para o **único** CTA primário de cada seção. A escassez do ciano é o que lhe confere peso.
- Eyebrows em uppercase com `letterSpacing: 1.6px` — é a marca registrada das seções da Ireix.
- Adicionar watermark "IREIX" em `opacity: 0.04` como elemento de profundidade em toda nova seção.
- Usar `cornerRadius: 22–28px` em cards de conteúdo para manter consistência visual de "borda suave mas não pill".
- Borda `1px solid #D6E8EE` em cards no canvas claro — nunca omitir a borda em cards sobre fundo branco.
- Usar o gradiente de overlay duplo (sólido + direcional) sempre que houver imagem de fundo com texto sobreposto.
- Manter `{colors.ink-secondary}` (#53636C) para parágrafos — nunca usar preto puro em texto de corpo.

### Don't
- Não usar o ciano (#43A3BE) como cor de texto em canvas claro — é exclusivo de CTAs, accents e glows.
- Não omitir o hero bottom accent (linha ciano de 4px) — é um separador de identidade.
- Não criar cards sem borda sobre fundos brancos — a borda hairline define a forma sem sombra.
- Não usar `fontWeight: 500` — o sistema usa apenas 400 (body), 600 (display), 700 (heading/button), 800 (eyebrow especial).
- Não misturar famílias tipográficas — Montserrat para tudo até definição formal de `$font-secondary`.
- Não aplicar sombras em cards de serviço ou blog — a leveza flat é intencional nessas grades.
- Não usar o dark (#061014) como fundo de seção de conteúdo longo — reservar para hero, spotlight e footer.

---

## Known Gaps

- A variável `$font-secondary` é referenciada no rodapé mas não está definida — confirmar se é Montserrat ou uma família alternativa para microcopy.
- Estados de hover, focus e pressed dos botões não foram extraídos do design — implementar seguindo: primary → 10% escurecer o ciano; ghost → aumentar opacity do fill de 12% para 20%.
- Estados de input (focus, error, disabled) do formulário de contato não estão especificados no design — adotar `stroke 2px #43A3BE` no focus e `stroke 1px #E53E3E` no erro.
- Comportamento mobile não está desenhado — definir como os grids de 3 colunas de serviços colapsam para 1 coluna, e como o split contact/form empilha.
- Animações e transições não documentadas — recomendar 200ms ease-out para entradas de seção e 150ms ease-in-out para interações de botão.
- O `$radius-full` usado no WhatsApp CTA é uma variável de token — confirmar valor numérico (presumido: 100px).
