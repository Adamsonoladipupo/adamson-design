
import { useState } from 'react'
import SectionHeading from './ui/SectionHeading.jsx'
import imgGlidr from './assets/glidr.png'
import imgSaveliens from './assets/saveliens.png'
import imgGiftara from './assets/giftara.png'
import imgSwaply from './assets/swaply.png'
import imgEcoearn from './assets/Ecoearn.png'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    name: 'Glidr',
    type: 'E-Commerce Platform',
    description:
      'A modern online shopping experience designed for speed and simplicity. Glidr streamlines product discovery, cart management, and checkout — reducing friction at every step of the buyer journey.',
    tags: ['UX Design', 'E-Commerce', 'User Flow', 'Figma'],
    href: 'https://shop-with-glidr.onrender.com/',
    cta: 'live',
    img: imgGlidr,
  },
  {
    name: 'Saveliens',
    type: 'Savings & Finance App',
    description:
      'A personal savings platform that helps users set financial goals, track progress, and build disciplined saving habits through a clean, motivating interface and intuitive dashboard.',
    tags: ['Product Design', 'Fintech', 'Dashboard UX', 'Prototyping'],
    href: 'https://saveliens.onrender.com/',
    cta: 'live',
    img: imgSaveliens,
  },
  {
    name: 'Giftara',
    type: 'Digital Gifting App',
    description:
      'An instant e-gift card platform enabling users to send personalised digital gifts globally. Designed for seamless gift selection, customisation, and delivery — available for Android.',
    tags: ['Mobile Design', 'UX Research', 'Gift Commerce', 'Figma'],
    href: 'https://giftara.app/',
    cta: 'live',
    img: imgGiftara,
  },
  {
    name: 'Swaply',
    type: 'Crypto · DeFi · Case Study',
    description:
      'End-to-end UX/UI case study for a Web3 fintech app that lets users convert cryptocurrency and withdraw directly to a local bank account. Covers brand identity, user research, interaction design, and a full hi-fi prototype.',
    tags: ['DeFi', 'Web3', 'Fintech', 'Branding', 'UX Research'],
    href: 'https://www.behance.net/gallery/224400063/Swaply-Convert-crypto-withdraw-into-your-local-Bank',
    cta: 'case-study',
    img: imgSwaply,
  },
  {
    name: 'EcoEarn',
    type: 'Sustainability · Case Study',
    description:
      'A recycling incentive mobile app designed to reward users for submitting recyclable waste. The case study covers user research, journey mapping, a Figma prototype, and usability testing — all aimed at making sustainable behaviour effortless and rewarding.',
    tags: ['Mobile App', 'User Research', 'Figma', 'Sustainability'],
    href: 'https://www.behance.net/gallery/217668017/EcoEarn-App-(Case-Study)',
    cta: 'case-study',
    img: imgEcoearn,
  },
]

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M6 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
      <path d="M9 1h6v6" />
      <line x1="15" y1="1" x2="7" y2="9" />
    </svg>
  )
}

const btnBase =
  'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ' +
  'px-4 py-2.5 rounded-lg border border-[var(--border)] text-[var(--muted)] bg-transparent ' +
  'hover:border-[var(--accent)] hover:text-[var(--ink)] hover:-translate-y-0.5 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 ' +
  'transition-all duration-200 ease-out'

function LiveButton({ href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={btnBase}>
      <ExternalIcon />
      View Live
    </a>
  )
}

function CaseStudyButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${btnBase} group/cs`}
    >
      View Full Case Study
      <span className="group-hover/cs:translate-x-1 transition-transform duration-200">
        →
      </span>
    </a>
  )
}

function ProjectCard({ project }) {
  return (
    <article
      className="
        flex flex-col h-full rounded-2xl overflow-hidden
        border border-[var(--border)]
        backdrop-blur-md
        shadow-[0_2px_16px_rgba(0,0,0,0.05)]
        hover:shadow-[0_8px_32px_rgba(52,72,133,0.10)]
        hover:border-[var(--accent-hi)]
        hover:-translate-y-1
        transition-all duration-300 ease-out
        group
      "
      style={{
        background: 'color-mix(in srgb, var(--surface) 82%, transparent)',
      }}
    >
      <div className="relative overflow-hidden h-48 bg-[var(--surface-2)] flex-shrink-0">
        <img
          src={project.img}
          alt={`${project.name} preview`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        <span
          className="
            absolute bottom-3 left-4
            text-[10px] font-extrabold uppercase tracking-[0.18em]
            px-2.5 py-1 rounded-md
            border border-[var(--border)]
            text-[var(--muted)]
          "
          style={{
            background: 'color-mix(in srgb, var(--surface) 88%, transparent)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {project.type}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-2 leading-snug">
          {project.name}
        </h3>

        <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-4 flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                text-[11px] font-medium px-2.5 py-1 rounded-full
                border border-[var(--border)] text-[var(--muted)]
                transition-theme
              "
              style={{
                background: 'color-mix(in srgb, var(--surface-2) 60%, transparent)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5">
          {project.cta === 'live' ? (
            <LiveButton href={project.href} />
          ) : (
            <CaseStudyButton href={project.href} />
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3)
  const remainingProjects = PROJECTS.length - 3

  return (
    <section
      id="projects"
      className="border-b border-[var(--border)] transition-theme"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Case studies and live products, from early research through to shipped, production-ready experiences."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>

        {remainingProjects > 0 && (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={styles.loadMoreButton}
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
              aria-controls="additional-projects"
            >
              <span className={styles.loadMoreFill} aria-hidden="true" />
              <span className={styles.loadMoreLabel}>
                {showAll ? 'Show less' : 'Load more'}
                {!showAll && (
                  <sup className={styles.projectCount}>{remainingProjects}</sup>
                )}
              </span>
            </button>
          </div>
        )}

        <div className="mt-12">
          <a
            href="#contact"
            className="
              inline-flex items-center gap-2 text-sm font-bold
              px-6 py-3 rounded-xl
              border border-[var(--border)] text-[var(--ink)]
              hover:border-[var(--accent)] hover:-translate-y-0.5
              transition-all duration-200
            "
            style={{
              background: 'color-mix(in srgb, var(--surface) 80%, transparent)',
            }}
          >
            Want to collaborate? Let's talk →
          </a>
        </div>
      </div>
    </section>
  )
}
