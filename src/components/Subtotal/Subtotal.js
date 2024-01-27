import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useNavigate  } from "react-router-dom";
import { useCart } from '../../hooks/useCart';

const Subtotal = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal } = useCart();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart).toFixed(2)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

			<button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
