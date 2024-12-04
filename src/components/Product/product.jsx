import { useEffect } from 'react'
import './Product.scss'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks'

const Product = (props) => {
  const { t } = useTranslation()
  const { serialNumber, title, image, price } = props ?? {}
  const navigate = useNavigate()
  const { cart, addCartItem } = useCart()

  useEffect(() => {
    if (cart?.length === 0) { navigate('/') }
  }, [cart, navigate])

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card h-100 shadow p-3 mb-3 bg-body rounded">
        <div className="card-body">
          <h4 className="card-title product-title">
            <p>{title}</p>
          </h4>
          <h4>
            ${price}
          </h4>
          <img className="card-img rounded mx-auto d-block product-image" src={image} alt="..." />
          <div className="row mt-5 mx-4">
            <button className="btn btn-dark" type="submit" onClick={() => addCartItem(serialNumber, title, image, price)}>{t('product.addToCartBtn')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
