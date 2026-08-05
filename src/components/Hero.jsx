/* Hero.jsx
   Desktop: two-column — copy left, portrait right
   Mobile: stacked — portrait above copy
   Marquee at the bottom scrolls right-to-left.
*/

import profilePhoto from './assets/adamson.jpg'

const MARQUEE_TOOLS = [
  { name: 'Figma',             slug: 'figma',            color: 'F24E1E' },
  { name: 'Adobe Illustrator', slug: 'adobeillustrator', color: 'FF9A00' },
  { name: 'Adobe Photoshop',   slug: 'adobephotoshop',   color: '31A8FF' },
  { name: 'Jira',              slug: 'jira',             color: '0052CC' },
  { name: 'Notion',            slug: 'notion',           color: '888888' },
  { name: 'Framer',            slug: 'framer',           color: '344885' },
  { name: 'Google Analytics',  slug: 'googleanalytics',  color: 'E37400' },
  { name: 'Miro',              slug: 'miro',             color: 'F9C846' },
  { name: 'Maze',              slug: 'maze',             color: 'FF4F9B' },
  { name: 'Hotjar',            slug: 'hotjar',           color: 'FD3A5C' },
  { name: 'Zeplin',            slug: 'zeplin',           color: 'FDBD39' },
  { name: 'Storybook',         slug: 'storybook',        color: 'FF4785' },
]

function Chip({ tool }) {
  return (
    <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-semibold text-[var(--muted)] whitespace-nowrap">
      <img
        src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
        alt=""
        className="w-3.5 h-3.5 flex-shrink-0"
        loading="lazy"
      />
      {tool.name}
    </span>
  )
}

export default function Hero() {
  const track = [...MARQUEE_TOOLS, ...MARQUEE_TOOLS]

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-dot-grid">
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 65% 40%, rgba(var(--accent-rgb),0.08) 0%, transparent 70%)',
        }}
      />

      {/* ── Main content grid ─────────────── */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: copy ───────────────────────── */}
          <div className="flex-1 fade-up text-center lg:text-left">

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)] mb-5">
              <span className="w-6 h-px bg-[var(--accent)] opacity-60" />
              Product Designer
              <span className="w-6 h-px bg-[var(--accent)] opacity-60" />
            </span>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.07] tracking-tight text-[var(--ink)] mb-5">
              Designing{' '}
              <span className="text-gradient">experiences</span>{' '}
              people love to use
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I am Adamson, a product designer who turns fuzzy problems into
              clean, intuitive interfaces. From discovery to delivery, I bridge
              user needs with business goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="text-sm font-bold px-7 py-3.5 rounded-xl text-white shadow-cta hover:opacity-90 hover:-translate-y-0.5 transition-all"
                style={{ background: 'linear-gradient(135deg,#344885,#5B72BB)' }}
              >
                View my work
              </a>
              <a
                href="#contact"
                className="text-sm font-bold px-7 py-3.5 rounded-xl border border-[var(--border)] text-[var(--ink)] bg-[var(--surface)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all"
              >
                Get in touch
              </a>
            </div>

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--muted)] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for new projects
            </div>
          </div>

          {/* ── Right: profile portrait ───────────── */}
          <div className="flex-shrink-0 flex justify-center fade-up" style={{ animationDelay: '0.15s' }}>
            {/*
              Outer wrapper: glassmorphism card + soft branded glow ring.
              On mobile: 200×200 circle. On lg+: 340×400 rounded rectangle.
            */}
            <div className="relative">
              {/* Glow ring behind the image */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] opacity-30 blur-2xl"
                style={{ background: 'linear-gradient(135deg,#344885,#7A8FCC)' }}
              />

              {/* Frosted frame */}
              <div
                className="relative rounded-[1.75rem] overflow-hidden
                            w-44 h-44 sm:w-56 sm:h-56 lg:w-80 lg:h-96
                            border border-[var(--border)]
                            shadow-[0_20px_60px_rgba(52,72,133,0.18)]"
                style={{
                  background: 'color-mix(in srgb, var(--surface) 70%, transparent)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Adamson — Product Designer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle gradient overlay at the bottom to blend with the card */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, color-mix(in srgb, var(--surface) 40%, transparent), transparent)',
                  }}
                />
              </div>

              {/* Floating badge — "Open to work" */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2
                            inline-flex items-center gap-2 px-4 py-2 rounded-full
                            border border-[var(--border)] shadow-md text-xs font-bold whitespace-nowrap"
                style={{
                  background: 'color-mix(in srgb, var(--surface) 90%, transparent)',
                  backdropFilter: 'blur(10px)',
                  color: 'var(--ink)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                Open to work
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Horizontal marquee ──────────────── */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pb-16 mt-14">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--muted)] mb-5">
          Tools &amp; platforms I work with
        </p>
        <div
          className="overflow-hidden relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="flex gap-3 marquee-track w-max">
            {track.map((tool, i) => (
              <Chip tool={tool} key={`${tool.slug}-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
