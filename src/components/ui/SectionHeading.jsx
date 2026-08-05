/**
 * SectionHeading — reusable eyebrow + title + description block
 * Used by About, Projects, Contact
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignCls =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 mb-12 max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-violet-500">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--ink)] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base text-[var(--muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
