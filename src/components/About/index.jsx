import React from "react";

import { Container, Content, Title, Text } from "./styles";
 // Certifique-se de que o caminho está correto

export default function About() {
  return (
    <Container id="about">
      <Content 
      initial={{ opacity: 0, y: 50 }}      // começa invisível e deslocado para baixo
      whileInView={{ opacity: 1, y: 0 }}  // anima ao entrar na tela
      viewport={{ once: true, amount: 0.3 }} // anima apenas uma vez quando 30% visível
      transition={{ duration: 0.8, ease: "easeOut" }} 
      >
        <Title>Sobre mim</Title>
        
        <Text>
          Especializado em React, Vite e Styled Components. Transformando ideias em interfaces modernas, rápidas e responsivas.
          Com foco em desempenho e experiência do usuário, desenvolvo aplicações web responsivas e acessíveis. Domino ferramentas como Git, Figma, consumo de APIs REST e integração com bibliotecas modernas.
          Tenho experiência prática em criação de componentes reutilizáveis, boas práticas de organização de código e metodologias ágeis. 
          Meu objetivo é criar interfaces que unam performance, design e funcionalidade.
        </Text>

      </Content>
    </Container>
  );
}
