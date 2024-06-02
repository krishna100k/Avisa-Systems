"use client";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import useWindowSize from "@/app/hooks/windowSize";
import Link from "next/link";

const AdminSideBar = () => {
  const isSmall = useWindowSize()?.width <= 768;

  const isOpen = useSelector((state: any) => state?.sideBar?.isOpen);

  const sideBarVariants = {
    open: {
      width: isSmall ? "100%" : "350px",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
    closed: {
      width: "0px",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  };

  const pages = [
    { name: "Project Registration Form", link: "/empadmin/projectregistrationform" },
  ];

  return (
    <motion.div
      initial={isOpen ? "open" : "closed"}
      animate={isOpen ? "open" : "closed"}
      variants={sideBarVariants}
      className={`bg-[#3EB649] h-full fixed left-0 overflow-hidden text-white flex flex-col items-center pt-24`}
    >
      {pages.map((page, i) => {
        return(
          <div key={i} >
            <Link className=" hover:bg-white/20 p-2 rounded-sm transition-all" href={page.link}>{page.name}</Link>
          </div>
        )
      })}
    </motion.div>
  );
};

export default AdminSideBar;
