import React from 'react';
import { motion } from 'framer-motion';
import './Equipe.css';

// Sem fotos reais do time ainda — em vez de importar arquivos que não
// existem, cada pessoa ganha um avatar com iniciais (gerado em CSS puro).
// Quando você tiver as fotos, é só trocar o <div className="avatar-inicial">
// por um <img src={pessoa.foto} />.

import mara from '../../assets/mara.png'
import adriane from '../../assets/adriane.png'
import andrei from '../../assets/andrei.png'
import simone from '../../assets/simone.png'

const equipe = [
  { nome: 'Mara', cargo: 'Personal Stylist', iniciais: 'MARA', foto: mara },
  { nome: 'Adriane', cargo: 'Vendedora', iniciais: 'DRI', foto: adriane },
  { nome: 'Andrei', cargo: 'Moto-Boy', iniciais: 'DREI', foto: andrei },
  { nome: 'Simone', cargo: 'Estoquista', iniciais: 'SI', foto: simone },
];

function Equipe() {
  return (
    <section id="equipe">
      <div className="container">
        <div className="row equipe-row">
          <div className="col-12">
            <h3 className="main-title">Nosso Time</h3>
          </div>

          {equipe.map((pessoa, index) => (
            <motion.div
              key={pessoa.nome}
              className="col-md-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="card">
                {pessoa.foto ? (
                  <img src={pessoa.foto} alt={pessoa.nome} className="avatar-foto" />
                ) : (
                  <div className="avatar-inicial">{pessoa.iniciais}</div>
                )}
                <div className="card-body">
                  <h5 className="card-title">{pessoa.nome}</h5>
                  <p className="card-text">{pessoa.cargo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipe;
