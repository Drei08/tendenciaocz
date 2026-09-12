import React from 'react';
import { motion } from 'framer-motion';
import boutiqueImg from '../../assets/frente.png';
import './Sobre.css';

const diferenciais = [
  'Curadoria de marcas exclusivas',
  'Atendimento personalizado por estilista',
  'Peças em edição limitada',
  'Provador com hora marcada',
];

function Sobre() {
  return (
    <section id="sobre">
      <div className="container">
        {/* <span className="section-eyebrow">Conheça a boutique</span> */}
        <h3 className="main-title">Loja Tendência</h3>

        <div className="row align-items-center sobre-row">
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sobre-img-wrap">
              <img className="img-fluid" src={boutiqueImg} alt="Fachada da loja Tendência" />
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="about-title">Moda com identidade</h3>
            <p>Selecionamos marcas que combinam com o estilo de cada cliente.</p>
            <p>Nossa curadoria acompanha as tendências sem perder a essência de cada peça.</p>
            <p>Aqui, cada visita é uma experiência pensada pra você.</p>
            <p className="sobre-lista-intro">Veja outros diferenciais:</p>
            <ul id="about-list">
              {diferenciais.map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
