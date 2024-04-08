"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { Opacity } from "@tsparticles/engine";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSmall, setIsSmall] = useState<boolean>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToWork = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const thresholdHeight = 830;
      const windowWidth = window.innerWidth;
      if (windowWidth <= thresholdHeight) {
        setIsSmall(true);
        setIsOpen(false);
      } else {
        setIsSmall(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headerVariant = {
    initial: {
      height: "8vh",
      transition: { delay: 0.4, duration: 0 },
    },
    animate: {
      height: isOpen ? "100vh" : "auto",
      transition: { duration: 0.5 },
    },
  };

  const linkVariant = {
    initial: {
      opacity: 0,
      y: "100%",
      transition: { delay: 0 },
    },
    animate: {
      opacity: 1,
      y: "0%",
      transition: { delay: 0.2, duration: 1, type: "spring" },
    },
  };


  return (
    <header
      className={`flex flex-col items-center w-screen px-5 py-[1.5vh] md:py-[2.7vh] lg:px-[20vw]  fixed top-0 left-0 z-[1000] transition-all lg:transition-none delay-400 duration-500 ease-custom
      ${isOpen ? ` h-[100vh] backdrop-blur-sm bg-black/50 border-none`: `h-[10vh]`}
        ${isScrolled && `backdrop-blur-sm bg-black/50 transition-none border-b border-gray-900`} 
        `}
    >
      {/* <motion.div
        className={`absolute top-0 w-full h-full z-0 `}
        variants={backVariant}
        initial = "initial"
        animate = {isOpen ? "animate" : "initial"}
      ></motion.div> */}
      <div className="flex justify-between items-center w-full">
        <Logo />
        {isSmall ? (
          <button
            className="text-white scale-150"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu />
          </button>
        ) : (
          <div className="flex justify-center items-center gap-2 md:gap-[30px] pl-5 md:pl-16">
            <Link
              className=" text-gray-400 text-sm font-bold hover:text-[15px] transition-all ease-in-out "
              href={"#services"}
            >
              Our Services
            </Link>
            <p
              className=" text-gray-400 text-sm font-bold hover:text-[15px] transition-all ease-in-out cursor-pointer"
              onClick={scrollToWork}
            >
              Our Work
            </p>
            <Link
              className=" text-gray-400 text-sm font-bold hover:text-[15px] transition-all ease-in-out"
              href={"#testimonials"}
            >
              Testimonials
            </Link>
          </div>
        )}
      </div>

      <motion.div
        className={`flex h-full flex-col justify-center items-center gap-10 md:gap-[30px]  md:pl-16`}
        variants={linkVariant}
        initial="initial"
        animate={isOpen ? "animate" : "initial"}
      >
        <Link
          className=" text-gray-400 text-sm font-bold hover:text-[15px] transition-all ease-in-out "
          href={"#services"}
        >
          Our Services
        </Link>
        <p
          className=" text-gray-400 text-sm font-bold hover:text-[15px] transition-all ease-in-out cursor-pointer"
          onClick={scrollToWork}
        >
          Our Work
        </p>
        <Link
          className=" text-gray-400 text-sm font-bold hover:text-[15px] transition-all ease-in-out"
          href={"#testimonials"}
        >
          Testimonials
        </Link>
      </motion.div>
    </header>
  );
}

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center gap-3 opacity-90 cursor-pointer hover:opacity-100 transition-all ease-in-out"
    >
      <Image src={"/Logo/Logo.png"} alt="Logo" width={35} height={40} />
      <h1 className=" text-white font-[750] text-xl pb-1">Avisa Systems</h1>
    </div>
  );
};

export default Header;
