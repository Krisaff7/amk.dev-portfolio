import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { useRef, useEffect, useState } from 'react'
import { Code2, Layers } from 'lucide-react'

const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const languages = [
  { name: 'HTML',       icon: `${ICON_BASE}/html5/html5-original.svg`,           level: 70 },
  { name: 'CSS',        icon: `${ICON_BASE}/css3/css3-original.svg`,             level: 70 },
  { name: 'JavaScript', icon: `${ICON_BASE}/javascript/javascript-original.svg`, level: 55 },
  { name: 'Python',     icon: `${ICON_BASE}/python/python-original.svg`,         level: 40 },
  { name: 'SQL',        icon: `${ICON_BASE}/mysql/mysql-original.svg`,           level: 30 },
  { name: 'C',          icon: `${ICON_BASE}/c/c-original.svg`,                   level: 30 },
  { name: 'Java',       icon: `${ICON_BASE}/java/java-original.svg`,             level: 20 },
  { name: 'C++',        icon: `${ICON_BASE}/cplusplus/cplusplus-original.svg`,   level: 20 },
]

const frameworks = [
  { name: 'React.js',     icon: `${ICON_BASE}/react/react-original.svg`,     level: 60 },
  { name: 'Vue.js',       icon: `${ICON_BASE}/vuejs/vuejs-original.svg`,     level: 30 },
  { name: 'React Native', icon: `${ICON_BASE}/react/react-original.svg`,     level: 50 },
  { name: 'Node.js',      icon: `${ICON_BASE}/nodejs/nodejs-original.svg`,   level: 50 },
  { name: 'SQLite',       icon: `${ICON_BASE}/sqlite/sqlite-original.svg`,   level: 30 },
]

// compteur animé de 0 → target
function AnimatedCounter({ target, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span>{count}</span>
}

// barre de progression avec shimmer
function SkillRow({ name, icon, level, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">

          {/* icône */}
          <div className="rounded-full p-0.5 flex items-center justify-center">
            <img src={icon} alt={name} width={22} height={22} loading="lazy" className="w-5 h-5" />
          </div>

          <span className="font-medium text-sm text-foreground">{name}</span>
        </div>

        {/* compteur animé */}
        <span className="text-xs font-semibold text-primary tabular-nums">
          <AnimatedCounter target={level} inView={inView} />%
        </span>
      </div>

      {/* barre fond */}
      <div className="h-1.5 rounded-full bg-muted overflow-hidden relative">

        {/* barre animée */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay: 0.15 + index * 0.06, ease: 'easeOut' }}
          className="h-full bg-gradient-primary rounded-full relative overflow-hidden"
        >

        </motion.div>
      </div>
    </motion.div>
  )
}

// carte groupe avec lift au hover
function SkillGroup({ title, icon: Icon, items, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="glass rounded-2xl p-7 relative overflow-hidden group"
    >


      {/* en-tête avec icône gradient */}
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-white" />
        </span>
        <span>{title}</span>
      </h3>

      <div className="space-y-5">
        {items.map((skill, i) => (
          <SkillRow key={skill.name} {...skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { t } = useApp()

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">



      <div className="max-w-6xl mx-auto relative z-10">

        {/* badge + titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">
            {t('skills.badge')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('skills.title1')}
            <span className="text-gradient">{t('skills.title2')}</span>
          </h2>
        </motion.div>

        {/* deux colonnes */}
        <div className="grid md:grid-cols-2 gap-6">
          <SkillGroup
            title={t('skills.languages')}
            icon={Code2}
            items={languages}
            delay={0}
          />
          <SkillGroup
            title={t('skills.frameworks')}
            icon={Layers}
            items={frameworks}
            delay={0.15}
          />
        </div>

      </div>
    </section>
  )
}