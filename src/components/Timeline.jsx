import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion'
import { GraduationCap, Target, ChevronDown, Sparkles } from 'lucide-react'
import { useApp } from '../context/AppContext'

// données des étapes
const steps = [
  { year: '2024', titleKey: 'timeline.l1.title', descKey: 'timeline.l1.desc' },
  { year: '2025', titleKey: 'timeline.l2.title', descKey: 'timeline.l2.desc', inProgress: true },
  { year: '→',   titleKey: 'timeline.goal.title', descKey: 'timeline.goal.desc', goal: true },
]

// composant carte d'une étape
function TimelineRow({ step, index, open, onToggle, t }) {
  const isLeft = index % 2 === 0
  const rowRef = useRef(null)
  const inView = useInView(rowRef, { once: true, margin: '-80px' })

  const Icon = step.goal ? Target : GraduationCap

  // style de bordure selon le statut
  const borderClass = step.goal
    ? 'border border-dashed border-primary/60'
    : step.inProgress
    ? 'border border-primary/70 shadow-glow'
    : 'border border-primary/40'

  const card = (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass rounded-2xl p-5 w-full text-left hover:shadow-glow group relative overflow-hidden ${borderClass}`}
    >
      {/* effet shimmer au survol */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      {/* année + badge en cours */}
      <div className={`flex items-center gap-2 mb-1 relative ${isLeft ? 'md:justify-end' : ''}`}>
        <span className="text-xs font-mono text-secondary">{step.year}</span>
        {step.inProgress && (
          <motion.span
            animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary font-semibold inline-flex items-center gap-1"
          >
            <Sparkles className="w-2.5 h-2.5" />
            {t('timeline.l2.status')}
          </motion.span>
        )}
      </div>

      {/* titre + icône + flèche accordion */}
      <div className={`flex items-center gap-2 relative ${isLeft ? 'md:justify-end md:flex-row-reverse' : ''}`}>
        <motion.span
          whileHover={{ rotate: [0, -10, 10, -6, 0] }}
          transition={{ duration: 0.5 }}
          className={`inline-flex ${step.goal ? 'text-primary' : 'text-secondary'}`}
        >
          <Icon className="w-4 h-4" />
        </motion.span>
        <h3 className="text-lg font-semibold">{t(step.titleKey)}</h3>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </div>

      {/* école */}
      {!step.goal && (
        <p className={`text-xs text-muted-foreground mt-1 relative ${isLeft ? 'md:text-right' : ''}`}>
          {t('timeline.l1.school')}
        </p>
      )}

      {/* description déroulable */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`text-sm text-muted-foreground mt-3 leading-relaxed overflow-hidden relative ${isLeft ? 'md:text-right' : ''}`}
          >
            {t(step.descKey)}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  )

  return (
    <div ref={rowRef} className="relative">

      {/* point sur la ligne — apparaît avec un effet spring */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.15 }}
        className={`absolute z-10 top-5 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${
          step.goal
            ? 'bg-background border-2 border-dashed border-primary'
            : step.inProgress
            ? 'bg-primary animate-pulse-ring ring-2 ring-primary/40'
            : 'bg-gradient-primary'
        }`}
      />

      {/* disposition zigzag gauche/droite */}
      <div className="md:grid md:grid-cols-2 md:gap-12">
        {isLeft ? (
          <>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pl-12 md:pl-0 md:pr-8"
            >
              {card}
            </motion.div>
            <div className="hidden md:block" />
          </>
        ) : (
          <>
            <div className="hidden md:block" />
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pl-12 md:pl-8 md:pr-0"
            >
              {card}
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

export default function Timeline() {
  const { t } = useApp()
  const [openIdx, setOpenIdx] = useState(1) // L2 ouvert par défaut
  const containerRef = useRef(null)

  // ligne qui se dessine au scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="timeline" className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* badge + titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">
            {t('timeline.badge')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('timeline.title1')}
            <span className="text-gradient">{t('timeline.title2')}</span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">

          {/* ligne de base fixe */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] rounded-full bg-border/40" />

          {/* ligne animée qui se dessine au scroll */}
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: 'top' }}
            className="pointer-events-none absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] rounded-full bg-gradient-to-b from-primary via-primary to-secondary shadow-glow"
          />

          {/* comète qui suit le scroll */}
          <motion.div
            style={{ top: glowY }}
            className="pointer-events-none absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary blur-[3px] shadow-[0_0_20px_8px_rgba(56,189,248,0.5)]"
          />

          {/* étapes */}
          <div className="space-y-12 pt-2">
            {steps.map((step, i) => (
              <TimelineRow
                key={i}
                step={step}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                t={t}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}