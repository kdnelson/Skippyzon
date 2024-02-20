import './OrderItems.css'
import { useTranslation } from 'react-i18next'
import OrderDetails from '../OrderDetails/OrderDetails.js'
import CurrencyFormat from 'react-currency-format'
import { useCart } from '../../hooks'

const OrderItem = (props) => {
  const { t } = useTranslation()
  const { id, orderItems } = props ?? {}
  const { getPaymentAndTaxTotal } = useCart()
  return (
    <>
      <h4>{t('orderitems.orderId')}: {id}</h4>
      <CurrencyFormat renderText={(value) => (
        <h4>{t('orderitems.total')}: {value}</h4>
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
          rating={o.rating}
        />
      ))}
      <br />
    </>
  )
}

export default OrderItem
