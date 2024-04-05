"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

      const scrollToWork = () => {
      window.scrollTo({
        top: 1000,
        behavior: "smooth"
      });
    };


  return (
    <header className={`flex items-center w-screen h-[10vh] fixed top-0 left-0 z-[1000] overflow-hidden ${isScrolled && `backdrop-blur-sm bg-black/50  border-b border-gray-900`}`}>
      <Logo />
      <div className="flex justify-center items-center gap-2 md:gap-[30px] pl-5 md:pl-16">
        <Link className=" text-gray-400 text-sm font-bold hover:text-[15px] transition-all ease-in-out " href={"#services"} >Our Services</Link>
        <p className=" text-gray-400 text-sm font-bold hover:text-[15px] transition-all ease-in-out cursor-pointer" onClick={scrollToWork}  >Our Work</p>
        <Link className=" text-gray-400 text-sm font-bold hover:text-[15px] transition-all ease-in-out" href={"#testimonials"} >Testimonials</Link>
      </div>
    </header>
  );
}


const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} className="flex items-center gap-3 opacity-90 cursor-pointer pl-5 md:pl-[16%] hover:opacity-100 transition-all ease-in-out">
      <Image src={"/Logo/Logo.png"} alt="Logo" width={35} height={40} />
    <h1 className=" text-white font-[750] text-xl pb-1 hidden md:block">Avisa Systems</h1>
    </div>
  );
};

export default Header;
