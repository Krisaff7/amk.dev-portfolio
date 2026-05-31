import { createContext, useContext, useState, useEffect } from 'react'

// toutes les traductions FR / EN
const translations = {
  fr: {
    // navbar
    'nav.home':        'Accueil',
    'nav.about':       'À propos',
    'nav.timeline':    'Parcours',
    'nav.skills':      'Compétences',
    'nav.projects':    'Projets',
    'nav.stats':       'Stats',
    'nav.contact':     'Contact',

    // hero
    'hero.badge':      'PORTFOLIO · 2025',
    'hero.phrase1':    'Développeur Web Fullstack Junior',
    'hero.phrase2':    'Développeur Mobile React Native',
    'hero.phrase3':    'Étudiant en Génie Logiciel',
    'hero.accroche':   'Je transforme des idées en expériences numériques — du frontend au backend.',
    'hero.cta1':       'Voir mes projets',
    'hero.cta2':       'Me contacter',

    // about
    'about.badge':     'ABOUT',
    'about.title1':    'À propos de ',
    'about.title2':    'moi',
    'about.p1':        "Passionné par le développement logiciel, je suis étudiant en 2ème année de Génie Logiciel à l'IFRI (Institut de Formation et de Recherche en Informatique), Université d'Abomey-Calavi, Bénin.",
    'about.p2':        "En pleine construction de mon parcours, je maîtrise aussi bien le développement web que mobile, avec une appétence particulière pour les interfaces soignées et les architectures backend solides. Mon objectif à long terme : devenir développeur fullstack confirmé et poursuivre un Master en DevOps & Cloud.",
    'about.badge1':    "Étudiant à l'IFRI — UAC, Bénin",
    'about.badge2':    'Disponible pour projets freelance',
    'about.cv':        'Télécharger mon CV',

    // timeline
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

    // skills
    'skills.badge':       'STACK',
    'skills.title1':      'Mes ',
    'skills.title2':      'compétences',
    'skills.languages':   'Langages',
    'skills.frameworks':  'Frameworks & Librairies',

    // projects
    'projects.badge':               'WORK',
    'projects.title1':              'Mes ',
    'projects.title2':              'projets',
    'projects.code':                'Code',
    'projects.view':                'Voir',
    'projects.status.done':         'Terminé',
    'projects.status.inprogress':   'En cours',
    'projects.taskflow.desc':       'Application mobile de gestion de tâches avec synchronisation hors-ligne et notifications.',
    'projects.engine.desc':         'Plateforme web permettant aux étudiants de créer leur portfolio en quelques clics.',
    'projects.campus.desc':         'API REST pour la gestion des emplois du temps universitaires avec authentification JWT.',

    // stats
    'stats.badge':    'CHIFFRES',
    'stats.title1':   'En ',
    'stats.title2':   'bref',
    'stats.projects': 'Projets réalisés',
    'stats.techs':    'Technologies',
    'stats.years':    'Années de formation',
    'stats.available':'Disponible freelance',

    // contact
    'contact.badge':    'CONTACT',
    'contact.title1':   'Contacte-',
    'contact.title2':   'moi',
    'contact.subtitle': "Tu as un projet, une question ou une opportunité ? N'hésite pas.",

    // footer
    'footer.rights': '© 2025 AFFOKPON Mahouton Kris — Tous droits réservés',
   
  },

  en: {
    // navbar
    'nav.home':        'Home',
    'nav.about':       'About',
    'nav.timeline':    'Journey',
    'nav.skills':      'Skills',
    'nav.projects':    'Projects',
    'nav.stats':       'Stats',
    'nav.contact':     'Contact',

    // hero
    'hero.badge':      'PORTFOLIO · 2025',
    'hero.phrase1':    'Junior Fullstack Web Developer',
    'hero.phrase2':    'Mobile React Native Developer',
    'hero.phrase3':    'Software Engineering Student',
    'hero.accroche':   'I turn ideas into digital experiences — from frontend to backend.',
    'hero.cta1':       'View my projects',
    'hero.cta2':       'Contact me',

    // about
    'about.badge':     'ABOUT',
    'about.title1':    'About ',
    'about.title2':    'me',
    'about.p1':        "Passionate about software development, I am a 2nd-year Software Engineering student at IFRI (Institut de Formation et de Recherche en Informatique), University of Abomey-Calavi, Benin.",
    'about.p2':        "Still building my path, I am comfortable with both web and mobile development, with a particular interest in polished interfaces and solid backend architectures. My long-term goal: become a confirmed fullstack developer and pursue a Master's in DevOps & Cloud.",
    'about.badge1':    'Student at IFRI — UAC, Benin',
    'about.badge2':    'Available for freelance projects',
    'about.cv':        'Download my CV',

    // timeline
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

    // skills
    'skills.badge':       'STACK',
    'skills.title1':      'My ',
    'skills.title2':      'skills',
    'skills.languages':   'Languages',
    'skills.frameworks':  'Frameworks & Libraries',

    // projects
    'projects.badge':               'WORK',
    'projects.title1':              'My ',
    'projects.title2':              'projects',
    'projects.code':                'Code',
    'projects.view':                'View',
    'projects.status.done':         'Completed',
    'projects.status.inprogress':   'In progress',
    'projects.taskflow.desc':       'Mobile task management app with offline sync and notifications.',
    'projects.engine.desc':         'Web platform allowing students to create their portfolio in a few clicks.',
    'projects.campus.desc':         'REST API for university timetable management with JWT authentication.',

    // stats
    'stats.badge':    'NUMBERS',
    'stats.title1':   'In ',
    'stats.title2':   'brief',
    'stats.projects': 'Projects completed',
    'stats.techs':    'Technologies',
    'stats.years':    'Years of training',
    'stats.available':'Available freelance',

    // contact
    'contact.badge':    'CONTACT',
    'contact.title1':   'Contact ',
    'contact.title2':   'me',
    'contact.subtitle': 'Got a project, a question or an opportunity? Feel free to reach out.',

    // footer
    'footer.rights': '© 2025 AFFOKPON Mahouton Kris — All rights reserved',
  },
}

const AppContext = createContext()

export function AppProvider({ children }) {

  // dark mode par défaut, mémorisé dans localStorage
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light'
  })

  // langue par défaut FR, mémorisée dans localStorage
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'fr'
  })

  // applique la classe dark sur le html + sauvegarde dans localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // sauvegarde la langue dans localStorage
  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleTheme = () => setIsDark(prev => !prev)
  const toggleLang  = () => setLang(prev => prev === 'fr' ? 'en' : 'fr')

  // fonction de traduction — retourne le texte selon la langue active
  const t = (key) => translations[lang][key] || key

  return (
    <AppContext.Provider value={{ isDark, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  )
}

// hook pour utiliser le contexte dans n'importe quel composant
export function useApp() {
  return useContext(AppContext)
}