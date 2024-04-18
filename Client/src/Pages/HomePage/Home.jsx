import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Navigate("/signin");
    }
  }, []);

  return (
    <div id="home">
      <div className="contain">
        <h1>Getbit</h1>
      </div>
      <div className="profile">profile</div>
      <div id="contentbox">
        <div className="prod">
          <div id="bandS">
            <h3>Buy</h3>
            <h3>/</h3>
            <h3>Sell</h3>
          </div>
          <div id="trns">
            <h3>Order</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
