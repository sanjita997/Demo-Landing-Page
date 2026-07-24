"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "whatsapp" | "business" | "url", string>>;

export function CTAForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const whatsapp = String(data.get("whatsapp") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const url = String(data.get("url") ?? "").trim();
    if (!name) next.name = "Please enter your full name.";
    if (!email) next.email = "Please enter your active email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!whatsapp) next.whatsapp = "Please enter your WhatsApp number.";
    else if (!/^[+\d][\d\s().-]{6,}$/.test(whatsapp)) next.whatsapp = "Please enter a valid WhatsApp number.";
    if (!business) next.business = "Please enter your business name.";
    if (url && !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/\S*)?$/i.test(url)) next.url = "Please enter a valid website or Facebook URL.";
    setErrors(next);
    if (Object.keys(next).length === 0) router.push("/thank-you");
  }

  const invalid = (name: keyof Errors) => Boolean(errors[name]);
  return (
    <section className="form-section" id="consultation-form">
      <div className="shell form-layout">
        <div className="form-copy">
          <span className="eyebrow">Book the Call</span>
          <h2 className="display section-heading">Your <span className="gold">customized strategy</span> starts here.</h2>
          <p className="section-copy">Complete the form to schedule your free one-to-one consultation.</p>
          <ul className="promise-list"><li><span>✓</span> One-to-one consultation</li><li><span>✓</span> Customized strategy for your business</li><li><span>✓</span> Clear next steps</li></ul>
        </div>
        <form className="form-card" onSubmit={submit} noValidate>
          <h2 className="display">Book Your Free Consultation</h2>
          <p className="form-intro">Tell us a little about you and your business.</p>
          <div className="field-grid two">
            <div className="field"><label htmlFor="name">Full Name</label><input id="name" name="name" placeholder="Your full name" autoComplete="name" aria-invalid={invalid("name")} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <span className="error" id="name-error">{errors.name}</span>}</div>
            <div className="field"><label htmlFor="email">Active Email</label><input id="email" name="email" type="email" placeholder="you@business.com" autoComplete="email" aria-invalid={invalid("email")} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <span className="error" id="email-error">{errors.email}</span>}</div>
            <div className="field"><label htmlFor="whatsapp">WhatsApp Number</label><input id="whatsapp" name="whatsapp" type="tel" placeholder="+977 98XXXXXXXX" autoComplete="tel" inputMode="tel" aria-invalid={invalid("whatsapp")} aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined} />{errors.whatsapp && <span className="error" id="whatsapp-error">{errors.whatsapp}</span>}</div>
            <div className="field"><label htmlFor="business">Business Name</label><input id="business" name="business" placeholder="Your business name" autoComplete="organization" aria-invalid={invalid("business")} aria-describedby={errors.business ? "business-error" : undefined} />{errors.business && <span className="error" id="business-error">{errors.business}</span>}</div>
          </div>
          <div className="field-grid" style={{ marginTop: 18 }}>
            <div className="field"><label htmlFor="url">Website or Facebook URL <span className="optional">Optional</span></label><input id="url" name="url" type="url" placeholder="https://" autoComplete="url" aria-invalid={invalid("url")} aria-describedby={errors.url ? "url-error" : undefined} />{errors.url && <span className="error" id="url-error">{errors.url}</span>}</div>
            <div className="field"><label htmlFor="message">Anything You Want to Say <span className="optional">Optional</span></label><textarea id="message" name="message" placeholder="Tell us about your current marketing situation..." /></div>
          </div>
          <button className="primary-btn form-submit" type="submit">Book Free Consultation <span className="arrow" aria-hidden="true">→</span></button>
          <p className="privacy">We respect your privacy. No spam.</p>
        </form>
      </div>
    </section>
  );
}
