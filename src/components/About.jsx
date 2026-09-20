function About() {
  return (
    <section
      id="apropos"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* En-tête */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            À propos de moi
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Un développeur passionné par la création de solutions numériques
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Je suis Edmond, développeur logiciel basé à Douala,
            passionné par le développement d'applications web et mobiles.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Texte */}
          <div className="space-y-6">

            <p className="text-base leading-8 text-slate-600">
              Mon objectif est de concevoir des applications utiles,
              modernes et faciles à utiliser. J'aime transformer une
              idée ou un besoin en une solution fonctionnelle, de la
              conception jusqu'à sa mise en production.
            </p>

            <p className="text-base leading-8 text-slate-600">
              Au cours de ma formation en Génie Logiciel, j'ai développé
              des compétences dans plusieurs technologies, notamment
              Laravel, React, Flutter, JavaScript et Tailwind CSS.
            </p>

            <p className="text-base leading-8 text-slate-600">
              Je continue à améliorer mes compétences à travers des
              projets personnels et pratiques, avec un intérêt particulier
              pour le développement web, mobile et la conception de
              solutions répondant à des besoins réels.
            </p>

            {/* Informations */}
            <div className="grid gap-4 pt-4 sm:grid-cols-2">

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">
                  Localisation
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  Douala, Cameroun
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">
                  Domaine
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  Développement logiciel
                </p>
              </div>

            </div>

          </div>

          {/* Carte profil */}
          <div className="relative">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">

              <div className="mb-8 flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  ED
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Edmond
                  </h3>

                  <p className="text-sm text-slate-500">
                    Développeur logiciel
                  </p>
                </div>

              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-2 gap-6">

                <div>
                  <p className="text-3xl font-bold text-blue-600">
                    5+
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Technologies utilisées
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-blue-600">
                    3+
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Projets réalisés
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-blue-600">
                    Web
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Développement
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-blue-600">
                    Mobile
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Applications
                  </p>
                </div>

              </div>

              {/* Séparateur */}
              <div className="my-8 h-px bg-slate-200" />

              <p className="text-sm leading-6 text-slate-600">
                Toujours curieux d'apprendre de nouvelles technologies
                et de relever de nouveaux défis techniques.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About