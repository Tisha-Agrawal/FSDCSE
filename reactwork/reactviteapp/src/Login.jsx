import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Login() { 
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    function showData(){
        alert(email);
    }
  return (
    <div>
      <h2>Login</h2>
      {email}
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password" onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onClick={showData} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
