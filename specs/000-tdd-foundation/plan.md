# Implementation Plan: Fundação TDD — Test-Driven Development como Padrão Universal

**Branch**: `000-tdd-foundation` | **Date**: 2026-06-06 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/000-tdd-foundation/spec.md`

## Summary

Estabelecer TDD (RED → GREEN → REFACTOR) como metodologia obrigatória para todo código neste repositório. Instalar Vitest + @testing-library/react, criar estrutura de testes (`tests/unit/`, `tests/integration/`), configurar npm scripts (`npm run test`), criar teste de exemplo para validar o setup, e atualizar AGENTS.md com a regra vinculante.

Todo spec futuro deve incluir seção "Testing" com cenários definidos e tasks de testes na fase RED antes da implementação. A Constituição do Speckit ganha um novo gate obrigatório.

## Technical Context

**Language/Version**: TypeScript 5, React 19.2.4, Next.js 16.2.7 App Router

**Primary Dependencies**: `vitest` (test runner), `@testing-library/react` (component tests), `@testing-library/jest-dom` (DOM matchers), `jsdom` (DOM environment)

**Storage**: N/A

**Testing**: O setup de testes é o próprio objetivo deste spec. `npm run test` será o comando padrão.

**Target Platform**: Node.js (test runner), CI (GitHub Actions futuramente)

**Project Type**: Web application / marketing website com testes unitários e de componente

**Performance Goals**: Testes devem rodar em < 30s no total.

**Constraints**: 
- Deve funcionar com Next.js 16 App Router e React 19
- Deve respeitar `@/` path alias do tsconfig (usar vitest com `resolve.alias`)
- Deve funcionar com o Turbopack em modo dev (sem conflitos)

**Scale/Scope**: Setup de infraestrutura de testes (~10 arquivos): 3 config, 3 exemplos, scripts npm.

**SEO Impact**: N/A

**Security/OWASP Impact**: N/A

**Design System Impact**: N/A

**Existing Component Reuse**: N/A

## Constitution Check Atualizada

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **IREX source of truth**: PASS. O repositório mantém-se como fonte de verdade para a presença web.
- **SOLID and componentization**: PASS. TDD incentiva componentes testáveis e SRP.
- **OWASP security**: PASS. Testes validam sanitização de inputs e validação Zod.
- **Next.js App Router**: PASS. Vitest é compatível com Next.js 16 e React 19.
- **SEO and performance**: PASS. Testes previnem regressões de performance.
- **Design system and responsive UX**: PASS. Testes de componente validam tokens visuais.
- **TDD obrigatório: RED → GREEN → REFACTOR**: ✅ **NOVO GATE.** Todo código de produção novo requer teste escrito primeiro. O Constitution Check de todo spec futuro deve incluir este gate.

## Project Structure

### Documentation (this feature)

```text
specs/000-tdd-foundation/
├── spec.md
├── plan.md
└── tasks.md
```

### Source Code (repository root)

```text
tests/
├── unit/
│   ├── setup.ts              # Vitest setup — jest-dom matchers
│   └── example.test.tsx      # Teste de exemplo para validar setup
├── integration/
│   └── example.test.ts       # Teste de integração de exemplo
└── e2e/                      # (futuro — Playwright)

vitest.config.ts              # Configuração do Vitest
```

### Scripts npm adicionados

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

## Complexity Tracking

Sem violações de constituição. Esforço planejado e documentado.

## Phase 0: Research Output

- Vitest v3+ é compatível com Node 18+, React 19, TypeScript 5
- `@testing-library/react` v16+ suporta React 19
- `@testing-library/jest-dom` v6+ fornece matchers como `toBeInTheDocument()`
- `jsdom` v25+ é o ambiente DOM padrão para Vitest
- Next.js 16 não tem conflitos conhecidos com Vitest
- Path alias `@/*` → `./*` no tsconfig: Vitest resolve via `resolve.alias` na config

## Phase 1: Design Output

- `vitest.config.ts` com `environment: 'jsdom'`, `globals: true`, `setupFiles`
- `tests/unit/setup.ts` importando `@testing-library/jest-dom/vitest`
- Scripts npm: `test`, `test:watch`, `test:coverage`
- Teste de exemplo para `home-content.ts` (dados de serviço)
- Teste de exemplo para um componente simples

## Post-Design Constitution Check

- IREX source of truth: PASS
- SOLID and componentization: PASS
- OWASP security: PASS
- Next.js App Router: PASS
- SEO and performance: PASS
- Design system and responsive UX: PASS
- **TDD obrigatório: RED → GREEN → REFACTOR**: ✅ **Este spec estabelece e valida este gate.**