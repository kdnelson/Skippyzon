import './Subtotal.css'
import { useTranslation } from 'react-i18next'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks'

const Subtotal = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { cart, getCartTotal } = useCart()

  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="card bg-body rounded subtotal-background">
          <div className="card-body">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <div className="row justify-content-start">
                    <p>
                      {t('subtotal.subTotal')} ({cart.length} {t('subtotal.items')}): <strong>{value}</strong>
                    </p>
                  </div>
                  <div className="row justify-content-start">
                    <p>
                      <input type="checkbox" />
                      &nbsp;
                      {t('subtotal.thisOrderContainsAGift')}
                    </p>
                  </div>
                </>
              )}
              decimalScale={2}
              value={getCartTotal(cart).toFixed(2)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </div>
          <div className="row justify-content-end">
            <button className="btn btn-warning" onClick={() => navigate('/payment')}>{t('subtotal.proceedToCheckoutBtn')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subtotal
