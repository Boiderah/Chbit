import React, { useState } from "react";
import "./Signup.css"

const Signup = () => {
  const [email, setEmail] = useState('');
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
    // Handle form submission here, you can access form data from email, password, confirmPassword, and subscribe states
    console.log('Form submitted:', { email, password, confirmPassword, subscribe });
  };
  return (
    <div>
        <div className="container">
       <form className="form" onSubmit={handleSubmit}>
       <span className="signup">Sign Up</span>
       <input type="email" placeholder="Email address" className="form--input" value={email} onChange={handleEmailChange} />
       <input type="password" placeholder="Password" className="form--input" value={password} onChange={handlePasswordChange} />
       <input type="password" placeholder="Confirm password" className="form--input" value={confirmPassword} onChange={handleConfirmPasswordChange} />
       
       {/* <div className="form--marketing">
         <input id="okayToEmail" type="checkbox" checked={subscribe} onChange={handleSubscribeChange} />
       </div> */}
       <button type="submit" className="form--submit">
           Sign up
       </button>
      </form>
      </div>  
    </div>
  );
};

export default Signup