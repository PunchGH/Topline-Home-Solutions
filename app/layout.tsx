import type { Metadata } from "next";
import { oswald, barlow, spaceMono } from "./fonts";
import { CityProvider } from "@/components/CityContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "TopLine Home Solutions | Attic Insulation & Home Services",
  description:
    "Attic insulation, air sealing, and roof protection for Ottawa, ON & Calgary, AB homeowners — one integrated plan from TopLine Home Solutions.",
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
