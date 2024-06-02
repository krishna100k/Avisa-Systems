"use client"


import AdminHeader from "@/components/AdminHeader"
import AdminSideBar from "@/components/AdminSideBar"
import {useSelector} from "react-redux"

const ProjectRegistrationForm = () => {

    const isOpen = useSelector((state : any) => state?.sideBar?.isOpen)

  return (
    <div className="w-full h-screen bg-[#F5F4F7]">
        <AdminHeader />
        <AdminSideBar />
        <div className={` transition-all duration-200  ${isOpen ? "md:ml-[350px]" : "ml-[0px]"}`}>
            <h1>Hello</h1>
        </div>
    </div>
  )
}

export default ProjectRegistrationForm