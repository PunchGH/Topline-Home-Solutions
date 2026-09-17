import type { Metadata } from "next";
import { oswald, barlow, spaceMono } from "./fonts";
import { CityProvider } from "@/components/CityContext";
import "./globals.css";

// No production domain exists yet. Set NEXT_PUBLIC_SITE_URL when this is
// deployed so canonical links and social image URLs resolve absolutely.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "TopLine Home Solutions | Attic Insulation & Home Services";
const description =
  "Attic insulation, air sealing, and roof protection for Ottawa, ON & Calgary, AB homeowners, all in one integrated plan from TopLine Home Solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "TopLine Home Solutions",
  authors: [{ name: "TopLine Home Solutions" }],
  keywords: [
    "attic insulation",
    "air sealing",
    "cellulose insulation",
    "roof protection",
    "mold removal",
    "Ottawa",
    "Calgary",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "TopLine Home Solutions",
    locale: "en_CA",
    type: "website",
    // The image comes from the app/opengraph-image.png file convention, which
    // takes precedence over an images array here and emits type, width, and
    // height itself. Its alt text lives in app/opengraph-image.alt.txt.
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  // LAUNCH BLOCKER: this is an unreleased prototype of a real company's site.
  // It must not compete with toplinehome.ca in search. Remove before going live.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${barlow.variable} ${spaceMono.variable}`}
    >
      <body>
        <CityProvider>{children}</CityProvider>
      </body>
    </html>
  );
}
