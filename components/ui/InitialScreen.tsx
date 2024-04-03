import Image from "next/image";

const InitialScreen = () => {
  return (
    <div className="">
      <Image src={"/Logo/Logo.png"} alt="Logo" width={35} height={40} />
    </div>
  );
};

export default InitialScreen;
