import { useEffect } from 'react'
import './CheckoutItem.scss'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks'

const CheckoutItem = (props) => {
	const { t } = useTranslation()
  const { id, serialNumber, title, image, price, quantity} = props ?? {}
  const navigate = useNavigate()
  const { cart, decrementCartItem, incrementCartItem, removeCartItem } = useCart()

  useEffect(() => {
    if (cart?.length === 0) { navigate('/') }
  }, [cart, navigate])

  return (
		<div className="card h-130 p-3 mb-3 bg-body rounded">
      <div className="card-body">
        <h4 className="card-title">
          <div className="row mb-1">
						{serialNumber}
					</div>
					<div className="row mb-1">
						{title}
					</div>
					<div className="row mb-1">
						${price}
					</div>
        </h4>
        <img className="justify-content-start checkoutItem-image" src={image} alt="..." />
				<div className="row mt-3">
					<div className="col-auto mt-3"><button className="btn btn-warning" type="submit" onClick={() => { decrementCartItem(id) }}>-</button></div>
					<div className="co-1 mt-4 checkoutItem-spacer"><h5>{quantity}</h5></div>
					<div className="col-auto mt-3"><button className="btn btn-warning" type="submit" onClick={() => { incrementCartItem(id) }}>+</button></div>
					<div className="col-auto mt-3"><button className="btn btn-dark" type="submit" onClick={() => removeCartItem(id)}>{t('checkoutitem.deleteFromCartBtn')}</button></div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
