import { useEffect } from 'react'
import './Payment.scss'
import { useTranslation } from 'react-i18next'
import OrderTotal from '../OrderTotal/OrderTotal.jsx'
import { useUser, useCart } from '../../hooks'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { username, email, useraddress } = useUser()
  const { cart } = useCart()

  useEffect(() => {
    if (cart?.length === 0) { navigate('/') }
  }, [cart, navigate])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 mt-3 gy-0 gx-4">
          <div className="row justify-content-start">
            {email === null
              ? (
              <h3>{t('checkout.pleaseSignIn')}</h3>
                )
              : (
                <div className="col-md-12 col-lg-8">
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="card h-100 bg-body rounded address-card mt-2">
                        <div className="card-body">
                          <h4 className="fw-bold">{username}</h4>
                          <h6>{email}</h6>
                          <h6>{useraddress}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mt-3 mb-3">
          <div className="row justify-content-end">
            {email !== null && cart?.length > 0 && (
              <div className="col-md-8 col-lg-8">
                <OrderTotal />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
