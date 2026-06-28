# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]

**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: [e.g., Python 3.11, Swift 5.9, Rust 1.75 or NEEDS CLARIFICATION]

**Primary Dependencies**: [e.g., FastAPI, UIKit, LLVM or NEEDS CLARIFICATION]

**Storage**: [if applicable, e.g., PostgreSQL, CoreData, files or N/A]

**Testing**: [e.g., pytest, XCTest, cargo test or NEEDS CLARIFICATION]

**Target Platform**: [e.g., Linux server, iOS 15+, WASM or NEEDS CLARIFICATION]

**Project Type**: [e.g., library/cli/web-service/mobile-app/compiler/desktop-app or NEEDS CLARIFICATION]

**Performance Goals**: [domain-specific, e.g., 1000 req/s, 10k lines/sec, 60 fps or NEEDS CLARIFICATION]

**Constraints**: [domain-specific, e.g., <200ms p95, <100MB memory, offline-capable or NEEDS CLARIFICATION]

**Scale/Scope**: [domain-specific, e.g., 10k users, 1M LOC, 50 screens or NEEDS CLARIFICATION]

**SEO Impact**: [metadata, crawlable content, sitemap/robots, structured data, internal links or N/A]

**Security/OWASP Impact**: [inputs, authz/authn, secrets, data exposure, rate limiting or N/A]

**Design System Impact**: [docs/designer-system.md patterns/tokens used or N/A]

**Existing Component Reuse**: [components reviewed and reused, or justification for new component]

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- IREX source of truth: content, navigation, metadata, and public assets preserve brand
  consistency and declare SEO/conversion impact.
- SOLID and componentization: existing components were checked; shared components belong in
  `components/`; route-only components belong in `app/**/components/` or `app/**/_components/`.
  Reuse decision MUST be documented (confirmed reuse or justified new artefact).
  Duplication of UI, logic, or styles MUST NOT occur without a Complexity Tracking entry.
- OWASP security: all affected inputs are validated with Zod or equivalent; secrets remain
  server-only; endpoints/actions delegate business rules to services/entities; mitigated
  OWASP Top 10 vector is named when touching auth, upload, redirect, or sensitive data.
- Next.js App Router: relevant `node_modules/next/dist/docs/` guide was consulted; Server
  Components are default; Client Components and dynamic rendering are justified.
- SEO and performance: metadata, semantic HTML, crawlability, `next/image`, `next/font`,
  `next/link`, caching/rendering, and Core Web Vitals impacts are addressed.
- Design system and responsive UX: `docs/designer-system.md` was followed; mobile and desktop
  behavior are covered; accessibility and text fit are checked.
- Clean Code: symbol names are descriptive and reveal intent; functions have single
  responsibility (≤20 lines of effective logic); no dead code, unused imports, magic numbers,
  or silenced exceptions; DRY applied (3rd repetition triggers extraction).
- **TDD obrigatório: RED → GREEN → REFACTOR**: todo código de produção novo exige teste
  escrito primeiro. Nenhuma implementação pode começar sem o teste correspondente na fase
  RED. Cobertura mínima de 80% para código novo. `npm run test` deve passar antes de
  qualquer commit. Ver `specs/000-tdd-foundation/` para detalhes.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
app/
├── [route]/
│   ├── page.tsx
│   ├── components/ or _components/
│   └── route.ts                    # if this route exposes an endpoint
├── layout.tsx
├── sitemap.ts or sitemap.xml
└── robots.ts or robots.txt

components/
└── [SharedComponent]/
    ├── [SharedComponent].tsx
    └── [supporting files if needed]

lib/
├── schemas/
├── services/
├── entities/
└── repositories/

tests/
├── unit/
├── integration/
└── e2e/
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
