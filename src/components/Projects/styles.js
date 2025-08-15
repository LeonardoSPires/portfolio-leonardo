import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerProjects = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  /* height: 100vh;  REMOVIDO */
  padding: 50px 20px;  /* padding vertical + horizontal */

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }

  /* Para landscape mobile, só um pouco mais de padding */
  @media (max-width: 768px) and (orientation: landscape) {
    padding: 20px 30px;
  }
`;


export const TitleProject = styled.h2`
  font-size: 2rem;
  color: #FF6B00;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    font-size: 1.8rem;
  }
`;

export const SubtitleProject = styled.p`
  font-size: 1.25rem;
  color: #B3B3B3;
  max-width: 700px;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 100%;
    padding: 0 10px;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    font-size: 1.1rem;
    max-width: 90%;
  }
`;

export const ProjectsSection = styled.section`
  width: 95%;
  background-color: #0D0D0D;
  border-radius: 5px;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 1rem;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    padding: 3rem 1.5rem;
    gap: 1.5rem;
  }
`;

export const ProjectCard = styled.div`
  background-color: #1A1A1A;
  border-left: 4px solid #FF6B00;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 350px;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(255, 107, 0, 0.25);
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    max-width: 300px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 150px;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    height: 170px;
  }
`;

export const ProjectTitle = styled.h3`
  padding: 1rem;
  color: #FF6B00;
  font-size: 1.2rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    font-size: 1.1rem;
  }
`;
