import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {
  const project = projects[0]

  it('exibe as principais informações do projeto', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={project} index={0} />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: project.title,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(project.summary)).toBeInTheDocument()
    expect(screen.getByAltText(project.imageAlt)).toBeInTheDocument()
    expect(screen.getByText(project.status)).toBeInTheDocument()
  })

  it('aponta os links principais para a página correta do projeto', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={project} index={0} />
      </MemoryRouter>,
    )

    const expectedPath = `/projetos/${project.slug}`

    expect(
      screen.getByRole('link', { name: project.title }),
    ).toHaveAttribute('href', expectedPath)

    expect(
      screen.getByRole('link', { name: /ver estudo de caso/i }),
    ).toHaveAttribute('href', expectedPath)

    expect(
      screen.getByRole('link', {
        name: `Conhecer o projeto ${project.title}`,
      }),
    ).toHaveAttribute('tabindex', '-1')
  })

  it('exibe no máximo cinco tecnologias no card', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={project} index={0} />
      </MemoryRouter>,
    )

    const technologyList = screen.getByRole('list', {
      name: `Tecnologias utilizadas em ${project.title}`,
    })

    expect(technologyList.children).toHaveLength(
      Math.min(project.technologies.length, 5),
    )
  })
})
