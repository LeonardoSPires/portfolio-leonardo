import React from 'react';
import {
  ContactSection,
  ContactInner,
  ContactTitle,
  ContactSubtitle,
  ContactGrid,
  ContactCard,
  ContactForm,
  InputGroup,
  SubmitButton,
} from './styles';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactInner>
        <div>
          <ContactTitle>Vamos criar algo direto ao ponto</ContactTitle>
          <ContactSubtitle>
            Me conte sobre seu projeto e eu respondo com uma proposta clara.
          </ContactSubtitle>
          <ContactGrid>
            <ContactCard>
              <h4>Email</h4>
              <a href="mailto:leopires1988@gmail.com">leopires1988@gmail.com</a>
            </ContactCard>
            <ContactCard>
              <h4>WhatsApp</h4>
              <a
                href="https://wa.me/5521989565184"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 21 98956-5184
              </a>
            </ContactCard>
            <ContactCard>
              <h4>Local</h4>
              <p>Rio de Janeiro - Brasil</p>
            </ContactCard>
            <ContactCard>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/leonardodasilvapires" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/leonardodasilvapires</a>
            </ContactCard>
            <ContactCard>
              <h4>GitHub</h4>
              <a href="https://github.com/LeonardoSPires" target="_blank" rel="noopener noreferrer">https://github.com/LeonardoSPires</a>
            </ContactCard>
          </ContactGrid>
        </div>
        <ContactForm>
          <InputGroup>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" placeholder="Seu nome" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Seu email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="project">Projeto</label>
            <textarea id="project" rows="4" placeholder="Descreva o projeto" />
          </InputGroup>
          <SubmitButton type="button">Enviar mensagem</SubmitButton>
        </ContactForm>
      </ContactInner>
    </ContactSection>
  );
};

export default Contact;
