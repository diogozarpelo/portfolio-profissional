import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { projects } from '../data/projects'
import ProjectPage from './ProjectPage'

function renderProjectPage(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projetos/:slug" element={<ProjectPage />} />
        <Route path="/" element={<div>Página inicial</div>} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('ProjectPage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollTo', {
      value: vi.fn(),
      writable: true,
    })
  })

  it.each(projects)(
    'exibe corretamente a página do projeto $title',
    (project) => {
      renderProjectPage(`/projetos/${project.slug}`)

      expect(
        screen.getByRole('heading', {
          level: 1,
          name: project.title,
        }),
      ).toBeInTheDocument()

      expect(screen.getByText(project.description)).toBeInTheDocument()
      expect(screen.getByText(project.status)).toBeInTheDocument()

      expect(
        screen.getByRole('link', {
          name: /ver repositório/i,
        }),
      ).toHaveAttribute('href', project.repository)
    },
  )

  it('atualiza o título da página e move o foco para o conteúdo principal', () => {
    const project = projects[0]

    renderProjectPage(`/projetos/${project.slug}`)

    expect(document.title).toBe(
      `${project.title} | Diogo Zarpelão`,
    )

    const main = screen.getByRole('main', {
      name: project.title,
    })

    expect(main).toHaveFocus()
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'instant',
    })
  })

  it('redireciona para a página inicial quando o projeto não existe', () => {
    renderProjectPage('/projetos/projeto-inexistente')

    expect(
      screen.getByText('Página inicial'),
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { level: 1 }),
    ).not.toBeInTheDocument()
  })
})
