import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer/page";
import Globe from "@/components/Globe";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials/page";

const Contact = () => {
  return (
    <div className="dark">
      <div className="flex flex-col lg:flex-row py-24">
        <Header />
        <div className=" flex-1 lg:pt-10">
          <Globe />
        </div>
        <div className=" flex-1 overflow-hidden relative flex justify-center items-center">
            <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
