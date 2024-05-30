"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function JoinForm() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

    const data = {
        firstname: firstname,
        lastname: lastname,
        company: company,
        email: email,
        phone: phone,
        description: description,
        location : location,
        role : role
    }

    if(firstname === ""){
      setLoading(false);
      return alert("Please enter your first name!")
    }else if(lastname === ""){
      setLoading(false);
      return alert("Please enter your last name!")
    }else if(phone.length !== 10){
      setLoading(false);
      return alert("Invalid phone number!")
    }else if (company === ""){
      setLoading(false);
      return alert("Please enter your company name!")
    }else if (email === ""){
      setLoading(false);
      return alert("Please enter your email")
    }else if (description == ""){
      setLoading(false);
      return alert("please enter your description!")
    }else if (location === ""){
      setLoading(false);
      return alert("please enter your location!");
    }else if (role === ""){
      setLoading(false);
      return alert("please choose your role!")
    }

    const response = await axios.post(`/api/joinus`, data);
    alert(response?.data);
    setLoading(false);

    setFirstname("");
    setLastname("");
    setCompany("");
    setEmail("");
    setPhone("");
    setDescription("");
    setLocation("");
    setRole("");

    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("Form submission failed, please try again !")
    }
  };

  return (
    <div className="isolate w-[90%] h-full bg-black px-6 py-24 sm:py-32 lg:px-8 rounded-lg">
      <div
        className="absolute w-[80%] h-[80%] pt-32 m-auto inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Join Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Submit your application to join our dynamic team and embark on a rewarding career journey with us!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                placeholder="eg: John"
                id="first-name"
                autoComplete="given-name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required={true}
                className="  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="eg: Doe"
                autoComplete="family-name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required={true}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                placeholder="eg: JohnDoe@example.com"
                id="email"
                autoComplete="email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                type="number"
                name="phone-number"
                placeholder="eg: 1234567890"
                id="phone-number"
                autoComplete="tel"
                required={true}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Where are you based ?
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                placeholder="eg: Pune, Maharashtra"
                id="company"
                autoComplete="organization"
                required={true}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Current Company / University
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                placeholder="eg: TCS, Wipro"
                id="company"
                autoComplete="organization"
                required={true}
                value={company}
                onChange={(e) => setCompany(e?.target?.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
          <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Select your Role
            </label>
            <div className="mt-2.5">
              <select value={role} onChange={(e) => setRole(e?.target?.value)} name="role" id="role" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option value="">Select a Role</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Mobile App Developer">Mobile App Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Describe about yourself
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                placeholder="Your Description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={loading && true}
            className=" flex justify-center items-center w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? <CircularProgress style={{width: "20px", height: "20px"}} sx={{color: 'white'}} /> : <p>Submit</p>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default JoinForm;
