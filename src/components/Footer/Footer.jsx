import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="site-footer">
      <div className="container">
        <p>
          Desenvolvido por{' '}
          <a href="https://www.suaagencia.com" target="_blank" rel="noreferrer">
            Sua Boutique
          </a>{' '}
          &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
