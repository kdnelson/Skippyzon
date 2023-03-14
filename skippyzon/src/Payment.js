import React, { useEffect } from 'react';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from './reducer';

function Payment() {
  const [{ basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
  }, [basket])

  const handleSubmit = async(e) => {
    e.preventDefault();

    // dispatch({
    //     type: 'EMPTY_BASKET'
    // })

    navigate('/orders')
  }

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
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Portland Or</p>
          </div>
        </div>
        <div className ="payment_section">
          <div className ="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className ="payment_items">
            {basket.map(item => (
              <CheckoutProduct
                key={item}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={ handleSubmit }>
              <div className='payment_priceContainer'>
                <CurrencyFormat renderText={(value) => (
                  <h3>Order Total: {value}</h3>
                  )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button>
                    <span>Buy Now</span>
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment