import { useEffect } from 'react'
import './Payment.css'
import { useTranslation } from 'react-i18next'
import CurrencyFormat from 'react-currency-format'
import CheckoutItem from './../CheckoutItem/CheckoutItem.js'
import { useCart } from '../../hooks/useCart'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import { useOrder } from '../../hooks/userOrder'

const Payment = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { user } = useUser()
  const { cart, getPaymentAndTaxTotal } = useCart()
  const { addOrder } = useOrder()

  useEffect(() => {
    if (cart?.length === 0) { navigate('/') }
  }, [cart, navigate])

  return (
    <div className ="payment">
      <div className ="payment_container">
        <br />
        <h1>
          {t('payment.checkout')} (<Link to="/checkout">{cart?.length} {t('payment.items')}</Link>)
        </h1>
        <div className ="payment_section">
          <div className ="payment_title">
            <h3>{t('payment.deliveryAddress')}</h3>
          </div>
          <div className ="payment_address">
            <p>{user?.name}</p>
            <p>{user?.address}</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className ="payment_section">
          <div className ="payment_title">
            <h3>{t('payment.reviewItemsAndDelivery')}</h3>
          </div>
          <div className ="payment_items">
          {cart.map(o => (
            <CheckoutItem
              key={o.id}
              id={o.id}
              serialNumber={o.serialNumber}
              title={o.title}
              image={o.image}
              price={o.price}
              rating={o.rating}
              quantity={o.quantity}
            />
          ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>{t('payment.paymentMethod')}</h3>
          </div>
          <div className="payment_details">
            <div className='payment_priceContainer'>
              <CurrencyFormat renderText={(value) => (
                <h3>{t('payment.orderTotal')}: {value}</h3>
              )}
                  decimalScale={2}
                  value={getPaymentAndTaxTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button type="submit" onClick={() => addOrder(cart)}>{t('payment.buyNowBtn')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
