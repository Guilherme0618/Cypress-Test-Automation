# Cypress Google Search Automation

Projeto de automação E2E utilizando Cypress para realizar pesquisas automatizadas no Google, validar resultados e gerar evidências de execução.

---

## Tecnologias Utilizadas

- Node.js
- Cypress
- GitHub Actions
- JavaScript

---

## Funcionalidades

- Acesso automatizado ao Google
- Pesquisa automática
- Validação de resultados
- Captura de screenshots
- Execução em pipeline CI/CD

---

## Estrutura do Projeto

```bash
.
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress/
│   ├── e2e/
│   │   └── google-search.cy.js
│   │
│   ├── screenshots/
│   └── videos/
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── .gitignore
