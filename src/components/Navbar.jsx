import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useApp } from '../context/AppContext'

export default function Navbar() {
  const { isDark, toggleTheme, lang, toggleLang, t } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { key: 'nav.home',     href: '#hero' },
    { key: 'nav.about',    href: '#about' },
    { key: 'nav.timeline', href: '#timeline' },
    { key: 'nav.skills',   href: '#skills' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.stats',    href: '#stats' },
    { key: 'nav.contact',  href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">

        {/* logo — style copié du projet de référence : gradient sur AMK, foreground sur .dev */}
        <a href="#hero" className="font-bold text-lg tracking-tight">
          <span className="text-gradient">AMK</span>
          <span className="text-foreground">.dev</span>
        </a>

        {/* liens desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t(link.key)}
              {/* soulignement gradient qui glisse au hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* toggles + hamburger */}
        <div className="flex items-center gap-2">

          {/* toggle thème */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="glass w-9 h-9 rounded-full flex items-center justify-center hover:text-primary transition-colors"
          >
            {isDark
              ? <FiSun className="w-4 h-4 text-yellow-400" />
              : <FiMoon className="w-4 h-4 text-primary" />
            }
          </button>

          {/* toggle langue */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="glass h-9 px-3 rounded-full flex items-center text-xs font-semibold hover:text-primary transition-colors text-foreground"
          >
            {lang === 'fr' ? 'FR' : 'EN'}
          </button>

          {/* hamburger mobile */}
          <button
            className="md:hidden text-foreground ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

        </div>
      </div>

      {/* menu mobile — même style pill que le projet de référence */}
      {menuOpen && (
        <div className="md:hidden glass mt-3 mx-6 rounded-xl p-4 flex flex-col gap-3">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      )}

    </nav>
  )
}