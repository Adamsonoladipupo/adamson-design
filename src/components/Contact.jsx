/**
 * Contact.jsx
 *
 * Sends mail via EmailJS using four template variables:
 *   {{name}}    — sender's name
 *   {{email}}   — sender's email address (also used as Reply-To)
 *   {{title}}   — message subject / title
 *   {{message}} — message body
 *
 * Configuration is read exclusively from environment variables.
 * Set the following in .env.local (never commit that file):
 *   VITE_EMAILJS_PUBLIC_KEY=
 *   VITE_EMAILJS_SERVICE_ID=
 *   VITE_EMAILJS_TEMPLATE_ID=
 *
 * EmailJS template setup (one-time, in the EmailJS dashboard):
 *   To Email  → adamsonoladipupo@gmail.com
 *   Reply To  → {{email}}
 *   Subject   → {{title}}
 *   Body      → From: {{name}} <{{email}}>\n\n{{message}}
 */

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeading from './ui/SectionHeading.jsx'

/* ── EmailJS config — read from Vite env, never hard-coded ── */
const EJ_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? ''
const EJ_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? ''
const EJ_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''

/* ── Sidebar info items ─────────────────────────────────── */
const INFO_ITEMS = [
  {
    label: 'Email',
    value: 'adamsonoladipupo@gmail.com',
    href:  'mailto:adamsonoladipupo@gmail.com',
    icon:  '✉',
  },
  { label: 'Response time', value: 'Within 24 hours',     icon: '⚡' },
  { label: 'Status',        value: 'Open to new projects', icon: '●', green: true },
]

/* ── Shared input / textarea class ─────────────────────── */
const inputCls =
  'w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-xl px-4 py-3 ' +
  'text-sm text-[var(--ink)] placeholder:text-[var(--muted)] outline-none ' +
  'focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-theme'

/* ── Reusable labelled field wrapper ────────────────────── */
function Field({ id, label, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-bold text-[var(--muted)] uppercase tracking-wider mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

/* ── Inline notification banner ─────────────────────────── */
function Banner({ type, message }) {
  const styles = type === 'error'
    ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-700/40 dark:text-red-400'
    : 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-700/40 dark:text-emerald-400'
  const icon = type === 'error' ? '✕' : '✓'

  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-xl border text-sm ${styles}`} role="alert">
      <span className="font-bold flex-shrink-0">{icon}</span>
      <span>{message}</span>
    </div>
  )
}

/* ── Main component ─────────────────────────────────────── */
export default function Contact() {
  const formRef = useRef(null)

  const [fields, setFields] = useState({ name: '', email: '', title: '', message: '', hp: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('')

  const update = (key) => (e) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }))

  /* Validate all visible fields are non-empty */
  function validate() {
    if (!fields.name.trim())    return 'Please enter your name.'
    if (!fields.email.trim())   return 'Please enter your email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return 'Please enter a valid email address.'
    if (!fields.title.trim())   return 'Please enter a title.'
    if (!fields.message.trim()) return 'Please enter a message.'
    return null
  }

  async function handleSubmit(e) {
    e.preventDefault()

    /* Honeypot — silent discard if filled */
    if (fields.hp) return

    const validationError = validate()
    if (validationError) {
      setStatus('error')
      setErrMsg(validationError)
      return
    }

    setStatus('sending')
    setErrMsg('')

    try {
      await emailjs.sendForm(
        EJ_SERVICE_ID,
        EJ_TEMPLATE_ID,
        formRef.current,
        { publicKey: EJ_PUBLIC_KEY },
      )
      setStatus('success')
      setFields({ name: '', email: '', title: '', message: '', hp: '' })
    } catch (err) {
      console.error('[EmailJS]', err)
      setStatus('error')
      setErrMsg('Something went wrong. Please try again or email me directly.')
    }
  }

  function handleSendAnother() {
    setStatus('idle')
    setErrMsg('')
  }

  const isSending = status === 'sending'

  return (
    <section id="contact" className="border-b border-[var(--border)] transition-theme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="grid lg:grid-cols-[1fr_1.45fr] gap-16 items-start">

          {/* ── Left: info sidebar ────────────────────────── */}
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Let's create something together"
              description="Got a product challenge, a redesign project, or just want to say hi? I'd love to hear from you."
            />

            <div className="space-y-5">
              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center text-sm"
                    style={{
                      background: 'linear-gradient(135deg,rgba(52,72,133,.14),rgba(91,114,187,.10))',
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${item.green ? 'text-emerald-500' : 'text-[var(--ink)]'}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form card ──────────────────────────── */}
          <div className="card rounded-2xl p-8 transition-theme">

            {/* ── Success state ──────────────── */}
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                <span
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl text-white"
                  style={{ background: 'linear-gradient(135deg,#344885,#5B72BB)' }}
                >
                  ✓
                </span>
                <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                  Message sent!
                </h3>
                <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={handleSendAnother}
                  className="text-sm font-bold text-[var(--accent)] hover:underline mt-1"
                >
                  Send another message
                </button>
              </div>

            ) : (
              /* ── Form ──────────────────────── */
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* Name */}
                <Field id="contact-name" label="Name">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={fields.name}
                    onChange={update('name')}
                    disabled={isSending}
                    className={inputCls}
                  />
                </Field>

                {/* Email */}
                <Field id="contact-email" label="Email">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={fields.email}
                    onChange={update('email')}
                    disabled={isSending}
                    className={inputCls}
                  />
                </Field>

                {/* Title */}
                <Field id="contact-title" label="Title">
                  <input
                    id="contact-title"
                    name="title"
                    type="text"
                    required
                    placeholder="UX redesign project"
                    value={fields.title}
                    onChange={update('title')}
                    disabled={isSending}
                    className={inputCls}
                  />
                </Field>

                {/* Message */}
                <Field id="contact-message" label="Message">
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project…"
                    value={fields.message}
                    onChange={update('message')}
                    disabled={isSending}
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                {/* Honeypot — hidden from real users, visible to bots */}
                <input
                  type="text"
                  name="hp"
                  value={fields.hp}
                  onChange={update('hp')}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Error / validation banner */}
                {status === 'error' && errMsg && (
                  <Banner type="error" message={errMsg} />
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="
                    w-full text-sm font-bold px-6 py-3.5 rounded-xl text-white
                    shadow-cta hover:opacity-90 active:scale-[0.98]
                    transition-all duration-200
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100
                  "
                  style={{ background: 'linear-gradient(135deg,#344885,#5B72BB)' }}
                >
                  {isSending ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    'Send message →'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
