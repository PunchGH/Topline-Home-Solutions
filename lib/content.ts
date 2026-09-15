// Real company content sourced from the scraped toplinehome.ca pages in the
// project root (home, about-us, services, 5 service detail pages, contact).
// Items explicitly marked "authored" were written to fill sections the chosen
// layout calls for but the source site doesn't yet have text for — flagged
// in IMPLEMENTATION_1.md / PRODUCT.md for client review before real launch.

export type CityId = "ottawa" | "calgary";

export interface Office {
  id: CityId;
  city: string;
  region: string;
  phone: string;
  phoneHref: string;
  address: string;
  mapHref: string;
  areas: string[];
}

export const offices: Record<CityId, Office> = {
  ottawa: {
    id: "ottawa",
    city: "Ottawa",
    region: "ON",
    phone: "613-612-6934",
    phoneHref: "tel:6136126934",
    address: "5 Timbercrest Ridge, Nepean, ON K2R 1B4",
    mapHref: "https://maps.app.goo.gl/6bB5s7wxFZkTcX866",
    areas: [
      "Ottawa",
      "Kingston",
      "Brockville",
      "Cornwall",
      "Carleton Place",
      "Kemptville",
      "Arnprior",
      "Pembroke",
      "Petawawa",
    ],
  },
  calgary: {
    id: "calgary",
    city: "Calgary",
    region: "AB",
    phone: "825-982-6934",
    phoneHref: "tel:8259826934",
    address: "4441 76 Ave SE, Suite 108, Calgary, AB T2C 2G8",
    mapHref: "https://maps.app.goo.gl/zVynUFxFo5BXYM7x5",
    areas: [
      "Calgary",
      "Airdrie",
      "Cochrane",
      "Chestermere",
      "Crossfield",
      "Red Deer",
      "Okotoks",
      "Canmore",
      "High River",
      "Strathmore",
    ],
  },
};

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: string;
  href: string;
}

export const services: Service[] = [
  {
    slug: "attic-insulation",
    name: "Attic Insulation",
    description:
      "High-performance cellulose insulation improves your home's thermal efficiency and year-round comfort, reducing heat loss and keeping every room comfortable.",
    icon: "https://www.toplinehome.ca/wp-content/uploads/2026/06/icon-01.svg",
    href: "https://www.toplinehome.ca/services/attic-insulation/",
  },
  {
    slug: "air-sealing-ventilation",
    name: "Air Sealing & Ventilation",
    description:
      "We seal structural air leaks to keep conditioned air inside. Better airflow controls moisture and improves your HVAC's overall efficiency.",
    icon: "https://www.toplinehome.ca/wp-content/uploads/2026/06/icon-02.svg",
    href: "https://www.toplinehome.ca/services/air-sealing-ventilation/",
  },
  {
    slug: "cellulose-soundproofing",
    name: "Cellulose & Soundproofing",
    description:
      "Dense insulation offers superior reduction between walls for quieter living areas. Enjoy better acoustic control and enhanced daily relaxation in your home.",
    icon: "https://www.toplinehome.ca/wp-content/uploads/2026/06/icon-03.svg",
    href: "https://www.toplinehome.ca/services/cellulose-soundproofing/",
  },
  {
    slug: "gonano-roofing-spray",
    name: "GoNano Roofing Spray",
    description:
      "This advanced roof coating provides waterproofing and extra durability to any surface, adding years to your roof's life and increasing weather resistance.",
    icon: "https://www.toplinehome.ca/wp-content/uploads/2026/06/icon-04.svg",
    href: "https://www.toplinehome.ca/services/gonano-roofing-spray/",
  },
  {
    slug: "attic-insulation-removal",
    name: "Attic Insulation Removal",
    description:
      "Our professional crew safely removes old or contaminated materials to keep your family healthy while preparing for new, high-performance solutions.",
    icon: "https://www.toplinehome.ca/wp-content/uploads/2026/06/icon-05.svg",
    href: "https://www.toplinehome.ca/services/attic-insulation-removal/",
  },
  {
    slug: "mold-removal-prevention",
    name: "Mold Removal & Prevention",
    description:
      "Targeted treatments identify and eliminate mold colonies at the source, protecting your indoor air quality and preventing future mold growth.",
    icon: "https://www.toplinehome.ca/wp-content/uploads/2026/06/icon-06.svg",
    href: "https://www.toplinehome.ca/services/mold-removal-prevention/",
  },
];

// Authored — not scraped. Flagged for client review (see PRODUCT.md).
export const processSteps = [
  {
    step: "01",
    title: "Free Inspection",
    body: "We walk your attic and roofline in person and diagnose exactly where you're losing comfort and money.",
  },
  {
    step: "02",
    title: "Personalized Plan",
    body: "You get a clear plan — insulation, sealing, or roofing — sized to your home, not a one-size fix.",
  },
  {
    step: "03",
    title: "Professional Installation",
    body: "Our crew installs to spec, protecting your home and family throughout the job.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    body: "We confirm the work with you before we leave, so you know exactly what changed.",
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  className: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1753363562647-6a5f6296dedc?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    alt: "Attic insulation installed between wooden roof beams",
    caption: "Attic insulation upgrade",
    className: "g1",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661542617132-75ae2e1f6fbc?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    alt: "Roofer working on a home's roofline",
    caption: "GoNano roof coating application",
    className: "g2",
  },
  {
    src: "https://images.unsplash.com/photo-1753363562638-398f75158ea9?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Cellulose insulation between attic rafters",
    caption: "Cellulose insulation, installed",
    className: "g3",
  },
  {
    src: "https://images.unsplash.com/photo-1558358235-a0a93f68a52c?fm=jpg&q=80&w=900&auto=format&fit=crop",
    alt: "Close-up of a home air vent",
    caption: "Air sealing & ventilation check",
    className: "g4",
  },
  {
    src: "https://images.unsplash.com/photo-1710883727427-59d1ccc368fa?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    alt: "Row of homes with protected rooflines",
    caption: "Whole-home protection, Ottawa",
    className: "g5",
  },
];

// Placeholder testimonials — the live site has none yet. Rendered with a
// visible "sample" tag per the confirmed prototype plan; never as real quotes.
export interface Review {
  quote: string;
  name: string;
  location: string;
  lead?: boolean;
}

export const reviews: Review[] = [
  {
    quote:
      "The team was thorough from the first inspection to the final walkthrough. Our upstairs finally holds its temperature and the furnace runs less.",
    name: "Sample homeowner",
    location: "Ottawa, ON",
    lead: true,
  },
  {
    quote:
      "Cellulose insulation made a real difference for noise between floors. Clean job, no mess left behind.",
    name: "Sample homeowner",
    location: "Nepean, ON",
  },
  {
    quote:
      "GoNano coating went on fast and the roof hasn't had a single leak since.",
    name: "Sample homeowner",
    location: "Calgary, AB",
  },
];

// Authored — grounded in real service copy, flagged for client review.
export const faqs = [
  {
    q: "How do I know if my attic needs new insulation?",
    a: "Drafty rooms, uneven temperatures between floors, and rising energy bills are the most common signs. A free inspection is the fastest way to know for sure — we check your attic's depth, condition, and air sealing before recommending anything.",
  },
  {
    q: "What is cellulose insulation, and why do you use it?",
    a: "Cellulose is a dense, eco-friendly insulation made from recycled paper. It fills gaps more completely than many alternatives, adds real soundproofing between floors and walls, and improves fire resistance — which is why it's our standard for attic and wall insulation.",
  },
  {
    q: "How long does GoNano Roofing Spray protection last?",
    a: "GoNano is designed to add years of extra protection to an existing roof surface by sealing it against rain, wind, and sun damage. Exact lifespan depends on your roof's condition going in — we'll give you a specific estimate during your inspection.",
  },
  {
    q: "Do you serve my area?",
    a: "We operate out of two hubs — Ottawa, ON and Calgary, AB — and serve the surrounding communities from each (see the full list in the footer). If you're nearby and unsure, just reach out.",
  },
  {
    q: "Is the initial inspection free?",
    a: "Yes. We inspect your attic and roofline and walk you through exactly what we find before any work is scoped or priced.",
  },
];
