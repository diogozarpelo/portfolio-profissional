import { useCallback, useEffect, useRef, useState } from 'react'
import type { GalleryImage } from '../data/projectGalleries'
import './ProjectGallery.css'

type ProjectGalleryProps = {
  projectTitle: string
  images: GalleryImage[]
}

function ProjectGallery({ projectTitle, images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const galleryTrackRef = useRef<HTMLDivElement>(null)
  const selectedImage =
    selectedIndex === null ? undefined : images[selectedIndex]

  const updateCarouselControls = useCallback(() => {
    const track = galleryTrackRef.current

    if (!track) {
      return
    }

    const tolerance = 3
    const maximumScroll = track.scrollWidth - track.clientWidth

    setCanScrollPrevious(track.scrollLeft > tolerance)
    setCanScrollNext(track.scrollLeft < maximumScroll - tolerance)
  }, [])

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(
      updateCarouselControls,
    )

    window.addEventListener('resize', updateCarouselControls)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', updateCarouselControls)
    }
  }, [images.length, updateCarouselControls])

  useEffect(() => {
    if (selectedIndex === null) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedIndex(null)
      }

      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) =>
          current === null ? null : (current - 1 + images.length) % images.length,
        )
      }

      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % images.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [images.length, selectedIndex])

  function scrollGallery(direction: 'previous' | 'next') {
    const track = galleryTrackRef.current

    if (!track) {
      return
    }

    const firstCard = track.querySelector<HTMLElement>('.gallery-card')
    const cardWidth = firstCard?.offsetWidth ?? track.clientWidth
    const distance = cardWidth + 16

    track.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth',
    })
  }

  function showPreviousImage() {
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    )
  }

  function showNextImage() {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    )
  }

  if (images.length === 0) {
    return null
  }

  return (
    <section className="project-gallery-section">
      <div className="project-gallery-heading">
        <div>
          <p className="section-kicker">Interface em detalhes</p>
          <h2>Explore as principais telas.</h2>
        </div>

        <p>
          Selecione uma imagem para visualizar a interface de {projectTitle} em
          tamanho ampliado.
        </p>
      </div>

      <div className="project-gallery-viewport">
        <button
          className="gallery-edge-control gallery-edge-control-previous"
          type="button"
          onClick={() => scrollGallery('previous')}
          disabled={!canScrollPrevious}
          aria-label="Mostrar imagens anteriores"
        >
          &larr;
        </button>

        <div
          className="project-gallery-grid"
          ref={galleryTrackRef}
          onScroll={updateCarouselControls}
        >
          {images.map((image, index) => (
            <button
              className={`gallery-card gallery-card-${image.format}`}
              type="button"
              key={image.src}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Ampliar imagem: ${image.caption}`}
            >
              <span className="gallery-image">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </span>

              <span className="gallery-caption">
                <span>{String(index + 1).padStart(2, '0')}</span>
                {image.caption}
                <strong aria-hidden="true">&#8599;</strong>
              </span>
            </button>
          ))}
        </div>

        <button
          className="gallery-edge-control gallery-edge-control-next"
          type="button"
          onClick={() => scrollGallery('next')}
          disabled={!canScrollNext}
          aria-label="Mostrar próximas imagens"
        >
          &rarr;
        </button>
      </div>

      {selectedImage && selectedIndex !== null && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de ${projectTitle}`}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gallery-close"
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Fechar imagem ampliada"
              autoFocus
            >
              &times;
            </button>

            <div
              className={`gallery-modal-image gallery-modal-image-${selectedImage.format}`}
            >
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>

            <div className="gallery-modal-footer">
              <p>{selectedImage.caption}</p>

              <div className="gallery-navigation">
                <span>
                  {String(selectedIndex + 1).padStart(2, '0')} /{' '}
                  {String(images.length).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Ver imagem anterior"
                >
                  &larr;
                </button>

                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Ver próxima imagem"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectGallery
