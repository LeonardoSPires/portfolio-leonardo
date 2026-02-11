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
    description: 'Site institucional para palestrante, focado em autoridade, posicionamento de marca pessoal e conversão de novas palestras.',
    tags: ['React', 'Vite', 'Styled Components'],
    url: 'https://www.elgacosta.com.br/',
  },
  {
    title: 'Eua For Adults',
    description: 'Site para aulas de inglês voltadas ao público adulto, responsiva e centrada na captação de alunos.',
    tags: ['React', 'Vite', 'Styled Components'],
    url: 'https://euaforadults.com',
  },
  {
    title: 'Dev Movies',
    description: 'Dashboard de filmes que exibe sinopse, avaliação e trailer consumindo uma API pública, com interface responsiva e foco em experiência do usuário.',
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
