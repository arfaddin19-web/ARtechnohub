'use client';
import { useState } from 'react';

const FORMSPREE = 'https://formspree.io/f/mnpnrgrl';
const EMAIL = 'sales@artechnohub.com.np';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setBusy(true);
    setError('');
    let failure = '';
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        setSent(true);
        return;
      }
      try {
        const data = await res.json();
        if (Array.isArray(data?.errors) && data.errors.length) {
          failure = data.errors
            .map((x) => (x.field ? `${x.field}: ${x.message}` : x.message))
            .join(', ');
        } else if (data?.error) {
          failure = data.error;
        }
      } catch {}
      if (!failure) failure = `server responded ${res.status}`;
    } catch {
      failure = 'network';
    } finally {
      setBusy(false);
    }
    if (/email/i.test(failure)) {
      setError(
        'Please enter a valid email address (or leave the email field blank) and try again.'
      );
    } else if (failure === 'network') {
      setError(
        'Sorry, we could not reach our form service. Please email us at ' +
          EMAIL +
          ' and we will help you right away.'
      );
    } else {
      setError(
        'Sorry, your request did not go through (' +
          failure +
          '). Please email us at ' +
          EMAIL +
          '.'
      );
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