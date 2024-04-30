import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import { useState } from "react";
import loginimg from "../../assets/Res/loginimg.png";
import api from "../../utility/api";

const Sigin = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errors, setErrors] = useState("");
  const [Loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(email, Password);
    setLoading(true);
    try {
      const response = await api.post("user/Login", {
        email: email,
        password: Password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      Navigate ('/buy')
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="container1">
      <div id="signupimg">
        <img src={loginimg} alt="" />
      </div>

      <div className="formcont">
        <form onSubmit={handleSubmit} className="form">
          <Link
            to={"/landing"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            {" "}
            <span className="brandname">Getbit</span>
          </Link>
          <span className="wlcb">Hello! We’re glad to have you back</span>
          <p className="welcometex">
            Log In to pick up from where you stopped.
          </p>
          <div className="inputs">
            <input
              placeholder="Email"
              className="input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="input"
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="checkbox-container">
              <label className="checkbox" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
              </label>
              <label className="checkbox-text" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <button type="submit" className="form--submit">
              Login
            </button>

            <a className="forget" href="#">
              Forget password ?
            </a>
            <p className="signup-link">
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sigin;
