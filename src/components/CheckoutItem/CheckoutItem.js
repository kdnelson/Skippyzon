import { useEffect } from 'react'
import './CheckoutItem.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks'

const CheckoutItem = (props) => {
	const { t } = useTranslation()
  const { id, serialNumber, title, image, price, rating, quantity, hideButton } = props ?? {}
  const navigate = useNavigate()
  const { cart, decrementCartItem, incrementCartItem, removeCartItem } = useCart()

  useEffect(() => {
    if (cart?.length === 0) { navigate('/') }
  }, [cart, navigate])

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
						<button type="submit" onClick={() => { decrementCartItem(id) }}>-</button>
						<strong>&nbsp;{quantity}&nbsp;</strong>
						<button type="submit" onClick={() => { incrementCartItem(id) }}>+</button>
					</div>
				)}
				<div className="checkoutProduct_rating">
					{Array(rating)
					  .fill()
					  .map((_, i) => (
							<p key={i}>🌟</p>
					  ))}
				</div>
				<button type="submit" onClick={() => removeCartItem(id)}>{t('checkoutitem.removeFromCartBtn')}</button>
			</div>
    </div>
  )
}

export default CheckoutItem
