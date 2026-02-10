import React from 'react';
import { FooterBar, FooterInner, FooterLinks } from './styles';

const Footer = () => {
  return (
    <FooterBar>
      <FooterInner>
        <p>(c) 2026 Leonardo da Silva Pires. Todos os direitos reservados.</p>
        <FooterLinks>
          <a href="#home">Inicio</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </FooterLinks>
      </FooterInner>
    </FooterBar>
  );
};

export default Footer;
