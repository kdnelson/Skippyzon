import React from 'react'
import './OrderDetails.css'
import { useCart } from '../../hooks/useCart';

const OrderDetails = (props) => {
  const { serialNumber, title, image, price, quantity, rating } = props ?? {};
   const { addCartItem } = useCart();
  return (
    <div className="orderDetails">
      {title}
      <br />
      <p>
        Price:
        &nbsp;
        <small>$</small>
        {price}
      </p>
      Quantity: {quantity}
      <br />
      <button type="submit" onClick={() => addCartItem(serialNumber, title, image, price, rating)}>Add to Cart</button>
      <br />
      <br />
    </div>
  )
}

export default OrderDetails