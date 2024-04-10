import React from 'react'
import "./Landing.css"
import p2pimg from "../../assets/Res/p2pimg.png";

const Landing = () => {
  return (
    <div className="landingcont">

      <div className="landtxt1">
      <div id="landtxt1i">
        <h1>GETBIT P2P Crypto </h1>
        <h1> Exchange</h1>
        <p>Buy and Sell Usdt,Bitcoin,Ethereum and more with <br/> your bank account + 10 other payment methods.</p>
      </div>
      </div>

      <div className="landinimg">
        <img src={p2pimg} alt="" />
      </div>
      
      <div className="landtxt2">
      <div className="landtxt2i">
        <h3> GETBIT P2P Crypto Exchange</h3>
        <h5>Getbit Peer to Peer Trading platform is 100% safe, You can set your own price per coin for others to buy or sell from you. Crypto coins are escrowed to ensure security and fast settlements.</h5>
      </div>
      </div>
    </div>
  )
}

export default Landing