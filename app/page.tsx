import { Suspense } from "react";
import { AboutBand } from "@/components/AboutBand";
import { FeatureCards } from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/InfoCard";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { SpeakerCarousel } from "@/components/SpeakerCarousel";
import { nextEvent, site, venue } from "@/content/home";

// JSON-LD: Organization for the site, Event for the next lecture.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  description: site.mission,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: venue.street,
    addressLocality: venue.city,
    addressRegion: venue.region,
    postalCode: venue.postalCode,
    addressCountry: "US",
  },
  email: site.contactEmail ?? undefined,
  // TODO: add social profile URLs (sameAs) once confirmed
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `${nextEvent.title} with ${nextEvent.speaker.name}`,
  description: nextEvent.description,
  startDate: nextEvent.startIso,
  endDate: nextEvent.endIso,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: venue.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: venue.street,
      addressLocality: venue.city,
      addressRegion: venue.region,
      postalCode: venue.postalCode,
      addressCountry: "US",
    },
  },
  organizer: { "@type": "Organization", name: site.name, url: site.url },
  performer: { "@type": "Person", name: nextEvent.speaker.name },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: nextEvent.rsvp.href,
  },
  image: [`${site.url}${nextEvent.speaker.photo}`],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-parchment"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <InfoCard />
        <Reveal>
          <SpeakerCarousel />
        </Reveal>
        <FeatureCards />
        <AboutBand />
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
