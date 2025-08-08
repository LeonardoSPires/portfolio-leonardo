import { Container, Title, Subtitle, Button, Image } from "./styles";

export default function Hero() {
  return (
    <Container id="hero">
      <div>
        <Title>Leonardo Pires</Title>
        <Subtitle>Desenvolvedor React</Subtitle>
        <Button href="#projects">Ver Projetos</Button>
      </div>
      <div>
        <Image src="src\assets\fotoPortColor.png" alt="Leonardo Pires" />
      </div>
    </Container>
  );
}
