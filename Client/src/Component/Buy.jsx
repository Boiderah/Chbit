import React from 'react';
import "./Buy.css"

const Buy = () => {
  
  return (
    <div className="buycont">


        <form className="buyform">
          <div className="flex">
            <label>
              <span>coin</span>
              <input className="input" type="text" placeholder="coin" required />
            </label>

            <label>
              <span>quantity</span>
              <input className="input" type="text" placeholder="quantity" required />
            </label>
          </div>
          <div className="flex">
            <label>
              <span>Rate</span>
              <input className="input" type="text" placeholder="Rate" required />
            </label>

            <label>
              <span>phonenumber</span>
              <input className="input" type="text" placeholder="phonenumber" required />
            </label>
          </div>

          <label>
            <span>bankName</span>
            <input className="input" type="text" placeholder="bankName" required />
          </label>

          <label>
            <span>AccountNumber</span>
            <input className="input" type="password" placeholder="AccountNumber" required />
          </label>

          <label>
            <span>AccountName</span>
            <input className="input" type="password" placeholder="AccountName" required />
          </label>

          <div>
          <hr />
          <div className="payments">
            <span>PAYMENT</span>
            <div className="details">
              <span>Subtotal:</span>
              <span>$240.00</span>
              <span>Gas fee:</span>
              <span>$0.5</span>
              <span>Total:</span>
              <span>$10.00</span>
            </div>
          </div>
        </div>

      {/* );
    }; */}

    {/* const CheckoutCard = () => {
      return (
        <div className="card checkout">
          <div className="footer">
            <label className="price">$280.40</label>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      );
    };

    const CheckoutPage = () => {
      return (
        <div>
          <div className="container">
            <div className="checkout-container">
              <PaymentDetails />
              <CheckoutCard />
            </div>
          </div>
        </div>
      );
    }; */}
      
    </form>
    </div>
  );
};


export default Buy;