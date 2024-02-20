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
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {t('subtotal.subTotal')} ({cart.length} {t('subtotal.items')}): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />{t('subtotal.thisOrderContainsAGift')}
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart).toFixed(2)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

			<button onClick={e => navigate('/payment')}>{t('subtotal.proceedToCheckoutBtn')}</button>
    </div>
  )
}

export default Subtotal
