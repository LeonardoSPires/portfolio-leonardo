import React, { useState } from "react";
import { 
  Container, 
  Left, 
  Right, 
  Title, 
  Subtitle, 
  Form, 
  Input, 
  Textarea, 
  Button, 
  StatusMessage 
} from "./styles";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" ou "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const res = await fetch("https://getform.io/f/ayvepleb", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setStatusType("success");
      setStatus("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      setStatusType("error");
      setStatus("Erro ao enviar. Tente novamente.");
    }

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

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
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Seu nome" required />
          <Input type="email" name="email" placeholder="Seu email" required />
          <Textarea name="message" placeholder="Sua mensagem" rows="5" required />
          <Button type="submit">Enviar</Button>
          {status && <StatusMessage $type={statusType}>{status}</StatusMessage>}
        </Form>
      </Right>
    </Container>
  );
}
