import React from "react";
import "./Buy.css";

const Buy = () => {
  return (
    <div className="buycontainer">
      
      <div className="orders">
        <div id="propcomp">
          <h2>Emmanuelokezie20@gmail.com</h2>
          <p> Rate <span>1320</span> </p>
          <p>Quantity <span>100 usdt</span> </p>
          <div className="bnkline">
          <div id="thickmk"></div>
          <p> Bank Transfer</p>
          </div>
        </div>
        <div className="buybtt">
          <button>buy</button>
        </div>

      </div>
      {/* <div className="orders">
        <div id="propcomp">
          <h2>Emmanuelokezie50@gmail.com</h2>
          <p> Rate <span>1430</span> </p>
          <p>Quantity <span>250 usdt</span> </p>
          <div className="bnkline">
          <div id="thickmk"></div>
          <p> Bank Transfer</p>
          </div>
        </div>
        <div className="buybtt">
          <button>buy</button>
        </div>

      </div>
      <div className="orders">
        <div id="propcomp">
          <h2>Emmanuelokezie101@gmail.com</h2>
          <p> Rate <span>1290</span> </p>
          <p>Quantity <span>70 usdt</span> </p>
          <div className="bnkline">
          <div id="thickmk"></div>
          <p> Bank Transfer</p>
          </div>
        </div>
        <div className="buybtt">
          <button>buy</button>
        </div>

      </div> */}
    </div>
  );
};

export default Buy;
