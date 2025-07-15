import { useState } from "react"
import axios from "axios";

import { Link, useNavigate } from 'react-router-dom';

function ValidationForm() {
   const[email,setemail]=useState("")
   const[password,setpassword]=useState("")
   const[name ,setname]=useState("")


   const handleSubmit=(e)=>{
    e.preventDefault();
       if (!name || !email || !password) {
      return alert("Fill all fields");
    }
    try {
       axios.post("http://localhost:6161/validation", {
        name,
        email,
        password,
      });
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Form submitted!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong on the server.");
    }
   };

   return(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-4">
    <form  className="bg-white rounded-xl shadow-lg p-8 space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
       <label className="block text-gray-700 mb-1">Name</label>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"/>
        <br/>  <br/>
         <label className="block text-gray-700 mb-1">Email</label>
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"/>
          <br/>  <br/>
           <label className="block text-gray-700 mb-1">Password</label>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"/>
          <br/>  <br/>
         <button className=" to-purple-900 hover: bg-purple-400 p-3 rounded-full" type="submit">SUBMIT </button>
           <br/>

            <Link
          to="/"
          className="inline-block mt-4 text-blue-600 font-medium hover:underline"
        >back to counter</Link>
    </form>
    
    </div>
   )
}
export default ValidationForm;