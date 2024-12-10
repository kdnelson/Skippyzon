import './Orders.scss'
import { useTranslation } from 'react-i18next'
import OrderItems from '../OrderItem/OrderItem.jsx'
import { useOrder } from '../../hooks/index.jsx'

const Orders = () => {
  const { t } = useTranslation()
  const { orders } = useOrder()
  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="row fs-2 fw-bold mt-3 mb-3">{t('orders.yourOrder')}</div>
            {orders.map(o => (
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
