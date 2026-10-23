
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import styles from './ContactPage.module.css'

// Update this import to the portrait asset already used in your portfolio.
import profileImage from '../../components/assets/adamson.jpg'

const CONTACT_EMAIL = 'your-email@example.com'

const SOCIAL_LINKS = [
  {
    label: 'Behance',
    href: 'https://www.behance.net/',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
  },
]

const INITIAL_FORM = {
  name: '',
  email: '',
  organization: '',
  services: '',
  message: '',
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={styles.arrowIcon}
    >
      <path
        d="M7 7L25 25M10 25H25V10"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function ContactField({
  number,
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  type = 'text',
  multiline = false,
}) {
  const Field = multiline ? 'textarea' : 'input'

  return (
    <div
      className={`${styles.formField} ${
        multiline ? styles.messageField : ''
      }`}
    >
      <span className={styles.fieldNumber}>{number}</span>

      <div className={styles.fieldContent}>
        <label className={styles.fieldLabel} htmlFor={name}>
          {label}
        </label>

        <Field
          id={name}
          name={name}
          type={multiline ? undefined : type}
          className={styles.fieldInput}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={
            name === 'name'
              ? 'name'
              : name === 'email'
                ? 'email'
                : name === 'organization'
                  ? 'organization'
                  : undefined
          }
          rows={multiline ? 3 : undefined}
        />
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    if (status) setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`,
    )

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Organization: ${form.organization || 'Not provided'}`,
        `Services: ${form.services || 'Not specified'}`,
        '',
        'Message:',
        form.message,
      ].join('\n'),
    )

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    setStatus(
      'Your email app should open with your message. Send the email there to complete your enquiry.',
    )
  }

  return (
    <div className={styles.pageShell}>
      <Navbar />

      <main className={styles.contactPage}>
        <div className={styles.contactContainer}>
          <section className={styles.contactHero}>
            <div className={styles.heroHeading}>
              <h1>
                Let&apos;s start a
                <br />
                project together
              </h1>
            </div>

            <div className={styles.heroAside}>
              <img
                src={profileImage}
                alt="Abdulwahab Adamson"
                className={styles.profileAvatar}
              />

              <a
                href="#contact-form"
                className={styles.heroArrow}
                aria-label="Go to contact form"
              >
                <ArrowIcon />
              </a>
            </div>
          </section>

          <div className={styles.contactLayout}>
            <section
              className={`${styles.sidebarGroup} ${styles.contactDetails}`}
            >
              <h2 className={styles.sidebarTitle}>
                CONTACT DETAILS
              </h2>

              <a
                className={styles.sidebarLink}
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>

              <p className={styles.sidebarText}>
                Available for freelance projects
              </p>
            </section>

            <section
              className={`${styles.sidebarGroup} ${styles.aboutMe}`}
            >
              <h2 className={styles.sidebarTitle}>ABOUT ME</h2>

              <p className={styles.sidebarText}>
                Abdulwahab Adamson
              </p>

              <p className={styles.sidebarText}>
                Designer &amp; Developer
              </p>

              <p className={styles.sidebarText}>
                Building thoughtful digital experiences.
              </p>
            </section>

            <section
              className={styles.formSection}
              id="contact-form"
            >
              <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
              >
                <ContactField
                  number="01"
                  label="What's your name?"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <ContactField
                  number="02"
                  label="What's your email?"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <ContactField
                  number="03"
                  label="What's the name of your organization?"
                  name="organization"
                  placeholder="Your company or organization"
                  value={form.organization}
                  onChange={handleChange}
                />

                <ContactField
                  number="04"
                  label="What services are you looking for?"
                  name="services"
                  placeholder="Web Design, Web Development ..."
                  value={form.services}
                  onChange={handleChange}
                />

                <ContactField
                  number="05"
                  label="Your message"
                  name="message"
                  placeholder="Hello Adamson, can you help me with ..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  multiline
                />

                <div className={styles.formSubmit}>
                  <button
                    type="submit"
                    className={styles.submitButton}
                  >
                    Send it!
                  </button>
                </div>

                {status && (
                  <p className={styles.formStatus} role="status">
                    {status}
                  </p>
                )}
              </form>
            </section>

            <section
              className={`${styles.sidebarGroup} ${styles.socials}`}
            >
              <h2 className={styles.sidebarTitle}>SOCIALS</h2>

              <div className={styles.sidebarSocials}>
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sidebarLink}
                  >
                    {social.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
