import React, { useState } from 'react';

import { Navigate,Link} from "react-router-dom";
function Register() {
  const [user,setuser]=useState({
    firstname:"",lastname:"",email:"",password:""
  });
  let name,value;
  const handleinput=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setuser({...user,[name]:value});
  }
    
  const postdata=(e)=>{
    e.preventDefault();
    const {firstname,lastname,email,password}=user;
    
      const res= fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          firstname,lastname,email,password
        })
      });
      const data = res.json();
      if(data.status===(422)||!data){
        window.alert("invalid register");
      }else{
        window.alert("success register");
       
      }
  };

  
    
   const [original,redirectpage]=useState(false);

   if(original){
    return <Navigate to="/login"/>
   }
    
    return (
  
      <form method='post'>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name='firstname'
            value={user.firstname}
            onChange={handleinput}
            
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" name='lastname'
            value={user.lastname}
            onChange={handleinput} />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name='email'
            value={user.email}
            onChange={handleinput}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password'
            value={user.password}
            onChange={handleinput}
          />
         </div>
        <div className="d-grid">
          <Link to="/page" onSubmit={postdata} type="submit" className="btn btn-primary">submit</Link>
    
        </div>
        <p className="forgot-password text-right">Already registered <button onClick={()=>{redirectpage(true)}}>signin</button></p>
      </form>
    )
   
}
export default Register;
