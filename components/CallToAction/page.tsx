"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { useRouter } from "next/navigation";

function CallToAction() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Avisa Systems.",
      className: "text-blue-500 dark:text-green-500",
    },
  ];

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button onClick={() => router.push("/joinus")} className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join Us
        </button>
        <button onClick={() => router.push("/contact")} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default CallToAction