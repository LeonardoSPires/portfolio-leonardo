import React, { useState, useEffect } from 'react';
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
  StatusMessage,
} from './styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: '',
  });

  useEffect(() => {
    if (!status.message) return;

    const timer = setTimeout(() => {
      setStatus((prev) => ({
        ...prev,
        message: '',
        success: null,
      }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [status.message]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjbjrnj';

    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project,
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', project: '' });
        setStatus({
          submitting: false,
          success: true,
          message: 'Mensagem enviada com sucesso! Em breve entro em contato.',
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: 'Não foi possível enviar sua mensagem. Tente novamente em alguns instantes.',
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.',
      });
    }
  };

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
        <ContactForm onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="project">Projeto</label>
            <textarea
              id="project"
              rows="4"
              placeholder="Descreva o projeto"
              value={formData.project}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <SubmitButton type="submit" disabled={status.submitting}>
            {status.submitting ? 'Enviando...' : 'Enviar mensagem'}
          </SubmitButton>
          {status.message && (
            <StatusMessage success={status.success}>{status.message}</StatusMessage>
          )}
        </ContactForm>
      </ContactInner>
    </ContactSection>
  );
};

export default Contact;
