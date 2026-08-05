import SectionHeading from './ui/SectionHeading.jsx'
import TermWindow from './ui/TermWindow.jsx'

export default function Classes() {
  return (
    <section id="classes" className="border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <SectionHeading
          eyebrow="Learn with me"
          title="Live classes"
          description="Hands-on cohorts to level up your coding and practical AI skills."
        />

        <TermWindow filename="build_agentic_ai.py" className="max-w-xl">
          <div className="p-6">
            <span className="font-mono text-[11px] px-2 py-1 rounded border border-yellow text-yellow">
              Most popular
            </span>
            <h3 className="mt-3 font-mono text-xl font-semibold text-ink leading-snug">
              Build Agentic AI &amp; Agents with Python
            </h3>
            <div className="mt-3 flex items-center gap-3 text-sm text-muted">
              <span className="px-2 py-0.5 rounded border border-border font-mono text-xs">
                Intermediate
              </span>
              <span>34 enrolled</span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <img
                src="https://api.dicebear.com/9.x/initials/svg?seed=A%20Adamson&backgroundColor=111815&textColor=3FCF8E"
                alt="A. Adamson"
                className="w-9 h-9 rounded-full object-cover border border-border"
              />
              <span className="text-sm text-ink">A. Adamson</span>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="font-mono text-ink font-semibold text-lg">$105</p>
                <p className="text-[11px] text-muted">≈ ₦140,000 charged</p>
              </div>
              <button className="font-mono text-sm px-5 py-2.5 rounded-md bg-green text-bg font-semibold hover:bg-[#35b87d] transition-colors">
                Enroll now
              </button>
            </div>
          </div>
        </TermWindow>

        <div className="mt-10">
          <a
            href="/classes"
            className="font-mono text-sm px-5 py-3 rounded-md border border-border text-ink hover:border-green transition-colors inline-block"
          >
            See all classes →
          </a>
        </div>
      </div>
    </section>
  )
}
