<!--
Sync Impact Report
Version change: 1.0.0 -> 1.1.0
Bump type: MINOR — novo princípio adicionado (VI. Clean Code e Qualidade de
  Código); expansão material do Princípio II com regras de reaproveitamento
  mais estritas (MUST NOT para duplicação sem justificativa).
Modified principles:
- II. Arquitetura SOLID e Componentizacao ->
  II. Arquitetura SOLID, Componentizacao e Reaproveitamento
  (inventário de reuso obrigatório no plano; MUST NOT duplicação não justificada)
Added sections:
- VI. Clean Code e Qualidade de Código (novo princípio)
Removed sections:
- Nenhum
Templates requiring updates:
- ✅ UPDATED .specify/templates/plan-template.md
  (Constitution Check: Clean Code adicionado; reaproveitamento reforçado)
- ✅ UPDATED .specify/templates/spec-template.md
  (FR-CODE adicionado como requisito funcional padrão)
- ✅ UPDATED .specify/templates/tasks-template.md
  (Notes: Clean Code adicionado; inventário de componentes como tarefa obrigatória)
- ⚠ .specify/templates/commands/*.md — diretório não presente neste projeto; ignorado.
Follow-up TODOs:
- Nenhum placeholder pendente.
-->
# IREX Site Constitution

## Core Principles

### I. Fonte Principal da Presença Web IREX

Este repositório MUST ser tratado como a fonte principal de verdade para a
presença web da IREX. Toda feature, conteúdo, metadata, asset público e
integração exposta ao usuário MUST preservar coerência de marca, informação e
mensagem institucional. Alterações que impactem posicionamento, oferta, copy
estratégica ou navegação principal MUST declarar a fonte do conteúdo e o impacto
esperado em SEO, conversão e experiência.

Rationale: o site principal é o ponto canônico de descoberta, confiança e
conversão da marca; divergência entre código, conteúdo e SEO dilui autoridade.

### II. Arquitetura SOLID, Componentização e Reaproveitamento

Código de aplicação MUST seguir os cinco princípios SOLID e manter separação
clara de responsabilidades e baixo acoplamento. Antes de criar qualquer
componente, hook, serviço ou helper, a implementação MUST verificar se já existe
equivalente reutilizável no projeto — essa verificação MUST ser documentada no
plano com resultado explícito (reuso confirmado ou justificativa para novo
artefato). Duplicação de UI, lógica ou estilos MUST NOT ocorrer sem justificativa
registrada no Complexity Tracking do plano.

Componentes compartilhados entre rotas MUST viver em `components/`, com uma pasta
por componente quando houver arquivo principal, estilos, testes, tipos ou
subcomponentes associados. Componentes exclusivos de uma página MUST ficar
colocados na própria rota em `app/**/components/` ou `app/**/_components/`, junto
do `page.tsx` que os consome. Cada componente MUST ter responsabilidade única,
ser independentemente testável e não carregar dependências desnecessárias de
outras rotas ou domínios.

Rationale: componentes pequenos, localizados e reutilizáveis reduzem regressão,
evitam proliferação de código paralelo e mantêm a evolução visual e funcional
do site coerente com o mínimo de esforço de manutenção.

### III. Segurança OWASP por Padrão

Toda mudança MUST aplicar as boas práticas do OWASP Top 10 nas camadas afetadas.
Entradas de usuário, parâmetros de rota, payloads de Server Actions e Route
Handlers MUST ser validados com Zod ou schema equivalente aprovado antes de
qualquer processamento. Segredos MUST permanecer no servidor e MUST NOT usar
prefixo `NEXT_PUBLIC_` salvo quando a exposição ao cliente for intencional e
documentada. Código server-only MUST ficar isolado da camada cliente; dados
enviados para Client Components MUST ser DTOs mínimos e seguros, sem expor
estruturas internas.

Endpoints e Server Actions MUST ser enxutos: validar entrada com Zod, aplicar
autorização quando houver contexto de usuário, delegar regras de negócio para
serviços ou entidades, e retornar respostas consistentes. Regras de negócio
complexas MUST NOT ficar diretamente em endpoints, componentes de página ou
handlers de formulário. Toda feature que tocar autenticação, autorização, upload,
redirecionamento ou dados sensíveis MUST documentar o vetor OWASP mitigado.

Rationale: segurança no App Router depende de fronteiras explícitas entre
cliente, servidor, dados e regras de negócio; validar tarde ou misturar camadas
aumenta risco de vazamento, injeção e autorização incorreta.

### IV. Next.js App Router, SEO e Performance

Novas rotas MUST usar o App Router em `app/` e os guias locais de
`node_modules/next/dist/docs/` MUST ser consultados antes de mudanças que toquem
APIs, convenções, renderização, cache, metadata, imagens, scripts, Route
Handlers ou Server Actions. Server Components MUST ser o padrão; Client
Components MUST ser usados somente quando houver interatividade de navegador e
a escolha MUST ser justificada no plano.

Toda página indexável MUST definir metadata única, semântica HTML apropriada,
conteúdo crawlable, imagem social quando aplicável e estratégia de sitemap e
robots compatível com a intenção de indexação. Implementações MUST otimizar
Core Web Vitals, usar `next/image`, `next/font`, `next/link` e `next/script`
quando aplicável, evitar waterfalls de dados, justificar renderização dinâmica e
preservar performance de build e runtime.

Rationale: SEO e performance são requisitos centrais do produto, não tarefas de
polimento; as convenções do Next.js mudam e devem guiar a implementação real.

### V. Design System e Experiência Responsiva

Qualquer interface nova ou alterada MUST consultar e seguir
`docs/designer-system.md` antes da implementação. Tokens, hierarquia tipográfica,
padrões de componentes, espaçamento, estados e comportamento responsivo MUST ser
respeitados, ou a exceção MUST ser registrada com motivo. Interfaces MUST ser
mobile-first, acessíveis, sem sobreposição de texto, com HTML semântico,
contraste adequado, navegação previsível e estados visuais claros. Componentes
novos MUST nascer individualizados, testáveis e alinhados ao design system.

Rationale: consistência visual e acessibilidade sustentam confiança, leitura,
conversão e manutenção do site em longo prazo.

### VI. Clean Code e Qualidade de Código

Todo código produzido MUST seguir os princípios de Clean Code. Nomes de
variáveis, funções, tipos, constantes e arquivos MUST ser descritivos e revelar
intenção sem necessidade de comentário explicativo. Funções e métodos MUST ter
responsabilidade única; funções com mais de 20 linhas de lógica efetiva MUST ser
candidatas imediatas a extração. Comentários MUST ser reservados apenas para o
"por quê" não óbvio — workarounds, invariantes ocultas, restrições externas — e
MUST NOT descrever o que o código já expressa.

Código morto, variáveis não utilizadas, imports desnecessários e abstrações
prematuras MUST NOT ser introduzidos ou deixados em produção. DRY (Don't Repeat
Yourself) MUST ser aplicado: a terceira repetição de um padrão é o gatilho
obrigatório para extração de abstração. Magic numbers e strings literais
repetidos MUST ser extraídos para constantes nomeadas. O tratamento de erros MUST
ser explícito: erros MUST ser capturados, tipados e respondidos de forma
consistente — MUST NOT silenciar exceções sem intenção documentada.

TDD é a prática de qualidade central do projeto: todo código de produção novo
exige teste escrito primeiro (RED → GREEN → REFACTOR). Cobertura mínima de 80%
para código novo. `npm run test` MUST passar antes de qualquer commit. Ver
`specs/000-tdd-foundation/` para detalhes e guias de execução.

Rationale: Clean Code reduz carga cognitiva de leitura, facilita revisão,
acelera onboarding e diminui superfície de bugs; num site institucional com
time enxuto e ritmo contínuo de manutenção, código claro é vantagem competitiva.

## Estrutura Obrigatória do Projeto

O projeto MUST manter Next.js App Router como arquitetura principal. `app/` MUST
conter rotas, layouts, pages, metadata files e handlers de rota. O arquivo
`app/**/page.tsx` representa a página individual de uma rota. Componentes globais
e reutilizáveis MUST ficar em `components/<ComponentName>/` quando tiverem mais
de um arquivo ou responsabilidade pública. Componentes usados por uma única rota
MUST ficar dentro da própria rota, preferencialmente em
`app/<segment>/components/` ou `app/<segment>/_components/`.

Backend interno, quando necessário, MUST ser separado por responsabilidade em
pastas como `lib/`, `services/`, `entities/`, `repositories/`, `schemas/` e
`app/api/**/route.ts`, mantendo orientação a objetos para regras de negócio,
serviços e entidades quando houver domínio relevante. Route Handlers e Server
Actions MUST depender de schemas e serviços, não conter regras complexas.

Assets públicos MUST ficar em `public/` ou nas convenções de metadata do App
Router quando forem favicon, icon, Open Graph, Twitter image, sitemap, robots ou
manifest. Estilos globais MUST permanecer restritos a base, tokens e reset; UI
específica MUST ficar no componente ou na rota que a possui.

## Fluxo de Desenvolvimento e Qualidade

Toda spec e plano MUST declarar impacto em SEO, performance, segurança OWASP,
Clean Code, componentização, design system e estrutura de rotas. Toda feature
MUST definir critérios de aceite independentes e verificáveis, incluindo
validação visual ou responsiva quando tocar UI.

Antes de implementar qualquer componente, serviço ou helper, o plano MUST
documentar o inventário de artefatos existentes e registrar reuso confirmado ou
justificativa fundamentada para criação de novo artefato. Mudanças em endpoints,
Server Actions, formulários ou dados MUST incluir validação de entrada com Zod,
cenários de erro e estratégia de autorização quando aplicável.

Todo código novo MUST seguir o ciclo TDD (RED → GREEN → REFACTOR) e passar em
`npm run lint` e `npm run build` antes de qualquer commit, salvo bloqueio
documentado. Nomes de símbolos, arquivos, rotas e variáveis MUST seguir Clean
Code: descritivos, sem abreviações obscuras, sem números mágicos inline. Funções
extraídas de lógica complexa MUST ser colocadas no serviço ou helper de domínio
correspondente, não inline no componente ou handler.

Quando a mudança afetar UI, MUST haver verificação em viewport mobile e desktop.
Quando afetar SEO, MUST haver revisão de metadata, headings, links internos,
indexação, sitemap/robots quando pertinente e conteúdo renderizado para crawlers.

## Governance

Esta constituição supersede práticas conflitantes em templates, specs, planos,
tasks, README e instruções operacionais do projeto. Alterações futuras MUST ser
feitas em `.specify/memory/constitution.md` e propagadas para templates e docs
dependentes no mesmo conjunto de mudanças.

Amendments MUST incluir motivo, impacto esperado, arquivos sincronizados e tipo
de bump semântico. MAJOR se aplica a remoção ou redefinição incompatível de
princípios; MINOR se aplica a novos princípios, seções ou expansão material de
governança; PATCH se aplica a clarificações sem mudança semântica. Toda revisão
de plano, spec, tarefa ou PR MUST verificar conformidade com esta constituição.
Violações deliberadas MUST ser registradas em Complexity Tracking com motivo,
alternativa mais simples rejeitada e risco aceito.

**Version**: 1.1.0 | **Ratified**: 2026-06-05 | **Last Amended**: 2026-06-28
