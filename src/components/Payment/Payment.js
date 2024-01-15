import React, { useEffect } from 'react';
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import CheckoutItem from "./../CheckoutItem/CheckoutItem.js";
import { useBasket } from '../../hooks/useBasket';
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../../hooks/useUser';
import { useOrder } from '../../hooks/userOrder';

const Payment = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { basket, getPaymentAndTaxTotal } = useBasket();
  const { addOrder } = useOrder();

  useEffect(() => {
    if(basket?.length === 0) {navigate('/')}
  }, [basket, navigate])

  return (
    <div className ="payment">
      <div className ="payment_container">
        <h1>
          Checkout (<Link to = "/checkout">{basket?.length} items</Link>)
        </h1>    
        <div className ="payment_section">
          <div className ="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className ="payment_address">
            <p>{user?.name}</p>
            <p>{user?.address}</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className ="payment_section">
          <div className ="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className ="payment_items">
          {basket.map(o => (
            <CheckoutItem
              key={o.id}
              id={o.id}
              serialNumber={o.serialNumber}
              title={o.title}
              image={o.image}
              price={o.price}
              rating={o.rating}
              quantity={o.quantity}
            />
          ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <div className='payment_priceContainer'>
              <CurrencyFormat renderText={(value) => (
                <h3>Order Total: {value}</h3>
                )}
                  decimalScale={2}
                  value={getPaymentAndTaxTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button type="submit" onClick={() => addOrder(basket)}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment