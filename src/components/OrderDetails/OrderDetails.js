import './OrderDetails.css'
import { useTranslation } from 'react-i18next'
import { useCart } from '../../hooks/useCart'

const OrderDetails = (props) => {
  const { t } = useTranslation()
  const { serialNumber, title, image, price, quantity, rating } = props ?? {}
  const { addCartItem } = useCart()
  return (
    <div className="orderDetails">
      {title}
      <br />
      <p>
        {t('orderdetails.price')}:
        &nbsp;
        <small>$</small>
        {price}
      </p>
      {t('orderdetails.quantity')}: {quantity}
      <br />
      <button type="submit" onClick={() => addCartItem(serialNumber, title, image, price, rating)}>{t('orderdetails.addToCartBtn')}</button>
      <br />
      <br />
    </div>
  )
}

export default OrderDetails
