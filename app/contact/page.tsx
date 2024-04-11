"use client"

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer/page";
import Globe from "@/components/Globe";
import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="dark">
      <div className="flex flex-col lg:flex-row py-24">
        <Header />
        <div className=" relative flex-1 lg:pt-10">
          <div className=" absolute lg:hidden w-[100%] h-full z-50 ">

          </div>
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
