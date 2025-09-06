# 🧭 Pokedex — SPA em React

## 💡 Propósito
Aplicação **single-page** que consome a **PokeAPI** para listar Pokémons, exibir **detalhes** de cada um e permitir **filtrar por tipo**. O foco é praticar arquitetura limpa em React, **estilização com styled-components**, **roteamento** e **boas práticas** de consumo de API com **Axios**.

---

## ✨ Funcionalidades entregues
- **Listagem paginada** com botão **“Carregar mais”** (offset/limit).
- **Página de detalhes** com:
  - imagem oficial, tipos, altura, peso;
  - **habilidades com descrição** (tooltip ao passar o mouse);
  - **status base** em barras horizontais (legíveis e comparáveis);
  - **movimentos** com **busca**, **área colapsável** e **scroll** estilizado.
- **Tema claro/escuro** com Context API + styled-components (ThemeProvider + GlobalStyle).
- **Roteamento** (Home e Details) com React Router v6.
- **UX**: estado de carregamento, desabilitar cliques concorrentes, layout responsivo.

---

## 🧰 Ferramentas e por que escolhi
- **React + Vite**: DX rápida, build leve e HMR eficiente.
- **React Router v6**: rotas declarativas, suporte a params (`/pokemon/:name`).
- **styled-components**: **tema global** e componentes coesos (CSS-in-JS).
- **Axios**: instância com `baseURL`, `params`, interceptores e fácil cancelamento.
- **Context API**: perfeito para estado **global do tema** (simples e nativo).
- (**Opcional**) ESLint/Prettier: padronização e qualidade de código.

---

## 🧠 Decisões de arquitetura
- **UI desacoplada da lógica**: `PokemonDetailCard` recebe **props prontas** (dado mapeado nos hooks).
- **Hooks customizados**:
  - `usePokemons`: paginação, trava de reentrância e correção do efeito duplo do StrictMode.
  - `usePokemon`: busca detalhes + **descrição das habilidades** em paralelo
- **Axios instance** central (`api/axios.js`) para configurar `baseURL` e `timeout`.
- **Acessibilidade/UX**: botões com `:disabled`, foco visual, barras de status e tooltip não-intrusiva.

---

## 📁 Estrutura de pastas (JS)
```
src/
  api/
    axios.js
    pokeapi.js
  app/
    providers.jsx
    routes.jsx
  components/
    Button/
      Button.styles.js
      index.jsx
    Header/
      Header.styles.js
      index.jsx
    Main/
      index.jsx
      Main.styles.js
    PokemonCard/
      index.jsx
      PokemonCard.styles.js
    PokemonDetailCard/
      AbilityBadge.jsx
      index.jsx
      MovesPanel.jsx
      PokemonDetailCard.styles.js
      StatBar.jsx
      TypeBadge.jsx
    PokemonGrid
      index.jsx
      PokemonGrid.styles.js
  context/
    ThemeContext.jsx
  hooks/
    usePokemons.js
    usePokemon.js
  pages/
    Home/
      index.jsx
    Pokemon/
      index.jsx
  styles/
    GlobalStyle.jsx
    theme.js
  App.jsx
  main.jsx
```

---

## 🧪 Endpoints usados (PokeAPI)
- `GET /pokemon?offset={n}&limit={n}` — listagem.
- `GET /pokemon/{name}` — detalhes.
- `GET /ability/{name}` — **descrição** (usada no tooltip).

---

## ⚙️ Requisitos / Pré-requisitos
- **Node.js >= 18**
- **npm** ou **yarn**

---

## 🚀 Como rodar localmente

```bash
# 1) Clonar o repositório
git clone <[https://github.com/Maicaoxd/Curso-Dev-Quest.git](https://github.com/Maicaoxd/Curso-Dev-Quest.git)>
cd <teste-tecnico-pokedex>

# 2) Instalar dependências
npm install
# ou
yarn

# 3) Rodar em desenvolvimento
npm run dev
# Vite exibirá a URL local, ex.: http://localhost:5173
```

**Variáveis de ambiente:** não são necessárias (PokeAPI é pública).

---

## 🔍 Notas técnicas
- **StrictMode (dev)**: o `useEffect` pode rodar 2x; o projeto usa guard/cancelamento para evitar duplicidades.
- **Acessibilidade**: imagens com `alt`, botões com `:disabled`, contraste via tema.

---

## 🗺️ Próximos passos (opcional)
- **Filtro por tipo**.
- **Testes** (React Testing Library) para hooks e componentes.
- **React Query / TanStack Query** para cache e revalidação automática.
- **Paginação infinita** (IntersectionObserver).
- **Skeleton Loader** dedicado para detalhes.

---

## 📣 Contato
maicon.ag17@hotmail.com
