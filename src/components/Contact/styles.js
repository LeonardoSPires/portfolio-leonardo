import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 2rem;
  padding: 4rem 2rem;
  align-items: center;
  flex-wrap: wrap;
  background: #0d0d0d;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Right = styled.div`
  flex: 1;
  min-width: 300px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.p`
  color: #bbb;
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background: #222;
  color: #fff;
  outline: none;
  font-size: 1rem;

  &::placeholder {
    color: #777;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
`;

export const Textarea = styled.textarea`
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background: #222;
  color: #fff;
  outline: none;
  resize: none;
  font-size: 1rem;

  &::placeholder {
    color: #777;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
`;

export const Button = styled.button`
  background: #ff5722;
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #e03400ff;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
`;

export const StatusMessage = styled.p`
  font-size: 0.9rem;
  padding: 0.6rem;
  border-radius: 6px;
  text-align: center;
  color: ${({ $type }) => ($type === "success" ? "#d4edda" : "#f8d7da")};
  background: ${({ $type }) => ($type === "success" ? "#155724" : "#721c24")};
  opacity: 0.9;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
