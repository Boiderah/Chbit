import { Link } from "react-router-dom";
import "./Signin.css";

const Sigin = () => {

  return (
    <div className="container">
       <form className="form">
      <div className="header">Sign in</div>
      <div className="inputs">
        <input placeholder="Email" className="input" type="text" />
        <input placeholder="Password" className="input" type="password" />
        <div className="checkbox-container">
          <label className="checkbox" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
          </label>
          <label className="checkbox-text" htmlFor="checkbox">Remember me</label>
        </div>
        {/* <button className="sign-in-btn">Submit</button> */}
        <button type="submit" className="form--submit">
           Sign up
       </button>
        <a className="forget" href="#">Forget password ?</a>
        <p className="signup-link">Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
      </div>
    </form>
    </div>
  );
};

export default Sigin;
