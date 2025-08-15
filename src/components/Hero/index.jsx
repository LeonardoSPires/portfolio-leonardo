import React from "react";
import { Container, SectionHero, Title, Subtitle, Button, Image } from "./styles";
import fotoPortColor from "../../assets/fotoHero.png";

export default function Hero() {
  return (
    <Container id="home">
      {/* Texto entrando da esquerda */}
      <SectionHero
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
      >
        <Title>Leonardo Pires</Title>
        <Subtitle>Desenvolvedor React</Subtitle>
        <Button href="#projects">Ver Projetos</Button>
      </SectionHero>

      {/* Imagem entrando da direita */}
      <SectionHero
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut"}}
      >
        <Image src={fotoPortColor} alt="Leonardo Pires" />
      </SectionHero>
    </Container>
  );
}
