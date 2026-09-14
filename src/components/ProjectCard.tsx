import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, '0')
  const cardClassName = project.featured
    ? 'project-card project-card-featured'
    : project.wide
      ? 'project-card project-card-wide'
      : 'project-card'

  return (
    <article className={cardClassName}>
      <Link
        className="project-image-link"
        to={`/projetos/${project.slug}`}
        tabIndex={-1}
        aria-label={`Conhecer o projeto ${project.title}`}
      >
        <div className="project-image-frame">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading={project.featured ? 'eager' : 'lazy'}
          />
        </div>

        <span className="project-status">{project.status}</span>
        <span className="project-number" aria-hidden="true">
          {projectNumber}
        </span>
      </Link>

      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3>
          <Link to={`/projetos/${project.slug}`}>{project.title}</Link>
        </h3>

        <p>{project.summary}</p>

        <ul
          className="project-technologies"
          aria-label={`Tecnologias utilizadas em ${project.title}`}
        >
          {project.technologies.slice(0, 5).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <Link
          className="project-details-link"
          to={`/projetos/${project.slug}`}
        >
          Ver estudo de caso
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
