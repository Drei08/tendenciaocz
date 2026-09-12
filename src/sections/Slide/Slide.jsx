import React from 'react';
import { motion } from 'framer-motion';
import banner1 from '../../assets/frente.png';
import banner2 from '../../assets/SlideMadu2.png';
import banner3 from '../../assets/marcasSlide2.png';
import './Slide.css';

// O carousel em si continua sendo o do Bootstrap (data-bs-ride, data-bs-slide-to),
// porque o JS dele foi importado globalmente no index.js e funciona por
// delegação de eventos. O que trocamos foi a legenda: em vez de depender
// de CSS/timing manual, cada legenda usa <motion.div> pra entrar com fade+slide.

const slides = [
  {
    img: banner1,
    title: 'Tendência - Loja da Mara',
    text: 'Moda, elegância e curadoria de marcas em um só lugar.',
    link: '#local',
  },
  {
    img: banner2,
    title: 'Provador da Semana',
    text: 'Atendimento exclusivo pra encontrar o look ideal.',
    link: '#provador',
  },
  {
    img: banner3,
    title: 'Marcas Parceiras',
    text: 'Peças exclusivas e selecionadas, com a moda que você busca.',
    link: '#marcas',
  },
];

function Slide() {
  return (
    <section id="home">
      <div id="mainSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#mainSlider"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={slide.img} className="d-block w-100" alt={slide.title} />
              <motion.div
                className="carousel-caption d-md-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <a href={slide.link} className="main-btn">
                  Saiba mais
                </a>
              </motion.div>
            </div>
          ))}
        </div>

        <a href="#mainSlider" className="carousel-control-prev" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a href="#mainSlider" className="carousel-control-next" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </section>
  );
}

export default Slide;
