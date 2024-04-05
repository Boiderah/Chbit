import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import { useState } from "react";

const Sigin = () => {
  const [ email, setEmail] = useState("")
  const [ Password, setPassword] = useState("")
  const [ token, setToken] = useState("")
  const Navigate = useNavigate()

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
    <div className="container">
       <form onSubmit={handleSubmit} className="form">
        <span className="brandname">Getbit</span>
        <span className="wlcb">Welcome back</span>
      {/* <span className="header">Login To Your Account</span> */}
      <div className="inputs">
        <input placeholder="Email" className="input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder="Password" className="input" type="password" value={Password}  onChange={(e)=>setPassword(e.target.value)} />

        <div className="checkbox-container">
          <label className="checkbox" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
          </label>
          <label className="checkbox-text" htmlFor="checkbox">Remember me</label>
        </div>

        {/* <button className="sign-in-btn">Submit</button> */}
        <button type="submit" className="form--submit">
           Login
       </button>

        <a className="forget" href="#">Forget password ?</a>
        <p className="signup-link">Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
      </div>
    </form>
    </div>
  );
};

export default Sigin;
