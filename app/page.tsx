import Hero from "@/components/Hero";
import Header from "@/components/Header"
import Testimonials from "@/components/Testimonials/page";
import AboutUs from "@/components/AboutUs/page";
import CallToAction from "@/components/CallToAction/page";
import Services from "@/components/Services/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <main className="dark">
      <Header />
      <Hero />
      <AboutUs />
      <Testimonials />
      <Services />
      <CallToAction />
    </main>
  );
}
