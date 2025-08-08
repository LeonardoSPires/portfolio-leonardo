
import { Container, Content, Title, Text } from "./styles";
 // Certifique-se de que o caminho está correto

export default function About() {
  return (
    <Container id="about">
      <Content>
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
