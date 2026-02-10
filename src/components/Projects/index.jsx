import React from 'react';
import {
  ProjectsSection,
  ProjectsInner,
  ProjectsHeader,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectMeta,
} from './styles';

const projects = [
  {
    title: 'Palestrante Elga',
    description: 'Site institucional com foco em autoridade e conversao.',
    tags: ['React', 'Vite', 'Styled Components'],
    url: 'https://www.elgacosta.com.br/',
  },
  {
    title: 'Eua For Adults',
    description: 'Site para aulas particulares de ingles com visual limpo.',
    tags: ['React', 'Vite', 'Styled Components'],
    url: 'https://euaforadults.com',
  },
  {
    title: 'Dev Movies',
    description: 'Resumo de filmes com trailer e dados via API.',
    tags: ['React', 'API', 'UI'],
    url: 'https://leonardospires.github.io/dev-movies/',
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsInner>
        <ProjectsHeader>
          <ProjectsTitle>Projetos em destaque</ProjectsTitle>
          <ProjectsSubtitle>
            Alguns trabalhos recentes com foco em clareza e impacto visual.
          </ProjectsSubtitle>
        </ProjectsHeader>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.title}>
              <h4>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h4>
              <p>{project.description}</p>
              <ProjectMeta>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </ProjectMeta>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsInner>
    </ProjectsSection>
  );
};

export default Projects;
