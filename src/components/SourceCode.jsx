import SectionHeading from './ui/SectionHeading.jsx'
import TermWindow from './ui/TermWindow.jsx'

const ITEMS = [
  {
    name: 'Browser Decryption.zip',
    meta: 'ZIP archive · 60 KB',
    description:
      'This contains the source code for decrypting V20 browser cookies, including cookies stored in Google Chrome.',
    lang: 'Python',
    priceUsd: 31,
    priceNgn: '≈ ₦42,000 charged',
  },
  {
    name: 'adamson-ai-agent.zip',
    meta: 'ZIP archive · 10.1 MB',
    description:
      "Includes the complete Adamson AI Agent source code, project structure, setup requirements, and everything you need to run and understand the system.",
    lang: 'Python',
    priceUsd: 31,
    priceNgn: '≈ ₦42,000 charged',
  },
]

function SourceCard({ item }) {
  return (
    <TermWindow filename={item.name}>
      <div className="p-6">
        <p className="font-mono text-xs text-muted">{item.meta}</p>
        <h3 className="mt-2 font-mono text-lg font-semibold text-ink">
          {item.name.replace('.zip', '')}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          {item.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-[11px] px-2 py-1 rounded border border-border text-blue">
            {item.lang}
          </span>
          <div className="text-right">
            <p className="font-mono text-ink font-semibold">${item.priceUsd}</p>
            <p className="text-[11px] text-muted">{item.priceNgn}</p>
          </div>
        </div>
        <button className="mt-5 w-full font-mono text-sm px-4 py-2.5 rounded-md bg-green text-bg font-semibold hover:bg-[#35b87d] transition-colors">
          Get the code
        </button>
      </div>
    </TermWindow>
  )
}

export default function SourceCode() {
  return (
    <section id="source-code" className="border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <SectionHeading
          eyebrow="Open source"
          title="Source code"
          description="Complete project ZIPs — download the whole codebase, open it and build on it."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {ITEMS.map((item) => (
            <SourceCard item={item} key={item.name} />
          ))}
        </div>
        <div className="mt-10">
          <a
            href="/source-code"
            className="font-mono text-sm px-5 py-3 rounded-md border border-border text-ink hover:border-green transition-colors inline-block"
          >
            See all source code →
          </a>
        </div>
      </div>
    </section>
  )
}
