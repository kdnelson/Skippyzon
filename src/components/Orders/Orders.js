import './Orders.css'
import { useTranslation } from 'react-i18next'
import OrderItems from './../OrderItems/OrderItems.js'
import { useOrder } from '../../hooks'

const Orders = () => {
  const { t } = useTranslation()
  const { orders } = useOrder()
  return (
			<div className='orders'>
				<h1>{t('orders.yourOrder')}</h1>
        <br />
        {orders.map(o => (
          <OrderItems
            key={o.id}
            id={o.id}
            orderItems={o.order}
          />
        ))}
			</div>
  )
}

export default Orders
