import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: flex-end;
  background-color: #1f1f1f;

  nav a {
    margin-left: 2rem;
    color: #00d8ff;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
