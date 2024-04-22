import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import btclogo2 from "../../assets/Res/btclogo2.png";
import footer from "../../assets/Res/footer.png";
import ethereum from "../../assets/Res/ethereum.png";
import usdt from "../../assets/Res/usdt.png";
import litecoin from "../../assets/Res/litecoin.png";
import Buy from "../../Component/Buy";
import Sell from "../../Component/Sell";
import { Pivot as Hamburger } from 'hamburger-react'

const Home = () => {
  const Navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     Navigate("/signin");
  //   }
  // }, []);
  const [trans, setTrans] = useState("buy")
  function gotobuy() {
    setTrans("buy")
    Navigate("/buy")
  }
  function gotosell() {
    setTrans("sell")
    Navigate("/sell")
  }
    const  [isOpen, setOpen] = useState(false)
    function logOut() {
      localStorage.removeItem("token")
      Navigate("/signin")
    }
  

  return (
    <div id="homepage">
      <div className="homepgnavb">
      <div className="navbar002">
      <div className="head2cont">
        <img src="" alt="" />
        <h1>Getbit</h1>
      </div>

      <div className="head2conti">
        <img src="" alt="" />
        <Hamburger toggled ={isOpen} toggle={setOpen} />
        {
          isOpen? (
            <div className="dropdown">
              <div className="dropdown-content">
                <div className="dropdown-item" onClick={gotobuy}>Overview</div>
                <div className="dropdown-item" onClick={gotosell}>Change Password</div>
                <p onClick={logOut}>  Logout</p>
              </div>
            </div>
          ) : null
        }
      </div>
      </div>
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

    {/* <div className="prod">
    <div id="bandS">
      <div className="bandsbtn">
        <h1>Buy</h1>
      </div>
      <div className="bandsbtn">
        <h1>Sell</h1>
      </div>
      </div>
      </div> */}

  <div class="tab-container">
      <button onClick={gotobuy} className="tab tab--1">Buy</button>
      <button onClick={gotosell} className="tab tab--2">Sell</button>
      <div className={`indicator ${trans=="buy"?'left':"right"}`} ></div>
    </div>
    <Routes>
      <Route path="/buy" element={<Buy />} />
      <Route path="/sell" element={<Sell />} />
    </Routes>

      
    </div>
  );
};

export default Home;