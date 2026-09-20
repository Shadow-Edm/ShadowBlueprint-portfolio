function Education() {
  const formations = [
    {
      period: '2024 — 2026',
      title: 'BTS Génie Logiciel',
      school: 'ISPL / INUBIL — Douala',
      description:
        'Formation orientée vers la conception, le développement et la maintenance de solutions logicielles. Acquisition de compétences en programmation, bases de données, développement web et mobile.',
      current: true,
    },
    {
      period: '2020 — 2021',
      title: 'Formation en Infographie 2D',
      school: 'Localhost Academy',
      description:
        'Formation axée sur les fondamentaux de la conception graphique et de la création de contenus visuels numériques.',
      current: false,
    },
    {
      period: '2018',
      title: 'Baccalauréat D',
      school: 'Cameroun',
      description:
        'Obtention du baccalauréat, avec une formation scientifique ayant renforcé les bases en mathématiques, sciences et raisonnement logique.',
      current: false,
    },
  ]

  return (
    <section
      id="formation"
      className="bg-slate-100 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        {/* En-tête */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Mon parcours
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Formation & parcours académique
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Mon parcours académique m'a permis de développer progressivement
            mes compétences techniques et ma capacité à concevoir des
            solutions numériques.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Ligne verticale */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-300 md:left-1/2 md:block" />

          <div className="space-y-10">

            {formations.map((formation, index) => (
              <div
                key={formation.title}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >

                {/* Point central */}
                <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-100 bg-blue-600 md:block" />

                {/* Contenu */}
                <div
                  className={
                    index % 2 === 0
                      ? 'md:col-start-1'
                      : 'md:col-start-2'
                  }
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                    {/* Période */}
                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <span className="text-sm font-semibold text-blue-600">
                        {formation.period}
                      </span>

                      {formation.current && (
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          Diplôme obtenu
                        </span>
                      )}

                    </div>

                    {/* Titre */}
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {formation.title}
                    </h3>

                    {/* Établissement */}
                    <p className="mt-2 font-medium text-slate-600">
                      {formation.school}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {formation.description}
                    </p>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Message final */}
        <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">

          <h3 className="text-xl font-bold text-slate-900">
            L'apprentissage continue
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            Au-delà de ma formation académique, je continue à développer
            mes compétences à travers des projets personnels, la pratique
            et la découverte de nouvelles technologies.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Education