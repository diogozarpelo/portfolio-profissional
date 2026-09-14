import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects'
import HomePage from './HomePage'

function renderHomePage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  )
}

describe('HomePage', () => {
  it('exibe a apresentação principal do portfólio', () => {
    renderHomePage()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /software que resolve/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Disponível para oportunidades remotas'),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /ver github/i }),
    ).toHaveAttribute('href', 'https://github.com/diogozarpelo')
  })

  it('exibe todos os projetos cadastrados', () => {
    renderHomePage()

    for (const project of projects) {
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: project.title,
        }),
      ).toBeInTheDocument()
    }
  })

  it('oferece um link para pular diretamente ao conteúdo principal', () => {
    renderHomePage()

    expect(
      screen.getByRole('link', { name: /pular para o conteúdo/i }),
    ).toHaveAttribute('href', '#conteudo-principal')

    expect(document.querySelector('#conteudo-principal')).toBeInTheDocument()
  })

  it('abre e fecha o menu de navegação mobile', async () => {
    const user = userEvent.setup()

    renderHomePage()

    const openButton = screen.getByRole('button', {
      name: 'Abrir menu',
    })

    expect(openButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(openButton)

    const closeButton = screen.getByRole('button', {
      name: 'Fechar menu',
    })

    expect(closeButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(closeButton)

    expect(
      screen.getByRole('button', {
        name: 'Abrir menu',
      }),
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('fecha o menu mobile ao selecionar uma opção de navegação', async () => {
    const user = userEvent.setup()

    renderHomePage()

    await user.click(
      screen.getByRole('button', {
        name: 'Abrir menu',
      }),
    )

    await user.click(
      screen.getByRole('link', {
        name: 'Projetos',
      }),
    )

    expect(
      screen.getByRole('button', {
        name: 'Abrir menu',
      }),
    ).toHaveAttribute('aria-expanded', 'false')
  })
})
