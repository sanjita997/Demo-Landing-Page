import { ThemeToggle } from "@/components/ThemeToggle";

const nextSteps = [
  ["Step 1", "We'll review your business information."],
  ["Step 2", "We'll contact you to confirm your consultation."],
  ["Step 3", "You'll receive a one-to-one consultation along with a customized AI marketing strategy for your business."],
];

export default function ThankYouPage() {
  return (
    <main className="thank-you">
      <div className="shell header-inner">
        <div className="logo-wrap thank-logo">
          <img
            className="logo"
            src="/images/techverse-sanjita-logo-transparent.png"
            alt="TechVerse Sanjita"
            width={1752}
            height={897}
          />
        </div>
        <ThemeToggle />
      </div>
      <div className="narrow">
        <section className="thank-hero">
          <span className="success-mark" aria-hidden="true">✓</span>
          <h1 className="display">Thank You! Your Free AI Marketing Consultation Request Has Been Received.</h1>
          <h2>You&apos;re One Step Closer to Growing Your Business with AI.</h2>
          <p>Thank you for booking your FREE AI Marketing Consultation. We&apos;re reviewing your information and will contact you shortly to confirm your consultation.</p>
        </section>
        <section className="video-card">
          <span className="eyebrow">Before We Speak</span>
          <h2 className="display section-heading">Watch This Short Video Before Your Consultation</h2>
          <p className="section-copy">In this short video, you&apos;ll learn:</p>
          <ul className="video-list"><li>Why many businesses struggle to generate consistent sales online</li><li>The common marketing mistakes that waste time and money</li><li>How AI can help you attract more customers and improve your marketing</li><li>How to get the most value from your upcoming consultation</li></ul>
          <div className="video-embed">
            <iframe
              src="https://www.youtube.com/embed/HYStQwLZRYE?feature=share"
              title="AI marketing consultation preparation video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="section-copy"><strong>Please watch the full video before your consultation.</strong> It will help you better understand the strategy we&apos;ll discuss together.</p>
        </section>
        <section className="question-card" id="whatsapp-setup">
          <h2 className="display">Have a Question?</h2>
          <p>If you&apos;d like to ask a question before your consultation, simply send us a message on WhatsApp. We&apos;ll be happy to help.</p>
          <a className="primary-btn whatsapp-btn" href="https://wa.me/message/NMJL4L3YU5Z4K1" target="_blank" rel="noopener noreferrer">👉 Message Us on WhatsApp</a>
        </section>
        <section className="next-section">
          <span className="eyebrow">What Happens Next?</span>
          <div className="next-grid">{nextSteps.map(([step, copy]) => <article className="next-card" key={step}><strong>{step}</strong><p>{copy}</p></article>)}</div>
          <p className="closing">We look forward to speaking with you and helping your business grow.</p>
        </section>
      </div>
    </main>
  );
}
