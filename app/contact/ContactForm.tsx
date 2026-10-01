'use client';
import { useState } from 'react';

const FORMSPREE = 'https://formspree.io/f/mnpnrgrl';
const EMAIL = 'artechnohub23@gmail.com';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setBusy(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setSent(true);
    } catch {
      setError(
        'Sorry, your request did not go through. Please email us at ' +
          EMAIL +
          ' and we will help you right away.'
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <form action={FORMSPREE} method="POST" onSubmit={submit}>
      {sent ? (
        <div className="success">
          <span>✓</span>
          <h2>Request received.</h2>
          <p>
            Thank you. We have your details and will get back to you within one
            business day.
          </p>
          <button className="gold-btn" type="button" onClick={() => setSent(false)}>
            Send another
          </button>
        </div>
      ) : (
        <>
          {error && <div className="form-error">{error}</div>}
          <input type="hidden" name="_subject" value="New MPOS demo request" />
          <label>
            Name<input required name="name" placeholder="Your name" />
          </label>
          <label>
            Business name
            <input required name="business_name" placeholder="Business name" />
          </label>
          <label>
            Business type
            <select required name="business_type" defaultValue="">
              <option value="" disabled>
                Select your business
              </option>
              <option>Restaurant</option>
              <option>Hotel</option>
              <option>Spa / Salon / Parlor</option>
              <option>Banquet / Events</option>
              <option>HR / Payroll</option>
            </select>
          </label>
          <label>
            Phone / WhatsApp
            <input required name="phone" placeholder="+977 ..." />
          </label>
          <label>
            Email<input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us what you would like to manage..."
            ></textarea>
          </label>
          <button className="gold-btn" type="submit" disabled={busy}>
            {busy ? 'Sending...' : 'Request a Demo →'}
          </button>
        </>
      )}
    </form>
  );
}