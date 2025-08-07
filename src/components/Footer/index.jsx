import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem; text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <p>Entre em contato: leonardo@example.com</p>
      <p>
        <a href="https://github.com/leonardospires" target="_blank" rel="noreferrer">GitHub</a> |
        <a href="https://linkedin.com/in/leonardospires" target="_blank" rel="noreferrer"> LinkedIn</a>
      </p>
    </FooterContainer>
  );
}
