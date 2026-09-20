function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Parlons de votre prochain projet
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Vous avez un projet, une opportunité ou simplement une
            question ? N'hésitez pas à me contacter.
          </p>

        </div>

        {/* Contenu */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Informations */}
          <div>

            <h3 className="text-2xl font-bold text-slate-900">
              Prenons contact
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Je suis ouvert aux opportunités professionnelles, aux
              collaborations et aux projets qui me permettent de mettre
              mes compétences en développement logiciel en pratique.
            </p>

            {/* Coordonnées */}
            <div className="mt-10 space-y-6">

              {/* Email */}
              <a
                href="mailto:djiahaedmond@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  @
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="font-semibold text-slate-900 group-hover:text-blue-600">
                    djiahaedmond@gmail.com
                  </p>
                </div>
              </a>

              {/* Téléphone */}
              <a
                href="tel:+237693332799"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Téléphone
                  </p>

                  <p className="font-semibold text-slate-900 group-hover:text-blue-600">
                    +237 693 332 799 
                  </p>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  📍
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Localisation
                  </p>

                  <p className="font-semibold text-slate-900">
                    Douala, Cameroun
                  </p>
                </div>

              </div>

            </div>

            {/* Réseaux */}
            <div className="mt-10">

              <p className="text-sm font-semibold text-slate-900">
                Retrouvez-moi également sur
              </p>

              <div className="mt-4 flex gap-3">

                <a
                  href="https://github.com/Shadow-Edm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>

          {/* Formulaire */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">

            <form className="space-y-6">

              {/* Nom */}
              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nom
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Adresse email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="vous@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Sujet */}
              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Sujet
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Écrivez votre message..."
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Bouton */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
              >
                Envoyer le message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact