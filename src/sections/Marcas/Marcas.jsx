import React, { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';
import { motion, useScroll, useTransform } from 'framer-motion';

import fachadaImg from '../../assets/loja-fachada.png';
import befree from '../../assets/marca-befree.png';
import individual from '../../assets/individual.png';
import johnjohn from '../../assets/marca-johnjohn.png';
import perfectway from '../../assets/marca-perfectway.png';
import tommyjeans from '../../assets/tommyjeans.png';
import kipling from '../../assets/kipling.png';
import index from '../../assets/index.png';
import mondabelle from '../../assets/mondabelle.png';

import './Marcas.css';

const marcas = [
  { img: johnjohn, nome: 'John John' },
  { img: individual, nome: 'Individual' },
  { img: tommyjeans, nome: 'Tommy Jeans' },
  { img: perfectway, nome: 'Perfect Way' },
  { img: befree, nome: 'Befree' },
  { img: mondabelle, nome: 'Mondabelle' },
  { img: kipling, nome: 'Kipling' },
  { img: index, nome: 'Index' },
];


function Marcas() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section id="marcas" ref={sectionRef}>
      {/* Vitrine de marcas parceiras */}
     
    
      <div className="marcas-overlay">
        <div className="container">
          <div className="row marcas-logos-row">
            <h3 className="main-title">Marcas Parceiras</h3>
            {marcas.map((marca, index) => (
              <motion.div
                key={marca.nome}
                className="col-6 col-md-2-4 marca-logo-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <img src={marca.img} alt={marca.nome} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Marcas;
