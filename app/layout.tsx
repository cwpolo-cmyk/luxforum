import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/content/home";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const title = "Lux Forum – Insightful Lectures & Educational Experiences in Napa Valley";
const description =
  "Lectures on science, the arts, technology, economics and faith, with face-to-face access to thought leaders. Held at The Historic Theatre in Yountville, Napa Valley.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: site.favicon },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
    // TODO: add an Open Graph image (1200×630) to /public
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // TODO: add the Lux Forum X/Twitter handle if one exists
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={garamond.variable}>
      <body>{children}</body>
    </html>
  );
}
