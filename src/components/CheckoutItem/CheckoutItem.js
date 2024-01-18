import React, { useEffect } from 'react';
import './CheckoutItem.css'
import { useNavigate } from "react-router-dom";
import { useBasket } from '../../hooks/useBasket';

const CheckoutItem = (props) => {
	const { id, serialNumber, title, image, price, rating, quantity, hideButton } = props ?? {};
	const navigate = useNavigate();
  const { basket, decrementBasketItem, incrementBasketItem, removeBasketItem } = useBasket();

  useEffect(() => {
    if(basket?.length === 0) {navigate('/')}
  }, [basket, navigate])

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt="" />
			<div className='checkoutProduct_info'>
				<p className='checkoutProduct_serialNumber'>{serialNumber}</p>
				<p className='checkoutProduct_title'>{title}</p>
				<p>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				{!hideButton && (
					<div>
						<button type="submit" onClick={() => {decrementBasketItem(id)}}>-</button>
						<strong>&nbsp;{quantity}&nbsp;</strong>
						<button type="submit" onClick={() => {incrementBasketItem(id)}}>+</button>
					</div>
				)}
				<div className="checkoutProduct_rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>🌟</p>
						))}
				</div>
				<button type="submit" onClick={() => removeBasketItem(id)}>Remove from Basket</button>
			</div>
    </div>
  )
}

export default CheckoutItem
