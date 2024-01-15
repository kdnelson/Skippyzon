import React from 'react';
import './Orders.css'
import OrderItems from "./../OrderItems/OrderItems.js";
import { useOrder } from '../../hooks/userOrder';

const Orders = () => {
    const { orders } = useOrder();
    return (
			<div className='orders'>
				<h1>Your Orders</h1>
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