import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  fr: {
    'nav.home':        'Accueil',
    'nav.about':       'À propos',
    'nav.timeline':    'Parcours',
    'nav.skills':      'Compétences',
    'nav.projects':    'Projets',
    'nav.stats':       'Stats',
    'nav.contact':     'Contact',
    'hero.badge':      'PORTFOLIO · 2026',
    'hero.phrase1':    'Développeur Web Fullstack Junior',
    'hero.phrase2':    'Développeur Mobile React Native',
    'hero.phrase3':    'Étudiant en Génie Logiciel',
    'hero.accroche':   'Je transforme des idées en expériences numériques — du frontend au backend.',
    'hero.cta1':       'Voir mes projets',
    'hero.cta2':       'Me contacter',
    'about.badge':     'ABOUT',
    'about.title1':    'À propos de ',
    'about.title2':    'moi',
    'about.p1':        "Passionné par le développement logiciel, je suis étudiant en 2ème année de Génie Logiciel à l'IFRI (Institut de Formation et de Recherche en Informatique), Université d'Abomey-Calavi, Bénin.",
    'about.p2':        "En pleine construction de mon parcours, je maîtrise aussi bien le développement web que mobile, avec une appétence particulière pour les interfaces soignées et les architectures backend solides. Mon objectif à long terme : devenir développeur fullstack confirmé et poursuivre un Master en DevOps & Cloud.",
    'about.badge1':    "Étudiant à l'IFRI — UAC, Bénin",
    'about.badge2':    'Disponible pour projets freelance',
    'about.cv':        'Télécharger mon CV',
    'timeline.badge':       'PARCOURS',
    'timeline.title1':      'Mon ',
    'timeline.title2':      'parcours',
    'timeline.l1.title':    'Licence 1 (L1)',
    'timeline.l1.school':   "IFRI — Université d'Abomey-Calavi, Bénin",
    'timeline.l1.desc':     "Bases de l'informatique, algorithmique, mathématiques, C, HTML/CSS.",
    'timeline.l2.title':    'Licence 2 (L2)',
    'timeline.l2.status':   'EN COURS',
    'timeline.l2.desc':     "Bases de données Oracle/SQL, structures de données avancées (C), architecture réseau, méthodes Agile, développement web & mobile.",
    'timeline.goal.title':  'Objectif',
    'timeline.goal.desc':   'Licence 3 (L3) puis Master DevOps & Cloud.',
    'skills.badge':       'STACK',
    'skills.title1':      'Mes ',
    'skills.title2':      'compétences',
    'skills.languages':   'Langages',
    'skills.frameworks':  'Frameworks & Librairies',
    'projects.badge':              'WORK',
    'projects.title1':             'Mes ',
    'projects.title2':             'projets',
    'projects.code':               'Code',
    'projects.view':               'Voir',
    'projects.portfolio.desc':     'Portfolio personnel développé from scratch avec React.js et Tailwind CSS. Mode sombre/clair, traduction FR/EN, animations et design responsive.',
    'projects.workguard.desc':     'Application mobile de suivi de temps professionnel avec gestion de quota annuel de 964h. Chronométrage précis et historique local 100% offline.',
    'projects.writapp.desc':       'Application mobile de prise de notes moderne avec recherche instantanée et stockage local sécurisé. Fonctionne entièrement hors-ligne.',
    'stats.badge':     'CHIFFRES',
    'stats.title1':    'En ',
    'stats.title2':    'bref',
    'stats.projects':  'Projets réalisés',
    'stats.techs':     'Technologies',
    'stats.years':     'Années de formation',
    'stats.available': 'Disponible freelance',
    'contact.badge':    'CONTACT',
    'contact.title1':   'Contactez-',
    'contact.title2':   'moi',
    'contact.subtitle': "Vous avez un projet, une question ou une opportunité ? N'hésitez pas.",
    'footer.rights': '© 2026 AFFOKPON Mahouton Kris — Tous droits réservés',

  },

  en: {
    'nav.home':        'Home',
    'nav.about':       'About',
    'nav.timeline':    'Journey',
    'nav.skills':      'Skills',
    'nav.projects':    'Projects',
    'nav.stats':       'Stats',
    'nav.contact':     'Contact',
    'hero.badge':      'PORTFOLIO · 2025',
    'hero.phrase1':    'Junior Fullstack Web Developer',
    'hero.phrase2':    'Mobile React Native Developer',
    'hero.phrase3':    'Software Engineering Student',
    'hero.accroche':   'I turn ideas into digital experiences — from frontend to backend.',
    'hero.cta1':       'View my projects',
    'hero.cta2':       'Contact me',
    'about.badge':     'ABOUT',
    'about.title1':    'About ',
    'about.title2':    'me',
    'about.p1':        "Passionate about software development, I am a 2nd-year Software Engineering student at IFRI (Institut de Formation et de Recherche en Informatique), University of Abomey-Calavi, Benin.",
    'about.p2':        "Still building my path, I am comfortable with both web and mobile development, with a particular interest in polished interfaces and solid backend architectures. My long-term goal: become a confirmed fullstack developer and pursue a Master's in DevOps & Cloud.",
    'about.badge1':    'Student at IFRI — UAC, Benin',
    'about.badge2':    'Available for freelance projects',
    'about.cv':        'Download my CV',
    'timeline.badge':       'JOURNEY',
    'timeline.title1':      'My ',
    'timeline.title2':      'journey',
    'timeline.l1.title':    'Bachelor Year 1 (L1)',
    'timeline.l1.school':   'IFRI — University of Abomey-Calavi, Benin',
    'timeline.l1.desc':     'Computer science basics, algorithms, mathematics, C, HTML/CSS.',
    'timeline.l2.title':    'Bachelor Year 2 (L2)',
    'timeline.l2.status':   'IN PROGRESS',
    'timeline.l2.desc':     'Oracle/SQL databases, advanced data structures (C), network architecture, Agile methods, web & mobile development.',
    'timeline.goal.title':  'Goal',
    'timeline.goal.desc':   'Bachelor Year 3 (L3) then Master in DevOps & Cloud.',
    'skills.badge':       'STACK',
    'skills.title1':      'My ',
    'skills.title2':      'skills',
    'skills.languages':   'Languages',
    'skills.frameworks':  'Frameworks & Libraries',
    'projects.badge':              'WORK',
    'projects.title1':             'My ',
    'projects.title2':             'projects',
    'projects.code':               'Code',
    'projects.view':               'View',
    'projects.portfolio.desc':     'Personal portfolio built from scratch with React.js and Tailwind CSS. Dark/light mode, FR/EN translation, animations and responsive design.',
    'projects.workguard.desc':     'Mobile app for professional time tracking with annual quota management (964h). Precise timing and 100% offline local history.',
    'projects.writapp.desc':       'Modern mobile note-taking app with instant search and secure local storage. Works entirely offline.',
    'stats.badge':     'NUMBERS',
    'stats.title1':    'In ',
    'stats.title2':    'brief',
    'stats.projects':  'Projects completed',
    'stats.techs':     'Technologies',
    'stats.years':     'Years of training',
    'stats.available': 'Available freelance',
    'contact.badge':    'CONTACT',
    'contact.title1':   'Contact ',
    'contact.title2':   'me',
    'contact.subtitle': 'Got a project, a question or an opportunity? Feel free to reach out.',
    'footer.rights': '© 2025 AFFOKPON Mahouton Kris — All rights reserved',
  },
}

const AppContext = createContext()

export function AppProvider({ children }) {

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    const dark = saved !== 'light'
    // applique immédiatement avant le premier rendu
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return dark
  })

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'fr'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleTheme = () => setIsDark(prev => !prev)
  const toggleLang  = () => setLang(prev => prev === 'fr' ? 'en' : 'fr')
  const t = (key) => translations[lang][key] || key

  return (
    <AppContext.Provider value={{ isDark, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}