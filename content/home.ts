// Homepage content: the single place to edit copy, speakers and the next event.
// Components read from here; no copy is hardcoded in components.
// Every unresolved item is marked TODO. Search this file for "TODO" before launch.

export const site = {
  name: "Lux Forum",
  tagline: "Insightful Lectures & Educational Experiences in Napa Valley",
  url: "https://luxforum.org",
  founded: 2016,
  // TODO: confirm exact mission wording against luxforum.org (site was unreachable during build)
  mission:
    "Lectures and educational experiences across science, arts, technology and economics, exploring how a faith perspective intersects with and informs those topics. Attendees get direct, face-to-face access to thought leaders and can talk with them personally.",
  topics: ["Science", "Arts", "Technology", "Economics"],
  faithThread:
    "Faith runs through every conversation: how a faith perspective intersects with and informs each subject.",
  logo: "/logo/LuxForum_horizontal_reversed.svg",
  monogram: "/logo/LuxForum_monogram_reversed.svg",
  favicon: "/favicon.svg",
  eventsUrl: "https://luxforum.org/events/",
  aboutUrl: "https://luxforum.org/about-us/",
  // TODO: confirm the Contact Us path (the page was not reachable during build)
  contactUrl: "https://luxforum.org/contact-us/",
  contactEmail: "info@luxforum.org" as string | null,
  donateUrl: "https://luxforumevents.givingfuel.com/lux-forum",
  // TODO: add social profile URLs; a null entry shows as a placeholder in the footer
  socials: [
    { label: "Instagram", href: null as string | null },
    { label: "Facebook", href: null as string | null },
    { label: "YouTube", href: null as string | null },
  ],
};

export const nav = {
  links: [
    { label: "About", href: site.aboutUrl },
    { label: "Events", href: site.eventsUrl },
    { label: "Speakers", href: "#meet-the-minds" },
    { label: "Contact", href: site.contactUrl },
  ],
  donate: { label: "Donate", href: site.donateUrl },
};

export const venue = {
  name: "The Historic Theatre",
  note: "Behind Yountville Community Church",
  street: "6621 Yount St",
  city: "Yountville",
  region: "CA",
  postalCode: "94599",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=6621+Yount+St+Yountville+CA+94599",
};

export const hero = {
  eyebrow: "Yountville · Napa Valley",
  // Three headline options. The active one is `headline` below.
  // 1. "Big ideas, up close in Napa."  (chosen)
  // 2. "Serious ideas, warm company, in Napa."
  // 3. "Thinkers worth the drive, in Napa."
  headline: { before: "Big ideas, up close in ", accent: "Napa", after: "." },
  support:
    "Lectures on science, the arts, technology, economics and faith, with face-to-face access to the thinkers themselves.",
  primaryCta: { label: "See upcoming events", href: site.eventsUrl },
  secondaryCta: { label: "RSVP for October 18", href: "https://www.paperlesspost.com/go/5DQPRRMubrj8njcD84RjA" },
  // TODO: add a photo of the Historic Theatre or an audience (none available yet)
  image: { src: null as string | null, alt: "The Historic Theatre in Yountville, where Lux Forum lectures are held" },
};

export const nextEvent = {
  label: "Next event",
  title: "Forgiveness",
  speaker: {
    name: "Dr. Amy Orr-Ewing",
    descriptor: "Oxford-trained theologian and author",
    photo: "/speakers/amy-orr-ewing.webp",
    photoAlt: "Dr. Amy Orr-Ewing",
  },
  description:
    "In a world quick to cancel and slow to forgive, is forgiveness strength or weakness? Join Oxford-trained theologian and author Dr. Amy Orr-Ewing for an evening on why forgiveness doesn't excuse harm but can lead to healing, justice and real freedom.",
  sponsor: "Sponsored & Underwritten by Lux Forum",
  // TODO: confirm the year (assumed 2026)
  dateLabel: "October 18",
  dateIso: "2026-10-18",
  timeLabel: "5:00 p.m. reception",
  scheduleLabel: "5:30–6:30 p.m. lecture and live Q&A",
  // Pacific Daylight Time (UTC−7) for October 18, 2026
  startIso: "2026-10-18T17:00:00-07:00",
  endIso: "2026-10-18T18:30:00-07:00",
  price: "Free",
  rsvp: {
    label: "RSVP",
    // The invitation link from the event. Confirm this is the ticket/RSVP page you want.
    href: "https://www.paperlesspost.com/go/5DQPRRMubrj8njcD84RjA",
  },
};

export type Speaker = {
  name: string;
  slug: string;
  // Speaker photo path under /public/speakers/. Null shows the monogram placeholder.
  // On hold: past speakers use the monogram for now.
  photo: string | null;
  // Speaker page URL. Null renders the card without a link. On hold for now.
  href: string | null;
};

// TODO: confirm Stephen Meyer's own page; the current site links him to Lewis Lee's page.
// TODO: check that the Kamesh Sankaran photo file matches him (it is named "Deb-Haarsma" on the current site).
// TODO: confirm "Loconte" spelling (Dr. Joe Loconte) against the speaker's page.
export const speakers: Speaker[] = [
  { name: "Liz Wheeler", slug: "liz-wheeler", photo: null, href: null },
  { name: "Brandon & Katy Pasion", slug: "brandon-katy-pasion", photo: null, href: null },
  { name: "Kamesh Sankaran, PhD", slug: "kamesh-sankaran", photo: null, href: null },
  { name: "Dr. Chauncey Crandall", slug: "chauncey-crandall", photo: null, href: null },
  { name: "Michelle Easton", slug: "michelle-easton", photo: null, href: null },
  { name: "Dr. J. Warner Wallace", slug: "j-warner-wallace", photo: null, href: null },
  { name: "Ryan T. Anderson", slug: "ryan-t-anderson", photo: null, href: null },
  { name: "Dr. Henry Cloud", slug: "henry-cloud", photo: null, href: null },
  { name: "Os Guinness", slug: "os-guinness", photo: null, href: null },
  { name: "Zach Williams", slug: "zach-williams", photo: null, href: null },
  { name: "David Aikman", slug: "david-aikman", photo: null, href: null },
  { name: "Dr. David Miller", slug: "david-miller", photo: null, href: null },
  { name: "Dr. Curt Thompson", slug: "curt-thompson", photo: null, href: null },
  { name: "Dr. Robert Emmons", slug: "robert-emmons", photo: null, href: null },
  { name: "Dr. Dana Gioia", slug: "dana-gioia", photo: null, href: null },
  { name: "Cherie Harder", slug: "cherie-harder", photo: null, href: null },
  { name: "Dr. Joe Loconte", slug: "joe-loconte", photo: null, href: null },
  { name: "Lewis Lee", slug: "lewis-lee", photo: null, href: null },
  { name: "Stephen Meyer", slug: "stephen-meyer", photo: null, href: null },
  { name: "Matt Heard", slug: "matt-heard", photo: null, href: null },
];

export const meetTheMinds = {
  eyebrow: "Meet the Minds",
  headlineLines: ["Leading thinkers,", "in one room."],
  // The hover line for every card. Shown until each speaker's role is confirmed.
  hoverLine: "Past speaker",
  // TODO: confirm the speakers index URL. Events is the best guess.
  seeAll: { label: "See all speakers", href: site.eventsUrl },
};

export const featureCards = {
  topics: {
    eyebrow: "The conversation",
    heading: "Four disciplines, one thread.",
    items: site.topics,
    thread: site.faithThread,
  },
  // Right card: the upcoming event (past lectures are on hold). Content comes from nextEvent.
  upcoming: {
    eyebrow: "Upcoming event",
    rsvpLabel: "RSVP — it's free",
  },
};

export const aboutBand = {
  eyebrow: "Why Lux Forum",
  heading: "Founded in 2016. Access thought leaders up close.",
  body: site.mission,
  cta: { label: "Learn more", href: site.aboutUrl },
};

export const info = {
  findUs: {
    title: "Find us",
    venue: venue.name,
    address: [venue.street, `${venue.city}, ${venue.region} ${venue.postalCode}`],
    cta: { label: "Open in Maps", href: venue.mapsUrl },
  },
  expect: {
    title: "What to expect",
    rows: [
      { label: "Format", value: "Lecture + live Q&A" },
      { label: "Topics", value: site.topics.concat("Faith").join(" · ") },
      { label: "Founded", value: String(site.founded) },
    ],
  },
  contact: {
    title: "Get in touch",
    email: site.contactEmail,
    contact: { label: "Contact us", href: site.contactUrl },
    donate: { label: "Donate", href: site.donateUrl },
  },
};
