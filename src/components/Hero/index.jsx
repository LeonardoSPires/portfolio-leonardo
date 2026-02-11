import React from 'react';
import { motion } from 'framer-motion';
import {
  HeroSection,
  HeroInner,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  PrimaryButton,
  GhostButton,
  HeroCard,
  HeroMeta,
  MetaItem,
} from './styles';

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroInner>
        <HeroText
          as={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSubtitle>Desenvolvedor Fullstack jr</HeroSubtitle>
          <HeroTitle>
            Sites e projeto modernos, limpos e claro para produtos digitais.
          </HeroTitle>
          <HeroActions>
            <PrimaryButton href="#projects">Ver projetos</PrimaryButton>
            <GhostButton href="#contact">Agendar conversa</GhostButton>
          </HeroActions>
        </HeroText>
        <HeroCard
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3>Entrega clara e objetiva</h3>
          <p>
            Interfaces simples, codigo organizado e foco em uma experiencia
            rapida e confiavel.
          </p>
          <HeroMeta>
            <MetaItem>
              <span>React</span>
              <small>interfaces</small>
            </MetaItem>
            <MetaItem>
              <span>Node.js</span>
              <small>apis</small>
            </MetaItem>
            <MetaItem>
              <span>Clean UI</span>
              <small>design</small>
            </MetaItem>
          </HeroMeta>
        </HeroCard>
      </HeroInner>
    </HeroSection>
  );
};

export default Hero;
