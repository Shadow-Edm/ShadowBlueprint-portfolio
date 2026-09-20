import { useEffect, useState } from 'react'

import {
  FaGithub,
  FaLaravel,
  FaDatabase,
  FaCss3Alt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'

import { SiPhp } from 'react-icons/si'

function Projects() {
  // Index de l'image actuellement affichée
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const mainProject = {
    title: 'EtudiLog Douala',
    category: 'Plateforme web',
    description:
      "Plateforme numérique de mise en relation entre étudiants et propriétaires de logements à proximité des établissements d'enseignement supérieur de Douala.",
    image: '/projects/etudilog-accueil.png',
    technologies: [
      {
        name: 'Laravel',
        icon: FaLaravel,
      },
      {
        name: 'PHP',
        icon: SiPhp,
      },
      {
        name: 'PostgreSQL',
        icon: FaDatabase,
      },
      {
        name: 'Tailwind CSS',
        icon: FaCss3Alt,
      },
    ],
    github: 'https://github.com/Shadow-Edm/EtudiLog_Douala',
  }

  const screenshots = [
    {
      image: '/projects/etudilog-accueil.png',
      title: 'Page d’accueil',
      description:
        'Présentation de la plateforme et recherche rapide de logements.',
    },
    {
      image: '/projects/etudilog-logements.png',
      title: 'Logements',
      description:
        'Consultation des annonces et des informations sur les logements.',
    },
    {
      image: '/projects/etudilog-apropos.png',
      title: 'Présentation',
      description:
        'Section présentant le fonctionnement et les avantages de la plateforme.',
    },
  ]

  /*
  |--------------------------------------------------------------------------
  | Navigation de la lightbox
  |--------------------------------------------------------------------------
  */

  const openLightbox = (index) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const showPreviousImage = () => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return null
      }

      return currentIndex === 0
        ? screenshots.length - 1
        : currentIndex - 1
    })
  }

  const showNextImage = () => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return null
      }

      return currentIndex === screenshots.length - 1
        ? 0
        : currentIndex + 1
    })
  }

  /*
  |--------------------------------------------------------------------------
  | Navigation clavier
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex === null) {
        return
      }

      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage()
      }

      if (event.key === 'ArrowRight') {
        showNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImageIndex])

  /*
  |--------------------------------------------------------------------------
  | Bloquer le scroll lorsque la lightbox est ouverte
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImageIndex])

  return (
    <>
      <section
        id="projets"
        className="bg-white px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* =========================
              EN-TÊTE
          ========================== */}

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Mes projets
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Des projets concrets pour mettre mes compétences en pratique
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Voici quelques projets sur lesquels j'ai travaillé pour
              développer mes compétences en développement web et mobile.
            </p>

          </div>


          {/* =========================
              PROJET PRINCIPAL
          ========================== */}

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="group relative block w-full cursor-zoom-in overflow-hidden bg-slate-900 text-left"
              aria-label="Agrandir la capture de la page d'accueil"
            >

              <img
                src={mainProject.image}
                alt="Capture d'écran de la page d'accueil d'EtudiLog Douala"
                className="h-auto w-full object-cover object-top transition duration-700 group-hover:scale-[1.01]"
              />

              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  Projet principal
                </span>
              </div>

              <div className="absolute bottom-5 right-5 rounded-lg bg-black/60 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                Cliquer pour agrandir
              </div>

            </button>


            {/* Informations */}

            <div className="p-8 lg:p-10">

              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                <div>

                  <div className="mb-3 flex items-center gap-3">

                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                      {mainProject.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="text-sm text-slate-500">
                      Projet académique / personnel
                    </span>

                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    {mainProject.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                    {mainProject.description}
                  </p>


                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    {mainProject.technologies.map((technology) => {
                      const Icon = technology.icon

                      return (
                        <span
                          key={technology.name}
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                        >
                          <Icon className="text-lg text-blue-600" />
                          {technology.name}
                        </span>
                      )
                    })}

                  </div>

                </div>


                {/* GitHub */}

                <div className="flex flex-wrap gap-3 lg:flex-col">

                  <a
                    href={mainProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <FaGithub className="text-lg" />
                    Voir sur GitHub
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              APERÇU
          ========================== */}

          <div className="mt-16">

            <div className="mb-8">

              <h3 className="text-2xl font-bold text-slate-900">
                Aperçu de l'application
              </h3>

              <p className="mt-2 text-slate-600">
                Quelques interfaces de la plateforme EtudiLog Douala.
              </p>

            </div>


            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {screenshots.map((screenshot, index) => (

                <div
                  key={screenshot.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="relative block w-full cursor-zoom-in overflow-hidden bg-slate-100 text-left"
                    aria-label={`Agrandir la capture ${screenshot.title}`}
                  >

                    <img
                      src={screenshot.image}
                      alt={`Capture ${screenshot.title} - EtudiLog Douala`}
                      className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/20">

                      <span className="rounded-lg bg-black/70 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                        Agrandir
                      </span>

                    </div>

                  </button>


                  <div className="p-5">

                    <h4 className="font-bold text-slate-900">
                      {screenshot.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {screenshot.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* =========================
              PROCHAINS PROJETS
          ========================== */}

          <div className="mt-20">

            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Prochainement
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                D'autres projets seront bientôt disponibles
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Je continue à développer de nouveaux projets web et mobiles
                afin d'enrichir progressivement mon portfolio.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      {selectedImageIndex !== null && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Aperçu des captures EtudiLog"
        >

          {/* =========================
              BOUTON FERMER
          ========================== */}

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Fermer la galerie"
          >
            <FaTimes />
          </button>


          {/* =========================
              BOUTON PRÉCÉDENT
          ========================== */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousImage()
            }}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14"
            aria-label="Image précédente"
          >
            <FaChevronLeft />
          </button>


          {/* =========================
              BOUTON SUIVANT
          ========================== */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNextImage()
            }}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14"
            aria-label="Image suivante"
          >
            <FaChevronRight />
          </button>


          {/* =========================
              CONTENU
          ========================== */}

          <div
            className="flex max-h-[90vh] max-w-7xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={screenshots[selectedImageIndex].image}
              alt={screenshots[selectedImageIndex].title}
              className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
            />


            {/* Titre */}

            <div className="mt-4 text-center">

              <p className="text-base font-semibold text-white">
                {screenshots[selectedImageIndex].title}
              </p>

              <p className="mt-1 text-sm text-slate-300">
                {screenshots[selectedImageIndex].description}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                {selectedImageIndex + 1} / {screenshots.length}
              </p>

            </div>

          </div>

        </div>

      )}

    </>
  )
}

export default Projects