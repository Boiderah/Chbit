import React, { useEffect, useState } from "react";
import "./Buy.css";
import api, { apiConfig } from "../utility/api";

const Buy = () => {
  const [transactions, setTransactions] = useState([])
  const getAllTransactions = async () => {
    try {
      const response = await api.get("transaction/all", apiConfig);
      console.log(response);
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    getAllTransactions()
  },[])

  return (
    <div className="buycontainer">
      
    {
      transactions && 
      transactions.filter((trans)=> trans.status==="approved" ).map((transaction) => (
        <Buycomponent {...transaction}/>
      ))
    }



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


export const Buycomponent = ({SellerName, rate, quantity, AccountName, AccountNumber, bankName, phoneNumber, coin, page="buy", status}) => {
  const [showPopup, setShowPopup] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div id="buyComponent" className="orders">
        <div id="propcomp">
          <h2>{SellerName}</h2>
          <p> Rate <span>{rate}</span> </p>
          <p>Quantity <span>{quantity}{coin}</span> </p>
          <div className="bnkline">
          <div id="thickmk"></div>
          <p> Bank Transfer</p>
          </div>
          {
            page !== "buy" &&
            <div className="buybtt">{status}</div>
          }
        </div>
        <div className="buybtt">
          {
            page === "buy"?
            <button onClick={()=>setShowPopup(true)}>buy</button>
            :<button onClick={()=>setShowDetails(true)}>Details</button>
          }
        </div>
        {
          showPopup && 
          <div className="popup">
            <div id="popupdiv ">
             <p>
            don't transact with a palmpay user as transactions <br /> can be deleted from the palmpay transaction <br /> history. 
            </p>
            <h3> Account Name :  {AccountName}</h3>
            <h3>Account Number :  {AccountNumber}</h3>
            <h3>bank Name :  {bankName}</h3>
            <h3>phone Number :  {phoneNumber}</h3>
            <div className="buybtt">
            <button>I have paid</button>
          </div>
            </div>
          </div>
        }
        {
          showDetails && 
          <div className="popup">
            <div>

            <p>
              i am details
              make payment to the wallet below before
              your buy order will be approved. 
            </p>
            <h3>{AccountName}</h3>
            <h3>{AccountNumber}</h3>
            <h3>{bankName}</h3>
            <h3>{phoneNumber}</h3>
            <div className="buybtt">
            <button>I have paid</button>
          </div>
            </div>
          </div>
        }
        </div>
  )
}

export default Buy;
