/**
 * @fileoverview Login page - allows users to login to their account.
 */
import './SignUpStyle.css';
import React from 'react';
import { useState } from 'react'; 
export default function logIn() {

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  
  const handleSubmit = evt => {
    evt.preventDefault(); 
    //Handle request,  if successful link to User Feed 
}; 

  return (
        <div className="login">
          <h1>Keeping It Casual: Log In Page</h1>
          <div className="form"> 
                <form onSubmit={handleSubmit}>
                  <div className="formInput">
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="formDefault" placeholder = "Email" required="required"/>
                  </div>
                  <div className="formInput">
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="formDefault" placeholder = "Password" required="required"/>
                  </div>
                  <div className="formInput">
                      <button type="submit" value="submit">Log In</button> 
                  </div>
                </form>
          </div>
        </div>
      );
  }
