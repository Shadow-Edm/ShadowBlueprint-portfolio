import ShadowBlueprintIcon from './ShadowBlueprintIcon'

function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-slate-950"
    >
      {/* Décoration d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      {/* Contenu */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

        {/* Partie gauche */}
        <div>

          {/* Petit badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span className="text-sm font-medium text-slate-300">
              Disponible pour de nouvelles opportunités
            </span>
          </div>

          {/* Titre */}
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bonjour, je suis{' '}
            <span className="text-blue-500">
              Edmond
            </span>
            .
          </h1>

          <div>
            <ShadowBlueprintIcon size={180} />
          </div>

          {/* Métier */}
          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Développeur logiciel
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Je conçois et développe des applications web et mobiles
            modernes, avec une attention particulière portée à
            l'expérience utilisateur, à la qualité du code et aux
            besoins du projet.
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400">
              React
            </span>

            <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400">
              Laravel
            </span>

            <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400">
              Flutter
            </span>

            <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400">
              JavaScript
            </span>

            <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400">
              Tailwind CSS
            </span>
          </div>

          {/* Boutons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projets"
              className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Voir mes projets
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Me contacter
            </a>
            
            <a
              href="/cv"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Voir mon CV
            </a>

            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              Télécharger PDF
            </a>

          </div>

        </div>

        {/* Partie droite */}
        <div className="hidden justify-center lg:flex">

          <div className="relative">

            {/* Cercle principal */}
            <div className="flex h-80 w-80 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-2xl">

              <div className="flex h-64 w-64 items-center justify-center rounded-full border border-blue-500/30 bg-slate-950">

                <div className="text-center">
                  <div className="text-6xl">
                    {'</>'}
                  </div>

                  <p className="mt-4 text-sm font-medium text-slate-400">
                    Code · Design · Innovation
                  </p>
                </div>

              </div>

            </div>

            {/* Petit élément décoratif */}
            <div className="absolute -right-4 top-10 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl">
              <p className="text-xs text-slate-400">
                Stack
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                React · Laravel
              </p>
            </div>

            <div className="absolute -bottom-4 -left-8 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl">
              <p className="text-xs text-slate-400">
                Focus
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Web & Mobile
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero