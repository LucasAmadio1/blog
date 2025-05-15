import Link from 'next/link'
import { Logo } from '../logo/logo'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-16 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link
              href="/termos-de-uso"
              className="hover:text-primary transition-colors duration-150"
            >
              Termos de uso
            </Link>

            <Link
              href="/Política-de-Privacidade"
              className="hover:text-primary transition-colors duration-150"
            >
              Política de Privacidade
            </Link>

            <Link
              href="/Enviar-Feedback"
              className="hover:text-primary transition-colors duration-150"
            >
              Enviar Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
