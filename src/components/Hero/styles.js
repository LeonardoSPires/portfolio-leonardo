import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 4rem;
  flex-wrap: wrap;
  height: 100vh;
  div {
    width: 50%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

    // Aplica a máscara com gradiente
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
    to bottom, 
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
    );
  }

  // Eleva os filhos acima da máscara
  > * {
    position: relative;
    
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  z-index: 3;
  text-shadow: 5px 5px 10px #ff5722;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #B3B3B3;
  z-index: 3;
`;

export const Button = styled.a`
  display: inline-block;
  background: #ff5722;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  z-index: 3;
`;

export const Image = styled.img`
  height: 100vh;
  border-radius: 16px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
