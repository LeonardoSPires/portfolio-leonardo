import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  background-color: #121212;
`;

export const ProjectCard = styled.div`
  background-color: #1f1f1f;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 3px solid #00d8ff;
`;

export const ProjectTitle = styled.h3`
  padding: 1rem;
  font-size: 1.2rem;
  text-align: center;
  color: #00d8ff;
`;
