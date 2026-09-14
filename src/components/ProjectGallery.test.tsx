import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ProjectGallery from './ProjectGallery'

const images = [
  {
    src: '/image-1.png',
    alt: 'Tela inicial do projeto',
    caption: 'Tela inicial',
    format: 'desktop' as const,
  },
  {
    src: '/image-2.png',
    alt: 'Tela de detalhes do projeto',
    caption: 'Tela de detalhes',
    format: 'desktop' as const,
  },
  {
    src: '/image-3.png',
    alt: 'Tela final do projeto',
    caption: 'Tela final',
    format: 'desktop' as const,
  },
]

describe('ProjectGallery', () => {
  beforeEach(() => {
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0)
      return 1
    })

    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {})
  })

  it('não renderiza a galeria quando não existem imagens', () => {
    const { container } = render(
      <ProjectGallery projectTitle="Projeto Teste" images={[]} />,
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('exibe todas as imagens disponíveis', () => {
    render(
      <ProjectGallery projectTitle="Projeto Teste" images={images} />,
    )

    for (const image of images) {
      expect(
        screen.getByRole('button', {
          name: `Ampliar imagem: ${image.caption}`,
        }),
      ).toBeInTheDocument()

      expect(screen.getByAltText(image.alt)).toBeInTheDocument()
    }
  })

  it('abre a imagem selecionada em um modal acessível', async () => {
    const user = userEvent.setup()

    render(
      <ProjectGallery projectTitle="Projeto Teste" images={images} />,
    )

    await user.click(
      screen.getByRole('button', {
        name: 'Ampliar imagem: Tela inicial',
      }),
    )

    expect(
      screen.getByRole('dialog', {
        name: 'Galeria de Projeto Teste',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: 'Fechar imagem ampliada',
      }),
    ).toHaveFocus()

    expect(document.body).toHaveStyle({
      overflow: 'hidden',
    })
  })

  it('navega entre as imagens usando as setas do teclado', async () => {
    const user = userEvent.setup()

    render(
      <ProjectGallery projectTitle="Projeto Teste" images={images} />,
    )

    await user.click(
      screen.getByRole('button', {
        name: 'Ampliar imagem: Tela inicial',
      }),
    )

    await user.keyboard('{ArrowRight}')

    expect(
      screen.getByRole('dialog'),
    ).toHaveTextContent('Tela de detalhes')

    expect(
      screen.getByRole('dialog'),
    ).toHaveTextContent('02 / 03')

    await user.keyboard('{ArrowLeft}')

    expect(
      screen.getByRole('dialog'),
    ).toHaveTextContent('Tela inicial')
  })

  it('fecha o modal com Escape e devolve o foco à imagem de origem', async () => {
    const user = userEvent.setup()

    render(
      <ProjectGallery projectTitle="Projeto Teste" images={images} />,
    )

    const trigger = screen.getByRole('button', {
      name: 'Ampliar imagem: Tela de detalhes',
    })

    await user.click(trigger)

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
    expect(document.body).not.toHaveStyle({
      overflow: 'hidden',
    })
  })

  it('mantém a navegação por Tab dentro do modal', async () => {
    const user = userEvent.setup()

    render(
      <ProjectGallery projectTitle="Projeto Teste" images={images} />,
    )

    await user.click(
      screen.getByRole('button', {
        name: 'Ampliar imagem: Tela inicial',
      }),
    )

    const closeButton = screen.getByRole('button', {
      name: 'Fechar imagem ampliada',
    })

    const nextButton = screen.getByRole('button', {
      name: 'Ver próxima imagem',
    })

    nextButton.focus()
    expect(nextButton).toHaveFocus()

    await user.tab()

    expect(closeButton).toHaveFocus()

    await user.tab({ shift: true })

    expect(nextButton).toHaveFocus()
  })
})
