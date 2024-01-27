import React from 'react'
import './OrderDetails.css'
import { useBasket } from '../../hooks/useBasket';

const OrderDetails = (props) => {
  const { serialNumber, title, image, price, quantity, rating } = props ?? {};
   const { addBasketItem } = useBasket();
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
      <button type="submit" onClick={() => addBasketItem(serialNumber, title, image, price, rating)}>Add to Basket</button>
      <br />
      <br />
    </div>
  )
}

export default OrderDetails