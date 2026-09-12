import './SkillsSection.css'

const skillGroups = [
  {
    index: '01',
    title: 'Frontend',
    description: 'Interfaces responsivas, acessíveis e orientadas à experiência.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    index: '02',
    title: 'Backend',
    description: 'Regras de negócio, persistência, integrações e APIs.',
    technologies: ['Python', 'Flask', 'PHP', 'Laravel', 'APIs REST'],
  },
  {
    index: '03',
    title: 'Android',
    description: 'Aplicativos nativos com arquitetura e armazenamento local.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM', 'Material 3'],
  },
  {
    index: '04',
    title: 'Dados',
    description: 'Modelagem e uso de bancos relacionais em aplicações reais.',
    technologies: ['SQL', 'MySQL', 'SQLite', 'Migrations'],
  },
  {
    index: '05',
    title: 'Qualidade',
    description: 'Código versionado, testável, seguro e preparado para evoluir.',
    technologies: ['Git', 'GitHub', 'Testes automatizados', 'OWASP', 'ESLint'],
  },
  {
    index: '06',
    title: 'Infraestrutura',
    description: 'Fundamentos para publicação, redes e ambientes modernos.',
    technologies: ['AWS', 'DNS', 'Webhooks', 'Filas', 'Deploy'],
  },
]

function SkillsSection() {
  return (
    <section className="skills-section" id="tecnologias">
      <div className="skills-heading">
        <div>
          <p className="section-kicker">Tecnologias e práticas</p>
          <h2>Uma base técnica que atravessa o produto inteiro.</h2>
        </div>

        <p>
          Conhecimentos aplicados em projetos web, sistemas de negócio e
          aplicativos Android, do planejamento à validação.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group-heading">
              <span>{group.index}</span>
              <h3>{group.title}</h3>
            </div>

            <p>{group.description}</p>

            <ul aria-label={`Tecnologias de ${group.title}`}>
              {group.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
