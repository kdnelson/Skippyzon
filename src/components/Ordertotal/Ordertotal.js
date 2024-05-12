import './Ordertotal.css'
import { useTranslation } from 'react-i18next'
import CurrencyFormat from 'react-currency-format'
import { useCart, useOrder } from '../../hooks'

const Ordertotal = () => {
  const { t } = useTranslation()
  const { cart, getPaymentAndTaxTotal } = useCart()
  const { addOrder } = useOrder()

  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="card bg-body rounded ordertotal-background">
          <div className="card-body">
             <CurrencyFormat renderText={(value) => (
                <h3>{t('payment.orderTotal')}: {value}</h3>
              )}
                  decimalScale={2}
                  value={getPaymentAndTaxTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
          </div>
          <div className="row justify-content-end">
            <button className="btn btn-warning" onClick={() => addOrder(cart)}>{t('payment.buyNowBtn')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ordertotal
