"use client";

import { useId, useState, type FormEvent } from "react";
import { newsletter } from "@/content/home";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function NewsletterCTA() {
  const inputId = useId();
  const errorId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [validation, setValidation] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = email.trim();
    if (!EMAIL_PATTERN.test(value)) {
      setValidation(newsletter.invalid);
      setStatus("idle");
      return;
    }

    setValidation(null);
    setStatus("submitting");
    try {
      // TODO: connect provider (Mailchimp/Klaviyo/etc.)
      // Placeholder: simulates a successful request so the success state can be reviewed.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  const message = validation ?? (status === "error" ? newsletter.error : null);

  return (
    <section id="newsletter" aria-labelledby="newsletter-heading" className="on-ink bg-ink text-parchment">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-4 py-16 md:grid-cols-2 md:items-end md:gap-20 md:px-10 md:py-24">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-candlelight">{newsletter.eyebrow}</p>
          <h2 id="newsletter-heading" className="mt-4 text-[36px] font-semibold leading-[1.08] md:text-[52px]">
            {newsletter.heading}
          </h2>
        </div>

        <div className="min-w-0">
          {status === "success" ? (
            <p role="status" className="border border-candlelight/60 p-6 text-[20px]">
              {newsletter.success}
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
              <label htmlFor={inputId} className="text-[16px] text-parchment/85">
                {newsletter.label}
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id={inputId}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={message ? true : undefined}
                  aria-describedby={message ? errorId : undefined}
                  disabled={status === "submitting"}
                  className="h-14 min-w-0 flex-1 border border-parchment/60 bg-transparent px-4 text-[18px] text-parchment placeholder:text-parchment/50 focus:border-candlelight focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-14 items-center justify-center gap-2 bg-candlelight px-6 text-[18px] font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "submitting" ? "Joining…" : newsletter.submit}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
              <p id={errorId} role={message ? "alert" : undefined} className="min-h-[1.5em] text-[16px] text-parchment">
                {message}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
