import styled from "styled-components";

export const Container = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "scrolled"
})`
  background-color: ${({ scrolled }) => (scrolled ? "#0D0D0D" : "transparent")};
  padding: 1.5rem 2rem;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ scrolled }) =>
    scrolled ? "1px solid #333" : "none"};
  transition: background-color 0.5s ease, border-bottom 0.3s ease;
  z-index: 1000;
`;


// o resto permanece igual


export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #F5F5F5;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #B3B3B3;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #FF6B00;
  }
`;

// Botão hamburguer (quadrado com 3 linhas)
export const Hamburger = styled.button`
  display: none;
  cursor: pointer;
  width: 30px;
  height: 22px;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  border: none;
  padding: 0;

  div {
    height: 4px;
    background-color: #FF6B00;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Menu mobile fixo no canto direito
export const MobileMenu = styled.nav`
  position: fixed;
  top: 60px; /* altura do header */
  right: 1rem;
  background-color: #0D0D0D;
  border: 1px solid #FF6B00;
  border-radius: 8px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1100;
  min-width: 150px;
`;

// Fundo escuro transparente para fechar menu clicando fora
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1050;
`;
