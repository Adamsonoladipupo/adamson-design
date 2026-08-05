/* Hero.jsx — Product Designer portfolio hero
   No floating icons.
   Only the horizontal right-to-left marquee animation remains.
*/

const MARQUEE_TOOLS = [
  { name: 'Figma',             slug: 'figma',            color: 'F24E1E' },
  { name: 'Adobe Illustrator', slug: 'adobeillustrator', color: 'FF9A00' },
  { name: 'Adobe Photoshop',   slug: 'adobephotoshop',   color: '31A8FF' },
  { name: 'Jira',              slug: 'jira',             color: '0052CC' },
  { name: 'Notion',            slug: 'notion',           color: '888888' },
  { name: 'Framer',            slug: 'framer',           color: '6366F1' },
  { name: 'Google Analytics',  slug: 'googleanalytics',  color: 'E37400' },
  { name: 'Miro',              slug: 'miro',             color: 'F9C846' },
  { name: 'Maze',              slug: 'maze',             color: 'FF4F9B' },
  { name: 'Hotjar',            slug: 'hotjar',           color: 'FD3A5C' },
  { name: 'Zeplin',            slug: 'zeplin',           color: 'FDBD39' },
  { name: 'Storybook',         slug: 'storybook',        color: 'FF4785' },
]

function Chip({ tool }) {
  return (
    <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-semibold text-[var(--muted)] whitespace-nowrap transition-theme">
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
  /* Duplicate the list so the marquee loops seamlessly */
  const track = [...MARQUEE_TOOLS, ...MARQUEE_TOOLS]

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-dot-grid transition-theme">
      {/* Subtle radial glow behind the headline */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% -10%, rgba(var(--accent-rgb),0.10) 0%, transparent 70%)',
        }}
      />

      {/* ── Main content ──────────────────── */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-24">
        <div className="max-w-2xl mx-auto text-center fade-up">

          {/* Eyebrow label */}
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)] mb-6">
            <span className="w-6 h-px bg-[var(--accent)] opacity-60" />
            Product Designer
            <span className="w-6 h-px bg-[var(--accent)] opacity-60" />
          </span>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[4rem] leading-[1.06] tracking-tight text-[var(--ink)] mb-6">
            Designing{' '}
            <span className="text-gradient">experiences</span>{' '}
            people love to use
          </h1>

          {/* Sub-headline */}
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto mb-10">
            I'm Adamson — a product designer who turns fuzzy problems into
            clean, intuitive interfaces. From discovery to delivery, I bridge
            user needs with business goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="text-sm font-bold px-7 py-3.5 rounded-xl text-white shadow-cta hover:opacity-90 hover:-translate-y-0.5 transition-all"
              style={{ background: 'linear-gradient(135deg,#4F46E5,#6366F1)' }}
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

          {/* Availability status pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--muted)] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Available for new projects
          </div>
        </div>

        {/* ── Horizontal marquee ──────────────
            Scrolls from right to left continuously.
            Two copies of the list ensure a seamless loop.
            ─────────────────────────────────────── */}
        <div className="mt-16">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--muted)] mb-5">
            Tools &amp; platforms I work with
          </p>
          {/* Overflow hidden container with fade edges */}
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
      </div>
    </section>
  )
}
