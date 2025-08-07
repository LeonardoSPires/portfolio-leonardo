import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem; text-align: center; max-width: 600px; margin: 0 auto;
`;

export default function About() {
  return (
    <AboutSection id="about">
      <h2>Sobre Mim</h2>
      <p>
        Sou Leonardo da Silva Pires, desenvolvedor Front-End focado em criar interfaces intuitivas e modernas.
        Tenho experiência com React, Styled Components e estou sempre em busca de novos desafios e aprendizados.
      </p>
    </AboutSection>
  );
}
