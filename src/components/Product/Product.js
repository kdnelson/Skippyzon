import { useEffect } from 'react'
import './Product.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks'

const Product = (props) => {
  const { t } = useTranslation()
  const { serialNumber, title, image, price, rating } = props ?? {}
  const navigate = useNavigate()
  const { cart, addCartItem } = useCart()

  useEffect(() => {
    if (cart?.length === 0) { navigate('/') }
  }, [cart, navigate])

  return (
    <div className="card h-100">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="row">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        <img src={image} alt="..." />
        <div className="row">
          <button className="btn btn-dark" type="submit" onClick={() => addCartItem(serialNumber, title, image, price, rating)}>{t('product.addToCartBtn')}</button>
        </div>
      </div>
    </div>
  )
}

export default Product
