# Checklists - Atividade Aula 01

## Parte A - Backend

- [X] `node -v` e `npm -v` conferidos.
- [X] Pasta do backend criada separada da pasta do front.
- [X] `package.json` do backend gerado com `npm init -y`.
- [X] `express`, `cors`, `dotenv` e `morgan` instalados.
- [X] `nodemon` instalado como dev dependency.
- [X] Scripts `start` e `dev` configurados no backend.
- [X] Pastas `bin/`, `config/`, `middlewares/`, `modules/` e `routes/` criadas no backend.
- [X] `.gitignore` do backend criado com `node_modules/` e `.env`.
- [X] `middlewares/apiResponse.js` criado com `success` e `error`.
- [X] `routes/index.js` criado com `data.status` igual a `online`.
- [X] `.env` do backend criado com `PORT` e `CORS_ORIGIN`.
- [X] `app.js` criado, montando `indexRouter` sob o prefixo `/api`.
- [X] `bin/www` criado.
- [X] `npm run dev` sobe o servidor sem erros.
- [X] `curl http://localhost:3000/api` responde o JSON esperado.

## Parte B - Frontend

- [x] Projeto Vite + Vue 3 criado.
- [x] Dependencias `vue-router@4`, `axios` e `pinia` instaladas.
- [x] Estrutura de pastas criada: `views/`, `components/`, `router/`, `services/` e `stores/`.
- [x] `HelloWorld.vue` removido da aplicacao.
- [x] `src/style.css` limpo e substituido por CSS base.
- [x] `.env` criado com `VITE_API_URL=http://localhost:3000/api`.
- [x] `.gitignore` configurado com `node_modules/`, `dist/` e `.env`.
- [x] Tabela de traducao funcionalidade para tela preenchida.
- [x] Uma tela placeholder criada para cada rota definida.
- [x] `src/router/index.js` criado com todas as rotas do EduStream.
- [x] Router registrado em `main.js`.
- [x] `TheNavbar.vue`, `TheSidebar.vue` e `TheFooter.vue` criados.
- [x] Layout montado em `App.vue` com `RouterView`.
- [x] Landing Page configurada para consultar `VITE_API_URL` e exibir o status da API.
- [X] Landing Page exibindo `Status da API: online` com a API rodando.
- [X] Erro de CORS reproduzido intencionalmente e corrigido depois.
- [X] Print `curl-api.jpg` criado.
- [X] Print `landing-status.jpg` criado.
- [X] Print `erro-cors.jpg` criado.
