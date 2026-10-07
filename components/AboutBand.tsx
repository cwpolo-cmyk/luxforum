import { aboutBand } from "@/content/home";
import { Reveal } from "./Reveal";

export function AboutBand() {
  return (
    <section aria-labelledby="about-heading" className="border-y border-hairline">
      <Reveal className="mx-auto grid max-w-[1360px] gap-10 px-4 py-16 md:grid-cols-[1fr_1fr] md:gap-20 md:px-10 md:py-24">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">{aboutBand.eyebrow}</p>
          <h2 id="about-heading" className="mt-4 text-[36px] font-semibold leading-[1.08] md:text-[52px]">
            {aboutBand.heading}
          </h2>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-[19px] leading-[1.6] text-muted">{aboutBand.body}</p>
          <a
            href={aboutBand.cta.href}
            className="mt-8 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-[18px] font-semibold"
          >
            {aboutBand.cta.label} <span aria-hidden="true">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
