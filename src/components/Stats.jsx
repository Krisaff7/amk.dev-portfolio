import { motion } from 'framer-motion'
import { FiCode, FiGitBranch, FiLayers, FiClock } from 'react-icons/fi'
import { useApp } from '../context/AppContext'

const stats = [
  { icon: FiCode,      valueKey: '3+',   labelKey: 'stats.projects',  color: 'text-primary' },
  { icon: FiLayers,    valueKey: '10+',  labelKey: 'stats.techs',     color: 'text-secondary' },
  { icon: FiGitBranch, valueKey: '2',    labelKey: 'stats.years',     color: 'text-primary' },
  { icon: FiClock,     valueKey: '100%', labelKey: 'stats.available', color: 'text-secondary' },
]

export default function Stats() {
  const { t } = useApp()

  return (
    <section id="stats" className="py-24 px-6">
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
            {t('stats.badge')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('stats.title1')}
            <span className="text-gradient">{t('stats.title2')}</span>
          </h2>
        </motion.div>

        {/* grille 4 cartes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="relative glass rounded-2xl p-8 flex flex-col items-center gap-4 group overflow-hidden cursor-default"
              >
                {/* fond dégradé au hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />

                {/* halo derrière l'icône */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 rounded-full scale-150" />
                  <div className="relative w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Icon size={26} className={stat.color} />
                  </div>
                </div>

                {/* valeur */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
                  className="text-4xl font-black text-gradient"
                >
                  {stat.valueKey}
                </motion.span>

                {/* label */}
                <span className="text-sm text-muted-foreground text-center leading-snug">
                  {t(stat.labelKey)}
                </span>

                {/* ligne décorative en bas */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-primary transition-all duration-500 rounded-full" />

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}