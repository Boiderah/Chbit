import React, { useState } from "react";
import "./Signup.css"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubscribeChange = (e) => {
    setSubscribe(e.target.checked);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, Password)

    fetch("http://localhost:4000/Login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: Password,
        phoneNumber
      }),
    })
    .then(res => res.json())
    .then((res) => {
      localStorage.setItem("token", `${res[1]}`)
      Navigate('/')
    })
    .catch(err => console.error(err))

    
    }
  return (
    <div id="signup">
        <div className="container">
       <form className="form" onSubmit={handleSubmit}>
        <span className="wlc">Welcome To Getbit</span>
        <span className="wlcin">Let's Get Started</span>
       <span className="signup">Sign Up!</span>
       <input type="email" placeholder="Full Name" className="form--input" value={firstName} onChange={handleEmailChange} />
       {/* <input type="email" placeholder="last Name" className="form--input" value={lastName} onChange={handleEmailChange} /> */}
       <input type="email" placeholder="Email address" className="form--input" value={email} onChange={handleEmailChange} />
       <input type="password" placeholder="Password" className="form--input" value={password} onChange={handlePasswordChange} />
       <input type="password" placeholder="Confirm password" className="form--input" value={confirmPassword} onChange={handleConfirmPasswordChange} />
       <button type="submit" className="form--submit">
           Sign up
       </button>
      </form>
      </div>  
    </div>
  );
};

export default Signup