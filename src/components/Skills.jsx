import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

// Fallback to simple-icons for logos not found in devicon v2 standard
const SIMPLE_ICONS_BASE = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons'

export default function Skills() {
  const { t } = useApp()

  const skillCategories = [
    {
      title: t('skills.languages') || 'Langages',
      skills: [
        { name: 'JavaScript', icon: `${ICON_BASE}/javascript/javascript-original.svg` },
        { name: 'TypeScript', icon: `${ICON_BASE}/typescript/typescript-original.svg` },
        { name: 'HTML', icon: `${ICON_BASE}/html5/html5-original.svg` },
        { name: 'CSS', icon: `${ICON_BASE}/css3/css3-original.svg` },
        { name: 'Python', icon: `${ICON_BASE}/python/python-original.svg` },
        { name: 'Java', icon: `${ICON_BASE}/java/java-original.svg` },
        { name: 'C', icon: `${ICON_BASE}/c/c-original.svg` },
        { name: 'C++', icon: `${ICON_BASE}/cplusplus/cplusplus-original.svg` },
        { name: 'SQL', icon: `${ICON_BASE}/mysql/mysql-original.svg` },
      ]
    },
    {
      title: t('skills.frontend') || 'Technologies Frontend',
      skills: [
        { name: 'React.js', icon: `${ICON_BASE}/react/react-original.svg` },
        { name: 'Vue.js', icon: `${ICON_BASE}/vuejs/vuejs-original.svg` },
      ]
    },
    {
      title: t('skills.mobile') || 'Mobile',
      skills: [
        { name: 'React Native', icon: `${ICON_BASE}/react/react-original.svg` },
        { name: 'Expo', icon: `${SIMPLE_ICONS_BASE}/expo.svg` },
      ]
    },
    {
      title: t('skills.backend') || 'Backend & Base de données',
      skills: [
        { name: 'Node.js', icon: `${ICON_BASE}/nodejs/nodejs-original.svg` },
        { name: 'SQLite', icon: `${ICON_BASE}/sqlite/sqlite-original.svg` },
      ]
    },
    {
      title: t('skills.tools') || 'Outils',
      skills: [
        { name: 'Git', icon: `${ICON_BASE}/git/git-original.svg` },
        { name: 'GitHub', icon: `${ICON_BASE}/github/github-original.svg` },
        { name: 'VS Code', icon: `${ICON_BASE}/vscode/vscode-original.svg` },
        { name: 'Linux', icon: `${ICON_BASE}/linux/linux-original.svg` },
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* badge + titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">
            {t('skills.badge') || 'COMPÉTENCES'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('skills.title1') || 'Mes '}
            <span className="text-primary">{t('skills.title2') || 'Technologies'}</span>
          </h2>
        </motion.div>

        {/* Liste des catégories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-4 px-5 py-4 bg-white dark:bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="max-w-full max-h-full object-contain"
                        loading="lazy" 
                      />
                    </div>
                    <span className="font-semibold text-sm text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}