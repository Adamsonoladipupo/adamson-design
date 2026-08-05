function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.974 5.52a10.19 10.19 0 012.026 6.328c-.296-.058-3.254-.66-6.231-.287-.067-.165-.131-.332-.2-.5-.186-.452-.387-.9-.597-1.34 3.306-1.35 4.81-3.298 5.002-3.2zM12 1.998a10.04 10.04 0 016.925 2.754c-.162.183-1.512 2.002-4.706 3.19-1.47-2.701-3.103-4.924-3.352-5.25A10.1 10.1 0 0112 1.998zm-2.645.358c.238.316 1.843 2.547 3.329 5.196-4.2 1.115-7.907 1.09-8.297 1.085a10.087 10.087 0 014.968-6.281zm-7.336 9.71v-.254c.378.01 4.717.097 9.22-1.275.257.503.503 1.013.733 1.52-.115.032-.232.067-.347.105-4.655 1.503-7.127 5.607-7.324 5.937a10.054 10.054 0 01-2.282-6.033zm10.047 10.03a10.052 10.052 0 01-6.235-2.164c.165-.32 2.037-3.936 7.147-5.733l.05-.017c1.282 3.335 1.81 6.133 1.943 6.928a10.017 10.017 0 01-2.905.986zm4.726-1.73c-.1-.597-.594-3.27-1.793-6.555 2.803-.449 5.265.287 5.557.378a10.125 10.125 0 01-3.764 6.177z"/>
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H14.97c.13 1.2.836 1.98 2.066 1.98.971 0 1.6-.46 1.894-1.065L23.726 17zm-7.688-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zM7.548 19.785c-1.248 0-2.242-.37-2.986-1.113-.742-.744-1.114-1.737-1.114-2.98 0-.652.113-1.232.34-1.74.228-.508.534-.929.92-1.262.386-.333.838-.57 1.356-.713.518-.143 1.073-.214 1.664-.214.667 0 1.22.043 1.659.13.438.085.852.21 1.244.372v-.624a6.21 6.21 0 00-.022-.567c0-.85-.37-1.516-1.11-1.996-.74-.48-1.754-.72-3.042-.72a7.4 7.4 0 00-1.87.232 5.9 5.9 0 00-1.672.7L3 9.04C3.57 8.73 4.2 8.5 4.89 8.34c.69-.16 1.4-.24 2.13-.24 1.78 0 3.12.41 4.02 1.24.9.82 1.35 2.03 1.35 3.62v6.43H9.8l-.213-1.148c-.357.408-.786.73-1.288.965a4 4 0 01-1.751.378z"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

const SOCIALS = [
  {
    label: 'Behance',
    href:  'https://www.behance.net/abdulwahabadamson',
    Icon:  BehanceIcon,
  },
  {
    label: 'Dribbble',
    href:  '#',            // URL to be added later
    Icon:  DribbbleIcon,
  },
  {
    label: 'YouTube',
    href:  'https://www.youtube.com/@olaadams',
    Icon:  YouTubeIcon,
  },
]

export default function Social() {
  return (
    <section className="border-b border-[var(--border)] transition-theme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Let's connect
          </span>
          <p className="mt-2 font-display font-bold text-lg text-[var(--ink)]">
            Find me on the internet
          </p>
          <p className="text-[var(--muted)] text-sm mt-1 max-w-sm">
            Follow along for design work, case studies, and behind-the-scenes
            of the products I'm building.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 sm:ml-auto">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href !== '#' ? '_blank' : undefined}
              rel={href !== '#' ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg
                         border border-[var(--border)] text-[var(--muted)] bg-[var(--surface)]
                         hover:text-[var(--ink)] hover:border-[var(--accent)] transition-theme"
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
