"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    
    const fullName = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!fullName || !email || !message) {
      setError("Please fill in your name, email and message.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://admin.asbfashion.com/web/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          subject,
          message,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
        formElement.reset();
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to reach the server. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-crimson/25 bg-paper-dim p-8 text-center">
        <h3 className="font-display text-2xl font-medium text-crimson">
          Message sent
        </h3>
        <p className="mt-3 text-clay/70 leading-relaxed">
          Thanks for reaching out — our team will get back to you shortly.
          For anything urgent, call us directly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-ink/70 border-b border-ink/30 pb-0.5 hover:text-crimson hover:border-crimson transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink/80 mb-2">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            disabled={loading}
            className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm outline-none focus:border-crimson transition-colors disabled:opacity-50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink/80 mb-2">
            Email address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            disabled={loading}
            className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm outline-none focus:border-crimson transition-colors disabled:opacity-50"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink/80 mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          disabled={loading}
          className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm outline-none focus:border-crimson transition-colors disabled:opacity-50"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink/80 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={loading}
          className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm outline-none focus:border-crimson transition-colors resize-none disabled:opacity-50"
          placeholder="Tell us a little more…"
        />
      </div>

      {error && <p className="text-sm font-medium text-crimson">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-8 py-3.5 text-sm font-medium text-paper hover:bg-crimson-bright transition-colors disabled:opacity-50 cursor-pointer"
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}