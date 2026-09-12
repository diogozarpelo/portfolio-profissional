import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const technologies = [
  'React',
  'TypeScript',
  'Python',
  'Kotlin',
  'Laravel',
  'SQL',
]

function HomePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark" aria-hidden="true">
            DZ
          </span>
          <span className="brand-name">Diogo Zarpelão</span>
        </a>

        <nav className="main-navigation" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a className="header-contact" href="#contato">
          Vamos conversar
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" aria-hidden="true" />
              Disponível para oportunidades remotas
            </div>

            <p className="hero-kicker">Desenvolvedor de Software & Web</p>

            <h1>
              Software que resolve.
              <span> Experiências que permanecem.</span>
            </h1>

            <p className="hero-description">
              Desenvolvo produtos web e Android com foco em clareza,
              desempenho e soluções úteis para problemas reais.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#projetos">
                Explorar projetos
                <span aria-hidden="true">↓</span>
              </a>

              <a
                className="secondary-action"
                href="https://github.com/diogozarpelo"
                target="_blank"
                rel="noreferrer"
              >
                Ver GitHub
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <ul className="technology-list" aria-label="Principais tecnologias">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className="hero-visual" aria-label="Resumo da atuação profissional">
            <div className="visual-glow" aria-hidden="true" />

            <article className="workspace-card">
              <header className="workspace-header">
                <div className="window-controls" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>developer.profile</span>
                <span className="workspace-status">online</span>
              </header>

              <div className="workspace-body">
                <div className="workspace-heading">
                  <p>Visão profissional</p>
                  <span>2026</span>
                </div>

                <div className="profile-block">
                  <span className="profile-index">01</span>
                  <div>
                    <strong>Produtos web</strong>
                    <p>Interfaces responsivas e sistemas completos.</p>
                  </div>
                </div>

                <div className="profile-block">
                  <span className="profile-index">02</span>
                  <div>
                    <strong>Aplicações Android</strong>
                    <p>Experiências móveis construídas com Kotlin.</p>
                  </div>
                </div>

                <div className="profile-block">
                  <span className="profile-index">03</span>
                  <div>
                    <strong>Soluções para negócios</strong>
                    <p>Tecnologia aplicada a necessidades reais.</p>
                  </div>
                </div>

                <div className="workspace-footer">
                  <span>Itapuí · SP</span>
                  <span>Brasil · Remoto</span>
                </div>
              </div>
            </article>

            <div className="floating-note floating-note-code" aria-hidden="true">
              <span>stack</span>
              React · TypeScript
            </div>

            <div className="floating-note floating-note-focus" aria-hidden="true">
              <span>foco</span>
              Qualidade · Clareza
            </div>
          </div>
        </section>

        <section className="next-section" id="projetos">
          <div className="projects-introduction">
            <div>
              <p className="section-kicker">Projetos selecionados</p>
              <h2>Trabalho real, construído com intenção.</h2>
            </div>

            <p>
              Produtos criados para resolver necessidades concretas, reunindo
              desenvolvimento web, aplicativos Android e decisões técnicas
              orientadas à experiência de uso.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="anchor-section" id="sobre" aria-label="Sobre" />
        <section className="anchor-section" id="contato" aria-label="Contato" />
      </main>
    </div>
  )
}

export default HomePage
