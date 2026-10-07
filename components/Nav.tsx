"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/home";

export function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape closes the menu and returns focus to the toggle; the page scroll is locked while open.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="on-ink sticky top-0 z-50 bg-ink text-parchment">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-4 md:px-10">
        <a href="/" aria-label={`${site.name} home`} className="flex items-center">
          <Image src={site.logo} alt={site.name} width={170} height={36} priority className="h-8 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-[17px] tracking-wide text-parchment/90 hover:text-candlelight">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={nav.donate.href}
              className="inline-flex items-center bg-candlelight px-5 py-2.5 text-[16px] font-semibold text-ink transition-opacity hover:opacity-90"
            >
              {nav.donate.label}
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 items-center px-2 text-[16px] md:hidden"
        >
          Menu
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ink px-4 pb-10 pt-4 text-parchment"
        >
          <div className="flex h-16 items-center justify-between">
            <span className="flex items-center">
              <Image src={site.logo} alt={site.name} width={170} height={36} className="h-8 w-auto" />
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              className="inline-flex h-11 items-center px-2 text-[16px]"
            >
              Close
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-6">
            {nav.links.map((link) => (
              <li key={link.label} className="border-b border-hairline-dark pb-6">
                <a href={link.href} onClick={() => setOpen(false)} className="font-serif text-[34px] font-semibold leading-none">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={nav.donate.href}
            className="mt-auto inline-flex items-center justify-center bg-candlelight px-6 py-4 text-[18px] font-semibold text-ink"
          >
            {nav.donate.label}
          </a>
        </div>
      )}
    </header>
  );
}
