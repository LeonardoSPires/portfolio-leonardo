import React, { useState, useEffect } from "react";
import {
  Container,
  Logo,
  Nav,
  NavLink,
  Hamburger,
  MobileMenu,
  Overlay,
} from "./styles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // ativa se rolou mais de 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOverlayClick = () => setIsOpen(false);

  return (
    <>
      <Container scrolled={scrolled}>
        <Logo>L.Dev</Logo>

        <Nav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </Nav>

        <Hamburger onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          <div />
          <div />
          <div />
        </Hamburger>
      </Container>

      {isOpen && (
        <>
          <Overlay onClick={handleOverlayClick} />
          <MobileMenu>
            <NavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink href="#about" onClick={() => setIsOpen(false)}>
              Sobre
            </NavLink>
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>
              Projetos
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contato
            </NavLink>
          </MobileMenu>
        </>
      )}
    </>
  );
}
