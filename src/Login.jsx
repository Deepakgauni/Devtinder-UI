 import React from 'react'
 import { useState} from 'react'
 import axios from "axios";

const Login = () => {
  const[emailId, setEmailId]= useState("");
  const[password, setPassword]= useState("");

  const handleLogin = async()=>{
    try {
      const res = await axios.post("http://localhost:7777/login",{
        emailId,
        password
      });

    }catch(err){
      console.log(err);
    }
  };

  return (
     <div className=" flex justify-center my-10">
    <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login Now</h2>
    <div>
    <fieldset className="fieldset">
   <legend className="fieldset-legend">Email ID</legend>
   <input type="text" value={emailId} className="input" placeholder="Type here"
   onChange={(e)=>setEmailId(e.target.value)} />
   
   </fieldset>
       <fieldset className="fieldset">
   <legend className="fieldset-legend">Password</legend>
   <input type="text" value={password} className="input" placeholder="Type here"
    onChange={(e)=>setPassword(e.target.value)} />
   
   </fieldset>

</div>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login
