import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { services } from "@/lib/content";
import { serviceDetails } from "@/lib/serviceDetails";

const arrow = (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) {
    return { title: "Service not found | TopLine Home Solutions" };
  }

  return {
    title: `${service.name} in Ottawa & Calgary | TopLine Home Solutions`,
    description: detail.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.name} | TopLine Home Solutions`,
      description: detail.metaDescription,
      url: `/services/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | TopLine Home Solutions`,
      description: detail.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <Nav />
      <main>
        <section className="svc-hero section--steel-deep">
          <div className="wrap svc-hero__grid">
            <div>
              <nav className="svc-crumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/#services">Services</Link>
                <span aria-hidden="true">/</span>
                <strong>{service.name}</strong>
              </nav>
              <h1>{service.name}</h1>
              <p className="svc-hero__sub">{detail.heading}</p>
              <p className="svc-hero__intro">{detail.intro}</p>
              <div className="svc-hero__ctas">
                <a className="btn btn--amber" href="#contact">
                  Book Your Free Inspection
                </a>
                <Link className="btn btn--ghost-light" href="/#services">
                  All Services
                </Link>
              </div>
            </div>
            <div className="svc-hero__media">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 980px) 90vw, 46vw"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap svc-explainer">
            <h2>{detail.explainerTitle}</h2>
            <p className="prose">{detail.explainerBody}</p>
          </div>
        </section>

        <section className="section section--steel-pale">
          <div className="wrap">
            <div className="section__head">
              <h2>{detail.advantagesTitle}</h2>
            </div>
            <div className="svc-adv__grid">
              {detail.advantages.map((a) => (
                <div className="svc-adv" key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap svc-closing">
            <h2>{detail.closingTitle}</h2>
            <div>
              {detail.closingBody.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
              <div className="svc-closing__ctas">
                <a className="btn btn--amber" href="#contact">Get Your Free Quote</a>
                <Link className="btn btn--ghost-dark" href="/#gallery">See Our Work</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--soft svc-others">
          <div className="wrap">
            <h2>Other Services</h2>
            <div className="svc-others__grid">
              {others.map((s) => (
                <Link className="svc-other" key={s.slug} href={s.href}>
                  <div className="svc-other__media">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 640px) 45vw, 20vw"
                    />
                  </div>
                  <span className="svc-other__name">
                    {s.name} {arrow}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
