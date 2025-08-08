import React from "react";

import { Container, Title, Subtitle, Button, Image, SectionHero } from "./styles";
import fotoPortColor from "../../assets/fotoPortColor.png";


export default function Hero() {
  return (
    <Container id="home">
      <SectionHero>
        <Title>Leonardo Pires</Title>
        <Subtitle>Desenvolvedor React</Subtitle>
        <Button href="#projects">Ver Projetos</Button>
      </SectionHero>
      <SectionHero>
        <Image src={fotoPortColor} alt="Leonardo Pires" />
      </SectionHero>
    </Container>
  );
}
