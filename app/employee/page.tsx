"use client"

import Image from "next/image"
import {FormEvent, useState} from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [empid, setEmpId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    if(empid === "" ){
      return alert("Please Enter Employee ID")
    }else if(password === ""){
      return alert("Please Enter Password");
    }

    const data = {
      empid,
      password
    }

    try{
      setLoading(true);
      const resp = await axios.post(`/api/login`, data);
      setLoading(false);
      alert(resp?.data);
      router.replace("/empadmin/projectregistrationform")
      

    }catch(err : any){
      console.log(err)
      setLoading(false);
      alert("Login Failed, " + err?.response?.data);
    }


  }



  return (
    <div className="w-full h-screen bg-[#F5F4F7] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-[#FFFFFF] w-full h-full sm:w-[30rem] sm:h-[37rem] rounded-md flex flex-col items-center gap-12 pt-28 sm:pt-16">
        <img src="/logo/Logo.png" alt="Logo" width={70} height= {100} />

        <div className="flex flex-col justify-center items-center gap-4 w-full">
        <div className="flex flex-col w-[80%] gap-1" >
          <label >Employee Id</label>
          <input onChange={(e) => setEmpId(e?.target?.value)} value={empid}  type="text"  className="bg-[#F9FAFB] border border-[#969696] rounded-md w-full h-[40px]" />
        </div>
        <div className="flex flex-col w-[80%] gap-1" >
          <label >Password</label>
          <input onChange={(e) => setPassword(e?.target?.value)} value={password} type="password"  className="bg-[#F9FAFB] border border-[#969696] rounded-md w-full h-[40px]" />
        </div>
        </div>

        <button disabled = {loading ? true : false} type="submit" className="w-[80%] bg-[#3EB649] rounded-md py-2 mt-7">{loading ? "Submitting" : "Submit"}</button>

        </form>


    </div>
  )
}

export default Login