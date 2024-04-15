import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Landing.css"
import p2pimg from "../../assets/Res/p2pimg.png";
import img1 from "../../assets/Res/img1.png";
import clock from "../../assets/Res/clock.png";
import wallet from "../../assets/Res/wallet.png";
import span from "../../assets/Res/span.png";
import swap from "../../assets/Res/swap.svg.png";
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';



const Landing = () => {
  return (
    <div className="landingcont">
      <Navbar/>

      <div className="landtxt1">
      <div id="landtxt1i">
        <h1>GETBIT P2P Crypto <br /> Exchange </h1>
        <p>Buy and Sell Usdt,Bitcoin,Ethereum and more with <br/> your bank account + 10 other payment methods.</p>
      </div>
      </div>

      <div className="landinimg">
        <img src={p2pimg} alt="" />
      </div>
      
      <div className="landtxt2">
      <div className="landtxt2i">
        <h2> GETBIT P2P Crypto Exchange</h2>
        <h5>Getbit Peer to Peer Trading platform is 100% safe, <br /> You can set your own price per coin for others to <br /> buy or sell from you. Crypto coins are escrowed to <br /> ensure security and fast settlements.</h5>
      </div>
      </div>

      <div className="actionbtn">
      <div className="actionbtn1">
        <div id="btnBandS">
          <p id="buybox">Buy</p>
          <p id="sellbox">Sell</p>
        </div>

      <div className="petti1">
      <div className="petti">
        <div id="UPdown">
          <img src={swap} alt="" />
        </div>
        <div id="bi">
          <p>b</p>
          <p>i</p>
        </div>
        <div id="payMet">
          <p>Payment</p>
          <p>Method</p>
        </div>
        <div id="lerdet">
          <p>ler</p>
          <p>det</p>
        </div>
        <div id="acton">
        <p> Action</p>
        </div>
      </div>
      </div>

      </div>

      </div>

      <div className="viewmarkbnt">
      <div className="viewmarkbnt1">
        <h3>View Markets</h3>
      </div>
      </div>

      <div id="howItWorks">
        <img src={img1}  alt="" />
      </div>

      <div className="benefitBox">
      <div className="benefitbx">
        <h2>Benefits Of Getbit <br />P2P Exchange</h2>
        <div id="benefitToolsCont">
          <div className="benefittools">
            <p>Faster</p>
            <img src={clock} alt="" />
          </div>
          <div className="benefittools">
            <p>Cheaper</p>
            <img src={wallet} alt="" />
          </div>
          <div className="benefittools">
            <p>Secure</p>
            <img src={span} alt="" />
          </div>
        </div>
      </div>
      </div>

      <div id="starttrade">
         <div className="starttrade1">
          <h3>Start trading on Getbit</h3>
          <p>Sign up for free to start buying and selling bitcoin and other crypto coins on <br />Getbit in real time.</p>

          <div className="getStarted">
      <div className="getStartedi">
      <Link to={'/signup'} style={{textDecoration:"none", color:"#fff"}}>Get Started</Link>
      </div>
      </div>
         </div>
      </div>

      <div className="landlastimg">
      <div className="landlastimg1">
        <h1>We won’t toot our horns; <br/> Our users do that for us.</h1>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Landing