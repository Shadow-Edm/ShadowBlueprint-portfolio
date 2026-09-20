import {
  FaReact,
  FaLaravel,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaGithubAlt
} from 'react-icons/fa'

import {
  SiFlutter,
  SiTailwindcss,
  SiPostgresql,
  SiDart,
  SiPostman,
  SiVite,
} from 'react-icons/si'

function Skills() {
  const skills = [
    {
      name: 'React',
      category: 'Frontend',
      level: 'Intermédiaire',
      icon: FaReact,
      description:
        'Création d’interfaces modernes, composants réutilisables et applications web interactives.',
    },
    {
      name: 'Laravel',
      category: 'Backend',
      level: 'Intermédiaire',
      icon: FaLaravel,
      description:
        'Développement d’applications web avec PHP, MVC, Eloquent, authentification et API.',
    },
    {
      name: 'Flutter',
      category: 'Mobile',
      level: 'Intermédiaire',
      icon: SiFlutter,
      description:
        'Conception d’applications mobiles multiplateformes avec Dart et Flutter.',
    },
    {
      name: 'JavaScript',
      category: 'Langage',
      level: 'Intermédiaire',
      icon: FaJs,
      description:
        'Développement d’interactions dynamiques et logique côté client.',
    },
    {
      name: 'PHP',
      category: 'Backend',
      level: 'Intermédiaire',
      icon: FaPhp,
      description:
        'Développement backend et manipulation de données avec PHP.',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 'Intermédiaire',
      icon: SiTailwindcss,
      description:
        'Création d’interfaces responsives et modernes avec une approche utility-first.',
    },
    {
      name: 'Git',
      category: 'Outils',
      level: 'Intermédiaire',
      icon: FaGitAlt,
      description:
        'Gestion de versions, branches, commits et suivi de l’évolution des projets.',
    },
    {
      name: 'PostgreSQL',
      category: 'Base de données',
      level: 'Bases',
      icon: SiPostgresql,
      description:
        'Conception de bases de données relationnelles et manipulation des données.',
    },
  ]

  const additionalSkills = [
    { name: 'HTML5', icon: null },
    { name: 'CSS3', icon: null },
    { name: 'Bootstrap', icon: null },
    { name: 'Java', icon: FaJava },
    { name: 'Dart', icon: SiDart },
    { name: 'Docker', icon: FaDocker },
    { name: 'Vite', icon: SiVite },
    { name: 'Postman', icon: SiPostman },
  ]

  return (
    <section
      id="competences"
      className="bg-slate-100 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Mes compétences
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Les technologies que j'utilise
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Les principales technologies et outils que j'utilise pour
            concevoir et développer mes projets.
          </p>

        </div>

        {/* Cartes principales */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill) => {
            const Icon = skill.icon

            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                {/* Icône */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon />
                </div>

                {/* Nom */}
                <h3 className="text-lg font-bold text-slate-900">
                  {skill.name}
                </h3>

                {/* Catégorie */}
                <p className="mt-1 text-sm text-slate-500">
                  {skill.category}
                </p>

                {/* Niveau */}
                <span className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {skill.level}
                </span>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {skill.description}
                </p>

              </div>
            )
          })}

        </div>

        {/* Autres connaissances */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Autres connaissances
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Technologies et outils que j'ai également étudiés ou utilisés.
              </p>
            </div>

          </div>

          <div className="mt-7 flex flex-wrap gap-3">

            {additionalSkills.map((skill) => {
              const Icon = skill.icon

              return (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  {Icon && <Icon className="text-lg" />}
                  {skill.name}
                </span>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills