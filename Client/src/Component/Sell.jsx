import React, { useEffect, useState } from "react";
import "./Sell.css";
import api, { apiConfig } from "../utility/api";
import { Buycomponent } from "./Buy";
import { Navigate, useNavigate } from "react-router-dom";
const Sell = () => {
  const [myTransactions, setMyTransactions] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [coin, setCoin] = useState("")
  const [rate, setRate] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [bankName, setBankName] = useState("")
  const [AccountNumber, setAccountNumber] = useState("")
  const [AccountName, setAccountName] = useState("")
  const Navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("transaction", {
        quantity, 
        coin, 
        rate, 
        phoneNumber, 
        bankName, 
        AccountNumber, 
        AccountName
      }, apiConfig);
      console.log(response);
      Navigate('./buy')
    } catch (error) {
      console.log(error);
    }
  }

  const getMyTransactions = async () => {
    try {
      const response = await api.get("transaction/pending", apiConfig);
      console.log(response);
      setMyTransactions(response.data);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    getMyTransactions()
  },[])
  return (
    <div className="buycont">
    { myTransactions.length>0?<Buycomponent {...myTransactions[0]} page={'sell'}/>:

      <form onSubmit={handleSubmit} className="buyform">
      <div className="flex">

        {/* <label> */}
          <select className="input" id="inputss"  name="coin">
          <option value="">Usdt</option>
          <option value="Argentina">BTC</option>
          <option value="Brazil">etheruem</option>
         </select>
          {/* <span>coin</span>
          <input 
          className="input" 
          type="text" 
          placeholder="coin" 
          value={coin}
          onChange={(e)=>setCoin(e.target.value)}
          required /> */}
        {/* </label> */}

        <label>
          <span>quantity</span>
          <input
            className="input"
            type="text"
            placeholder="quantity"
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
            required
            />
        </label>
      </div>
      <div className="flex">
        <label>
          <span>Rate</span>
          <input 
          className="input" 
          type="text" 
          placeholder="Rate" 
          value={rate}
          onChange={(e)=>setRate(e.target.value)}
          required />
        </label>

        <label>
          <span>phonenumber</span>
          <input
            className="input"
            type="text"
            placeholder="phonenumber"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            required
            />
        </label>
      </div>

      <label>
        <span>bankName</span>
        <input
          className="input"
          type="text"
          placeholder="bankName"
          value={bankName}
          onChange={(e)=>setBankName(e.target.value)}
          required
          />
      </label>

      <label>
        <span>AccountNumber</span>
        <input
          className="input"
          type="text"
          placeholder="AccountNumber"
          value={AccountNumber}
          onChange={(e)=>setAccountNumber(e.target.value)}
          required
          />
      </label>

      <label>
        <span>AccountName</span>
        <input
          className="input"
          type="text"
          placeholder="AccountName"
          value={AccountName}
          onChange={(e)=>setAccountName(e.target.value)}
          required
          />
      </label>
      <div>
        <hr />
        <div className="payments">
          <span>PAYMENT</span>
          <div className="details">
            <span>Subtotal:</span>
            <span> ₦{rate && quantity && rate* quantity}</span>
            <span>Gas fee:</span>
            <span> ₦{rate && quantity && rate* quantity*0.01}</span>
            <span>Total:</span>
            <span> ₦{rate && quantity && (rate* quantity)+(rate*quantity*0.01)}</span>
          </div>
        </div>
      </div>
      
      <button id="orderbtnn" type="submit">
        PlaceOrder
      </button>
    </form>
}
  </div>
  );
  
};

export default Sell;
