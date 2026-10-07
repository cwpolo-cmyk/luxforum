import { info } from "@/content/home";

// Eyebrow label used for each column (uppercase tracked caps)
function Label({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">{children}</h2>;
}

export function InfoCard() {
  const { findUs, expect, contact } = info;

  return (
    <section aria-label="Visit, expectations and contact" className="mx-auto max-w-[1360px] px-4 md:px-10">
      <div className="grid gap-10 border border-hairline bg-parchment p-6 md:grid-cols-3 md:gap-12 md:p-10">
        <div className="flex flex-col">
          <Label>{findUs.title}</Label>
          <p className="mt-4 text-[26px] font-semibold leading-tight">{findUs.venue}</p>
          <address className="mt-2 not-italic text-[18px] leading-[1.5] text-muted">
            {findUs.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={findUs.cta.href}
            className="mt-6 inline-flex w-fit items-center gap-2 bg-ink px-5 py-3 text-[17px] text-parchment transition-opacity hover:opacity-90"
          >
            {findUs.cta.label} <span aria-hidden="true">→</span>
          </a>
        </div>

        <div>
          <Label>{expect.title}</Label>
          <dl className="mt-4 divide-y divide-hairline border-y border-hairline">
            {expect.rows.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-6 py-3">
                <dt className="text-[16px] text-muted">{row.label}</dt>
                <dd className="text-right text-[17px]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <Label>{contact.title}</Label>
          <div className="mt-4 space-y-5">
            <div>
              <p className="text-[13px] uppercase tracking-[0.18em] text-muted">Email</p>
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="text-[18px] underline underline-offset-4">
                  {contact.email}
                </a>
              ) : (
                // TODO: add the contact email in content/home.ts (info.contact.email)
                <p className="text-[18px] text-muted">Email coming soon</p>
              )}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[18px]">
              <a href={contact.contact.href} className="underline underline-offset-4">
                {contact.contact.label}
              </a>
              <a href={contact.donate.href} className="font-semibold underline underline-offset-4">
                {contact.donate.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
