import { Container, Title, Subtitle, Button, Image } from "./styles";
import fotoPortColor from "../../assets/fotoPortColor.png"; // ajuste o caminho

export default function Hero() {
  return (
    <Container id="hero">
      <div>
        <Title>Leonardo Pires</Title>
        <Subtitle>Desenvolvedor React</Subtitle>
        <Button href="#projects">Ver Projetos</Button>
      </div>
      <div>
        <Image src={fotoPortColor} alt="Leonardo Pires" />
      </div>
    </Container>
  );
}
