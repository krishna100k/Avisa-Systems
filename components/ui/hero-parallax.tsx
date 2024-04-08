"use client";
import React, { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 300]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className=" h-[1800px] md:h-[2500px] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20 mb-20 ">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-10 md:space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  // useEffect(() => {

  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth"
  //     });
  //   };

  //   scrollToTop();

  //   const timeout = setTimeout(scrollToTop, 5000);

  //   return () => clearTimeout(timeout);
  // }, []);

  const textVariants = {
    initial: {opacity:0, y: "200%" },
    animate: {
      opacity:1,
      y: "0%",
      transition: { duration: 0.5, type: "spring", stiffness: 30, damping: 5 },
    },
    onanimationend: {
      opacity:1,
      y: "0%",
      transition: { duration: 0.5, type: "spring", stiffness: 30, damping: 5 },
    }
  };

  return (
    <div className="px-5 py-10 max-w-7xl relative mx-auto mt-[24vh] md:pt-[11vh] w-full left-0 top-0 overflow-hidden">
      <motion.h1
        className="text-2xl md:text-7xl font-bold dark:text-white"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Elevate Your Vision with <br /> Our Cutting-Edge Solutions
      </motion.h1>
      <motion.p
        className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Discover the power of innovative technology with our expert team. We
        specialize in crafting exceptional products using the latest
        technologies and frameworks.
      </motion.p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-56 w-[20rem] md:h-96 md:w-[30rem] relative flex-shrink-0"
    >
      {/* <Link
        href={product.link}
        target="_blank"
        className="block group-hover/product:shadow-2xl "
      >
      </Link> */}
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
