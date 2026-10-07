import Image from "next/image";
import { nextEvent } from "@/content/home";

export function NextEventCard() {
  const { speaker } = nextEvent;

  return (
    <article aria-labelledby="next-event-heading" className="border border-hairline bg-parchment p-6 shadow-[0_1px_0_rgba(27,42,65,0.04)]">
      <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">{nextEvent.label}</p>

      <div className="mt-4 flex items-start gap-4">
        {speaker.photo && (
          <Image
            src={speaker.photo}
            alt={speaker.photoAlt}
            width={64}
            height={64}
            className="h-16 w-16 flex-none object-cover"
          />
        )}
        <div>
          <h2 id="next-event-heading" className="text-[28px] font-semibold leading-[1.05]">
            {speaker.name}
          </h2>
          <p className="mt-1 text-[15px] italic text-muted">{nextEvent.title}</p>
        </div>
      </div>

      <dl className="mt-5 space-y-1 text-[18px]">
        <div className="flex gap-2">
          <dt className="sr-only">Date</dt>
          <dd className="font-semibold">
            {nextEvent.dateLabel} · {nextEvent.timeLabel}
          </dd>
        </div>
        <div className="flex gap-2 text-[15px] text-muted">
          <dt className="sr-only">Schedule</dt>
          <dd>{nextEvent.scheduleLabel}</dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4">
        <span className="text-[15px] text-muted">{nextEvent.price}</span>
        <a
          href={nextEvent.rsvp.href}
          className="inline-flex items-center gap-1 text-[16px] font-semibold text-ink underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          {nextEvent.rsvp.label} <span aria-hidden="true">→</span>
          <span className="sr-only"> for {speaker.name}, {nextEvent.title}</span>
        </a>
      </div>
    </article>
  );
}
