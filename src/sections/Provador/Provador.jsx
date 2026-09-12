import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

import provador1 from '../../assets/provador1.jpeg';
import provador2 from '../../assets/provador2.jpeg';
import provador3 from '../../assets/provador3.jpeg';
import provador4 from '../../assets/provador4.jpeg';
import provador5 from '../../assets/provador5.jpeg';
import provador6 from '../../assets/provador6.jpeg';
import provador7 from '../../assets/provador7.jpeg';
import provador8 from '../../assets/provador8.jpeg';
import provador9 from '../../assets/provador9.jpeg';
import provador10 from '../../assets/provador10.jpeg';

import './Provador.css';

const looks = [
  { img: provador1 },
  { img: provador2 },
  { img: provador3 },
  { img: provador4 },
  { img: provador5 },
  { img: provador6 },
  { img: provador7 },
  { img: provador8 },
  { img: provador9 },
  { img: provador10, legenda: 'Look completo na vitrine da loja' },
];

const total = looks.length;

// distância "mais curta" entre dois índices num carrossel circular
// (ex: do último item pro primeiro, a distância é +1, não -9)
function getOffset(index, active) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function useCardSpacing() {
  const [spacing, setSpacing] = useState(230);

  useEffect(() => {
    const updateSpacing = () => {
      const width = window.innerWidth;
      if (width < 480) setSpacing(150);
      else if (width < 992) setSpacing(190);
      else setSpacing(230);
    };
    updateSpacing();
    window.addEventListener('resize', updateSpacing);
    return () => window.removeEventListener('resize', updateSpacing);
  }, []);

  return spacing;
}

function Provador() {

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const spacing = useCardSpacing();

  const goTo = useCallback((index) => {
    setActive(((index % total) + total) % total);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (isPaused) return undefined;
    intervalRef.current = setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (

    <section id="provador">
      <div className="container">
        <h3 className="main-title main-title--light">Provador</h3>
        <p className="provador-subtitle">
          Dia do Provador — 08/10/2013
          {/* Alguns looks montados pelas nossas estilistas, direto do provador */}
        </p>
      </div>

      <div
        className="provador-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="provador-nav provador-nav--prev"
          onClick={prev}
          aria-label="Look anterior"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        <div className="provador-viewport">
          {looks.map((look, index) => {
            const offset = getOffset(index, active);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <motion.button
                key={look.img}
                type="button"
                className={`provador-card ${isActive ? 'is-active' : ''}`}
                onClick={() => goTo(index)}
                animate={{
                  x: offset * spacing,
                  scale: isActive ? 1 : 0.82,
                  opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                style={{ zIndex: isActive ? 3 : 2 - Math.abs(offset), pointerEvents: isVisible ? 'auto' : 'none' }}
                aria-hidden={!isVisible}
                tabIndex={isVisible ? 0 : -1}
              >
                <img src={look.img} alt={look.legenda} />
                {isActive && <div className="provador-card-caption">{look.legenda}</div>}
              </motion.button>
            );
          })}
        </div>

        <button
          type="button"
          className="provador-nav provador-nav--next"
          onClick={next}
          aria-label="Próximo look"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

      <div className="provador-dots">
        {looks.map((look, index) => (
          <button
            key={look.img}
            type="button"
            className={`provador-dot ${index === active ? 'is-active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Ir para o look ${index + 1}`}
          />
        ))}
      </div>
    </section>

    // <section id="provador">
    //   <div className="provador-split">
    //     {/* Coluna de texto */}
    //     <motion.div
    //       className="provador-info"
    //       initial={{ opacity: 0, x: -30 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       viewport={{ once: true, amount: 0.3 }}
    //       transition={{ duration: 0.6 }}
    //     >
    //       <h3 className="provador-title">
    //         <span className="provador-title-label">Provador</span>
    //         <span className="provador-title-date">08/10/2013</span>
    //       </h3>
    //       <p className="provador-desc">
    //         Cada peça foi escolhida a dedo para compor combinações
    //         únicas. Navegue pelas setas ao lado e descubra o look
    //         completo, com os acessórios que a Mara selecionou para
    //         fechar o visual.
    //       </p>
    //       <a href="#contato" className="provador-cta">
    //         Agende seu provador
    //       </a>
    //     </motion.div>

    //     {/* Coluna do carousel */}
    //     <motion.div
    //       className="provador-visual"
    //       initial={{ opacity: 0, x: 30 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       viewport={{ once: true, amount: 0.3 }}
    //       transition={{ duration: 0.6 }}
    //     >
    //       <div id="provadorCarousel" className="carousel slide" data-bs-ride="carousel">
    //         <div className="carousel-indicators">
    //           {looks.map((_, index) => (
    //             <button
    //               key={index}
    //               type="button"
    //               data-bs-target="#provadorCarousel"
    //               data-bs-slide-to={index}
    //               className={index === 0 ? 'active' : ''}
    //               aria-current={index === 0 ? 'true' : undefined}
    //             />
    //           ))}
    //         </div>

    //         <div className="carousel-inner">
    //           {looks.map((look, index) => (
    //             <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
    //               <img src={look.img} className="d-block" alt={look.legenda} />
    //               <div className="carousel-caption d-md-block">
    //                 <p>{look.legenda}</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>

    //         <a href="#provadorCarousel" className="carousel-control-prev" data-bs-slide="prev">
    //           <span className="carousel-control-prev-icon" />
    //         </a>
    //         <a href="#provadorCarousel" className="carousel-control-next" data-bs-slide="next">
    //           <span className="carousel-control-next-icon" />
    //         </a>
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
  );
}

export default Provador;