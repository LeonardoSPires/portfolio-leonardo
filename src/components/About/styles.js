// styles.js
import styled from "styled-components";
import ImagemAbout from "../../assets/imagemAbout.png";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: flex-end; /* texto fica no topo */
  justify-content: center;
  color: white;
  margin: 150px 100px;
  
  background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 1) 5%,      /* Preto no topo */
  rgba(0, 0, 0, 0) 40%,     /* Transparente no meio */
  rgba(0, 0, 0, 0) 60%,     /* Continua transparente */
  rgba(0, 0, 0, 1) 100%     /* Preto na base */
),
url(${ImagemAbout});
background-size: cover;
background-position: center;

`;

export const Content = styled.div`
  max-width: 800px;
  text-align: left;
`;

export const Title = styled.h2`
  color: #FF6B00;
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: #B3B3B3;
  font-size: 1.4rem;
  line-height: 1.5;
  font-weight: bold;
`;
