import { BackgroundGradient } from "../ui/background-gradient";
import { MaskContainer } from "../ui/svg-mask-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center p-10 gap-10 overflow-hidden mb-52">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            Our Vision
          </p>
        }
        className="h-[40rem] border rounded-md flex-1"
      >
        <span className="text-green-500">Avisa Systems</span> is dedicated to
        providing top-tier IT consultancy services and crafting bespoke
        <span className="text-green-500">websites and mobile apps</span>.
      </MaskContainer>
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            Our Mission
          </p>
        }
        className="h-[40rem] border rounded-md w-1/2 flex-1"
      >
        The first rule of <span className="text-green-500">MRR Club</span> is
        you do not talk about MRR Club. The second rule of MRR Club is you DO
        NOT talk about <span className="text-green-500">MRR Club</span>.
      </MaskContainer>
    </div>
  );
};

export default AboutUs;
