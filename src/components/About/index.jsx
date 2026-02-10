import React from 'react';
import {
  AboutSection,
  AboutInner,
  AboutText,
  AboutTitle,
  AboutLead,
  AboutGrid,
  AboutCard,
} from './styles';

const About = () => {
  return (
    <AboutSection id="about">
      <AboutInner>
        <AboutText>
          <AboutTitle>Sobre mim</AboutTitle>
          <AboutLead>
             Atuo como desenvolvedor Full Stack com experiência em Front-End e Back-End. Trabalho com React, JavaScript e Node.js, criando aplicações completas, APIs bem estruturadas e interfaces modernas, com foco em código limpo, performance e boas práticas.
          </AboutLead>
        </AboutText>
        <AboutGrid>
          <AboutCard>
            <h4>Processo claro</h4>
            <p>Briefing objetivo, prototipo rapido e entrega incremental.</p>
          </AboutCard>
          <AboutCard>
            <h4>Visual limpo</h4>
            <p>Tipografia forte, cores suaves e layout com respiro.</p>
          </AboutCard>
          <AboutCard>
            <h4>Codigo enxuto</h4>
            <p>Componentes reutilizaveis e foco em performance.</p>
          </AboutCard>
        </AboutGrid>
      </AboutInner>
    </AboutSection>
  );
};

export default About;
