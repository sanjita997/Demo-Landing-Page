const steps = [
  ["Step 1", "Book your free consultation by completing the form below."],
  ["Step 2", "Meet one-to-one to discuss your business, goals, and current marketing challenges."],
  ["Step 3", "Receive a customized AI marketing strategy designed specifically for your business."],
];

export function Process() {
  return (
    <section className="section">
      <div className="shell">
        <span className="eyebrow">Simple & Focused</span>
        <h2 className="display section-heading">Consultation Process</h2>
        <div className="process-grid">{steps.map(([title, copy], index) => <article className="process-card" key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>
  );
}
