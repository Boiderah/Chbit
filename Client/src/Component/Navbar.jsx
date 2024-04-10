import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navcont">
        <div id="navcname">
            <h1>Getbit</h1>
        </div>

        <div id="navmiddle">
        <Link to={'/Company'}>Company</Link>
        <Link to={'/signin'}>Buy and Sell</Link>
            {/* <p></p> */}
        </div>

        <div id="navlink">
       <div className="navsignlink"><Link to={'/signin'}>Sign in</Link></div>
       <div className="navsignlink"><Link to={'/signup'}>Sign up</Link></div>
        </div>
    </div>
  )
}

export default Navbar