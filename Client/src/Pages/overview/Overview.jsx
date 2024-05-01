import React from 'react'
import "./Overview.css";
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer';
import btclogo2 from "../../assets/Res/btclogo2.png";
import footer from "../../assets/Res/footer.png";
import ethereum from "../../assets/Res/ethereum.png";
import usdt from "../../assets/Res/usdt.png";
import litecoin from "../../assets/Res/litecoin.png";


const Overview = () => {
  return (
    <div className="overviebx">
       <div id="navigatebak">
        <Link to={"/*"} style={{ textDecoration: "none" }}>Getbit</Link>
       </div>
       <div id="p2pdesignbox">
      <div className="p2pdesignbox1">
        <div className="p2pdesignim1">
          <div className="ppplog">
            <img src={btclogo2} alt="" />
          </div>
        </div>
        <div className="p2pdesignim2">
        <div className="ppplog">
            <img src={ethereum} alt="" />
          </div>
        </div>

        <div className="p2pdesignbox2">
            <h1>Getbit</h1>
          <h1> P2P Trading </h1>
          <h1>Safe - Fast - Diverse</h1>
        </div>
        <div className="p2pdesignim1">
        <div className="ppplog">
            <img src={usdt} alt="" />
          </div>
        </div>
        <div className="p2pdesignim2">
        <div className="ppplog">
            <img src={litecoin} alt="" />
          </div>
        <div className="ppplog2">
            <img src={footer} alt="" />
          </div>
          
        </div>
      </div>
      </div>
      <div className="overviebx1">
        <div id="profdiv">
        <h1>Profile</h1>
        </div>
        <div className="overviebx2">
          <div id="accdet">
          <h3>Account Details</h3>
          </div>
          <div id="nameemail">
            <h4>Name: Emmanuel Okezie</h4>
            <h4>Email: <br /> Emmanuelokezie50@gmail.com</h4>
          </div>
        </div>
        <div className="overviebx2">
          <div id="accdet">
          <h3>Phone Number</h3>
          </div>
          <div id="nameemail">
            <h4>09060470122</h4>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Overview