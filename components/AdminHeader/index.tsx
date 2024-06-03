"use client"

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { isOpen } from "@/app/redux/slices/sidebar";
import axios from "axios";
import { useRouter } from "next/navigation";
import {useEffect, useState} from "react";

const AdminHeader: React.FC<{user : string}>  = ({user}) => {



  const router = useRouter();
  const dispatch = useDispatch();
  const open = useSelector((state : any) => state?.sideBar?.isOpen);

  const logoutHandler = async () => {

    try{
     const response = await axios.get(`/api/logout`);
     alert(response?.data);
     router.replace("/employee");

    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="bg-[#F9FAFB] w-full h-[60px] border border=[#969696] flex items-center justify-between px-5 z-[1000]">
        <div className="flex gap-5 h-full items-center">
        <button onClick={() => dispatch(isOpen(!open))}>
        <RxHamburgerMenu className="text-2xl text-black " />
        </button>
        <h1 className=" font-extrabold text-xl hidden sm:block ">Employee Portal</h1>
        </div>
        <div className="flex gap-5">
            <p>Welcome {user} !</p>
            <button onClick={logoutHandler}>
            <AiOutlineLogout className="text-2xl text-black " />
            </button>
        </div>
    </div>
  )
}

export default AdminHeader