//importation des composants de la page
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Stats from './components/Stats'  
import Contact from './components/Contact'
import Footer from './components/Footer'



export default function App(){
  return(

    //fond sombre sur toute la page
    <div className="bg-background text-foreground">
      {/* la navbar fixe en haut de la page */}
      <Navbar />

      {/* sections de la page dans l'ordre */}
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Stats />
        <Contact />
      </main>

      {/* le pied de la page */}
      <Footer />

      
    </div>

  )
}