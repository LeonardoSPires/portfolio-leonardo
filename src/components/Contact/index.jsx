import React from "react";

import { Container, Left, Right, Title, Subtitle, Form, Input, Textarea, Button } from "./styles";

export default function Contact() {
  return (
    <Container id="contact">
      <Left>
        <Title>Vamos conversar?</Title>
        <Subtitle>
          Tem um projeto em mente ou quer apenas trocar ideias?  
          Me envie uma mensagem e responderei o mais breve possível.
        </Subtitle>
      </Left>

      <Right>
        <Form>
          <Input type="text" placeholder="Seu nome" />
          <Input type="email" placeholder="Seu email" />
          <Textarea placeholder="Sua mensagem" rows="5" />
          <Button type="submit">Enviar</Button>
        </Form>
      </Right>
    </Container>
  );
}
