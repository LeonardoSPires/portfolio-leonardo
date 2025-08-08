import styled from "styled-components";

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0px auto;
  height: 100vh;
  padding-top: 50px;
`;


export const TitleProject = styled.h2`
  font-size: 2rem;
  color: #FF6B00;
  margin-bottom: 1rem;
`;

export const SubtitleProject = styled.p`
  font-size: 1.25rem;
  color: #B3B3B3;
  max-width: 700px;
  margin-bottom: 2rem;
`;

export const ProjectsSection = styled.section`
  width: 100%;
  background-color: #0D0D0D;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
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
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectTitle = styled.h3`
  padding: 1rem;
  color: #FF6B00;
  font-size: 1.2rem;
  text-align: center;
`;
