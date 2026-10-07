import Image from "next/image";
import { featureCards, nextEvent, venue } from "@/content/home";
import { Reveal } from "./Reveal";

export function FeatureCards() {
  const { topics, upcoming } = featureCards;
  const { speaker } = nextEvent;

  return (
    <section aria-label="Topics and upcoming event" className="mx-auto max-w-[1360px] px-4 py-8 md:px-10 md:py-12">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="on-ink flex flex-col bg-ink p-8 text-parchment md:p-12">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-candlelight">{topics.eyebrow}</p>
            <h2 className="mt-4 text-[36px] font-semibold leading-[1.05] md:text-[44px]">{topics.heading}</h2>

            <ol className="mt-8 divide-y divide-hairline-dark border-y border-hairline-dark">
              {topics.items.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 py-4">
                  <span className="w-8 text-[15px] text-candlelight">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[26px] font-medium">{item}</span>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-[18px] leading-[1.55] text-parchment/85">{topics.thread}</p>
          </article>

          <article aria-labelledby="upcoming-heading" className="flex flex-col border border-hairline bg-parchment p-8 md:p-12">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">{upcoming.eyebrow}</p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Image
                src={speaker.photo}
                alt={speaker.photoAlt}
                width={112}
                height={112}
                loading="lazy"
                className="h-24 w-24 flex-none object-cover md:h-28 md:w-28"
              />
              <div className="min-w-0">
                <h2 id="upcoming-heading" className="text-[36px] font-semibold leading-[1.05] md:text-[44px]">
                  {nextEvent.title}
                </h2>
                <p className="mt-1 text-[18px] italic text-muted">
                  {speaker.name}, {speaker.descriptor}
                </p>
              </div>
            </div>

            <p className="mt-6 text-[18px] leading-[1.6] text-muted">{nextEvent.description}</p>

            <dl className="mt-6 divide-y divide-hairline border-y border-hairline text-[17px]">
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-muted">When</dt>
                <dd className="text-right">
                  {nextEvent.dateLabel} · {nextEvent.timeLabel}
                  <span className="block text-[15px] text-muted">{nextEvent.scheduleLabel}</span>
                </dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-muted">Where</dt>
                <dd className="text-right">
                  {venue.name}
                  <span className="block text-[15px] text-muted">{venue.street}, {venue.city}</span>
                </dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-muted">Admission</dt>
                <dd className="text-right">{nextEvent.price}</dd>
              </div>
            </dl>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
              <a
                href={nextEvent.rsvp.href}
                className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-[18px] text-parchment transition-opacity hover:opacity-90"
              >
                {upcoming.rsvpLabel} <span aria-hidden="true">→</span>
              </a>
              <p className="text-[14px] italic text-muted">{nextEvent.sponsor}</p>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
