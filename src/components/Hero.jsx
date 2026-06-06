import { useState, useEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { useApp } from '../context/AppContext'

export default function Hero() {
  const { t } = useApp()

  // phrases du typewriter depuis les traductions
  const phrases = [
    t('hero.phrase1'),
    t('hero.phrase2'),
    t('hero.phrase3'),
  ]

  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const pause = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 1500)
      return () => clearTimeout(pause)
    }

    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentPhrase.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next === currentPhrase) setIsPaused(true)
      } else {
        const next = currentPhrase.slice(0, displayed.length - 1)
        setDisplayed(next)
        if (next === '') {
          setIsDeleting(false)
          setPhraseIndex(prev => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, isPaused, phraseIndex])

  return (
    // section plein écran avec grille en pointillés
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
    >

      {/* nom */}
      <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-tight text-foreground">
        AFFOKPON
      </h1>
      <h1 className="text-5xl md:text-7xl font-black mb-6 text-gradient">
        Mahouton Kris
      </h1>

      {/* typewriter */}
      <p className="text-lg md:text-xl text-muted-foreground mb-4 h-8">
        {displayed}
        <span className="animate-blink text-primary">|</span>
      </p>

      {/* accroche */}
      <p className="text-muted-foreground max-w-xl mb-10">
        {t('hero.accroche')}
      </p>

      {/* boutons CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        
        <a    href="#projects"
          className="px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
        >
          {t('hero.cta1')}
        </a>
        
        <a   href="#contact"
          className="px-8 py-3 rounded-full glass text-foreground font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
        >
          {t('hero.cta2')}
        </a>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 animate-bounce-down text-muted-foreground">
        <FiChevronDown size={28} />
      </div>

    </section>
  )
}