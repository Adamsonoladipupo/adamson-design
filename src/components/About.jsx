import SectionHeading from './ui/SectionHeading.jsx'
import useCountUp from '../hooks/useCountUp.js'

const STATS = [
  { label: 'Years of Design Experience', target: 5,  suffix: '+' },
  { label: 'Products Shipped',           target: 30, suffix: '+' },
  { label: 'Happy Clients',              target: 50, suffix: '+' },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    desc: 'User research, interviews, competitive analysis, and mapping the problem space.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Define',
    desc: 'Synthesise insights into personas, journey maps, and a clear design brief.',
    icon: '📐',
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Wireframes, high-fidelity mockups, interactive prototypes — iterated with users.',
    icon: '✦',
  },
  {
    step: '04',
    title: 'Deliver',
    desc: 'Pixel-perfect handoff with design tokens, specs, and developer collaboration.',
    icon: '🚀',
  },
]

function StatCard({ label, target, suffix }) {
  const [ref, value] = useCountUp(target)
  return (
    <div ref={ref} className="card p-8 text-center rounded-2xl transition-theme">
      <p
        className="font-display text-5xl font-extrabold mb-2"
        style={{
          background: 'linear-gradient(135deg,#4F46E5,#818CF8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {value}{suffix}
      </p>
      <p className="text-sm text-[var(--muted)]">{label}</p>
    </div>
  )
}

function ProcessStep({ step, title, desc, icon }) {
  return (
    <div className="flex gap-4">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
        style={{ background: 'linear-gradient(135deg,rgba(79,70,229,.12),rgba(99,102,241,.08))' }}
      >
        {icon}
      </div>
      <div>
        <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest">{step}</span>
        <h4 className="font-display font-bold text-base text-[var(--ink)] mt-0.5 mb-1">{title}</h4>
        <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="border-b border-[var(--border)] transition-theme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">

        {/* Stats row */}
        <div className="grid sm:grid-cols-3 gap-5 mb-20">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Bio + Process */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Bio */}
          <div>
            <SectionHeading
              eyebrow="About me"
              title="Designing with empathy, delivering with precision"
            />
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                I'm Adamson — a product designer with{' '}
                <strong className="text-[var(--ink)] font-semibold">5+ years</strong> of experience
                crafting digital products that people genuinely enjoy using. My background spans
                early-stage startups and established teams, where I've owned the full design
                lifecycle from research to launch.
              </p>
              <p>
                I specialise in{' '}
                <strong className="text-[var(--ink)] font-semibold">
                  UX strategy, interaction design, and design systems
                </strong>
                . I believe great design is invisible — it removes friction, guides attention,
                and makes complex tasks feel effortless.
              </p>
              <p>
                When I'm not pushing pixels, I'm running usability tests, mentoring junior
                designers, or writing about design thinking.
              </p>
            </div>

            {/* Core skills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                'UX Research', 'Interaction Design', 'Design Systems',
                'Prototyping', 'Usability Testing', 'Information Architecture',
                'Accessibility', 'Design Handoff',
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)] bg-[var(--surface)] transition-theme"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Design process */}
          <div>
            <SectionHeading
              eyebrow="My process"
              title="How I approach design"
            />
            <div className="space-y-6">
              {PROCESS.map((p) => (
                <ProcessStep key={p.step} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
