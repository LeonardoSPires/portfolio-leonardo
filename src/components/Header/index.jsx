import React, { useState, useEffect } from "react";
import { Container, Logo, Nav, NavLink } from "./styles";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // quando passar de 50px ativa o fundo
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup do event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container scrolled={scrolled}>
      <Logo>Leonardo.dev</Logo>
      <Nav>
        <NavLink href="#hero">Início</NavLink>
        <NavLink href="#about">Sobre Mim</NavLink>
        <NavLink href="#projects">Projetos</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Nav>
    </Container>
  );
}
