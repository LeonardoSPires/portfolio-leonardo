import React from 'react';
import { HeaderBar, Brand, Nav, NavLink, HeaderCta, HeaderInner } from './styles';

const Header = () => {
  return (
    <HeaderBar>
      <HeaderInner>
        <Brand href="#home">Leonardo Pires</Brand>
        <Nav>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </Nav>
        <HeaderCta href="#contact">Vamos conversar</HeaderCta>
      </HeaderInner>
    </HeaderBar>
  );
};

export default Header;
