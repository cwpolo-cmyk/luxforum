import Image from "next/image";
import { hero, site } from "@/content/home";
import { NextEventCard } from "./NextEventCard";

export function Hero() {
  const { headline } = hero;

  return (
    <section className="mx-auto grid max-w-[1360px] items-center gap-12 px-4 pb-16 pt-12 md:grid-cols-2 md:gap-16 md:px-10 md:pb-24 md:pt-20">
      <div>
        <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">{hero.eyebrow}</p>

        <h1 className="mt-6 text-[44px] font-semibold leading-[1.02] md:text-[64px] lg:text-[72px]">
          {headline.before}
          <em className="font-medium italic">{headline.accent}</em>
          {headline.after}
        </h1>

        <p className="mt-8 max-w-[34ch] text-[19px] leading-[1.55] text-muted">{hero.support}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-[18px] text-parchment transition-opacity hover:opacity-90"
          >
            {hero.primaryCta.label}
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center border border-ink px-6 py-3.5 text-[18px] text-ink transition-colors hover:bg-ink hover:text-parchment"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink md:aspect-[4/5]">
          {hero.image.src ? (
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            // TODO: replace with a theatre or audience photo (see content/home.ts → hero.image)
            <div className="absolute inset-0 flex items-center justify-center" role="img" aria-label={hero.image.alt}>
              <Image src={site.monogram} alt="" width={180} height={180} className="h-auto w-[38%] opacity-90" />
            </div>
          )}
        </div>

        <div className="mt-6 md:absolute md:bottom-10 md:left-[-2.5rem] md:mt-0 md:w-[340px]">
          <NextEventCard />
        </div>
      </div>
    </section>
  );
}
