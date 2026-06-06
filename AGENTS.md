<!-- BEGIN:irex-project-rules -->
# IREX Site

Este repositório é o site principal da IREX. Toda implementação deve tratar este projeto como a fonte principal de verdade para a presença web da marca.

## Regras de Desenvolvimento

- Sempre aplicar princípios SOLID ao codar.
- Separar componentes de forma clara para favorecer reaproveitamento, manutenção e testes.
- Antes de criar um componente novo, verificar se já existe um componente equivalente ou reutilizável no projeto.
- Reaproveitar componentes existentes sempre que fizer sentido, evitando duplicação de UI, lógica e estilos.
- Segurança é primordial: aplicar boas práticas OWASP em todas as camadas afetadas pela mudança.
- Caso seja necessário implementar backend, usar orientação a objetos para organizar regras de negócio, serviços e entidades.
- Manter as pastas do backend separadas por responsabilidade.
- Endpoints devem ficar enxutos: validar entrada com Zod, delegar regras de negócio para camadas próprias e retornar respostas consistentes.
- Nunca colocar regras de negócio complexas diretamente nos endpoints.
- **TDD é obrigatório:** todo código de produção novo exige teste escrito primeiro (RED → GREEN → REFACTOR). Nenhuma implementação pode começar sem seu teste correspondente definido. Ver `specs/000-tdd-foundation/` para detalhes.
- **Cobertura mínima:** 80% para código novo. `npm run test` deve passar antes de qualquer commit.
- **Testes de caracterização:** código legado sem testes exige testes de caracterização ANTES de qualquer alteração.

## Design System

O design system oficial do projeto fica em:

`/home/deeivan/Área de trabalho/Developer/Pessoal/irex-site/docs/designer-system.md`

Antes de criar ou alterar interfaces, consultar esse arquivo e seguir os padrões definidos nele.
<!-- END:irex-project-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- SPECKIT START -->
Current feature plans:

- **Foundation:** `specs/000-tdd-foundation/plan.md` — TDD, testes e constituição
- **Active:** `specs/001-home-prototype-page/plan.md` — Homepage principal

For additional context about technologies to be used, project structure,
shell commands, and other important information, read the plans above.
<!-- SPECKIT END -->
