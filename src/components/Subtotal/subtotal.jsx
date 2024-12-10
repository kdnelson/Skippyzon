import './Subtotal.scss'
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
        <div className="card h-100 bg-body rounded subtotal-card">
          <div className="card-body">
            <CurrencyFormat renderText={(value) => (
                <h4>{t('subtotal.subTotal')} ({cart.length} {t('subtotal.items')}): {value}</h4>
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
