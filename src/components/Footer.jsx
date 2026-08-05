const LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] transition-theme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <a href="/" className="flex items-center gap-2.5 font-display font-bold text-base tracking-tight text-[var(--ink)]">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: 'linear-gradient(135deg,#4F46E5,#6366F1)' }}
              >
                A
              </span>
              A. Adamson
            </a>
            <p className="text-xs text-[var(--muted)]">Product Designer</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs font-medium text-[var(--muted)] hover:text-[var(--ink)] transition-theme"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-[var(--muted)]">
            © {year} A. Adamson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
