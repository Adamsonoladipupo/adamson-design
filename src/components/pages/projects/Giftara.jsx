import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Giftara.module.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// Temporary shared image placeholder. Replace with your final exported Giftara
// screen / brand-manual assets when you add them to src/assets/giftara/.
import giftaraImage from "../../assets/giftara.png";

const productScreens = [
  { title: "Marketplace experience", alt: "Giftara marketplace screen placeholder" },
  { title: "Gift card categories", alt: "Giftara category screen placeholder" },
  { title: "Brand identity in context", alt: "Giftara brand identity placeholder" },
];

const brandStudy = [
  { number: "01", title: "Logo & brand mark", alt: "Giftara logo design placeholder" },
  { number: "02", title: "Colour system", alt: "Giftara colour system placeholder" },
  { number: "03", title: "Typography", alt: "Giftara typography placeholder" },
  { number: "04", title: "Brand applications", alt: "Giftara brand applications placeholder" },
];

export default function Giftara() {
  const [hoveredStudy, setHoveredStudy] = useState(false);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });

  const handleStudyMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPreviewPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.intro}>
        <p className={styles.eyebrow}>Selected project · Product & Brand Design</p>
        <h1 className={styles.title}>Giftara</h1>
        <div className={styles.details}>
          <div>
            <span className={styles.detailLabel}>About project</span>
            <p className={styles.detailContent}>Giftara is a mobile gifting experience designed to help people buy, send, and manage digital gift cards for birthdays, anniversaries, and spontaneous moments of appreciation.</p>
          </div>
          <div>
            <span className={styles.detailLabel}>My role</span>
            <p className={styles.detailContent}>Brand Identity Designer<br />Product Designer · UX/UI</p>
          </div>
          <div>
            <span className={styles.detailLabel}>Scope</span>
            <p className={styles.detailContent}>Brand identity, visual direction, mobile UX/UI, design system, gifting flows, and branded email templates.</p>
          </div>
        </div>
      </section>

      <section className={styles.heroGallery} aria-label="Giftara project preview">
        <div className={styles.heroFrame}>
          <img className={styles.heroImage} src={giftaraImage} alt="Giftara project cover placeholder" />
          <a className={styles.caseStudyButton} href="#full-case-study">
            <span>View case study</span><span className={styles.buttonArrow} aria-hidden="true">↘</span>
          </a>
        </div>
        <div className={styles.projectCaption}><span>Giftara · Product & Brand Design</span><span>Mobile experience / Visual identity</span></div>
      </section>

      <section className={styles.problem}>
        <div className={styles.sectionHeader}><p className={styles.sectionIndex}>01 / The challenge</p><h2 className={styles.sectionTitle}>Gifting should feel joyful, not complicated.</h2></div>
        <div className={styles.splitContent}><span className={styles.sectionMark}>“</span><div className={styles.bodyCopy}>
          <p className={styles.lead}>Giftara needed to make digital gifting feel personal, clear, and delightful from discovery to delivery.</p>
          <p>The brief called for a mobile-first app where people could discover gift cards for different occasions, complete purchases with confidence, and manage their gifts and wallet in one place. The experience also needed a recognisable visual identity that could carry consistently across the app and its email communications.</p>
          <p>The design challenge was to balance a playful, celebratory mood with the clarity users need when handling payments, verification, gift-card history, and withdrawals.</p>
        </div></div>
      </section>

      <section className={styles.approach}>
        <div className={styles.sectionHeader}><p className={styles.sectionIndex}>02 / My design approach</p><h2 className={styles.sectionTitle}>One connected experience, from brand to product.</h2></div>
        <div className={styles.approachGrid}>
          <article className={styles.approachCard}><span className={styles.cardNumber}>01</span><h3>Brand identity design</h3><p>I developed a friendly and expressive visual direction built around the joy of giving. The brief establishes a gift-inspired logo, the “The Joy of Gifting” tagline, and a palette of purple, gold, and pink. Rounded forms and celebratory illustrations help the brand feel warm and approachable.</p><div className={styles.tagList}><span>Logo direction</span><span>Colour palette</span><span>Typography</span><span>Visual language</span></div></article>
          <article className={styles.approachCard}><span className={styles.cardNumber}>02</span><h3>UX/UI product design</h3><p>I structured the mobile experience around clear journeys and familiar navigation. The core flows cover account access and OTP verification, marketplace discovery, cart and checkout, gift-card history, wallet activity, withdrawals, and profile settings.</p><div className={styles.tagList}><span>User flows</span><span>Mobile-first UI</span><span>Interaction states</span><span>Navigation</span></div></article>
          <article className={styles.approachCard}><span className={styles.cardNumber}>03</span><h3>System and feedback</h3><p>I considered how the experience communicates progress and builds trust. The brief specifies clear toast or snackbar feedback, validation states, success and error illustrations, and branded email templates for key account and gift-card events.</p><div className={styles.tagList}><span>Design consistency</span><span>Feedback states</span><span>Email templates</span></div></article>
        </div>
        <div className={styles.visualGallery}>{productScreens.map((screen) => <figure className={styles.visualCard} key={screen.title}><div className={styles.visualImageFrame}><img src={giftaraImage} alt={screen.alt} loading="lazy" /></div><figcaption>{screen.title}</figcaption></figure>)}</div>
        <p className={styles.placeholderNote}>Visual placeholders are in use here. Replace the repeated Giftara image with the matching exported screens when your final assets are ready.</p>
      </section>

      <section className={styles.impact}>
        <div className={styles.sectionHeader}><p className={styles.sectionIndex}>03 / Impact</p><h2 className={styles.sectionTitle}>A clearer foundation for a gift-first product.</h2></div>
        <div className={styles.splitContent}><span className={styles.sectionMark}>✳</span><div className={styles.bodyCopy}>
          <p className={styles.lead}>The design direction brings the brand and the main product journeys into one consistent experience.</p>
          <p>The documented outcome is a mobile-first design scope that connects the marketplace, purchasing, wallet, gift history, account management, and transactional communications with a shared visual language.</p>
          <p>The brief does not include measured business results or user-test metrics, so this case study focuses on design deliverables and experience foundations rather than claiming unverified numbers.</p>
        </div></div>
        <div className={styles.impactGrid}><div className={styles.impactItem}><span className={styles.impactValue}>01</span><span className={styles.impactLabel}>Connected brand and product direction</span></div><div className={styles.impactItem}><span className={styles.impactValue}>02</span><span className={styles.impactLabel}>Mapped core gifting and account journeys</span></div><div className={styles.impactItem}><span className={styles.impactValue}>03</span><span className={styles.impactLabel}>Consistent UI and communication touchpoints</span></div></div>
      </section>

      <section className={styles.fullCaseStudy} id="full-case-study">
        <div className={styles.caseStudyIntro}><p className={styles.sectionIndex}>04 / Full case study</p><h2 className={styles.sectionTitle}>Building the Giftara brand.</h2><p>This is the complete brand identity study within the Giftara project page—not a separate project. It brings together the brand idea, logo, colour, typography, and applications that support the product experience.</p></div>
        <div className={styles.brandStatement}><span className={styles.brandEyebrow}>Brand idea</span><p>The Joy<br />of Gifting.</p><span className={styles.brandSubtext}>A warm, playful identity for meaningful digital gifts.</span></div>
        <div className={styles.brandStudyList}>{brandStudy.map((item) => <article className={styles.brandStudyItem} key={item.number}><div className={styles.brandStudyHeading}><span>{item.number}</span><h3>{item.title}</h3></div><div className={styles.brandStudyImage}><img src={giftaraImage} alt={item.alt} loading="lazy" /></div></article>)}</div>
        <div className={styles.designSystem}><div><p className={styles.sectionIndex}>Visual system</p><h3>Playful by nature.<br />Clear by design.</h3></div><div className={styles.systemDetails}><p>The brief specifies a purple primary colour, gold secondary colour, pink accent, and Poppins / Inter typography. Rounded buttons, gift-themed illustrations, confetti, balloons, and ribbon motifs support a celebratory tone, while consistent feedback helps important actions stay understandable.</p><div className={styles.swatches} aria-label="Giftara brand colours"><div className={styles.swatchPurple}><span>Purple</span></div><div className={styles.swatchGold}><span>Gold</span></div><div className={styles.swatchPink}><span>Pink</span></div></div></div></div>
        <div className={styles.emailTemplates}><div className={styles.emailText}><p className={styles.sectionIndex}>Beyond the app</p><h3>A consistent voice across every touchpoint.</h3><p>The brand system extends to welcome and verification emails, purchase confirmations, temporary gift cards and redeem codes, successful redemption, withdrawal updates, and KYC completion.</p></div><div className={styles.emailVisual}><img src={giftaraImage} alt="Giftara branded communications placeholder" loading="lazy" /></div></div>
        <p className={styles.placeholderNote}>Replace the placeholder panels above with the final logo explorations, brand manual pages, mockups, and email designs. The copy is based on the supplied Giftara design brief.</p>
      </section>

      <section className={styles.nextProject}><p className={styles.nextLabel}>Next project</p><Link to="/work/swaply" className={styles.nextLink} onMouseEnter={() => setHoveredStudy(true)} onMouseMove={handleStudyMove} onMouseLeave={() => setHoveredStudy(false)}><span className={styles.nextTitle}>Swaply</span><span className={styles.nextMeta}>UX/UI Design · Fintech & Cryptocurrency</span>{hoveredStudy && <span className={styles.cursorView} style={{ left: previewPosition.x, top: previewPosition.y }} aria-hidden="true">View project <span>↗</span></span>}</Link><div className={styles.nextBottom}><span className={styles.nextRule} /><Link to="/projects" className={styles.allProjects}>All projects <span>↗</span></Link></div></section>
      <Footer />
    </main>
  );
}
