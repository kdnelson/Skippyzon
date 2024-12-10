import './OrderItem.scss'
import { useTranslation } from 'react-i18next'
import OrderDetails from '../OrderDetails/OrderDetails.jsx'
import CurrencyFormat from 'react-currency-format'
import { useCart } from '../../hooks/index.jsx'

const OrderItem = (props) => {
  const { t } = useTranslation()
  const { id, orderItems } = props ?? {}
  const { getPaymentAndTaxTotal } = useCart()
  return (
    <>
      <div className="row fs-5 fw-bold">{t('orderitems.orderId')}: {id}</div>
      <CurrencyFormat renderText={(value) => (
        <div className="row fs-5 fw-bold">{t('orderitems.total')}: {value}</div>
      )}
          decimalScale={2}
          value={getPaymentAndTaxTotal(orderItems)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
      />
      <hr />
      {orderItems.map(o => (
        <OrderDetails
          key={o.id}
          serialNumber={o.serialNumber}
          title={o.title}
          image={o.image}
          price={o.price}
          quantity={o.quantity}
        />
      ))}
      <br />
    </>
  )
}

export default OrderItem
