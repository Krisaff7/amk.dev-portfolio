import { FiDownload } from 'react-icons/fi'
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import photo from '../img/AFFOKPON.jpeg'

export default function About() {
  const { t } = useApp()

  return (
    <section id="about" className="py-24 px-6">
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
            {t('about.badge')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('about.title1')}
            <span className="text-gradient">{t('about.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[260px_1fr] gap-12 items-center">

          {/* photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto"
          >
            <div className="w-56 h-56 rounded-3xl p-1 bg-gradient-primary shadow-glow">
              <img
                src={photo}
                alt="AFFOKPON Mahouton Kris"
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>

            <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-secondary/80 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-primary/40 blur-2xl" />
          </motion.div>

          {/* texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('about.p2')}
            </p>

            {/* badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm">
                <HiAcademicCap className="text-primary" />
                {t('about.badge1')}
              </div>
              <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm">
                <HiBriefcase className="text-secondary" />
                {t('about.badge2')}
              </div>
            </div>

            {/* bouton CV */}
            <a
              href="/Mahouton_Kris_AFFOKPON_CV.pdf"
              target="_blank"
              download
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-medium text-foreground border border-primary/40 hover:border-primary hover:shadow-glow hover:scale-105 transition-all glass"
            >
              <FiDownload className="text-primary" />
              {t('about.cv')}
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}