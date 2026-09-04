# Checklists - Atividade Aula 01

## Parte A - Backend

- [ ] `node -v` e `npm -v` conferidos.
- [ ] Pasta do backend criada separada da pasta do front.
- [ ] `package.json` do backend gerado com `npm init -y`.
- [ ] `express`, `cors`, `dotenv` e `morgan` instalados.
- [ ] `nodemon` instalado como dev dependency.
- [ ] Scripts `start` e `dev` configurados no backend.
- [ ] Pastas `bin/`, `config/`, `middlewares/`, `modules/` e `routes/` criadas no backend.
- [ ] `.gitignore` do backend criado com `node_modules/` e `.env`.
- [ ] `middlewares/apiResponse.js` criado com `success` e `error`.
- [ ] `routes/index.js` criado com `data.status` igual a `online`.
- [ ] `.env` do backend criado com `PORT` e `CORS_ORIGIN`.
- [ ] `app.js` criado, montando `indexRouter` sob o prefixo `/api`.
- [ ] `bin/www` criado.
- [ ] `npm run dev` sobe o servidor sem erros.
- [ ] `curl http://localhost:3000/api` responde o JSON esperado.

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
- [ ] Landing Page exibindo `Status da API: online` com a API rodando.
- [ ] Erro de CORS reproduzido intencionalmente e corrigido depois.
- [ ] Print `curl-api.jpg` criado.
- [ ] Print `landing-status.jpg` criado.
- [ ] Print `erro-cors.jpg` criado.
