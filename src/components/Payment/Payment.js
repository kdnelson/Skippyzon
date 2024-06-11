import { useEffect } from 'react'
import './Payment.css'
import { useTranslation } from 'react-i18next'
import Ordertotal from '../Ordertotal/Ordertotal.js'
import { useUser, useCart } from '../../hooks'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { user } = useUser()
  const { cart } = useCart()

  useEffect(() => {
    if (cart?.length === 0) { navigate('/') }
  }, [cart, navigate])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 mt-2">
          <div className="row justify-content-start">
            {user === null
              ? (
              <h3>{t('checkout.pleaseSignIn')}</h3>
                )
              : (
                <div className="col-md-12 col-lg-8">
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="card h-100 bg-body rounded address-card mt-2">
                        <div className="card-body">
                          <h4 className="fw-bold">{user?.username}</h4>
                          <h6>{user?.email}</h6>
                          <h6>{user?.useraddress}</h6>
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
            {user !== null && cart?.length > 0 && (
              <div className="col-md-8 col-lg-8">
                <Ordertotal />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
