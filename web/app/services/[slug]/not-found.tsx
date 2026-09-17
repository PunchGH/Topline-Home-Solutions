import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ServiceNotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="svc-404">
          <div className="wrap">
            <h1>We do not have a page for that service</h1>
            <p>
              The link may be out of date. Every service we offer is listed on
              the home page, and our team is one call away if you cannot find
              what you need.
            </p>
            <Link className="btn btn--amber" href="/#services">View All Services</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
