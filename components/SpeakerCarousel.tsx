"use client";

import Image from "next/image";
import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { meetTheMinds, site, speakers, type Speaker } from "@/content/home";

const GAP = 24; // matches gap-6 on the track

export function SpeakerCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [dragging, setDragging] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  const step = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card ? card.offsetWidth + GAP : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  // Keyboard: arrow keys move through the track when it has focus
  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  // Mouse drag to scroll. Touch and trackpads use native scrolling.
  const onPointerDown = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: PointerEvent<HTMLUListElement>) => {
    const d = drag.current;
    const el = trackRef.current;
    if (!d.active || !el) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) el.scrollLeft = d.startScroll - dx;
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
  };
  // Stop a click on a card from firing right after a drag
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section id="meet-the-minds" aria-labelledby="meet-the-minds-heading" className="mx-auto max-w-[1360px] py-16 md:py-24">
      <div className="flex flex-col gap-8 px-4 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">{meetTheMinds.eyebrow}</p>
          <h2 id="meet-the-minds-heading" className="mt-4 text-[40px] font-semibold leading-[1.02] md:text-[56px]">
            {meetTheMinds.headlineLines[0]}
            <br />
            {meetTheMinds.headlineLines[1]}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <a href={meetTheMinds.seeAll.href} className="mr-2 text-[18px] underline underline-offset-4">
            {meetTheMinds.seeAll.label}
          </a>
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label="Previous speakers"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink text-[20px] transition-colors hover:bg-ink hover:text-parchment disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label="Next speakers"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink text-[20px] transition-colors hover:bg-ink hover:text-parchment disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        tabIndex={0}
        role="list"
        aria-label="Past speakers. Use the arrow keys to scroll."
        onScroll={updateEdges}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className={`mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pl-4 pr-4 md:pl-10 md:pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing snap-none select-none" : "cursor-grab"
        }`}
      >
        {speakers.map((speaker) => (
          <li key={speaker.slug} className="snap-start">
            <SpeakerCard speaker={speaker} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const body = (
    <>
      {speaker.photo ? (
        <Image
          src={speaker.photo}
          alt={`Portrait of ${speaker.name}`}
          fill
          sizes="(min-width: 768px) 300px, 78vw"
          loading="lazy"
          draggable={false}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        // TODO: add the speaker's photo to /public/speakers/<slug>.jpg and set photo in content/home.ts
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <Image src={site.monogram} alt="" width={96} height={96} className="h-auto w-[36%] opacity-20" />
        </div>
      )}

      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-parchment">
        <p className="translate-y-2 text-[15px] italic text-candlelight opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          {meetTheMinds.hoverLine}
        </p>
        <h3 className="mt-1 text-[26px] font-semibold leading-[1.1]">{speaker.name}</h3>
      </div>
    </>
  );

  const shared = "group relative block aspect-[3/4] w-[78vw] overflow-hidden bg-ink text-parchment sm:w-[300px] md:w-[280px]";

  if (speaker.href) {
    return (
      <a href={speaker.href} className={`${shared} on-ink`}>
        {body}
      </a>
    );
  }
  return <article className={shared}>{body}</article>;
}
