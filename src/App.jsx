import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CV from './pages/CV'

function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

function App() {
  const isCVPage = window.location.pathname === '/cv'

  if (isCVPage) {
    return <CV />
  }

  return <Portfolio />
}

export default App