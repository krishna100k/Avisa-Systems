"use client"

import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header";

const Join = () => {
  return (
    <div className="dark">
      <div className="flex flex-col lg:flex-row ">
        <Header />
        <div className=" flex-1 overflow-hidden relative flex justify-center items-center">
            <JoinForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Join;
