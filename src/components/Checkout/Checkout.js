import React, { useEffect } from 'react';
import "./Checkout.css"
import Subtotal from '../Subtotal/Subtotal.js';
import { useNavigate } from "react-router-dom";
import CheckoutItem from "../CheckoutItem/CheckoutItem.js";
import { useUser } from '../../hooks/useUser';
import { useCart } from '../../hooks/useCart';

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { cart } = useCart();

  useEffect(() => {
    if(cart?.length === 0) {navigate('/')}
  }, [cart, navigate])

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          {user === null && cart?.length > 0 ? (
            <h3>Please sign in.</h3>
          ) : (
            <h3>Hello, {user?.email}</h3>
          )}
          <h2 className="checkout_title">Your shopping Cart</h2>
          {cart?.map(o => (
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
      <div className="checkout_right">
        {user !== null && cart?.length > 0 && (
          <Subtotal />
        )}
      </div>
    </div>
  )
}

export default Checkout
