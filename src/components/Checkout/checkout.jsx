import { useEffect } from 'react'
import './Checkout.scss'
import { useTranslation } from 'react-i18next'
import Subtotal from '../Subtotal/Subtotal.jsx'
import { useNavigate } from 'react-router-dom'
import CheckoutItem from '../CheckoutItem/CheckoutItem.jsx'
import { useUser, useCart } from '../../hooks'

const Checkout = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { email } = useUser()
  const { cart } = useCart()

  useEffect(() => {
    if (cart?.length === 0) { navigate('/') }
  }, [cart, navigate])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 mt-2">
          <div className="row justify-content-start">
            {email === null
              ? ( 
              <h3>{t('checkout.pleaseSignIn')}</h3>
                )
              : (
              <h3>{t('checkout.hello')}, {email}</h3>
            )}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mt-3 mb-3">
          <div className="row justify-content-end">
            {email !== null && (
              <div className="col-md-8 col-lg-8">
                <Subtotal />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row mx-1 justify-content-start">
        {cart?.map(o => (
          <CheckoutItem
            key={o.id}
            id={o.id}
            serialNumber={o.serialNumber}
            title={o.title}
            image={o.image}
            price={o.price}
            quantity={o.quantity}
          />
        ))}
      </div>
    </div>
  )
}

export default Checkout
