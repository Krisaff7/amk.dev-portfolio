import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { useApp } from '../context/AppContext'

const contacts = [
  {
    Icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Krisaff7',
    hoverStyle: 'hover:text-foreground hover:border-foreground/30',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahouton-kris-affokpon-12811937a/',
    hoverStyle: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/30',
  },
  {
    Icon: SiGmail,
    label: 'Gmail',
    href: 'mailto:affokponkris4@gmail.com',
    hoverStyle: 'hover:text-[#EA4335] hover:border-[#EA4335]/30',
  },
  {
    Icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/22947333886',
    hoverStyle: 'hover:text-[#25D366] hover:border-[#25D366]/30',
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
          {contacts.map(({ Icon, label, href, hoverStyle }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              style={{ transition: 'transform 0s', zIndex: 1 }}
              whileTap={{ scale: 0.97 }}
              className={`glass rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 text-muted-foreground transition-colors duration-300 ${hoverStyle}`}
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