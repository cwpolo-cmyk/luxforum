import Image from "next/image";
import { connection } from "next/server";
import { nav, site, venue } from "@/content/home";

// The year is read per request. Under cacheComponents this needs connection(), so the
// footer streams in behind a Suspense boundary and the page stays static.
export async function Footer() {
  await connection();
  const year = new Date().getFullYear();

  return (
    <footer className="on-ink bg-ink text-parchment">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-4 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-10">
        <div>
          <Image src={site.logo} alt={site.name} width={230} height={48} className="h-12 w-auto" />
          <p className="mt-6 max-w-[30ch] text-[18px] italic text-parchment/85">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-candlelight">Explore</p>
          <ul className="mt-4 space-y-3 text-[18px]">
            {nav.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-candlelight">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-candlelight">Venue</p>
          <address className="mt-4 text-[18px] not-italic leading-[1.5]">
            {venue.name}
            <br />
            {venue.street}
            <br />
            {venue.city}, {venue.region} {venue.postalCode}
          </address>
          {site.contactEmail && (
            <a href={`mailto:${site.contactEmail}`} className="mt-3 block text-[18px] underline underline-offset-4 hover:text-candlelight">
              {site.contactEmail}
            </a>
          )}
          <a href={nav.donate.href} className="mt-6 inline-flex bg-candlelight px-5 py-2.5 text-[16px] font-semibold text-ink hover:opacity-90">
            {nav.donate.label}
          </a>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-candlelight">Follow</p>
          <ul className="mt-4 space-y-3 text-[18px]">
            {site.socials.map((social) => (
              <li key={social.label}>
                {social.href ? (
                  <a href={social.href} className="hover:text-candlelight">
                    {social.label}
                  </a>
                ) : (
                  // TODO: add social profile URLs in content/home.ts (site.socials)
                  <span className="text-parchment/60">{social.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline-dark">
        <p className="mx-auto max-w-[1360px] px-4 py-6 text-[15px] text-parchment/70 md:px-10">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
