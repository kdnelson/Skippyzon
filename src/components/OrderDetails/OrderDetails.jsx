import './OrderDetails.scss'
import { useTranslation } from 'react-i18next'
import { useCart } from '../../hooks'

const OrderDetails = (props) => {
  const { t } = useTranslation()
  const { serialNumber, title, image, price, quantity} = props ?? {}
  const { addCartItem } = useCart()
  return (
    <div className="row fs-5 fw-normal">
      <div className="row">{title}</div>
      <div className="row">
        {t('orderdetails.price')}: ${price}
      </div>
      <div className="row">{t('orderdetails.quantity')}: {quantity}</div>
      <div className="col-6">
        <div className="row mt-2 mb-4 align-items-start">
          <button className="btn btn-dark orderDetails-button" type="submit" onClick={() => addCartItem(serialNumber, title, image, price)}>{t('orderdetails.addToCartBtn')}</button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
