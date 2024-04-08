"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer-section");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect();
        const isVisible = footerPosition.top < window.innerHeight;
          setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariants = {
    initial: {
      opacity: 0,
      y: 250,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 justify-center items-center backdrop-blur-sm bg-[#13151B]/40 dark: text-green-50">
      <div className=" col-span-2 md:col-span-1">
        <div className="flex flex-col gap-16 justify-center items-start p-5 md:pl-24">
          <h1 className="text-6xl">Crafting Tomorrow's Solutions Today.</h1>
          <button className="border rounded-md p-3 transition-all ease-in-out duration-500 hover:bg-white hover:text-black">Get in Touch</button>
        </div>
      </div>
      <div className=" col-span-2 md:col-span-1 flex md:justify-end items-start md:p-24 p-5 gap-10 ">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="/">Work</Link></li>
          <li><Link href="#testimonials">Testimonials</Link></li>
          <li><Link href="#about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
        <ul>
        <li><Link href="/">X</Link></li>
          <li><Link href="/">Linkedin</Link></li>
          <li><Link href="/">Instagram</Link></li>
          <li><Link href="/">Testimonials</Link></li>
        </ul>
      </div>
      <div className=" pt-5 text-center col-span-2 overflow-hidden footer-section">
        <motion.h1
          className="font-black text-[12.5vw] text-nowrap"
          variants={textVariants}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          Avisa Systems
        </motion.h1>
      </div>
    </div>
  );
};

export default Footer;
