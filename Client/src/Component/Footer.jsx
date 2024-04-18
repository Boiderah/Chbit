import React from "react";
import "./Footer.css";
import facebook from "../assets/Res/facebook.png";
import linkin from "../assets/Res/linkin.png";
import instagram from "../assets/Res/instagram.png";
import twitter from "../assets/Res/twitter.png";
import appstore from "../assets/Res/appstore.png";
import Link from "../assets/Res/Link.png";

const Footer = () => {
  return (
    <div className="footercont">
      <div id="footerblackbox">
        <div id="contbox">
          <div id="footerblackbox1">
            <div className="footertxt1">
              <h4>Company</h4>
              <p>About</p>
              <p>Career</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
            <div className="footertxt1">
              <h4>Support</h4>
              <p>FAQ</p>
              <p>Supported Countries</p>
              <p>Join Us on Discord</p>
            </div>
            <div className="footertxt1">
              <h4>Products</h4>
              <p>Crypto Cards</p>
              <p>Partners Program</p>
              <p>Greenbox</p>
              <p>Earn by Staking</p>
              <p>Buy Airtime & Data</p>
            </div>
            <div className="footertxt1">
              <h4>Resources</h4>
              <p>Blog</p>
            </div>
            <div className="footertxt1">
              <h4>Buy Globally</h4>
              <p>Buy Bitcoin in Nigeria</p>
              <p>Buy Bitcoin in Ghana</p>
              <p>Buy Bitcoin in Kenya</p>
            </div>
          </div>
        </div>

        <div id="belowline">
          <h2>Did you know you can do more with crypto while on the go?</h2>
          <p>Get Getbit mobile app and find out</p>
          <h1>GETBIT</h1>
          <h5>Fastest, Easiest and Cheapest way to buy cryptocurrencies.</h5>
        </div>

        <div className="appstore">
          <div className="appstorei">
            <img src={appstore} alt="" />
            <img src={Link} alt="" />
          </div>
        </div>

        <div className="mediacont">
          <div className="media">
            <img src={facebook} alt="" />
            <img src={linkin} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
