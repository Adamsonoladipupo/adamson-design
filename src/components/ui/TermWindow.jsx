/**
 * TermWindow — kept for backward-compat but restyled as a
 * clean card panel matching the Product Design theme.
 * The terminal chrome (traffic-light dots) is still rendered
 * when `filename` is provided, but purely as a decorative
 * window frame rather than a code-editor motif.
 */
export default function TermWindow({ filename, children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-theme ${className}`}
    >
      {filename && (
        <div className="flex items-center gap-2 px-5 py-3 bg-[var(--surface-2)] border-b border-[var(--border)]">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 opacity-70" />
          <span className="ml-3 text-xs text-[var(--muted)]">{filename}</span>
        </div>
      )}
      <div>{children}</div>
    </div>
  )
}
