import React from 'react'
import "./Overview.css";
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer';


const Overview = () => {
  return (
    <div className="overviebx">
       <div id="navigatebak">
        <Link to={"/*"} style={{ textDecoration: "none" }}>Getbit</Link>
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