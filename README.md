# Boutique React — Tendência, Loja da Mara

Projeto já vem estruturado como um app **Vite + React** completo
(`package.json`, `vite.config.js`, `index.html` já configurados).
Só falta instalar as dependências.

## 1. Instalação

```bash
cd boutique-react
npm install
npm run dev
```

Isso abre o projeto em `http://localhost:5173`.

> Não incluí a pasta `node_modules` no zip (facilmente passa de 200MB e
> não faz sentido transportar) nem rodei o `npm install` aqui, porque o
> ambiente onde gerei este projeto não tem acesso à internet. O
> `package.json` já lista as versões exatas das dependências (`react`,
> `react-dom`, `bootstrap`, `framer-motion`, `progressbar.js`, `vite`,
> `@vitejs/plugin-react`), então o `npm install` na sua máquina resolve
> tudo sozinho.

Font Awesome (ícones) e as fontes (Roboto pro corpo, Great Vibes — a
mesma cursiva do logo — pros títulos) já estão plugadas via CDN dentro
do `index.html`, não precisa instalar nada a mais pra elas.

## 2. Build de produção

```bash
npm run build    # gera a pasta dist/, pronta pra hospedar
npm run preview  # testa o build de produção localmente
```

## 3. Onde cada lib é carregada

| Lib | Onde importar | Por quê |
|---|---|---|
| CSS do Bootstrap | `src/index.js` | é só estilo, pode entrar globalmente |
| JS do Bootstrap (bundle) | `src/index.js` | funciona por delegação de eventos no `document`, então funciona mesmo com componentes React montando depois |
| Framer Motion | dentro de cada componente que anima (`import { motion } from 'framer-motion'`) | você só paga o "custo" da lib nos componentes que realmente animam |
| ProgressBar.js | só em `Marcas.js`, via `useRef` + `useEffect` | precisa de um nó real do DOM pra desenhar o círculo — não dá pra importar globalmente, tem que ser depois do componente montar |

> **jQuery**: não é necessário. Tudo que ele fazia no site original
> (scroll suave, contadores, parallax) foi substituído por padrões
> nativos do React (refs, hooks) ou pelo Framer Motion.

## 4. Estrutura de pastas

```
boutique-react/
  index.html             -> HTML raiz do Vite (fontes, Font Awesome, #root)
  package.json
  vite.config.js
  src/
    assets/              -> imagens, logo, ícones
    components/          -> peças reutilizáveis (NavBar, Footer)
      NavBar/
        NavBar.js
        NavBar.css
      Footer/
        Footer.js
        Footer.css
    sections/             -> um bloco por seção da landing page
      Slide/
      Sobre/
      Provador/
      Marcas/
      Equipe/
      Contato/
        Nome.js
        Nome.css
    App.js                -> importa e organiza todas as seções, nessa ordem
    App.css
    index.js              -> ponto de entrada + imports globais
    index.css             -> reset, variáveis CSS (:root), fontes
```

Cada seção é isolada: JS e CSS ficam na mesma pasta, então dá pra mexer
em uma sem afetar as outras, e dá pra reordenar/remover seções direto
no `App.js`.

> Todo componente com JSX usa extensão `.jsx` (o Vite exige isso por
> padrão — arquivos `.js` só são tratados como JS puro, sem JSX). Os
> `import`s entre componentes não citam extensão
> (`import App from './App'`), então o Vite resolve automaticamente.

## 5. Identidade visual (preto e dourado)

As cores seguem o manual de marca da Tendência - Loja da Mara,
centralizadas em `src/index.css`:

```css
--color-gold: #FFD700;
--color-gold-dark: #E1B24A;
--color-gold-light: #F6D98C;
--color-black: #0D0D0D;
```

Como todo componente usa essas variáveis (em vez de cor fixa no CSS),
qualquer ajuste futuro de paleta é feito só nesse arquivo.

## 6. Imagens já plugadas

- `logo-horizontal.png` / `logo-icone.png` — recortados do seu manual de
  marca, usados no NavBar.
- `loja-fachada.png` — fachada real da loja, usada na seção Sobre e como
  fundo com parallax da seção Marcas.
- `provador1.jpeg` a `provador10.jpeg` — fotos da modelo, usadas no
  carrossel da seção Provador (mesmo componente de carousel do Slide,
  num container mais estreito, estilo "story").
- `marca-befree.png`, `marca-individual.png`, `marca-johnjohn.png`,
  `marca-perfectway.png`, `marca-tommyjeans.png` — logos das marcas
  parceiras, em grade no topo da seção Marcas (preto e branco, ganhando
  cor no hover).

## 7. O que mudou do jQuery pro React (resumo)

- **Scroll suave do menu**: `scroll-behavior: smooth` no CSS +
  `<a href="#id">` apontando pro `id` da seção, com `scroll-margin-top`
  em cada seção pra compensar a navbar fixa.
- **Contadores animados**: cada círculo vive num componente `<Counter>`,
  que cria o `ProgressBar.Circle` num `useEffect` e usa
  `IntersectionObserver` pra disparar a animação só quando a seção entra
  na tela.
- **Parallax**: a seção `Marcas` usa `useScroll` + `useTransform` do
  Framer Motion pra deslocar o fundo conforme o scroll — mesmo efeito
  visual, sem plugin jQuery.
- **Animações de entrada** (fade, stagger nos cards, hover no time):
  via `motion.div` com `whileInView` / `whileHover`.

## 8. Próximos passos sugeridos

- Implementar o envio do formulário de contato em `Contato.js` (endpoint
  próprio, EmailJS, Formspree etc — o `handleSubmit` já está pronto pra
  plugar).
- Se o catálogo de produtos crescer, vale criar uma seção/página própria
  com os itens vindos de uma API ou CMS, em vez de conteúdo estático.
