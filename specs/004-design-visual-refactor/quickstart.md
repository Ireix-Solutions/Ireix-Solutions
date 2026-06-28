# Quickstart: Refatoração Visual para Fidelidade ao Design Pencil

**Feature**: `004-design-visual-refactor`
**Branch**: `004-design-visual-refactor`

---

## Pré-requisitos

1. Node.js 22+ instalado.
2. Branch `004-design-visual-refactor` ativo (`git checkout 004-design-visual-refactor`).
3. Imagem do hero disponível em `public/images/home/hero-background.jpg` (ou `.png`).

### Copiar a imagem do hero

```bash
# A imagem foi baixada em sessão anterior:
cp ~/Área\ de\ trabalho/hero-background.jpg \
   public/images/home/hero-background.jpg
```

> Se o arquivo não existir, peça ao usuário para colocar a imagem gerada por IA em `public/images/home/hero-background.jpg`.

---

## Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` para ver a homepage.

---

## Validação Visual

Comparar cada seção com o design Pencil (Node ID: khBEU) usando o MCP do Pencil ou screenshots.

**Checklist de seções:**

- [ ] Hero: fundo `#061014`, imagem visível, nav integrada, accent bar ciano 4px na base
- [ ] Quem Somos: gradiente off-white, título grande à esquerda, painel escuro à direita
- [ ] Services: cards com `border-radius: 22px`, icon shell `#DDF4FA`, botão ciano
- [ ] Process: steps com círculo escuro + borda ciano `#43A3BE`, `cornerRadius: 24px`
- [ ] WhatsApp Spotlight: fundo escuro, eyebrow `#B9F7FF`, botão primário ciano
- [ ] Blog: layout mantido, tokens atualizados
- [ ] Contact: inputs `#F6FBFD`, botão WhatsApp escuro, botão Enviar ciano
- [ ] Footer: fundo `#061014`, padding 48px, 4 colunas

**Inspecionar tokens no browser:**

```js
// No DevTools console:
getComputedStyle(document.documentElement).getPropertyValue('--irex-accent')
// Esperado: " #43A3BE" (com espaço à esquerda)

getComputedStyle(document.documentElement).getPropertyValue('--irex-ink')
// Esperado: " #061014"
```

---

## Testes

```bash
# Rodar todos os testes
npm run test

# Cobertura
npm run test:coverage

# Watch mode para desenvolvimento
npm run test:watch
```

---

## Build e Lint

```bash
npm run lint
npm run build
```

Ambos devem passar sem erros antes de qualquer commit.

---

## Estrutura de Arquivos Afetados

```text
app/
├── globals.css                               # tokens de design atualizados
└── (pages)/(home)/_components/
    ├── HomePage.tsx                          # nova ordem de seções
    ├── HeroSection.tsx                       # hero full-bleed escuro
    ├── TopNavigation.tsx                     # prop embedded adicionada
    ├── AboutSection.tsx                      # NOVO — seção Quem Somos
    ├── AboutBrandPanel.tsx                   # NOVO — painel escuro decorativo
    ├── ServicesSection.tsx                   # tokens + estilos de card
    ├── ProcessSection.tsx                    # step cards com borda ciano
    ├── WhatsAppSpotlight.tsx                 # cópias + eyebrow ciano claro
    ├── BlogInsightsSection.tsx               # tokens
    ├── ContactSection.tsx                    # form + botão ciano
    ├── ProfessionalFooter.tsx                # tokens
    ├── SectionBackdrop.tsx                   # cores: azul → ciano
    ├── home-content.ts                       # cópias atualizadas + AboutContent
    ├── HeroVisual.tsx                        # REMOVER
    ├── HeroParticles.tsx                     # REMOVER
    └── TestimonialsSection.tsx               # REMOVER

public/
└── images/home/
    └── hero-background.jpg                   # imagem do hero (ação manual)

tests/unit/
    ├── about-section.test.tsx                # NOVO — testes TDD para AboutSection
    ├── hero-section.test.tsx                 # NOVO — testes do novo hero
    ├── hero-particles.test.tsx               # REMOVER (componente removido)
    ├── hero-visual.test.tsx                  # REMOVER (componente removido)
    └── section-backdrop.test.tsx             # ATUALIZAR cores
```

---

## Referências de Design

| Seção | Node ID | Pencil |
|---|---|---|
| Homepage completa | `khBEU` | Ireix Solution Website - Desktop |
| Hero Section | `T5QVGA` | 1440×690, fill `#061014` |
| Navegação | `dhsja` | y:0, h:78, padding [0,88] |
| Quem Somos | `kvV05` | h:720, gradient |
| Services Section | `sYzCk` | padding [84,56], gap 32 |
| Process Section | `QtmmJ` | padding [86,56], gap 40 |
| WhatsApp Spotlight | `DIH2p` | h:560, padding [64,56] |
| Blog Insights | `cZBho` | padding [76,48], gap 28 |
| Contact Section | `G8qZ1V` | padding [78,48], gap 32 |
| Footer | `tm3oE` | h:420, padding 48, gap 28 |
