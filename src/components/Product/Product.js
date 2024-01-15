import React, { useEffect } from 'react';
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { useBasket } from '../../hooks/useBasket';

const Product = (props) => {
  const { serialNumber, title, image, price, rating } = props ?? {};
  const navigate = useNavigate();
  const { basket, addBasketItem } = useBasket();

  useEffect(() => {
    if(basket?.length === 0) {navigate('/')}
  }, [basket, navigate])

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button type="submit" onClick={() => addBasketItem(serialNumber, title, image, price, rating)}>Add to Basket</button>
    </div>
  );
}

export default Product