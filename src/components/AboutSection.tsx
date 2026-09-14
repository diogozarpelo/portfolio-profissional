import { withBaseUrl } from '../utils/withBaseUrl'
import './AboutSection.css'

function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-visual">
        <div className="portrait-frame">
          <img
            src={withBaseUrl('images/profile/diogo-zarpelao.jpg')}
            alt="Retrato profissional de Diogo Zarpelão"
            loading="lazy"
          />

          <div className="portrait-caption">
            <div>
              <span>Base</span>
              Itapuí · SP
            </div>
            <div>
              <span>Atuação</span>
              Remota
            </div>
          </div>
        </div>

        <div className="about-statistics" aria-label="Resumo profissional">
          <div>
            <strong>4</strong>
            <span>Projetos no portfólio</span>
          </div>
          <div>
            <strong>40+</strong>
            <span>Cursos concluídos</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Graduações em andamento</span>
          </div>
        </div>
      </div>

      <div className="about-content">
        <p className="section-kicker">Sobre mim</p>

        <h2>
          Tecnologia com propósito, construída a partir de problemas reais.
        </h2>

        <div className="about-copy">
          <p>
            Sou Diogo Zarpelão, desenvolvedor de software e web em formação
            contínua, com experiência prática na criação de sistemas para
            negócios, aplicações Android e interfaces responsivas.
          </p>

          <p>
            Meu trabalho combina aprendizado técnico, organização e contato
            direto com necessidades reais. Busco transformar processos manuais
            e ideias em produtos claros, úteis e preparados para evoluir.
          </p>
        </div>

        <div className="professional-timeline">
          <article>
            <span className="timeline-index">01</span>
            <div>
              <p className="timeline-label">Experiência</p>
              <h3>Desenvolvedor de Software/Web Júnior · Autônomo</h3>
              <p>
                Desenvolvimento e evolução de soluções web e Android, com
                levantamento de necessidades, implementação, testes,
                documentação e validação com usuários.
              </p>
              <span className="timeline-period">2025 — atual</span>
            </div>
          </article>

          <article>
            <span className="timeline-index">02</span>
            <div>
              <p className="timeline-label">Formação</p>
              <h3>Sistemas de Informação · Bacharelado</h3>
              <p>
                Formação voltada a desenvolvimento de software, arquitetura,
                dados e aplicação de tecnologia em organizações.
              </p>
              <span className="timeline-period">
                Gran Faculdade · Em andamento
              </span>
            </div>
          </article>

          <article>
            <span className="timeline-index">03</span>
            <div>
              <p className="timeline-label">Formação</p>
              <h3>Sistemas para Internet · Tecnólogo</h3>
              <p>
                Formação prática em desenvolvimento web, interfaces, sistemas
                conectados e tecnologias para produtos digitais.
              </p>
              <span className="timeline-period">
                Gran Faculdade · Em andamento
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection


