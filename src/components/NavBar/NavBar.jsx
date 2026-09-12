import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import './NavBar.css';

// Antes: jQuery escutava o click de cada .nav-item, calculava o offset()
// da seção e animava o scrollTop com $().animate().
// Agora: cada <a> aponta pra um id (#sobre, #provador...) e o navegador
// faz o scroll suave sozinho (scroll-behavior: smooth no index.css).
// O único JS que sobra é fechar o menu mobile depois de clicar num link.

const links = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'sobre', label: 'BOTIQUE', href: '#sobre' },
  { id: 'provador', label: 'PROVADOR', href: '#provador' },
  { id: 'equipe', label: 'TIME', href: '#equipe' },
  { id: 'marcas', label: 'MARCAS', href: '#marcas' },
  { id: 'contato', label: 'CONTATO', href: '#contato' },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-dark ${scrolled ? 'is-scrolled' : ''}`}
        id="main-navbar"
      >
        <div className="container">
          <a href="#home" className="navbar-brand">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              id="logo"
              src={logo}
              alt="Tendência - Loja da Mara"
            />
          </a>

          <div className="nav-socials">
            <motion.a
              href="https://wa.me/55SEUNUMEROAQUI"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp"
              aria-label="Fale conosco no WhatsApp"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.2 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-whatsapp"></i>
            </motion.a>

            <motion.a
              href="https://instagram.com/SEUUSUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Siga no Instagram"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.2 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>
            

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div >
            <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="nav-item nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
