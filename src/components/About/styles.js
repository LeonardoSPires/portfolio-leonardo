import styled from "styled-components";
import ImagemAbout from "../../assets/imagemAbout.png";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  margin: 150px 100px;

  background: 
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 5%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${ImagemAbout});
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    margin: 120px 50px;
  }

  @media (max-width: 768px) {
    height: auto;
    margin: 80px 20px;
    padding: 40px 10px;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    margin: 60px 10px;
    padding: 20px 5px;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: #FF6B00;
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Text = styled.p`
  color: #B3B3B3;
  font-size: 1.4rem;
  line-height: 1.5;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
