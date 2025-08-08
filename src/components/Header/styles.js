import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ scrolled }) => (scrolled ? "#0D0D0D" : "transparent")};
  padding: 1.5rem 2rem;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ scrolled }) => (scrolled ? "1px solid #333" : "none")};
  transition: background-color 0.5s ease, border-bottom 0.3s ease;
  z-index: 1000;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #F5F5F5;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
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
