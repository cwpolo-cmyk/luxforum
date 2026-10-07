import { featureCards, site } from "@/content/home";
import { Reveal } from "./Reveal";

export function FeatureCards() {
  const { topics, featuredLecture } = featureCards;

  return (
    <section aria-label="Topics and featured lecture" className="mx-auto max-w-[1360px] px-4 py-8 md:px-10 md:py-12">
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

          <article className="flex flex-col border border-hairline bg-parchment p-8 md:p-12">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">{featuredLecture.eyebrow}</p>

            <div className="relative mt-6 aspect-video w-full overflow-hidden bg-ink">
              {/* TODO: add a featured past lecture video URL in content/home.ts (featureCards.featuredLecture.videoUrl) */}
              {featuredLecture.videoUrl ? (
                <a
                  href={featuredLecture.videoUrl}
                  aria-label={`Play ${featuredLecture.title}`}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <PlayButton />
                </a>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    disabled
                    aria-label="Play featured lecture (video coming soon)"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-parchment/25 text-parchment disabled:cursor-not-allowed"
                  >
                    <PlayIcon />
                  </button>
                </div>
              )}
            </div>

            <h3 className="mt-6 text-[30px] font-semibold leading-[1.1]">{featuredLecture.title}</h3>
            <p className="mt-2 text-[17px] italic text-muted">{featuredLecture.speaker}</p>
            <p className="mt-auto pt-6 text-[15px] text-muted">
              Watch more on{" "}
              <a href={site.url} className="underline underline-offset-4 text-ink">
                luxforum.org
              </a>
              .
            </p>
          </article>
        </div>
      </Reveal>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  );
}

function PlayButton() {
  return (
    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-candlelight text-ink">
      <PlayIcon />
    </span>
  );
}
