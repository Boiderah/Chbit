import React from 'react';

const Buy = () => {
  
  return (
    <form className="buyform">
      <div className="flex">
        <label>
          <input className="input" type="text" placeholder="coin" required />
          <span>coin</span>
        </label>

        <label>
          <input className="input" type="text" placeholder="quantity" required />
          <span>quantity</span>
        </label>
      </div>

      <label>
        <input className="input" type="text" placeholder="bankName" required />
        <span>bankName</span>
      </label>

      <label>
        <input className="input" type="password" placeholder="AccountNumber" required />
        <span>AccountNumber</span>
      </label>
      
      <label>
        <input className="input" type="password" placeholder="AccountName" required />
        <span>AccountName</span>
      </label>

      <div>
      <hr />
      <div className="payments">
        <span>PAYMENT</span>
        <div className="details">
          <span>Subtotal:</span>
          <span>$240.00</span>
          <span>Shipping:</span>
          <span>$10.00</span>
          <span>Tax:</span>
          <span>$30.40</span>
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
  );
};

export default Buy;