import React from 'react';
import { motion } from 'framer-motion';

import './Local.css';
import local from '../../assets/faixada.png';
import local2 from '../../assets/local.png';

// import localVideo from '../../assets/local.mp4';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Tend%C3%AAncia+loja+da+Mara/data=!4m2!3m1!1s0x0:0x58d66d0dc126b64?sa=X&ved=1t:2428&ictx=111';

const Local = () => {
  return (
    <section id="local">
      <div className="local-split">
        <motion.div
          className="local-image"
          style={{ backgroundImage: `url(${local})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        />

        <motion.a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="local-map"
          style={{ backgroundImage: `url(${local2})` }}
          aria-label="Abrir localização da Tendência - Loja da Mara no Google Maps"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        />

        {/* <video
            className="local-map-video"
            src={localVideo}
            autoPlay
            muted
            loop
            playsInline
          /> */}
      </div>
    </section>
  );
};

export default Local;