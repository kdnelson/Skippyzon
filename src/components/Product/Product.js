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
    <div className="card h-100 shadow p-3 mb-5 bg-body rounded">
      <div className="card-body">
        <h4 className="card-title title-styling">
          <p>{title}</p>
          ${price}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </h4>
        <img class="card-img rounded mx-auto d-block image-styling" src={image} alt="..." />
        <div class="row mt-4 mx-4 align-items-center">
          <button className="btn btn-dark" type="submit" onClick={() => addCartItem(serialNumber, title, image, price, rating)}>{t('product.addToCartBtn')}</button>
        </div>
      </div>
    </div>
  )
}

export default Product
