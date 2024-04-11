"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  const leftVariants = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        width: {delay: 0,type: "spring",stiffness: 0,damping: 0,},
        delay: 0.2,
        duration: 0,
        type: "spring",
        stiffness: 100,
        damping: 16,
      },
    },
    secondInitial: {
      opacity: 0,
      x: "-100%",
    },
    secondAnimate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0,
        type: "spring",
        stiffness: 100,
        damping: 16,
      },
    },
    rightInitial: {
      scale: 0,
      opacity: 0,
      x: "100%",
    },
    rightAnimate: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        scale: {delay: 0, duration: 0},
        delay: 1,
        duration: 0,
        type: "spring",
        stiffness: 100,
        damping: 16,
      },
    },
  };

  return (
    <div className=" w-full grid grid-cols-2 grid-row-2 dark:text-white footer-section">
      <motion.div
        variants={leftVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        className=" flex lg:flex-row flex-col justify-center items-start backdrop-blur-sm bg-[#222526]/20 gap-6 lg:gap-20 col-span-2 lg:col-span-1 row-span-1 border border-gray-800/30 p-10 lg:p-28"
      >
        <div className="flex justify-center items-center gap-4">
          <Image src={"/Logo/Logo.png"} alt="Logo" width={30} height={50} />
          <h1 className="text-2xl font-bold">Avisa Systems</h1>
        </div>
        <p className=" text-sm w-48 text-wrap">
          Crafting Tomorrow's Solutions Today: Leading the charge in innovation
          for a brighter future.
        </p>
      </motion.div>
      <motion.div
        variants={leftVariants}
        initial="rightInitial"
        animate={isVisible ? "rightAnimate" : "rightInitial"}
        className=" backdrop-blur-sm bg-[#222526]/20 row-span-1 col-span-2 lg:row-span-2 lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-10 justify-start lg:justify-center border lg:pl-20 p-10 border-gray-700/30"
      >
        <h1 className=" font-bold text-3xl lg:text-8xl lg:w-[80%]">Get in touch now!</h1>
        <button className="border rounded-lg p-3 transition-all ease-in-out duration-500 hover:bg-white hover:text-black">
          Get in Touch
        </button>
      </motion.div>
      <motion.div
        variants={leftVariants}
        initial="secondInitial"
        animate={isVisible ? "secondAnimate" : "secondInitial"}
        className=" backdrop-blur-sm bg-[#222526]/20 flex justify-start lg:justify-center flex-wrap items-start gap-20 p-10 lg:p-28 lg:col-span-1 col-span-2 border border-gray-800/30"
      >
        <ul>
          <li className=" font-semibold pb-6">Useful Links</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/#testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/#about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        <ul>
          <li className=" font-semibold pb-6">Socials</li>
          <li>
            <Link href="/">X</Link>
          </li>
          <li>
            <Link href="/">Linkedin</Link>
          </li>
          <li>
            <Link href="/">Instagram</Link>
          </li>
          <li>
            <Link href="/">Testimonials</Link>
          </li>
        </ul>
        <ul>
          <li className=" font-semibold pb-6">Contact</li>
          <li>avisasystems@gmail.com</li>
          <li>+91 1234567890</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Footer;

// #13151B
