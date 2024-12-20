import './Orders.scss'
import { useTranslation } from 'react-i18next'
import OrderItems from '../OrderItem/OrderItem.jsx'
import { useOrder } from '../../hooks/index.jsx'

const Orders = () => {
  const { t } = useTranslation()
  const { order } = useOrder()
  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="row fs-2 fw-bold">{t('orders.yourOrder')}</div>
            {order.map(o => (
              <OrderItems
                key={o.id}
                id={o.id}
                orderItems={o.order}
              />
            ))}
        </div>
      </div>
  )
}

export default Orders
