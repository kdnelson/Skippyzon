import { useEffect } from 'react'
import './Product.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

const Product = (props) => {
  const { t } = useTranslation()
  const { serialNumber, title, image, price, rating } = props ?? {}
  const navigate = useNavigate()
  const { cart, addCartItem } = useCart()

  useEffect(() => {
    if (cart?.length === 0) { navigate('/') }
  }, [cart, navigate])

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
      <button type="submit" onClick={() => addCartItem(serialNumber, title, image, price, rating)}>{t('product.addToCartBtn')}</button>
    </div>
  )
}

export default Product
