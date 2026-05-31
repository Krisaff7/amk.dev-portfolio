import { useApp } from '../context/AppContext'

export default function Footer() {
  const { t } = useApp()

  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">

        {/* logo */}
        <span className="text-xl font-bold">
          <span className="text-foreground">AMK</span>
          <span className="text-gradient">.dev</span>
        </span>

        {/* copyright */}
        <p className="text-sm text-muted-foreground">
          {t('footer.rights')}
        </p>


      </div>
    </footer>
  )
}