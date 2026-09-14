import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { findProjectBySlug } from '../data/projects'
import { projectGalleries } from '../data/projectGalleries'
import ProjectGallery from '../components/ProjectGallery'
import SiteFooter from '../components/SiteFooter'
import './ProjectPage.css'

function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? findProjectBySlug(slug) : undefined
  const galleryImages = project
    ? [
        {
          src: project.image,
          alt: project.imageAlt,
          caption: `Visão principal de ${project.title}`,
          format:
            project.category === 'Aplicativo Android'
              ? ('mobile' as const)
              : ('desktop' as const),
        },
        ...(projectGalleries[project.slug] ?? []),
      ]
    : []

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })

    if (project) {
      document.title = `${project.title} | Diogo Zarpelão`
    }

    return () => {
      document.title = 'Diogo Zarpelão | Desenvolvedor de Software'
    }
  }, [project])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div id="inicio" className={`project-page project-page-${project.slug}`}>
      <header className="project-page-header">
        <Link className="brand" to="/" aria-label="Voltar para a página inicial">
          <span className="brand-mark" aria-hidden="true">
            DZ
          </span>
          <span className="brand-name">Diogo Zarpelão</span>
        </Link>

        <Link className="back-link" to="/#projetos">
          <span aria-hidden="true">←</span>
          Todos os projetos
        </Link>
      </header>

      <main>
        <section className="project-hero">
          <div className="project-hero-copy">
            <div className="project-page-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
              <span>{project.status}</span>
            </div>

            <p className="section-kicker">Estudo de caso</p>
            <h1>{project.title}</h1>
            <p className="project-lead">{project.description}</p>

            <div className="project-page-actions">
              <a
                className="primary-action"
                href={project.repository}
                target="_blank"
                rel="noreferrer"
              >
                Ver repositório
                <span aria-hidden="true">↗</span>
              </a>

              <Link className="secondary-action" to="/#projetos">
                Voltar ao portfólio
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          <div className="project-hero-media">
            <div className="project-browser">
              <div className="project-browser-bar" aria-hidden="true">
                <div>
                  <span />
                  <span />
                  <span />
                </div>
                <p>{project.slug}.project</p>
                <span>{project.year}</span>
              </div>

              <img src={project.image} alt={project.imageAlt} />
            </div>
          </div>
        </section>

        <section className="project-overview">
          <div className="project-overview-copy">
            <p className="section-kicker">Visão geral</p>
            <h2>Uma solução guiada por necessidades reais.</h2>
            <p>{project.summary}</p>
            <p>
              O projeto foi estruturado com atenção à clareza do fluxo,
              organização do código e evolução contínua, preservando no
              portfólio somente informações adequadas para apresentação
              pública.
            </p>
          </div>

          <div className="project-highlights">
            <div className="project-detail-heading">
              <span>01</span>
              <h2>Principais entregas</h2>
            </div>

            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  <span aria-hidden="true">↗</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ProjectGallery
          projectTitle={project.title}
          images={galleryImages}
        />

        <section className="project-stack-section">
          <div className="project-detail-heading">
            <span>02</span>
            <h2>Tecnologias utilizadas</h2>
          </div>

          <ul className={`project-stack-list project-stack-list-${project.technologies.length}`}> 
            {project.technologies.map((technology, index) => (
              <li key={technology}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {technology}
              </li>
            ))}
          </ul>
        </section>

        <section className="project-next-step">
          <p className="section-kicker">Continuar explorando</p>
          <h2>Conheça os outros projetos do portfólio.</h2>
          <Link className="primary-action" to="/#projetos">
            Ver todos os projetos
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ProjectPage





