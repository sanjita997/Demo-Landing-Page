const benefits = [
  "Discover what's stopping your marketing from generating better results",
  "Receive a customized AI marketing plan for your business",
  "Identify opportunities to attract more qualified customers",
  "Learn practical AI marketing strategies you can apply to your business",
  "Get clear next steps to improve your marketing with confidence",
];

export function Benefits() {
  return (
    <section className="section dark-band">
      <div className="shell">
        <span className="eyebrow">Built Around Your Business</span>
        <h2 className="display section-heading">How You Benefit From This Consultation</h2>
        <div className="benefit-grid">{benefits.map((benefit) => <article className="benefit-card" key={benefit}><span className="benefit-icon" aria-hidden="true">✓</span><p>{benefit}</p></article>)}</div>
      </div>
    </section>
  );
}
