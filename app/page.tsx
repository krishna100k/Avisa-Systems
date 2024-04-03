import Hero from "@/components/Hero";
import Header from "@/components/Header"
import Testimonials from "@/components/Testimonials/page";
import AboutUs from "@/components/AboutUs/page";

export default function Home() {
  return (
    <main className="screen">
      <Header />
      <Hero />
      <AboutUs />
      <Testimonials />
    </main>
  );
}
