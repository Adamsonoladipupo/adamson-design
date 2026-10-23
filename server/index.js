
import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'

const app = express()
const PORT = Number(process.env.PORT) || 3001

const {
  BREVO_API_KEY,
  BREVO_SENDER_EMAIL,
  BREVO_SENDER_NAME = 'Portfolio Contact Form',
  CONTACT_RECIPIENT = 'adamsonoladipupo@gmail.com',
} = process.env

// Fail at startup rather than silently accepting requests that cannot send.
const missingConfig = [
  ['BREVO_API_KEY', BREVO_API_KEY],
  ['BREVO_SENDER_EMAIL', BREVO_SENDER_EMAIL],
].filter(([, value]) => !value)

if (missingConfig.length) {
  console.error(
    `Missing required environment variables: ${missingConfig
      .map(([name]) => name)
      .join(', ')}`,
  )
  process.exit(1)
}

app.disable('x-powered-by')
app.use(helmet())
app.use(express.json({ limit: '10kb' }))

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    error: 'Too many messages. Please wait 15 minutes before trying again.',
  },
})

const cleanText = (value) =>
  typeof value === 'string' ? value.trim() : ''

const validEmail = (value) =>
  value.length <= 254 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', contactLimiter, async (req, res) => {
  const body = req.body

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ error: 'Invalid request.' })
  }

  // Hidden honeypot. Real visitors should leave this field empty.
  if (cleanText(body.website)) {
    // Return a generic success to avoid encouraging bot retries.
    return res.status(200).json({
      message: 'Your message has been received.',
    })
  }

  const name = cleanText(body.name)
  const email = cleanText(body.email)
  const organization = cleanText(body.organization)
  const services = cleanText(body.services)
  const message = cleanText(body.message)

  if (
    name.length < 2 ||
    name.length > 100 ||
    /[\r\n]/.test(name)
  ) {
    return res.status(400).json({
      error: 'Please enter a name between 2 and 100 characters.',
    })
  }

  if (!validEmail(email)) {
    return res.status(400).json({
      error: 'Please enter a valid email address.',
    })
  }

  if (
    organization.length > 120 ||
    services.length > 200 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return res.status(400).json({
      error:
        'Please check your organization, services, and message. Your message must be 10–5000 characters.',
    })
  }

  // Prevent email-header injection and malformed reply-to values.
  if (/[\r\n]/.test(email)) {
    return res.status(400).json({
      error: 'Please enter a valid email address.',
    })
  }

  const textContent = [
    'New portfolio enquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || 'Not provided'}`,
    `Services: ${services || 'Not specified'}`,
    '',
    'Message:',
    message,
  ].join('\n')

  try {
    const brevoResponse = await fetch(
      'https://api.brevo.com/v3/smtp/email',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: {
            name: BREVO_SENDER_NAME,
            email: BREVO_SENDER_EMAIL,
          },
          to: [
            {
              email: CONTACT_RECIPIENT,
              name: 'Adamson',
            },
          ],
          replyTo: {
            email,
            name,
          },
          subject: `Portfolio enquiry from ${name}`,
          textContent,
        }),
        signal: AbortSignal.timeout(15000),
      },
    )

    if (!brevoResponse.ok) {
      // Log status only; never log API keys or submitted message contents.
      console.error('Brevo send failed with status:', brevoResponse.status)

      return res.status(502).json({
        error:
          'Your message could not be sent right now. Please try again shortly or email me directly.',
      })
    }

    return res.status(200).json({
      message: 'Your message has been sent successfully.',
    })
  } catch (error) {
    console.error(
      'Contact email request failed:',
      error?.name || 'UnknownError',
    )

    return res.status(502).json({
      error:
        'The email service is temporarily unavailable. Please try again shortly or email me directly.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Contact API running at http://localhost:${PORT}`)
})
