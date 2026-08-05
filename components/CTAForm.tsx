import { FlodeskForm } from "./FlodeskForm";

export function CTAForm() {
  return (
    <section className="form-section" id="consultation-form">
      <div className="shell form-layout">
        <div className="form-copy">
          <span className="eyebrow">Book the Call</span>
          <h2 className="display section-heading">Your <span className="gold">customized strategy</span> starts here.</h2>
          <p className="section-copy">Complete the form to schedule your free one-to-one consultation.</p>
          <ul className="promise-list"><li><span>✓</span> One-to-one consultation</li><li><span>✓</span> Customized strategy for your business</li><li><span>✓</span> Clear next steps</li></ul>
        </div>
        <div className="form-card flodesk-card">
          <h2 className="display">Book Your Free Consultation</h2>
          <p className="form-intro">Tell us a little about you and your business.</p>
          <FlodeskForm />
          <p className="privacy">We respect your privacy. No spam.</p>
        </div>
      </div>
    </section>
  );
}
