# Tasks: Fundação TDD — Test-Driven Development como Padrão Universal

**Input**: Spec documents from `/specs/000-tdd-foundation/`

**Prerequisites**: plan.md (required), spec.md (required)

**Tests**: `npm run test` deve executar sem erros; `npm run build` deve continuar passando.

## Phase 1: Setup de Infraestrutura (RED — Configuração)

- [ ] T001 Instalar dependências: `npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom`
- [ ] T002 Criar `vitest.config.ts` com environment `jsdom`, globals `true`, `setupFiles`, alias `@/`
- [ ] T003 Criar `tests/unit/setup.ts` importando `@testing-library/jest-dom/vitest`
- [ ] T004 Adicionar scripts npm: `"test": "vitest run"`, `"test:watch": "vitest"`, `"test:coverage": "vitest run --coverage"`
- [ ] T005 Verificar que `npm run test` executa sem erros (descobre 0 testes — OK para setup)

## Phase 2: Testes de Exemplo (RED → GREEN)

- [ ] T006 **RED**: Escrever teste para `home-content.ts` validando que os dados de serviço existem
  - `tests/unit/home-content.test.ts`
  - Assert: `services.items.length === 9`
  - Assert: Nenhum serviço contém "React", "Next.js", "NestJS", "TypeScript" nos titles
- [ ] T007 **GREEN & REFACTOR**: Verificar que `npm run test` passa (o teste deve passar pois os dados já existem)
- [ ] T008 **RED**: Escrever teste para um componente — `HeroSection` renderiza título
  - `tests/unit/HeroSection.test.tsx`
  - Assert: HeroSection renderiza o título do hero
  - Mock: `home-content.ts` ou import direto
- [ ] T009 **GREEN & REFACTOR**: Verificar que `npm run test` passa

## Phase 3: Atualização de Documentação

- [ ] T010 Atualizar `AGENTS.md` com regra TDD obrigatório + link para spec
- [ ] T011 Atualizar `.specify/templates/plan-template.md` Constitution Check com gate TDD
- [ ] T012 Verificar que `AGENTS.md` é legível e coerente com as regras existentes

## Phase 4: Validação Final

- [ ] T013 Rodar `npm run test` e confirmar 0 falhas
- [ ] T014 Rodar `npm run build` e confirmar sem erros
- [ ] T015 Verificar que o teste de exemplo valida a proibição de frameworks nos services

## Phase 5: Entrega

- [ ] T016 Fazer commit e push de todo o pacote (specs + config + testes + AGENTS.md)