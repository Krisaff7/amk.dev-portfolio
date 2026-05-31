import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { useApp } from '../context/AppContext'

const contacts = [
  {
    Icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Krisaff7',
    glow: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:text-foreground hover:border-white/40',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    glow: 'hover:shadow-[0_0_30px_rgba(10,102,194,0.55)] hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
  },
  {
    Icon: SiGmail,
    label: 'Gmail',
    href: 'mailto:ton-email@gmail.com',
    glow: 'hover:shadow-[0_0_30px_rgba(234,67,53,0.55)] hover:text-[#EA4335] hover:border-[#EA4335]/40',
  },
  {
    Icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/22900000000',
    glow: 'hover:shadow-[0_0_30px_rgba(37,211,102,0.55)] hover:text-[#25D366] hover:border-[#25D366]/40',
  },
]

export default function Contact() {
  const { t } = useApp()

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* badge + titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">
            {t('contact.badge')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title1')}
            <span className="text-gradient">{t('contact.title2')}</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-12">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* icônes sociales */}
        <div className="grid grid-cols-4 gap-3 sm:gap-5">
          {contacts.map(({ Icon, label, href, glow }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              // instantané + ne déborde pas sur les voisins
              style={{ transition: 'transform 0s', zIndex: 1 }}
              whileTap={{ scale: 0.95 }}
              className={`glass rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 text-muted-foreground transition-colors duration-300 ${glow}`}
            >
              <Icon className="w-7 h-7 sm:w-10 sm:h-10" />
              <span className="text-xs sm:text-sm font-medium text-foreground">
                {label}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}