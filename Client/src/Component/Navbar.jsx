import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navcont">
      <div id="navcname">
        <Link to={"/landing"} style={{ textDecoration: "none" }}>
          <h1>Getbit</h1>
        </Link>
      </div>

      <div id="navmiddle">
        <Link to={"/Company"} style={{ textDecoration: "none" }}>
          Company
        </Link>
        <Link to={"/signin"} style={{ textDecoration: "none" }}>
          Buy and Sell
        </Link>
        {/* <p></p> */}
      </div>

      <div id="navlink">
        <div className="navsignlink">
          <Link to={"/signin"} style={{ textDecoration: "none" }}>
            Sign in
          </Link>
        </div>
        <div className="navsignlink">
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
