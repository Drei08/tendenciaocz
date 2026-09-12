import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import Slide from './sections/Slide/Slide';
import Sobre from './sections/Sobre/Sobre';
import Provador from './sections/Provador/Provador';
import Marcas from './sections/Marcas/Marcas';
import Equipe from './sections/Equipe/Equipe';
import Contato from './sections/Contato/Contato';
import Local from './sections/Local/Local';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
        <Slide />
        <Sobre />
        <Provador />
        <Equipe />
        <Marcas />
        <Local />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}

export default App;
