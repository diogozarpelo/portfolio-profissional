import SiteFooter from './SiteFooter'
import './ContactSection.css'

function ContactSection() {
  return (
    <>
      <section className="contact-section" id="contato">
        <div className="contact-glow" aria-hidden="true" />

        <div className="contact-heading">
          <p className="section-kicker">Contato</p>
          <h2>Vamos transformar uma necessidade em software útil.</h2>
          <p>
            Estou disponível para oportunidades remotas, projetos de
            desenvolvimento e conversas sobre tecnologia.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="contact-primary"
            href="mailto:diogozarpelao@gmail.com"
          >
            <span>
              <small>E-mail</small>
              diogozarpelao@gmail.com
            </span>
            <strong aria-hidden="true">↗</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/diogo-zarpel%C3%A3o-918935433/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <small>Perfil profissional</small>
              LinkedIn
            </span>
            <strong aria-hidden="true">↗</strong>
          </a>

          <a
            href="https://github.com/diogozarpelo"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <small>Código e projetos</small>
              GitHub
            </span>
            <strong aria-hidden="true">↗</strong>
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

export default ContactSection
