import styled from "styled-components";
import backgroundImage from "../../assets/contact-bg.png"; // coloque sua imagem aqui

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.7) 40%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
  color: #fff;
  height: 100vh;
`;

export const Left = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Right = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: background 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Textarea = styled.textarea`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  outline: none;
  resize: none;
  font-family: 'Poppins', sans-serif;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Button = styled.button`
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #ff7b00;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background: #ff5e00;
  }
`;
