import Topbar from "@/components/Topbar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ContactCTA from "@/components/ContactCTA";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="stripe-bar" aria-hidden="true" />
      <Topbar />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Trust />
        <Process />
        <Gallery />
        <Reviews />
        <ContactCTA />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
