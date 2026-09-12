import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS global do projeto (reset, fontes, variáveis)
import './index.css';

// Bootstrap: CSS pode ir aqui sem problema (é só estilo).
// O JS do Bootstrap (bundle com Popper) também pode ser importado aqui,
// pois ele funciona por "delegação de eventos" no document — não precisa
// que os elementos já existam no momento do import. Isso faz o carousel,
// o navbar-toggler (menu mobile) etc. funcionarem mesmo vindo de componentes
// React que só montam depois.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
