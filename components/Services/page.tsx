"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

function Services() {
  const tabs = [
    {
      title: "Websites",
      value: "Websites",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Websites</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Web Applications",
      value: "Full stack Web Applications",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Full stack Web Applications</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Mobile Applications",
      value: "Mobile Apps",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Mobile Applications</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "REST API",
      value: "REST API",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Rest API</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content Management",
      value: "Content Management",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-green-900">
          <p>Content Management</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="flex md:flex-row flex-col-reverse justify-center md:gap-5 items-center md:px-10 pt-10">
    <div id="services" className=" flex-2 w-[90%] h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto md:w-full md:my-40">
      <Tabs tabs={tabs} />
    </div>
    <div className="flex-1 flex justify-center items-center h-full md:my-0 my-20">
    <h1 className=" text-white opacity-95 text-7xl md:text-[7vw] leading-snug font-black pt-10 md:pt-[18rem]">Services <br /> We <br /> Provide</h1>
    </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <div
      // src="/linear.webp"
      // alt="dummy image"
      // width="1000"
      // height="1000"
      // className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default Services;