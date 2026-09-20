import { useState } from "react";
import ShadowBlueprintIcon from './ShadowBlueprintIcon'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <a
                    href="#accueil"
                    onClick={closeMenu}
                    className="flex items-center gap-0 text-xl font-bold tracking-tight text-slate-900"
                >
                    <ShadowBlueprintIcon size={38} />
                    
                    <span className="text-blue-600">&lt;</span>
                        ShadowBlueprint
                    <span className="text-blue-600">/&gt;</span>
                    
                </a>

                {/* Navigation desktop */}

                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#accueil"
                        className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                    >
                        Accueil
                    </a>

                    <a
                        href="#apropos"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        À propos
                    </a>

                    <a
                        href="#competences"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        Compétences
                    </a>

                    <a
                        href="#projets"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        Projets
                    </a>

                    <a
                        href="#formation"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        Formation
                    </a>

                    <a
                        href="#contact"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        Contact
                    </a>
                </div>

                {/* Bouton CV desktop */}

                <div className="hidden items-center gap-2 md:flex">

                    {/* Page web du CV */}
                    <a
                        href="/cv"
                        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600 md:block"
                    >
                        Voir mon CV
                    </a>

                    {/* CV PDF */}
                    <a
                        href="/cv.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
                    >
                        Télécharger PDF
                    </a>

                </div>


                {/* Bouton menu mobile */}

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
                    aria-label="Ouvrir le menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    )}
                </button>
            </nav>
            {/* Menu mobile */}

            {menuOpen && (
                <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
                    <div className="flex flex-col gap-2">
                        <a
                            href="#accueil"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-blue-600 hover:bg-slate-50"
                        >
                            Accueil
                        </a>

                        <a
                            href="#apropos"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                        >
                            À propos
                        </a>

                        <a
                            href="#competences"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                        >
                            Compétences
                        </a>

                         <a
                            href="#projets"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                        >
                            Projets
                        </a>

                        <a
                            href="#formation"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                        >
                            Formation
                        </a>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                        >
                            Contact
                        </a>

                        <a
                            href="/cv"
                            onClick={closeMenu}
                            className="rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                        >
                            Voir mon CV
                        </a>

                        <a
                            href="/cv.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Télécharger mon CV PDF
                        </a>
                    </div>
                </div>
            )}    
            
        </header>
    )
}

export default Navbar