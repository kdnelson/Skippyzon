import React from 'react'
import './OrderDetails.css'

const OrderDetails = (props) => {
  const { title, price } = props ?? {};
  return (
    <>
      {title}
      <br />
      Price: {price}
      <br />
    </>
  )
}

export default OrderDetails