import { motion } from 'framer-motion'
import { Code2, Eye, Smartphone, Globe, Database } from 'lucide-react'
import { useApp } from '../context/AppContext'

const projects = [
  {
    title: 'Portfolio AMK.dev',
    descKey: 'projects.portfolio.desc',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    icon: Globe,
    gradient: 'from-primary/30 to-secondary/20',
    code: 'https://github.com/Krisaff7/amk.dev-portfolio',
    demo: '#', // à remplacer par le lien Vercel après déploiement
  },
  {
    title: 'WorkGuard',
    descKey: 'projects.workguard.desc',
    tags: ['React Native', 'TypeScript', 'SQLite'],
    icon: Smartphone,
    gradient: 'from-secondary/30 to-primary/20',
    code: 'https://github.com/Krisaff7/WorkGuard',
    demo: '#',
  },
  {
    title: 'Writapp',
    descKey: 'projects.writapp.desc',
    tags: ['React Native', 'TypeScript', 'SQLite'],
    icon: Database,
    gradient: 'from-primary/40 to-secondary/30',
    code: 'https://github.com/Krisaff7/Writapp',
    demo: '#',
  },
]

export default function Projects() {
  const { t } = useApp()

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* badge + titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">
            {t('projects.badge')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('projects.title1')}
            <span className="text-gradient">{t('projects.title2')}</span>
          </h2>
        </motion.div>

        {/* grille de projets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* image placeholder avec icône */}
                <div className={`aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <Icon className="w-16 h-16 text-foreground/80 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,oklch(0.70_0.18_295/0.25),transparent_70%)]" />
                </div>

                {/* contenu */}
                <div className="p-6 flex flex-col flex-1">

                  {/* titre */}
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {p.title}
                  </h3>

                  {/* description */}
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {t(p.descKey)}
                  </p>

                  {/* tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* boutons */}
                  <div className="flex gap-3">
                    
                    <a   href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-sm py-2 rounded-lg border border-border hover:bg-muted transition text-foreground"
                    >
                      <Code2 className="w-4 h-4" />
                      {t('projects.code')}
                    </a>
                    
                    <a    href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-sm py-2 rounded-lg bg-gradient-primary text-primary-foreground hover:shadow-glow transition"
                    >
                      <Eye className="w-4 h-4" />
                      {t('projects.view')}
                    </a>
                  </div>

                </div>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}