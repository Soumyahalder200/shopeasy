"use client";
import Link from 'next/link'
import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
    } else {
      setSuccess(data.message);
      setFormData({ name: "", email: "", password: "" });
      router.push("/login"); // Redirect to login page after signup
    }
  };
  return (
    <>
    <div className="max-w-4xl max-sm:max-w-lg mx-auto font-[sans-serif] p-6">
      <div className="text-center mb-12 sm:mb-16">
        <a href="javascript:void(0)"><img
          src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-48 inline-block' />
        </a>
        <h4 className="text-gray-600 text-base mt-6">Sign up into your account</h4>
        {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-600 text-sm mb-2 block"> Name</label>
            <input type="text"
          name="name"
          
          value={formData.name}
          onChange={handleChange}
          required   className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Email Id</label>
            <input name="email" type="text" value={formData.email}
          onChange={handleChange}
          required className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Password</label>
            <input name="password" type="password" value={formData.password}
          onChange={handleChange}
          required className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
          </div>
        </div>

        <div className="mt-8">
          <button type="submit" className="mx-auto block py-3 px-6 text-sm tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Sign up
          </button>
        </div>
      </form>
      <div className="text-center mb-12 sm:mb-16">
        
        <h4 className="text-gray-600 text-base mt-6">Already have an account?<Link href="/login" className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></h4>
      </div>
    </div>
    </>
  )
}
