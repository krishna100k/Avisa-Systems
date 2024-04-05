import { BackgroundGradient } from "../ui/background-gradient";
import { MaskContainer } from "../ui/svg-mask-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" h-[40rem] w-screen flex flex-col md:flex-row items-center justify-center mt-52 md:p-10 gap-10 overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-white-800 text-center  text-4xl font-bold">
            Our Vision
          </p>
        }
        className="h-full rounded-md w-[90%] md:w-1/2 flex-1 "
        color="#13151B"
      >
        <p className="text-xl"><span className="text-green-500">Avisa Systems</span> is dedicated to
        providing top-tier IT consultancy services and crafting bespoke
        <span className="text-green-500">websites and mobile apps</span>.</p>
      </MaskContainer>
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-white-800 text-center  text-4xl font-bold">
            Our Mission
          </p>
        }
        className="h-full  rounded-md w-[90%] md:w-1/2 flex-1"
        color="#22C55E"
      >
        <p className="text-xl">The first rule of <span className="text-green-500">MRR Club</span> is
        you do not talk about MRR Club. The second rule of MRR Club is you DO
        NOT talk about <span className="text-green-500">MRR Club</span>.</p>
      </MaskContainer>
    </div>
  );
};

export default AboutUs;
