import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #0D0D0D;
  color: #F5F5F5;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #333;
  font-size: 0.95rem;

  a:hover {
    color: #FF6B00;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 0.85rem;
  }
`;

export const FooterLink = styled.a`
  color: #B3B3B3;
  margin: 0 0.5rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #FF6B00;
  }

  @media (max-width: 480px) {
    margin: 0 0.3rem;
  }
`;
