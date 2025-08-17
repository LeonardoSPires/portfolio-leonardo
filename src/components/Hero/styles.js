import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4rem;
  flex-wrap: wrap;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 5;
    background: linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }

  > * {
    position: relative;
    z-index: 4;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 8rem;
    height: auto;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const SectionHero = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 45%;

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
  
  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #B3B3B3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.a`
  padding: 1rem 2rem;
  background: #ff5722;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background: #e03400ff;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100vh;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: auto;
  }
`;
