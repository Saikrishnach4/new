
import React, { Component, useState } from 'react'
import {Navigate} from "react-router-dom"
import Page from '../page/page';

  function Login(){
    
    const [emailval,changeemail]=useState("");
    function emailvalue(e){
      changeemail(e.target.value);
      console.log(e.target.value);
    }
    const [pass,changepass]=useState("");
    function passwordvalue(ep){
      changepass(ep.target.value);
      console.log(ep.target.value);
    }
    function valuespassing(){
      console.log(emailval);
    }
    function passed(){
      return <Navigate to="/page"/>;
    }
    return (
      <form>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name='email'
            onChange={emailvalue}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
           name='password'
           onChange={passwordvalue}
          />
        </div>
        <div className="d-grid">
          <button onClick={passed} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
    



  export default Login;