"use client"


import AdminHeader from "@/components/AdminHeader"
import AdminSideBar from "@/components/AdminSideBar"
import {useSelector} from "react-redux"
import {FormEvent, useState, useEffect} from "react"
import axios from "axios"
import { EmployeePayload } from "@/types/employee"

const ProjectRegistrationForm = () => {

  const [user, setUser] = useState<EmployeePayload>();

  useEffect(() => {
    const fetchUser = async () => {
      try{
        const response = await axios.get("/api/employeeDetails");
        setUser(response?.data);
      }catch(err){
        console.log(err);
      }
    }
  
    fetchUser();
  }, [])

    const isOpen = useSelector((state : any) => state?.sideBar?.isOpen);

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {

      e.preventDefault();

      const form = e.currentTarget as HTMLFormElement;

      const data = new FormData(form);

      const companyname = data.get("companyname");
      const companylocation = data.get("companylocation");
      const budget = data.get("budget");
      const description = data.get("description");
      const companyemail = data.get("companyemail");
      const companyphone = data.get("companyphone");

      if(companyphone?.toString().length !== 10){
        return alert("Invalid Phone Number!")
      }

      if(!user){
        return alert("Employee Not Found!")
      }


      const formData = {
        companyname,
        companylocation,
        companyemail,
        companyphone,
        budget,
        description,
        empid : user?.empid,
        empname : user?.firstname + user?.lastname,
        empemail : user?.email,
        empphone : user?.phone
      }


      try{
        const response = await axios.post(`/api/newproject`, formData);
        alert(response?.data)
        console.log(response);
      }catch(err : any){
        console.log(err);
        alert(err?.response?.data?.message)
      }



    }
    

  return (
    <div className="w-full min-h-screen">
        <style>{'body { background: #F5F4F7; }'}</style>
        <AdminHeader user={user?.firstname as string} />
        <AdminSideBar />
        <div className={` transition-all duration-200 w-full h-auto sm:pt-24 flex justify-center ${isOpen ? "cmd:ml-[200px]" : "ml-[0px]"}`}>
        <form onSubmit={handleSubmit} className="bg-[#FFFFFF] w-full h-full sm:w-[30rem] sm:h-auto pb-12 rounded-md flex flex-col items-center gap-12 pt-28 sm:mb-16 sm:pt-16">
          <h1 className=" font-extrabold text-xl">Project Registration Form</h1>

        <div className="flex flex-col justify-center items-center gap-4 w-full">
        <div className="flex flex-col w-[80%] gap-1" >
          <label >Company Name</label>
          <input required name="companyname"  type="text"  className="bg-[#F9FAFB] border border-[#969696] rounded-md w-full h-[37px]" />
        </div>
        <div className="flex flex-col w-[80%] gap-1" >
          <label >Company Location</label>
          <input required name="companylocation"  type="text"  className="bg-[#F9FAFB] border border-[#969696] rounded-md w-full h-[37px]" />
        </div>
        <div className="flex flex-col w-[80%] gap-1" >
          <label >Company Email</label>
          <input required name="companyemail"  type="text"  className="bg-[#F9FAFB] border border-[#969696] rounded-md w-full h-[37px]" />
        </div>
        <div className="flex flex-col w-[80%] gap-1" >
          <label >Company Phone</label>
          <input required name="companyphone"  type="number"  className="bg-[#F9FAFB] border border-[#969696] rounded-md w-full h-[37px]" />
        </div>
        <div className="flex flex-col w-[80%] gap-1" >
          <label >Project Budget</label>
          <input required name="budget" type="text"  className="bg-[#F9FAFB] border border-[#969696] rounded-md w-full h-[37px]" />
        </div>
        <div className="flex flex-col w-[80%] gap-1" >
          <label >Project Description</label>
          <textarea required name="description" className="bg-[#F9FAFB] border border-[#969696] rounded-md w-full" ></textarea>
        </div>
        </div>

        <button  type="submit" className="w-[80%] bg-[#3EB649] rounded-md py-2 mt-7">Submit</button>

        </form>
        </div>
    </div>
  )
}

export default ProjectRegistrationForm