import { ProjectsSection, ProjectCard, ProjectImage, ProjectTitle } from './styles';

import devmoviesImg from '../../assets/devmovies.png';
import listatarefasImg from '../../assets/listatarefas.png';
import newsImg from '../../assets/imagemnews.jpeg';

export default function Projects() {
  const projects = [
    {
      title: 'DevMovies',
      link: 'https://leonardospires.github.io/dev-movies/',
      img: devmoviesImg,
    },
    {
      title: 'Lista de Tarefas',
      link: 'https://leonardospires.github.io/React-lista-produtos/',
      img: listatarefasImg,
    },
    {
      title: 'News',
      link: 'https://leonardospires.github.io/dashboard-insights/',
      img: newsImg,
    },
  ];

  return (
    <ProjectsSection id="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <a href={project.link} target="_blank" rel="noreferrer">
            <ProjectImage src={project.img} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
          </a>
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
}
