import {
  FaArrowLeft,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaTools,
} from 'react-icons/fa'
import ShadowBlueprintIcon from '../components/ShadowBlueprintIcon'

function CV() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      {/* =========================
          BARRE SUPÉRIEURE
      ========================== */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            <a
                href="/"
                className="flex items-center gap-0 text-xl font-bold tracking-tight text-slate-900"
            >
                <ShadowBlueprintIcon size={38} />
                    
                <span className="text-blue-600">&lt;</span>
                    ShadowBlueprint
                <span className="text-blue-600">/&gt;</span>
                    
            </a>

          <div className="flex items-center gap-3">

            <a
              href="/"
              className="hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:flex"
            >
              <FaArrowLeft />
              Portfolio
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <FaDownload />
              <span className="hidden sm:inline">
                Télécharger le CV
              </span>
              <span className="sm:hidden">
                PDF
              </span>
            </a>

          </div>

        </div>
      </header>


      {/* =========================
          CONTENU
      ========================== */}

      <main className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl">

          {/* =========================
              EN-TÊTE DU CV
          ========================== */}

          <section className="bg-slate-950 px-6 py-10 text-white sm:px-10 lg:px-14">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Curriculum Vitae
                </p>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  DJIAHA EDMOND DARYL
                </h1>

                <p className="mt-3 text-xl font-medium text-slate-300">
                  Développeur logiciel
                </p>

              </div>


              {/* Coordonnées */}

              <div className="space-y-3 text-sm text-slate-300">

                <a
                  href="mailto:djiahaedmond@gmail.com"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <FaEnvelope className="text-blue-400" />
                  djiahaedmond@gmail.com
                </a>

                <a
                  href="tel:+237693332799"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <FaPhone className="text-blue-400" />
                  +237 693 332 799
                </a>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                  Douala, Cameroun
                </div>

              </div>

            </div>

          </section>


          {/* =========================
              CORPS
          ========================== */}

          <div className="grid lg:grid-cols-[0.9fr_1.5fr]">

            {/* =========================
                COLONNE GAUCHE
            ========================== */}

            <aside className="border-b border-slate-200 bg-slate-50 p-6 sm:p-10 lg:border-b-0 lg:border-r">

              {/* Profil */}

              <section>

                <SectionTitle icon={FaCode}>
                  Profil
                </SectionTitle>

                <p className="text-sm leading-7 text-slate-600">
                  Titulaire d’un Brevet de Technicien Supérieur en Génie
                  Logiciel et poursuivant mon parcours en licence, je mets
                  ma motivation et mon dynamisme au service du développement
                  informatique.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Curieux et assidu, j’apprécie le travail en équipe et je
                  cherche constamment à améliorer mes compétences techniques
                  afin de contribuer efficacement aux projets qui me sont
                  confiés.
                </p>

              </section>


              {/* Informations personnelles */}

              <section className="mt-10">

                <SectionTitle>
                  Informations personnelles
                </SectionTitle>

                <div className="space-y-4 text-sm">

                  <InfoItem
                    label="Date de naissance"
                    value="29 Juin 2001"
                  />

                  <InfoItem
                    label="Lieu de naissance"
                    value="Douala"
                  />

                  <InfoItem
                    label="État civil"
                    value="Célibataire"
                  />

                </div>

              </section>


              {/* Formation */}

              <section className="mt-10">

                <SectionTitle icon={FaGraduationCap}>
                  Formation
                </SectionTitle>

                <div className="space-y-7">

                  <EducationItem
                    date="Juin 2026"
                    title="BTS en Génie Logiciel"
                    school="ISPL / INUBIL — Douala"
                    detail="Bonamoussadi-Sable"
                  />

                  <EducationItem
                    date="Oct. 2020 — Fév. 2021"
                    title="Infographie 2D"
                    school="Localhost Academy — Douala"
                  />

                  <EducationItem
                    date="Juin 2018"
                    title="Baccalauréat D"
                    school="Lycée Bilingue de Bépanda — Douala"
                  />

                </div>

              </section>


              {/* Langues */}

              <section className="mt-10">

                <SectionTitle>
                  Langues
                </SectionTitle>

                <div className="space-y-3">

                  <SkillLine
                    name="Français"
                    level="Couramment"
                  />

                  <SkillLine
                    name="Anglais"
                    level="Basique"
                  />

                </div>

              </section>


              {/* Loisirs */}

              <section className="mt-10">

                <SectionTitle>
                  Loisirs
                </SectionTitle>

                <div className="flex flex-wrap gap-2">

                  <Tag>Musique</Tag>
                  <Tag>Lectures</Tag>
                  <Tag>Nouvelles technologies</Tag>

                </div>

              </section>

            </aside>


            {/* =========================
                COLONNE DROITE
            ========================== */}

            <div className="p-6 sm:p-10">

              {/* Compétences */}

              <section>

                <SectionTitle icon={FaTools}>
                  Compétences
                </SectionTitle>

                <div className="grid gap-8 sm:grid-cols-2">

                  <SkillGroup
                    title="Développement web"
                    skills={[
                      'HTML5',
                      'CSS3',
                      'PHP 8',
                      'JavaScript — notions',
                      'Création et structuration de pages web',
                    ]}
                  />

                  <SkillGroup
                    title="Programmation"
                    skills={[
                      'Langage C',
                      'Java — bases',
                      'Dart',
                      'Bases de l’algorithmique',
                    ]}
                  />

                  <SkillGroup
                    title="Frameworks"
                    skills={[
                      'Flutter',
                      'Laravel',
                      'Tailwind CSS',
                      'Bootstrap',
                    ]}
                  />

                  <SkillGroup
                    title="Réseaux informatiques"
                    skills={[
                      'Adressage IP statique et dynamique',
                      'DHCP',
                      'Notions de configuration réseau',
                    ]}
                  />

                </div>

              </section>


              {/* Outils */}

              <section className="mt-12">

                <SectionTitle icon={FaTools}>
                  Outils
                </SectionTitle>

                <div className="flex flex-wrap gap-3">

                  <Tag>Git</Tag>
                  <Tag>GitHub</Tag>
                  <Tag>WampServer</Tag>
                  <Tag>MySQL</Tag>

                </div>

              </section>


              {/* Projets */}

              <section className="mt-12">

                <SectionTitle icon={FaProjectDiagram}>
                  Projets réalisés
                </SectionTitle>


                {/* EtudiLog */}

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                    <div>

                      <h3 className="text-lg font-bold text-slate-900">
                        EtudiLog Douala
                      </h3>

                      <p className="mt-1 text-sm font-medium text-blue-600">
                        Plateforme de mise en relation étudiants / propriétaires
                        de logements
                      </p>

                    </div>

                    <a
                      href="https://github.com/Shadow-Edm/EtudiLog_Douala"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                  </div>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">

                    <li>
                      • Conception d'une plateforme web avec Laravel
                    </li>

                    <li>
                      • Gestion des utilisateurs, annonces immobilières et
                      demandes de visite
                    </li>

                    <li>
                      • Utilisation de MySQL et Tailwind CSS
                    </li>

                  </ul>

                </div>


                {/* Application mobile */}

                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-6">

                  <h3 className="text-lg font-bold text-slate-900">
                    Application mobile de suivi des licences informatiques
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600">
                    Suivi des licences et de l'obsolescence des équipements
                  </p>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">

                    <li>
                      • Conception d'une application mobile avec Flutter
                    </li>

                    <li>
                      • Gestion et suivi des informations liées aux équipements
                      informatiques
                    </li>

                  </ul>

                </div>

              </section>


              {/* Bouton PDF */}

              <div className="mt-12 flex flex-col gap-4 rounded-xl bg-blue-50 p-6 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <h3 className="font-bold text-slate-900">
                    Version PDF
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Télécharger mon CV au format PDF.
                  </p>

                </div>

                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <FaDownload />
                  Télécharger le CV
                </a>

              </div>

            </div>

          </div>

        </div>

      </main>


      {/* =========================
          FOOTER
      ========================== */}

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Edmond Daryl — Portfolio
      </footer>

    </div>
  )
}


/* =====================================================
   COMPOSANTS UTILITAIRES
===================================================== */

function SectionTitle({ children, icon: Icon }) {
  return (
    <div className="mb-5 flex items-center gap-3">

      {Icon && (
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <Icon />
        </div>
      )}

      <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900">
        {children}
      </h2>

    </div>
  )
}


function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 font-medium text-slate-700">
        {value}
      </p>
    </div>
  )
}


function EducationItem({ date, title, school, detail }) {
  return (
    <div className="relative border-l-2 border-blue-200 pl-5">

      <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-600" />

      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        {date}
      </p>

      <h3 className="mt-1 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-600">
        {school}
      </p>

      {detail && (
        <p className="mt-1 text-xs text-slate-500">
          {detail}
        </p>
      )}

    </div>
  )
}


function SkillGroup({ title, skills }) {
  return (
    <div>

      <h3 className="mb-3 font-bold text-slate-900">
        {title}
      </h3>

      <ul className="space-y-2">

        {skills.map((skill) => (
          <li
            key={skill}
            className="flex gap-2 text-sm leading-6 text-slate-600"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
            {skill}
          </li>
        ))}

      </ul>

    </div>
  )
}


function SkillLine({ name, level }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-2">

      <span className="font-medium text-slate-700">
        {name}
      </span>

      <span className="text-sm text-slate-500">
        {level}
      </span>

    </div>
  )
}


function Tag({ children }) {
  return (
    <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  )
}

export default CV