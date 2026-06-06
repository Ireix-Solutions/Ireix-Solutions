# Feature Specification: Fundação TDD — Test-Driven Development como Padrão Universal

**Feature Branch**: `000-tdd-foundation`

**Created**: 2026-06-06

**Status**: Draft — **Regra vinculante para todos os specs futuros**

**Input**: Decisão de arquitetura: TDD como metodologia obrigatória para toda implementação neste repositório, desde a fundação.

## Resumo Executivo

Este spec estabelece o **TDD (Test-Driven Development)** como metodologia obrigatória para **TODO** o código produzido neste repositório — novas funcionalidades, correções de bugs, refatorações e alterações em código existente. Nenhum código de produção pode ser escrito sem que seu teste correspondente seja escrito primeiro (RED → GREEN → REFACTOR).

A partir deste spec, **todos os futuros specs** do projeto devem incluir:
- Uma seção de "Testing" no spec.md com cenários de teste definidos
- Tasks de teste na fase RED de cada implementação
- Tasks de validação de cobertura na fase de entrega
- O Constitution Check deve incluir um gate TDD obrigatório

## User Scenarios & Testing *(mandatory)*

### User Story 1 — TDD é Respeitado em Toda Implementação (Priority: P0)

Como desenvolvedor mantenedor deste repositório, quero que todo código produzido siga o ciclo RED → GREEN → REFACTOR, para garantir que cada linha de código de produção tenha um teste correspondente que a valide, reduzindo regressões e aumentando a confiança nas entregas.

**Why this priority**: P0 porque esta regra se aplica a todos os demais specs. Sem ela, não há garantia de qualidade.

**Acceptance Scenarios**:

1. **Given** uma nova funcionalidade sendo implementada, **When** o desenvolvedor cria código de produção, **Then** o teste que valida essa funcionalidade foi escrito primeiro (RED), depois o código que faz passar (GREEN), depois a refatoração (REFACTOR).
2. **Given** um bug sendo corrigido, **When** o desenvolvedor altera o código, **Then** um teste que reproduz o bug (RED) foi escrito antes da correção (GREEN).
3. **Given** uma refatoração, **When** o código é alterado sem mudança de comportamento, **Then** os testes existentes continuam passando (GREEN).
4. **Given** um spec sendo criado, **When** o desenvolvedor inicia a implementação, **Then** o spec inclui cenários de teste na seção "Testing" e tasks de TDD nas fases de implementação.

### Edge Cases

- **Código legado sem testes**: Deve-se escrever testes de caracterização (characterization tests) ANTES de qualquer alteração para capturar o comportamento atual.
- **Hotfix urgente**: A regra RED-GREEN-REFACTOR continua valendo, mas o ciclo pode ser acelerado (ex: RED com teste mínimo, GREEN com a correção mais simples possível, REFACTOR opcional).
- **Configuração/boilerplate**: Scaffolding, configuração de ferramentas e arquivos de setup não exigem testes (ex: vitest.config.ts, tsconfig.json).

## Stack de Testes

| Camada | Ferramenta | Obrigatório? |
|--------|-----------|:---:|
| **Unitário** | Vitest + @testing-library/react | ✅ Sim |
| **Componente/React** | Vitest + @testing-library/react + jsdom | ✅ Sim |
| **Integração** | Vitest | ✅ Se houver interação entre módulos |
| **E2E / Visual** | Playwright | ✅ Para fluxos críticos |
| **Build** | `npm run build` | ✅ Sempre |

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: TODO novo spec DEVE incluir uma seção "Testing" no spec.md com cenários de teste específicos.
- **FR-002**: TODO spec DEVE incluir tasks de teste na fase RED antes das tasks de implementação.
- **FR-003**: O Constitution Check DEVE incluir o gate "TDD obrigatório: RED → GREEN → REFACTOR foi seguido".
- **FR-004**: O AGENTS.md DEVE incluir a regra "TDD obrigatório: todo código de produção requer teste escrito primeiro."
- **FR-005**: O projeto DEVE ter Vitest instalado e configurado como framework de testes padrão.
- **FR-006**: Testes unitários e de componente DEVEM rodar com `npm run test` (ou `npm run test:unit`).
- **FR-007**: A cobertura mínima DEVE ser de 80% para código novo (não se aplica a código legado).
- **FR-008**: O CI DEVE rodar `npm run test` e `npm run build` antes de permitir merge.

### Key Entities

- **RED**: Escrever um teste que falha primeiro, definindo o comportamento esperado.
- **GREEN**: Escrever o código mínimo necessário para fazer o teste passar.
- **REFACTOR**: Melhorar o código sem alterar comportamento, mantendo os testes verdes.
- **Teste de Caracterização**: Teste escrito sobre código legado sem testes, capturando o comportamento atual antes de alterações.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Vitest está instalado e `npm run test` executa sem erros.
- **SC-002**: Pelo menos 1 teste de exemplo existe em `tests/unit/` para validar o setup.
- **SC-003**: A seção "Testing" está presente em todos os specs futuros.
- **SC-004**: O AGENTS.md contém a regra "TDD obrigatório".
- **SC-005**: O Constitution Check template inclui o gate TDD.

## Impacto nos Specs Existentes

- `specs/001-home-prototype-page` — Não retroage, mas alterações futuras neste spec exigem TDD.
- `specs/002-services-value-reframe` — Não retroage.
- `specs/003-animations-site-vivo` — Não retroage.

## Dependências

- `vitest` — Framework de testes
- `@testing-library/react` — Testes de componentes React
- `@testing-library/jest-dom` — Matchers DOM customizados
- `jsdom` — Ambiente DOM para Node.js
- `@playwright/test` — Testes E2E (opcional por enquanto)