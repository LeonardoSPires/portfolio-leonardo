import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 4rem;
  flex-wrap: wrap;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 3;
    background: linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
      
    );
  }

  > * {
    position: relative;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 8rem;
    height: auto; /* para ajustar altura no mobile */
    justify-content: center;
    text-align: center;
  }
`;

export const SectionHero = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  text-shadow: 5px 5px 10px #ff5722;
  color: white;
  z-index: 4;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #B3B3B3;
  z-index: 4;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Button = styled.a`
  display: inline-block;
  background: #ff5722;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  z-index: 4;

   &:hover {
    background: #e03400ff;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

export const Image = styled.img`
  height: 100vh;
  border-radius: 16px;
  object-fit: cover;
  z-index: 1;


  @media (max-width: 768px) {
    height: auto;
    max-width: 90%;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    border-radius: 8px;
  }
`;
