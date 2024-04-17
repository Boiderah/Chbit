import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Signup.css"
import loginimg from "../../assets/Res/loginimg.png";
import api from "../../utility/api";

const Signup = () => {
  // const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState("")
  const [Loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const Navigate = useNavigate()
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response =await api.post('user', {
        email: email,
        password: password,
        fullName: fullName
      })
      console.log(response)
      setLoading(false)
    } catch (error){
      console.log(error)
      setErrors(error.response.data)
      setLoading(false)
    }

    // console.log(email, password)

    // fetch("http://localhost:4000/user",{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //     phoneNumber:"77777",
    //     fullName: fullName
    //   }),
    // })
    // .then(res => res.json())
    // .then((res) => {
    //   localStorage.setItem("token", `${res[1]}`)
    //   Navigate('/')
    // })
    // .catch(err => console.error(err))

    
  }

  return (
    <div id="signup">
       <div className="container">

          <div id="signupimg">
            <img src={loginimg} alt="" />
         </div>

    <div className="formcont">
       <form className="form" onSubmit={handleSubmit}>
       <Link to={'/landing'} style={{textDecoration:"none", color:"#fff"}}>  <span className="wlc">Getbit</span></Link>
        <span className="wlcin">Hello! Create your Account</span>
       <span className="signup">Welcome to Getbit Let’s get started.</span>
       <input type="text" placeholder="Full Name" className="form--input" value={fullName} onChange={handleFullNameChange} />
       <input type="email" placeholder="Email address" className="form--input" value={email} onChange={handleEmailChange} />
       <input type="password" placeholder="Password" className="form--input" value={password} onChange={handlePasswordChange} />
       <input type="password" placeholder="Confirm password" className="form--input" value={confirmPassword} onChange={handleConfirmPasswordChange} />
       <button type="submit" disabled={Loading} className="form--submit">
           Sign up
       </button>
       <p className="signup-link">Already have a Getbit Account?
        <Link to={'/signin'}>Sign in</Link>
        </p>
      <p>{errors && errors}</p>
      </form>
     </div>
      </div>  
    </div>
  );
};

export default Signup