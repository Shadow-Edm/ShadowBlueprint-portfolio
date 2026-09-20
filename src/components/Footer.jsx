import ShadowBlueprintIcon from './ShadowBlueprintIcon'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Partie principale */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Présentation */}
          <div>

            {/* Logo */}
            <a
              href="#accueil"
              className="flex items-center gap-0 text-xl font-bold tracking-tight text-slate-000"
            >
              <ShadowBlueprintIcon size={38} />
                                
              <span className="text-blue-600">&lt;</span>
                ShadowBlueprint
              <span className="text-blue-600">/&gt;</span>
                                
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Développeur logiciel passionné par la création
              d'applications web et mobiles modernes.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <ul className="mt-4 space-y-3 text-sm">

              <li>
                <a
                  href="#accueil"
                  className="transition hover:text-white"
                >
                  Accueil
                </a>
              </li>

              <li>
                <a
                  href="#apropos"
                  className="transition hover:text-white"
                >
                  À propos
                </a>
              </li>

              <li>
                <a
                  href="#competences"
                  className="transition hover:text-white"
                >
                  Compétences
                </a>
              </li>

              <li>
                <a
                  href="#projets"
                  className="transition hover:text-white"
                >
                  Projets
                </a>
              </li>

              <li>
                <a
                  href="#formation"
                  className="transition hover:text-white"
                >
                  Formation
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Réseaux */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Me retrouver
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Retrouvez mes projets et mon parcours professionnel
              en ligne.
            </p>

            <div className="mt-5 flex gap-3">

              <a
                href="https://github.com/Shadow-Edm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold text-slate-300 transition hover:border-white hover:bg-white hover:text-slate-950"
              >
                GH
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold text-slate-300 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                in
              </a>

              <a
                href="#contact"
                aria-label="Me contacter"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold text-slate-300 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                @
              </a>

            </div>

          </div>

        </div>

        {/* Séparateur */}
        <div className="my-10 h-px bg-slate-800" />

        {/* Bas du footer */}
        <div className="flex flex-col gap-4 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p>
            © {currentYear} Edmond. Tous droits réservés.
          </p>

          <p>
            Conçu avec React & Tailwind CSS.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer