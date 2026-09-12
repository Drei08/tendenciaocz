import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contato.css';

const contatos = [
  {
    icon: 'fa fa-phone',
    conteudo: (
      <>
        <p><span className="contact-title">Ligue para:</span> (18) 3528-3407</p>
        <p><span className="contact-title">Atendimento:</span> Segunda a Sexta, 9h às 18h</p>
        <p><span className="contact-title">Final de semana:</span> Sábado, 9h às 13h</p>
      </>
    ),
  },
  {
    icon: 'fa fa-envelope',
    conteudo: (
      <p><span className="contact-title">Email:</span> maratendencia2019@hotmail.com</p>
    ),
  },
  {
    icon: 'fa fa-map-marker-alt',
    conteudo: (
      <p><span className="contact-title">Endereço:</span> Av Brasil, 537 - Osvaldo Cruz/SP</p>
    ),
  },
];

// Cada ícone entra em cascata (delay crescente por índice) e reage ao
// hover com escala + leve giro — o mesmo padrão de "micro-interação"
// que sites profissionais usam pra dar vida a ícones estáticos.
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, delay: index * 0.15, type: 'spring', stiffness: 200 },
  }),
};

function Contato() {
  const [form, setForm] = useState({ email: '', assunto: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', form);
    setEnviado(true);
    setForm({ email: '', assunto: '', mensagem: '' });
  };

  return (
    <section id="contato">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="main-title">Contato</h3>
          </div>

          {contatos.map((item, index) => (
            <div key={item.icon} className="col-md-4 contact-box">
              <motion.i
                className={`${item.icon} contact-icon`}
                custom={index}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              />
              {item.conteudo}
            </div>
          ))}

          <div className="col-md-6" id="msg-box">
            <p>Nos deixe uma mensagem:</p>
          </div>

          <motion.div
            className="col-md-6"
            id="contact-form"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Assunto"
                name="assunto"
                value={form.assunto}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-control"
                rows="4"
                placeholder="Mensagem"
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                required
              />
              <input type="submit" className="main-btn" value="Enviar" />
              {enviado && <p className="contato-sucesso">Mensagem enviada com sucesso!</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contato;