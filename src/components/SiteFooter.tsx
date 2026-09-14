import { Link } from 'react-router-dom'
import './SiteFooter.css'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand" to="/" aria-label="Voltar para a página inicial">
        <span className="brand-mark" aria-hidden="true">
          DZ
        </span>
        <span className="brand-name">Diogo Zarpelão</span>
      </Link>

      <p>
        Desenvolvedor de Software/Web Júnior · Itapuí, SP · Brasil
      </p>

      <a href="#inicio">
        Voltar ao topo
        <span aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}

export default SiteFooter
