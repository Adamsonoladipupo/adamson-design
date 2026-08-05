# A. Adamson — Portfolio

A React + Vite + Tailwind recreation of adamson.dev, built around a
code-editor / terminal visual theme (fitting for a Python developer's site).
Each section of the page is its own component.

## Structure

```
src/
  App.jsx                 # composes all sections
  components/
    Navbar.jsx             # editor-tab-bar style nav
    Hero.jsx                # terminal window + headline + tech marquee
    Social.jsx              # social links strip
    About.jsx               # bio + animated stat counters
    Projects.jsx            # featured projects grid
    SourceCode.jsx          # source code product cards
    Classes.jsx             # live class card
    Contact.jsx             # contact form
    Footer.jsx
    ui/
      TermWindow.jsx        # reusable "terminal window" chrome
      SectionHeading.jsx    # reusable eyebrow + title block
  hooks/
    useCountUp.js           # animated number counter (IntersectionObserver)
  index.css                 # design tokens, grid backdrop, terminal animations
```

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes / things to wire up before shipping

- `Contact.jsx` currently just shows a "message queued" confirmation on
  submit. Point it at your email provider / API route / form service
  (e.g. Resend, Formspree, a serverless function) to actually send mail.
- Replace the placeholder social links, project links, and prices in
  `Social.jsx`, `Projects.jsx`, `SourceCode.jsx`, and `Classes.jsx` with
  your real data, or better, fetch them from a CMS/API.
- Swap the placeholder Dicebear avatar in `Classes.jsx` for your own hosted photo.
- Colors, fonts, and the terminal-window motif are defined in
  `tailwind.config.js` and `src/index.css` — tweak the `bg`, `panel`,
  `blue`, `yellow`, and `green` tokens to restyle everything at once.
